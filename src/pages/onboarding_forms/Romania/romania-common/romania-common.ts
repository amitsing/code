import { Component, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { ApiServiceProvider } from '../../../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the RomaniaCommonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-romania-common',
  templateUrl: 'romania-common.html',
})
export class RomaniaCommonPage {

  employeeId: any;
  login_token: any;
  deviceId: any;
  isSubmited : boolean = false;
  fill_status: any;
  form_id: any;
  msg: any;
  loading: any;
  page_title : string;
  allData: any[];
  language: string[];
  selectedLanguage: string;
  showLangPopUp: boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _apiService : ApiServiceProvider,
    private storage : Storage,
    private _el : ElementRef,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
  ) {
    this.storage.get('employeeId').then(data => {
      this.employeeId = data;
      console.log(' employeeId== ', this.employeeId);
      this.storage.get('login_token').then((data) => {
        console.log('showOnBoard value is111==', data);
        this.login_token = data;
        this.storage.get('deviceId').then(data => {
          this.deviceId = data;
          this.getData();
        });
      });
    });

    let data = this.navParams.get('data');
    this.page_title = data.form_name;
    this.form_id = data.form_id;
  }

  hideLangPopUp(val){
    if(val=='show'){
      this.showLangPopUp=true;
    }else{
      this.showLangPopUp=false;
    }
  }

  getData() {
    this.commonLoader();
    let apikey = {
      "client_id":this._apiService.clientId,
      "employee_id":this.employeeId,
      "device":this._apiService.device,
      "device_id":this.deviceId,
      "app_version":this._apiService.appVersion,
      "form_id": this.form_id
    }
    this._apiService.RomaniaGetForm(apikey,this.login_token).subscribe((res)=>{
      this.loading.dismiss();
      if(res.success == '1') {
        console.log(res);
        this.allData = res.data;
        this.language = res.language;
        this.selectedLanguage = this.language[0];
        if(this.language.length>1){
          this.showLangPopUp=true;
        }else{
          this.showLangPopUp=false;
        }
      } else {
        this.apiMessage(res.message);
        this.navCtrl.pop();
      }
    },(err)=>{
      this.loading.dismiss();
      this.apiMessage(err);
      this.navCtrl.pop();
    })
  }

  submit() {
    this.commonLoader();
    let apikey = {
      "client_id":this._apiService.clientId,
      "employee_id":this.employeeId,
      "device":this._apiService.device,
      "device_id":this.deviceId,
      "app_version":this._apiService.appVersion,
      "form_id": this.form_id,
      "content_id": this.selectedLanguage,
      "data_dump":""
    }
    this._apiService.RomaniaSubmitForm(apikey,this.login_token).subscribe(res=>{
      this.loading.dismiss();
      if(res.success == '1') {
        this.apiMessage(res.message);
        this.navCtrl.pop();
      } else {
        this.apiMessage(res.message)
      }
    },err=>{
      this.loading.dismiss();
      this.apiMessage(err);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RomaniaCommonPage');
  }


  //Common Loader:
  commonLoader() {
    this.loading = this.loadingCtrl.create({
      enableBackdropDismiss: true,
      spinner: 'ios-small',
      content: 'Loading data...'
    });
    this.loading.present();
  }
  apiMessage(message) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 4000
    });
    toast.present();
  }

}

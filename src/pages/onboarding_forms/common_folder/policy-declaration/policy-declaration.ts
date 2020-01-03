import { Component, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { ApiServiceProvider } from '../../../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the PolicyDeclarationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-policy-declaration',
  templateUrl: 'policy-declaration.html',
})
export class PolicyDeclarationPage {

  employeeId: any;
  login_token: any;
  deviceId: any;
  isSubmited : boolean = false;
  fill_status: any;
  form_id: any;
  formData : any;
  msg: any;
  loading: any;
  allData: any;
  page_title: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _apiService : ApiServiceProvider,
    private storage : Storage,
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

    this.formData = this.navParams.get('data');
    this.page_title = this.formData.form_name;
    this.form_id = this.formData.form_id;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PolicyDeclarationPage');
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
    this._apiService.getPolicyFormDeclaration(apikey,this.login_token).subscribe((res)=>{
      this.loading.dismiss();
      if(res.success == '1') {
        console.log(res);
        this.allData = res.data;
      } else {
        this.apiMessage(res.message);
        this.navCtrl.pop();
      }
    },(err)=>{
      this.loading.dismiss();
      this.navCtrl.pop();
    })
  }

  submit() {
    let apikey = {
      client_id: this._apiService.clientId,
      employee_id: this.employeeId,
      device: this._apiService.device,
      device_id: this.deviceId,
      app_version: this._apiService.appVersion,
      form_id: this.form_id,
      data_dump: "",
      otp_id: ""
    };
    this._apiService
      .ChilleFormDeclarationOtp(apikey, this.login_token)
      .subscribe(res => {
        console.log(res);
        if(res.success == '1'){
          this.navCtrl.push('DeclarationotpPage',{"form_data":this.formData,"otpdata":res.otp_id,"msgdata":res.message});
        }
      });
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

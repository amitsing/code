import { Component, ViewChild, Testability, ElementRef, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { ApiServiceProvider } from '../../../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import { BackgroundVerification } from './response'
import { SendData } from './request'
/**
 * Generated class for the BackgroundVerificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-background-verification-usa',
  templateUrl: 'background-verification-usa.html',
})
export class BackgroundVerificationUSAPage {

  @ViewChild('form') form : ElementRef;
  @ViewChildren('dateTime') dateTime;

  border:string;
  employeeId: any;
  login_token: any;
  deviceId: any;
  isSubmited : boolean = false;
  formData:BackgroundVerification;
  fill_status: any;
  form_id: any;
  msg: any;
  loading: any;
  page_title : string;
  formD : any;
  yesNoOption = [
    {auto_id:'1',name:'Yes'},
    {auto_id:'0',name:'No'},
  ];

  partTimeOptions = [
    {auto_id:'1',name:'Part Time'},
    {auto_id:'0',name:'Full Time'},
  ];

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

      this.formD = this.navParams.get('data');
      this.page_title = this.formD.form_name;
      this.form_id = this.formD.form_id;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad BackgroundVerificationPage');
  }

  getData(){
    let url: string = "";
    if(this.formD.country_id == 8){
      url = "Onboarding_Forms_Apis/canada_forms/get_background_verification_data.php"
    } else {
      url = "Onboarding_Forms_Apis/usa_forms/get_background_verification_data.php"
    }
    this.commonLoader();
    let apikey = {
      "client_id":this._apiService.clientId,
      "employee_id":this.employeeId,
      "device":this._apiService.device,
      "device_id":this.deviceId,
      "app_version":this._apiService.appVersion,
      "form_id": this.form_id
    }
    this._apiService.us_canada(url,apikey,this.login_token).subscribe((res)=>{
      this.loading.dismiss();
      if(res.success == '1') {
        console.log(res.data);
        this.formData = new BackgroundVerification();
        console.log(this.formData);
        this.formData.initializeModal(res.data);
        this.fill_status = res.fill_status;
        this.msg = res.message;
        setTimeout(() => {
          const child = this.form.nativeElement as HTMLElement;
          const allChild = child.querySelectorAll('.inputDiv');
          // const dateTime = child.querySelectorAll('ion-datetime');
          console.log(allChild);
          if(allChild.length > 0 ) {
            this.addListeners(allChild);
          }
        }, 1000);
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

  addListeners(childs : NodeListOf<Element>) : void {
    let child = Array.from(childs);
    child.forEach(element => {
      element.addEventListener('click', ()=>{
        element.classList.add('touched');
      })
    });
  }

  submit() : void {
    this.isSubmited = true;
    setTimeout(() => {
      const parent = this.form.nativeElement as HTMLElement;
      const child = parent.querySelector('.error');
      if(!child) {
        console.log(this.formData);
        let data : SendData = new SendData(this.formData);
        console.log(JSON.stringify(data));
        this.finalSubmit(data,'submit');
      } else {
        const subChild = child.querySelector('input,textarea') as HTMLElement;
        if(subChild){
          subChild.scrollIntoView({ behavior: 'smooth', block: 'center', inline: "nearest"});
          setTimeout(() => {
            subChild.focus();            
          }, 800);
        } else {
          child.scrollIntoView({ behavior: 'smooth', block: 'center', inline: "nearest"});
        }
      }
    }, 500);
  }

  save(){
    let data : SendData = new SendData(this.formData);
    // console.log(JSON.stringify(data));
    console.log(data);
    this.finalSubmit(data,'save');
  }

  finalSubmit(data : SendData, formStatus:string){
    let url: string = "";
    if(this.formD.country_id == 8){
      url = "Onboarding_Forms_Apis/canada_forms/save_background_verification_data.php"
    } else {
      url = "Onboarding_Forms_Apis/usa_forms/save_background_verification_data.php"
    }
    this.commonLoader();
    let apikey = {
      "client_id":this._apiService.clientId,
      "employee_id":this.employeeId,
      "device":this._apiService.device,
      "device_id":this.deviceId,
      "app_version":this._apiService.appVersion,
      "form_id": this.form_id,
      "submit_type" : formStatus,
      "data" : data
    }
    this._apiService.us_canada(url,apikey,this.login_token).subscribe((res)=>{
      console.log(res);
      this.loading.dismiss();
      if(res.success == '1') {
        this.apiMessage(res.message);
        this.navCtrl.pop();
      } else {
        this.apiMessage(res.message);
      }
    },err=>{
      this.loading.dismiss();
      this.apiMessage(err);
    })
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

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, LoadingController, Platform, MenuController } from 'ionic-angular';
import { ApiServiceProvider } from '../../../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import { InAppBrowser, InAppBrowserEvent, InAppBrowserOptions } from '@ionic-native/in-app-browser';

/**
 * Generated class for the ChinadeclarationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chinadeclaration',
  templateUrl: 'chinadeclaration.html',
})
export class ChinadeclarationPage {
  j: number;
  i: number;
  msg: string;
  dumpdata:any;
  finalselect: string;
  nationalities: string;
  message_bottom: any;
  message_top: any;
  deviceId: any;
  previousdata: any;
  employeeId: any;
  login_token: any;
  loading:any;
  nDetails:any;
  fDetails:any
  constructor(private alertCtrl: AlertController, private platform: Platform, private menu: MenuController, public loadingCtrl: LoadingController,
    public toastCtrl: ToastController, private storage: Storage, private apiServices: ApiServiceProvider,
    public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser) {
      this.i=1;
      this.j=1;
      this.previousdata=this.navParams.get('data');
      this.nationalities='nationalities_no';
      this.finalselect='finalselect_no';
      this.storage.get('login_token').then((data) => { this.login_token = data; });
      this.storage.get('employeeId').then((data) => { this.employeeId = data; });
      this.get_dec();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChinadeclarationPage');
  }

  get_dec() {
 
    this.commonLoader();
    this.storage.get('deviceId').then(data => {
      this.deviceId = data;
      let apiKey = {
        "client_id": this.apiServices.clientId,
        "employee_id": this.employeeId,
        "device": this.apiServices.device,
        "device_id": this.deviceId,
        "app_version": this.apiServices.appVersion,
        "form_id":this.previousdata.form_id
      };
      this.apiServices.get_china_declaration(apiKey, this.login_token).subscribe(res => {
        console.log('tnc res==', res);
        this.loading.dismiss();
        if (res.success == 1) {
        //  this.alldata=res.data;
        this.message_top=res.content.message_top;
        this.message_bottom=res.content.message_bottom;
          console.log('succ');
          // this.navCtrl.pop();
          // console.log('succ1', this.allData[0]);

        } else {
          this.apiMessage(res.message);
        }

      }, (err) => {
        this.loading.dismiss();
        console.log('err== ', err);
        this.apiMessage(err);

      });

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
      duration: 3000
    });
    toast.present();
  }

  update(){
  

if(this.nationalities=='nationalities_yes' ){
  if(this.nDetails=='' || this.nDetails==undefined){
    this.i=2;
    this.j=1;
    this.msg='Please enter empty field.';
    this.apiMessage(this.msg);
    return false;
  } 
}
if(this.finalselect=='finalselect_yes' ){
   if(this.fDetails=='' || this.fDetails==undefined){
    this.i=1;
    this.j=3;
    this.msg='Please enter empty field.';
    this.apiMessage(this.msg);
    return false;
   } 
}



   this.gotosubmit();

  }

  change(e,value,index){
console.log("value",value);

if(index==1)
{
if(value=='' || value==undefined){
  this.i=2;
}
else{
  this.i=1;
}
}


  }

  change1(e,value,index){
    console.log("value111",value);
    if(index==2){
      if(value=='' || value==undefined){
        this.j=3;
      }
      else{
        this.j=1;
      }
    }
  }

  gotosubmit(){
  this.commonLoader();
  this.dumpdata={"nationalities":this.nationalities,"selected":this.finalselect,"Details1":this.nDetails,
"Details2":this.fDetails}
    this.storage.get('deviceId').then(data => {
      this.deviceId = data;
      let apiKey = {
        "client_id": this.apiServices.clientId,
        "employee_id": this.employeeId,
        "device": this.apiServices.device,
        "device_id": this.deviceId,
        "app_version": this.apiServices.appVersion,
        "data_dump":this.dumpdata,
        "otp_id":""
      };
      this.apiServices.get_declaration_otp(apiKey, this.login_token).subscribe(res => {
        console.log('tnc res==', res);
        this.loading.dismiss();
        // this.navCtrl.push('DeclarationotpPage');
        if (res.success == 1) {
          this.navCtrl.push('DeclarationotpPage',{"form_data":this.previousdata,"otpdata":res.otp_id});
          console.log('succ');
      

        } else {
          this.apiMessage(res.message);
        }

      }, (err) => {
        this.loading.dismiss();
        console.log('err== ', err);
        this.apiMessage(err);

      });

    });
  }

}

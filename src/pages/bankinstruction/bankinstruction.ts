import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController,LoadingController, AlertController, Platform } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-bankinstruction',
  templateUrl: 'bankinstruction.html',
})
export class BankinstructionPage {
  previousdata: any;
  employeeId: any;
  deviceId: any;
  login_token: any;
  allData: any;
  acountselection: any;
  loading:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController,
    private alertCtrl: AlertController, private platform: Platform, public toastCtrl: ToastController,
     private storage: Storage, private apiServices: ApiServiceProvider) {
      this.previousdata=this.navParams.get('previousdata');
       this.acountselection=this.navParams.get('acountselection');
      this.storage.get('employeeId').then(data => {
        this.employeeId = data;
        console.log(' employeeId== ', this.employeeId);
      });
      this.storage.get('deviceId').then(data => {
        this.deviceId = data;
      });

this.instruction();
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


  instruction() {
    this.commonLoader();
    this.storage.get('employeeId').then(data => {
      this.employeeId = data;
      console.log(' employeeId== ', this.employeeId);
    });
    this.storage.get('login_token').then((data) => {
      console.log('showOnBoard value is111==', data);
      this.login_token = data;
    })
    this.storage.get('deviceId').then(data => {
      this.deviceId = data;
      //  this.token='Q3owSXo3T05BVVJscHREVCsyeUtqZz09OjoWf4jZSksqJnff2wxdlZ7e'
      let apiKey = {

        "client_id": this.apiServices.clientId,
        "employee_id": this.employeeId,
        "device": this.apiServices.device,
        "device_id": this.deviceId,
        "app_version": this.apiServices.appVersion
      
      };
      this.apiServices.bankinstruction(apiKey, this.login_token)
        .subscribe((res) => {
          this.loading.dismiss();
          // this.apiServices.urllist(apiKey,this.token).then((result) => { 
          console.log('', res);
         
          if (res.success == 1) {
            this.allData = res.data;
      
            console.log('succ', this.allData);
          } else {
            this.allData=[];
            this.apiMessage(res.message);
          }

        }, (err) => {
          console.log('err== ', err);
          this.apiMessage(err);

        });

    });
  }
  apiMessage(message) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  alertfunction() {

    let alert = this.alertCtrl.create({
      // title: 'SIGNOUT!',
      message: 'Are you sure you want to submit',
      enableBackdropDismiss: true,
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
    
            // this.gothroughalertnextques();
          }
        },

        {
          text: 'Ok',
          handler: () => {
    
             this.submitinstruction();
          }
        },
      ]

    });

    alert.present();

  }

  submit(){
    this.alertfunction(); 
  }

  submitinstruction() {
    this.commonLoader();
    this.storage.get('employeeId').then(data => {
      this.employeeId = data;
      console.log(' employeeId== ', this.employeeId);
    });
    this.storage.get('login_token').then((data) => {
      console.log('showOnBoard value is111==', data);
      this.login_token = data;
    })
    this.storage.get('deviceId').then(data => {
      this.deviceId = data;
      //  this.token='Q3owSXo3T05BVVJscHREVCsyeUtqZz09OjoWf4jZSksqJnff2wxdlZ7e'
      let apiKey = {

        "client_id": this.apiServices.clientId,
        "employee_id": this.employeeId,
        "device": this.apiServices.device,
        "device_id": this.deviceId,
        "app_version": this.apiServices.appVersion,
        "selected_option":parseInt(this.acountselection)+1,
        "form_id": this.previousdata.form_id,
       
      };
      this.apiServices.submitinstruction(apiKey, this.login_token)
        .subscribe((res) => {
          this.loading.dismiss();
          // this.apiServices.urllist(apiKey,this.token).then((result) => { 
          console.log('', res);
         
          if (res.success == 1) {
           
            this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-3));
            console.log('succ', this.allData);
          } else {
            this.allData=[];
            this.apiMessage(res.message);
          }

        }, (err) => {
          console.log('err== ', err);
          this.apiMessage(err);

        });

    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad BankinstructionPage');
  }

}

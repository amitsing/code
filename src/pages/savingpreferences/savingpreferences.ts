import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, Platform } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the SavingpreferencesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-savingpreferences',
  templateUrl: 'savingpreferences.html',
})
export class SavingpreferencesPage {
  allData: any;
  deviceId: any;
  login_token: any;
  employeeId: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private alertCtrl: AlertController, private platform: Platform, public toastCtrl: ToastController, private storage: Storage, private apiServices: ApiServiceProvider) {

      this.storage.get('employeeId').then(data => {
        this.employeeId = data;
        console.log(' employeeId== ', this.employeeId);
      });
      this.storage.get('login_token').then((data) => {
        console.log('showOnBoard value is111==', data);
        this.login_token = data;
      })
      this.savingdatafun();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SavingpreferencesPage');
  }

  savingdatafun() {

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
        "client_id":this.apiServices.clientId,
        "employee_id":this.employeeId,
        "device":this.apiServices.device,
        "device_id":this.deviceId,
        "app_version":this.apiServices.appVersion,
      };
      this.apiServices.savingpreferences(apiKey, this.login_token)
        .subscribe((res) => {
          // this.apiServices.urllist(apiKey,this.token).then((result) => { 
          console.log('', res);
          this.allData = res.data;
          if (res.success == 1) {
            console.log('succ', this.allData);
          } else {
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


}

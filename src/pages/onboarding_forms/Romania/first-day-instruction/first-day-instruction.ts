import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { ApiServiceProvider } from '../../../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the FirstDayInstructionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-first-day-instruction',
  templateUrl: 'first-day-instruction.html',
})
export class FirstDayInstructionPage {

  employeeId: any;
  login_token: any;
  deviceId: any;
  formData: any;
  loading:any;

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
          // this.getData();
        });
      });
    });
    this.formData = this.navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstDayInstructionPage');
  }

  // submit() {
  //   this.navCtrl.pop();
  // }

  submit() {
    this.commonLoader();
    let apikey = {
      "client_id":this._apiService.clientId,
      "employee_id":this.employeeId,
      "device":this._apiService.device,
      "device_id":this.deviceId,
      "app_version":this._apiService.appVersion,
      "save_type" : 4, 
      "data_dump" : ''
      
    }
    this._apiService.RomaniaFirstDaySubmission(apikey,this.login_token).subscribe(res=>{
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

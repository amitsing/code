import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,LoadingController } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import {Validators, FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ImageViewerController } from 'ionic-img-viewer';


@IonicPage()
@Component({
  selector: 'page-accountstatment',
  templateUrl: 'accountstatment.html',
})
export class AccountstatmentPage {
  deviceId: any;
  numbers: any; msg: any;
  arrlength: number;
  totaldebit: any;
  totalcredit: any;
  login_token: any;
  discounting_token: any;
  employeeId: any;
  loading:any;
  constructor(private imageViewerCtrl: ImageViewerController, public toastCtrl: ToastController,
    private storage: Storage,public loadingCtrl: LoadingController,
    private apiServices: ApiServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
   
      this.storage.get('employeeId').then(data => {
        this.employeeId = data;
        console.log(' employeeId== ', this.employeeId);
      });

      this.storage.get('discounting_token').then(data => {
        this.discounting_token = data;
        console.log(' employeeId== ', this.employeeId);
      });
this.statement();
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

  statement() {
    this.commonLoader();
    this.storage.get('login_token').then((data) => {
      console.log('AlbumDetails value is111==', data);
      this.login_token = data;
      let apiKey = {
    
        "clientId": this.apiServices.clientId,
        "employeeId":this.employeeId,

      }
      console.log('AlbumDetails api apiKey==', apiKey);
      this.apiServices.statement(apiKey, this.discounting_token).subscribe(result => {
        console.log('AlbumDetails api res==', result);
        this.loading.dismiss();
        if (result.success == 1) {
          // this.redeemdata=result;
          this.totalcredit= result.totalEarned;
          this.totaldebit=result.redeemed;
          console.log('AlbumDetails api res==11111', result);
          if(this.numbers!=undefined){
            this.numbers=this.numbers.concat(result.history);
            // this.arrlength=this.numbers.length;
           }
           else{
             this.numbers = result.history;
            //  this.arrlength=this.numbers.length;
          
           }


        } else {
          this.loading.dismiss();
          this.msg=result.message;
          console.log('Success0:', result);
          this.apiMessage(result.message);
        }


      })

    })
  }



  apiMessage(message) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountstatmentPage');
    this.analyticApi();
  }

  analyticApi(){
    this.storage.get('employee_type').then((user) => {
      console.log('thoughtOftheDayApi value is111==', user);
      let user_Type = user;
    this.storage.get('deviceId').then(data => {
      this.deviceId = data;
      let apiKey = {
        "client_id": this.apiServices.clientId,
        "employee_id": this.employeeId,
        "device": this.apiServices.device,
        "device_id": this.deviceId,
        "app_version": this.apiServices.appVersion,
        "track_flag": "49", 
        "type" : "detail",
        "user_type" : user_Type,
      };
      this.apiServices.analyticApi(apiKey,this.login_token).subscribe(res=>{
        console.log(res);
      })
    });
  });
  }

}

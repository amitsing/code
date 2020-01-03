
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,LoadingController } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import {Validators, FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ImageViewerController } from 'ionic-img-viewer';


@IonicPage()
@Component({
  selector: 'page-leadershiptalk',
  templateUrl: 'leadershiptalk.html',
})
export class LeadershiptalkPage {

  msg: any;
  succ: any;
  leaderdata: any=[];
  flagdata: any;
  login_token: any;
  employeeId: any;
  deviceId: any;
  value: any='0';loading:any;
  myInfiniteScroll:any;
  infiniteScrollCalled:boolean=false;
  hideInfiniteScroll:boolean=false;
  
  constructor(private imageViewerCtrl: ImageViewerController, public toastCtrl: ToastController,
    private storage: Storage,public loadingCtrl: LoadingController,
    private apiServices: ApiServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    
    this.flagdata=this.navParams.get('data');
    
    this.storage.get('deviceId').then((data) => {
      console.log('showOnBoard value is111==', data);
      this.deviceId = data;
      this.storage.get('employeeId').then(data => {
        this.employeeId = data;
        console.log(' employeeId== ', this.employeeId);
        this.leadershiptalk()
      });
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
  
  leadershiptalk() {
    this.commonLoader();
    this.storage.get('login_token').then((data) => {
      console.log('AlbumDetails value is111==', data);
      this.login_token = data;
      let apiKey = {
    
        "client_id":this.apiServices.clientId,
        "employee_id":this.employeeId,
        "device":this.apiServices.device,
        "device_id":this.deviceId,
        "app_version":this.apiServices.appVersion,
        "val":this.value
      }
      console.log('AlbumDetails api apiKey==', apiKey);
      this.apiServices.leadershiptalk(apiKey, this.login_token).subscribe(result => {
        console.log('AlbumDetails api res==', result);
        this.loading.dismiss();
        if (result.success == 1) {
          this.succ=result.success;
          console.log('AlbumDetails api res1234==', result);

          console.log('album emp list==', result.data);

          if (this.leaderdata == undefined) {
            this.leaderdata = result.data;
          } else {
            this.leaderdata = this.leaderdata.concat(result.data);
            console.log('new emp album list==', result.data);
          }
          if (this.infiniteScrollCalled == true) {
            this.myInfiniteScroll.complete();
            this.infiniteScrollCalled = false;
          }
          console.log('this.formdata==', this.leaderdata);
          this.hideInfiniteScroll = false;
        } else {
          this.hideInfiniteScroll = true;
          this.succ=result.success;
          this.msg=result.message;
          if(this.value=='0'){
            this.apiMessage(result.message);
          }
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

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
    this.myInfiniteScroll = infiniteScroll;
    setTimeout(() => {
      this.infiniteScrollCalled = true;
      this.value = this.leaderdata.length;
      this.leadershiptalk()
      console.log('Async operation has ended');
      // this.myInfiniteScroll.complete();
    }, 500);
  }

  gotodetail(data){
    this.navCtrl.push('LeadershiptalkdetailPage',{'data':data});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeadershiptalkPage');
  }

}

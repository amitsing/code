import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,ToastController,LoadingController } from 'ionic-angular';

import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';


import { ImageViewerController } from 'ionic-img-viewer';
@IonicPage()
@Component({
  selector: 'page-notice-list',
  templateUrl: 'notice-list.html',
})
export class NoticeListPage {
  hideinfinite: number=0;

  deviceId:any;
  _imageViewerCtrl: ImageViewerController;
  login_token:any;
  employeeId:any;
  value:number=0;
  noticeListData: any;
  myinfinte: any;
  bgImageViewer:boolean=false;
  constructor(
    private storage:Storage,private apiServices:ApiServiceProvider,public toastCtrl: ToastController,
    private alertCtrl: AlertController,imageViewerCtrl: ImageViewerController,public loadingCtrl: LoadingController,
    public navCtrl: NavController, public navParams: NavParams) {
      this._imageViewerCtrl = imageViewerCtrl;

      this.storage.get('employeeId').then(data => {
        this.employeeId = data;
        console.log(' employeeId== ', this.employeeId);
      });
      this.storage.get('login_token').then((data) => {
        console.log('showOnBoard value is111==', data);
        this.login_token = data;
      })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticeListPage');
    this.getNoticeListFun();
  }
  getNoticeListFun(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();

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
      let apiKey = {
        "client_id":this.apiServices.clientId,
        "employee_id":this.employeeId,
        "device":this.apiServices.device,
        "device_id":this.deviceId,
        "app_version":this.apiServices.appVersion,
        "val":this.value
      };
      this.apiServices.noticeListApi(apiKey, this.login_token)
        .subscribe((res) => {
          console.log('notice List data==', res);
          if(res.success==1){
            if(this.noticeListData==undefined){
              this.noticeListData=res.data;
            }else{
              this.noticeListData.concat(res.data);
              this.myinfinte.complete();
              console.log('new data== ', this.noticeListData);
            }
            setTimeout(() => {
              loading.dismiss();
            }, 1000);

          }else{

            if(this.value==0){
              // this.msg=res.message;
              this.bgImageViewer = true;
            }

if(this.noticeListData==undefined ||this.noticeListData.length>0){
  // this.apiMessage(res.message);
  this.hideinfinite=1;
}else{
    let alert = this.alertCtrl.create({
              message: res.message,
              buttons: [
                {
                  text: 'Ok',
                  role: 'cancel',
                  handler: () => {
                    console.log('Cancel clicked');
                    this.navCtrl.pop();
                  }
                }
              ]
            });
            alert.present();
}
          

        
            setTimeout(() => {
              loading.dismiss();
            }, 1000);


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



  presentImage(myImage) {
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();
 
    setTimeout(() => imageViewer.dismiss(), 30000);
    imageViewer.onDidDismiss(() => console.log('Viewer dismissed'));
  }

  seeDetails(data){
    this.navCtrl.push('NoticeDetailsPage',{'data':data});
  }


  doInfinite(infiniteScroll) {
    this.myinfinte=infiniteScroll;
    console.log('Begin async operation');
    setTimeout(() => {
      this.value=this.noticeListData.length;
      this.getNoticeListFun();
     
    }, 500);
  }
}

import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Slides } from 'ionic-angular';

import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';


import { ImageViewerController } from 'ionic-img-viewer';

/**
 * Generated class for the LikeUsersListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-like-users-list',
  templateUrl: 'like-users-list.html',
})
export class LikeUsersListPage {
  pushkey: any;
  auto_id: any;
  previousePageData: any;
  previousePageDataFlag:any;
  deviceId: any;
  _imageViewerCtrl: ImageViewerController;
  login_token: any;
  employeeId: any;
  value: number = 0;
  likeUsersData: any;
  myinfinte:any;

  constructor(
    private storage: Storage, private apiServices: ApiServiceProvider,
    private alertCtrl: AlertController, imageViewerCtrl: ImageViewerController,
    public navCtrl: NavController, public navParams: NavParams) {
    this._imageViewerCtrl = imageViewerCtrl;

    this.storage.get('employeeId').then(data => {
      this.employeeId = data;
      console.log(' employeeId== ', this.employeeId);
    });
    this.storage.get('login_token').then((data) => {
      console.log('thoughtOftheDayApi value is111==', data);
      this.login_token = data;
    });

    this.previousePageData=this.navParams.get('data');
    console.log('previousePagedata==auto_id ',this.previousePageData.auto_id);
    this.pushkey=this.navParams.get('pushkey');
   

    this.previousePageDataFlag=this.navParams.get('flag');
    console.log('previousePagedata== ',this.previousePageDataFlag);
    
    if(this.previousePageDataFlag==31||this.previousePageDataFlag=='31'){
      this.previousePageData.auto_id=this.previousePageData.community_post_id;
    
    }

    if(this.previousePageDataFlag==1||this.previousePageDataFlag=='1'){
    if(this.pushkey==1){
      this.previousePageData.auto_id=this.previousePageData.id;
      console.log("puskkey",this.pushkey);
      }else{
        this.previousePageData.auto_id=this.previousePageData.auto_id;
        console.log("puskkey",this.pushkey);
      }
    }
    if(this.previousePageDataFlag==11||this.previousePageDataFlag=='11'){
      if(this.pushkey==1){
        this.previousePageData.auto_id=this.previousePageData.id;
        console.log("puskkey",this.pushkey);
        }else{
          this.previousePageData.auto_id=this.previousePageData.auto_id;
          console.log("puskkey",this.pushkey);
        }
      }


    if(this.previousePageDataFlag==41||this.previousePageDataFlag=='41'){
      if(this.pushkey==1){
        this.previousePageData.auto_id=this.previousePageData.id;
        console.log("puskkey",this.pushkey);
        }else{
          this.previousePageData.auto_id=this.previousePageData.auto_id;
          console.log("puskkey",this.pushkey);
        }
      }

    if(this.previousePageDataFlag==22||this.previousePageDataFlag=='22'){
      this.previousePageData.auto_id=this.previousePageData.refrence_id;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LikeUsersListPage');
    this.getlikeListFun();
  }

  getlikeListFun() {

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
        "client_id": this.apiServices.clientId,
        "employee_id": this.employeeId,
        "device": this.apiServices.device,
        "device_id": this.deviceId,
        "app_version": this.apiServices.appVersion,
        "val": this.value,
        "flag":this.previousePageDataFlag,
        "post_id":this.previousePageData.auto_id,


      };
      this.apiServices.userlikeListApi(apiKey, this.login_token)
        .subscribe((res) => {
          console.log('likeUsersData List res==', res);
          if (res.success == 1) {
            if (this.likeUsersData == undefined) {
              this.likeUsersData = res.data;
              console.log('likeUsersData List data==', this.likeUsersData);
            } else {
              this.likeUsersData =  this.likeUsersData.concat(res.data);
              console.log('new data== ', this.likeUsersData);
              this.myinfinte.complete();
            }
          } else {
            this.myinfinte.complete();
            let alert = this.alertCtrl.create({
              // title: 'Confirm purchase',
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


        })

    })



  }


  presentImage(myImage) {
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();

    setTimeout(() => imageViewer.dismiss(), 30000);
    imageViewer.onDidDismiss(() => console.log('Viewer dismissed'));
  }

  doInfinite(infiniteScroll) {
    this.myinfinte=infiniteScroll;
    console.log('Begin async operation');
    setTimeout(() => {
      this.value=this.likeUsersData.length;
      this.getlikeListFun();
     
    }, 500);
  }

}

import { Component } from '@angular/core';
import { ToastController,IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';

import { ImageViewerController } from 'ionic-img-viewer';
import { InAppBrowser,InAppBrowserEvent,InAppBrowserOptions } from '@ionic-native/in-app-browser';
@IonicPage({name:'CeoMessageePage'})
@Component({
  selector: 'page-ceo-messagee',
  templateUrl: 'ceo-messagee.html',
})
export class CeoMessageePage {
  _imageViewerCtrl: ImageViewerController;
  employeeId:any;
  allData:any;
  deviceId:any;
  ceoMessage:any;
  previousePageData:any;

  options : InAppBrowserOptions = {
    location : 'no',
    hidden : 'no',
    // clearcache : 'yes',
    // clearsessioncache : 'yes',
    zoom : 'yes',
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no',
    closebuttoncaption : 'Back',
    closebuttoncolor:'#f04141',
    disallowoverscroll : 'no',
    toolbar : 'yes',
    enableViewportScale : 'no',
    allowInlineMediaPlayback : 'no',
    presentationstyle : 'pagesheet',
    fullscreen : 'yes',
    footer:'yes',
    footercolor:'#939399',
   };
  constructor(private imageViewerCtrl: ImageViewerController,private iab: InAppBrowser,
    public navCtrl: NavController, public navParams: NavParams,
    public toastCtrl: ToastController,private storage:Storage,private apiServices:ApiServiceProvider,) {
      this.previousePageData=this.navParams.get('data');
      this.ceoMessage=this.previousePageData;
      console.log('this is previouse page data== ', this.previousePageData);
      console.log('previouse page data== ', this.previousePageData);
      this.storage.get('employeeId').then(data=>{
        this.employeeId=data;
       }) ;
       this._imageViewerCtrl = imageViewerCtrl;
  }

  // getCeoMessage(){
  //   let apiKey={
  //     "packageName": this.apiServices.packageName,
  //     "device": this.apiServices.device,
  //     "deviceId": this.deviceId,
  //     "appVersion":this.apiServices.appVersion,
  //     "clientId":this.apiServices.clientId,
  //     "employeeId":this.employeeId,
  //     "messageType":this.previousePageData.message_type,
  //     "postId":this.previousePageData.auto_id

  //   };
  //   console.log('login api key==', apiKey);
  //   this.apiServices.welcomeMessage(apiKey).then((result) => { 
  //     console.log('ceo message== ',result);
  //     this.allData=result;
  //     if(this.allData.success==1){
  //       let showingData=this.allData.data
  //       setTimeout(() => {
  //         this.ceoMessage=showingData;
  //     }, 1000);
         
  //     }else{
  //       this.apiMessage(this.allData.message);
  //     }
  //   }, (err) => { 
  //     console.log('ceoMessage err== ',err); 
  //     this.apiMessage(err);
  //     }); 

  // }
  
  // apiMessage(message) {
  //   const toast = this.toastCtrl.create({
  //     message: message,
  //     duration: 3000
  //   });
  //   toast.present();
  // }

  learningList() {
    this.navCtrl.setRoot('HomePage')
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad WelcomeScreenPage');
    // this.storage.get('deviceId').then(data=>{
    //   this.deviceId=data;
    //   this.getCeoMessage();
    //  })  
  }

  handleClick(event) {
    if (event.target.tagName == "A") {
      this.iab.create(event.target.href, "_system", this.options);
      return false;
    }
  }


}

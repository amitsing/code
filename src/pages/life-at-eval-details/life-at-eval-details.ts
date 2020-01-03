import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImageViewerController } from 'ionic-img-viewer';

import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import { InAppBrowser,InAppBrowserEvent,InAppBrowserOptions } from '@ionic-native/in-app-browser';
/**
 * Generated class for the LifeAtEvalDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-life-at-eval-details',
  templateUrl: 'life-at-eval-details.html',
})
export class LifeAtEvalDetailsPage {
  _imageViewerCtrl: ImageViewerController;
  previousePageData: any;
  comment:any='';
  showSendBtn:boolean=false;
  details:any;
  deviceId: any;
  employeeId: any;
  allData: any;
  employee_type: any;
  login_token: any;
  
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

  constructor(private storage:Storage,private apiServices:ApiServiceProvider,private iab: InAppBrowser,
    imageViewerCtrl: ImageViewerController,public navCtrl: NavController, public navParams: NavParams) {
    this._imageViewerCtrl = imageViewerCtrl;
    this.previousePageData=this.navParams.get('data');
    console.log('previousePageData', this.previousePageData);
    this.storage.get('login_token').then((data) => { this.login_token = data; });
    this.storage.get('employeeId').then((data) => { this.employeeId = data; });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LifeAtEvalDetailsPage');
    this.storage.get('showOnBoard').then((data)=>{
      console.log('showOnBoard value is111==',data );
      this.employee_type=data;
    });
    this.seeNewsdetails();
  }


  seeNewsdetails() { 
    this.storage.get('deviceId').then(data=>{
      this.deviceId=data;
      console.log(' deviceId== ',this.deviceId);
     
    let apiKey={

      "client_id":this.apiServices.clientId,
      "employee_id":this.employeeId,
      "device":this.apiServices.device,
      "device_id":this.deviceId,
      "app_version":this.apiServices.appVersion,
      "employee_type":this.employee_type,
      "news_id":this.previousePageData.auto_id
      

    };
    console.log('seeNewsdetails api key==', apiKey);
    this.apiServices.onboardnewsDetails(apiKey, this.login_token).subscribe(result => {
    console.log(' seeNewsdetails data response== ',result); 
    this.allData=result;
    if(this.allData.success==1){
    this.details=this.allData.data;
    }
    else{
      this.details=[];
  
      // this.apiMessage(this.allData.message);
    }
    
    }, (err) => { 
    console.log('optionalUpdate err== ',err); 
    // this.apiMessage(err);
  
    }); 

  });
    }

    


  commentDetect(ev, myComment){
    // console.log('comment==', myComment);
    this.comment=myComment;
    if(this.comment.trim().length>=1){
      this.showSendBtn=true;
      this.comment=myComment;
    }else{
      this.showSendBtn=false;
      this.comment='';
    }
  }

  handleClick(event) {
    if (event.target.tagName == "A") {
      this.iab.create(event.target.href, "_system", this.options);
      return false;
    }
  }


}

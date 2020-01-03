import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController,LoadingController, Platform } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import { ImageViewerController } from 'ionic-img-viewer';
import { InAppBrowser,InAppBrowserEvent,InAppBrowserOptions } from '@ionic-native/in-app-browser';
@IonicPage()
@Component({
  selector: 'page-leadershiptalkdetail',
  templateUrl: 'leadershiptalkdetail.html',
})
export class LeadershiptalkdetailPage {
  contentdata: any;
  auto_id: any;
  pushkey: any;
  thumbnail_image: any;
  title: any;
  @ViewChild('videoPlayer') videoplayer: ElementRef;
  allData: any;
  apiData: any;
  deviceId: any;
  login_token: any;
  employeeId: any;
  mediatype: any;
  about: any;
  userimage: any;
  designation: any;
  name: any;
  previousdata: any;
  loading:any;

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

  _imageViewerCtrl: ImageViewerController;
  constructor(public navCtrl: NavController, public navParams: NavParams,private imageViewerCtrl: ImageViewerController,
    private alertCtrl: AlertController, private platform: Platform, public toastCtrl: ToastController,private iab: InAppBrowser,
     private storage: Storage, private apiServices: ApiServiceProvider,public loadingCtrl: LoadingController) {
    this.previousdata=this.navParams.get('data');
    console.log('this.previousdata',this.previousdata);
    this.pushkey=this.navParams.get('pushkey');
    if(this.pushkey==1){
      this.auto_id=this.previousdata.id;
    }
    else{
      this.auto_id=this.previousdata.auto_id;
    }

    this._imageViewerCtrl = imageViewerCtrl;
    // this.name=this.previousdata.leader_name;
    // this.designation=this.previousdata.l_talk_title;
    // this.userimage=this.previousdata.media;
    // this.about=this.previousdata.content;
    // this.mediatype=this.previousdata.media_type;

    this.leaderdetail();
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


  leaderdetail() {
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

        "client_id":this.apiServices.clientId,
        "employee_id":this.employeeId,
        "device":this.apiServices.device,
        "device_id":this.deviceId,
        "app_version":this.apiServices.appVersion,
        // "val":this.value
        "flag":"9",
        "post_id":this.auto_id
      };
      this.apiServices.noticeDetailsApi(apiKey, this.login_token)
        .subscribe((res) => {
          this.loading.dismiss();
          console.log('', res);
     


          if (res.success == 1) {
              this.allData = res.data;
              this.contentdata=res.data[0];
              this.name=this.allData[0].leader_name;
              this.designation=this.allData[0].l_talk_title;
              this.userimage=this.allData[0].media;
              this.about=this.allData[0].content;
              this.mediatype=this.allData[0].media_type;
              this.title=this.allData[0].title;
              this.thumbnail_image=this.allData[0].thumbnail_image;

          } else {
           
              // this.msg=res.message
         
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

  pauseVideo(){
    if(this.mediatype=='2'){
      console.log('stopVideo called', this.videoplayer.nativeElement.paused);
      this.videoplayer.nativeElement.pause();
      console.log('stopVideo called', this.videoplayer.nativeElement.paused);
    }  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeadershiptalkdetailPage');
  }
  ionViewWillLeave(){
    this.pauseVideo();
  }
  presentImage(myImage) {
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();
    // setTimeout(() => imageViewer.dismiss(), 30000);
    imageViewer.onDidDismiss(() => console.log('Viewer dismissed'));
  }


  handleClick(event) {
    if (event.target.tagName == "A") {
      this.iab.create(event.target.href, "_system",this.options);
      return false;
    }
  }

}

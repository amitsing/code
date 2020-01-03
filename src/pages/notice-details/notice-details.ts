import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,LoadingController } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import { InAppBrowser,InAppBrowserEvent,InAppBrowserOptions } from '@ionic-native/in-app-browser';
/**
 * Generated class for the NoticeDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notice-details',
  templateUrl: 'notice-details.html',
})
export class NoticeDetailsPage {
  auto_id: any;
  pushkey: any;
  loading:any;
  deviceId:any;
  login_token:any;
  employeeId:any;
  previousePageData:any;
  noticeDetailsData: any=[];
  bgImage:string='../assets/imgs/Birthday.png';

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
  constructor(
    private storage:Storage,private apiServices:ApiServiceProvider,public loadingCtrl: LoadingController,
    private alertCtrl: AlertController,private iab: InAppBrowser,
    public navCtrl: NavController, public navParams: NavParams) {
      this.previousePageData=this.navParams.get('data');
      console.log('previousePageData== ', this.previousePageData);
      this.pushkey=this.navParams.get('pushkey');
      if(this.pushkey==1){
        this.auto_id=this.previousePageData.id;
      }
      else{
        this.auto_id=this.previousePageData.auto_id;
      }

      this.storage.get('employeeId').then(data => {
        this.employeeId = data;
        console.log(' employeeId== ', this.employeeId);
      });
      this.storage.get('login_token').then((data) => {
        console.log('showOnBoard value is111==', data);
        this.login_token = data;
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

handleClick(event) {
  if (event.target.tagName == "A") {
    this.iab.create(event.target.href, "_system",this.options);
    return false;
  }
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticeListPage');
    this.getNoticeListFun();
  }
  getNoticeListFun(){
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
      let apiKey = {
        "client_id":this.apiServices.clientId,
        "employee_id":this.employeeId,
        "device":this.apiServices.device,
        "device_id":this.deviceId,
        "app_version":this.apiServices.appVersion,
        // "val":this.value
        "flag":"7",
        "post_id":this.auto_id


      };
      this.apiServices.noticeDetailsApi(apiKey, this.login_token)
        .subscribe((res) => {
          console.log('notice List data==', res);
          if(res.success==1){
            this.noticeDetailsData=res.data[0];   
            console.log('noticeDetailsData ==', this.noticeDetailsData);
          }else{
            this.noticeDetailsData=[];
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

          this.loading.dismiss();

        })

      })



  }


}

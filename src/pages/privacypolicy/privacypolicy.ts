import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { InAppBrowser,InAppBrowserEvent,InAppBrowserOptions } from '@ionic-native/in-app-browser';
/**
 * Generated class for the PrivacypolicyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-privacypolicy',
  templateUrl: 'privacypolicy.html',
})
export class PrivacypolicyPage {

  policyData: any;
  loading: any;
  employeeId: any;
  loginToken: any;
  deviceID: any;
  public unregisterBackButtonAction: any;
  closeAppPopupShow:number=0;
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

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,private iab: InAppBrowser,
    private storage: Storage,private platform:Platform,
    private apiServices: ApiServiceProvider,
    private loadingCtrl:LoadingController,) {
      this.storage.get('employeeId').then(data=>{
        this.employeeId = data;
        this.storage.get('login_token').then(value=>{
          this.loginToken = value;
          this.storage.get('deviceId').then(device_Id=>{
            this.deviceID= device_Id;
            this.getPolicies();
          })
        });
      });
  }

  commonLoader(){
    this.loading= this.loadingCtrl.create({
        enableBackdropDismiss:true,
        spinner: 'ios-small',
        content: 'Loading data...'
      });
      this.loading.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PrivacypolicyPage');
    
  }

  getPolicies(){
    this.commonLoader();
    let apiKey = {
      "client_id":this.apiServices.clientId,
      "employee_id":this.employeeId,
      "device":this.apiServices.device,
      "device_id":this.deviceID,
      "app_version":this.apiServices.appVersion,
    };
    console.log('Contact HelpDesk Request:', apiKey);
    this.apiServices.getPrivacyPolicies(apiKey,this.loginToken)
        .subscribe((res)=>{
          console.log('privacy policies:', res);
          if(res.success==1){
            this.loading.dismiss();    
            this.policyData= res.data;          
          }else{
            this.loading.dismiss();
            console.log('Success1:', res);
          }
        },(err)=>{
          this.loading.dismiss();
          console.log('Error:', err);
        })      
  }

  handleClick(event) {
    if (event.target.tagName == "A") {
      this.iab.create(event.target.href, "_system", this.options);
      return false;
    }
  }

  ionViewWillEnter(){

    this.initializeBackButtonCustomHandler();
    }
   

  ionViewWillLeave() {
    this.unregisterBackButtonAction && this.unregisterBackButtonAction();
  }


  //Hardware Back Button

  initializeBackButtonCustomHandler(): void {
    let that = this;
    this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function (event) {
  
      // that.navCtrl.popToRoot();
      that.navCtrl.pop();
    }, 101); // Priority 101 will override back button handling (we set in app.component.ts) as it is bigger then priority 100 configured in app.component.ts file */
  }


}

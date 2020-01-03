import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController,LoadingController, Platform,MenuController } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import { InAppBrowser,InAppBrowserEvent,InAppBrowserOptions } from '@ionic-native/in-app-browser';
/**
 * Generated class for the TermsAndConditionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-terms-and-conditions',
  templateUrl: 'terms-and-conditions.html',
})
export class TermsAndConditionsPage {
  show_skip: any;
  profile_pic_upload: any;
  disagree_message: any;
  tanckey: any;
  tncData: any;
  employee_type: any;
  allData: any;
  login_token: any;
  showbutton:any=false;
  employeeId: any;
  deviceId: any;
  token: string;
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
   loading:any;
  constructor(private alertCtrl: AlertController, private platform: Platform,private menu: MenuController,public loadingCtrl: LoadingController, 
    public toastCtrl: ToastController, private storage: Storage, private apiServices: ApiServiceProvider,
    public navCtrl: NavController, public navParams: NavParams,private iab: InAppBrowser) {
    //  this.previousePageData=this.navParams.get('data');
    //  console.log('tnc previouse page data== ',this.previousePageData);
       this.profile_pic_upload=this.navParams.get('profile_pic_upload');

      this.storage.get('deviceId').then(data => {
        this.deviceId = data;
      });
      this.storage.get('login_token').then((data) => { this.login_token = data; });
      this.storage.get('employeeId').then((data) => { this.employeeId = data; });
      this.storage.get('showOnBoard').then((data)=>{
        console.log('showOnBoard value is111==',data );
        this.employee_type=data;
      });

  }

  ionViewWillEnter(){
    this.menu.swipeEnable(false);
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
  ionViewDidLoad() {
    console.log('ionViewDidLoad OnboardingFormsPage');
    this.seeTnc();
  }
  seeTnc(){
    this.commonLoader();
    this.storage.get('deviceId').then(data => {
      this.deviceId = data;
      //  this.token='Q3owSXo3T05BVVJscHREVCsyeUtqZz09OjoWf4jZSksqJnff2wxdlZ7e'
      let apiKey = {
        "client_id": this.apiServices.clientId,
        "employee_id": this.employeeId,
        "device": this.apiServices.device,
        "device_id": this.deviceId,
        "app_version": this.apiServices.appVersion,
        "user_type":this.employee_type
      };
      this.apiServices.tncApi(apiKey, this.login_token).subscribe(res => {
        console.log('tnc res==', res);
        this.loading.dismiss();
          if (res.success == 1) {
            this.allData = res.data;
            this.disagree_message=res.disagree_message;
          
            this.show_skip=res.show_skip;
            this.tanckey=this.allData[0].auto_id;
            // this.storage.set('tncView',this.tanckey);
            console.log('succ', this.allData);
            this.showbutton=true;
          } else {
            this.apiMessage(res.message);
          }

        }, (err) => {
          this.loading.dismiss();
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
  agree(){
    // this.navCtrl.push('TakeMobileNumberPage',{'tanckey':this.tanckey})   
    // this.submitTnc()
    
    this.navCtrl.push('TakeMobileNumberPage',{'tanckey':this.tanckey,'profilekey':'0','profile_pic_upload':this.profile_pic_upload,
  'show_skip':this.show_skip})
  }
  disagree(){
    let alert = this.alertCtrl.create({
      // title: 'Low battery',
      subTitle: this.disagree_message,
      buttons: ['OK']
    });
    alert.present();
  //   if(this.employee_type=='Employee')
  //  {
  //    let alert = this.alertCtrl.create({
     
  //      subTitle: 'Content of the app cannot be accessed until you provide the consent.',
  //      buttons: ['OK']
  //    });
  //    alert.present();
  //  }
  //  if(this.employee_type=='Guest')
  //  {
  //    let alert = this.alertCtrl.create({
    
  //      subTitle: ' You will not be able to complete joining formalities without agreeing to the consent form.',
  //      buttons: ['OK']
  //    });
  //    alert.present();
  //  }


  }

  // submitTnc(){
  //   this.storage.get('showOnBoard').then((data)=>{
  //     console.log('showOnBoard value is111==',data );
  //     this.employee_type=data;
  //   });
  //   this.storage.get('deviceId').then(data=>{
  //     this.deviceId=data;
  //     console.log(' deviceId== ',this.deviceId);
     
  //   let apiKey={
  //     "client_id":this.apiServices.clientId,
  //     "employee_id":this.employeeId,
  //     "device":this.apiServices.device,
  //     "device_id":this.deviceId,
  //     "app_version":this.apiServices.appVersion,
  //     "user_type":this.employee_type      
  //   };
  //   console.log('seeNewsdetails api key==', apiKey);
  //   this.apiServices.submitTncApi(apiKey, this.login_token).subscribe(result => {
  //   console.log(' seeNewsdetails data response== ',result); 
  //   this.tncData=result;
  //   if(this.tncData.success==1){

  //     this.navCtrl.push('AplicantwelcomePage');

  //     // this.navCtrl.push('TakeMobileNumberPage');

  //     this.storage.set('tncView',this.tncData.t_and_c_accept);
  //   }else{
  //     this.apiMessage(this.tncData.message);
  //   }
    
  //   }, (err) => { 
  //   console.log('optionalUpdate err== ',err); 
  //   // this.apiMessage(err);
  
  //   }); 

  // });
  // }

  handleClick(event) {
    if (event.target.tagName == "A") {
      this.iab.create(event.target.href, "_system", this.options);
      return false;
    }
  }

}




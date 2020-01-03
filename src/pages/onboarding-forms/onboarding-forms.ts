import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, Platform } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import { InAppBrowser,InAppBrowserEvent,InAppBrowserOptions } from '@ionic-native/in-app-browser';
@IonicPage()
@Component({
  selector: 'page-onboarding-forms',
  templateUrl: 'onboarding-forms.html',
})
export class OnboardingFormsPage {
  Response: any;
  SessionId: any;
  title: any;
  previousPageData: any;
  allData: any;
  login_token: any;
  employeeId: any;
  deviceId: any;
  token: string;



  ////
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
    footer:'no',
    footercolor:'#939399',
};
  
  constructor(private iab: InAppBrowser,private alertCtrl: AlertController, private platform: Platform, public toastCtrl: ToastController, private storage: Storage, private apiServices: ApiServiceProvider,
    public navCtrl: NavController, public navParams: NavParams) {

      this.storage.get('SessionId').then((data)=>{
        console.log('**SessionId==',data );
        this.SessionId=data}); 
      this.storage.get('Response').then((data)=>{
        console.log('login_token==',data );
        this.Response=data;
    
      });


      this.previousPageData=this.navParams.get('data');
      console.log('previousPageData', this.previousPageData);
         this.title=this.previousPageData.title;
      this.storage.get('employeeId').then(data => {
        this.employeeId = data;
        console.log(' employeeId== ', this.employeeId);
      });
      this.storage.get('deviceId').then(data => {
        this.deviceId = data;
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OnboardingFormsPage');
    // this.getOnBoardListData();
  }
  getOnBoardListData(){

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

        "client_id": this.apiServices.clientId,
        "employee_id": this.employeeId,
        "device": this.apiServices.device,
        "device_id": this.deviceId,
        "app_version": this.apiServices.appVersion,

      };
      this.apiServices.getformmenu(apiKey, this.login_token)
        .subscribe((res) => {
          // this.apiServices.urllist(apiKey,this.token).then((result) => { 
          console.log('', res);
         
          if (res.success == 1) {
            this.allData = res.data.form_group;
            console.log('succ', this.allData);
          } else {
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


  gotourllist(grpid, data) {
    console.log("this.grpid==", grpid);
    console.log("this.grpid==", data);
    if (data.status == "enable" || data.status == "complete") {
      if (grpid == "" || grpid == undefined) {
        //pass url in iframe page
        // this.URL=data.url;
        if (data.title == "Offer Letter") {
          // const browser = this.iab.create("https://benepik.in/reach/samladfslogin.php?deviceType=app&requestType=sso&device="+this.apiServices.device+"&device_id="+this.deviceId+"&appemail="+this.email+"",  '_blank', this.options);
          const browser = this.iab.create(data.url, "_blank", this.options);
        } else if (data.title == "Essential Details") {
          // const browser = this.iab.create(data.url,'_blank', this.options);
          this.storage.get("SessionId").then(data => {
            console.log("**SessionId==", data);
            this.SessionId = data;
          });
          this.storage.get("Response").then(data => {
            console.log("login_token==", data);
            this.Response = data;
          });
          // this.storage.get('SessionId').then((data)=>{
          //   console.log('SessionId==',data );
          //   this.SessionId=data;
          //   this.sessiionurl=this.url+'?sid='+this.SessionId+'&res='+this.Response;
          //   console.log('final url==',this.sessiionurl );
          //   this.showUrl(this.sessiionurl);
          // });
          console.log(
            `${data.url}?sid=${this.SessionId}&res=${encodeURIComponent(
              this.Response
            )}`
          );
          const browser = this.iab.create(
            `${data.url}?sid=${this.SessionId}&res=${encodeURIComponent(
              this.Response
            )}`,
            "_blank",
            this.options
          );
        } else if(data.url == 'romania_day1_instructions') {
          this.navCtrl.push('FirstDayInstructionPage',{'data':data});
        } else {
          this.navCtrl.push("GotonewPage", {
            data: data.url,
            title: data.title,
            group_name: data.group_name
          });
        }
      }  else {
        this.navCtrl.push("UrllistPage", { grpid: grpid, title: data.title });
      }
    }
    if (data.status == "disable") {
      this.alertfunction(data.message);
    }
  }

  alertfunction(msg) {
    let alert = this.alertCtrl.create({
      // title: 'SIGNOUT!',
      message: msg,
      enableBackdropDismiss: true,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            // this.signoutUserFun();
            // this.gothroughalertnextques();
          }
        },
      ]

    });

    alert.present();

  }

  ionViewWillEnter(){
    this.getOnBoardListData();
  }

}

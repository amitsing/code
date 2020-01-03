import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController,LoadingController, Platform } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html',
})
export class AlertPage {
  SessionId: any;
  title: any;
  arr:any;
  notification_id: any;
  allData: any;
  apiData: any;
  deviceId: any;
  login_token: any;
  employeeId: any;
  value: any='0';
  myInfiniteScroll:any;
  infiniteScrollCalled:boolean=false;
  hideInfiniteScroll:boolean=false;
  bgImageViewer:boolean=false;
  secondarr:any;
  alert121:any;
  loading:any;
  public unregisterBackButtonAction: any;
  closeAppPopupShow:number=0;
  constructor(public navCtrl: NavController, public navParams: NavParams,public events: Events,public loadingCtrl: LoadingController,
    private alertCtrl: AlertController, private platform: Platform, public toastCtrl: ToastController,
     private storage: Storage, private apiServices: ApiServiceProvider) {
      this.storage.get('SessionId').then((data)=>{
        console.log('SessionId==123',data );
        this.SessionId=data}); 

        this.arr=[{"day":'today',"data":[{'img':'imgdata','text':'this.is text','date':'2/2/2020'}]},
        {"day":'today',"data":[{'img':'imgdata1','text':'this.is text','date':'2/3/2020'}]},
        {"day":'yesterday',"data":[{'img':'imgdata2','text':'this.is text','date':'2/4/2020'}]}]
console.log('this.arr',this.arr);
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

  alertlist() {
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

        "client_id": this.apiServices.clientId,
        "employee_id": this.employeeId,
        "device": this.apiServices.device,
        "device_id": this.deviceId,
        "app_version": this.apiServices.appVersion,
        "value":this.value
      };
      this.apiServices.joineealert(apiKey, this.login_token)
        .subscribe((res) => {
          this.loading.dismiss();
          // this.apiServices.urllist(apiKey,this.token).then((result) => { 
          console.log('', res);
          this.apiData=res;
          // this.over_all_progress=this.apiData.this.apiData;
          if (res.success == 1) {
            // this.allData = res.data;
            // console.log('succ', this.allData);

            if(this.allData==undefined){
              this.allData = res.data;
            }else{
              this.allData= this.allData.concat(res.data);
              console.log('new album list==',res.data );
            }
                if(this.infiniteScrollCalled==true){
                  this.myInfiniteScroll.complete();
                  this.infiniteScrollCalled=false;
                }
            console.log('this.formdata==',this.allData);
          
            this.hideInfiniteScroll=false;

          } else {

            if(this.value=='0'){
              // this.msg=res.message;
              this.bgImageViewer = true;
            }

            this.hideInfiniteScroll=true;
            // this.apiMessage(res.message);
            if(this.allData.length!=0){
              this.apiMessage(res.message);
            }

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
  gotonext(axdata,data){
this.alertstatus();
this.notification_id=data.auto_id;
if(axdata=='ax'){

  // this.storage.get('SessionId').then((data)=>{
  //   console.log('SessionId==123',data );
  //   this.SessionId=data;
  //   this.events.publish('urldata', this.SessionId);
  // }); 
  // this.navCtrl.push('GotonewPage',{'data':data.url,'title':data.title});
  this.navCtrl.push('TesturlPage',{'data':data.url,'title':data.title});
}
if(axdata=='Policy'){
  this.navCtrl.push('UrllistPage',{'grpid':data.refrence_id,'title':data.title});
}
if(axdata=='OfferLetter' || axdata=='formGroup'){
  this.title={"title":data.title}
  this.navCtrl.push('OnboardingFormsPage',{'data':this.title});
}
if(axdata=='JoiningDetails'){
  this.navCtrl.push('JoiningDetailsPage');
}
  }

  alertstatus() {
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
        "notification_id": this.notification_id

      };
      this.apiServices.alertStatus(apiKey, this.login_token)
        .subscribe((res) => {
          // this.apiServices.urllist(apiKey,this.token).then((result) => { 
          console.log('', res);
          // this.apiData=res;
          // this.over_all_progress=this.apiData.this.apiData;
          if (res.success == 1) {
            // this.allData = res.data;
            console.log('succ11111111', res);

          } else {
            // this.apiMessage(res.message);
          }

        }, (err) => {
          console.log('err== ', err);
          this.apiMessage(err);

        });

    });
  }



  ionViewWillEnter(){
    this.value=0;
    this.allData=[];
    this.alertlist();
    this.initializeBackButtonCustomHandler();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertPage');
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
  this.myInfiniteScroll=infiniteScroll;
    setTimeout(() => {
      this.infiniteScrollCalled=true;
      this.value=this.apiData.lastId;
      this.alertlist();
      console.log('Async operation has ended');
      // this.myInfiniteScroll.complete();
    }, 500);
  }



      // ionViewWillEnter(){
 
      //   this.initializeBackButtonCustomHandler();
      // }
      
      
      showeAlert() {
        this.alert121 = this.alertCtrl.create({
          title: 'App termination',
          message: 'Do you want to close the app?',
          buttons: [{
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Application exit prevented!');
            }
          }, {
            text: 'Close App',
            handler: () => {
              this.platform.exitApp(); // Close this application
            }
          }]
        });
        this.alert121.present();
      }
      
      ionViewWillLeave() {
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
      }
      
      
      //Hardware Back Button
      
      initializeBackButtonCustomHandler(): void {
        let that = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function (event) {
          that.closeAppPopupShow++;
          if(that.closeAppPopupShow%2!=0){
            that.showeAlert();
          }else{
            that.alert121.dismiss();
          }
        }, 101); // Priority 101 will override back button handling (we set in app.component.ts) as it is bigger then priority 100 configured in app.component.ts file */
      }
    



}

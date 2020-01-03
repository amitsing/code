import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import { InAppBrowser , InAppBrowserOptions } from '@ionic-native/in-app-browser';


@IonicPage()
@Component({
  selector: 'page-joining-details',
  templateUrl: 'joining-details.html',
})
export class JoiningDetailsPage {

  options : InAppBrowserOptions = {
    location : 'yes',//Or 'no' 
    hidden : 'no', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls 
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only 
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only 
    toolbar : 'yes', //iOS only 
    enableViewportScale : 'no', //iOS only 
    allowInlineMediaPlayback : 'no',//iOS only 
    presentationstyle : 'pagesheet',//iOS only 
    fullscreen : 'yes',//Windows only   
    footer:'yes',
    footercolor:'#4d2748'

};
  deviceId:any;employeeId:any;
  allData:any;
  userJoinningDetails:any;

skeltonDiv:any=[{
  doj: "Your Joining Date is 10 June, 2019 at 9:30 AM",
  icon: "",
  link:""
},{
  doj: "Your Joining Date is 10 June, 2019 at 9:30 AM",
  icon: "",
  link:""
},{
  doj: "Your Joining Date is 10 June, 2019 at 9:30 AM",
  icon: "",
  link:""
},{
  doj: "Your Joining Date is 10 June, 2019 at 9:30 AM",
  icon: "",
  link:""
},{
  doj: "Your Joining Date is 10 June, 2019 at 9:30 AM",
  icon: "",
  link:""
}];
  login_token: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser,
    public toastCtrl: ToastController,private storage:Storage,private apiServices:ApiServiceProvider) {
      this.storage.get('deviceId').then(data=>{
        this.deviceId=data;
        console.log('login deviceId== ',this.deviceId)
       });

    this.storage.get('login_token').then((data) => { this.login_token = data; });
    
       this.storage.get('employeeId').then(data=>{
        this.employeeId=data;
        console.log('login employeeId== ',this.employeeId);
        this.getJoiningDetails();
       });
  }

  public directionGo(link){
    console.log('link--- ', link);
    // this.iab.create(link,'_blank',this.options);
    this.iab.create(link,'_system',this.options);
    // this.iab.create(link,'_system',{location:'no'});

}


handleClick(event) {
  if (event.target.tagName == "A") { 
    // open link using inappbrowser
   this.iab.create(event.target.href, "_system");
    return false;

  }
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad JoiningDetailsPage');
  }
  getJoiningDetails(){

  let apiKey={
      "client_id":this.apiServices.clientId,
      "employee_id":this.employeeId,
      "device_id":this.deviceId,
      "app_version":this.apiServices.appVersion,
      "device":this.apiServices.device
    };

console.log('home page api key==', apiKey);
this.apiServices.userjoinningDetails(apiKey,this.login_token).subscribe((result) => { 
  console.log('joinning details == ',result);
  this.allData=result;
  if(this.allData.success==1){

   let details=this.allData.data;
    setTimeout(() => {
      this.userJoinningDetails=details;
      console.log('joinning details == ',details);
    }, 1000);
  }else{
    this.apiMessage(this.allData.message);
    this.navCtrl.pop();
  }
});

  }

  apiMessage(message) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }


}

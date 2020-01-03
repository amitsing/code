import { Component } from '@angular/core';

import {AlertController, IonicPage, NavController, NavParams,ToastController,Platform } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-quiz-result',
  templateUrl: 'quiz-result.html',
})
export class QuizResultPage {
  alldata: any;
  percentage: any;
  login_token: any;
  employeeId:any;deviceId:any;
  allData:any;quizResult:any;
  quizId:any;previousePageData:any;
  alert121:any;
  public unregisterBackButtonAction: any;
  closeAppPopupShow:number=0;

  constructor(private alertCtrl:AlertController,private platform:Platform,public toastCtrl: ToastController,private storage:Storage,private apiServices:ApiServiceProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.previousePageData=this.navParams.get('data');
    console.log('***== ', this.previousePageData);
    this.percentage=this.navParams.get('percentage')
    console.log(' this.percentage== ',this.percentage);
    this.alldata=this.navParams.get('alldata');
    this.storage.get('employeeId').then(data=>{
      this.employeeId=data;
      console.log(' employeeId== ',this.employeeId);
     });

     this.storage.get('deviceId').then(data=>{
      this.deviceId=data;
      console.log(' deviceId== ',this.deviceId);
      this.getQuizResult();
     });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizResultPage');
  }
  ionViewWillEnter(){
    this.initializeBackButtonCustomHandler();
  }

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

  getQuizResult(){
    

    this.storage.get('login_token').then((data) => {
      console.log('AlbumDetails value is111==', data);
      this.login_token = data;

  let apiKey={
 
    "client_id":this.apiServices.clientId,
    "employee_id":this.employeeId,
    "device":this.apiServices.device,
    "device_id":this.deviceId,
    "app_version":this.apiServices.appVersion,
    "value":"0",
    "quiz_id":this.previousePageData

  };

  console.log('quizResult api key==', apiKey);
  this.apiServices.quizresult(apiKey,this.login_token).subscribe((result) => { 
  console.log('quizResult response== ',result); 
  this.allData=result;
  if(this.allData.success==1){
    let result=this.allData.data
    setTimeout(() => {
      this.quizResult=result;
      console.log('quizResult api res==', this.quizResult);
  }, 1000);

  }else{
    this.apiMessage(this.allData.message);
    this.navCtrl.popToRoot();
  }
});


    });


}

retakeQuiz(num){
  if(num==1){
    // this.navCtrl.popToRoot();
    this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-3));
  }else{

    this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-3));
  }
}

apiMessage(message) {
  const toast = this.toastCtrl.create({
    message: message,
    duration: 3000
  });
  toast.present();
}

go(){
  // this.navCtrl.pop();
  this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-3));
  // this.navCtrl.push('QuizsummaryPage',{'data':this.previousePageData});
}
}

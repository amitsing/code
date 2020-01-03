import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams,ToastController,Platform } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-quizsummary',
  templateUrl: 'quizsummary.html',
})
export class QuizsummaryPage {
  listkey: any;
  @ViewChild(Slides) slides: Slides;
  totallength: any;
  quizdata: any;
  login_token: any;
  previousePageData: any;
  deviceId: any;
  employeeId: any;showsubmit:boolean=false;
  currentIndex: boolean = false;
  constructor(private alertCtrl:AlertController,private platform:Platform,public toastCtrl: ToastController,private storage:Storage,private apiServices:ApiServiceProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.previousePageData=this.navParams.get('data');
    this.listkey=this.navParams.get('listkey');
    console.log('***== ', this.previousePageData);
 
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
 
  if(result.success==1){
    this.quizdata = result.data;


    this.totallength = this.quizdata.length;

  }else{
    this.apiMessage(result.message);
   
  }
});


    });


}

slideChanged() {
  this.currentIndex = this.slides.isEnd();
  console.log('Current index is', this.currentIndex);
  

}


apiMessage(message) {
  const toast = this.toastCtrl.create({
    message: message,
    duration: 3000
  });
  toast.present();
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizsummaryPage');
  }

  done(){
    if(this.listkey=='1'){
    this.navCtrl.pop();
    }
    else{
      this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-4));
    }
    
  }
}

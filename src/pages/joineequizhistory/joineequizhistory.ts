import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams,ToastController,Platform } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-joineequizhistory',
  templateUrl: 'joineequizhistory.html',
})
export class JoineequizhistoryPage {
  msg: any;
  success: any;
  employeetype: any;
  listkey: any;
  currentSlideIndex:any;
  @ViewChild(Slides) slides: Slides;
  totallength: any;
  quizdata: any;
  showindex:any;
  login_token: any;
  previousePageData: any;
  deviceId: any;
  employeeId: any;showsubmit:boolean=false;
  currentIndex: boolean;
  constructor(private alertCtrl:AlertController,private platform:Platform,
    public toastCtrl: ToastController,private storage:Storage,
    private apiServices:ApiServiceProvider,public navCtrl: NavController,
     public navParams: NavParams) {
      this.storage.get('employeeId').then(data=>{
        this.employeeId=data;
        console.log(' employeeId== ',this.employeeId);
       });
  
       this.storage.get('showOnBoard').then((data)=>{
        this.employeetype=data;
        console.log('showOnBoard value this.employeetype==',this.employeetype);
    
      });

       this.storage.get('deviceId').then(data=>{
        this.deviceId=data;
        console.log(' deviceId== ',this.deviceId);
        this.getQuizResult();
       });
  }

  getQuizResult(){
    

    this.storage.get('showOnBoard').then((data)=>{
      this.employeetype=data;
      console.log('showOnBoard value this.employeetype==',this.employeetype);
  
    });
    this.storage.get('login_token').then((data) => {
      console.log('AlbumDetails value is111==', data);
      this.login_token = data;

  let apiKey={
 
    "client_id":this.apiServices.clientId,
    "employee_id":this.employeeId,
    "device":this.apiServices.device,
    "device_id":this.deviceId,
    "app_version":this.apiServices.appVersion,
    // "value":"0",
    // "quiz_id":this.previousePageData
    "user_type":this.employeetype,
    

  };

  console.log('quizResult api key==', apiKey);
  this.apiServices.joineequizhistory(apiKey,this.login_token).subscribe((result) => { 
  console.log('quizResult response== ',result); 

  if(result.success==1){
    this.quizdata = result.data;
    this.totallength = this.quizdata.length;

    setTimeout(() => {
      
    this.slideChanged();
    }, 1000);

  }else{
    this.success=result.success;
    this.msg=result.message;
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
    this.navCtrl.pop();
    // if(this.listkey=='1'){
    // this.navCtrl.pop();
    // }
    // else{
    //   this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-4));
    // }
  }
    
    nextslide(j) {
      // if (this.radioAnswer[i].answer == '') {
      //   let msg = "please select any option";
      //   this.apiMessage(msg)
      //   return false;
      // }
      // this.submitButtonClick=false;
      // this.selectedanswerIndex=null;
      // this.greenind=null;
      // this.nexton=false;
      //   this.colorclass=null;
      // this.showsubmit=false;  
      //   this.checkenable=true;
      //   console.log("dcdfsdfsdf");
      
      // this.slides.lockSwipeToNext(false);
      this.currentSlideIndex = this.slides.getActiveIndex();
      console.log('Current index is123', this.currentIndex);
      this.showindex = this.currentSlideIndex + 1;
      this.slides.slideTo(this.showindex);
      if (this.slides.isEnd() == true) {
        this.showsubmit = true;
      }
      // this.slides.lockSwipeToNext(true);
      // this.slides.lockSwipeToPrev(true);
    
    
    
    
    }



  


  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad JoineequizhistoryPage');
  // }

}

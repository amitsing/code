
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, Platform, ViewController } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-newquizquestion',
  templateUrl: 'newquizquestion.html',
})
export class NewquizquestionPage {
  alldata: any;
  percentage: any;
  timetaken: number;
  quiztimining: any;
  quiz_type: any;
  totallength: any;quizansarray:any=[];
  @ViewChild(Slides) slides: Slides;
  timesinsec: number;currentSlideIndex:any;
  deviceId: any;  index: number;
  optionid: any;currentIndex: boolean = false;
  login_token: any;showindex:any;
  employeeId: any; allqid: any;
  quizid: any;timer: any;questionarray: any;
  quizdata:any;remainingTime: number;displayTime: string;displayTime1: string;
  dummyarray = [];showsubmit:boolean=false;
  newarray = [];
  colorclass: any;
  checkenable: boolean = true;
  checkesubmit: boolean = true;
  duration: any;time: number;runTimer: boolean;hasFinished: boolean; hasStarted: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    private alertCtrl: AlertController, private platform: Platform,
    public toastCtrl: ToastController, private storage: Storage,
    private apiServices: ApiServiceProvider) {
      this.quiz_type=this.navParams.get('quiz_type');
      this.quiztimining=this.navParams.get('quiztimining');
      var today = new Date();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    this.quizid=this.navParams.get('qid');
    this.quizlist();
  }
  quizlist() {
    this.storage.get('employeeId').then(data => {
      this.employeeId = data;
    });
    this.storage.get('login_token').then((data) => {
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
        "quiz_id":this.quizid
      };
      this.apiServices.quizdetail(apiKey, this.login_token)
        .subscribe((res) => {
          console.log('', res);
          this.swipe1()
          if (res.success == 1) {
            this.quizdata = res.data;
            this.totallength = this.quizdata.length;
            if(this.totallength==1){
              this.showsubmit=true;
            }
            for(let x=0;x<this.totallength; x++){
              this.quizansarray[x]={"question_id":this.quizdata[x].auto_id,"time_taken":'',"answer_id":''}
            }
            if(this.quiz_type=='3'){
              this.timesinsec= this.quizdata[0].question_duration
              this.mytimerfunction(this.timesinsec)
            }
            if(this.quiz_type=='2'){
              this.timesinsec= this.quiztimining;
              this.mytimerfunction(this.timesinsec)
            }
            // this.timesinsec=20;
            // this.mytimerfunction(this.timesinsec)
         
          } else {
            this.apiMessage(res.message);
          }

        }, (err) => {
          console.log('err== ', err);
          // this.apiMessage(err);

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

   ///////timer finction ////
  /////timer///
  /* Initialize and setup the time for question */

  mytimerfunction(quizduration) {
    // this.CommonLoader();
    this.duration = parseInt(quizduration);
    console.log("dur", this.duration);
    this.initTimer(this.duration);
    setTimeout(() => {
      this.startTimer();
      // this.loading.dismiss();
    }, 1000)
  }

  initTimer(duration) {
    // Pomodoro is usually for 25 minutes
    // alert("duration")
    // alert(this.duration)
    // this.time = this.timeInSeconds;
    this.time = this.duration;
    this.runTimer = false;
    this.hasStarted = false;
    this.hasFinished = false;
    // this.remainingTime = this.timeInSeconds;
    this.remainingTime = this.duration;

    this.displayTime = this.getSecondsAsDigitalClock(this.remainingTime);
    // this. startTimer(); 
  }
  startTimer() {
    this.runTimer = true;
    this.hasStarted = true;
    this.timerTick();
  }
  pauseTimer() {

    this.runTimer = false;
  }
  resumeTimer() {
    this.startTimer();
  }

  timerTick() {
    this.timer = setTimeout(() => {

      if (!this.runTimer) { return; }
      this.remainingTime--;
      this.displayTime = this.getSecondsAsDigitalClock(this.remainingTime);
      console.log("final time",this.displayTime)
      if (this.remainingTime > 0) {
        this.timerTick();
      }
      else {
        this.hasFinished = true;
        console.log('end');
        if(this.quiz_type=='3'){
          this.currentIndex = this.slides.isEnd();
          if(this.currentIndex==true)
          {
            this.submit();
          }else{
            this.nextslide(this.currentSlideIndex);
          }
          
        }
        if(this.quiz_type=='2'){
      this.submit();
        }
    
      }
    }, 1000);
  }

  getSecondsAsDigitalClock(inputSeconds: number) {

    var sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num;
    // - (hours * 3600) - (minutes * 60);
    var hoursString = '';
    var minutesString = '';
    var secondsString = '';
    // hoursString = (hours < 10) ? "0" + hours : hours.toString();
    // minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
    secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
    return secondsString;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewquizquestionPage');
  }
  optiondata(i, optidd, qid, j,duration) {
    this.checkenable = false;
    this.colorclass = i;
    this.optionid = optidd;
    this.index = parseInt(j);
    if (this.currentIndex == true) {
      this.checkesubmit = false;
    }
    if(this.quiz_type=='2'){
      this.quizansarray[this.index] = { "question_id": qid, "answer_id": optidd,"time_taken":this.quiztimining };
    }
    if(this.quiz_type=='3'){
      this.timetaken=parseInt(duration)-parseInt(this.displayTime)
      this.quizansarray[this.index] = { "question_id": qid, "answer_id": optidd,"time_taken": this.timetaken};
    }
  }

  slideChanged() {
    this.currentIndex = this.slides.isEnd();
  }

  swipe1() {
    this.slides.lockSwipeToNext(true)
    this.currentSlideIndex = this.slides.getActiveIndex();
  }

  nextslide(j) {
  
      this.colorclass=null;
      this.checkenable=true;

    this.slides.lockSwipeToNext(false);
    this.currentSlideIndex = this.slides.getActiveIndex();

    this.showindex = this.currentSlideIndex + 1;
    this.slides.slideTo(this.showindex);
    if (this.slides.isEnd() == true) {
      this.showsubmit = true;
    }
    this.slides.lockSwipeToNext(true);
    this.slides.lockSwipeToPrev(true);
    if(this.quiz_type=='3'){
  
      this.timesinsec= this.quizdata[j+1].question_duration;
  
      this.mytimerfunction(this.timesinsec)
    }



  }
  
  submit() {
    this.pauseTimer();
    this.storage.get('employeeId').then(data => {
      this.employeeId = data;
     
    });
    this.storage.get('login_token').then((data) => {
  
      this.login_token = data;
    })
    this.storage.get('deviceId').then(data => {
      this.deviceId = data;
      let apiKey = {
  
        "client_id": this.apiServices.clientId,
        "employee_id":this.employeeId,
        "device":this.apiServices.device,
        "device_id": this.deviceId,
        "app_version":this.apiServices.appVersion,
        "quiz_id":this.quizid,
        "quiz_answer": this.quizansarray


      };
      this.apiServices.submitquiz(apiKey, this.login_token)
        .subscribe((res) => {
          console.log('', res);
         
          if (res.success == 1) {
            this.alldata=res;
            this.percentage=res.percentage;
            this.alertfunction()
            console.log('sub', res);
          } else {
           
            this.apiMessage(res.message);
          }

        }, (err) => {
          console.log('err== ', err);
          this.apiMessage(err);

        });

    });
  }

  ionViewWillLeave(){
    console.log('Leaving Sign in Page');
    var today = new Date();
    var time1 = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log('time1',time1);
  } 

  alertfunction() {

    let alert = this.alertCtrl.create({
      // title: 'SIGNOUT!',
      message: 'Quiz Submited go to see answer',
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
      this.navCtrl.push('QuizResultPage',{'data':this.quizid,'percentage':this.percentage,'alldata':this.alldata});
            // this.gothroughalertnextques();
          }
        },
      ]

    });

    alert.present();

  }

  goback(){
    this.navCtrl.pop();
    this.pauseTimer();
  
  }
}

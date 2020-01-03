import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, Platform, ViewController } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-joineequizquestion',
  templateUrl: 'joineequizquestion.html',
})
export class JoineequizquestionPage {
  outofvalue: number;
  resdata: any;
  rewardsapplicable: any;
  total_percent: any;
  total_question: any;
  total_point: any;
  total_correct_answer: any;
  total_attempted: any;
  reward_earned: any;
  msg: any;
  success: any;
  greenind: any;
  getoptid: any;
  j: any;
  nexton:boolean=false;
  selectedanswer: any;
  right_ans_id: any=-1;
  questionid: any;
  employeetype: any;
  alldata: any;
  greenkar:boolean=false;
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
  

  submitButtonClick:boolean=false;
  selectedanswerIndex:any;
  tempRightAnswer:any;
  image: any;

  alert121:any;
  public unregisterBackButtonAction: any;
  closeAppPopupShow:number=0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    private alertCtrl: AlertController, private platform: Platform,
    public toastCtrl: ToastController, private storage: Storage,
    private apiServices: ApiServiceProvider) {
      this.storage.get('showOnBoard').then((data)=>{
        this.employeetype=data;
        console.log('showOnBoard value this.employeetype==',this.employeetype);
  
      });
      this.rewardsapplicable=this.navParams.get('rewardsapplicable');
      this.reward_earned=this.navParams.get('reward_earned');
      console.log('reward_earned==',this.rewardsapplicable);
      if(this.reward_earned!=undefined){
      
this.total_attempted=this.reward_earned.total_attempted;
this.total_correct_answer=this.reward_earned.total_correct_answer;
this.total_point=this.reward_earned.total_point;
this.total_question=this.reward_earned.total_question;
this.outofvalue=this.total_question-this.total_attempted;  
this.total_percent=this.reward_earned.total_percent;

      }

      this.quizdetail()
  }
  quizdetail() {
    this.storage.get('showOnBoard').then((data)=>{
      this.employeetype=data;
      console.log('showOnBoard value this.employeetype==',this.employeetype);

    });

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
        "user_type":this.employeetype
      };
      this.apiServices.joineequizdetail(apiKey, this.login_token)
        .subscribe((res) => {
          console.log('', res);
          this.swipe1()
          if (res.success == 1) {
            this.quizdata = res.data;
            this.totallength = this.quizdata.length;
            // if(this.totallength==1){

            //   this.showsubmit=true;
            // }
            console.log('this.allData', this.quizdata);
            console.log('this.quizansarray', this.quizansarray);
          }
          if(res.success == 0){
            console.log(res);
            console.log("xdfgsdfgh",res.background_image);
            this.image = res.background_image;
           
            // this.success=res.success;
            this.msg=res.message;
            this.navCtrl.push('QuizCompleteStatusPage');
            // this.apiMessage(res.message);
          }
          
          
          // else {
          //   this.success=res.success;
          //   this.msg=res.message;
          //   this.apiMessage(res.message);
          // }

        }, (err) => {
          console.log('err== ', err);
          // this.apiMessage(err);

        });

    });
  }

  optiondata(i, optidd, qid, j,duration) {
      if(this.totallength==1){
              this.showsubmit=true;
            }

if(this.nexton==true){

}
else{


    this.tempRightAnswer=this.quizdata[j].right_ans_id;

    this.checkenable = false;
    this.showsubmit=true;
    this.colorclass = i;
this.j=j;
    this.selectedanswerIndex=i; //showing option index

    this.optionid = optidd;
    this.questionid=qid;
    this.index = parseInt(j);
    if (this.currentIndex == true) {
      this.checkesubmit = false;
    }
   
  }


// this.quizansarray[this.index] = { "question_id": qid, "answer_id": optidd,"time_taken": };
    console.log('Current index this.quizansarray',this.quizansarray);
  }

quizsubmit(){


  this.storage.get('showOnBoard').then((data)=>{
    this.employeetype=data;
    console.log('showOnBoard value this.employeetype==',this.employeetype);

  });

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
      "user_type":this.employeetype,
      "question_id":this.questionid,
      "ans_id":this.optionid

    };
    this.apiServices.joineequizsubmit(apiKey, this.login_token)
      .subscribe((res) => {
        console.log('', res);
        // this.swipe1()
        if (res.success == 1) {
          this.resdata=res.data;
          console.log("rewardsapplicable submit1111",res.data);
          console.log("this.resdata.reward_applicable submit",this.resdata.reward_applicable);
          this.rewardsapplicable=this.resdata.reward_applicable;

          console.log("rewardsapplicable submit",this.rewardsapplicable);
          this.reward_earned=res.data.reward_earned;
          if(this.reward_earned!=undefined){
            this.total_attempted=this.reward_earned.total_attempted;
            this.total_correct_answer=this.reward_earned.total_correct_answer;
            this.total_point=this.reward_earned.total_point;
            this.total_question=this.reward_earned.total_question;
            this.total_percent=this.reward_earned.total_percent;
            this.outofvalue=this.total_question-this.total_attempted;
                  }

          // this.quizdata = res.data;
          // if(this.totallength==1){
          //   this.showsubmit=true;
          // }


          // this.showsubmit=false;
          // this.colorclass = '';
          // this.right_ans_id=this.quizdata.right_ans_id;
          // this.selectedanswer=this.optionid;
          // console.log('this.right_ans_id', this.right_ans_id);
          // console.log('this.allData', this.quizdata);
          // console.log('this.selectedanswer', this.selectedanswer);

          this.right_ans_id= this.tempRightAnswer;
          this.submitButtonClick=true;
          console.log("greeen",this.right_ans_id);
          console.log("this.selectedanswerIndex",this.selectedanswerIndex);
          if(this.selectedanswerIndex!=this.right_ans_id){
            console.log("this.selectedanswerIndex11111111",this.selectedanswerIndex);
            console.log("this.quizdata[this.j].option.length",this.quizdata[this.j].option.length);
            this.getoptid=this.quizdata[this.j].option;
            for(let i=0;i<this.quizdata[this.j].option.length;i++){
              console.log("this.selectedanswerIndex11111112222221",this.selectedanswerIndex);
          if(this.right_ans_id==this.getoptid[i].option_id){
            this.greenind=i;
            console.log("greeen123",this.greenind);
          }
            }
       
          this.currentSlideIndex = this.slides.getActiveIndex();
          console.log('Current index is123', this.currentIndex);
          if (this.slides.isEnd() == true) {
            // this.showsubmit = true;
            // this.navCtrl.pop();
        this.navCtrl.push('QuizCompleteStatusPage',{'image':'congratulations_temporaryimage.png'});

            // this.navCtrl.push('QuizreviewPage',{'image':'congratulations_temporaryimage.png'});
          }

          this.nexton=true;
          }

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


swipe1() {
  this.slides.lockSwipeToNext(true);
  this.currentSlideIndex = this.slides.getActiveIndex();
  console.log('Current index isswipe', this.currentSlideIndex);
}

nextslide(j) {
  // if (this.radioAnswer[i].answer == '') {
  //   let msg = "please select any option";
  //   this.apiMessage(msg)
  //   return false;
  // }
  this.submitButtonClick=false;
  this.selectedanswerIndex=null;
  this.greenind=null;
  this.nexton=false;
    this.colorclass=null;
  this.showsubmit=false;  
    this.checkenable=true;
    console.log("dcdfsdfsdf");
  
  this.slides.lockSwipeToNext(false);
  this.currentSlideIndex = this.slides.getActiveIndex();
  console.log('Current index is123', this.currentIndex);
  this.showindex = this.currentSlideIndex + 1;
  this.slides.slideTo(this.showindex);
  if (this.slides.isEnd() == true) {
    this.showsubmit = true;
  }
  this.slides.lockSwipeToNext(true);
  this.slides.lockSwipeToPrev(true);




}
goTohistory()
{
  this.navCtrl.push('JoineequizhistoryPage');
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad JoineequizquestionPage');
  }

  gotoinstruction(index){
    // this.reward_earned='';
    this.showsubmit=false;
    console.log('index',index);
    this.navCtrl.push('JoineequizinstructionPage',{'index':index,'instkey':1});
    
  }



  ionViewWillEnter(){
 
    this.initializeBackButtonCustomHandler();
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
  
  
  //Hardware Back Button
  
  initializeBackButtonCustomHandler(): void {
    let that = this;
    this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function (event) {
      that.closeAppPopupShow++;
      if(that.closeAppPopupShow%2!=0){
        // that.alert121.dismiss();
        // that.showeAlert();
      }else{
        // that.alert121.dismiss();
      }
    }, 101); // Priority 101 will override back button handling (we set in app.component.ts) as it is bigger then priority 100 configured in app.component.ts file */
  }

  goTohome(){
    this.navCtrl.popToRoot();
  }
}

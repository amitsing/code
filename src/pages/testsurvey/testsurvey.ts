import { Component, ElementRef, ViewChild, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController,ToastController } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import { Slides } from 'ionic-angular';
import { Events } from 'ionic-angular';
/**
 * Generated class for the TestsurveyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-testsurvey',
  templateUrl: 'testsurvey.html',
})
export class TestsurveyPage {
  recruitcheck: any;
  pushkey: any;
  previousepageData: any;
  surveyid: any;
  employeeId: any;
  deviceId: any;  msg: any="";
  employeetype: any;
  login_token: any;
  survey_data:any;
  title: any;
  recarray:any={};
  totalFeedbackQuestion: number;
  leftSideRangeIcon: string = 'assets/img/sad_icon.png';
  rightSideRangeIcon: string='assets/img/sad_icon.png';
  @ViewChild('myInput') myInput: ElementRef;
  veryHappyEmoji: string;
  happyEmoji: string;val:number;
  normalEmoji: string;
  sadEmoji: string;
  userImage: string; changeQuestionIndex: number; myOption: string; outlineEmojiIcons: any;
  HeaderClick: number = 1;
  headerClassName: string;
  userName: string;
  recurementQuestions:any=[];
  clientid: any;
  device: any;
  successVal: number=0;
  comment: string;
  ansSelected:number=0; //next and submit button disable
  // myAnswerForfeedback=[];
  myAnswerForfeedback=[{"questionId":"","questionType":"","optionId":"", "tempRangeVal":"", "checkboxAnswer":[], "tempStar":[], "answer":"","submitted":false}];
  feedBackId: any;
  loading:any;
  emptyStar: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public events: Events,
    private alertCtrl: AlertController,private zone:NgZone,private toastCtrl:ToastController,
     private storage: Storage,private loadingCtrl:LoadingController,
    private apiServices: ApiServiceProvider) {
    
 this.changeQuestionIndex=0;

      this.emptyStar=[{"status":false},{"status":false},{"status":false},{"status":false},{"status":false}];
    
      this.previousepageData = this.navParams.get('allData');
      console.log(' previousepageData== ', this.previousepageData);
      this.recruitcheck=this.navParams.get('recruitcheck');
      console.log('this.recruitcheck',this.recruitcheck)
      // this.surveyid = this.navParams.get('surveyid');
      this.pushkey=this.navParams.get('pushkey');
      if(this.pushkey==1){
        this.surveyid=this.previousepageData.id;
      }
      else{
        this.surveyid = this.navParams.get('surveyid');
      }

    this.storage.get('employeeId').then(data => {
      this.employeeId = data;
      console.log(' employeeId== ', this.employeeId);
    });
    this.storage.get('deviceId').then(data => {
      this.deviceId = data;
    });


    // this.storage.get('showOnBoard').then((data)=>{
    //   this.employeetype=data;
    //   console.log('showOnBoard value is111==',data );
    //   this.getQuestion();
    // });
   
    this.storage.get('showOnBoard').then((data)=>{
      this.employeetype=data;
      console.log('showOnBoard value this.employeetype==',this.employeetype);
      if(this.employeetype=='Employee'){
        this.getQuestion();
      }
      if(this.employeetype=='Guest'){
        this.getjoineeQuestion();
      }


    });





 this.emptyEmoji();
this.makeEmptyStar('empty');
  }

  makeEmptyStar(fillStarCount){
    if(fillStarCount=='empty'){
      this.zone.run(() => {
        console.log('hiii.......');
         this.emptyStar=[{"status":false},{"status":false},{"status":false},{"status":false},{"status":false}];
         console.log('hiii.......', this.emptyStar);
    });
    }else{
        
      for(let i=0; i<fillStarCount; i++){
        this.emptyStar[i].status=true;
      }
    }
  }

  emptyEmoji(){
    this.sadEmoji='assets/img/sad_icon.png';
    this.normalEmoji='assets/img/normal_icon.png';
    this.happyEmoji='assets/img/happiness_icon.png';
    this.veryHappyEmoji='assets/img/smileyoutline.png';
  } 



  getQuestion() {

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

        "client_id": this.apiServices.clientId,
        "employee_id": this.employeeId,
        "device": this.apiServices.device,
        "device_id": this.deviceId,
        "app_version": this.apiServices.appVersion,
        "survey_id": this.surveyid

      };
      this.apiServices.surveydetail(apiKey, this.login_token)
        .subscribe((res) => {
          if (res.success == 1) {

            this.zone.run(() => {
              

      this.recurementQuestions=res.data;
      console.log('recurementQuestions== ', this.recurementQuestions);
      this.totalFeedbackQuestion=this.recurementQuestions.length;
      console.log('totalFeedbackQuestion== ', this.totalFeedbackQuestion);

      //creating null object for fill the answer after select
      for(let i=1; i<this.totalFeedbackQuestion;i++){
   
        if(res.data[i].option_type=='5'||res.data[i].option_type==5){
          this.myAnswerForfeedback.push({"questionId":"","questionType":"","optionId":"","answer":"", 
          "tempRangeVal":"","checkboxAnswer":[],  "tempStar":[],"submitted":false});
        }else{

            this.myAnswerForfeedback.push({"questionId":"","questionType":"","optionId":"","answer":"", 
            "tempRangeVal":"","checkboxAnswer":[], 
            "tempStar":[{"status":false},{"status":false},{"status":false},{"status":false},{"status":false}],"submitted":false});
          
        }

      }
      
      this.successVal=1;
      console.log('myAnswerForfeedback array=',this.myAnswerForfeedback);
      console.log('recurementQuestions array=',this.recurementQuestions);

    });
          }else {
            
            // this.apiMessage(res.message);
            this.showAlert(res.message)
          }

        }, (err) => {
          console.log('err== ', err);
          // this.apiMessage(err);

        });

    });
  }
  // apiMessage(message) {
  //   const toast = this.toastCtrl.create({
  //     message: message,
  //     duration: 3500
  //   });
  //   toast.present();
  // }

  getjoineeQuestion() {
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
      let apiKey = {

        // "client_id": this.apiServices.clientId,
        // "employee_id": this.employeeId,
        // "device": this.apiServices.device,
        // "device_id": this.deviceId,
        // "app_version": this.apiServices.appVersion,
        // "survey_id": this.surveyid

        "client_id": this.apiServices.clientId,
        "employee_id": this.employeeId,
        "device": this.apiServices.device,
        "device_id": this.deviceId,
        "app_version": this.apiServices.appVersion,
        "survey_id": this.surveyid


      };
      this.apiServices.joineesurveydetail(apiKey, this.login_token)
        .subscribe((res) => {
          this.loading.dismiss();
          if (res.success == 1) {

      this.recurementQuestions=res.data;
      console.log('recurementQuestions== ', this.recurementQuestions);
      this.totalFeedbackQuestion=this.recurementQuestions.length;

      //creating null object for fill the answer after select
      for(let i=1; i<this.totalFeedbackQuestion;i++){
   
        if(res.data[i].option_type=='5'||res.data[i].option_type==5){
          this.myAnswerForfeedback.push({"questionId":"","questionType":"","optionId":"","answer":"", 
          "tempRangeVal":"","checkboxAnswer":[],  "tempStar":[],"submitted":false});
        }else{

            this.myAnswerForfeedback.push({"questionId":"","questionType":"","optionId":"","answer":"", 
            "tempRangeVal":"","checkboxAnswer":[], 
            "tempStar":[{"status":false},{"status":false},{"status":false},{"status":false},{"status":false}],"submitted":false});
          
        }

      }
      
      this.successVal=1;
      console.log('myAnswerForfeedback array=',this.myAnswerForfeedback);
      console.log('recurementQuestions array=',this.recurementQuestions);

          }else {
            // this.apiMessage(res.message);
            this.showAlert(res.message)
          }

        }, (err) => {
          console.log('err== ', err);
          // this.apiMessage(err);

        });

    });
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad TestsurveyPage');
    this.analyticApi();
  }


  updateCheckboxAns(options,questionID,questionType){
    console.log('options', options);
    this.myAnswerForfeedback[this.changeQuestionIndex].checkboxAnswer=this.recurementQuestions[this.changeQuestionIndex].options
    console.log('myAnswerForfeedback', this.myAnswerForfeedback);
    console.log('myAnswerForfeedback', this.recurementQuestions);
    this.myAnswerForfeedback[this.changeQuestionIndex].questionId=questionID;
    this.myAnswerForfeedback[this.changeQuestionIndex].questionType=questionType;
    
   let index= this.myAnswerForfeedback[this.changeQuestionIndex].checkboxAnswer.findIndex(data => data.answer == true);
   console.log('checkbox index', index);
   if(index>=0){
    this.myAnswerForfeedback[this.changeQuestionIndex].submitted=true;
    this.ansSelected=1; //next and submit button disable
   }else{
    this.myAnswerForfeedback[this.changeQuestionIndex].submitted=false;
    this.ansSelected=0; //next and submit button disable
   }


  }

  mySelectedOption(optId,questionID,questionType){
    this.myOption=optId;

    console.log('before push value==', this.myAnswerForfeedback);
    console.log('answer',optId );
    console.log('questionID',questionID );
    console.log('questionType',questionType );
    console.log('questionIndex==',this.changeQuestionIndex );
    this.myAnswerForfeedback[this.changeQuestionIndex].optionId=optId;
    this.myAnswerForfeedback[this.changeQuestionIndex].answer=optId;//ansert
    this.myAnswerForfeedback[this.changeQuestionIndex].questionId=questionID;
    this.myAnswerForfeedback[this.changeQuestionIndex].questionType=questionType;
    this.myAnswerForfeedback[this.changeQuestionIndex].submitted=true;
    console.log('after push value==', this.myAnswerForfeedback);
    this.ansSelected=1; //next and submit button disable
  }



  fillStarData(index,questionID,questionType){
    // this.myOption=index;
    this.myAnswerForfeedback[this.changeQuestionIndex].tempStar=[];
    console.log('answer',index );
    console.log('questionID',questionID );
    console.log('questionType',questionType );
    console.log('questionIndex==',this.changeQuestionIndex );
    console.log('before push value==', this.myAnswerForfeedback[this.changeQuestionIndex]);

    for(let k=0; k<5; k++){
    if(k<index){
      this.myAnswerForfeedback[this.changeQuestionIndex].tempStar.push({"status":true});
      this.emptyStar[k].status=true;
    }else{
      this.myAnswerForfeedback[this.changeQuestionIndex].tempStar.push({"status":false});
      this.emptyStar[k].status=false;
    }
    // this.makeEmptyStar(index);
  }

    this.myAnswerForfeedback[this.changeQuestionIndex].answer=index;
    this.myAnswerForfeedback[this.changeQuestionIndex].questionId=questionID;
    this.myAnswerForfeedback[this.changeQuestionIndex].questionType=questionType;
    this.myAnswerForfeedback[this.changeQuestionIndex].submitted=true;
    console.log('after push value==', this.myAnswerForfeedback);
    this.ansSelected=1; //next and submit button disable
  }

  mySelectedEmoji(emojiId,answer,questionID,questionType){

    console.log('emojiId',emojiId );
    console.log('answer',answer );
    console.log('questionID',questionID );
    console.log('questionType',questionType );

    if(emojiId==1){
      this.sadEmoji='assets/img/sad1.png';
      this.normalEmoji='assets/img/normal_icon.png';
      this.happyEmoji='assets/img/happiness_icon.png';
      this.veryHappyEmoji='assets/img/smileyoutline.png';

  
    }else if(emojiId==2){      
    this.sadEmoji='assets/img/sad_icon.png';
    this.normalEmoji='assets/img/average1.png';
    this.happyEmoji='assets/img/happiness_icon.png';
    this.veryHappyEmoji='assets/img/smileyoutline.png';

    }else if(emojiId==3){      
    this.sadEmoji='assets/img/sad_icon.png';
    this.normalEmoji='assets/img/normal_icon.png';
    this.happyEmoji='assets/img/smile1.png';
    this.veryHappyEmoji='assets/img/smileyoutline.png';

    }else if(emojiId==4){
      this.sadEmoji='assets/img/sad_icon.png';
      this.normalEmoji='assets/img/normal_icon.png';
      this.happyEmoji='assets/img/happiness_icon.png';
      this.veryHappyEmoji='assets/img/smileyfill.png';   
      
    }

    console.log('inside emoji fun************index==',this.changeQuestionIndex );
   
    this.myAnswerForfeedback[this.changeQuestionIndex].answer=answer;
    this.myAnswerForfeedback[this.changeQuestionIndex].questionId=questionID;
    this.myAnswerForfeedback[this.changeQuestionIndex].questionType=questionType;
    this.myAnswerForfeedback[this.changeQuestionIndex].submitted=true;

    console.log('push value in myAnswerForfeedback==', this.myAnswerForfeedback);
    this.ansSelected=1; //next and submit button disable
  }


  myTextareaAns(answer,questionID,questionType){

    console.log('answer',answer );
    console.log('questionID',questionID );
    console.log('questionType',questionType );
    
   
      // this.msg=answer.trim();
      // if(this.msg.length>=1){
      // this.ansSelected=1; 
      // }else{
      //   console.log('blank',answer );
      //   this.ansSelected=0; 
      // }
    



    this.myAnswerForfeedback[this.changeQuestionIndex].answer=answer;
    this.myAnswerForfeedback[this.changeQuestionIndex].questionId=questionID;
    this.myAnswerForfeedback[this.changeQuestionIndex].questionType=questionType;
    this.myAnswerForfeedback[this.changeQuestionIndex].submitted=true;

    console.log('push value==', this.myAnswerForfeedback);
    this.ansSelected=1;
    // next and submit button disable
  }


  selectedRangeAns(val,questionID,questionType){
    let answerforrange ;
    if(val == 0){
      this.leftSideRangeIcon='assets/img/sad_icon.png';
      this.rightSideRangeIcon='assets/img/sad_icon.png';
      answerforrange = 0;
    }
    else if(val>0 && val<=2){
      this.leftSideRangeIcon='assets/img/sad_icon.png';
      this.rightSideRangeIcon='assets/img/sad_icon.png';
      answerforrange = 1;
    }else if(val>2 && val<=4){ 
      this.leftSideRangeIcon='assets/img/sad_icon.png';
      this.rightSideRangeIcon='assets/img/normal_icon.png';
      answerforrange = 2;
    }else if(val>4 && val<=6){ 
      this.leftSideRangeIcon='assets/img/sad_icon.png';
      this.rightSideRangeIcon='assets/img/happiness_icon.png';
      answerforrange = 3;
    }else if(val>6 && val<=8){ 
      this.leftSideRangeIcon='assets/img/sad_icon.png';
      this.rightSideRangeIcon='assets/img/smileyoutline.png';
      answerforrange = 4;
    }else if(val>8 && val<=10){ 
      this.leftSideRangeIcon='assets/img/sad_icon.png';
      this.rightSideRangeIcon='assets/img/smileyfill.png';
      answerforrange = 5;
    }
    console.log('answer',val );
    console.log('answer',answerforrange );
    console.log('questionID',questionID );
    console.log('questionType',questionType );
    if(val>0){
      this.myAnswerForfeedback[this.changeQuestionIndex].tempRangeVal=val;
      this.myAnswerForfeedback[this.changeQuestionIndex].answer=answerforrange;
      this.myAnswerForfeedback[this.changeQuestionIndex].questionId=questionID;
      this.myAnswerForfeedback[this.changeQuestionIndex].questionType=questionType;
      this.myAnswerForfeedback[this.changeQuestionIndex].submitted=true;  
      console.log('push value==', this.myAnswerForfeedback);
      this.ansSelected=1; //next and submit button disable
    }else{
      this.myAnswerForfeedback[this.changeQuestionIndex].submitted=false;
      console.log('push value==', this.myAnswerForfeedback);
      this.ansSelected=0; //next and submit button disable
    }
  }


  previousQuestion(dataFromHtmlpage){
    console.log('array is==',  this.myAnswerForfeedback);
    if(this.changeQuestionIndex>0){
      this.changeQuestionIndex=this.changeQuestionIndex-1;
      console.log('****************index***************==',this.changeQuestionIndex);
      if(this.myAnswerForfeedback[this.changeQuestionIndex].submitted==true){
        console.log('myAnswerArrayqaaa==',this.myAnswerForfeedback);
        console.log('recurementQuestions==',this.recurementQuestions);
        if(this.myAnswerForfeedback[this.changeQuestionIndex].questionType=='1'){
          //for radio button submitted answer get from myAnswerForfeedback array
          this.recurementQuestions[this.changeQuestionIndex].options.option_id= this.myAnswerForfeedback[this.changeQuestionIndex].optionId;
          this.myOption= this.myAnswerForfeedback[this.changeQuestionIndex].optionId;
          return;
        }


      if(this.myAnswerForfeedback[this.changeQuestionIndex].questionType=='3'){
        //for emoji answer get from myAnswerForfeedback array
        
        let answer=this.myAnswerForfeedback[this.changeQuestionIndex].answer;
        let questionID=this.myAnswerForfeedback[this.changeQuestionIndex].questionId;
        let questionType=this.myAnswerForfeedback[this.changeQuestionIndex].questionType;
        this.recurementQuestions[this.changeQuestionIndex].question_id=this.myAnswerForfeedback[this.changeQuestionIndex].questionId;
        this.recurementQuestions[this.changeQuestionIndex].option_type=this.myAnswerForfeedback[this.changeQuestionIndex].questionType;

        if(answer=='a1'){
          let emojiId=2;
          this.mySelectedEmoji(emojiId,answer,questionID,questionType);
        }else if(answer=='s1'){
          let emojiId=1;
          this.mySelectedEmoji(emojiId,answer,questionID,questionType);
        }else if(answer=='h1'){
          let emojiId=3;
          this.mySelectedEmoji(emojiId,answer,questionID,questionType);
        }else if(answer=='es1'){
          let emojiId=4;
          this.mySelectedEmoji(emojiId,answer,questionID,questionType);
        }
        return;
      }
if(this.myAnswerForfeedback[this.changeQuestionIndex].questionType=='4'){
  
  //for range answer get from myAnswerForfeedback array
  this.recurementQuestions[this.changeQuestionIndex].options=this.myAnswerForfeedback[this.changeQuestionIndex].optionId;
  this.val=parseInt(this.myAnswerForfeedback[this.changeQuestionIndex].tempRangeVal);
  // this.myAnswerForfeedback[this.changeQuestionIndex].tempRangeVal=val;
  console.log('range value==', this.val);
  this.recurementQuestions[this.changeQuestionIndex].question_id=this.myAnswerForfeedback[this.changeQuestionIndex].questionId;
  this.recurementQuestions[this.changeQuestionIndex].option_type=this.myAnswerForfeedback[this.changeQuestionIndex].questionType;

  return;
}


if(this.myAnswerForfeedback[this.changeQuestionIndex].questionType=='5'){
  
  //for star rating answer get from myAnswerForfeedback array
let index=this.myAnswerForfeedback[this.changeQuestionIndex].answer;
let questionID=this.myAnswerForfeedback[this.changeQuestionIndex].questionId;
let questionType=this.myAnswerForfeedback[this.changeQuestionIndex].questionType;
this.fillStarData(index,questionID,questionType);
   return;
}

if(this.myAnswerForfeedback[this.changeQuestionIndex].questionType=='6'){
  //for commentbox answer get from myAnswerForfeedback array
  this.recurementQuestions[this.changeQuestionIndex].options=this.myAnswerForfeedback[this.changeQuestionIndex].optionId;
  this.comment=this.myAnswerForfeedback[this.changeQuestionIndex].answer;
  console.log('textarea value==', this.val);
  this.recurementQuestions[this.changeQuestionIndex].question_id=this.myAnswerForfeedback[this.changeQuestionIndex].questionId;
  this.recurementQuestions[this.changeQuestionIndex].option_type=this.myAnswerForfeedback[this.changeQuestionIndex].questionType;
  return;
}

    }else{
  console.log('****************************111111111next Question empty****************************');
      this.val=1; //range val reset
      this.comment="";  //texbox reset
      this.emptyEmoji();//emoji reset
      this.ansSelected=0;//next and submit button disable
    }
 
    }else{
      console.log('this is last question survey submit');
    }
  }
 
  NextQuestion(dataFromHtmlpage){
           
            console.log('Agree clicked',this.changeQuestionIndex + this.recurementQuestions.length );
            if(this.changeQuestionIndex<this.recurementQuestions.length-1){
              
              this.changeQuestionIndex=this.changeQuestionIndex+1;

      console.log('****************next index***************==',this.changeQuestionIndex);

              if(this.myAnswerForfeedback[this.changeQuestionIndex].submitted==true){


              console.log('myAnswerArrayqaaa==',this.myAnswerForfeedback);

              console.log('recurementQuestions==',this.recurementQuestions);


              if(this.recurementQuestions[this.changeQuestionIndex].option_type==1){
                //for radio button submitted answer get from myAnswerForfeedback array
                this.recurementQuestions[this.changeQuestionIndex].question_id= this.myAnswerForfeedback[this.changeQuestionIndex].questionId;
                this.myOption= this.myAnswerForfeedback[this.changeQuestionIndex].optionId;
                return;
             }


            //   if(this.recurementQuestions[this.changeQuestionIndex].questionType==1){
            //     //for radio button submitted answer get from myAnswerForfeedback array
            //     this.recurementQuestions[this.changeQuestionIndex].optionList.optionId= this.myAnswerForfeedback[this.changeQuestionIndex].optionId;
            //     this.myOption= this.myAnswerForfeedback[this.changeQuestionIndex].optionId;
            //     return;
            //  }

             if(this.recurementQuestions[this.changeQuestionIndex].option_type==3){
              //for emoji answer get from myAnswerForfeedback array
              // this.recurementQuestions[this.changeQuestionIndex].optionList=this.myAnswerForfeedback[this.changeQuestionIndex].optionId;
            
              let answer=this.myAnswerForfeedback[this.changeQuestionIndex].answer;
              let questionID=this.myAnswerForfeedback[this.changeQuestionIndex].questionId;
              let questionType=this.myAnswerForfeedback[this.changeQuestionIndex].questionType;
            
              this.recurementQuestions[this.changeQuestionIndex].question_id=this.myAnswerForfeedback[this.changeQuestionIndex].questionId;
              this.recurementQuestions[this.changeQuestionIndex].option_type=this.myAnswerForfeedback[this.changeQuestionIndex].questionType;
             
console.log('passing emoji type vy next fun==', answer);
console.log('passing emoji type vy next fun==', questionID);
console.log('passing emoji type vy next fun==', questionType);

            if(answer=='a1'){
              let emojiId=2;
              this.mySelectedEmoji(emojiId,answer,questionID,questionType);
            }else if(answer=='s1'){
              let emojiId=1;
              this.mySelectedEmoji(emojiId,answer,questionID,questionType);
            }else if(answer=='h1'){
              let emojiId=3;
              this.mySelectedEmoji(emojiId,answer,questionID,questionType);
            }else if(answer=='es1'){
              let emojiId=4;
              this.mySelectedEmoji(emojiId,answer,questionID,questionType);
            }


            return;
            }
            
            // if(this.recurementQuestions[this.changeQuestionIndex].questionType==4){
            //   //for range answer get from myAnswerForfeedback array
            //   this.recurementQuestions[this.changeQuestionIndex].optionList=this.myAnswerForfeedback[this.changeQuestionIndex].optionId;
            //   this.comment=this.myAnswerForfeedback[this.changeQuestionIndex].answer;
            //   console.log('textarea value==', this.val);
            //   this.recurementQuestions[this.changeQuestionIndex].questionID=this.myAnswerForfeedback[this.changeQuestionIndex].questionId;
            //   this.recurementQuestions[this.changeQuestionIndex].questionType=this.myAnswerForfeedback[this.changeQuestionIndex].questionType;
            //   return;
            // }

            
            if(this.recurementQuestions[this.changeQuestionIndex].option_type==4){
              //for range answer get from myAnswerForfeedback array
              // this.recurementQuestions[this.changeQuestionIndex].optionList=this.myAnswerForfeedback[this.changeQuestionIndex].optionId;
            console.log('value is in range**************',this.myAnswerForfeedback[this.changeQuestionIndex].tempRangeVal);
              this.val=parseInt(this.myAnswerForfeedback[this.changeQuestionIndex].tempRangeVal);
              this.recurementQuestions[this.changeQuestionIndex].questionID=this.myAnswerForfeedback[this.changeQuestionIndex].questionId;
              this.recurementQuestions[this.changeQuestionIndex].questionType=this.myAnswerForfeedback[this.changeQuestionIndex].questionType;
              return;
            }
           
            
            if(this.recurementQuestions[this.changeQuestionIndex].option_type==5){
              //for fill star answer get from myAnswerForfeedback array
            let index=this.myAnswerForfeedback[this.changeQuestionIndex].answer;
            let questionID=this.myAnswerForfeedback[this.changeQuestionIndex].questionId;
            let questionType=this.myAnswerForfeedback[this.changeQuestionIndex].questionType;
             this.fillStarData(index,questionID,questionType)
             this.recurementQuestions[this.changeQuestionIndex].question_id=this.myAnswerForfeedback[this.changeQuestionIndex].questionId;
             this.recurementQuestions[this.changeQuestionIndex].option_type=this.myAnswerForfeedback[this.changeQuestionIndex].questionType;
            
              return;
           }

           if(this.recurementQuestions[this.changeQuestionIndex].option_type==6){
            //for textarea answer get from myAnswerForfeedback array
            // this.recurementQuestions[this.changeQuestionIndex].optionList=this.myAnswerForfeedback[this.changeQuestionIndex].optionId;
            this.comment=this.myAnswerForfeedback[this.changeQuestionIndex].answer;
            console.log('textarea value==', this.val);
            this.recurementQuestions[this.changeQuestionIndex].question_id=this.myAnswerForfeedback[this.changeQuestionIndex].questionId;
            this.recurementQuestions[this.changeQuestionIndex].option_type=this.myAnswerForfeedback[this.changeQuestionIndex].questionType;
            return;
          }


}else{
              console.log('****************************next Question empty****************************');
              this.val=0; //range val reset
              this.comment="";  //texbox reset
              this.emptyEmoji();//emoji reset
              this.ansSelected=0;//next and submit button disable

              this.makeEmptyStar('empty');
}

            }else{
              console.log('this is last question survey submit');
            }


  }
  showLoading() {
    this.loading=  this.loadingCtrl.create({
        duration: 1500,
        content: 'Please wait ...'
      });
      this.loading.present();
    }


  // submitFeedback(){
  //   const prompt = this.alertCtrl.create({
  //     // title: 'Login',
  //     message: "Are you sure, you want to submit this Feedback?",
  //     buttons: [
  //       {
  //         text: 'No',
  //         handler: () => {
  //           console.log('Disagree clicked');
  //         }
  //       },
  //       {
  //         text: 'Yes',
  //         handler: () => {
  //           console.log('Agree clicked',this.changeQuestionIndex + this.recurementQuestions.length );
  //           this.submitRecurementFeedback();
  //         }
  //       }
  //     ]
  //   });
  //   prompt.present();
  // }

  submitRecurementFeedback(){
  

  let alert = this.alertCtrl.create({
    // title: 'Confirm purchase',
    message: 'Are you sure you want to submit survey?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Ok',
        handler: () => {
          this.storage.get('showOnBoard').then((data)=>{
            this.employeetype=data;
            console.log('showOnBoard value this.employeetype==',this.employeetype);
            if(this.employeetype=='Employee'){
              this.finish();
            }
            if(this.employeetype=='Guest'){
              this.joineefinish();
            }
      
      
          });




        
          console.log('Buy clicked');
        }
      }
    ]
  });
  alert.present();

  }



  joineefinish() {
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

        "client_id": this.apiServices.clientId,
        "employee_id": this.employeeId,
        "device": this.apiServices.device,
        "device_id": this.deviceId,
        "app_version": this.apiServices.appVersion,
        "survey_id": this.surveyid,
        "answer_arr": this.myAnswerForfeedback,

      };
      this.apiServices.joineesurveysubmit(apiKey, this.login_token)
        .subscribe((res) => {
          console.log('guest', res);
          if (res.success == 1) {

if(this.recruitcheck==1){
  // this.survey_data=[];
  this.recarray['survey_data'] = [];
  console.log("this.recarray",this.recarray)
  // survey_data
  this.storage.set('survey_data',this.recarray);
}
            this.navCtrl.popToRoot();
            // this.navCtrl.pop();
            // this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-3));
            console.log('res', res)

          } else {
            this.apiMessage(res.message);
          }
        }, (err) => {
          console.log('err== ', err);
          this.apiMessage(err);

        });
    });
  }

  finish() {
  this.commonLoader();
    console.log('submitted data== ', this.myAnswerForfeedback);
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
        "client_id": this.apiServices.clientId,
        "employee_id": this.employeeId,
        "device": this.apiServices.device,
        "device_id": this.deviceId,
        "app_version": this.apiServices.appVersion,
        "survey_id": this.surveyid,
        "answer_arr": this.myAnswerForfeedback,
      };
      this.apiServices.surveysubmit(apiKey, this.login_token)
        .subscribe((res) => {
          console.log('', res);
          this.loading.dismiss();
          if (res.success == 1) {
            this.events.publish('reloadsurveyApi', true);
            // this.navCtrl.pop();
            this.navCtrl.popToRoot();
            // this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-3));
            console.log('res', res);
            this.apiMessage(res.message);
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
      duration: 3500
    });
    toast.present();
  }



  showAlert(message) {
    const alert = this.alertCtrl.create({
      subTitle: message,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('Disagree clicked');
            this.navCtrl.pop();
          }
        }]
    });
    alert.present();
  }
  
  resize() {
    this.myInput.nativeElement.style.height = this.myInput.nativeElement.scrollHeight + 'px';
   }


   commonLoader() {
    this.loading = this.loadingCtrl.create({
      enableBackdropDismiss: true,
      spinner: 'ios-small',
      content: 'Loading data...'
    });
    this.loading.present();
  }

  analyticApi(){
    this.storage.get('employee_type').then((user) => {
      console.log('thoughtOftheDayApi value is111==', user);
      let user_Type = user;
    this.storage.get('deviceId').then(data => {
      let deviceId = data;
      let apiKey = {
        "client_id": this.apiServices.clientId,
        "employee_id": this.employeeId,
        "device": this.apiServices.device,
        "device_id": deviceId,
        "app_version": this.apiServices.appVersion,
        "track_flag": "72", 
        "type" : "detail",
        "user_type" : user_Type,
      };
      this.apiServices.analyticApi(apiKey,this.login_token).subscribe(res=>{
        console.log(res);
      })
    });
  });
  }





}

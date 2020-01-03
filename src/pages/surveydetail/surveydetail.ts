import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController,Events, Platform } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-surveydetail',
  templateUrl: 'surveydetail.html',
})
export class SurveydetailPage {
  pushkey: any;
  employeetype: any;
  totallength: any;
  @ViewChild(Slides) slides: Slides;
  showindex: any;
  leftSideRangeIcon: string = 'assets/imgs/sad_icon.png';
  rightSideRangeIcon: string = 'assets/imgs/sad_icon.png';
  starArray: any = [
    { visibleOutlineStar: true },
    { visibleOutlineStar: true },
    { visibleOutlineStar: true },
    { visibleOutlineStar: true },
    { visibleOutlineStar: true },
  ];
  visibleFillStar: any;
  ckobj: any;;
  imojianswer: string;
  currentIndex: any;
  allData: any; textindex: number;
  login_token: any; textAnswer1: any;
  deviceId: any;
  employeeId: any; newRangeVal: number;
  radioAnswer: any = [];
  emojiId: any;
  textEmoji: string;
  veryHappyEmoji: string;
  happyEmoji: string; val: number;
  normalEmoji: string;previousepageData:any;
  sadEmoji: string; showsubmit: boolean = false;
  surveyid: any; myselcetedOption: boolean = false;
  showBtn: boolean = true; textoptiontype: any = '';
  selectedOption: any; checkarr: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,public events: Events,
    private alertCtrl: AlertController, private platform: Platform,
    public toastCtrl: ToastController, private storage: Storage,
    private apiServices: ApiServiceProvider) {

      this.previousepageData = this.navParams.get('allData');
      console.log(' previousepageData== ', this.previousepageData);
      
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
    this.storage.get('showOnBoard').then((data)=>{
      this.employeetype=data;
      console.log('showOnBoard value is111==',data );
    });

    this.emptyEmoji();

  }

  surveydetails() {

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
            this.allData = res.data;
            this.totallength = this.allData.length;
            if (this.totallength == 1) {
              this.showsubmit = true;
            }
            for (let i = 0; i < this.allData.length; i++) {
              this.radioAnswer[i] = { 'question_id': '', 'answer': '', 'option_type': '' };
            }


            if (this.allData.length >= 1) {
              this.swipe1();
            }

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
  ionViewDidLoad() {
    this.storage.get('showOnBoard').then((data)=>{
      this.employeetype=data;
      console.log('showOnBoard value this.employeetype==',this.employeetype);
      if(this.employeetype=='Employee'){
        this.surveydetails();
      }
      if(this.employeetype=='Guest'){
        this.joineesurveydetails();
      }


    });

    console.log('ionViewDidLoad SurveydetailPage');
  }
  myanswer(optionId, alldata, optiontype, qid, i, j) {
    this.showBtn = false;
    console.log('optionId', optionId);
    console.log('alldata', alldata);
    console.log('a', optiontype);
    console.log('b', qid);
    if (alldata.option_type == 1) {
      //for radio type question-->1
      console.log('optionId== ', optionId);
      this.selectedOption = optionId;
      this.radioAnswer[i] = {
        "question_id": alldata.question_id, "answer": optionId,
        "option_type": alldata.option_type,
      }

      this.myselcetedOption = true;
    }
    if (alldata.option_type == 2) {

      this.ckobj = { optionId }

      let index = this.checkarr.findIndex(item => item.optionId == optionId);
      console.log('****index==', index);
      if (index >= 0) {
        this.checkarr.splice(index, 1);

      } else {
        this.checkarr.push(this.ckobj);

      }

      this.radioAnswer[i] = {
        "question_id": qid, "answer": this.checkarr,
        "option_type": optiontype
      }


    }

  }
  emptyEmoji() {
    this.sadEmoji = 'assets/imgs/sad_icon.png';
    this.normalEmoji = 'assets/imgs/normal_icon.png';
    this.happyEmoji = 'assets/imgs/happiness_icon.png';
    this.veryHappyEmoji = 'assets/imgs/smileyoutline.png';
  }

  //emoji 
  mySelectedEmoji(emojiId, answer, alldata, optiontype, qid, i) {

    this.showBtn = false;
    this.emojiId = emojiId;
    if (emojiId == 1) {
      this.imojianswer = 'Very Sad';
      this.textEmoji = 'Not Satisfy';
      this.sadEmoji = 'assets/imgs/sad1.png';
      this.normalEmoji = 'assets/imgs/normal_icon.png';
      this.happyEmoji = 'assets/imgs/happiness_icon.png';
      this.veryHappyEmoji = 'assets/imgs/smileyoutline.png';
    } else if (emojiId == 2) {
      this.imojianswer = 'Sad';
      this.textEmoji = 'Neutral';
      this.sadEmoji = 'assets/imgs/sad_icon.png';
      this.normalEmoji = 'assets/imgs/average1_small.png';
      this.happyEmoji = 'assets/imgs/happiness_icon.png';
      this.veryHappyEmoji = 'assets/imgs/smileyoutline.png';

    } else if (emojiId == 3) {
      this.imojianswer = 'Happy';
      this.textEmoji = 'Satisfactory';
      this.sadEmoji = 'assets/imgs/sad_icon.png';
      this.normalEmoji = 'assets/imgs/normal_icon.png';
      this.happyEmoji = 'assets/imgs/02_smileyGreen.png';
      this.veryHappyEmoji = 'assets/imgs/smileyoutline.png';

    } else if (emojiId == 4) {
      this.imojianswer = 'Very Happy';
      this.textEmoji = 'Very Happy'
      this.sadEmoji = 'assets/imgs/sad_icon.png';
      this.normalEmoji = 'assets/imgs/normal_icon.png';
      this.happyEmoji = 'assets/imgs/happiness_icon.png';
      this.veryHappyEmoji = 'assets/imgs/smileyfilled.png';

    }else{
      this.emptyEmoji();
    }

    this.radioAnswer[i] = {
      "question_id": alldata.question_id, "answer": this.imojianswer,
      "option_type": alldata.option_type
    }

    console.log('emoji data', this.radioAnswer);

    this.myselcetedOption = true;
  }

  //for rating
  myRangeTypeAnswer(rangeVal, alldata, optiontype, qid, i) {

    if (rangeVal >= 1 && rangeVal <= 2) {
      this.rightSideRangeIcon = 'assets/imgs/sad_icon.png';
      this.newRangeVal = 1;
    }
    else if (rangeVal >= 3 && rangeVal <= 4) {
      this.rightSideRangeIcon = 'assets/imgs/normal_icon.png';
      this.newRangeVal = 2;
    }
    else if (rangeVal >= 5 && rangeVal <= 6) {
      this.rightSideRangeIcon = 'assets/imgs/happiness_icon.png';
      this.newRangeVal = 3;
    }
    else if (rangeVal >= 7 && rangeVal <= 8) {
      this.rightSideRangeIcon = 'assets/imgs/smileyoutline.png';
      this.newRangeVal = 4;
    }
    else if (rangeVal >= 9 && rangeVal <= 10) {
      this.rightSideRangeIcon = 'assets/imgs/smileyfilled.png';
      this.newRangeVal = 5;
    }

    this.radioAnswer[i] = {
      "question_id": qid, "answer": this.newRangeVal,
      "option_type": optiontype
    }
    console.log('range data', this.radioAnswer);
    if (rangeVal > 0) {
      this.showBtn = false;
      this.myselcetedOption = true;
    } else {
      this.showBtn = true;
      this.myselcetedOption = false;
    }


  }

  //for 5 star rating
  changeBgColor(index, alldata, mainindex) {
    this.showBtn = false;
    this.visibleFillStar = index;
    this.starArray = [
      { visibleOutlineStar: true },
      { visibleOutlineStar: true },
      { visibleOutlineStar: true },
      { visibleOutlineStar: true },
      { visibleOutlineStar: true },
    ];
    // console.log('star position', index);
    for (let i = 0; i <= index; i++) {
      this.starArray[i].visibleOutlineStar = false;
    }
    //for startRating type question-->5
    console.log('*****start rating*******alldata==', alldata);

    this.radioAnswer[mainindex] = {
      "question_id": alldata.question_id, "answer": index + 1,
      "option_type": alldata.option_type
    }

    this.myselcetedOption = true;
  }
  slideChanged() {
    this.currentIndex = this.slides.getActiveIndex();
    this.showindex = this.currentIndex + 1;
    if (this.slides.isEnd() == true) {
      this.showsubmit = true;
    }

   
  }

  swipe1() {
    this.slides.lockSwipeToNext(true)
    this.currentIndex = this.slides.getActiveIndex();
  }
  nextslide(i ,allData) {
    console.log('allData in next slide==', allData);
    this.emptyEmoji();
    

    if(allData.option_type==3){

//this is emoji question
// mySelectedEmoji(emojiId, answer, alldata, optiontype, qid, i)

this.mySelectedEmoji(this.emojiId, this.radioAnswer[i].answer, allData, allData.option_type, allData.question_id, i);

    }

    if (this.radioAnswer[i].answer == '') {
      let msg = "please select any option";
      this.apiMessage(msg)
      return false;
    }

    if(this.radioAnswer.length>=1){
      this.selectedOption = this.radioAnswer[i+1].answer;
      console.log('backselectedOption iiii== ', this.selectedOption);
      console.log('backselectedOption== ', this.selectedOption);
    }


    this.slides.lockSwipeToNext(false);
    this.currentIndex = this.slides.getActiveIndex();
    console.log('Current index is123', this.currentIndex);
    this.showindex = this.currentIndex + 1;
    this.slides.slideTo(this.showindex);
    if (this.slides.isEnd() == true) {
      this.showsubmit = true;
    }
    this.slides.lockSwipeToNext(true);
    this.slides.lockSwipeToPrev(true);

  }

  backslide(k,allData) {
    this.emptyEmoji();
    console.log('allData in back slide==', allData);
    if(allData.option_type==3){
      console.log('allData in back slide==1111', allData);
      //this is emoji question
      // mySelectedEmoji(emojiId, answer, alldata, optiontype, qid, i)
      
      this.mySelectedEmoji(this.emojiId, this.radioAnswer[k].answer, allData, allData.option_type, allData.question_id, k);
      
          }else{
      
          }

     // this.selectedOption = optionId;
    // this.radioAnswer[i] = {
    //   "question_id": alldata.question_id, "answer": optionId,
    //   "option_type": alldata.option_type,
    // }
// console.log('hiii==', this.allData[this.currentIndex]);
  //  let tempIndex = this.radioAnswer[this.currentIndex].findIndex(x => x.answer ==this.allData[this.currentIndex].);

  // let tempIndex = allOptions.findIndex(x => x.option_id ==this.radioAnswer[this.currentIndex].answer);

  // console.log('hiii current index ==', this.currentIndex);
  // console.log('hiii current ans ==', this.radioAnswer[this.currentIndex].answer);
  
  // console.log('hiii tempIndex allOptions ==', allOptions);
  // console.log('hiii tempIndex ==', tempIndex);
  // if(tempIndex>=0){
  //   this.selectedOption=allOptions[tempIndex].option_id;
  //   console.log('hiii selectedOption ==', allOptions[tempIndex].option_id);
  // }

  if(this.radioAnswer.length>=1){
    this.selectedOption = this.radioAnswer[k-1].answer;
    console.log('backselectedOption iiii== ', this.selectedOption);
    console.log('backselectedOption== ', this.selectedOption);
  }


    this.showsubmit = false;
    this.slides.lockSwipeToPrev(false);
    this.currentIndex = this.slides.getActiveIndex();
    this.showindex = this.currentIndex - 1;
    this.slides.slideTo(this.showindex);
    this.slides.lockSwipeToNext(true);
    this.slides.lockSwipeToPrev(true);
  }
  submit(i) {


    console.log('textdata', this.radioAnswer);
    if (this.radioAnswer[i].answer == '') {
      let msg = "please select any option";
      this.apiMessage(msg)
    }
    else {
      this.presentConfirm()
    }
  }

  joineesubmit(i) {


    console.log('textdata', this.radioAnswer);
    if (this.radioAnswer[i].answer == '') {
      let msg = "please select any option";
      this.apiMessage(msg)
    }
    else {
      this.presentConfirm()
    }
  }

  presentConfirm() {
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
        "answer_arr": this.radioAnswer,

      };
      this.apiServices.joineesurveysubmit(apiKey, this.login_token)
        .subscribe((res) => {
          console.log('', res);
          if (res.success == 1) {
            // this.navCtrl.pop();
            this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-3));
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
        "answer_arr": this.radioAnswer,

      };
      this.apiServices.surveysubmit(apiKey, this.login_token)
        .subscribe((res) => {
          console.log('', res);
          if (res.success == 1) {
            this.events.publish('reloadsurveyApi', true);
            this.navCtrl.pop();
            // this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-3));
            console.log('res', res);

          } else {
            this.apiMessage(res.message);
          }
        }, (err) => {
          console.log('err== ', err);
          this.apiMessage(err);

        });
    });
  }




  textsubmit(textAnswer1, i, textdata, opttype) {
    this.radioAnswer[i] = {
      "question_id": this.allData[i].question_id, "answer": textAnswer1,
      "option_type": opttype
    }
    console.log('final submit array== ', this.radioAnswer);
  }

  
  joineesurveydetails() {

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
      this.apiServices.joineesurveydetail(apiKey, this.login_token)
        .subscribe((res) => {
          if (res.success == 1) {
            this.allData = res.data;
            this.totallength = this.allData.length;
            if (this.totallength == 1) {
              this.showsubmit = true;
            }
            for (let i = 0; i < this.allData.length; i++) {
              this.radioAnswer[i] = { 'question_id': '', 'answer': '', 'option_type': '' };
            }


            if (this.allData.length >= 1) {
              this.swipe1();
            }

          } else {
            this.apiMessage(res.message);
          }

        }, (err) => {
          console.log('err== ', err);
          this.apiMessage(err);

        });

    });
  }




}
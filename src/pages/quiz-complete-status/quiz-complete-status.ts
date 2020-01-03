import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, Platform, ViewController } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-quiz-complete-status',
  templateUrl: 'quiz-complete-status.html',
})
export class QuizCompleteStatusPage {
  rewardsapplicable: any;
  total_incorrect_ans: any;
  total_question: any;
  total_point: any;
  total_correct_answer: any;
  total_attempted: any;
  reward_earned: any;
  quizdata: any;
  deviceId: any;
  login_token: any;
  employeeId: any;
  employeetype: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    private alertCtrl: AlertController, private platform: Platform,
    public toastCtrl: ToastController, private storage: Storage,
    private apiServices: ApiServiceProvider) {
      this.quizdetail();
       
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
          // this.swipe1()
          if (res.success == 1) {
            this.quizdata = res.data;
            // this.totallength = this.quizdata.length;
            // if(this.totallength==1){
            //   this.showsubmit=true;
            // }
            // console.log('this.allData', this.quizdata);
            // console.log('this.quizansarray', this.quizansarray);
          }
          if(res.success == 0){
            console.log(res);
            // this.quizdata = res.data;
            this.rewardsapplicable=res.data.reward_aplicable;
            this.reward_earned=res.data.reward_earned;
            if(this.reward_earned!=undefined){
              this.total_attempted=this.reward_earned.total_attempted;
              this.total_correct_answer=this.reward_earned.total_correct_answer;
              this.total_point=this.reward_earned.total_point;
              this.total_question=this.reward_earned.total_question;
              this.total_incorrect_ans=this.reward_earned.total_incorrect_ans;
              // this.total_point=this.reward_earned.total_point;
                    }


            // console.log("xdfgsdfgh",res.background_image);
            // this.image = res.background_image;
            // this.success=res.success;
            // this.msg=res.message;
            // this.navCtrl.push('QuizCompleteStatusPage');
            // this.apiMessage(res.message);
          }
      

        }, (err) => {
          console.log('err== ', err);
          // this.apiMessage(err);

        });

    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizCompleteStatusPage');
  }

  gotohostory(){
    this.navCtrl.push('JoineequizhistoryPage');
  }
  goHome(){
    this.navCtrl.popToRoot();
  }
}

// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, Platform, ViewController } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-newquizlist',
  templateUrl: 'newquizlist.html',
})
export class NewquizlistPage {
  msg: any;
  succ: any;
  deviceId: any;
  login_token: any;
  employeeId: any;
  allData:any;
  quiz:any;
  value: any='0';
  myInfiniteScroll:any;
  infiniteScrollCalled:boolean=false;
  hideInfiniteScroll:boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    private alertCtrl: AlertController, private platform: Platform,
    public toastCtrl: ToastController, private storage: Storage,
    private apiServices: ApiServiceProvider) {
   
  }
  ionViewWillEnter() {
    this.quizlist();
  }


  quizlist() {

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
        "val":this.value
      };
      this.apiServices.quizlist(apiKey, this.login_token)
        .subscribe((res) => {
          console.log('', res);

          if (res.success == 1) {
            
            // this.totallength = this.allData.length;
            console.log('this.allData', this.quiz);

            if(this.quiz==undefined){
              this.quiz = res.data;
            }else{
              this.quiz= this.quiz.concat(res.data);
              console.log('new album list==',res.data );
            }
                if(this.infiniteScrollCalled==true){
                  this.myInfiniteScroll.complete();
                  this.infiniteScrollCalled=false;
                }
            console.log('this.formdata==',this.quiz);
          
            this.hideInfiniteScroll=false;
            
         
          } else {
            this.hideInfiniteScroll=true;
            this.succ=res.success;
            this.msg=res.message;
            this.apiMessage(res.message);
          }

        }, (err) => {
          console.log('err== ', err);
          this.apiMessage(err);

        });

    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad NewquizlistPage');
  }
  apiMessage(message) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }
  gotoquestions(qid,quiz_type,quiztimining){
    console.log('qid',qid);
this.navCtrl.push('NewquizquestionPage',{'qid':qid,'quiz_type':quiz_type,'quiztimining':quiztimining});
  }


  gotoseeanswer(id){
    this.navCtrl.push('QuizsummaryPage',{'listkey':'1','data':id});
  }



  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
  this.myInfiniteScroll=infiniteScroll;
    setTimeout(() => {
      this.infiniteScrollCalled=true;
      this.value=this.quiz.length;
      this.quizlist();
      console.log('Async operation has ended');
      // this.myInfiniteScroll.complete();
    }, 500);
  }


}

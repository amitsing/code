import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, Platform } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-surveylist',
  templateUrl: 'surveylist.html',
})
export class SurveylistPage {
  allData: any;
  login_token: any;
  deviceId: any;
  employeeId: any;
  value: any='0';
  myInfiniteScroll:any;
  infiniteScrollCalled:boolean=false;
  hideInfiniteScroll:boolean=false;
  bgImageViewer:boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private alertCtrl: AlertController, private platform: Platform, public toastCtrl: ToastController, private storage: Storage, private apiServices: ApiServiceProvider) {
    this.storage.get('employeeId').then(data => {
      this.employeeId = data;
      console.log(' employeeId== ', this.employeeId);
    });
    this.storage.get('deviceId').then(data => {
      this.deviceId = data;
    });

    // this.surveylist();
    
  }

  surveylist() {
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
        "value": this.value

      };
      this.apiServices.surveylist(apiKey, this.login_token)
        .subscribe((res) => {
          console.log('', res);

          if (res.success == 1) {
            // this.allData = res.data;


            if(this.allData==undefined){
              this.allData = res.data;
            }else{
              this.allData= this.allData.concat(res.data);
              console.log('new album list==',res.data );
            }
                if(this.infiniteScrollCalled==true){
                  this.myInfiniteScroll.complete();
                  this.infiniteScrollCalled=false;
                }
            console.log('this.formdata==',this.allData);
          
            this.hideInfiniteScroll=false;



          } else {

            if(this.value=='0'){
              // this.msg=res.message;
              this.bgImageViewer = true;
            }


            this.hideInfiniteScroll=true;
            // this.apiMessage(res.message);
            
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
      duration: 3000
    });
    toast.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SurveylistPage');
  }
  gotodetail(i, allData) {
    console.log('allData==', allData);
    if(allData.survey_instruction_check==0|| allData.survey_instruction_check=='0'){
      this.navCtrl.push('TestsurveyPage', { 'surveyid': this.allData[i].survey_id, 'allData':allData  });
    }else{
      this.navCtrl.push('SurveyInstructionPage', { 'surveyid': this.allData[i].survey_id, 'allData':allData  });
    }
    // this.navCtrl.push('SurveydetailPage', { 'surveyid': this.allData[i].survey_id, 'allData':allData  });
  }
  ionViewWillEnter() {
    this.allData=undefined;
    this.value='0';
    this.surveylist();
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
  this.myInfiniteScroll=infiniteScroll;
    setTimeout(() => {
      this.infiniteScrollCalled=true;
      this.value=this.allData.length;
      this.surveylist();
      console.log('Async operation has ended');
      // this.myInfiniteScroll.complete();
    }, 500);
  }

}

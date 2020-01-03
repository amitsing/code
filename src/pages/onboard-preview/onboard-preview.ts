import { Component } from '@angular/core';
import { IonicPage,ToastController, NavController, NavParams } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import {  MenuController } from 'ionic-angular/index';
@IonicPage({name: 'OnboardPreviewPage'})
@Component({
  selector: 'page-onboard-preview',
  templateUrl: 'onboard-preview.html',
})
export class OnboardPreviewPage {
  allData: any;
  deviceId: any;
  employeeId: any;
  food: any;
  passtime: any;
  place: any;

  information: any;
  image: any;
  name: any;
  previousePageData: any;
  commingFrom:any;
  education:any;
  employee_type:any;

  btnText:any="Submit";
  enableSubmitBtn:boolean=true;


  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage,
     private apiServices: ApiServiceProvider,public toastCtrl: ToastController,private menu: MenuController) {
    this.previousePageData=this.navParams.get('data');
    console.log('this is previouse page data== ', this.previousePageData);
    this.storage.get('showOnBoard').then((data)=>{
      console.log('showOnBoard value is111==',data );
      this.employee_type=data;
    });
  

    this.storage.get('employeeId').then(data => {
      this.employeeId = data
    });

    this.storage.get('deviceId').then((data) => {
      this.deviceId = data
    })


    // this.commingFrom=this.previousePageData.commingFrom;
    if(this.previousePageData!=undefined){
      // console.log("hhhhhh",this.previousePageData.name);
      this.name=this.previousePageData.userName;
      this.image=this.previousePageData.userImage;
      this.information=this.previousePageData.aboardMsg;
      this.place=this.previousePageData.place;
      this.passtime=this.previousePageData.passtime;
      this.food=this.previousePageData.food;
      this.education=this.previousePageData.qualification;
    }
    
  }

  ceoMessage() {
      this.navCtrl.push('CeoMessagePage');
  }
  imageUpload() {
    this.navCtrl.push('ImageUploadPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OnboardPreviewPage');
  }

  Edit(){
    this.navCtrl.pop();
  }
  gotohome(){

    this.btnText="Please wait...";
    this.enableSubmitBtn=false;

    if(this.education==''){
      this.education="";
    }
    this.storage.get('employeeId').then(data => {
      this.employeeId = data
    });

    this.storage.get('deviceId').then((data) => {
      this.deviceId = data
      let apiKey = {

        "clientId":this.apiServices.clientId,
        "employeeId": this.employeeId,
        "device":this.apiServices.device,
        "deviceId": this.deviceId,
        "appVersion":this.apiServices.appVersion,
        "hobby":this.passtime,
        "food":this.food,
        "favLocation":this.place,
        "qualification":this.education,
        "about":this.information
      };

        console.log('login api key==', apiKey);
        this.apiServices.submit_aboard(apiKey).then((result) => {
        console.log('optionalUpdate response== ', result);
        this.allData = result;
        console.log('this.allData', this.allData);

        this.btnText="Submit";
        this.enableSubmitBtn=true;

        if(this.allData.success==1){
        this.storage.set('isFormSubmit',this.allData.is_first_formSubmit);
        this.navCtrl.setRoot('HomePage');
        }
        else{
          this.apiMessage(this.allData.message);
        }

      }, (err) => {
        console.log('err== ', err);
        this.apiMessage(err);
        this.btnText="Submit";
        this.enableSubmitBtn=true;

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

  ionViewWillEnter(){
    this.menu.swipeEnable(false);
}


}

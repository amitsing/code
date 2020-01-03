import { Component } from '@angular/core';
import { ToastController,IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import {  MenuController } from 'ionic-angular/index';

@IonicPage({name:'WelcomeScreenPage'})
@Component({
  selector: 'page-welcome-screen',
  templateUrl: 'welcome-screen.html',
})
export class WelcomeScreenPage {
  welcomeMessage:any;
  deviceId:any;
  employeeId:any;
  allData:any;
  constructor(public toastCtrl: ToastController,private storage:Storage,private menu: MenuController,
    private apiServices:ApiServiceProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.storage.get('employeeId').then(data=>{
      this.employeeId=data;
     })  
  
  }

  getMessage(){
    let apiKey={
      "packageName": this.apiServices.packageName,
      "device": this.apiServices.device,
      "deviceId": this.deviceId,
      "appVersion":this.apiServices.appVersion,
      "clientId":this.apiServices.clientId,
      "employeeId":this.employeeId,
      "messageType":"1"

    };
    console.log('login api key==', apiKey);
    this.apiServices.welcomeMessage(apiKey).then((result) => { 
      console.log('welcome message== ',result);
      this.allData=result;
      if(this.allData.success==1){
          this.welcomeMessage=this.allData.data;
          this.storage.set('isFirstLogin',this.allData.data.is_first_login);
      }else{
        this.apiMessage(this.allData.message);
      }
    }, (err) => { 
      console.log('optionalUpdate err== ',err); 
      this.apiMessage(err);
      }); 

  }
  
  apiMessage(message) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  imageUpload(){
    this.navCtrl.push('ProfilePicUploadPage')
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomeScreenPage');
    this.storage.get('deviceId').then(data=>{
      this.deviceId=data;
      this.getMessage();
     })  
  }

  ionViewWillEnter(){
    this.menu.swipeEnable(false);
}


}

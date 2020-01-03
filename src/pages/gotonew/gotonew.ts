import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { InAppBrowser , InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { IonicPage, NavController, NavParams,ToastController, AlertController, Platform } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';

import { Events } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-gotonew',
  templateUrl: 'gotonew.html',
})
export class GotonewPage {
  group_name: any;
  sessiionurl: string;
  SessionId: any;
  Response: any;
  url: any;
  allData: any;
  employeeId: any;
  deviceId: any;
  token: any;
  title: any;
  // url="https://benepik.in/evalueserve/evaluserveiframe.php";
  constructor(public navCtrl: NavController,private iab: InAppBrowser,public events: Events,
     public navParams: NavParams,private sanitizer: DomSanitizer,
   private alertCtrl: AlertController,private platform:Platform,public toastCtrl: ToastController,private storage:Storage,private apiServices:ApiServiceProvider) {
    // this.url="https://jobsuat.evalueserve.com/";

    this.url=this.navParams.get('data');

    this.title=this.navParams.get('title');
    console.log('ionViewDidLoad GotonewPage',  this.title);
    this.group_name=this.navParams.get('group_name');
    this.storage.get('Response').then((data)=>{
      console.log('login_token==',data );
      this.Response=data;
    });


    this.storage.get('SessionId').then((data)=>{
      console.log('SessionId==123',data );
      this.SessionId=data}); 


      // this.events.subscribe('urldata', (data) =>{
      //   console.log('tabbadgedata', data);
      //   this.SessionId=data;
       
   
      // });

    // this.urlStr=this.navParams.get('data');

// let sessiionurl='?sid={{this.SessionId}}&res={{response}}'



    // this.goto()

    
  }

  dismissLoading(){
    // alert('dismiss')
  }


  // testURL() {
  //   console.log('ionViewDidLoad GotonewPage');

  //   this.storage.get('SessionId').then((data)=>{
  //     console.log('**SessionId==',data );
  //     this.SessionId=data}); 
  //   this.storage.get('Response').then((data)=>{
  //     console.log('login_token==',data );
  //     this.Response=data;
  //     this.sessiionurl=this.url+'?sid='+this.SessionId+'&res='+this.Response;
  //     console.log('**1=',this.sessiionurl);
  //   });
 
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GotonewPage');

if(this.group_name=="Offer Letter"){
  this.sessiionurl=this.url
}

else
{
  
    this.storage.get('SessionId').then((data)=>{
      console.log('**SessionId==',data );
      this.SessionId=data}); 
    this.storage.get('Response').then((data)=>{
      console.log('login_token==',data );
      this.Response=data;
      // this.sessiionurl=this.url+'?sid='+this.SessionId+'&res='+this.Response;
      // console.log('**1=',this.sessiionurl);
    });
    this.storage.get('SessionId').then((data)=>{
      console.log('SessionId==',data );
      this.SessionId=data;
      this.sessiionurl=this.url+'?sid='+this.SessionId+'&res='+this.Response;
      console.log('final url==',this.sessiionurl );
      this.showUrl(this.sessiionurl);
    });

  }
  }

  // goto(){
  //   this.storage.get('Response').then((data)=>{
  //     console.log('login_token==',data );
  //     this.Response=data;
  //   });
  //   this.storage.get('SessionId').then((data)=>{
  //     console.log('SessionId1111==',data );
  //     this.SessionId=data;

  //     // this.sessiionurl='?sid={{'+this.SessionId+'}}&res={{'+this.Response;
  //     this.sessiionurl='?sid='+this.SessionId+'&res='+this.Response;

  //     console.log('amit==++++++',this.sessiionurl );


  //   }); 
  // }


  showUrl(link){
    console.log('**link',link);
    this.url = link;	
    
    console.log('**url',this.url);	
  }


}

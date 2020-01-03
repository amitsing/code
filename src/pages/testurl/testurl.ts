import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { InAppBrowser , InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { IonicPage, NavController, NavParams,ToastController, AlertController, Platform } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';

import { Events } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-testurl',
  templateUrl: 'testurl.html',
})
export class TesturlPage {
  sessiionurl: string;
  SessionId: any;
  Response: any;
  url: any;
  allData: any;
  employeeId: any;
  deviceId: any;
  token: any;
  title: any;

  constructor(public navCtrl: NavController,private iab: InAppBrowser,public events: Events,
    public navParams: NavParams,private sanitizer: DomSanitizer,
  private alertCtrl: AlertController,private platform:Platform,public toastCtrl: ToastController,private storage:Storage,private apiServices:ApiServiceProvider) {
    this.url=this.navParams.get('data');

    this.title=this.navParams.get('title');
    console.log('ionViewDidLoad GotonewPage',  this.title);

    this.storage.get('Response').then((data)=>{
      console.log('login_token==',data );
      this.Response=data;
    });


    this.storage.get('SessionId').then((data)=>{
      console.log('SessionId==123',data );
      this.SessionId=data;
    
      // this.sessiionurl=this.url+'?sid='+this.SessionId+'&res='+this.Response;
      // console.log('**1=',this.sessiionurl);
    });
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TesturlPage');

    this.storage.get('Response').then((data)=>{
      console.log('login_token==1111111111',data );
      this.Response=data;
    });


    this.storage.get('SessionId').then((data)=>{
      console.log('SessionId==1233333',data );
      this.SessionId=data;
    
      this.sessiionurl=this.url+'?sid='+this.SessionId+'&res='+this.Response;
      console.log('**final',this.sessiionurl);
      this.showUrl(this.sessiionurl);
    });
    
  }


  showUrl(link){
    console.log('**link',link);
    this.url = link;	
    
    console.log('**url',this.url);	
  }

}

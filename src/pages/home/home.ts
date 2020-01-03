import { Component, NgZone, ViewChild, ElementRef } from '@angular/core';
import {  MenuController } from 'ionic-angular';

import { IonicPage, NavController, NavParams,ToastController,ModalController, Platform, AlertController,Slides } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';

import { FCM } from '@ionic-native/fcm';
import { App } from 'ionic-angular/components/app/app';
import { AndroidPermissions } from '@ionic-native/android-permissions';
@IonicPage({name: 'HomePage'})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  dynamicModule: any[];
  keyforsignout: any;
  recruitsurvey: any;
  employer_award_all_images: any;
  joinehomedata: any=[];
  quizimg: any;
  employeeType: any;
  URL: Promise<any>;
  joining_status: any;
  @ViewChild('countryHeadDataSlides') slides: Slides;
  @ViewChild('videoPlayer') videoplayer: ElementRef;

  survey:any=[];
  skeltonCourse:any;login_token:any;
  daysToJoinPercentage:number;formdata:any;
  totalJourneyCompletedPercentage:number;
  deviceId:any;
  employeeId:any;
  allData:any;forceUpdateVarData:any;allposts:any;
  welcomeData:any;employee_type:any;
  progressGraph: any;
  courseData: any;
  alertInfoMsg:any;
  onboardData:any;
  aboutEvalBg:string='../../assets/imgs/background.png';
  gcmData:any;
  gcmDetailsAllData:any;

  alert121:any;
  public unregisterBackButtonAction: any;
  closeAppPopupShow:number=0;


  getTokenTry:number=1;
  pushToken:any;
  albumVal:any='';
  homeAlbumData:any;
  bgImage ='http://webresizer.com/images2/bird1_after.jpg';
  vid_url='https://www.youtube.com/embed/f5FSu_AWlfw';
  newsVal: any='';
  newsListData: any=[];
  countryHeadVal:number=0;
  countryHeadData: any=[];
  lifeAtEvaData: any=[];
  upperGraphData: any;

  constructor(private app:App,private androidPermissions: AndroidPermissions,
    private menu: MenuController,private fcm: FCM, private alertCtrl: AlertController,private platform:Platform,public events: Events,
    public ngZone: NgZone,public toastCtrl: ToastController,public modalCtrl: ModalController,private storage:Storage,public navCtrl: NavController, public navParams: NavParams,private apiServices:ApiServiceProvider) {
      // this.joineehomedata();
  
    this.storage.get('joining_status').then(data=>{
      this.joining_status=data;
      console.log('login joining_status== ',this.joining_status);
     });


   this.storage.remove('welcome_aboard_applicable').then(data=>{
    // alert('check--'+ data);
   });

     this.storage.get('deviceId').then(data=>{
      this.deviceId=data;
      console.log('login deviceId== ',this.deviceId)
     });


     this.storage.get('showOnBoard').then((data)=>{
      console.log('showOnBoard value is111==',data );
      this.employee_type=data;
      this.lifeAtEvalFun();
      this.camPermissionON();
    });


    this.skeltonCourse=[{
      'course_image':'assets/imgs/learningicons/excel.png',
      'course_name':'MS Excel Advance',
      'total_percent':'0'
    },
    {
      'course_image':'assets/imgs/learningicons/excel.png',
      'course_name':'MS Excel Advance',
      'total_percent':'0'
    },
    {
      'course_image':'assets/imgs/learningicons/excel.png',
      'course_name':'MS Excel Advance',
      'total_percent':'0'
    },
    {
      'course_image':'assets/imgs/learningicons/excel.png',
      'course_name':'MS Excel Advance',
      'total_percent':'0'
    },
    {
      'course_image':'assets/imgs/learningicons/excel.png',
      'course_name':'MS Excel Advance',
      'total_percent':'0'
    },
    {
      'course_image':'assets/imgs/learningicons/excel.png',
      'course_name':'MS Excel Advance',
      'total_percent':'0'
    },
    {
      'course_image':'assets/imgs/learningicons/excel.png',
      'course_name':'MS Excel Advance',
      'total_percent':'0'
    },
    {
      'course_image':'assets/imgs/learningicons/excel.png',
      'course_name':'MS Excel Advance',
      'total_percent':'0'
    },
    {
      'course_image':'assets/imgs/learningicons/excel.png',
      'course_name':'MS Excel Advance',
      'total_percent':'0'
    },
    {
      'course_image':'assets/imgs/learningicons/excel.png',
      'course_name':'MS Excel Advance',
      'total_percent':'0'
    }

    
    ];
    


    this.onboardData=[
      {
      image:"assets/imgs/ceoProfile.png",
      name:"Deepak Gaikward",
      information:"Deepak Gaikward is from Patiala, Punjab. He has completed MBA- Marketing from FMS, Delhi. Deepak has done his internship at Unilever. His internship topic was Consumer Behavior. Deepak loves Chinese food and his favourite holiday destination is Goa. When he is not working, he enjoys playing Football."
    },{
      image:"assets/imgs/ceo.jpg",
      name:"Dhiresh Kumar Shastri",
      information:"Dhiresh Shah is from Shalimar Bagh, Delhi. He has completed MBA- Marketing from FMS, Delhi. Deepak has done his internship at Unilever. His internship topic was Consumer Behavior. Dhiresh loves South Indian food and his favourite holiday destination is Narvey. When he is not working, he enjoys playing Hockey."
    },{
      image:"assets/imgs/welcome.png",
      name:"Pankhil Roy",
      information:"Pankhil Roy is from Patna, Bihar. He has completed MBA- Management from FMS, Delhi. Pankhil has done his internship at Unilever. His internship topic was Consumer Behavior. Pankhil loves Fast Foods and his favourite holiday destination is Island. When he is not working, he enjoys playing Tennis."
    }
  ];

  events.subscribe('reloadHomePage', data => {
    // user and time are the same arguments passed in `events.publish(user, time)`
    console.log('Welcome', data);
    this.storage.get('deviceId').then(data=>{
      this.deviceId=data;
      console.log('login deviceId== ',this.deviceId)
     });
    this.storage.get('employeeId').then(data=>{
      this.employeeId=data;
      this.welcomeData=[];
      this.alertInfoMsg='';
      this.progressGraph=[];
      this.courseData=[];
      // this.homePageData();
    
     }) 
  });
  

  // events.subscribe('keyforsignout', data => {
  //   console.log('keyforsignout', data);
  //   this.signoutConfirmation();

  //    }); 
  



    }
    goToLearnngList(data){
      this.navCtrl.push('LearningListPage',{'data':data});
    }
    
    camPermissionON(){
      //camera permission
      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
        result => console.log('Has permission?',result.hasPermission),
        err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
      );
      
      this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);
    
    //external storage access
    this.androidPermissions.requestPermissions(
      [
          this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE, 
          this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE
      ]
  );

   //external storage access

  // this.androidPermissions.hasPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE)
  //       .then(status => {
  //         if (status.hasPermission) {
  //           // this.captureVideo();
  //         } else {
  //           this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE)
  //           .then(status =>{
  //             // if(status.hasPermission) this.captureVideo();
  //           });
  //         }
  //       })
    
    }

    doRefresh(refresher) {
      console.log('Begin async operation', refresher);
     
      setTimeout(() => {
        console.log('Async operation has ended');
        this.countryHeadData=[];
        this.joinehomedata=[];
        this.lifeAtEvaData=[];
        this.newsListData=[];
        this.joineehomedata();
        this.forcedata();
        this.getcountryHeadMessgaeList();
        this.lifeAtEvalFun();
        this.getOnboardNewsList();
        refresher.complete();
      }, 2000);
    }


      ionViewDidLoad() {
        console.log('ionViewDidLoad HomePage');
        this.storage.get('employeeId').then(data=>{
          this.employeeId=data;
          // this.homePageData();
          this.getOnboardNewsList();
          this.getOnboardAlbumList();
          this.getcountryHeadMessgaeList();
          // this.getPushToken();
          // this.gcmApi();
         });
         this.storage.get('pushNotificationToken').then(data=>{
          let pushToken=data;
          if(data!=''||data!=undefined||data!=null){
          this.gcmApi(pushToken);
          }else{
            this.getPushToken();
          }
         });
          

      }
      ionViewWillEnter(){
        // this.menu.swipeEnable(false);

    


        this.storage.get('joining_status').then(data=>{
          this.joining_status=data;

          // this.events.subscribe('recruitsurvey', (sdata) =>{
          //   this.recruitsurvey=sdata;
          //   console.log('recruitsurvey', sdata);
          //   console.log('recruitsurvey1', this.recruitsurvey);
          // });

          this.storage.get('survey_data').then(sdata=>{
            this.recruitsurvey=sdata;
         
          console.log('login joining_status== ',this.joining_status);

          if(this.joining_status==1){
            console.log('recruitsurvey12', this.recruitsurvey);
            if(this.recruitsurvey.survey_data.length>0){
          
              this.surveyalertfunction(this.recruitsurvey.survey_data[0]);
            }
            else{
              this.alertfunction();
            }

       
           }
          });
         });
    
        this.joineehomedata();
        this.forcedata();
        this.initializeBackButtonCustomHandler();
      }


      homePageData(){

        let apiKey={
          "clientId":this.apiServices.clientId,
          "employeeId":this.employeeId,
          "deviceId":this.deviceId,
          "appVersion":this.apiServices.appVersion,
          "device":this.apiServices.device
        };

    console.log('home page api key==', apiKey);
    this.apiServices.homePageApi(apiKey).then((result) => { 
      console.log('home page message== ',result);
      this.allData=result;
      if(this.allData.success==1){
        let mainData=this.allData.data;
        setTimeout(() => {
          this.welcomeData=mainData;
          this.alertInfoMsg=this.allData.learningMessage;
          console.log('home page all data== ', this.welcomeData);
          this.progressGraph=this.welcomeData.progress;
          console.log('home page progressGraph data== ', this.progressGraph);
          this.courseData=this.welcomeData.learning;
          console.log('home page courseData data== ', this.courseData);
      }, 100);
         
      }else{
        this.apiMessage(this.allData.message);
        
      }
    }, (err) => { 
      console.log('home page err== ',err); 
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

  

//force update function
forcedata() {

//   const forceupdate_webWorker = new Worker('./assets/workers/forceupdate_webWorker.js');
//   forceupdate_webWorker.onmessage = (event) => {
//     this.ngZone.run(() => {
//       this.forceUpdateVarData = event.data;

//       console.log('forceupdate', this.forceUpdateVarData);
//       if(this.forceUpdateVarData.success==2){
//         this.sureSignOut();
//       }
//       this.allposts = this.forceUpdateVarData.data;
//       console.log('forceupdate api response== ', this.allposts);
//       this.checkVersionOfApp(this.allposts);

//     })
//   };

//   this.storage.get('deviceId').then(data=>{
//     this.deviceId=data;
//     console.log('login deviceId== ',this.deviceId)
//    });
//   this.storage.get('employeeId').then((data) => {
//     this.employeeId=data;
// let passkey={
//   "clientId":this.apiServices.clientId,
//   "employeeId":this.employeeId,
//   "device":this.apiServices.device,
//   "deviceId":this.deviceId,
//   "appVersion":this.apiServices.appVersion,
//   "baseURL":this.apiServices.forceupdate_webWorkerURL
// }
//     forceupdate_webWorker.postMessage(passkey);
//   });


  this.storage.get('showOnBoard').then((data)=>{
  console.log('showOnBoard value is111==',data );
  this.employee_type=data;
  });
  this.storage.get('login_token').then((data)=>{
  console.log('showOnBoard value is111==',data );
  this.login_token=data;

  
  // const forceupdate_webWorker = new Worker('./assets/workers/forceupdate_webWorker.js');
  // forceupdate_webWorker.onmessage = (event) => {
  // this.ngZone.run(() => {
  // this.forceUpdateVarData = event.data;
  
  let apiKey={
  "client_id":this.apiServices.clientId,
  "employee_id":this.employeeId,
  "device":this.apiServices.device,
  "device_id":this.deviceId,
  "app_version":this.apiServices.appVersion,
  "employee_type":this.employee_type
  };
  this.apiServices.newForceUpdate(apiKey,this.login_token).subscribe((result) => { 
  console.log('forceupdate11111', result);
  if(result.success==2 && (result.user_status==0 || result.client_status==0)){
    this.apiMessage(result.message);
    this.signoutUserFun();
    return false;
  }
  if(result.success==0){
    this.apiMessage(result.message);
    this.signoutUserFun();
    return false;
  }

  this.allposts = result.data;
  console.log('forceupdate api response== ', this.allposts);
  this.checkVersionOfApp(this.allposts);
  
  });


});


}

   // Check Version And Set token
   checkVersionOfApp(forceupdateData) {
     
//     if (forceupdateData.log_status == '1') {

//       if(forceupdateData.is_force_update=='1'){
//         if (this.apiServices.device=='2') {
      
//       if (parseInt(forceupdateData.android_version) > parseInt(this.apiServices.appVersion)) {

//         this.storage.set('androidVersionLink', forceupdateData.android_link)
//         this.storage.set('androidAppVersion', forceupdateData.version)
//         let param = {
//           'androidLink': forceupdateData.android_link,
//           'iosLink':forceupdateData.ios_link,
//           'optionalupdate':'1'
//         }
//         this.navCtrl.push('ForceUpdatePage', {'data':param});
//       }


//     }
//     else{
//       if (parseInt(forceupdateData.ios_version) > parseInt(this.apiServices.appVersion)) {
//         this.storage.set('IOSVersionLink', forceupdateData.iosLink)
        
//         let param = {
//           'androidLink': forceupdateData.android_link,
//           'iosLink':forceupdateData.ios_link,
//           'optionalupdate':'1'
//         }
//         this.navCtrl.push('ForceUpdatePage',param);
//       }  
//     }
//     }
// if(forceupdateData.is_force_update=='2' && this.apiServices.optionalupdatekey=='1'){
//   let param = {
//     'androidLink': forceupdateData.android_link,
//     'iosLink':forceupdateData.ios_link,
//     'optionalupdate':'2'
//   }
//   this.apiServices.optionalupdatekey='2';
//   this.navCtrl.push('ForceUpdatePage',{'data':param});
// }
//     if(forceupdateData.is_down=="1"){
//       this.navCtrl.push('MaintainancePage');
//     }
//     }else{
//       this.sureSignOut();
//     }

if(forceupdateData.survey_id!=''){
  let modal = this.modalCtrl.create('EvalmadatorysurveyPage',{'surveyid':forceupdateData.survey_id});
   modal.onDidDismiss(()=>{
 
   })
   modal.present();
}




if(forceupdateData.appstatus==1 || forceupdateData.appstatus=='1'){
  let param = {
              'androidLink': forceupdateData.update_link,
              'iosLink':forceupdateData.update_link,
              'optionalupdate':'1'
            }
            this.navCtrl.push('ForceUpdatePage', {'data':param});
}
if(forceupdateData.appstatus==2 || forceupdateData.appstatus=='2'){
  let param = {
              'androidLink': forceupdateData.update_link,
              'iosLink':forceupdateData.update_link,
              'optionalupdate':'2'
            }
          
            if(this.apiServices.newoptionalupdatekey==1){
              this.apiServices.newoptionalupdatekey=this.apiServices.newoptionalupdatekey+1;
              this.navCtrl.push('ForceUpdatePage', {'data':param});
            }

}
if(forceupdateData.log_status==0 || forceupdateData.log_status=='0'){
  this.signoutUserFun();
}


  }

  gcmApi(pushToken){
    this.storage.get('showOnBoard').then((data)=>{
      console.log('showOnBoard value is111==',data );
      this.employee_type=data;
      });
  const GCMapi_webWorker_result = new Worker('./assets/workers/GCMapi_webWorker.js');
  GCMapi_webWorker_result.onmessage = (event) => {
    this.ngZone.run(() => {
      this.gcmData = event.data;
      console.log('gcm api', this.gcmData);  
      
    })
  };
  
  this.storage.get('employeeId').then((data) => {
    this.employeeId=data;
let passkey={
  "client_id":this.apiServices.clientId,
  "employee_id":this.employeeId,
  "device":this.apiServices.device,
  "device_id":this.deviceId,
  "app_version":this.apiServices.appVersion,
  "baseURL":this.apiServices.joineefcmDetails_webWorkerURL,
  "registration_token":pushToken,
  "token":this.login_token,
  "user_type":this.employee_type

}
GCMapi_webWorker_result.postMessage(passkey);
  });


  }
goToProfile(){
  this.navCtrl.push('ProfilePage');
}


seemorebatchmeate(){
  this.navCtrl.push('WelcomOnboardPage');
}

  sureSignOut() {

    let apiKey={
      "packageName": this.apiServices.packageName,
      'employee_id': this.employeeId,
      "device": this.apiServices.device,
      "device_id": this.deviceId,
      "app_version":this.apiServices.appVersion,
      "client_id":this.apiServices.clientId
    }
    this.apiServices.userSignOut(apiKey,this.login_token).subscribe((result) => { 
      console.log('optionalUpdate response== ',result); 
      this.allData=result;
      if(this.allData.success==1){
        this.navCtrl.setRoot('LoginPage');
        this.storage.remove('isFirstLogin').then((val) => {
          console.log('Your age is', val);
        });
        this.storage.remove('isCeoScreenVisit').then((val) => {
          console.log('Your age is', val);
        });
        this.storage.remove('employeeId').then((val) => {
          console.log('Your age is', val);
        this.apiMessage(this.allData.message);
       
        
        });
        
      }else{
        this.apiMessage(this.allData.message); 
       
      }

   })
    
    // this.app.getRootNav().setRoot(LoginPage);
    
  }

  ceoMessage(data){
    this.navCtrl.push('CeoMessageePage',{'data':data});
  }

  gotoAbout(){
    this.navCtrl.push('AboutEvalueservePage');
  }
  seeJoinningInfo(){
    this.navCtrl.push('JoiningDetailsPage');
  }
  
  goTowelcomeOnboardPage(data){
    data.commingFrom="homePgae";
    console.log('**==', data);
    this.navCtrl.push('WelcomeOnboardDetailsPage',{'data':data});
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
        that.showeAlert();
      }else{
        that.alert121.dismiss();
      }
    }, 101); // Priority 101 will override back button handling (we set in app.component.ts) as it is bigger then priority 100 configured in app.component.ts file */
  }

  gotoFu(){
    // let param = {
    //   'androidLink': 'google.co.in',
    //   'iosLink':'www.toi.in',
    //   'optionalupdate':'1'
    // };
    // this.navCtrl.push('ForceUpdatePage', {'data':param});
    this.navCtrl.push('WelcomeScreenPage');
  }



  getPushToken(){
    this.fcm.subscribeToTopic('REACH');
    this.fcm.getToken().then(token => {
      console.log('get token==', token);
      if(token==''||token==undefined){
        if(this.getTokenTry<=2){
          this.getPushToken();
          this.getTokenTry=this.getTokenTry+1;
        }else{
          if(this.getTokenTry==3){
            this.pushToken="";
            this.gcmApi(this.pushToken);
          }
        }
      }else{
        // alert('get token=='+ token);
        this.pushToken=token;
        this.storage.set('pushNotificationToken', token);
        this.gcmApi(this.pushToken);
      }

    });
    
    this.fcm.onNotification().subscribe(data => {
      if(data.wasTapped){
        console.log("Received in background");
      } else {
        console.log("Received in foreground");
      };
    });
    
    this.fcm.onTokenRefresh().subscribe(token => {
      console.log('onTokenRefresh==', token);
      if(token==''||token==undefined){
        if(this.getTokenTry<=2){
          this.getPushToken();
          this.getTokenTry=this.getTokenTry+1;
        }else{
          if(this.getTokenTry==3){
            this.pushToken="";
            this.gcmApi(this.pushToken);
          }
        }
      }else{
        // alert('get token=='+ token);
        this.pushToken=token;
        this.storage.set('pushNotificationToken', token);
        this.gcmApi(this.pushToken);
      }
      // if(token==''||token==undefined){
      //   if(this.getTokenTry<=2){
      //     this.getPushToken();
      //     this.getTokenTry=this.getTokenTry+1;
      //   }
      // }else{
      //   // alert('onTokenRefresh token=='+ token);
      //   this.storage.set('pushNotificationToken', token);
      // }

    });
  }

  goToDynamicModule(item) {
    this.navCtrl.push('OnboardingDynamicModuleListPage', {'data' : item});
  }


  joineehomedata(){
    this.storage.get('deviceId').then(data=>{
      this.deviceId=data;
      console.log('login deviceId== ',this.deviceId)
     });
    this.storage.get('employeeId').then(data=>{
      this.employeeId=data
    });
    this.storage.get('login_token').then((data)=>{
      console.log('showOnBoard value is111==',data );
      this.login_token=data;
    let apiKey={
      "client_id":this.apiServices.clientId,
      "employee_id":this.employeeId,
      "device":this.apiServices.device,
      "device_id":this.deviceId,
      "app_version":this.apiServices.appVersion,
    };
    this.apiServices.joineehomepage(apiKey,this.login_token).subscribe(result =>{
      console.log('joineehomedata==',result );
      // this.formdata=result.data.form_group;
      console.log('upperGraphData==11',result.data);
      this.joinehomedata=result.data;
      this.dynamicModule = this.joinehomedata.dynamic_module;
      this.formdata=result.data.go_to_form;
      this.upperGraphData=result.data.progress;
      this.welcomeData=[];
      this.survey=result.data.survey;
      this.quizimg=result.quiz_background_image;
      this.employer_award_all_images=result.employer_award_all_images;
      console.log('this.allData.alert_count == ',result.alert_count);
      this.events.publish('showsidemenu', result.employee_type,result.country_id);
      this.events.publish('tabbadgedata', result.alert_count);
      console.log('this.formdata==',this.formdata);
      console.log('upperGraphData==',this.upperGraphData);


    })

  })
  }


getOnboardAlbumList(){
  const homeAlbumList_webWorker = new Worker('./assets/workers/albumList_webWorker.js');
  homeAlbumList_webWorker.onmessage = (event) => {
    this.ngZone.run(() => {
      let myhomeAlbumData=event.data;
      console.log('homeAlbumList_webWorker res', myhomeAlbumData);
      if(myhomeAlbumData.success==1){
      this.homeAlbumData = myhomeAlbumData.data;
      }else{
        this.homeAlbumData=[];
      }

      console.log('homeAlbumList_webWorker res', this.homeAlbumData);
      

    })
  };

  this.storage.get('login_token').then((data)=>{
    console.log('login_token==',data );
    this.login_token=data;
  });

  this.storage.get('deviceId').then(data=>{
    this.deviceId=data;
    console.log('login deviceId== ',this.deviceId)
   });
  this.storage.get('employeeId').then((data) => {
    this.employeeId=data;
let passkey={
  "client_id":this.apiServices.clientId,
  "employee_id":this.employeeId,
  "device":this.apiServices.device,
  "device_id":this.deviceId,
  "app_version":this.apiServices.appVersion,
  "baseURL":this.apiServices.albumList_webWorkerURL,
  "token":this.login_token,
  "val":this.albumVal,
  'employee_type':this.employee_type
}
console.log('homeAlbumList_webWorker passing key from home== ',passkey)
  homeAlbumList_webWorker.postMessage(passkey);
  });


}



seeAlbumdetails(data){
  this.navCtrl.push('AlbumDetailsPage',{'data':data});
}



getOnboardNewsList(){
  const newsList_webWorker = new Worker('./assets/workers/newslist_webWorker.js');
  newsList_webWorker.onmessage = (event) => {
    this.ngZone.run(() => {
      let newsList=event.data;
      console.log('newsList_webWorker res', newsList);    
      this.newsListData = newsList.data;
      console.log('newsList_webWorker res', this.newsListData);    
    })
  };

  this.storage.get('login_token').then((data)=>{
    console.log('login_token==',data );
    this.login_token=data;
  });

  this.storage.get('deviceId').then(data=>{
    this.deviceId=data;
    console.log('login deviceId== ',this.deviceId)
   });
  this.storage.get('employeeId').then((data) => {
    this.employeeId=data;
let passkey={
  "client_id":this.apiServices.clientId,
  "employee_id":this.employeeId,
  "device":this.apiServices.device,
  "device_id":this.deviceId,
  "app_version":this.apiServices.appVersion,
  "baseURL":this.apiServices.onboardNewsList_webWorkerURL,
  "token":this.login_token,
  "val":this.newsVal,
  'employee_type':this.employee_type

}
console.log('homeAlbumList_webWorker passing key from home== ',passkey)
newsList_webWorker.postMessage(passkey);
  });
}

getcountryHeadMessgaeList(){
  const countryHeadMessgae_webWorker = new Worker('./assets/workers/countryHeadMessgaeList_webWorker.js');
  countryHeadMessgae_webWorker.onmessage = (event) => {
    this.ngZone.run(() => {
      let allData=event.data;
      console.log('countryHeadMessgae_webWorker res', allData);  
      if(allData.success==1){
        if(this.countryHeadData==undefined){
          this.countryHeadData = allData.data;
          console.log('countryHeadMessgae_webWorker res', this.countryHeadData);
        }else{
          this.countryHeadData= this.countryHeadData.concat(allData.data);
          console.log('countryHeadMessgae_webWorker res', this.countryHeadData);
        }
            
      }else{

      }  
    })
  };

  this.storage.get('login_token').then((data)=>{
    console.log('login_token==',data );
    this.login_token=data;
  });

  this.storage.get('deviceId').then(data=>{
    this.deviceId=data;
    console.log('login deviceId== ',this.deviceId)
   });
  this.storage.get('employeeId').then((data) => {
    this.employeeId=data;
let passkey={
  "client_id":this.apiServices.clientId,
  "employee_id":this.employeeId,
  "device":this.apiServices.device,
  "device_id":this.deviceId,
  "app_version":this.apiServices.appVersion,
  "baseURL":this.apiServices.countryHeadMsgList_webWorkerURL,
  "token":this.login_token,
  "val":this.countryHeadVal,
  'employee_type':this.employee_type

}
console.log('countryHeadMessgae_webWorker passing key from home== ',passkey)
countryHeadMessgae_webWorker.postMessage(passkey);
  });
}

  gotourllist(grpid,data){
    console.log('this.grpid==',grpid);
    if(grpid==''||grpid==undefined){
      //pass url in iframe page
      // this.URL=data.url;

      this.navCtrl.push('GotonewPage',{'data':data.url,'title':data.title});
    }else{
      this.navCtrl.push('UrllistPage',{'grpid':grpid});
    }

  }

gotoAlbumCat(){
  this.navCtrl.push('AlbumListPage');
}
  
toggleVideo(){
  console.log('toggleVideo ');
  this.videoplayer.nativeElement.play();
}
  gotoLifeEval(data){
    this.navCtrl.push('LifeAtEvalDetailsPage', {'data':data})
  }

  countryHeadSlideChanged(){
   let ind= this.slides.getActiveIndex();
   console.log('slider index', ind);
   if(ind==this.countryHeadData.length-1){
    this.countryHeadVal=this.countryHeadData.length;
    this.getcountryHeadMessgaeList();
   }

  }


  lifeAtEvalFun(){
    this.storage.get('login_token').then((data)=>{ this.login_token=data;})

    this.storage.get('employeeId').then(data => {this.employeeId = data;})
    this.storage.get('deviceId').then(data=>{
      this.deviceId=data;
      console.log(' deviceId== ',this.deviceId);
     
    let apiKey={

      "client_id":this.apiServices.clientId,
      "employee_id":this.employeeId,
      "device":this.apiServices.device,
      "device_id":this.deviceId,
      "app_version":this.apiServices.appVersion,
      "user_type":this.employee_type
    };
    console.log('lifeAtEval key==', apiKey);
    this.apiServices.lifeAtEvalueserve(apiKey, this.login_token).subscribe(result => {
    console.log(' lifeAtEval response== ',result); 
    let allData=result;
    if(result.success==1){
      this.lifeAtEvaData=allData.data;
    }else{
      this.lifeAtEvaData=[];
    }
    
    }, (err) => { 
    console.log('optionalUpdate err== ',err); 
    }); 

  });


  }
  


  alertfunction() {
    let alert = this.alertCtrl.create({
      // title: 'SIGNOUT!',
      message: 'Welcome Aboard ! You have completed the Onboarding . Kindly Sign out and Log in with your Official Email DI.',
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'Logout',
          handler: () => {
            this.signoutUserFun();
            // this.gothroughalertnextques();
          }
        },
      ]

    });

    alert.present();

  }

  surveyalertfunction(recruitsurvey) {
    let alert = this.alertCtrl.create({
      // title: 'SIGNOUT!',
      message: recruitsurvey.survey_message,
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.navCtrl.push('TestsurveyPage', { 'surveyid': recruitsurvey.survey_id,'recruitcheck':1});
          }
        },
      ]

    });

    alert.present();

  }


  goToOnboarding(data){
    console.log("data",data)
    this.navCtrl.push('OnboardingFormsPage',{'data':data});
  }


  signoutUserFun(){

    this.storage.get('showOnBoard').then((data) => {
      console.log('showOnBoard value is111==', data);
      this.employeeType = data;
    })
    this.storage.get('employeeId').then(data => {
      this.employeeId = data;
      console.log(' employeeId== ', this.employeeId);
    });
    this.storage.get('login_token').then((data) => {
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
        "employee_type": this.employeeType
      };
      this.apiServices.userSignoutApi(apiKey, this.login_token)
        .subscribe((res) => {
          if(res.success==1){
            this.storage.remove('welcome_aboard_applicable').then(res=>{
              console.log('res=', res);
            });
            this.storage.remove('joining_status').then(res=>{
              console.log('res=123', res);
            });
            this.storage.remove('showOnBoard').then(res=>{
              console.log('res=', res);
            });
            this.storage.remove('login_token').then(res=>{
              console.log('res=', res);
            });
            this.storage.remove('employee_type').then(res=>{
              console.log('res=', res);
            });
            this.storage.remove('Response').then(res=>{
              console.log('res=', res);
            });
            this.storage.remove('email_id').then(res=>{
              console.log('res=', res);
            });
            this.storage.remove('employeeId').then(res=>{
              console.log('res=', res);
            });
            this.storage.remove('SessionId').then(res=>{
              console.log('res=', res);
            });
            this.storage.remove('Response').then(res=>{
              console.log('res=', res);
            });
            // this.storage.remove('SessionId').then(res=>{});
            // this.apiMessage(res.message);
            // this.rootPage='ChooseUserPage';
            // this.navCtrl.setRoot('ChooseUserPage');
            this.app.getRootNav().setRoot('ChooseUserPage');
          }else{
            this.apiMessage(res.message);
          }
          
        })

      })
      
  }

  gotosurvey(data){
    console.log("datasurvey",data)
    // this.navCtrl.push('SurveydetailPage',{'surveyid':data.auto_id});

    // this.navCtrl.push('TestsurveyPage', { 'surveyid': data.auto_id, 'allData':data  });

    if(data.is_instruction==0|| data.is_instruction=='0'){
      this.navCtrl.push('TestsurveyPage', { 'surveyid': data.auto_id, 'allData':data  });
    }else{
      this.navCtrl.push('SurveyInstructionPage', { 'surveyid': data.auto_id, 'allData':data  });
    }

  }
  gotoquiz(){
    this.navCtrl.push('JoineequizinstructionPage');
  }
  gotojoineeaward(imgdetail){
    console.log('imgdetail',imgdetail);
    this.navCtrl.push('JoineeawardPage',{'imgdetail':imgdetail});
  }
  gotojoineeawardetail(){
    this.navCtrl.push('JoineeawardPage',{'imgdetail':this.employer_award_all_images});
  }

  // signoutConfirmation(){
  //   let alert = this.alertCtrl.create({
  //     message: 'Are you sure to Logout from this app?',
  //     buttons: [
  //       {
  //         text: 'No',
  //         role: 'cancel',
  //         handler: () => {
  //           console.log('Cancel clicked');
  //         }
  //       },
  //       {
  //         text: 'Yes',
  //         handler: () => {
  //           console.log('Buy clicked');

  //           this.signoutUserFun();

  //         }
  //       }
  //     ]
  //   });
  //   alert.present();
  // }


}

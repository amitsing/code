import { Component, ViewChild,NgZone } from '@angular/core';
import { Nav, Platform,ToastController,AlertController,Events} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Storage } from '@ionic/storage';
import { ApiServiceProvider } from '../providers/api-service/api-service';
import { Device } from '@ionic-native/device';
import { Network } from '@ionic-native/network';
import { FCM } from '@ionic-native/fcm';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { InAppBrowser,InAppBrowserEvent,InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { App } from 'ionic-angular/components/app/app';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  isAvailable: Boolean;
  connectSubscription:any;
  disconnectSubscription: any;



  profile_pic_upload: any;
  user_image: any;
  usertype: any;ctry_id:any;
  emptype: any;
  login_token: any;newsdata:any;
  employeeId: any;
  employeeType: any;
  welcome_aboard_applicable: any;
  showDummyScreen:boolean=true;
  profileUrl:any;
  @ViewChild(Nav) nav: Nav;
  appVersion=4;allData:any;
  optnaldata:any;
  rootPage: any;toastMessage:any;
  pages: Array<{title: string, component: any}>;
  menuItems: any[] ;

  options : InAppBrowserOptions = {
    location : 'no',
    hidden : 'no',
    // clearcache : 'yes',
    // clearsessioncache : 'yes',
    zoom : 'yes',
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no',
    closebuttoncaption : 'Back',
    closebuttoncolor:'#f04141',
    disallowoverscroll : 'no',
    toolbar : 'yes',
    enableViewportScale : 'no',
    allowInlineMediaPlayback : 'no',
    presentationstyle : 'pagesheet',
    fullscreen : 'yes',
    footer:'yes',
    footercolor:'#939399',
   };

  deviceUuid: any;
  deviceId: any;

  getTokenTry:number=1;
  walkthrough: any;
  otherid: any;
  constructor(public platform: Platform,private app:App, public statusBar: StatusBar, public splashScreen: SplashScreen,private iab: InAppBrowser,
    private toastCtrl: ToastController, private network: Network,public events: Events,public androidPermissions: AndroidPermissions,
    private storage: Storage,private alertCtrl: AlertController, private apiServices:ApiServiceProvider,
    private device: Device,private fcm: FCM, private zone:NgZone) {
    this.initializeApp();
    // showmenu

    // if(this.usertype=='' || this.usertype==undefined){
    //   this.storage.get('showOnBoard').then((data)=>{
    //     this.usertype=data;
    //     console.log('showOnBoard value is111==',data );
    //     if(data=='Employee'){
    //       this.sidemenu(this.usertype);
    //     }
    //  if(data=='Guest'){
       
    //   this.sidemenu(this.usertype);
    //     }
    //   });
    // }

    this.events.subscribe('profile_url', (data)=>{
      this.profileUrl = data;
    });

    // if(this.usertype=='' || this.usertype==undefined){
    //   this.storage.get('showOnBoard').then((data)=>{
    //     this.usertype=data;
    //     console.log('showOnBoard value is111==',data );
    //     if(data=='Employee'){
    //       this.storage.get('country_id').then(data=>{
    //         this.ctry_id=data;
    //         console.log(' country_id==888881111 ',this.ctry_id);
    //         this.sidemenu(this.usertype,this.ctry_id);
    //       });
    //     }
    //  if(data=='Guest'){
    //   this.storage.get('country_id').then(data=>{
    //     this.ctry_id=data;
    //     console.log(' country_id==88888 ',this.ctry_id);
    //     this.sidemenu(this.usertype,this.ctry_id);
    //   });
    //     }
    //   });
    // }




    // this.events.subscribe('showsidemenu', (data) =>{
    //   console.log('showsidemenu', data);
    //   this.usertype=data;
    //   if(this.usertype=='' || this.usertype==undefined){
    //   this.storage.get('showOnBoard').then((data)=>{
    //     this.usertype=data;
    //     console.log('showOnBoard value is111==',data );
    //     if(data=='Employee'){
    //       this.sidemenu(this.usertype);
    //     }
    //  if(data=='Guest'){
       
    //   this.sidemenu(this.usertype);
    //     }
    //   });

    // }
    // else{
    //   this.sidemenu(this.usertype);
    // }
   
    // });

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
    });


    this.storage.get('deviceId').then((data) => {
      this.deviceId = data;
    });




    this.events.subscribe('showsidemenu', (data,ctry_id) =>{
      console.log('showsidemenu', data);
      console.log('cty_id', ctry_id);
      this.ctry_id=ctry_id;
      console.log('this.ctry_id', this.ctry_id);
      this.usertype=data;
      if(this.usertype=='' || this.usertype==undefined){
      this.storage.get('showOnBoard').then((data)=>{
        this.usertype=data;
        console.log('showOnBoard value is111==',data );
        if(data=='Employee'){
          this.sidemenu(this.usertype,this.ctry_id);
        }
     if(data=='Guest'){
      this.sidemenu(this.usertype,this.ctry_id);
        }
      });
    }
    else{
      this.sidemenu(this.usertype,this.ctry_id);
    }
    });

  }


  takePermission(){
    if (this.platform.is('cordova')) {
      this.platform.ready().then(() => {
       this.androidPermissions.requestPermissions(
          [
            this.androidPermissions.PERMISSION.CAMERA,
            // androidPermissions.PERMISSION.CALL_PHONE,
            // androidPermissions.PERMISSION.GET_ACCOUNTS,
            this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE,
            this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE
          ]
        );
   })
      }
  }

  sidemenu(usertype,ctry_id){
    this.ctry_id=ctry_id;
    // alert(usertype)
    if(usertype=='Guest'){
      this.menuItems = [
        {
          name: 'Home',
          page: 'TabsPage',
          icon:'assets/imgs/sidemenuhome.png',
          id:1,
          type:'img'
        },
    
        {
          name: 'Contact Us',
          page: 'ContactusPage',
          icon:'assets/imgs/hambergerIcons/icons_0001_phone.png',
          id:3,
          type:'img'
        },
        {
          name: 'Update Mobile Number',
          page: 'JoineeupdatenumberPage',
          icon:'assets/imgs/phonehamberger.png'
        },
        {
          name: 'FAQs',
          page: 'FaqPage',
          icon:'assets/imgs/FAQs.png',
          id:4,
          type:'img'
        },
        {
          name: 'Logout',
          page: 'TabsPage',
          icon:'',
          id:5,
          type:'icon',
          iconName:'log-out'
        },
      
      
      ];
console.log("side",this.menuItems );
    }
    if(usertype=='Employee'){
      // this.storage.get('country_id').then(data=>{
      //   this.ctry_id=data;
      //   console.log(' country_id111== ',this.ctry_id);
      
    if(this.ctry_id=='2'){
      this.menuItems = [
        {
          name: 'Home',
          page: 'TabsPage',
          icon:'assets/imgs/sidemenuhome.png',
          id:1,
          type:'img'
        },
        {
          name: 'My Profile',
          page: 'ProfilePage',
          icon:'assets/imgs/profile.png',
          id:3,
          type:'img'
        },
     
        {
          name: 'My Points',
          page: 'MyrewardsPage',
          icon:'assets/imgs/hambergerIcons/icons_0009_points.png',
          id:3,
          type:'img'
        },
  
        {
          name: 'My Order',
          page: 'MyvouchersPage',
          icon:'assets/imgs/hambergerIcons/icons_0000_voucher.png',
          id:3,
          type:'img'
        },

        {
          name: 'My Awards',
          page: 'MyawardsPage',
          icon:'assets/imgs/hambergerIcons/icons_0007_trophy.png',
          id:3,
          type:'img'
        },
        {
          name: 'My Certificates',
          page: 'MycertificatesPage',
          icon:'assets/imgs/hambergerIcons/icons_0002_My-certificates_icon.png',
          id:3,
          type:'img'
        },
        {
          name: 'Terms of Use',
          page: 'PrivacypolicyPage',
          icon:'assets/imgs/hambergerIcons/icons_0003_images-copy-2.png',
          id:3,
          type:'img'
        },
        {
          name: 'Contact Us',
          page: 'ContactusPage',
          icon:'assets/imgs/hambergerIcons/icons_0001_phone.png',
          id:3,
          type:'img'
        },

        {
          name: 'Logout',
          page: '',
          icon:'',
          id:5,
          type:'icon',
          iconName:'log-out'
        }
    
      
      ];
    }
    else{
    
    this.menuItems = [
      {
        name: 'Home',
        page: 'TabsPage',
        icon:'assets/imgs/sidemenuhome.png',
        id:1,
        type:'img'
      },
    
      {
        name: 'Profile',
        page: 'ProfilePage',
        icon:'assets/imgs/profile.png',
        id:3,
        type:'img'
      },
   
      // {
      //   name: 'My Points',
      //   page: 'MyrewardsPage',
      //   icon:'assets/imgs/hambergerIcons/icons_0009_points.png',
      //   id:3,
      //   type:'img'
      // },
      {
        name: 'My Awards',
        page: 'MyawardsPage',
        icon:'assets/imgs/hambergerIcons/icons_0007_trophy.png',
        id:3,
        type:'img'
      },
      {
        name: 'My Certificates',
        page: 'MycertificatesPage',
        icon:'assets/imgs/hambergerIcons/icons_0002_My-certificates_icon.png',
        id:3,
        type:'img'
      },
      {
        name: 'Terms of Use',
        page: 'PrivacypolicyPage',
        icon:'assets/imgs/hambergerIcons/icons_0003_images-copy-2.png',
        id:3,
        type:'img'
      },
      {
        name: 'Contact Us',
        page: 'ContactusPage',
        icon:'assets/imgs/hambergerIcons/icons_0001_phone.png',
        id:3,
        type:'img'
      },
 
      {
        name: 'Logout',
        page: '',
        icon:'',
        id:5,
        type:'icon',
        iconName:'log-out'
      }
    
    ];
  }
    // });
  }
  }


  getPushToken(){
    let self = this;
    this.fcm.subscribeToTopic('REACH');
    this.fcm.getToken().then(token => {
      // alert(token);
      console.log('get token==', token);
      if(token==''||token==undefined){
        if(this.getTokenTry<=2){
          this.getPushToken();
          this.getTokenTry=this.getTokenTry+1;
        }
      }else{
        // alert('get token=='+ token);
        this.storage.set('pushNotificationToken',token);
        // alert(token);
      }

    });
    
    this.fcm.onNotification().subscribe(data => {
      console.log("Received in pushdata",data);
      if(data.wasTapped){
        console.log("Received in background",data);
        self.checkcondition(data);

      } else {

        let confirmAlert = this.alertCtrl.create({
          title: 'New Notification',
          message: data.body,
          buttons: [{
            text: 'Ignore',
            role: 'cancel'
          }, {
            text: 'View',
            handler: () => {
              self.checkcondition(data);
            }
          }]
        });
        confirmAlert.present();

        console.log("Received in foreground");
      };
    });
    
    this.fcm.onTokenRefresh().subscribe(token => {
      console.log('onTokenRefresh==', token);
      console.log('get token==', token);
      if(token==''||token==undefined){
        if(this.getTokenTry<=2){
          this.getPushToken();
          this.getTokenTry=this.getTokenTry+1;
        }
      }else{
        // alert('onTokenRefresh token=='+ token);
        this.storage.set('pushNotificationToken', token);
      }

    });
  }

  checkcondition(data) {
    console.log('checkdata==', data);
    // alert('data id == '+data.id);
    // alert(data.flag);
    let self = this;
    if (data.flag == '1') {
    // alert(data.id);
    console.log('checkdata==123', data.id);
    self.nav.push('EmpnewsdetailPage',{'data':data,'pushkey':1}); 
  }
  else if (data.flag == '9') {
    self.nav.push('LeadershiptalkdetailPage',{'data':data,'pushkey':1}); 
}
else if (data.flag == '38') {
  self.nav.push('HomeawardsdetailPage',{'nominationData':data,'pushkey':1}); 
}
else if (data.flag == '7') {
  self.nav.push('NoticeDetailsPage',{'data':data,'pushkey':1}); 
}
else if (data.flag == '12') {
  self.nav.push('WelcomeOnboardDetailsPage',{'data':data,'pushkey':1}); 
}
else if(data.flag == '5'){
  self.nav.push('ThoughtOfTheDayPage'); 
}
else if(data.flag == '24'){
  self.nav.push('HealthAndWellnessDetailsPage',{'data':data,'pushkey':1}); 
}
else if(data.flag == '10'){
  self.nav.push('BadgeBoardPage'); 
}
else if(data.flag == '11'){
  self.nav.push('AlbumImageSliderPage',{'data':data,'pushkey':1}); 
}
else if(data.flag == '26'){
  self.nav.push('TestsurveyPage',{'allData':data,'pushkey':1}); 
}
else if(data.flag == '41'){
  self.nav.push('ContestdetailPage',{'data':data,'pushkey':1}); 
}

else if(data.flag == '44'){
  self.nav.push('MyrewardsPage'); 
}
else if(data.flag == '51'){
  console.log("data.other_id",data.other_id);
this.otherid=(data.other_id == undefined)?0:1;
console.log("data.this.otherid",this.otherid);
  if(this.otherid == 1){
    console.log("data.PhotowallImageSliderPage3",data.other_id);
    self.nav.push('PhotowallImageSliderPage',{'data':data,'pushkey':1}); 
  }
  if(this.otherid == 0){
    console.log("data.PhotowallAllImagesPage4",data.other_id);
    self.nav.push('PhotowallAllImagesPage',{'data':data,'pushkey':1}); 
  }
 
}

else if(data.flag == '31'){
  self.nav.push('CommunityDetailsPage',{'data':data,'pushkey':1}); 
}
else{
  // self.nav.setRoot('NewHomePage'); 


  this.app.getRootNav().setRoot('TabsPage');
}

  }



  initializeApp() {
    this.platform.ready().then(() => {
    // Okay, so the platform is ready and our plugins are available.
    // Here you can do any higher level native things you might need.
    this.statusBar.styleDefault();
    this.splashScreen.hide();

      if (this.platform.is('cordova')) {
        this.deviceUuid=this.device.uuid;
        this.deviceId = this.deviceUuid==null?"browser":this.deviceUuid;
    if(this.deviceId=="browser"){
        this.deviceUuid=this.device.uuid;
        this.deviceId = this.deviceUuid==null?"browser":this.deviceUuid;
        if(this.deviceId=="browser"){
          this.deviceUuid=this.device.uuid;
          this.deviceId = this.deviceUuid==null?"browser":this.deviceUuid;
  
    }else{
      this.storage.set('deviceId', this.deviceId);
      }
  }else{
    this.storage.set('deviceId', this.deviceId);
  
    }

    this.getPushToken();

    }else{

      this.storage.set('deviceId', 'browser');
    }
    
this.optionalUpdate();
// this.checkNetwork();
// this.network.onDisconnect().subscribe(() => {
//   console.log('you are offline');
//   this.apiMessage('You are not connected with Internet');
// });

// this.network.onConnect().subscribe(()=> {
//   console.log('you are online');
//   this.apiMessage('Internet connected');
// });

this.statusBar.overlaysWebView(false);
this.statusBar.backgroundColorByHexString('#3e203a');
this.takePermission();

//internet detection code start
this.connectSubscription = this.network.onConnect().subscribe(() => {
  console.log('network connected!');
  // this.isAvailable =true;
  this.zone.run(() => { 
    setTimeout(() => { 
  this.isAvailable = true;
},0) 
}); 


});

this.disconnectSubscription = this.network.onDisconnect().subscribe(() => {
  console.log('network onDisconnect!');
  this.zone.run(() => { 
    setTimeout(() => { 
  this.isAvailable = false;
},0) 
}); 

});



//internet detection code end


    });



  }

  // openPage(page) {
  
  //   if(page.page=='TabsPage'){
  //     this.nav.setRoot(page.page);
  //   }
  //   else{
  //     this.nav.push(page.page);
  //   }

  // }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
if(page.id==5){
this.signoutConfirmation();
}
else if(page.id==10){

  this.nav.setRoot(page.page);
  // this.events.publish('keyforsignout', 1);
}
else{
    if(page.page=='TabsPage'){
      this.nav.setRoot(page.page);
    }
    else{
      if(page.page=="ProfilePage"){
        // let alert = this.alertCtrl.create({
        //   // title: 'SIGNOUT!',
        //   message: 'Employee to  redirect at AX profile page',
        //   enableBackdropDismiss: false,
        //   buttons: [
        //     {
        //       text: 'Ok',
        //       handler: () => {
        //       // this.nav.push('QuizResultPage');
        //         // this.gothroughalertnextques();
        //       }
        //     },
        //   ]
        // });
        // alert.present();
        this.analyticApi();

        const browser = this.iab.create(this.profileUrl, '_blank', this.options)
      }
      else{
        this.nav.push(page.page);
      }



      // this.nav.push(page.page);
    }
  }

  }
  analyticApi(){
    this.storage.get('employee_type').then((user) => {
      console.log('thoughtOftheDayApi value is111==', user);
      let user_Type = user;
    this.storage.get('deviceId').then(data => {
      this.deviceId = data;
      let apiKey = {
        "client_id": this.apiServices.clientId,
        "employee_id": this.employeeId,
        "device": this.apiServices.device,
        "device_id": this.deviceId,
        "app_version": this.apiServices.appVersion,
        "track_flag": "47", 
        "type" : "detail",
        "user_type" : user_Type,
      };
      this.apiServices.analyticApi(apiKey,this.login_token).subscribe(res=>{
        console.log(res);
      })
    });
  });
  }
  // signoutConfirmation(){
  //   let alert = this.alertCtrl.create({
  //     // title: 'Confirm purchase',
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
  signoutConfirmation(){
    let alert = this.alertCtrl.create({
      // title: 'Confirm purchase',
      message: 'Are you sure to Logout from this app?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Buy clicked');

            this.removeMyStorage();

          //   this.storage.get('showOnBoard').then((data) => {
          //     console.log('showOnBoard value is111==', data);
          //     this.employeeType = data;
          //     if(this.employeeType=='Employee'){
             
          //       this.removeMyStorage();
          //     }
          //  if(this.employeeType=='Guest'){
          //   this.removeMyStorage();
          //     }
          //   });



          }
        }
      ]
    });
    alert.present();
  }
 
 
  // signoutUserFun(){

  //   this.storage.get('showOnBoard').then((data) => {
  //     console.log('showOnBoard value is111==', data);
  //     this.employeeType = data;
  //   })
  //   this.storage.get('employeeId').then(data => {
  //     this.employeeId = data;
  //     console.log(' employeeId== ', this.employeeId);
  //   });
  //   this.storage.get('login_token').then((data) => {
  //     this.login_token = data;
  //   })

  //   this.storage.get('deviceId').then(data => {
  //     this.deviceId = data;
  //     let apiKey = {
  //       "client_id": this.apiServices.clientId,
  //       "employee_id": this.employeeId,
  //       "device": this.apiServices.device,
  //       "device_id": this.deviceId,
  //       "app_version": this.apiServices.appVersion,
  //       "employee_type": this.employeeType
  //     };
  //     this.apiServices.userSignoutApi(apiKey, this.login_token)
  //       .subscribe((res) => {
  //         if(res.success==1){
  //           // this.storage.clear();
  //           this.storage.remove('welcome_aboard_applicable').then(res=>{
  //             console.log('res=', res);
  //           });
  //           this.storage.remove('joining_status').then(res=>{
  //             console.log('res=', res);
  //           });
  //           this.storage.remove('showOnBoard').then(res=>{
  //             console.log('res=', res);
  //           });
  //           this.storage.remove('login_token').then(res=>{
  //             console.log('res=', res);
  //           });
  //           this.storage.remove('employee_type').then(res=>{
  //             console.log('res=', res);
  //           });
  //           this.storage.remove('Response').then(res=>{
  //             console.log('res=', res);
  //           });
  //           this.storage.remove('email_id').then(res=>{
  //             console.log('res=', res);
  //           });
  //           this.storage.remove('employeeId').then(res=>{
  //             console.log('res=', res);
  //           });
  //           this.storage.remove('SessionId').then(res=>{
  //             console.log('res=', res);
  //           });
  //           this.storage.remove('Response').then(res=>{
  //             console.log('res=', res);
  //           });
  //           // this.storage.remove('SessionId').then(res=>{});
  //           this.apiMessage(res.message);
  //           // this.rootPage='ChooseUserPage';

  //           this.nav.setRoot('ChooseUserPage');

  //         }else{
  //           this.apiMessage(res.message);
  //         }
          
  //       })

  //     })
      
  // }

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
    });
    this.storage.get('deviceId').then((data) => {
      this.deviceId = data;
    });
    this.storage.get('showOnBoard').then((data) => {
      console.log('showOnBoard value is111==', data);
      this.employeeType = data;
if(this.employeeType=="Employee" ||this.employeeType=="employee"){
  const browser = this.iab.create("https://benepik.in/reach/samladfslogin.php?requestType=slo&deviceType=app&device="+this.apiServices.device+"&device_id="+this.deviceId+"&employee_id="+this.employeeId+"&login_token="+this.login_token+"",  '_blank', this.options);
  browser.on('loadstop').subscribe((event: InAppBrowserEvent) => {
    console.log("LOG: API Response== ", event);
    console.log(event.url);
  browser.executeScript({code: 'document.getElementById("myptag").innerText'}).then( html => { 
    console.log('html==',html);
    let xyz=JSON.parse(html);
    console.log('parse html==',xyz);
    if(xyz.success==1){
      // alert('go to home page');
      
      browser.close();
            this.storage.remove('welcome_aboard_applicable').then(res=>{
              console.log('res=', res);
            });
            this.storage.remove('joining_status').then(res=>{
              console.log('res=', res);
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
            this.nav.setRoot('ChooseUserPage');
    }else if(xyz.success==0){
      // alert('go to login page');
      browser.close();
      let alert = this.alertCtrl.create({
        title: 'Alert',
        subTitle: xyz.message,
        buttons: [{
          text: 'OK',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
      });
      alert.present();
     
      this.removeMyStorage();
    }
   },err=>{
    console.log('html err==',err);
   });
  });
  browser.on('exit').subscribe((event: InAppBrowserEvent) => {
  browser.executeScript({code: 'document.getElementById("myptag").innerText'}).then( html => { 
    console.log('exit html==',html);
   });
  }, err => {
    // alert("InAppBrowser exit Event Error: " + err);
  });
}else{
this.removeMyStorage();
}
    });
      
  }
  removeMyStorage(){
    this.storage.get('showOnBoard').then((data) => {
      console.log('showOnBoard value is111==', data);
      this.employeeType = data;
    });
    this.storage.get('employeeId').then(data => {
      this.employeeId = data;
      console.log(' employeeId== ', this.employeeId);
    });
    this.storage.get('login_token').then((data) => {
      this.login_token = data;
    });

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
            // this.storage.clear();
            this.storage.remove('welcome_aboard_applicable').then(res=>{
              console.log('res=', res);
            });
            this.storage.remove('joining_status').then(res=>{
              console.log('res=', res);
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
            this.apiMessage(res.message);
            // this.rootPage='ChooseUserPage';
            this.nav.setRoot('ChooseUserPage');
          }else{
            this.apiMessage(res.message);
          }
          
        })
      })
  }


  optionalUpdate() { 
    this.storage.get('welcome_aboard_applicable').then(data => {
      console.log('employeeId==', data)
      this.welcome_aboard_applicable=data;
    });

    let apiKey={
      "client_id":'CO-31'
    };
    this.apiServices.maintainance(apiKey).then((result) => { 

    console.log('maintainance response== ',result);
    this.optnaldata=result
    this.allData=this.optnaldata.data;
  
    if(this.optnaldata.success==1){
      if(parseInt(this.allData.is_down)==1){       
        this.nav.setRoot('MaintainancePage');
        this.showDummyScreen=false;
      }

        else{

          this.storage.get('welcome_aboard_applicable').then(data => {
            console.log('employeeId==', data)
            this.welcome_aboard_applicable=data;
          });

    this.storage.get('employeeId').then(data => {
      console.log('employeeId==', data);
      if(data!=null){
        this.showDummyScreen=false;
        this.storage.get('showOnBoard').then(data => {
        this.emptype=data;
      if(this.emptype=='Employee'){
        // this.rootPage='TabsPage';
        this.storage.get('tncView').then(tnc_data => {
         
          if(tnc_data==1){
              //t&c already accepted
              
        this.storage.get('welcome_aboard_applicable').then(welOnBoard_data => {
              
          if(welOnBoard_data==1){
            //welcom onboard is not submitting therefor go to welcome on-board page
            // this.navCtrl.push('AplicantwelcomePage');
            this.rootPage='AplicantwelcomePage';

          }else{
            // this.rootPage='CatgoriesPage';profile_pic_upload

            this.storage.get('profile_pic_upload').then(data => {
              this.profile_pic_upload = data;
              console.log(' deviceId== ', this.user_image);

              if(this.profile_pic_upload=='0'){

                this.rootPage='FirstimguploadPage';
              }else{
        
             //welcom onboard is already submitted
             this.storage.get('community_tag_show').then(commTag => {
              if(commTag==1){
                // go to community tag select page

                this.rootPage='CatgoriesPage';
              }else{
                //community tag has selected
                this.rootPage='TabsPage';
                // this.rootPage='UpdatemobilenoPage';
              }
             });



                // }
              
              }




            });





            //  //welcom onboard is already submitted
            //  this.storage.get('community_tag_show').then(commTag => {
            //   if(commTag==1){
          
            //     this.rootPage='CatgoriesPage';
            //   }else{
              
            //     this.rootPage='TabsPage';
            //   }
            //  });
            
  
          }

        });
          }else{
 //go to t&c page
 
 this.rootPage='TermsAndConditionsPage';
          }

        })

      }
else{

  this.showDummyScreen=false;
        this.storage.get('tncView').then(data => {
          console.log("applicant 1 key",data);
        if(data!=1){
            this.rootPage='TermsAndConditionsPage';
        }else{
        this.storage.get('welcome_aboard_applicable').then(data => {
          console.log('employeeId==', data);
          this.welcome_aboard_applicable=data;
          if(this.welcome_aboard_applicable==1){      
          this.rootPage='AplicantwelcomePage'
          // this.rootPage='SlideThreeImagePage'
          this.showDummyScreen=false;
        }else{

          this.storage.get('walkthrough').then(data => {
            console.log('employeeId==', data)
            this.walkthrough=data;

            if(this.walkthrough=='0'){
              // this.navCtrl.setRoot('WalkthroughScreenPage');
              this.rootPage='WalkthroughScreenPage';
            }else{
              // this.navCtrl.setRoot('TabsPage');
              this.rootPage='TabsPage';
            }
          });
          
          // this.rootPage='JoineequizquestionPage';
          // this.rootPage='TabsPage';
          this.showDummyScreen=false;
        }

        });
      }
      });
    }
    });
      }
        else{

          this.storage.get('ontanc').then(data => {
            console.log('employeeId==', data)
            // this.welcome_aboard_applicable=data;
          if(data==1){
            this.rootPage='ChooseUserPage';
          }else{
            this.rootPage='SlideThreeImagePage';
          }
          
          });

         
          this.showDummyScreen=false;
        }
     }
     ,error => {console.log('app component secure storage== ',error)});
        }
    }





    }
    


    , (err) => { 
    console.log('optionalUpdate err== ',err); 
    }); 


    }

    


    apiMessage(message) {
      this.toastMessage = this.toastCtrl.create({
        message: message,
        duration: 3000
      });
      this.toastMessage.present();
    }

    // handleClick(event) {
    //   if (event.target.tagName == "A") {
    //     // open link using inappbrowser
    //    this.iab.create(event.target.href, "_system");
    //     return false;
    //   }
    // }


}

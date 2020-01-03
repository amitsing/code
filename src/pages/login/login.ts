import { Component } from '@angular/core';
import { IonicPage, NavController,LoadingController, NavParams,ToastController,Events, AlertController, Platform,MenuController, } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import { FCM } from '@ionic-native/fcm';

@IonicPage({name: 'LoginPage'})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  applicentdata: any;
  email: any;
  employeealldata: any;
  employeeData: any;
  deviceId: any;
  emailId:string='';
  password:string='';
  btnText='Sign In'
  allData:any;
  newJoineeData:any;newjoineealldata:any;
  emailIsOk:boolean=false;passwordIsShowing:boolean=false;
  poweredByImagehide:boolean=false;

  alert121:any;
  public unregisterBackButtonAction: any;
  closeAppPopupShow:number=0;

  contentClassBg:any="bg";
  getTokenTry:number=1;
  previousePageData:any;
  loading:any;
  constructor(private fcm: FCM,public loadingCtrl: LoadingController,private alertCtrl: AlertController,
    private platform:Platform,private menu: MenuController,public events: Events,
    public toastCtrl: ToastController,private storage:Storage,public navCtrl: NavController, public navParams: NavParams,private apiServices:ApiServiceProvider) {
    this.previousePageData=this.navParams.get('data');
    console.log('previouse Page Data123', this.previousePageData);
    this.email=this.navParams.get('email');
    console.log('previouse Page Data', this.previousePageData);
     this.storage.get('deviceId').then(data=>{
      this.deviceId=data;
      console.log('login deviceId== ',this.deviceId)
     })  
  }
  //Common Loader:
  commonLoader() {
    this.loading = this.loadingCtrl.create({
      enableBackdropDismiss: true,
      spinner: 'ios-small',
      content: 'Loading data...'
    });
    this.loading.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.storage.get('pushNotificationToken').then(data=>{
      let pushToken=data;
      if(data!=''||data!=undefined||data!=null){
     
      }else{
        this.getPushToken();
      }
     });
  
  }


  getPushToken(){
    this.fcm.subscribeToTopic('REACH');
    this.fcm.getToken().then(token => {
      console.log('get token==', token);
      if(token==''||token==undefined){
        if(this.getTokenTry<=2){
          this.getPushToken();
          this.getTokenTry=this.getTokenTry+1;
        }
      }else{
        // alert('get token=='+ token);
        this.storage.set('pushNotificationToken', token);
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


  viewPass(pass){
    if(pass==false){
      this.passwordIsShowing=true;
    }else{
      this.passwordIsShowing=false;
    }
  }
  

  validateEmail(email){
    // console.log(email);
    var regexEmail = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
if (regexEmail.test(email)) {
    this.emailIsOk=true;
} else {
    this.emailIsOk=false;
}
  }
  login(email, pass) { 
    this.btnText='Please wait...';
    let apiKey={
      "packageName": this.apiServices.packageName,
      "emailId": email,
      "password": pass,
      "device": this.apiServices.device,
      "deviceId": this.deviceId,
      "appVersion":this.apiServices.appVersion
    };
    this.emailId='';
    this.password='';
    console.log('login api key==', apiKey);
    this.apiServices.loginUser(apiKey).then((result) => { 
    console.log('optionalUpdate response== ',result); 
    this.allData=result;
    if(this.allData.success==1){
      this.storage.set('employeeId',this.allData.data.employee_id);
      this.storage.set('isFirstLogin',this.allData.data.is_first_login);
      this.storage.set('isCeoScreenVisit',this.allData.data.is_first_ceoMsg);
      this.storage.set('isCeoScreenVisit',this.allData.data.is_first_ceoMsg);
      this.storage.set('userImage',this.allData.data.user_image);
      this.storage.set('isFormSubmit',this.allData.data.is_first_formSubmit);

      this.storage.set('showOnBoard',this.allData.data.employee_type);

      
      //show onboard page or home page
      //showOnBoard==guest --> home page else other new home page on tab
      // this.storage.set('showOnBoard',2);

      if(this.allData.data.is_first_login==1){
          this.navCtrl.setRoot('WelcomeScreenPage');
      }
      else if(this.allData.data.is_first_formSubmit==1){
        this.navCtrl.setRoot('ProfilePicUploadPage');
      }
      // else if(this.allData.data.user_image==''){
      //     this.navCtrl.setRoot('ProfilePicUploadPage');
      // }
      
      else if(this.allData.data.is_first_ceoMsg==1){
        this.navCtrl.setRoot('CeoMessageePage');
      }else{
        this.navCtrl.setRoot('HomePage');
      }

      this.btnText='Sign In';
    }else{
      this.btnText='Sign In';
      this.apiMessage(this.allData.message);
    }
    
    }, (err) => { 
    console.log('optionalUpdate err== ',err); 
    this.apiMessage(err);
    this.btnText='Sign In';
    }); 


    }

    apiMessage(message) {
      const toast = this.toastCtrl.create({
        message: message,
        duration: 4500
      });
      toast.present();
    }
  goToHome(){
    // this.navCtrl.setRoot('FirstWelcomeAboardPage');ImageUploadPage
    this.navCtrl.push('ProfilePicUploadPage');
  }
  goToForgotPasswrd(){
    this.navCtrl.push('ForgotPasswordPage');
  }

  checkBlur(){
    console.log('change class==');
    this.contentClassBg="bg";
    this.poweredByImagehide=false;

  }

  checkFocus(){
    console.log('change class11==');
    this.contentClassBg="bg1";
    this.poweredByImagehide=true;
  }


goBack(){
  this.navCtrl.pop();
}
ionViewWillEnter(){
  this.menu.swipeEnable(false);
// this.initializeBackButtonCustomHandler();
}

newEmpLogin(email,pass){
  // this.btnText='Please wait...';
  let apiKey={
    "email_id":email,
    "package_name":this.apiServices.packageName,
    "device":this.apiServices.device,
    "device_id":this.deviceId,
    "password":pass
  };


if(this.previousePageData=='applicant'){


  console.log('optionalUpdate response== ',apiKey); 
  this.apiServices.newJoinee(apiKey).then((result) => { 
    console.log('result== ',result); 
    this.newJoineeData=result;
    console.log('this.allData== ',this.newJoineeData); 
    console.log('this.newJoineeData.data.employee_id== ',this.newJoineeData.data.employee_id); 
    this.newjoineealldata=this.newJoineeData.data;
    if(this.newJoineeData.success==1){
      this.storage.set('employeeId',this.newjoineealldata.employee_id);
      this.storage.set('contact',this.newjoineealldata.contact);
      this.storage.set('email_id',this.newjoineealldata.email_id);
      this.storage.set('employee_type',this.newjoineealldata.employee_type);
      this.storage.set('first_name',this.newjoineealldata.first_name);
      this.storage.set('last_name',this.newjoineealldata.last_name);
      this.storage.set('login_token',this.newjoineealldata.login_token);
      this.storage.set('middle_name',this.newjoineealldata.middle_name);
      this.storage.set('user_image',this.newjoineealldata.user_image);
      this.storage.set('user_status',this.newjoineealldata.user_status);
      this.storage.set('showOnBoard',this.newjoineealldata.employee_type);
      
       this.navCtrl.setRoot('TabsPage');
    }
    else{
      this.apiMessage(this.newJoineeData.message);
    }

  })
  ,
  (err) => { 
   console.log('optionalUpdate err== ',err); 
   this.apiMessage(err);
   }

  }

  if(this.previousePageData=='employee'){


    console.log('optionalUpdate response== ',apiKey); 
    this.apiServices.employeelogin(apiKey).then((result) => { 
      console.log('result== ',result); 
      this.employeeData=result;
      console.log('this.allData== ',this.employeeData); 
      // console.log('this.newJoineeData.data.employee_id== ',this.newJoineeData.data.employee_id); 
      this.employeealldata=this.employeeData.data;
      if(this.employeeData.success==1){
        this.storage.set('employeeId',this.employeealldata.employee_id);
        this.storage.set('contact',this.employeealldata.contact);
        this.storage.set('email_id',this.employeealldata.email_id);
        this.storage.set('employee_type',this.employeealldata.employee_type);
        this.storage.set('first_name',this.employeealldata.first_name);
        this.storage.set('last_name',this.employeealldata.last_name);
        this.storage.set('login_token',this.employeealldata.login_token);
        this.storage.set('middle_name',this.employeealldata.middle_name);
        this.storage.set('user_image',this.employeealldata.user_image);
        this.storage.set('user_status',this.employeealldata.user_status);
        this.storage.set('showOnBoard',this.employeealldata.employee_type);
        
         this.navCtrl.setRoot('TabsPage');
      }
      else{
        this.apiMessage(this.employeealldata.message);
      }
  
    })
    ,
    (err) => { 
     console.log('optionalUpdate err== ',err); 
     this.apiMessage(err);
     }

  }

}

applicent(pass){
  this.commonLoader();
  let apiKey={

    "email_id":this.email,
    "device":this.apiServices.device,
    "device_id":this.deviceId,
    "password":pass,
    "app_version":this.apiServices.appVersion

  };
  console.log('optionalUpdate response== ',apiKey); 
  this.apiServices.axlogin(apiKey).subscribe((result) => { 
    this.loading.dismiss();
    console.log('result==bfsssss ',result);
 
if(result.success==1){
 
  this.applicentdata=result.data; 
if(this.applicentdata.joining_status==1)
{
// if(this.applicentdata.survey_data.length>0){
  this.storage.set('survey_data',this.applicentdata);
  // this.events.publish('recruitsurvey', this.applicentdata);
// }

}
  this.storage.set('Response',result.Response);
  this.storage.set('SessionId',result.SessionId);
  this.storage.set('employeeId',this.applicentdata.employee_id);
  this.storage.set('email_id',this.applicentdata.email_id);
  this.storage.set('employee_type',this.applicentdata.employee_type);
  this.storage.set('first_name',this.applicentdata.first_name);
  this.storage.set('last_name',this.applicentdata.last_name);
  this.storage.set('login_token',this.applicentdata.login_token);
  this.storage.set('showOnBoard',this.applicentdata.employee_type);
  this.storage.set('tncView',this.applicentdata.t_and_c_accept);
  this.storage.set('joining_status',this.applicentdata.joining_status);
  this.storage.set('user_image',this.applicentdata.user_image);
  this.storage.set('walkthrough',this.applicentdata.walkthrough);
  this.storage.set('country_id',this.applicentdata.country_id);
  this.storage.set('welcome_aboard_applicable',this.applicentdata.welcome_aboard_applicable);
  this.events.publish('showsidemenu', this.applicentdata.employee_type,this.applicentdata.country_id);


if(this.applicentdata.t_and_c_accept==1){
//mat dikhao tnc
if(this.applicentdata.welcome_aboard_applicable==1){
  this.navCtrl.push('AplicantwelcomePage');
}else{


  if(this.applicentdata.walkthrough=='0'){
    this.navCtrl.setRoot('WalkthroughScreenPage');
  }else{
    this.navCtrl.setRoot('TabsPage');
  }
  // this.navCtrl.setRoot('WalkthroughScreenPage');

  //this.navCtrl.setRoot('TabsPage');
}
}else{
  //dikaho tnc
  this.navCtrl.push('TermsAndConditionsPage');
}
// if(this.applicentdata.welcome_aboard_applicable==1){
//   this.navCtrl.push('AplicantwelcomePage');
//   // this.navCtrl.push('TermsAndConditionsPage');
// }
// if(this.applicentdata.welcome_aboard_applicable==0){
//   this.navCtrl.setRoot('TabsPage');
// }

}else{
  this.apiMessage(result.message);
}

    // this.navCtrl.push('AplicantwelcomePage');
  })
  ,
  (err) => { 
   console.log('optionalUpdate err== ',err); 
   this.apiMessage(err);
   }


}


employee(pass){
  // alert('1');
  this.commonLoader();
  let apiKey={
    "email_id":this.email,
    "package_name":this.apiServices.packageName,
    "device":this.apiServices.device,
    "device_id":this.deviceId,
    "password":pass

  };


  console.log('optionalUpdate response== ',apiKey); 
  this.apiServices.employeelogin(apiKey).then((result) => { 
    this.loading.dismiss();
    console.log('result== ',result); 
    this.employeeData=result;
    console.log('this.allData== ',this.employeeData); 
    // console.log('this.newJoineeData.data.employee_id== ',this.newJoineeData.data.employee_id); 
    this.employeealldata=this.employeeData.data;
    if(this.employeeData.success==1){
      this.storage.set('employeeId',this.employeealldata.employee_id);
      this.storage.set('contact',this.employeealldata.contact);
      this.storage.set('tncView',this.employeealldata.t_and_c_accept);
      this.storage.set('email_id',this.employeealldata.email_id);
      this.storage.set('employee_type',this.employeealldata.employee_type);
      this.storage.set('first_name',this.employeealldata.first_name);
      this.storage.set('last_name',this.employeealldata.last_name);

      let empName=this.employeealldata.first_name+' '+this.employeealldata.last_name;

      this.storage.set('employee_name',empName);

      this.storage.set('login_token',this.employeealldata.login_token);
      this.storage.set('middle_name',this.employeealldata.middle_name);
      this.storage.set('user_image',this.employeealldata.user_image);
      this.storage.set('user_status',this.employeealldata.user_status);
      this.storage.set('showOnBoard',this.employeealldata.employee_type);
      this.storage.set('community_tag_show',this.employeealldata.community_tag_show);
      this.storage.set('country_id',this.employeealldata.country_id);
      // this.events.publish('showsidemenu', this.employeealldata.employee_type);
      this.events.publish('showsidemenu', this.employeealldata.employee_type,this.employeealldata.country_id);
 

  this.storage.set('welcome_aboard_applicable',this.employeealldata.welcome_aboard_applicable);

      this.storage.set('discounting_token', this.employeealldata.discountingToken).then(res=>{
        console.log('discountingToken==', res);
      });

      if(this.employeealldata.t_and_c_accept==1){
        //t&c already accepted

        if(this.employeealldata.welcome_aboard_applicable==1){
          //welcom onboard is not submitting therefor go to welcome on-board page
          this.navCtrl.push('AplicantwelcomePage');
        }else{
           //welcom onboard is already submitted
           

// if(this.employeealldata.user_image==''){

  if(this.employeealldata.profile_pic_upload=='0'){

  this.storage.set('profile_pic_upload',this.employeealldata.profile_pic_upload);
  this.navCtrl.setRoot('FirstimguploadPage');
}

else{
  if(this.employeealldata.community_tag_show==1){
    // go to community tag select page
    this.navCtrl.setRoot('CatgoriesPage');
  }else{
    //community tag has selected
    this.navCtrl.setRoot('TabsPage');
  }

}

       

        }
      }else{
      //go to t&c page
        this.navCtrl.push('TermsAndConditionsPage',{'profile_pic_upload':this.employeealldata.profile_pic_upload});
      }

      // if(this.employeealldata.t_and_c_accept==1){
      
      //   if(this.employeealldata.welcome_aboard_applicable==1){
      //     this.navCtrl.push('AplicantwelcomePage');
      //   }else{
      //     this.navCtrl.setRoot('TabsPage');
      //   }
      //   }else{
        
      //     this.navCtrl.push('TermsAndConditionsPage');
      //   }





      //  this.navCtrl.setRoot('TabsPage');
    }

else{
  this.apiMessage(this.employeeData.message);
}

    // this.navCtrl.push('AplicantwelcomePage');
  })
  ,
  (err) => { 
   console.log('optionalUpdate err== ',err); 
   this.apiMessage(err);
   }


}


}

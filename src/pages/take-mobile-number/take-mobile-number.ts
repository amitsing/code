import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, Platform ,MenuController} from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the TakeMobileNumberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-take-mobile-number',
  templateUrl: 'take-mobile-number.html',
})
export class TakeMobileNumberPage {
  show_skip: any;
  walkthrough: any;
  welcome_aboard_applicable: any;
  profile_pic_upload: any;
 
  profilekey: any;

  @ViewChild('phoneNUmber') phoneNUmber;

  tanckey: any;
  countryCodeList:any; apiKey:any;
  countryCode:any;
  employee_type:any;
  deviceId: any;
  login_token: any;
  employeeId: any;
  btnText:string='Next';
  skipbtnText:string='Skip';
  btnEnable:boolean=false;
  myselectedCountryCode:string='';
  contactNum:string='';
  contry_Code:any;
constructor(public navCtrl: NavController, public navParams: NavParams,private menu: MenuController,
    private alertCtrl: AlertController, private platform: Platform, 
    public toastCtrl: ToastController, private storage: Storage,
    private apiServices: ApiServiceProvider)  {
   this.tanckey=this.navParams.get('tanckey');
   this.profile_pic_upload=this.navParams.get('profile_pic_upload');
   this.show_skip=this.navParams.get('show_skip');
   this.profilekey=this.navParams.get('profilekey');
      this.storage.get('showOnBoard').then((data)=>{
        console.log('showOnBoard value is111==',data );
        this.employee_type=data;
      });
  }

  ionViewDidLoad() {
    // this.countryCode='+94';
    // this.optionsFn(this.countryCode);
    console.log('ionViewDidLoad TakeMobileNumberPage');
    // this.countryCodeList=['+91', '+92', '+93', '+94', '+95'];
    this.getDetails();
  }
  checkcode(contry_Code){
    console.log(contry_Code);
    let c_cod = ' '+contry_Code;
    if(c_cod.trim().length>0 && c_cod.trim().length<4){
      // this.btnEnable=true;
      this.contry_Code = contry_Code;
      console.log("c code", this.contry_Code);
    }else if(c_cod.trim().length==0){}
    else if(c_cod.trim().length>=4){
      this.phoneNUmber.setFocus();
    }

    if(this.contry_Code!=null && this.contry_Code != '' && this.contactNum!=null && this.contactNum!= '' && this.contactNum.length>=10){
      this.btnEnable =true;
    }
  }

  checkContact(contactnumber){
    console.log('contactnumber',contactnumber);
    this.contactNum=contactnumber;
    let num=' '+contactnumber;
    if(num.trim().length>=1){
      if(this.myselectedCountryCode!=''){
        this.contactNum=contactnumber;
        this.btnEnable=true;
      }else{
        //next button disable
        // this.btnEnable=false;
      }
      if(this.contry_Code!=null && this.contry_Code != '' && this.contactNum!=null && this.contactNum!= ''  && this.contactNum.length>=10){
        this.btnEnable =true;
      }

    }else{
      //next button disable
      this.btnEnable=false;
    }
  }

  optionsFn(code){
    console.log('country code', code);
    this.myselectedCountryCode=code;
    let num=' '+this.contactNum;
    if(num.trim().length>=1){
      //next button disable
      // this.btnEnable=true;
    }else{
      //next button disable
      // this.btnEnable=false;
    }
    
  }

  getDetails(){
    // this.navCtrl.push('FillOtpPage');
    this.storage.get('showOnBoard').then((data)=>{
      console.log('showOnBoard value is111==',data );
      this.employee_type=data;
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
        "user_type":this.employee_type, 
      };
      this.apiServices.getContactInfo(apiKey, this.login_token)
        .subscribe((res) => {
          console.log('getdetails', res);
          if (res.success == 1) {
            //country code list and user number if have         
            // this.countryCodeList=res.all_country_code;
            console.log('countryCodeList', this.countryCodeList);
        // if(res.data.validate_mobile!=0){
        //  this.contactNum=res.data.validate_mobile;
        //         }
            
            this.checkContact(res.data.contact);
            // this.countryCode=res.data.country_code[0];
            this.checkcode(res.data.country_code)
            this.optionsFn(this.countryCode);
            
          } else {
            this.apiMessage(res.message);
            // this.countryCodeList=res.all_country_code;
            console.log('countryCodeList else', this.countryCodeList);
          }
  
        }, (err) => {
          console.log('err== ', err);
          this.apiMessage(err);
  
        });
  
    });
  }


  submitNumber(){
    // this.navCtrl.push('FillOtpPage');

    if(this.contactNum=='' || this.contactNum==undefined){
      this.btnEnable=false;
    }
   
    this.btnText='Please wait...';

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
if(this.profilekey=='1'){
  this.apiKey = {
    "client_id":this.apiServices.clientId,
    "employee_id":this.employeeId,
    "device":this.apiServices.device,
    "device_id":this.deviceId,
    "app_version":this.apiServices.appVersion,
    "user_type":this.employee_type,
    "validate_mobile": this.contactNum,
    // "tc_id":this.tanckey,
    "country_code":this.contry_Code,
    "flag":'profile'
  };
}else{
  this.apiKey = {
    "client_id":this.apiServices.clientId,
    "employee_id":this.employeeId,
    "device":this.apiServices.device,
    "device_id":this.deviceId,
    "app_version":this.apiServices.appVersion,
    "user_type":this.employee_type,
    "validate_mobile": this.contactNum,
    "tc_id":this.tanckey,
    "country_code":this.contry_Code,
    "flag":'tc'
  };
}

 
      this.apiServices.submitMobileNumber(this.apiKey, this.login_token)
        .subscribe((res) => {
          console.log('otp', res);
        
          if (res.success == 1) {
            if(this.profilekey=='1'){
              this.tanckey=res.auto_id;
            }
           
            this.navCtrl.push('FillOtpPage',{'mobileNumber':this.contactNum,'tanckey':this.tanckey,'county_code':this.contry_Code,'profilekey':this.profilekey,
            'profile_pic_upload':this.profile_pic_upload,'show_skip':this.show_skip}); 
            this.apiMessage(res.message);
            this.btnText='Next';      
          } else {
            this.apiMessage(res.message);
            this.btnText='Next'; 
            this.btnEnable=true;   
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


  ionViewWillEnter(){
    this.menu.swipeEnable(false);
}

showeAlert() {
  let alert = this.alertCtrl.create({
    // title: 'App termination',
    message: 'Are you sure you want to skip?',
    buttons: [{
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Application exit prevented!');
      }
    }, {
      text: 'Ok',
      handler: () => {
        this.skiptc(); // Close this application
      }
    }]
  });
  alert.present();
}




skiptc(){
  // if(this.contactNum=='' || this.contactNum==undefined){
  //   this.btnEnable=false;
  // }
 
  // this.skipbtnText='Please wait...';

  this.storage.get('showOnBoard').then((data)=>{
    console.log('showOnBoard value is111==',data );
    this.employee_type=data;
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

this.apiKey = {
  "client_id":this.apiServices.clientId,
  "employee_id":this.employeeId,
  "device":this.apiServices.device,
  "device_id":this.deviceId,
  "app_version":this.apiServices.appVersion,
  "user_type":this.employee_type,
  "tc_id":this.tanckey,

};

    this.apiServices.skiptc(this.apiKey, this.login_token)
      .subscribe((res) => {
        console.log('otp', res);
        if (res.success == 1) {
          console.log('otp', res);
          this.storage.set('tncView',1);
     
if(this.employee_type=='Employee'){

          this.storage.get('welcome_aboard_applicable').then(data => {
          
            if(data==1){
              //welcom onboard is not submitting therefor go to welcome on-board page
              this.navCtrl.push('AplicantwelcomePage');
            }else{


      if(this.profile_pic_upload=='0'){
        this.storage.set('profile_pic_upload',this.profile_pic_upload);
        this.navCtrl.setRoot('FirstimguploadPage');
         }

         
          else{
        //welcom onboard is already submitted
               this.storage.get('community_tag_show').then(commTag => {
                if(commTag==1){
                  // go to community tag select page
                  this.navCtrl.setRoot('CatgoriesPage');
                }else{
                  //community tag has selected
                  this.navCtrl.setRoot('TabsPage');
                }
               });
              
              }
            }

          });

        }
else{
  this.storage.get('welcome_aboard_applicable').then(data => {
    console.log('employeeId==', data);
    this.welcome_aboard_applicable=data;
    if(this.welcome_aboard_applicable==1){      
      this.navCtrl.push('AplicantwelcomePage');
  }else{

    this.storage.get('walkthrough').then(data => {
      console.log('employeeId==', data)
      this.walkthrough=data;

      if(this.walkthrough=='0'){
        this.navCtrl.setRoot('WalkthroughScreenPage');
      }else{
        this.navCtrl.setRoot('TabsPage');
      }
    });
  }
});
}
  

        } else {
          this.apiMessage(res.message);
          this.btnText='Next'; 
          this.btnEnable=true;   
        }
      }, (err) => {
        console.log('err== ', err);
        this.apiMessage(err);

      });

  });
}



}

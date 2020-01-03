import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, Platform,MenuController } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-fill-otp',
  templateUrl: 'fill-otp.html',
})
export class FillOtpPage {
  show_skip: any;
  walkthrough: any;
  profile_pic_upload: any;
  profilekey: any;
  tanckey: any;
  tncData: any;
  myotp4: any = '';
  myotp3: any = '';
  myotp2: any = '';
  myotp1: any = '';
  apiKey:any;
  deviceId: any;
  login_token: any;
  employeeId: any;
  employee_type: any;
  mobileNumer: any = '';
  resendOTPText: any = "Resend";
  resendBtnDisable: boolean = false;

  submitBtnText: any = 'Submit';
  submitBtnDisable: boolean = false;
  county_code: any;
  skipbtnText:any='skip';
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private alertCtrl: AlertController, private platform: Platform,private menu: MenuController,
    public toastCtrl: ToastController, private storage: Storage,
    private apiServices: ApiServiceProvider) {
    this.mobileNumer = this.navParams.get('mobileNumber');
    this.tanckey = this.navParams.get('tanckey');
    this.show_skip=this.navParams.get('show_skip');
    this.county_code = this.navParams.get('county_code');
    this.profilekey=this.navParams.get('profilekey');
    this.profile_pic_upload=this.navParams.get('profile_pic_upload');
    console.log('this.mobileNumer==', this.mobileNumer);
    this.storage.get('showOnBoard').then((data) => {
      console.log('showOnBoard value is111==', data);
      this.employee_type = data;
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FillOtpPage==');
    this.mobileNumer = this.navParams.get('mobileNumber');
  }

  resendOTP() {
    // this.navCtrl.push('FillOtpPage');

    this.resendOTPText = "Please wait...";
    this.resendBtnDisable = true;

    // this.navCtrl.push('FillOtpPage');
    // this.btnEnable=false;
    // this.btnText='Please wait...';
    this.mobileNumer = this.navParams.get('mobileNumber');
    console.log('mobile number==', this.mobileNumer);
    this.storage.get('showOnBoard').then((data) => {
      console.log('showOnBoard value is111==', data);
      this.employee_type = data;
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

if(this.profilekey=='1'){

  this.apiKey = {
    "client_id": this.apiServices.clientId,
    "employee_id": this.employeeId,
    "device": this.apiServices.device,
    "device_id": this.deviceId,
    "app_version": this.apiServices.appVersion,
    "user_type": this.employee_type,
    "validate_mobile": this.mobileNumer,
    "tc_id":this.tanckey,
    "country_code":this.county_code,
    "flag":'profile'
  };

}
else{
  this.apiKey = {
    "client_id": this.apiServices.clientId,
    "employee_id": this.employeeId,
    "device": this.apiServices.device,
    "device_id": this.deviceId,
    "app_version": this.apiServices.appVersion,
    "user_type": this.employee_type,
    "validate_mobile": this.mobileNumer,
    "tc_id":this.tanckey,
    "country_code":this.county_code,
    "flag":'tc'
  };
}

      this.apiServices.submitMobileNumber(this.apiKey, this.login_token)
        .subscribe((res) => {
          console.log('otp', res);

          if (res.success == 1) {
            // this.navCtrl.push('FillOtpPage'); 
            this.apiMessage(res.message);

            this.resendOTPText = "Resend";
            this.resendBtnDisable = false;

          } else {
            this.apiMessage(res.message);

            this.resendOTPText = "Resend";
            this.resendBtnDisable = false;

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

  moveFocus(nextElement, val, index) {
    if (index < 4) {
      if (this.myotp2 == undefined || this.myotp2 == '') {
        nextElement.setFocus();
      } else if (this.myotp3 == undefined || this.myotp3 == '') {
        nextElement.setFocus();
      } else if (this.myotp4 == undefined || this.myotp4 == '') {
        nextElement.setFocus();
      }
    } else {

    }


  }

  checkFocus(index) {
    console.log('********', index);
    if (index == 1) {
      this.myotp1 = '';
    } else if (index == 2) {
      this.myotp2 = '';
    } else if (index == 3) {
      this.myotp3 = '';
    } else if (index == 4) {
      this.myotp4 = '';
    }
  }

  submitOtp() {

    this.submitBtnText = 'Please wait...';
    this.submitBtnDisable = true;

    if (this.myotp1 == '' || this.myotp2 == '' || this.myotp3 == '' || this.myotp4 == '') {
      // show alert of mandatory field
      this.apiMessage('all fields are mandatory');

      this.submitBtnText = 'Submit';
      this.submitBtnDisable = false;
    } else {

      let finalOTP = this.myotp1 + '' + this.myotp2 + '' + this.myotp3 + '' + this.myotp4;
      //call send otp api
      this.storage.get('showOnBoard').then((data) => {
        console.log('showOnBoard value is111==', data);
        this.employee_type = data;
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

        if(this.profilekey=='1'){
          this.apiKey = {
          
            "client_id": this.apiServices.clientId,
            "employee_id": this.employeeId,
            "device": this.apiServices.device,
            "device_id": this.deviceId,
            "app_version": this.apiServices.appVersion,
            "user_type": this.employee_type,
            // "otp_server": finalOTP,
            "otp_user": finalOTP,
            "tc_id":this.tanckey,
            "validate_mobile": this.mobileNumer,
            "flag":'profile'

          };
        }
        else{
          this.apiKey = {
           
            "client_id": this.apiServices.clientId,
            "employee_id": this.employeeId,
            "device": this.apiServices.device,
            "device_id": this.deviceId,
            "app_version": this.apiServices.appVersion,
            "user_type": this.employee_type,
            // "otp_server": finalOTP,
            "otp_user": finalOTP,
            "tc_id":this.tanckey,
            "validate_mobile": this.mobileNumer,
            "flag":'tc'

            
          };
        }
        
        




        // let apiKey = {

        //   "client_id": this.apiServices.clientId,
        //   "employee_id": this.employeeId,
        //   "device": this.apiServices.device,
        //   "device_id": this.deviceId,
        //   "app_version": this.apiServices.appVersion,
        //   "user_type": this.employee_type,
        //   "otp_user": finalOTP,
        //   "tc_id":this.tanckey,
        //   "validate_mobile": this.mobileNumer
        // };
        this.apiServices.submitOTP(this.apiKey, this.login_token)
          .subscribe((res) => {
            console.log('otp', res);

            if (res.success == 1) {
              this.storage.set('tncView',1);

if(this.employee_type=='Guest'){
  if(this.profilekey=='1'){
    this.navCtrl.push('UpdatemobilenoPage');
  }
else{

  this.storage.get('welcome_aboard_applicable').then(data => {
  
    if(data==1){
      //welcom onboard is not submitting therefor go to welcome on-board page
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

}
else{
              if(this.profilekey=='1'){
                this.navCtrl.push('UpdatemobilenoPage');
              }
            else{

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
          }
              // this.storage.get('welcome_aboard_applicable').then((data) => {
              //   console.log('showOnBoard value is111==', data);
              //   if (data == 1) {
              //     // this.navCtrl.push('AplicantwelcomePage');


              //   } else {
              //     // this.navCtrl.setRoot('TabsPage');
              //     this.navCtrl.setRoot('WalkthroughScreenPage');
              //   }
              // })

              // this.storage.set('tncView', res.t_and_c_accept);

              this.submitBtnText = 'Submit';
              this.submitBtnDisable = false;

            } else {
              this.apiMessage(res.message);

              this.submitBtnText = 'Submit';
              this.submitBtnDisable = false;
            }

          }, (err) => {
            console.log('err== ', err);
            this.apiMessage(err);

          });

      });
    }


  }



  // submitTnc(){
  //   this.storage.get('showOnBoard').then((data)=>{
  //     console.log('showOnBoard value is111==',data );
  //     this.employee_type=data;
  //   });
  //   this.storage.get('deviceId').then(data=>{
  //     this.deviceId=data;
  //     console.log(' deviceId== ',this.deviceId);

  //   let apiKey={
  //     "client_id":this.apiServices.clientId,
  //     "employee_id":this.employeeId,
  //     "device":this.apiServices.device,
  //     "device_id":this.deviceId,
  //     "app_version":this.apiServices.appVersion,
  //     "user_type":this.employee_type      
  //   };
  //   console.log('seeNewsdetails api key==', apiKey);
  //   this.apiServices.submitTncApi(apiKey, this.login_token).subscribe(result => {
  //   console.log(' seeNewsdetails data response== ',result); 
  //   this.tncData=result;
  //   if(this.tncData.success==1){

  //     this.navCtrl.push('AplicantwelcomePage');

  //     // this.navCtrl.push('TakeMobileNumberPage');

  //     this.storage.set('tncView',this.tncData.t_and_c_accept);
  //   }else{
  //     this.apiMessage(this.tncData.message);
  //   }

  //   }, (err) => { 
  //   console.log('optionalUpdate err== ',err); 
  //   // this.apiMessage(err);

  //   }); 

  // });
  // }
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

 
  // this.skipbtnText='Please wait...';

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
          this.storage.set('tncView',1);

          if(this.employee_type=='Guest'){
            if(this.profilekey=='1'){
              this.navCtrl.push('UpdatemobilenoPage');
            }
          else{
          
            this.storage.get('welcome_aboard_applicable').then(data => {
            
              if(data==1){
                //welcom onboard is not submitting therefor go to welcome on-board page
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
          
          }
          else{
                        if(this.profilekey=='1'){
                          this.navCtrl.push('UpdatemobilenoPage');
                        }
                      else{
          
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
                    }



        } else {
          this.apiMessage(res.message);
          // this.btnText='Next'; 
          // this.btnEnable=true;   
        }
      }, (err) => {
        console.log('err== ', err);
        this.apiMessage(err);

      });

  });
}




}

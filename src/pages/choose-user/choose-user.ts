import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams,AlertController, Platform,MenuController } from 'ionic-angular';
import { PopoverController, IonicPage, NavController, LoadingController, Events, NavParams, ToastController, AlertController, Platform, MenuController } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import { InAppBrowser, InAppBrowserEvent, InAppBrowserOptions } from '@ionic-native/in-app-browser';

@IonicPage({ name: 'ChooseUserPage' })
@Component({
  selector: 'page-choose-user',
  templateUrl: 'choose-user.html',
})
export class ChooseUserPage {

  options: InAppBrowserOptions = {
    location: 'no',
    hidden: 'no',
    clearcache: 'yes',
    clearsessioncache: 'yes',
    zoom: 'yes',
    hardwareback: 'yes',
    mediaPlaybackRequiresUserAction: 'no',
    shouldPauseOnSuspend: 'no',
    closebuttoncaption: 'Back',
    closebuttoncolor: '#f04141',
    disallowoverscroll: 'no',
    toolbar: 'yes',
    enableViewportScale: 'no',
    allowInlineMediaPlayback: 'no',
    presentationstyle: 'pagesheet',
    fullscreen: 'yes',
    footer: 'no',
    footercolor: '#939399',
  };


  applicentdata: any;
  email: any;
  employeealldata: any;
  employeeData: any;;
  deviceId: any;
  emailId: string = '';
  password: string = '';
  btnText = 'Sign In'
  allData: any;
  newJoineeData: any; newjoineealldata: any;
  emailIsOk: boolean = false; passwordIsShowing: boolean = false;
  poweredByImagehide: boolean = false;

  alert121: any;
  public unregisterBackButtonAction: any;
  closeAppPopupShow: number = 0;

  contentClassBg: any = "bg";
  getTokenTry: number = 1;
  previousePageData: any;
  loading: any;


  ////

  constructor(private iab: InAppBrowser, public events: Events, public popoverCtrl: PopoverController, private alertCtrl: AlertController, public loadingCtrl: LoadingController, private platform: Platform, private menu: MenuController,
    public toastCtrl: ToastController, private storage: Storage, public navCtrl: NavController, public navParams: NavParams, private apiServices: ApiServiceProvider) {

    this.storage.get('deviceId').then(data => {
      this.deviceId = data;
      console.log('login deviceId== ', this.deviceId)
    });
    this.presentPopover();
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

  presentPopover() {
    let myEvent;
    let popover = this.popoverCtrl.create('PopoverLoginPage');
    popover.present({
      ev: myEvent
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseUserPage');
  }
  goToLogin(email) {
    this.storage.get('deviceId').then(data => {
      this.deviceId = data;
      console.log('login deviceId== ', this.deviceId)
    })
    if (this.emailIsOk == false) {
      let msg = 'please Enter valid Email Id';
      this.apiMessage(msg);
      return false;
    }
    this.email = email;
    this.commonLoader()
    let apiKey = {
      "email_id": email,
      "device": this.apiServices.device,
      "device_id": this.deviceId,
    };
    this.apiServices.emailverification(apiKey).subscribe((result) => {
      console.log('optionalUpdate response== ', result);
      this.loading.dismiss();
      this.allData = result;
      if (result.success == 1) {

        if (result.flag == 'employee') {
          //****************smal integration testing************** */
          //  this.storage.get('deviceId').then(data=>{
          //    this.deviceId=data;
          //    console.log('login deviceId== ',this.deviceId)
          //  this.SAMLIntegration(result.flag);
          //   }) 


          this.navCtrl.push('LoginPage', { 'data': result.flag, 'email': email });

          // // //****************endsmal integration testing************** */
        }
        if (result.flag == 'applicant') {
          this.navCtrl.push('LoginPage', { 'data': result.flag, 'email': email });
        }

        // this.navCtrl.push('LoginPage',{'data':result.flag,'email':email});

      } else {

        this.apiMessage(result.message);
      }



    }, (err) => {
      console.log('optionalUpdate err== ', err);
      this.apiMessage(err);

    });




    // this.navCtrl.push('LoginPage',{'data':data});
  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
    this.initializeBackButtonCustomHandler();
  }
  //Hardware Back Button

  initializeBackButtonCustomHandler(): void {
    let that = this;
    this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function (event) {
      that.closeAppPopupShow++;
      if (that.closeAppPopupShow % 2 != 0) {
        that.showeAlert();
      } else {
        that.alert121.dismiss();
      }
    }, 101); // Priority 101 will override back button handling (we set in app.component.ts) as it is bigger then priority 100 configured in app.component.ts file */
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
  checkBlur() {
    console.log('change class==');
    this.contentClassBg = "bg";
    this.poweredByImagehide = false;

  }

  checkFocus() {
    console.log('change class11==');
    this.contentClassBg = "bg1";
    this.poweredByImagehide = true;
  }
  validateEmail(email) {
    console.log(email);
    var regexEmail = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
    if (regexEmail.test(email)) {
      this.emailIsOk = true;
      console.log("this.emailIsOk", this.emailIsOk);
    } else {
      this.emailIsOk = false;
      console.log("this.emailIsOk", this.emailIsOk);
    }
  }

  apiMessage(message) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 4500
    });
    toast.present();
  }

  ///////////////

  //****************integration testing************** */
  SAMLIntegration(prevData) {
    console.log('prviouse page data==', prevData);
    if (prevData == 'employee') {
      //   this.options = {
      //     location : 'no',
      //     hidden : 'no', 
      //     // clearcache : 'yes',
      //     // clearsessioncache : 'yes',
      //     zoom : 'yes',
      //     hardwareback : 'yes',
      //     mediaPlaybackRequiresUserAction : 'no',
      //     shouldPauseOnSuspend : 'no', 
      //     closebuttoncaption : 'Close',
      //     closebuttoncolor:'#f04141',
      //     disallowoverscroll : 'no',
      //     toolbar : 'yes', 
      //     enableViewportScale : 'no', 
      //     allowInlineMediaPlayback : 'no',
      //     presentationstyle : 'pagesheet',
      //     fullscreen : 'yes',
      //     footer:'yes',
      //     footercolor:'#444444',
      // };
      // const browser = this.iab.create("https://benepik.in/reach/samladfslogin.php?deviceType=app&requestType=sso&device="+this.apiServices.device+"&device_id="+this.deviceId+"&appemail="+this.email+"",  '_blank', this.options);


      const browser = this.iab.create("https://benepik.co.in/reach/samladfslogin.php?deviceType=app&requestType=sso&device=" + this.apiServices.device + "&device_id=" + this.deviceId + "&appemail=" + this.email + "", '_blank', this.options);
      browser.on('loadstop').subscribe((event: InAppBrowserEvent) => {
        console.log("LOG: API Response== ", event);
        console.log(event.url);
        browser.executeScript({ code: 'document.getElementById("myptag").innerText' }).then(html => {
          console.log('html==', html);
          let xyz = JSON.parse(html);
          console.log('parse html==', xyz);
          if (xyz.success == 1) {
            browser.close();
            console.log('success', xyz);
            // alert(JSON.stringify(xyz));
            this.employee(xyz);
            // alert('go to home page');
            // this.employeeDataSave(xyz.data);

          } else if (xyz.success == 0) {
            // alert('go to login page');
            console.log('success 0', xyz);
            browser.close();

            this.apiMessage(xyz.message);
            // this.takeConfirmation(xyz.message, browser);
          }

        }, err => {
          console.log('html err==', err);
        });

        //  this.loading.dismiss();
      });

      browser.on('loadstart').subscribe((eve) => {
        // this.commonLoader();
      }, err => {
        // this.loading.dismiss();
      })


      browser.on('exit').subscribe((event: InAppBrowserEvent) => {
        // this.loading.dismiss();
        browser.executeScript({ code: 'document.getElementById("myptag").innerText' }).then(html => {
          console.log('exit html==', html);
        });

      }, err => {
        alert("InAppBrowser exit Event Error: " + err);
      });

    }




  }



  employee(pass) {
    // alert('1');
    // this.commonLoader();
    // let apiKey={
    //   "email_id":this.email,
    //   "package_name":this.apiServices.packageName,
    //   "device":this.apiServices.device,
    //   "device_id":this.deviceId,
    //   "password":pass

    // };


    // console.log('optionalUpdate response== ',apiKey); 
    // this.apiServices.employeelogin(apiKey).then((result) => { 
    // this.loading.dismiss();
    console.log('result== ', pass);
    this.employeeData = pass;
    console.log('this.allData== ', this.employeeData);
    // console.log('this.newJoineeData.data.employee_id== ',this.newJoineeData.data.employee_id); 
    this.employeealldata = this.employeeData.data;
    // if(this.employeeData.success==1){
    this.storage.set('employeeId', this.employeealldata.employee_id);
    this.storage.set('contact', this.employeealldata.contact);
    this.storage.set('tncView', this.employeealldata.t_and_c_accept);
    this.storage.set('email_id', this.employeealldata.email_id);
    this.storage.set('employee_type', this.employeealldata.employee_type);
    this.storage.set('first_name', this.employeealldata.first_name);
    this.storage.set('last_name', this.employeealldata.last_name);
    this.storage.set('login_token', this.employeealldata.login_token);
    this.storage.set('middle_name', this.employeealldata.middle_name);
    this.storage.set('user_image', this.employeealldata.user_image);
    this.storage.set('user_status', this.employeealldata.user_status);
    this.storage.set('showOnBoard', this.employeealldata.employee_type);
    this.storage.set('community_tag_show', this.employeealldata.community_tag_show);
    this.storage.set('country_id', this.employeealldata.country_id);
    this.events.publish('showsidemenu', this.employeealldata.employee_type, this.employeealldata.country_id);
    this.storage.set('welcome_aboard_applicable', this.employeealldata.welcome_aboard_applicable);

    this.storage.set('discounting_token', this.employeealldata.discountingToken).then(res => {
      console.log('discountingToken==', res);
    });

    if (this.employeealldata.t_and_c_accept == 1) {
      //t&c already accepted
      if (this.employeealldata.welcome_aboard_applicable == 1) {
        //welcom onboard is not submitting therefor go to welcome on-board page
        this.navCtrl.push('AplicantwelcomePage');
      } else {
        //welcom onboard is already submitted
        // if(this.employeealldata.user_image==''){
        if (this.employeealldata.profile_pic_upload == '0') {
          this.storage.set('profile_pic_upload', this.employeealldata.profile_pic_upload);
          this.navCtrl.setRoot('FirstimguploadPage');
          // this.navCtrl.setRoot('FirstimguploadPage');
        } else {
          if (this.employeealldata.community_tag_show == 1) {
            // go to community tag select page
            this.navCtrl.setRoot('CatgoriesPage');
          } else {
            //community tag has selected
            this.navCtrl.setRoot('TabsPage');
          }

        }

      }
    } else {
      //go to t&c page
      this.navCtrl.push('TermsAndConditionsPage', { 'profile_pic_upload': this.employeealldata.profile_pic_upload });
    }


    //     }



  }



}

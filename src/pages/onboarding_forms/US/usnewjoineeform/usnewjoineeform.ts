import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, LoadingController, Content, Platform, MenuController } from 'ionic-angular';
import { ApiServiceProvider } from '../../../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-usnewjoineeform',
  templateUrl: 'usnewjoineeform.html',
})
export class UsnewjoineeformPage {
  submit_type: string;
  btnkey: any;
  location_authorized_for_work: any;
  work_locationscrollDivId: any;
  emergency_contactscrollDivId: any;
  contact_namescrollDivId: any;
  contactscrollDivId: any;
  email_idscrollDivId: any;
  complete_addressscrollDivId: any;
  date_of_birthscrollDivId: any;
  last_namescrollDivId: any;
  middle_namescrollDivId: any;
  scrollDivId: any;
  fill_status: any;
  @ViewChild(Content) content: Content;
  usauth: any;
  alldata: any;
  deviceId: any;
  employeeId: any;
  login_token: any;
  form_status: any;
  title: any;
  previousdata: any;
  loading: any;

  usAuthArray = [
    { auto_id: '1', name: 'Yes' },
    { auto_id: '0', name: 'No' }
  ]
  constructor(private alertCtrl: AlertController, private platform: Platform, private menu: MenuController, public loadingCtrl: LoadingController,
    public toastCtrl: ToastController, private storage: Storage, private apiServices: ApiServiceProvider,
    public navCtrl: NavController, public navParams: NavParams) {
    this.previousdata = this.navParams.get('data');
    this.title = this.previousdata.form_name;
    this.form_status = this.previousdata.form_status;
    this.storage.get('login_token').then((data) => { this.login_token = data; });
    this.storage.get('employeeId').then((data) => { this.employeeId = data; });
    this.newjoinee();
  }

  newjoinee() {
    let url : string = "";
    if(this.previousdata.country_id == 8){
      url = "Onboarding_Forms_Apis/canada_forms/get_joiner_form_data.php"
    } else {
      url = "Onboarding_Forms_Apis/usa_forms/get_joiner_form_data.php";
    }

    this.commonLoader();
    this.storage.get('deviceId').then(data => {
      this.deviceId = data;
      let apiKey = {
        "client_id": this.apiServices.clientId,
        "employee_id": this.employeeId,
        "device": this.apiServices.device,
        "device_id": this.deviceId,
        "app_version": this.apiServices.appVersion,
        "form_id": this.previousdata.form_id
      };
      this.apiServices.us_canada(url,apiKey,this.login_token).subscribe(res => {
        console.log('tnc res==', res);
        this.loading.dismiss();
        if (res.success == 1) {
          this.fill_status = res.fill_status;
          this.alldata = res.data[0];
          setTimeout(() => {
            if (this.alldata.location_authorized_for_work.value == '') {
              console.log("this.usauth", this.usauth);
              this.usauth = '';
            }
            else if (this.alldata.location_authorized_for_work.value == '1') {
              this.usauth = '1';
            } else {
              this.usauth = '0';
            }
          }, 300);

        } else {
          this.navCtrl.pop();
          this.apiMessage(res.message);
        }
      }, (err) => {
        this.loading.dismiss();
        console.log('err== ', err);
        this.apiMessage(err);
      });

    });
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
  apiMessage(message) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  fun() {
    console.log('ionViewDidLoad UsnewjoineeformPage', this.alldata.first_name.value);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsnewjoineeformPage');
  }
  submit(btnkey) {
    this.btnkey=btnkey;
    console.log("this.btnkey",this.btnkey)
    this.scrollDivId = false; this.middle_namescrollDivId = false; this.last_namescrollDivId = false;
    this.date_of_birthscrollDivId = false; this.complete_addressscrollDivId = false; this.email_idscrollDivId = false;
    this.contactscrollDivId = false; this.contact_namescrollDivId = false; this.emergency_contactscrollDivId = false;
    this.work_locationscrollDivId = false; this.location_authorized_for_work = false;
    if (this.alldata.first_name.is_mandatory == true && (this.alldata.first_name.value == '' ||
      this.alldata.first_name.value == undefined)) {
      let msg = 'All fields are mandatory'
      this.apiMessage(msg);
      // this.scrolldiv='1';
      this.scrollDivId = this.alldata.first_name.is_mandatory;
      setTimeout(() => {
        console.log("scroll to id***==", this.scrollDivId);
        let yOffset = document.getElementById(this.scrollDivId).offsetTop;
        this.content.scrollTo(0, yOffset, 3000);
      }, 400);
      return false;
    }
    else if (this.alldata.middle_name.is_mandatory == true && (this.alldata.middle_name.value == '' ||
      this.alldata.middle_name.value == undefined)) {
      let msg = 'All fields are mandatory'
      this.apiMessage(msg);
      this.middle_namescrollDivId = this.alldata.middle_name.is_mandatory;
      setTimeout(() => {
        console.log("scroll to id***==", this.middle_namescrollDivId);
        let yOffset = document.getElementById(this.middle_namescrollDivId).offsetTop;
        this.content.scrollTo(0, yOffset, 3000);
      }, 400);

      return false;
    }
    else if (this.alldata.last_name.is_mandatory == true && (this.alldata.last_name.value == '' ||
      this.alldata.last_name.value == undefined)) {
      let msg = 'All fields are mandatory'
      this.apiMessage(msg);
      this.last_namescrollDivId = this.alldata.last_name.is_mandatory;
      setTimeout(() => {
        console.log("scroll to id***==", this.last_namescrollDivId);
        let yOffset = document.getElementById(this.last_namescrollDivId).offsetTop;
        this.content.scrollTo(0, yOffset, 3000);
      }, 400);
      return false;
    }
    else if (this.alldata.date_of_birth.is_mandatory == true && (this.alldata.date_of_birth.value == '' ||
      this.alldata.date_of_birth.value == undefined)) {
      let msg = 'All fields are mandatory'
      this.apiMessage(msg);
      this.date_of_birthscrollDivId = this.alldata.date_of_birth.is_mandatory;
      setTimeout(() => {
        console.log("scroll to id***==", this.date_of_birthscrollDivId);
        let yOffset = document.getElementById(this.date_of_birthscrollDivId).offsetTop;
        this.content.scrollTo(0, yOffset, 3000);
      }, 400);
      return false;
    }
    else if (this.alldata.complete_address.is_mandatory == true && (this.alldata.complete_address.value == '' ||
      this.alldata.complete_address.value == undefined)) {
      let msg = 'All fields are mandatory'
      this.apiMessage(msg);
      this.complete_addressscrollDivId = this.alldata.complete_address.is_mandatory;
      setTimeout(() => {
        console.log("scroll to id***==", this.complete_addressscrollDivId);
        let yOffset = document.getElementById(this.complete_addressscrollDivId).offsetTop;
        this.content.scrollTo(0, yOffset, 3000);
      }, 400);
      return false;
    }
    else if (this.alldata.email_id.is_mandatory == true && (this.alldata.email_id.value == '' ||
      this.alldata.email_id.value == undefined)) {
      let msg = 'All fields are mandatory'
      this.apiMessage(msg);
      this.email_idscrollDivId = this.alldata.email_id.is_mandatory;
      setTimeout(() => {
        console.log("scroll to id***==", this.email_idscrollDivId);
        let yOffset = document.getElementById(this.email_idscrollDivId).offsetTop;
        this.content.scrollTo(0, yOffset, 3000);
      }, 400);
      return false;
    }
    else if (this.alldata.contact.is_mandatory == true && (this.alldata.contact.value == '' ||
      this.alldata.contact.value == undefined)) {
      let msg = 'All fields are mandatory'
      this.apiMessage(msg);
      this.contactscrollDivId = this.alldata.contact.is_mandatory;
      setTimeout(() => {
        console.log("scroll to id***==", this.contactscrollDivId);
        let yOffset = document.getElementById(this.contactscrollDivId).offsetTop;
        this.content.scrollTo(0, yOffset, 3000);
      }, 400);
      return false;
    }
    else if (this.alldata.emergency_contact_name.is_mandatory == true && (this.alldata.emergency_contact_name.value == '' ||
      this.alldata.emergency_contact_name.value == undefined)) {
      let msg = 'All fields are mandatory'
      this.apiMessage(msg);
      this.contact_namescrollDivId = this.alldata.emergency_contact_name.is_mandatory;
      setTimeout(() => {
        console.log("scroll to id***==", this.contact_namescrollDivId);
        let yOffset = document.getElementById(this.contact_namescrollDivId).offsetTop;
        this.content.scrollTo(0, yOffset, 3000);
      }, 400);
      return false;
    }

    else if (this.alldata.emergency_contact.is_mandatory == true && (this.alldata.emergency_contact.value == '' ||
      this.alldata.emergency_contact.value == undefined)) {
      let msg = 'All fields are mandatory'
      this.apiMessage(msg);
      this.emergency_contactscrollDivId = this.alldata.emergency_contact.is_mandatory;
      setTimeout(() => {
        console.log("scroll to id***==", this.emergency_contactscrollDivId);
        let yOffset = document.getElementById(this.emergency_contactscrollDivId).offsetTop;
        this.content.scrollTo(0, yOffset, 3000);
      }, 400);
      return false;
    }

    else if (this.alldata.work_location.is_mandatory == true && (this.alldata.work_location.value == '' ||
      this.alldata.work_location.value == undefined)) {
      let msg = 'All fields are mandatory'
      this.apiMessage(msg);
      this.work_locationscrollDivId = this.alldata.work_location.is_mandatory;
      setTimeout(() => {
        console.log("scroll to id***==", this.work_locationscrollDivId);
        let yOffset = document.getElementById(this.work_locationscrollDivId).offsetTop;
        this.content.scrollTo(0, yOffset, 3000);
      }, 400);
      return false;
    }
    else if (this.alldata.location_authorized_for_work.is_mandatory == true && (this.usauth == '' ||
      this.usauth == undefined)) {
      let msg = 'All fields are mandatory'
      this.apiMessage(msg);
      this.location_authorized_for_work = this.alldata.location_authorized_for_work.is_mandatory;
      setTimeout(() => {
        console.log("scroll to id***==", this.location_authorized_for_work);
        let yOffset = document.getElementById(this.location_authorized_for_work).offsetTop;
        this.content.scrollTo(0, yOffset, 3000);
      }, 400);
      return false;
    }
    else {
      this.submitform(btnkey);
    }

  }

  submitform(btnkey) {
    let url : string = "";
    if(this.previousdata.country_id == 8){
      url = "Onboarding_Forms_Apis/canada_forms/submit_joiner_form_data.php"
    } else {
      url = "Onboarding_Forms_Apis/usa_forms/submit_joiner_form_data.php";
    }

    this.btnkey=btnkey;
    if(this.btnkey==1){
     this.submit_type='submit';
    }
    else{
      this.submit_type='save';
    }
    this.commonLoader();
    this.storage.get('deviceId').then(data => {
      this.deviceId = data;
      let apiKey = {
        "client_id": this.apiServices.clientId,
        "employee_id": this.employeeId,
        "device": this.apiServices.device,
        "device_id": this.deviceId,
        "app_version": this.apiServices.appVersion,
        "form_id": this.previousdata.form_id,
        "emergency_contact_name": this.alldata.emergency_contact_name.value,
        "emergency_contact": this.alldata.emergency_contact.value,
        "work_location": this.alldata.work_location.value,
        "location": (this.usauth == 1) ? 'true' : 'false',
        "submit_type": this.submit_type,
        "complete_address":this.alldata.complete_address.value
      };
      this.apiServices.us_canada(url,apiKey,this.login_token).subscribe(res => {
        console.log('tnc res==', res);
        this.loading.dismiss();
        if (res.success == 1) {
          this.apiMessage(res.message);
          this.navCtrl.pop();
        } else {
          this.navCtrl.pop();
          this.apiMessage(res.message);
        }

      }, (err) => {
        this.loading.dismiss();
        console.log('err== ', err);
        this.apiMessage(err);
      });
    });
  }

}

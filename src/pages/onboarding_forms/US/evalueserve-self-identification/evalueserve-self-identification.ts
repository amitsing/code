import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, LoadingController, Content, Platform, MenuController } from 'ionic-angular';
import { ApiServiceProvider } from '../../../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import { InAppBrowser, InAppBrowserEvent, InAppBrowserOptions } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-evalueserve-self-identification',
  templateUrl: 'evalueserve-self-identification.html',
})
export class EvalueserveSelfIdentificationPage {
  scrolldiv: any = '1';
  scrolldiv1: any = '1';
  genderid: any;
  ethinicid: any;
  form_status: any;
  scrollDivId: any = '0';
  scrollDivId1: any = '0';
  fill_status: any;
  isDisabled: boolean = true;
  ethinicitydata: any;
  ethinicity: any;
  gender: any;
  genderdata: any;
  @ViewChild(Content) content: Content;
  alldata: any;
  deviceId: any;
  employeeId: any;
  login_token: any;
  title: any;
  previousdata: any;
  loading: any;
  constructor(private alertCtrl: AlertController, private platform: Platform, private menu: MenuController, public loadingCtrl: LoadingController,
    public toastCtrl: ToastController, private storage: Storage, private apiServices: ApiServiceProvider,
    public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser) {
    this.previousdata = this.navParams.get('data');
    this.title = this.previousdata.form_name;

    this.form_status = this.previousdata.form_status;
    this.storage.get('login_token').then((data) => { this.login_token = data; });
    this.storage.get('employeeId').then((data) => { this.employeeId = data; });
    this.self();
  }

  self() {
    let url : string = "";
    if(this.previousdata.country_id == 8){
      url = "Onboarding_Forms_Apis/canada_forms/get_identification_form_data.php"
    } else {
      url = "Onboarding_Forms_Apis/usa_forms/get_identification_form_data.php"
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
          this.alldata = res.data;
          this.fill_status = res.fill_status;
          for (let i = 0; i < this.alldata.gender.options.length; i++) {
            if (this.alldata.gender.options[i].answer == true) {
              this.gender = this.alldata.gender.options[i].option;
              this.genderid = this.alldata.gender.options[i].option_id;
            }
          }
          for (let i = 0; i < this.alldata.ethnicity.options.length; i++) {
            if (this.alldata.ethnicity.options[i].answer == true) {
              this.ethinicity = this.alldata.ethnicity.options[i].option;
              this.ethinicid = this.alldata.ethnicity.options[i].option_id;
            }
          }
          console.log('succ');
          this.genderdata = this.alldata.gender.options;
          this.ethinicitydata = this.alldata.ethnicity.options;

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
  radioChecked(radiocheckdata, ind) {
    console.log("radiocheckdata1111", radiocheckdata)
    this.ethinicid = this.ethinicitydata[ind].option_id;
  }
  genderChecked(radiod, rind) {
    console.log("radiocheckdata", radiod);
    this.genderid = this.genderdata[rind].option_id;
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
  ionViewDidLoad() {
    console.log('ionViewDidLoad EvalueserveSelfIdentificationPage');
  }

  submit() {
    let url : string = "";
    if(this.previousdata.country_id == 8){
      url = "Onboarding_Forms_Apis/canada_forms/save_identification_form_data.php"
    } else {
      url = "Onboarding_Forms_Apis/usa_forms/save_identification_form_data.php"
    }


    if (this.gender == '' || this.gender == undefined) {
      let msg = 'All fields are mandatory.'
      this.apiMessage(msg);
      this.scrolldiv = '1';
      this.scrollDivId = this.genderdata[0].option_id;;
      setTimeout(() => {
        console.log("scroll to id***==", this.genderid);
        let yOffset = document.getElementById(this.scrollDivId).offsetTop;
        this.content.scrollTo(0, yOffset, 3000);
      }, 400);

      return false;
    }
    if (this.ethinicity == '' || this.ethinicity == undefined) {
      let msg = 'All fields are mandatory.'
      this.apiMessage(msg);
      this.scrolldiv1 = '1';
      this.scrollDivId1 = this.ethinicitydata[0].option_id;;
      setTimeout(() => {
        let yOffset = document.getElementById(this.scrollDivId1).offsetTop;
        this.content.scrollTo(0, yOffset, 3000);
      }, 400);
      return false;
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
        "gender": this.genderid,
        "ethnicity": this.ethinicid
      };
      this.apiServices.us_canada(url,apiKey,this.login_token).subscribe(res => {
        console.log('tnc res==', res);
        this.loading.dismiss();
        if (res.success == 1) {

          // this.zone.run(() => {
          this.apiMessage(res.message);
          this.navCtrl.pop();
          // });

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

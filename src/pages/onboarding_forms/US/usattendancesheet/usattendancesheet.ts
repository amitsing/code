import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, LoadingController, Content, Platform, MenuController } from 'ionic-angular';
import { ApiServiceProvider } from '../../../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-usattendancesheet',
  templateUrl: 'usattendancesheet.html',
})
export class UsattendancesheetPage {
  submit_type: string;
  button: any;
  userNamedataId: boolean;
  AdministrationDivId: boolean;
  InformationDivId: boolean;
  HumanResourcesId: boolean;
  userNamedata: any;
  alldata: any;
  fill_status: any;
  deviceId: any;
  employeeId: any;
  login_token: any;
  form_status: any;
  title: any;
  previousdata: any;
  loading: any;
  constructor(private alertCtrl: AlertController, private platform: Platform, private menu: MenuController, public loadingCtrl: LoadingController,
    public toastCtrl: ToastController, private storage: Storage, private apiServices: ApiServiceProvider,
    public navCtrl: NavController, public navParams: NavParams) {
    this.previousdata = this.navParams.get('data');
    this.title = this.previousdata.form_name;
    this.form_status = this.previousdata.form_status;
    this.storage.get('login_token').then((data) => { this.login_token = data; });
    this.storage.get('employeeId').then((data) => { this.employeeId = data; });
    this.get_attendance();

  }
  get_attendance() {
    let url: string = "";
    if(this.previousdata.country_id == 8){
      url = "Onboarding_Forms_Apis/canada_forms/get_orientation_att_data.php"
    } else {
      url = "Onboarding_Forms_Apis/usa_forms/get_orientation_att_data.php"
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
          this.alldata = res.data.other_info;
          this.userNamedata = res.data.personal_info[0].userName;
          console.log('tnc res==', this.userNamedata);
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


  submit(btn) {
    this.button = btn;
    this.HumanResourcesId = false; this.InformationDivId = false; this.AdministrationDivId = false; this.userNamedataId = false;
    if (this.userNamedata.is_mandatory == true && (this.userNamedata.value == '' ||
      this.userNamedata.value == undefined)) {
      let msg = 'All fields are mandatory'
      this.apiMessage(msg);
      this.userNamedataId = true;
      return false;
    }
    else if (this.alldata.human_resource_date.is_mandatory == true && (this.alldata.human_resource_date.value == '' ||
      this.alldata.human_resource_date.value == undefined)) {
      let msg = 'All fields are mandatory'
      this.apiMessage(msg);
      this.HumanResourcesId = true;

      return false;
    }
    else if (this.alldata.it_information_date.is_mandatory == true && (this.alldata.it_information_date.value == '' ||
      this.alldata.it_information_date.value == undefined)) {
      let msg = 'All fields are mandatory'
      this.apiMessage(msg);
      this.InformationDivId = true;
      return false;
    }
    else if (this.alldata.administration_date.is_mandatory == true && (this.alldata.administration_date.value == '' ||
      this.alldata.administration_date.value == undefined)) {
      let msg = 'All fields are mandatory'
      this.apiMessage(msg);
      this.AdministrationDivId = true;
      return false;
    }

    else {
      this.submitform(this.button);
    }

  }

  submitform(btn) {
    let url: string = "";
    if (this.previousdata.country_id == 8) {
      url = "Onboarding_Forms_Apis/canada_forms/save_orientation_att_data.php";
    } else {
      url = "Onboarding_Forms_Apis/usa_forms/save_orientation_att_data.php";
    } 


    // this.btnkey=btn;
    if(btn==1){
     this.submit_type='submit';
    }
    else{
      this.submit_type='save';
    }

    this.button = btn;
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
        "human_resource_date": this.alldata.human_resource_date.value,
        "it_information_date": this.alldata.it_information_date.value,
        "administration_date": this.alldata.administration_date.value,
        "submit_type": this.submit_type
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsattendancesheetPage');
  }

}

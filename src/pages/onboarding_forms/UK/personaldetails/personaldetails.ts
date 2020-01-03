import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, AlertController } from 'ionic-angular';
import { ApiServiceProvider } from '../../../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import { PersonalInfo } from './response';
import { PersonalInfoReq } from './request';

/**
 * Generated class for the PersonaldetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personaldetails',
  templateUrl: 'personaldetails.html',
})
export class PersonaldetailsPage {

  employeeId : any;
  formData: any;
  deviceId: any;
  login_token: any;
  loading: any;
  data : PersonalInfo;
  fill_status : any;
  insuranceStatus = [
    {auto_id : '1',name : 'Yes'},
    {auto_id : '0',name : 'No'},
    {auto_id : '2',name : 'Undecided'}
  ]
  isSubmited: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _apiService: ApiServiceProvider,
    private storage: Storage,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {
    this.storage.get("employeeId").then(data => {
      this.employeeId = data;
      console.log(" employeeId== ", this.employeeId);
      this.storage.get("login_token").then(data => {
        console.log("showOnBoard value is111==", data);
        this.login_token = data;
        this.storage.get("deviceId").then(data => {
          this.deviceId = data;
          this.getData();
          // this.getDropDowns();
        });
      });
    });

    this.formData = this.navParams.get("data");
    // this.form_id = data.form_id;
  }

  getData() {
    this.commonLoader();
    let apikey = {
      client_id: this._apiService.clientId,
      employee_id: this.employeeId,
      device: this._apiService.device,
      device_id: this.deviceId,
      app_version: this._apiService.appVersion,
      form_id: this.formData.form_id
    };
    this._apiService
      .Uk_Get_Personal_Info(apikey, this.login_token)
      .subscribe(res => {
        this.loading.dismiss();
        if(res.success == '1' ) {
          this.fill_status = res.fill_status;
          this.data = new PersonalInfo();
          this.data.initializeModal(res.data);
          console.log(this.data);
        } else {
          this.apiMessage(res.message);
        }
      },(err)=>{
        this.loading.dismiss();
        this.apiMessage(err);
        this.navCtrl.pop();
      });
  }

  save() {
    let data: PersonalInfoReq = new PersonalInfoReq(
      this.data
    );
    console.log(data);
    this.finalSubmit(data, "save");
  }

  submit(): void {
    this.isSubmited = true;
    setTimeout(() => {
      const child = document.querySelector(".error");
      if (!child) {
        // console.log(this.formData);
        let data: PersonalInfoReq = new PersonalInfoReq(
          this.data
        );
        console.log(data);
        this.finalSubmit(data, "submit");
      } else {
        const subChild = child.querySelector("input, textarea") as HTMLElement;
        console.log(subChild);
        if (subChild) {
          subChild.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest"
          });
          setTimeout(() => {
            subChild.focus();
          }, 1000);
        } else {
          child.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest"
          });
        }
      }
    }, 100);
  }

  finalSubmit(data: PersonalInfoReq, formStatus: string) {
    this.commonLoader();
    let apikey = {
      client_id: this._apiService.clientId,
      employee_id: this.employeeId,
      device: this._apiService.device,
      device_id: this.deviceId,
      app_version: this._apiService.appVersion,
      form_id: this.formData.form_id,
      submit_type: formStatus,
      data: data
    };
    this._apiService
      .Uk_Save_Personal_Info(apikey, this.login_token)
      .subscribe(res => {
        this.loading.dismiss();
        if(res.success == '1'){
          this.apiMessage(res.message);
          this.navCtrl.pop();
        } else {
          this.apiMessage(res.message);
        }
        console.log(res);
      },err=>{
        this.loading.dismiss();
        this.apiMessage(err);
      });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonaldetailsPage');
  }

  //Common Loader:
  commonLoader() {
    this.loading = this.loadingCtrl.create({
      enableBackdropDismiss: true,
      spinner: "ios-small",
      content: "Loading data..."
    });
    this.loading.present();
  }
  apiMessage(message) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 4000
    });
    toast.present();
  }

}

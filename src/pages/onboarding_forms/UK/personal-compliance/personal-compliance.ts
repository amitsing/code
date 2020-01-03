import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, AlertController } from 'ionic-angular';
import { ApiServiceProvider } from '../../../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import { PersonalCompliance } from './response';
import { PersonalComplianceReq } from './request';

/**
 * Generated class for the PersonalCompliancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personal-compliance',
  templateUrl: 'personal-compliance.html',
})
export class PersonalCompliancePage {
  employeeId : any;
  formData: any;
  deviceId: any;
  login_token: any;
  loading: any;
  fill_status : any;
  data : PersonalCompliance;
  isSubmited: boolean = false;
  des: any;

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
    this._apiService.Uk_Get_Personal_Compliance(apikey, this.login_token).subscribe(
      res => {
        this.loading.dismiss();
        console.log(res)
        if (res.success == "1") {
          console.log(res);
          this.data = new PersonalCompliance();
          this.data.initializePersonalCompliance(res.data.compliance);
          this.des = res.descrition;
          this.fill_status = res.fill_status;
        } else {
          this.apiMessage(res.message);
          this.navCtrl.pop();
        }
      },
      err => {
        this.loading.dismiss();
        this.apiMessage(err);
        this.navCtrl.pop();
      }
    );
  }

  save() {
    let data: PersonalComplianceReq = new PersonalComplianceReq(
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
        let data: PersonalComplianceReq = new PersonalComplianceReq(
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

  finalSubmit(data: PersonalComplianceReq, formStatus: string) {
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
      .Uk_Save_Personal_Compliance(apikey, this.login_token)
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
    console.log('ionViewDidLoad PersonalCompliancePage');
  }

  getCutrrentDate(): string {
    var todayTime = new Date();
    return `${todayTime.getFullYear()}-${todayTime.getMonth() + 1}-${todayTime.getDate()}`;
  }

  getFutureDate(): string {
    var todayTime = new Date();
    return `${todayTime.getFullYear() + 100 }-${todayTime.getMonth() + 1}-${todayTime.getDate()}`;
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

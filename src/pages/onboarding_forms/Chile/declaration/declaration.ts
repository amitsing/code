import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from "ionic-angular";
import { ApiServiceProvider } from "../../../../providers/api-service/api-service";
import { Storage } from "@ionic/storage";

type format = {
  currunt_date: string;
  name_check?: string;
  other_name?: string;
  other_date?: string;
};

/**
 * Generated class for the DeclarationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-declaration",
  templateUrl: "declaration.html"
})
export class DeclarationPage {
  employeeId: any;
  login_token: any;
  deviceId: any;
  isSubmited: boolean = false;
  formData : any;
  form_id: any;
  data: format = {
    currunt_date: "",
    name_check: "",
    other_date: "",
    other_name: ""
  };
  loading : any;
  page_title: string;
  declarationData: any[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _apiService: ApiServiceProvider,
    private storage: Storage,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
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
        });
      });
    });
    this.formData = this.navParams.get("data");
    this.page_title = this.formData.form_name;
    this.form_id = this.formData.form_id;
    this.data.currunt_date = this.getFormattedDate();
    console.log(this.getFormattedDate());
  }

  getData() {
    this.commonLoader();
    let apikey = {
      client_id: this._apiService.clientId,
      employee_id: this.employeeId,
      device: this._apiService.device,
      device_id: this.deviceId,
      app_version: this._apiService.appVersion,
      form_id: this.form_id
    };
    this._apiService
      .ChilleGetDeclaration(apikey, this.login_token)
      .subscribe(res => {
        this.loading.dismiss();
        if(res.success == '1'){
          this.declarationData = res.data;
        } else {
          this.apiMessage(res.message);
          // this.navCtrl.pop();
        }
        console.log(res);
      },err=>{
        this.loading.dismiss();
        this.apiMessage(err);
        this.navCtrl.pop();
      });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad DeclarationPage");
  }

  submit() {
    this.isSubmited = true;
    console.log(this.data);
    if (this.data.name_check == "true") {
      if (
        this.data.currunt_date.trim() &&
        this.data.other_date.trim() &&
        this.data.other_name.trim() &&
        this.data.currunt_date &&
        this.data.other_date &&
        this.data.other_name
      ) {
        console.log("submit with true");
        this.finalSubmit();
      } else {
        console.log("submit fail true");
      }
    } else if (this.data.name_check == "false") {
      if (this.data.currunt_date.trim() && this.data.currunt_date) {
        console.log("submit with false");
        this.finalSubmit();
      } else {
        console.log("submit fail false");
      }
    } else {
      console.log("Please select all the field before continue");
    }
  }

  finalSubmit() {
    let apikey = {
      client_id: this._apiService.clientId,
      employee_id: this.employeeId,
      device: this._apiService.device,
      device_id: this.deviceId,
      app_version: this._apiService.appVersion,
      form_id: this.form_id,
      data_dump: this.data,
      otp_id: ""
    };
    this._apiService
      .ChilleFormDeclarationOtp(apikey, this.login_token)
      .subscribe(res => {
        console.log(res);
        if(res.success == '1'){
          this.navCtrl.push('DeclarationotpPage',{"form_data":this.formData,"otpdata":res.otp_id});
        } else {
          this.apiMessage(res.message);
        }
      },err=>{
        this.apiMessage(err);
      });
  }

  getFormattedDate(): string {
    var todayTime = new Date();
    return `${todayTime.getFullYear()}-${todayTime.getMonth() + 1}-${todayTime.getDate()}`;
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
        duration: 4000
      });
      toast.present();
    }
}

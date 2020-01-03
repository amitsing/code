import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
  LoadingController,
  AlertController
} from "ionic-angular";
import { ApiServiceProvider } from "../../../../providers/api-service/api-service";
import { Storage } from "@ionic/storage";
import { PF_Form } from "./resposne";
import { PF_Form_Req } from "./request";

@IonicPage()
@Component({
  selector: "page-form-eleven",
  templateUrl: "form-eleven.html"
})
export class FormElevenPage {
  public formData: any;
  employeeId: any;
  login_token: any;
  deviceId: any;
  loading: any;
  data: PF_Form;
  fill_status: any;
  isSubmited: boolean = false;
  relationshipStatus = [
    { auto_id: "1", name: "Father" },
    { auto_id: "2", name: "Spouse" }
  ];
  genderOptions = [
    { auto_id: "Male", name: "Male" },
    { auto_id: "Female", name: "Female" },
    { auto_id: "Other", name: "Other" }
  ];
  yesNoOption = [
    { auto_id: "true", name: "Yes" },
    { auto_id: "false", name: "No" }
  ];
  employeementOptions = [
    { auto_id: "true", name: "Exempted" },
    { auto_id: "false", name: "Unexempted" }
  ];

  countryOptions: any[] = [];
  cityOptions : any[] = [];
  martialOptions: any[] = [];

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
          this.getDropDowns();
        });
      });
    });

    this.formData = this.navParams.get("data");
    // this.form_id = data.form_id;
  }

  getDropDowns() {
    let apikey = {
      client_id: this._apiService.clientId,
      employee_id: this.employeeId,
      device: this._apiService.device,
      device_id: this.deviceId,
      app_version: this._apiService.appVersion,
      form_id: this.formData.form_id
    };
    this._apiService
      .IndiaFamilyDropDown(apikey, this.login_token)
      .subscribe(res => {
        console.log(res);
        this.countryOptions = res.data.country; 
        this.martialOptions = res.data.maritial;
        // this.genderOption = res.data.relationship;
      });
  }

  getCityOptions(id:string) {
    let apikey = {
      client_id: this._apiService.clientId,
      employee_id: this.employeeId,
      device: this._apiService.device,
      device_id: this.deviceId,
      app_version: this._apiService.appVersion,
      form_id: this.formData.form_id,
      country_id : id,
    };
    this._apiService
      .IndiaGetCity(apikey, this.login_token)
      .subscribe(res => {
        console.log(res);
        this.cityOptions = res.data.city; 
        // this.genderOption = res.data.relationship;
      });
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
    this._apiService.IndiaGetPfForm(apikey, this.login_token).subscribe(
      res => {
        this.loading.dismiss();
        if (res.success == "1") {
          this.fill_status = res.fill_status;
          this.data = new PF_Form();
          this.data.initializePfForm(res.data);
          console.log(this.data);
        } else {
          this.apiMessage(res.message);
        }
      },
      err => {
        this.loading.dismiss();
        this.apiMessage(err);
        this.navCtrl.pop();
      }
    );
  }

  submit(): void {
    this.isSubmited = true;
    setTimeout(() => {
      // const parent = this.form.nativeElement as HTMLElement;
      const child = document.querySelector(".error");
      if (!child) {
        console.log(this.formData);
        let data: PF_Form_Req = new PF_Form_Req(this.data);
        console.log(JSON.stringify(data));
        this.finalSubmit(data, "submit");
      } else {
        const subChild = child.querySelector("input");
        if (subChild) {
          subChild.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest"
          });
          setTimeout(() => {
            subChild.focus();
          }, 800);
        } else {
          child.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest"
          });
        }
      }
    }, 500);
  }

  save() {
    let data: PF_Form_Req = new PF_Form_Req(this.data);
    // console.log(JSON.stringify(data));
    console.log(data);
    this.finalSubmit(data, "save");
  }

  finalSubmit(data: PF_Form_Req, formStatus: string) {
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
    if(this.fill_status == '0') {
      this._apiService.IndiaSavePfForm(apikey, this.login_token).subscribe(
        res => {
          console.log(res);
          this.loading.dismiss();
          if (res.success == "1") {
            this.apiMessage(res.message);
            this.navCtrl.pop();
          } else {
            this.apiMessage(res.message);
          }
        },
        err => {
          this.loading.dismiss();
          this.apiMessage(err);
        }
      );
    } else {
      this._apiService.IndiaUpdatePfForm(apikey, this.login_token).subscribe(
        res => {
          console.log(res);
          this.loading.dismiss();
          if (res.success == "1") {
            this.apiMessage(res.message);
            this.navCtrl.pop();
          } else {
            this.apiMessage(res.message);
          }
        },
        err => {
          this.loading.dismiss();
          this.apiMessage(err);
        }
      );
    }
    
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad EpfNominationPage");
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

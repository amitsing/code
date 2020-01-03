import { Component, ViewChild, ElementRef } from "@angular/core";
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from "ionic-angular";
import { ApiServiceProvider } from "../../../../providers/api-service/api-service";
import { OnBoardingForm } from "./responseFormData";
import { Storage } from "@ionic/storage";
import { OnBoardingFormDetails } from "./requestFormData";

/**
 * Generated class for the OnboardingFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-onboarding-form",
  templateUrl: "onboarding-form.html"
})
export class OnboardingFormPage {
  @ViewChild("form") form: ElementRef;
  employeeId: any;
  login_token: any;
  deviceId: any;
  isSubmited: boolean = false;
  formData: OnBoardingForm;
  form_id: any;
  eduDropDown: any[];
  universityDropDown: any[];
  locationDropDowns: any[];
  fill_status: any;
  msg: any;
  loading: any;
  page_title: string;
  formD : any;
  genderOptions = [
    {auto_id:'Male',name:'Male'},
    {auto_id:'Female',name:'Female'},
  ]

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _apiService: ApiServiceProvider,
    private storage: Storage,
    private _el: ElementRef,
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
          this.getDropDowns();
        });
      });
    });
    this.formD = this.navParams.get('data');
    this.page_title = this.formD.form_name;
    this.form_id = this.formD.form_id;
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad OnboardingFormPage");
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
      .ChilleOnBoarding(apikey, this.login_token)
      .subscribe(res => {
        this.loading.dismiss();
        if(res.success == '1' ) {
          this.formData = new OnBoardingForm();
          console.log(this.formData);
          this.fill_status = res.fill_status;
          this.msg = res.message;
          this.formData.InitializeOnBoarding(res.data);
          setTimeout(() => {
            const child = this.form.nativeElement as HTMLElement;
            const allChild = child.querySelectorAll(".inputDiv");
            console.log(allChild);
            if (allChild.length > 0) {
              this.addListeners(allChild);
            }
          }, 1000);
        } else {
          this.apiMessage(res.message);
        }
      },(err)=>{
        this.loading.dismiss();
        this.apiMessage(err);
        this.navCtrl.pop();
      });
  }

  getDropDowns() {
    let apikey = {
      client_id: this._apiService.clientId,
      employee_id: this.employeeId,
      device: this._apiService.device,
      device_id: this.deviceId,
      app_version: this._apiService.appVersion,
      form_id: this.form_id
    };
    this._apiService.getDropDown(apikey, this.login_token).subscribe(res => {
      console.log(res);
      this.eduDropDown = res.data.education;
      this.universityDropDown = res.data.university;
      this.locationDropDowns = res.data.nature_of_location;
    });
  }

  addListeners(childs: NodeListOf<Element>): void {
    let child = Array.from(childs);
    child.forEach(element => {
      element.addEventListener("click", () => {
        element.classList.add("touched");
      });
    });
  }

  save() {
    console.log(this.formData);
    let data: OnBoardingFormDetails = new OnBoardingFormDetails(this.formData);
    console.log(JSON.stringify(data));
    this.finalSubmit(data, "save");
  }

  submit(): void {
    this.isSubmited = true;
    setTimeout(() => {
      const parent = this.form.nativeElement as HTMLElement;
      const child = parent.querySelector(".error");
      if (!child) {
        console.log(this.formData);
        let data: OnBoardingFormDetails = new OnBoardingFormDetails(
          this.formData
        );
        console.log(JSON.stringify(data));
        this.finalSubmit(data, "submit");
      } else {
        const subChild = child.querySelector("input");
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

  finalSubmit(data: OnBoardingFormDetails, formStatus: string) {
    this.commonLoader();
    let apikey = {
      client_id: this._apiService.clientId,
      employee_id: this.employeeId,
      device: this._apiService.device,
      device_id: this.deviceId,
      app_version: this._apiService.appVersion,
      form_id: this.form_id,
      submit_type: formStatus,
      data: data
    };
    this._apiService
      .chilleSubmitOnboarding(apikey, this.login_token)
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
        this.apiMessage(err);
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
      duration: 4000
    });
    toast.present();
  }
}

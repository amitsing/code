import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { ApiServiceProvider } from '../../../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';

type answerArr = {
  question_id ?: string;
  answer ?: string;
}

/**
 * Generated class for the EmployeeConsentFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-employee-consent-form',
  templateUrl: 'employee-consent-form.html',
})
export class EmployeeConsentFormPage {

  employeeId: any;
  login_token: any;
  deviceId: any;
  isSubmited: boolean = false;
  form_id: any;
  loading: any;
  allData : any[]
  partA : any;
  partB : any;
  partC : any;
  answer_arr : answerArr[] = []; 
  page_title: string;
  fill_status:any;
  formData: any;

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
          this.gform();
        });
      });
    });
    this.formData = this.navParams.get("data");
    this.page_title = this.formData.form_name;
    this.form_id = this.formData.form_id;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeeConsentFormPage');
  }

  gform() {
    this.commonLoader();
    let apiKey = {
      "client_id": this._apiService.clientId,
      "employee_id": this.employeeId,
      "device": this._apiService.device,
      "device_id": this.deviceId,
      "app_version": this._apiService.appVersion,
      "form_id": this.form_id
    };
    this._apiService.china_consent(apiKey, this.login_token).subscribe(res => {
      console.log('tnc res==', res);
      this.loading.dismiss();
      if (res.success == '1') {
        this.allData = this.setUserRespone(res.data);
        console.log(this.allData);
        this.partA = res.part_A;
        this.partB = res.part_B;
        this.partC = res.part_C;
        this.fill_status = res.fill_status;
      } else {
        this.apiMessage(res.message);
      }
    }, (err) => {
      this.loading.dismiss();
      console.log('err== ', err);
      this.apiMessage(err);
      this.navCtrl.pop();
    });
  }

  setUserRespone(main_data) {
    main_data.forEach(data => {
      data.forEach(element => {
        if(element.userResponse == 3) {
          element.userAnswer = "";
        } else if (element.userResponse == true) {
          element.userAnswer = "1";
        } else if (element.userResponse == false) {
          element.userAnswer = "0";
        }
      });
    });
    return main_data;
  }

  submit() {
    console.log(this.allData);
    this.isSubmited = true;
    setTimeout(() => {
      var mendatory = document.querySelector('.mendatory') as HTMLElement;  
      setTimeout(() => {
        if(!mendatory){
          var error = document.querySelector('.error') as HTMLElement;
          setTimeout(() => {
            if(!error){
              let data : answerArr[] = this.requestData(this.allData);
              console.log(data);
              this.finalSubmit(data);
          } else {
            this.apiMessage('Please fill all the fields to continue');
            error.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
          }
          }, 100);
        } else {
          this.apiMessage('Accepting the consent form is mandatory to close joining process.');
          mendatory.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        }
      }, 100);
    }, 250);
  }

  finalSubmit(data : answerArr[]) {
    this.commonLoader();
    let apiKey = {
      "client_id": this._apiService.clientId,
      "employee_id": this.employeeId,
      "device": this._apiService.device,
      "device_id": this.deviceId,
      "app_version": this._apiService.appVersion,
      "form_id": this.form_id,
      "answer_arr" : data
    };
    this._apiService.china_consent_submit(apiKey,this.login_token).subscribe(res=>{
      this.loading.dismiss();
      console.log(res);
      if(res.success == '1') {
        this.apiMessage(res.message);
        this.navCtrl.pop();
      } else {
        this.apiMessage(res.message);
        this.navCtrl.pop();
      }
    }, err=>{
      this.apiMessage(err);
      this.navCtrl.pop();
    })
  }

  requestData(allData) : answerArr[]{
    this.answer_arr = [];
    allData.forEach(data => {
      data.forEach(element => {
       let tempData : answerArr = {};
       tempData.question_id = element.auto_id;
       tempData.answer = element.userAnswer;
       this.answer_arr.push(tempData); 
      });
    });
    return this.answer_arr;
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

import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, LoadingController, Platform, MenuController, Content } from 'ionic-angular';
import { ApiServiceProvider } from '../../../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import { InAppBrowser, InAppBrowserEvent, InAppBrowserOptions } from '@ionic-native/in-app-browser';


@IonicPage()
@Component({
  selector: 'page-usaconsent',
  templateUrl: 'usaconsent.html',
})
export class UsaconsentPage {
  partdata_c: any;
  partdata_b: any;
  partdata_a: any;
  fillstatus: any;
  form_status: any;
  title: any;
  data: any;
  chinadata: any;
  englishdata: any;
  chinadiscrip: any;
  englishdiscrip: any;
  language: any;
  Chinese: any;
  English: any;
  finalselect: string;
  languagecheck: any;
  scrollDivId: any;
  @ViewChild(Content) content: Content;
  msg: string;
  extra_div: any;
  form_id: any;
  deviceId: any;
  employeeId: any;
  login_token: any;
  loading: any;
  allData: any = [];
  checkedIdx: any;
  checkedIdxx: any;
  answerarr: any = [];
  showLangPopUp: boolean = false;
  constructor(private alertCtrl: AlertController, private platform: Platform, private menu: MenuController, public loadingCtrl: LoadingController,
    public toastCtrl: ToastController, private storage: Storage, private apiServices: ApiServiceProvider,
    public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser) {
    this.finalselect = 'English';
    this.answerarr = [{ "question_id": "", "answer": "" }]
    this.checkedIdx = 0;
    this.checkedIdxx = 0;
    this.data = this.navParams.get('data');
    this.title = this.data.form_name;
    this.form_id = this.data.form_id;
    this.form_status = this.data.form_status;
    this.storage.get('login_token').then((data) => { this.login_token = data; });
    this.storage.get('employeeId').then((data) => { this.employeeId = data; });
    console.log("test", );
    this.gform();
  }

  gform() {
    this.commonLoader();
    this.storage.get('deviceId').then(data => {
      this.deviceId = data;
      let apiKey = {
        "client_id": this.apiServices.clientId,
        "employee_id": this.employeeId,
        "device": this.apiServices.device,
        "device_id": this.deviceId,
        "app_version": this.apiServices.appVersion,
        "form_id": this.form_id
      };
      this.apiServices.china_consent(apiKey, this.login_token).subscribe(res => {
        console.log('tnc res==', res);
        this.loading.dismiss();
        if (res.success == 1) {
          this.fillstatus = res.fill_status;
          this.allData = res.data;
          this.partdata_a = res.part_A;
          this.partdata_b = res.part_B;
          this.partdata_c = res.part_C;
          console.log('succ1', res.data);
          console.log('new***== ', this.allData);
          console.log('succ', this.allData.length);
        } else {
          this.apiMessage(res.message);
        }
      }, (err) => {
        this.loading.dismiss();
        console.log('err== ', err);
        this.apiMessage(err);
      });

    });
  }
  checkfun(selectedvalue, i, j, value) {
    this.allData[j][i].userResponse = selectedvalue;
    console.log("this.allData[j][i].userResponse", this.allData[j][i].userResponse);
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

  update() {
    this.answerarr = [];
    this.allData.forEach(firstdata => {
      firstdata.forEach(element => {
        let data = {
          "question_id": element.auto_id,
          "answer": element.userResponse,
          "auto_id":element.auto_id
        }
        this.answerarr.push(data);
        console.log("this.aaa", this.answerarr);
      });
    });

    this.submitform();

  }

  submitform() {
    if (this.checkMandatoryStatus()) {
      console.log("status3", status);

      if (this.checkOptionalStatus()) {
        console.log("status5222222", status);
      } else {
        console.log("stat false 222", status);
        this.msg = "All fields are mandetory."
        this.apiMessage(this.msg);
        return false;
      }
    } else {
      console.log("status4", status);
      this.msg = "Please select option Yes."
      this.apiMessage(this.msg);
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
        "form_id": this.form_id,
        "answer_arr": this.answerarr
      };
      this.apiServices.china_consent_submit(apiKey, this.login_token).subscribe(res => {
        console.log('tnc res==', res);
        this.loading.dismiss();
        if (res.success == 1) {
          console.log('succ');
          this.apiMessage(res.message);
          this.navCtrl.pop();
        } else {
          this.apiMessage(res.message);
        }

      }, (err) => {
        this.loading.dismiss();
        console.log('err== ', err);
        this.apiMessage(err);

      });

    });
  }

  checkMandatoryStatus(): boolean {
    let status: boolean = true;
    let blankstatus:any;
    let checkIndex = 0;
    this.allData[0].forEach(element => {
      blankstatus=element.userResponse;
      if(element.userResponse != 3){
        status = element.userResponse && status;
      } else {
      status = false && status;        
      }
      console.log("status1", status);
      console.log("status2==", this.allData[0]);
      console.log("element***==", element);

      if (status == false && checkIndex == 0 ) {
        checkIndex = checkIndex + 1;
        this.scrollDivId = element.auto_id;
        console.log("scroll to id***==", element.auto_id);
        let yOffset = document.getElementById(this.scrollDivId).offsetTop;
        this.content.scrollTo(0, yOffset, 3000);
        return false;
      }
    });
    return status;
  }
  checkOptionalStatus(): boolean {
    let status: any;
    let checkIndex = 0;

var index = this.answerarr.findIndex(p => p.answer == "3");
if(index>=0){
  this.scrollDivId = this.answerarr[index].auto_id;
  console.log("scroll to id***==", this.answerarr[index].auto_id);
  let yOffset = document.getElementById(this.scrollDivId).offsetTop;
  this.content.scrollTo(0, yOffset, 3000)
  return false;
}else{

  return true;
}


/*

    this.answerarr.forEach(element => {
      if(element.answer == 3){
      //   status = element.answer && status;
      // } else if(element.answer == false) {
      // status = false && status;        
      // }else{
        status = true; 
        console.log("status2", status);
        if ( checkIndex == 0) {
          checkIndex = checkIndex + 1;
          this.scrollDivId = element.auto_id;
          console.log("scroll to id***==", element.auto_id);
          let yOffset = document.getElementById(this.scrollDivId).offsetTop;
          this.content.scrollTo(0, yOffset, 3000)
          return status;
        }
      }
      // status = element.answer && status;
      console.log("status2==", this.answerarr);
      //       console.log("element==", element);
 
     


      // if (status == false && checkIndex == 0) {
      //   checkIndex = checkIndex + 1;
      //   this.scrollDivId = element.auto_id;
      //   console.log("scroll to id***==", element.auto_id);
      //   let yOffset = document.getElementById(this.scrollDivId).offsetTop;
      //   this.content.scrollTo(0, yOffset, 3000)
      //   return false;
      // }
    });
   

*/
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad UsaconsentPage');
  }

}

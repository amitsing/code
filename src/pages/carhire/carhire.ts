import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
  AlertController,
  Platform
} from "ionic-angular";
import { ApiServiceProvider } from "../../providers/api-service/api-service";
import { Storage } from "@ionic/storage";

@IonicPage()
@Component({
  selector: "page-carhire",
  templateUrl: "carhire.html"
})
export class CarhirePage {
  getvalcheck: number;
  saved_option: any;
  j: any;
  i: any;
  allData: any;
  f: any;
  previousPageData: any;
  amount: any = 100;
  login_token: any;
  rcheck: number;
  deviceId: any;
  employeeId: any;
  flag: any;
  title: any;
  radiocheck: any;
  showsubmit: boolean = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private platform: Platform,
    public toastCtrl: ToastController,
    private storage: Storage,
    private apiServices: ApiServiceProvider
  ) {
    this.title = this.navParams.get("title");
    this.flag = this.navParams.get("flag");
    this.previousPageData = this.navParams.get("data");
    console.log(" previousPageData== ", this.previousPageData);
    this.saved_option = this.previousPageData.saved_option;
    console.log(" saved_option== ", this.saved_option);
    if (this.saved_option != 0) {
      this.getvalcheck = 1;
      this.getVal(0);
    }
    if (this.saved_option == 0) {
      this.getVal(1);
    }
    this.storage.get("employeeId").then(data => {
      this.employeeId = data;
      console.log(" employeeId== ", this.employeeId);
    });
    this.storage.get("deviceId").then(data => {
      this.deviceId = data;
    });
    this.carvalues();
  }
  getVal(e) {
    console.log("rrrre", e);
    this.i = e;
    // this.j=e;
    this.radiocheck = e;
    if (this.radiocheck == 1) {
      this.showsubmit = true;
      //  this.f=undefined;
    }
    if (this.radiocheck == 0) {
      console.log("rrrr1234556", this.f);
      if (this.getvalcheck == 1) {
        console.log("this.getvalcheck", this.getvalcheck);
        this.f = this.saved_option;
        this.getvalcheck = 0;
        this.saved_option = undefined;
      } else {
        if (this.f != undefined) {
          this.showsubmit = true;
          this.selectr(this.f);
        } else {
          this.showsubmit = false;
        }
      }
    }
  }

  selectr(f) {
    console.log("rrrrf", f);
    this.f = f;
    console.log("rrrrffff", this.f);
    // if(this.f!=undefined){
    this.showsubmit = true;
    //  }
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad TravelassitancePage");
  }

  //   submit(a,b){
  // this.navCtrl.push('SavingpreferencesPage');
  //   }
  sodexosubmit() {
    // if(this.radiocheck==0){
    //   this.rcheck=1;
    // }
    // else{
    //   this.rcheck=0;
    // }
    if (this.radiocheck == 0) {
      // this.rcheck=1;
      this.rcheck = this.f;
    } else {
      this.rcheck = 0;
    }

    this.storage.get("employeeId").then(data => {
      this.employeeId = data;
      console.log(" employeeId== ", this.employeeId);
    });
    this.storage.get("login_token").then(data => {
      console.log("showOnBoard value is111==", data);
      this.login_token = data;
    });
    this.storage.get("deviceId").then(data => {
      this.deviceId = data;
      //  this.token='Q3owSXo3T05BVVJscHREVCsyeUtqZz09OjoWf4jZSksqJnff2wxdlZ7e'
      let apiKey = {
        client_id: this.apiServices.clientId,
        employee_id: this.employeeId,
        device: this.apiServices.device,
        device_id: this.deviceId,
        app_version: this.apiServices.appVersion,
        option: this.rcheck,
        form_id: this.previousPageData.form_id
      };
      this.apiServices.carhirevaluesubmit(apiKey, this.login_token).subscribe(
        res => {
          // this.apiServices.urllist(apiKey,this.token).then((result) => {
          console.log("", res);
          // this.allData = res.data;
          if (res.success == 1) {
            this.navCtrl.pop();
            this.apiMessage(res.message);
            // console.log('succ', this.allData);
          } else {
            this.apiMessage(res.message);
          }
        },
        err => {
          console.log("err== ", err);
          this.apiMessage(err);
        }
      );
    });
  }
  apiMessage(message) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad CarhirePage');
  // }

  carvalues() {
    // if(this.radiocheck==0){
    //   this.rcheck=1;
    // }
    // else{
    //   this.rcheck=0;
    // }
    // if(this.amount==null){
    //   alert("null")
    //   this.amount='';
    // }
    // if(this.amount=='undefined' || this.amount=='' || this.amount==null){
    // this.amount='';

    // }
    this.storage.get("employeeId").then(data => {
      this.employeeId = data;
      console.log(" employeeId== ", this.employeeId);
    });
    this.storage.get("login_token").then(data => {
      console.log("showOnBoard value is111==", data);
      this.login_token = data;
    });
    this.storage.get("deviceId").then(data => {
      this.deviceId = data;
      //  this.token='Q3owSXo3T05BVVJscHREVCsyeUtqZz09OjoWf4jZSksqJnff2wxdlZ7e'
      let apiKey = {
        client_id: this.apiServices.clientId,
        employee_id: this.employeeId,
        device: this.apiServices.device,
        device_id: this.deviceId,
        app_version: this.apiServices.appVersion
      };
      this.apiServices.carhirevalues(apiKey, this.login_token).subscribe(
        res => {
          // this.apiServices.urllist(apiKey,this.token).then((result) => {
          console.log("", res);
          // this.allData = res.data;
          if (res.success == 1) {
            this.allData = res.data;
            console.log("succ", this.allData);
          } else {
            this.apiMessage(res.message);
          }
        },
        err => {
          console.log("err== ", err);
          this.apiMessage(err);
        }
      );
    });
  }
}

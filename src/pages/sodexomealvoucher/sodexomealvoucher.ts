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
  selector: "page-sodexomealvoucher",
  templateUrl: "sodexomealvoucher.html"
})
export class SodexomealvoucherPage {
  sodexo: string;
  previousPageData: any;
  amount: any = 100;
  login_token: any;
  rcheck: number;
  deviceId: any;
  employeeId: any;
  flag: any;
  title: any;
  radiocheck: any;
  option: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private platform: Platform,
    public toastCtrl: ToastController,
    private storage: Storage,
    private apiServices: ApiServiceProvider
  ) {
    // this.title=this.navParams.get('title');
    // this.flag=this.navParams.get('flag');
    // this.previousPageData=this.navParams.get('data');

    this.previousPageData = this.navParams.get("data");
    this.option = this.previousPageData.saved_option;
    // this.amount=this.previousPageData.form_data_dump;
    this.title = this.previousPageData.form_name;
    this.flag = this.previousPageData.form_link;

    this.sodexo = this.option;

    if (this.option == "0") {
      // console.log(' this.amount22222', this.option);
      // this.sodexo='1';
      this.radiocheck = 0;
      // this.pansionamount(this.amount);
    } else {
      console.log(" this.amount111", this.amount);
      // this.sodexo='0';
      this.radiocheck = 1;
    }

    this.storage.get("employeeId").then(data => {
      this.employeeId = data;
      console.log(" employeeId== ", this.employeeId);
    });
    this.storage.get("deviceId").then(data => {
      this.deviceId = data;
    });
  }
  getVal(d, e) {
    console.log("rrrr", e);
    this.radiocheck = e;
    if (this.radiocheck == 0) {
    }
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad TravelassitancePage");
  }

  //   submit(a,b){
  // this.navCtrl.push('SavingpreferencesPage');
  //   }
  sodexosubmit() {
    if (this.radiocheck == 0) {
      this.rcheck = 1;
    } else {
      this.rcheck = 0;
    }
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
        app_version: this.apiServices.appVersion,
        flag: this.flag,
        option: this.sodexo,
        value: this.amount,
        form_id: this.previousPageData.form_id
      };
      this.apiServices.salarrystructure(apiKey, this.login_token).subscribe(
        res => {
          // this.apiServices.urllist(apiKey,this.token).then((result) => {
          console.log("", res);
          // this.allData = res.data;
          if (res.success == 1) {
            this.navCtrl.pop();
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
}

import { Component, NgZone } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
  LoadingController,
  AlertController,
  Platform
} from "ionic-angular";
import { ApiServiceProvider } from "../../providers/api-service/api-service";
import { Storage } from "@ionic/storage";

@IonicPage()
@Component({
  selector: "page-choiceofbankaccount",
  templateUrl: "choiceofbankaccount.html"
})
export class ChoiceofbankaccountPage {
  previousdata: any;
  title: any;
  employeeId: any;
  deviceId: any;
  login_token: any;
  allData: any;
  heading: any;
  option: any;
  previous_bank_detail: any = [];
  shownext: boolean = false;
  radiocheck: any;
  selectedIndex: any;
  bank_detail_status: any;
  select: any;
  selected: any = -1;
  msg: string;
  loading: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private zone: NgZone,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private platform: Platform,
    public toastCtrl: ToastController,
    private storage: Storage,
    private apiServices: ApiServiceProvider
  ) {
    this.previousdata = this.navParams.get("data");
    console.log("this.previousdata", this.previousdata);
    // this.title=this.navParams.get('title');
    this.storage.get("employeeId").then(data => {
      this.employeeId = data;
      console.log(" employeeId== ", this.employeeId);
    });
    this.storage.get("deviceId").then(data => {
      this.deviceId = data;
    });

    this.bankdetail();
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

  bankdetail() {
    this.commonLoader();
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
      this.apiServices.bankdetail(apiKey, this.login_token).subscribe(
        res => {
          this.loading.dismiss();
          // this.apiServices.urllist(apiKey,this.token).then((result) => {
          console.log("", res);

          if (res.success == 1) {
            this.allData = res.data;
            this.bank_detail_status = this.allData.bank_detail_status;
            this.previous_bank_detail = this.allData.previous_bank_detail;
            console.log("this.bank_detail_status", this.bank_detail_status);
            if (this.bank_detail_status != undefined) {
              this.zone.run(() => {
                // let num=this.bank_detail_status;

                this.selected = this.bank_detail_status;
                console.log("**==== ", this.selected);
                // if(this.selected==""||this.selected==''||this.selected==null ||this.selected==undefined){
                // this.shownext=true;
                // this.selected==-1;
                // }

                if (this.selected == -1) {
                  this.shownext = true;
                  this.selected == -1;
                }

                console.log("mySelectedIndex11== ", this.selected);
              });
            }
            this.heading = this.allData.heading;
            this.option = res.option;

            console.log("succ", this.allData);
          } else {
            this.allData = [];
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

  RadioCheck(i) {
    this.zone.run(() => {
      this.shownext = true;
      console.log("rrrr", i);
      this.selectedIndex = i;
    });
  }
  gotonext() {
    if (this.selected == -1) {
      this.msg = "please select any option";
      this.apiMessage(this.msg);
      return false;
      // this.navCtrl.push('BankinstructionPage',{'acountselection':this.selected});
    }

    if (this.selected == 1) {
      this.navCtrl.push("BankinstructionPage", {
        acountselection: this.selected,
        previousdata: this.previousdata
      });
    }
    if (this.selected == 0) {
      this.navCtrl.push("AlreadyacountformPage", {
        acountselection: this.selected,
        previous_bank_detail: this.previous_bank_detail,
        previousdata: this.previousdata
      });
    }
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad ChoiceofbankaccountPage");
  }
  fun(i) {
    console.log("i", i);
    this.selected = i;
    console.log("this.selected", this.selected);
  }

  edit() {
    this.shownext = true;
    // this.selected=undefined;
  }
}

import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
  AlertController,
  LoadingController,
  Platform,
  MenuController
} from "ionic-angular";
import { ApiServiceProvider } from "../../../../providers/api-service/api-service";
import { Storage } from "@ionic/storage";
import {
  InAppBrowser,
  InAppBrowserEvent,
  InAppBrowserOptions
} from "@ionic-native/in-app-browser";

@IonicPage()
@Component({
  selector: "page-declarationotp",
  templateUrl: "declarationotp.html"
})
export class DeclarationotpPage {
  otpdata: any;
  form_data: any;
  show_skip: any;
  loading: any;
  walkthrough: any;
  profile_pic_upload: any;
  profilekey: any;
  tanckey: any;
  tncData: any;
  myotp4: any = "";
  myotp3: any = "";
  myotp2: any = "";
  myotp1: any = "";
  apiKey: any;
  deviceId: any;
  login_token: any;
  employeeId: any;
  employee_type: any;
  mobileNumer: any = "";
  resendOTPText: any = "Resend";
  resendBtnDisable: boolean = false;

  submitBtnText: any = "Submit";
  submitBtnDisable: boolean = false;
  page_title: string;
  msgdata: any;
  constructor(
    private alertCtrl: AlertController,
    private platform: Platform,
    private menu: MenuController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private storage: Storage,
    private apiServices: ApiServiceProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    private iab: InAppBrowser
  ) {
    this.form_data = this.navParams.get("form_data");
    this.page_title = this.form_data.form_name;
    this.otpdata = this.navParams.get("otpdata");
    this.storage.get("login_token").then(data => {
      this.login_token = data;
    });
    this.storage.get("employeeId").then(data => {
      this.employeeId = data;
    });
    this.msgdata=this.navParams.get('msgdata');
  }

  moveFocus(nextElement, val, index) {
    if (index < 4) {
      if (this.myotp2 == undefined || this.myotp2 == "") {
        nextElement.setFocus();
      } else if (this.myotp3 == undefined || this.myotp3 == "") {
        nextElement.setFocus();
      } else if (this.myotp4 == undefined || this.myotp4 == "") {
        nextElement.setFocus();
      }
    } else {
    }
  }

  checkFocus(index) {
    console.log("********", index);
    if (index == 1) {
      this.myotp1 = "";
    } else if (index == 2) {
      this.myotp2 = "";
    } else if (index == 3) {
      this.myotp3 = "";
    } else if (index == 4) {
      this.myotp4 = "";
    }
  }

  resendOTP() {
    this.resendOTPText = "Please wait...";
    this.resendBtnDisable = true;

    this.commonLoader();
    //   this.dumpdata={"nationalities":this.nationalities,"selected":this.finalselect,"Details1":this.nDetails,
    // "Details2":this.fDetails}
    this.storage.get("deviceId").then(data => {
      this.deviceId = data;
      let apiKey = {
        client_id: this.apiServices.clientId,
        employee_id: this.employeeId,
        device: this.apiServices.device,
        device_id: this.deviceId,
        app_version: this.apiServices.appVersion,
        data_dump: "",
        otp_id: this.otpdata
      };
      this.apiServices.get_declaration_otp(apiKey, this.login_token).subscribe(
        res => {
          console.log("tnc res==", res);
          this.loading.dismiss();
          if (res.success == 1) {
            console.log("succ");
            this.resendOTPText = "Resend";
            this.resendBtnDisable = false;
          } else {
            this.apiMessage(res.message);
          }
        },
        err => {
          this.loading.dismiss();
          console.log("err== ", err);
          this.apiMessage(err);
        }
      );
    });
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
      duration: 3000
    });
    toast.present();
  }

  submitOtp() {
    this.submitBtnText = "Please wait...";
    this.submitBtnDisable = true;

    if (
      this.myotp1 == "" ||
      this.myotp2 == "" ||
      this.myotp3 == "" ||
      this.myotp4 == ""
    ) {
      // show alert of mandatory field
      this.apiMessage("all fields are mandatory");

      this.submitBtnText = "Submit";
      this.submitBtnDisable = false;
    } else {
      let finalOTP =
        this.myotp1 + "" + this.myotp2 + "" + this.myotp3 + "" + this.myotp4;

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

        this.apiKey = {
          client_id: this.apiServices.clientId,
          employee_id: this.employeeId,
          device: this.apiServices.device,
          device_id: this.deviceId,
          app_version: this.apiServices.appVersion,
          otp: finalOTP,
          form_id: this.form_data.form_id,
          group_id: this.form_data.group_id
        };

        this.apiServices
          .submit_form_declaration(this.apiKey, this.login_token)
          .subscribe(
            res => {
              console.log("otp", res);

              if (res.success == 1) {
                this.navCtrl.popTo(
                  this.navCtrl.getByIndex(this.navCtrl.length() - 3)
                );
                this.submitBtnText = "Submit";
                this.submitBtnDisable = false;
              } else {
                this.apiMessage(res.message);

                this.submitBtnText = "Submit";
                this.submitBtnDisable = false;
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

  ionViewDidLoad() {
    console.log("ionViewDidLoad DeclarationotpPage");
  }
}

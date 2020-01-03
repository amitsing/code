import { Component, ViewChild } from "@angular/core";
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
import { GratuityForm, Layout } from "./response";
import { GratuityDetailsRequest } from "./request";

/**
 * Generated class for the NomineesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-nominees",
  templateUrl: "nominees.html"
})
export class NomineesPage {
  public formData: any;
  employeeId: any;
  login_token: any;
  deviceId: any;
  loading: any;
  fill_status: any;
  data: GratuityForm[] = [];
  isSubmited: boolean = false;
  shareError: boolean = false;
  @ViewChild("content") content: any;

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
        });
      });
    });

    this.formData = this.navParams.get("data");
    // this.
  }

  editFamilyDetails(data: GratuityForm) {
    this.shareError = false;
    data.layout = Layout.FORM;
  }

  showConfirm(data: GratuityForm) {
    if (
      this.data.length > 1 ||
      (this.data.length == 1 && this.fill_status == "0")
    ) {
      this.shareError = false;
      const confirm = this.alertCtrl.create({
        // title: 'Use this lightsaber?',
        message: "Are you sure, you want to remove this data?",
        buttons: [
          {
            text: "No",
            handler: () => {
              console.log("Disagree clicked");
            }
          },
          {
            text: "Yes",
            handler: () => {
              console.log("Agree clicked");
              this.deleteFamilyDetail(data);
            }
          }
        ]
      });
      confirm.present();
    } else if (this.data.length == 1 && this.fill_status == "1") {
      this.apiMessage("Please edit information insted of deleting.");
    }
  }

  deleteFamilyDetail(data: GratuityForm) {
    this.commonLoader();
    let apikey = {
      client_id: this._apiService.clientId,
      employee_id: this.employeeId,
      device: this._apiService.device,
      device_id: this.deviceId,
      app_version: this._apiService.appVersion,
      form_id: this.formData.form_id,
      auto_id: data.GratuityDetails.auto_id,
      card_len: this.data.length
    };
    this._apiService
      .IndiaDeleteGratuityForm(apikey, this.login_token)
      .subscribe(
        res => {
          this.loading.dismiss();
          if (res.success == "1") {
            this.apiMessage(res.message);
            this.data = this.data.filter(element => {
              return element != data;
            });
            if (this.data.length == 0) {
              this.fill_status = "0";
              let temp: GratuityForm = new GratuityForm();
              this.data.push(temp);
            }
          } else {
            this.apiMessage(res.message);
          }
          console.log(res);
        },
        err => {
          this.loading.dismiss();
          this.apiMessage(err);
        }
      );
  }

  changeToCard(data: GratuityForm) {
    data.layout = Layout.CARD;
  }

  submit(item: GratuityForm) {
    this.isSubmited = true;
    setTimeout(() => {
      const child = document.querySelector(".error");
      if (!child) {
        this.isSubmited = false;
        if (!item.firstEdit) {
          if (this.fill_status == "1") {
            let count = 0;
            this.shareError = false;
            this.data.forEach(element => {
              if (!element.firstEdit) {
                element.layout = Layout.CARD;
                count += parseInt(
                  element.GratuityDetails.gratuity_sharing_proportion.value
                );
              } else {
                this.data = this.data.filter(item => {
                  return element != item;
                });
              }
            });
            console.log(count);
            if (count != 100 || count == NaN) {
              this.shareError = true;
              this.apiMessage(
                "Please make sure the sum of distributed share is 100%."
              );
            } else {
              this.finalSubmit(item, "submit");
            }
          } else {
            this.finalSubmit(item, "submit");
          }
        } else {
          this.finalSubmit(item, "save");
        }
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

  finalSubmit(data: GratuityForm, formStatus: string) {
    console.log(this.data);
    let d: GratuityDetailsRequest = new GratuityDetailsRequest(
      data.GratuityDetails
    );
    console.log(d);
    this.commonLoader();
    let apikey = {
      client_id: this._apiService.clientId,
      employee_id: this.employeeId,
      device: this._apiService.device,
      device_id: this.deviceId,
      app_version: this._apiService.appVersion,
      form_id: this.formData.form_id,
      submit_type: formStatus,
      data: d,
      auto_id: data.GratuityDetails.auto_id
    };
    if (data.firstEdit) {
      this._apiService
        .IndiaSaveGratuityForm(apikey, this.login_token)
        .subscribe(
          res => {
            this.loading.dismiss();
            if (res.success == "1") {
              this.apiMessage(res.message);
              data.layout = Layout.CARD;
              data.firstEdit = false;
              data.GratuityDetails.auto_id = res.auto_id;
              // this.navCtrl.pop();
            } else {
              this.apiMessage(res.message);
            }
            console.log(res);
          },
          err => {
            this.apiMessage(err);
          }
        );
    } else {
      this._apiService
        .IndiaUpdateGratuityForm(apikey, this.login_token)
        .subscribe(
          res => {
            this.loading.dismiss();
            if (res.success == "1") {
              this.apiMessage(res.message);
              data.layout = Layout.CARD;
              data.firstEdit = false;
              // this.navCtrl.pop();
            } else {
              this.apiMessage(res.message);
            }
            console.log(res);
          },
          err => {
            this.apiMessage(err);
          }
        );
    }
  }

  closeForm(item: GratuityForm) {
    this.data = this.data.filter(element => {
      return element != item;
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
    this._apiService.IndiaGetGratuityForm(apikey, this.login_token).subscribe(
      res => {
        this.loading.dismiss();
        if (res.success == "1") {
          console.log(res);
          this.fill_status = res.fill_status;
          if (res.first_attempt == "1") {
            let tempArray = res.data;
            let temp: GratuityForm = new GratuityForm();
            temp.initializeData(tempArray[0]);
            temp.layout = Layout.FORM;
            temp.firstEdit = true;
            this.data.push(temp);
          } else {
            let tempArray = res.data;
            tempArray.forEach(element => {
              let temp: GratuityForm = new GratuityForm();
              temp.initializeData(element);
              this.data.push(temp);
            });
          }
          console.log(this.data);
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

  addMember() {
    this.shareError = false;
    if (this.data.length < 5) {
      let item: GratuityForm[] = [];
      this.data.forEach(element => {
        if (element.firstEdit) {
          item.push(element);
        }
      });
      if (item.length == 0) {
        let temp: GratuityForm = new GratuityForm();
        this.data.push(temp);
      }
      setTimeout(() => {
        this.content.scrollToBottom(300);
      }, 300);
    } else {
      this.apiMessage("Only five nominees can be added.");
    }
  }

  submit_all() {
    let count = 0;
    this.shareError = false;
    this.data.forEach(element => {
      if (!element.firstEdit) {
        element.layout = Layout.CARD;
        count += parseInt(
          element.GratuityDetails.gratuity_sharing_proportion.value
        );
      } else {
        this.data = this.data.filter(item => {
          return element != item;
        });
      }
    });
    console.log(count);
    if (count != 100 || count == NaN) {
      this.shareError = true;
      this.apiMessage("Please make sure the sum of distributed share is 100%.");
    } else {
      this.commonLoader();
      let data_to_send: GratuityDetailsRequest[] = [];
      this.data.forEach(element => {
        let d: GratuityDetailsRequest = new GratuityDetailsRequest(
          element.GratuityDetails
        );
        data_to_send.push(d);
      });
      let apikey = {
        client_id: this._apiService.clientId,
        employee_id: this.employeeId,
        device: this._apiService.device,
        device_id: this.deviceId,
        app_version: this._apiService.appVersion,
        form_id: this.formData.form_id,
        content_id: "",
        data_dump: data_to_send
      };
      this._apiService.get_emergency_submit(apikey, this.login_token).subscribe(
        res => {
          this.loading.dismiss();
          if (res.success == "1") {
            this.apiMessage(res.message);
            this.navCtrl.pop();
          } else {
            this.apiMessage(res.message);
            // this.navCtrl.pop();
          }
        },
        err => {
          this.loading.dismiss();
          this.apiMessage(err);
          // this.navCtrl.pop();
        }
      );
    }
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad NomineesPage");
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

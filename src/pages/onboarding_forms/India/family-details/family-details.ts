import { Component, NgZone, ViewChild } from "@angular/core";
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
import { Data, Layout } from "./response";
import { FamilyDetailRequest } from "./request";

@IonicPage()
@Component({
  selector: "page-family-details",
  templateUrl: "family-details.html"
})
export class FamilyDetailsPage {
  genderOptions: any;
  public formData: any;
  employeeId: any;
  login_token: any;
  deviceId: any;
  loading: any;
  isSubmited: boolean = false;
  data: Data[] = [];
  blood_group: any[];
  fill_status: any;
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
          this.getDropDowns();
        });
      });
    });

    this.formData = this.navParams.get("data");
    console.log("test", this.formData);
    // this.form_id = data.form_id;
  }

  editFamilyDetails(data: Data) {
    data.layout = Layout.FORM;
  }

  submit_all() {
    this.commonLoader();
    let data_to_send: FamilyDetailRequest[] = [];
    this.data.forEach(element => {
      let d: FamilyDetailRequest = new FamilyDetailRequest(
        element.familyDetails
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

  showConfirm(data: Data) {
    if (this.data.length > 1 || (this.data.length == 1 && this.fill_status == '0')) {
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
    } else if(this.data.length == 1 && this.fill_status == '1') {
      this.apiMessage("Please edit information insted of deleting.");
    }
  }

  deleteFamilyDetail(data: Data) {
    this.commonLoader();
    let apikey = {
      client_id: this._apiService.clientId,
      employee_id: this.employeeId,
      device: this._apiService.device,
      device_id: this.deviceId,
      app_version: this._apiService.appVersion,
      form_id: this.formData.form_id,
      auto_id: data.familyDetails.auto_id,
      card_len: this.data.length
    };
    this._apiService
      .IndiaDeleteFamilyDetails(apikey, this.login_token)
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
              let temp: Data = new Data();
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

  changeToCard(data: Data) {
    data.layout = Layout.CARD;
  }

  submit(item: Data) {
    this.isSubmited = true;
    setTimeout(() => {
      const child = document.querySelector(".error");
      if (!child) {
        this.isSubmited = false;
        if (!item.firstEdit) {
          this.finalSubmit(item, "submit");
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

  finalSubmit(data: Data, formStatus: string) {
    console.log(this.data);
    let d: FamilyDetailRequest = new FamilyDetailRequest(data.familyDetails);
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
      auto_id: data.familyDetails.auto_id
    };
    if (data.firstEdit) {
      this._apiService
        .IndiaSaveFamilyDetail(apikey, this.login_token)
        .subscribe(
          res => {
            this.loading.dismiss();
            if (res.success == "1") {
              this.apiMessage(res.message);
              data.layout = Layout.CARD;
              data.firstEdit = false;
              data.familyDetails.auto_id = res.auto_id;
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
        .IndiaUpdateFamilyDetails(apikey, this.login_token)
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

  closeForm(item: Data) {
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
    this._apiService.IndiaGetFamilyDetail(apikey, this.login_token).subscribe(
      res => {
        this.loading.dismiss();
        if (res.success == "1") {
          console.log(res);
          this.fill_status = res.fill_status;
          if (res.first_attempt == "1") {
            let tempArray = res.data;
            let temp: Data = new Data();
            temp.initializeData(tempArray[0]);
            temp.layout = Layout.FORM;
            temp.firstEdit = true;
            this.data.push(temp);
          } else {
            let tempArray = res.data;
            tempArray.forEach(element => {
              let temp: Data = new Data();
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
    let item: Data[] = [];
    this.data.forEach(element => {
      if (element.firstEdit) {
        item.push(element);
      }
    });
    if (item.length == 0) {
      let temp: Data = new Data();
      this.data.push(temp);
    }
    setTimeout(() => {
      this.content.scrollToBottom(300);
    }, 300);
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
        this.blood_group = res.data.relationship;
        this.genderOptions = res.data.gender;
      });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad FamilyandemergencycontactPage");
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

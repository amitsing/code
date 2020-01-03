import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from "@ionic/storage";

/**
 * Generated class for the OnboardingDynamicModuleDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-onboarding-dynamic-module-detail',
  templateUrl: 'onboarding-dynamic-module-detail.html',
})
export class OnboardingDynamicModuleDetailPage {

  previousPageData: any;
  page_title: string;
  employeeId: any;
  login_token: any;
  deviceId: any;
  loading: any;
  allData : any[];
  error_image: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _apiService: ApiServiceProvider,
    private storage: Storage,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController
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
    this.previousPageData = this.navParams.get("data");
    this.page_title = this.previousPageData.title;
    console.log(this.previousPageData);
  }

  getData() {
    this.commonLoader();
    let apikey = {
      client_id: this._apiService.clientId,
      employee_id: this.employeeId,
      device: this._apiService.device,
      device_id: this.deviceId,
      app_version: this._apiService.appVersion,
      list_id: this.previousPageData.auto_id,
    };
    this._apiService
      .onboardingDynamicModuleDetail(apikey, this.login_token)
      .subscribe(
        res => {
          this.loading.dismiss();
          if (res.success == "1") {
            this.allData = res.data;
          } else {
            // this.apiMessage(res.message);
            this.error_image = res.error_image;
          }
        },
        err => {
          this.loading.dismiss();
          this.apiMessage(err);
        }
      );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OnboardingDynamicModuleDetailPage');
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

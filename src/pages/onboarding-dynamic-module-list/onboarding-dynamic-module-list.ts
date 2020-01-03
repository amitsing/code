import { Component, ElementRef } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
  LoadingController
} from "ionic-angular";
import { ApiServiceProvider } from "../../providers/api-service/api-service";
import { Storage } from "@ionic/storage";

/**
 * Generated class for the OnboardingDynamicModuleListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-onboarding-dynamic-module-list",
  templateUrl: "onboarding-dynamic-module-list.html"
})
export class OnboardingDynamicModuleListPage {
  previousPageData: any;
  page_title: string;
  employeeId: any;
  login_token: any;
  deviceId: any;
  loading: any;
  value: any = 0;
  infiniteScrollCalled: boolean = false;
  hideInfiniteScroll: boolean = false;
  myInfiniteScroll: any;
  allData: any;
  error_image : string;

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

  ionViewDidLoad() {
    console.log("ionViewDidLoad OnboardingDynamicModuleListPage");
  }

  getData() {
    this.commonLoader();
    let apikey = {
      client_id: this._apiService.clientId,
      employee_id: this.employeeId,
      device: this._apiService.device,
      device_id: this.deviceId,
      app_version: this._apiService.appVersion,
      module_id: this.previousPageData.auto_id,
      val: this.value.toString(),
    };
    this._apiService
      .onboardingDynamicModuleList(apikey, this.login_token)
      .subscribe(
        res => {
          this.loading.dismiss();
          if (res.success == "1") {
            if (this.allData == undefined) {
              this.allData = res.data;
            } else {
              this.allData = this.allData.concat(res.data);
              console.log("list==", res.data);
            }
            if (this.infiniteScrollCalled == true) {
              this.myInfiniteScroll.complete();
              this.infiniteScrollCalled = false;
            }
            console.log("==", this.allData);
            this.hideInfiniteScroll = false;
          } else {
            if(this.allData){
              this.apiMessage(res.message);              
            } else {
              this.error_image = res.error_image;
            }
            this.hideInfiniteScroll=true;
          }
        },
        err => {
          this.loading.dismiss();
          this.apiMessage(err);
          this.hideInfiniteScroll=true;
        }
      );
  }

  gotodetail(data) {
    this.navCtrl.push('OnboardingDynamicModuleDetailPage', {'data' : data});
  }

  doInfinite(infiniteScroll) {
    console.log("Begin async operation");
    this.myInfiniteScroll = infiniteScroll;
    setTimeout(() => {
      this.infiniteScrollCalled = true;
      this.value = this.allData.length;
      this.getData();
      console.log("Async operation has ended");
      // this.myInfiniteScroll.complete();
    }, 500);
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

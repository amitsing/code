import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { ImageViewerController } from 'ionic-img-viewer/dist/es2015/src/image-viewer.controller';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

/**
 * Generated class for the DynamicModuleListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dynamic-module-list',
  templateUrl: 'dynamic-module-list.html',
})
export class DynamicModuleListPage {
  top_image: string;
  myinfinte: any;
  moduleFlag: any;
  deviceId: any;
  login_token: any;
  employeeId: any;
  list:any[];
  title:string;
  loading:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private apiService: ApiServiceProvider, private storage : Storage,
    private toastCtrl : ToastController, private _imageViewerCtrl : ImageViewerController, private loadingCtrl : LoadingController) {
    this.moduleFlag = this.navParams.get('data');
    this.title = this.navParams.get('title');
    console.log(this.moduleFlag);

    this.storage.get('employeeId').then(eID => {
      this.employeeId = eID;
      console.log(' employeeId== ', this.employeeId);
      this.storage.get('login_token').then((token) => {
        console.log('showOnBoard value is111==', token);
        this.login_token = token;
        this.storage.get('deviceId').then(deviceID => {
          this.deviceId = deviceID;
          this.getList();
        });
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DynamicModuleListPage');
  }

  getList(){
    this.commonLoader();
    let apiKey = {
      "client_id": this.apiService.clientId,
      "employee_id": this.employeeId,
      "device": this.apiService.device,
      "device_id": this.deviceId,
      "app_version": this.apiService.appVersion,
      "flag": this.moduleFlag,
    };

    this.apiService.dynamicModuleList(apiKey,this.login_token).subscribe((res)=>{
      console.log(res);
      this.loading.dismiss();
      if(res.success == '1'){
        this.top_image = res.background_image;
        this.list = res.data;
      }else{

      }
    })
  }

  commonLoader() {
    this.loading = this.loadingCtrl.create({
      enableBackdropDismiss: true,
      spinner: 'ios-small',
      content: 'Loading data...'
    });
    this.loading.present();
  }

  gotodetail(data){
    this.navCtrl.push('DynamicmodulePage',{'data':data});
  }

  apiMessage(message) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  presentImage(myImage) {
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();
 
    setTimeout(() => imageViewer.dismiss(), 30000);
    imageViewer.onDidDismiss(() => console.log('Viewer dismissed'));
  }

}

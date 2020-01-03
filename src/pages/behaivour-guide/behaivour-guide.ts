import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Slides, ToastController,LoadingController } from 'ionic-angular';

import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import { ImageViewerController } from 'ionic-img-viewer';

/**
 * Generated class for the BehaivourGuidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-behaivour-guide',
  templateUrl: 'behaivour-guide.html',
})
export class BehaivourGuidePage {
  deviceId: any;
  _imageViewerCtrl: ImageViewerController;
  login_token: any;
  employeeId: any;
  employee_type: any;
  allData: any;
  constructor(
    private storage: Storage, private apiServices: ApiServiceProvider,private toastCtrl: ToastController,
    private alertCtrl: AlertController, imageViewerCtrl: ImageViewerController,public loadingCtrl: LoadingController,
    public navCtrl: NavController, public navParams: NavParams) {
    this._imageViewerCtrl = imageViewerCtrl;
   
    this.storage.get('employeeId').then(data => {
      this.employeeId = data;
      console.log(' employeeId== ', this.employeeId);
    });
    this.storage.get('login_token').then((data) => {
      console.log('thoughtOftheDayApi value is111==', data);
      this.login_token = data;
    });


    this.storage.get('employee_type').then((data) => {
      console.log('showOnBoard value is111==', data);
      this.employee_type = data;
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad thoughtOftheDayApi');
    this.getthoughtFun();
  }

  getthoughtFun() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();
  
    this.storage.get('employeeId').then(data => {
      this.employeeId = data;
      console.log(' employeeId== ', this.employeeId);
    });
    this.storage.get('login_token').then((data) => {
      console.log('showOnBoard value is111==', data);
      this.login_token = data;
    });


    this.storage.get('employee_type').then((data) => {
      console.log('showOnBoard value is111==', data);
      this.employee_type = data;
    });


    this.storage.get('deviceId').then(data => {
      this.deviceId = data;
      let apiKey = {
        "client_id": this.apiServices.clientId,
        "employee_id": this.employeeId,
        "device": this.apiServices.device,
        "device_id": this.deviceId,
        "app_version": this.apiServices.appVersion,
        "flag":"50",
        "user_type":this.employee_type
      };
      this.apiServices.behaviourGuideApi(apiKey, this.login_token)
        .subscribe((res) => {
          console.log('behaviourGuideApi List res==', res);
          if (res.success == 1) {
            this.allData=res.data;
            setTimeout(() => {
              loading.dismiss();
            }, 1000);
          } else {
if(this.allData.length==0){
let alert = this.alertCtrl.create({
              // title: 'Confirm purchase',
              message: res.message,
              buttons: [
                {
                  text: 'Ok',
                  role: 'cancel',
                  handler: () => {
                    console.log('Cancel clicked');
                    this.navCtrl.pop();
                  }
                }
              ]
            });
            alert.present();
}else{
  let toast = this.toastCtrl.create({
    message: 'User was added successfully',
    duration: 3000,
    position: 'top'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}
setTimeout(() => {
  loading.dismiss();
}, 0);   

          }


        })

    })



  }


  presentImage(myImage) {
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();

    setTimeout(() => imageViewer.dismiss(), 30000);
    imageViewer.onDidDismiss(() => console.log('Viewer dismissed'));
  }




}

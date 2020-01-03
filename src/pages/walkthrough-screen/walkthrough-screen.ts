// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams,App } from 'ionic-angular';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,LoadingController,App,MenuController } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import {Validators, FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ImageViewerController } from 'ionic-img-viewer';
import { AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-walkthrough-screen',
  templateUrl: 'walkthrough-screen.html',
})
export class WalkthroughScreenPage {
  employeeId: any;
  login_token: any;
  deviceId: any;
  introScreen: any = [];
  imgIndex: number = 0;
  loading:any;
  constructor(private app:App,private imageViewerCtrl: ImageViewerController, public toastCtrl: ToastController,
    private storage: Storage,public loadingCtrl: LoadingController,private alertCtrl: AlertController,private menu: MenuController,
    private apiServices: ApiServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
      this.storage.get('employeeId').then(data => {
        this.employeeId = data;
        console.log(' employeeId== ', this.employeeId);
      });
    this.introScreen = [
      {
        "imgPath": "assets/walkthroughScreen/Daystojoin.png"
      }, {
        "imgPath": "assets/walkthroughScreen/journey.png"
      }, {
        "imgPath": "assets/walkthroughScreen/joiningFormalities.png"
      }, {
        "imgPath": "assets/walkthroughScreen/joiningdetail.png"
      }

    ]



  }

  seeNextImage() {
    if (this.imgIndex < this.introScreen.length-1 && this.imgIndex!=3) {
      // if(this.introScreen.length-1!=3){
        this.imgIndex = this.imgIndex + 1;
      // }
     
    } else {
      // alert('go to home');
      // this.navCtrl.setRoot('TabsPage');
      this.gotohome();
      // alert(this.imgIndex);
      // this.app.getRootNav().setRoot('TabsPage')
    }

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad WalkthroughScreenPage updatewalkthrough');
  }
  //Common Loader:
  commonLoader() {
    this.loading = this.loadingCtrl.create({
      enableBackdropDismiss: true,
      spinner: 'ios-small',
      content: 'Loading data...'
    });
    this.loading.present();
  }

  gotohome(){
    this.storage.get('employeeId').then(data => {
      this.employeeId = data;
      console.log(' employeeId== ', this.employeeId);
    });
    this.storage.get('deviceId').then(data=>{
      this.deviceId=data;
      console.log(' deviceId== ',this.deviceId);
     
     });
    this.commonLoader();
    this.storage.get('login_token').then((data) => {
      console.log('AlbumDetails value is111==', data);
      this.login_token = data;
      let apiKey = {
  
        "client_id":this.apiServices.clientId,
        "employee_id":this.employeeId,
        "device":this.apiServices.device,
        "device_id":this.deviceId,
        "app_version":this.apiServices.appVersion

      }
      console.log('AlbumDetails api apiKey==', apiKey);
      this.apiServices.updatewalkthrough(apiKey, this.login_token).subscribe(result => {
        console.log('AlbumDetails api res==', result);
        this.loading.dismiss();
        if (result.success == 1) {
          this.storage.set('walkthrough',1);
          this.navCtrl.setRoot('TabsPage');
          console.log(' api res==11111', result);
          // this.apiMessage(result.message);
        } else {
          // this.msg=result.message;
          this.apiMessage(result.message);
        }


      })

    })
  }

  apiMessage(message) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }
  ionViewWillEnter(){
    this.menu.swipeEnable(false);
}

}

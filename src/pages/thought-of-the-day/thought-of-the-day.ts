import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Slides } from 'ionic-angular';

import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import { ImageViewerController } from 'ionic-img-viewer';
@IonicPage()
@Component({
  selector: 'page-thought-of-the-day',
  templateUrl: 'thought-of-the-day.html',
})
export class ThoughtOfTheDayPage {
  user_Type: any;
  index12: any;
  index: any;
  @ViewChild(Slides) slides: Slides;
  activeSliderIndexDetect: number = 0;
  deviceId: any;
  _imageViewerCtrl: ImageViewerController;
  login_token: any;
  employeeId: any;
  value: number = 0;
  thoughtData: any;
  constructor(
    private storage: Storage, private apiServices: ApiServiceProvider,
    private alertCtrl: AlertController, imageViewerCtrl: ImageViewerController,
    public navCtrl: NavController, public navParams: NavParams) {
    this._imageViewerCtrl = imageViewerCtrl;



    // setTimeout(() => {
    //             // this.albumdata=this.navParams.get('data');
             
                this.index12=this.navParams.get('index');
    //           console.log(' index== ', this.index12);

    //             }, 2000)


    this.storage.get('employeeId').then(eID => {
      this.employeeId = eID;
      console.log(' employeeId== ', this.employeeId);
      this.storage.get('login_token').then((lToken) => {
        console.log('thoughtOftheDayApi value is111==', lToken);
        this.login_token = lToken;
        this.storage.get('employee_type').then((user) => {
          console.log('thoughtOftheDayApi value is111==', user);
          this.user_Type = user;
          
        })
      })
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad thoughtOftheDayApi');
    this.getthoughtFun();
  }


  getthoughtFun() {
    this.storage.get('employeeId').then(data => {
      this.employeeId = data;
      console.log(' employeeId== ', this.employeeId);
    });
    this.storage.get('login_token').then((data) => {
      console.log('showOnBoard value is111==', data);
      this.login_token = data;
    })
    this.storage.get('deviceId').then(data => {
      this.deviceId = data;
      let apiKey = {
        "client_id": this.apiServices.clientId,
        "employee_id": this.employeeId,
        "device": this.apiServices.device,
        "device_id": this.deviceId,
        "app_version": this.apiServices.appVersion,
        "val": this.value,
        "flag":"5"
      };
      this.apiServices.thoughtOftheDayApi(apiKey, this.login_token)
        .subscribe((res) => {
          console.log('thoughtOftheDayApi List res==', res);
          if (res.success == 1) {
            
            if (this.thoughtData == undefined) {
              // setTimeout(() => {
          
                this.thoughtData = res.data;
                this.index12=this.navParams.get('index');
                console.log(' index== ', this.index12);
                // }, 2000);


              // this.thoughtData = res.data;
              // this.index=this.navParams.get('data');
              // this.analyticApi();
              this.analyticApi(this.thoughtData[0].auto_id);
              console.log('thoughtOftheDayApi List data==', this.thoughtData);
            } else {
              this.thoughtData=this.thoughtData.concat(res.data);
              console.log('new data== ', this.thoughtData);
            }



          } else {
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


  // this function check every time when slide goes to change
  ionSlideDidChange() {
    console.log('this is ionSlideDidChange2');
    this.activeSliderIndexDetect = this.slides.getActiveIndex();
    console.log('this is ionSlideDidChange2', this.activeSliderIndexDetect);


    // let currentIndex = this.slides.getActiveIndex();
    // console.log('Current index is', currentIndex);
    // this.index=this.activeSliderIndexDetect;
    // this.analyticApi();

    this.index=this.activeSliderIndexDetect;
    let postId = this.thoughtData[this.activeSliderIndexDetect].auto_id;
    this.analyticApi(postId);
  }




  slideChangeDetect() {
 
    console.log('index==', this.activeSliderIndexDetect);
    if (this.thoughtData.length >= 10) {
      if (this.activeSliderIndexDetect == this.thoughtData.length-5) {
        this.value=this.thoughtData.length;
        this.getthoughtFun();
      }
    }
   
  }

  analyticApi(postId){
    this.storage.get('employeeId').then(data => {
      this.employeeId = data;
      console.log(' employeeId== ', this.employeeId);
    });
    this.storage.get('login_token').then((data) => {
      console.log('showOnBoard value is111==', data);
      this.login_token = data;
    })
    this.storage.get('deviceId').then(data => {
      this.deviceId = data;
      let apiKey = {
        "client_id": this.apiServices.clientId,
        "employee_id": this.employeeId,
        "device": this.apiServices.device,
        "device_id": this.deviceId,
        "app_version": this.apiServices.appVersion,
        "track_flag": "4", 
        "type" : "detail",
        "user_type" : this.user_Type,
        "post_id" : postId,
      };
      this.apiServices.analyticApi(apiKey,this.login_token).subscribe(res=>{
        console.log(res);
      })
    });
  }

  // getAutoId(){
  //   let postId = this.thoughtData[this.activeSliderIndexDetect].auto_id;
  //   return postId;
  // }
}

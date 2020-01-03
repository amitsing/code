import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides,Platform } from 'ionic-angular';
import { AndroidPermissions } from '@ionic-native/android-permissions';

@IonicPage()
@Component({
  selector: 'page-slide-three-image',
  templateUrl: 'slide-three-image.html',
})
export class SlideThreeImagePage {
  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController,public plt: Platform, public navParams: NavParams,private androidPermissions: AndroidPermissions) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlideThreeImagePage');
    if (this.plt.is('cordova')) {
      // This will only print when on iOS
      this.camPermissionON();
      console.log('I am an iOS device!');
    }
   
  }
  seeNext(val){
    if(val<3){
      this.slides.slideNext();
    }else{
      // this.navCtrl.push('ChooseUserPage');
      this.navCtrl.push('TandCbeforeloginPage');
    }
  }


  camPermissionON(){
    //camera permission
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
      result => console.log('Has permission?',result.hasPermission),
      err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
    );
    
    this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);
  
  //external storage access
  this.androidPermissions.requestPermissions(
    [
        this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE, 
        this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE
    ]
);

 //external storage access

// this.androidPermissions.hasPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE)
//       .then(status => {
//         if (status.hasPermission) {
//           // this.captureVideo();
//         } else {
//           this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE)
//           .then(status =>{
//             // if(status.hasPermission) this.captureVideo();
//           });
//         }
//       })
  
  }


}

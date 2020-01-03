import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController, ModalController,Navbar, LoadingController } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { ImageViewerController } from 'ionic-img-viewer';

@IonicPage()
@Component({
  selector: 'page-joineeupdatenumber',
  templateUrl: 'joineeupdatenumber.html',
})
export class JoineeupdatenumberPage {
  update_icon: any;
  @ViewChild(Navbar) navBar: Navbar;
  profileDetails: any;
  number: any;
  userImage: any;
  userName: any;
  allData: any;
  employeeType: any;
  login_token: any;
  employeeId: any;
  deviceId: any;
  _imageViewerCtrl: ImageViewerController;
  constructor(public loadingCtrl: LoadingController,private imageViewerCtrl: ImageViewerController, private imagePicker: ImagePicker,private modalCtrl:ModalController ,public toastCtrl: ToastController,private storage:Storage,
    private apiServices:ApiServiceProvider,public navCtrl: NavController) {
      this._imageViewerCtrl = imageViewerCtrl;
      this.storage.get('login_token').then((data) => { this.login_token = data; });
      this.storage.get('employeeId').then(data=>{
        this.employeeId=data;
        console.log(' deviceId== ',this.employeeId);
       });
  
       this.storage.get('showOnBoard').then((data)=>{
        console.log('showOnBoard value is111==',data );
        this.employeeType=data;
      });
       
    this.storage.get('deviceId').then(data=>{
      this.deviceId=data;
      console.log(' deviceId== ',this.deviceId);
      this.getUserInfo();
     });
  }



  getUserInfo(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();
    let apiKey={
      "client_id":this.apiServices.clientId,
      "employee_id":this.employeeId,
      "device":this.apiServices.device,
      "device_id":this.deviceId,
      "app_version":this.apiServices.appVersion,
      "user_type":this.employeeType
  
    };
  
    console.log('reset pass api key==', apiKey);
    this.apiServices.userProfile(apiKey, this.login_token).subscribe((result) => { 
    console.log('reset pass response== ',result); 
    this.allData=result;
    if(this.allData.success==1){
      this.profileDetails=this.allData.data;
      this.userName=this.profileDetails.name;
      this.userImage=this.profileDetails.user_image;
      this.update_icon=this.profileDetails.update_icon;
      // this.userImageBg= this.userImage;
      // this.userlocation=this.profileDetails.location;
      // this.designation=this.profileDetails.designation;
      // this.department=this.profileDetails.department;
      this.number=this.profileDetails.mobile_number;
      // this.country_name=this.profileDetails.country_name;
      setTimeout(() => {
        loading.dismiss();
      }, 2000);
    }else{
      this.apiMessage(this.allData.message);
      setTimeout(() => {
        loading.dismiss();
      }, 2000);
    }
  })
  
  }


  apiMessage(message) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JoineeupdatenumberPage');

  this.navBar.backButtonClick = (e:UIEvent)=>{
    // todo something
    this.navCtrl.popToRoot();
   }
  }
  presentImage(myImage) {
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();
    // setTimeout(() => imageViewer.dismiss(), 30000);
    imageViewer.onDidDismiss(() => console.log('Viewer dismissed'));
  }

  updateNo(){
    this.navCtrl.push('TakeMobileNumberPage',{'profilekey':'1'});
   }
}

import { Component } from '@angular/core';
import { ToastController, IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import {  MenuController } from 'ionic-angular/index';
// import { e } from '@angular/core/src/render3';
/**
 * Generated class for the ProfilePicUploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-pic-upload',
  templateUrl: 'profile-pic-upload.html',
})
export class ProfilePicUploadPage {
  allData: any;
  enablenextBtn: boolean = false;
  showCustomActionSheet: boolean;
  currentName: any;
  fileName: any;
  employeeId: any;
  isCeoPageVisit: any;
  deviceId: any;
  userImage: any;

  previewText:string="Preview";
  previewBtnEnale:boolean=true;
  employeeType: any;
  login_token: any;

  constructor(private camera: Camera, public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
    public toastCtrl: ToastController, private storage: Storage, private apiServices: ApiServiceProvider, private transfer: FileTransfer, private file: File,
    private imagePicker: ImagePicker,private menu: MenuController
  ) {
    this.storage.get('showOnBoard').then((data)=>{
      console.log('showOnBoard value is111==',data );
      this.employeeType=data;
    });
    this.storage.get('isCeoScreenVisit').then(data => {
      this.isCeoPageVisit = data;
    });
    this.storage.get('userImage').then(data => {
      this.userImage = data;
    });

    this.storage.get('employeeId').then(data => {
      this.employeeId = data
    });
    this.storage.get('deviceId').then((data) => {
      this.deviceId = data
    });
  }

  addimage() {
    let profileModal = this.modalCtrl.create('ProfileDosDontsPage');
    profileModal.onDidDismiss(data => {
      console.log(data);
      this.showCustomActionSheet = true;
    })
    profileModal.present();
    this.showCustomActionSheet = false;
  }
  hideActionsheet() {
    this.showCustomActionSheet = false;
  }

  ceoMessage() {
    if (this.isCeoPageVisit == 1) {
      this.navCtrl.push('CeoMessageePage')
    } else {
      this.navCtrl.setRoot('HomePage')
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImageUploadPage');
  }

  usingCamera(myoption) {
    if (myoption == 'camera') {
      this.takePicture(this.camera.PictureSourceType.CAMERA);
    } else {
      this.pickFromGalleary(this.camera.PictureSourceType.PHOTOLIBRARY);
    }
  }

  public takePicture(sourceType) {
    // Create options for the Camera Dialog

    const options: CameraOptions = {
      quality: 40,
      allowEdit: true,
      saveToPhotoAlbum: true,
      cameraDirection: 1,
      correctOrientation: true,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: sourceType,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    // Get the data of an image
    this.camera.getPicture(options).then((imagePath) => {
      // Special handling for Android library
      console.log('imagePath==', imagePath);
      this.currentName = imagePath;
      let name = this.currentName.split("/");    // code for fetching file name
      this.fileName = name[name.length - 1];
      this.uploadImageonserver(this.currentName, this.fileName);

    }, (err) => {
      console.log('imagePath error==', err);
    });
  }
  pickFromGalleary(sourceType) {
    const options: ImagePickerOptions = {
      quality: 50,
      maximumImagesCount: 1
    }
    this.imagePicker.getPictures(options).then((results) => {
      console.log('imagePath==', results);
      this.currentName = results[0];
      let name = this.currentName.split("/");    // code for fetching file name
      this.fileName = name[name.length - 1];
      this.uploadImageonserver(this.currentName, this.fileName);

    }, (err) => {
      console.log('imagePath error==', err);
    });

  }
  //Upload images on server
  uploadImageonserver(imagepass, nameoffile) {
    this.storage.get('login_token').then((data) => { this.login_token = data; 

    this.userImage = '../../assets/watermark/load.gif';
    this.showCustomActionSheet = false;
    this.storage.get('employeeId').then((data) => {
      this.employeeId = data
    });
    this.storage.get('showOnBoard').then((data)=>{
      console.log('showOnBoard value is111==',data );
      this.employeeType=data;
    });
    var url = this.apiServices.profilePictureUpload;
    var targetPath = imagepass;   // aply only for imagepicker checking
    this.storage.get('employeeId').then((data) => {
    this.employeeId = data

      var options = {
        fileKey: "file",
        fileName: nameoffile,
        chunkedMode: false,
        mimeType: "multipart/form-data",
        headers: {'Authorization':this.login_token},
        params: {
          'app_version': this.apiServices.appVersion,
          'flag': 'profile',
          'client_id': this.apiServices.clientId,
          'device': this.apiServices.device,
          'device_id': this.deviceId,
          'file': targetPath,
          'employee_id': this.employeeId,
          'user_type':this.employeeType
          
        }
      };

      console.log("optionsasd", JSON.stringify(options));
      const fileTransfer: FileTransferObject = this.transfer.create();
      fileTransfer.upload(targetPath, url, options).then(res => {
        let data = JSON.parse(res.response);
        console.log("response== ", res);
        console.log("response22== ", data);
        if (data.success == 1) {
          this.showCustomActionSheet = false;
          this.enablenextBtn = true;
          this.userImage = data.link;
          this.storage.set('userImage', data.link);
          this.apiMessage(data.message);
        } else {
          this.apiMessage(data.message);
        }

      }, err => {
        // alert('err=='+ err);
        this.apiMessage(err);
      });
    })
  });
  }

  apiMessage(message) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  gotoOnboardPreviewPage(nativeplace, qualification, college, internorganigation, interntopic,
    cuisine, destination, pastime) {
      this.previewText="Please wait...";
      this.previewBtnEnale=false;
      if(internorganigation==''||internorganigation==undefined){
        internorganigation="";
      }
      if(interntopic==''||interntopic==undefined){
        interntopic="";
      }
    if (this.userImage == undefined || this.userImage == '' || this.userImage == null) {
      this.previewText="Preview";
      this.previewBtnEnale=true;
      const toast = this.toastCtrl.create({
        message: 'Please upload your profile picture for preview.',
        duration: 3000
      });
      toast.present();
      return false;
    }

    if (nativeplace == undefined || nativeplace == '' || nativeplace == null) {
      this.previewText="Preview";
      this.previewBtnEnale=true;
      const toast = this.toastCtrl.create({
        message: 'Please enter your native place.',
        duration: 3000
      });
      toast.present();
      return false;
    }

    // if (qualification == undefined || qualification == '' || qualification == null) {
    //   const toast = this.toastCtrl.create({
    //     message: 'Please enter your highest qualification.',
    //     duration: 3000
    //   });
    //   toast.present();
    //   return false;
    // }
    // if (college == undefined || college == '' || college == null) {
    //   const toast = this.toastCtrl.create({
    //     message: 'Please enter your college.',
    //     duration: 3000
    //   });
    //   toast.present();
    //   return false;
    // }

    if (cuisine == undefined || cuisine == '' || cuisine == null) {
      this.previewText="Preview";
      this.previewBtnEnale=true;
      const toast = this.toastCtrl.create({
        message: 'Please enter your favourite cuisine.',
        duration: 3000
      });
      toast.present();
      return false;
    }

    if (destination == undefined || destination == '' || destination == null) {
      this.previewText="Preview";
      this.previewBtnEnale=true;
      const toast = this.toastCtrl.create({
        message: 'Please enter your favourite destination.',
        duration: 3000
      });
      toast.present();
      return false;
    }

    if (pastime == undefined || pastime == '' || pastime == null) {
      this.previewText="Preview";
      this.previewBtnEnale=true;
      const toast = this.toastCtrl.create({
        message: 'Please enter your pastime.',
        duration: 3000
      });
      toast.present();
      return false;
    }
    this.storage.get('employeeId').then(data => {
      this.employeeId = data
    });

    this.storage.get('deviceId').then((data) => {
      this.deviceId = data
      let apiKey = {

        "clientId": this.apiServices.clientId,
        "employeeId": this.employeeId,
        "device": this.apiServices.device,
        "deviceId": this.deviceId,
        "appVersion": this.apiServices.appVersion,
        "nativePlace": nativeplace,
        "interOrg": internorganigation,
        "interTopic": interntopic,
        "favCuisine": cuisine,
        "favDestination": destination,
        "favPassTime": pastime,
        "qualification":qualification
      };

        console.log('login api key==', apiKey);
        this.apiServices.preview_aboard(apiKey).then((result) => {
        console.log('optionalUpdate response== ', result);
        this.previewText="Preview";
        this.previewBtnEnale=true;
        this.allData = result;
        console.log('this.allData', this.allData);
        if(this.allData.success==1){
        this.navCtrl.push('OnboardPreviewPage',{'data':this.allData});
        }
        else{
          this.apiMessage(this.allData.message);
        }

      }, (err) => {
        console.log('err== ', err);
        this.apiMessage(err);
        this.previewText="Preview";
        this.previewBtnEnale=true;

      });

    });


  }
  ionViewWillEnter(){
    this.menu.swipeEnable(false);
}

}

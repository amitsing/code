import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController, LoadingController} from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { Camera, CameraOptions } from '@ionic-native/camera';



@IonicPage()
@Component({
  selector: 'page-samplepassportphoto',
  templateUrl: 'samplepassportphoto.html',
})
export class SamplepassportphotoPage {
  successmsg: any;
  login_token: any;
  buttonshow: number=0;
  showdone:number=0;
  usertype: any;
  formid: any;
  flag: any;
  title: string;
  bgImage: any;
  deviceId: any;
  employeeId: any;
  hideshow: any = 0;
  showCustomActionSheet: boolean;
  currentName: any; fileName: any; userImage: any;
  constructor(public loadingCtrl: LoadingController, private imagePicker: ImagePicker, 
    private transfer: FileTransfer, private file: File, private camera: Camera,
     private modalCtrl: ModalController, public toastCtrl: ToastController,
      private storage: Storage, private apiServices: ApiServiceProvider,
       public navCtrl: NavController,public navParams: NavParams) {
    this.bgImage = "assets/imgs/youlookfabolous.png"
    this.storage.get('deviceId').then(data => {
      this.deviceId = data;
      console.log(' deviceId== ', this.deviceId);
    });
    this.title = 'Passport picture';
    this.flag=this.navParams.get('flag');
    console.log('flag**=', this.flag);
    this.formid=this.navParams.get('formid');
    console.log('flag**=', this.formid);
    this.storage.get('showOnBoard').then((data)=>{
      this.usertype=data;
      console.log('showOnBoard value is111==',data );
    });
    this.storage.get('login_token').then((data)=>{
      console.log('this.login_token1',data );
      this.login_token=data;});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SamplepassportphotoPage');
  }

  addimage() {
    // let profileModal = this.modalCtrl.create('ProfileDosDontsPage');
    // profileModal.onDidDismiss(data => {
    //   console.log('****===',data);
    //   if(data=='dismiss'){
    //     this.showCustomActionSheet=true;
    //   }else{
    //     this.showCustomActionSheet=false;
    //   }
    // })
    // profileModal.present();
    // this.showCustomActionSheet=false;

    // this.showCustomActionSheet=true;
    this.showCustomActionSheet = true;
  }
  hideActionsheet() {
    this.showCustomActionSheet = false;
  }

  usingCamera(myoption) {
    // this.hideshow = 1;
    this.buttonshow=0;
    this.title = '';
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
    this.storage.get('deviceId').then(data => {
      this.deviceId = data;
      console.log(' deviceId== ', this.deviceId);
    });
    this.storage.get('login_token').then((data)=>{
      console.log('this.login_token2',data );
      this.login_token=data;

    this.showCustomActionSheet = false;
    this.userImage = '../../assets/watermark/load.gif';
    this.storage.get('employeeId').then((data) => {
      this.employeeId = data
    });
    var url = this.apiServices.passportpicupload;

    // let myheaders = new Headers();
    // myheaders.append('Content-Type', 'application/json');
    // myheaders.append('Authorization', this.login_token);

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
          // 'appVersion': this.apiServices.appVersion,
          'flag': 'passport_pic',
          'client_id': this.apiServices.clientId,
          'device': this.apiServices.device,
          'device_id': this.deviceId,
          'app_version': this.apiServices.appVersion,
          'employee_id': this.employeeId,
          'user_type':this.usertype,
          'file':targetPath,
          'form_id':this.formid
        }
      };

      console.log("optionsasd", JSON.stringify(options));
      const fileTransfer: FileTransferObject = this.transfer.create();
      fileTransfer.upload(targetPath, url, options).then(res => {
        let data = JSON.parse(res.response);
        console.log("response== ", res);
        console.log("response22== ", data);
        if (data.success == 1) {
          this.hideshow = 1;
          this.showCustomActionSheet = false;
          this.userImage = data.link;
          this.buttonshow=1;
          // this.userImageBg=this.userImage;
          this.storage.set('userImage', data.link);
          // this.apiMessage(data.message);
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
      duration: 2000
    });
    toast.present();
  }

  gotolist(){
    this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-3));
  }


  submit() {
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
      //  this.token='Q3owSXo3T05BVVJscHREVCsyeUtqZz09OjoWf4jZSksqJnff2wxdlZ7e'
      let apiKey = {

        "client_id": this.apiServices.clientId,
        "employee_id": this.employeeId,
        "device": this.apiServices.device,
        "device_id": this.deviceId,
        "app_version": this.apiServices.appVersion,
         "link":this.userImage,
         "user_type":this.usertype,
         'form_id':this.formid

      };
      this.apiServices.passportimgsubmit(apiKey, this.login_token)
        .subscribe((res) => {
          // this.apiServices.urllist(apiKey,this.token).then((result) => { 
          console.log('', res);
     
          if (res.success == 1) {
            this.buttonshow=0;
           this.showdone=1;
            // console.log('succ', this.allData);
            this.apiMessage(res.message);
            this.successmsg=res.message;
            this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-3));
          } else {
            this.apiMessage(res.message);
          }

        }, (err) => {
          console.log('err== ', err);
          this.apiMessage(err);

        });

    });
  }

  


}

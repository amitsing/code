import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController, ModalController, LoadingController,MenuController } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { Camera, CameraOptions } from '@ionic-native/camera';



@IonicPage()
@Component({
  selector: 'page-firstimgupload',
  templateUrl: 'firstimgupload.html',
})
export class FirstimguploadPage {
  employee_type: any;buttonshow: number=0;
  log:boolean=false;showResetPass:boolean=false;
  btnText:string="Reset Password";
  oldPassHaveVal: boolean=false;
  newPassHaveVal: boolean=false;
  deviceId:any;employeeId:any;
  confirmpass: any="";
  allData:any;
  newpassword: any='';
  confpassword: any='';
  errorMessage: string; 
  profileDetails:any;
  oldpassword: string='';userImage:any;userName:any;userImageBg:any;
  userlocation: any;
  designation: any;
  showCustomActionSheet: boolean;
  currentName:any;fileName:any;


  confpasswordIsShowing:boolean;
  newpasswordIsShowing:boolean;
  oldpasswordIsShowing:boolean;
  employeeType: any;
  login_token: any;
  constructor(public loadingCtrl: LoadingController, private imagePicker: ImagePicker,private menu: MenuController,
    private transfer: FileTransfer, private file: File,private camera: Camera,private modalCtrl:ModalController ,public toastCtrl: ToastController,private storage:Storage,private apiServices:ApiServiceProvider,public navCtrl: NavController) {
  }

  ionViewWillEnter(){
    this.menu.swipeEnable(false);
}
  addimage(){
    let profileModal = this.modalCtrl.create('ProfileDosDontsPage');
    profileModal.onDidDismiss(data => {
      console.log('****===',data);
      if(data=='dismiss'){
        this.showCustomActionSheet=true;
      }else{
        this.showCustomActionSheet=false;
      }
    })
    profileModal.present();
    this.showCustomActionSheet=false;
  }

  hideActionsheet(){
    this.showCustomActionSheet=false;
  }
  usingCamera(myoption){
    this.buttonshow=0;
    if(myoption=='camera'){
      this.takePicture(this.camera.PictureSourceType.CAMERA);
    }else{
      this.pickFromGalleary(this.camera.PictureSourceType.PHOTOLIBRARY);
    }
  }

  public takePicture(sourceType) {
    // Create options for the Camera Dialog
  
    const options: CameraOptions = {
      quality: 40,
      allowEdit:true,
      saveToPhotoAlbum:true,
      cameraDirection:1,
      correctOrientation:true,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType:sourceType,
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
  
  pickFromGalleary(sourceType){
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
  
      this.storage.get('employee_type').then(data => {
        this.employee_type = data;
        console.log(' deviceId== ', this.deviceId);
      });

      this.storage.get('deviceId').then(data => {
        this.deviceId = data;
        console.log(' deviceId== ', this.deviceId);
      });
  
    this.showCustomActionSheet=false;
    this.userImage='../../assets/watermark/load.gif';
    this.storage.get('employeeId').then((data) => {
      this.employeeId = data
    });
    this.storage.get('showOnBoard').then((data)=>{
      console.log('showOnBoard value is111==',data );
      this.employeeType=data;
    });
    // var url = this.apiServices.profilePictureUpload;

    var url = this.apiServices.passportpicupload;
    let myheaders = new Headers();
    myheaders.append('Content-Type', 'application/json');
    myheaders.append('Authorization', this.login_token);
  
    var targetPath = imagepass;   // aply only for imagepicker checking
    this.storage.get('employeeId').then((data) => { this.employeeId = data 
      
      let options = {
        fileKey: "file",
        fileName: nameoffile,
        chunkedMode: false,
        mimeType: "multipart/form-data",
        headers: {'Authorization':this.login_token},
        params: {
          // 'app_version':this.apiServices.appVersion,
          // 'flag':'profile',
          // 'client_id':this.apiServices.clientId,
          // 'device':this.apiServices.device,
          // 'device_id':this.deviceId, 
          // 'file': targetPath,
          // 'employee_id': this.employeeId ,
          // 'user_type':this.employeeType



          'flag': 'profile',
          'client_id': this.apiServices.clientId,
          'device': this.apiServices.device,
          'device_id': this.deviceId,
          'app_version': this.apiServices.appVersion,
          'employee_id': this.employeeId,
          'user_type':this.employee_type,
          'file': targetPath,

        }
      }
  
      console.log("passing key== ",JSON.stringify(options));
      const fileTransfer: FileTransferObject = this.transfer.create();
      fileTransfer.upload(targetPath, url, options).then(res => {
        let data = JSON.parse(res.response);
        console.log("response== ",res);
        console.log("response22== ",data);
        if (data.success == 1) {
          this.buttonshow=1;
          this.showCustomActionSheet=false;
          this.userImage=data.link;
          this.userImageBg=this.userImage;

          this.storage.set('profile_pic_upload','1');

          this.storage.set('user_image',data.link);
          this.apiMessage(data.message);
        }else{
          this.apiMessage(data.message);
          console.log("message key== ",data.message);
        }
        
      },err => {
        console.log(" err== ",err);
        if(err.http_status==200){
  
      this.userImage=this.profileDetails.user_image;
      this.userImageBg= this.userImage;
      
        }
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstimguploadPage');
  }

  submitFunc(){
    this.navCtrl.setRoot('CatgoriesPage');
  }
}

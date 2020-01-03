import { Component } from '@angular/core';
import { IonicPage, NavController,Events, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular/components/action-sheet/action-sheet-controller';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Storage } from '@ionic/storage';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
// import { Transfer, TransferObject } from '@ionic-native/transfer';
import { ImagePicker, ImagePickerOptions} from '@ionic-native/image-picker';
import { File } from '@ionic-native/file';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
// import { Capacitor } from '@capacitor/core';

@IonicPage()
@Component({
  selector: 'page-backgrndandfontchange',
  templateUrl: 'backgrndandfontchange.html',
})
export class BackgrndandfontchangePage {
  login_token: any;
  employee_type: any;
  deviceId: any;

  bgColorClass:any;textfontClass:any;
  textChangeIndex:number=0;
  bgChnageIndex:number=0;
  value:any;
  fileName:any;
  images:any = [];
  employeeId:any;
  albumUploadImageStatus = false;
  statusvalue:any;
  client_id:any;
  justShowImage:any;
  currentName:any;
  changeImage:number=0;
  rotateImageIndex:number=0;
  changeImageClass:any;
  imageId:any;
  changeImageClass1:any;
  items:any;
  title:any;
  show:boolean = false;
  showImagesonFront:any = [];
  loading:any;
  constructor(public navCtrl: NavController, 
              public loadingCtrl:LoadingController,
              private events: Events,
              private imagePicker: ImagePicker,
              public transfer:FileTransfer,
              public storage:Storage,
              public toastCtrl:ToastController,
              private apiServices:ApiServiceProvider,
              public navParams: NavParams,
              private file: File,  
              public camera:Camera,
              public actionSheetCtrl:ActionSheetController) {
              this.bgColorClass="grayBg";
              this.value = this.navParams.data.status;
              if(this.value == 'text'){
                this.title = 'Add Status';
              }else{
                this.title = 'Add Image';
              }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BackgrndandfontchangePage');
  }

  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
  //Upload Photo
  cameraImage(){
    this.picker(this.camera.PictureSourceType.CAMERA);
  }   

  chooseImage() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Change Profile Picture',
      buttons: [
        {
          text: 'Camera',
          role: 'destructive',
          handler: () => {
            this.picker(this.camera.PictureSourceType.CAMERA);
          }
        }, {
          text: 'Gallery',
          handler: () => {
            this.multiple();
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
  
  //gettin image From Camera
  picker(sourceType) {     
    // var options = {
    //   quality: 50,
    //   sourceType: sourceType,
    //   saveToPhotoAlbum: false,
    //   correctOrientation: true
    // };


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
      this.albumUploadImageStatus = true;
      this.currentName = imagePath;
      // this.currentName = this.webview.convertFileSrc(imagePath);
      let param1 = {
        'link':this.currentName ,
        'status':false,
        'index':0,
        'showRetry':false
      }
      this.show = true;
      this.showImagesonFront.push(param1)
      let name = this.currentName.split("/");    // code for fetching file name
      this.fileName = name[name.length - 1];
      this.uploadImageonserver(this.currentName, this.fileName,0)
    }, (err) => {
      // this.presentToast('Error while selecting image.');
    });
  }

  //Upload images on server
  uploadImageonserver(imagepass, nameoffile,index) {
    this.storage.get('employeeId').then((data) => {
      this.employeeId = data
    });
    var url = this.apiServices.newBaseUrl + 'Image_Upload/post_image_upload.php';
    var targetPath = imagepass;   // aply only for imagepicker checking
    this.storage.get('employeeId').then((data) => { this.employeeId = data });
    this.storage.get('client_id').then((data) => {
      this.client_id = data;
      var options = { 
        fileKey: "file",
        fileName: nameoffile,
        chunkedMode: false,
        mimeType: "multipart/form-data",
        params: { 'file': targetPath, "flag": 36, "uuid": this.employeeId,'index':index }
      };


     console.log("param",options);

      const fileTransfer: FileTransferObject = this.transfer.create();
      fileTransfer.upload(targetPath, url, options).then(res => {
        let data = JSON.parse(res.response)
        if (data.success == 1) {
          this.showImagesonFront[0].status = true;
          this.imageId = data.id
        }if(data.success == 0){
          this.showImagesonFront[0].showRetry = true;
          this.presentToast(data.message)
        }
      }, err => {
      });
    })
  }


  retry(index){
    this.showImagesonFront[index].status = false;
    this.showImagesonFront[index].showRetry = false;
    this.currentName = this.showImagesonFront[index].link
    let name = this.currentName.split("/");    // code for fetching file name
    this.fileName = name[name.length - 1];
    this.uploadImageonserver(this.currentName, this.fileName,index)
  }

  //Upload Image From Gallery
  multiple(){
      const options: ImagePickerOptions = {
        quality: 50,
        maximumImagesCount: 1
      }
      this.imagePicker.getPictures(options).then((results) => {
        for (var i = 0; i < results.length; i++) {
          if(results[i].length > 1){ 
          this.albumUploadImageStatus = true;
          let param = {
            'link':results[i],
            'status':false,
            'index':0,
            'showRetry':false
          }
          this.show = true;
          this.showImagesonFront.push(param)
          this.currentName = results[i];
          let name = this.currentName.split("/");    // code for fetching file name
          this.fileName = name[name.length - 1];
          this.uploadImageonserver(this.currentName, this.fileName,0)
        }else{

        }
        }               
    });
  }

  changeTextFamily(){
    this.textChangeIndex++;
    console.log('changeTextFamily==',  this.textChangeIndex);
    if(this.textChangeIndex%5==0){
      this.changeImageClass1="fontFamily1";
    }else if(this.textChangeIndex%5==1){
      this.changeImageClass1="fontFamily2";
    }else if(this.textChangeIndex%5==2){
      this.changeImageClass1="fontFamily3";
    }else if(this.textChangeIndex%5==3){
      this.changeImageClass1="fontFamily4";
    }else if(this.textChangeIndex%5==4){
      this.changeImageClass1="fontFamily5";
    }
  }

  changeBgColor(){
    this.bgChnageIndex++;
    if(this.bgChnageIndex%5==0){
      this.changeImageClass="yellowBg";
    }else if(this.bgChnageIndex%5==1){
      this.changeImageClass="pinkBg";
    }else if(this.bgChnageIndex%5==2){
      this.changeImageClass="blueBg";
    }else if(this.bgChnageIndex%5==3){
      this.changeImageClass="redBg";
    }else if(this.bgChnageIndex%5==4){
      this.changeImageClass="grayBg";
    }
  }

  imageFilter(){
    this.changeImage++;
    console.log('image filter');
    if(this.changeImage%4==0){
      this.changeImageClass="blackAndWhite";
    }else if(this.changeImage%4==1){
      this.changeImageClass="blur";
    }else if(this.changeImage%4==2){
      this.changeImageClass="hue-rotate";
    }else if(this.changeImage%4==3){
      this.changeImageClass="invert";
    }
  }
 
  rotateImage(){
    this.rotateImageIndex++;
    console.log("rotate")
    if(this.rotateImageIndex%4==0){
      this.changeImageClass1="rotate1";
    }else if(this.rotateImageIndex%4==1){
      this.changeImageClass1="rotate2";
    }else if(this.rotateImageIndex%4==2){
      this.changeImageClass1="rotate3";
    }else if(this.rotateImageIndex%4==3){
      this.changeImageClass1="rotate4";
    }
  }

  commonLoader(){
    this.loading = this.loadingCtrl.create({
      enableBackdropDismiss: true,
      spinner: 'ios-small',
      content: 'Loading...'
    });
    this.loading.present();
  }

  sendData(statusType){
    if(statusType == 1){
      this.imageId = "";
      if(this.statusvalue == undefined){
        this.presentToast('Please Add Text')
        return false;
      }else if(this.changeImageClass == undefined){
        this.changeImageClass = 'yellowBg'
      }
    }
    this.commonLoader();
    this.storage.get('deviceId').then(data=>{
      this.deviceId=data;
      console.log('login deviceId== ',this.deviceId)
     });
     this.storage.get('employeeId').then(data=>{
      this.employeeId=data;
     })
      this.storage.get('showOnBoard').then((data)=>{
      console.log('showOnBoard value is111==',data );
      this.employee_type=data;
      });
    this.storage.get('login_token').then((data) => {this.login_token = data;
      let userdata = {
    
        "client_id":this.apiServices.clientId,
        "employee_id":this.employeeId,
        "device":this.apiServices.device,
        "device_id":this.deviceId,
        "app_version":this.apiServices.appVersion,
        "story_type":statusType,
        "story_content":this.statusvalue,
        "story_class":[{
          'rotationclass':this.changeImageClass1,
          'colorclass':this.changeImageClass,
        }],
        "image_id":this.imageId

      }
// alert(JSON.stringify(userdata));

      this.apiServices.UploadMystatus(userdata,this.login_token).subscribe((res) => {
        this.loading.dismiss();
        if(res.success==1){
          this.events.publish('updated-status-event',res.success); 
          this.navCtrl.pop();
          this.presentToast(res.message)
        }else{
          this.presentToast(res.message)
        }
      },(err) => {

      })
    })
  }
}

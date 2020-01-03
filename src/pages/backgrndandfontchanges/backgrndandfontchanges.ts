import { Component } from '@angular/core';
import { IonicPage, NavController,Events, NavParams, LoadingController,AlertController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular/components/action-sheet/action-sheet-controller';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Storage } from '@ionic/storage';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
// import { Transfer, TransferObject } from '@ionic-native/transfer';
import { ImagePicker, ImagePickerOptions} from '@ionic-native/image-picker';
import { File } from '@ionic-native/file';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';


/**
 * Generated class for the BackgrndandfontchangesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-backgrndandfontchanges',
  templateUrl: 'backgrndandfontchanges.html',
})
export class BackgrndandfontchangesPage {
  currentName: any;
  fileName: any;
  login_token: any;
  employee_type: any;
  deviceId: any;
  userImage: string;
  employeeId: any;
  userImageBg: string;


  bgColorClass:any;textfontClass:any;
  textChangeIndex:number=0;
  bgChnageIndex:number=0;
  value:any;
  images:any = [];
  albumUploadImageStatus = false;
  statusvalue:any;
  client_id:any;
  justShowImage:any;
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
    private events: Events,public alertCtrl: AlertController,
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

  chooseImage() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Change Profile Picture',
      buttons: [
        {
          text: 'Camera',
          role: 'destructive',
          handler: () => {
            this.usingCamera('camera');
          }
        }, {
          text: 'Gallery',
          handler: () => {
            this.usingCamera('gallery');
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


  ionViewDidLoad() {
    console.log('ionViewDidLoad BackgrndandfontchangesPage');
  }


  // addimage(){
  //   let profileModal = this.modalCtrl.create('ProfileDosDontsPage');
  //   profileModal.onDidDismiss(data => {
  //     console.log('****===',data);
  //     if(data=='dismiss'){
  //       this.showCustomActionSheet=true;
  //     }else{
  //       this.showCustomActionSheet=false;
  //     }
  //   })
  //   profileModal.present();
  //   this.showCustomActionSheet=false;
  // }

  // hideActionsheet(){
  //   this.showCustomActionSheet=false;
  // }
  usingCamera(myoption){
    // this.buttonshow=0;
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

      this.albumUploadImageStatus = true;
      // this.currentName = this.webview.convertFileSrc(imagePath);
      let param1 = {
        'link':this.currentName ,
        'status':false,
        'index':0,
        'showRetry':false
      }
      this.show = true;
      // this.showImagesonFront.push(param1)
      // Special handling for Android library
      console.log('imagePath==', imagePath);
      this.currentName = imagePath;
      let name = this.currentName.split("/");    // code for fetching file name
      this.fileName = name[name.length - 1];
      this.uploadImageonserver(this.currentName, this.fileName,0);
  
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
      this.uploadImageonserver(this.currentName, this.fileName, 0);
  
    }, (err) => {
      console.log('imagePath error==', err);
     });
  
    
  }
  //Upload images on server
  uploadImageonserver(imagepass, nameoffile , index) {
    this.storage.get('login_token').then((data) => { this.login_token = data; 
  
      this.storage.get('employee_type').then(data => {
        this.employee_type = data;
        console.log(' deviceId== ', this.deviceId);
      });

      this.storage.get('deviceId').then(data => {
        this.deviceId = data;
        console.log(' deviceId== ', this.deviceId);
      });
  
    // this.showCustomActionSheet=false;
    this.userImage='../../assets/watermark/load.gif';
    this.storage.get('employeeId').then((data) => {
      this.employeeId = data
    });
    this.storage.get('showOnBoard').then((data)=>{
      console.log('showOnBoard value is111==',data );
      this.employee_type=data;
    });
    // var url = this.apiServices.profilePictureUpload;

    var url = this.apiServices.newBaseUrl + 'Image_Upload/post_image_upload.php';
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
          'app_version':this.apiServices.appVersion,
          'flag':36,
          'client_id':this.apiServices.clientId,
          'device':this.apiServices.device,
          'device_id':this.deviceId, 
          'file': targetPath,
          'employee_id': this.employeeId ,
          'user_type':this.employee_type,
          'media_type':2
        }
      }
  
      console.log("passing key== ",JSON.stringify(options));
      const fileTransfer: FileTransferObject = this.transfer.create();
      fileTransfer.upload(targetPath, url, options).then(res => {
        let data = JSON.parse(res.response);
        console.log("response== ",res);
        console.log("response22== ",data);
        if (data.success == 1) {
          let param1 = {
            'link':data.link,
            'status':false,
            'index':0,
            'showRetry':false
          }
          this.show = true;
          this.showImagesonFront.push(param1)
          this.showImagesonFront[0].status = true;
          this.imageId = data.last_id
        }else{
          this.showImagesonFront[0].showRetry = true;
          this.presentToast(data.message)
        }
        
      },err => {
        console.log(" err== ",err);
     
      });
    })
  });
  }

  retry(index){
    this.showImagesonFront[index].status = false;
    this.showImagesonFront[index].showRetry = false;
    this.currentName = this.showImagesonFront[index].link
    let name = this.currentName.split("/");    // code for fetching file name
    this.fileName = name[name.length - 1];
    this.uploadImageonserver( this.fileName,this.currentName,index);
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
    else{
      if(this.statusvalue == undefined){
        this.statusvalue = "";
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
          // this.presentToast(res.message);
          this.events.publish('updated-status-event',res.success); 
          // this.navCtrl.push('NewHomePage');
          // this.navCtrl.pop();
          // this.navCtrl.popToRoot();
          this.onSubmit1(res.message);
        
        }else{
          this.presentToast(res.message)
        }
      },(err) => {

      })
    })
  }


  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }


  onSubmit1(msg) {

    let alert = this.alertCtrl.create({
      message: msg,
      buttons: [
        // {
        //   text: 'Cancel',
        //   role: 'cancel',
        //   handler: () => {
        //     console.log('Cancel clicked');
        //   }
        // },
        {
          text: 'OK',
          handler: () => {
            this.navCtrl.popToRoot();
            // this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-2));
          }
        }
      ]
    });
    alert.present();
  

}

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, ActionSheetController,Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Device } from '@ionic-native/device';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { NgForm } from '@angular/forms';
import { File } from '@ionic-native/file';
import { DomSanitizer } from '@angular/platform-browser';
/**
 * Generated class for the ContactusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contactus',
  templateUrl: 'contactus.html',
})
export class ContactusPage {
  usertype: any;
  return_image: any;
  login_token: any;
  deviceId: any;
  userImage:any;
  fileName: any;
  currentName: any;
  enableSubmitButton: boolean=false;
  subject: any="";
  msg: any="";
  deviceID: any;
  employeeId: any;
  loginToken: any;
  base64Image:any;
  passimage:any='';
  employeeid:any;
  clientid:any;
  message:any;
  loading:any;
  form:any;
  submitBtnText:string='Submit';
  public unregisterBackButtonAction: any;
  closeAppPopupShow:number=0;
  constructor(public actionSheetCtrl: ActionSheetController,
    public navCtrl: NavController, 
    public navParams: NavParams,
    private storage: Storage,public _DomSanitizer: DomSanitizer,
    private apiServices: ApiServiceProvider,
    private toastCtrl:ToastController,
    private loadingCtrl:LoadingController,
    private imagePicker: ImagePicker,
    private transfer: FileTransfer,private platform:Platform,
    private device: Device,
    private camera: Camera,
    private file: File) {

      this.storage.get('showOnBoard').then((data)=>{
        this.usertype=data;
        console.log('showOnBoard value is111==',data );
      });

      this.storage.get('employeeId').then(data=>{
        this.employeeId = data;
        this.storage.get('login_token').then(value=>{
          this.loginToken = value;
          this.storage.get('deviceId').then(device_Id=>{
            this.deviceID= device_Id;
          })
        });
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactusPage');
    this.analyticApi();
  }




  getTitleLegth(title:string){
    this.subject=title.trim();
    if(this.subject.length>=1&&this.msg.length>=1){
      this.enableSubmitButton=true;
    }else{
    this.enableSubmitButton=false;
    }
  }
    
  getCommentLegth(comment:string){
    this.msg=comment.trim();
    if(this.msg.length>=1&&this.subject.length>=1){
    this.enableSubmitButton=true;
    }else{
      this.enableSubmitButton=false;
    }
  }

      //Toast Function:
      presentToast(APImessage){
        let toast = this.toastCtrl.create({
          message: APImessage,
          duration: 2500,
          position: 'top'
        });
    
        toast.onDidDismiss(() => {
          console.log('Dismissed toast');
        });
      
        toast.present();
      }
      //Common Loader:
      commonLoader(){
        this.loading= this.loadingCtrl.create({
            enableBackdropDismiss:true,
            spinner: 'ios-small',
            content: 'Loading data...'
          });
          this.loading.present();
      }
  
    addimage() {
      const actionSheet = this.actionSheetCtrl.create({
          buttons: [
        {
                text: 'Photo from Gallery',
                handler: () => {
                  this.multiple();
                }
              },
              {
                text: 'Photo from Camera',
      
                handler: () => {
              this.picker();
      }
              },
              {
                text: 'Cancel',
                role: 'cancel',
                handler: () => {
      
                }
              }
            ]
          });
          actionSheet.present();
  }
  
  
    //FROM CAMERA
    picker() {
      const options: CameraOptions = {
        quality: 40,
        allowEdit: true,
        saveToPhotoAlbum: true,
        cameraDirection: 1,
        correctOrientation: true,
        destinationType: this.camera.DestinationType.FILE_URI,
        sourceType: this.camera.PictureSourceType.CAMERA,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }
  
      // Get the data of an image
      this.camera.getPicture(options).then((imagePath) => {
      //   let base64data = 'data:image/jpeg;base64,' + imagePath;
      //  this.base64Image = this.domSanatizer(base64data);
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
      
      multiple()
      {
        
        const options: ImagePickerOptions = {
          quality: 50,
          maximumImagesCount: 1,
          outputType : 1    //// return image as a base64 string
        }
        this.imagePicker.getPictures(options).then((results) => {
      //     let base64data = 'data:image/jpeg;base64,' + results;
      //  this.base64Image = this.domSanatizer(base64data);
          console.log('imagePath==', results);
          this.currentName = results[0];
          let name = this.currentName.split("/");   // code for fetching file name
          this.fileName = name[name.length - 1];
          this.uploadImageonserver(this.currentName, this.fileName);
    
        }, (err) => {
          console.log('imagePath error==', err);
        });
    
       
      }
  
  
  
      submitToHelpDesk(form:NgForm, subject, message){
        this.form= form;
        this.subject= subject;
        this.msg= message;
        let s = subject.trim();
        let m = message.trim();

        this.submitBtnText='Please wait...';
        if(s==null || s==undefined  || s ==" " ||
            m == null  || m == undefined || m == " "){
            var apimessage="All fields are mandatory."
            this.presentToast(apimessage);
          }else{
            if(this.currentName==null || this.currentName==undefined){
              this.currentName="";
              this.submit2();
            }else{
              this.submit2();
              
            }
          }
  
      }
  



      submit2(){
        this.storage.get('showOnBoard').then((data)=>{
          this.usertype=data;
          console.log('showOnBoard value is111==',data );
        });
        this.enableSubmitButton=false;
        this.storage.get('deviceId').then(data => {
          this.deviceID = data;
          //  this.token='Q3owSXo3T05BVVJscHREVCsyeUtqZz09OjoWf4jZSksqJnff2wxdlZ7e'
          let apiKey = {
            'user_type':this.usertype,
            'client_id': this.apiServices.clientId,
            'device': this.apiServices.device,
            'device_id': this.deviceID,
            'app_version': this.apiServices.appVersion,
            'employee_id': this.employeeId,
            "subject":this.subject,
            "message":this.msg,
            'file_link':this.return_image,
          };
          this.apiServices.contactHelpdesk(apiKey, this.loginToken).subscribe(res => {
            console.log('tnc res==', res);
              if (res.success == 1) {
                this.submitBtnText='Submit';
                this.enableSubmitButton=true;
                // var apimessage="Message Sent Succesfully."
                this.presentToast(res.message);
                this.navCtrl.popToRoot();
              } else {
              
                this.enableSubmitButton=true;
                this.presentToast(res.message);
                this.submitBtnText='Submit';
              }
            }, (err) => {

              this.enableSubmitButton=true;
              this.presentToast(err);
              console.log('err== ', err);
              this.submitBtnText='Submit';
            });
        });
    }
    domSanatizer(imageUrl){
      return this._DomSanitizer.bypassSecurityTrustUrl(imageUrl);
    }



takePhotoFrom() {
  // this.buttonshow=0;
  let actionSheet = this.actionSheetCtrl.create({
    // title: '',
    buttons: [
      {
        text: 'Camera',
        role: 'destructive',
        handler: () => {
          this.takePicture(this.camera.PictureSourceType.CAMERA);
        }
      }, {
        text: 'Gallery',
        handler: () => {
          this.pickFromGalleary(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      }, {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
        }
      }
    ]
  });
  actionSheet.present();
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
  this.storage.get('showOnBoard').then((data)=>{
    this.usertype=data;
    console.log('showOnBoard value is111==',data );
  });
  this.storage.get('deviceId').then(data => {
    this.deviceId = data;
    console.log(' deviceId== ', this.deviceId);
  });
  this.storage.get('login_token').then((data)=>{
    console.log('this.login_token2',data );
    this.login_token=data;

  // this.showCustomActionSheet = false;
  this.base64Image = '../../assets/watermark/load.gif';
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
        'user_type':this.usertype,
        'client_id': this.apiServices.clientId,
        'device': this.apiServices.device,
        'device_id': this.deviceId,
        'app_version': this.apiServices.appVersion,
        'employee_id': this.employeeId,
        'flag': 'contact_us',
        'file':targetPath,

      }
    };

    console.log("optionsasd", JSON.stringify(options));
    const fileTransfer: FileTransferObject = this.transfer.create();
    fileTransfer.upload(targetPath, url, options).then(res => {
      let data = JSON.parse(res.response);
      console.log("response== ", res);
      console.log("response22== ", data);
      if (data.success == 1) {
        // this.showCustomActionSheet = false;
        // this.userImage = data.link;
        // this.buttonshow=1;
        // this.userImageBg=this.userImage;


          
        this.base64Image = data.preview_image;
        this.return_image = data.return_image;
        // this.storage.set('userImage', data.link);
        // this.apiMessage(data.message);
      } else {
        // this.apiMessage(data.message);
      }

    }, err => {
      console.log("err",err);
      // alert('err=='+ err);
      // this.apiMessage(err);
    });
  })
});
}
removePreview(){
  this.base64Image = null;
}

analyticApi(){
  this.storage.get('employee_type').then((user) => {
    console.log('thoughtOftheDayApi value is111==', user);
    let user_Type = user;
  this.storage.get('deviceId').then(data => {
    let deviceId = data;
    let apiKey = {
      "client_id": this.apiServices.clientId,
      "employee_id": this.employeeId,
      "device": this.apiServices.device,
      "device_id": deviceId,
      "app_version": this.apiServices.appVersion,
      "track_flag": "56", 
      "type" : "detail",
      "user_type" : user_Type,
    };
    this.apiServices.analyticApi(apiKey,this.loginToken).subscribe(res=>{
      console.log(res);
    })
  });
});
}


ionViewWillEnter(){

  this.initializeBackButtonCustomHandler();
  }
 

ionViewWillLeave() {
  this.unregisterBackButtonAction && this.unregisterBackButtonAction();
}


//Hardware Back Button

initializeBackButtonCustomHandler(): void {
  let that = this;
  this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function (event) {

    // that.navCtrl.popToRoot();
    that.navCtrl.pop();
  }, 101); // Priority 101 will override back button handling (we set in app.component.ts) as it is bigger then priority 100 configured in app.component.ts file */
}



}

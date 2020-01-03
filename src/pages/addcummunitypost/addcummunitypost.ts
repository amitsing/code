import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ViewController, AlertController,Events } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
// import { Clipboard } from '@ionic-native/clipboard';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
// import { Transfer, FileUploadOptions, TransferObject } from '@ionic-native/transfer';
// import { ImagecontrollerProvider } from '../../providers/imagecontroller';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { ImageViewerController } from 'ionic-img-viewer';
@IonicPage()
@Component({
  selector: 'page-addcummunitypost',
  templateUrl: 'addcummunitypost.html',
})
export class AddcummunitypostPage {
  _imageViewerCtrl: ImageViewerController;
  user_image: any;
  user: any;
  title: any;
  communityId: any;
  temp_index: any;
  usertype: any;
  deviceId: any;
  login_token: any;
  data: any;
  firstName: any;
  lastName: any;
  client_id:any;
  userImage: any;
  loading:any;
  link: any;
  userImg: any;
  directImg: any;
  showVal = false;
  fileName:any;
  image:any;
  url: SafeResourceUrl;
  showCamera = true;
  albumUploadImageStatus = false;
  private ckeditorContent: string;
  a1Data: any[] = [{ img: '' }];
  images: Array<{ img: any }> = [];
  justShowImage:any = [];
  shoeCameraIcon = false;
  album = "";
  comment: any;
  employeeId: any;
  newLink = "";
  currentName: any;
  flag:any;
  id:any;
  media_type:any="";
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,private imageViewerCtrl: ImageViewerController,
    public loadingCtrl: LoadingController,
    private transfer: FileTransfer, 
    private file: File,
    // private transfer: Transfer,
    public events: Events,
    private imagePicker: ImagePicker,
    private apiServices: ApiServiceProvider,
    private storage: Storage,
    // private clipboard: Clipboard,
    public alertCtrl: AlertController,
    private sanitizer: DomSanitizer,
    private camera: Camera,
    private toastCtrl: ToastController,
    private viewCtrl: ViewController) {
      this._imageViewerCtrl = imageViewerCtrl;
    this.communityId=this.navParams.get('communityId');
    this.title=this.navParams.get('title');
    this.storage.get('user_image').then(data => {
      this.user_image = data;
      console.log(' deviceId== ', this.user_image);
    });

      this.storage.get('deviceId').then(data => {
        this.deviceId = data;
        console.log(' deviceId== ', this.deviceId);
      });
      this.storage.get('first_name').then(data => {
        this.firstName = data;
        console.log(' deviceId== ', this.firstName);
      });
      this.storage.get('last_name').then(data => {
        this.lastName = data;
        console.log(' deviceId== ', this.firstName);
      });
      this.storage.get('employeeId').then((data) => {
        this.employeeId = data
      });
      this.storage.get('login_token').then((data) => {
        this.login_token = data
      });
      this.storage.get('showOnBoard').then((data)=>{
        this.usertype=data;
        console.log('showOnBoard value is111==',data );
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddcummunitypostPage');
  }

  showPrompt() {
    this.showCamera = false;
    let prompt = this.alertCtrl.create({
      subTitle: 'Share a Link:-',
      inputs: [
        {

          name: 'url',
          placeholder: 'Enter Url To Share'
        },
      ],


      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            this.albumUploadImageStatus = false;
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          handler: data => {
            this.showVal = false;
            this.newLink = "https://www.youtube.com/embed/" + data.url.slice(17);
            data.url = data.url.trim();
            if (data.url != "") {
              this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.newLink);
              this.media_type='2';
              this.shoeCameraIcon = true;
              this.albumUploadImageStatus = true;
            } else {
                return;
            }

          }
        }
      ]
    });
    prompt.present();
  }

  closeData() {
    this.albumUploadImageStatus = false;
    this.shoeCameraIcon = false; 
    this.showVal = false;
    var anydata;
    this.url = anydata;
    this.media_type='';
  }
  showCameraDiv() {
    this.showCamera = !this.showCamera;
    this.albumUploadImageStatus = true;
  }
  Confirmation(optionkey){
    let alert = this.alertCtrl.create({
      // title: 'Confirm purchase',
      message: 'Usage of personal camera for photography (by any means) is strictly prohibited in the office premises',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          handler: () => {
            console.log('Buy clicked');
            if(optionkey=='camera'){
              this.takephotoFromCamera();
            }
            else{
              this.takephotoFromGallery(); 
            }
          }
        }
      ]
    });
    alert.present();
  }






  takephotoFromCamera() {
    this.albumUploadImageStatus = true;
    var options = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.CAMERA,
      saveToPhotoAlbum: false,
      correctOrientation: true,
      cameraDirection : 1,
    };
    this.camera.getPicture(options).then((imagePath) => {
      this.currentName = imagePath;
      let param1 = {
        'link':this.currentName,
        'status':false,
        'index':this.justShowImage.length,
        'showRetry':false
      }
      this.justShowImage.push(param1)
      console.log("param1",this.justShowImage);
      let name = this.currentName.split("/");    // code for fetching file name
      this.fileName = name[name.length - 1];

      this.temp_index=this.justShowImage.length-1;
      this.uploadImage(this.currentName, this.fileName,this.justShowImage.length-1)
    },(err) => {
      this.commonToster('Error while selecting image.');
    });
  }


  retry(index){
    this.justShowImage[index].status = false;
    this.justShowImage[index].showRetry = false;
    this.currentName = this.justShowImage[index].imgPath
    let name = this.currentName.split("/");    // code for fetching file name
    this.fileName = name[name.length - 1];
    this.uploadImage(this.currentName, this.fileName,index)
  }
  takephotoFromGallery() {
  //     this.justShowImage = [{
  //     'link':'assets/img/avatar2.png',
  //     'status':false,
  //     'index':0,
  //     'showRetry':false
  //   },{
  //     'link':'assets/img/avatar3.png',
  //     'status':false,
  //     'index':1,
  //     'showRetry':false
  //   },{
  //     'link':'assets/img/avatar1.png',
  //     'status':false,
  //     'index':2,
  //     'showRetry':false
  //   },{
  //     'link':'assets/img/avatar2.png',
  //     'status':false,
  //     'index':3,
  //     'showRetry':false
  //   },
  // ]
  // setTimeout(() => {
  //   this.justShowImage[0].status = true;
  //   this.justShowImage[1].status = true;
  //   this.justShowImage[3].status = true;
  //   this.justShowImage[2].showRetry = true;
  // },1500)
    const options: ImagePickerOptions = {
      quality: 50,
      maximumImagesCount: 4
    }
    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
        if(results[i].length > 1){ 
        let param = {
          'link':results[i],
          'status':false,
          'index':this.justShowImage.length,
          'showRetry':false
      }
        this.justShowImage.push(param)
        console.log('Image URI: ' + results[i]);
        this.currentName = results[i];
        let name = this.currentName.split("/");    // code for fetching file name
        this.fileName = name[name.length - 1];
        this.temp_index=this.justShowImage.length-1;
      let imageUploaded =  this.uploadImage(this.currentName, this.fileName,this.justShowImage.length-1);
      }else{

      }
      }

    },(err) => {
      this.commonToster('Error while selecting image.');
    });
  }

  uploadImage(imagepass, nameoffile,index) {
    
    console.log(' Amit index==  ', index +'new index=='+this.temp_index);

    this.storage.get('deviceId').then(data => {
      this.deviceId = data;
      console.log(' deviceId== ', this.deviceId);
    });
    this.storage.get('employeeId').then((data) => {
      this.employeeId = data
    });
    this.storage.get('login_token').then((data) => {
      this.login_token = data
    });
    this.storage.get('showOnBoard').then((data)=>{
      this.usertype=data;
      console.log('showOnBoard value is111==',data );
    });
    // Destination URL
    var url = this.apiServices.cummunityimgupload; /// 
    
    
    var targetPath = imagepass;   // aply only for imagepicker checking
    this.storage.get('employeeId').then((data) => { this.employeeId = data });
    this.storage.get('client_id').then((data) => {
      this.client_id = data;
      var options = {
        fileKey: "file",
        fileName: nameoffile,
        chunkedMode: false,
        mimeType: "multipart/form-data",
        headers: {'Authorization':this.login_token},
        params: { 
         
            'flag': '31',
            'client_id': this.apiServices.clientId,
            'device': this.apiServices.device,
            'device_id': this.deviceId,
            'app_version': this.apiServices.appVersion,
            'employee_id': this.employeeId,
            'user_type':this.usertype,
            'file':targetPath,
             "index":index,
             "media_type":'1' 
          }
      };
      console.log("options",options);
      const fileTransfer: FileTransferObject = this.transfer.create();
      fileTransfer.upload(targetPath, url, options).then(res => {
      console.log("res",res);
        let data = JSON.parse(res.response)
        if (data.success == 1) {
          console.log("data12",data);
          this.media_type='1';
          for(var j=0;j<this.justShowImage.length;j++){
            if(this.justShowImage[j].index == data.index){
              this.justShowImage[j].link=data.link;
              this.justShowImage[j].status = true;

            }
          }
          let param = {
            'img':data.last_id
          }
          this.images.push(param);

          // for(var x=1;x<=this.justShowImage.length;x++){
          //   if(x==this.justShowImage.length){
          //     this.commonToster(data.message);
          //   }
          // }

          console.log("this.images",this.images);
          // this.commonToster(data.message);
       
        }if(data.success==0){
          console.log("success0",data);
          for(var j=0;j<this.justShowImage.length;j++){
            if(this.justShowImage[j].index == data.index){
           
              this.justShowImage[j].showRetry = true;
            }
          }
        }
      }, err => {
        this.commonToster('Error while uploading file');
      });
    })
  }

  imageAlbumDelete(i) {
    this.justShowImage.splice(i,1)
    this.images.splice(i, 1);
    if (this.images.length == 0) {
      this.albumUploadImageStatus = false;
      this.media_type=='';
    }
  }


  sanatizeBase64Image(image) {
    if(image) {
      console.log('domsenetizer called');
      return this.sanitizer.bypassSecurityTrustResourceUrl(image);
    }
  }

  onSubmit() {

    this.storage.get('deviceId').then(data => {
      this.deviceId = data;
      console.log(' deviceId== ', this.deviceId);
    });
    this.storage.get('employeeId').then((data) => {
      this.employeeId = data
    });
    this.storage.get('login_token').then((data) => {
      this.login_token = data
    });


    this.comment = this.comment.trim();
    if (this.comment == '') {
      let msg = 'Please write some description';
      this.commonToster(msg);
    }
    else {
      let alert = this.alertCtrl.create({
        message: 'Are You Sure the content is appropriate for REACH and relevent for this community??',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'OK',
            handler: () => {
              let loading = this.loadingCtrl.create({
                enableBackdropDismiss: true,
                spinner: 'ios-small',
                content: "Loading... "
              });
              loading.present();
              this.storage.get('client_id').then((data) => {
                this.client_id = data;
if(this.media_type=='1'){
  this.user = {
    "client_id":this.apiServices.clientId,
    "employee_id":this.employeeId,
    "device":this.apiServices.device,
    "device_id": this.deviceId,
    "app_version":this.apiServices.appVersion,
    "value":"1",
    "title":this.title,
    "description":this.comment,
    "media":this.images,
    "media_type": this.media_type,
    "community_id":this.communityId

  }
}
if(this.media_type=='2'){
  this.user = {

    "client_id":this.apiServices.clientId,
    "employee_id":this.employeeId,
    "device":this.apiServices.device,
    "device_id": this.deviceId,
    "app_version":this.apiServices.appVersion,
    "value":"1",
    "title":this.title,
    "description":this.comment,
    "media":this.newLink,
    "media_type": this.media_type,
    "community_id":this.communityId

  }
}
if(this.media_type==''){
  this.user = {

    "client_id":this.apiServices.clientId,
    "employee_id":this.employeeId,
    "device":this.apiServices.device,
    "device_id": this.deviceId,
    "app_version":this.apiServices.appVersion,
    "value":"1",
    "title":this.title,
    "description":this.comment,
    "media":'',
    "media_type": '',
    "community_id":this.communityId

  }
}

              this.apiServices.submitcumunitypost(this.user,this.login_token).subscribe((res) => {
                loading.dismiss();
                if (res.success == 1) {
                  // this.viewCtrl.dismiss();
                  this.commonToster(res.message)
                  this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-2));

                


                //   this.flag = res.flag;
                //   this.id = res.id;
                //   if(this.data.commingFrom=='homePage'){
                //     this.events.publish('communityPost111', res);
                //  console.log('community post event publish');
                //   }



                  // this.pushApiFunction();


                }
                if (res.success == 0) {
                  this.commonToster(res.message)
                }
              },
                (err) => {
                  loading.dismiss();
                })
              })
            }
          }
        ]
      });
      alert.present();
    }

  }






  commonToster(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

publish(){
  this.storage.get('deviceId').then(data => {
    this.deviceId = data;
    console.log(' deviceId== ', this.deviceId);
  });
  this.storage.get('employeeId').then((data) => {
    this.employeeId = data
  });
  this.storage.get('login_token').then((data) => {
    this.login_token = data
  });


  this.comment = this.comment.trim();
  if (this.comment == '') {
    let msg = 'Please write some description';
    this.commonToster(msg);
  }


else{

  let loading = this.loadingCtrl.create({
    enableBackdropDismiss: true,
    spinner: 'ios-small',
    content: "Loading... "
  });
  loading.present();
  this.storage.get('client_id').then((data) => {
    this.client_id = data;
if(this.media_type=='1'){
this.user = {
"client_id":this.apiServices.clientId,
"employee_id":this.employeeId,
"device":this.apiServices.device,
"device_id": this.deviceId,
"app_version":this.apiServices.appVersion,
"value":"1",
"title":this.title,
"description":this.comment,
"media":this.images,
"media_type": this.media_type,
"community_id":this.communityId

}
}
if(this.media_type=='2'){
this.user = {

"client_id":this.apiServices.clientId,
"employee_id":this.employeeId,
"device":this.apiServices.device,
"device_id": this.deviceId,
"app_version":this.apiServices.appVersion,
"value":"1",
"title":this.title,
"description":this.comment,
"media":this.newLink,
"media_type": this.media_type,
"community_id":this.communityId

}
}
if(this.media_type==''){
this.user = {

"client_id":this.apiServices.clientId,
"employee_id":this.employeeId,
"device":this.apiServices.device,
"device_id": this.deviceId,
"app_version":this.apiServices.appVersion,
"value":"1",
"title":this.title,
"description":this.comment,
"media":'',
"media_type": '',
"community_id":this.communityId

}
}

  this.apiServices.submitcumunitypost(this.user,this.login_token).subscribe((res) => {
    loading.dismiss();
    if (res.success == 1) {
      // this.viewCtrl.dismiss();
      // this.commonToster(res.message)
      // this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-2));
      this.onSubmit1(res.message);
    

    }
    if (res.success == 0) {
      this.commonToster(res.message)
    }
  },
    (err) => {
      loading.dismiss();
    })
  })
}


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
            this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-2));
          }
        }
      ]
    });
    alert.present();
  

}

  presentImage(myImage) {
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();
 
    // setTimeout(() => imageViewer.dismiss(), 30000);
    imageViewer.onDidDismiss(() => console.log('Viewer dismissed'));
  }
}

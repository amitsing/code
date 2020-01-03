import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController, ModalController,Navbar, LoadingController,Platform } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Events } from 'ionic-angular/util/events';
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  @ViewChild(Navbar) navBar: Navbar;
  country_name: any;
  number: any;
  department: any;
  public unregisterBackButtonAction: any;
  closeAppPopupShow:number=0;
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

  constructor( public loadingCtrl: LoadingController, private imagePicker: ImagePicker, private event : Events,private platform:Platform,
    private transfer: FileTransfer, private file: File,private camera: Camera,private modalCtrl:ModalController, 
    public toastCtrl: ToastController,private storage:Storage,private apiServices:ApiServiceProvider,public navCtrl: NavController) {
    
  this.confpasswordIsShowing=false;
  this.newpasswordIsShowing=false;
  this.oldpasswordIsShowing=false;
    
  this.storage.get('login_token').then((data) => { this.login_token = data; });
    this.storage.get('employeeId').then(data=>{
      this.employeeId=data;
      console.log(' deviceId== ',this.employeeId);
     });

     this.storage.get('showOnBoard').then((data)=>{
      console.log('showOnBoard value is111==',data );
      this.employeeType=data;
    });
     
  }

ionViewDidLoad(){
  // this.userImage='../../assets/watermark/load.gif';

  this.navBar.backButtonClick = (e:UIEvent)=>{
    // todo something
    this.navCtrl.popToRoot();
   }

  this.storage.get('deviceId').then(data=>{
    this.deviceId=data;
    console.log(' deviceId== ',this.deviceId);
    this.getUserInfo();
   });
}


  showlog(check){
    if(check==false){
      this.log=true;
    }else{
      this.log=false
    }
  }
  showResetPasswordDiv(check){
    if(check==false){
      this.showResetPass=true;
    }else{
      this.showResetPass=false
    }
  }
resetPassword(oldpass, newpass){
  this.btnText="Please wait...";
  this.oldPassHaveVal=false;
  this.newPassHaveVal=false;
  this.storage.get('deviceId').then(data=>{
    this.deviceId=data;
    console.log('login deviceId== ',this.deviceId)
    let apiKey={
      "clientId":this.apiServices.clientId,
      "employeeId":this.employeeId,
      "device":this.apiServices.device,
      "deviceId":this.deviceId,
      "appVersion":this.apiServices.appVersion,
      "oldPass":this.oldpassword,
      "newPass":newpass,
      "confirmPass":this.confirmpass
    };

    console.log('reset pass api key==', apiKey);
    this.apiServices.resetPassword(apiKey).then((result) => { 
    console.log('reset pass response== ',result); 
    this.allData=result;
    if(this.allData.success==1){
      this.oldpassword='';
      this.newpassword='';
      this.confpassword='';
      this.apiMessage(this.allData.message);
      this.btnText="Reset Password";
      this.errorMessage='';
    }else{
      this.btnText="Reset Password";
      this.apiMessage(this.allData.message);
    }
  })




   }) 

}


apiMessage(message) {
  const toast = this.toastCtrl.create({
    message: message,
    duration: 3000
  });
  toast.present();
}

oldpassChange(oldpass){
  if(oldpass.trim().length>0){
    this.oldPassHaveVal=true;
  }else{
    this.oldPassHaveVal=false;
  }

}

newpassChange(newpass){
  if(newpass.trim().length>0){
    this.newPassHaveVal=true;
  }else{
    this.newPassHaveVal=false;
  }

  if(this.confirmpass.trim().length>0){
    if(newpass==this.confpassword){
      this.confirmpass=this.confpassword;
      this.errorMessage="";
    }else{
      this.errorMessage="*New and Confirm passwords are not matching."
    }

  }



}

confpassChange(confpass){
  if(confpass.trim().length>0){
    if(this.newpassword==this.confpassword){
      this.confirmpass=confpass;
      this.errorMessage="";
      if( this.oldPassHaveVal==false){
        this.errorMessage="*Please enter old password";
      }else{
        this.errorMessage="";
      }
    }else{
      this.confirmpass="";
      this.errorMessage="*New and Confirm passwords are not matching."
    }

  }



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
  loading.dismiss();
  this.allData=result;
  if(this.allData.success==1){
    this.profileDetails=this.allData.data;
    this.userName=this.profileDetails.name;
    this.userImage=this.profileDetails.user_image;
    this.userImageBg= this.userImage;
    this.userlocation=this.profileDetails.location;
    this.designation=this.profileDetails.designation;
    this.department=this.profileDetails.department;
    this.number=this.profileDetails.mobile_number;
    this.country_name=this.profileDetails.country_name;
    // setTimeout(() => {
    //   loading.dismiss();
    // }, 2000);
  }else{
    this.apiMessage(this.allData.message);
    // setTimeout(() => {
    //   loading.dismiss();
    // }, 2000);
  }
})

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

  this.showCustomActionSheet=false;
  this.userImage='../../assets/watermark/load.gif';
  this.storage.get('employeeId').then((data) => {
    this.employeeId = data
  });
  this.storage.get('showOnBoard').then((data)=>{
    console.log('showOnBoard value is111==',data );
    this.employeeType=data;
  });
  var url = this.apiServices.profilePictureUpload;
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
        'flag':'profile',
        'client_id':this.apiServices.clientId,
        'device':this.apiServices.device,
        'device_id':this.deviceId, 
        'file': targetPath,
        'employee_id': this.employeeId ,
        'user_type':this.employeeType
      }
    }

    console.log("passing key== ",JSON.stringify(options));
    const fileTransfer: FileTransferObject = this.transfer.create();
    fileTransfer.upload(targetPath, url, options).then(res => {
      let data = JSON.parse(res.response);
      console.log("response== ",res);
      console.log("response22== ",data);
      if (data.success == 1) {
        this.showCustomActionSheet=false;
        this.userImage=data.link;
        this.userImageBg=this.userImage;
        this.storage.set('user_image',data.link);
        this.event.publish('profile_pic_change')
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

viewoldPass(pass){
  if(pass==false){
    this.oldpasswordIsShowing=true;
  }else{
    this.oldpasswordIsShowing=false;
  }
}

viewnewPass(pass){
  if(pass==false){
    this.newpasswordIsShowing=true;
  }else{
    this.newpasswordIsShowing=false;
  }
}

viewconfPass(pass){
  if(pass==false){
    this.confpasswordIsShowing=true;
  }else{
    this.confpasswordIsShowing=false;
  }
}

signOut(){
  let loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });

  loading.present();
  this.storage.get('deviceId').then(data=>{
    this.deviceId=data;
    console.log('login deviceId== ',this.deviceId);
    let apiKey={
      "packageName": this.apiServices.packageName,
      'employee_id': this.employeeId,
      "device": this.apiServices.device,
      "device_id": this.deviceId,
      "app_version":this.apiServices.appVersion,
      "client_id":this.apiServices.clientId
    };
    this.apiServices.userSignOut(apiKey, this.login_token).subscribe((result) => { 
      console.log('optionalUpdate response== ',result); 
      this.allData=result;
      if(this.allData.success==1){
       
        this.storage.remove('isFirstLogin').then((val) => {
          console.log('Your age is', val);
        });
        this.storage.remove('isCeoScreenVisit').then((val) => {
          console.log('Your age is', val);
        });
        this.storage.remove('employeeId').then((val) => {
          console.log('Your age is', val);
        this.apiMessage(this.allData.message);
        this.navCtrl.setRoot('LoginPage');
        loading.dismiss();
        });
        
      }else{
        this.apiMessage(this.allData.message); 
        loading.dismiss(); 
      }

   })  
})

}
updateNo(){
  this.navCtrl.push('TakeMobileNumberPage',{'profilekey':'1'});
 }


 backButtonClick(){
   this.navCtrl.setRoot('NewHomePage');
 }

 ionViewWillLeave() {
  this.unregisterBackButtonAction && this.unregisterBackButtonAction();
}
ionViewWillEnter(){

this.initializeBackButtonCustomHandler();
}

//Hardware Back Button

initializeBackButtonCustomHandler(): void {
  let that = this;
  this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function (event) {
    // that.closeAppPopupShow++;
    // if(that.closeAppPopupShow%2!=0){
    //   that.showeAlert();
    // }else{
    //   that.alert121.dismiss();
    // }
  that.navCtrl.popToRoot();
  }, 101); // Priority 101 will override back button handling (we set in app.component.ts) as it is bigger then priority 100 configured in app.component.ts file */
}


}
   
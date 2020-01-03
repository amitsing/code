import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController,LoadingController, AlertController, Platform ,ActionSheetController} from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { Camera, CameraOptions } from '@ionic-native/camera';


@IonicPage()
@Component({
  selector: 'page-alreadyacountform',
  templateUrl: 'alreadyacountform.html',
})
export class AlreadyacountformPage {
  previousdata: any;
  usertype: any;
  Bname: any;
  msg: string;
  cAcountNumber: any;
  bAcountNumber: any;
  IFScode: any;
  BranchAddress: any;
  MobileNumber: any;
  employeeId: any;
  login_token: any;
  deviceId: any;loading:any;
  acountselection: any;
  previous_bank_detail:any=[];
  currentName: any; fileName: any; userImage: any;
  buttonshow: number=0;
  constructor(public navCtrl: NavController, public navParams: NavParams,private zone:NgZone,public loadingCtrl: LoadingController,
    private alertCtrl: AlertController, private platform: Platform, public toastCtrl: ToastController, public actionSheetCtrl: ActionSheetController,
     private storage: Storage, private apiServices: ApiServiceProvider, private imagePicker: ImagePicker, 
     private transfer: FileTransfer, private file: File, private camera: Camera,) {
    this.acountselection=this.navParams.get('acountselection');
    this.previous_bank_detail=this.navParams.get('previous_bank_detail');
    this.previousdata=this.navParams.get('previousdata');
    console.log('this.previous_bank_detail',this.previous_bank_detail);
    if(this.previous_bank_detail.length>0){
      this.bAcountNumber=this.previous_bank_detail[0].account_number;
      this.cAcountNumber=this.previous_bank_detail[0].account_number;
      this.Bname=this.previous_bank_detail[0].bank_name;
      this.BranchAddress=this.previous_bank_detail[0].branch_address;
      this.IFScode=this.previous_bank_detail[0].ifsc;
      this.MobileNumber=this.previous_bank_detail[0].mobile_number;
    }

    this.userImage = this.previous_bank_detail[0].media;

    this.storage.get('showOnBoard').then((data)=>{
      this.usertype=data;
      console.log('showOnBoard value is111==',data );
    });
    this.storage.get('login_token').then((data)=>{
      console.log('this.login_token1',data );
      this.login_token=data;});

  }

  //Common Loader:
  commonLoader() {
    this.loading = this.loadingCtrl.create({
      enableBackdropDismiss: true,
      spinner: 'ios-small',
      content: 'Loading data...'
    });
    this.loading.present();
  }


  submit(){
if(this.Bname==undefined || this.Bname==''){
this.msg='Please enter Bank Name';
this.apiMessage(this.msg);
return false;
}
console.log("this.bAcountNumber",this.bAcountNumber);
if(this.bAcountNumber==undefined || this.bAcountNumber==''){
  this.msg='Please enter Bank Account Number';
  this.apiMessage(this.msg);
  return false;
  }
  if(this.cAcountNumber==undefined || this.cAcountNumber==''){
    this.msg='Please confirm Bank Account Number';
    this.apiMessage(this.msg);
    return false;
    }
   if(this.IFScode==undefined || this.IFScode==''){
      this.msg='Please enter IFSC Code';
      this.apiMessage(this.msg);
      return false;
    }
    if(this.BranchAddress==undefined || this.BranchAddress==''){
      this.msg='Please confirm IFSC Code';
      this.apiMessage(this.msg);
      return false;
    }
    if(this.MobileNumber==undefined){
      this.msg='Please enter Mobile Number';
      this.apiMessage(this.msg);
      return false;
    } 
  this.submitinstruction();

  }

  submitinstruction() {
    this.commonLoader();
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
        "selected_option":parseInt(this.acountselection)+1,
        "bank_name":this.Bname,
        "account_number":this.bAcountNumber,
        "confirm_account_number":this.cAcountNumber,
        "ifsc":this.IFScode,
        "branch_address":this.BranchAddress,
        "mobile_number":this.MobileNumber,
        "form_id": this.previousdata.form_id,
        // "flag":'edit',
        // "auto_id":this.previous_bank_detail[0].auto_id,
       "cancel_check":this.userImage
      };
      this.apiServices.submitinstruction(apiKey, this.login_token)
        .subscribe((res) => {
          this.loading.dismiss();
          // this.apiServices.urllist(apiKey,this.token).then((result) => { 
          console.log('', res);
         
          if (res.success == 1) {
           
            this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-3));
            // console.log('succ', this.allData);
          } else {
            // this.allData=[];
            this.apiMessage(res.message);
          }

        }, (err) => {
          console.log('err== ', err);
          this.apiMessage(err);
          this.loading.dismiss();
        });

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
    console.log('ionViewDidLoad AlreadyacountformPage');
  }



  takePhotoFrom() {
    this.buttonshow=0;
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Change Profile Picture',
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
      saveToPhotoAlbum: false,
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

    // this.showCustomActionSheet = false;
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
          'flag': 'cancel_check',
          'client_id': this.apiServices.clientId,
          'device': this.apiServices.device,
          'device_id': this.deviceId,
          'app_version': this.apiServices.appVersion,
          'employee_id': this.employeeId,
          'user_type':this.usertype,
          'file':targetPath,
          // 'form_id':this.formid
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

}

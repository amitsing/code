import { Component, NgZone } from '@angular/core';
import { ApiServiceProvider } from "../../providers/api-service/api-service";
import { IonicPage,LoadingController, NavController, NavParams, ActionSheetController,MenuController, ModalController,ToastController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, NgForm } from '@angular/forms';
// import { MakeMeLowerPipe } from '../../pipes/make-me-lower/make-me-lower';
import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { Device } from '@ionic-native/device';
import { File } from '@ionic-native/file';

/**
 * Generated class for the AplicantwelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aplicantwelcome',
  templateUrl: 'aplicantwelcome.html',
})
export class AplicantwelcomePage {
  entry:any;
  emptype: any;
  employee_type: any;
  imagelink: any='';
  fplace: any;
  awards: any;
  place: any;
  number: number;
  quote: any;
  rmodel: any;
  cuisine: any;
  sport: string;
  pasttime: any;
  message: string;
  checkkey: any;
  employeeId: any;
  login_token: any;
  deviceId: any;
  showCustomActionSheet: boolean;

  //Variables:
  exp: boolean; showSubmitButton: boolean = false;
  // ImageTextBaseURL = this.apiService.ImageTextBaseURL;//"http://52.66.130.250/haier/images/a2z/";
  base64Image: any;
  totalexp: any; senior: any;
  pcompany: any;
  clientid: any;
  employeeid: any;
  pdesignation: any;
  Highedu: any;
  hideshow: any = 0;
  food: any;
  holidaydest: any;
  loading: any;
  hobby: any;
  userImage: any;
  passimage: any;
  impData: any;
  showTemp: boolean = false;
  userpic: any;
  checkId: boolean = false;
  first: any;
  last: any;
  name: any;
  id = 0;
  data1: any;
  data2: any;
  exp1: boolean;
  userImages: any;
  check1:boolean=false;
  check2:boolean=false; 
  check3:boolean=false; 
  currentName: any; fileName: any;

  public form = [{val:'Favourite Pass Time', isChecked:false, name:''},
  {val:' Favourite Cuisine', isChecked:false,name:''},
  {val:'Favourite place', isChecked:false,name:''}];
  constructor(public actionSheetCtrl: ActionSheetController,
    public loadingCtrl: LoadingController,private menu: MenuController,
    private modalCtrl: ModalController,
    private apiService: ApiServiceProvider,
    private toastCtrl: ToastController,
    private imagePicker: ImagePicker,
    private device: Device,
    private camera: Camera,
    private file: File,
    public navCtrl: NavController,
    private zone:NgZone,
    // private pipe: MakeMeLowerPipe,
    public navParams: NavParams,
    private storage: Storage,
    private filetransfer: FileTransfer,
    private apiServices: ApiServiceProvider,

    private transfer: FileTransfer,
  ) {
    this.storage.get('login_token').then((data) => {
      console.log('showOnBoard value is111==', data);
      this.login_token = data;
    });
    this.storage.get('showOnBoard').then(data=>{
      this.emptype=data;
      console.log('showOnBoard value is==',data );
    });
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


  addimage() {
    // let profileModal = this.modalCtrl.create('ProfileDosDontsPage');
    // profileModal.onDidDismiss(data => {
    //   console.log(data);
    // this.showActionSheet();
    // })
    // profileModal.present();


    this.showCustomActionSheet = true;
  }
  hideActionsheet() {
    this.showCustomActionSheet = false;
  }


  usingCamera(myoption) {
    // this.hideshow = 1;
    // this.buttonshow=0;
    // this.title = '';
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
    this.storage.get('employee_type').then(data => {
      this.employee_type = data;
      console.log(' deviceId== ', this.deviceId);
    });

    this.storage.get('deviceId').then(data => {
      this.deviceId = data;
      console.log(' deviceId== ', this.deviceId);
    });

    this.storage.get('login_token').then((data) => {
      console.log('this.login_token2', data);
      this.login_token = data;

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
          headers: { 'Authorization': this.login_token },
          params: {
            // 'appVersion': this.apiServices.appVersion,
            'flag': 'profile',
            'client_id': this.apiServices.clientId,
            'device': this.apiServices.device,
            'device_id': this.deviceId,
            'app_version': this.apiServices.appVersion,
            'employee_id': this.employeeId,
            'user_type':this.employee_type,
            'file': targetPath,
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
            this.userImage = data.link;
            this.imagelink=data.link;
            this.showSubmitButton == true;
            this.showCustomActionSheet = false;
          
            // this.buttonshow=1;
            this.showCustomActionSheet = false;
            // this.userImageBg=this.userImage;
            this.storage.set('user_image', data.link);
            // this.apiMessage(data.message);
          } else {
            // this.apiMessage(data.message);
          }

        }, err => {
          // alert('err=='+ err);
          // this.apiMessage(err);
          // this.presentToast(message);
        });
      })
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AplicantwelcomePage');
  }


  previewFunc() {
 
    console.log("test",this.imagelink);
    if (this.imagelink == undefined || this.imagelink == '') {
      let msg = 'Please upload profile picture.';
      this.apiMessage(msg);
    }else{
      this.goToPreview();
    }

    // this.goToPreview();

    // if (this.pasttime == undefined || this.pasttime == '') {
    //   let msg = 'Please Enter your Favourite Past Time.';
    //   this.apiMessage(msg);
    //   return false;
    // }

    // if (this.sport == undefined || this.sport == '') {
    //   let msg = 'Please Enter your Favourite sport.';
    //   this.apiMessage(msg);
    //   return false;
    // }

    
    // if (this.cuisine == undefined || this.cuisine == '') {
    //   let msg = 'Please Enter your Favourite cuisine.';
    //   this.apiMessage(msg);
    //   return false;
    // }
    // if (this.rmodel == undefined || this.rmodel == '') {
    //   let msg = 'Please Enter your Favourite role model.';
    //   this.apiMessage(msg);
    //   return false;
    // }
    // if (this.quote == undefined || this.quote == '') {
    //   let msg = 'Please Enter your Favourite quote.';
    //   this.apiMessage(msg);
    //   return false;
    // }
    // if (this.place == undefined || this.place == '') {
    //   let msg = 'Please Enter your native place.';
    //   this.apiMessage(msg);
    //   return false;
    // }
    // if (this.fplace == undefined || this.fplace == '') {
    //   let msg = 'Please Enter your favourite place.';
    //   this.apiMessage(msg);
    //   return false;
    // }
    // if (this.number == undefined) {
    //   let msg = 'Please Enter your mobile number.';
    //   this.apiMessage(msg);
    //   return false;
    // }
    // if (this.awards == undefined || this.awards == '') {
    //   console.log('this.awards',this.awards)
    //   this.awards='';
    // }

    if (this.pasttime == undefined || this.pasttime == '') {
      console.log('this.pasttime',this.pasttime);
      this.pasttime='';
    }

    if (this.cuisine == undefined || this.cuisine == '') {
      console.log('this.pasttime',this.cuisine);
      this.cuisine='';
    }

    if (this.fplace == undefined || this.fplace == '') {
      console.log('this.pasttime',this.cuisine);
      this.fplace='';
    }  
   
// this.goToPreview()

  }





  //Toast Function:
  presentToast(APImessage) {
    let toast = this.toastCtrl.create({
      message: APImessage,
      duration: 1500,
      position: 'top'
    });

  }
  goToPreview() {
    this.commonLoader();
    this.storage.get('login_token').then((data) => {
      console.log('showOnBoard value is111==', data);
      this.login_token = data;
    })
    this.storage.get('showOnBoard').then(data=>{
      this.emptype=data;
      console.log('showOnBoard value is==',data );
    });

    this.storage.get('deviceId').then(data => {
      this.deviceId = data;
      console.log(' deviceId== ', this.deviceId);
    });
    this.storage.get('employeeId').then((data) => {this.employeeId=data; 

      if(this.pasttime=="NA"){
        this.pasttime='';
      }
      if(this.cuisine=="NA"){
        this.cuisine='';
      }
      if(this.fplace=="NA"){
        this.fplace='';
      }
    let user= {
  
      "client_id": this.apiServices.clientId,
      // "joinee_id":this.employeeId,
      "employee_id":this.employeeId,
      "device":this.apiServices.device,
      "device_id":this.deviceId,
      "app_version":this.apiServices.appVersion,
      "fav_past_time":this.pasttime,
      "fav_sports":'',
      "fav_cuisine":this.cuisine,
      "role_model":'',
      "fav_quote":'',
      "fav_place":this.fplace,
      "native_place":'',
      "mobile_number":'',
      "special_achievement":'',
      "user_type":this.emptype

    }
    console.log('Preview Request:', user);
    this.apiServices.preonboard(user,this.login_token)
        .subscribe((res)=>{
          this.loading.dismiss();
          if(res.success==1){
            console.log('Preview Request:', res);
            let oldData={
              award:res.data.award,
              fav_cuisine:res.data.fav_cuisine,
              fav_place:res.data.fav_place,
              fav_quote:res.data.fav_quote,
              fav_sports:res.data.fav_sports,
              joinee_image:res.data.joinee_image,
              joinee_name:res.data.joinee_name,
              role_model:res.data.role_model,
              sentence:res.data.sentence,

            }
            console.log('Success1:', res);
            // this.navCtrl.push('PreviewPage', {'alldata':oldData,'pasttime':this.pasttime,
            // 'native_place':this.place,'mobile_number':this.number});
            this.navCtrl.push('PreviewPage', {'alldata':oldData,'pasttime':this.pasttime,
           'native_place':this.place,'mobile_number':this.number,'imagelink':this.imagelink});
          }else{
            this.apiMessage(res.message);
            console.log('Success0:', res);
          }
        },(err)=>{
          console.log('Error:', err);
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


  checkBoxWork(data){
    // data.isChecked = !data.isChecked;
    // data.name = 'NA';
    this.zone.run(()=>{
        console.log('worked', data);
        if(data=="pasttime"){
          if( this.pasttime=='NA'){
            this.pasttime='';
          }else {
             this.pasttime='NA';
          }
          this.check1=!this.check1;
        }
        else if(data=="cuisine"){
          if( this.cuisine=='NA'){
            this.cuisine='';
          }else  this.cuisine='NA';
          this.check2=!this.check2;
        }
        else if(data == "fplace"){
          if( this.fplace=='NA'){
            this.fplace='';
          }else  this.fplace='NA';
          this.check3=!this.check3;
        }
    });
  }


  ionViewWillEnter(){
    this.menu.swipeEnable(false);
}


}

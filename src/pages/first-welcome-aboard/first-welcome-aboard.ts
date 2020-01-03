import { Component } from '@angular/core';
import { ApiServiceProvider } from "../../providers/api-service/api-service";
import { IonicPage, NavController, NavParams, ActionSheetController,ModalController,  } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup, NgForm } from '@angular/forms';
// import { MakeMeLowerPipe } from '../../pipes/make-me-lower/make-me-lower';
import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { Device } from '@ionic-native/device';
import { File } from '@ionic-native/file';

// import { Transfer, FileUploadOptions, TransferObject } from '@ionic-native/transfer';
@IonicPage()
@Component({
  selector: 'page-first-welcome-aboard',
  templateUrl: 'first-welcome-aboard.html',
})
export class FirstWelcomeAboardPage {
  // showCustomActionSheet: boolean;

  // //Variables:
  // exp:boolean;showSubmitButton:boolean=false;
  // // ImageTextBaseURL = this.apiService.ImageTextBaseURL;//"http://52.66.130.250/haier/images/a2z/";
  // base64Image:any;
  // totalexp:any;senior:any;
  // pcompany:any;
  // clientid:any;
  // employeeid:any;
  // pdesignation:any;
  // Highedu:any;
  // food:any;
  // holidaydest:any;
  // loading:any;
  // hobby:any;
  // userImage: any;
  // passimage: any;
  // impData:any;
  // showTemp:boolean = false;
  // userpic:any;
  // checkId:boolean=false;
  // first:any;
  // last:any;
  // name:any;
  // id=0;
  // data1:any;
  // data2:any;
  // exp1:boolean;
  // userImages:any;
  constructor(
    public actionSheetCtrl: ActionSheetController,
              // private loadingCtrl: LoadingController,
            private modalCtrl:  ModalController,
              // private apiService: ApiServiceProvider,
              // private toastCtrl: ToastController,
              // private imagePicker: ImagePicker,
              // private device: Device,
              // private camera: Camera,
              // private file: File,
              public navCtrl: NavController,
              // private pipe: MakeMeLowerPipe,
              public navParams: NavParams,
              // private storage: Storage,
              // private filetransfer:FileTransfer
            ) {
    //           this.impData= this.navParams.data;
    //           // this.clientid= this.impData.clientid;
    //           // this.employeeid= this.impData.employeeid
    //           console.log('impData:', this.impData);
    //           this.exp=false;
    //           this.exp1=false;
    //           console.log('Exp const val = ', this.exp);
    //           console.log('Exp const val = ', this.exp1);
    // this.storage.get('clientid').then((data) => {  this.clientid = data; });
    // this.storage.get('employeeid').then((data) => {this.employeeid=data; });
    // this.storage.get('userimage').then((val) =>{
    //   if(val!=""){ 
    //     console.log("in iffff of userimage is not null",val)
    //      this.showSubmitButton=true;
    //      this.userpic= val;
    //     }else{
    //       console.log(" userimage is null");
    //       this.showSubmitButton = false;
    //     }
    //   });
    // this.storage.get('firstname').then((val) =>{this.first= val; console.log('Firstame', this.first)});
    // this.storage.get('lastname').then((val) =>{
    //   this.last= val;
    //   this.name= this.first+' '+ this.last;
    // });
  }
  addimage(){
    let profileModal = this.modalCtrl.create('ProfileDosDontsPage');
    profileModal.onDidDismiss(data => {
      console.log(data);
    this.showActionSheet();
    })
    profileModal.present();
  }
    //Common Loader
//     commonLoader(){
//       this.loading= this.loadingCtrl.create({
//          enableBackdropDismiss:true,
//          spinner: 'ios-small',
//          content: 'Loading data...'
//        });
//        this.loading.present();
//      }


//   //Get CheckBox Value
//   getVal(ev, val) {
//     this.checkId=val;
//     console.log('value== : ', this.checkId);
//     if(this.checkId==true)
//     { this.id = 1;}
//     if(this.checkId==false)
//     { this.id= 0;}

//     console.log('id', this.id)
//     }

//       //Get CheckBox Value
//   getVal2(ev, val) {
//     this.exp=val;
//     this.exp1=false;
//     console.log('value2== :', this.exp);
//     }
//     getVal3(ev, val)
//     {
//       this.exp1=val;
//       this.exp=false;
//       console.log('value2== :', this.exp);
//     }

    

//       //Toast Function:
//   presentToast(APImessage){
//     let toast = this.toastCtrl.create({
//       message: APImessage,
//       duration: 1500,
//       position: 'top'
//     });

//     toast.onDidDismiss(() => {
//       console.log('Dismissed toast');
//     });
  
//     toast.present();
//   }

//     previewFunc(freshervalue,checkval){
//       console.log("checkval",checkval);
// if(checkval==undefined || checkval==false){
//   let message= "Please select the checkbox."
//            this.presentToast(message);
// }
// else{
  
// if(freshervalue=='fresher')
// {
// this.senior='0';
// console.log("this.senior",this.senior);
//   this.totalexp='';
//   this.pcompany='';
//   console.log("1223",this.pcompany)
//   this.pdesignation='';
//   if( this.Highedu==undefined || this.Highedu=='')
//   {
//     this.Highedu='';
//     console.log("this.Highedu",this.Highedu);
//   }
//   if(this.food==undefined || this.food=='')
//   {
//     this.food='  this.showCustomActionSheet=true;';
//     console.log("this.food1",this.food);
//   }
//  if(this.holidaydest==undefined || this.holidaydest=='')
//   {
//     this.holidaydest='';
//     console.log("this.holidaydest1",this.holidaydest);
//   }

// if( this.hobby==undefined || this.hobby=='')
//   {
//     this.hobby='';
//     console.log("this.hobby1",this.hobby);
//   }
  
//   if(this.showSubmitButton==true){
//     this.goToPreview();
//   }else{
//     let message= "Please upload profile picture."
//     this.presentToast(message);
//     this.showSubmitButton==false
//   }
  
// }
// else{
//   this.senior='1';
// if(this.totalexp==null || this.totalexp==undefined || this.totalexp=="" || this.totalexp=='')
// {
//   let message= "please fill total experience"
//            this.presentToast(message);
// }
// else if( this.pcompany==null || this.pcompany==undefined || this.pcompany=="" || this.pcompany=='')
// {
//   let message= "Please fill previous company"
//            this.presentToast(message);
// }
// else if(this.pdesignation==null || this.pdesignation==undefined || this.pdesignation=="" || this.pdesignation=='')
// {
//   let message= "Please fill previous designation"
//            this.presentToast(message);
// }
// else if(this.showSubmitButton!=true){
//   let message= "Please upload profile picture."
//   this.presentToast(message);
// }

// else{
//   this.goToPreview();
// }

// }

//     }

//     }

  

    goToPreview(){
      this.navCtrl.push('PreviewPage');
    }
//       // if(this.exp==true){
//       //   this.totalexp = "";
//       //   this.pcompany = "";
//       //   this.pdesignation= "";
//       // }
//       this.storage.get('clientid').then((data) => {  this.clientid = data; });
//       this.storage.get('employeeid').then((data) => {this.employeeid=data; 
//       let user= {
//         "clientid":this.clientid,
//         "employeeId":this.employeeid,
//         "experience":this.totalexp,
//         "preComp":this.pcompany,
//         "preDesig":this.pdesignation,
//         "education":this.Highedu,
//         "food":this.food,
//         "holiday":this.holidaydest,
//         "hobby":this.hobby,
//         "senior":this.senior
//       }
//       console.log('Preview Request:', user);
//       this.apiService.PreviewProvider(user)
//           .subscribe((res)=>{
//             if(res.success==1){
//               let oldData={
//                 totalExperience: this.totalexp,
//                 previousCompany: this.pcompany,
//                 previousDestignation: this.pdesignation,
//                 highestEducation: this.Highedu,
//                 favFood: this.food,
//                 favHoliday: this.holidaydest,
//                 myHobby: this.hobby,
//                 senior:this.senior
//               }
//               console.log('Success1:', res);
//               this.navCtrl.push('PreviewPage', {'resData':res.data, 'clientid': this.clientid, 'employeeid':this.employeeid, 'olddata':oldData});
//             }else{
//               console.log('Success0:', res);
//             }
//           },(err)=>{
//             console.log('Error:', err);
//           })
//         })
//     }


  showActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Change Profile Picture',
      buttons: [
        {
          text: 'Camera',
          role: 'destructive',
          handler: () => {
            //  this.picker();
          }
        }, {
          text: 'Gallery',
          handler: () => {
            //  this.multiple();
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
  previewFunc(){
    this.navCtrl.push('PreviewPage');
  }
//     // //FROM CAMERA
//     picker() {
//       var options = {
//         quality: 50,
//       //
//         encodingType: this.camera.EncodingType.JPEG,
//         mediaType: this.camera.MediaType.PICTURE,
//         allowEdit: true
//       };
  
//       this.camera.getPicture(options).then((imagePath) => {
//         this.passimage=imagePath;
//         let name =this.passimage.split("/");    // code for fetching file name
//            var fileName = name[name.length - 1];
//           this.uploadImage(imagePath,fileName);
//       }, (err) => {
//         this.presentToast('Error while selecting image.');
//       });
//     }
//     multiple() {
//       this.showTemp = true;
//       this.base64Image = '/assets/img/wallet.png'
//       var options = {
//         quality: 50,
//         encodingType: this.camera.EncodingType.JPEG,
//         mediaType: this.camera.MediaType.PICTURE,
//         allowEdit: true,
//         sourceType: 0
//       };
//       this.camera.getPicture(options).then((imagePath) => {
//         this.passimage='data:image/jpeg;base64,'+imagePath;
//         let name =this.passimage.split("/");    // code for fetching file name
//            var fileName = name[name.length - 1];
//           this.uploadImage(imagePath,fileName);
//       }, (err) => {
//         this.presentToast('Error while selecting image.');
//       });
  
//     }
//     uploadImage(imagepass,nameoffile) {
//       this.commonLoader();
    
     
//       // Destination URL
//       var url=this.apiService.baseUrl+'Profile/employee_adduserImage.php';  ///
     
     
//      var targetPath=imagepass; // aply only for imagepicker checking
   
//       var options = {
//         fileKey: "file",
//         fileName: nameoffile,
//         chunkedMode: false,
//         mimeType: "multipart/form-data",
//         params : {'file': targetPath,"clientid":this.clientid,"employeeid":this.employeeid}
//       };
    
//       const fileTransfer: FileTransferObject = this.filetransfer.create();
//       fileTransfer.upload(targetPath, url, options).then(data => {
//         console.log("data",data);
//         this.loading.dismiss();
//         this.showSubmitButton=true;
//         this.data1=JSON.parse(data.response);
//         this.data2=JSON.stringify(this.data1);
//         this.userpic=this.data1.userImage;
//         this.storage.set('userimage', this.userpic);
//         let message= "Image successfully uploaded."
//         this.presentToast(message);
//         this.storage.get('userimage').then((val) => { this.userImages = val;console.log('userImage', this.userImages) });
//       }, err => {
//       this.loading.dismiss();
//         this.presentToast('Error while uploading file.');
//       });
//     }
   

}

import { Component } from '@angular/core';
import { ApiServiceProvider } from "../../providers/api-service/api-service";
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
// import { ImagecontrollerProvider } from '../../providers/imagecontroller/imagecontroller';
import { Validators, FormBuilder, FormGroup, NgForm } from '@angular/forms';
// import { MakeMeLowerPipe } from '../../pipes/make-me-lower/make-me-lower';
import { Storage } from '@ionic/storage';
import { ImagecontrollerProvider } from '../../providers/services/imagecontroller';
import { InAppBrowser,InAppBrowserEvent,InAppBrowserOptions } from '@ionic-native/in-app-browser';
/**
 * Generated class for the DynamicmodulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dynamicmodule',
  templateUrl: 'dynamicmodule.html',
})
export class DynamicmodulePage {
  deviceId: any;
  login_token: any;
  employeeId: any;
  // ImageTextBaseURL=this.apiService.ImageTextBaseURL;

  userpic: any;
  clientid: any;
  device: any;
  first: any;
  name: string;
  employeeid: any;
  singleNewsData: any;
  user: any;
  loading: any;
  previousePageData: any;
  postid: any;
  allData:any;
  likeNumbers: any=0;
  commentNumbers: any=0;
  commentsData: any;
  displayBox: boolean=false;
  dis:any;
  mycomment:any='';
  pageTitle: any='';

  options : InAppBrowserOptions = {
    location : 'no',
    hidden : 'no',
    // clearcache : 'yes',
    // clearsessioncache : 'yes',
    zoom : 'yes',
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no',
    closebuttoncaption : 'Back',
    closebuttoncolor:'#f04141',
    disallowoverscroll : 'no',
    toolbar : 'yes',
    enableViewportScale : 'no',
    allowInlineMediaPlayback : 'no',
    presentationstyle : 'pagesheet',
    fullscreen : 'yes',
    footer:'yes',
    footercolor:'#939399',
   };


  constructor(
    private imgprovider: ImagecontrollerProvider,
    private loadingCtrl: LoadingController,private iab: InAppBrowser,
    private apiService: ApiServiceProvider,
    private toastCtrl: ToastController,
    public navCtrl: NavController,
    // private pipe: MakeMeLowerPipe,
    public navParams: NavParams,
    private storage: Storage) {

    this.previousePageData = this.navParams.get('data');
    console.log('**********dynamic module data== *********', this.previousePageData);
    this.postid = this.previousePageData.auto_id;
    this.storage.get('employeeId').then(eID => {
      this.employeeId = eID;
      console.log(' employeeId== ', this.employeeId);
      this.storage.get('login_token').then((token) => {
        console.log('showOnBoard value is111==', token);
        this.login_token = token;
        this.storage.get('deviceId').then(deviceID => {
          this.deviceId = deviceID;
          this.getDetails();
        });
      });
    });
    this.pageTitle= this.previousePageData.name;
  }


  handleClick(event) {
    if (event.target.tagName == "A") {
      this.iab.create(event.target.href, "_system", this.options);
      return false;
    }
  }

  //Common Loader
  commonLoader() {
    this.loading = this.loadingCtrl.create({
      enableBackdropDismiss: true,
      spinner: 'ios-small',
      content: 'Loading data...'
    });
    this.loading.present();
  }


 //For Image Not Available: Get haier Images
    // makeMeLower(name){
    //   return this.pipe.transform(name.toLowerCase());
    //   }


  //News Details Data Fetch Function:
  getDetails() {
    this.commonLoader();
    let apiKey = {
      "client_id": this.apiService.clientId,
      "employee_id": this.employeeId,
      "device": this.apiService.device,
      "device_id": this.deviceId,
      "app_version": this.apiService.appVersion,
      "auto_id": this.postid
    };
    this.apiService.getdynamicmoduleDataApi(apiKey,this.login_token)
      .subscribe((res) => {
        this.loading.dismiss();
        console.log(' Response:', res);
        if (res.success == 1) {
          this.allData=res.data;
          console.log(' Response:', this.allData);
        } else {
          this.presentToast(res.message);
        }
      },((err)=>{
        this.loading.dismiss();
      }))
  }

  //Toast Function:
  presentToast(APImessage) {
    let toast = this.toastCtrl.create({
      message: APImessage,
      duration: 1500,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }


  // Zoom Image:
  pp(img:any){
    this.imgprovider.presentImage(img);
  }


  //Like Data Function
  // getLike() {

  //   let user = {
  //     "clientid": this.clientid,
  //     "post_id": this.postid,
  //     "employeeid": this.employeeid,
  //     "flag":this.previousePageData.flag,
  //     "device": this.device
  //   }
  //   console.log('Like Data Request:', user);

  //   this.apiService.likeDataProvider(user)
  //     .subscribe((res) => {
  //       if (res.success == 1) {
  //         console.log('Like Data Response:', res);
  //         this.likeNumbers = parseInt(this.likeNumbers)+1
  //         let message = res.message;
  //         this.presentToast(message);
  //       } else if (res.success == 0) {
  //         console.log('Success0:', res)
  //         let message = res.message;
  //         this.presentToast(message)
  //       }
  //     }, (err) => {
  //       console.log('Error:', err)
  //     })
  // }

  // totalCommentsandLike() {
  //   this.storage.get('device').then((val) => { this.device = val; });
  //   this.storage.get('clientid').then((val) => {
  //     this.clientid = val;
  //     let user = {
  //       "clientid": this.clientid,
  //       "postid": this.postid,
  //       "flag":this.previousePageData.flag,
  //     }
  //     console.log('Total Like and Comments Request:', user);

  //     this.apiService.getLikeCommentNumbers(user)
  //       .subscribe((res) => {
  //         console.log('Total Like and Comments Response:', res);
  //         if (res.Success == 1) {
  //           this.likeNumbers= res.total_likes;
  //           this.commentNumbers= res.total_comments;
  //           this.commentsData= res.Posts; 
  //         }
  //       })
  //   });
  // }


  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad ContestDetailsPage');
  // }



   //Display Comment Box
  //  displayCommentBox(){
  //   this.displayBox= true;
  // }


  // detectWhiteSpace(ev,val){
  //   let reWhiteSpace = new RegExp(/^\s+$/);
  //  if (reWhiteSpace.test(val)) {
  //    return false;
  //  }else{
  //    console.log('no space');
  //  }
  //  // console.log(val);
  //  // let str=val.toHtml();
  //  // console.log(str);

  // }

 //Go To Like List Page
//  goToLikePage(){
//   this.navCtrl.push('NewsLikePage',{'PostId':this.postid, 'FlagCheck':this.previousePageData.flag});
// }
    //Send Comment
    // sendComment(mycomment){
    //   // this.commonLoader();
    //   // this.postidComment= postid;
    //   // this.flagCheck= flag;
    //   // this.mycomments= mycomment;
    //  //Date in Constructor:
    //  var d = new Date(),
    //  minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
    //  hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
    //  ampm = d.getHours() >= 12 ? 'PM' : 'AM',
    //  months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    //  days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    //  this.dis =d.getDate()+' '+months[d.getMonth()]+' '+d.getFullYear()+' '+hours+':'+minutes+ ' ' +ampm;
    // //Comment Show just on submit:
    //   let obj= {
    //     'name': this.name,
    //     'comment':mycomment,
    //     'commentDate': this.dis,
    //     'userImage': this.userpic
    //   }
  
    //   this.commentsData.unshift(obj);
    //   // this.dataComment = 1;
    //   this.commentNumbers= parseInt(this.commentNumbers)+1;
    // //----------------------------

    //   let user= {
    //     "clientid":this.clientid,
    //     "post_id":this.postid,
    //     "employeeid":this.employeeid,
    //     "message":mycomment,
    //     "flag" :this.previousePageData.flag,
    //     "device":this.device
    //   }
  
    //   console.log('Send Comment Request:', user);
    //   this.apiService.sendCommentProvider(user)
    //       .subscribe((res)=>{
          
    //       console.log('Send Comment Request:', res)
    //       if(res.success==1){
    //         // this.loading.dismiss();
    //         let message= res.message;
    //         // this.presentToast(message);
    //         // form.reset();
    //         // this.myInput.nativeElement.style.height='48px';
    //       }else{
    //         // this.loading.dismiss();
    //         this.presentToast(res.message);
    //       }
    //       },(err)=>{
    //         // this.loading.dismiss();
    //         this.presentToast(err);
    //       })
  
    // }

  

}

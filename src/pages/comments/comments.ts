import { Component } from '@angular/core';
import {Validators, FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { IonicPage, NavController, NavParams, ToastController, Events } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import { ImageViewerController } from 'ionic-img-viewer';
import { InAppBrowser,InAppBrowserEvent,InAppBrowserOptions } from '@ionic-native/in-app-browser';
/**
 * Generated class for the CommentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html',
})
export class CommentsPage {
  award_to: any;

  deviceId:any;
  login_token:any;
  employeeId:any;
  _imageViewerCtrl: ImageViewerController;
  displayBox: boolean=false;
  user_image: any;
  first_name: any;
  mycomment: any;
  totalcomment: any;
  commentdata: any=[];
  dis: any;
  postid: any;
  previousePageData:any;
  like_status:number;
  totallike: number;
  dataIndex:number;
  commingFrom: any;


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

  constructor(private storage:Storage,private apiServices:ApiServiceProvider,imageViewerCtrl: ImageViewerController,
    public navCtrl: NavController, public navParams: NavParams,public events: Events,private iab: InAppBrowser,
    private toastCtrl:ToastController) {
      this.previousePageData=this.navParams.get('data');
      this.dataIndex=this.navParams.get('index');
      console.log('previousePageData==', this.previousePageData);
      console.log('previousePageData index==', this.dataIndex);
// this.like_status=this.previousePageData.like_status;
    this.award_to=this.previousePageData.award_to;
   this.totallike=parseInt(this.previousePageData.like_count);
   this.totalcomment=parseInt(this.previousePageData.comment_count);
   this.like_status=parseInt(this.previousePageData.like_status);



    this.storage.get('employeeId').then(data => {
      this.employeeId = data;
      console.log(' employeeId== ', this.employeeId);
    });
    this.storage.get('login_token').then((data) => {
      console.log('showOnBoard value is111==', data);
      this.login_token = data;
    });
    this._imageViewerCtrl = imageViewerCtrl;
    
    this.commingFrom=this.navParams.get('commingFrom');
    console.log('commingFrom==', this.commingFrom);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentsPage');
    var d = new Date(),
   minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
   hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
   ampm = d.getHours() >= 12 ? 'PM' : 'AM',
   months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
   days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
   this.dis =d.getDate()+' '+months[d.getMonth()]+' '+d.getFullYear()+' '+hours+':'+minutes+ ' ' +ampm;
this.getallcomment();
  }

  goforcomment(){
if(this.displayBox==true){
  this.displayBox=false;
}
else{
  this.displayBox=true;
}

    
  }
sendComment(form: NgForm){
this.storage.get('user_image').then(data => {
  this.user_image = data;
  console.log(' user_image== ', this.user_image);
});
this.storage.get('first_name').then(data => {
  this.first_name = data;
  console.log(' first_name== ', this.first_name);
});
this.storage.get('employeeId').then(data => {
  this.employeeId = data;
  console.log(' employeeId== ', this.employeeId);
});
this.storage.get('deviceId').then((data) => {
  console.log('showOnBoard value is111==', data);
  this.deviceId = data;
})
  //
if(this.mycomment==undefined || this.mycomment == ''){
  let message = 'please write comment';
    // this.presentToast(message);
    this.apiMessage(message);
    return false;
}
//----------------------------
this.storage.get('login_token').then((data) => {
console.log('AlbumDetails value is111==', data);
this.login_token = data;
let apiKey= {
  "client_id": this.apiServices.clientId,
  "employee_id":this.employeeId,
  "device":this.apiServices.device,
  "device_id":this.deviceId,
  "app_version":this.apiServices.appVersion,
  "flag":"10",
  "post_id":this.previousePageData.auto_id,
  "comment":this.mycomment,
  "created_for":this.award_to
}
console.log('Send Comment Request:', apiKey);
this.apiServices.createcomment(apiKey, this.login_token)
    .subscribe((res)=>{
    console.log('Send Comment Request:', res)
    if(res.success==1){
      let obj= {
        'comment_by_name': this.first_name,
        'comment':this.mycomment,
        'date_time': this.dis,
        'comment_by_image': this.user_image
      }
      this.commentdata.unshift(obj);
      this.totalcomment=parseInt( this.totalcomment) + 1;


      if(this.commingFrom=='badgeSlidePage'){
        //update comment on badgeSlidePage page
        let updatelikeData={
          'index':this.dataIndex,
          'comment':this.totalcomment
        }
        this.events.publish('updateCommentData', updatelikeData);
        }else{
          //update comment on badge board page
          let updatelikeData={
            'index':this.dataIndex,
            'comment':this.totalcomment
          }
          this.events.publish('updateCommentDataBadgeBoard', updatelikeData);
        }


      form.reset();
      this.displayBox= false;
      let passDataToBackpage={
        'index':this.dataIndex,
        'totalComment':this.totalcomment
      }
      this.events.publish('totalCommentUpdate', passDataToBackpage);
    }
})
})
}
getallcomment(){
  this.storage.get('employeeId').then(data => {
    this.employeeId = data;
    console.log(' employeeId== ', this.employeeId);
  });
  this.storage.get('deviceId').then((data) => {
    console.log('showOnBoard value is111==', data);
    this.deviceId = data;
  })
    
    this.storage.get('login_token').then((data) => {
      console.log('AlbumDetails value is111==', data);
      this.login_token = data;
      let apiKey = {
        "client_id": this.apiServices.clientId,
        "employee_id":this.employeeId,
        "device":this.apiServices.device,
        "device_id":this.deviceId,
        "app_version":this.apiServices.appVersion,
        "flag":"10",
        "post_id":this.previousePageData.auto_id,
        "val":"0"
      }
      console.log('AlbumDetails api apiKey==', apiKey);
      this.apiServices.getallcomment(apiKey, this.login_token).subscribe(result => {
        console.log('AlbumDetails api res==', result);
        if (result.success == 1) {
        this.commentdata=result.data;
          console.log('album emp list==', result.data);
        } else {
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

  presentImage(myImage) {
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();
 
    setTimeout(() => imageViewer.dismiss(), 30000);
    imageViewer.onDidDismiss(() => console.log('Viewer dismissed'));
  }


  likeUnlikeFun(data, index){

    // this.totallike=parseInt(this.allData[this.dataIndex].like_count);
    // this.totalcomment=parseInt(this.allData[this.dataIndex].comment_count);
    // this.like_status=parseInt(this.allData[this.dataIndex].like_status);

    console.log('post==', data);
  if(data.like_status==0){
    this.like_status=1;
    let increaseLike=parseInt(data.like_count)+1;
    this.totallike=increaseLike;
    this.doLikeUnlikeFun(increaseLike,this.previousePageData.auto_id,1);
    if(this.commingFrom=='badgeSlidePage'){
    //update like on badgeSlidePage page
    let updatelikeData={
      'index':this.dataIndex,
      'like':this.totallike,
      'likeStatus':this.like_status
    }
    this.events.publish('updatelikeData', updatelikeData);
    }else{
      //update like on badge board page
      let updatelikeData={
        'index':this.dataIndex,
        'like':this.totallike,
        'likeStatus':this.like_status
      }
      this.events.publish('updatelikeDataBadgeBoard', updatelikeData);
    }

  }else{
    this.like_status=0;
    let decreaseLike=parseInt(data.like_count)-1;
    this.totallike=decreaseLike;
    this.doLikeUnlikeFun(decreaseLike,this.previousePageData.auto_id,0);
    if(this.commingFrom=='badgeSlidePage'){
      //update like on badgeSlidePage page
      let updatelikeData={
        'index':this.dataIndex,
        'like':this.totallike,
        'likeStatus':this.like_status
      }
      this.events.publish('updatelikeData', updatelikeData);
      }else{
        //update like on badge board page
        let updatelikeData={
          'index':this.dataIndex,
          'like':this.totallike,
          'likeStatus':this.like_status
        }
        this.events.publish('updatelikeDataBadgeBoard', updatelikeData);
      }
  }
  
  }
  
  doLikeUnlikeFun(totalLike,postId,status){
    this.storage.get('deviceId').then(data => {
      this.deviceId = data;
      let apiKey = {
        "client_id":this.apiServices.clientId,
        "employee_id":this.employeeId,
        "device":this.apiServices.device,
        "device_id":this.deviceId,
        "app_version":this.apiServices.appVersion,
        "flag":"10",
        "post_id":postId,
        "status":status,
        "created_for":this.award_to
      };
      this.apiServices.doLikeUnlikeApi(apiKey, this.login_token)
        .subscribe((res) => {
          console.log('slide badge res==', res);
          if(res.success==1){
  
          }else{
  
          }
  
        })
      })
  
  
  }

  seeLikesUser(data){
    this.navCtrl.push('LikeUsersListPage', {'data':data,"flag":10});
  }
  
  handleClick(event) {
    if (event.target.tagName == "A") {
      this.iab.create(event.target.href, "_system", this.options);
      return false;
    }
  }


}

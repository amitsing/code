
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,LoadingController } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import {Validators, FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ImageViewerController } from 'ionic-img-viewer';
import { InAppBrowser,InAppBrowserEvent,InAppBrowserOptions } from '@ionic-native/in-app-browser';
/**
 * Generated class for the OprationdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-oprationdetail',
  templateUrl: 'oprationdetail.html',
})
export class OprationdetailPage {
  thumbnail_image: any;
  mediatype: any;
  mycomment: any;
  first_name: any;
  user_image: any;
  like_status: number;
  totalcomment: any;
  totallike: number;
  date: any;
  content: any;commentdata:any=[];
  title: any;
  pramotedimage: any;
  employeeId: any;
  deviceId: any;
  login_token: any;
  flagdata: any;
  showPostData: any;
  dis:any;
  loading:any;
  pramoteddata:any;displayBox:boolean=false;

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

  constructor(private imageViewerCtrl: ImageViewerController, public toastCtrl: ToastController,
    private storage: Storage,public loadingCtrl: LoadingController,private iab: InAppBrowser,
    private apiServices: ApiServiceProvider, public navCtrl: NavController, public navParams: NavParams) {

    this.flagdata=this.navParams.get('data');
    console.log('this.flagdata',this.flagdata);
    var d = new Date(),
    minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
    hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
    ampm = d.getHours() >= 12 ? 'PM' : 'AM',
    months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    this.dis =d.getDate()+' '+months[d.getMonth()]+' '+d.getFullYear()+' '+hours+':'+minutes+ ' ' +ampm;
    this.showPostData=[  {images:"../../assets/imgs/homePage/thoughOfTheDay/1.png"},
    {images:"../../assets/imgs/homePage/thoughOfTheDay/1.png"},
    {images:"../../assets/imgs/homePage/thoughOfTheDay/1.png"},
    {images:"../../assets/imgs/homePage/thoughOfTheDay/1.png"}]

    this.storage.get('deviceId').then((data) => {
      console.log('showOnBoard value is111==', data);
      this.deviceId = data;
    })
    this.storage.get('employeeId').then(data => {
      this.employeeId = data;
      console.log(' employeeId== ', this.employeeId);
    });
 
this.postdetail();
this.getallcomment();
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

  postdetail() {
    this.commonLoader();
    this.storage.get('login_token').then((data) => {
      console.log('AlbumDetails value is111==', data);
      this.login_token = data;
      let apiKey = {
     
        "client_id":this.apiServices.clientId,
        "employee_id":this.employeeId,
        "device":this.apiServices.device,
        "device_id":this.deviceId,
        "app_version":this.apiServices.appVersion,
        "flag":this.flagdata.flag,
        "post_id":this.flagdata.auto_id

      }
      console.log('AlbumDetails api apiKey==', apiKey);
      this.apiServices.postdetail(apiKey, this.login_token).subscribe(result => {
        console.log('AlbumDetails api res==', result);

this.loading.dismiss();
        if (result.success == 1) {
          
           this.pramoteddata=result.data[0];
           this.mediatype=this.pramoteddata.media_type;
           this.pramotedimage=this.pramoteddata.image;
          
           this.title=this.pramoteddata.title;
           this.content=this.pramoteddata.content;
           this.date=this.pramoteddata.publish_date;
           this.thumbnail_image=this.pramoteddata.thumbnail_image;
           console.log('this.pramoteddata==', this.pramoteddata);
           this.totallike=parseInt(this.pramoteddata.like_count);
           this.totalcomment=parseInt(this.pramoteddata.comment_count);
           this.like_status=parseInt(this.pramoteddata.like_status);
        } else {
        
          this.apiMessage(result.message);

        }


      })

    })
  }


  goforlike(likestatus){
    this.like_status=likestatus;
if(this.like_status==1){
  this.totallike=this.totallike-1;
  this.like_status=0;
}else{
  this.like_status=1;
  this.totallike=this.totallike+1;
}


    // console.log('this.postid',this.postid);
   
    this.storage.get('employeeId').then(data => {
      this.employeeId = data;
      console.log(' employeeId== ', this.employeeId);
    });
    this.storage.get('deviceId').then((data) => {
      console.log('showOnBoard value is111==', data);
      this.deviceId = data;
    })
      // console.log('this.previousePagedata.auto_id==', this.previousePagedata.auto_id);
      // console.log('this.postid1234',this.postid);
      this.storage.get('login_token').then((data) => {
        console.log('AlbumDetails value is111==', data);
        this.login_token = data;
        let apiKey = {
       
          "client_id": this.apiServices.clientId,
          "employee_id":this.employeeId,
          "device":this.apiServices.device,
          "device_id":this.deviceId,
          "app_version":this.apiServices.appVersion,
          "flag":this.flagdata.flag,
          "post_id":this.flagdata.auto_id,
          "status":this.like_status
        }
        console.log('AlbumDetails api apiKey==', apiKey);
        this.apiServices.createlike(apiKey, this.login_token).subscribe(result => {
          console.log('AlbumDetails api res==', result);
  
  
          if (result.success == 1) {
            // this.apiMessage(result.message);
            console.log('album emp list==', result.data);
         
          } else {
            this.apiMessage(result.message);
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
        // console.log('this.previousePagedata.auto_id==', this.previousePagedata.auto_id);
        // console.log('this.postid1234',this.postid);
        this.storage.get('login_token').then((data) => {
          console.log('AlbumDetails value is111==', data);
          this.login_token = data;
          let apiKey = {
        
            "client_id": this.apiServices.clientId,
            "employee_id":this.employeeId,
            "device":this.apiServices.device,
            "device_id":this.deviceId,
            "app_version":this.apiServices.appVersion,
            "flag":'43',
            "post_id":this.flagdata.auto_id,
            "val":"0"
          }
          console.log('AlbumDetails api apiKey==', apiKey);
          this.apiServices.getallcomment(apiKey, this.login_token).subscribe(result => {
            console.log('AlbumDetails api res==', result);
    
    
            if (result.success == 1) {
            this.commentdata=result.data;
              console.log('album emp list==', result.data);
           
            } else {
              // this.apiMessage(result.message);
            }
    
          })
    
        })
      }


      goforcomment(){
        this.displayBox=true;
      }


    apiMessage(message) {
      const toast = this.toastCtrl.create({
        message: message,
        duration: 3000
      });
      toast.present();
    }


   //Send Comment
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
      "flag":this.flagdata.flag,
      "post_id":this.flagdata.auto_id,
      "comment":this.mycomment

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
          this.totalcomment=parseInt( this.totalcomment) + 1
          form.reset();
          this.displayBox= false;
        }
    })
  })
  }

  gotolikelist(){
    if(this.totallike>0){
      this.navCtrl.push('LikeUsersListPage',{'data':this.flagdata,'flag':this.flagdata.flag});
    }
    
  }

  ionViewDidLoad() {
 
    console.log('ionViewDidLoad OprationdetailPage');
  }

 
  // apiMessage(message) {
  //   const toast = this.toastCtrl.create({
  //     message: message,
  //     duration: 3000
  //   });
  //   toast.present();
  // }
  handleClick(event) {
    if (event.target.tagName == "A") {
      this.iab.create(event.target.href, "_system");
      return false;
    }
  }

}

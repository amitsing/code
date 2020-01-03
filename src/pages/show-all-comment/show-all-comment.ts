import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { NgForm } from '@angular/forms';
import { InAppBrowser,InAppBrowserEvent,InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { ImagecontrollerProvider } from '../../providers/services/imagecontroller';
/**
 * Generated class for the ShowAllCommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-all-comment',
  templateUrl: 'show-all-comment.html',
})
export class ShowAllCommentPage {

  totalcomment: any;
  dis: string;
  mycomment: any;
  first_name: any;
  user_image: any;
  flag: any;
  commentdata: any=[];
  login_token: any;
  deviceId: any;
  employeeId: any;
  previousData:any;

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

  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController,private iab: InAppBrowser,
  private storage:Storage, private apiServices:ApiServiceProvider, private imgprovider:ImagecontrollerProvider) {

    this.previousData = this.navParams.get('data');
    this.flag=this.navParams.get('flag');
    console.log(this.previousData);
    console.log(this.flag);

    var d = new Date(),
    minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
    hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
    ampm = d.getHours() >= 12 ? 'PM' : 'AM',
    months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    this.dis =d.getDate()+' '+months[d.getMonth()]+' '+d.getFullYear()+' '+hours+':'+minutes+ ' ' +ampm;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowAllCommentPage');
    this.getallcomment();
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
        this.storage.get('login_token').then((data) => {
          console.log('AlbumDetails value is111==', data);
          this.login_token = data;
          let apiKey = {
            "client_id": this.apiServices.clientId,
            "employee_id":this.employeeId,
            "device":this.apiServices.device,
            "device_id":this.deviceId,
            "app_version":this.apiServices.appVersion,
            "flag":this.flag,
            "post_id":this.previousData.auto_id,
            "val":"0"
          }
          console.log('AlbumDetails api apiKey==', apiKey);
          this.apiServices.getallcomment(apiKey, this.login_token).subscribe(result => {
            console.log('AlbumDetails api res==', result);
    
    
            if (result.success == 1) {
            this.commentdata=result.data;
              console.log('album emp list==', result.data);
           
            } else {
              // this.commentdata =[];
            }
    
    
          })
    
        })
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
          "flag":this.flag,
          "post_id":this.previousData.auto_id,
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
              this.previousData.comment_count++;
              form.reset();
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

      handleClick(event) {
        if (event.target.tagName == "A") {
          this.iab.create(event.target.href, "_system", this.options);
          return false;
        }
      }   

        // Zoom Image:
  pp(img:any){
    this.imgprovider.presentImage(img);
  }
    
}

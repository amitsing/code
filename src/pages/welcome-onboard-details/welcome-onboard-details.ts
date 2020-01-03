import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController ,LoadingController} from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import { ImageViewerController } from 'ionic-img-viewer';
import {Validators, FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { InAppBrowser,InAppBrowserEvent,InAppBrowserOptions } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-welcome-onboard-details',
  templateUrl: 'welcome-onboard-details.html',
})
export class WelcomeOnboardDetailsPage {
  auto_id: any;
  pushkey: any;
  first_name: any;like_status: number;
  user_image: any;
  totalcomment: any;mycomment:any;
  totallike: any;commentdata:any=[];
  emptype: any;
  displayBox:boolean=false;
  _imageViewerCtrl: ImageViewerController;
 deviceId:any;dis:any;
  login_token:any;
  employeeId:any;
  detailsData:any;
  previousePageData:any;
 
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

   loading:any;
  constructor(
    private storage:Storage,private apiServices:ApiServiceProvider,private iab: InAppBrowser,
    private alertCtrl: AlertController,imageViewerCtrl: ImageViewerController,private loadingCtrl: LoadingController,
    public navCtrl: NavController, public navParams: NavParams) {
      this._imageViewerCtrl = imageViewerCtrl;
      
    this.previousePageData=this.navParams.get('data');
    console.log('previouse page data== ', this.previousePageData);
    this.pushkey=this.navParams.get('pushkey');
    if(this.pushkey==1){
      this.auto_id=this.previousePageData.id;
    }
    else{
      this.auto_id=this.previousePageData.welcomeAboard_AutoId;
    }
    this.storage.get('showOnBoard').then(data=>{
      this.emptype=data;
      console.log('showOnBoard value is==',data );
    });

    this.storage.get('user_image').then(data => {
      this.user_image = data;
      console.log(' user_image== ', this.user_image);
    });

      this.storage.get('employeeId').then(data => {
        this.employeeId = data;
        console.log(' employeeId== ', this.employeeId);
      });
      this.storage.get('login_token').then((data) => {
        console.log('showOnBoard value is111==', data);
        this.login_token = data;
      })
      var d = new Date(),
      minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
      hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
      ampm = d.getHours() >= 12 ? 'PM' : 'AM',
      months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
      days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
      this.dis =d.getDate()+' '+months[d.getMonth()]+' '+d.getFullYear()+' '+hours+':'+minutes+ ' ' +ampm;
     
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



  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticeListPage');
    this.getNoticeListFun();
  }
  getNoticeListFun(){
    this.commonLoader();
    this.storage.get('showOnBoard').then(data=>{
      this.emptype=data;
      console.log('showOnBoard value is==',data );
    });

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
      let apiKey = {
        "client_id":this.apiServices.clientId,
        "employee_id":this.employeeId,
        "device":this.apiServices.device,
        "device_id":this.deviceId,
        "app_version":this.apiServices.appVersion,
        "flag":"12",
        // "post_id": this.previousePageData.welcome_abord_auto_id
        "user_type": this.emptype,
        "welcomeAboard_AutoId":this.auto_id


        // "client_id": "CO-31",
        // "employee_id": "1",
        // "device": "2",
        // "device_id": "123",
        // "app_version": "4",
        // "user_type": "Guest",
        // "welcomeAboard_AutoId":"1"

      };
      this.apiServices.welcomeDetailsApi(apiKey, this.login_token)
        .subscribe((res) => {
          console.log('welcome onboard res==', res);
          this.loading.dismiss();
          if(res.success==1){
              this.detailsData=res.data[0]; 
              this.totallike=this.detailsData.like_count;
              this.totalcomment=this.detailsData.comment_count;
              this.like_status=this.detailsData.like_status;   
              console.log('welcome onboard data==', this.detailsData);   
              this.getallcomment();            
          }else{
            let alert = this.alertCtrl.create({
              // title: 'Confirm purchase',
              message: res.message,
              buttons: [
                {
                  text: 'Ok',
                  role: 'cancel',
                  handler: () => {
                    console.log('Cancel clicked');
                    this.navCtrl.pop();
                  }
                }
              ]
            });
            alert.present();
          }


        })

      })



  }


  presentImage(myImage) {
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();
 
    setTimeout(() => imageViewer.dismiss(), 30000);
    imageViewer.onDidDismiss(() => console.log('Viewer dismissed'));
  }


  goforcomment(){
    this.displayBox=true;
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
          "flag":'12',
          "post_id":this.detailsData.auto_id,
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
        // this.apiMessage(message);
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
      "flag":'12',
      "post_id":this.detailsData.auto_id,
      "comment":this.mycomment,
      "created_for":this.detailsData.employee_id
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
      this.navCtrl.push('LikeUsersListPage',{'data':this.detailsData,'flag':12});
    }
  }
    
  goforlike(likestatus){
    this.like_status=likestatus;
if(this.like_status==1){
  this.totallike=this.totallike-1;
  this.like_status=0;
}else{
  this.like_status=1;
  // this.totallike=this.totallike+1;
  this.totallike=parseInt(this.totallike)+1;
  // this.totallike++;
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
          "flag":'12',
          "post_id":this.detailsData.auto_id,
          "status":this.like_status
        }
        console.log('AlbumDetails api apiKey==', apiKey);
        this.apiServices.createlike(apiKey, this.login_token).subscribe(result => {
          console.log('AlbumDetails api res==', result);
  
  
          if (result.success == 1) {
            // this.apiMessage(result.message);
            console.log('album emp list==', result.data);
         
          } else {
          
          }
  
  
        })
  
      })
    }


    handleClick(event) {
      if (event.target.tagName == "A") {
        this.iab.create(event.target.href, "_system", this.options);
        return false;
      }
    }

}

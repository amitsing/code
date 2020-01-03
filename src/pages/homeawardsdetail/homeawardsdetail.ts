import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IonicPage, NavController, NavParams, ToastController, AlertController,LoadingController, Platform } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import {Validators, FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { InAppBrowser,InAppBrowserEvent,InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { ImagecontrollerProvider } from '../../providers/services/imagecontroller';


@IonicPage()
@Component({
  selector: 'page-homeawardsdetail',
  templateUrl: 'homeawardsdetail.html',
})
export class HomeawardsdetailPage {
  nomination_id: any;
  pushkey: any;
  dis: any;
  displayBox:boolean=false;
  commentdata: any=[];
  flagdata: any;
  mycomment: any;
  first_name: any;
  user_image: any;
  like_status: any;
  userdata: any;
  nomoinatedByDetails:any;
  action_by: any;
  remark: any;
  user_name: any;
  userimg: any;
  award_name: any;
  nominated_by: any;
  reason: any;
  nominatedbyimage: any;
  loctaion: any;
  name: any;
  awardsimg: any;
  nominationData: any;
  AandNkey: string;
  awardsname: any;
  nominationmessage: any;
  hidebutton: any;
  succecczerorewards: any;
  succzerotitle: any;
  succ: any;
  awardstype: any;
  rewardslength: any;
  totalRewareds: any;
  rewardstitle: any;
  rewardeddata: any;
  graphtitle: any;
  awardTitle: any;
  awardUtilised: any;
  awardsdiscription: any;
  awardstitle: any;
  rewardspoint: any;
  crownimg: any;
  award_image: any;
  awardid: any;
  allData: any;
  deviceId: any;
  login_token: any;
  employeeId: any;
  awardHead: any;
  peopleRewarded: any;
  topImage: any;
  loading:any;
  team: boolean=false;
  n_authority:string;
  a_authority:string;

  public unregisterBackButtonAction: any;
  closeAppPopupShow:number=0;
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



  constructor(public navCtrl: NavController, public navParams: NavParams,private iab: InAppBrowser,
    private alertCtrl: AlertController, private platform: Platform,public loadingCtrl: LoadingController, 
    public toastCtrl: ToastController, private storage: Storage, private imgprovider : ImagecontrollerProvider,
    private apiServices: ApiServiceProvider) {
      this.storage.get('nominating_authority').then(value=>{
        console.log(value);
        if(value==1){this.n_authority='n';}
        else {this.n_authority="";}
        this.storage.get('approval_authority').then(data=>{
          console.log(data);
          if(data==1){this.a_authority='a';}
          else {this.a_authority="";}
        });
      });

      this.pushkey=this.navParams.get('pushkey');
      if(this.pushkey==1){
        this.nominationData=this.navParams.get('nominationData');
        this.nomination_id=this.nominationData.id;
      }
      else{
        this.nominationData=this.navParams.get('nominationData');
        this.nomination_id=this.nominationData.nomination_id;
      }
  

    // this.nominationData=this.navParams.get('nominationData');
    console.log(this.nominationData);
    var d = new Date(),
    minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
    hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
    ampm = d.getHours() >= 12 ? 'PM' : 'AM',
    months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    this.dis =d.getDate()+' '+months[d.getMonth()]+' '+d.getFullYear()+' '+hours+':'+minutes+ ' ' +ampm;
      this.rewarded();
  }
  commonLoader() {
    this.loading = this.loadingCtrl.create({
      enableBackdropDismiss: true,
      spinner: 'ios-small',
      content: 'Loading data...'
    });
    this.loading.present();
  }

    // Zoom Image:
    pp(img:any){
      this.imgprovider.presentImage(img);
    }

  rewarded() {
    this.commonLoader();
    console.log("called");
    this.storage.get('employeeId').then(data => {
      this.employeeId = data;
    });
    this.storage.get('login_token').then((data) => {
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
      // "nomination_id":this.nominationData.nomination_id,
      "nomination_id":this.nomination_id,
      "user_authority":'n'
      };
      this.apiServices.EmployeeAwarddetail(apiKey, this.login_token)
        .subscribe((res) => {
          console.log('', res);
          this.loading.dismiss(); 
          if (res.success == 1) {
            this.peopleRewarded = res.data;
            if(this.peopleRewarded.user.length==1){ 
              this.team = false;
              this.userdata = this.peopleRewarded.user;
              this.nomoinatedByDetails = this.peopleRewarded.progress[0];
              console.log(this.nomoinatedByDetails);
              console.log(this.userdata);
              this.getallcomment();
            }else {
              this.team = true;
              this.userdata = this.peopleRewarded.user;
              this.nomoinatedByDetails = this.peopleRewarded.progress[0];
              console.log(this.nomoinatedByDetails);
              console.log(this.userdata);
              this.getallcomment();
            }
            console.log('peopleRewarded',this.awardsimg);
          } else {
            this.loading.dismiss(); 
            this.succ=res.success
            this.apiMessage(res.message);
          }
        }, (err) => {
          console.log('err== ', err);
          this.loading.dismiss(); 
          this.apiMessage(err);
  
        });
  
    });
  }

  goforlike(){
    this.like_status = this.peopleRewarded.like_status;
    if(this.peopleRewarded.like_status==1){
      this.peopleRewarded.total_like--;
      this.peopleRewarded.like_status=0;
    }else{
      this.peopleRewarded.total_like++;
      this.peopleRewarded.like_status=1
    } 
           // }     


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
          "flag": this.peopleRewarded.flag,
          "post_id":this.peopleRewarded.nomination_id,
          "status":this.peopleRewarded.like_status,
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
      "comment":this.mycomment,
      "flag": this.peopleRewarded.flag,
      "post_id":this.peopleRewarded.nomination_id,
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
          this.peopleRewarded.total_comment++;
          // this.totalcomment=parseInt( this.totalcomment) + 1
          form.reset();
          this.displayBox= false;
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
          "val":"0",
          "flag": this.peopleRewarded.flag,
          "post_id":this.peopleRewarded.nomination_id,
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
      this.displayBox=!this.displayBox;
    }
 apiMessage(message) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeawardsdetailPage');
  }


  gotolikelist(){
    if( this.peopleRewarded.total_like>0){
      let auto_id = this.peopleRewarded.nomination_id;
      // this.peopleRewarded.push({'auto_id': auto_id});
      this.peopleRewarded['auto_id'] = auto_id;
      this.navCtrl.push('LikeUsersListPage',{'data':this.peopleRewarded,'flag':this.peopleRewarded.flag});
    }
  }

  handleClick(event) {
    if (event.target.tagName == "A") {
      this.iab.create(event.target.href, "_system", this.options);
      return false;
    }
  }

  ionViewWillEnter(){

    this.initializeBackButtonCustomHandler();
    }
   

  ionViewWillLeave() {
    this.unregisterBackButtonAction && this.unregisterBackButtonAction();
  }


  //Hardware Back Button

  initializeBackButtonCustomHandler(): void {
    let that = this;
    this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function (event) {
  
      // that.navCtrl.popToRoot();
      that.navCtrl.pop();
    }, 101); // Priority 101 will override back button handling (we set in app.component.ts) as it is bigger then priority 100 configured in app.component.ts file */
  }


}

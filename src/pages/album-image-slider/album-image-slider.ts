import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController ,LoadingController, Slides} from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import {Validators, FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ImageViewerController } from 'ionic-img-viewer';


@IonicPage()
@Component({
  selector: 'page-album-image-slider',
  templateUrl: 'album-image-slider.html',
})
export class AlbumImageSliderPage {
  album_title: any;
  user_Type: any;
  activeSliderIndexDetect: number;
  @ViewChild(Slides) slides: Slides;
  first_post_id: any;
  pushkey: any;
  title: any;
  albumid: any;
  albumallData: any;
  first_name: any;
  user_image: any;
  postid: any;
  deviceId: any;
  like_status: number;
  totalcomment: any;mycomment:any;
  totallike: any;displayBox:boolean=false;
  albumimg: any;commentdata:any=[];
  _imageViewerCtrl: ImageViewerController;
  previousePagedata: any;
  login_token: any;
  employeeId: any;
  allData: any;
  index: number=0;
  dis:any;loading:any;
  constructor(private imageViewerCtrl: ImageViewerController,public loadingCtrl: LoadingController, public toastCtrl: ToastController,
    private storage: Storage,
    private apiServices: ApiServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.allData = this.navParams.get('data');
   
    this.index = this.navParams.get('index');
    console.log("aaaa",this.allData);
    this.first_post_id=this.navParams.get('first_post_id');
    // this.albumid = this.navParams.get('albumid');
    console.log("albumid",this.albumid);
    this._imageViewerCtrl = imageViewerCtrl;
    this.pushkey=this.navParams.get('pushkey');
    if(this.pushkey==1){
      this.albumid=this.allData.other_id;
      this.postid=this.allData.id;
      this.index=0;
      this.albumdetail();
    }
    else{
  this.albumid = this.navParams.get('albumid');
  if(this.first_post_id=='1'){
  this.postid=this.allData.auto_id;
  this.albumdetail();
}
else{
  this.albumallData=this.allData;
  this.album_title=this.albumallData[0].album_title;
  // this.albumid = this.navParams.get('albumid');
  this.analyticApi(this.albumallData[0].auto_id);
}
     
    }


    // this.albumimg=this.allData.image;
    // this.totallike=parseInt(this.allData.like_count);
    // this.totalcomment=parseInt(this.allData.comment_count);
    // this.like_status=parseInt(this.allData.like_status);

    var d = new Date(),
    minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
    hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
    ampm = d.getHours() >= 12 ? 'PM' : 'AM',
    months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    this.dis =d.getDate()+' '+months[d.getMonth()]+' '+d.getFullYear()+' '+hours+':'+minutes+ ' ' +ampm;

    this.storage.get('deviceId').then((data) => {
      console.log('showOnBoard value is111==', data);
      this.deviceId = data;
    })
    this.storage.get('employeeId').then(data => {
      this.employeeId = data;
      console.log(' employeeId== ', this.employeeId);
    });
    // this.postid=this.allData.auto_id;


    
    // this.albumdetail();
    // this.getallcomment();

    this.storage.get('employeeId').then(eID => {
      this.employeeId = eID;
      console.log(' employeeId== ', this.employeeId);
      this.storage.get('login_token').then((lToken) => {
        console.log('thoughtOftheDayApi value is111==', lToken);
        this.login_token = lToken;
        this.storage.get('employee_type').then((user) => {
          console.log('thoughtOftheDayApi value is111==', user);
          this.user_Type = user;
          
        })
      })
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


albumdetail() {
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

        // "client_id":this.apiServices.clientId,
        // "employee_id":this.employeeId,
        // "device":this.apiServices.device,
        // "device_id":this.deviceId,
        // "app_version":this.apiServices.appVersion,
        // "val":'0',
        // "album_id":this.albumid,
        // "flag":"11",
        // "post_id":this.postid,
        // "first_post_id":this.postid


        "client_id":this.apiServices.clientId,
        "employee_id":this.employeeId,
        "device":this.apiServices.device,
        "device_id":this.deviceId,
        "app_version":this.apiServices.appVersion,
        "val":'0',
        "album_id":this.albumid,
        "flag":"11",
        "post_id":'',
        "first_post_id":this.postid



      };
      this.apiServices.empAlbumdetail(apiKey, this.login_token)
        .subscribe((res) => {
          this.loading.dismiss();
          console.log('', res);
    
          if (res.success == 1) {
              // this.albumallData = res.data[0];
              // this.albumimg=this.albumallData.image;
              // this.title=this.albumallData.title;
              // this.totallike=parseInt(this.albumallData.like_count);
              // this.totalcomment=parseInt(this.albumallData.comment_count);
              // this.like_status=parseInt(this.albumallData.like_status);
              this.albumallData = res.data;
              // this.activeSliderIndexDetect=
              this.album_title=this.albumallData[0].album_title;
              this.analyticApi(this.albumallData[0].auto_id);
              // this.ionSlideDidChange();

              console.log('albumallDataalert', this.albumallData);
 
          } else {
           
              // this.msg=res.message
         
            this.apiMessage(res.message);

          }

        }, (err) => {
          console.log('err== ', err);
          this.apiMessage(err);

        });

    });
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad AlbumImageSliderPage');
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
    console.log('this.postid',this.postid);
    this.storage.get('employeeId').then(data => {
      this.employeeId = data;
      console.log(' employeeId== ', this.employeeId);
    });
    this.storage.get('deviceId').then((data) => {
      console.log('showOnBoard value is111==', data);
      this.deviceId = data;
    })
      // console.log('this.previousePagedata.auto_id==', this.previousePagedata.auto_id);
      console.log('this.postid1234',this.postid);
      this.storage.get('login_token').then((data) => {
        console.log('AlbumDetails value is111==', data);
        this.login_token = data;
        let apiKey = {
       
          "client_id": this.apiServices.clientId,
          "employee_id":this.employeeId,
          "device":this.apiServices.device,
          "device_id":this.deviceId,
          "app_version":this.apiServices.appVersion,
          "flag":"11",
          "post_id":this.postid,
          "status":this.like_status
        }
        console.log('AlbumDetails api apiKey==', apiKey);
        this.apiServices.createlike(apiKey, this.login_token).subscribe(result => {
          console.log('AlbumDetails api res==', result);
  
  
          if (result.success == 1) {
            this.apiMessage(result.message);
            console.log('album emp list==', result.data);
         
          } else {
          
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
        console.log('this.postid1234',this.postid);
        this.storage.get('login_token').then((data) => {
          console.log('AlbumDetails value is111==', data);
          this.login_token = data;
          let apiKey = {
        
            "client_id": this.apiServices.clientId,
            "employee_id":this.employeeId,
            "device":this.apiServices.device,
            "device_id":this.deviceId,
            "app_version":this.apiServices.appVersion,
            "flag":"11",
            "post_id":this.postid,
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

      goforcomment(){
        this.displayBox=true;
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
          "flag":"11",
          "post_id":this.postid,
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
 
  apiMessage(message) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  showAllComment(commnentData){
    this.navCtrl.push('ShowAllCommentPage',{'data':commnentData,'flag':'11'})
  }

  gotolikelist(likecount,aData){
    let flag='11'
    if(likecount>0){
      if(this.pushkey==1){
            }
            else{
              this.pushkey=0;
            }

      this.navCtrl.push('LikeUsersListPage',{'data':aData,'flag':'11','pushkey':this.pushkey});
    }
    
  }

  presentImage(myImage) {
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();
    // setTimeout(() => imageViewer.dismiss(), 30000);
    imageViewer.onDidDismiss(() => console.log('Viewer dismissed'));
  }


  likeUnlikeFun(data, index){
    this.storage.get('deviceId').then((data) => {
      console.log('showOnBoard value is111==', data);
      this.deviceId = data;
    })
    console.log('post==', data);
    console.log('post==', data.like_status);
  if(data.like_status==0 || data.like_status=='0'){
    this.albumallData[index].like_status=1;
    let increaseLike=parseInt(data.like_count)+1;
    this.albumallData[index].like_count=increaseLike;
    this.doLikeUnlikeFun(increaseLike,this.albumallData[index].auto_id,1);
  }else{
    this.albumallData[index].like_status=0;
    let decreaseLike=parseInt(data.like_count)-1;
    this.albumallData[index].like_count=decreaseLike;
    this.doLikeUnlikeFun(decreaseLike,this.albumallData[index].auto_id,0);
  }
  
  }
  doLikeUnlikeFun(totalLike,postId,status){

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
        "flag":"11",
        "post_id":postId,
        "status":status
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
  // gotolikelist(){
  //   if(this.totallike>0){

  //     if(this.pushkey==1){
  //     }
  //     else{
  //       this.pushkey=0;
  //     }
 
  //     this.navCtrl.push('LikeUsersListPage',{'data':this.contestdetail,'flag':this.contestdetail.flag,'pushkey':this.pushkey});
  //   }
    
  // }

  ionSlideDidChange() {
    console.log('this is ionSlideDidChange2');
    this.activeSliderIndexDetect = this.slides.getActiveIndex();
    console.log('this is ionSlideDidChange2', this.activeSliderIndexDetect);


    // let currentIndex = this.slides.getActiveIndex();
    // console.log('Current index is', currentIndex);
    console.log('this is ionSlideDidCha', this.albumallData[this.activeSliderIndexDetect].auto_id);
    this.index=this.activeSliderIndexDetect;
    let postId = this.albumallData[this.activeSliderIndexDetect].auto_id;
    this.analyticApi(postId);
  }


  analyticApi(postId){
    this.storage.get('employee_type').then((user) => {
      console.log('thoughtOftheDayApi value is111==', user);
      this.user_Type = user;
      
    })

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
        "client_id": this.apiServices.clientId,
        "employee_id": this.employeeId,
        "device": this.apiServices.device,
        "device_id": this.deviceId,
        "app_version": this.apiServices.appVersion,
        "track_flag": "11", 
        "type" : "detail",
        "user_type" : this.user_Type,
        // "post_id" : this.getAutoId(),
        "post_id" : postId
      };
      this.apiServices.analyticApi(apiKey,this.login_token).subscribe(res=>{
        console.log(res);
      })
    });
  }

  // getAutoId(){
  //   let postId = this.albumallData[this.activeSliderIndexDetect].auto_id;
  //   return postId;
  // }



}

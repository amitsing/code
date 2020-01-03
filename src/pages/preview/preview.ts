import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,LoadingController,MenuController  } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-preview',
  templateUrl: 'preview.html',
})
export class PreviewPage {
  fav_cuisine: any;
  fav_place: any;
  imagelink: any;
  emptype: any;
  mobile_number: any;
  native_place: any;
  pasttime: any;
  employeeId: any;
  deviceId: any;
  login_token: any;
  alldata: any;
  loading:any;
  oldData:any;
  postid:any;
  device:any;
  deviceid:any;
  version:any;
  flag:any;
  prevData:any;
  clientid:any;
  employeeid:any;
  previousData:any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,private menu: MenuController,
              public loadingCtrl: LoadingController,
              private toastCtrl:  ToastController,
              private apiServices: ApiServiceProvider,
              private storage: Storage
            ) {
              this.alldata=this.navParams.get('alldata');
              this.pasttime=this.navParams.get('pasttime');
              this.native_place=this.navParams.get('native_place');
              this.mobile_number=this.navParams.get('mobile_number');
              console.log('this.alldata',this.alldata);
              this.fav_place=this.alldata.fav_place;
              this.fav_cuisine=this.alldata.fav_cuisine;
              // this.pasttime=this.alldata.pasttime;
              // console.log('this.pasttime',this.pasttime);
              this.storage.get('showOnBoard').then(data=>{
                this.emptype=data;
                console.log('showOnBoard value is==',data );
              });
              this.imagelink=this.navParams.get('imagelink');
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


              // submitAboard(){           
              //   this.navCtrl.setRoot('TabsPage');
              // }
              editPage(){
                this.navCtrl.pop();
              }
  //   this.previousData= this.navParams.data;
  //   this.oldData= this.previousData.olddata;
  //   this.prevData = this.previousData.resData;
  //   this.clientid= this.previousData.clientid;
  //   this.employeeid= this.previousData.employeeid
    
  //   console.log('Preview/Previous Data:', this.previousData);
  //   console.log('OldData', this.oldData);
  // }

  //   //Common Loader
  //   commonLoader(){
  //     this.loading= this.loadingCtrl.create({
  //        enableBackdropDismiss:true,
  //        spinner: 'ios-small',
  //        content: 'Loading data...'
  //      });
  //      this.loading.present();
  //    }

  //   //Toast Function:
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

  

  // goBackEdit(){
  //   this.navCtrl.pop();
  // }

  // submitAboard(){
  //   let user={
  //     "clientid":this.clientid,
  //     "employeeId":this.employeeid,
  //     "experience":this.oldData.totalExperience,
  //     "preComp":this.oldData.previousCompany,
  //     "preDesig":this.oldData.previousDestignation,
  //     "education":this.oldData.highestEducation,
  //     "food":this.oldData.favFood,
  //     "holiday":this.oldData.favHoliday,
  //     "hobby":this.oldData.myHobby,
  //     "senior":this.oldData.senior

  //   }

  //   console.log('Submit Aboard Request:', user);
  //   this.commonLoader();
  //   this.apiService.SubmitAboardProvider(user)
  //       .subscribe((res)=>{
  //         if(res.success==1){
  //           this.postid = res.postid;
  //           this.flag = res.flag;
  //           this.loading.dismiss();
  //           console.log('Success1:', res);
  //           this.storage.set('clientid',this.clientid);
  //           this.storage.set('employeeid', this.employeeid);
  //           let message= "You've been successfully registered."
  //           this.presentToast(message)
  //           this.navCtrl.setRoot('');
  //           this.sendPush();

  //         }else{
  //           this.loading.dismiss();
  //           console.log('Success0:', res);
  //         }
  //       },(err)=>{
  //         this.loading.dismiss();
  //         console.log('Error:', err)
  //       })
  // }

  // sendPush(){
  //   this.storage.get('device').then((val) => {this.device = val;});
  //   this.storage.get('deviceId').then((val)=> {this.deviceid= val});
  //   this.storage.get('appVersion').then((val)=> {this.version= val
  //   let user = {
  //     "clientId":this.clientid,
  //     "employeeId":this.employeeid,
  //     "device":this.device,
  //     "deviceId":this.deviceid,
  //     "appVersion":this.version,
  //     "postid":this.postid,
  //     "flag":this.flag,
  //     "action":"create"
  //   }

  //   this.apiService.sendPushFTL(user).subscribe((res)=>{
  //     if(res.success==1){
  //       console.log('Success1:', res);
  //     }else{
  //       console.log('Success0:', res);
  //     }
  //   },(err)=>{
  //     console.log('Error:', err);
  //   })

  // });
  // }

  submitAboard() {
    this.commonLoader();
    this.storage.get('showOnBoard').then(data=>{
      this.emptype=data;
      console.log('showOnBoard value is==',data );
    });
    this.storage.get('login_token').then((data) => {
      console.log('showOnBoard value is111==', data);
      this.login_token = data;
    })
    this.storage.get('deviceId').then(data => {
      this.deviceId = data;
      console.log(' deviceId== ', this.deviceId);
    });
    this.storage.get('employeeId').then((data) => {this.employeeId=data; 
    let user= {
  
      "client_id": this.apiServices.clientId,
      "employee_id":this.employeeId,
      "device":this.apiServices.device,
      "device_id":this.deviceId,
      "app_version":this.apiServices.appVersion,
      "fav_past_time":this.pasttime,
      "fav_sports":'',
      "fav_cuisine":this.alldata.fav_cuisine,
      "role_model":'',
      "fav_quote":'',
      "fav_place":this.alldata.fav_place,
      "native_place":'',
      "mobile_number":'',
      "special_achievement":'',
      "sentence":this.alldata.sentence,
      "user_type":this.emptype
    }
    console.log('Preview Request:', user);
    this.apiServices.submitonboard(user,this.login_token)
        .subscribe((res)=>{
          this.loading.dismiss();
          if(res.success==1){
        

       if(this.emptype=='Employee'){
        this.navCtrl.setRoot('CatgoriesPage');
         }
        if(this.emptype=='Guest'){
  
          this.navCtrl.setRoot('WalkthroughScreenPage');
             }

          
            // this.navCtrl.setRoot('WalkthroughScreenPage');
            // this.navCtrl.setRoot('TabsPage');
            this.storage.set('welcome_aboard_applicable',0).then(res=>{
              //as dicuss with kailash and neeraj
              console.log('welcomeOnboard key==', res);
            });
            this.sendPush();
          }else{
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


  ionViewWillEnter(){
    this.menu.swipeEnable(false);
}

sendPush(){
  let apikey = {
    "employee_id" : this.employeeId,
  }
  this.apiServices.previewPushMailer(apikey,this.login_token).subscribe(res=>{
    console.log("preview push" ,res);
  })
}

}

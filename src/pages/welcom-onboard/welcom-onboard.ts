// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams,ToastController, ModalController, LoadingController } from 'ionic-angular';
// import { ApiServiceProvider } from '../../providers/api-service/api-service';
// import { Storage } from '@ionic/storage';


// @IonicPage()
// @Component({
//   selector: 'page-welcom-onboard',
//   templateUrl: 'welcom-onboard.html',
// })
// export class WelcomOnboardPage {
//   employeeId:any;
//   deviceId:any;
//   allData:any;
//   joinnerList:any;
//   skeltonData:any;
//   constructor(public toastCtrl: ToastController,private storage:Storage,private apiServices:ApiServiceProvider,public navCtrl: NavController, public navParams: NavParams) {
//   this.skeltonData=[{
//     about: "<p>I'm here</p>",
//     auto_id: "1",
//     employee_id: "2",
//     fav_location: "Manali",
//     food: "Chienese",
//     hobby: "1",
//     name: "Sanjay Pradhan",
//     user_image: ""
//   },{
//     about: "<p>I'm here</p>",
//     auto_id: "1",
//     employee_id: "2",
//     fav_location: "Manali",
//     food: "Chienese",
//     hobby: "1",
//     name: "Sanjay Pradhan",
//     user_image: ""
//   },{
//     about: "<p>I'm here</p>",
//     auto_id: "1",
//     employee_id: "2",
//     fav_location: "Manali",
//     food: "Chienese",
//     hobby: "1",
//     name: "Sanjay Pradhan",
//     user_image: ""
//   },{
//     about: "<p>I'm here</p>",
//     auto_id: "1",
//     employee_id: "2",
//     fav_location: "Manali",
//     food: "Chienese",
//     hobby: "1",
//     name: "Sanjay Pradhan",
//     user_image: ""
//   },{
//     about: "<p>I'm here</p>",
//     auto_id: "1",
//     employee_id: "2",
//     fav_location: "Manali",
//     food: "Chienese",
//     hobby: "1",
//     name: "Sanjay Pradhan",
//     user_image: ""
//   },

// ]
  
//   }

//   ionViewDidLoad() {
//     console.log('ionViewDidLoad WelcomOnboardPage');
//     this.storage.get('employeeId').then(data=>{
//       this.employeeId=data;
//       console.log(' employeeId== ',this.employeeId);
//      });
   
//      this.storage.get('deviceId').then(data=>{
//       this.deviceId=data;
//       console.log(' deviceId== ',this.deviceId);
//       this.getJoinnerList();
//      });
   
//   }

//   getJoinnerList(){
//     let apiKey={
//       "clientId":this.apiServices.clientId,
//       "employeeId":this.employeeId,
//       "device":this.apiServices.device,
//       "deviceId":this.deviceId,
//       "appVersion":this.apiServices.appVersion
  
//     };
//     console.log('welcomeOnBoard api key==', apiKey);
//     this.apiServices.welcomeOnBoard(apiKey).then((result) => { 
//     console.log('welcomeOnBoard response== ',result); 
//     this.allData=result;
//     if(this.allData.success==1){
//       let userData=this.allData.data;
//       setTimeout(() => {
//       this.joinnerList=userData;
//       console.log('joinners are== ', this.joinnerList);
//     }, 1000);
//     }else{
//       this.apiMessage(this.allData.message);
//       this.navCtrl.pop();
//     }
//   })

//   }

// apiMessage(message) {
//   const toast = this.toastCtrl.create({
//     message: message,
//     duration: 3000
//   });
//   toast.present();
// }

// seeDetails(data){
//   this.navCtrl.push('WelcomeOnboardDetailsPage',{'data':data})
// }


// }
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,ToastController } from 'ionic-angular';

import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the WelcomOnboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcom-onboard',
  templateUrl: 'welcom-onboard.html',
})
export class WelcomOnboardPage {
  msg: any;
  emptype: any;
  employeeId:any;
  deviceId:any;
  allData:any;
  joinnerList:any;
  skeltonData:any;
  login_token: any;
  value: any='0';
  myInfiniteScroll:any;
  infiniteScrollCalled:boolean=false;
  hideInfiniteScroll:boolean=false;
  constructor(private storage:Storage,private alertCtrl: AlertController,
    private apiServices:ApiServiceProvider,public toastCtrl: ToastController,
    public navCtrl: NavController, public navParams: NavParams) {
      this.storage.get('showOnBoard').then(data=>{
        this.emptype=data;
        console.log('showOnBoard value is==',data );
      });
  this.skeltonData=[{
    about: "<p>I'm here</p>",
    auto_id: "1",
    employee_id: "2",
    fav_location: "Manali",
    food: "Chienese",
    hobby: "1",
    name: "Sanjay Pradhan",
    user_image: ""
  },{
    about: "<p>I'm here</p>",
    auto_id: "1",
    employee_id: "2",
    fav_location: "Manali",
    food: "Chienese",
    hobby: "1",
    name: "Sanjay Pradhan",
    user_image: ""
  },{
    about: "<p>I'm here</p>",
    auto_id: "1",
    employee_id: "2",
    fav_location: "Manali",
    food: "Chienese",
    hobby: "1",
    name: "Sanjay Pradhan",
    user_image: ""
  },{
    about: "<p>I'm here</p>",
    auto_id: "1",
    employee_id: "2",
    fav_location: "Manali",
    food: "Chienese",
    hobby: "1",
    name: "Sanjay Pradhan",
    user_image: ""
  },{
    about: "<p>I'm here</p>",
    auto_id: "1",
    employee_id: "2",
    fav_location: "Manali",
    food: "Chienese",
    hobby: "1",
    name: "Sanjay Pradhan",
    user_image: ""
  },

];
this.storage.get('login_token').then((data) => {
  console.log('showOnBoard value is111==', data);
  this.login_token = data;
})

  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomOnboardPage');
    this.storage.get('employeeId').then(data=>{
      this.employeeId=data;
      console.log(' employeeId== ',this.employeeId);
     });
   
     this.storage.get('deviceId').then(data=>{
      this.deviceId=data;
      console.log(' deviceId== ',this.deviceId);
      this.getJoinnerList();
     });
   
  }

  getJoinnerList(){
    this.storage.get('showOnBoard').then(data=>{
      this.emptype=data;
      console.log('showOnBoard value is==',data );
    });
    this.storage.get('deviceId').then(data => {
      this.deviceId = data;
      let apiKey = {
        "client_id":this.apiServices.clientId,
        "employee_id":this.employeeId,
        "device":this.apiServices.device,
        "device_id":this.deviceId,
        "app_version":this.apiServices.appVersion,
        "user_type": this.emptype,
        "value":this.value

        };
      this.apiServices.welcomeOnBoard(apiKey, this.login_token)
      .subscribe((res) => {
        console.log('joinnerList res==', res);
        if(res.success==1){

          if(this.joinnerList==undefined){
            this.joinnerList = res.data;
          }else{
            this.joinnerList= this.joinnerList.concat(res.data);
            console.log('new album list==',res.data );
          }
              if(this.infiniteScrollCalled==true){
                this.myInfiniteScroll.complete();
                this.infiniteScrollCalled=false;
              }
          // console.log('this.formdata==',this.allData);
        
          this.hideInfiniteScroll=false;

          // if(this.joinnerList==undefined){
          //   this.joinnerList=res.data;
          // }else{
          //   this.joinnerList.concat(res.data);
          //   console.log('new data== ', this.joinnerList);
          // }
            


        }else{

          if(this.value=='0'){
            this.msg=res.message;
    let alert = this.alertCtrl.create({
           
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

          this.hideInfiniteScroll=true;
          // this.apiMessage(res.message);

      



        }


      })

    })

    


  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
  this.myInfiniteScroll=infiniteScroll;
    setTimeout(() => {
      this.infiniteScrollCalled=true;
      this.value=this.joinnerList.length;
      this.getJoinnerList();
      console.log('Async operation has ended');
      // this.myInfiniteScroll.complete();
    }, 500);
  }


  apiMessage(message) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

seeDetails(data){
  this.navCtrl.push('WelcomeOnboardDetailsPage',{'data':data})
}


}

import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the LeaderdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-leaderdetail',
  templateUrl: 'leaderdetail.html',
})
export class LeaderdetailPage {
  deviceId: any;
  employeeId: any;
  allData:any;
  leaderdata:any;
  previousdata: any;
  name: any;
  designation: any;
  iserimg: any;
  userimage: any;
  about: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController,private storage:Storage,private apiServices:ApiServiceProvider) {
    this.previousdata=this.navParams.get('data');
    console.log('this.previousdata',this.previousdata);
    this.name=this.previousdata.name;
    this.designation=this.previousdata.designation;
    this.userimage=this.previousdata.image;
    this.about=this.previousdata.about;
    // this.leaderlist()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeaderdetailPage');
  }

  // leaderlist() { 

  //   // this.btnText='Please wait...';
  //   this.storage.get('deviceId').then(data => {
  //     this.deviceId = data;
  //     console.log('login deviceId== ', this.deviceId)
  //   })
  //   this.storage.get('employeeId').then(data => {
  //     this.employeeId = data;})


  //   this.storage.get('deviceId').then(data=>{
  //     this.deviceId=data;
  //     console.log(' deviceId== ',this.deviceId);
     
  //   let apiKey={
  

  //     "clientId":this.apiServices.clientId,
  //     "employeeId":this.employeeId,
  //     "device":this.apiServices.device,
  //     "deviceId":this.deviceId,
  //     "appVersion":this.apiServices.appVersion,
  //     "leaderId":this.previousdata

  //   };
  //   console.log('login api key==', apiKey);
    
  //   this.apiServices.leaders_list(apiKey).then((result) => { 
  //   console.log(' leader data response== ',result); 
  //   this.allData=result;
  //   if(this.allData.success==1){
  //   this.leaderdata=this.allData.data;
  //   }else{
  //     // this.btnText='Submit';
  
  //     this.apiMessage(this.allData.message);
  //   }
    
  //   }, (err) => { 
  //   console.log('optionalUpdate err== ',err); 
  //   this.apiMessage(err);
  
  //   }); 

  // });
  //   }

    apiMessage(message) {
      const toast = this.toastCtrl.create({
        message: message,
        duration: 3000
      });
      toast.present();
    }


}

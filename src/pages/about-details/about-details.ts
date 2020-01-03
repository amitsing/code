import { Component } from '@angular/core';
// import { PhotoViewer } from '@ionic-native/photo-viewer';
import { ImageViewerController } from 'ionic-img-viewer';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the AboutDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name:'AboutDetailsPage'})
@Component({
  selector: 'page-about-details',
  templateUrl: 'about-details.html',
})
export class AboutDetailsPage {
  _imageViewerCtrl: ImageViewerController;
  previousePageData:any;
  deviceId: any;
  employeeId: any;
  allData: any;
  leaderdata: any;
  show: number=0;
  autoid: any;
  login_token: any;
  employee_type:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public toastCtrl: ToastController,private storage:Storage,private apiServices:ApiServiceProvider,
    imageViewerCtrl: ImageViewerController) {
    this._imageViewerCtrl = imageViewerCtrl;
    this.previousePageData=this.navParams.get('data');
    console.log('*****==', this.previousePageData);

    this.storage.get('login_token').then((data) => { this.login_token = data; });
    this.storage.get('employeeId').then((data) => { this.employeeId = data; });
    this.storage.get('employee_type').then((data) => { this.employee_type = data; });
    
    if(this.previousePageData.url=='leadership'){
      this.show=1
      this.leaderlist();
    }


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutDetailsPage');
  }


  leaderlist() { 
    this.storage.get('employeeId').then(data => {this.employeeId = data;})
    this.storage.get('deviceId').then(data=>{
      this.deviceId=data;
      console.log(' deviceId== ',this.deviceId);
     
    let apiKey={

      "client_id":this.apiServices.clientId,
      "employee_id":this.employeeId,
      "device":this.apiServices.device,
      "device_id":this.deviceId,
      "app_version":this.apiServices.appVersion,
      'user_type':this.employee_type

    };
    console.log('login api key==', apiKey);
    this.apiServices.aboutLeaders_list(apiKey, this.login_token).subscribe(result => {
    console.log(' leader data response== ',result); 
    this.allData=result;
    if(this.allData.success==1){
    this.leaderdata=this.allData.data;
    }else{
      // this.btnText='Submit';
      this.apiMessage(this.allData.message);
      if(this.leaderdata==undefined){
        this.leaderdata=[];
      }
    }
    
    }, (err) => { 
    console.log('optionalUpdate err== ',err); 
    this.apiMessage(err);
  
    }); 

  });
    }

    apiMessage(message) {
      const toast = this.toastCtrl.create({
        message: message,
        duration: 3000
      });
      toast.present();
    }

    gotodetail(data){
      this.navCtrl.push('LeaderdetailPage',{'data':data})
//       this.autoid=this.leaderdata[id].auto_id;
//       console.log("id",this.autoid);
// this.navCtrl.push('LeaderdetailPage',{'autoid':this.autoid,'name':this.leaderdata[id].name,
// 'designation':this.leaderdata[id].designation,'userimg':this.leaderdata[id].image});
    }

}

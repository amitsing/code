import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-about-evalueserve',
  templateUrl: 'about-evalueserve.html',
})
export class AboutEvalueservePage {
  login_token: any;employee_type:any;
  employeeId: any;
  deviceId: any;
  aboutEvalueserve: any;
  bannerImage: any;
  constructor(private storage: Storage,private alertCtrl:AlertController,
    private apiServices: ApiServiceProvider,
    public navCtrl: NavController, public navParams: NavParams) {
    this.storage.get('login_token').then((data) => { this.login_token = data; });

    
    this.storage.get('employee_type').then((data) => { this.employee_type = data; });
    
    this.storage.get('employeeId').then((data) => { this.employeeId = data; });
    this.storage.get('deviceId').then(data => {
      this.deviceId = data;
      console.log('login deviceId== ', this.deviceId);
      this.getList();
    });
  }

  IntroEvalueserve(data){
    this.navCtrl.push('AboutDetailsPage',{'data':data});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutEvalueservePage');
    
  }

  getList(){

    this.storage.get('employee_type').then((data) => { this.employee_type = data; });
    this.storage.get('login_token').then((data) => {
      this.login_token = data;
      let apiKey = {
        "client_id": this.apiServices.clientId,
        "employee_id": this.employeeId,
        "device": this.apiServices.device,
        "device_id": this.deviceId,
        "user_type":this.employee_type,
        "app_version": this.apiServices.appVersion,
      }
      this.apiServices.aboutEvalList(apiKey, this.login_token).subscribe(result => {
        console.log('aboutEvalueserve api res==', result);
        
        if (result.success == 1) {
          this.bannerImage=result.banner_image;
          this.aboutEvalueserve=result.data;
        }else {
          this.presentAlert(result.message);
        }


      },err=>{
        this.presentAlert(err);
      })

    })
  }
  presentAlert(message) {
    let alert = this.alertCtrl.create({
      subTitle: message,
      buttons: [{
        text: 'Ok',
        role: 'ok',
        handler: () => {
          console.log('Cancel clicked');
          this.navCtrl.pop();
        }
      }]
    });
    alert.present();
  }

  
}

import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IonicPage, NavController, NavParams,ToastController,AlertController } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import { ActionSheetController } from 'ionic-angular/components/action-sheet/action-sheet-controller';


@IonicPage()
@Component({
  selector: 'page-bothauthorty',
  templateUrl: 'bothauthorty.html',
})
export class BothauthortyPage {
  deviceId: any;
  login_token: any;
  employeeId: any;
  authirity:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private storage:Storage,
    private apiServices:ApiServiceProvider,
    public toastCtrl: ToastController,public actionSheetCtrl: ActionSheetController) {
    this.authirity='nomination';
    // authority(){}
  }

  segmentChanged(event) {
    if(event.value == 'failedVoucher'){
      // alert(event.value)
    
    }
    
        if (event.value == 'bookhistory') {
          // alert(event.value)
    
          // this.bookuser={
          //   "clientId":this.clientid,
          //   "employeeId":this.employeeId,
          //   "device":this.apiService.device,
          //   "deviceId":this.apiService.deviceId,
          //   "value":"0"
          // }
    
    
    
    
        //  this.ajiha(0)
        }
      }


  
      

  ionViewDidLoad() {
    console.log('ionViewDidLoad BothauthortyPage');
  }

}

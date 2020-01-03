import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Device } from '@ionic-native/device';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the HrpolicyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hrpolicy',
  templateUrl: 'hrpolicy.html',
})
export class HrpolicyPage {
  login_token: any;


  ionViewDidLoad() {
    console.log('ionViewDidLoad HrpolicyPage');
  }
  employeeId: any;
  deviceId: any;
  //Variables:
  apiSuccess:any;
  HRPolicyData:any;
  clientid:any;
  message0:any;
  loading:any;
  user:any;
  value=0;


  //Constructor:
  constructor(private apiServices: ApiServiceProvider,
              private loadingCtrl: LoadingController,
              public navCtrl: NavController, 
              public navParams: NavParams,private alertCtrl:AlertController,
              private storage: Storage,
              private device: Device) {
                this.storage.get('deviceId').then((val) =>{this.deviceId= val;
                  this.storage.get('employeeId').then((val1) =>{this.employeeId= val1;
                    this.storage.get('login_token').then((data) => {
                       this.login_token = data;
                       this.storage.get('login_token').then((data1) => {
                          console.log('showOnBoard value is111==', data1);
                           this.login_token = data;
                          this.user= {
                          "client_id":this.apiServices.clientId,
                          "employee_id":this.employeeId,
                          "device":this.apiServices.device,
                          "device_id":this.deviceId,
                          "app_version":this.apiServices.appVersion,
                          "value":"0"
                          }
                        console.log('HRPolicy Data Request:', this.user);
                        this.getHRPolicyData(this.user,this.login_token);
                  })
                });
              });
            });
          }
               
              

  //Common Loader:
  commonLoader(){
    this.loading= this.loadingCtrl.create({
      enableBackdropDismiss:true,
      spinner: 'ios-small',
      content: 'Loading data...'
    });
    this.loading.present();
  }

  getHRPolicyData(userload,token){
    this.commonLoader();
    this.apiServices.HrPolicyHomeProvider(userload,token)
        .subscribe((res)=>{
          this.apiSuccess= res.success
        console.log('HRPolicy Data Response:', res);
        if(res.success==1){
          this.loading.dismiss();
          this.HRPolicyData= res.data;
        }else if(res.success==0){
          const alert = this.alertCtrl.create({
            subTitle:res.message || res.msg,
            buttons: [ {
              text: 'Ok',
              handler: data => {
                console.log('Cancel clicked');
                this.navCtrl.pop();
              }
            }]
          });
          alert.present();
          this.message0= res.message;
          this.loading.dismiss();
          console.log('In Success0:', res);
        }
        }, (err)=>{
          this.loading.dismiss();
          console.log('Error:', err)
        })
  }

  //Go To HR Details:
  goToHRDetails(policy){
    this.navCtrl.push('HrpolicydetailsPage',{'Policy':policy});
  }

}

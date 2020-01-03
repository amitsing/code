import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, LoadingController, Platform, MenuController } from 'ionic-angular';
import { ApiServiceProvider } from '../../../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import { InAppBrowser, InAppBrowserEvent, InAppBrowserOptions } from '@ionic-native/in-app-browser';



@IonicPage()
@Component({
  selector: 'page-globalpolicylist',
  templateUrl: 'globalpolicylist.html',
})
export class GlobalpolicylistPage {
  title: any;
  form_status: any;
  data: any;
  alldata: any;
  login_token: any;
  form_id: any;
  employeeId: any;
  deviceId: any;
  loading:any;
  constructor(private alertCtrl: AlertController, private platform: Platform, private menu: MenuController, public loadingCtrl: LoadingController,
    public toastCtrl: ToastController, private storage: Storage, private apiServices: ApiServiceProvider,
    public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser) {
      this.data=this.navParams.get('data');
      this.form_id = this.data.form_id;
      this.title=this.data.form_name;
      this.form_status=this.data.form_status;
      this.storage.get('login_token').then((data) => { this.login_token = data; });
      this.storage.get('employeeId').then((data) => { this.employeeId = data; });
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GlobalpolicylistPage');
  }
  ionViewWillEnter(){
    this.policy_list();

  }

  policy_list() {
 
    this.commonLoader();
    this.storage.get('deviceId').then(data => {
      this.deviceId = data;
      let apiKey = {
        "client_id": this.apiServices.clientId,
        "employee_id": this.employeeId,
        "device": this.apiServices.device,
        "device_id": this.deviceId,
        "app_version": this.apiServices.appVersion,
        "policy_id": this.form_id,
      };
      this.apiServices.globalpolicy_list(apiKey, this.login_token).subscribe(res => {
        console.log('tnc res==', res);
        this.loading.dismiss();
        if (res.success == 1) {
         this.alldata=res.data;
          console.log('succ');
          // this.navCtrl.pop();
          // console.log('succ1', this.allData[0]);

        } else {
          this.navCtrl.pop();
          this.apiMessage(res.message);
        }

      }, (err) => {
        this.loading.dismiss();
        console.log('err== ', err);
        this.apiMessage(err);

      });

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
  apiMessage(message) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }
  seeDetails(data){

if(data.index_status=='locked'){

}
 else{
  this.navCtrl.push('GlobalpolicydetailPage',{'data':data,'form_id':this.form_id});
 }   
   
  }

}

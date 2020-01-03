import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController,LoadingController, Platform,MenuController } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import { InAppBrowser,InAppBrowserEvent,InAppBrowserOptions } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-formsinstruction',
  templateUrl: 'formsinstruction.html',
})
export class FormsinstructionPage {
  employeeId: any;
  login_token: any;
  deviceId: any;
  formid: any;
  url: any;
  title: any;
  instruction: any;
  loading:any;
  constructor(private alertCtrl: AlertController, private platform: Platform,private menu: MenuController,public loadingCtrl: LoadingController, 
    public toastCtrl: ToastController, private storage: Storage, private apiServices: ApiServiceProvider,
    public navCtrl: NavController, public navParams: NavParams,private iab: InAppBrowser) {
    this.title=this.navParams.get('title');
    this.formid=this.navParams.get('formid');
    this.url=this.navParams.get('url');
    console.log(' url== ',  this.url);
    this.title=this.navParams.get('title');
    this.instruction=this.navParams.get('instruction');
    console.log(' this.instruction== ',  this.instruction);
    this.storage.get('login_token').then((data) => 
    { this.login_token = data; });
    this.storage.get('employeeId').then((data) => 
    { this.employeeId = data; });
  }
  gotoserverpage(){
    this.navCtrl.push('BackgroundcheckPage',{'formid':this.formid,'title':this.title});
    // this.navCtrl.push('BackcheckiframePage',{'url':this.url,'title':this.title});
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
  ionViewDidLoad() {
    console.log('ionViewDidLoad OnboardingFormsPage');
    this.gform();
  }
  gform(){
    this.commonLoader();
    this.storage.get('deviceId').then(data => {
      this.deviceId = data;
      //  this.token='Q3owSXo3T05BVVJscHREVCsyeUtqZz09OjoWf4jZSksqJnff2wxdlZ7e'
      let apiKey = {
        "client_id": this.apiServices.clientId,
        "employee_id": this.employeeId,
        "device": this.apiServices.device,
        "device_id": this.deviceId,
        "app_version": this.apiServices.appVersion,
      };
      this.apiServices.generalinformation(apiKey, this.login_token).subscribe(res => {
        console.log('tnc res==', res);
        this.loading.dismiss();
          if (res.success == 1) {
            // this.allData = res.data;
            // this.disagree_message=res.disagree_message;
          
            // this.show_skip=res.show_skip;
            // this.tanckey=this.allData[0].auto_id;
            console.log('succ', res);
            // this.showbutton=true;
          } else {
            this.apiMessage(res.message);
          }

        }, (err) => {
          this.loading.dismiss();
          console.log('err== ', err);
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

}

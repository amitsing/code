import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, Platform,LoadingController } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import { InAppBrowser,InAppBrowserEvent,InAppBrowserOptions } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-tand-cbeforelogin',
  templateUrl: 'tand-cbeforelogin.html',
})
export class TandCbeforeloginPage {
  allData: any;loading:any;
  showbutton:any=false;

  options : InAppBrowserOptions = {
    location : 'no',
    hidden : 'no',
    // clearcache : 'yes',
    // clearsessioncache : 'yes',
    zoom : 'yes',
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no',
    closebuttoncaption : 'Back',
    closebuttoncolor:'#f04141',
    disallowoverscroll : 'no',
    toolbar : 'yes',
    enableViewportScale : 'no',
    allowInlineMediaPlayback : 'no',
    presentationstyle : 'pagesheet',
    fullscreen : 'yes',
    footer:'yes',
    footercolor:'#939399',
   };

  constructor(private alertCtrl: AlertController, private platform: Platform,public loadingCtrl: LoadingController,
    public toastCtrl: ToastController, private storage: Storage, private apiServices: ApiServiceProvider,private iab: InAppBrowser,
    public navCtrl: NavController, public navParams: NavParams) {
      console.log(' TandCbeforeloginPage');
      this.seeTnc();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TandCbeforeloginPage');
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
  seeTnc(){
    this.commonLoader();

    // this.storage.get('deviceId').then(data => {
      // this.deviceId = data;
      //  this.token='Q3owSXo3T05BVVJscHREVCsyeUtqZz09OjoWf4jZSksqJnff2wxdlZ7e'
      let apiKey = {
        "client_id": 'CO-31'
      };
      this.apiServices.tandcbeforelogin(apiKey).subscribe(res => {
        console.log('tnc res==', res);
        this.loading.dismiss();
          if (res.success == 1) {
            this.allData = res.data.term;
            // this.tanckey=this.allData[0].auto_id;
            // console.log('succ', this.allData);
            this.showbutton=true;
          } else {
            this.apiMessage(res.message);
          }

        }, (err) => {
          this.loading.dismiss();
          console.log('err== ', err);
          this.apiMessage(err);

        });

    // });
  }
  apiMessage(message) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  agree(){
    // this.navCtrl.push('TakeMobileNumberPage',{'tanckey':this.tanckey})   
    // this.submitTnc()
    this.storage.set('ontanc',1);
     this.navCtrl.push('ChooseUserPage');

  }
  disagree(){
    let alert = this.alertCtrl.create({
      // title: 'Low battery',
      subTitle: 'Please agree to the Terms of Use to continue.',
      buttons: ['OK']
    });
    alert.present();
  }

  handleClick(event) {
    if (event.target.tagName == "A") {
      this.iab.create(event.target.href, "_system", this.options);
      return false;
    }
  }
}

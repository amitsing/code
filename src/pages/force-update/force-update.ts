import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Platform } from 'ionic-angular';
import { InAppBrowser , InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import {  MenuController } from 'ionic-angular/index';
@IonicPage({name: 'ForceUpdatePage'})
@Component({
  selector: 'page-force-update',
  templateUrl: 'force-update.html',
})
export class ForceUpdatePage {
  link:any;rootPage:any;
  optionalfield:any;
  updateType:any;
  alert121:any;
  public unregisterBackButtonAction: any;
  closeAppPopupShow:number=0;

  options : InAppBrowserOptions = {
    location : 'yes',//Or 'no' 
    hidden : 'no', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls 
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only 
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only 
    toolbar : 'yes', //iOS only 
    enableViewportScale : 'no', //iOS only 
    allowInlineMediaPlayback : 'no',//iOS only 
    presentationstyle : 'pagesheet',//iOS only 
    fullscreen : 'yes',//Windows only    
};



  constructor(public navCtrl: NavController, public navParams: NavParams,
    private apiServices:ApiServiceProvider,private storage:Storage,private menu: MenuController,
     private theInAppBrowser: InAppBrowser,private alertCtrl: AlertController,private platform:Platform,
    ) {
      // alert("ffff");
      this.optionalfield=this.navParams.get('data');
      console.log('data==', this.optionalfield);
      console.log('data12345==', this.optionalfield.optionalupdate);
      this.updateType=this.optionalfield.optionalupdate;
      console.log('updateType==', this.updateType);

      if(this.apiServices.device=='2'){
        this.link=this.navParams.get('data').androidLink;
        console.log('link==', this.link);
      }else{
        this.link=this.navParams.get('data').iosLink;
        console.log('link==', this.link);
      }

      // alert("2222"); 
  }

  public openWithSystemBrowser(){
    let target = "_system";
    this.theInAppBrowser.create(this.link,target,this.options);
}


  continue(){
    this.storage.get('employeeId').then((data) => {
      if (data != null) {
        // this.navCtrl.setRoot('HomePage');
        // this.navCtrl.setRoot('TabsPage');

        this.navCtrl.popToRoot();
      }
      else {
        // this.navCtrl.setRoot('LoginPage');
        this.navCtrl.popToRoot();
      }
    });
  }
  

  ionViewWillEnter(){
    this.menu.swipeEnable(false);
    this.initializeBackButtonCustomHandler();
  }
 //Hardware Back Button

 initializeBackButtonCustomHandler(): void {
  let that = this;
  this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function (event) {
    that.closeAppPopupShow++;
    if(that.closeAppPopupShow%2!=0){
      that.showeAlert();
    }else{
      that.alert121.dismiss();
    }
  }, 101); // Priority 101 will override back button handling (we set in app.component.ts) as it is bigger then priority 100 configured in app.component.ts file */
}


showeAlert() {
  this.alert121 = this.alertCtrl.create({
    title: 'App termination',
    message: 'Do you want to close the app?',
    buttons: [{
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Application exit prevented!');
      }
    }, {
      text: 'Close App',
      handler: () => {
        this.platform.exitApp(); // Close this application
      }
    }]
  });
  this.alert121.present();
}

ionViewWillLeave() {
  this.unregisterBackButtonAction && this.unregisterBackButtonAction();
}


}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController,AlertController, Platform } from 'ionic-angular';

/**
 * Generated class for the MaintainancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maintainance',
  templateUrl: 'maintainance.html',
})
export class MaintainancePage {
  alert121:any; public unregisterBackButtonAction: any;
  constructor(private platform: Platform, public alertCtrl:AlertController, private menu: MenuController,public navCtrl: NavController, public navParams: NavParams) {
    this.menu.swipeEnable(false);
  }

  ionViewDidLoad() {
    this.menu.swipeEnable(false);
    console.log('ionViewDidLoad MaintainancePage');
  }
  // ionViewWillLeave() {
  //    this.menu.swipeEnable(true);
  // }
             
  // ionViewWillEnter() {
  //   this.menu.swipeEnable(false);
  //    console.log('[1] will enter fired');
  // }

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


 initializeBackButtonCustomHandler(): void {
   
   let that=this;
   this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function(event){
       // alert('Prevent Back Button Page Change');
       this.alertonoff= !this.alertonoff;
       if(this.alertonoff==true){
         that.showeAlert();
       }else if(this.alertonoff==false){
         that.alert121.dismiss();
       }
   }, 101); // Priority 101 will override back button handling (we set in app.component.ts) as it is bigger then priority 100 configured in app.component.ts file */
 }

 ionViewWillLeave() {
   this.menu.swipeEnable(true);
   this.unregisterBackButtonAction && this.unregisterBackButtonAction();
 }
            
 ionViewWillEnter() {
   this.menu.swipeEnable(false);
   this.initializeBackButtonCustomHandler();
   console.log('[1] will enter fired');
 }


}

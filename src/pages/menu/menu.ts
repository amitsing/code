import { Component } from '@angular/core';
import { IonicPage,Tabs, NavController, NavParams, ToastController, AlertController, Platform } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  approval_authority: any;
  nominating_authority: any;
  loginemp: any;
  allmenudata: any;
  deviceId: any;
  login_token: any;
  employeeId: any;
  alert121:any;
  tab:Tabs;
  public unregisterBackButtonAction: any;
  closeAppPopupShow:number=0;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private alertCtrl: AlertController, private platform: Platform, 
    public toastCtrl: ToastController, private storage: Storage,
    private apiServices: ApiServiceProvider) {
      this.tab = this.navCtrl.parent;
      this.storage.get('showOnBoard').then((data)=>{
        this.loginemp=data;
        console.log('showOnBoard value is111==',data );
      });
  
      this.menu();
    }

  teamAwesome(){this.navCtrl.push('TeamAwesomePage')}
  madeMyDay(){this.navCtrl.push('MadeMyDayPage')}
  nominationCategory(){this.navCtrl.push('NominationCategoryPage')}
  survey(){
    this.navCtrl.push('SurveylistPage');
    // this.navCtrl.push('ChartPage');
  }
  quiz(){
    this.navCtrl.push('NewquizlistPage');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
  RandR(){
this.navCtrl.push('NominationCategoryPage');    
  }



  menu() {

    this.storage.get('employeeId').then(data => {
      this.employeeId = data;
      console.log(' employeeId== ', this.employeeId);
    });
    this.storage.get('login_token').then((data) => {
      console.log('showOnBoard value is111==', data);
      this.login_token = data;
    })
    this.storage.get('deviceId').then(data => {
      this.deviceId = data;
      let apiKey = {
  
        "client_id":this.apiServices.clientId,
        "employee_id":this.employeeId,
        "device":this.apiServices.device,
        "device_id":this.deviceId,
        "app_version":this.apiServices.appVersion,
        "request":"menu"

      };
      this.apiServices.menu(apiKey, this.login_token)
        .subscribe((res) => {
          console.log('', res);
        
          if (res.success == 1) {
            
            this.allmenudata = res.data;
            this.nominating_authority=res.nominating_authority;
            this.approval_authority=res.approval_authority;
            console.log('this.allmenudata', this.allmenudata);
          
          } else {
            // this.myInfiniteScroll.enable(true);
      
            // this.alldata=[];
            this.apiMessage(res.message);
          }
  
        }, (err) => {
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

  gotodeatil(id,name?: string){
 
    // if(id=='38_D'){
    //   this.navCtrl.push('PendinglistPage',{'authority':2
    // });
    // }

    if(id=='9' || id==9){
      this.navCtrl.push('LeadershiptalkPage'); 
    } 
    else if(id=='26' || id==26){
      this.navCtrl.push('SurveylistPage'); 
    }
    else if(id=='11' || id==11){
      this.navCtrl.push('AlbumListPage',{'loginemp':this.loginemp}); 
    }
    else if(id=='33' || id==33){
      this.navCtrl.push('NewquizlistPage'); 
    }
    else if(id=='7' || id==7){
      this.navCtrl.push('NoticeListPage'); 
    }
    else if(id=='5' || id==5){
      this.navCtrl.push('ThoughtOfTheDayPage'); 
    }
    else if(id=='35' || id==35){
      this.navCtrl.push('QuickBytesPage'); 
    }

    else if(id=='12' || id==12){
      this.navCtrl.push('WelcomOnboardPage'); 
    }

    else if(id=='10' || id==10){
      this.navCtrl.push('BadgeBoardPage'); 
    }
    else if(id=='39' || id==39){
      this.navCtrl.push('AboutEvalueservePage'); 
    }
    else if(id=='42' || id==42){
      this.navCtrl.push('FaqDetailsPage'); 
    }
    else if(id=='31' || id==31){
      this.navCtrl.push('CommunityListPage'); 
    }
    else if(id=='1' || id==1){
      this.navCtrl.push('NewslistPage'); 
    }
    else if(id=='41' || id==41){
      this.navCtrl.push('ContestPage'); 
    }
    else if(id==50 || id=='50'){
      this.navCtrl.push('BehaivourGuidePage',{'data':id});
    }
    else if(id==51 || id=='51'){
      this.navCtrl.push('PhotowallPage',{'data':id});
    }
    else if(id=='38_D'){
      // this.navCtrl.push('ContestPage'); 
      this.navCtrl.push('ChartPage',{'approval_authority':this.approval_authority,'nominating_authority':this.nominating_authority});
    }
    else if(id=='45' || id==45){
      this.navCtrl.push('HrpolicyPage'); 
    } else {
      this.navCtrl.push('DynamicModuleListPage',{'data':id, 'title':name});
    }
  }


//   ionViewWillEnter(){
// alert('1');
//   }

ionViewWillEnter(){
 
  this.initializeBackButtonCustomHandler();
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


//Hardware Back Button

initializeBackButtonCustomHandler(): void {
  let that = this;
  this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function (event) {
    // that.closeAppPopupShow++;
    // if(that.closeAppPopupShow%2!=0){
    //   that.showeAlert();
    // }else{
    //   that.alert121.dismiss();
    // }
    that.navCtrl.parent.select(0);
    // that.tab.select(1);
  }, 101); // Priority 101 will override back button handling (we set in app.component.ts) as it is bigger then priority 100 configured in app.component.ts file */
}

}

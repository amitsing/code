import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-backcheckiframe',
  templateUrl: 'backcheckiframe.html',
})
export class BackcheckiframePage {
  title: any;
  employeeId: any;
  url:any;
  iframeurl:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private storage: Storage,public toastCtrl: ToastController,) {
    this.storage.get('employeeId').then(data => {
      this.employeeId = data;
      console.log(' employeeId== ', this.employeeId);
    });

    this.url=this.navParams.get('url');
    console.log(' url== ',  this.url);
    
    this.title=this.navParams.get('title');
    // this.openiframe()
 
  
  }
  openiframe(){
    // this.storage.get('employeeId').then(data => {
    //   this.employeeId = data;
    //   console.log(' employeeId== ', this.employeeId);
    // });
    // this.iframeurl=this.url+'?'+this.employeeId+''
    // console.log(' this.iframeurl ', this.iframeurl);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BackcheckiframePage');
  }

  apiMessage(message) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }


}

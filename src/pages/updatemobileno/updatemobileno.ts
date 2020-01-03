import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-updatemobileno',
  templateUrl: 'updatemobileno.html',
})
export class UpdatemobilenoPage {
  employee_type: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage) {
    this.storage.get('showOnBoard').then((data) => {
      console.log('showOnBoard value is111==', data);
      this.employee_type = data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdatemobilenoPage');
  }
  dismiss(){
    this.storage.get('showOnBoard').then((data) => {
      console.log('showOnBoard value is111==', data);
      this.employee_type = data;
      if(this.employee_type=='Guest'){
        this.navCtrl.push('JoineeupdatenumberPage');
      }else{
        this.navCtrl.push('ProfilePage');
      }
    });


   
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController} from 'ionic-angular';

/**
 * Generated class for the ProfileDosDontsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-dos-donts',
  templateUrl: 'profile-dos-donts.html',
})
export class ProfileDosDontsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {
  }
  close(){
    let data = 'dismiss'
    this.viewCtrl.dismiss(data);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad InductionUserImageDosDontsPage');
  }

}

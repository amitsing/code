import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the JoineeawardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-joineeaward',
  templateUrl: 'joineeaward.html',
})
export class JoineeawardPage {
  image: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.image=this.navParams.get('imgdetail');
    console.log('ionViewDidLoad JoineeawardPage',this.image);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JoineeawardPage');
  }

}

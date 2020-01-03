import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-declaration-mediclaim',
  templateUrl: 'declaration-mediclaim.html',
})
export class DeclarationMediclaimPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeclarationMediclaimPage');
  }

}

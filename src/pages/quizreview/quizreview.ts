import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the QuizreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quizreview',
  templateUrl: 'quizreview.html',
})
export class QuizreviewPage {

  image:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.image = this.navParams.get('image');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizreviewPage');
  }

}

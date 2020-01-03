import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser,InAppBrowserEvent,InAppBrowserOptions } from '@ionic-native/in-app-browser';
/**
 * Generated class for the SurveyInstructionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-survey-instruction',
  templateUrl: 'survey-instruction.html',
})
export class SurveyInstructionPage {
  previousepageData:any;surveyid:any;

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
  constructor(public navCtrl: NavController,private iab: InAppBrowser,
     public navParams: NavParams) {

  this.previousepageData = this.navParams.get('allData');
  console.log(' previousepageData== ', this.previousepageData);
  this.surveyid = this.navParams.get('surveyid');

  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad SurveyInstructionPage');
  }


  gotoSurveydetails(allData) {
    console.log('allData==', allData);
    this.navCtrl.push('TestsurveyPage', { 'surveyid': allData.auto_id, 'allData':allData  });
  }

  handleClick(event) {
    if (event.target.tagName == "A") {
      this.iab.create(event.target.href, "_system", this.options);
      return false;
    }
  }
}

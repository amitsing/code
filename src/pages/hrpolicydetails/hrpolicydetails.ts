import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HrpolicydetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hrpolicydetails',
  templateUrl: 'hrpolicydetails.html',
})
export class HrpolicydetailsPage {

 //Variables:
 navTitle:any;
 fileName:any;
 policy:any;

 //Constructor:
 constructor(public navCtrl: NavController, 
             public navParams: NavParams) {

   this.policy= this.navParams.get('Policy');
   console.log('Policy From Back Page:',this.policy);
   this.navTitle= this.policy.policy_title;
   this.fileName= this.policy.policy_text;
 }


}

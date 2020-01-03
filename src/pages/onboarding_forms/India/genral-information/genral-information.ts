import { Component ,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-genral-information',
  templateUrl: 'genral-information.html',
})
export class GenralInformationPage {
  pRemark: any;
  @ViewChild(Content)
  content:Content;
  // @ViewChild('pRemark') pRemark;
  isDisabled: boolean;
  PANcheck: string;
  check: boolean;
  addresscheck: any;
  preAddress: any;
  pAddress: any;
  dJoining: any;
  Designation: any;
  Department: any;
  MaritalStatus: any;
  relationship: any;
  fathername: any;
  lname: any;
  mname: any;
  fname: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.addresscheck = true;
    this.relationship = 'Male';
    this.pAddress = 'delhi';
    this.PANcheck = 'yes';
    this.isDisabled = true;
  }
  update(pRemark) {
    console.log('fname', this.fname);
    console.log('mname', this.mname);
    console.log('lname', this.lname);
    console.log('fathername', this.fathername);
    console.log('relationship', this.relationship);
    console.log('MaritalStatus', this.MaritalStatus);
    console.log('Department', this.Department);
    console.log('Designation', this.Designation);
    console.log('dJoining', this.dJoining);
    console.log('pAddress', this.pAddress);
    console.log('preAddress', this.preAddress);
    console.log('addresscheck', this.addresscheck);

    let yOffset = document.getElementById(pRemark).offsetTop;
    this.content.scrollTo(0, yOffset, 3000);

  }
  updatecheck() {
    console.log('Cucumbers new state:' + this.addresscheck);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad GenralInformationPage');
  }
  enable() {
    if (this.isDisabled == true) {
      this.isDisabled = false;
    }
    else {
      this.isDisabled = true;
    }

  }
}

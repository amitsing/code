import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-made-my-day',
  templateUrl: 'made-my-day.html',
})
export class MadeMyDayPage {

  awardHead: any;
  topImage: any;
  peopleRewarded: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.loadData();
  }
  loadData(){
    this.topImage=[
      {image:"../../assets/imgs/madeMyDay/banner.png"}
    ];
    this.awardHead=[
      {
        image:"../../assets/imgs/crown.png",
        points:"250",
        title:"Team Award",
        discription:"Award given to teams who have stood above the rest. It can be given instantly, monthly, quaterly, adhoc for an excellant ongoing performance."
      }
    ];
    this.peopleRewarded=[
      {
        image:"../../assets/imgs/homePage/silverHall/1.png",
        absimg:"../../assets/imgs/homePage/silverHall/badge/MadeMyDay.png",
        title:"Ramnendar Jha",
        subtitle:"Designation"
      },
      {
        image:"../../assets/imgs/homePage/silverHall/2.png",
        absimg:"../../assets/imgs/homePage/silverHall/badge/TeamAwesome.png",
        title:"Mandeep Singh",
        subtitle:"Designation"
      },
      {
        image:"../../assets/imgs/homePage/silverHall/1.png",
        absimg:"../../assets/imgs/homePage/silverHall/badge/MadeMyDay.png",
        title:"Sandeep Sha",
        subtitle:"Designation"
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MadeMyDayPage');
  }

}

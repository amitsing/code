import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController,LoadingController, AlertController, Platform } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the AwardeddetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-awardeddetail',
  templateUrl: 'awardeddetail.html',
})
export class AwardeddetailPage {
  msg: string;
  employee_type: any;
  alluser: any;
  allawardsdata: any;
  awardstype: any;
  nominated_by_image: any;
  nominationstatus: any;
  authority: any;
  arkey: string;
  aleretmsg: string;
  comment: any='';
  alldata: any;
  AandNkey: any;
  nomnistatus: any;
  loginemp: any;
  nomnidesignation: any;
  nominateddate: any;
  nominatedby: any;
  awardsdiscription: any;
  unit_name: any;
  awardsimage: any;
  user: any;
  nominationid: any;
  awardsdetaildata: any;
  deviceId: any;
  login_token: any;
  employeeId: any;
  loading:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private alertCtrl: AlertController, private platform: Platform, 
    public toastCtrl: ToastController, private storage: Storage,public loadingCtrl: LoadingController,
    private apiServices: ApiServiceProvider) {
      // this.AandNkey=this.navParams.get('AandNkey');
      this.alldata=this.navParams.get('alldata');
      this.authority=this.navParams.get('authority');
      this.nominationstatus=this.navParams.get('nominationstatus');
      // console.log('this.nominationstatus',this.nominationstatus);
      if(this.authority==1){
     this.AandNkey='n';
     }
     if(this.authority==2){
      this.AandNkey='a';

      // if(this.nominationstatus=='Pending'){
      //   this.AandNkey='a';
      // }else{
      //   this.AandNkey='n';
      // }
     
             }
      console.log('this.AandNkey',this.AandNkey);
      console.log('this.alldata',this.alldata);
      this.nominationid=this.navParams.get('nominationid');
      console.log('this.nominationid',this.nominationid);
      this.awarddetail();
  }

   //Common Loader:
 commonLoader() {
  this.loading = this.loadingCtrl.create({
    enableBackdropDismiss: true,
    spinner: 'ios-small',
    content: 'Loading data...'
  });
  this.loading.present();
}

  awarddetail() {
    this.commonLoader();
// alert('1');
    this.storage.get('showOnBoard').then((data)=>{
      console.log('showOnBoard value is111==',data );
      this.employee_type=data;
      });
    this.storage.get('employeeId').then(data => {
      this.employeeId = data;
      console.log(' employeeId== ', this.employeeId);
    });
    this.storage.get('login_token').then((data) => {
      console.log('showOnBoard value is111==', data);
      this.login_token = data;
    })
    this.storage.get('deviceId').then(data => {
      this.deviceId = data;
      let apiKey = {
        "client_id":this.apiServices.clientId,
        "employee_id":this.employeeId,
        "device":this.apiServices.device,
        "device_id":this.deviceId,
        "app_version":this.apiServices.appVersion,
        "nomination_id":this.nominationid,
        // "user_type":this.employee_type
      };
      this.apiServices.awardsdetail(apiKey, this.login_token)
        .subscribe((res) => {
          console.log('', res);
           this.loading.dismiss();
          if (res.success == 1) {
            this.awardsdetaildata = res.data;
            this.nomnistatus=this.awardsdetaildata.nomination_status;
            this.awardsimage=this.awardsdetaildata.award_icon;
            this.awardsdiscription=this.awardsdetaildata.award_description;
            this.nomnidesignation=this.awardsdetaildata.nominated_by_designation;
            this.nominatedby=this.awardsdetaildata.nominated_by;
            this.nominated_by_image=this.awardsdetaildata.nominated_by_image;
            this.nominateddate=this.awardsdetaildata.nominated_date;
            this.user=this.awardsdetaildata.user;
            this.unit_name=this.awardsdetaildata.unit_name;
            this.awardstype=this.awardsdetaildata.award_type;
            console.log('this.user', this.user);
            this.alluser=this.user;
          } else {
            this.apiMessage(res.message);
          }
  
        }, (err) => {
          console.log('err== ', err);
          this.apiMessage(err);
  
        });
  
    });
  }
  
 

  apiMessage(message) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AwardeddetailPage');
  }

  submit(){
    this.navCtrl.pop();
  }

  acceptreject(appkey) {

    


    if(appkey=='r'){
      this.arkey='2'
      this.msg='rejected successfully.'
      this.apiMessage(this.msg);
      this.navCtrl.pop();
    }
    if(appkey=='a'){
      this.msg='accepted successfully.'
      this.apiMessage(this.msg);
      this.navCtrl.pop();

      this.arkey='1'
    }


    // this.commonLoader();
    // this.storage.get('employeeId').then(data => {
    //   this.employeeId = data;
    //   console.log(' employeeId== ', this.employeeId);
    // });
    // this.storage.get('login_token').then((data) => {
    //   console.log('showOnBoard value is111==', data);
    //   this.login_token = data;
    // })
    // this.storage.get('deviceId').then(data => {
    //   this.deviceId = data;
    //   let apiKey = {
       
    //     "client_id": this.apiServices.clientId,
    //     "employee_id":this.employeeId,
    //     "device":this.apiServices.device,
    //     "device_id":this.deviceId,
    //     "nomination_id":this.nominationid,
    //     "action":this.arkey,
    //     "app_version":this.apiServices.appVersion,
    //     "level_of_approval":this.alldata.approval_level,
    //     "rejection_remark":this.comment,
    //     "award_id":this.alldata.award_id,
    //     "unit_id":this.alldata.unit_id
  
    //   };
    //   this.apiServices.reject(apiKey, this.login_token)
    //     .subscribe((res) => {
    //       console.log('', res);
    //        this.loading.dismiss();
    //       if (res.success == 1) {
    //     this.apiMessage(res.message);
    //      this.navCtrl.pop();
    //         // console.log('this.user', this.user);
         
    //       } else {
    //         this.apiMessage(res.message);
    //       }
  
    //     }, (err) => {
    //       // console.log('err== ', err);
    //       this.apiMessage(err);
  
    //     });
  
    // });



  }


  presentPrompt(r) {
    let alert = this.alertCtrl.create({
      title: 'Login',
      inputs: [
        {
          name: 'username',
          placeholder: 'please write here'
        },
        // {
        //   name: 'password',
        //   placeholder: 'Password',
        //   type: 'password'
        // }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          handler: data => {

            this.comment=data.username;
            if (this.comment==undefined || this.comment=='') {
              this.aleretmsg='please write reason'
              this.apiMessage(this.aleretmsg);
              return false;
            }
            
            this.acceptreject(r)

            // else {
            
            //   return false;
            // }
          }
        }
      ]
    });
    alert.present();
  }

  gotosearchlist(user){
    this.allawardsdata={'award_type':this.awardstype}

console.log('alluser',this.alluser);
    this.navCtrl.push('SelectedUserPage',{'allawardsdata':this.allawardsdata,'user':this.alluser});
  }

}

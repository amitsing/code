import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,LoadingController,ActionSheetController } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import {Validators, FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ImageViewerController } from 'ionic-img-viewer';

/**
 * Generated class for the PendinglistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pendinglist',
  templateUrl: 'pendinglist.html',
})
export class PendinglistPage {
  authoritykey: string;
  area: any;
  dropdownarray:any;
  authority: any;
  msg: any;
  succ: any;
  AandNkey: any;
  alldata: any;
  login_token: any;
  employeeId: any;
  deviceId: any;
  loading:any;
  constructor(private imageViewerCtrl: ImageViewerController, public toastCtrl: ToastController,
    private storage: Storage,public loadingCtrl: LoadingController,public actionSheetCtrl: ActionSheetController,
    private apiServices: ApiServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
      this.AandNkey=this.navParams.get('AandNkey');
      this.authority=this.navParams.get('authority');
      if(this.authority==1){
         this.authoritykey='n';
      }
      if(this.authority==2){
        this.authoritykey='a';
              }
      
      this.storage.get('deviceId').then((data) => {
        console.log('showOnBoard value is111==', data);
        this.deviceId = data;
      })
      this.storage.get('employeeId').then(data => {
        this.employeeId = data;
        console.log(' employeeId== ', this.employeeId);
      });

this.dropdownarray=[{'key':'All'},{'key':'pending'},{'key':'Approved'},{'key':'Rejected'}]

      this.area='All';
      this.pending(this.area);
  }
  companyFormSelected(e){
this.area=e;
console.log('this.area==', e);
this.pending(this.area);
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
  pending(statusdata) {
    this.commonLoader();
    this.storage.get('login_token').then((data) => {
      console.log('AlbumDetails value is111==', data);
      this.login_token = data;
      let apiKey = {
     
        // "client_id": this.apiServices.clientId,
        // "employee_id":this.employeeId,
        // "device":this.apiServices.device,
        // "device_id":this.deviceId,
        // "app_version":this.apiServices.appVersion,
        // "user_authority":this.AandNkey

        "client_id":this.apiServices.clientId,
        "employee_id":this.employeeId,
        "device":this.apiServices.device,
        "device_id":this.deviceId,
        "app_version":this.apiServices.appVersion,
        "user_authority":this.authoritykey,
        "flag":statusdata


      }
      console.log('AlbumDetails api apiKey==', apiKey);
      this.apiServices.alltranscationaward(apiKey, this.login_token).subscribe(result => {
        console.log('AlbumDetails api res==', result);

        this.loading.dismiss();
        if (result.success == 1) {
          this.succ=result.success;
          console.log('AlbumDetails api success res==', result);
          this.alldata=result.data;
       
        } else {
         this.succ=result.success;
         this.msg=result.message
          this.apiMessage(result.message);
        }


      })

    })
  }
  awarddetail(nominationid,i,nominationstatus){
    console.log('this.alldata[i]',this.alldata[i]);
    this.navCtrl.push('AwardeddetailPage',{'nominationid':nominationid,
    'AandNkey':this.AandNkey,'alldata':this.alldata[i],'nominationstatus':nominationstatus,
    'authority':this.authority});
  }
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad PendinglistPage');
  }
  apiMessage(message) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  open() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select status',
      buttons: [
        {
          text: 'All',
          role: 'destructive',
          handler: () => {
            this.area='All';
            this.pending(this.area);
            // this.picker(this.camera.PictureSourceType.CAMERA);
          }
        }, {
          text: 'Pending',
          handler: () => {
            this.area='pending';
            this.pending(this.area);
          }
        }, {
          text: 'Approved',
          handler: () => {
            this.area='Approved';
            this.pending(this.area);
          }
        },
        {
          text: 'Rejected',
          handler: () => {
            this.area='Rejected';
            this.pending(this.area);
          }
        }
      ]
    });
    actionSheet.present();
  }

  dismiss(){
    this.navCtrl.pop();
  }
  gotosearch(){
    this.navCtrl.push('NominationCategoryPage');
  }
}

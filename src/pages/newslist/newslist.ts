import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController, ToastController, AlertController, Platform } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';



@IonicPage()
@Component({
  selector: 'page-newslist',
  templateUrl: 'newslist.html',
})
export class NewslistPage {
  List: any;
  deviceId: any;
  login_token: any;
  employeeId: any;
  value: any='0';
  loading:any;
  myInfiniteScroll:any;
  infiniteScrollCalled:boolean=false;
  hideInfiniteScroll:boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private alertCtrl: AlertController, private platform: Platform,
    public toastCtrl: ToastController, private storage: Storage,public loadingCtrl: LoadingController,
    private apiServices: ApiServiceProvider) {

      this.storage.get('employeeId').then(data => {
        this.employeeId = data;
        console.log(' employeeId== ', this.employeeId);
      });
      this.storage.get('login_token').then((data) => {
        console.log('showOnBoard value is111==', data);
        this.login_token = data;})
        this.newsListFun();
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
  newsListFun(){
    this.commonLoader();
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
        "value": this.value
      };
      this.apiServices.newslist(apiKey, this.login_token)
        .subscribe((res) => {
          console.log(' res==', res);
          this.loading.dismiss(); 
          if(res.success==1){
            if(this.List==undefined){
              this.List = res.data;
            }else{
              this.List= this.List.concat(res.data);
              console.log('list==',res.data );
            }
                if(this.infiniteScrollCalled==true){
                  this.myInfiniteScroll.complete();
                  this.infiniteScrollCalled=false;
                }
            console.log('==',this.List);
          
            this.hideInfiniteScroll=false;             
          }else{
            if(this.value=='0'){
              // this.msg=res.message;
      let alert = this.alertCtrl.create({
             
              message: res.message,
              buttons: [
                {
                  text: 'Ok',
                  role: 'cancel',
                  handler: () => {
                    console.log('Cancel clicked');
                    this.navCtrl.pop();
                  }
                }
              ]
            });
            alert.present();
  
            }
  
            this.hideInfiniteScroll=true;
            // this.apiMessage(res.message);
          }


        })

      })



  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
  this.myInfiniteScroll=infiniteScroll;
    setTimeout(() => {
      this.infiniteScrollCalled=true;
      this.value=this.List.length;
      this.newsListFun();
      console.log('Async operation has ended');
      // this.myInfiniteScroll.complete();
    }, 500);
  }


  apiMessage(message) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  gotodetail(data){
  this.navCtrl.push('EmpnewsdetailPage',{'data':data});
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NewslistPage');
  }

}

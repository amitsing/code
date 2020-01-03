import { Component,NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams,  AlertController } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the AlbumListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name: 'AlbumListPage'})
@Component({
  selector: 'page-album-list',
  templateUrl: 'album-list.html',
})
export class AlbumListPage {
  loginemp: any;

  previousePagedata: any;
  albumData: any;
  login_token: any;
  deviceId: any;
  employeeId: any;
  apikey: any;
  value: any='0';
  myInfiniteScroll:any;
  infiniteScrollCalled:boolean=false;
  hideInfiniteScroll:boolean=false;
  constructor(
    private alertCtrl: AlertController,
    private storage:Storage,
    private apiServices:ApiServiceProvider,
    public ngZone: NgZone,
    public navCtrl: NavController, public navParams: NavParams) {

    this.previousePagedata=this.navParams.get('data');
    this.loginemp=this.navParams.get('loginemp');

    this.storage.get('showOnBoard').then((data)=>{
      this.loginemp=data;
      console.log('showOnBoard value is111==',data );
    });


    this.storage.get('login_token').then((data)=>{ this.login_token=data; });
    this.storage.get('employeeId').then((data) => {this.employeeId=data;});

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlbumCategoryPage');
   
    // this.storage.get('deviceId').then(data=>{
    //   this.deviceId=data;
    //   console.log('login deviceId== ',this.deviceId);
    //   this.seeAlbumList();
    //  });
    
    this.storage.get('showOnBoard').then((data)=>{
      this.loginemp=data;

      if(this.loginemp=='Employee'){
        // this.storage.get('deviceId').then(data=>{
        //   this.deviceId=data;
        //   console.log('login deviceId== ',this.deviceId);
          this.EmployeeAlbumList();
        //  });
     
    }
    else{
    
      // this.storage.get('deviceId').then(data=>{
      //   this.deviceId=data;
      //   console.log('login deviceId== ',this.deviceId);
        this.seeAlbumList();
      //  });
    
    }
    

      console.log('showOnBoard value is111==',data );
    });






  }

  showAlert(message) {
    const alert = this.alertCtrl.create({
      // title: 'New Friend!',
      subTitle: message,
      buttons: [{
        text: 'Ok',
        handler: data => {
          console.log('Saved clicked');
          this.navCtrl.pop();
        }
      }]
    });
    alert.present();
  }


  seeAlbumList(){
      this.storage.get('deviceId').then(data=>{
        this.deviceId=data;
        console.log('login deviceId== ',this.deviceId);
       });


    this.storage.get('login_token').then((data)=>{
      console.log('showOnBoard value is111==',data );
      this.login_token=data;
    let apiKey={
      "client_id":this.apiServices.clientId,
      "employee_id":this.employeeId,
      "device":this.apiServices.device,
      "device_id":this.deviceId,
      "app_version":this.apiServices.appVersion,
      "val":this.value
    }
    this.apiServices.onboardUserAlbum(apiKey,this.login_token).subscribe(result =>{
      console.log('album api res==',result );
if(result.success==1){
  console.log('album list==',result.data );
  if(this.albumData==undefined){
    this.albumData=result.data;
  }else{
    this.albumData= this.albumData.concat(result.data);
    console.log('new album list==',result.data );
  }
      if(this.infiniteScrollCalled==true){
        this.myInfiniteScroll.complete();
        this.infiniteScrollCalled=false;
      }
  console.log('this.formdata==',this.albumData);

  this.hideInfiniteScroll=false;
}else{
  this.hideInfiniteScroll=true;
}




    })

  })
  }

  EmployeeAlbumList(){
    this.storage.get('deviceId').then(data=>{
      this.deviceId=data;
      console.log('login deviceId== ',this.deviceId);
    
     });
    this.storage.get('login_token').then((data)=>{
      console.log('showOnBoard value is111==',data );
      this.login_token=data;
    let apiKey={
      "client_id":this.apiServices.clientId,
      "employee_id":this.employeeId,
      "device":this.apiServices.device,
      "device_id":this.deviceId,
      "app_version":this.apiServices.appVersion,
      "val":this.value
    }
    this.apiServices.empAlbumList(apiKey,this.login_token).subscribe(result =>{
      console.log('album api res==',result );
if(result.success==1){
  console.log('empalbum list==',result.data );
  if(this.albumData==undefined){
    this.albumData=result.data;
  }else{
    this.albumData= this.albumData.concat(result.data);
    console.log('new emp album list==',result.data );
  }
      if(this.infiniteScrollCalled==true){
        this.myInfiniteScroll.complete();
        this.infiniteScrollCalled=false;
      }
  console.log('this.formdata==',this.albumData);

  this.hideInfiniteScroll=false;
}else{
  this.hideInfiniteScroll=true;
}




    })

  })
  }





seeDetails(data){
  
  this.navCtrl.push('AlbumDetailsPage', {'data':data,'loginemp':this.loginemp} );
}


doInfinite(infiniteScroll) {
  console.log('Begin async operation');
this.myInfiniteScroll=infiniteScroll;
  setTimeout(() => {
    this.infiniteScrollCalled=true;
    this.value=this.albumData.length;

    if(this.loginemp=='Employee'){
   
        this.EmployeeAlbumList();
  }
  else{
      this.seeAlbumList();

  }




    // this.seeAlbumList();
    console.log('Async operation has ended');
    // this.myInfiniteScroll.complete();
  }, 500);
}


}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import { ImageViewerController } from 'ionic-img-viewer';
/**
 * Generated class for the AlbumDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-album-details',
  templateUrl: 'album-details.html',
})
export class AlbumDetailsPage {
  loginemp: any;
  _imageViewerCtrl: ImageViewerController;
  album: any = [];
  previousePagedata: any;
  login_token: any;
  employeeId: any;
  deviceId: any;
  albumData: any;

  value: any='0';
  myInfiniteScroll:any;
  infiniteScrollCalled:boolean=false;
  hideInfiniteScroll:boolean=false;

  constructor(
    private storage: Storage,imageViewerCtrl: ImageViewerController,
    private apiServices: ApiServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.previousePagedata = this.navParams.get('data');
    console.log('previouse page data== ', this.previousePagedata);
    this._imageViewerCtrl = imageViewerCtrl;
    this.storage.get('login_token').then((data) => { this.login_token = data; });
    this.storage.get('employeeId').then((data) => { this.employeeId = data; });
    this.loginemp=this.navParams.get('loginemp');


  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AlbumCategoryPage');
    this.storage.get('deviceId').then(data => {
      this.deviceId = data;
      console.log('login deviceId== ', this.deviceId);
      // this.seeAlbumDetails();
    });

   
    if(this.loginemp=='Employee'){
      this.EmployeeAlbumDetails();
    }
    else{
      this.seeAlbumDetails();
    }


  }


  seeAlbumDetails() {

    this.storage.get('login_token').then((data) => {
      console.log('AlbumDetails value is111==', data);
      this.login_token = data;
      let apiKey = {
        "client_id": this.apiServices.clientId,
        "employee_id": this.employeeId,
        "device": this.apiServices.device,
        "device_id": this.deviceId,
        "app_version": this.apiServices.appVersion,
        "albumId": this.previousePagedata.album_id,
        "value": this.value
      }
      this.apiServices.onboardUserAlbumDetails(apiKey, this.login_token).subscribe(result => {
        console.log('AlbumDetails api res==', result);


        if (result.success == 1) {
          console.log('album list==applicant', result.data);

          if (this.albumData == undefined) {
            this.albumData = result.data.images;
          } else {
            this.albumData = this.albumData.concat(result.data.images);
            console.log('new album list==', result.data);
          }
          if (this.infiniteScrollCalled == true) {
            this.myInfiniteScroll.complete();
            this.infiniteScrollCalled = false;
          }
          console.log('this.formdata==', this.albumData);

          this.hideInfiniteScroll = false;
        } else {
          this.hideInfiniteScroll = true;
        }


      })

    })
  }

  EmployeeAlbumDetails() {
    console.log('this.previousePagedata.auto_id==', this.previousePagedata.auto_id);
    this.storage.get('login_token').then((data) => {
      console.log('AlbumDetails value is111==', data);
      this.login_token = data;
      let apiKey = {
     
        "client_id":this.apiServices.clientId,
        "employee_id":this.employeeId,
        "device":this.apiServices.device,
        "device_id":this.deviceId,
        "app_version":this.apiServices.appVersion,
        "val":this.value,
        "album_id":this.previousePagedata.auto_id,
        "flag":"11",
        "post_id":""

      }
      console.log('AlbumDetails api apiKey==', apiKey);
      this.apiServices.empAlbumdetail(apiKey, this.login_token).subscribe(result => {
        console.log('AlbumDetails api res==', result);


        if (result.success == 1) {
          console.log('album emp list==', result.data);

          if (this.albumData == undefined) {
            this.albumData = result.data;
          } else {
            this.albumData = this.albumData.concat(result.data);
            console.log('new emp album list==', result.data);
          }
          if (this.infiniteScrollCalled == true) {
            this.myInfiniteScroll.complete();
            this.infiniteScrollCalled = false;
          }
          console.log('this.formdata==', this.albumData);

          this.hideInfiniteScroll = false;
        } else {
          this.hideInfiniteScroll = true;
        }


      })

    })
  }





  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
    this.myInfiniteScroll = infiniteScroll;
    setTimeout(() => {
      this.infiniteScrollCalled = true;
      this.value = this.albumData.length;
      // this.seeAlbumDetails();

      if(this.loginemp=='Employee'){
        this.EmployeeAlbumDetails();
      }
      else{
        this.seeAlbumDetails();
      }

      console.log('Async operation has ended');
      // this.myInfiniteScroll.complete();
    }, 500);
  }

  seeDetails(allData, index,myImage){
    // let data={
    //   "data":this.albumData,
    //   "index":index
    // }
   console.log("in",index);
    if(this.loginemp=='Employee'){
      this.navCtrl.push('AlbumImageSliderPage',{'data':this.albumData,'albumid':this.previousePagedata.auto_id,'index':index});
    }
    else{
      // this.presentImage(myImage)

      this.navCtrl.push('AlbumslidezoomPage',{'data':this.albumData,'index':index,'previousePagedata':this.previousePagedata});

    }
  
  }


  seeDetails1(myImage){ 
      this.presentImage(myImage)
  }


  presentImage(myImage) {
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();
 
    // setTimeout(() => imageViewer.dismiss(), 30000);
    imageViewer.onDidDismiss(() => console.log('Viewer dismissed'));
  }


}

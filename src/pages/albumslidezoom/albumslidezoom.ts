import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImageViewerController } from 'ionic-img-viewer';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-albumslidezoom',
  templateUrl: 'albumslidezoom.html',
})
export class AlbumslidezoomPage {
  title: any;
  previousePagedata: any;
  index: any;
  albumdata: any=[];
  @ViewChild(Slides) slides: Slides;
  _imageViewerCtrl: ImageViewerController;
  constructor(public navCtrl: NavController, public navParams: NavParams,imageViewerCtrl: ImageViewerController,) {
    this.albumdata=this.navParams.get('data');
    this.previousePagedata=this.navParams.get('previousePagedata');
    console.log('previousePagedata',this.previousePagedata);
    this.title=this.previousePagedata.album_name;
    this._imageViewerCtrl = imageViewerCtrl;
    console.log('this.albumdata',this.albumdata);
    this.index=this.navParams.get('index');
    console.log('this.index',this.index);
  }
  presentImage(myImage) {
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();
 
    // setTimeout(() => imageViewer.dismiss(), 30000);
    imageViewer.onDidDismiss(() => console.log('Viewer dismissed'));
  }
  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);

    if(this.slides.isEnd()==true){
      console.log('Current index is true');
      this.index=currentIndex;
      this.slides.lockSwipeToNext(true);
    }else{
      console.log('Current index is false');
      this.index=currentIndex;
      this.slides.lockSwipeToNext(false);
    }
 
    }


  

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlbumslidezoomPage');
  }

}

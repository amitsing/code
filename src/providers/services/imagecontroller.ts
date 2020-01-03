import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ImageViewerController } from 'ionic-img-viewer';
/*
  Generated class for the ImagecontrollerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ImagecontrollerProvider {
  _imageViewerCtrl:any;
  constructor(public http: Http,public imageViewerCtrl: ImageViewerController) {
    this._imageViewerCtrl = imageViewerCtrl;
    console.log('Hello ImagecontrollerProvider Provider');
  }
  presentImage(myImage) {
    console.log("present image function is called")
    console.log(myImage);
      const imageViewer = this.imageViewerCtrl.create(myImage);
      console.log(myImage);
      imageViewer.present();
  }
}

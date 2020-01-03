import { Component,Input, Output, EventEmitter } from '@angular/core';

import { ImageViewerController } from 'ionic-img-viewer';
/**
 * Generated class for the LikeUsersComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'like-users',
  templateUrl: 'like-users.html'
})
export class LikeUsersComponent {
  _imageViewerCtrl: ImageViewerController;

  @Input('userImage') image;
  @Input('userName') name;
  @Input('userdate') date;
  text: string;

  constructor(imageViewerCtrl: ImageViewerController,) {
    this._imageViewerCtrl = imageViewerCtrl;
    console.log('Hello LikeUsersComponent Component');
    this.text = 'Hello World';
  }

  presentImage(myImage) {
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();

    setTimeout(() => imageViewer.dismiss(), 30000);
    imageViewer.onDidDismiss(() => console.log('Viewer dismissed'));
  }

}

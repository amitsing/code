import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlbumImageSliderPage } from './album-image-slider';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    AlbumImageSliderPage,
  ],
  imports: [
    IonicPageModule.forChild(AlbumImageSliderPage),IonicImageViewerModule
  ],
})
export class AlbumImageSliderPageModule {}

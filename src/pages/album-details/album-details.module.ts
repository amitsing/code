import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlbumDetailsPage } from './album-details';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    AlbumDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(AlbumDetailsPage),IonicImageViewerModule
  ],
})
export class AlbumDetailsPageModule {}

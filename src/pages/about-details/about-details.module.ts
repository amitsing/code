import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutDetailsPage } from './about-details';
import { IonicImageViewerModule } from 'ionic-img-viewer';
@NgModule({
  declarations: [
    AboutDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(AboutDetailsPage),IonicImageViewerModule
  ],
})
export class AboutDetailsPageModule {}

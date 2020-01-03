import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BehaivourGuidePage } from './behaivour-guide';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    BehaivourGuidePage,
  ],
  imports: [
    IonicPageModule.forChild(BehaivourGuidePage),IonicImageViewerModule
  ],
})
export class BehaivourGuidePageModule {}

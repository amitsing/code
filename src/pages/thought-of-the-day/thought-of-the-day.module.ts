import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThoughtOfTheDayPage } from './thought-of-the-day';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    ThoughtOfTheDayPage,
  ],
  imports: [
    IonicPageModule.forChild(ThoughtOfTheDayPage),IonicImageViewerModule
  ],
})
export class ThoughtOfTheDayPageModule {}

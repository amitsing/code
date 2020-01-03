import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoticeDetailsPage } from './notice-details';

@NgModule({
  declarations: [
    NoticeDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(NoticeDetailsPage),
  ],
})
export class NoticeDetailsPageModule {}

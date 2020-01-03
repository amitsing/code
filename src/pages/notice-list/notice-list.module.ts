import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoticeListPage } from './notice-list';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    NoticeListPage,
  ],
  imports: [
    IonicPageModule.forChild(NoticeListPage),IonicImageViewerModule
  ],
})
export class NoticeListPageModule {}

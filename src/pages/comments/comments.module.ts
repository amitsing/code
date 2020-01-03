import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommentsPage } from './comments';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    CommentsPage,
  ],
  imports: [
    IonicPageModule.forChild(CommentsPage),IonicImageViewerModule
  ],
})
export class CommentsPageModule {}

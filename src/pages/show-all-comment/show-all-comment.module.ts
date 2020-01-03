import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowAllCommentPage } from './show-all-comment';

@NgModule({
  declarations: [
    ShowAllCommentPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowAllCommentPage),
  ],
})
export class ShowAllCommentPageModule {}

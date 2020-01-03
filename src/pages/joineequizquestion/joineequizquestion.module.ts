import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JoineequizquestionPage } from './joineequizquestion';
import { NgCircleProgressModule } from 'ng-circle-progress';
@NgModule({
  declarations: [
    JoineequizquestionPage,
  ],
  imports: [
    IonicPageModule.forChild(JoineequizquestionPage),NgCircleProgressModule
  ],
})
export class JoineequizquestionPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuizResultPage } from './quiz-result';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    QuizResultPage,
  ],
  imports: [
    IonicPageModule.forChild(QuizResultPage),NgCircleProgressModule
  ],
})
export class QuizResultPageModule {}

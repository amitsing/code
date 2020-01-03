import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuizCompleteStatusPage } from './quiz-complete-status';

@NgModule({
  declarations: [
    QuizCompleteStatusPage,
  ],
  imports: [
    IonicPageModule.forChild(QuizCompleteStatusPage),
  ],
})
export class QuizCompleteStatusPageModule {}

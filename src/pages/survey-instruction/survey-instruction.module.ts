import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SurveyInstructionPage } from './survey-instruction';

@NgModule({
  declarations: [
    SurveyInstructionPage,
  ],
  imports: [
    IonicPageModule.forChild(SurveyInstructionPage),
  ],
})
export class SurveyInstructionPageModule {}

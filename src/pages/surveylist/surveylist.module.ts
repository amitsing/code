import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SurveylistPage } from './surveylist';

@NgModule({
  declarations: [
    SurveylistPage,
  ],
  imports: [
    IonicPageModule.forChild(SurveylistPage),
  ],
})
export class SurveylistPageModule {}

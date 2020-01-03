import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SurveydetailPage } from './surveydetail';

@NgModule({
  declarations: [
    SurveydetailPage,
  ],
  imports: [
    IonicPageModule.forChild(SurveydetailPage),
  ],
})
export class SurveydetailPageModule {}

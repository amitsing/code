import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestsurveyPage } from './testsurvey';

@NgModule({
  declarations: [
    TestsurveyPage,
  ],
  imports: [
    IonicPageModule.forChild(TestsurveyPage),
  ],
})
export class TestsurveyPageModule {}

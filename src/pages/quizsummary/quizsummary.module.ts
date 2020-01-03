import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuizsummaryPage } from './quizsummary';

@NgModule({
  declarations: [
    QuizsummaryPage,
  ],
  imports: [
    IonicPageModule.forChild(QuizsummaryPage),
  ],
})
export class QuizsummaryPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FaqDetailsPage } from './faq-details';

@NgModule({
  declarations: [
    FaqDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(FaqDetailsPage),
  ],
})
export class FaqDetailsPageModule {}

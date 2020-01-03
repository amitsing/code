import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TakeMobileNumberPage } from './take-mobile-number';

@NgModule({
  declarations: [
    TakeMobileNumberPage,
  ],
  imports: [
    IonicPageModule.forChild(TakeMobileNumberPage),
  ],
})
export class TakeMobileNumberPageModule {}

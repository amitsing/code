import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FillOtpPage } from './fill-otp';

@NgModule({
  declarations: [
    FillOtpPage,
  ],
  imports: [
    IonicPageModule.forChild(FillOtpPage),
  ],
})
export class FillOtpPageModule {}

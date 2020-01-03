import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BackgroundcheckPage } from './backgroundcheck';
import { NgCircleProgressModule } from 'ng-circle-progress';
@NgModule({
  declarations: [
    BackgroundcheckPage,
  ],
  imports: [
    IonicPageModule.forChild(BackgroundcheckPage),NgCircleProgressModule
  ],
})
export class BackgroundcheckPageModule {}

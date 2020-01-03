import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MaintainancePage } from './maintainance';

@NgModule({
  declarations: [
    MaintainancePage,
  ],
  imports: [
    IonicPageModule.forChild(MaintainancePage),
  ],
})
export class MaintainancePageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsattendancesheetPage } from './usattendancesheet';
import { TooltipsModule } from 'ionic-tooltips';

@NgModule({
  declarations: [
    UsattendancesheetPage,
  ],
  imports: [
    IonicPageModule.forChild(UsattendancesheetPage), TooltipsModule.forRoot()
  ],
})
export class UsattendancesheetPageModule {}

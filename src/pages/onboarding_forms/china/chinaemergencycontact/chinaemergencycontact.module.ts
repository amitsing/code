import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChinaemergencycontactPage } from './chinaemergencycontact';
import { TooltipsModule } from 'ionic-tooltips';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
@NgModule({
  declarations: [
    ChinaemergencycontactPage,
  ],
  imports: [
    IonicPageModule.forChild(ChinaemergencycontactPage), TooltipsModule.forRoot()
    // BrowserAnimationsModule
  ],
})
export class ChinaemergencycontactPageModule {}

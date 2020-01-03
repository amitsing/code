import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WalkthroughScreenPage } from './walkthrough-screen';

@NgModule({
  declarations: [
    WalkthroughScreenPage,
  ],
  imports: [
    IonicPageModule.forChild(WalkthroughScreenPage),
  ],
})
export class WalkthroughScreenPageModule {}

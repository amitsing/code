import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WelcomOnboardPage } from './welcom-onboard';

@NgModule({
  declarations: [
    WelcomOnboardPage,
  ],
  imports: [
    IonicPageModule.forChild(WelcomOnboardPage),
  ],
})
export class WelcomOnboardPageModule {}

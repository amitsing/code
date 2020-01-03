import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WelcomeScreenPage } from './welcome-screen';

@NgModule({
  declarations: [
    WelcomeScreenPage,
  ],
  imports: [
    IonicPageModule.forChild(WelcomeScreenPage),
  ],
})
export class WelcomeScreenPageModule {}

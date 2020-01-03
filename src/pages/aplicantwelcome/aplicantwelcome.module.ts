import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AplicantwelcomePage } from './aplicantwelcome';

@NgModule({
  declarations: [
    AplicantwelcomePage,
  ],
  imports: [
    IonicPageModule.forChild(AplicantwelcomePage),
  ],
})
export class AplicantwelcomePageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirstWelcomeAboardPage } from './first-welcome-aboard';

@NgModule({
  declarations: [
    FirstWelcomeAboardPage,
  ],
  imports: [
    IonicPageModule.forChild(FirstWelcomeAboardPage),
  ],
})
export class FirstWelcomeAboardPageModule {}

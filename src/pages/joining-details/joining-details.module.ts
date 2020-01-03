import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JoiningDetailsPage } from './joining-details';

@NgModule({
  declarations: [
    JoiningDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(JoiningDetailsPage),
  ],
})
export class JoiningDetailsPageModule {}

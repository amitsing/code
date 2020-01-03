import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IndiaEmgContactPage } from './india-emg-contact';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    IndiaEmgContactPage,
  ],
  imports: [
    IonicPageModule.forChild(IndiaEmgContactPage),
    ComponentsModule
  ],
})
export class IndiaEmgContactPageModule {}

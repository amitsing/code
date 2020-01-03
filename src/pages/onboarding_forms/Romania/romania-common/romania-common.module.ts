import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RomaniaCommonPage } from './romania-common';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    RomaniaCommonPage,
  ],
  imports: [
    IonicPageModule.forChild(RomaniaCommonPage),
    ComponentsModule
  ],
})
export class RomaniaCommonPageModule {}

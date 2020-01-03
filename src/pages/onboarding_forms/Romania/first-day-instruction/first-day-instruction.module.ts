import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirstDayInstructionPage } from './first-day-instruction';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    FirstDayInstructionPage,
  ],
  imports: [
    IonicPageModule.forChild(FirstDayInstructionPage),
    ComponentsModule
  ],
})
export class FirstDayInstructionPageModule {}

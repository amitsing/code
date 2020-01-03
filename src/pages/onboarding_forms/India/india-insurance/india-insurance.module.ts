import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IndiaInsurancePage } from './india-insurance';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    IndiaInsurancePage,
  ],
  imports: [
    IonicPageModule.forChild(IndiaInsurancePage),
    ComponentsModule
  ],
})
export class IndiaInsurancePageModule {}

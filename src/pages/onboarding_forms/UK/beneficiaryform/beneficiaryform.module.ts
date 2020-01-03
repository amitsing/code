import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BeneficiaryformPage } from './beneficiaryform';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    BeneficiaryformPage,
  ],
  imports: [
    IonicPageModule.forChild(BeneficiaryformPage),
    ComponentsModule
  ],
})
export class BeneficiaryformPageModule {}

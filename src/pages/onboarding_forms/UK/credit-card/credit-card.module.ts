import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreditCardPage } from './credit-card';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    CreditCardPage,
  ],
  imports: [
    IonicPageModule.forChild(CreditCardPage),
    ComponentsModule
  ],
})
export class CreditCardPageModule {}

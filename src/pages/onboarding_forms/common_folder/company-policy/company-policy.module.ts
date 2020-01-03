import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompanyPolicyPage } from './company-policy';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    CompanyPolicyPage,
  ],
  imports: [
    IonicPageModule.forChild(CompanyPolicyPage),
    ComponentsModule
  ],
})
export class CompanyPolicyPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmployeeConsentFormPage } from './employee-consent-form';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    EmployeeConsentFormPage,
  ],
  imports: [
    IonicPageModule.forChild(EmployeeConsentFormPage),
    ComponentsModule
  ],
})
export class EmployeeConsentFormPageModule {}

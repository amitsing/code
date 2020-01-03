import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalCompliancePage } from './personal-compliance';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    PersonalCompliancePage,
  ],
  imports: [
    IonicPageModule.forChild(PersonalCompliancePage),
    ComponentsModule
  ],
})
export class PersonalCompliancePageModule {}

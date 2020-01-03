import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FamilyDetailsPage } from './family-details';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    FamilyDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(FamilyDetailsPage),
    ComponentsModule
  ],
})
export class FamilyandemergencycontactPageModule {}

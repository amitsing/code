import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonaldetailsPage } from './personaldetails';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    PersonaldetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonaldetailsPage),
    ComponentsModule
  ],
})
export class PersonaldetailsPageModule {}

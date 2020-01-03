import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BasicDetailsPage } from './basic-details';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    BasicDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(BasicDetailsPage),
    ComponentsModule
  ],
})
export class BasicDetailsPageModule {}

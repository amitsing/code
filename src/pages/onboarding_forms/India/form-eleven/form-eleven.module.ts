import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormElevenPage } from './form-eleven';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    FormElevenPage,
  ],
  imports: [
    IonicPageModule.forChild(FormElevenPage),
    ComponentsModule
  ],
})
export class FormElevenPageModule {}

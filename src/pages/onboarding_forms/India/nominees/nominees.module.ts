import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NomineesPage } from './nominees';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    NomineesPage,
  ],
  imports: [
    IonicPageModule.forChild(NomineesPage),
    ComponentsModule
  ],
})
export class NomineesPageModule {}

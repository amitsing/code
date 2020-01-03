import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GenralInformationPage } from './genral-information';

@NgModule({
  declarations: [
    GenralInformationPage,
  ],
  imports: [
    IonicPageModule.forChild(GenralInformationPage),
  ],
})
export class GenralInformationPageModule {}

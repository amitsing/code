import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProprietaryInformationPage } from './proprietary-information';
import { TooltipsModule } from 'ionic-tooltips';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    ProprietaryInformationPage,
  ],
  imports: [
    IonicPageModule.forChild(ProprietaryInformationPage),TooltipsModule.forRoot(),
    ComponentsModule
  ],
})
export class ProprietaryInformationPageModule {}

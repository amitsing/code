import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BackgroundVerificationUSAPage } from './background-verification-usa';
import { DirectivesModule } from '../../../../directives/directives.module';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    BackgroundVerificationUSAPage,
  ],
  imports: [
    IonicPageModule.forChild(BackgroundVerificationUSAPage),
    DirectivesModule,
    ComponentsModule
  ],
})
export class BackgroundVerificationUSAPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OnboardingDynamicModuleDetailPage } from './onboarding-dynamic-module-detail';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    OnboardingDynamicModuleDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(OnboardingDynamicModuleDetailPage),
    ComponentsModule
  ],
})
export class OnboardingDynamicModuleDetailPageModule {}

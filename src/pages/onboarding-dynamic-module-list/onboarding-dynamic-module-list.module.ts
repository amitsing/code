import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OnboardingDynamicModuleListPage } from './onboarding-dynamic-module-list';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    OnboardingDynamicModuleListPage,
  ],
  imports: [
    IonicPageModule.forChild(OnboardingDynamicModuleListPage),
    ComponentsModule
  ],
})
export class OnboardingDynamicModuleListPageModule {}

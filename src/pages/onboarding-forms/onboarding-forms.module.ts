import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OnboardingFormsPage } from './onboarding-forms';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    OnboardingFormsPage,
  ],
  imports: [
    IonicPageModule.forChild(OnboardingFormsPage),NgCircleProgressModule
  ],
})
export class OnboardingFormsPageModule {}

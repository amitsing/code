import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OnboardPreviewPage } from './onboard-preview';

@NgModule({
  declarations: [
    OnboardPreviewPage,
  ],
  imports: [
    IonicPageModule.forChild(OnboardPreviewPage),
  ],
})
export class OnboardPreviewPageModule {}

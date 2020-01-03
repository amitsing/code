import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WelcomeOnboardDetailsPage } from './welcome-onboard-details';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    WelcomeOnboardDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(WelcomeOnboardDetailsPage),IonicImageViewerModule
  ],
})
export class WelcomeOnboardDetailsPageModule {}

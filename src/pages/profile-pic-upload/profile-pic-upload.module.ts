import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePicUploadPage } from './profile-pic-upload';

@NgModule({
  declarations: [
    ProfilePicUploadPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilePicUploadPage),
  ],
})
export class ProfilePicUploadPageModule {}

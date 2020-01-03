import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LikeUsersListPage } from './like-users-list';
import { ComponentsModule } from '../../components/components.module';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    LikeUsersListPage,
  ],
  imports: [
    IonicPageModule.forChild(LikeUsersListPage),ComponentsModule,IonicImageViewerModule
  ],
})
export class LikeUsersListPageModule {}

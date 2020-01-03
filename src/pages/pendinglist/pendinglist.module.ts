import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PendinglistPage } from './pendinglist';

@NgModule({
  declarations: [
    PendinglistPage,
  ],
  imports: [
    IonicPageModule.forChild(PendinglistPage),
  ],
})
export class PendinglistPageModule {}

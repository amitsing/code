import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsnewjoineeformPage } from './usnewjoineeform';
import { TooltipsModule } from 'ionic-tooltips';

@NgModule({
  declarations: [
    UsnewjoineeformPage,
  ],
  imports: [
    IonicPageModule.forChild(UsnewjoineeformPage), TooltipsModule.forRoot()
  ],
})
export class UsnewjoineeformPageModule {}

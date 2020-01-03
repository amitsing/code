import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InstructionPage } from './instruction';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    InstructionPage,
  ],
  imports: [
    IonicPageModule.forChild(InstructionPage),IonicImageViewerModule
  ],
})
export class InstructionPageModule {}

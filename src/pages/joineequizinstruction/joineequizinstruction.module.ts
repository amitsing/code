import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JoineequizinstructionPage } from './joineequizinstruction';
import { NgCircleProgressModule } from 'ng-circle-progress';
@NgModule({
  declarations: [
    JoineequizinstructionPage,
  ],
  imports: [
    IonicPageModule.forChild(JoineequizinstructionPage),NgCircleProgressModule
  ],
})
export class JoineequizinstructionPageModule {}

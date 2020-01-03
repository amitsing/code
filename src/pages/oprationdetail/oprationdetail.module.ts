import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OprationdetailPage } from './oprationdetail';
import { PipesModule } from '../../pipes/pipes.module';
@NgModule({
  declarations: [
    OprationdetailPage,
  ],
  imports: [
    IonicPageModule.forChild(OprationdetailPage),PipesModule
  ],
})
export class OprationdetailPageModule {}

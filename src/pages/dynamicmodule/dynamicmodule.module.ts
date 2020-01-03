import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DynamicmodulePage } from './dynamicmodule';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    DynamicmodulePage,
  ],
  imports: [
    IonicPageModule.forChild(DynamicmodulePage),PipesModule
  ],
})
export class DynamicmodulePageModule {}

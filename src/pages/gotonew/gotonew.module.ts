import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GotonewPage } from './gotonew';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    GotonewPage,
  ],
  imports: [
    IonicPageModule.forChild(GotonewPage),PipesModule
  ],
})
export class GotonewPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewquizlistPage } from './newquizlist';

@NgModule({
  declarations: [
    NewquizlistPage,
  ],
  imports: [
    IonicPageModule.forChild(NewquizlistPage),
  ],
})
export class NewquizlistPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CatgoriesPage } from './catgories';

@NgModule({
  declarations: [
    CatgoriesPage,
  ],
  imports: [
    IonicPageModule.forChild(CatgoriesPage),
  ],
})
export class CatgoriesPageModule {}

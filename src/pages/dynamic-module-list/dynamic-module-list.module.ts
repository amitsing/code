import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DynamicModuleListPage } from './dynamic-module-list';

@NgModule({
  declarations: [
    DynamicModuleListPage,
  ],
  imports: [
    IonicPageModule.forChild(DynamicModuleListPage),
  ],
})
export class DynamicModuleListPageModule {}

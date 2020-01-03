import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopoverLoginPage } from './popover-login';

@NgModule({
  declarations: [
    PopoverLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(PopoverLoginPage),
  ],
})
export class PopoverLoginPageModule {}

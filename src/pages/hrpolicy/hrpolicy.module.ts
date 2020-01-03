import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HrpolicyPage } from './hrpolicy';
import { Limit35Pipe } from '../../pipes/limit35/limit35';

@NgModule({
  declarations: [
    HrpolicyPage,
    Limit35Pipe
  ],
  imports: [
    IonicPageModule.forChild(HrpolicyPage),
  ],
})
export class HrpolicyPageModule {}

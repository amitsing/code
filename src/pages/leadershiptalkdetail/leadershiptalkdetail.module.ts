import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeadershiptalkdetailPage } from './leadershiptalkdetail';
import { PipesModule } from '../../pipes/pipes.module';
@NgModule({
  declarations: [
    LeadershiptalkdetailPage,
  ],
  imports: [
    IonicPageModule.forChild(LeadershiptalkdetailPage),PipesModule
  ],
})
export class LeadershiptalkdetailPageModule {}

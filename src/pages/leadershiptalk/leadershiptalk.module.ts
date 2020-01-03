import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeadershiptalkPage } from './leadershiptalk';
import { PipesModule } from '../../pipes/pipes.module';
@NgModule({
  declarations: [
    LeadershiptalkPage,
  ],
  imports: [
    IonicPageModule.forChild(LeadershiptalkPage),PipesModule
  ],
})
export class LeadershiptalkPageModule {}

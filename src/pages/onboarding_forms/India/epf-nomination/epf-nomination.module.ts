import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EpfNominationPage } from './epf-nomination';
import { TooltipsModule } from 'ionic-tooltips';

@NgModule({
  declarations: [
    EpfNominationPage,
  ],
  imports: [
    IonicPageModule.forChild(EpfNominationPage),TooltipsModule.forRoot()
  ],
})
export class EpfNominationPageModule {}

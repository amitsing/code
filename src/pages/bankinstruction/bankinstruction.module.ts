import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BankinstructionPage } from './bankinstruction';

@NgModule({
  declarations: [
    BankinstructionPage,
  ],
  imports: [
    IonicPageModule.forChild(BankinstructionPage),
  ],
})
export class BankinstructionPageModule {}

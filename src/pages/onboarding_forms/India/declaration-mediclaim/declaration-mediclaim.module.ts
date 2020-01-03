import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeclarationMediclaimPage } from './declaration-mediclaim';

@NgModule({
  declarations: [
    DeclarationMediclaimPage,
  ],
  imports: [
    IonicPageModule.forChild(DeclarationMediclaimPage),
  ],
})
export class DeclarationMediclaimPageModule {}

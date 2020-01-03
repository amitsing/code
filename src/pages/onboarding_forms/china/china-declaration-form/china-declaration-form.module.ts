import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChinaDeclarationFormPage } from './china-declaration-form';
import { PipesModule } from '../../../../pipes/pipes.module';
// import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    ChinaDeclarationFormPage,
  ],
  imports: [
    IonicPageModule.forChild(ChinaDeclarationFormPage),PipesModule
  ],
})
export class ChinaDeclarationFormPageModule {}

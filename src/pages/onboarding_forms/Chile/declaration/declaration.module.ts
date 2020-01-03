import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeclarationPage } from './declaration';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    DeclarationPage,
  ],
  imports: [
    IonicPageModule.forChild(DeclarationPage),
    ComponentsModule
  ],
})
export class DeclarationPageModule {}

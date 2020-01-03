import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PolicyDeclarationPage } from './policy-declaration';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    PolicyDeclarationPage,
  ],
  imports: [
    IonicPageModule.forChild(PolicyDeclarationPage),
    ComponentsModule
  ],
})
export class PolicyDeclarationPageModule {}

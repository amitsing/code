import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BackcheckiframePage } from './backcheckiframe';
import { PipesModule } from '../../pipes/pipes.module';
@NgModule({
  declarations: [
    BackcheckiframePage,
  ],
  imports: [
    IonicPageModule.forChild(BackcheckiframePage),PipesModule
  ],
})
export class BackcheckiframePageModule {}

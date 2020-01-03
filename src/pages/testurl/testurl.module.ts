import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TesturlPage } from './testurl';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    TesturlPage,
  ],
  imports: [
    IonicPageModule.forChild(TesturlPage),PipesModule
  ],
})
export class TesturlPageModule {}

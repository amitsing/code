import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
// import { PipesModule } from '../../pipes/pipes.module'
// import {RoundProgressModule} from 'angular-svg-round-progressbar';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),NgCircleProgressModule,ComponentsModule,PipesModule
    // RoundProgressModule
    // PipesModule,
  ],
})
export class HomePageModule {}

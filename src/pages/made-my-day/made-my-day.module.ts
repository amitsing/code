import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MadeMyDayPage } from './made-my-day';
import { ComponentsModule } from '../../components/components.module';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    MadeMyDayPage,
  ],
  imports: [
    IonicPageModule.forChild(MadeMyDayPage),ComponentsModule,NgCircleProgressModule,
  ],
})
export class MadeMyDayPageModule {}

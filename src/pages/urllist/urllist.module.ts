import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UrllistPage } from './urllist';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ComponentsModule } from '../../components/components.module';
// import { FromFieldsComponent } from '../../components/from-fields/from-fields';
@NgModule({
  declarations: [
    UrllistPage,
  ],
  imports: [
    IonicPageModule.forChild(UrllistPage),NgCircleProgressModule,ComponentsModule,
  
  ],
})
export class UrllistPageModule {}

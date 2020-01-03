import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LifeAtEvalDetailsPage } from './life-at-eval-details';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';
@NgModule({
  declarations: [
    LifeAtEvalDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(LifeAtEvalDetailsPage),IonicImageViewerModule,ComponentsModule,PipesModule
  ],
})
export class LifeAtEvalDetailsPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CeoMessageePage } from './ceo-messagee';
import { PipesModule } from '../../pipes/pipes.module';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    CeoMessageePage,
  ],
  imports: [
    IonicPageModule.forChild(CeoMessageePage),IonicImageViewerModule,
    PipesModule
  ],
})
export class CeoMessageePageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewslistPage } from './newslist';
import { PipesModule } from '../../pipes/pipes.module';
@NgModule({
  declarations: [
    NewslistPage,
  ],
  imports: [
    IonicPageModule.forChild(NewslistPage),PipesModule
  ],
})
export class NewslistPageModule {}

import { NgModule } from '@angular/core';
import { HomeSkeletonComponent } from './home-skeleton/home-skeleton';
import { TeamAwesomeComponent } from './team-awesome/team-awesome';
import { NominationCategoryComponent } from './nomination-category/nomination-category';
import { NewsViewComponent } from './news-view/news-view';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { PostDetailsSkeltonComponent } from './post-details-skelton/post-details-skelton';
import { LikeUsersComponent } from './like-users/like-users';
import { MycanvasComponent } from './mycanvas/mycanvas';
import { PipesModule } from '../pipes/pipes.module'
import { CustomImageTagComponent } from './custom-image-tag/custom-image-tag';
import { ShowHtmlComponent } from './show-html/show-html';
import { FromFieldsComponent } from './from-fields/from-fields';
import { TooltipsModule } from "ionic-tooltips";
@NgModule({
	declarations: [HomeSkeletonComponent,
    TeamAwesomeComponent,
    NominationCategoryComponent,
    NewsViewComponent,
    PostDetailsSkeltonComponent,
    CustomImageTagComponent,
    ShowHtmlComponent,FromFieldsComponent,
    LikeUsersComponent,
    MycanvasComponent],
    // imports: [IonicModule],
    imports: [IonicModule,CommonModule,PipesModule,TooltipsModule.forRoot()],
	exports: [HomeSkeletonComponent,
    TeamAwesomeComponent,FromFieldsComponent,
    NominationCategoryComponent,
    NewsViewComponent,
    PostDetailsSkeltonComponent,
    LikeUsersComponent,
    CustomImageTagComponent,
    ShowHtmlComponent,
    MycanvasComponent]
})
export class ComponentsModule {}

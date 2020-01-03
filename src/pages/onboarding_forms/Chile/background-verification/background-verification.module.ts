import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { BackgroundVerificationPage } from "./background-verification";
import { DirectivesModule } from "../../../../directives/directives.module";
import { ComponentsModule } from "../../../../components/components.module";
import { TooltipsModule } from 'ionic-tooltips';

@NgModule({
  declarations: [BackgroundVerificationPage],
  imports: [
    IonicPageModule.forChild(BackgroundVerificationPage),
    DirectivesModule,
    ComponentsModule,
    TooltipsModule.forRoot()
  ]
})
export class BackgroundVerificationPageModule {}

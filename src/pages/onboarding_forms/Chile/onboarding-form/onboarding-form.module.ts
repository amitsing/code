import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { OnboardingFormPage } from "./onboarding-form";
import { ComponentsModule } from "../../../../components/components.module";
import { TooltipsModule } from "ionic-tooltips";

@NgModule({
  declarations: [OnboardingFormPage],
  imports: [
    IonicPageModule.forChild(OnboardingFormPage),
    ComponentsModule,
    TooltipsModule.forRoot()
  ]
})
export class OnboardingFormPageModule {}

import { NgModule } from '@angular/core';
import { SafePipe } from './safe/safe';
import { SafeHtmlPipe } from './safe-html/safe-html';
@NgModule({
	declarations: [SafePipe,SafeHtmlPipe],
	imports: [],
	exports: [SafePipe,SafeHtmlPipe]
})
export class PipesModule {}

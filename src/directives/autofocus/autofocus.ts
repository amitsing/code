import { Directive,ElementRef, Input } from '@angular/core';

/**
 * Generated class for the AutofocusDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[autofocus]' // Attribute selector
})
export class AutofocusDirective {
  elementRef: any;
  @Input() public appAutoFocus: boolean;
  constructor(elementRef: ElementRef) {
    console.log('Hello AutofocusDirective Directive');
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    setTimeout(() => {
      this.elementRef.nativeElement.style.background = '#ff0000';
      // this.elementRef.nativeElement.focus();
   
  }, 500);
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { metaData } from '../../pages/onboarding_forms/Chile/background-verification/response-form-control';


/**
 * Generated class for the FromFieldsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'customInput',
  templateUrl: 'from-fields.html',
})
export class FromFieldsComponent {
  @Output() selectionChange : EventEmitter<string> = new EventEmitter<string>();

  @Input() data : metaData;
  @Input() label : string;
  @Input() type : string;
  @Input() otherStatus : boolean;
  @Input() dateFormat : string;
  @Input() options : any[];
  @Input() maxDate : string;
  @Input() minDate : string;
  @Input() wordCount : boolean;

   

  constructor() {
    console.log('Hello FromFieldsComponent Component');
    // this.text = 'Hello World';
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(this.dateFormat);
  }

  onChange(event) {
    console.log(event)
    this.selectionChange.emit(event);
  }

}

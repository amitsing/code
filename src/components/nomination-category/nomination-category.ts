import { Component } from '@angular/core';

@Component({
  selector: 'nomination-category',
  templateUrl: 'nomination-category.html'
})
export class NominationCategoryComponent {

  text: string;

  constructor() {
    console.log('Hello NominationCategoryComponent Component');
  }

}

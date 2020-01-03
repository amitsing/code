import { Component } from '@angular/core';

/**
 * Generated class for the PostDetailsSkeltonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'post-details-skelton',
  templateUrl: 'post-details-skelton.html'
})
export class PostDetailsSkeltonComponent {

  text: string;

  constructor() {
    console.log('Hello PostDetailsSkeltonComponent Component');
    this.text = 'Hello World';
  }

}

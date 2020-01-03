import { Component } from '@angular/core';

@Component({
  selector: 'home-skeleton',
  templateUrl: 'home-skeleton.html'
})
export class HomeSkeletonComponent {

  text: string;

  constructor() {
    console.log('Hello HomeSkeletonComponent Component');
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'team-awesome',
  templateUrl: 'team-awesome.html'
})
export class TeamAwesomeComponent {

  text: string;

  constructor() {
    console.log('Hello TeamAwesomeComponent Component');
  }

}

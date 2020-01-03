import { Component,Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the NewsViewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'news-view',
  templateUrl: 'news-view.html'
})
export class NewsViewComponent {
  @Input('postImage') image;
  @Input('postTitle') title;
  @Input('postDate') date;
  @Input('postFlag') flag;
  @Input() allData;
  // text: string;

  constructor() {
    console.log('Hello NewsViewComponent Component');
    // this.text = 'Hello World';
  
  }
  ngAfterViewInit(){
    console.log('image', this.image);
    console.log('title', this.title);
    console.log('date', this.date);
    console.log('flag', this.flag);
  }

}

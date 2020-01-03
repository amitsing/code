import { Component, Input } from '@angular/core';
import { ImagecontrollerProvider } from '../../providers/services/imagecontroller';

/**
 * Generated class for the CustomImageTagComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'customImage',
  templateUrl: 'custom-image-tag.html'
})
export class CustomImageTagComponent {

  text: string;
  @Input() imageSrc : string;
  @Input() customClass : string[] = [];
 
  constructor(
    private _imageProvider : ImagecontrollerProvider
  ) {
    console.log('Hello CustomImageTagComponent Component', this.imageSrc , this.customClass);
    // this.text = 'Hello World';
  }

  pp(image : any) : void{
    this._imageProvider.presentImage(image);
  }

}

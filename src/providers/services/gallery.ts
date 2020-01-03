import { Injectable } from "@angular/core";
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { Image } from '../../Modals/uploadImage'
import { FileTransferProvider } from "./fileTransfer";

@Injectable()
export class GalleryProvider{
    options: ImagePickerOptions;

    constructor(protected _imagePicker : ImagePicker, protected _fileTransfer : FileTransferProvider){
        this.options = {
            quality: 50,
            // outputType: 1,
            maximumImagesCount: 5,
        }
    }

    getPicture() : Promise<Image[]>{
        let image = new Promise<Image[]>((resolve,reject)=>{
            this._imagePicker.getPictures(this.options).then((imagePath)=>{
                let allImage : Image[]=[];
                imagePath.forEach(element => {
                    let imageData = new Image();
                    imageData.url = element;
                    let name = element.split("/");
                    imageData.name = name[name.length - 1];
                    this._fileTransfer.getBase64String(imageData.url,imageData.name).then(res=>{
                        imageData.preview = `data:image/jpeg;base64,${res}`;
                        allImage.push(imageData);
                    }); 
                    allImage.push(imageData);
                });
                resolve(allImage);
            })
        })
        return image;    
    }
}
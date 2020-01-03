import { Injectable } from "@angular/core";
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Image } from '../../Modals/uploadImage'
import { FileTransferProvider } from "./fileTransfer";

@Injectable()
export class AndroidCameraProvider{

    options: CameraOptions;

    constructor(private _camera : Camera, protected _fileTransfer : FileTransferProvider){
        this.options = {
            quality: 40,
            allowEdit:true,
            saveToPhotoAlbum:true,
            cameraDirection:1,
            destinationType: this._camera.DestinationType.FILE_URI,
            encodingType: this._camera.EncodingType.JPEG,
            mediaType: this._camera.MediaType.PICTURE,
          }
    }

    getPicture() : Promise<Image>{
        let image = new Promise<Image>((resolve,reject)=>{
            this._camera.getPicture(this.options).then((imagePath)=>{
                let imageData = new Image();
                imageData.url = imagePath;
                let name = imagePath.split("/");
                imageData.name = name[name.length - 1];
                this._fileTransfer.getBase64String(imageData.url,imageData.name).then(res=>{
                    imageData.preview = `data:image/jpeg;base64,${res}`;
                    resolve(imageData);
                });
                resolve(imageData);
            });
        })
        return image;    
    }
}
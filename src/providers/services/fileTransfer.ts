import { Injectable } from "@angular/core";
import { File } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';


@Injectable()
export class FileTransferProvider{
    constructor(protected _file : File, protected _fileTransfer: FileTransfer){

    }

    getBase64String(path:string,file:string):Promise<string>{
        let base64 = new Promise<string>((resolve,reject)=>{
            this._file.readAsDataURL(path,file).then(res=>{
                resolve(res);
            })
        })
        return base64;
    }

    uploadFile(url:string,targetFilePath:string,options:any) : Promise<any>{
        let response = new Promise<any>((resolve,reject)=>{
           const fileTransfer : FileTransferObject = this._fileTransfer.create();
           fileTransfer.upload(targetFilePath,url,options).then(res=>{
               resolve(res);
           })
        });
        return response;
    }
}
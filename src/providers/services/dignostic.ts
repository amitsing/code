import { Injectable } from "@angular/core";
import { Diagnostic } from '@ionic-native/diagnostic';

@Injectable()
export class DignosticProvider{
    constructor( private _dignostic : Diagnostic){

    }

    getLocationStatus() : boolean{
        let status : boolean;
        this._dignostic.isLocationEnabled().then(res=>{
            status = res;
        }).catch(err=>{
            throw new Error(err);
        })
        return status;
    }

    activateLocationService() : boolean{
        this._dignostic.switchToLocationSettings();
        return this.getLocationStatus();
    }

    getCameraStatus() : boolean{
        let status:boolean;
        this._dignostic.isCameraAuthorized().then((res)=>{
            status = res;
        }).catch((err)=>{
            throw new Error(err);
        });
        return status;
    }

    activateCamera() : boolean{
        let status : boolean;
        this._dignostic.requestCameraAuthorization().then((res)=>{
            status = res;
        }).catch((err)=>{
            throw new Error(err)
        })
        return status;
    }
}
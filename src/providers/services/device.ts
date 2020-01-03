import { Injectable } from '@angular/core';
import { Device } from '@ionic-native/device';

@Injectable()
export class DeviceProvider {
    constructor( private _device : Device ){

    }

    getDevicePaltform():string{
        console.log("1",this._device.platform);
        return this._device.platform;
    }

    getDeviceUUID():string{
        console.log("2",this._device.uuid);
        return this._device.uuid;
    }
}
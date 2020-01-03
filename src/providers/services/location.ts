import { Injectable } from "@angular/core";
import { DignosticProvider } from "./dignostic";
import { LocationModal } from "../../Modals/location";
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';

@Injectable()
export class LocationtProvider{
    constructor( private _dignostic : DignosticProvider, private _geolocation : Geolocation, private _nativeGeocoder : NativeGeocoder){
        
    }

    getCurruntPossition(): Promise<LocationModal>{
        let location =  new Promise<LocationModal>((resolve,reject)=>{
            this._geolocation.getCurrentPosition().then((res)=>{
                let temp : LocationModal;
                temp.latitude = res.coords.latitude;
                temp.longitude = res.coords.longitude;
                this.getCurrentCity(temp.latitude,temp.longitude).then(res=>{
                    temp.city = res;
                    resolve(temp);
                }).catch(err=>{
                    reject(err);
                });
            });
        }) 
        return location;
    }

    getCurrentCity(latitude : number, longitude : number) : Promise<string> {
        let cityName = new Promise<string>((resolve,reject)=>{
            let options: NativeGeocoderOptions = {
                useLocale: true,
                maxResults: 1
            };
           this._nativeGeocoder.reverseGeocode(latitude,longitude,options).then((res:NativeGeocoderReverseResult[])=>{
                resolve(res[0].locality);
            }).catch(err=>{
                reject(err);
            });
        })
        return cityName; 
    }

}
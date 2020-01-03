import { NgModule } from '@angular/core';
import { Device } from '@ionic-native/device';
import { DeviceProvider } from './services/device';
import { RazorpayProvider } from '../providers/razorpay/razorpay';
import { DignosticProvider } from './services/dignostic';
import { IosCameraProvider } from './services/ios_Camera';
import { AndroidCameraProvider } from './services/android_Camera';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Camera } from '@ionic-native/camera';
import { LocationtProvider } from './services/location';
import { GalleryProvider } from './services/gallery';
import { FileTransferProvider } from './services/fileTransfer';
import { ImagecontrollerProvider } from './services/imagecontroller';


@NgModule({
  declarations: [],
  imports: [],
  providers:[
    Diagnostic,
    Camera,
    Device,
    DeviceProvider,
    RazorpayProvider,
    DignosticProvider,
    AndroidCameraProvider,
    IosCameraProvider,
    LocationtProvider,
    GalleryProvider,
    FileTransferProvider,
    ImagecontrollerProvider
  ]
})
export class ServicesModule {}

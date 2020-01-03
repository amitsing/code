import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from "@angular/http";
import { MyApp } from './app.component';
// import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Camera } from '@ionic-native/camera';
import { Device } from '@ionic-native/device';
import { FCM } from '@ionic-native/fcm';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { IonicStorageModule } from '@ionic/storage';
// import {RoundProgressModule} from 'angular-svg-round-progressbar';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule } from '@angular/common/http';
import { ApiServiceProvider } from '../providers/api-service/api-service';
import { RazorpayProvider } from '../providers/razorpay/razorpay';
import { ImagePicker } from '@ionic-native/image-picker';
import { Network } from '@ionic-native/network';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { Geolocation } from '@ionic-native/geolocation';
import { Clipboard } from '@ionic-native/clipboard';
import { Diagnostic } from '@ionic-native/diagnostic';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { ServicesModule } from '../providers/service.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { TooltipsModule } from 'ionic-tooltips';
@NgModule({
  declarations: [
    MyApp,
    // HomePage,
    // ListPage
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    HttpClientModule,HttpModule,ServicesModule,
    IonicModule.forRoot(MyApp,{tabsPlacement: 'top', tabsHideOnSubPages: true,}),
    IonicStorageModule.forRoot(),
    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    }),
    IonicImageViewerModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // HomePage,
    // ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Clipboard,
    Diagnostic,
    NativeGeocoder,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    Device,
    FCM,
    File,
    FileTransfer,
    InAppBrowser,
    PhotoViewer,
    ApiServiceProvider,
    RazorpayProvider,
    ImagePicker,Network,LaunchNavigator,
    AndroidPermissions,Geolocation
    // RoundProgressModule

  ]
})
export class AppModule {}

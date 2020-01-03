webpackJsonp([132],{

/***/ 1028:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutocompletePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_diagnostic__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_geocoder__ = __webpack_require__(175);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AutocompletePage = /** @class */ (function () {
    // autocompleteItems;
    // autocomplete; 
    // geo: any
    // service = new google.maps.places.AutocompleteService();
    function AutocompletePage(geolocation, storage, apiServices, navCtrl, navParams, modlCtrl, platform, viewCtrl, zone, diagnostic, loadingCtrl, alertCtrl, nativeGeocoder, toastCtrl, events) {
        var _this = this;
        this.geolocation = geolocation;
        this.storage = storage;
        this.apiServices = apiServices;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modlCtrl = modlCtrl;
        this.platform = platform;
        this.viewCtrl = viewCtrl;
        this.zone = zone;
        this.diagnostic = diagnostic;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.nativeGeocoder = nativeGeocoder;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.dataValue = 0;
        this.mySelectedCity = '';
        this.closeAppPopupShow = 0;
        //   this.autocompleteItems = [];
        // this.autocomplete = {
        //   query: ''
        // };
        this.mySelectedCity = this.navParams.get('locationCity');
        console.log('************************city is===', this.mySelectedCity);
        if (this.mySelectedCity == '' || this.mySelectedCity == null || this.mySelectedCity == undefined
            || this.mySelectedCity == 'undefined' || this.mySelectedCity.lenght <= 0) {
            this.mySelectedCity = '';
            console.log('************************city is blank===', this.mySelectedCity);
        }
        else {
            this.mySelectedCity = this.navParams.get('locationCity');
            this.storage.get('currentLat').then(function (data) {
                console.log('currentLat ==', data);
                _this.currentLatitude = data;
            });
            this.storage.get('currentLong').then(function (data) {
                console.log('currentLong ==', data);
                _this.currentLongitude = data;
            });
        }
    }
    AutocompletePage.prototype.commonLoader = function () {
        this.loadingPopup = this.loadingCtrl.create({
            enableBackdropDismiss: true,
            spinner: 'ios-small',
            content: 'Loading data...'
        });
        this.loadingPopup.present();
    };
    AutocompletePage.prototype.getGeolocatonData = function () {
        var _this = this;
        // this.showloc();  // uncomment for run only browser
        this.diagnostic.isLocationEnabled().then(function (res) {
            if (res == true) {
                _this.showloc();
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Your device location is off.',
                    subTitle: 'Please turn on your device location.',
                    // buttons: ['Dismiss']
                    buttons: [
                        {
                            text: 'Dismiss',
                            handler: function (data) {
                                console.log('Cancel clicked');
                                // this.loadingPopup.dismiss();
                            }
                        },
                        {
                            text: 'Ok',
                            handler: function (data) {
                                console.log('Saved clicked');
                                _this.diagnostic.switchToLocationSettings();
                                // this.loadingPopup.dismiss();
                            }
                        }
                    ]
                });
                alert_1.present();
            }
        });
    };
    AutocompletePage.prototype.showloc = function () {
        var _this = this;
        this.commonLoader();
        console.log('this. is get geo location data function=');
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.loadingPopup.dismiss();
            console.log('this is reponce of geolocation=', resp);
            if (resp.coords.latitude != undefined) {
                _this.storage.set('currentLat', resp.coords.latitude);
                _this.storage.set('currentLong', resp.coords.longitude);
                _this.currentLatitude = resp.coords.latitude;
                _this.currentLongitude = resp.coords.longitude;
                _this.addressfind();
            }
        }).catch(function (error) {
            _this.loadingPopup.dismiss();
            console.log('Error getting location', error);
        });
        var watch = this.geolocation.watchPosition();
        watch.subscribe(function (data) {
            _this.events.publish('location1', data);
            console.log('this is reponce of geolocation watchPosition=', data);
            if (data.coords.latitude != undefined) {
                _this.storage.set('currentLat', data.coords.latitude);
                _this.storage.set('currentLong', data.coords.longitude);
                _this.currentLatitude = data.coords.latitude;
                _this.currentLongitude = data.coords.longitude;
                _this.addressfind();
            }
        });
    };
    AutocompletePage.prototype.addressfind = function () {
        var _this = this;
        // this.callAfterFourSec.unsubscribe();
        console.log('in address find func');
        var options = {
            useLocale: true,
            maxResults: 1
        };
        console.log("options", options);
        console.log("this.lat", this.currentLatitude);
        console.log("this.long", this.currentLongitude);
        this.nativeGeocoder.reverseGeocode(this.currentLatitude, this.currentLongitude, options)
            .then(function (result) {
            console.log('nativeGeocoder', result);
            _this.cityName = result[0].locality;
            console.log('this is new City Name=', _this.cityName);
            _this.mySelectedCity = _this.cityName;
            // this.loadingPopup.dismiss();
            _this.dismiss(_this.cityName);
            // this.sendloc(this.cityName,'');
        })
            .catch(function (error) {
            console.log('error', error);
            _this.commmonTast(error);
        });
        console.log('cityName22', this.cityName);
    };
    AutocompletePage.prototype.commmonTast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 1500,
            position: 'top'
        });
        toast.present();
    };
    AutocompletePage.prototype.goBack = function () {
        var manuallyCloseModal = 1;
        this.viewCtrl.dismiss({ "latitude": this.currentLatitude, "longitude": this.currentLongitude, "cityName": this.mySelectedCity }).then(function (manuallyCloseModal) {
        });
        // this.navCtrl.pop();
    };
    AutocompletePage.prototype.dismiss = function (Cityname) {
        this.viewCtrl.dismiss({ "latitude": this.currentLatitude, "longitude": this.currentLongitude, "cityName": Cityname }).then(function (res) {
        });
    };
    AutocompletePage.prototype.ngOnInit = function () {
        var _this = this;
        this.acService = new google.maps.places.AutocompleteService();
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
        this.storage.get('privillege_image').then(function (data) {
            _this.previewImage = data;
            console.log("previewImage", _this.previewImage);
        });
    };
    AutocompletePage.prototype.updateSearch = function () {
        console.log('modal > updateSearch');
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }
        var self = this;
        var config = {
            //types:  ['geocode'], // other types available in the API: 'establishment', 'regions', and 'cities'
            input: this.autocomplete.query,
            componentRestrictions: {}
        };
        this.acService.getPlacePredictions(config, function (predictions, status) {
            console.log('modal > getPlacePredictions > status > ', status);
            self.autocompleteItems = [];
            console.log('predictions data ', predictions);
            predictions.forEach(function (prediction) {
                self.autocompleteItems.push(prediction);
            });
        });
    };
    AutocompletePage.prototype.chooseItem = function (address) {
        var _this = this;
        this.commonLoader();
        console.log('selectedAddress== ', address);
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': address.description }, function (results, status) {
            _this.loadingPopup.dismiss();
            console.log('all data from google results== ', results);
            console.log('all data from google status== ', status);
            // this.events.publish('location', results);
            _this.currentLatitude = results[0].geometry.location.lat();
            _this.currentLongitude = results[0].geometry.location.lng();
            _this.addressfind();
            console.log("lat: " + _this.currentLatitude + ", long: " + _this.currentLongitude);
        });
    };
    AutocompletePage.prototype.ionViewWillEnter = function () {
        this.initializeBackButtonCustomHandler();
    };
    AutocompletePage.prototype.ionViewWillLeave = function () {
        this.events.publish('location', this.currentLatitude, this.currentLongitude);
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    AutocompletePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AutocompletePage');
    };
    //Hardware Back Button
    AutocompletePage.prototype.initializeBackButtonCustomHandler = function () {
        var that = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function (event) {
            // that.navCtrl.popToRoot();
            // that.navCtrl.pop();
            var manuallyCloseModal = 1;
            this.viewCtrl.dismiss({ "latitude": this.currentLatitude, "longitude": this.currentLongitude, "cityName": this.mySelectedCity }).then(function (manuallyCloseModal) {
            });
        }, 101); // Priority 101 will override back button handling (we set in app.component.ts) as it is bigger then priority 100 configured in app.component.ts file */
    };
    AutocompletePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-autocomplete',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/autocomplete/autocomplete.html"*/'<!-- <ion-header>\n    <ion-toolbar>\n      <ion-title>Enter address</ion-title>\n      <ion-searchbar [(ngModel)]="autocomplete.query" [showCancelButton]="true"   (ionInput)="updateSearch()" (ionCancel)="dismiss()"></ion-searchbar>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <ion-list>\n      <ion-item *ngFor="let item of autocompleteItems" tappable   (click)="chooseItem(item)">\n        {{ item }}\n      </ion-item>\n    </ion-list>\n  </ion-content> -->\n\n<ion-header>\n  <ion-navbar>\n    <ion-title>Search address \n      <ion-icon style="font-size: 3rem; font-weight: bold;" float-right name="close" tapable (click)="goBack()"></ion-icon>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content> \n\n  <div class="SearchDiv">\n\n   \n   \n    <ion-searchbar [(ngModel)]="autocomplete.query" [showCancelButton]="true" class="autoSearchDiv" \n      (ionInput)="updateSearch()" (ionCancel)="dismiss()" placeholder="Start typing and select ...">\n    </ion-searchbar>\n    <ion-list>\n      <ion-item *ngFor="let item of autocompleteItems" (click)="chooseItem(item)">{{ item.description }}</ion-item>\n    </ion-list>\n\n\n\n    <div class="divideRowDiv"><hr><p> OR </p></div>\n\n    \n\n    <ion-row class="tapLocationDiv">\n      <ion-col col-12>\n          <!-- <button ion-button round (click)="showloc()"> -->\n          <button ion-button round (click)="getGeolocatonData()">\n          <ion-row class="tapBtn">\n            <ion-col col-2><ion-icon name="md-locate" class="iconClose"></ion-icon></ion-col>\n            <ion-col col-10><h2>Tap to auto-detect current location</h2></ion-col>\n          </ion-row>\n        </button>\n      </ion-col>\n    </ion-row>\n\n\n\n    \n    <ion-row *ngIf="previewImage">\n      <ion-col>\n        <div>\n          <img [src]="previewImage" onError="this.src=\'../../assets/watermark/watermark.png\';" alt="">\n        </div>\n      </ion-col>\n    </ion-row>\n\n  </div>\n</ion-content>'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/autocomplete/autocomplete.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["D" /* ViewController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_diagnostic__["a" /* Diagnostic */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_geocoder__["a" /* NativeGeocoder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], AutocompletePage);
    return AutocompletePage;
}());

//# sourceMappingURL=autocomplete.js.map

/***/ }),

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompletePageModule", function() { return AutocompletePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__autocomplete__ = __webpack_require__(1028);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AutocompletePageModule = /** @class */ (function () {
    function AutocompletePageModule() {
    }
    AutocompletePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__autocomplete__["a" /* AutocompletePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__autocomplete__["a" /* AutocompletePage */]),
            ],
        })
    ], AutocompletePageModule);
    return AutocompletePageModule;
}());

//# sourceMappingURL=autocomplete.module.js.map

/***/ })

});
//# sourceMappingURL=132.js.map
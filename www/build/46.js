webpackJsonp([46],{

/***/ 1185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalkthroughScreenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_img_viewer__ = __webpack_require__(163);
// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams,App } from 'ionic-angular';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WalkthroughScreenPage = /** @class */ (function () {
    function WalkthroughScreenPage(app, imageViewerCtrl, toastCtrl, storage, loadingCtrl, alertCtrl, menu, apiServices, navCtrl, navParams) {
        var _this = this;
        this.app = app;
        this.imageViewerCtrl = imageViewerCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.menu = menu;
        this.apiServices = apiServices;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.introScreen = [];
        this.imgIndex = 0;
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
            console.log(' employeeId== ', _this.employeeId);
        });
        this.introScreen = [
            {
                "imgPath": "assets/walkthroughScreen/Daystojoin.png"
            }, {
                "imgPath": "assets/walkthroughScreen/journey.png"
            }, {
                "imgPath": "assets/walkthroughScreen/joiningFormalities.png"
            }, {
                "imgPath": "assets/walkthroughScreen/joiningdetail.png"
            }
        ];
    }
    WalkthroughScreenPage.prototype.seeNextImage = function () {
        if (this.imgIndex < this.introScreen.length - 1 && this.imgIndex != 3) {
            // if(this.introScreen.length-1!=3){
            this.imgIndex = this.imgIndex + 1;
            // }
        }
        else {
            // alert('go to home');
            // this.navCtrl.setRoot('TabsPage');
            this.gotohome();
            // alert(this.imgIndex);
            // this.app.getRootNav().setRoot('TabsPage')
        }
    };
    WalkthroughScreenPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WalkthroughScreenPage updatewalkthrough');
    };
    //Common Loader:
    WalkthroughScreenPage.prototype.commonLoader = function () {
        this.loading = this.loadingCtrl.create({
            enableBackdropDismiss: true,
            spinner: 'ios-small',
            content: 'Loading data...'
        });
        this.loading.present();
    };
    WalkthroughScreenPage.prototype.gotohome = function () {
        var _this = this;
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
            console.log(' employeeId== ', _this.employeeId);
        });
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            console.log(' deviceId== ', _this.deviceId);
        });
        this.commonLoader();
        this.storage.get('login_token').then(function (data) {
            console.log('AlbumDetails value is111==', data);
            _this.login_token = data;
            var apiKey = {
                "client_id": _this.apiServices.clientId,
                "employee_id": _this.employeeId,
                "device": _this.apiServices.device,
                "device_id": _this.deviceId,
                "app_version": _this.apiServices.appVersion
            };
            console.log('AlbumDetails api apiKey==', apiKey);
            _this.apiServices.updatewalkthrough(apiKey, _this.login_token).subscribe(function (result) {
                console.log('AlbumDetails api res==', result);
                _this.loading.dismiss();
                if (result.success == 1) {
                    _this.storage.set('walkthrough', 1);
                    _this.navCtrl.setRoot('TabsPage');
                    console.log(' api res==11111', result);
                    // this.apiMessage(result.message);
                }
                else {
                    // this.msg=result.message;
                    _this.apiMessage(result.message);
                }
            });
        });
    };
    WalkthroughScreenPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    WalkthroughScreenPage.prototype.ionViewWillEnter = function () {
        this.menu.swipeEnable(false);
    };
    WalkthroughScreenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-walkthrough-screen',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/walkthrough-screen/walkthrough-screen.html"*/'<ion-content>\n    <img [src]="introScreen[imgIndex].imgPath" class="walkImag" tappable (click)="seeNextImage()"/>\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/walkthrough-screen/walkthrough-screen.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */], __WEBPACK_IMPORTED_MODULE_4_ionic_img_viewer__["a" /* ImageViewerController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], WalkthroughScreenPage);
    return WalkthroughScreenPage;
}());

//# sourceMappingURL=walkthrough-screen.js.map

/***/ }),

/***/ 857:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkthroughScreenPageModule", function() { return WalkthroughScreenPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__walkthrough_screen__ = __webpack_require__(1185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WalkthroughScreenPageModule = /** @class */ (function () {
    function WalkthroughScreenPageModule() {
    }
    WalkthroughScreenPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__walkthrough_screen__["a" /* WalkthroughScreenPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__walkthrough_screen__["a" /* WalkthroughScreenPage */]),
            ],
        })
    ], WalkthroughScreenPageModule);
    return WalkthroughScreenPageModule;
}());

//# sourceMappingURL=walkthrough-screen.module.js.map

/***/ })

});
//# sourceMappingURL=46.js.map
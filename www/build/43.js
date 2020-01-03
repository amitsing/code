webpackJsonp([43],{

/***/ 1189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeScreenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_index__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WelcomeScreenPage = /** @class */ (function () {
    function WelcomeScreenPage(toastCtrl, storage, menu, apiServices, navCtrl, navParams) {
        var _this = this;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.menu = menu;
        this.apiServices = apiServices;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
        });
    }
    WelcomeScreenPage.prototype.getMessage = function () {
        var _this = this;
        var apiKey = {
            "packageName": this.apiServices.packageName,
            "device": this.apiServices.device,
            "deviceId": this.deviceId,
            "appVersion": this.apiServices.appVersion,
            "clientId": this.apiServices.clientId,
            "employeeId": this.employeeId,
            "messageType": "1"
        };
        console.log('login api key==', apiKey);
        this.apiServices.welcomeMessage(apiKey).then(function (result) {
            console.log('welcome message== ', result);
            _this.allData = result;
            if (_this.allData.success == 1) {
                _this.welcomeMessage = _this.allData.data;
                _this.storage.set('isFirstLogin', _this.allData.data.is_first_login);
            }
            else {
                _this.apiMessage(_this.allData.message);
            }
        }, function (err) {
            console.log('optionalUpdate err== ', err);
            _this.apiMessage(err);
        });
    };
    WelcomeScreenPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    WelcomeScreenPage.prototype.imageUpload = function () {
        this.navCtrl.push('ProfilePicUploadPage');
    };
    WelcomeScreenPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad WelcomeScreenPage');
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            _this.getMessage();
        });
    };
    WelcomeScreenPage.prototype.ionViewWillEnter = function () {
        this.menu.swipeEnable(false);
    };
    WelcomeScreenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome-screen',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/welcome-screen/welcome-screen.html"*/'\n\n<ion-content style="background:url(\'assets/imgs/bg/welcomeBG.png\'); background-size:cover;">\n  <div *ngIf="welcomeMessage" >\n  <ion-row padding text-center>\n    <ion-col col-12><img src="assets/imgs/welcome1.png" class="welcomImg"></ion-col>\n    <ion-col col-12>\n      <h1>{{welcomeMessage?.title}}</h1>\n      <p style="font-size: 19px;line-height: 30px;margin-bottom: 35px;" [innerHTML]="welcomeMessage?.message"></p>\n    </ion-col>\n    <ion-col col-12>\n      <div class="abslink"><button ion-button text-capitalize (click)="imageUpload()">Let\'s Get Started</button></div>\n    </ion-col>\n  </ion-row> \n</div>\n\n<div *ngIf="!welcomeMessage" >\n  \n  <ion-row padding text-center>\n    <ion-col col-12><div class="imageSkelton"></div></ion-col>\n    <ion-col col-12>\n      <h1 class="nameSkelton"></h1>\n      <p class="messageSkelton"></p>\n      <p class="messageSkelton"></p>\n      <p class="messageSkelton"></p>\n      <p class="messageSkelton messageShortSkelton"></p>\n    </ion-col>\n    <ion-col col-12>\n      <div class=" messageSkelton btnSkelton"></div>\n    </ion-col>\n  </ion-row> \n</div>\n\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/welcome-screen/welcome-screen.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular_index__["r" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], WelcomeScreenPage);
    return WelcomeScreenPage;
}());

//# sourceMappingURL=welcome-screen.js.map

/***/ }),

/***/ 861:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeScreenPageModule", function() { return WelcomeScreenPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome_screen__ = __webpack_require__(1189);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WelcomeScreenPageModule = /** @class */ (function () {
    function WelcomeScreenPageModule() {
    }
    WelcomeScreenPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__welcome_screen__["a" /* WelcomeScreenPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__welcome_screen__["a" /* WelcomeScreenPage */]),
            ],
        })
    ], WelcomeScreenPageModule);
    return WelcomeScreenPageModule;
}());

//# sourceMappingURL=welcome-screen.module.js.map

/***/ })

});
//# sourceMappingURL=43.js.map
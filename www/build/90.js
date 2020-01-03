webpackJsonp([90],{

/***/ 1087:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnboardPreviewPage; });
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





var OnboardPreviewPage = /** @class */ (function () {
    function OnboardPreviewPage(navCtrl, navParams, storage, apiServices, toastCtrl, menu) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.apiServices = apiServices;
        this.toastCtrl = toastCtrl;
        this.menu = menu;
        this.btnText = "Submit";
        this.enableSubmitBtn = true;
        this.previousePageData = this.navParams.get('data');
        console.log('this is previouse page data== ', this.previousePageData);
        this.storage.get('showOnBoard').then(function (data) {
            console.log('showOnBoard value is111==', data);
            _this.employee_type = data;
        });
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
        });
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
        });
        // this.commingFrom=this.previousePageData.commingFrom;
        if (this.previousePageData != undefined) {
            // console.log("hhhhhh",this.previousePageData.name);
            this.name = this.previousePageData.userName;
            this.image = this.previousePageData.userImage;
            this.information = this.previousePageData.aboardMsg;
            this.place = this.previousePageData.place;
            this.passtime = this.previousePageData.passtime;
            this.food = this.previousePageData.food;
            this.education = this.previousePageData.qualification;
        }
    }
    OnboardPreviewPage.prototype.ceoMessage = function () {
        this.navCtrl.push('CeoMessagePage');
    };
    OnboardPreviewPage.prototype.imageUpload = function () {
        this.navCtrl.push('ImageUploadPage');
    };
    OnboardPreviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OnboardPreviewPage');
    };
    OnboardPreviewPage.prototype.Edit = function () {
        this.navCtrl.pop();
    };
    OnboardPreviewPage.prototype.gotohome = function () {
        var _this = this;
        this.btnText = "Please wait...";
        this.enableSubmitBtn = false;
        if (this.education == '') {
            this.education = "";
        }
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
        });
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            var apiKey = {
                "clientId": _this.apiServices.clientId,
                "employeeId": _this.employeeId,
                "device": _this.apiServices.device,
                "deviceId": _this.deviceId,
                "appVersion": _this.apiServices.appVersion,
                "hobby": _this.passtime,
                "food": _this.food,
                "favLocation": _this.place,
                "qualification": _this.education,
                "about": _this.information
            };
            console.log('login api key==', apiKey);
            _this.apiServices.submit_aboard(apiKey).then(function (result) {
                console.log('optionalUpdate response== ', result);
                _this.allData = result;
                console.log('this.allData', _this.allData);
                _this.btnText = "Submit";
                _this.enableSubmitBtn = true;
                if (_this.allData.success == 1) {
                    _this.storage.set('isFormSubmit', _this.allData.is_first_formSubmit);
                    _this.navCtrl.setRoot('HomePage');
                }
                else {
                    _this.apiMessage(_this.allData.message);
                }
            }, function (err) {
                console.log('err== ', err);
                _this.apiMessage(err);
                _this.btnText = "Submit";
                _this.enableSubmitBtn = true;
            });
        });
    };
    OnboardPreviewPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    OnboardPreviewPage.prototype.ionViewWillEnter = function () {
        this.menu.swipeEnable(false);
    };
    OnboardPreviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-onboard-preview',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/onboard-preview/onboard-preview.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card padding class="relative">\n    <ion-row>\n      <ion-col col-12 class="absolute"><img srcset="{{image}}" src="../../assets/watermark/watermark.png"></ion-col>\n      <ion-col col-9><h3>{{name}}</h3></ion-col>\n      <ion-col col-12>\n        <p margin-vertical  [innerHTML]="information">{{information}}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row class="likes" padding-top>\n      <ion-col col-6>\n        <ion-row>\n          <ion-col col-2>\n              <ion-icon name="pin"></ion-icon>\n          </ion-col>\n          <ion-col >\n              <p>{{place}}</p>\n          </ion-col>\n        </ion-row>\n        \n      </ion-col>\n      <ion-col col-6>\n        <ion-row>\n          <ion-col col-2>\n              <ion-icon name="game-controller-b"></ion-icon>\n          </ion-col>\n          <ion-col >\n              <p>{{passtime}}</p>\n          </ion-col>\n        </ion-row>\n       </ion-col>\n      <ion-col col-6>\n          <ion-row>\n            <ion-col col-2>\n                <!-- <ion-icon name="beer"></ion-icon> -->\n\n                <img class="hobbiIcon" src="../../assets/imgs/favFood1.png">\n\n            </ion-col>\n            <ion-col >\n                <p>{{food}}</p>\n            </ion-col>\n          </ion-row>  </ion-col>\n    </ion-row>\n  </ion-card>\n  <ion-row>\n    <ion-col col-6 text-center>\n      <div class="abslink">\n        <button ion-button (click)="Edit()">Edit</button>\n      </div>\n    </ion-col>\n    <ion-col col-6 text-center>\n      <div class="abslink">\n        <button ion-button [disabled]="enableSubmitBtn==false" (click)="gotohome()">{{btnText}}</button>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/onboard-preview/onboard-preview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular_index__["r" /* MenuController */]])
    ], OnboardPreviewPage);
    return OnboardPreviewPage;
}());

//# sourceMappingURL=onboard-preview.js.map

/***/ }),

/***/ 784:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardPreviewPageModule", function() { return OnboardPreviewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__onboard_preview__ = __webpack_require__(1087);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OnboardPreviewPageModule = /** @class */ (function () {
    function OnboardPreviewPageModule() {
    }
    OnboardPreviewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__onboard_preview__["a" /* OnboardPreviewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__onboard_preview__["a" /* OnboardPreviewPage */]),
            ],
        })
    ], OnboardPreviewPageModule);
    return OnboardPreviewPageModule;
}());

//# sourceMappingURL=onboard-preview.module.js.map

/***/ })

});
//# sourceMappingURL=90.js.map
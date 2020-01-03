webpackJsonp([143],{

/***/ 1017:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutEvalueservePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutEvalueservePage = /** @class */ (function () {
    function AboutEvalueservePage(storage, alertCtrl, apiServices, navCtrl, navParams) {
        var _this = this;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.apiServices = apiServices;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage.get('login_token').then(function (data) { _this.login_token = data; });
        this.storage.get('employee_type').then(function (data) { _this.employee_type = data; });
        this.storage.get('employeeId').then(function (data) { _this.employeeId = data; });
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            console.log('login deviceId== ', _this.deviceId);
            _this.getList();
        });
    }
    AboutEvalueservePage.prototype.IntroEvalueserve = function (data) {
        this.navCtrl.push('AboutDetailsPage', { 'data': data });
    };
    AboutEvalueservePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutEvalueservePage');
    };
    AboutEvalueservePage.prototype.getList = function () {
        var _this = this;
        this.storage.get('employee_type').then(function (data) { _this.employee_type = data; });
        this.storage.get('login_token').then(function (data) {
            _this.login_token = data;
            var apiKey = {
                "client_id": _this.apiServices.clientId,
                "employee_id": _this.employeeId,
                "device": _this.apiServices.device,
                "device_id": _this.deviceId,
                "user_type": _this.employee_type,
                "app_version": _this.apiServices.appVersion,
            };
            _this.apiServices.aboutEvalList(apiKey, _this.login_token).subscribe(function (result) {
                console.log('aboutEvalueserve api res==', result);
                if (result.success == 1) {
                    _this.bannerImage = result.banner_image;
                    _this.aboutEvalueserve = result.data;
                }
                else {
                    _this.presentAlert(result.message);
                }
            }, function (err) {
                _this.presentAlert(err);
            });
        });
    };
    AboutEvalueservePage.prototype.presentAlert = function (message) {
        var _this = this;
        var alert = this.alertCtrl.create({
            subTitle: message,
            buttons: [{
                    text: 'Ok',
                    role: 'ok',
                    handler: function () {
                        console.log('Cancel clicked');
                        _this.navCtrl.pop();
                    }
                }]
        });
        alert.present();
    };
    AboutEvalueservePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about-evalueserve',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/about-evalueserve/about-evalueserve.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title> Evalueserve</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <div *ngIf="aboutEvalueserve">\n      <ion-row>\n          <ion-col no-padding col-12><img [src]="bannerImage"></ion-col>\n        </ion-row>\n      \n        <ion-row >\n          <ion-col col-12 *ngFor="let AboutData of aboutEvalueserve" (click)="IntroEvalueserve(AboutData)">\n            <ion-card no-margin>\n              <ion-row class="paddLR-10">\n                <ion-col col-10 style="margin:auto;"> \n                  <div [innerHTML]="AboutData.category_name"></div>            \n                </ion-col>\n                <ion-col col-2 text-right class="arrow"><ion-icon name="ios-arrow-forward"></ion-icon></ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n    </div>\n\n\n\n    <div *ngIf="!aboutEvalueserve">\n        <ion-row>\n            <ion-col no-padding col-12><div class="skeletonBg aboutBennerSkelton"></div></ion-col>\n          </ion-row>\n        \n          <ion-row >\n            <ion-col col-12 *ngFor="let AboutData of [1,2,3,4,5]" >\n              <ion-card no-margin class="textSkelton">\n                <ion-row class="paddLR-10">\n                  <ion-col col-10 style="margin:auto;"> \n                    <div class="textSkelton">\n                        What is Lorem Ipsum?\n                    </div>            \n                  </ion-col>\n                  <ion-col col-2 text-right class="arrow textSkelton"><ion-icon name="ios-arrow-forward"></ion-icon></ion-col>\n                </ion-row>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n      </div>\n \n\n\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/about-evalueserve/about-evalueserve.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], AboutEvalueservePage);
    return AboutEvalueservePage;
}());

//# sourceMappingURL=about-evalueserve.js.map

/***/ }),

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutEvalueservePageModule", function() { return AboutEvalueservePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_evalueserve__ = __webpack_require__(1017);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutEvalueservePageModule = /** @class */ (function () {
    function AboutEvalueservePageModule() {
    }
    AboutEvalueservePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__about_evalueserve__["a" /* AboutEvalueservePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about_evalueserve__["a" /* AboutEvalueservePage */]),
            ],
        })
    ], AboutEvalueservePageModule);
    return AboutEvalueservePageModule;
}());

//# sourceMappingURL=about-evalueserve.module.js.map

/***/ })

});
//# sourceMappingURL=143.js.map
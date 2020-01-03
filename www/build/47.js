webpackJsonp([47],{

/***/ 1184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatemobilenoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UpdatemobilenoPage = /** @class */ (function () {
    function UpdatemobilenoPage(navCtrl, navParams, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.storage.get('showOnBoard').then(function (data) {
            console.log('showOnBoard value is111==', data);
            _this.employee_type = data;
        });
    }
    UpdatemobilenoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UpdatemobilenoPage');
    };
    UpdatemobilenoPage.prototype.dismiss = function () {
        var _this = this;
        this.storage.get('showOnBoard').then(function (data) {
            console.log('showOnBoard value is111==', data);
            _this.employee_type = data;
            if (_this.employee_type == 'Guest') {
                _this.navCtrl.push('JoineeupdatenumberPage');
            }
            else {
                _this.navCtrl.push('ProfilePage');
            }
        });
    };
    UpdatemobilenoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-updatemobileno',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/updatemobileno/updatemobileno.html"*/'\n<ion-header>\n  <ion-navbar hideBackButton >\n      <ion-buttons right>\n          <button class="btn" ion-button (click)="dismiss()">\n            Next\n          </button>\n        </ion-buttons> \n    <!-- <ion-title>updatemobileno</ion-title> -->\n  </ion-navbar>\n</ion-header>\n\n  <!-- <ion-toolbar color="headColor">\n    <ion-buttons left>\n      <button ion-button (click)="dismiss()">\n        Next\n       \n      </button>\n    </ion-buttons> \n  </ion-toolbar> -->\n\n<ion-content >\n\n  <ion-row>\n    <ion-col auto>\n        <div>\n            <img  src="assets/imgs/Thankyouimage.png"/>\n        </div>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/updatemobileno/updatemobileno.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], UpdatemobilenoPage);
    return UpdatemobilenoPage;
}());

//# sourceMappingURL=updatemobileno.js.map

/***/ }),

/***/ 856:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatemobilenoPageModule", function() { return UpdatemobilenoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__updatemobileno__ = __webpack_require__(1184);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UpdatemobilenoPageModule = /** @class */ (function () {
    function UpdatemobilenoPageModule() {
    }
    UpdatemobilenoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__updatemobileno__["a" /* UpdatemobilenoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__updatemobileno__["a" /* UpdatemobilenoPage */]),
            ],
        })
    ], UpdatemobilenoPageModule);
    return UpdatemobilenoPageModule;
}());

//# sourceMappingURL=updatemobileno.module.js.map

/***/ })

});
//# sourceMappingURL=47.js.map
webpackJsonp([73],{

/***/ 1157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PopoverLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PopoverLoginPage = /** @class */ (function () {
    function PopoverLoginPage(viewCtrl, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PopoverLoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PopoverLoginPage');
    };
    PopoverLoginPage.prototype.clsoePopOber = function () {
        this.viewCtrl.dismiss();
    };
    PopoverLoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-popover-login',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/popover-login/popover-login.html"*/'<!--\n  Generated template for the PopoverLoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>popoverLogin</ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content class="instructionPopoverContent">\n<ion-row>\n  <ion-col>\n      <!-- <div>\n          <p class="centerp">1. Evalueserve employees need to login with their official email address.</p>\n          <p class="centerp">2. Candidates need to login with their registered email address on Evalueserve career portal.</p>\n      </div> -->\n      <p class="titleInc">Instructions</p>\n      <ul class="ulData">\n          <li>\n              Evalueserve employees need to login with their official email address.\n        </li>\n        <li>\n            Candidates need to login with their registered email address on Evalueserve career portal.\n      </li>\n    </ul>\n  </ion-col>\n</ion-row>\n<ion-row>\n  <ion-col>\n      <div class="btndiv">\n          <button ion-button small round class="btn" (click)="clsoePopOber()">close</button>\n       </div>\n  </ion-col>\n</ion-row>\n<br>\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/popover-login/popover-login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["D" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], PopoverLoginPage);
    return PopoverLoginPage;
}());

//# sourceMappingURL=popover-login.js.map

/***/ }),

/***/ 829:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverLoginPageModule", function() { return PopoverLoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover_login__ = __webpack_require__(1157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PopoverLoginPageModule = /** @class */ (function () {
    function PopoverLoginPageModule() {
    }
    PopoverLoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__popover_login__["a" /* PopoverLoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__popover_login__["a" /* PopoverLoginPage */]),
            ],
        })
    ], PopoverLoginPageModule);
    return PopoverLoginPageModule;
}());

//# sourceMappingURL=popover-login.module.js.map

/***/ })

});
//# sourceMappingURL=73.js.map
webpackJsonp([70],{

/***/ 1160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileDosDontsPage; });
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
 * Generated class for the ProfileDosDontsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfileDosDontsPage = /** @class */ (function () {
    function ProfileDosDontsPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    ProfileDosDontsPage.prototype.close = function () {
        var data = 'dismiss';
        this.viewCtrl.dismiss(data);
    };
    ProfileDosDontsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InductionUserImageDosDontsPage');
    };
    ProfileDosDontsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile-dos-donts',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/profile-dos-donts/profile-dos-donts.html"*/'<ion-content >\n<div style = "height:100%;width:100%" (click)="close()">\n<!-- <img src="assets/imgs/userimageupload/20190607_144352.jpg"/> -->\n<img src="assets/imgs/userimageupload/passport picture1image.png"/>\n</div>\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/profile-dos-donts/profile-dos-donts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["D" /* ViewController */]])
    ], ProfileDosDontsPage);
    return ProfileDosDontsPage;
}());

//# sourceMappingURL=profile-dos-donts.js.map

/***/ }),

/***/ 832:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileDosDontsPageModule", function() { return ProfileDosDontsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_dos_donts__ = __webpack_require__(1160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfileDosDontsPageModule = /** @class */ (function () {
    function ProfileDosDontsPageModule() {
    }
    ProfileDosDontsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile_dos_donts__["a" /* ProfileDosDontsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile_dos_donts__["a" /* ProfileDosDontsPage */]),
            ],
        })
    ], ProfileDosDontsPageModule);
    return ProfileDosDontsPageModule;
}());

//# sourceMappingURL=profile-dos-donts.module.js.map

/***/ })

});
//# sourceMappingURL=70.js.map
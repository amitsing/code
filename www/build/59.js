webpackJsonp([59],{

/***/ 1171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideThreeImagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_android_permissions__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SlideThreeImagePage = /** @class */ (function () {
    function SlideThreeImagePage(navCtrl, plt, navParams, androidPermissions) {
        this.navCtrl = navCtrl;
        this.plt = plt;
        this.navParams = navParams;
        this.androidPermissions = androidPermissions;
    }
    SlideThreeImagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SlideThreeImagePage');
        if (this.plt.is('cordova')) {
            // This will only print when on iOS
            this.camPermissionON();
            console.log('I am an iOS device!');
        }
    };
    SlideThreeImagePage.prototype.seeNext = function (val) {
        if (val < 3) {
            this.slides.slideNext();
        }
        else {
            // this.navCtrl.push('ChooseUserPage');
            this.navCtrl.push('TandCbeforeloginPage');
        }
    };
    SlideThreeImagePage.prototype.camPermissionON = function () {
        var _this = this;
        //camera permission
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(function (result) { return console.log('Has permission?', result.hasPermission); }, function (err) { return _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.CAMERA); });
        this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);
        //external storage access
        this.androidPermissions.requestPermissions([
            this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE,
            this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE
        ]);
        //external storage access
        // this.androidPermissions.hasPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE)
        //       .then(status => {
        //         if (status.hasPermission) {
        //           // this.captureVideo();
        //         } else {
        //           this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE)
        //           .then(status =>{
        //             // if(status.hasPermission) this.captureVideo();
        //           });
        //         }
        //       })
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* Slides */])
    ], SlideThreeImagePage.prototype, "slides", void 0);
    SlideThreeImagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-slide-three-image',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/slide-three-image/slide-three-image.html"*/'<ion-content >\n<ion-slides pager="true">\n    <ion-slide>\n      <img src="../assets/slideImage/connectfinaldesign.png" class="slideImage"/>\n    <div class="absoDiv">  <button ion-button class="btn" (click)="seeNext(1)">Next</button></div>\n    </ion-slide>\n    <ion-slide>\n      <img src="../assets/slideImage/Contributefinal.png" class="slideImage"/>\n      <div class="absoDiv">  <button ion-button class="btn" (click)="seeNext(2)">Next</button></div>\n    </ion-slide>\n    <ion-slide>\n      <img src="../assets/slideImage/Say Cheers_finaldesign.png" class="slideImage"/>\n      <div class="absoDiv">  <button ion-button class="btn" (click)="seeNext(3)">Next</button></div>\n\n    </ion-slide>\n</ion-slides>\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/slide-three-image/slide-three-image.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_android_permissions__["a" /* AndroidPermissions */]])
    ], SlideThreeImagePage);
    return SlideThreeImagePage;
}());

//# sourceMappingURL=slide-three-image.js.map

/***/ }),

/***/ 843:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideThreeImagePageModule", function() { return SlideThreeImagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slide_three_image__ = __webpack_require__(1171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SlideThreeImagePageModule = /** @class */ (function () {
    function SlideThreeImagePageModule() {
    }
    SlideThreeImagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__slide_three_image__["a" /* SlideThreeImagePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__slide_three_image__["a" /* SlideThreeImagePage */]),
            ],
        })
    ], SlideThreeImagePageModule);
    return SlideThreeImagePageModule;
}());

//# sourceMappingURL=slide-three-image.module.js.map

/***/ })

});
//# sourceMappingURL=59.js.map
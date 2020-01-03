webpackJsonp([87],{

/***/ 1115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GdpRconsentPage; });
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
 * Generated class for the GdpRconsentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GdpRconsentPage = /** @class */ (function () {
    function GdpRconsentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GdpRconsentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GdpRconsentPage');
    };
    GdpRconsentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-gdp-rconsent',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/onboarding_forms/India/gdp-rconsent/gdp-rconsent.html"*/'  <!--\n\n  Generated template for the GdpRconsentPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>GDPRconsent</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="pageDiv">\n\n    <div class="customCardDiv">\n\n        <p class="paracenter">Part A</p>\n\n        <p class="paracenter">Consent Acknowledgment Form</p>\n\n      \n\n      <p>I confirm that the information provided by me in the application form is accurate and correct \n\n        . i understand that in the event of my employeement, if any information provided here by me is found to be \n\n      untrue, my employeement could be terminated without notice.  </p>\n\n\n\n      <p class="para4">A: I confirm that the information provided by me in the application form is accurate and correct.</p>\n\n      <div class="borderdiv">\n\n        <p class="para4">Question 1</p>\n\n        <p>I confirm that the information provided by me in the application form is accurate and correct \n\n            . i understand that in the event of my employeement, if any information provided here by me is found to be \n\n          untrue, my employeement could be terminated without notice.  </p>\n\n\n\n          <ion-list no-margin radio-group [(ngModel)]="PANcheck">\n\n              <ion-row class="radioDiv">\n\n                <ion-col col-4>\n\n                  <ion-item>\n\n                    <ion-label class="genderlable">No</ion-label>\n\n                    <ion-radio value="yes" checked></ion-radio>\n\n                  </ion-item>\n\n                </ion-col>\n\n                <ion-col col-4>\n\n                  <ion-item>\n\n                    <ion-label class="genderlable">Yes</ion-label>\n\n                    <ion-radio value="No"></ion-radio>\n\n                  </ion-item>\n\n                </ion-col>\n\n                <ion-col col-4></ion-col>\n\n              </ion-row>\n\n            </ion-list>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/onboarding_forms/India/gdp-rconsent/gdp-rconsent.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], GdpRconsentPage);
    return GdpRconsentPage;
}());

//# sourceMappingURL=gdp-rconsent.js.map

/***/ }),

/***/ 803:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GdpRconsentPageModule", function() { return GdpRconsentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gdp_rconsent__ = __webpack_require__(1115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GdpRconsentPageModule = /** @class */ (function () {
    function GdpRconsentPageModule() {
    }
    GdpRconsentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__gdp_rconsent__["a" /* GdpRconsentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__gdp_rconsent__["a" /* GdpRconsentPage */]),
            ],
        })
    ], GdpRconsentPageModule);
    return GdpRconsentPageModule;
}());

//# sourceMappingURL=gdp-rconsent.module.js.map

/***/ })

});
//# sourceMappingURL=87.js.map
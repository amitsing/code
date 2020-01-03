webpackJsonp([107],{

/***/ 1065:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HrpolicydetailsPage; });
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
 * Generated class for the HrpolicydetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HrpolicydetailsPage = /** @class */ (function () {
    //Constructor:
    function HrpolicydetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.policy = this.navParams.get('Policy');
        console.log('Policy From Back Page:', this.policy);
        this.navTitle = this.policy.policy_title;
        this.fileName = this.policy.policy_text;
    }
    HrpolicydetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hrpolicydetails',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/hrpolicydetails/hrpolicydetails.html"*/'<ion-header>\n  <ion-navbar color="themecol" class="leftIt" hideBackButton="false">\n    <ion-title>{{navTitle}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n<div class="HRpolicyHeading">\n  <ion-row>\n    <ion-col>\n     <p class="titleCss">{{navTitle}}</p>\n    </ion-col>\n  </ion-row>\n</div>\n<div class="divFrame">\n  <!-- <iframe [src]="fileName " frameborder="0" class="framecss"></iframe> -->\n  <div [innerHTML]="fileName" class="framecss"></div>\n</div>\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/hrpolicydetails/hrpolicydetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], HrpolicydetailsPage);
    return HrpolicydetailsPage;
}());

//# sourceMappingURL=hrpolicydetails.js.map

/***/ }),

/***/ 762:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrpolicydetailsPageModule", function() { return HrpolicydetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hrpolicydetails__ = __webpack_require__(1065);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HrpolicydetailsPageModule = /** @class */ (function () {
    function HrpolicydetailsPageModule() {
    }
    HrpolicydetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__hrpolicydetails__["a" /* HrpolicydetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__hrpolicydetails__["a" /* HrpolicydetailsPage */]),
            ],
        })
    ], HrpolicydetailsPageModule);
    return HrpolicydetailsPageModule;
}());

//# sourceMappingURL=hrpolicydetails.module.js.map

/***/ })

});
//# sourceMappingURL=107.js.map
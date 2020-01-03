webpackJsonp([85],{

/***/ 1123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JoineedeclarationPage; });
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
 * Generated class for the JoineedeclarationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JoineedeclarationPage = /** @class */ (function () {
    function JoineedeclarationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    JoineedeclarationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JoineedeclarationPage');
    };
    JoineedeclarationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-joineedeclaration',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/onboarding_forms/India/joineedeclaration/joineedeclaration.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Declaration</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="pageDiv">\n\n    <div class="customCardDiv">\n\n      <p>I confirm that the information provided by me in the application form is accurate and correct \n\n        . i understand that in the event of my employeement, if any information provided here by me is found to be \n\n      untrue, my employeement could be terminated without notice.  </p>\n\n      \n\n\n\n      <ion-row>\n\n          <ion-col col-12>\n\n            <div class="inputDiv">\n\n              <ion-label>Date\n\n                <sup class="redText">*</sup>\n\n              </ion-label>\n\n              <ion-input placeholder="Enter Text"></ion-input>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>  \n\n       \n\n        <p class="para4">Have you ever been known by another name?</p>\n\n        \n\n        <ion-row>\n\n            <ion-col col-12>\n\n              <div class="inputDiv">\n\n                <ion-label>Check\n\n                  <sup class="redText">*</sup>\n\n                </ion-label>\n\n                <ion-list no-margin radio-group [(ngModel)]="PANcheck">\n\n                  <ion-row class="radioDiv">\n\n                    <ion-col col-6>\n\n                      <ion-item>\n\n                        <ion-label class="genderlable">No</ion-label>\n\n                        <ion-radio value="yes" checked></ion-radio>\n\n                      </ion-item>\n\n                    </ion-col>\n\n                    <ion-col col-6>\n\n                      <ion-item>\n\n                        <ion-label class="genderlable">Yes</ion-label>\n\n                        <ion-radio value="No"></ion-radio>\n\n                      </ion-item>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                </ion-list>\n\n              </div>\n\n            </ion-col>\n\n          </ion-row> \n\n<p class="para4">If yes, please share the name and duration since it changed</p>\n\n\n\n<ion-row>\n\n    <ion-col col-12>\n\n      <div class="inputDiv">\n\n        <ion-label>Other Name\n\n          <sup class="redText">*</sup>\n\n        </ion-label>\n\n        <ion-input placeholder="Enter Text"></ion-input>\n\n      </div>\n\n    </ion-col>\n\n  </ion-row> \n\n  \n\n  <ion-row>\n\n      <ion-col col-12>\n\n        <div class="inputDiv1">\n\n          <ion-label>Date\n\n            <sup class="redText">*</sup>\n\n          </ion-label>\n\n          <ion-item>\n\n            <ion-label>Date</ion-label>\n\n            <ion-datetime [(ngModel)]="myDate" displayFormat="MM/DD/YYYY"></ion-datetime>\n\n          </ion-item>\n\n\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n\n\n    </div>\n\n  </div>\n\n\n\n  <div class="btndiv">\n\n    <button ion-button class="btn" (click)="update()">Update</button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/onboarding_forms/India/joineedeclaration/joineedeclaration.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], JoineedeclarationPage);
    return JoineedeclarationPage;
}());

//# sourceMappingURL=joineedeclaration.js.map

/***/ }),

/***/ 807:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoineedeclarationPageModule", function() { return JoineedeclarationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__joineedeclaration__ = __webpack_require__(1123);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var JoineedeclarationPageModule = /** @class */ (function () {
    function JoineedeclarationPageModule() {
    }
    JoineedeclarationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__joineedeclaration__["a" /* JoineedeclarationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__joineedeclaration__["a" /* JoineedeclarationPage */]),
            ],
        })
    ], JoineedeclarationPageModule);
    return JoineedeclarationPageModule;
}());

//# sourceMappingURL=joineedeclaration.module.js.map

/***/ })

});
//# sourceMappingURL=85.js.map
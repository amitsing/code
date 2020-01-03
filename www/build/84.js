webpackJsonp([84],{

/***/ 1141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RevenueandcustomPage; });
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
 * Generated class for the RevenueandcustomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RevenueandcustomPage = /** @class */ (function () {
    function RevenueandcustomPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RevenueandcustomPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RevenueandcustomPage');
    };
    RevenueandcustomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-revenueandcustom',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/onboarding_forms/UK/revenueandcustom/revenueandcustom.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>HM Revenue & Custom Starter Checklist</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="pageDiv">\n    <div class="customCardDiv">\n      <p class="para4">HM Revenue & Custom Starter Checklist</p>\n      <p class="para3">HM Revenue & Custom Starter Checklist</p>\n      <p>I confirm that the information provided by me in the application form is accurate and correct . i understand that in\n        the event of my employeement, if any information provided here by me is found to be untrue, my employeement could\n        be terminated without notice. </p>\n    </div>\n  </div>\n\n  <div class="pageDiv">\n    <div class="customCardDiv">\n      <p class="para4">Employee\'s personal details</p>\n      <ion-row>\n        <ion-col col-12>\n          <div class="inputDiv">\n            <ion-label>Last Name\n              <sup class="redText">*</sup>\n            </ion-label>\n            <ion-input type="text" name="lname" [(ngModel)]="lname" placeholder="Enter your name"></ion-input>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-12>\n          <div class="inputDiv">\n            <ion-label>First Name\n              <sup class="redText">*</sup>\n            </ion-label>\n            <ion-input type="text" name="fname" [(ngModel)]="fname" placeholder="Enter your name"></ion-input>\n          </div>\n        </ion-col>\n      </ion-row>\n\n\n      <ion-row>\n        <ion-col col-12>\n          <div class="inputDiv">\n            <ion-label>Gender\n              <sup class="redText">*</sup>\n            </ion-label>\n            <ion-list no-margin radio-group [(ngModel)]="relationship">\n              <ion-row class="radioDiv">\n                <ion-col col-6>\n                  <ion-item>\n                    <ion-label class="genderlable">Male</ion-label>\n                    <ion-radio value="Male"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-6>\n                  <ion-item>\n                    <ion-label class="genderlable">Female</ion-label>\n                    <ion-radio value="female"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-list>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-12>\n          <div class="inputDiv1">\n            <ion-label>Date of Birth\n              <sup class="redText">*</sup>\n            </ion-label>\n            <ion-item>\n              <ion-label>Date</ion-label>\n              <ion-datetime [(ngModel)]="myDate" displayFormat="MM/DD/YYYY"></ion-datetime>\n            </ion-item>\n\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-12>\n          <div class="inputDiv">\n            <ion-label>Address\n              <sup class="redText">*</sup>\n            </ion-label>\n            <ion-textarea type="text" name="pAddress" [(ngModel)]="pAddress" placeholder="" class="custom-class-text" id="comment" rows="2"></ion-textarea>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-12>\n          <div class="inputDiv">\n            <ion-label>National Insurance Number(if known)\n              <sup class="redText">*</sup>\n            </ion-label>\n            <ion-input type="tel" name="landnum" [(ngModel)]="landnum" placeholder="Enter Text"></ion-input>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-12>\n          <div class="inputDiv1">\n            <ion-label>Employment Start Date\n              <sup class="redText">*</sup>\n            </ion-label>\n            <ion-item>\n              <ion-label>Date</ion-label>\n              <ion-datetime [(ngModel)]="myDate" displayFormat="MM/DD/YYYY"></ion-datetime>\n            </ion-item>\n\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n\n\n  <div class="pageDiv">\n    <div class="customCardDiv">\n      <p class="para4">Employee statment</p>\n      <p class="para3">You need to select only one of the following statments A, B or C:</p>\n\n      <ion-list no-margin radio-group [(ngModel)]="relationship">\n        <ion-row class="radioDiv">\n          <ion-col col-12>\n            <ion-item>\n              <ion-label class="genderlable">A. this is my first job since last 6 April and I have not been receiving taxable jobseekar allowance</ion-label>\n              <ion-radio value="Male"></ion-radio>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row class="radioDiv">\n          <ion-col col-12>\n            <ion-item>\n              <ion-label class="genderlable">B. this is my first job since last 6 April and I have not been receiving taxable jobseekar allowance</ion-label>\n              <ion-radio value="female"></ion-radio>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-list>\n    </div>\n  </div>\n\n  <div class="pageDiv">\n    <div class="customCardDiv">\n      <p class="para4">Student Loan</p>\n      <p class="para3">Do you have any Student loan which is not fully repaid?</p>\n      <ion-list no-margin radio-group [(ngModel)]="relationship">\n        <ion-row class="radioDiv">\n          <ion-col col-6>\n            <ion-item>\n              <ion-label class="genderlable">Yes</ion-label>\n              <ion-radio value="Male"></ion-radio>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6>\n            <ion-item>\n              <ion-label class="genderlable">No</ion-label>\n              <ion-radio value="female"></ion-radio>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-list>\n    </div>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/onboarding_forms/UK/revenueandcustom/revenueandcustom.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], RevenueandcustomPage);
    return RevenueandcustomPage;
}());

//# sourceMappingURL=revenueandcustom.js.map

/***/ }),

/***/ 815:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevenueandcustomPageModule", function() { return RevenueandcustomPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__revenueandcustom__ = __webpack_require__(1141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RevenueandcustomPageModule = /** @class */ (function () {
    function RevenueandcustomPageModule() {
    }
    RevenueandcustomPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__revenueandcustom__["a" /* RevenueandcustomPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__revenueandcustom__["a" /* RevenueandcustomPage */]),
            ],
        })
    ], RevenueandcustomPageModule);
    return RevenueandcustomPageModule;
}());

//# sourceMappingURL=revenueandcustom.module.js.map

/***/ })

});
//# sourceMappingURL=84.js.map
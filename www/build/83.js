webpackJsonp([83],{

/***/ 1145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CorporateOrientationAssistencePage; });
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
 * Generated class for the CorporateOrientationAssistencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CorporateOrientationAssistencePage = /** @class */ (function () {
    function CorporateOrientationAssistencePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CorporateOrientationAssistencePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CorporateOrientationAssistencePage');
    };
    CorporateOrientationAssistencePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-corporate-orientation-assistence',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/onboarding_forms/US/corporate-orientation-assistence/corporate-orientation-assistence.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>corporateOrientationAssistence</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="container">\n\n    <div class="row">\n\n      <input\n\n        type="hidden"\n\n        id="url"\n\n        value="https://benepik.in/reach/Onboarding_Forms/US_Forms/attendence_sheet_form.php?89"\n\n      />\n\n      <input type="hidden" value="69" id="mas_form_id" />\n\n      <input type="hidden" value="89" id="employee_id" />\n\n      <input type="hidden" value="7" id="country_id" />\n\n      <div\n\n        class="col-md-12 col-xs-12 col-sm-12"\n\n        id="formDiv"\n\n        style="display: block;"\n\n      >\n\n        <div class="formDiv">\n\n          <div class="inputDiv">\n\n            <label>Employee Name<sup class="mendatFild">*</sup></label>\n\n            <input\n\n              type="text"\n\n              readonly=""\n\n              style="background-color: lightgray"\n\n              value="Reach Test"\n\n            />\n\n          </div>\n\n          <strong style="font-size: 17px;">Functional Area</strong>\n\n          <div>\n\n            <strong>Human Resources</strong>\n\n            <div class="inputDiv">\n\n              <label>Attended On<sup class="mendatFild">*</sup></label>\n\n              <input\n\n                type="text"\n\n                id="human_date"\n\n                class="dateDiv"\n\n                value="2019-10-15"\n\n                readonly="readonly"\n\n              />\n\n            </div>\n\n          </div>\n\n          <div>\n\n            <strong>IT and Information Security</strong>\n\n            <div class="inputDiv">\n\n              <label>Attended On<sup class="mendatFild">*</sup></label>\n\n              <input\n\n                type="text"\n\n                id="it_date"\n\n                class="dateDiv"\n\n                value="2019-10-15"\n\n                readonly="readonly"\n\n              />\n\n            </div>\n\n          </div>\n\n          <div>\n\n            <strong>Administration</strong>\n\n            <div class="inputDiv">\n\n              <label>Attended On<sup class="mendatFild">*</sup></label>\n\n              <input\n\n                type="text"\n\n                id="administration_date"\n\n                class="dateDiv"\n\n                value="2019-10-15"\n\n                readonly="readonly"\n\n              />\n\n            </div>\n\n          </div>\n\n        </div>\n\n        <div text-center class="submitBtn" id="submit">\n\n          <button\n\n            type="submit"\n\n            id="submitFinal"\n\n            value="update"\n\n            name="submitFinal"\n\n            onclick="submitForm(this.value);"\n\n          >\n\n            Update\n\n          </button>\n\n        </div>\n\n      </div>\n\n      <div class="row" style="display: none;" id="alertForm">\n\n        <div\n\n          class="col-md-6 col-lg-6 col-xs-6"\n\n          style="position: absolute; text-align: center; top: 46%; left: 29%;"\n\n        >\n\n          <div class="inputDiv" style="background-color: white">\n\n            Oop\'s Something went wrong. <br />Please go back and try again after\n\n            some time.\n\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/onboarding_forms/US/corporate-orientation-assistence/corporate-orientation-assistence.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], CorporateOrientationAssistencePage);
    return CorporateOrientationAssistencePage;
}());

//# sourceMappingURL=corporate-orientation-assistence.js.map

/***/ }),

/***/ 817:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorporateOrientationAssistencePageModule", function() { return CorporateOrientationAssistencePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__corporate_orientation_assistence__ = __webpack_require__(1145);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CorporateOrientationAssistencePageModule = /** @class */ (function () {
    function CorporateOrientationAssistencePageModule() {
    }
    CorporateOrientationAssistencePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__corporate_orientation_assistence__["a" /* CorporateOrientationAssistencePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__corporate_orientation_assistence__["a" /* CorporateOrientationAssistencePage */]),
            ],
        })
    ], CorporateOrientationAssistencePageModule);
    return CorporateOrientationAssistencePageModule;
}());

//# sourceMappingURL=corporate-orientation-assistence.module.js.map

/***/ })

});
//# sourceMappingURL=83.js.map
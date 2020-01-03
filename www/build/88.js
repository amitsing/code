webpackJsonp([88],{

/***/ 1107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeclarationMediclaimPage; });
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


var DeclarationMediclaimPage = /** @class */ (function () {
    function DeclarationMediclaimPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DeclarationMediclaimPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DeclarationMediclaimPage');
    };
    DeclarationMediclaimPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-declaration-mediclaim',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/onboarding_forms/India/declaration-mediclaim/declaration-mediclaim.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Declaration Mediclaim</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="commonFormDiv">\n  <div class="WebFormDiv">\n    \n    \n    <!-- <ion-row>\n      <ion-col col-12 text-center><h6 no-margin><b>Group Mediclaim & Accidental Insurance:</b></h6></ion-col>\n    </ion-row> -->\n    <ion-row>\n      <ion-col col-12>\n        <div class="headingDiv" no-margin>\n            <h4 text-center><b>Group Mediclaim & Accidental Insurance:</b></h4>\n          <h6 no-margin>Group Mediclaim and Accidental Insurance policy is compulsory forall employeeof Evalueserve. Given below arethe options for Group Mediclaim & Accidental Insurance Policy.</h6>\n        </div>\n      </ion-col>\n    </ion-row>\n    \n  \n    <div class="newCardDiv">\n      <div class="newHeading"><h4 no-margin>Select a preferred choice</h4></div>\n      <div class="customCardDiv">\n        <!-- <ion-row>\n          <ion-col col-12><h5 no-margin>Select a preferred choice</h5></ion-col>\n        </ion-row> -->\n        <ion-row>\n          <ion-col col-12>\n            <div class="inputDiv">\n              <ion-label>Select Choice <sup class="redText">*</sup></ion-label>\n              <div class="checkBoxDiv">\n                <ion-list radio-group no-margin>\n                  <ion-row>\n                    <ion-col col-4>\n                      <label><ion-radio id="Self" name="preferred" value="Self"></ion-radio><small for="Self">Self</small></label>\n                    </ion-col>\n                    <ion-col col-8>\n                      <label><ion-radio id="SD" name="preferred" value="SD"></ion-radio><small for="SD">Self+Dependents</small></label>\n                    </ion-col>\n                  </ion-row>\n                </ion-list>\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n    \n    \n    <div class="newCardDiv">\n      <div class="newHeading"><h4 no-margin>Select a preferred choice for Self+Dependants</h4></div>\n      <div class="customCardDiv">\n        <!-- <ion-row>\n          <ion-col col-12><h4 no-margin>Select a preferred choice for Self+Dependants</h4></ion-col>\n        </ion-row> -->\n        <ion-list radio-group no-margin>\n          <ion-row>\n            <ion-col col-12>\n              <div class="inputDiv">\n                <ion-label>Option 1 <sup class="redText">*</sup></ion-label>\n                <div class="checkBoxDiv">\n                  <ion-row class="multiRadio">\n                    <ion-col col-12>\n                      <label>\n                        <ion-radio type="radio" id="sum1" name="preferred" value="sum1"></ion-radio>\n                        <!-- <small>Self</small> -->\n                        <p for="sum1"><span>Sum Insured:</span><strong> Rs.200,000/-</strong><br><span>Yearly Premium for Self:</span><strong> Rs.5,951/-</strong></p>\n                      </label>\n                    </ion-col>\n                  </ion-row>\n                </div>\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12>\n              <div class="inputDiv">\n                <ion-label>Option 2 <sup class="redText">*</sup></ion-label>\n                <div class="checkBoxDiv">\n                  <ion-row class="multiRadio">\n                    <ion-col col-12>\n                      <label>\n                        <ion-radio type="radio" id="sum2" name="preferred" value="sum2"></ion-radio>\n                        <!-- <small>Self</small> -->\n                        <p for="sum2"><span>Sum Insured:</span><strong> Rs.300,000/-</strong><br><span>Yearly Premium for Self:</span><strong> Rs.8,992/-</strong></p>\n                      </label>\n                    </ion-col>\n                  </ion-row>\n                </div>\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12>\n              <div class="inputDiv">\n                <ion-label>Option 3 <sup class="redText">*</sup></ion-label>\n                <div class="checkBoxDiv">\n                  <ion-row class="multiRadio">\n                    <ion-col col-12>\n                      <label>\n                        <ion-radio type="radio" id="sum3" name="preferred" value="sum3"></ion-radio>\n                        <!-- <small>Self</small> -->\n                        <p for="sum3"><span>Sum Insured:</span><strong> Rs.500,000/-</strong><br><span>Yearly Premium for Self:</span><strong> Rs.13,458/-</strong></p>\n                      </label>\n                    </ion-col>\n                  </ion-row>\n                </div>\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12>\n              <div class="inputDiv">\n                <ion-label>Option 4 <sup class="redText">*</sup></ion-label>\n                <div class="checkBoxDiv">\n                  <ion-row class="multiRadio">\n                    <ion-col col-12>\n                      <label>\n                        <ion-radio type="radio" id="sum4" name="preferred" value="sum4"></ion-radio>\n                        <!-- <small>Self</small> -->\n                        <p for="sum4"><span>Sum Insured:</span><strong> Rs.600,000/-</strong><br><span>Yearly Premium for Self:</span><strong> Rs.16,134/-</strong></p>\n                      </label>\n                    </ion-col>\n                  </ion-row>\n                </div>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-list>\n      </div>\n    </div>\n    \n    \n    <div class="newCardDiv">\n      <div class="newHeading"><h4 text-center no-margin>Annual Premium for Dependants</h4></div>\n      <div class="customCardDiv">\n        <!-- <ion-row>\n          <ion-col col-12><h6 text-center no-margin>Annual Premium for Dependants</h6></ion-col>\n        </ion-row> -->\n        <ion-row>\n          <ion-col col-12>\n            <div class="inputDiv">\n              <ion-label>Father <sup class="redText">*</sup></ion-label>\n              <div class="checkBoxDiv">\n                <ion-row class="multiRadio">\n                  <ion-col col-12>\n                    <label>\n                      <ion-checkbox></ion-checkbox>\n                      <p><span>Yearly Premium for Father:</span><strong> Rs.5,007/-</strong></p>\n                    </label>\n                  </ion-col>\n                </ion-row>\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12>\n            <div class="inputDiv">\n              <ion-label>Mother <sup class="redText">*</sup></ion-label>\n              <div class="checkBoxDiv">\n                <ion-row class="multiRadio">\n                  <ion-col col-12>\n                    <label>\n                      <ion-checkbox></ion-checkbox>\n                      <!-- <small>Self</small> -->\n                      <p><span>Yearly Premium for Mother:</span><strong> Rs.5,007/-</strong></p>\n                    </label>\n                  </ion-col>\n                </ion-row>\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12>\n            <div class="inputDiv">\n              <ion-label>Spouse <sup class="redText">*</sup></ion-label>\n              <div class="checkBoxDiv">\n                <ion-row class="multiRadio">\n                  <ion-col col-12>\n                    <label>\n                      <ion-checkbox></ion-checkbox>\n                      <!-- <small>Self</small> -->\n                      <p><span>Yearly Premium for Spouse:</span><strong> Rs.1,403/-</strong></p>\n                    </label>\n                  </ion-col>\n                </ion-row>\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12>\n            <div class="inputDiv">\n              <ion-label>Child-1<sup class="redText">*</sup></ion-label>\n              <div class="checkBoxDiv">\n                <ion-row class="multiRadio">\n                  <ion-col col-12>\n                    <label>\n                      <ion-checkbox></ion-checkbox>\n                      <!-- <small>Self</small> -->\n                      <p><span>Yearly Premium for Child-1:</span><strong> Rs.1,403/-</strong></p>\n                    </label>\n                  </ion-col>\n                </ion-row>\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12>\n            <div class="inputDiv">\n              <ion-label>Child-2<sup class="redText">*</sup></ion-label>\n              <div class="checkBoxDiv">\n                <ion-row class="multiRadio">\n                  <ion-col col-12>\n                    <label>\n                      <ion-checkbox></ion-checkbox>\n                      <!-- <small>Self</small> -->\n                      <p><span>Yearly Premium for Child-2:</span><strong> Rs.1,403/-</strong></p>\n                    </label>\n                  </ion-col>\n                </ion-row>\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12><h6>Total Premium is: <strong>Rs. 5951</strong></h6></ion-col>\n        </ion-row>\n      </div>\n    </div>\n\n\n\n\n\n\n\n\n\n\n    <br>\n    <ion-row text-center>\n      <ion-col col-12>\n        <div class="submitBtn">\n          <button ion-button>Submit</button>\n        </div>\n      </ion-col>\n    </ion-row>\n    <br>\n\n\n\n\n  </div>\n</ion-content>'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/onboarding_forms/India/declaration-mediclaim/declaration-mediclaim.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], DeclarationMediclaimPage);
    return DeclarationMediclaimPage;
}());

//# sourceMappingURL=declaration-mediclaim.js.map

/***/ }),

/***/ 799:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeclarationMediclaimPageModule", function() { return DeclarationMediclaimPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__declaration_mediclaim__ = __webpack_require__(1107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DeclarationMediclaimPageModule = /** @class */ (function () {
    function DeclarationMediclaimPageModule() {
    }
    DeclarationMediclaimPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__declaration_mediclaim__["a" /* DeclarationMediclaimPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__declaration_mediclaim__["a" /* DeclarationMediclaimPage */]),
            ],
        })
    ], DeclarationMediclaimPageModule);
    return DeclarationMediclaimPageModule;
}());

//# sourceMappingURL=declaration-mediclaim.module.js.map

/***/ })

});
//# sourceMappingURL=88.js.map
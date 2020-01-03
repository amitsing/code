webpackJsonp([86],{

/***/ 1116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenralInformationPage; });
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


var GenralInformationPage = /** @class */ (function () {
    function GenralInformationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.addresscheck = true;
        this.relationship = 'Male';
        this.pAddress = 'delhi';
        this.PANcheck = 'yes';
        this.isDisabled = true;
    }
    GenralInformationPage.prototype.update = function (pRemark) {
        console.log('fname', this.fname);
        console.log('mname', this.mname);
        console.log('lname', this.lname);
        console.log('fathername', this.fathername);
        console.log('relationship', this.relationship);
        console.log('MaritalStatus', this.MaritalStatus);
        console.log('Department', this.Department);
        console.log('Designation', this.Designation);
        console.log('dJoining', this.dJoining);
        console.log('pAddress', this.pAddress);
        console.log('preAddress', this.preAddress);
        console.log('addresscheck', this.addresscheck);
        var yOffset = document.getElementById(pRemark).offsetTop;
        this.content.scrollTo(0, yOffset, 3000);
    };
    GenralInformationPage.prototype.updatecheck = function () {
        console.log('Cucumbers new state:' + this.addresscheck);
    };
    GenralInformationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GenralInformationPage');
    };
    GenralInformationPage.prototype.enable = function () {
        if (this.isDisabled == true) {
            this.isDisabled = false;
        }
        else {
            this.isDisabled = true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], GenralInformationPage.prototype, "content", void 0);
    GenralInformationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-genral-information',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/onboarding_forms/India/genral-information/genral-information.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Genral Information</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="pageDiv">\n\n    <div class="customCardDiv">\n\n      <p class="para">General Information</p>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <div class="inputDiv">\n\n            <ion-label>First Name\n\n              <sup class="redText">*</sup>\n\n            </ion-label>\n\n            <ion-input type="text" name="fname" [(ngModel)]="fname" placeholder="Enter your name"></ion-input>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <div class="inputDiv1">\n\n            <ion-label>Middle Name</ion-label>\n\n            <ion-input type="text" name="mname" [(ngModel)]="mname" placeholder="Enter your name"></ion-input>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <div class="inputDiv">\n\n            <ion-label>Last Name\n\n              <sup class="redText">*</sup>\n\n            </ion-label>\n\n            <ion-input type="text" name="lname" [(ngModel)]="lname" placeholder="Enter your name"></ion-input>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <div class="inputDiv">\n\n            <ion-label>Father,s Name\n\n              <sup class="redText">*</sup>\n\n            </ion-label>\n\n            <ion-input type="text" name="fathername" [(ngModel)]="fathername" placeholder="Enter your name"></ion-input>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <div class="inputDiv">\n\n            <ion-label>Gender\n\n              <sup class="redText">*</sup>\n\n            </ion-label>\n\n            <ion-list no-margin radio-group [(ngModel)]="relationship">\n\n              <ion-row class="radioDiv">\n\n                <ion-col col-6>\n\n                  <ion-item>\n\n                    <ion-label class="genderlable">Male</ion-label>\n\n                    <ion-radio value="Male"></ion-radio>\n\n                  </ion-item>\n\n                </ion-col>\n\n                <ion-col col-6>\n\n                  <ion-item>\n\n                    <ion-label class="genderlable">Female</ion-label>\n\n                    <ion-radio value="female"></ion-radio>\n\n                  </ion-item>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-list>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <div class="inputDiv1">\n\n            <ion-label>Marital Status\n\n              <sup class="redText">*</sup>\n\n            </ion-label>\n\n            <ion-item style="background-color: transparent;">\n\n              <ion-label stacked>--Select Status--\n\n                <sup>*</sup>\n\n              </ion-label>\n\n              <ion-select [(ngModel)]="MaritalStatus" placeholder="--Select Status--">\n\n                <ion-option>Married</ion-option>\n\n                <ion-option>Never Married</ion-option>\n\n                <ion-option>Widowed</ion-option>\n\n                <ion-option>Divorced/Separated</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <div class="inputDiv">\n\n            <ion-label>Department\n\n              <sup class="redText">*</sup>\n\n            </ion-label>\n\n            <ion-input type="text" name="Department" [(ngModel)]="Department" placeholder="Enter Text"></ion-input>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <div class="inputDiv">\n\n            <ion-label>Designation\n\n              <sup class="redText">*</sup>\n\n            </ion-label>\n\n            <ion-input type="text" name="Designation" [(ngModel)]="Designation" placeholder="Enter Text"></ion-input>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <div class="inputDiv">\n\n            <ion-label>Date of Joining\n\n              <sup class="redText">*</sup>\n\n            </ion-label>\n\n            <ion-input type="text" name="dJoining" [(ngModel)]="dJoining" placeholder="Enter Text"></ion-input>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <p class="paracss">Parmanent Address\n\n            <sup class="redText">*</sup>\n\n          </p>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <div class="inputDiv">\n\n            <ion-label>Parmanent Address\n\n              <sup class="redText">*</sup>\n\n            </ion-label>\n\n            <ion-textarea type="text" name="pAddress" [(ngModel)]="pAddress" placeholder="" class="custom-class-text" id="comment" rows="2"></ion-textarea>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12 class="pad0">\n\n          <ion-list>\n\n            <ion-item style="margin: -1px 0 0px;" class="itemclass">\n\n              <ion-label class="fontcss">Present Address same as Permanent Address</ion-label>\n\n              <ion-checkbox [(checked)]="addresscheck" [(ngModel)]="addresscheck" (ionChange)="updatecheck()"></ion-checkbox>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <div class="inputDiv">\n\n            <ion-label>Present Address\n\n              <sup class="redText">*</sup>\n\n            </ion-label>\n\n            <span *ngIf="addresscheck==false">\n\n              <ion-textarea type="text" name="preAddress" [(ngModel)]="preAddress" placeholder="" class="custom-class-text" id="comment"\n\n                rows="2"></ion-textarea>\n\n            </span>\n\n            <span *ngIf="addresscheck==true">\n\n              <ion-textarea type="text" name="pAddress" [(ngModel)]="pAddress" placeholder="" class="custom-class-text" id="comment" rows="2"></ion-textarea>\n\n            </span>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <div class="inputDiv">\n\n            <ion-label>Contact Details Landline\n\n              <sup class="redText">*</sup>\n\n            </ion-label>\n\n            <ion-input type="tel" name="landnum" [(ngModel)]="landnum" placeholder="Enter Text"></ion-input>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <div class="inputDiv">\n\n            <ion-label>Contact Details Mobile\n\n              <sup class="redText">*</sup>\n\n            </ion-label>\n\n            <ion-input type="tel" name="mobilenum" [(ngModel)]="mobilenum" placeholder="Enter Text"></ion-input>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <div class="inputDiv">\n\n            <ion-label>Emergency Contact Numbers\n\n              <sup class="redText">*</sup>\n\n            </ion-label>\n\n            <ion-input type="tel" name="Emobilenum" [(ngModel)]="Emobilenum" placeholder="Enter Text"></ion-input>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <div class="inputDiv">\n\n            <ion-label>Email Address (Personal)\n\n              <sup class="redText">*</sup>\n\n            </ion-label>\n\n            <ion-input type="text" name="Email" [(ngModel)]="Email" placeholder="Enter Text"></ion-input>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <div class="inputDiv">\n\n            <ion-label>Official date of Birth\n\n              <sup class="redText">*</sup>\n\n            </ion-label>\n\n            <ion-input type="text" name="dob" [(ngModel)]="dob" placeholder="Enter Text"></ion-input>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <div class="inputDiv1">\n\n            <ion-label>Blood Group\n\n              <sup class="redText">*</sup>\n\n            </ion-label>\n\n            <ion-item style="background-color: transparent;">\n\n              <ion-label stacked>--Select Blood group--<sup>*</sup>\n\n              </ion-label>\n\n              <ion-select [(ngModel)]="bloodgrp" placeholder="--Select Blood group--">\n\n                <ion-option>o+</ion-option>\n\n                <ion-option>o-</ion-option>\n\n                <ion-option>A+</ion-option>\n\n                <ion-option>A-</ion-option>\n\n                <ion-option>B+</ion-option>\n\n                <ion-option>B-</ion-option>\n\n                <ion-option>AB+</ion-option>\n\n                <ion-option>AB-</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <div class="inputDiv">\n\n            <ion-label>PAN Card available\n\n              <sup class="redText">*</sup>\n\n            </ion-label>\n\n            <ion-list no-margin radio-group [(ngModel)]="PANcheck">\n\n              <ion-row class="radioDiv">\n\n                <ion-col col-6>\n\n                  <ion-item>\n\n                    <ion-label class="genderlable">yes</ion-label>\n\n                    <ion-radio value="yes" checked></ion-radio>\n\n                  </ion-item>\n\n                </ion-col>\n\n                <ion-col col-6>\n\n                  <ion-item>\n\n                    <ion-label class="genderlable">No</ion-label>\n\n                    <ion-radio value="No"></ion-radio>\n\n                  </ion-item>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-list>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="PANcheck==\'yes\'">\n\n        <ion-col col-12>\n\n          <div class="inputDiv">\n\n            <ion-label>Parmanent Account Number(PAN)\n\n              <sup class="redText">*</sup>\n\n            </ion-label>\n\n            <ion-input type="text" name="PPAN" [(ngModel)]="PPAN" placeholder="Enter Text"></ion-input>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngIf="PANcheck==\'No\'">\n\n        <ion-col col-12>\n\n          <div class="inputDiv">\n\n            <ion-label>Parmanent Account Number Receipt\n\n              <sup class="redText">*</sup>\n\n            </ion-label>\n\n            <ion-input type="text" name="RPAN" [(ngModel)]="RPAN" placeholder="Enter Text"></ion-input>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <div class="inputDiv">\n\n            <ion-label>Aadhar Number\n\n            </ion-label>\n\n            <ion-input type="text" name="adharnum" [(ngModel)]="adharnum" placeholder="Enter Text"></ion-input>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <div autofocus  class="inputDiv">\n\n            <ion-label>Nationality\n\n            </ion-label>\n\n            <ion-input type="text"  name="Nationality" [(ngModel)]="Nationality" placeholder="Enter Text"></ion-input>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <div class="inputDiv">\n\n            <ion-label>Passport Number\n\n              <sup class="redText">*</sup>\n\n            </ion-label>\n\n            <ion-input type="text" name="passnum" [(ngModel)]="passnum" placeholder="Enter Text"></ion-input>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <div class="inputDiv">\n\n            <ion-label>Physically Challenged\n\n              <sup class="redText">*</sup>\n\n            </ion-label>\n\n            <ion-list no-margin radio-group [(ngModel)]="PhysicallyChallenged">\n\n              <ion-row class="radioDiv">\n\n                <ion-col col-6>\n\n                  <ion-item>\n\n                    <ion-label class="genderlable">yes</ion-label>\n\n                    <ion-radio value="friends" checked></ion-radio>\n\n                  </ion-item>\n\n                </ion-col>\n\n                <ion-col col-6>\n\n                  <ion-item>\n\n                    <ion-label class="genderlable">No</ion-label>\n\n                    <ion-radio value="family"></ion-radio>\n\n                  </ion-item>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-list>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <div class="inputDiv">\n\n            <ion-label>Physically Challenged Remark\n\n            </ion-label>\n\n            <input type="text"  id="pRemark"  name="pRemark" [(ngModel)]="pRemark" placeholder="Enter Text">\n\n            <!-- <ion-input  id="pRemark" type="text" name="pRemark" [(ngModel)]="pRemark" placeholder="Enter Text"></ion-input> -->\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </div>\n\n  </div>\n\n  <div class="pageDiv">\n\n    <div class="customCardDiv">\n\n      <div class="right">\n\n        <span *ngIf="isDisabled==true" (click)=enable()>\n\n          <ion-icon name="ios-create-outline" class="iconcss"></ion-icon>\n\n        </span>\n\n        <span *ngIf="isDisabled==false" (click)=enable()>\n\n          <ion-icon name="ios-close-circle-outline" class="iconcss"></ion-icon>\n\n        </span>\n\n      </div>\n\n      <p class="para">Other Information</p>\n\n      <p>Have you ever convicted in any court of law</p>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <div class="inputDiv">\n\n            <ion-label>Select\n\n              <sup class="redText">*</sup>\n\n            </ion-label>\n\n            <ion-list no-margin radio-group [(ngModel)]="lawcheck">\n\n              <ion-row class="radioDiv">\n\n                <ion-col col-6>\n\n                  <ion-item>\n\n                    <ion-label class="genderlable">yes</ion-label>\n\n                    <ion-radio [disabled]="isDisabled" value="friends"></ion-radio>\n\n                  </ion-item>\n\n                </ion-col>\n\n                <ion-col col-6>\n\n                  <ion-item>\n\n                    <ion-label class="genderlable">No</ion-label>\n\n                    <ion-radio [disabled]="isDisabled" value="family"></ion-radio>\n\n                  </ion-item>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-list>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <div class="inputDiv">\n\n            <ion-label>Share Details\n\n              <sup class="redText">*</sup>\n\n            </ion-label>\n\n            <ion-input type="text" name="SDetails" [(ngModel)]="SDetails" [disabled]="isDisabled" placeholder="Enter Text"></ion-input>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <p>Do you have any location constraint? </p>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <div class="inputDiv">\n\n            <ion-label>Select\n\n              <sup class="redText">*</sup>\n\n            </ion-label>\n\n            <ion-list no-margin radio-group [(ngModel)]="lconstraint">\n\n              <ion-row class="radioDiv">\n\n                <ion-col col-6>\n\n                  <ion-item>\n\n                    <ion-label class="genderlable">yes</ion-label>\n\n                    <ion-radio [disabled]="isDisabled" value="friends" checked></ion-radio>\n\n                  </ion-item>\n\n                </ion-col>\n\n                <ion-col col-6>\n\n                  <ion-item>\n\n                    <ion-label class="genderlable">No</ion-label>\n\n                    <ion-radio [disabled]="isDisabled" value="family"></ion-radio>\n\n                  </ion-item>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-list>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <div class="inputDiv">\n\n            <ion-label>Share Details\n\n              <sup class="redText">*</sup>\n\n            </ion-label>\n\n            <ion-input type="text" name="S2Details" [(ngModel)]="S2Details" [disabled]="isDisabled" placeholder="Enter Text"></ion-input>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </div>\n\n  </div>\n\n  <div class="btndiv">\n\n    <button ion-button class="btn" (click)="update(pRemark)">Update</button>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/onboarding_forms/India/genral-information/genral-information.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], GenralInformationPage);
    return GenralInformationPage;
}());

//# sourceMappingURL=genral-information.js.map

/***/ }),

/***/ 804:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenralInformationPageModule", function() { return GenralInformationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__genral_information__ = __webpack_require__(1116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GenralInformationPageModule = /** @class */ (function () {
    function GenralInformationPageModule() {
    }
    GenralInformationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__genral_information__["a" /* GenralInformationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__genral_information__["a" /* GenralInformationPage */]),
            ],
        })
    ], GenralInformationPageModule);
    return GenralInformationPageModule;
}());

//# sourceMappingURL=genral-information.module.js.map

/***/ })

});
//# sourceMappingURL=86.js.map
webpackJsonp([79],{

/***/ 1097:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChinadeclarationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(164);
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
 * Generated class for the ChinadeclarationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChinadeclarationPage = /** @class */ (function () {
    function ChinadeclarationPage(alertCtrl, platform, menu, loadingCtrl, toastCtrl, storage, apiServices, navCtrl, navParams, iab) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.menu = menu;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.apiServices = apiServices;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.iab = iab;
        this.i = 1;
        this.j = 1;
        this.previousdata = this.navParams.get('data');
        this.nationalities = 'nationalities_no';
        this.finalselect = 'finalselect_no';
        this.storage.get('login_token').then(function (data) { _this.login_token = data; });
        this.storage.get('employeeId').then(function (data) { _this.employeeId = data; });
        this.get_dec();
    }
    ChinadeclarationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChinadeclarationPage');
    };
    ChinadeclarationPage.prototype.get_dec = function () {
        var _this = this;
        this.commonLoader();
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            var apiKey = {
                "client_id": _this.apiServices.clientId,
                "employee_id": _this.employeeId,
                "device": _this.apiServices.device,
                "device_id": _this.deviceId,
                "app_version": _this.apiServices.appVersion,
                "form_id": _this.previousdata.form_id
            };
            _this.apiServices.get_china_declaration(apiKey, _this.login_token).subscribe(function (res) {
                console.log('tnc res==', res);
                _this.loading.dismiss();
                if (res.success == 1) {
                    //  this.alldata=res.data;
                    _this.message_top = res.content.message_top;
                    _this.message_bottom = res.content.message_bottom;
                    console.log('succ');
                    // this.navCtrl.pop();
                    // console.log('succ1', this.allData[0]);
                }
                else {
                    _this.apiMessage(res.message);
                }
            }, function (err) {
                _this.loading.dismiss();
                console.log('err== ', err);
                _this.apiMessage(err);
            });
        });
    };
    //Common Loader:
    ChinadeclarationPage.prototype.commonLoader = function () {
        this.loading = this.loadingCtrl.create({
            enableBackdropDismiss: true,
            spinner: 'ios-small',
            content: 'Loading data...'
        });
        this.loading.present();
    };
    ChinadeclarationPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    ChinadeclarationPage.prototype.update = function () {
        if (this.nationalities == 'nationalities_yes') {
            if (this.nDetails == '' || this.nDetails == undefined) {
                this.i = 2;
                this.j = 1;
                this.msg = 'Please enter empty field.';
                this.apiMessage(this.msg);
                return false;
            }
        }
        if (this.finalselect == 'finalselect_yes') {
            if (this.fDetails == '' || this.fDetails == undefined) {
                this.i = 1;
                this.j = 3;
                this.msg = 'Please enter empty field.';
                this.apiMessage(this.msg);
                return false;
            }
        }
        this.gotosubmit();
    };
    ChinadeclarationPage.prototype.change = function (e, value, index) {
        console.log("value", value);
        if (index == 1) {
            if (value == '' || value == undefined) {
                this.i = 2;
            }
            else {
                this.i = 1;
            }
        }
    };
    ChinadeclarationPage.prototype.change1 = function (e, value, index) {
        console.log("value111", value);
        if (index == 2) {
            if (value == '' || value == undefined) {
                this.j = 3;
            }
            else {
                this.j = 1;
            }
        }
    };
    ChinadeclarationPage.prototype.gotosubmit = function () {
        var _this = this;
        this.commonLoader();
        this.dumpdata = { "nationalities": this.nationalities, "selected": this.finalselect, "Details1": this.nDetails,
            "Details2": this.fDetails };
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            var apiKey = {
                "client_id": _this.apiServices.clientId,
                "employee_id": _this.employeeId,
                "device": _this.apiServices.device,
                "device_id": _this.deviceId,
                "app_version": _this.apiServices.appVersion,
                "data_dump": _this.dumpdata,
                "otp_id": ""
            };
            _this.apiServices.get_declaration_otp(apiKey, _this.login_token).subscribe(function (res) {
                console.log('tnc res==', res);
                _this.loading.dismiss();
                // this.navCtrl.push('DeclarationotpPage');
                if (res.success == 1) {
                    _this.navCtrl.push('DeclarationotpPage', { "form_data": _this.previousdata, "otpdata": res.otp_id });
                    console.log('succ');
                }
                else {
                    _this.apiMessage(res.message);
                }
            }, function (err) {
                _this.loading.dismiss();
                console.log('err== ', err);
                _this.apiMessage(err);
            });
        });
    };
    ChinadeclarationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chinadeclaration',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/onboarding_forms/china/chinadeclaration/chinadeclaration.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Declaration</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <div class="pageDiv">\n        <div class="customCardDiv">\n          <!-- <div class="right">\n            <span *ngIf="isDisabled==true" (click)=enable()>\n              <ion-icon name="ios-create-outline" class="iconcss"></ion-icon>\n            </span>\n            <span *ngIf="isDisabled==false" (click)=enable()>\n              <ion-icon name="ios-close-circle-outline" class="iconcss"></ion-icon>\n            </span>\n          </div> -->\n          <p class="para4">Declaration</p>\n          <p class="innercss" [innerHTML]="message_top"></p>\n          <ion-row>\n            <ion-col col-12>\n              <div class="inputDiv">\n                <ion-label>Did you have multiple nationalities?\n                  <sup class="redText">*</sup>\n                </ion-label>\n                <ion-list no-margin radio-group [(ngModel)]="nationalities">\n                  <ion-row class="radioDiv">\n                    <ion-col col-6>\n                      <ion-item>\n                        <ion-label class="genderlable">yes</ion-label>\n                        <ion-radio  value="nationalities_yes"></ion-radio>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col col-6>\n                      <ion-item>\n                        <ion-label class="genderlable">No</ion-label>\n                        <ion-radio  value="nationalities_no"></ion-radio>\n                      </ion-item>\n                    </ion-col>\n                  </ion-row>\n                </ion-list>\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row *ngIf="nationalities==\'nationalities_yes\'">\n            <ion-col col-12>\n              <div [ngClass]="{\'inputDiv\':(i==1),\'inputDiv2\':(i==2)}">\n                <ion-label>Share Details\n                  <sup class="redText">*</sup>\n                </ion-label>\n                <ion-input type="text" name="nDetails" [(ngModel)]="nDetails" (ngModelChange)="change($event,nDetails,1)"></ion-input>\n              </div>\n            </ion-col>\n          </ion-row>\n          <p class="innercss" [innerHTML]="message_bottom"></p>\n          <ion-row>\n            <ion-col col-12>\n              <div class="inputDiv">\n                <ion-label>Select\n                  <sup class="redText">*</sup>\n                </ion-label>\n                <ion-list no-margin radio-group [(ngModel)]="finalselect">\n                  <ion-row class="radioDiv">\n                    <ion-col col-6>\n                      <ion-item>\n                        <ion-label class="genderlable">yes</ion-label>\n                        <ion-radio  value="finalselect_yes" ></ion-radio>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col col-6>\n                      <ion-item>\n                        <ion-label class="genderlable">No</ion-label>\n                        <ion-radio  value="finalselect_no"></ion-radio>\n                      </ion-item>\n                    </ion-col>\n                  </ion-row>\n                </ion-list>\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row *ngIf="finalselect==\'finalselect_yes\'">\n            <ion-col col-12>\n              <div   [ngClass]="{\'inputDiv\':(j==1),\'inputDiv2\':(j==3)}">\n                <ion-label>Share Details\n                  <sup class="redText">*</sup>\n                </ion-label>\n                <ion-input type="text" name="fDetails" [(ngModel)]="fDetails" (ngModelChange)="change1($event,fDetails,2)"></ion-input>\n              </div>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n    \n      \n      <div class="btndiv">\n        <button ion-button class="btn" (click)="update()">Update</button>\n      </div>\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/onboarding_forms/china/chinadeclaration/chinadeclaration.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], ChinadeclarationPage);
    return ChinadeclarationPage;
}());

//# sourceMappingURL=chinadeclaration.js.map

/***/ }),

/***/ 791:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChinadeclarationPageModule", function() { return ChinadeclarationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chinadeclaration__ = __webpack_require__(1097);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChinadeclarationPageModule = /** @class */ (function () {
    function ChinadeclarationPageModule() {
    }
    ChinadeclarationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chinadeclaration__["a" /* ChinadeclarationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chinadeclaration__["a" /* ChinadeclarationPage */]),
            ],
        })
    ], ChinadeclarationPageModule);
    return ChinadeclarationPageModule;
}());

//# sourceMappingURL=chinadeclaration.module.js.map

/***/ })

});
//# sourceMappingURL=79.js.map
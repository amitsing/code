webpackJsonp([82],{

/***/ 1146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EvalueserveSelfIdentificationPage; });
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





var EvalueserveSelfIdentificationPage = /** @class */ (function () {
    function EvalueserveSelfIdentificationPage(alertCtrl, platform, menu, loadingCtrl, toastCtrl, storage, apiServices, navCtrl, navParams, iab) {
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
        this.scrolldiv = '1';
        this.scrolldiv1 = '1';
        this.scrollDivId = '0';
        this.scrollDivId1 = '0';
        this.isDisabled = true;
        this.previousdata = this.navParams.get('data');
        this.title = this.previousdata.form_name;
        this.form_status = this.previousdata.form_status;
        this.storage.get('login_token').then(function (data) { _this.login_token = data; });
        this.storage.get('employeeId').then(function (data) { _this.employeeId = data; });
        this.self();
    }
    EvalueserveSelfIdentificationPage.prototype.self = function () {
        var _this = this;
        var url = "";
        if (this.previousdata.country_id == 8) {
            url = "Onboarding_Forms_Apis/canada_forms/get_identification_form_data.php";
        }
        else {
            url = "Onboarding_Forms_Apis/usa_forms/get_identification_form_data.php";
        }
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
            _this.apiServices.us_canada(url, apiKey, _this.login_token).subscribe(function (res) {
                console.log('tnc res==', res);
                _this.loading.dismiss();
                if (res.success == 1) {
                    _this.alldata = res.data;
                    _this.fill_status = res.fill_status;
                    for (var i = 0; i < _this.alldata.gender.options.length; i++) {
                        if (_this.alldata.gender.options[i].answer == true) {
                            _this.gender = _this.alldata.gender.options[i].option;
                            _this.genderid = _this.alldata.gender.options[i].option_id;
                        }
                    }
                    for (var i = 0; i < _this.alldata.ethnicity.options.length; i++) {
                        if (_this.alldata.ethnicity.options[i].answer == true) {
                            _this.ethinicity = _this.alldata.ethnicity.options[i].option;
                            _this.ethinicid = _this.alldata.ethnicity.options[i].option_id;
                        }
                    }
                    console.log('succ');
                    _this.genderdata = _this.alldata.gender.options;
                    _this.ethinicitydata = _this.alldata.ethnicity.options;
                }
                else {
                    _this.navCtrl.pop();
                    _this.apiMessage(res.message);
                }
            }, function (err) {
                _this.loading.dismiss();
                console.log('err== ', err);
                _this.apiMessage(err);
            });
        });
    };
    EvalueserveSelfIdentificationPage.prototype.radioChecked = function (radiocheckdata, ind) {
        console.log("radiocheckdata1111", radiocheckdata);
        this.ethinicid = this.ethinicitydata[ind].option_id;
    };
    EvalueserveSelfIdentificationPage.prototype.genderChecked = function (radiod, rind) {
        console.log("radiocheckdata", radiod);
        this.genderid = this.genderdata[rind].option_id;
    };
    //Common Loader:
    EvalueserveSelfIdentificationPage.prototype.commonLoader = function () {
        this.loading = this.loadingCtrl.create({
            enableBackdropDismiss: true,
            spinner: 'ios-small',
            content: 'Loading data...'
        });
        this.loading.present();
    };
    EvalueserveSelfIdentificationPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    EvalueserveSelfIdentificationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EvalueserveSelfIdentificationPage');
    };
    EvalueserveSelfIdentificationPage.prototype.submit = function () {
        var _this = this;
        var url = "";
        if (this.previousdata.country_id == 8) {
            url = "Onboarding_Forms_Apis/canada_forms/save_identification_form_data.php";
        }
        else {
            url = "Onboarding_Forms_Apis/usa_forms/save_identification_form_data.php";
        }
        if (this.gender == '' || this.gender == undefined) {
            var msg = 'All fields are mandatory.';
            this.apiMessage(msg);
            this.scrolldiv = '1';
            this.scrollDivId = this.genderdata[0].option_id;
            ;
            setTimeout(function () {
                console.log("scroll to id***==", _this.genderid);
                var yOffset = document.getElementById(_this.scrollDivId).offsetTop;
                _this.content.scrollTo(0, yOffset, 3000);
            }, 400);
            return false;
        }
        if (this.ethinicity == '' || this.ethinicity == undefined) {
            var msg = 'All fields are mandatory.';
            this.apiMessage(msg);
            this.scrolldiv1 = '1';
            this.scrollDivId1 = this.ethinicitydata[0].option_id;
            ;
            setTimeout(function () {
                var yOffset = document.getElementById(_this.scrollDivId1).offsetTop;
                _this.content.scrollTo(0, yOffset, 3000);
            }, 400);
            return false;
        }
        this.commonLoader();
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            var apiKey = {
                "client_id": _this.apiServices.clientId,
                "employee_id": _this.employeeId,
                "device": _this.apiServices.device,
                "device_id": _this.deviceId,
                "app_version": _this.apiServices.appVersion,
                "form_id": _this.previousdata.form_id,
                "gender": _this.genderid,
                "ethnicity": _this.ethinicid
            };
            _this.apiServices.us_canada(url, apiKey, _this.login_token).subscribe(function (res) {
                console.log('tnc res==', res);
                _this.loading.dismiss();
                if (res.success == 1) {
                    // this.zone.run(() => {
                    _this.apiMessage(res.message);
                    _this.navCtrl.pop();
                    // });
                }
                else {
                    _this.navCtrl.pop();
                    _this.apiMessage(res.message);
                }
            }, function (err) {
                _this.loading.dismiss();
                console.log('err== ', err);
                _this.apiMessage(err);
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], EvalueserveSelfIdentificationPage.prototype, "content", void 0);
    EvalueserveSelfIdentificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-evalueserve-self-identification',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/onboarding_forms/US/evalueserve-self-identification/evalueserve-self-identification.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="commonFormDiv">\n    <div [ngClass]="{\'newOverlay\':form_status != \'enable\'}"> \n  <div class="WebFormDiv">\n    <div class="newCardDiv">\n      <div class="newHeading">\n        <h4 no-margin [innerHTML]="alldata?.title"></h4>\n      </div>\n      <div class="customCardDiv">\n\n        <ion-row>\n          <ion-col col-12>\n            <div class="contentDiv" [innerHTML]="alldata?.description">\n\n            </div>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n    <div class="newCardDiv">\n      <div class="newHeading">\n        <h4 no-margin [innerHTML]="alldata?.gender.title"></h4>\n      </div>\n      <div class="customCardDiv">\n\n        <ion-row [id]="scrolldiv">\n          <ion-col col-12>\n            <div class="inputDiv">\n              <ion-label>Gender\n                <sup class="redText">*</sup>\n              </ion-label>\n              <!-- <div [ngClass]="{\'checkBoxDiv\':scrollDivId!=scrolldiv,\'checkBoxDiv1\':scrollDivId==scrolldiv}">\n                <ion-list radio-group no-margin radio-group [(ngModel)]="gender">\n\n                  <ion-row>\n                    <ion-col col-6 *ngFor="let radiodata of genderdata; let j= index;">\n                       \n                        <ion-item>\n                          <ion-label class="genderlable">{{radiodata.option}}</ion-label>\n                          <ion-radio [value]="radiodata.option" (ionSelect)="genderChecked(radiodata,j)"></ion-radio>\n                        </ion-item>\n                  \n                    </ion-col>\n                  </ion-row>\n                </ion-list>\n              </div> -->\n\n\n              <div  [ngClass]="{\'checkBoxDiv\':scrollDivId!=scrolldiv,\'checkBoxDiv1\':scrollDivId==scrolldiv\n            ,\'overlayDiv\':!alldata?.gender.enable}">\n              \n                  <ion-list radio-group no-margin [(ngModel)]="gender" >\n                    <ion-row>\n                      <ion-col *ngFor="let radiodata of genderdata; " col-6>\n                          <!-- <button  > -->\n                        <div class="customField" [ngClass]="{\'backred\':radiodata.option==gender}">\n                            <label>\n                                <ion-radio  [value]="radiodata.option"></ion-radio>\n                                <small>{{ radiodata.option }}</small>\n                              </label>\n                        </div>\n                      <!-- </button> -->\n                      </ion-col>\n                    </ion-row>\n                  </ion-list>\n\n            \n                </div>\n\n            </div>\n\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12>\n            <div class="contentDiv" [innerHTML]="alldata?.ethnicity.title">\n            </div>\n          </ion-col>\n\n        </ion-row>\n        <ion-row [id]="scrolldiv1">\n          <ion-col col-12>\n            <div class="inputDiv">\n              <ion-list radio-group no-margin [(ngModel)]="ethinicity" class="paddd">\n                <div [ngClass]="{\'checkBoxDiv\':scrollDivId1!=scrolldiv1,\'checkBoxDiv1\':scrollDivId1==scrolldiv1}">\n                  <ion-row class="multiRadio" *ngFor="let radioethinicitydata of ethinicitydata; let k= index;">\n                    <ion-col col-12>\n                      <ion-item no-padding>\n                        <ion-label>\n                          <ion-radio class="mar" [value]="radioethinicitydata.option" (ionSelect)="radioChecked(radioethinicitydata,k)"></ion-radio>\n                          <small class="genderlable wspace" [innerHTML]="radioethinicitydata.option"></small>\n                        </ion-label>\n                      </ion-item>\n                    </ion-col>\n                  </ion-row>\n                </div>\n              </ion-list>\n            </div>\n          </ion-col>\n        </ion-row>\n\n      </div>\n    </div>\n    <br>\n    <br>\n\n    <div class="btndiv" *ngIf="form_status==\'enable\'">\n      <button ion-button class="btn" (click)="submit()">{{ fill_status==\'1\' ? \'Update\' : \'Submit\' }}</button>\n    </div>\n\n    <br>\n    <br>\n  </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/onboarding_forms/US/evalueserve-self-identification/evalueserve-self-identification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], EvalueserveSelfIdentificationPage);
    return EvalueserveSelfIdentificationPage;
}());

//# sourceMappingURL=evalueserve-self-identification.js.map

/***/ }),

/***/ 818:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvalueserveSelfIdentificationPageModule", function() { return EvalueserveSelfIdentificationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__evalueserve_self_identification__ = __webpack_require__(1146);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EvalueserveSelfIdentificationPageModule = /** @class */ (function () {
    function EvalueserveSelfIdentificationPageModule() {
    }
    EvalueserveSelfIdentificationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__evalueserve_self_identification__["a" /* EvalueserveSelfIdentificationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__evalueserve_self_identification__["a" /* EvalueserveSelfIdentificationPage */]),
            ],
        })
    ], EvalueserveSelfIdentificationPageModule);
    return EvalueserveSelfIdentificationPageModule;
}());

//# sourceMappingURL=evalueserve-self-identification.module.js.map

/***/ })

});
//# sourceMappingURL=82.js.map
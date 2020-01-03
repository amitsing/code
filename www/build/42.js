webpackJsonp([42],{

/***/ 1062:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HrpolicyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_device__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(161);
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
 * Generated class for the HrpolicyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HrpolicyPage = /** @class */ (function () {
    //Constructor:
    function HrpolicyPage(apiServices, loadingCtrl, navCtrl, navParams, alertCtrl, storage, device) {
        var _this = this;
        this.apiServices = apiServices;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.device = device;
        this.value = 0;
        this.storage.get('deviceId').then(function (val) {
            _this.deviceId = val;
            _this.storage.get('employeeId').then(function (val1) {
                _this.employeeId = val1;
                _this.storage.get('login_token').then(function (data) {
                    _this.login_token = data;
                    _this.storage.get('login_token').then(function (data1) {
                        console.log('showOnBoard value is111==', data1);
                        _this.login_token = data;
                        _this.user = {
                            "client_id": _this.apiServices.clientId,
                            "employee_id": _this.employeeId,
                            "device": _this.apiServices.device,
                            "device_id": _this.deviceId,
                            "app_version": _this.apiServices.appVersion,
                            "value": "0"
                        };
                        console.log('HRPolicy Data Request:', _this.user);
                        _this.getHRPolicyData(_this.user, _this.login_token);
                    });
                });
            });
        });
    }
    HrpolicyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HrpolicyPage');
    };
    //Common Loader:
    HrpolicyPage.prototype.commonLoader = function () {
        this.loading = this.loadingCtrl.create({
            enableBackdropDismiss: true,
            spinner: 'ios-small',
            content: 'Loading data...'
        });
        this.loading.present();
    };
    HrpolicyPage.prototype.getHRPolicyData = function (userload, token) {
        var _this = this;
        this.commonLoader();
        this.apiServices.HrPolicyHomeProvider(userload, token)
            .subscribe(function (res) {
            _this.apiSuccess = res.success;
            console.log('HRPolicy Data Response:', res);
            if (res.success == 1) {
                _this.loading.dismiss();
                _this.HRPolicyData = res.data;
            }
            else if (res.success == 0) {
                var alert_1 = _this.alertCtrl.create({
                    subTitle: res.message || res.msg,
                    buttons: [{
                            text: 'Ok',
                            handler: function (data) {
                                console.log('Cancel clicked');
                                _this.navCtrl.pop();
                            }
                        }]
                });
                alert_1.present();
                _this.message0 = res.message;
                _this.loading.dismiss();
                console.log('In Success0:', res);
            }
        }, function (err) {
            _this.loading.dismiss();
            console.log('Error:', err);
        });
    };
    //Go To HR Details:
    HrpolicyPage.prototype.goToHRDetails = function (policy) {
        this.navCtrl.push('HrpolicydetailsPage', { 'Policy': policy });
    };
    HrpolicyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hrpolicy',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/hrpolicy/hrpolicy.html"*/'<ion-header>\n  <ion-navbar color="themecol" class="leftIt" hideBackButton="false">\n    <ion-title>HR Policies</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="BGHR">\n  <div class="blackTint">\n    <div class="HrPolicyContainer">\n    <div *ngFor="let policy of HRPolicyData" (tap)="goToHRDetails(policy)">\n      <div class="PerHrPolicyDiv">\n        <div class="HrPolicyImg">\n          <img class="imageCss" [src]="policy?.cover_image"\n               onerror="src=\'img/default.png\'"/>\n        </div>\n        <div class="HrPolicyTitle" *ngIf="policy?.policy_title.length<35">{{policy?.policy_title |limit35}}</div>\n        <div class="HrPolicyTitle" *ngIf="policy.policy_title.length>35">{{policy.policy_title | limit35}}</div>\n      </div>\n    </div>\n  </div>\n  </div>\n  <span *ngIf="apiSuccess==0"><div class="homePageNotPostAvailable">{{message0}}</div></span>\n</ion-content>'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/hrpolicy/hrpolicy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_service__["a" /* ApiServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_device__["a" /* Device */]])
    ], HrpolicyPage);
    return HrpolicyPage;
}());

//# sourceMappingURL=hrpolicy.js.map

/***/ }),

/***/ 1063:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Limit35Pipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Limit35Pipe = /** @class */ (function () {
    function Limit35Pipe() {
    }
    Limit35Pipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (value.length > 35)
            return value.substring(0, 35) + '...';
        else {
            return value;
        }
    };
    Limit35Pipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'limit35',
        })
    ], Limit35Pipe);
    return Limit35Pipe;
}());

//# sourceMappingURL=limit35.js.map

/***/ }),

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrpolicyPageModule", function() { return HrpolicyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hrpolicy__ = __webpack_require__(1062);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_limit35_limit35__ = __webpack_require__(1063);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HrpolicyPageModule = /** @class */ (function () {
    function HrpolicyPageModule() {
    }
    HrpolicyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__hrpolicy__["a" /* HrpolicyPage */],
                __WEBPACK_IMPORTED_MODULE_3__pipes_limit35_limit35__["a" /* Limit35Pipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__hrpolicy__["a" /* HrpolicyPage */]),
            ],
        })
    ], HrpolicyPageModule);
    return HrpolicyPageModule;
}());

//# sourceMappingURL=hrpolicy.module.js.map

/***/ })

});
//# sourceMappingURL=42.js.map
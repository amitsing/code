webpackJsonp([71],{

/***/ 1159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacypolicyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_service__ = __webpack_require__(162);
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
 * Generated class for the PrivacypolicyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PrivacypolicyPage = /** @class */ (function () {
    function PrivacypolicyPage(navCtrl, navParams, iab, storage, platform, apiServices, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.iab = iab;
        this.storage = storage;
        this.platform = platform;
        this.apiServices = apiServices;
        this.loadingCtrl = loadingCtrl;
        this.closeAppPopupShow = 0;
        this.options = {
            location: 'no',
            hidden: 'no',
            // clearcache : 'yes',
            // clearsessioncache : 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Back',
            closebuttoncolor: '#f04141',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
            footer: 'yes',
            footercolor: '#939399',
        };
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
            _this.storage.get('login_token').then(function (value) {
                _this.loginToken = value;
                _this.storage.get('deviceId').then(function (device_Id) {
                    _this.deviceID = device_Id;
                    _this.getPolicies();
                });
            });
        });
    }
    PrivacypolicyPage.prototype.commonLoader = function () {
        this.loading = this.loadingCtrl.create({
            enableBackdropDismiss: true,
            spinner: 'ios-small',
            content: 'Loading data...'
        });
        this.loading.present();
    };
    PrivacypolicyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrivacypolicyPage');
    };
    PrivacypolicyPage.prototype.getPolicies = function () {
        var _this = this;
        this.commonLoader();
        var apiKey = {
            "client_id": this.apiServices.clientId,
            "employee_id": this.employeeId,
            "device": this.apiServices.device,
            "device_id": this.deviceID,
            "app_version": this.apiServices.appVersion,
        };
        console.log('Contact HelpDesk Request:', apiKey);
        this.apiServices.getPrivacyPolicies(apiKey, this.loginToken)
            .subscribe(function (res) {
            console.log('privacy policies:', res);
            if (res.success == 1) {
                _this.loading.dismiss();
                _this.policyData = res.data;
            }
            else {
                _this.loading.dismiss();
                console.log('Success1:', res);
            }
        }, function (err) {
            _this.loading.dismiss();
            console.log('Error:', err);
        });
    };
    PrivacypolicyPage.prototype.handleClick = function (event) {
        if (event.target.tagName == "A") {
            this.iab.create(event.target.href, "_system", this.options);
            return false;
        }
    };
    PrivacypolicyPage.prototype.ionViewWillEnter = function () {
        this.initializeBackButtonCustomHandler();
    };
    PrivacypolicyPage.prototype.ionViewWillLeave = function () {
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    //Hardware Back Button
    PrivacypolicyPage.prototype.initializeBackButtonCustomHandler = function () {
        var that = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function (event) {
            // that.navCtrl.popToRoot();
            that.navCtrl.pop();
        }, 101); // Priority 101 will override back button handling (we set in app.component.ts) as it is bigger then priority 100 configured in app.component.ts file */
    };
    PrivacypolicyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-privacypolicy',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/privacypolicy/privacypolicy.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Terms of Use</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<div [innerHTML]="policyData?.content" (click)="handleClick($event)"></div>\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/privacypolicy/privacypolicy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_service__["a" /* ApiServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */]])
    ], PrivacypolicyPage);
    return PrivacypolicyPage;
}());

//# sourceMappingURL=privacypolicy.js.map

/***/ }),

/***/ 831:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacypolicyPageModule", function() { return PrivacypolicyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__privacypolicy__ = __webpack_require__(1159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PrivacypolicyPageModule = /** @class */ (function () {
    function PrivacypolicyPageModule() {
    }
    PrivacypolicyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__privacypolicy__["a" /* PrivacypolicyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__privacypolicy__["a" /* PrivacypolicyPage */]),
            ],
        })
    ], PrivacypolicyPageModule);
    return PrivacypolicyPageModule;
}());

//# sourceMappingURL=privacypolicy.module.js.map

/***/ })

});
//# sourceMappingURL=71.js.map
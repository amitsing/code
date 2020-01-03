webpackJsonp([92],{

/***/ 1085:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticeDetailsPage; });
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
 * Generated class for the NoticeDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NoticeDetailsPage = /** @class */ (function () {
    function NoticeDetailsPage(storage, apiServices, loadingCtrl, alertCtrl, iab, navCtrl, navParams) {
        var _this = this;
        this.storage = storage;
        this.apiServices = apiServices;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.iab = iab;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.noticeDetailsData = [];
        this.bgImage = '../assets/imgs/Birthday.png';
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
        this.previousePageData = this.navParams.get('data');
        console.log('previousePageData== ', this.previousePageData);
        this.pushkey = this.navParams.get('pushkey');
        if (this.pushkey == 1) {
            this.auto_id = this.previousePageData.id;
        }
        else {
            this.auto_id = this.previousePageData.auto_id;
        }
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
            console.log(' employeeId== ', _this.employeeId);
        });
        this.storage.get('login_token').then(function (data) {
            console.log('showOnBoard value is111==', data);
            _this.login_token = data;
        });
    }
    //Common Loader:
    NoticeDetailsPage.prototype.commonLoader = function () {
        this.loading = this.loadingCtrl.create({
            enableBackdropDismiss: true,
            spinner: 'ios-small',
            content: 'Loading data...'
        });
        this.loading.present();
    };
    NoticeDetailsPage.prototype.handleClick = function (event) {
        if (event.target.tagName == "A") {
            this.iab.create(event.target.href, "_system", this.options);
            return false;
        }
    };
    NoticeDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NoticeListPage');
        this.getNoticeListFun();
    };
    NoticeDetailsPage.prototype.getNoticeListFun = function () {
        var _this = this;
        this.commonLoader();
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
            console.log(' employeeId== ', _this.employeeId);
        });
        this.storage.get('login_token').then(function (data) {
            console.log('showOnBoard value is111==', data);
            _this.login_token = data;
        });
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            var apiKey = {
                "client_id": _this.apiServices.clientId,
                "employee_id": _this.employeeId,
                "device": _this.apiServices.device,
                "device_id": _this.deviceId,
                "app_version": _this.apiServices.appVersion,
                // "val":this.value
                "flag": "7",
                "post_id": _this.auto_id
            };
            _this.apiServices.noticeDetailsApi(apiKey, _this.login_token)
                .subscribe(function (res) {
                console.log('notice List data==', res);
                if (res.success == 1) {
                    _this.noticeDetailsData = res.data[0];
                    console.log('noticeDetailsData ==', _this.noticeDetailsData);
                }
                else {
                    _this.noticeDetailsData = [];
                    var alert_1 = _this.alertCtrl.create({
                        // title: 'Confirm purchase',
                        message: res.message,
                        buttons: [
                            {
                                text: 'Ok',
                                role: 'cancel',
                                handler: function () {
                                    console.log('Cancel clicked');
                                    _this.navCtrl.pop();
                                }
                            }
                        ]
                    });
                    alert_1.present();
                }
                _this.loading.dismiss();
            });
        });
    };
    NoticeDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notice-details',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/notice-details/notice-details.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{noticeDetailsData?.title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n  <div [style.backgroundImage]="\'url(\' + noticeDetailsData?.media + \')\'" class="bgImageDiv">\n  <ion-row class="contentData">\n      <ion-col col-12 text-center> <p class="title">{{noticeDetailsData?.title}}</p>  </ion-col>\n      <ion-col col-12 text-right> <p class="date">{{noticeDetailsData?.notice_date}}</p>  </ion-col>\n  </ion-row>\n  <div class="transparentLayer"></div>\n  </div>\n\n<ion-row>\n  <ion-col col-12>\n    <div [innerHTML]="noticeDetailsData?.content" (click)="handleClick($event)"class="data_constent"></div>\n  </ion-col>\n</ion-row>\n\n<div *ngIf="noticeDetailsData?.length==0">\n    <img src="assets/imgs/No NoticeImage.png"  style="width:100%">\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/notice-details/notice-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], NoticeDetailsPage);
    return NoticeDetailsPage;
}());

//# sourceMappingURL=notice-details.js.map

/***/ }),

/***/ 782:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeDetailsPageModule", function() { return NoticeDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notice_details__ = __webpack_require__(1085);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NoticeDetailsPageModule = /** @class */ (function () {
    function NoticeDetailsPageModule() {
    }
    NoticeDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notice_details__["a" /* NoticeDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notice_details__["a" /* NoticeDetailsPage */]),
            ],
        })
    ], NoticeDetailsPageModule);
    return NoticeDetailsPageModule;
}());

//# sourceMappingURL=notice-details.module.js.map

/***/ })

});
//# sourceMappingURL=92.js.map
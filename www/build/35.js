webpackJsonp([35],{

/***/ 1084:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewslistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewslistPage = /** @class */ (function () {
    function NewslistPage(navCtrl, navParams, alertCtrl, platform, toastCtrl, storage, loadingCtrl, apiServices) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.apiServices = apiServices;
        this.value = '0';
        this.infiniteScrollCalled = false;
        this.hideInfiniteScroll = false;
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
            console.log(' employeeId== ', _this.employeeId);
        });
        this.storage.get('login_token').then(function (data) {
            console.log('showOnBoard value is111==', data);
            _this.login_token = data;
        });
        this.newsListFun();
    }
    //Common Loader:
    NewslistPage.prototype.commonLoader = function () {
        this.loading = this.loadingCtrl.create({
            enableBackdropDismiss: true,
            spinner: 'ios-small',
            content: 'Loading data...'
        });
        this.loading.present();
    };
    NewslistPage.prototype.newsListFun = function () {
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
                "value": _this.value
            };
            _this.apiServices.newslist(apiKey, _this.login_token)
                .subscribe(function (res) {
                console.log(' res==', res);
                _this.loading.dismiss();
                if (res.success == 1) {
                    if (_this.List == undefined) {
                        _this.List = res.data;
                    }
                    else {
                        _this.List = _this.List.concat(res.data);
                        console.log('list==', res.data);
                    }
                    if (_this.infiniteScrollCalled == true) {
                        _this.myInfiniteScroll.complete();
                        _this.infiniteScrollCalled = false;
                    }
                    console.log('==', _this.List);
                    _this.hideInfiniteScroll = false;
                }
                else {
                    if (_this.value == '0') {
                        // this.msg=res.message;
                        var alert_1 = _this.alertCtrl.create({
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
                    _this.hideInfiniteScroll = true;
                    // this.apiMessage(res.message);
                }
            });
        });
    };
    NewslistPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        this.myInfiniteScroll = infiniteScroll;
        setTimeout(function () {
            _this.infiniteScrollCalled = true;
            _this.value = _this.List.length;
            _this.newsListFun();
            console.log('Async operation has ended');
            // this.myInfiniteScroll.complete();
        }, 500);
    };
    NewslistPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    NewslistPage.prototype.gotodetail = function (data) {
        this.navCtrl.push('EmpnewsdetailPage', { 'data': data });
    };
    NewslistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewslistPage');
    };
    NewslistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newslist',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/newslist/newslist.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>News</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor="let data of List" (click)="gotodetail(data)">\n<ion-row>\n  <ion-col col-4>\n    <div *ngIf="data.media[0]?.media_type==\'3\'">\n        <div class="relativeDiv">\n        <iframe width="100%" height="80px"  [src]="data.media[0]?.media|safe" autostart="0" allowfullscreen frameborder="0"></iframe>\n        <div class="temptransparentVideo"></div>\n      </div>\n      </div>\n    <div *ngIf="data.media[0]?.media_type==\'2\'">\n        <div class="relativeDiv">\n        <video [src]="data.media[0]?.media|safe" height="80px"  width="100%"  poster="{{data.media[0]?.thumb}}" controls controlsList="nodownload" type="video/*">\n        </video>\n        <div class="temptransparentVideo"></div>\n      </div>\n    </div>\n    <div *ngIf="data.media[0]?.media_type==\'1\'">\n        <img class="imgcss" onerror="this.src=\'../../assets/watermark/watermark.png\'" #myImage\n        src="{{data.media[0]?.media}}">\n    </div>\n\n  </ion-col>\n  <ion-col col-8>\n    <ion-row>\n      <ion-col col-12>\n        <!-- <p>{{data.title}}</p> -->\n        <P class="para" *ngIf="data.title.length<50" [innerHTML]="data.title"></P>\n        <P class="para" *ngIf="data.title.length>=50" [innerHTML]="data.title.substring(0, 50)+\'...\'"></P>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>\n          <!-- <img class="imgcss1" src="assets/imgs/news_flag.png"> -->\n      </ion-col>\n      <ion-col col-6 text-right>\n\n          <p  class="datepara" [innerHTML]="data.publish_date"></p>\n      </ion-col>\n    </ion-row>\n  </ion-col>\n</ion-row>\n</ion-card>\n\n<ion-infinite-scroll *ngIf="hideInfiniteScroll==false && List" (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/newslist/newslist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */]])
    ], NewslistPage);
    return NewslistPage;
}());

//# sourceMappingURL=newslist.js.map

/***/ }),

/***/ 781:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewslistPageModule", function() { return NewslistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__newslist__ = __webpack_require__(1084);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(867);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NewslistPageModule = /** @class */ (function () {
    function NewslistPageModule() {
    }
    NewslistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__newslist__["a" /* NewslistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__newslist__["a" /* NewslistPage */]), __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], NewslistPageModule);
    return NewslistPageModule;
}());

//# sourceMappingURL=newslist.module.js.map

/***/ }),

/***/ 867:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__safe_safe__ = __webpack_require__(868);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__safe_html_safe_html__ = __webpack_require__(869);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__safe_safe__["a" /* SafePipe */], __WEBPACK_IMPORTED_MODULE_2__safe_html_safe_html__["a" /* SafeHtmlPipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__safe_safe__["a" /* SafePipe */], __WEBPACK_IMPORTED_MODULE_2__safe_html_safe_html__["a" /* SafeHtmlPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 868:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(32);
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
 * Generated class for the SafePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var SafePipe = /** @class */ (function () {
    /**
     * Takes a value and makes it lowercase.
     */
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'safe',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SafePipe);
    return SafePipe;
}());

//# sourceMappingURL=safe.js.map

/***/ }),

/***/ 869:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(32);
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
 * Generated class for the SafeHtmlPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var SafeHtmlPipe = /** @class */ (function () {
    /**
     * Takes a value and makes it lowercase.
     */
    function SafeHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    // transform(value: string, ...args) {
    //   return value.toLowerCase();
    // }
    SafeHtmlPipe.prototype.transform = function (style) {
        return this.sanitizer.bypassSecurityTrustHtml(style);
        //return this.sanitizer.bypassSecurityTrustStyle(style);
        // return this.sanitizer.bypassSecurityTrustXxx(style); - see docs
    };
    SafeHtmlPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'safeHtml',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());

//# sourceMappingURL=safe-html.js.map

/***/ })

});
//# sourceMappingURL=35.js.map
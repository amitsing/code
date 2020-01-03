webpackJsonp([37],{

/***/ 1073:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeadershiptalkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_img_viewer__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LeadershiptalkPage = /** @class */ (function () {
    function LeadershiptalkPage(imageViewerCtrl, toastCtrl, storage, loadingCtrl, apiServices, navCtrl, navParams) {
        var _this = this;
        this.imageViewerCtrl = imageViewerCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.apiServices = apiServices;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.leaderdata = [];
        this.value = '0';
        this.infiniteScrollCalled = false;
        this.hideInfiniteScroll = false;
        this.flagdata = this.navParams.get('data');
        this.storage.get('deviceId').then(function (data) {
            console.log('showOnBoard value is111==', data);
            _this.deviceId = data;
            _this.storage.get('employeeId').then(function (data) {
                _this.employeeId = data;
                console.log(' employeeId== ', _this.employeeId);
                _this.leadershiptalk();
            });
        });
    }
    //Common Loader:
    LeadershiptalkPage.prototype.commonLoader = function () {
        this.loading = this.loadingCtrl.create({
            enableBackdropDismiss: true,
            spinner: 'ios-small',
            content: 'Loading data...'
        });
        this.loading.present();
    };
    LeadershiptalkPage.prototype.leadershiptalk = function () {
        var _this = this;
        this.commonLoader();
        this.storage.get('login_token').then(function (data) {
            console.log('AlbumDetails value is111==', data);
            _this.login_token = data;
            var apiKey = {
                "client_id": _this.apiServices.clientId,
                "employee_id": _this.employeeId,
                "device": _this.apiServices.device,
                "device_id": _this.deviceId,
                "app_version": _this.apiServices.appVersion,
                "val": _this.value
            };
            console.log('AlbumDetails api apiKey==', apiKey);
            _this.apiServices.leadershiptalk(apiKey, _this.login_token).subscribe(function (result) {
                console.log('AlbumDetails api res==', result);
                _this.loading.dismiss();
                if (result.success == 1) {
                    _this.succ = result.success;
                    console.log('AlbumDetails api res1234==', result);
                    console.log('album emp list==', result.data);
                    if (_this.leaderdata == undefined) {
                        _this.leaderdata = result.data;
                    }
                    else {
                        _this.leaderdata = _this.leaderdata.concat(result.data);
                        console.log('new emp album list==', result.data);
                    }
                    if (_this.infiniteScrollCalled == true) {
                        _this.myInfiniteScroll.complete();
                        _this.infiniteScrollCalled = false;
                    }
                    console.log('this.formdata==', _this.leaderdata);
                    _this.hideInfiniteScroll = false;
                }
                else {
                    _this.hideInfiniteScroll = true;
                    _this.succ = result.success;
                    _this.msg = result.message;
                    if (_this.value == '0') {
                        _this.apiMessage(result.message);
                    }
                }
            });
        });
    };
    LeadershiptalkPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    LeadershiptalkPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        this.myInfiniteScroll = infiniteScroll;
        setTimeout(function () {
            _this.infiniteScrollCalled = true;
            _this.value = _this.leaderdata.length;
            _this.leadershiptalk();
            console.log('Async operation has ended');
            // this.myInfiniteScroll.complete();
        }, 500);
    };
    LeadershiptalkPage.prototype.gotodetail = function (data) {
        this.navCtrl.push('LeadershiptalkdetailPage', { 'data': data });
    };
    LeadershiptalkPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LeadershiptalkPage');
    };
    LeadershiptalkPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-leadershiptalk',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/leadershiptalk/leadershiptalk.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Leadership Connect</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <!-- <div *ngIf="succ==1"> -->\n  <ion-row *ngFor="let data of leaderdata">\n<ion-col col-12 > \n<!-- <div class="relativeDiv dropShadow" (click)="gotodetail(data)" >\n    <img *ngIf="data.media_type==\'1\'" class="imgcss" src="../../assets/watermark/watermark.png" srcset="{{data?.media}}">\n   \n    <img *ngIf="data.media_type==\'2\' || data.media_type==\'3\'" class="imgcss" style="border-radius: 18px;" src="../../assets/watermark/watermark.png" srcset="{{data?.thumbnail_image}}">\n\n    <div *ngIf="data.media_type==\'3\'">\n        <iframe  width="100%" height="150px;"\n        [src]="data?.media+\'?autoplay=0\'|safe" autostart="0"\n        allowfullscreen frameborder="0" scrolling="no"></iframe>\n    </div>\n      \n    <div class="absoluteDiv">\n        <p style="margin-bottom: 0px;">{{data?.publish_date}}</p>\n        <p style="margin-top: 0px;">{{data?.leader_name}}</p>\n      </div>\n</div> -->\n<!-- <div *ngIf="data?.description?.length<150" [innerHTML]="data?.description" class="postContent" (click)="seeDetails(data,i)"></div>\n<div *ngIf="data?.description?.length>=150"[innerHTML]="data?.description?.substring(0, 150)+\'<b> ...Read more </b>\'" class="postContent" (click)="seeDetails(data,i)"></div> -->\n\n\n<div style="position: relative;">\n <div class="gradientLayer" (click)="gotodetail(data)">\n   <div style="position: absolute;width:95%;bottom:5px;\n   left: 10px;">\n\n   <p style="    margin-bottom: 4px;\n   font-size: 16px;color:#fff;\n   font-weight: 600;" [innerHTML]="data?.title"></p>\n\n   <p style="margin-top: 0px;font-size: 15px;color:#fff;">{{data?.leader_name}}</p>\n\n </div>\n </div>\n\n <img *ngIf="data.media_type==\'1\'" class="imgcss" onError="this.src=\'../../assets/watermark/watermark.png\';" [src]="data?.media" >\n \n <img *ngIf="data.media_type==\'2\'" class="imgcss"  onError="this.src=\'../../assets/watermark/watermark.png\';" [src]="data?.thumbnail_image">\n\n<!-- \n <img *ngIf="data.media_type==\'1\'" class="imgcss" onError="this.src=\'../../assets/watermark/watermark.png\';" [src]="data?.media"   \n [style.background-image]="\'url(\' +data?.media+ \')\'">\n \n <img *ngIf="data.media_type==\'2\'" class="imgcss"  onError="this.src=\'../../assets/watermark/watermark.png\';" [src]="data?.thumbnail_image"  \n  [style.background-image]="\'url(\' +data?.thumbnail_image+ \')\'"> -->\n  \n <iframe *ngIf="data.media_type==\'3\'"  width="100%" style="    min-height: 200px;"\n     [src]="data?.media+\'?autoplay=0\'|safe" autostart="0"\n     allowfullscreen frameborder="0" scrolling="no" style="z-index:1 !important;"></iframe>\n\n    </div>\n\n    </ion-col>\n  </ion-row>\n<!-- </div> -->\n\n  <ion-infinite-scroll *ngIf="hideInfiniteScroll==false && leaderdata" (ionInfinite)="doInfinite($event)">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/leadershiptalk/leadershiptalk.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_img_viewer__["a" /* ImageViewerController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], LeadershiptalkPage);
    return LeadershiptalkPage;
}());

//# sourceMappingURL=leadershiptalk.js.map

/***/ }),

/***/ 770:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadershiptalkPageModule", function() { return LeadershiptalkPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__leadershiptalk__ = __webpack_require__(1073);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(867);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LeadershiptalkPageModule = /** @class */ (function () {
    function LeadershiptalkPageModule() {
    }
    LeadershiptalkPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__leadershiptalk__["a" /* LeadershiptalkPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__leadershiptalk__["a" /* LeadershiptalkPage */]), __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], LeadershiptalkPageModule);
    return LeadershiptalkPageModule;
}());

//# sourceMappingURL=leadershiptalk.module.js.map

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
//# sourceMappingURL=37.js.map
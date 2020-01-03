webpackJsonp([38],{

/***/ 1059:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GotonewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_service_api_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GotonewPage = /** @class */ (function () {
    // url="https://benepik.in/evalueserve/evaluserveiframe.php";
    function GotonewPage(navCtrl, iab, events, navParams, sanitizer, alertCtrl, platform, toastCtrl, storage, apiServices) {
        // this.url="https://jobsuat.evalueserve.com/";
        var _this = this;
        this.navCtrl = navCtrl;
        this.iab = iab;
        this.events = events;
        this.navParams = navParams;
        this.sanitizer = sanitizer;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.apiServices = apiServices;
        this.url = this.navParams.get('data');
        this.title = this.navParams.get('title');
        console.log('ionViewDidLoad GotonewPage', this.title);
        this.group_name = this.navParams.get('group_name');
        this.storage.get('Response').then(function (data) {
            console.log('login_token==', data);
            _this.Response = data;
        });
        this.storage.get('SessionId').then(function (data) {
            console.log('SessionId==123', data);
            _this.SessionId = data;
        });
        // this.events.subscribe('urldata', (data) =>{
        //   console.log('tabbadgedata', data);
        //   this.SessionId=data;
        // });
        // this.urlStr=this.navParams.get('data');
        // let sessiionurl='?sid={{this.SessionId}}&res={{response}}'
        // this.goto()
    }
    GotonewPage.prototype.dismissLoading = function () {
        // alert('dismiss')
    };
    // testURL() {
    //   console.log('ionViewDidLoad GotonewPage');
    //   this.storage.get('SessionId').then((data)=>{
    //     console.log('**SessionId==',data );
    //     this.SessionId=data}); 
    //   this.storage.get('Response').then((data)=>{
    //     console.log('login_token==',data );
    //     this.Response=data;
    //     this.sessiionurl=this.url+'?sid='+this.SessionId+'&res='+this.Response;
    //     console.log('**1=',this.sessiionurl);
    //   });
    // }
    GotonewPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad GotonewPage');
        if (this.group_name == "Offer Letter") {
            this.sessiionurl = this.url;
        }
        else {
            this.storage.get('SessionId').then(function (data) {
                console.log('**SessionId==', data);
                _this.SessionId = data;
            });
            this.storage.get('Response').then(function (data) {
                console.log('login_token==', data);
                _this.Response = data;
                // this.sessiionurl=this.url+'?sid='+this.SessionId+'&res='+this.Response;
                // console.log('**1=',this.sessiionurl);
            });
            this.storage.get('SessionId').then(function (data) {
                console.log('SessionId==', data);
                _this.SessionId = data;
                _this.sessiionurl = _this.url + '?sid=' + _this.SessionId + '&res=' + _this.Response;
                console.log('final url==', _this.sessiionurl);
                _this.showUrl(_this.sessiionurl);
            });
        }
    };
    // goto(){
    //   this.storage.get('Response').then((data)=>{
    //     console.log('login_token==',data );
    //     this.Response=data;
    //   });
    //   this.storage.get('SessionId').then((data)=>{
    //     console.log('SessionId1111==',data );
    //     this.SessionId=data;
    //     // this.sessiionurl='?sid={{'+this.SessionId+'}}&res={{'+this.Response;
    //     this.sessiionurl='?sid='+this.SessionId+'&res='+this.Response;
    //     console.log('amit==++++++',this.sessiionurl );
    //   }); 
    // }
    GotonewPage.prototype.showUrl = function (link) {
        console.log('**link', link);
        this.url = link;
        console.log('**url', this.url);
    };
    GotonewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-gotonew',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/gotonew/gotonew.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="iframeDiv">\n\n  <!-- <iframe [src]="sessiionurl|safe" frameborder="0" width="100%" height="100%" allowfullscreen class="holds-the-iframe"></iframe> -->\n\n  <iframe [src]="sanitizer.bypassSecurityTrustResourceUrl(url)" frameborder="0"\n  width="100%" height="100%" allowfullscreen class="holds-the-iframe"></iframe>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/gotonew/gotonew.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["y" /* Platform */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["B" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__providers_api_service_api_service__["a" /* ApiServiceProvider */]])
    ], GotonewPage);
    return GotonewPage;
}());

//# sourceMappingURL=gotonew.js.map

/***/ }),

/***/ 757:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GotonewPageModule", function() { return GotonewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gotonew__ = __webpack_require__(1059);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(867);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var GotonewPageModule = /** @class */ (function () {
    function GotonewPageModule() {
    }
    GotonewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__gotonew__["a" /* GotonewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__gotonew__["a" /* GotonewPage */]), __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], GotonewPageModule);
    return GotonewPageModule;
}());

//# sourceMappingURL=gotonew.module.js.map

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
//# sourceMappingURL=38.js.map
webpackJsonp([40],{

/***/ 1039:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CeoMessageePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_img_viewer__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CeoMessageePage = /** @class */ (function () {
    function CeoMessageePage(imageViewerCtrl, iab, navCtrl, navParams, toastCtrl, storage, apiServices) {
        var _this = this;
        this.imageViewerCtrl = imageViewerCtrl;
        this.iab = iab;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.apiServices = apiServices;
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
        this.ceoMessage = this.previousePageData;
        console.log('this is previouse page data== ', this.previousePageData);
        console.log('previouse page data== ', this.previousePageData);
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
        });
        this._imageViewerCtrl = imageViewerCtrl;
    }
    // getCeoMessage(){
    //   let apiKey={
    //     "packageName": this.apiServices.packageName,
    //     "device": this.apiServices.device,
    //     "deviceId": this.deviceId,
    //     "appVersion":this.apiServices.appVersion,
    //     "clientId":this.apiServices.clientId,
    //     "employeeId":this.employeeId,
    //     "messageType":this.previousePageData.message_type,
    //     "postId":this.previousePageData.auto_id
    //   };
    //   console.log('login api key==', apiKey);
    //   this.apiServices.welcomeMessage(apiKey).then((result) => { 
    //     console.log('ceo message== ',result);
    //     this.allData=result;
    //     if(this.allData.success==1){
    //       let showingData=this.allData.data
    //       setTimeout(() => {
    //         this.ceoMessage=showingData;
    //     }, 1000);
    //     }else{
    //       this.apiMessage(this.allData.message);
    //     }
    //   }, (err) => { 
    //     console.log('ceoMessage err== ',err); 
    //     this.apiMessage(err);
    //     }); 
    // }
    // apiMessage(message) {
    //   const toast = this.toastCtrl.create({
    //     message: message,
    //     duration: 3000
    //   });
    //   toast.present();
    // }
    CeoMessageePage.prototype.learningList = function () {
        this.navCtrl.setRoot('HomePage');
    };
    CeoMessageePage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad WelcomeScreenPage');
        // this.storage.get('deviceId').then(data=>{
        //   this.deviceId=data;
        //   this.getCeoMessage();
        //  })  
    };
    CeoMessageePage.prototype.handleClick = function (event) {
        if (event.target.tagName == "A") {
            this.iab.create(event.target.href, "_system", this.options);
            return false;
        }
    };
    CeoMessageePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ceo-messagee',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/ceo-messagee/ceo-messagee.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{ceoMessage.title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content style="background:url(\'assets/imgs/bg/ceoBG.png\');background-size:cover;">\n\n  <div *ngIf="ceoMessage" >\n  <ion-row>\n\n    <ion-col col-12 no-padding> \n        <div text-center *ngIf="ceoMessage?.media_type==1">\n            <img [src]="ceoMessage.media" class="ceoBanner" imageViewer/>\n        </div>\n      <div *ngIf="ceoMessage?.media_type==2">   \n        \n          <video width="100%" height="180px"   preload="auto" controls muted currentTime poster="{{ceoMessage?.thumnail_image}}">\n              <source [src]="ceoMessage?.media|safe" >\n          </video>  \n          <!-- <iframe width="100%" height="250" [src]="ceoMessage?.media|safe" class="ceoVideo" frameborder="0"></iframe> -->\n      </div>\n\n      <div  *ngIf="ceoMessage?.media_type==3"> \n        <iframe  width="100%" style="height:180px;"\n        [src]="ceoMessage?.media+\'?autoplay=0\'|safe" autostart="0"\n        allowfullscreen frameborder="0" scrolling="no"></iframe>\n     </div>\n         \n     <!-- <div *ngIf="mediatype==\'2\'">\n         <video [src]="pramotedimage|safe" height="180px"  width="100%"  poster="{{thumbnail_image}}" controls controlsList="nodownload" type="video/*">\n         </video>\n     \n      </div> -->\n\n\n\n    </ion-col>\n  </ion-row>\n  <!-- <ion-row class="rowimage">\n    <ion-col col-3>\n        <img srcset="{{ceoMessage?.ceoImage}}" class="ceoImage" src="../../assets/watermark/watermark.png" >\n\n    </ion-col>\n    <ion-col col-9>\n      <h5 style="margin-top: 0px;">{{ceoMessage.ceoName}}</h5>\n      <p style="margin-top: 0px;">{{ceoMessage.ceoDesignation}}<br></p>\n    </ion-col>\n  </ion-row> -->\n  <ion-row style="margin-bottom: 24px;">\n    <ion-col col-12>\n      <h4 no-margin>{{ceoMessage.title}}</h4>\n    </ion-col>\n      <ion-col padding-horizontal col-12 text-left>\n          <p [innerHTML]="ceoMessage.message" (click)="handleClick($event)"></p>\n       </ion-col>\n    \n     \n  </ion-row>\n \n      <!-- <div class="abslink"><button ion-button text-capitalize class="btnnn" (click)="learningList()">Continue</button></div> -->\n   \n</div>\n<div *ngIf="!ceoMessage" >\n\n    <ion-row padding text-center>\n      <ion-col col-12><div class="imageSkelton"></div></ion-col>\n     \n          <ion-col col-3>\n              <div class="ceoImageSkelton"></div>\n          </ion-col>\n          <ion-col col-9>\n              <h1 class="nameSkelton"></h1>\n              <p class="messageSkelton messageShortSkelton"></p>\n          </ion-col>\n\n      <ion-col col-12>\n        <h1 class="nameSkelton"></h1>\n        <p class="messageSkelton"></p>\n        <p class="messageSkelton"></p>\n        <p class="messageSkelton"></p>\n        <p class="messageSkelton"></p>\n        <p class="messageSkelton"></p>\n        <p class="messageSkelton"></p>\n        <p class="messageSkelton messageShortSkelton"></p>\n      </ion-col>\n      <ion-col col-12>\n        <div class=" messageSkelton btnSkelton"></div>\n      </ion-col>\n    </ion-row> \n  </div>\n\n</ion-content>'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/ceo-messagee/ceo-messagee.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_img_viewer__["a" /* ImageViewerController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */]])
    ], CeoMessageePage);
    return CeoMessageePage;
}());

//# sourceMappingURL=ceo-messagee.js.map

/***/ }),

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CeoMessageePageModule", function() { return CeoMessageePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ceo_messagee__ = __webpack_require__(1039);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(867);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_img_viewer__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CeoMessageePageModule = /** @class */ (function () {
    function CeoMessageePageModule() {
    }
    CeoMessageePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ceo_messagee__["a" /* CeoMessageePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ceo_messagee__["a" /* CeoMessageePage */]), __WEBPACK_IMPORTED_MODULE_4_ionic_img_viewer__["b" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], CeoMessageePageModule);
    return CeoMessageePageModule;
}());

//# sourceMappingURL=ceo-messagee.module.js.map

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
//# sourceMappingURL=40.js.map
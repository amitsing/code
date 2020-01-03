webpackJsonp([39],{

/***/ 1049:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicmodulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_api_service_api_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_services_imagecontroller__ = __webpack_require__(371);
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



// import { MakeMeLowerPipe } from '../../pipes/make-me-lower/make-me-lower';



/**
 * Generated class for the DynamicmodulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DynamicmodulePage = /** @class */ (function () {
    function DynamicmodulePage(imgprovider, loadingCtrl, iab, apiService, toastCtrl, navCtrl, 
        // private pipe: MakeMeLowerPipe,
        navParams, storage) {
        var _this = this;
        this.imgprovider = imgprovider;
        this.loadingCtrl = loadingCtrl;
        this.iab = iab;
        this.apiService = apiService;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.likeNumbers = 0;
        this.commentNumbers = 0;
        this.displayBox = false;
        this.mycomment = '';
        this.pageTitle = '';
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
        console.log('**********dynamic module data== *********', this.previousePageData);
        this.postid = this.previousePageData.auto_id;
        this.storage.get('employeeId').then(function (eID) {
            _this.employeeId = eID;
            console.log(' employeeId== ', _this.employeeId);
            _this.storage.get('login_token').then(function (token) {
                console.log('showOnBoard value is111==', token);
                _this.login_token = token;
                _this.storage.get('deviceId').then(function (deviceID) {
                    _this.deviceId = deviceID;
                    _this.getDetails();
                });
            });
        });
        this.pageTitle = this.previousePageData.name;
    }
    DynamicmodulePage.prototype.handleClick = function (event) {
        if (event.target.tagName == "A") {
            this.iab.create(event.target.href, "_system", this.options);
            return false;
        }
    };
    //Common Loader
    DynamicmodulePage.prototype.commonLoader = function () {
        this.loading = this.loadingCtrl.create({
            enableBackdropDismiss: true,
            spinner: 'ios-small',
            content: 'Loading data...'
        });
        this.loading.present();
    };
    //For Image Not Available: Get haier Images
    // makeMeLower(name){
    //   return this.pipe.transform(name.toLowerCase());
    //   }
    //News Details Data Fetch Function:
    DynamicmodulePage.prototype.getDetails = function () {
        var _this = this;
        this.commonLoader();
        var apiKey = {
            "client_id": this.apiService.clientId,
            "employee_id": this.employeeId,
            "device": this.apiService.device,
            "device_id": this.deviceId,
            "app_version": this.apiService.appVersion,
            "auto_id": this.postid
        };
        this.apiService.getdynamicmoduleDataApi(apiKey, this.login_token)
            .subscribe(function (res) {
            _this.loading.dismiss();
            console.log(' Response:', res);
            if (res.success == 1) {
                _this.allData = res.data;
                console.log(' Response:', _this.allData);
            }
            else {
                _this.presentToast(res.message);
            }
        }, (function (err) {
            _this.loading.dismiss();
        }));
    };
    //Toast Function:
    DynamicmodulePage.prototype.presentToast = function (APImessage) {
        var toast = this.toastCtrl.create({
            message: APImessage,
            duration: 1500,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    // Zoom Image:
    DynamicmodulePage.prototype.pp = function (img) {
        this.imgprovider.presentImage(img);
    };
    DynamicmodulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dynamicmodule',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/dynamicmodule/dynamicmodule.html"*/'<!--\n  Generated template for the DynamicmodulePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="themecol">\n    <ion-title [innerHTML]="pageTitle"></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<div *ngIf="allData">\n    <ion-row *ngFor="let responseData of allData">\n        <ion-col col-12>\n            <div class="title" [innerHTML]="responseData?.title" (click)="handleClick($event)"></div>\n        </ion-col>\n      \n        <ion-col col-12>\n            <div *ngIf="responseData?.media_type==1" [style.background-image]="\'url(\' +responseData?.media+ \')\'" class="fullImageBg">\n                <img [src]="responseData?.media" class="image_posted" #myImage1 (tap)="pp(myImage1)"/>  \n            </div> \n            <div *ngIf="responseData?.media_type==2">\n                <video width="100%"  controls [poster]="responseData?.thumbnail_image" \n                controls  controlsList="nodownload" preload>\n                    <source [src]="responseData?.media" type="video/mp4">\n                    <source [src]="responseData?.media" type="video/ogg">\n                  </video>\n            </div> \n            <div *ngIf="responseData?.media_type==3 ">\n                <iframe allowfullscreen style="width: 100%;" [src]= "responseData?.media|safe"></iframe>\n            </div> \n        </ion-col>\n        <ion-col col-12>\n            <div [innerHTML]="responseData?.content" (click)="handleClick($event)"></div>\n          </ion-col>    \n      </ion-row>\n</div>\n\n  <!-- <div>\n    <ion-row >\n      <ion-col col-3>\n        <img src="{{responseData?.userImage}}" class="userRoundImage" #myImage (tap)="pp(myImage)" onError="this.src=\'assets/img/default.png\'">\n      </ion-col>\n      <ion-col>\n        <div class="userName" style="margin-top: 10px;">{{responseData?.user_name}}</div>\n        <div class="datefont">{{createdDate}}</div>\n      </ion-col>\n    </ion-row>\n  \n    <ion-row>\n        <ion-col col-12>\n            <div style="font-weight: 600;text-transform: capitalize;" class="justForBold">{{responseData?.post_title}}</div>\n          </ion-col>\n      <ion-col col-12>\n  \n        <div *ngIf="responseData?.media_type==1">\n            <img [src]="responseData?.media" class="image_posted" #myImage1 (tap)="pp(myImage1)"/>  \n        </div> \n        <div *ngIf="responseData?.media_type==2">\n            <video width="100%" height="240" controls [poster]="responseData?.thumbnail_image" \n            controls  controlsList="nodownload" preload>\n                <source [src]="responseData?.media" type="video/mp4">\n                <source [src]="responseData?.media" type="video/ogg">\n              </video>\n        </div> \n        <div *ngIf="responseData?.media_type==3 ">\n            <iframe allowfullscreen style="min-height:250px; width: 100%;" [src]= "responseData?.media|safe"></iframe>\n        </div> \n  </ion-col>\n  \n  <ion-col col-12>\n    <div [innerHTML]="responseData?.post_content"></div>\n  </ion-col>\n  \n  \n    </ion-row>\n  </div> -->\n  \n  \n  \n  <!-- <ion-row>\n      <ion-col class="rightIt">\n        \n        <span class="commentLiterals" *ngIf="responseData?.likeSetting==\'LIKE_YES\'" (tap)="goToLikePage()">\n          {{likeNumbers}}\n          <ion-icon class="likeCommentColor" name="thumbs-up"></ion-icon>\n        </span>\n  \n        <span class="commentLiterals" *ngIf="responseData?.comment==\'COMMENT_YES\'">\n          {{commentNumbers}}\n          <ion-icon class="likeCommentColor" name="text"></ion-icon>\n        </span>\n  \n      </ion-col>\n    </ion-row> -->\n  \n  \n     <!-- Do Like and Comment Click -->\n     <!-- <ion-row>\n  \n        <ion-col col-3 *ngIf="responseData?.likeSetting==\'LIKE_YES\'" (tap)="getLike()">\n            <ion-icon class="likeCommentColor" name="thumbs-up"></ion-icon>\n            <span class="commentLiterals">\n              Like\n            </span>\n        </ion-col>\n  \n        <ion-col col-4 *ngIf="responseData?.comment==\'COMMENT_YES\'" (tap)="displayCommentBox()">\n            <ion-icon class="likeCommentColor" name="text"></ion-icon>\n            <span class="commentLiterals">\n              Comment\n            </span>\n        </ion-col>\n      </ion-row> -->\n  \n  <!-- <div *ngIf="commentsData">\n      <div *ngFor="let comment of commentsData">\n          <ion-row>\n            <ion-col col-2>\n              <img class="commentUserImages" *ngIf="comment?.userImage!=\'\'" src="{{comment.userImage || ImageTextBaseURL+makeMeLower(comment.name[0])+\'.jpg\'}}"  #myImage (tap)="pp(myImage)">\n              <img class="commentUserImages" *ngIf="comment?.userImage==\'\'" src="{{ImageTextBaseURL+makeMeLower(comment.name[0])+\'.jpg\'}}"  #myImage (tap)="pp(myImage)">\n            </ion-col>\n  \n            <ion-col col-10 class="commentCssFix">\n              <ion-row>\n                <ion-col col-6 style="padding-bottom:0px">\n                    <span class="userNameComment">{{comment.firstname}} {{comment.lastname}} {{comment.name}}</span>\n                </ion-col>\n                <ion-col col-6 style="padding-bottom:0px">\n                    <span class="commentDate">{{comment.cdate}} {{comment.commentDate}}</span>\n                </ion-col>\n  \n                <ion-row>\n                  <ion-col class="commentCssClass">\n                    <div *ngIf="comment?.comment!=\'\'" class="commentCss" [innerHTML]="comment?.comment"></div>\n                  </ion-col>\n                </ion-row>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n          <hr class="lineColor">\n        </div>\n  </div> -->\n  \n  \n          <!-- COMMENT BOX -->\n          <!-- <div *ngIf="displayBox==true" ion-fixed style="width:100%;bottom: 0px;">\n              <ion-row class="rowCommentCss">\n                <ion-col class="commentBoxTheme">\n                 \n                      <textarea placeholder="Write your comment..." #myInput id="myInput"\n                          name="mycomment"  [(ngModel)]="mycomment" (ngModelChange)="detectWhiteSpace($event,mycomment)"    rows="2"></textarea>\n                 \n                </ion-col>\n          \n                <ion-col col-2  *ngIf=" mycomment.trim()!= \'\'" (tap)="sendComment(mycomment)"style="display: block;margin:auto">\n                  <div class="sendButtonColCss">\n                    <ion-icon class="sendButtonCss"name="send"></ion-icon>\n                  </div>  \n                  \n                </ion-col>\n              </ion-row>\n            </div> -->\n\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/dynamicmodule/dynamicmodule.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_services_imagecontroller__["a" /* ImagecontrollerProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1__providers_api_service_api_service__["a" /* ApiServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["B" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], DynamicmodulePage);
    return DynamicmodulePage;
}());

//# sourceMappingURL=dynamicmodule.js.map

/***/ }),

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicmodulePageModule", function() { return DynamicmodulePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dynamicmodule__ = __webpack_require__(1049);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(867);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DynamicmodulePageModule = /** @class */ (function () {
    function DynamicmodulePageModule() {
    }
    DynamicmodulePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dynamicmodule__["a" /* DynamicmodulePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dynamicmodule__["a" /* DynamicmodulePage */]), __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], DynamicmodulePageModule);
    return DynamicmodulePageModule;
}());

//# sourceMappingURL=dynamicmodule.module.js.map

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
//# sourceMappingURL=39.js.map
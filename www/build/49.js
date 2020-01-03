webpackJsonp([49],{

/***/ 1182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThoughtOfTheDayPage; });
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





var ThoughtOfTheDayPage = /** @class */ (function () {
    function ThoughtOfTheDayPage(storage, apiServices, alertCtrl, imageViewerCtrl, navCtrl, navParams) {
        var _this = this;
        this.storage = storage;
        this.apiServices = apiServices;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.activeSliderIndexDetect = 0;
        this.value = 0;
        this._imageViewerCtrl = imageViewerCtrl;
        // setTimeout(() => {
        //             // this.albumdata=this.navParams.get('data');
        this.index12 = this.navParams.get('index');
        //           console.log(' index== ', this.index12);
        //             }, 2000)
        this.storage.get('employeeId').then(function (eID) {
            _this.employeeId = eID;
            console.log(' employeeId== ', _this.employeeId);
            _this.storage.get('login_token').then(function (lToken) {
                console.log('thoughtOftheDayApi value is111==', lToken);
                _this.login_token = lToken;
                _this.storage.get('employee_type').then(function (user) {
                    console.log('thoughtOftheDayApi value is111==', user);
                    _this.user_Type = user;
                });
            });
        });
    }
    ThoughtOfTheDayPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad thoughtOftheDayApi');
        this.getthoughtFun();
    };
    ThoughtOfTheDayPage.prototype.getthoughtFun = function () {
        var _this = this;
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
                "val": _this.value,
                "flag": "5"
            };
            _this.apiServices.thoughtOftheDayApi(apiKey, _this.login_token)
                .subscribe(function (res) {
                console.log('thoughtOftheDayApi List res==', res);
                if (res.success == 1) {
                    if (_this.thoughtData == undefined) {
                        // setTimeout(() => {
                        _this.thoughtData = res.data;
                        _this.index12 = _this.navParams.get('index');
                        console.log(' index== ', _this.index12);
                        // }, 2000);
                        // this.thoughtData = res.data;
                        // this.index=this.navParams.get('data');
                        // this.analyticApi();
                        _this.analyticApi(_this.thoughtData[0].auto_id);
                        console.log('thoughtOftheDayApi List data==', _this.thoughtData);
                    }
                    else {
                        _this.thoughtData = _this.thoughtData.concat(res.data);
                        console.log('new data== ', _this.thoughtData);
                    }
                }
                else {
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
            });
        });
    };
    ThoughtOfTheDayPage.prototype.presentImage = function (myImage) {
        var imageViewer = this._imageViewerCtrl.create(myImage);
        imageViewer.present();
        setTimeout(function () { return imageViewer.dismiss(); }, 30000);
        imageViewer.onDidDismiss(function () { return console.log('Viewer dismissed'); });
    };
    // this function check every time when slide goes to change
    ThoughtOfTheDayPage.prototype.ionSlideDidChange = function () {
        console.log('this is ionSlideDidChange2');
        this.activeSliderIndexDetect = this.slides.getActiveIndex();
        console.log('this is ionSlideDidChange2', this.activeSliderIndexDetect);
        // let currentIndex = this.slides.getActiveIndex();
        // console.log('Current index is', currentIndex);
        // this.index=this.activeSliderIndexDetect;
        // this.analyticApi();
        this.index = this.activeSliderIndexDetect;
        var postId = this.thoughtData[this.activeSliderIndexDetect].auto_id;
        this.analyticApi(postId);
    };
    ThoughtOfTheDayPage.prototype.slideChangeDetect = function () {
        console.log('index==', this.activeSliderIndexDetect);
        if (this.thoughtData.length >= 10) {
            if (this.activeSliderIndexDetect == this.thoughtData.length - 5) {
                this.value = this.thoughtData.length;
                this.getthoughtFun();
            }
        }
    };
    ThoughtOfTheDayPage.prototype.analyticApi = function (postId) {
        var _this = this;
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
                "track_flag": "4",
                "type": "detail",
                "user_type": _this.user_Type,
                "post_id": postId,
            };
            _this.apiServices.analyticApi(apiKey, _this.login_token).subscribe(function (res) {
                console.log(res);
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* Slides */])
    ], ThoughtOfTheDayPage.prototype, "slides", void 0);
    ThoughtOfTheDayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-thought-of-the-day',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/thought-of-the-day/thought-of-the-day.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Thought of the Day</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding *ngIf="thoughtData && thoughtData.length>0">\n  \n    <ion-slides  [initialSlide]="index12" slidesPerView="1" (ionSlideDidChange)="ionSlideDidChange()" (ionSlideWillChange)="slideChangeDetect()"\n    zoom="true">\n          <ion-slide *ngFor="let data of thoughtData ;let i = index;" >\n              <ion-row>\n                <ion-col text-right class="date"><p class="date">{{data.created_date}}</p></ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col col-12>\n                  <div class="customCardView thotDiv">\n                      <img src="{{data?.media}}"  #myImage (click)="presentImage(myImage)" />      \n                      <p text-center class="instract"> <span *ngIf="i>=1"> <ion-icon name="arrow-round-back"></ion-icon></span> Swipe Across <span *ngIf="i<thoughtData?.length-1"> <ion-icon name="arrow-round-forward"></ion-icon></span></p>                                       \n                  </div>\n                </ion-col>\n              </ion-row>\n              <!-- <div class="outerDiv">\n                      <img src="{{data?.media}}"  #myImage (click)="presentImage(myImage)" />      \n                        <p text-center class="instract"> <span *ngIf="i>=1"> <ion-icon name="arrow-round-back"></ion-icon></span> Swipe Across Thoughts <span *ngIf="i<thoughtData?.length-1"> <ion-icon name="arrow-round-forward"></ion-icon></span></p>                                       \n                </div> -->\n\n          </ion-slide>\n        </ion-slides>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/thought-of-the-day/thought-of-the-day.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4_ionic_img_viewer__["a" /* ImageViewerController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], ThoughtOfTheDayPage);
    return ThoughtOfTheDayPage;
}());

//# sourceMappingURL=thought-of-the-day.js.map

/***/ }),

/***/ 854:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThoughtOfTheDayPageModule", function() { return ThoughtOfTheDayPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__thought_of_the_day__ = __webpack_require__(1182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ThoughtOfTheDayPageModule = /** @class */ (function () {
    function ThoughtOfTheDayPageModule() {
    }
    ThoughtOfTheDayPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__thought_of_the_day__["a" /* ThoughtOfTheDayPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__thought_of_the_day__["a" /* ThoughtOfTheDayPage */]), __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__["b" /* IonicImageViewerModule */]
            ],
        })
    ], ThoughtOfTheDayPageModule);
    return ThoughtOfTheDayPageModule;
}());

//# sourceMappingURL=thought-of-the-day.module.js.map

/***/ })

});
//# sourceMappingURL=49.js.map
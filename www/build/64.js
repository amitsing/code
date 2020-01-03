webpackJsonp([64],{

/***/ 1166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizsummaryPage; });
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






var QuizsummaryPage = /** @class */ (function () {
    function QuizsummaryPage(alertCtrl, platform, toastCtrl, storage, apiServices, navCtrl, navParams) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.apiServices = apiServices;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.showsubmit = false;
        this.currentIndex = false;
        this.previousePageData = this.navParams.get('data');
        this.listkey = this.navParams.get('listkey');
        console.log('***== ', this.previousePageData);
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
            console.log(' employeeId== ', _this.employeeId);
        });
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            console.log(' deviceId== ', _this.deviceId);
            _this.getQuizResult();
        });
    }
    QuizsummaryPage.prototype.getQuizResult = function () {
        var _this = this;
        this.storage.get('login_token').then(function (data) {
            console.log('AlbumDetails value is111==', data);
            _this.login_token = data;
            var apiKey = {
                "client_id": _this.apiServices.clientId,
                "employee_id": _this.employeeId,
                "device": _this.apiServices.device,
                "device_id": _this.deviceId,
                "app_version": _this.apiServices.appVersion,
                "value": "0",
                "quiz_id": _this.previousePageData
            };
            console.log('quizResult api key==', apiKey);
            _this.apiServices.quizresult(apiKey, _this.login_token).subscribe(function (result) {
                console.log('quizResult response== ', result);
                if (result.success == 1) {
                    _this.quizdata = result.data;
                    _this.totallength = _this.quizdata.length;
                }
                else {
                    _this.apiMessage(result.message);
                }
            });
        });
    };
    QuizsummaryPage.prototype.slideChanged = function () {
        this.currentIndex = this.slides.isEnd();
        console.log('Current index is', this.currentIndex);
    };
    QuizsummaryPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    QuizsummaryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuizsummaryPage');
    };
    QuizsummaryPage.prototype.done = function () {
        if (this.listkey == '1') {
            this.navCtrl.pop();
        }
        else {
            this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length() - 4));
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* Slides */])
    ], QuizsummaryPage.prototype, "slides", void 0);
    QuizsummaryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-quizsummary',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/quizsummary/quizsummary.html"*/'<!--\n  Generated template for the QuizsummaryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>quizsummary</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n\n  <ion-slides #slides speed="500" shouldLockSwipes=true; class="asstest" spaceBetween="10" slidesPerView="1"  (ionSlideDidChange)="slideChanged()">\n\n    <ion-slide *ngFor="let attendant of quizdata;let j=index" style="overflow-y:scroll;">\n \n      <ion-row>\n        <ion-col col-12><h6 margin-top >{{attendant.question_text}}</h6></ion-col>\n        <ion-col  col-12><img  (click)="zoomImage(attendant?.file,attendant.question)" class="imgclass"  margin-top margin-bottom src="{{attendant?.question_image}}"></ion-col>\n        <ion-col col-12 no-padding>\n          <ion-row>\n          <ion-col *ngFor="let answer of attendant?.options let i = index" (tap)="optiondata(i,answer.auto_id,attendant.auto_id,j,attendant.question_duration)" \n           class="options" col-6  >\n          <div [ngClass]="{\'stylecolorgrey\':(this.colorclass!=i),\n          \'stylecolorred\':(attendant.user_answer==answer.auto_id),\'stylecolorgreen\':(attendant.right_answer==answer.auto_id)}">\n          <ion-label style="white-space: normal;">{{answer?.option_text}}</ion-label> \n           </div>\n\n          </ion-col>\n        </ion-row>\n        </ion-col>\n      </ion-row>\n      <div >\n          <!-- <button ion-button round class="btn3" *ngIf="showsubmit==true || totallength==1" (click)="submit(j)">Submit</button> -->\n          <button ion-button round class="btn3" *ngIf="currentIndex==true" (click)="done()">done</button>\n       \n        </div>\n      <br><br>\n\n         \n    </ion-slide>\n  </ion-slides>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/quizsummary/quizsummary.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], QuizsummaryPage);
    return QuizsummaryPage;
}());

//# sourceMappingURL=quizsummary.js.map

/***/ }),

/***/ 838:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizsummaryPageModule", function() { return QuizsummaryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quizsummary__ = __webpack_require__(1166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var QuizsummaryPageModule = /** @class */ (function () {
    function QuizsummaryPageModule() {
    }
    QuizsummaryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__quizsummary__["a" /* QuizsummaryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__quizsummary__["a" /* QuizsummaryPage */]),
            ],
        })
    ], QuizsummaryPageModule);
    return QuizsummaryPageModule;
}());

//# sourceMappingURL=quizsummary.module.js.map

/***/ })

});
//# sourceMappingURL=64.js.map
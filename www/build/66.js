webpackJsonp([66],{

/***/ 1164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizResultPage; });
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




var QuizResultPage = /** @class */ (function () {
    function QuizResultPage(alertCtrl, platform, toastCtrl, storage, apiServices, navCtrl, navParams) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.apiServices = apiServices;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.closeAppPopupShow = 0;
        this.previousePageData = this.navParams.get('data');
        console.log('***== ', this.previousePageData);
        this.percentage = this.navParams.get('percentage');
        console.log(' this.percentage== ', this.percentage);
        this.alldata = this.navParams.get('alldata');
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
    QuizResultPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuizResultPage');
    };
    QuizResultPage.prototype.ionViewWillEnter = function () {
        this.initializeBackButtonCustomHandler();
    };
    QuizResultPage.prototype.initializeBackButtonCustomHandler = function () {
        var that = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function (event) {
            that.closeAppPopupShow++;
            if (that.closeAppPopupShow % 2 != 0) {
                that.showeAlert();
            }
            else {
                that.alert121.dismiss();
            }
        }, 101); // Priority 101 will override back button handling (we set in app.component.ts) as it is bigger then priority 100 configured in app.component.ts file */
    };
    QuizResultPage.prototype.showeAlert = function () {
        var _this = this;
        this.alert121 = this.alertCtrl.create({
            title: 'App termination',
            message: 'Do you want to close the app?',
            buttons: [{
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Application exit prevented!');
                    }
                }, {
                    text: 'Close App',
                    handler: function () {
                        _this.platform.exitApp(); // Close this application
                    }
                }]
        });
        this.alert121.present();
    };
    QuizResultPage.prototype.ionViewWillLeave = function () {
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    QuizResultPage.prototype.getQuizResult = function () {
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
                _this.allData = result;
                if (_this.allData.success == 1) {
                    var result_1 = _this.allData.data;
                    setTimeout(function () {
                        _this.quizResult = result_1;
                        console.log('quizResult api res==', _this.quizResult);
                    }, 1000);
                }
                else {
                    _this.apiMessage(_this.allData.message);
                    _this.navCtrl.popToRoot();
                }
            });
        });
    };
    QuizResultPage.prototype.retakeQuiz = function (num) {
        if (num == 1) {
            // this.navCtrl.popToRoot();
            this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length() - 3));
        }
        else {
            this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length() - 3));
        }
    };
    QuizResultPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    QuizResultPage.prototype.go = function () {
        // this.navCtrl.pop();
        this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length() - 3));
        // this.navCtrl.push('QuizsummaryPage',{'data':this.previousePageData});
    };
    QuizResultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-quiz-result',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/quiz-result/quiz-result.html"*/'<!--\n  Generated template for the QuizResultPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-title>Result</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n    <!-- *ngIf="allData" -->\n  <div *ngIf="quizResult">\n    <ion-card>\n        <ion-card-content>\n    \n<ion-row>\n    <ion-col col-12 class="centerData">\n      <!-- <p class="scoreText" >Your score is : {{quizResult?.userscore}}</p> -->\n      <div class="relativeDIV">\n        \n      <circle-progress\n                [percent]="percentage"\n                [radius]="70"\n                [outerStrokeWidth]="6"            \n                [showTitle]=true\n                [showSubtitle]=false\n                [innerStrokeWidth]="3"\n                [outerStrokeColor]="\'#542e56\'"\n                [innerStrokeColor]="\'#7b4b7d\'"\n                [animation]="true"\n                [animationDuration]="300"\n                [subtitle]=\'Percent\' \n              ></circle-progress>\n\n\n      <!-- <p class="scoreText numScore"  > {{quizResult?.userscore}}/ {{quizResult?.quizquestion}} </p> -->\n    </div>\n      <p class="scoreText" >Score</p>\n    </ion-col>\n  </ion-row>\n  \n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-content>\n            <div class="redBg">\n            <ion-row>\n                <ion-col col-2 class="centerData2 centerData">1.  </ion-col>\n                <ion-col col-8 class="centerData2">Total Questions- </ion-col>\n                <ion-col col-2 class="centerData2 centerData">{{alldata?.total}} </ion-col>\n            </ion-row>\n          </div>\n          <div class="blueBg">\n          <ion-row>\n              <ion-col col-2 class="centerData2 centerData">2.  </ion-col>\n              <ion-col col-8 class="centerData2">Wrong- </ion-col>\n              <ion-col col-2 class="centerData2 centerData">{{alldata?.wrong}} </ion-col>\n          </ion-row>\n        </div>\n        <div class="greenBg">\n           <ion-row>\n            <ion-col col-2 class="centerData2 centerData">3.  </ion-col>\n            <ion-col col-8 class="centerData2">Correct- </ion-col>\n            <ion-col col-2 class="centerData2 centerData">{{alldata?.right}} </ion-col>\n           </ion-row>\n         </div>\n\n         <br>\n         <br>\n\n      </ion-card-content>\n    </ion-card>\n     <button ion-button *ngIf="alldata?.passingStatus==\'1\'"  class="btn" (click)="go()">Done</button>\n     <button ion-button *ngIf="alldata?.passingStatus==\'0\'" class="btn" (click)="go()">Retake Quiz</button>\n    <!-- <button ion-button *ngIf="quizResult?.quiz_clear==1" class="btn" (click)="retakeQuiz(\'1\')">Done</button>\n    <button ion-button *ngIf="quizResult?.quiz_clear!=1" class="btn" (click)="retakeQuiz(\'2\')">Retake Quiz</button> -->\n  </div>\n\n\n\n\n\n  <div *ngIf="!quizResult">\n      <ion-card>\n          <ion-card-content>\n      \n  <ion-row>\n      <ion-col col-12 class="centerData">\n        <p class="scoreText skeltonText" >Your score is : {{quizResult?.userscore}}</p>\n        <div class="relativeDIV">\n          <div class="circleDIV"></div>\n\n  \n        <p class="scoreText numScore skeltonText"  > {{22}}/ {{50}} </p>\n      </div>\n        <p class="scoreText skeltonText" >Score</p>\n      </ion-col>\n    </ion-row>\n    \n    \n        </ion-card-content>\n      </ion-card>\n      <ion-card>\n          <ion-card-content>\n              <div class="grayBg skeltonText">\n              <ion-row>\n                  <ion-col col-2 class="centerData2 centerData">1.  </ion-col>\n                  <ion-col col-8 class="centerData2">Total Questions- </ion-col>\n                  <ion-col col-2 class="centerData2 centerData">{{quizResult?.quizquestion}} </ion-col>\n              </ion-row>\n            </div>\n            <div class="grayBg skeltonText">\n            <ion-row>\n                <ion-col col-2 class="centerData2 centerData">2.  </ion-col>\n                <ion-col col-8 class="centerData2">Wrong- </ion-col>\n                <ion-col col-2 class="centerData2 centerData">{{quizResult?.wrongAns}} </ion-col>\n            </ion-row>\n          </div>\n          <div class="grayBg skeltonText  ">\n             <ion-row>\n              <ion-col col-2 class="centerData2 centerData">3.  </ion-col>\n              <ion-col col-8 class="centerData2">Correct- </ion-col>\n              <ion-col col-2 class="centerData2 centerData">{{quizResult?.userscore}} </ion-col>\n             </ion-row>\n           </div> \n  \n            <br>\n           <br>\n  \n         </ion-card-content>\n      </ion-card>\n      \n      <button ion-button class="btnSkelton skeltonText" >Quiz result</button>\n    </div>\n  \n\n\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/quiz-result/quiz-result.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], QuizResultPage);
    return QuizResultPage;
}());

//# sourceMappingURL=quiz-result.js.map

/***/ }),

/***/ 836:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizResultPageModule", function() { return QuizResultPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quiz_result__ = __webpack_require__(1164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_circle_progress__ = __webpack_require__(372);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var QuizResultPageModule = /** @class */ (function () {
    function QuizResultPageModule() {
    }
    QuizResultPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__quiz_result__["a" /* QuizResultPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__quiz_result__["a" /* QuizResultPage */]), __WEBPACK_IMPORTED_MODULE_3_ng_circle_progress__["a" /* NgCircleProgressModule */]
            ],
        })
    ], QuizResultPageModule);
    return QuizResultPageModule;
}());

//# sourceMappingURL=quiz-result.module.js.map

/***/ })

});
//# sourceMappingURL=66.js.map
webpackJsonp([67],{

/***/ 1163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizCompleteStatusPage; });
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




var QuizCompleteStatusPage = /** @class */ (function () {
    function QuizCompleteStatusPage(navCtrl, navParams, viewCtrl, alertCtrl, platform, toastCtrl, storage, apiServices) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.apiServices = apiServices;
        this.quizdetail();
    }
    QuizCompleteStatusPage.prototype.quizdetail = function () {
        var _this = this;
        this.storage.get('showOnBoard').then(function (data) {
            _this.employeetype = data;
            console.log('showOnBoard value this.employeetype==', _this.employeetype);
        });
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
                "user_type": _this.employeetype
            };
            _this.apiServices.joineequizdetail(apiKey, _this.login_token)
                .subscribe(function (res) {
                console.log('', res);
                // this.swipe1()
                if (res.success == 1) {
                    _this.quizdata = res.data;
                    // this.totallength = this.quizdata.length;
                    // if(this.totallength==1){
                    //   this.showsubmit=true;
                    // }
                    // console.log('this.allData', this.quizdata);
                    // console.log('this.quizansarray', this.quizansarray);
                }
                if (res.success == 0) {
                    console.log(res);
                    // this.quizdata = res.data;
                    _this.rewardsapplicable = res.data.reward_aplicable;
                    _this.reward_earned = res.data.reward_earned;
                    if (_this.reward_earned != undefined) {
                        _this.total_attempted = _this.reward_earned.total_attempted;
                        _this.total_correct_answer = _this.reward_earned.total_correct_answer;
                        _this.total_point = _this.reward_earned.total_point;
                        _this.total_question = _this.reward_earned.total_question;
                        _this.total_incorrect_ans = _this.reward_earned.total_incorrect_ans;
                        // this.total_point=this.reward_earned.total_point;
                    }
                    // console.log("xdfgsdfgh",res.background_image);
                    // this.image = res.background_image;
                    // this.success=res.success;
                    // this.msg=res.message;
                    // this.navCtrl.push('QuizCompleteStatusPage');
                    // this.apiMessage(res.message);
                }
            }, function (err) {
                console.log('err== ', err);
                // this.apiMessage(err);
            });
        });
    };
    QuizCompleteStatusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuizCompleteStatusPage');
    };
    QuizCompleteStatusPage.prototype.gotohostory = function () {
        this.navCtrl.push('JoineequizhistoryPage');
    };
    QuizCompleteStatusPage.prototype.goHome = function () {
        this.navCtrl.popToRoot();
    };
    QuizCompleteStatusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-quiz-complete-status',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/quiz-complete-status/quiz-complete-status.html"*/'\n<ion-header>\n  <ion-navbar>\n      <ion-buttons right >\n          <button ion-button (click) = "goHome()">\n              <img class="home_icon" src="../../assets/icon/Home_icon.png" alt="">\n          </button>\n        </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div>\n    <div class="massage">\n        <h2 class="massage_heading">Congratulation!</h2>\n        <p class="massage_desc">You have Sucessfully completed the quiz</p>\n    </div>\n    <div class="sucess">\n        <ion-icon ios="ios-checkmark" md="md-checkmark" class="sucess_icon"></ion-icon>\n    </div>\n    <div *ngIf="rewardsapplicable==1" class="points">\n      <p class="points_details">{{total_point}}</p>\n    </div>\n    <div class="result">\n      <div class="result_correct">\n        <img class="result_correct_image" src="../../assets/icon/bluetick.png" alt="">{{total_correct_answer}}</div>\n      <div class="result_incorrect">\n        <img class="result_incorrect_image" src="../../assets/icon/wrongIcon.png" alt=""> {{total_incorrect_ans}}</div>\n    </div>\n    <div class="action" (click)="gotohostory()">\n      <button ion-button round class="action_answers">See Answers</button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/quiz-complete-status/quiz-complete-status.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["D" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */]])
    ], QuizCompleteStatusPage);
    return QuizCompleteStatusPage;
}());

//# sourceMappingURL=quiz-complete-status.js.map

/***/ }),

/***/ 835:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizCompleteStatusPageModule", function() { return QuizCompleteStatusPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quiz_complete_status__ = __webpack_require__(1163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var QuizCompleteStatusPageModule = /** @class */ (function () {
    function QuizCompleteStatusPageModule() {
    }
    QuizCompleteStatusPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__quiz_complete_status__["a" /* QuizCompleteStatusPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__quiz_complete_status__["a" /* QuizCompleteStatusPage */]),
            ],
        })
    ], QuizCompleteStatusPageModule);
    return QuizCompleteStatusPageModule;
}());

//# sourceMappingURL=quiz-complete-status.module.js.map

/***/ })

});
//# sourceMappingURL=67.js.map
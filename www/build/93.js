webpackJsonp([93],{

/***/ 1083:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewquizquestionPage; });
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






var NewquizquestionPage = /** @class */ (function () {
    function NewquizquestionPage(navCtrl, navParams, viewCtrl, alertCtrl, platform, toastCtrl, storage, apiServices) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.apiServices = apiServices;
        this.quizansarray = [];
        this.currentIndex = false;
        this.dummyarray = [];
        this.showsubmit = false;
        this.newarray = [];
        this.checkenable = true;
        this.checkesubmit = true;
        this.quiz_type = this.navParams.get('quiz_type');
        this.quiztimining = this.navParams.get('quiztimining');
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        this.quizid = this.navParams.get('qid');
        this.quizlist();
    }
    NewquizquestionPage.prototype.quizlist = function () {
        var _this = this;
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
        });
        this.storage.get('login_token').then(function (data) {
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
                "quiz_id": _this.quizid
            };
            _this.apiServices.quizdetail(apiKey, _this.login_token)
                .subscribe(function (res) {
                console.log('', res);
                _this.swipe1();
                if (res.success == 1) {
                    _this.quizdata = res.data;
                    _this.totallength = _this.quizdata.length;
                    if (_this.totallength == 1) {
                        _this.showsubmit = true;
                    }
                    for (var x = 0; x < _this.totallength; x++) {
                        _this.quizansarray[x] = { "question_id": _this.quizdata[x].auto_id, "time_taken": '', "answer_id": '' };
                    }
                    if (_this.quiz_type == '3') {
                        _this.timesinsec = _this.quizdata[0].question_duration;
                        _this.mytimerfunction(_this.timesinsec);
                    }
                    if (_this.quiz_type == '2') {
                        _this.timesinsec = _this.quiztimining;
                        _this.mytimerfunction(_this.timesinsec);
                    }
                    // this.timesinsec=20;
                    // this.mytimerfunction(this.timesinsec)
                }
                else {
                    _this.apiMessage(res.message);
                }
            }, function (err) {
                console.log('err== ', err);
                // this.apiMessage(err);
            });
        });
    };
    NewquizquestionPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    ///////timer finction ////
    /////timer///
    /* Initialize and setup the time for question */
    NewquizquestionPage.prototype.mytimerfunction = function (quizduration) {
        var _this = this;
        // this.CommonLoader();
        this.duration = parseInt(quizduration);
        console.log("dur", this.duration);
        this.initTimer(this.duration);
        setTimeout(function () {
            _this.startTimer();
            // this.loading.dismiss();
        }, 1000);
    };
    NewquizquestionPage.prototype.initTimer = function (duration) {
        // Pomodoro is usually for 25 minutes
        // alert("duration")
        // alert(this.duration)
        // this.time = this.timeInSeconds;
        this.time = this.duration;
        this.runTimer = false;
        this.hasStarted = false;
        this.hasFinished = false;
        // this.remainingTime = this.timeInSeconds;
        this.remainingTime = this.duration;
        this.displayTime = this.getSecondsAsDigitalClock(this.remainingTime);
        // this. startTimer(); 
    };
    NewquizquestionPage.prototype.startTimer = function () {
        this.runTimer = true;
        this.hasStarted = true;
        this.timerTick();
    };
    NewquizquestionPage.prototype.pauseTimer = function () {
        this.runTimer = false;
    };
    NewquizquestionPage.prototype.resumeTimer = function () {
        this.startTimer();
    };
    NewquizquestionPage.prototype.timerTick = function () {
        var _this = this;
        this.timer = setTimeout(function () {
            if (!_this.runTimer) {
                return;
            }
            _this.remainingTime--;
            _this.displayTime = _this.getSecondsAsDigitalClock(_this.remainingTime);
            console.log("final time", _this.displayTime);
            if (_this.remainingTime > 0) {
                _this.timerTick();
            }
            else {
                _this.hasFinished = true;
                console.log('end');
                if (_this.quiz_type == '3') {
                    _this.currentIndex = _this.slides.isEnd();
                    if (_this.currentIndex == true) {
                        _this.submit();
                    }
                    else {
                        _this.nextslide(_this.currentSlideIndex);
                    }
                }
                if (_this.quiz_type == '2') {
                    _this.submit();
                }
            }
        }, 1000);
    };
    NewquizquestionPage.prototype.getSecondsAsDigitalClock = function (inputSeconds) {
        var sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
        var hours = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num;
        // - (hours * 3600) - (minutes * 60);
        var hoursString = '';
        var minutesString = '';
        var secondsString = '';
        // hoursString = (hours < 10) ? "0" + hours : hours.toString();
        // minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
        secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
        return secondsString;
    };
    NewquizquestionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewquizquestionPage');
    };
    NewquizquestionPage.prototype.optiondata = function (i, optidd, qid, j, duration) {
        this.checkenable = false;
        this.colorclass = i;
        this.optionid = optidd;
        this.index = parseInt(j);
        if (this.currentIndex == true) {
            this.checkesubmit = false;
        }
        if (this.quiz_type == '2') {
            this.quizansarray[this.index] = { "question_id": qid, "answer_id": optidd, "time_taken": this.quiztimining };
        }
        if (this.quiz_type == '3') {
            this.timetaken = parseInt(duration) - parseInt(this.displayTime);
            this.quizansarray[this.index] = { "question_id": qid, "answer_id": optidd, "time_taken": this.timetaken };
        }
    };
    NewquizquestionPage.prototype.slideChanged = function () {
        this.currentIndex = this.slides.isEnd();
    };
    NewquizquestionPage.prototype.swipe1 = function () {
        this.slides.lockSwipeToNext(true);
        this.currentSlideIndex = this.slides.getActiveIndex();
    };
    NewquizquestionPage.prototype.nextslide = function (j) {
        this.colorclass = null;
        this.checkenable = true;
        this.slides.lockSwipeToNext(false);
        this.currentSlideIndex = this.slides.getActiveIndex();
        this.showindex = this.currentSlideIndex + 1;
        this.slides.slideTo(this.showindex);
        if (this.slides.isEnd() == true) {
            this.showsubmit = true;
        }
        this.slides.lockSwipeToNext(true);
        this.slides.lockSwipeToPrev(true);
        if (this.quiz_type == '3') {
            this.timesinsec = this.quizdata[j + 1].question_duration;
            this.mytimerfunction(this.timesinsec);
        }
    };
    NewquizquestionPage.prototype.submit = function () {
        var _this = this;
        this.pauseTimer();
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
        });
        this.storage.get('login_token').then(function (data) {
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
                "quiz_id": _this.quizid,
                "quiz_answer": _this.quizansarray
            };
            _this.apiServices.submitquiz(apiKey, _this.login_token)
                .subscribe(function (res) {
                console.log('', res);
                if (res.success == 1) {
                    _this.alldata = res;
                    _this.percentage = res.percentage;
                    _this.alertfunction();
                    console.log('sub', res);
                }
                else {
                    _this.apiMessage(res.message);
                }
            }, function (err) {
                console.log('err== ', err);
                _this.apiMessage(err);
            });
        });
    };
    NewquizquestionPage.prototype.ionViewWillLeave = function () {
        console.log('Leaving Sign in Page');
        var today = new Date();
        var time1 = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        console.log('time1', time1);
    };
    NewquizquestionPage.prototype.alertfunction = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            // title: 'SIGNOUT!',
            message: 'Quiz Submited go to see answer',
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.push('QuizResultPage', { 'data': _this.quizid, 'percentage': _this.percentage, 'alldata': _this.alldata });
                        // this.gothroughalertnextques();
                    }
                },
            ]
        });
        alert.present();
    };
    NewquizquestionPage.prototype.goback = function () {
        this.navCtrl.pop();
        this.pauseTimer();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* Slides */])
    ], NewquizquestionPage.prototype, "slides", void 0);
    NewquizquestionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newquizquestion',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/newquizquestion/newquizquestion.html"*/'\n<ion-header>\n  <ion-toolbar color="headColor">\n    <ion-title text-center>\n      newquizquestion\n    </ion-title>\n    <ion-buttons left>\n      <button ion-button (click)="goback()">\n        <ion-icon name="close" class="iconClose" style="color:white;"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-slides #slides speed="500" shouldLockSwipes=true; class="asstest" spaceBetween="10" slidesPerView="1"  (ionSlideDidChange)="slideChanged()">\n        <ion-slide *ngFor="let attendant of quizdata;let j=index" style="overflow-y:scroll;">\n          <ion-row>\n            <ion-col col-12><h6 margin-top >{{attendant.question_text}}</h6></ion-col>\n            <ion-col  col-12><img  (click)="zoomImage(attendant?.file,attendant.question)" class="imgclass"  margin-top margin-bottom src="{{attendant?.question_image}}"></ion-col>\n            <ion-col col-12 no-padding>\n              <ion-row>\n              <ion-col *ngFor="let answer of attendant?.options let i = index" (tap)="optiondata(i,answer.auto_id,attendant.auto_id,j,attendant.question_duration)" \n               class="options" col-6  >\n              <div [ngClass]="{\'stylecolorgrey\':(this.colorclass!=i),\'stylecolorblue\':(this.colorclass==i)}">\n              <ion-label style="white-space: normal;">{{answer?.option_text}}</ion-label> \n               </div>\n              </ion-col>\n            </ion-row>\n            </ion-col>\n          </ion-row>\n          <div >\n              <button ion-button round class="btn" *ngIf="showsubmit==true || totallength==1" (click)="submit(j)">Submit</button>\n              <button ion-button round class="btn" *ngIf="showsubmit==false" (click)="nextslide(j)">Next</button>\n            </div>\n        \n               <ion-row *ngIf="displayTime!=\'\'">\n                 <ion-col col-9></ion-col>\n                 <ion-col col-3 >\n                  <div style="font-weight: 500;\n                  font-size: 25px;\n                  border: 1px solid grey;\n                  border-radius: 100%;\n                  padding: 8px;\n                  height: 70px;\n                  width: 70px;\n                  padding-top: 17px;">\n                \n                      {{displayTime}} \n                    \n                 </div>\n                 </ion-col>\n               </ion-row>\n  \n        </ion-slide>\n      </ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/newquizquestion/newquizquestion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["D" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */]])
    ], NewquizquestionPage);
    return NewquizquestionPage;
}());

//# sourceMappingURL=newquizquestion.js.map

/***/ }),

/***/ 780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewquizquestionPageModule", function() { return NewquizquestionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__newquizquestion__ = __webpack_require__(1083);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewquizquestionPageModule = /** @class */ (function () {
    function NewquizquestionPageModule() {
    }
    NewquizquestionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__newquizquestion__["a" /* NewquizquestionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__newquizquestion__["a" /* NewquizquestionPage */]),
            ],
        })
    ], NewquizquestionPageModule);
    return NewquizquestionPageModule;
}());

//# sourceMappingURL=newquizquestion.module.js.map

/***/ })

});
//# sourceMappingURL=93.js.map
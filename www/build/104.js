webpackJsonp([104],{

/***/ 1067:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JoineequizhistoryPage; });
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






var JoineequizhistoryPage = /** @class */ (function () {
    function JoineequizhistoryPage(alertCtrl, platform, toastCtrl, storage, apiServices, navCtrl, navParams) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.apiServices = apiServices;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.showsubmit = false;
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
            console.log(' employeeId== ', _this.employeeId);
        });
        this.storage.get('showOnBoard').then(function (data) {
            _this.employeetype = data;
            console.log('showOnBoard value this.employeetype==', _this.employeetype);
        });
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            console.log(' deviceId== ', _this.deviceId);
            _this.getQuizResult();
        });
    }
    JoineequizhistoryPage.prototype.getQuizResult = function () {
        var _this = this;
        this.storage.get('showOnBoard').then(function (data) {
            _this.employeetype = data;
            console.log('showOnBoard value this.employeetype==', _this.employeetype);
        });
        this.storage.get('login_token').then(function (data) {
            console.log('AlbumDetails value is111==', data);
            _this.login_token = data;
            var apiKey = {
                "client_id": _this.apiServices.clientId,
                "employee_id": _this.employeeId,
                "device": _this.apiServices.device,
                "device_id": _this.deviceId,
                "app_version": _this.apiServices.appVersion,
                // "value":"0",
                // "quiz_id":this.previousePageData
                "user_type": _this.employeetype,
            };
            console.log('quizResult api key==', apiKey);
            _this.apiServices.joineequizhistory(apiKey, _this.login_token).subscribe(function (result) {
                console.log('quizResult response== ', result);
                if (result.success == 1) {
                    _this.quizdata = result.data;
                    _this.totallength = _this.quizdata.length;
                    setTimeout(function () {
                        _this.slideChanged();
                    }, 1000);
                }
                else {
                    _this.success = result.success;
                    _this.msg = result.message;
                    _this.apiMessage(result.message);
                }
            });
        });
    };
    JoineequizhistoryPage.prototype.slideChanged = function () {
        this.currentIndex = this.slides.isEnd();
        console.log('Current index is', this.currentIndex);
    };
    JoineequizhistoryPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    JoineequizhistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuizsummaryPage');
    };
    JoineequizhistoryPage.prototype.done = function () {
        this.navCtrl.pop();
        // if(this.listkey=='1'){
        // this.navCtrl.pop();
        // }
        // else{
        //   this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-4));
        // }
    };
    JoineequizhistoryPage.prototype.nextslide = function (j) {
        // if (this.radioAnswer[i].answer == '') {
        //   let msg = "please select any option";
        //   this.apiMessage(msg)
        //   return false;
        // }
        // this.submitButtonClick=false;
        // this.selectedanswerIndex=null;
        // this.greenind=null;
        // this.nexton=false;
        //   this.colorclass=null;
        // this.showsubmit=false;  
        //   this.checkenable=true;
        //   console.log("dcdfsdfsdf");
        // this.slides.lockSwipeToNext(false);
        this.currentSlideIndex = this.slides.getActiveIndex();
        console.log('Current index is123', this.currentIndex);
        this.showindex = this.currentSlideIndex + 1;
        this.slides.slideTo(this.showindex);
        if (this.slides.isEnd() == true) {
            this.showsubmit = true;
        }
        // this.slides.lockSwipeToNext(true);
        // this.slides.lockSwipeToPrev(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* Slides */])
    ], JoineequizhistoryPage.prototype, "slides", void 0);
    JoineequizhistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-joineequizhistory',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/joineequizhistory/joineequizhistory.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Quiz History</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <div *ngIf="success!=0">\n\n    <ion-slides #slides speed="500" shouldLockSwipes=true; class="asstest" spaceBetween="10" slidesPerView="1"  (ionSlideDidChange)="slideChanged()">\n\n        <ion-slide *ngFor="let attendant of quizdata;let j=index" style="overflow-y:scroll;">\n     \n     \n          <ion-row><ion-col col-6></ion-col><ion-col col-6><p style="margin: 0px;\n            font-size: 15px;    text-align: end;\n            ">Question {{attendant?.serial_number}} out of {{quizdata.length}}</p></ion-col></ion-row> \n\n\n\n          <ion-row>\n            <ion-col col-12>\n              <!-- <h6 margin-top >{{attendant.question}}</h6> -->\n\n              <ion-card style="width:100%;">\n                  <div class="marg">\n                      <h6 margin-top >{{attendant.question}}</h6>\n                  </div>\n                   \n                </ion-card> \n\n\n            </ion-col>\n            <!-- <ion-col  col-12><img  (click)="zoomImage(attendant?.file,attendant.question)" class="imgclass"  margin-top margin-bottom src="{{attendant?.question_image}}"></ion-col> -->\n            <ion-col col-12 no-padding>\n              <ion-row>\n              <ion-col *ngFor="let answer of attendant?.option let i = index" \n               class="options" col-6  >\n              <div [ngClass]="{\'stylecolorgrey\':(attendant.user_ans!=answer.option_id && attendant.right_ans_id!=answer.option_id),\n              \'stylecolorred\':(attendant.user_ans==answer.option_id),\'stylecolorgreen\':(attendant.right_ans_id==answer.option_id)}">\n              <ion-label style="white-space: normal;">{{answer?.options}}</ion-label> \n               </div>\n    \n              </ion-col>\n            </ion-row>\n            </ion-col>\n          </ion-row>\n          <div > <br><br> <br><br>\n              <button ion-button round class="btn" *ngIf="currentIndex==false" (click)="nextslide(j)">Next</button>\n              <!-- <button ion-button round class="btn3" *ngIf="showsubmit==true || totallength==1" (click)="submit(j)">Submit</button> -->\n              <button ion-button round class="btn" *ngIf="currentIndex==true" (click)="done()">Done</button>\n           \n            </div>\n          <br><br>\n    \n             \n        </ion-slide>\n      </ion-slides>\n    </div>\n      <div *ngIf="success==0">\n          <br><br><br><br>\n      <p style="font-size:20px;font-weight: bold;text-align:center"> \n                 {{msg}}\n      </p>\n      \n        </div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/joineequizhistory/joineequizhistory.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], JoineequizhistoryPage);
    return JoineequizhistoryPage;
}());

//# sourceMappingURL=joineequizhistory.js.map

/***/ }),

/***/ 764:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoineequizhistoryPageModule", function() { return JoineequizhistoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__joineequizhistory__ = __webpack_require__(1067);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var JoineequizhistoryPageModule = /** @class */ (function () {
    function JoineequizhistoryPageModule() {
    }
    JoineequizhistoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__joineequizhistory__["a" /* JoineequizhistoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__joineequizhistory__["a" /* JoineequizhistoryPage */]),
            ],
        })
    ], JoineequizhistoryPageModule);
    return JoineequizhistoryPageModule;
}());

//# sourceMappingURL=joineequizhistory.module.js.map

/***/ })

});
//# sourceMappingURL=104.js.map
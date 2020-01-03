webpackJsonp([94],{

/***/ 1082:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewquizlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(161);
// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewquizlistPage = /** @class */ (function () {
    function NewquizlistPage(navCtrl, navParams, viewCtrl, alertCtrl, platform, toastCtrl, storage, apiServices) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.apiServices = apiServices;
        this.value = '0';
        this.infiniteScrollCalled = false;
        this.hideInfiniteScroll = false;
    }
    NewquizlistPage.prototype.ionViewWillEnter = function () {
        this.quizlist();
    };
    NewquizlistPage.prototype.quizlist = function () {
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
                "val": _this.value
            };
            _this.apiServices.quizlist(apiKey, _this.login_token)
                .subscribe(function (res) {
                console.log('', res);
                if (res.success == 1) {
                    // this.totallength = this.allData.length;
                    console.log('this.allData', _this.quiz);
                    if (_this.quiz == undefined) {
                        _this.quiz = res.data;
                    }
                    else {
                        _this.quiz = _this.quiz.concat(res.data);
                        console.log('new album list==', res.data);
                    }
                    if (_this.infiniteScrollCalled == true) {
                        _this.myInfiniteScroll.complete();
                        _this.infiniteScrollCalled = false;
                    }
                    console.log('this.formdata==', _this.quiz);
                    _this.hideInfiniteScroll = false;
                }
                else {
                    _this.hideInfiniteScroll = true;
                    _this.succ = res.success;
                    _this.msg = res.message;
                    _this.apiMessage(res.message);
                }
            }, function (err) {
                console.log('err== ', err);
                _this.apiMessage(err);
            });
        });
    };
    NewquizlistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewquizlistPage');
    };
    NewquizlistPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    NewquizlistPage.prototype.gotoquestions = function (qid, quiz_type, quiztimining) {
        console.log('qid', qid);
        this.navCtrl.push('NewquizquestionPage', { 'qid': qid, 'quiz_type': quiz_type, 'quiztimining': quiztimining });
    };
    NewquizlistPage.prototype.gotoseeanswer = function (id) {
        this.navCtrl.push('QuizsummaryPage', { 'listkey': '1', 'data': id });
    };
    NewquizlistPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        this.myInfiniteScroll = infiniteScroll;
        setTimeout(function () {
            _this.infiniteScrollCalled = true;
            _this.value = _this.quiz.length;
            _this.quizlist();
            console.log('Async operation has ended');
            // this.myInfiniteScroll.complete();
        }, 500);
    };
    NewquizlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newquizlist',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/newquizlist/newquizlist.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Quiz</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- <ion-card class="maincard" *ngFor="let q of quiz ">\n    <ion-card-content class="cardcontent">\n      <h2 class="title">{{q.quiz_name}}</h2>\n      <p class="noquestion" *ngIf="q.totalQuestion==1" >{{q.totalQuestion}} Question</p>\n      <p class="noquestion" *ngIf="q.totalQuestion>1" >{{q.totalQuestion}} Questions</p>\n    <ion-row *ngIf="q.fillStatus==0"> \n      <ion-col col-6 class="colfirst">\n          <p class="date">Valid till:</p>\n          <p class="date">{{q.end_date}} </p><br>\n      \n      </ion-col>\n    </ion-row>\n    <ion-row> \n      <ion-col col-6 class="colfirst">\n \n          <button ion-button color="danger" *ngIf="q.fillStatus==0" style="text-transform: none;" clear>{{q.days}}</button>\n      </ion-col>\n      <ion-col col-6 class="align"  *ngIf="q.fillStatus==0">\n        <button ion-button color="themecol" style="color: #155aab" clear (click)="gotoquestions(q)">Fill Now</button>\n    </ion-col>\n\n    <ion-col col-6 class="align" *ngIf="q.fillStatus==2 && q.quizStatus==1">\n      <button ion-button color="danger" clear (click)="gotoquestions(q)">Complete Now</button>\n  </ion-col>\n\n    </ion-row>\n    <ion-row *ngIf="q.fillStatus==1 && q.quizStatus==0 "> \n      <ion-col col-6 class="colfirst"> \n      <p class="date1"> Expired</p></ion-col>\n    </ion-row>\n    <ion-row *ngIf="q.fillStatus==1"> \n      <ion-col col-6 class="colsecond">\n        <p class="date1"> Completed</p>\n      </ion-col>\n      <ion-col col-6 class="align" *ngIf="q.fillStatus==1 && q.releaseAnswerKey==1"> \n        <button ion-button color="danger" clear (click)="review(q)" >Review Your Answers</button></ion-col>\n     </ion-row>\n  </ion-card-content>\n \n</ion-card> -->\n\n<ion-row *ngFor="let q of quiz let i=index;">\n  <ion-col col-12 class="leftbdr" [ngClass]="{\'themecolor\': i%3==0, \'skyblue\':i%3==1,\'red\':i%3==2 }"  >\n      <ion-card class="maincard" >\n          <ion-card-content class="cardcontent">\n      <ion-row>\n        <ion-col col-3 class="paddtop">\n            <p *ngIf="q.fillStatus==0" class="date">Valid till:</p>\n            <p *ngIf="q.fillStatus==0" class="date">{{q.end_date}} </p>\n        </ion-col>\n        <ion-col col-5>\n            <h2 class="title">{{q.quiz_name}}</h2>\n            <p class="noquestion" *ngIf="q.totalQuestion==1" >{{q.totalQuestion}} Question</p>\n            <p class="noquestion" *ngIf="q.totalQuestion>1" >{{q.totalQuestion}} Questions</p>\n          </ion-col>\n       \n      </ion-row>\n      \n      <ion-row>\n        <ion-col col-12 no-margin no-padding text-right>\n          <!-- <div *ngIf="q.fillStatus==0" class="fillclass" (click)="gotoquestions(q)">\n            <p class="paracss">Fill Now</p>\n            \n          </div> -->\n          <!-- <button ion-button round outline>Outline + Round</button> -->\n            <button ion-button round outline  *ngIf="q.fillStatus==0" (click)="gotoquestions(q.quiz_id,q.quiz_type,q.quiz_timing)">Fill Now</button>\n\n            <button ion-button round outline  *ngIf="q.release_result_status==\'2\' && q.fillStatus==1" (click)="gotoseeanswer(q.quiz_id)">Review Your answer</button>\n          </ion-col>\n      </ion-row>\n          </ion-card-content>\n      </ion-card>\n  </ion-col>\n</ion-row>\n\n\n<ion-infinite-scroll *ngIf="hideInfiniteScroll==false && quiz" (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n  <div *ngIf="succ==0" style="text-align:center;">\n    <p>{{msg}}</p>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/newquizlist/newquizlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["D" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */]])
    ], NewquizlistPage);
    return NewquizlistPage;
}());

//# sourceMappingURL=newquizlist.js.map

/***/ }),

/***/ 779:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewquizlistPageModule", function() { return NewquizlistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__newquizlist__ = __webpack_require__(1082);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewquizlistPageModule = /** @class */ (function () {
    function NewquizlistPageModule() {
    }
    NewquizlistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__newquizlist__["a" /* NewquizlistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__newquizlist__["a" /* NewquizlistPage */]),
            ],
        })
    ], NewquizlistPageModule);
    return NewquizlistPageModule;
}());

//# sourceMappingURL=newquizlist.module.js.map

/***/ })

});
//# sourceMappingURL=94.js.map
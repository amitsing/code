webpackJsonp([55],{

/***/ 1175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveylistPage; });
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




var SurveylistPage = /** @class */ (function () {
    function SurveylistPage(navCtrl, navParams, alertCtrl, platform, toastCtrl, storage, apiServices) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.apiServices = apiServices;
        this.value = '0';
        this.infiniteScrollCalled = false;
        this.hideInfiniteScroll = false;
        this.bgImageViewer = false;
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
            console.log(' employeeId== ', _this.employeeId);
        });
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
        });
        // this.surveylist();
    }
    SurveylistPage.prototype.surveylist = function () {
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
                "value": _this.value
            };
            _this.apiServices.surveylist(apiKey, _this.login_token)
                .subscribe(function (res) {
                console.log('', res);
                if (res.success == 1) {
                    // this.allData = res.data;
                    if (_this.allData == undefined) {
                        _this.allData = res.data;
                    }
                    else {
                        _this.allData = _this.allData.concat(res.data);
                        console.log('new album list==', res.data);
                    }
                    if (_this.infiniteScrollCalled == true) {
                        _this.myInfiniteScroll.complete();
                        _this.infiniteScrollCalled = false;
                    }
                    console.log('this.formdata==', _this.allData);
                    _this.hideInfiniteScroll = false;
                }
                else {
                    if (_this.value == '0') {
                        // this.msg=res.message;
                        _this.bgImageViewer = true;
                    }
                    _this.hideInfiniteScroll = true;
                    // this.apiMessage(res.message);
                }
            }, function (err) {
                console.log('err== ', err);
                _this.apiMessage(err);
            });
        });
    };
    SurveylistPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    SurveylistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SurveylistPage');
    };
    SurveylistPage.prototype.gotodetail = function (i, allData) {
        console.log('allData==', allData);
        if (allData.survey_instruction_check == 0 || allData.survey_instruction_check == '0') {
            this.navCtrl.push('TestsurveyPage', { 'surveyid': this.allData[i].survey_id, 'allData': allData });
        }
        else {
            this.navCtrl.push('SurveyInstructionPage', { 'surveyid': this.allData[i].survey_id, 'allData': allData });
        }
        // this.navCtrl.push('SurveydetailPage', { 'surveyid': this.allData[i].survey_id, 'allData':allData  });
    };
    SurveylistPage.prototype.ionViewWillEnter = function () {
        this.allData = undefined;
        this.value = '0';
        this.surveylist();
    };
    SurveylistPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        this.myInfiniteScroll = infiniteScroll;
        setTimeout(function () {
            _this.infiniteScrollCalled = true;
            _this.value = _this.allData.length;
            _this.surveylist();
            console.log('Async operation has ended');
            // this.myInfiniteScroll.complete();
        }, 500);
    };
    SurveylistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-surveylist',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/surveylist/surveylist.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Survey</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <br>\n    <ion-row *ngFor="let data of allData let i=index;" (click)="gotodetail(i,data)" \n    style="    border-bottom: 1px solid #dadada;\n    margin: 5px; ">\n      <!-- <ion-col col-3>\n        <img class="imgcss" srcset="{{data?.survey_image}}" src="../../assets/imgs/sodexo.png">\n      </ion-col> -->\n      <ion-col col-12>\n        <p class="title">\n          {{data?.title}}\n        </p>\n        <p style="text-align:right; margin: 5px;\n        font-size: 12px;\n        color: #444;">\n          {{data?.daysRemain}}\n        </p>\n      </ion-col>\n    </ion-row>\n\n    <div *ngIf="bgImageViewer">\n        <img src="assets/imgs/No SurveyImage.png"  style="width:100%">\n      </div> \n\n\n  <ion-infinite-scroll *ngIf="hideInfiniteScroll==false && allData" (ionInfinite)="doInfinite($event)">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/surveylist/surveylist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */]])
    ], SurveylistPage);
    return SurveylistPage;
}());

//# sourceMappingURL=surveylist.js.map

/***/ }),

/***/ 847:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveylistPageModule", function() { return SurveylistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__surveylist__ = __webpack_require__(1175);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SurveylistPageModule = /** @class */ (function () {
    function SurveylistPageModule() {
    }
    SurveylistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__surveylist__["a" /* SurveylistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__surveylist__["a" /* SurveylistPage */]),
            ],
        })
    ], SurveylistPageModule);
    return SurveylistPageModule;
}());

//# sourceMappingURL=surveylist.module.js.map

/***/ })

});
//# sourceMappingURL=55.js.map
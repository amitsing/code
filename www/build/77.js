webpackJsonp([77],{

/***/ 1101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalpolicydetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_img_viewer__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GlobalpolicydetailPage = /** @class */ (function () {
    function GlobalpolicydetailPage(alertCtrl, platform, menu, loadingCtrl, toastCtrl, storage, imageViewerCtrl, apiServices, navCtrl, navParams, iab) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.menu = menu;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.apiServices = apiServices;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.iab = iab;
        this.quiz_data = [];
        this.firstdiv = true;
        this.quizdiv = false;
        this.answerarr = [];
        // this.answerarr = [{ "question_id": "", "answer": "" }]
        this._imageViewerCtrl = imageViewerCtrl;
        this.previousdata = this.navParams.get('data');
        this.title = this.previousdata.title;
        this.form_id = this.navParams.get('form_id');
        console.log("this.hidenext", this.previousdata.auto_id);
        console.log("this.hidenext111", this.previousdata.index_status);
        this.hidenext = this.previousdata.index_status;
        this.storage.get('login_token').then(function (data) { _this.login_token = data; });
        this.storage.get('employeeId').then(function (data) { _this.employeeId = data; });
        this.policy_detail();
    }
    GlobalpolicydetailPage.prototype.policy_detail = function () {
        var _this = this;
        this.commonLoader();
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            var apiKey = {
                "client_id": _this.apiServices.clientId,
                "employee_id": _this.employeeId,
                "device": _this.apiServices.device,
                "device_id": _this.deviceId,
                "app_version": _this.apiServices.appVersion,
                "index_id": _this.previousdata.auto_id,
            };
            _this.apiServices.globalpolicy_detail(apiKey, _this.login_token).subscribe(function (res) {
                console.log('tnc res==', res);
                _this.loading.dismiss();
                if (res.success == 1) {
                    _this.title = res.data.title;
                    _this.index_id = res.index_id;
                    _this.btncheckdata = res.data;
                    _this.alldata = res.content;
                    console.log('succ');
                    // if(this.btncheckdata.nextIndexId==''){
                    //   this.navCtrl.pop();
                    // }
                    // this.navCtrl.pop();
                    // console.log('succ1', this.allData[0]);
                }
                else {
                    _this.navCtrl.pop();
                    _this.apiMessage(res.message);
                }
            }, function (err) {
                _this.loading.dismiss();
                console.log('err== ', err);
                _this.apiMessage(err);
            });
        });
    };
    //Common Loader:
    GlobalpolicydetailPage.prototype.commonLoader = function () {
        this.loading = this.loadingCtrl.create({
            enableBackdropDismiss: true,
            spinner: 'ios-small',
            content: 'Loading data...'
        });
        this.loading.present();
    };
    GlobalpolicydetailPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    GlobalpolicydetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GlobalpolicydetailPage');
    };
    GlobalpolicydetailPage.prototype.submit = function () {
        if (this.btncheckdata.quiz_applicable == 1 || this.btncheckdata.quiz_applicable == '1') {
            this.firstdiv = false;
            this.policy_quiz();
        }
        else {
            this.policy_ack();
        }
    };
    GlobalpolicydetailPage.prototype.policy_quiz = function () {
        var _this = this;
        this.commonLoader();
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            var apiKey = {
                "client_id": _this.apiServices.clientId,
                "employee_id": _this.employeeId,
                "device": _this.apiServices.device,
                "device_id": _this.deviceId,
                "app_version": _this.apiServices.appVersion,
                "index_id": _this.index_id,
            };
            _this.apiServices.globalpolicy_quiz(apiKey, _this.login_token).subscribe(function (res) {
                console.log('tnc res==', res);
                _this.loading.dismiss();
                if (res.success == 1) {
                    _this.quiz_data = res.data;
                    console.log('succ', _this.quiz_data);
                    _this.quizdiv = true;
                    console.log('succ1', _this.quiz_data.length);
                    for (var x = 0; x < _this.quiz_data.length; x++) {
                        _this.answerarr.push({ "question_id": "", "answer_id": "" });
                    }
                    console.log('succ1', _this.answerarr);
                }
                else {
                    _this.apiMessage(res.message);
                }
            }, function (err) {
                _this.loading.dismiss();
                console.log('err== ', err);
                _this.apiMessage(err);
            });
        });
    };
    GlobalpolicydetailPage.prototype.radioClicked = function (value, index, optionsdata) {
        console.log("test", value);
        this.answerarr[index].question_id = value.questionId;
        this.answerarr[index].answer_id = optionsdata.optionId;
        console.log("this.answerarr", this.answerarr);
    };
    GlobalpolicydetailPage.prototype.submit_quiz = function () {
        var _this = this;
        if (this.checkOptionalStatus()) {
            console.log("status5", status);
        }
        else {
            this.msg = "All fields are mandetory.";
            this.apiMessage(this.msg);
            return false;
        }
        this.commonLoader();
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            var apiKey = {
                "client_id": _this.apiServices.clientId,
                "employee_id": _this.employeeId,
                "device": _this.apiServices.device,
                "device_id": _this.deviceId,
                "app_version": _this.apiServices.appVersion,
                "answer": _this.answerarr,
                "index_id": _this.previousdata.auto_id,
                "form_id": _this.form_id
            };
            _this.apiServices.globalpolicy_quizsubmit(apiKey, _this.login_token).subscribe(function (res) {
                console.log('tnc res==', res);
                _this.loading.dismiss();
                if (res.success == 1) {
                    _this.quiz_data = [];
                    _this.alldata = [];
                    _this.answerarr = [];
                    _this.quizdiv = false;
                    _this.firstdiv = true;
                    _this.previousdata.auto_id = _this.btncheckdata.nextIndexId;
                    _this.policy_detail();
                    console.log('succ');
                }
                else {
                    _this.apiMessage(res.message);
                }
            }, function (err) {
                _this.loading.dismiss();
                console.log('err== ', err);
                _this.apiMessage(err);
            });
        });
    };
    GlobalpolicydetailPage.prototype.checkOptionalStatus = function () {
        var status = true;
        this.answerarr.forEach(function (element) {
            status = element.answer_id && status;
            console.log("status2", status);
        });
        return status;
    };
    GlobalpolicydetailPage.prototype.policy_ack = function () {
        var _this = this;
        this.commonLoader();
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            var apiKey = {
                "client_id": _this.apiServices.clientId,
                "employee_id": _this.employeeId,
                "device": _this.apiServices.device,
                "device_id": _this.deviceId,
                "app_version": _this.apiServices.appVersion,
                "index_id": _this.previousdata.auto_id,
                "form_id": _this.form_id
            };
            _this.apiServices.globalpolicy_ack(apiKey, _this.login_token).subscribe(function (res) {
                console.log('tnc res==', res);
                _this.loading.dismiss();
                if (res.success == 1) {
                    //  this.ack_data=res.data;
                    _this.quiz_data = [];
                    _this.alldata = [];
                    _this.answerarr = [];
                    _this.quizdiv = false;
                    _this.firstdiv = true;
                    if (_this.btncheckdata.nextIndexId != '') {
                        _this.previousdata.auto_id = _this.btncheckdata.nextIndexId;
                        _this.policy_detail();
                    }
                    else {
                        _this.navCtrl.pop();
                    }
                    // this.apiMessage(res.message);
                    console.log('succ1', _this.answerarr);
                }
                else {
                    _this.apiMessage(res.message);
                }
            }, function (err) {
                _this.loading.dismiss();
                console.log('err== ', err);
                _this.apiMessage(err);
            });
        });
    };
    GlobalpolicydetailPage.prototype.presentImage = function (myImage) {
        var imageViewer = this._imageViewerCtrl.create(myImage);
        imageViewer.present();
        setTimeout(function () { return imageViewer.dismiss(); }, 30000);
        imageViewer.onDidDismiss(function () { return console.log('Viewer dismissed'); });
    };
    GlobalpolicydetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-globalpolicydetail',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/onboarding_forms/common_folder/globalpolicydetail/globalpolicydetail.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n  <div *ngIf="firstdiv && alldata">\n   <div class="pageDiv" *ngFor="let data of alldata; let i= index;">\n  <div class="customCardDiv">\n<!-- <div class="padd" *ngFor="let data of alldata; let i=index"> -->\n  <div *ngIf="data?.content_type==\'text\'" [innerHTML]="data?.content"></div>\n<!-- <p *ngIf="data?.content_type==\'text\'" [innerHTML]="data?.content"></p> -->\n<!-- <img *ngIf="data?.content_type==\'image\'" class="imgcss"  onError="this.src=\'../../assets/watermark/watermark.png\'" \n [src]="data?.content"/> -->\n\n <img *ngIf="data?.content_type==\'image\'" src="{{data?.content}}"   #myImage (click)="presentImage(myImage)"  />\n\n</div>\n</div>\n<!-- \n<div *ngIf="hidenext!=\'complete\'" class="btndiv">\n    <button ion-button class="btn" (click)="submit()">{{btncheckdata.btnText}}</button>\n  </div> -->\n\n\n  <div  class="btndiv">\n    <button ion-button class="btn" [disabled]="!btncheckdata.enable" (click)="submit()">{{btncheckdata.btnText}}</button>\n  </div>\n\n</div>\n\n<div *ngIf="quiz_data.length>=1 && quizdiv==true" class="pageDiv">\n    <div class="customCardDiv2">\n  <div class="padd" *ngFor="let qdata of quiz_data; let j=index">\n<ion-row>\n  <ion-col col-1 >\n    {{j+1}})\n  </ion-col>\n  <ion-col col-11>\n    <div class="qcss" [innerHTML]="qdata?.question">\n    </div>\n  </ion-col>\n</ion-row>\n\n  <ion-list radio-group>\n      <ion-item *ngFor="let optionsdata of qdata.options; let k=index">\n         <ion-label> {{optionsdata.options}}</ion-label>\n         <ion-radio value=" {{optionsdata.options}}" (click)="radioClicked(qdata,j,optionsdata)" >\n         </ion-radio>\n       </ion-item>\n     </ion-list>\n\n</div>\n    <!-- </div> -->\n   <div class="btndiv">\n      <button ion-button class="btn" (click)="submit_quiz()">submit</button>\n    </div>\n  </div>\n  </div>\n\n  <!-- <div *ngIf="quiz_data.length>=1 && quizdiv==true" class="pageDiv">\n      <div class="customCardDiv">\n        <p></p>\n      </div>\n  </div> -->\n\n\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/onboarding_forms/common_folder/globalpolicydetail/globalpolicydetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5_ionic_img_viewer__["a" /* ImageViewerController */], __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], GlobalpolicydetailPage);
    return GlobalpolicydetailPage;
}());

//# sourceMappingURL=globalpolicydetail.js.map

/***/ }),

/***/ 795:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalpolicydetailPageModule", function() { return GlobalpolicydetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globalpolicydetail__ = __webpack_require__(1101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GlobalpolicydetailPageModule = /** @class */ (function () {
    function GlobalpolicydetailPageModule() {
    }
    GlobalpolicydetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__globalpolicydetail__["a" /* GlobalpolicydetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__globalpolicydetail__["a" /* GlobalpolicydetailPage */]),
            ],
        })
    ], GlobalpolicydetailPageModule);
    return GlobalpolicydetailPageModule;
}());

//# sourceMappingURL=globalpolicydetail.module.js.map

/***/ })

});
//# sourceMappingURL=77.js.map
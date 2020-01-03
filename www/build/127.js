webpackJsonp([127],{

/***/ 1034:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BankinstructionPage; });
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




var BankinstructionPage = /** @class */ (function () {
    function BankinstructionPage(navCtrl, navParams, loadingCtrl, alertCtrl, platform, toastCtrl, storage, apiServices) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.apiServices = apiServices;
        this.previousdata = this.navParams.get('previousdata');
        this.acountselection = this.navParams.get('acountselection');
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
            console.log(' employeeId== ', _this.employeeId);
        });
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
        });
        this.instruction();
    }
    //Common Loader:
    BankinstructionPage.prototype.commonLoader = function () {
        this.loading = this.loadingCtrl.create({
            enableBackdropDismiss: true,
            spinner: 'ios-small',
            content: 'Loading data...'
        });
        this.loading.present();
    };
    BankinstructionPage.prototype.instruction = function () {
        var _this = this;
        this.commonLoader();
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
            //  this.token='Q3owSXo3T05BVVJscHREVCsyeUtqZz09OjoWf4jZSksqJnff2wxdlZ7e'
            var apiKey = {
                "client_id": _this.apiServices.clientId,
                "employee_id": _this.employeeId,
                "device": _this.apiServices.device,
                "device_id": _this.deviceId,
                "app_version": _this.apiServices.appVersion
            };
            _this.apiServices.bankinstruction(apiKey, _this.login_token)
                .subscribe(function (res) {
                _this.loading.dismiss();
                // this.apiServices.urllist(apiKey,this.token).then((result) => { 
                console.log('', res);
                if (res.success == 1) {
                    _this.allData = res.data;
                    console.log('succ', _this.allData);
                }
                else {
                    _this.allData = [];
                    _this.apiMessage(res.message);
                }
            }, function (err) {
                console.log('err== ', err);
                _this.apiMessage(err);
            });
        });
    };
    BankinstructionPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    BankinstructionPage.prototype.alertfunction = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            // title: 'SIGNOUT!',
            message: 'Are you sure you want to submit',
            enableBackdropDismiss: true,
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        // this.gothroughalertnextques();
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        _this.submitinstruction();
                    }
                },
            ]
        });
        alert.present();
    };
    BankinstructionPage.prototype.submit = function () {
        this.alertfunction();
    };
    BankinstructionPage.prototype.submitinstruction = function () {
        var _this = this;
        this.commonLoader();
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
            //  this.token='Q3owSXo3T05BVVJscHREVCsyeUtqZz09OjoWf4jZSksqJnff2wxdlZ7e'
            var apiKey = {
                "client_id": _this.apiServices.clientId,
                "employee_id": _this.employeeId,
                "device": _this.apiServices.device,
                "device_id": _this.deviceId,
                "app_version": _this.apiServices.appVersion,
                "selected_option": parseInt(_this.acountselection) + 1,
                "form_id": _this.previousdata.form_id,
            };
            _this.apiServices.submitinstruction(apiKey, _this.login_token)
                .subscribe(function (res) {
                _this.loading.dismiss();
                // this.apiServices.urllist(apiKey,this.token).then((result) => { 
                console.log('', res);
                if (res.success == 1) {
                    _this.navCtrl.popTo(_this.navCtrl.getByIndex(_this.navCtrl.length() - 3));
                    console.log('succ', _this.allData);
                }
                else {
                    _this.allData = [];
                    _this.apiMessage(res.message);
                }
            }, function (err) {
                console.log('err== ', err);
                _this.apiMessage(err);
            });
        });
    };
    BankinstructionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BankinstructionPage');
    };
    BankinstructionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bankinstruction',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/bankinstruction/bankinstruction.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>New Account Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n<ion-row *ngFor="let data of allData ; let i = index">\n  <ion-col col-2>\n    <p>{{data[i]}}</p>\n    <img *ngIf="data.text" class="imgcss" src="../../assets/imgs/bullet.png">\n  </ion-col>\n  <ion-col col-10>\n    <p [innerHTML]="data.text">\n       <!-- {{data.text}} -->\n    </p>\n    <div *ngIf="data.image" class="imgcenter">\n        <img  class="imgcss1" src="{{data?.image}}">\n    </div>\n  \n  </ion-col>\n</ion-row>\n\n\n<div class="btndiv">\n    <button ion-button  class="btn" (click)="submit()">Confirm</button>\n   </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/bankinstruction/bankinstruction.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */]])
    ], BankinstructionPage);
    return BankinstructionPage;
}());

//# sourceMappingURL=bankinstruction.js.map

/***/ }),

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankinstructionPageModule", function() { return BankinstructionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bankinstruction__ = __webpack_require__(1034);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BankinstructionPageModule = /** @class */ (function () {
    function BankinstructionPageModule() {
    }
    BankinstructionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__bankinstruction__["a" /* BankinstructionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bankinstruction__["a" /* BankinstructionPage */]),
            ],
        })
    ], BankinstructionPageModule);
    return BankinstructionPageModule;
}());

//# sourceMappingURL=bankinstruction.module.js.map

/***/ })

});
//# sourceMappingURL=127.js.map
webpackJsonp([76],{

/***/ 1102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalpolicylistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GlobalpolicylistPage = /** @class */ (function () {
    function GlobalpolicylistPage(alertCtrl, platform, menu, loadingCtrl, toastCtrl, storage, apiServices, navCtrl, navParams, iab) {
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
        this.data = this.navParams.get('data');
        this.form_id = this.data.form_id;
        this.title = this.data.form_name;
        this.form_status = this.data.form_status;
        this.storage.get('login_token').then(function (data) { _this.login_token = data; });
        this.storage.get('employeeId').then(function (data) { _this.employeeId = data; });
    }
    GlobalpolicylistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GlobalpolicylistPage');
    };
    GlobalpolicylistPage.prototype.ionViewWillEnter = function () {
        this.policy_list();
    };
    GlobalpolicylistPage.prototype.policy_list = function () {
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
                "policy_id": _this.form_id,
            };
            _this.apiServices.globalpolicy_list(apiKey, _this.login_token).subscribe(function (res) {
                console.log('tnc res==', res);
                _this.loading.dismiss();
                if (res.success == 1) {
                    _this.alldata = res.data;
                    console.log('succ');
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
    GlobalpolicylistPage.prototype.commonLoader = function () {
        this.loading = this.loadingCtrl.create({
            enableBackdropDismiss: true,
            spinner: 'ios-small',
            content: 'Loading data...'
        });
        this.loading.present();
    };
    GlobalpolicylistPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    GlobalpolicylistPage.prototype.seeDetails = function (data) {
        if (data.index_status == 'locked') {
        }
        else {
            this.navCtrl.push('GlobalpolicydetailPage', { 'data': data, 'form_id': this.form_id });
        }
    };
    GlobalpolicylistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-globalpolicylist',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/onboarding_forms/common_folder/globalpolicylist/globalpolicylist.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n  <div *ngIf="alldata">\n    <ion-list>\n          <ion-item *ngFor="let data of alldata; let i=index" [ngClass]="{\'classTheme\' : (i%2 == 0), \'classwhite\':(i%2 != 0)}" (click)="seeDetails(data)">\n<ion-row>\n  <ion-col col-10>\n    <h2 class="title" [innerHTML]="data?.title"></h2>\n  </ion-col>\n  <ion-col col-2>\n\n      <img style="width: 24px;\n      height: 24px;" srcset="{{data.icon}}" src="../../assets/watermark/watermark.png" class="iconcss" />\n\n    <!-- <ion-icon *ngIf="data.index_status==\'locked\'" style="font-size: 25px;color:#4c2648;" name="ios-lock-outline"></ion-icon>\n    <ion-icon *ngIf="data.index_status==\'unlocked\'" style="font-size: 25px;color:#4c2648;" ios="ios-unlock-outline" md="ios-unlock-outline"></ion-icon>\n    <ion-icon *ngIf="data.index_status==\'complete\'" style="font-size: 25px;color:#4c2648;" ios="ios-checkmark-circle-outline" md="md-checkmark-circle-outline"></ion-icon> -->\n \n  </ion-col>\n</ion-row>\n          </ion-item>\n        \n      </ion-list>\n</div> \n\n\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/onboarding_forms/common_folder/globalpolicylist/globalpolicylist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], GlobalpolicylistPage);
    return GlobalpolicylistPage;
}());

//# sourceMappingURL=globalpolicylist.js.map

/***/ }),

/***/ 796:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalpolicylistPageModule", function() { return GlobalpolicylistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globalpolicylist__ = __webpack_require__(1102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GlobalpolicylistPageModule = /** @class */ (function () {
    function GlobalpolicylistPageModule() {
    }
    GlobalpolicylistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__globalpolicylist__["a" /* GlobalpolicylistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__globalpolicylist__["a" /* GlobalpolicylistPage */]),
            ],
        })
    ], GlobalpolicylistPageModule);
    return GlobalpolicylistPageModule;
}());

//# sourceMappingURL=globalpolicylist.module.js.map

/***/ })

});
//# sourceMappingURL=76.js.map
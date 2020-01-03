webpackJsonp([126],{

/***/ 1035:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BehaivourGuidePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_img_viewer__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the BehaivourGuidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BehaivourGuidePage = /** @class */ (function () {
    function BehaivourGuidePage(storage, apiServices, toastCtrl, alertCtrl, imageViewerCtrl, loadingCtrl, navCtrl, navParams) {
        var _this = this;
        this.storage = storage;
        this.apiServices = apiServices;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._imageViewerCtrl = imageViewerCtrl;
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
            console.log(' employeeId== ', _this.employeeId);
        });
        this.storage.get('login_token').then(function (data) {
            console.log('thoughtOftheDayApi value is111==', data);
            _this.login_token = data;
        });
        this.storage.get('employee_type').then(function (data) {
            console.log('showOnBoard value is111==', data);
            _this.employee_type = data;
        });
    }
    BehaivourGuidePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad thoughtOftheDayApi');
        this.getthoughtFun();
    };
    BehaivourGuidePage.prototype.getthoughtFun = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
            console.log(' employeeId== ', _this.employeeId);
        });
        this.storage.get('login_token').then(function (data) {
            console.log('showOnBoard value is111==', data);
            _this.login_token = data;
        });
        this.storage.get('employee_type').then(function (data) {
            console.log('showOnBoard value is111==', data);
            _this.employee_type = data;
        });
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            var apiKey = {
                "client_id": _this.apiServices.clientId,
                "employee_id": _this.employeeId,
                "device": _this.apiServices.device,
                "device_id": _this.deviceId,
                "app_version": _this.apiServices.appVersion,
                "flag": "50",
                "user_type": _this.employee_type
            };
            _this.apiServices.behaviourGuideApi(apiKey, _this.login_token)
                .subscribe(function (res) {
                console.log('behaviourGuideApi List res==', res);
                if (res.success == 1) {
                    _this.allData = res.data;
                    setTimeout(function () {
                        loading.dismiss();
                    }, 1000);
                }
                else {
                    if (_this.allData.length == 0) {
                        var alert_1 = _this.alertCtrl.create({
                            // title: 'Confirm purchase',
                            message: res.message,
                            buttons: [
                                {
                                    text: 'Ok',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                        _this.navCtrl.pop();
                                    }
                                }
                            ]
                        });
                        alert_1.present();
                    }
                    else {
                        var toast = _this.toastCtrl.create({
                            message: 'User was added successfully',
                            duration: 3000,
                            position: 'top'
                        });
                        toast.onDidDismiss(function () {
                            console.log('Dismissed toast');
                        });
                        toast.present();
                    }
                    setTimeout(function () {
                        loading.dismiss();
                    }, 0);
                }
            });
        });
    };
    BehaivourGuidePage.prototype.presentImage = function (myImage) {
        var imageViewer = this._imageViewerCtrl.create(myImage);
        imageViewer.present();
        setTimeout(function () { return imageViewer.dismiss(); }, 30000);
        imageViewer.onDidDismiss(function () { return console.log('Viewer dismissed'); });
    };
    BehaivourGuidePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-behaivour-guide',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/behaivour-guide/behaivour-guide.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Behavior Guide</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n    <ion-slides pager="true">\n        <ion-slide *ngFor="let data of allData">\n          <img src="{{data?.images}}"  #myImage (click)="presentImage(myImage)" class="slideImage"/>\n        </ion-slide>\n    </ion-slides>\n    </ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/behaivour-guide/behaivour-guide.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4_ionic_img_viewer__["a" /* ImageViewerController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], BehaivourGuidePage);
    return BehaivourGuidePage;
}());

//# sourceMappingURL=behaivour-guide.js.map

/***/ }),

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BehaivourGuidePageModule", function() { return BehaivourGuidePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__behaivour_guide__ = __webpack_require__(1035);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BehaivourGuidePageModule = /** @class */ (function () {
    function BehaivourGuidePageModule() {
    }
    BehaivourGuidePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__behaivour_guide__["a" /* BehaivourGuidePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__behaivour_guide__["a" /* BehaivourGuidePage */]), __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__["b" /* IonicImageViewerModule */]
            ],
        })
    ], BehaivourGuidePageModule);
    return BehaivourGuidePageModule;
}());

//# sourceMappingURL=behaivour-guide.module.js.map

/***/ })

});
//# sourceMappingURL=126.js.map
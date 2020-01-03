webpackJsonp([91],{

/***/ 1086:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticeListPage; });
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





var NoticeListPage = /** @class */ (function () {
    function NoticeListPage(storage, apiServices, toastCtrl, alertCtrl, imageViewerCtrl, loadingCtrl, navCtrl, navParams) {
        var _this = this;
        this.storage = storage;
        this.apiServices = apiServices;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.hideinfinite = 0;
        this.value = 0;
        this.bgImageViewer = false;
        this._imageViewerCtrl = imageViewerCtrl;
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
            console.log(' employeeId== ', _this.employeeId);
        });
        this.storage.get('login_token').then(function (data) {
            console.log('showOnBoard value is111==', data);
            _this.login_token = data;
        });
    }
    NoticeListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NoticeListPage');
        this.getNoticeListFun();
    };
    NoticeListPage.prototype.getNoticeListFun = function () {
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
            _this.apiServices.noticeListApi(apiKey, _this.login_token)
                .subscribe(function (res) {
                console.log('notice List data==', res);
                if (res.success == 1) {
                    if (_this.noticeListData == undefined) {
                        _this.noticeListData = res.data;
                    }
                    else {
                        _this.noticeListData.concat(res.data);
                        _this.myinfinte.complete();
                        console.log('new data== ', _this.noticeListData);
                    }
                    setTimeout(function () {
                        loading.dismiss();
                    }, 1000);
                }
                else {
                    if (_this.value == 0) {
                        // this.msg=res.message;
                        _this.bgImageViewer = true;
                    }
                    if (_this.noticeListData == undefined || _this.noticeListData.length > 0) {
                        // this.apiMessage(res.message);
                        _this.hideinfinite = 1;
                    }
                    else {
                        var alert_1 = _this.alertCtrl.create({
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
                    setTimeout(function () {
                        loading.dismiss();
                    }, 1000);
                }
            });
        });
    };
    NoticeListPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    NoticeListPage.prototype.presentImage = function (myImage) {
        var imageViewer = this._imageViewerCtrl.create(myImage);
        imageViewer.present();
        setTimeout(function () { return imageViewer.dismiss(); }, 30000);
        imageViewer.onDidDismiss(function () { return console.log('Viewer dismissed'); });
    };
    NoticeListPage.prototype.seeDetails = function (data) {
        this.navCtrl.push('NoticeDetailsPage', { 'data': data });
    };
    NoticeListPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.myinfinte = infiniteScroll;
        console.log('Begin async operation');
        setTimeout(function () {
            _this.value = _this.noticeListData.length;
            _this.getNoticeListFun();
        }, 500);
    };
    NoticeListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notice-list',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/notice-list/notice-list.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Notice</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n\n  <ion-card *ngFor="let data of noticeListData">  \n    <ion-card-content >\n      <ion-row  (click)="seeDetails(data)">\n        <ion-col col-12>\n          <h4 class="data_title">{{data?.title}}</h4>\n        </ion-col>\n      </ion-row>\n      <!-- <ion-row (click)="seeDetails(data)">\n        <ion-col col-12>\n            <div class="data_constent" [innerHTML]="data?.content"></div>\n        </ion-col>\n      </ion-row> -->\n      <ion-row>\n          <ion-col col-5 class="centerDataInDiv" (click)="seeDetails(data)">\n             <p class="data_status"> {{data?.notice_date}} </p> \n          </ion-col>\n          <ion-col col-5 class="centerDataInDiv" (click)="seeDetails(data)">\n              <p class="data_name"> {{data?.name}} </p> \n              \n          </ion-col>\n          <ion-col col-2 class="centerDataInDiv">\n              <img *ngIf="data?.user_image!=\'\'" [src]="data?.user_image"  #myImage (click)="presentImage(myImage)" class="userImage"/> \n              <img *ngIf="data?.user_image==\'\'" [src]="\'assets/a2z/\'+data.name[0].toLowerCase()+\'.jpg\'"   #myImage (click)="presentImage(myImage)" class="userImage"/> \n          </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n<div *ngIf="hideinfinite!=1">\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)" >\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n</div>\n\n<div *ngIf="bgImageViewer">\n    <img src="assets/imgs/No NoticeImage.png"  style="width:100%">\n  </div>     \n\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/notice-list/notice-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4_ionic_img_viewer__["a" /* ImageViewerController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], NoticeListPage);
    return NoticeListPage;
}());

//# sourceMappingURL=notice-list.js.map

/***/ }),

/***/ 783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeListPageModule", function() { return NoticeListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notice_list__ = __webpack_require__(1086);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NoticeListPageModule = /** @class */ (function () {
    function NoticeListPageModule() {
    }
    NoticeListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notice_list__["a" /* NoticeListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notice_list__["a" /* NoticeListPage */]), __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__["b" /* IonicImageViewerModule */]
            ],
        })
    ], NoticeListPageModule);
    return NoticeListPageModule;
}());

//# sourceMappingURL=notice-list.module.js.map

/***/ })

});
//# sourceMappingURL=91.js.map
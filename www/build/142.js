webpackJsonp([142],{

/***/ 1018:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountstatmentPage; });
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





var AccountstatmentPage = /** @class */ (function () {
    function AccountstatmentPage(imageViewerCtrl, toastCtrl, storage, loadingCtrl, apiServices, navCtrl, navParams) {
        var _this = this;
        this.imageViewerCtrl = imageViewerCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.apiServices = apiServices;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
            console.log(' employeeId== ', _this.employeeId);
        });
        this.storage.get('discounting_token').then(function (data) {
            _this.discounting_token = data;
            console.log(' employeeId== ', _this.employeeId);
        });
        this.statement();
    }
    //Common Loader:
    AccountstatmentPage.prototype.commonLoader = function () {
        this.loading = this.loadingCtrl.create({
            enableBackdropDismiss: true,
            spinner: 'ios-small',
            content: 'Loading data...'
        });
        this.loading.present();
    };
    AccountstatmentPage.prototype.statement = function () {
        var _this = this;
        this.commonLoader();
        this.storage.get('login_token').then(function (data) {
            console.log('AlbumDetails value is111==', data);
            _this.login_token = data;
            var apiKey = {
                "clientId": _this.apiServices.clientId,
                "employeeId": _this.employeeId,
            };
            console.log('AlbumDetails api apiKey==', apiKey);
            _this.apiServices.statement(apiKey, _this.discounting_token).subscribe(function (result) {
                console.log('AlbumDetails api res==', result);
                _this.loading.dismiss();
                if (result.success == 1) {
                    // this.redeemdata=result;
                    _this.totalcredit = result.totalEarned;
                    _this.totaldebit = result.redeemed;
                    console.log('AlbumDetails api res==11111', result);
                    if (_this.numbers != undefined) {
                        _this.numbers = _this.numbers.concat(result.history);
                        // this.arrlength=this.numbers.length;
                    }
                    else {
                        _this.numbers = result.history;
                        //  this.arrlength=this.numbers.length;
                    }
                }
                else {
                    _this.loading.dismiss();
                    _this.msg = result.message;
                    console.log('Success0:', result);
                    _this.apiMessage(result.message);
                }
            });
        });
    };
    AccountstatmentPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    AccountstatmentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountstatmentPage');
        this.analyticApi();
    };
    AccountstatmentPage.prototype.analyticApi = function () {
        var _this = this;
        this.storage.get('employee_type').then(function (user) {
            console.log('thoughtOftheDayApi value is111==', user);
            var user_Type = user;
            _this.storage.get('deviceId').then(function (data) {
                _this.deviceId = data;
                var apiKey = {
                    "client_id": _this.apiServices.clientId,
                    "employee_id": _this.employeeId,
                    "device": _this.apiServices.device,
                    "device_id": _this.deviceId,
                    "app_version": _this.apiServices.appVersion,
                    "track_flag": "49",
                    "type": "detail",
                    "user_type": user_Type,
                };
                _this.apiServices.analyticApi(apiKey, _this.login_token).subscribe(function (res) {
                    console.log(res);
                });
            });
        });
    };
    AccountstatmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-accountstatment',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/accountstatment/accountstatment.html"*/'\n<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>Rewards Statement</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n\n</ion-content> -->\n<ion-header>\n  <ion-navbar hideBackButton="false" color="themecol" class="centerIt">\n    <ion-title>Points Statement</ion-title>\n  </ion-navbar>\n\n  <ion-row style="height: 117px;">\n        <ion-col col-6>\n                <ion-row >\n                        <ion-col  style="text-align:center;">\n                    \n                      \n                            <img style="height: 35px;width: 35px;" src="assets/imgs/credit-card.png" >\n                            <p style="text-align:center;margin-top:5px;">Total credited</p>\n                            <p style="text-align:center;margin-top: 17px;line-height: 0px;">{{totalcredit}}</p> \n                        </ion-col>\n                      \n                    </ion-row>\n        \n        </ion-col>\n        <ion-col col-6 >\n            <ion-row>\n                    <ion-col style="text-align:center;" >\n                        \n                            <img style="height: 35px;width: 35px;" src="assets/imgs/debitcard.png">\n                            <p style="text-align:center;margin-top:5px;">Total debited</p>\n                            <p style="text-align:center;margin-top: 17px;line-height: 0px;">{{totaldebit}}</p>\n                        </ion-col>\n            </ion-row>\n              \n        </ion-col>\n        \n        </ion-row>\n        <table *ngIf="msg==undefined"  class=" table accountSummaryTable" style="font-size: 15px;    border: 1px solid #294a70;">\n                <tbody>\n                    <tr class="pointRowBackgroundColor">\n                        <td class="tableTd" style="padding: 5px;width:21% !important">Date</td>\n                        <td class="tableTd" style="padding: 5px;width:61% !important">Description</td>\n                        <td class="tableTd" style="padding: 5px;width:9% !important">Credit</td>\n                        <td class="tableTd" style="padding: 5px;width:9% !important">Debit</td>\n                        \n                    </tr>\n                </tbody>\n                </table>\n\n\n</ion-header>\n\n\n<ion-content>\n\n \n\n    <table  class=" table accountSummaryTable" style="font-size: 15px;    border: 1px solid #294a70;">\n   \n        <tbody>\n\n            <tr *ngFor="let number of numbers">\n                <td style="padding: 5px;width:19% !important">{{number?.transaction_date}}</td>\n                <td style="text-align: left !important;padding: 5px;width:58% !important">{{number?.description}}</td>\n                <td style="padding: 5px;width:12% !important"><span *ngIf="number.flag==0">{{number?.amount}}</span></td>\n                <td style="padding: 5px;width:11% !important"><span *ngIf="number.flag==1">{{number?.amount}}</span>\n            </tr>\n\n          \n        </tbody>\n    </table>\n\n    <!-- <div *ngIf="arrlength>=20">\n\n    \n    <button ion-button  *ngIf="loadingval<numbers?.length" (click)="loadMoreData()" full block large style="background-color: transparent;\n    font-size: 15px;text-transform: capitalize;  color: gray;" >Show more items\n   <span style="    float: right;" *ngIf="showSpinner"  >  \n        <ion-spinner name="ios-small" style="      width: 29px;\n       height: 59px;"></ion-spinner></span></button>\n    </div> -->\n\n   \n<p style="text-align: center;" *ngIf="msg!=undefined" style="text-align:center">{{msg}}</p>'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/accountstatment/accountstatment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_img_viewer__["a" /* ImageViewerController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], AccountstatmentPage);
    return AccountstatmentPage;
}());

//# sourceMappingURL=accountstatment.js.map

/***/ }),

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountstatmentPageModule", function() { return AccountstatmentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accountstatment__ = __webpack_require__(1018);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AccountstatmentPageModule = /** @class */ (function () {
    function AccountstatmentPageModule() {
    }
    AccountstatmentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__accountstatment__["a" /* AccountstatmentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__accountstatment__["a" /* AccountstatmentPage */]),
            ],
        })
    ], AccountstatmentPageModule);
    return AccountstatmentPageModule;
}());

//# sourceMappingURL=accountstatment.module.js.map

/***/ })

});
//# sourceMappingURL=142.js.map
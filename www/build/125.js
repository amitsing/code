webpackJsonp([125],{

/***/ 1036:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BothauthortyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_action_sheet_action_sheet_controller__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { IonicPage, NavController, NavParams } from 'ionic-angular';




var BothauthortyPage = /** @class */ (function () {
    function BothauthortyPage(navCtrl, navParams, storage, apiServices, toastCtrl, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.apiServices = apiServices;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.authirity = 'nomination';
        // authority(){}
    }
    BothauthortyPage.prototype.segmentChanged = function (event) {
        if (event.value == 'failedVoucher') {
            // alert(event.value)
        }
        if (event.value == 'bookhistory') {
            // alert(event.value)
            // this.bookuser={
            //   "clientId":this.clientid,
            //   "employeeId":this.employeeId,
            //   "device":this.apiService.device,
            //   "deviceId":this.apiService.deviceId,
            //   "value":"0"
            // }
            //  this.ajiha(0)
        }
    };
    BothauthortyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BothauthortyPage');
    };
    BothauthortyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bothauthorty',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/bothauthorty/bothauthorty.html"*/'<!--\n  Generated template for the BothauthortyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>bothauthorty</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div ion-fixed style="width: 100%;">\n  \n    <ion-segment [(ngModel)]="authirity" (ionChange)="segmentChanged($event)">\n        <ion-segment-button value="nomination" (click)="mySucceVoucher()" style="white-space: normal !important;line-height: 35px !important ;display: flex;flex-direction: column;justify-content: center;" >\n         Nomination\n        </ion-segment-button>\n        <ion-segment-button value="Approval"  (click)="myfailedVoucher()"style="white-space: normal !important;line-height: 16px !important ;display: flex;flex-direction: column;justify-content: center;">\n          Approval\n        </ion-segment-button>\n        <!-- <ion-segment-button value="bookhistory"  (click)="mybookingHistory()" style="white-space: normal !important;line-height: 16px !important ;display: flex;flex-direction: column;justify-content: center;">\n          Booking History\n        </ion-segment-button> -->\n      </ion-segment>\n</div>\n<br><br><br>\n<div [ngSwitch]="authirity">\n  <div *ngSwitchCase="\'nomination\'">\n<p>ffff</p>\n  </div>\n  <div *ngSwitchCase="\'Approval\'">\n    <p>ssss</p>\n  </div>\n</div>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/bothauthorty/bothauthorty.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_action_sheet_action_sheet_controller__["a" /* ActionSheetController */]])
    ], BothauthortyPage);
    return BothauthortyPage;
}());

//# sourceMappingURL=bothauthorty.js.map

/***/ }),

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BothauthortyPageModule", function() { return BothauthortyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bothauthorty__ = __webpack_require__(1036);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BothauthortyPageModule = /** @class */ (function () {
    function BothauthortyPageModule() {
    }
    BothauthortyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__bothauthorty__["a" /* BothauthortyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bothauthorty__["a" /* BothauthortyPage */]),
            ],
        })
    ], BothauthortyPageModule);
    return BothauthortyPageModule;
}());

//# sourceMappingURL=bothauthorty.module.js.map

/***/ })

});
//# sourceMappingURL=125.js.map
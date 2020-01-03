webpackJsonp([144],{

/***/ 1016:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_img_viewer__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { PhotoViewer } from '@ionic-native/photo-viewer';




/**
 * Generated class for the AboutDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutDetailsPage = /** @class */ (function () {
    function AboutDetailsPage(navCtrl, navParams, toastCtrl, storage, apiServices, imageViewerCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.apiServices = apiServices;
        this.show = 0;
        this._imageViewerCtrl = imageViewerCtrl;
        this.previousePageData = this.navParams.get('data');
        console.log('*****==', this.previousePageData);
        this.storage.get('login_token').then(function (data) { _this.login_token = data; });
        this.storage.get('employeeId').then(function (data) { _this.employeeId = data; });
        this.storage.get('employee_type').then(function (data) { _this.employee_type = data; });
        if (this.previousePageData.url == 'leadership') {
            this.show = 1;
            this.leaderlist();
        }
    }
    AboutDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutDetailsPage');
    };
    AboutDetailsPage.prototype.leaderlist = function () {
        var _this = this;
        this.storage.get('employeeId').then(function (data) { _this.employeeId = data; });
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            console.log(' deviceId== ', _this.deviceId);
            var apiKey = {
                "client_id": _this.apiServices.clientId,
                "employee_id": _this.employeeId,
                "device": _this.apiServices.device,
                "device_id": _this.deviceId,
                "app_version": _this.apiServices.appVersion,
                'user_type': _this.employee_type
            };
            console.log('login api key==', apiKey);
            _this.apiServices.aboutLeaders_list(apiKey, _this.login_token).subscribe(function (result) {
                console.log(' leader data response== ', result);
                _this.allData = result;
                if (_this.allData.success == 1) {
                    _this.leaderdata = _this.allData.data;
                }
                else {
                    // this.btnText='Submit';
                    _this.apiMessage(_this.allData.message);
                    if (_this.leaderdata == undefined) {
                        _this.leaderdata = [];
                    }
                }
            }, function (err) {
                console.log('optionalUpdate err== ', err);
                _this.apiMessage(err);
            });
        });
    };
    AboutDetailsPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    AboutDetailsPage.prototype.gotodetail = function (data) {
        this.navCtrl.push('LeaderdetailPage', { 'data': data });
        //       this.autoid=this.leaderdata[id].auto_id;
        //       console.log("id",this.autoid);
        // this.navCtrl.push('LeaderdetailPage',{'autoid':this.autoid,'name':this.leaderdata[id].name,
        // 'designation':this.leaderdata[id].designation,'userimg':this.leaderdata[id].image});
    };
    AboutDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about-details',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/about-details/about-details.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{previousePageData?.category_name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n  <div *ngIf="show==0">\n      <img [src]="previousePageData?.image" class="aboutImage" imageViewer onerror=\'this.src="../../assets/watermark/watermark.png"\'/>\n  </div>\n\n<div *ngIf="show==1"> \n  <div *ngIf="leaderdata">\n      <ion-row > \n          <ion-col col-6 style="text-align: center;"  *ngFor="let Data of leaderdata; let i=index"  (click)="gotodetail(Data)">\n              <img  class="img"  margin-top margin-bottom src="{{Data?.image}}">\n              <p class="fweight"> {{Data.name}}</p>\n              <p class="fsize">{{Data.designation}}</p>\n          </ion-col>\n        </ion-row>\n  </div>\n   \n  <div *ngIf="!leaderdata">\n\n      <ion-row > \n          <ion-col col-6 style="text-align: center;"  *ngFor="let Data of [0,1,2,3,4,5,6]"  >\n              <img  class="img textSkelton"  margin-top margin-bottom src="../../assets/watermark/watermark.png">\n              <p class="fweight textSkelton"> Test user </p>\n              <p class="fsize textSkelton">Test designation</p>\n          </ion-col>\n        </ion-row>\n\n    </div>\n\n</div>\n<!-- <ion-row *ngIf="!leaderdata"> \n  <ion-col col-6 style="text-align: center;">\n      <img  class="circleSkelton"  margin-top margin-bottom src="../../assets/imgs/usericon.png">\n      <p class="Skeltonname"> name</p>\n      <p class="Skeltondesignation">designation</p>\n  </ion-col>\n  <ion-col col-6 style="text-align: center;">\n    <img  class="circleSkelton"  margin-top margin-bottom src="../../assets/imgs/usericon.png">\n    <p class="Skeltonname"> name</p>\n      <p class="Skeltondesignation">designation</p>\n</ion-col>\n\n</ion-row>\n\n<ion-row *ngIf="!leaderdata"> \n  <ion-col col-6 style="text-align: center;">\n      <img  class="circleSkelton"  margin-top margin-bottom src="../../assets/imgs/usericon.png">\n      <p class="Skeltonname"> name</p>\n      <p class="Skeltondesignation">designation</p>\n  </ion-col>\n  <ion-col col-6 style="text-align: center;">\n    <img  class="circleSkelton"  margin-top margin-bottom src="../../assets/imgs/usericon.png">\n    <p class="Skeltonname"> name</p>\n      <p class="Skeltondesignation">designation</p>\n</ion-col>\n\n</ion-row>\n<ion-row *ngIf="!leaderdata"> \n  <ion-col col-6 style="text-align: center;">\n      <img  class="circleSkelton"  margin-top margin-bottom src="../../assets/imgs/usericon.png">\n      <p class="Skeltonname"> name</p>\n      <p class="Skeltondesignation">designation</p>\n  </ion-col>\n  <ion-col col-6 style="text-align: center;">\n    <img  class="circleSkelton"  margin-top margin-bottom src="../../assets/imgs/usericon.png">\n    <p class="Skeltonname"> name</p>\n      <p class="Skeltondesignation">designation</p>\n</ion-col>\n\n</ion-row>\n\n<ion-row *ngIf="!leaderdata"> \n  <ion-col col-6 style="text-align: center;">\n      <img  class="circleSkelton"  margin-top margin-bottom src="../../assets/imgs/usericon.png">\n      <p class="Skeltonname"> name</p>\n      <p class="Skeltondesignation">designation</p>\n  </ion-col>\n  <ion-col col-6 style="text-align: center;">\n    <img  class="circleSkelton"  margin-top margin-bottom src="../../assets/imgs/usericon.png">\n\n    <p class="Skeltonname"> name</p>\n      <p class="Skeltondesignation">designation</p>\n</ion-col>\n\n</ion-row> -->\n\n\n\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/about-details/about-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["B" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_service__["a" /* ApiServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_img_viewer__["a" /* ImageViewerController */]])
    ], AboutDetailsPage);
    return AboutDetailsPage;
}());

//# sourceMappingURL=about-details.js.map

/***/ }),

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutDetailsPageModule", function() { return AboutDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_details__ = __webpack_require__(1016);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AboutDetailsPageModule = /** @class */ (function () {
    function AboutDetailsPageModule() {
    }
    AboutDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__about_details__["a" /* AboutDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about_details__["a" /* AboutDetailsPage */]), __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__["b" /* IonicImageViewerModule */]
            ],
        })
    ], AboutDetailsPageModule);
    return AboutDetailsPageModule;
}());

//# sourceMappingURL=about-details.module.js.map

/***/ })

});
//# sourceMappingURL=144.js.map
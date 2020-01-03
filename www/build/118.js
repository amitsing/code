webpackJsonp([118],{

/***/ 1048:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicModuleListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_toast_toast_controller__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_img_viewer_dist_es2015_src_image_viewer_controller__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_loading_loading_controller__ = __webpack_require__(171);
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
 * Generated class for the DynamicModuleListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DynamicModuleListPage = /** @class */ (function () {
    function DynamicModuleListPage(navCtrl, navParams, apiService, storage, toastCtrl, _imageViewerCtrl, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiService = apiService;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this._imageViewerCtrl = _imageViewerCtrl;
        this.loadingCtrl = loadingCtrl;
        this.moduleFlag = this.navParams.get('data');
        this.title = this.navParams.get('title');
        console.log(this.moduleFlag);
        this.storage.get('employeeId').then(function (eID) {
            _this.employeeId = eID;
            console.log(' employeeId== ', _this.employeeId);
            _this.storage.get('login_token').then(function (token) {
                console.log('showOnBoard value is111==', token);
                _this.login_token = token;
                _this.storage.get('deviceId').then(function (deviceID) {
                    _this.deviceId = deviceID;
                    _this.getList();
                });
            });
        });
    }
    DynamicModuleListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DynamicModuleListPage');
    };
    DynamicModuleListPage.prototype.getList = function () {
        var _this = this;
        this.commonLoader();
        var apiKey = {
            "client_id": this.apiService.clientId,
            "employee_id": this.employeeId,
            "device": this.apiService.device,
            "device_id": this.deviceId,
            "app_version": this.apiService.appVersion,
            "flag": this.moduleFlag,
        };
        this.apiService.dynamicModuleList(apiKey, this.login_token).subscribe(function (res) {
            console.log(res);
            _this.loading.dismiss();
            if (res.success == '1') {
                _this.top_image = res.background_image;
                _this.list = res.data;
            }
            else {
            }
        });
    };
    DynamicModuleListPage.prototype.commonLoader = function () {
        this.loading = this.loadingCtrl.create({
            enableBackdropDismiss: true,
            spinner: 'ios-small',
            content: 'Loading data...'
        });
        this.loading.present();
    };
    DynamicModuleListPage.prototype.gotodetail = function (data) {
        this.navCtrl.push('DynamicmodulePage', { 'data': data });
    };
    DynamicModuleListPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    DynamicModuleListPage.prototype.presentImage = function (myImage) {
        var imageViewer = this._imageViewerCtrl.create(myImage);
        imageViewer.present();
        setTimeout(function () { return imageViewer.dismiss(); }, 30000);
        imageViewer.onDidDismiss(function () { return console.log('Viewer dismissed'); });
    };
    DynamicModuleListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dynamic-module-list',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/dynamic-module-list/dynamic-module-list.html"*/'<!--\n  Generated template for the DynamicModuleListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title [innerHTML]="title"></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content   >\n  <div *ngIf="list && list.length > 0">\n    <!-- <ion-row>\n      <ion-col col-12>\n        <img [src]="top_image" onError="this.src=\'../../assets/watermark/watermark.png\';" alt="">\n      </ion-col>\n    </ion-row> -->\n      <ion-card *ngFor="let data of list" (click)="gotodetail(data)">\n          <ion-row>\n            <ion-col col-4>\n              <!-- <div *ngIf="data.media[0]?.media_type==\'3\'">\n                  <div class="relativeDiv">\n                  <iframe width="100%" height="80px"  [src]="data.media[0]?.media|safe" autostart="0" allowfullscreen frameborder="0"></iframe>\n                  <div class="temptransparentVideo"></div>\n                </div>\n                </div>\n              <div *ngIf="data.media[0]?.media_type==\'2\'">\n                  <div class="relativeDiv">\n                  <video [src]="data.media[0]?.media|safe" height="80px"  width="100%"  poster="{{data.media[0]?.thumb}}" controls controlsList="nodownload" type="video/*">\n                  </video>\n                  <div class="temptransparentVideo"></div>\n                </div>\n              </div> -->\n              <!-- <div *ngIf="data.media[0]?.media_type==\'1\'"> -->\n                  <img class="imgcss" onerror="this.src=\'../../assets/watermark/watermark.png\'" \n                  [src]="data.image">\n              <!-- </div> -->\n          \n            </ion-col>\n            <ion-col col-8>\n              <ion-row>\n                <ion-col col-12>\n                  <!-- <p>{{data.title}}</p> -->\n                  <P class="para" *ngIf="data.name.length < 50" [innerHTML]="data?.name"></P>\n                  <P class="para" *ngIf="data.name.length >= 50" [innerHTML]="data?.name.substring(0, 50)+\'...\'"></P>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col col-6>\n                    <!-- <img class="imgcss1" src="assets/imgs/news_flag.png"> -->\n                </ion-col>\n                <ion-col col-6 text-right>\n                    <p  class="datepara" [innerHTML]="data.publish_date"></p>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n      </ion-card>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/dynamic-module-list/dynamic-module-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_toast_toast_controller__["a" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5_ionic_img_viewer_dist_es2015_src_image_viewer_controller__["a" /* ImageViewerController */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */]])
    ], DynamicModuleListPage);
    return DynamicModuleListPage;
}());

//# sourceMappingURL=dynamic-module-list.js.map

/***/ }),

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicModuleListPageModule", function() { return DynamicModuleListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dynamic_module_list__ = __webpack_require__(1048);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DynamicModuleListPageModule = /** @class */ (function () {
    function DynamicModuleListPageModule() {
    }
    DynamicModuleListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dynamic_module_list__["a" /* DynamicModuleListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dynamic_module_list__["a" /* DynamicModuleListPage */]),
            ],
        })
    ], DynamicModuleListPageModule);
    return DynamicModuleListPageModule;
}());

//# sourceMappingURL=dynamic-module-list.module.js.map

/***/ })

});
//# sourceMappingURL=118.js.map
webpackJsonp([140],{

/***/ 1020:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumDetailsPage; });
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
 * Generated class for the AlbumDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AlbumDetailsPage = /** @class */ (function () {
    function AlbumDetailsPage(storage, imageViewerCtrl, apiServices, navCtrl, navParams) {
        var _this = this;
        this.storage = storage;
        this.apiServices = apiServices;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.album = [];
        this.value = '0';
        this.infiniteScrollCalled = false;
        this.hideInfiniteScroll = false;
        this.previousePagedata = this.navParams.get('data');
        console.log('previouse page data== ', this.previousePagedata);
        this._imageViewerCtrl = imageViewerCtrl;
        this.storage.get('login_token').then(function (data) { _this.login_token = data; });
        this.storage.get('employeeId').then(function (data) { _this.employeeId = data; });
        this.loginemp = this.navParams.get('loginemp');
    }
    AlbumDetailsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad AlbumCategoryPage');
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            console.log('login deviceId== ', _this.deviceId);
            // this.seeAlbumDetails();
        });
        if (this.loginemp == 'Employee') {
            this.EmployeeAlbumDetails();
        }
        else {
            this.seeAlbumDetails();
        }
    };
    AlbumDetailsPage.prototype.seeAlbumDetails = function () {
        var _this = this;
        this.storage.get('login_token').then(function (data) {
            console.log('AlbumDetails value is111==', data);
            _this.login_token = data;
            var apiKey = {
                "client_id": _this.apiServices.clientId,
                "employee_id": _this.employeeId,
                "device": _this.apiServices.device,
                "device_id": _this.deviceId,
                "app_version": _this.apiServices.appVersion,
                "albumId": _this.previousePagedata.album_id,
                "value": _this.value
            };
            _this.apiServices.onboardUserAlbumDetails(apiKey, _this.login_token).subscribe(function (result) {
                console.log('AlbumDetails api res==', result);
                if (result.success == 1) {
                    console.log('album list==applicant', result.data);
                    if (_this.albumData == undefined) {
                        _this.albumData = result.data.images;
                    }
                    else {
                        _this.albumData = _this.albumData.concat(result.data.images);
                        console.log('new album list==', result.data);
                    }
                    if (_this.infiniteScrollCalled == true) {
                        _this.myInfiniteScroll.complete();
                        _this.infiniteScrollCalled = false;
                    }
                    console.log('this.formdata==', _this.albumData);
                    _this.hideInfiniteScroll = false;
                }
                else {
                    _this.hideInfiniteScroll = true;
                }
            });
        });
    };
    AlbumDetailsPage.prototype.EmployeeAlbumDetails = function () {
        var _this = this;
        console.log('this.previousePagedata.auto_id==', this.previousePagedata.auto_id);
        this.storage.get('login_token').then(function (data) {
            console.log('AlbumDetails value is111==', data);
            _this.login_token = data;
            var apiKey = {
                "client_id": _this.apiServices.clientId,
                "employee_id": _this.employeeId,
                "device": _this.apiServices.device,
                "device_id": _this.deviceId,
                "app_version": _this.apiServices.appVersion,
                "val": _this.value,
                "album_id": _this.previousePagedata.auto_id,
                "flag": "11",
                "post_id": ""
            };
            console.log('AlbumDetails api apiKey==', apiKey);
            _this.apiServices.empAlbumdetail(apiKey, _this.login_token).subscribe(function (result) {
                console.log('AlbumDetails api res==', result);
                if (result.success == 1) {
                    console.log('album emp list==', result.data);
                    if (_this.albumData == undefined) {
                        _this.albumData = result.data;
                    }
                    else {
                        _this.albumData = _this.albumData.concat(result.data);
                        console.log('new emp album list==', result.data);
                    }
                    if (_this.infiniteScrollCalled == true) {
                        _this.myInfiniteScroll.complete();
                        _this.infiniteScrollCalled = false;
                    }
                    console.log('this.formdata==', _this.albumData);
                    _this.hideInfiniteScroll = false;
                }
                else {
                    _this.hideInfiniteScroll = true;
                }
            });
        });
    };
    AlbumDetailsPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        this.myInfiniteScroll = infiniteScroll;
        setTimeout(function () {
            _this.infiniteScrollCalled = true;
            _this.value = _this.albumData.length;
            // this.seeAlbumDetails();
            if (_this.loginemp == 'Employee') {
                _this.EmployeeAlbumDetails();
            }
            else {
                _this.seeAlbumDetails();
            }
            console.log('Async operation has ended');
            // this.myInfiniteScroll.complete();
        }, 500);
    };
    AlbumDetailsPage.prototype.seeDetails = function (allData, index, myImage) {
        // let data={
        //   "data":this.albumData,
        //   "index":index
        // }
        console.log("in", index);
        if (this.loginemp == 'Employee') {
            this.navCtrl.push('AlbumImageSliderPage', { 'data': this.albumData, 'albumid': this.previousePagedata.auto_id, 'index': index });
        }
        else {
            // this.presentImage(myImage)
            this.navCtrl.push('AlbumslidezoomPage', { 'data': this.albumData, 'index': index, 'previousePagedata': this.previousePagedata });
        }
    };
    AlbumDetailsPage.prototype.seeDetails1 = function (myImage) {
        this.presentImage(myImage);
    };
    AlbumDetailsPage.prototype.presentImage = function (myImage) {
        var imageViewer = this._imageViewerCtrl.create(myImage);
        imageViewer.present();
        // setTimeout(() => imageViewer.dismiss(), 30000);
        imageViewer.onDidDismiss(function () { return console.log('Viewer dismissed'); });
    };
    AlbumDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-album-details',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/album-details/album-details.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{previousePagedata?.album_name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n\n  <div *ngIf="albumData" class="div2" >\n      <!-- *ngIf="loginemp==\'employee\'" -->\n    <ion-row >\n      <ion-col col-12 *ngFor="let data of albumData; let alb=index" >\n        <div class="relativDIV albumDiv" (click)="seeDetails(data,alb,myImage)">\n         <div class="postTitleDiv"> <p *ngIf="alb==0" class="postTitle">\n              {{previousePagedata?.album_name}}\n          </p>\n        </div>\n\n          <img src="{{data?.image}}" class="set1"  #myImage    onerror=\'this.src="../../assets/watermark/watermark.png"\' >\n          <div class="transparentLayer_black" ></div>\n          <div class="userName">\n            <ion-row>\n                <ion-col col-12> <b class="text">{{data?.created_date}} </b></ion-col>\n            </ion-row>\n            \n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n\n  \n</div>\n\n\n<!-- this is skelton -->\n<div *ngIf="!albumData"class="div2" >\n    <ion-row>\n      <ion-col col-12 *ngFor="let data of [0,2,3,4]; let alb=index" >\n        <div class="relativDIV albumDiv ">\n          <img src="../../assets/watermark/watermark.png" class="set1 textSkelton"  #myImage style="object-fit: contain;" >\n          <div class="transparentLayer_black textSkelton"></div>\n          <div class="userName">\n            <ion-row>\n                <ion-col col-12> <b class="text textSkelton">Test user </b></ion-col>\n            </ion-row>\n            \n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n</div>\n\n<ion-infinite-scroll *ngIf="hideInfiniteScroll==false && albumData" (ionInfinite)="doInfinite($event)">\n<ion-infinite-scroll-content></ion-infinite-scroll-content>\n</ion-infinite-scroll>\n\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/album-details/album-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4_ionic_img_viewer__["a" /* ImageViewerController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], AlbumDetailsPage);
    return AlbumDetailsPage;
}());

//# sourceMappingURL=album-details.js.map

/***/ }),

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumDetailsPageModule", function() { return AlbumDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__album_details__ = __webpack_require__(1020);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AlbumDetailsPageModule = /** @class */ (function () {
    function AlbumDetailsPageModule() {
    }
    AlbumDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__album_details__["a" /* AlbumDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__album_details__["a" /* AlbumDetailsPage */]), __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__["b" /* IonicImageViewerModule */]
            ],
        })
    ], AlbumDetailsPageModule);
    return AlbumDetailsPageModule;
}());

//# sourceMappingURL=album-details.module.js.map

/***/ })

});
//# sourceMappingURL=140.js.map
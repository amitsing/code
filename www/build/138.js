webpackJsonp([138],{

/***/ 1022:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumListPage; });
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




/**
 * Generated class for the AlbumListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AlbumListPage = /** @class */ (function () {
    function AlbumListPage(alertCtrl, storage, apiServices, ngZone, navCtrl, navParams) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.apiServices = apiServices;
        this.ngZone = ngZone;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.value = '0';
        this.infiniteScrollCalled = false;
        this.hideInfiniteScroll = false;
        this.previousePagedata = this.navParams.get('data');
        this.loginemp = this.navParams.get('loginemp');
        this.storage.get('showOnBoard').then(function (data) {
            _this.loginemp = data;
            console.log('showOnBoard value is111==', data);
        });
        this.storage.get('login_token').then(function (data) { _this.login_token = data; });
        this.storage.get('employeeId').then(function (data) { _this.employeeId = data; });
    }
    AlbumListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad AlbumCategoryPage');
        // this.storage.get('deviceId').then(data=>{
        //   this.deviceId=data;
        //   console.log('login deviceId== ',this.deviceId);
        //   this.seeAlbumList();
        //  });
        this.storage.get('showOnBoard').then(function (data) {
            _this.loginemp = data;
            if (_this.loginemp == 'Employee') {
                // this.storage.get('deviceId').then(data=>{
                //   this.deviceId=data;
                //   console.log('login deviceId== ',this.deviceId);
                _this.EmployeeAlbumList();
                //  });
            }
            else {
                // this.storage.get('deviceId').then(data=>{
                //   this.deviceId=data;
                //   console.log('login deviceId== ',this.deviceId);
                _this.seeAlbumList();
                //  });
            }
            console.log('showOnBoard value is111==', data);
        });
    };
    AlbumListPage.prototype.showAlert = function (message) {
        var _this = this;
        var alert = this.alertCtrl.create({
            // title: 'New Friend!',
            subTitle: message,
            buttons: [{
                    text: 'Ok',
                    handler: function (data) {
                        console.log('Saved clicked');
                        _this.navCtrl.pop();
                    }
                }]
        });
        alert.present();
    };
    AlbumListPage.prototype.seeAlbumList = function () {
        var _this = this;
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            console.log('login deviceId== ', _this.deviceId);
        });
        this.storage.get('login_token').then(function (data) {
            console.log('showOnBoard value is111==', data);
            _this.login_token = data;
            var apiKey = {
                "client_id": _this.apiServices.clientId,
                "employee_id": _this.employeeId,
                "device": _this.apiServices.device,
                "device_id": _this.deviceId,
                "app_version": _this.apiServices.appVersion,
                "val": _this.value
            };
            _this.apiServices.onboardUserAlbum(apiKey, _this.login_token).subscribe(function (result) {
                console.log('album api res==', result);
                if (result.success == 1) {
                    console.log('album list==', result.data);
                    if (_this.albumData == undefined) {
                        _this.albumData = result.data;
                    }
                    else {
                        _this.albumData = _this.albumData.concat(result.data);
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
    AlbumListPage.prototype.EmployeeAlbumList = function () {
        var _this = this;
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            console.log('login deviceId== ', _this.deviceId);
        });
        this.storage.get('login_token').then(function (data) {
            console.log('showOnBoard value is111==', data);
            _this.login_token = data;
            var apiKey = {
                "client_id": _this.apiServices.clientId,
                "employee_id": _this.employeeId,
                "device": _this.apiServices.device,
                "device_id": _this.deviceId,
                "app_version": _this.apiServices.appVersion,
                "val": _this.value
            };
            _this.apiServices.empAlbumList(apiKey, _this.login_token).subscribe(function (result) {
                console.log('album api res==', result);
                if (result.success == 1) {
                    console.log('empalbum list==', result.data);
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
    AlbumListPage.prototype.seeDetails = function (data) {
        this.navCtrl.push('AlbumDetailsPage', { 'data': data, 'loginemp': this.loginemp });
    };
    AlbumListPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        this.myInfiniteScroll = infiniteScroll;
        setTimeout(function () {
            _this.infiniteScrollCalled = true;
            _this.value = _this.albumData.length;
            if (_this.loginemp == 'Employee') {
                _this.EmployeeAlbumList();
            }
            else {
                _this.seeAlbumList();
            }
            // this.seeAlbumList();
            console.log('Async operation has ended');
            // this.myInfiniteScroll.complete();
        }, 500);
    };
    AlbumListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-album-list',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/album-list/album-list.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Album</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n\n    <div *ngIf="albumData" class="div2" >\n        <ion-row>\n          <ion-col col-6 *ngFor="let data of albumData; let alb=index" (click)="seeDetails(data)">\n            <div class="relativDIV albumDiv">\n              <img src="{{data?.album_image}}" height="128" class="set1">\n              <div class="transparentLayer_black"></div>\n              <div class="userName">\n                <ion-row>\n                    <ion-col col-12> <b class="text">{{data?.album_name}} </b>\n                      <b class="text">{{data?.img_count}} </b>\n                    </ion-col>\n                    <!-- <ion-col col-6> <b class="text" float-right>{{data?.img_count}} </b></ion-col> -->\n                </ion-row>\n                \n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n  </div>\n\n  <!-- following is skelton code of album  Ui -->\n\n  <div *ngIf="!albumData" class="div2" >\n      <ion-row>\n        <ion-col col-6 *ngFor="let data of [0,1,2,3,4]; let alb=index" >\n          <div class="relativDIV albumDiv">\n            <img src="../../assets/watermark/watermark.png" height="128" class="set1 textSkelton">\n            <div class="transparentLayer_black textSkelton"></div>\n            <div class="userName">\n              <ion-row>\n                  <ion-col col-6> <b class="text textSkelton">test user </b></ion-col>\n                  <ion-col col-6> <b class="text textSkelton" float-right>5 image </b></ion-col>\n              </ion-row>\n              \n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n</div>\n  <!-- above is skelton code of album  Ui end -->\n  \n  <ion-infinite-scroll *ngIf="hideInfiniteScroll==false && albumData" (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/album-list/album-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], AlbumListPage);
    return AlbumListPage;
}());

//# sourceMappingURL=album-list.js.map

/***/ }),

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumListPageModule", function() { return AlbumListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__album_list__ = __webpack_require__(1022);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AlbumListPageModule = /** @class */ (function () {
    function AlbumListPageModule() {
    }
    AlbumListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__album_list__["a" /* AlbumListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__album_list__["a" /* AlbumListPage */]),
            ],
        })
    ], AlbumListPageModule);
    return AlbumListPageModule;
}());

//# sourceMappingURL=album-list.module.js.map

/***/ })

});
//# sourceMappingURL=138.js.map
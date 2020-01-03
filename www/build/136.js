webpackJsonp([136],{

/***/ 1024:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertPage; });
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





var AlertPage = /** @class */ (function () {
    function AlertPage(navCtrl, navParams, events, loadingCtrl, alertCtrl, platform, toastCtrl, storage, apiServices) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.apiServices = apiServices;
        this.value = '0';
        this.infiniteScrollCalled = false;
        this.hideInfiniteScroll = false;
        this.bgImageViewer = false;
        this.closeAppPopupShow = 0;
        this.storage.get('SessionId').then(function (data) {
            console.log('SessionId==123', data);
            _this.SessionId = data;
        });
        this.arr = [{ "day": 'today', "data": [{ 'img': 'imgdata', 'text': 'this.is text', 'date': '2/2/2020' }] },
            { "day": 'today', "data": [{ 'img': 'imgdata1', 'text': 'this.is text', 'date': '2/3/2020' }] },
            { "day": 'yesterday', "data": [{ 'img': 'imgdata2', 'text': 'this.is text', 'date': '2/4/2020' }] }];
        console.log('this.arr', this.arr);
    }
    //Common Loader:
    AlertPage.prototype.commonLoader = function () {
        this.loading = this.loadingCtrl.create({
            enableBackdropDismiss: true,
            spinner: 'ios-small',
            content: 'Loading data...'
        });
        this.loading.present();
    };
    AlertPage.prototype.alertlist = function () {
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
                "value": _this.value
            };
            _this.apiServices.joineealert(apiKey, _this.login_token)
                .subscribe(function (res) {
                _this.loading.dismiss();
                // this.apiServices.urllist(apiKey,this.token).then((result) => { 
                console.log('', res);
                _this.apiData = res;
                // this.over_all_progress=this.apiData.this.apiData;
                if (res.success == 1) {
                    // this.allData = res.data;
                    // console.log('succ', this.allData);
                    if (_this.allData == undefined) {
                        _this.allData = res.data;
                    }
                    else {
                        _this.allData = _this.allData.concat(res.data);
                        console.log('new album list==', res.data);
                    }
                    if (_this.infiniteScrollCalled == true) {
                        _this.myInfiniteScroll.complete();
                        _this.infiniteScrollCalled = false;
                    }
                    console.log('this.formdata==', _this.allData);
                    _this.hideInfiniteScroll = false;
                }
                else {
                    if (_this.value == '0') {
                        // this.msg=res.message;
                        _this.bgImageViewer = true;
                    }
                    _this.hideInfiniteScroll = true;
                    // this.apiMessage(res.message);
                    if (_this.allData.length != 0) {
                        _this.apiMessage(res.message);
                    }
                }
            }, function (err) {
                console.log('err== ', err);
                _this.apiMessage(err);
            });
        });
    };
    AlertPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    AlertPage.prototype.gotonext = function (axdata, data) {
        this.alertstatus();
        this.notification_id = data.auto_id;
        if (axdata == 'ax') {
            // this.storage.get('SessionId').then((data)=>{
            //   console.log('SessionId==123',data );
            //   this.SessionId=data;
            //   this.events.publish('urldata', this.SessionId);
            // }); 
            // this.navCtrl.push('GotonewPage',{'data':data.url,'title':data.title});
            this.navCtrl.push('TesturlPage', { 'data': data.url, 'title': data.title });
        }
        if (axdata == 'Policy') {
            this.navCtrl.push('UrllistPage', { 'grpid': data.refrence_id, 'title': data.title });
        }
        if (axdata == 'OfferLetter' || axdata == 'formGroup') {
            this.title = { "title": data.title };
            this.navCtrl.push('OnboardingFormsPage', { 'data': this.title });
        }
        if (axdata == 'JoiningDetails') {
            this.navCtrl.push('JoiningDetailsPage');
        }
    };
    AlertPage.prototype.alertstatus = function () {
        var _this = this;
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
                "notification_id": _this.notification_id
            };
            _this.apiServices.alertStatus(apiKey, _this.login_token)
                .subscribe(function (res) {
                // this.apiServices.urllist(apiKey,this.token).then((result) => { 
                console.log('', res);
                // this.apiData=res;
                // this.over_all_progress=this.apiData.this.apiData;
                if (res.success == 1) {
                    // this.allData = res.data;
                    console.log('succ11111111', res);
                }
                else {
                    // this.apiMessage(res.message);
                }
            }, function (err) {
                console.log('err== ', err);
                _this.apiMessage(err);
            });
        });
    };
    AlertPage.prototype.ionViewWillEnter = function () {
        this.value = 0;
        this.allData = [];
        this.alertlist();
        this.initializeBackButtonCustomHandler();
    };
    AlertPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AlertPage');
    };
    AlertPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        this.myInfiniteScroll = infiniteScroll;
        setTimeout(function () {
            _this.infiniteScrollCalled = true;
            _this.value = _this.apiData.lastId;
            _this.alertlist();
            console.log('Async operation has ended');
            // this.myInfiniteScroll.complete();
        }, 500);
    };
    // ionViewWillEnter(){
    //   this.initializeBackButtonCustomHandler();
    // }
    AlertPage.prototype.showeAlert = function () {
        var _this = this;
        this.alert121 = this.alertCtrl.create({
            title: 'App termination',
            message: 'Do you want to close the app?',
            buttons: [{
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Application exit prevented!');
                    }
                }, {
                    text: 'Close App',
                    handler: function () {
                        _this.platform.exitApp(); // Close this application
                    }
                }]
        });
        this.alert121.present();
    };
    AlertPage.prototype.ionViewWillLeave = function () {
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    //Hardware Back Button
    AlertPage.prototype.initializeBackButtonCustomHandler = function () {
        var that = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function (event) {
            that.closeAppPopupShow++;
            if (that.closeAppPopupShow % 2 != 0) {
                that.showeAlert();
            }
            else {
                that.alert121.dismiss();
            }
        }, 101); // Priority 101 will override back button handling (we set in app.component.ts) as it is bigger then priority 100 configured in app.component.ts file */
    };
    AlertPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-alert',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/alert/alert.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Alerts</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n<!-- <div *ngIf="allData?.length==0 || !allData">\n    <img  src="assets/imgs/noNoti.png" srcset="{{onedaydata?.icon}}" />\n</div> -->\n\n<div *ngIf="allData?.length==0 && bgImageViewer">\n    <img  src="assets/imgs/No NotificationImage.png" srcset="{{onedaydata?.icon}}" />\n</div>\n  <!-- <div *ngIf="allData">\n  <ion-card *ngFor="let data of allData; let j=index" (click)="gotonext(data.href,data)">\n    <ion-row [ngClass]="{\'stylecolorgrey\':(data.read_status==\'1\'),\n  \'appstylecolor\':( data.read_status==\'0\')}">\n      <ion-col col-12>\n        <p [ngClass]="{\'font\':(data.read_status==\'1\')}">{{data.description}}</p>\n        <p class="para">Date:{{data.created_date}}</p>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</div> -->\n  <!-- <div *ngIf="!allData">\n    <img  src="../../assets/imgs/skelton/alert.png" class="textSkelton" />\n  </div> -->\n\n\n  <div *ngFor="let alertdata of allData; let j=index">\n\n      <ion-row>\n        <ion-col col-12 class="colclass">\n          <div><p class="paddingcss">{{alertdata.date}}</p></div>\n        </ion-col>\n      </ion-row>\n      <ion-row style="border-bottom: 1px solid lightgray;" *ngFor="let onedaydata of alertdata.data;" \n      (click)="gotonext(onedaydata.href,onedaydata)">\n        <!-- <ion-col col-2>\n          <img  src="../../assets/imgs/skelton/alert.png" class="textSkelton" />\n        </ion-col> -->\n        <ion-col col-9>\n          <div class="divcss">\n            <p class="margintopbtm">{{onedaydata.description}}</p>\n            <p class="margintopbtm2">{{onedaydata.actual_date}}</p>\n            <!-- <p class="margintopbtm1">{{onedaydata.created_date}}</p> -->\n          </div>\n        </ion-col>\n        <ion-col col-3>\n          <div *ngIf="onedaydata.button_applicable==\'1\'" class="btncss">\n              <div class="buttonclass">\n                  {{onedaydata.button_text}}\n              </div>\n          </div>\n        </ion-col>\n      </ion-row>\n      </div>\n\n\n\n\n\n  <ion-infinite-scroll *ngIf="hideInfiniteScroll==false && allData" (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/alert/alert.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */]])
    ], AlertPage);
    return AlertPage;
}());

//# sourceMappingURL=alert.js.map

/***/ }),

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertPageModule", function() { return AlertPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert__ = __webpack_require__(1024);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AlertPageModule = /** @class */ (function () {
    function AlertPageModule() {
    }
    AlertPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__alert__["a" /* AlertPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__alert__["a" /* AlertPage */]),
            ],
        })
    ], AlertPageModule);
    return AlertPageModule;
}());

//# sourceMappingURL=alert.module.js.map

/***/ })

});
//# sourceMappingURL=136.js.map
webpackJsonp([101],{

/***/ 1070:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JoineeupdatenumberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_image_picker__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_img_viewer__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var JoineeupdatenumberPage = /** @class */ (function () {
    function JoineeupdatenumberPage(loadingCtrl, imageViewerCtrl, imagePicker, modalCtrl, toastCtrl, storage, apiServices, navCtrl) {
        var _this = this;
        this.loadingCtrl = loadingCtrl;
        this.imageViewerCtrl = imageViewerCtrl;
        this.imagePicker = imagePicker;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.apiServices = apiServices;
        this.navCtrl = navCtrl;
        this._imageViewerCtrl = imageViewerCtrl;
        this.storage.get('login_token').then(function (data) { _this.login_token = data; });
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
            console.log(' deviceId== ', _this.employeeId);
        });
        this.storage.get('showOnBoard').then(function (data) {
            console.log('showOnBoard value is111==', data);
            _this.employeeType = data;
        });
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            console.log(' deviceId== ', _this.deviceId);
            _this.getUserInfo();
        });
    }
    JoineeupdatenumberPage.prototype.getUserInfo = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var apiKey = {
            "client_id": this.apiServices.clientId,
            "employee_id": this.employeeId,
            "device": this.apiServices.device,
            "device_id": this.deviceId,
            "app_version": this.apiServices.appVersion,
            "user_type": this.employeeType
        };
        console.log('reset pass api key==', apiKey);
        this.apiServices.userProfile(apiKey, this.login_token).subscribe(function (result) {
            console.log('reset pass response== ', result);
            _this.allData = result;
            if (_this.allData.success == 1) {
                _this.profileDetails = _this.allData.data;
                _this.userName = _this.profileDetails.name;
                _this.userImage = _this.profileDetails.user_image;
                _this.update_icon = _this.profileDetails.update_icon;
                // this.userImageBg= this.userImage;
                // this.userlocation=this.profileDetails.location;
                // this.designation=this.profileDetails.designation;
                // this.department=this.profileDetails.department;
                _this.number = _this.profileDetails.mobile_number;
                // this.country_name=this.profileDetails.country_name;
                setTimeout(function () {
                    loading.dismiss();
                }, 2000);
            }
            else {
                _this.apiMessage(_this.allData.message);
                setTimeout(function () {
                    loading.dismiss();
                }, 2000);
            }
        });
    };
    JoineeupdatenumberPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    JoineeupdatenumberPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad JoineeupdatenumberPage');
        this.navBar.backButtonClick = function (e) {
            // todo something
            _this.navCtrl.popToRoot();
        };
    };
    JoineeupdatenumberPage.prototype.presentImage = function (myImage) {
        var imageViewer = this._imageViewerCtrl.create(myImage);
        imageViewer.present();
        // setTimeout(() => imageViewer.dismiss(), 30000);
        imageViewer.onDidDismiss(function () { return console.log('Viewer dismissed'); });
    };
    JoineeupdatenumberPage.prototype.updateNo = function () {
        this.navCtrl.push('TakeMobileNumberPage', { 'profilekey': '1' });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Navbar */])
    ], JoineeupdatenumberPage.prototype, "navBar", void 0);
    JoineeupdatenumberPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-joineeupdatenumber',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/joineeupdatenumber/joineeupdatenumber.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Update Mobile Number</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card style="border-radius:5px;">\n      <ion-row>\n          <ion-col col-3 class="bbottom">\n              <!-- <img srcset="{{userImage}}" src="assets/watermark/watermark.png" class="userImage"/> -->\n\n              <img  class="userImage" onerror="this.src=\'assets/watermark/watermark.png\'" #myImage\n              src="{{update_icon}}" (click)="presentImage(myImage)"  >\n\n          </ion-col>\n          <ion-col col-9 class="bbottom">\n              <p class="userName black">{{userName}}</p>\n              <p class="userName">Mobile Number :  {{number}}</p>\n          </ion-col>\n        </ion-row>\n  \n        <br><br><br><br>\n        <ion-row>\n            <ion-col col-12 text-center>\n              <button ion-button round class="updateBtn" (click)="updateNo()">Update Mobile Number</button>\n            </ion-col>\n           </ion-row>\n           <br><br><br><br>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/joineeupdatenumber/joineeupdatenumber.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5_ionic_img_viewer__["a" /* ImageViewerController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_image_picker__["a" /* ImagePicker */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */]])
    ], JoineeupdatenumberPage);
    return JoineeupdatenumberPage;
}());

//# sourceMappingURL=joineeupdatenumber.js.map

/***/ }),

/***/ 767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoineeupdatenumberPageModule", function() { return JoineeupdatenumberPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__joineeupdatenumber__ = __webpack_require__(1070);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var JoineeupdatenumberPageModule = /** @class */ (function () {
    function JoineeupdatenumberPageModule() {
    }
    JoineeupdatenumberPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__joineeupdatenumber__["a" /* JoineeupdatenumberPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__joineeupdatenumber__["a" /* JoineeupdatenumberPage */]),
            ],
        })
    ], JoineeupdatenumberPageModule);
    return JoineeupdatenumberPageModule;
}());

//# sourceMappingURL=joineeupdatenumber.module.js.map

/***/ })

});
//# sourceMappingURL=101.js.map
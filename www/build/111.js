webpackJsonp([111],{

/***/ 1056:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForceUpdatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_index__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ForceUpdatePage = /** @class */ (function () {
    function ForceUpdatePage(navCtrl, navParams, apiServices, storage, menu, theInAppBrowser, alertCtrl, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiServices = apiServices;
        this.storage = storage;
        this.menu = menu;
        this.theInAppBrowser = theInAppBrowser;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.closeAppPopupShow = 0;
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
        // alert("ffff");
        this.optionalfield = this.navParams.get('data');
        console.log('data==', this.optionalfield);
        console.log('data12345==', this.optionalfield.optionalupdate);
        this.updateType = this.optionalfield.optionalupdate;
        console.log('updateType==', this.updateType);
        if (this.apiServices.device == '2') {
            this.link = this.navParams.get('data').androidLink;
            console.log('link==', this.link);
        }
        else {
            this.link = this.navParams.get('data').iosLink;
            console.log('link==', this.link);
        }
        // alert("2222"); 
    }
    ForceUpdatePage.prototype.openWithSystemBrowser = function () {
        var target = "_system";
        this.theInAppBrowser.create(this.link, target, this.options);
    };
    ForceUpdatePage.prototype.continue = function () {
        var _this = this;
        this.storage.get('employeeId').then(function (data) {
            if (data != null) {
                // this.navCtrl.setRoot('HomePage');
                // this.navCtrl.setRoot('TabsPage');
                _this.navCtrl.popToRoot();
            }
            else {
                // this.navCtrl.setRoot('LoginPage');
                _this.navCtrl.popToRoot();
            }
        });
    };
    ForceUpdatePage.prototype.ionViewWillEnter = function () {
        this.menu.swipeEnable(false);
        this.initializeBackButtonCustomHandler();
    };
    //Hardware Back Button
    ForceUpdatePage.prototype.initializeBackButtonCustomHandler = function () {
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
    ForceUpdatePage.prototype.showeAlert = function () {
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
    ForceUpdatePage.prototype.ionViewWillLeave = function () {
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    ForceUpdatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-force-update',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/force-update/force-update.html"*/'<ion-content  class="forceUpdateCon">\n  \n   \n\n<div  style="     text-align: center;\nmargin-top: 144px;">\n  <ion-icon name="information" style="    font-size: 99px;\n  border: 4px solid #fff;\n  border-radius: 50%;\n  padding: 1px 52px 14px 52px;\n  color: #fff;"></ion-icon></div>\n  <div class="firstTimeImageUpload"><h5 style="    color: #fff;\n    font-size: 19px;\n    font-weight: 600;\n    padding-bottom: 9px;">You need to update Reach app.</h5>\n  <p style="    color: #fff;\n  margin-top: -10px;">We have made changes in the App to improve your Experience.Kindly update the app to continue.\n  </p>\n  </div>\n \n\n <!-- <a   href="{{link}}" *ngIf="link!=null"> -->\n    \n\n <div class="btnFUDIV" >\n  \n    <button (click)="openWithSystemBrowser()"   class="btnFU" color="headColor"  ion-button medium  >Update </button>\n   \n</div>\n<!-- </a> -->\n\n<div *ngIf="updateType==\'2\'" style="    text-align: center;">\n    <p style="    color: rgb(189, 185, 185); font-size: 15px; font-weight: bold;">or</p>\n    \n <p (tap)="continue()" style="    margin-top: 0px;margin-bottom: 0px; color: rgb(189, 185, 185);text-decoration: underline; text-decoration-color: blue;">Continue</p>\n    <p (tap)="continue()"style="margin: 0px; color: rgb(189, 185, 185);font-size: 16px;text-decoration: underline; text-decoration-color: blue; ">without update</p>\n   </div>\n\n</ion-content>'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/force-update/force-update.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular_index__["r" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */]])
    ], ForceUpdatePage);
    return ForceUpdatePage;
}());

//# sourceMappingURL=force-update.js.map

/***/ }),

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForceUpdatePageModule", function() { return ForceUpdatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__force_update__ = __webpack_require__(1056);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForceUpdatePageModule = /** @class */ (function () {
    function ForceUpdatePageModule() {
    }
    ForceUpdatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__force_update__["a" /* ForceUpdatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__force_update__["a" /* ForceUpdatePage */]),
            ],
        })
    ], ForceUpdatePageModule);
    return ForceUpdatePageModule;
}());

//# sourceMappingURL=force-update.module.js.map

/***/ })

});
//# sourceMappingURL=111.js.map
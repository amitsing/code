webpackJsonp([96],{

/***/ 1080:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaintainancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
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
 * Generated class for the MaintainancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MaintainancePage = /** @class */ (function () {
    function MaintainancePage(platform, alertCtrl, menu, navCtrl, navParams) {
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.menu = menu;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu.swipeEnable(false);
    }
    MaintainancePage.prototype.ionViewDidLoad = function () {
        this.menu.swipeEnable(false);
        console.log('ionViewDidLoad MaintainancePage');
    };
    // ionViewWillLeave() {
    //    this.menu.swipeEnable(true);
    // }
    // ionViewWillEnter() {
    //   this.menu.swipeEnable(false);
    //    console.log('[1] will enter fired');
    // }
    MaintainancePage.prototype.showeAlert = function () {
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
    MaintainancePage.prototype.initializeBackButtonCustomHandler = function () {
        var that = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function (event) {
            // alert('Prevent Back Button Page Change');
            this.alertonoff = !this.alertonoff;
            if (this.alertonoff == true) {
                that.showeAlert();
            }
            else if (this.alertonoff == false) {
                that.alert121.dismiss();
            }
        }, 101); // Priority 101 will override back button handling (we set in app.component.ts) as it is bigger then priority 100 configured in app.component.ts file */
    };
    MaintainancePage.prototype.ionViewWillLeave = function () {
        this.menu.swipeEnable(true);
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    MaintainancePage.prototype.ionViewWillEnter = function () {
        this.menu.swipeEnable(false);
        this.initializeBackButtonCustomHandler();
        console.log('[1] will enter fired');
    };
    MaintainancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-maintainance',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/maintainance/maintainance.html"*/'\n<ion-content padding   style="background-color: #005aab;">\n<div class="maintenanceholder">\n    <ion-icon name="ios-warning-outline" class="warningIcon"></ion-icon>\n    <h2 class="yellowText">Maintenance Alert!</h2>\n    <br>\n    <br>\n    <h4 class="whiteText">The App is down for a bit of maintenance right now.</h4>\n    <br>\n    <h5 class="grayText">Please check after some time!!</h5>\n</div>\n\n  <img src="assets/imgs/maintenance.png"class="maintenanceImg"/>\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/maintainance/maintainance.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], MaintainancePage);
    return MaintainancePage;
}());

//# sourceMappingURL=maintainance.js.map

/***/ }),

/***/ 777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintainancePageModule", function() { return MaintainancePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__maintainance__ = __webpack_require__(1080);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaintainancePageModule = /** @class */ (function () {
    function MaintainancePageModule() {
    }
    MaintainancePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__maintainance__["a" /* MaintainancePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__maintainance__["a" /* MaintainancePage */]),
            ],
        })
    ], MaintainancePageModule);
    return MaintainancePageModule;
}());

//# sourceMappingURL=maintainance.module.js.map

/***/ })

});
//# sourceMappingURL=96.js.map
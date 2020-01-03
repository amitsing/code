webpackJsonp([95],{

/***/ 1081:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
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




var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, navParams, alertCtrl, platform, toastCtrl, storage, apiServices) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.apiServices = apiServices;
        this.closeAppPopupShow = 0;
        this.tab = this.navCtrl.parent;
        this.storage.get('showOnBoard').then(function (data) {
            _this.loginemp = data;
            console.log('showOnBoard value is111==', data);
        });
        this.menu();
    }
    MenuPage.prototype.teamAwesome = function () { this.navCtrl.push('TeamAwesomePage'); };
    MenuPage.prototype.madeMyDay = function () { this.navCtrl.push('MadeMyDayPage'); };
    MenuPage.prototype.nominationCategory = function () { this.navCtrl.push('NominationCategoryPage'); };
    MenuPage.prototype.survey = function () {
        this.navCtrl.push('SurveylistPage');
        // this.navCtrl.push('ChartPage');
    };
    MenuPage.prototype.quiz = function () {
        this.navCtrl.push('NewquizlistPage');
    };
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
    };
    MenuPage.prototype.RandR = function () {
        this.navCtrl.push('NominationCategoryPage');
    };
    MenuPage.prototype.menu = function () {
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
            var apiKey = {
                "client_id": _this.apiServices.clientId,
                "employee_id": _this.employeeId,
                "device": _this.apiServices.device,
                "device_id": _this.deviceId,
                "app_version": _this.apiServices.appVersion,
                "request": "menu"
            };
            _this.apiServices.menu(apiKey, _this.login_token)
                .subscribe(function (res) {
                console.log('', res);
                if (res.success == 1) {
                    _this.allmenudata = res.data;
                    _this.nominating_authority = res.nominating_authority;
                    _this.approval_authority = res.approval_authority;
                    console.log('this.allmenudata', _this.allmenudata);
                }
                else {
                    // this.myInfiniteScroll.enable(true);
                    // this.alldata=[];
                    _this.apiMessage(res.message);
                }
            }, function (err) {
                console.log('err== ', err);
                _this.apiMessage(err);
            });
        });
    };
    MenuPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    MenuPage.prototype.gotodeatil = function (id, name) {
        // if(id=='38_D'){
        //   this.navCtrl.push('PendinglistPage',{'authority':2
        // });
        // }
        if (id == '9' || id == 9) {
            this.navCtrl.push('LeadershiptalkPage');
        }
        else if (id == '26' || id == 26) {
            this.navCtrl.push('SurveylistPage');
        }
        else if (id == '11' || id == 11) {
            this.navCtrl.push('AlbumListPage', { 'loginemp': this.loginemp });
        }
        else if (id == '33' || id == 33) {
            this.navCtrl.push('NewquizlistPage');
        }
        else if (id == '7' || id == 7) {
            this.navCtrl.push('NoticeListPage');
        }
        else if (id == '5' || id == 5) {
            this.navCtrl.push('ThoughtOfTheDayPage');
        }
        else if (id == '35' || id == 35) {
            this.navCtrl.push('QuickBytesPage');
        }
        else if (id == '12' || id == 12) {
            this.navCtrl.push('WelcomOnboardPage');
        }
        else if (id == '10' || id == 10) {
            this.navCtrl.push('BadgeBoardPage');
        }
        else if (id == '39' || id == 39) {
            this.navCtrl.push('AboutEvalueservePage');
        }
        else if (id == '42' || id == 42) {
            this.navCtrl.push('FaqDetailsPage');
        }
        else if (id == '31' || id == 31) {
            this.navCtrl.push('CommunityListPage');
        }
        else if (id == '1' || id == 1) {
            this.navCtrl.push('NewslistPage');
        }
        else if (id == '41' || id == 41) {
            this.navCtrl.push('ContestPage');
        }
        else if (id == 50 || id == '50') {
            this.navCtrl.push('BehaivourGuidePage', { 'data': id });
        }
        else if (id == 51 || id == '51') {
            this.navCtrl.push('PhotowallPage', { 'data': id });
        }
        else if (id == '38_D') {
            // this.navCtrl.push('ContestPage'); 
            this.navCtrl.push('ChartPage', { 'approval_authority': this.approval_authority, 'nominating_authority': this.nominating_authority });
        }
        else if (id == '45' || id == 45) {
            this.navCtrl.push('HrpolicyPage');
        }
        else {
            this.navCtrl.push('DynamicModuleListPage', { 'data': id, 'title': name });
        }
    };
    //   ionViewWillEnter(){
    // alert('1');
    //   }
    MenuPage.prototype.ionViewWillEnter = function () {
        this.initializeBackButtonCustomHandler();
    };
    MenuPage.prototype.showeAlert = function () {
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
    MenuPage.prototype.ionViewWillLeave = function () {
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    //Hardware Back Button
    MenuPage.prototype.initializeBackButtonCustomHandler = function () {
        var that = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function (event) {
            // that.closeAppPopupShow++;
            // if(that.closeAppPopupShow%2!=0){
            //   that.showeAlert();
            // }else{
            //   that.alert121.dismiss();
            // }
            that.navCtrl.parent.select(0);
            // that.tab.select(1);
        }, 101); // Priority 101 will override back button handling (we set in app.component.ts) as it is bigger then priority 100 configured in app.component.ts file */
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/menu/menu.html"*/'<ion-header>\n  <ion-navbar>\n      <button ion-button menuToggle >\n          <ion-icon style="color:#4d2748" name="menu"></ion-icon>\n        </button>\n    <ion-title>Menu</ion-title></ion-navbar>\n  </ion-header>\n\n<ion-content padding>\n  <div *ngIf="allmenudata">\n  <ion-row>\n    <ion-col class=colcss col-4 *ngFor="let data of allmenudata;let j=index">\n<div class="center" (click)=gotodeatil(data.module_flag,data.menu_name)>\n  <img class="imgcss" src="assets/watermark/watermark.png" srcset="{{data.menu_icon}}">\n  <p class="paracss">{{data.menu_name}}</p>\n</div>\n    </ion-col>\n  </ion-row>\n</div>\n\n<!-- follwing is skelton of menu -->\n<div *ngIf="!allmenudata">\n  <ion-row>\n    <ion-col col-4 *ngFor="let data of [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];let j=index">\n      <div class="center">\n        <img class="imgcss textSkelton" src="../../assets/watermark/watermark.png" >\n        <p class="textSkelton" style="margin: 2px;font-size: 13px;" text-center>Module Name</p>\n      </div>\n    </ion-col>\n  </ion-row>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/menu/menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu__ = __webpack_require__(1081);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuPageModule = /** @class */ (function () {
    function MenuPageModule() {
    }
    MenuPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */]),
            ],
        })
    ], MenuPageModule);
    return MenuPageModule;
}());

//# sourceMappingURL=menu.module.js.map

/***/ })

});
//# sourceMappingURL=95.js.map
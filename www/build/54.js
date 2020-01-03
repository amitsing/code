webpackJsonp([54],{

/***/ 1176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_service__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    // myIndex: number;
    function TabsPage(navCtrl, navParams, events, zone, apiServices, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.zone = zone;
        this.apiServices = apiServices;
        this.storage = storage;
        this.HomePage = 'NewHomePage';
        this.MenuPage = 'MenuPage';
        this.PrivilegesPage = 'PrivilegeHomePage';
        this.OnboardPreview = 'HomePage';
        // OnboardPreview= 'GuesthomePage';
        this.AlertPage = 'AlertPage';
        this.EmployeealertPage = 'EmployeealertPage';
        this.HealthAndWellnessListPage = 'HealthAndWellnessListPage';
        this.CommunityListPage = 'CommunityListPage';
        this.keyforsignout = this.navParams.get('keyforsignout');
        console.log('this.keyforsignout== ', this.keyforsignout);
        console.log('showOnBoard value ==');
        this.storage.get('country_id').then(function (data) {
            _this.country_id = data;
            console.log('login deviceId== ', _this.country_id);
        });
        this.storage.get('showOnBoard').then(function (data) {
            console.log('showOnBoard value is111==', data);
            if (data == 'Employee') {
                _this.Emphomedata();
            }
            if (data == 'Guest') {
                _this.joineehomedata();
            }
        });
        this.events.subscribe('tabbadgedata', function (data) {
            console.log('tabbadgedata', data);
            _this.alertcount = data;
            _this.tabsArray[1].num = _this.alertcount;
        });
        this.events.subscribe('emptabbadgedata', function (data) {
            console.log('emptabbadgedata12345', data);
            // if(this.checkdata==1)
            // {
            // this.tabsArray[4].num=data;
            if (data == null) {
                // alert(data);
                _this.alertcount = data;
                _this.tabsArray[_this.tabsArray.length - 1].num = _this.alertcount;
            }
            else {
                _this.tabsArray[_this.tabsArray.length - 1].num = data;
            }
            //   this.checkdata=2;
            // }
            // this.Emphomedata();
            // if(data=='' || data==undefined){
            //   this.alertcount=null;
            // }else{
            //   this.alertcount=data;
            //   this.tabsArray[4].num=this.alertcount;
            // }
        });
    }
    TabsPage.prototype.Emphomedata = function () {
        var _this = this;
        // this.commonLoader();
        this.tabfunction();
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
                "app_version": _this.apiServices.appVersion
            };
            _this.apiServices.homeapi(apiKey, _this.login_token)
                .subscribe(function (res) {
                console.log('', res);
                // this.loading.dismiss();
                _this.alertcount = res.alert_count;
                console.log('home login alert count==', res.alert_count);
                _this.storage.get('showOnBoard').then(function (data) {
                    console.log('showOnBoard value is==', data);
                    if (data == 'Employee') {
                        _this.zone.run(function () {
                            if (res.alert_count != 0 || res.alert_count != '0') {
                                _this.tabsArray[_this.tabsArray.length - 1].num = res.alert_count;
                            }
                            console.log('home login alert count2==', res.alert_count);
                        });
                    }
                    else {
                        _this.zone.run(function () {
                            if (res.alert_count != 0 || res.alert_count != '0') {
                                _this.tabsArray[1].num = res.alert_count;
                            }
                        });
                    }
                });
                // this.tabfunction();
            }, function (err) {
                console.log('err== ', err);
                // this.apiMessage(err);
            });
        });
    };
    TabsPage.prototype.joineehomedata = function () {
        var _this = this;
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            console.log('login deviceId== ', _this.deviceId);
        });
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
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
            };
            _this.apiServices.joineehomepage(apiKey, _this.login_token).subscribe(function (result) {
                console.log('joineehomedata==', result);
                console.log('this.allData.alert_count123435 == ', result.alert_count);
                _this.alertcount = result.alert_count;
                _this.tabfunction();
            });
        });
    };
    TabsPage.prototype.tabfunction = function () {
        var _this = this;
        this.storage.get('showOnBoard').then(function (data) {
            console.log('showOnBoard value tab page is==', data);
            if (data == 'Employee') {
                if (_this.country_id != 2) {
                    _this.tabsArray = [{
                            page: _this.HomePage,
                            pageName: 'Home',
                            pageIcon: 'home'
                        },
                        {
                            page: _this.MenuPage,
                            pageName: 'Menu',
                            pageIcon: 'apps'
                        },
                        {
                            page: _this.CommunityListPage,
                            pageName: ' Wellness',
                            pageIcon: 'people'
                        },
                        {
                            page: _this.EmployeealertPage,
                            pageName: 'Alert',
                            pageIcon: 'notifications',
                            num: _this.alertcount
                        }
                    ];
                }
                else {
                    _this.tabsArray = [{
                            page: _this.HomePage,
                            pageName: 'Home',
                            pageIcon: 'home'
                        },
                        {
                            page: _this.MenuPage,
                            pageName: 'Menu',
                            pageIcon: 'apps'
                        },
                        {
                            page: _this.PrivilegesPage,
                            pageName: 'Privileges',
                            pageIcon: 'briefcase'
                        }, {
                            page: _this.CommunityListPage,
                            pageName: ' Wellness',
                            pageIcon: 'people'
                        },
                        {
                            page: _this.EmployeealertPage,
                            pageName: 'Alert',
                            pageIcon: 'notifications',
                            num: _this.alertcount
                        }
                    ];
                }
            }
            else {
                _this.tabsArray = [{
                        page: _this.OnboardPreview,
                        pageName: 'Onboard',
                        pageIcon: 'home'
                    },
                    {
                        page: _this.AlertPage,
                        pageName: 'Alert',
                        pageIcon: 'notifications',
                        num: _this.alertcount
                    }
                ];
            }
        });
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/tabs/tabs.html"*/'<!-- <ion-tabs *ngIf="tabsArray" [selectedIndex]="myIndex">\n  <ion-tab *ngFor="let mytabs of tabsArray" [root]="mytabs?.page" tabTitle="{{mytabs?.pageName}}" tabIcon="{{mytabs?.pageIcon}}"></ion-tab>\n</ion-tabs> -->\n\n\n<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>tabs</ion-title>\n  </ion-navbar>\n</ion-header>-->\n\n<ion-content >\n  \n    <ion-tabs *ngIf="tabsArray" [selectedIndex]="myIndex">\n        <ion-tab *ngFor="let mytabs of tabsArray" [root]="mytabs?.page" tabBadge="{{mytabs?.num}}" \n        tabIcon="{{mytabs?.pageIcon}}">\n        <!-- tabTitle="{{mytabs?.pageName}}" -->\n          <!-- <p>4</p> -->\n        </ion-tab>\n      </ion-tabs>\n\n      <table *ngIf="!tabsArray" id="wrapper">\n          <tr>\n            <td> <img src="assets/imgs/clientLogo.png"class="dummyScreenIcon"></td>\n          </tr>\n        </table>\n      <p *ngIf="!tabsArray" class="dummyScreenWaitText">Please wait, your data is preparing...</p>\n     \n</ion-content> \n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/tabs/tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 848:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs__ = __webpack_require__(1176);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]),
            ],
        })
    ], TabsPageModule);
    return TabsPageModule;
}());

//# sourceMappingURL=tabs.module.js.map

/***/ })

});
//# sourceMappingURL=54.js.map
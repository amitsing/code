webpackJsonp([100],{

/***/ 1071:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JoiningDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JoiningDetailsPage = /** @class */ (function () {
    function JoiningDetailsPage(navCtrl, navParams, iab, toastCtrl, storage, apiServices) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.iab = iab;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.apiServices = apiServices;
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
            footer: 'yes',
            footercolor: '#4d2748'
        };
        this.skeltonDiv = [{
                doj: "Your Joining Date is 10 June, 2019 at 9:30 AM",
                icon: "",
                link: ""
            }, {
                doj: "Your Joining Date is 10 June, 2019 at 9:30 AM",
                icon: "",
                link: ""
            }, {
                doj: "Your Joining Date is 10 June, 2019 at 9:30 AM",
                icon: "",
                link: ""
            }, {
                doj: "Your Joining Date is 10 June, 2019 at 9:30 AM",
                icon: "",
                link: ""
            }, {
                doj: "Your Joining Date is 10 June, 2019 at 9:30 AM",
                icon: "",
                link: ""
            }];
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            console.log('login deviceId== ', _this.deviceId);
        });
        this.storage.get('login_token').then(function (data) { _this.login_token = data; });
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
            console.log('login employeeId== ', _this.employeeId);
            _this.getJoiningDetails();
        });
    }
    JoiningDetailsPage.prototype.directionGo = function (link) {
        console.log('link--- ', link);
        // this.iab.create(link,'_blank',this.options);
        this.iab.create(link, '_system', this.options);
        // this.iab.create(link,'_system',{location:'no'});
    };
    JoiningDetailsPage.prototype.handleClick = function (event) {
        if (event.target.tagName == "A") {
            // open link using inappbrowser
            this.iab.create(event.target.href, "_system");
            return false;
        }
    };
    JoiningDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JoiningDetailsPage');
    };
    JoiningDetailsPage.prototype.getJoiningDetails = function () {
        var _this = this;
        var apiKey = {
            "client_id": this.apiServices.clientId,
            "employee_id": this.employeeId,
            "device_id": this.deviceId,
            "app_version": this.apiServices.appVersion,
            "device": this.apiServices.device
        };
        console.log('home page api key==', apiKey);
        this.apiServices.userjoinningDetails(apiKey, this.login_token).subscribe(function (result) {
            console.log('joinning details == ', result);
            _this.allData = result;
            if (_this.allData.success == 1) {
                var details_1 = _this.allData.data;
                setTimeout(function () {
                    _this.userJoinningDetails = details_1;
                    console.log('joinning details == ', details_1);
                }, 1000);
            }
            else {
                _this.apiMessage(_this.allData.message);
                _this.navCtrl.pop();
            }
        });
    };
    JoiningDetailsPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    JoiningDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-joining-details',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/joining-details/joining-details.html"*/'<!--\n  Generated template for the JoiningDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar >\n    <ion-title>Joining Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n   \n          <div  class="backimgthird" *ngIf="userJoinningDetails" >\n              <ion-card>\n\n                  <!-- <ion-card-header>\n                    Card Header\n                  </ion-card-header> -->\n                \n                  <ion-card-content>\n\n                      <div *ngFor="let data of userJoinningDetails let j=index" >\n                          <ion-row >\n                           <ion-col col-2 class="middleData">\n                                <img class="iconCircle2"  srcset="{{data?.icon}}" src="../../assets/watermark/watermark.png" >\n                            </ion-col>\n                          <!-- <ion-col col-10 style="border-bottom: 1px solid;">\n                          \n                              <h6 class="textContent" *ngIf="data?.doj!=\'\'" [innerHTML]="data?.doj"></h6>\n                           \n                              <h6 class="textContent" *ngIf="data?.reporting_location!=\'\'" [innerHTML]="data?.reporting_location"></h6>\n                           </ion-col> -->\n\n                           <ion-col col-10 class="borderbot">\n\n                            <h6 class="textContent" *ngIf="data?.doj!=\'\'" [innerHTML]="data?.content"></h6>\n  <!-- {{data?.link}} -->\n                            <!-- <h6 class="textContent" *ngIf="data?.reporting_location!=\'\'" [innerHTML]="data?.reporting_location"></h6> -->\n                            <p  *ngIf="data?.link!=\'\' " (click)="directionGo(data?.link)" class="dirText">Get Direction</p>\n                          </ion-col>\n\n                        </ion-row>\n\n\n                       \n\n\n\n\n                        <!-- <ion-row style="margin-top:-7px;" *ngIf="data?.link!=\'\'">\n                            <ion-col col-2 ></ion-col>\n                          <ion-col (click)="handleClick($event)">\n                            <p (click)="directionGo(data?.link)" class="dirText">Get Direction</p>\n                           \n                          </ion-col>\n                        </ion-row> -->\n                        </div>\n\n                 \n                  </ion-card-content>\n                \n                </ion-card>\n\n\n            </div>\n              \n          <div  class="backimgthird" *ngIf="!userJoinningDetails" >\n              <div *ngFor="let data of skeltonDiv" >\n                  <ion-row class="skeltonData">\n                   <ion-col col-2 class="middleData">\n                        <img class="iconCircle2"  srcset="{{data?.icon}}" src="../../assets/watermark/watermark.png" >\n                    </ion-col>\n                  <ion-col col-10>\n                      <h6 class="textContent" *ngIf="data?.doj!=\'\'" [innerHTML]="data?.doj"></h6>\n                      <p>reporting time</p>\n                      <h6 class="textContent" *ngIf="data?.reporting_location!=\'\'" [innerHTML]="data?.reporting_location"></h6>\n                   </ion-col>\n                </ion-row>\n                </div>\n              </div>\n</ion-content>\n\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/joining-details/joining-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */]])
    ], JoiningDetailsPage);
    return JoiningDetailsPage;
}());

//# sourceMappingURL=joining-details.js.map

/***/ }),

/***/ 768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoiningDetailsPageModule", function() { return JoiningDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__joining_details__ = __webpack_require__(1071);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var JoiningDetailsPageModule = /** @class */ (function () {
    function JoiningDetailsPageModule() {
    }
    JoiningDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__joining_details__["a" /* JoiningDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__joining_details__["a" /* JoiningDetailsPage */]),
            ],
        })
    ], JoiningDetailsPageModule);
    return JoiningDetailsPageModule;
}());

//# sourceMappingURL=joining-details.module.js.map

/***/ })

});
//# sourceMappingURL=100.js.map
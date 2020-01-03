webpackJsonp([52],{

/***/ 1178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TandCbeforeloginPage; });
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





var TandCbeforeloginPage = /** @class */ (function () {
    function TandCbeforeloginPage(alertCtrl, platform, loadingCtrl, toastCtrl, storage, apiServices, iab, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.apiServices = apiServices;
        this.iab = iab;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.showbutton = false;
        this.options = {
            location: 'no',
            hidden: 'no',
            // clearcache : 'yes',
            // clearsessioncache : 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Back',
            closebuttoncolor: '#f04141',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
            footer: 'yes',
            footercolor: '#939399',
        };
        console.log(' TandCbeforeloginPage');
        this.seeTnc();
    }
    TandCbeforeloginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TandCbeforeloginPage');
    };
    //Common Loader:
    TandCbeforeloginPage.prototype.commonLoader = function () {
        this.loading = this.loadingCtrl.create({
            enableBackdropDismiss: true,
            spinner: 'ios-small',
            content: 'Loading data...'
        });
        this.loading.present();
    };
    TandCbeforeloginPage.prototype.seeTnc = function () {
        var _this = this;
        this.commonLoader();
        // this.storage.get('deviceId').then(data => {
        // this.deviceId = data;
        //  this.token='Q3owSXo3T05BVVJscHREVCsyeUtqZz09OjoWf4jZSksqJnff2wxdlZ7e'
        var apiKey = {
            "client_id": 'CO-31'
        };
        this.apiServices.tandcbeforelogin(apiKey).subscribe(function (res) {
            console.log('tnc res==', res);
            _this.loading.dismiss();
            if (res.success == 1) {
                _this.allData = res.data.term;
                // this.tanckey=this.allData[0].auto_id;
                // console.log('succ', this.allData);
                _this.showbutton = true;
            }
            else {
                _this.apiMessage(res.message);
            }
        }, function (err) {
            _this.loading.dismiss();
            console.log('err== ', err);
            _this.apiMessage(err);
        });
        // });
    };
    TandCbeforeloginPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    TandCbeforeloginPage.prototype.agree = function () {
        // this.navCtrl.push('TakeMobileNumberPage',{'tanckey':this.tanckey})   
        // this.submitTnc()
        this.storage.set('ontanc', 1);
        this.navCtrl.push('ChooseUserPage');
    };
    TandCbeforeloginPage.prototype.disagree = function () {
        var alert = this.alertCtrl.create({
            // title: 'Low battery',
            subTitle: 'Please agree to the Terms of Use to continue.',
            buttons: ['OK']
        });
        alert.present();
    };
    TandCbeforeloginPage.prototype.handleClick = function (event) {
        if (event.target.tagName == "A") {
            this.iab.create(event.target.href, "_system", this.options);
            return false;
        }
    };
    TandCbeforeloginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tand-cbeforelogin',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/tand-cbeforelogin/tand-cbeforelogin.html"*/'\n<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title style="text-align:center;">Terms of Use</ion-title>\n  </ion-toolbar>\n\n\n</ion-header>\n\n<ion-content padding>\n  <ion-row>\n    <ion-col>\n        <div [innerHTML]="allData" (click)="handleClick($event)"></div>\n    </ion-col>\n  </ion-row>    \n  <!-- <div ion-fixed style="bottom:10px;width:100%;"> -->\n  <div style="bottom:10px;width:100%;">\n    <ion-row>\n        <ion-col col-6 *ngIf="showbutton==true" class=""><button ion-button round class="btn centerDataInDiv" (click)="disagree()">Disagree</button></ion-col>\n        <ion-col col-6 *ngIf="showbutton==true" class=""><button ion-button class="btn centerDataInDiv" (click)="agree()">Agree</button></ion-col>\n    </ion-row>\n  </div>\n<br><br><br><br>\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/tand-cbeforelogin/tand-cbeforelogin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], TandCbeforeloginPage);
    return TandCbeforeloginPage;
}());

//# sourceMappingURL=tand-cbeforelogin.js.map

/***/ }),

/***/ 850:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TandCbeforeloginPageModule", function() { return TandCbeforeloginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tand_cbeforelogin__ = __webpack_require__(1178);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TandCbeforeloginPageModule = /** @class */ (function () {
    function TandCbeforeloginPageModule() {
    }
    TandCbeforeloginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tand_cbeforelogin__["a" /* TandCbeforeloginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tand_cbeforelogin__["a" /* TandCbeforeloginPage */]),
            ],
        })
    ], TandCbeforeloginPageModule);
    return TandCbeforeloginPageModule;
}());

//# sourceMappingURL=tand-cbeforelogin.module.js.map

/***/ })

});
//# sourceMappingURL=52.js.map
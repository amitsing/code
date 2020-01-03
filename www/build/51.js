webpackJsonp([51],{

/***/ 1179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsAndConditionsPage; });
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





/**
 * Generated class for the TermsAndConditionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TermsAndConditionsPage = /** @class */ (function () {
    function TermsAndConditionsPage(alertCtrl, platform, menu, loadingCtrl, toastCtrl, storage, apiServices, navCtrl, navParams, iab) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.menu = menu;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.apiServices = apiServices;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.iab = iab;
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
        //  this.previousePageData=this.navParams.get('data');
        //  console.log('tnc previouse page data== ',this.previousePageData);
        this.profile_pic_upload = this.navParams.get('profile_pic_upload');
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
        });
        this.storage.get('login_token').then(function (data) { _this.login_token = data; });
        this.storage.get('employeeId').then(function (data) { _this.employeeId = data; });
        this.storage.get('showOnBoard').then(function (data) {
            console.log('showOnBoard value is111==', data);
            _this.employee_type = data;
        });
    }
    TermsAndConditionsPage.prototype.ionViewWillEnter = function () {
        this.menu.swipeEnable(false);
    };
    //Common Loader:
    TermsAndConditionsPage.prototype.commonLoader = function () {
        this.loading = this.loadingCtrl.create({
            enableBackdropDismiss: true,
            spinner: 'ios-small',
            content: 'Loading data...'
        });
        this.loading.present();
    };
    TermsAndConditionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OnboardingFormsPage');
        this.seeTnc();
    };
    TermsAndConditionsPage.prototype.seeTnc = function () {
        var _this = this;
        this.commonLoader();
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            //  this.token='Q3owSXo3T05BVVJscHREVCsyeUtqZz09OjoWf4jZSksqJnff2wxdlZ7e'
            var apiKey = {
                "client_id": _this.apiServices.clientId,
                "employee_id": _this.employeeId,
                "device": _this.apiServices.device,
                "device_id": _this.deviceId,
                "app_version": _this.apiServices.appVersion,
                "user_type": _this.employee_type
            };
            _this.apiServices.tncApi(apiKey, _this.login_token).subscribe(function (res) {
                console.log('tnc res==', res);
                _this.loading.dismiss();
                if (res.success == 1) {
                    _this.allData = res.data;
                    _this.disagree_message = res.disagree_message;
                    _this.show_skip = res.show_skip;
                    _this.tanckey = _this.allData[0].auto_id;
                    // this.storage.set('tncView',this.tanckey);
                    console.log('succ', _this.allData);
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
        });
    };
    TermsAndConditionsPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    TermsAndConditionsPage.prototype.agree = function () {
        // this.navCtrl.push('TakeMobileNumberPage',{'tanckey':this.tanckey})   
        // this.submitTnc()
        this.navCtrl.push('TakeMobileNumberPage', { 'tanckey': this.tanckey, 'profilekey': '0', 'profile_pic_upload': this.profile_pic_upload,
            'show_skip': this.show_skip });
    };
    TermsAndConditionsPage.prototype.disagree = function () {
        var alert = this.alertCtrl.create({
            // title: 'Low battery',
            subTitle: this.disagree_message,
            buttons: ['OK']
        });
        alert.present();
        //   if(this.employee_type=='Employee')
        //  {
        //    let alert = this.alertCtrl.create({
        //      subTitle: 'Content of the app cannot be accessed until you provide the consent.',
        //      buttons: ['OK']
        //    });
        //    alert.present();
        //  }
        //  if(this.employee_type=='Guest')
        //  {
        //    let alert = this.alertCtrl.create({
        //      subTitle: ' You will not be able to complete joining formalities without agreeing to the consent form.',
        //      buttons: ['OK']
        //    });
        //    alert.present();
        //  }
    };
    // submitTnc(){
    //   this.storage.get('showOnBoard').then((data)=>{
    //     console.log('showOnBoard value is111==',data );
    //     this.employee_type=data;
    //   });
    //   this.storage.get('deviceId').then(data=>{
    //     this.deviceId=data;
    //     console.log(' deviceId== ',this.deviceId);
    //   let apiKey={
    //     "client_id":this.apiServices.clientId,
    //     "employee_id":this.employeeId,
    //     "device":this.apiServices.device,
    //     "device_id":this.deviceId,
    //     "app_version":this.apiServices.appVersion,
    //     "user_type":this.employee_type      
    //   };
    //   console.log('seeNewsdetails api key==', apiKey);
    //   this.apiServices.submitTncApi(apiKey, this.login_token).subscribe(result => {
    //   console.log(' seeNewsdetails data response== ',result); 
    //   this.tncData=result;
    //   if(this.tncData.success==1){
    //     this.navCtrl.push('AplicantwelcomePage');
    //     // this.navCtrl.push('TakeMobileNumberPage');
    //     this.storage.set('tncView',this.tncData.t_and_c_accept);
    //   }else{
    //     this.apiMessage(this.tncData.message);
    //   }
    //   }, (err) => { 
    //   console.log('optionalUpdate err== ',err); 
    //   // this.apiMessage(err);
    //   }); 
    // });
    // }
    TermsAndConditionsPage.prototype.handleClick = function (event) {
        if (event.target.tagName == "A") {
            this.iab.create(event.target.href, "_system", this.options);
            return false;
        }
    };
    TermsAndConditionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-terms-and-conditions',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/terms-and-conditions/terms-and-conditions.html"*/'\n<ion-header>\n  <!-- <ion-navbar>\n    <ion-title>Terms and Conditions</ion-title>\n  </ion-navbar> -->\n\n  <ion-toolbar color="headColor">\n    <!-- <ion-buttons left>\n      <button ion-button clear>\n            <ion-icon name="close" style="    font-size: 2em;\n            color: white;    " ></ion-icon>\n          </button>\n    </ion-buttons> -->\n    <ion-title style="text-align:center;">Consent Form</ion-title>\n  </ion-toolbar>\n\n\n</ion-header>\n\n<ion-content padding>\n  <ion-row *ngFor="let data of allData">\n    <ion-col>\n        <div (click)="handleClick($event)" [innerHTML]="data?.term_condition" ></div>\n    </ion-col>\n  </ion-row>    \n  <div style="bottom:10px;width:100%;">\n    <ion-row>\n        <ion-col col-6 *ngIf="showbutton==true" class=""><button ion-button round class="btn centerDataInDiv" (click)="disagree()">Disagree</button></ion-col>\n        <ion-col col-6 *ngIf="showbutton==true" class=""><button ion-button class="btn centerDataInDiv" (click)="agree()">Agree</button></ion-col>\n    </ion-row>\n  </div>\n<br><br><br><br>\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/terms-and-conditions/terms-and-conditions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], TermsAndConditionsPage);
    return TermsAndConditionsPage;
}());

//# sourceMappingURL=terms-and-conditions.js.map

/***/ }),

/***/ 851:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsAndConditionsPageModule", function() { return TermsAndConditionsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terms_and_conditions__ = __webpack_require__(1179);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TermsAndConditionsPageModule = /** @class */ (function () {
    function TermsAndConditionsPageModule() {
    }
    TermsAndConditionsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__terms_and_conditions__["a" /* TermsAndConditionsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__terms_and_conditions__["a" /* TermsAndConditionsPage */]),
            ],
        })
    ], TermsAndConditionsPageModule);
    return TermsAndConditionsPageModule;
}());

//# sourceMappingURL=terms-and-conditions.module.js.map

/***/ })

});
//# sourceMappingURL=51.js.map
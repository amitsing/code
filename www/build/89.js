webpackJsonp([89],{

/***/ 1153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnboardingFormsPage; });
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





var OnboardingFormsPage = /** @class */ (function () {
    function OnboardingFormsPage(iab, alertCtrl, platform, toastCtrl, storage, apiServices, navCtrl, navParams) {
        var _this = this;
        this.iab = iab;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.apiServices = apiServices;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        ////
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
            footer: 'no',
            footercolor: '#939399',
        };
        this.storage.get('SessionId').then(function (data) {
            console.log('**SessionId==', data);
            _this.SessionId = data;
        });
        this.storage.get('Response').then(function (data) {
            console.log('login_token==', data);
            _this.Response = data;
        });
        this.previousPageData = this.navParams.get('data');
        console.log('previousPageData', this.previousPageData);
        this.title = this.previousPageData.title;
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
            console.log(' employeeId== ', _this.employeeId);
        });
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
        });
    }
    OnboardingFormsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OnboardingFormsPage');
        // this.getOnBoardListData();
    };
    OnboardingFormsPage.prototype.getOnBoardListData = function () {
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
            };
            _this.apiServices.getformmenu(apiKey, _this.login_token)
                .subscribe(function (res) {
                // this.apiServices.urllist(apiKey,this.token).then((result) => { 
                console.log('', res);
                if (res.success == 1) {
                    _this.allData = res.data.form_group;
                    console.log('succ', _this.allData);
                }
                else {
                    _this.apiMessage(res.message);
                }
            }, function (err) {
                console.log('err== ', err);
                _this.apiMessage(err);
            });
        });
    };
    OnboardingFormsPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    OnboardingFormsPage.prototype.gotourllist = function (grpid, data) {
        var _this = this;
        console.log("this.grpid==", grpid);
        console.log("this.grpid==", data);
        if (data.status == "enable" || data.status == "complete") {
            if (grpid == "" || grpid == undefined) {
                //pass url in iframe page
                // this.URL=data.url;
                if (data.title == "Offer Letter") {
                    // const browser = this.iab.create("https://benepik.in/reach/samladfslogin.php?deviceType=app&requestType=sso&device="+this.apiServices.device+"&device_id="+this.deviceId+"&appemail="+this.email+"",  '_blank', this.options);
                    var browser = this.iab.create(data.url, "_blank", this.options);
                }
                else if (data.title == "Essential Details") {
                    // const browser = this.iab.create(data.url,'_blank', this.options);
                    this.storage.get("SessionId").then(function (data) {
                        console.log("**SessionId==", data);
                        _this.SessionId = data;
                    });
                    this.storage.get("Response").then(function (data) {
                        console.log("login_token==", data);
                        _this.Response = data;
                    });
                    // this.storage.get('SessionId').then((data)=>{
                    //   console.log('SessionId==',data );
                    //   this.SessionId=data;
                    //   this.sessiionurl=this.url+'?sid='+this.SessionId+'&res='+this.Response;
                    //   console.log('final url==',this.sessiionurl );
                    //   this.showUrl(this.sessiionurl);
                    // });
                    console.log(data.url + "?sid=" + this.SessionId + "&res=" + encodeURIComponent(this.Response));
                    var browser = this.iab.create(data.url + "?sid=" + this.SessionId + "&res=" + encodeURIComponent(this.Response), "_blank", this.options);
                }
                else if (data.url == 'romania_day1_instructions') {
                    this.navCtrl.push('FirstDayInstructionPage', { 'data': data });
                }
                else {
                    this.navCtrl.push("GotonewPage", {
                        data: data.url,
                        title: data.title,
                        group_name: data.group_name
                    });
                }
            }
            else {
                this.navCtrl.push("UrllistPage", { grpid: grpid, title: data.title });
            }
        }
        if (data.status == "disable") {
            this.alertfunction(data.message);
        }
    };
    OnboardingFormsPage.prototype.alertfunction = function (msg) {
        var alert = this.alertCtrl.create({
            // title: 'SIGNOUT!',
            message: msg,
            enableBackdropDismiss: true,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        // this.signoutUserFun();
                        // this.gothroughalertnextques();
                    }
                },
            ]
        });
        alert.present();
    };
    OnboardingFormsPage.prototype.ionViewWillEnter = function () {
        this.getOnBoardListData();
    };
    OnboardingFormsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-onboarding-forms',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/onboarding-forms/onboarding-forms.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-card *ngIf="allData" padding margin-bottom class="relativeDiv overFlowVisible">\n        <ion-row>\n          <ion-col col-3></ion-col>\n          <ion-col col-5></ion-col>\n          <ion-col col-4>\n            <ion-row>\n              <ion-col col-5>\n                <!-- <p class="fontsize">Progress</p> -->\n              </ion-col>\n              <ion-col col-7 >\n                <p class="fontsize">\n                  Status\n                </p>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n        <div class="learningList">\n          <div>\n              <div *ngFor="let data of allData ; let i = index" (click)="gotourllist(data.group_id,data)" class="tint">\n            <!-- <div *ngFor="let data of allData ; let i = index"> -->\n              <ion-row class="relativeDiv" margin-bottom style="background-image:url(\'assets/imgs/bg/listbg.png\');background-size:cover;">\n                <ion-col col-3 no-padding class="paddbottom0">\n                  <!-- <img src="assets/imgs/quizicon.png" class="absoluteDiv" /> -->\n                  <img srcset="{{data.bg_image}}" src="../../assets/watermark/watermark.png" class="absoluteDiv" />\n                </ion-col>\n                <ion-col col-6 class="centerDataInDiv paddbottom0">\n                  <p class="mt-10 courseTitle">{{data.title}}</p>\n                </ion-col>\n                <ion-col col-3 >\n                    <div class="cntr" >\n                        <img style="width: 24px;\n                        height: 24px;" srcset="{{data.icon}}" src="../../assets/watermark/watermark.png" class="iconcss" />\n                    </div>\n\n\n\n                  <!-- <ion-row>\n             \n                    <ion-col col-12 > -->\n                      <!-- <p *ngIf="data?.status==\'enable\'" class="martop">\n                        <ion-icon name="time" class="pendingIcon" ></ion-icon>\n                      </p>\n\n                      <p *ngIf="data?.status==\'disable\'" class="martop">\n                          <ion-icon style="font-size: 25px;color:#4c2648;" name="ios-lock-outline"></ion-icon>\n                      </p>\n                      <p *ngIf="data?.status==\'complete\'">\n                          <ion-icon   name="checkmark-circle-outline" class="approvedIcon"></ion-icon>\n                      </p>  \n                       -->\n              \n                    \n\n\n                      <!-- <p  *ngIf="data?.status==\'rejected\'">\n                          <ion-icon name="ios-alert-outline" class="rejectedIcon fw" (tap)="showRejectionResigion(data.remarks)" ></ion-icon>         \n                      </p>     -->\n                    <!-- </ion-col>\n                  </ion-row> -->\n    \n                </ion-col>\n              </ion-row>\n    \n            </div>\n          </div>\n    \n        </div>\n        <br>\n        <br>\n        <!-- <div class="btndiv" (click)="gotourllist(data.group_id)">\n          <br>\n          <button ion-button class="btn" round>submit</button>\n        </div> -->\n      </ion-card>\n\n      <div *ngIf="!allData">\n        <img  src="../../assets/imgs/skelton/onboardingform.png" class="textSkelton" />\n      </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/onboarding-forms/onboarding-forms.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], OnboardingFormsPage);
    return OnboardingFormsPage;
}());

//# sourceMappingURL=onboarding-forms.js.map

/***/ }),

/***/ 825:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingFormsPageModule", function() { return OnboardingFormsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__onboarding_forms__ = __webpack_require__(1153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_circle_progress__ = __webpack_require__(372);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OnboardingFormsPageModule = /** @class */ (function () {
    function OnboardingFormsPageModule() {
    }
    OnboardingFormsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__onboarding_forms__["a" /* OnboardingFormsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__onboarding_forms__["a" /* OnboardingFormsPage */]), __WEBPACK_IMPORTED_MODULE_3_ng_circle_progress__["a" /* NgCircleProgressModule */]
            ],
        })
    ], OnboardingFormsPageModule);
    return OnboardingFormsPageModule;
}());

//# sourceMappingURL=onboarding-forms.module.js.map

/***/ })

});
//# sourceMappingURL=89.js.map
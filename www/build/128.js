webpackJsonp([128],{

/***/ 1033:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackgroundcheckPage; });
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




var BackgroundcheckPage = /** @class */ (function () {
    function BackgroundcheckPage(navCtrl, navParams, alertCtrl, platform, toastCtrl, storage, apiServices) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.apiServices = apiServices;
        this.title = this.navParams.get('title');
        this.formid = this.navParams.get('formid');
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
            console.log(' employeeId== ', _this.employeeId);
        });
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
        });
        // this.backgroundapi();
    }
    BackgroundcheckPage.prototype.backgroundapi = function () {
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
                "form_id": _this.formid
            };
            _this.apiServices.formsublist(apiKey, _this.login_token)
                .subscribe(function (res) {
                // this.apiServices.urllist(apiKey,this.token).then((result) => { 
                console.log('', res);
                if (res.success == 1) {
                    _this.datalength = res.data.length - 1;
                    console.log('datalength', _this.datalength);
                    // this.showbutton=res.data[this.datalength].admin_status;
                    // console.log('showbutton', this.showbutton);
                    _this.allData = res.data;
                    console.log('succ', _this.allData);
                }
                else {
                    _this.allData = [];
                    _this.apiMessage(res.message);
                }
            }, function (err) {
                console.log('err== ', err);
                _this.apiMessage(err);
            });
        });
    };
    BackgroundcheckPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    BackgroundcheckPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BackgroundcheckPage');
    };
    BackgroundcheckPage.prototype.subcategoryiframe = function (index, allbackcheckdata) {
        // this.employeeId
        if (allbackcheckdata[index].type == '1' && allbackcheckdata[index].type == 1) {
            this.url = allbackcheckdata[index].flag;
            console.log("this.iframeurlllll", this.url);
            if (this.url == undefined || this.url == '') {
                this.msg = 'there is no Url';
                this.showRejectionResigion(this.msg);
            }
            else {
                this.iframeurl = this.url + '?' + this.employeeId + '';
                console.log("this.iframe", this.iframeurl);
                if (allbackcheckdata[index].form_name == 'Family Details') {
                    this.navCtrl.push('FamilyandemergencycontactPage');
                }
                else if (allbackcheckdata[index].form_name == 'Basic Details') {
                    this.navCtrl.push('BasicDetailsPage');
                }
                else if (allbackcheckdata[index].form_name == 'Nominee(s)') {
                    this.navCtrl.push('NomineesPage');
                }
                else {
                    this.navCtrl.push('GenralInformationPage');
                }
                // this.navCtrl.push('BackcheckiframePage',{'url':this.iframeurl,'title':allbackcheckdata[index].form_name});
            }
            // this.navCtrl.push('FormsinstructionPage',{'url':this.iframeurl,'title':allbackcheckdata[index].form_name,
            // 'instruction':allbackcheckdata[index].instruction});  
        }
        if (allbackcheckdata[index].type == '2' && allbackcheckdata[index].type == 2) {
            if (allbackcheckdata[index].flag == 'LTA') {
                console.log('allbackcheckdata[index]', allbackcheckdata[index]);
                this.navCtrl.push('TravelassitancePage', { 'title': allbackcheckdata[index].form_name,
                    'flag': allbackcheckdata[index].flag, 'data': allbackcheckdata[index] });
            }
            if (allbackcheckdata[index].flag == 'NPS') {
                this.navCtrl.push('PansionschemePage', { 'title': allbackcheckdata[index].form_name,
                    'flag': allbackcheckdata[index].flag, 'data': allbackcheckdata[index] });
            }
            if (allbackcheckdata[index].flag == 'Sodexo') {
                this.navCtrl.push('SodexomealvoucherPage', { 'title': allbackcheckdata[index].form_name,
                    'flag': allbackcheckdata[index].flag, 'data': allbackcheckdata[index] });
                // this.navCtrl.push('CarhirePage',{'title':allbackcheckdata[index].form_name,
                // 'flag':allbackcheckdata[index].flag,'data':allbackcheckdata[index]});
            }
            if (allbackcheckdata[index].flag == 'salary_summary') {
                this.navCtrl.push('SavingpreferencesPage', { 'title': allbackcheckdata[index].form_name,
                    'flag': allbackcheckdata[index].flag });
            }
        }
        if (allbackcheckdata[index].flag == 'bank_detail') {
            this.navCtrl.push('ChoiceofbankaccountPage', { 'title': allbackcheckdata[index].form_name,
                'flag': allbackcheckdata[index].flag });
        }
        if (allbackcheckdata[index].flag == 'carhire') {
            this.navCtrl.push('CarhirePage', { 'title': allbackcheckdata[index].form_name,
                'flag': allbackcheckdata[index].flag, 'data': allbackcheckdata[index] });
        }
    };
    BackgroundcheckPage.prototype.ionViewWillEnter = function () {
        this.backgroundapi();
    };
    BackgroundcheckPage.prototype.showRejectionResigion = function (msg) {
        console.log('msg', msg);
        this.alertfunction(msg);
    };
    BackgroundcheckPage.prototype.alertfunction = function (msg) {
        var alert = this.alertCtrl.create({
            // title: 'SIGNOUT!',
            message: msg,
            // enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        // this.gothroughalertnextques();
                    }
                },
            ]
        });
        alert.present();
    };
    BackgroundcheckPage.prototype.gotourllist = function () {
        this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length() - 3));
    };
    BackgroundcheckPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-backgroundcheck',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/backgroundcheck/backgroundcheck.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n\n<!-- <div ></div> -->\n    <ion-card *ngIf="allData" padding margin-bottom class="relativeDiv overFlowVisible">\n        <ion-row>\n          <ion-col col-3></ion-col>\n          <ion-col col-5></ion-col>\n          <ion-col col-4>\n            <ion-row>\n              <ion-col col-6>\n                <!-- <p class="fontsize">Progress</p> -->\n              </ion-col>\n              <ion-col col-6>\n                <p class="fontsize">\n                  <!-- Admin Approvel -->\n                  <!-- Status -->\n                </p>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n        <div class="learningList">\n          <div>\n            <div *ngFor="let data of allData ; let i = index">\n              <ion-row class="relativeDiv" margin-bottom style="background-image:url(\'assets/imgs/bg/listbg.png\');background-size:cover;"\n                (click)="subcategoryiframe(i,allData)">\n                <ion-col col-3 no-padding class="paddbottom0">\n                  <img src="assets/imgs/quizicon.png" class="absoluteDiv" />\n                </ion-col>\n                <ion-col col-6 class="centerDataInDiv paddbottom0">\n                  <p class="mt-10 courseTitle">{{data.form_name}}</p>\n                </ion-col>\n                <ion-col col-3 class="centerData paddbottom0">\n                  <ion-row>\n                    <ion-col col-6 class="padding0 paddbottom0">\n                      <!-- <div class="positionRelative">\n                        <div style="font-size: 20px;" class="progress-wrapper">\n                          <circle-progress [percent]="24" [unitsFontSize]="8" [radius]="15" [outerStrokeWidth]="2" [showTitle]=true [showSubtitle]=false\n                            [showUnits]=false [innerStrokeWidth]="2" [outerStrokeColor]="\'#542e56\'" [innerStrokeColor]="\'#7b4b7d\'"\n                            [animation]="true" [animationDuration]="300"></circle-progress>\n                        </div>\n                      </div>  -->\n    \n                      <!-- <p><ion-icon name="time" class="pendingIcon"></ion-icon></p>   -->\n                    </ion-col>\n                    <ion-col col-6 class="marginauto paddbottom0">\n                      <!-- <p class="martop">\n                        <ion-icon name="time" class="pendingIcon"></ion-icon>\n                      </p>\n                      <p>\n        <ion-icon name="checkmark-circle-outline" class="approvedIcon"></ion-icon>\n         </p>        \n                      <p>\n              <ion-icon name="ios-alert-outline" class="rejectedIcon fw" (tap)="showRejectionResigion(data)" ></ion-icon>         \n          </p>     -->\n\n\n\n           <p *ngIf="data?.admin_status==\'pending\'" class="martop">\n              <ion-icon name="time" class="pendingIcon" ></ion-icon>\n            </p>\n            <p *ngIf="data?.admin_status==\'approved\'">\n                <ion-icon  name="checkmark-circle-outline" class="approvedIcon"></ion-icon>\n            </p>        \n            <p  *ngIf="data?.admin_status==\'rejected\'">\n                <ion-icon name="ios-alert-outline" class="rejectedIcon fw" (tap)="showRejectionResigion(data.remarks)" ></ion-icon>         \n            </p>  \n                    </ion-col>\n                  </ion-row>\n    \n                </ion-col>\n              </ion-row>\n    \n            </div>\n            <!-- {{data[datalength]}} -->\n            <!-- {{allData[datalength].admin_status}} -->\n          </div>\n        <div *ngIf="allData[datalength].admin_status==\'approved\'" class="btndiv" (click)="gotourllist()">\n          <br>\n          <button ion-button class="btn" round>Next</button>\n        </div>\n        </div>\n        <br>\n        <br>\n        <!-- <div class="btndiv" (click)="gotourllist(data.group_id)">\n          <br>\n          <button ion-button class="btn" round>submit</button>\n        </div> -->\n      </ion-card>\n      <br>\n      <br>\n\n      <div *ngIf="!allData">\n        <ion-row>\n          <ion-col>\n              <img  src="../../assets/imgs/skelton/backcheck.png" class="textSkelton"style="width:100%" />\n          </ion-col>\n        </ion-row>\n      </div>\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/backgroundcheck/backgroundcheck.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */]])
    ], BackgroundcheckPage);
    return BackgroundcheckPage;
}());

//# sourceMappingURL=backgroundcheck.js.map

/***/ }),

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundcheckPageModule", function() { return BackgroundcheckPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__backgroundcheck__ = __webpack_require__(1033);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_circle_progress__ = __webpack_require__(372);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BackgroundcheckPageModule = /** @class */ (function () {
    function BackgroundcheckPageModule() {
    }
    BackgroundcheckPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__backgroundcheck__["a" /* BackgroundcheckPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__backgroundcheck__["a" /* BackgroundcheckPage */]), __WEBPACK_IMPORTED_MODULE_3_ng_circle_progress__["a" /* NgCircleProgressModule */]
            ],
        })
    ], BackgroundcheckPageModule);
    return BackgroundcheckPageModule;
}());

//# sourceMappingURL=backgroundcheck.module.js.map

/***/ })

});
//# sourceMappingURL=128.js.map
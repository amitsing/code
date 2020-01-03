webpackJsonp([53],{

/***/ 1177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TakeMobileNumberPage; });
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




/**
 * Generated class for the TakeMobileNumberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TakeMobileNumberPage = /** @class */ (function () {
    function TakeMobileNumberPage(navCtrl, navParams, menu, alertCtrl, platform, toastCtrl, storage, apiServices) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.apiServices = apiServices;
        this.btnText = 'Next';
        this.skipbtnText = 'Skip';
        this.btnEnable = false;
        this.myselectedCountryCode = '';
        this.contactNum = '';
        this.tanckey = this.navParams.get('tanckey');
        this.profile_pic_upload = this.navParams.get('profile_pic_upload');
        this.show_skip = this.navParams.get('show_skip');
        this.profilekey = this.navParams.get('profilekey');
        this.storage.get('showOnBoard').then(function (data) {
            console.log('showOnBoard value is111==', data);
            _this.employee_type = data;
        });
    }
    TakeMobileNumberPage.prototype.ionViewDidLoad = function () {
        // this.countryCode='+94';
        // this.optionsFn(this.countryCode);
        console.log('ionViewDidLoad TakeMobileNumberPage');
        // this.countryCodeList=['+91', '+92', '+93', '+94', '+95'];
        this.getDetails();
    };
    TakeMobileNumberPage.prototype.checkcode = function (contry_Code) {
        console.log(contry_Code);
        var c_cod = ' ' + contry_Code;
        if (c_cod.trim().length > 0 && c_cod.trim().length < 4) {
            // this.btnEnable=true;
            this.contry_Code = contry_Code;
            console.log("c code", this.contry_Code);
        }
        else if (c_cod.trim().length == 0) { }
        else if (c_cod.trim().length >= 4) {
            this.phoneNUmber.setFocus();
        }
        if (this.contry_Code != null && this.contry_Code != '' && this.contactNum != null && this.contactNum != '' && this.contactNum.length >= 10) {
            this.btnEnable = true;
        }
    };
    TakeMobileNumberPage.prototype.checkContact = function (contactnumber) {
        console.log('contactnumber', contactnumber);
        this.contactNum = contactnumber;
        var num = ' ' + contactnumber;
        if (num.trim().length >= 1) {
            if (this.myselectedCountryCode != '') {
                this.contactNum = contactnumber;
                this.btnEnable = true;
            }
            else {
                //next button disable
                // this.btnEnable=false;
            }
            if (this.contry_Code != null && this.contry_Code != '' && this.contactNum != null && this.contactNum != '' && this.contactNum.length >= 10) {
                this.btnEnable = true;
            }
        }
        else {
            //next button disable
            this.btnEnable = false;
        }
    };
    TakeMobileNumberPage.prototype.optionsFn = function (code) {
        console.log('country code', code);
        this.myselectedCountryCode = code;
        var num = ' ' + this.contactNum;
        if (num.trim().length >= 1) {
            //next button disable
            // this.btnEnable=true;
        }
        else {
            //next button disable
            // this.btnEnable=false;
        }
    };
    TakeMobileNumberPage.prototype.getDetails = function () {
        var _this = this;
        // this.navCtrl.push('FillOtpPage');
        this.storage.get('showOnBoard').then(function (data) {
            console.log('showOnBoard value is111==', data);
            _this.employee_type = data;
        });
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
                "user_type": _this.employee_type,
            };
            _this.apiServices.getContactInfo(apiKey, _this.login_token)
                .subscribe(function (res) {
                console.log('getdetails', res);
                if (res.success == 1) {
                    //country code list and user number if have         
                    // this.countryCodeList=res.all_country_code;
                    console.log('countryCodeList', _this.countryCodeList);
                    // if(res.data.validate_mobile!=0){
                    //  this.contactNum=res.data.validate_mobile;
                    //         }
                    _this.checkContact(res.data.contact);
                    // this.countryCode=res.data.country_code[0];
                    _this.checkcode(res.data.country_code);
                    _this.optionsFn(_this.countryCode);
                }
                else {
                    _this.apiMessage(res.message);
                    // this.countryCodeList=res.all_country_code;
                    console.log('countryCodeList else', _this.countryCodeList);
                }
            }, function (err) {
                console.log('err== ', err);
                _this.apiMessage(err);
            });
        });
    };
    TakeMobileNumberPage.prototype.submitNumber = function () {
        // this.navCtrl.push('FillOtpPage');
        var _this = this;
        if (this.contactNum == '' || this.contactNum == undefined) {
            this.btnEnable = false;
        }
        this.btnText = 'Please wait...';
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
            if (_this.profilekey == '1') {
                _this.apiKey = {
                    "client_id": _this.apiServices.clientId,
                    "employee_id": _this.employeeId,
                    "device": _this.apiServices.device,
                    "device_id": _this.deviceId,
                    "app_version": _this.apiServices.appVersion,
                    "user_type": _this.employee_type,
                    "validate_mobile": _this.contactNum,
                    // "tc_id":this.tanckey,
                    "country_code": _this.contry_Code,
                    "flag": 'profile'
                };
            }
            else {
                _this.apiKey = {
                    "client_id": _this.apiServices.clientId,
                    "employee_id": _this.employeeId,
                    "device": _this.apiServices.device,
                    "device_id": _this.deviceId,
                    "app_version": _this.apiServices.appVersion,
                    "user_type": _this.employee_type,
                    "validate_mobile": _this.contactNum,
                    "tc_id": _this.tanckey,
                    "country_code": _this.contry_Code,
                    "flag": 'tc'
                };
            }
            _this.apiServices.submitMobileNumber(_this.apiKey, _this.login_token)
                .subscribe(function (res) {
                console.log('otp', res);
                if (res.success == 1) {
                    if (_this.profilekey == '1') {
                        _this.tanckey = res.auto_id;
                    }
                    _this.navCtrl.push('FillOtpPage', { 'mobileNumber': _this.contactNum, 'tanckey': _this.tanckey, 'county_code': _this.contry_Code, 'profilekey': _this.profilekey,
                        'profile_pic_upload': _this.profile_pic_upload, 'show_skip': _this.show_skip });
                    _this.apiMessage(res.message);
                    _this.btnText = 'Next';
                }
                else {
                    _this.apiMessage(res.message);
                    _this.btnText = 'Next';
                    _this.btnEnable = true;
                }
            }, function (err) {
                console.log('err== ', err);
                _this.apiMessage(err);
            });
        });
    };
    TakeMobileNumberPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    TakeMobileNumberPage.prototype.ionViewWillEnter = function () {
        this.menu.swipeEnable(false);
    };
    TakeMobileNumberPage.prototype.showeAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            // title: 'App termination',
            message: 'Are you sure you want to skip?',
            buttons: [{
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Application exit prevented!');
                    }
                }, {
                    text: 'Ok',
                    handler: function () {
                        _this.skiptc(); // Close this application
                    }
                }]
        });
        alert.present();
    };
    TakeMobileNumberPage.prototype.skiptc = function () {
        // if(this.contactNum=='' || this.contactNum==undefined){
        //   this.btnEnable=false;
        // }
        var _this = this;
        // this.skipbtnText='Please wait...';
        this.storage.get('showOnBoard').then(function (data) {
            console.log('showOnBoard value is111==', data);
            _this.employee_type = data;
        });
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
            _this.apiKey = {
                "client_id": _this.apiServices.clientId,
                "employee_id": _this.employeeId,
                "device": _this.apiServices.device,
                "device_id": _this.deviceId,
                "app_version": _this.apiServices.appVersion,
                "user_type": _this.employee_type,
                "tc_id": _this.tanckey,
            };
            _this.apiServices.skiptc(_this.apiKey, _this.login_token)
                .subscribe(function (res) {
                console.log('otp', res);
                if (res.success == 1) {
                    console.log('otp', res);
                    _this.storage.set('tncView', 1);
                    if (_this.employee_type == 'Employee') {
                        _this.storage.get('welcome_aboard_applicable').then(function (data) {
                            if (data == 1) {
                                //welcom onboard is not submitting therefor go to welcome on-board page
                                _this.navCtrl.push('AplicantwelcomePage');
                            }
                            else {
                                if (_this.profile_pic_upload == '0') {
                                    _this.storage.set('profile_pic_upload', _this.profile_pic_upload);
                                    _this.navCtrl.setRoot('FirstimguploadPage');
                                }
                                else {
                                    //welcom onboard is already submitted
                                    _this.storage.get('community_tag_show').then(function (commTag) {
                                        if (commTag == 1) {
                                            // go to community tag select page
                                            _this.navCtrl.setRoot('CatgoriesPage');
                                        }
                                        else {
                                            //community tag has selected
                                            _this.navCtrl.setRoot('TabsPage');
                                        }
                                    });
                                }
                            }
                        });
                    }
                    else {
                        _this.storage.get('welcome_aboard_applicable').then(function (data) {
                            console.log('employeeId==', data);
                            _this.welcome_aboard_applicable = data;
                            if (_this.welcome_aboard_applicable == 1) {
                                _this.navCtrl.push('AplicantwelcomePage');
                            }
                            else {
                                _this.storage.get('walkthrough').then(function (data) {
                                    console.log('employeeId==', data);
                                    _this.walkthrough = data;
                                    if (_this.walkthrough == '0') {
                                        _this.navCtrl.setRoot('WalkthroughScreenPage');
                                    }
                                    else {
                                        _this.navCtrl.setRoot('TabsPage');
                                    }
                                });
                            }
                        });
                    }
                }
                else {
                    _this.apiMessage(res.message);
                    _this.btnText = 'Next';
                    _this.btnEnable = true;
                }
            }, function (err) {
                console.log('err== ', err);
                _this.apiMessage(err);
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('phoneNUmber'),
        __metadata("design:type", Object)
    ], TakeMobileNumberPage.prototype, "phoneNUmber", void 0);
    TakeMobileNumberPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-take-mobile-number',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/take-mobile-number/take-mobile-number.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Mobile Number</ion-title>\n  </ion-navbar>\n </ion-header>\n <ion-content padding class="themeBg">\n  <div class="customCardView">\n    <ion-row>\n      <ion-col>\n        <img src="../../assets/icon/phone.png"class="mobIcon centerDataInDiv"/>\n          <p class="heading" text-center>Please enter your mobile number to continue.</p>\n        </ion-col>\n    </ion-row>\n    <!-- <ion-row>\n      <ion-col col-3>\n        <ion-row no-padding>\n            <p class="label">Country Code <sup style="color:#e22550"> *</sup> </p>\n          <ion-col col-3 no-padding> <p class="plus">+</p></ion-col>\n        <ion-col col-9 no-padding><ion-input type="number" [value]="contry_Code"  class="bodBottom" [(ngModel)]="contry_Code"  (ngModelChange)="checkcode(contry_Code)"></ion-input> </ion-col>\n        </ion-row>\n      </ion-col>\n          <ion-col col-9>\n              <p class="label">Enter your Mobile Number</p>\n             <ion-input #phoneNUmber type="number" [value]="contactNum" [(ngModel)]="contactNum" (ngModelChange)="checkContact(contactNum)" class="bodBottom"></ion-input>\n            </ion-col>\n            <ion-col col-12>\n                <p class="advice"> <sup style="color:#e22550"> *</sup>`Do not add "+" or "00" before country code. </p>\n            </ion-col>\n    </ion-row> -->\n <ion-row>\n  <ion-col col-12>\n <!-- this is for label -->\n <ion-row>\n  <ion-col col-4>\n    <p class="label">Country Code <sup style="color:#e22550"> *</sup> </p>\n  </ion-col>\n  <ion-col col-8>\n    <p class="label">Enter your Mobile Number</p>\n  </ion-col>\n </ion-row>\n <!-- this is for textfield -->\n <ion-row>\n  <ion-col col-1>\n    <p class="plus">+</p>\n  </ion-col>\n  <ion-col col-3>\n    <ion-input type="number" [value]="contry_Code"  class="bodBottom" [(ngModel)]="contry_Code"  (ngModelChange)="checkcode(contry_Code)"></ion-input>\n  </ion-col>\n  <ion-col col-8>\n    <ion-input #phoneNUmber type="number" [value]="contactNum" [(ngModel)]="contactNum" (ngModelChange)="checkContact(contactNum)" class="bodBottom"></ion-input>\n  </ion-col>\n </ion-row>\n <ion-row>\n  <ion-col col-12>\n    <p class="advice"> <sup style="color:#e22550"> *</sup>Do not add "+" or "00" before country code. </p><br>\n    <p class="advice">\n      <sup style="color:#e22550"> *</sup>Charges may apply for incoming messages as per your telecom service provider\n    </p>\n </ion-col>\n </ion-row>\n  </ion-col>\n </ion-row>\n    <ion-row>\n      <!-- <ion-col col-6 style="text-align:end;"><br>\n\n        <div *ngIf="profilekey==\'0\' && employee_type==\'Employee\'">\n          <button ion-button  class="btn centerDataInDiv"  tappable (click)="skiptc()">{{skipbtnText}}</button>\n        </div>\n\n\n      \n      </ion-col> -->\n\n      <ion-col><br>\n        <div>\n          <button ion-button  [disabled]="btnEnable==false" class="btn centerDataInDiv" [ngClass]="{\'diabaleBtn\': btnEnable==false}" tappable (click)="submitNumber()">{{btnText}}</button>\n        </div>\n      </ion-col>\n\n    </ion-row> <br><br><br>\n\n  <div *ngIf="profilekey==\'0\' && show_skip==1" >\n    <!-- *ngIf="profilekey==\'0\' && employee_type==\'Employee\'"  <button ion-button  class="btn centerDataInDiv"  tappable (click)="skiptc()">{{skipbtnText}}</button> -->\n\n    <p class="skipcss" (click)="showeAlert()">{{skipbtnText}}</p>\n  </div>\n  </div>\n \n\n\n  <!-- <div *ngIf="!countryCodeList" >\n    <img style="width:100%;"  src="../../assets/imgs/skelton/mobileno.png" class="textSkelton" />\n  </div> -->\n </ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/take-mobile-number/take-mobile-number.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */]])
    ], TakeMobileNumberPage);
    return TakeMobileNumberPage;
}());

//# sourceMappingURL=take-mobile-number.js.map

/***/ }),

/***/ 849:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TakeMobileNumberPageModule", function() { return TakeMobileNumberPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__take_mobile_number__ = __webpack_require__(1177);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TakeMobileNumberPageModule = /** @class */ (function () {
    function TakeMobileNumberPageModule() {
    }
    TakeMobileNumberPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__take_mobile_number__["a" /* TakeMobileNumberPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__take_mobile_number__["a" /* TakeMobileNumberPage */]),
            ],
        })
    ], TakeMobileNumberPageModule);
    return TakeMobileNumberPageModule;
}());

//# sourceMappingURL=take-mobile-number.module.js.map

/***/ })

});
//# sourceMappingURL=53.js.map
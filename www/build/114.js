webpackJsonp([114],{

/***/ 1053:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FillOtpPage; });
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




var FillOtpPage = /** @class */ (function () {
    function FillOtpPage(navCtrl, navParams, alertCtrl, platform, menu, toastCtrl, storage, apiServices) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.apiServices = apiServices;
        this.myotp4 = '';
        this.myotp3 = '';
        this.myotp2 = '';
        this.myotp1 = '';
        this.mobileNumer = '';
        this.resendOTPText = "Resend";
        this.resendBtnDisable = false;
        this.submitBtnText = 'Submit';
        this.submitBtnDisable = false;
        this.skipbtnText = 'skip';
        this.mobileNumer = this.navParams.get('mobileNumber');
        this.tanckey = this.navParams.get('tanckey');
        this.show_skip = this.navParams.get('show_skip');
        this.county_code = this.navParams.get('county_code');
        this.profilekey = this.navParams.get('profilekey');
        this.profile_pic_upload = this.navParams.get('profile_pic_upload');
        console.log('this.mobileNumer==', this.mobileNumer);
        this.storage.get('showOnBoard').then(function (data) {
            console.log('showOnBoard value is111==', data);
            _this.employee_type = data;
        });
    }
    FillOtpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FillOtpPage==');
        this.mobileNumer = this.navParams.get('mobileNumber');
    };
    FillOtpPage.prototype.resendOTP = function () {
        // this.navCtrl.push('FillOtpPage');
        var _this = this;
        this.resendOTPText = "Please wait...";
        this.resendBtnDisable = true;
        // this.navCtrl.push('FillOtpPage');
        // this.btnEnable=false;
        // this.btnText='Please wait...';
        this.mobileNumer = this.navParams.get('mobileNumber');
        console.log('mobile number==', this.mobileNumer);
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
            if (_this.profilekey == '1') {
                _this.apiKey = {
                    "client_id": _this.apiServices.clientId,
                    "employee_id": _this.employeeId,
                    "device": _this.apiServices.device,
                    "device_id": _this.deviceId,
                    "app_version": _this.apiServices.appVersion,
                    "user_type": _this.employee_type,
                    "validate_mobile": _this.mobileNumer,
                    "tc_id": _this.tanckey,
                    "country_code": _this.county_code,
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
                    "validate_mobile": _this.mobileNumer,
                    "tc_id": _this.tanckey,
                    "country_code": _this.county_code,
                    "flag": 'tc'
                };
            }
            _this.apiServices.submitMobileNumber(_this.apiKey, _this.login_token)
                .subscribe(function (res) {
                console.log('otp', res);
                if (res.success == 1) {
                    // this.navCtrl.push('FillOtpPage'); 
                    _this.apiMessage(res.message);
                    _this.resendOTPText = "Resend";
                    _this.resendBtnDisable = false;
                }
                else {
                    _this.apiMessage(res.message);
                    _this.resendOTPText = "Resend";
                    _this.resendBtnDisable = false;
                }
            }, function (err) {
                console.log('err== ', err);
                _this.apiMessage(err);
            });
        });
    };
    FillOtpPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    FillOtpPage.prototype.moveFocus = function (nextElement, val, index) {
        if (index < 4) {
            if (this.myotp2 == undefined || this.myotp2 == '') {
                nextElement.setFocus();
            }
            else if (this.myotp3 == undefined || this.myotp3 == '') {
                nextElement.setFocus();
            }
            else if (this.myotp4 == undefined || this.myotp4 == '') {
                nextElement.setFocus();
            }
        }
        else {
        }
    };
    FillOtpPage.prototype.checkFocus = function (index) {
        console.log('********', index);
        if (index == 1) {
            this.myotp1 = '';
        }
        else if (index == 2) {
            this.myotp2 = '';
        }
        else if (index == 3) {
            this.myotp3 = '';
        }
        else if (index == 4) {
            this.myotp4 = '';
        }
    };
    FillOtpPage.prototype.submitOtp = function () {
        var _this = this;
        this.submitBtnText = 'Please wait...';
        this.submitBtnDisable = true;
        if (this.myotp1 == '' || this.myotp2 == '' || this.myotp3 == '' || this.myotp4 == '') {
            // show alert of mandatory field
            this.apiMessage('all fields are mandatory');
            this.submitBtnText = 'Submit';
            this.submitBtnDisable = false;
        }
        else {
            var finalOTP_1 = this.myotp1 + '' + this.myotp2 + '' + this.myotp3 + '' + this.myotp4;
            //call send otp api
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
                if (_this.profilekey == '1') {
                    _this.apiKey = {
                        "client_id": _this.apiServices.clientId,
                        "employee_id": _this.employeeId,
                        "device": _this.apiServices.device,
                        "device_id": _this.deviceId,
                        "app_version": _this.apiServices.appVersion,
                        "user_type": _this.employee_type,
                        // "otp_server": finalOTP,
                        "otp_user": finalOTP_1,
                        "tc_id": _this.tanckey,
                        "validate_mobile": _this.mobileNumer,
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
                        // "otp_server": finalOTP,
                        "otp_user": finalOTP_1,
                        "tc_id": _this.tanckey,
                        "validate_mobile": _this.mobileNumer,
                        "flag": 'tc'
                    };
                }
                // let apiKey = {
                //   "client_id": this.apiServices.clientId,
                //   "employee_id": this.employeeId,
                //   "device": this.apiServices.device,
                //   "device_id": this.deviceId,
                //   "app_version": this.apiServices.appVersion,
                //   "user_type": this.employee_type,
                //   "otp_user": finalOTP,
                //   "tc_id":this.tanckey,
                //   "validate_mobile": this.mobileNumer
                // };
                _this.apiServices.submitOTP(_this.apiKey, _this.login_token)
                    .subscribe(function (res) {
                    console.log('otp', res);
                    if (res.success == 1) {
                        _this.storage.set('tncView', 1);
                        if (_this.employee_type == 'Guest') {
                            if (_this.profilekey == '1') {
                                _this.navCtrl.push('UpdatemobilenoPage');
                            }
                            else {
                                _this.storage.get('welcome_aboard_applicable').then(function (data) {
                                    if (data == 1) {
                                        //welcom onboard is not submitting therefor go to welcome on-board page
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
                            if (_this.profilekey == '1') {
                                _this.navCtrl.push('UpdatemobilenoPage');
                            }
                            else {
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
                        }
                        // this.storage.get('welcome_aboard_applicable').then((data) => {
                        //   console.log('showOnBoard value is111==', data);
                        //   if (data == 1) {
                        //     // this.navCtrl.push('AplicantwelcomePage');
                        //   } else {
                        //     // this.navCtrl.setRoot('TabsPage');
                        //     this.navCtrl.setRoot('WalkthroughScreenPage');
                        //   }
                        // })
                        // this.storage.set('tncView', res.t_and_c_accept);
                        _this.submitBtnText = 'Submit';
                        _this.submitBtnDisable = false;
                    }
                    else {
                        _this.apiMessage(res.message);
                        _this.submitBtnText = 'Submit';
                        _this.submitBtnDisable = false;
                    }
                }, function (err) {
                    console.log('err== ', err);
                    _this.apiMessage(err);
                });
            });
        }
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
    FillOtpPage.prototype.ionViewWillEnter = function () {
        this.menu.swipeEnable(false);
    };
    FillOtpPage.prototype.showeAlert = function () {
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
    FillOtpPage.prototype.skiptc = function () {
        // this.skipbtnText='Please wait...';
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
                    _this.storage.set('tncView', 1);
                    if (_this.employee_type == 'Guest') {
                        if (_this.profilekey == '1') {
                            _this.navCtrl.push('UpdatemobilenoPage');
                        }
                        else {
                            _this.storage.get('welcome_aboard_applicable').then(function (data) {
                                if (data == 1) {
                                    //welcom onboard is not submitting therefor go to welcome on-board page
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
                        if (_this.profilekey == '1') {
                            _this.navCtrl.push('UpdatemobilenoPage');
                        }
                        else {
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
                    }
                }
                else {
                    _this.apiMessage(res.message);
                    // this.btnText='Next'; 
                    // this.btnEnable=true;   
                }
            }, function (err) {
                console.log('err== ', err);
                _this.apiMessage(err);
            });
        });
    };
    FillOtpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fill-otp',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/fill-otp/fill-otp.html"*/'<!--\n  Generated template for the TakeMobileNumberPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Verification Code</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="themeBg">\n  <div class="customCardView">\n    <ion-row>\n      <ion-col>\n        <img src="../../assets/imgs/otpIcon.png" class="mobIcon centerDataInDiv" />\n        <p class="heading" text-center>Please enter verification code sent to your Mobile Number.</p>\n      </ion-col>\n    </ion-row>\n    <!-- <table>\n          <tr>\n            <td>\n              <ion-input type="text" #otp1 class="otp" pattern="[0-9]{6}" maxlength="1" size="1" (keyup)="moveFocus(otp2)">\n              </ion-input>\n            </td>\n            <td>\n              <ion-input type="text" #otp2 class="otp" pattern="[0-9]{6}" maxlength="1" size="1" (keyup)="moveFocus(otp3)">\n              </ion-input>\n            </td>\n            <td>\n              <ion-input type="text" #otp3 class="otp" pattern="[0-9]{6}" maxlength="1" size="1" (keyup)="moveFocus(otp4)">\n              </ion-input>\n            </td>\n            <td>\n              <ion-input type="text" #otp4 class="otp" pattern="[0-9]{6}" maxlength="1" size="1">\n              </ion-input>\n            </td>\n          </tr>\n        </table> -->\n    <ion-row>\n      <ion-col col-3>\n        <ion-input type="tel" #otp1 placeholder="*" class="bodBottom" pattern="[0-9]{6}" maxlength="1"\n        (ionFocus)="checkFocus(1)"  (keyup)="moveFocus(otp2, myotp1, \'1\')" [(ngModel)]="myotp1" ></ion-input>\n      </ion-col>\n      <ion-col col-3>\n        <ion-input type="tel" #otp2 placeholder="*" class="bodBottom" pattern="[0-9]{6}" maxlength="1"\n        (ionFocus)="checkFocus(2)" (keyup)="moveFocus(otp3, myotp2, \'2\')" [(ngModel)]="myotp2" ></ion-input>\n      </ion-col>\n      <ion-col col-3>\n        <ion-input type="tel" #otp3 class="bodBottom" pattern="[0-9]{6}" maxlength="1"\n        (ionFocus)="checkFocus(3)" placeholder="*" (keyup)="moveFocus(otp4, myotp3, \'3\')" [(ngModel)]="myotp3" ></ion-input>\n      </ion-col>\n      <ion-col col-3>\n        <ion-input type="tel" #otp4 placeholder="*" class="bodBottom" pattern="[0-9]{6}" maxlength="1"\n        (ionFocus)="checkFocus(4)" (keyup)="moveFocus(otp4, myotp4, \'4\')" [(ngModel)]="myotp4"></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <br>\n        <button ion-button [disabled]="submitBtnDisable==true" class="btn centerDataInDiv" (click)="submitOtp(myotp1,myotp2,myotp3,myotp4)">{{submitBtnText}}</button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button ion-button [disabled]="resendBtnDisable==true" clear class=" centerDataInDiv" (click)="resendOTP()">{{resendOTPText}}</button>\n      </ion-col>\n    </ion-row><br><br>\n    <div *ngIf="profilekey==\'0\' && show_skip==1">\n      <!--   <button ion-button  class="btn centerDataInDiv"  tappable (click)="skiptc()">{{skipbtnText}}</button> -->\n  \n      <p class="skipcss" (click)="showeAlert()">{{skipbtnText}}</p>\n    </div>\n\n  </div>\n  <!-- </div> -->\n</ion-content>'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/fill-otp/fill-otp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */]])
    ], FillOtpPage);
    return FillOtpPage;
}());

//# sourceMappingURL=fill-otp.js.map

/***/ }),

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FillOtpPageModule", function() { return FillOtpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fill_otp__ = __webpack_require__(1053);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FillOtpPageModule = /** @class */ (function () {
    function FillOtpPageModule() {
    }
    FillOtpPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__fill_otp__["a" /* FillOtpPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__fill_otp__["a" /* FillOtpPage */]),
            ],
        })
    ], FillOtpPageModule);
    return FillOtpPageModule;
}());

//# sourceMappingURL=fill-otp.module.js.map

/***/ })

});
//# sourceMappingURL=114.js.map
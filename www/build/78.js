webpackJsonp([78],{

/***/ 1099:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeclarationotpPage; });
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





var DeclarationotpPage = /** @class */ (function () {
    function DeclarationotpPage(alertCtrl, platform, menu, loadingCtrl, toastCtrl, storage, apiServices, navCtrl, navParams, iab) {
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
        this.myotp4 = "";
        this.myotp3 = "";
        this.myotp2 = "";
        this.myotp1 = "";
        this.mobileNumer = "";
        this.resendOTPText = "Resend";
        this.resendBtnDisable = false;
        this.submitBtnText = "Submit";
        this.submitBtnDisable = false;
        this.form_data = this.navParams.get("form_data");
        this.page_title = this.form_data.form_name;
        this.otpdata = this.navParams.get("otpdata");
        this.storage.get("login_token").then(function (data) {
            _this.login_token = data;
        });
        this.storage.get("employeeId").then(function (data) {
            _this.employeeId = data;
        });
        this.msgdata = this.navParams.get('msgdata');
    }
    DeclarationotpPage.prototype.moveFocus = function (nextElement, val, index) {
        if (index < 4) {
            if (this.myotp2 == undefined || this.myotp2 == "") {
                nextElement.setFocus();
            }
            else if (this.myotp3 == undefined || this.myotp3 == "") {
                nextElement.setFocus();
            }
            else if (this.myotp4 == undefined || this.myotp4 == "") {
                nextElement.setFocus();
            }
        }
        else {
        }
    };
    DeclarationotpPage.prototype.checkFocus = function (index) {
        console.log("********", index);
        if (index == 1) {
            this.myotp1 = "";
        }
        else if (index == 2) {
            this.myotp2 = "";
        }
        else if (index == 3) {
            this.myotp3 = "";
        }
        else if (index == 4) {
            this.myotp4 = "";
        }
    };
    DeclarationotpPage.prototype.resendOTP = function () {
        var _this = this;
        this.resendOTPText = "Please wait...";
        this.resendBtnDisable = true;
        this.commonLoader();
        //   this.dumpdata={"nationalities":this.nationalities,"selected":this.finalselect,"Details1":this.nDetails,
        // "Details2":this.fDetails}
        this.storage.get("deviceId").then(function (data) {
            _this.deviceId = data;
            var apiKey = {
                client_id: _this.apiServices.clientId,
                employee_id: _this.employeeId,
                device: _this.apiServices.device,
                device_id: _this.deviceId,
                app_version: _this.apiServices.appVersion,
                data_dump: "",
                otp_id: _this.otpdata
            };
            _this.apiServices.get_declaration_otp(apiKey, _this.login_token).subscribe(function (res) {
                console.log("tnc res==", res);
                _this.loading.dismiss();
                if (res.success == 1) {
                    console.log("succ");
                    _this.resendOTPText = "Resend";
                    _this.resendBtnDisable = false;
                }
                else {
                    _this.apiMessage(res.message);
                }
            }, function (err) {
                _this.loading.dismiss();
                console.log("err== ", err);
                _this.apiMessage(err);
            });
        });
    };
    //Common Loader:
    DeclarationotpPage.prototype.commonLoader = function () {
        this.loading = this.loadingCtrl.create({
            enableBackdropDismiss: true,
            spinner: "ios-small",
            content: "Loading data..."
        });
        this.loading.present();
    };
    DeclarationotpPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    DeclarationotpPage.prototype.submitOtp = function () {
        var _this = this;
        this.submitBtnText = "Please wait...";
        this.submitBtnDisable = true;
        if (this.myotp1 == "" ||
            this.myotp2 == "" ||
            this.myotp3 == "" ||
            this.myotp4 == "") {
            // show alert of mandatory field
            this.apiMessage("all fields are mandatory");
            this.submitBtnText = "Submit";
            this.submitBtnDisable = false;
        }
        else {
            var finalOTP_1 = this.myotp1 + "" + this.myotp2 + "" + this.myotp3 + "" + this.myotp4;
            this.storage.get("employeeId").then(function (data) {
                _this.employeeId = data;
                console.log(" employeeId== ", _this.employeeId);
            });
            this.storage.get("login_token").then(function (data) {
                console.log("showOnBoard value is111==", data);
                _this.login_token = data;
            });
            this.storage.get("deviceId").then(function (data) {
                _this.deviceId = data;
                _this.apiKey = {
                    client_id: _this.apiServices.clientId,
                    employee_id: _this.employeeId,
                    device: _this.apiServices.device,
                    device_id: _this.deviceId,
                    app_version: _this.apiServices.appVersion,
                    otp: finalOTP_1,
                    form_id: _this.form_data.form_id,
                    group_id: _this.form_data.group_id
                };
                _this.apiServices
                    .submit_form_declaration(_this.apiKey, _this.login_token)
                    .subscribe(function (res) {
                    console.log("otp", res);
                    if (res.success == 1) {
                        _this.navCtrl.popTo(_this.navCtrl.getByIndex(_this.navCtrl.length() - 3));
                        _this.submitBtnText = "Submit";
                        _this.submitBtnDisable = false;
                    }
                    else {
                        _this.apiMessage(res.message);
                        _this.submitBtnText = "Submit";
                        _this.submitBtnDisable = false;
                    }
                }, function (err) {
                    console.log("err== ", err);
                    _this.apiMessage(err);
                });
            });
        }
    };
    DeclarationotpPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad DeclarationotpPage");
    };
    DeclarationotpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-declarationotp",template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/onboarding_forms/common_folder/declarationotp/declarationotp.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Verification Code</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="themeBg">\n  <div class="customCardView">\n    <ion-row>\n      <ion-col>\n        <img src="../../assets/imgs/otpIcon.png" class="mobIcon centerDataInDiv" />\n        <p class="heading" text-center>{{msgdata}}</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-3>\n        <ion-input type="tel" #otp1 placeholder="*" class="bodBottom" pattern="[0-9]{6}" maxlength="1"\n        (ionFocus)="checkFocus(1)"  (keyup)="moveFocus(otp2, myotp1, \'1\')" [(ngModel)]="myotp1" ></ion-input>\n      </ion-col>\n      <ion-col col-3>\n        <ion-input type="tel" #otp2 placeholder="*" class="bodBottom" pattern="[0-9]{6}" maxlength="1"\n        (ionFocus)="checkFocus(2)" (keyup)="moveFocus(otp3, myotp2, \'2\')" [(ngModel)]="myotp2" ></ion-input>\n      </ion-col>\n      <ion-col col-3>\n        <ion-input type="tel" #otp3 class="bodBottom" pattern="[0-9]{6}" maxlength="1"\n        (ionFocus)="checkFocus(3)" placeholder="*" (keyup)="moveFocus(otp4, myotp3, \'3\')" [(ngModel)]="myotp3" ></ion-input>\n      </ion-col>\n      <ion-col col-3>\n        <ion-input type="tel" #otp4 placeholder="*" class="bodBottom" pattern="[0-9]{6}" maxlength="1"\n        (ionFocus)="checkFocus(4)" (keyup)="moveFocus(otp4, myotp4, \'4\')" [(ngModel)]="myotp4"></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <br>\n        <button ion-button [disabled]="submitBtnDisable==true" class="btn centerDataInDiv" (click)="submitOtp(myotp1,myotp2,myotp3,myotp4)">{{submitBtnText}}</button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button ion-button [disabled]="resendBtnDisable==true" clear class=" centerDataInDiv" (click)="resendOTP()">{{resendOTPText}}</button>\n      </ion-col>\n    </ion-row><br><br>\n    <div *ngIf="profilekey==\'0\' && show_skip==1">\n      <!--   <button ion-button  class="btn centerDataInDiv"  tappable (click)="skiptc()">{{skipbtnText}}</button> -->\n  \n      <p class="skipcss" (click)="showeAlert()">{{skipbtnText}}</p>\n    </div>\n\n  </div>\n  <!-- </div> -->\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/onboarding_forms/common_folder/declarationotp/declarationotp.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], DeclarationotpPage);
    return DeclarationotpPage;
}());

//# sourceMappingURL=declarationotp.js.map

/***/ }),

/***/ 793:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeclarationotpPageModule", function() { return DeclarationotpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__declarationotp__ = __webpack_require__(1099);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DeclarationotpPageModule = /** @class */ (function () {
    function DeclarationotpPageModule() {
    }
    DeclarationotpPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__declarationotp__["a" /* DeclarationotpPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__declarationotp__["a" /* DeclarationotpPage */]),
            ],
        })
    ], DeclarationotpPageModule);
    return DeclarationotpPageModule;
}());

//# sourceMappingURL=declarationotp.module.js.map

/***/ })

});
//# sourceMappingURL=78.js.map
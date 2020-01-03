webpackJsonp([122],{

/***/ 1040:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChoiceofbankaccountPage; });
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




var ChoiceofbankaccountPage = /** @class */ (function () {
    function ChoiceofbankaccountPage(navCtrl, navParams, zone, loadingCtrl, alertCtrl, platform, toastCtrl, storage, apiServices) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.zone = zone;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.apiServices = apiServices;
        this.previous_bank_detail = [];
        this.shownext = false;
        this.selected = -1;
        this.previousdata = this.navParams.get("data");
        console.log("this.previousdata", this.previousdata);
        // this.title=this.navParams.get('title');
        this.storage.get("employeeId").then(function (data) {
            _this.employeeId = data;
            console.log(" employeeId== ", _this.employeeId);
        });
        this.storage.get("deviceId").then(function (data) {
            _this.deviceId = data;
        });
        this.bankdetail();
    }
    //Common Loader:
    ChoiceofbankaccountPage.prototype.commonLoader = function () {
        this.loading = this.loadingCtrl.create({
            enableBackdropDismiss: true,
            spinner: "ios-small",
            content: "Loading data..."
        });
        this.loading.present();
    };
    ChoiceofbankaccountPage.prototype.bankdetail = function () {
        var _this = this;
        this.commonLoader();
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
            //  this.token='Q3owSXo3T05BVVJscHREVCsyeUtqZz09OjoWf4jZSksqJnff2wxdlZ7e'
            var apiKey = {
                client_id: _this.apiServices.clientId,
                employee_id: _this.employeeId,
                device: _this.apiServices.device,
                device_id: _this.deviceId,
                app_version: _this.apiServices.appVersion
            };
            _this.apiServices.bankdetail(apiKey, _this.login_token).subscribe(function (res) {
                _this.loading.dismiss();
                // this.apiServices.urllist(apiKey,this.token).then((result) => {
                console.log("", res);
                if (res.success == 1) {
                    _this.allData = res.data;
                    _this.bank_detail_status = _this.allData.bank_detail_status;
                    _this.previous_bank_detail = _this.allData.previous_bank_detail;
                    console.log("this.bank_detail_status", _this.bank_detail_status);
                    if (_this.bank_detail_status != undefined) {
                        _this.zone.run(function () {
                            // let num=this.bank_detail_status;
                            _this.selected = _this.bank_detail_status;
                            console.log("**==== ", _this.selected);
                            // if(this.selected==""||this.selected==''||this.selected==null ||this.selected==undefined){
                            // this.shownext=true;
                            // this.selected==-1;
                            // }
                            if (_this.selected == -1) {
                                _this.shownext = true;
                                _this.selected == -1;
                            }
                            console.log("mySelectedIndex11== ", _this.selected);
                        });
                    }
                    _this.heading = _this.allData.heading;
                    _this.option = res.option;
                    console.log("succ", _this.allData);
                }
                else {
                    _this.allData = [];
                    _this.apiMessage(res.message);
                }
            }, function (err) {
                console.log("err== ", err);
                _this.apiMessage(err);
            });
        });
    };
    ChoiceofbankaccountPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    ChoiceofbankaccountPage.prototype.RadioCheck = function (i) {
        var _this = this;
        this.zone.run(function () {
            _this.shownext = true;
            console.log("rrrr", i);
            _this.selectedIndex = i;
        });
    };
    ChoiceofbankaccountPage.prototype.gotonext = function () {
        if (this.selected == -1) {
            this.msg = "please select any option";
            this.apiMessage(this.msg);
            return false;
            // this.navCtrl.push('BankinstructionPage',{'acountselection':this.selected});
        }
        if (this.selected == 1) {
            this.navCtrl.push("BankinstructionPage", {
                acountselection: this.selected,
                previousdata: this.previousdata
            });
        }
        if (this.selected == 0) {
            this.navCtrl.push("AlreadyacountformPage", {
                acountselection: this.selected,
                previous_bank_detail: this.previous_bank_detail,
                previousdata: this.previousdata
            });
        }
    };
    ChoiceofbankaccountPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ChoiceofbankaccountPage");
    };
    ChoiceofbankaccountPage.prototype.fun = function (i) {
        console.log("i", i);
        this.selected = i;
        console.log("this.selected", this.selected);
    };
    ChoiceofbankaccountPage.prototype.edit = function () {
        this.shownext = true;
        // this.selected=undefined;
    };
    ChoiceofbankaccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-choiceofbankaccount",template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/choiceofbankaccount/choiceofbankaccount.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Choice Of Bank Account</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="bg" padding>\n  <div [ngClass]="{\'newOverlay\':previousdata && previousdata.form_status != \'enable\'}">\n  <ion-row>\n    <ion-col col-6>\n      <p class="font">{{heading}}</p>\n    </ion-col>\n    <ion-col col-6></ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-1 class="mrauto">\n      <img class="imgcss" src="../../assets/imgs/bullet.png" />\n    </ion-col>\n    <ion-col col-11>\n      <p class="colorpara">\n        Salary benefits will be given only to Axis and HDFC account holders.\n      </p>\n    </ion-col>\n  </ion-row>\n  <br /><br /><br />\n  <!-- <ion-row *ngFor="let data of option ; let i = index">\n  <ion-col col-1 class="centr"  >\n      \n\n    <input type="radio" [checked]="i == selectedIndex"  id="radio{{i}}" name="radiogroup" [(ngModel)]="radiogroup" \n    (ngModelChange)="RadioCheck(i)"  />\n     \n  </ion-col>\n  <ion-col col-11>\n      <label class="radio-inline lablfont" for="radio{{i}}" style="margin-right:15px">{{selectedIndex}}== {{i}} // {{data.option_list}}</label>\n    </ion-col>\n</ion-row><br><br><br> -->\n\n  <!-- \n<div *ngFor="let data of option ; let i = index">\n    <input type="radio" [checked]="i==selectedIndex"  [(ngModel)]="radiogroup"\n    (ngModelChange)="RadioCheck(i)" name="radiogroup" />\n    <label class="radio-inline lablfont" for="radio{{i}}" style="margin-right:15px"></label>\n</div> -->\n  <!-- <div style="position: relative"> -->\n  <div style="position: relative">\n    <ion-row\n      *ngFor="let data of option ; let i = index"\n      (click)="fun(i)"\n      [ngClass]="{\'fillBg\' : (selected == i), \'notFill\':(selected != i)}"\n    >\n      <ion-col col-1 class="centr" style="margin: auto;">\n        <!-- <ion-icon *ngIf="selected==i"  name="checkmark-circle-outline" class="approvedIcon"></ion-icon> -->\n        <!-- <ion-icon   name="checkmark-circle-outline" class="approvedIcon"></ion-icon> -->\n        <img *ngIf="selected==i" src="../../assets/imgs/radio button.png" />\n        <img\n          *ngIf="selected!=i"\n          src="../../assets/imgs/radio buttonempty.png"\n        />\n\n        <!-- <ion-icon *ngIf="selected!=i" name="time" class="pendingIcon" ></ion-icon> -->\n      </ion-col>\n      <ion-col col-11>\n        <p>{{data.option_list}}</p>\n        <!-- <label class="radio-inline lablfont" for="radio{{i}}" style="margin-right:15px">{{selectedIndex}}== {{i}} // {{data.option_list}}</label> -->\n      </ion-col> </ion-row\n    ><br /><br /><br />\n\n    <div\n      *ngIf="shownext==false"\n      style="position: absolute;z-index:99;top:0;bottom:0;\nwidth:100%;background-color: rgba(232, 232, 232, 0.62);"\n    ></div>\n  </div>\n  <!-- </div> -->\n\n  <div\n    *ngIf="previousdata && previousdata.form_status == \'enable\'"\n    class="btndiv"\n  >\n    <button\n      ion-button\n      *ngIf="(shownext==true || selected==\'\')"\n      class="btn"\n      (click)="gotonext()"\n    >\n      Next\n    </button>\n    <button ion-button *ngIf="shownext==false" class="btn" (click)="edit()">\n      Edit\n    </button>\n  </div>\n</div>\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/choiceofbankaccount/choiceofbankaccount.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */]])
    ], ChoiceofbankaccountPage);
    return ChoiceofbankaccountPage;
}());

//# sourceMappingURL=choiceofbankaccount.js.map

/***/ }),

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoiceofbankaccountPageModule", function() { return ChoiceofbankaccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__choiceofbankaccount__ = __webpack_require__(1040);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChoiceofbankaccountPageModule = /** @class */ (function () {
    function ChoiceofbankaccountPageModule() {
    }
    ChoiceofbankaccountPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__choiceofbankaccount__["a" /* ChoiceofbankaccountPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__choiceofbankaccount__["a" /* ChoiceofbankaccountPage */]),
            ],
        })
    ], ChoiceofbankaccountPageModule);
    return ChoiceofbankaccountPageModule;
}());

//# sourceMappingURL=choiceofbankaccount.module.js.map

/***/ })

});
//# sourceMappingURL=122.js.map
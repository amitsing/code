webpackJsonp([75],{

/***/ 1155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PansionschemePage; });
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
 * Generated class for the PansionschemePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PansionschemePage = /** @class */ (function () {
    function PansionschemePage(navCtrl, navParams, alertCtrl, platform, toastCtrl, storage, apiServices) {
        // this.title=this.navParams.get('title');
        // this.flag=this.navParams.get('flag');
        // this.previousPageData=this.navParams.get('data');
        // this.amount=this.previousPageData.form_data_dump.value;
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.apiServices = apiServices;
        this.showhidebutton = 0;
        this.previousPageData = this.navParams.get("data");
        this.amount = this.previousPageData.form_data_dump;
        this.title = this.previousPageData.form_name;
        this.flag = this.previousPageData.form_link;
        console.log("this.amount", this.amount);
        if (this.amount && this.amount.length > 0) {
            console.log(" this.amount22222", this.amount);
            this.pansion = "0";
            this.radiocheck = 0;
            this.pansionamount(this.amount);
        }
        else {
            console.log(" this.amount111", this.amount);
            this.pansion = "1";
            this.radiocheck = 1;
        }
        this.storage.get("employeeId").then(function (data) {
            _this.employeeId = data;
            console.log(" employeeId== ", _this.employeeId);
        });
        this.storage.get("deviceId").then(function (data) {
            _this.deviceId = data;
        });
        // this.amount=
    }
    PansionschemePage.prototype.getVal = function (d, e) {
        console.log("rrrr", e);
        this.radiocheck = e;
        if (this.radiocheck == 0) {
        }
    };
    PansionschemePage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad TravelassitancePage");
    };
    PansionschemePage.prototype.pansionamount = function (a) {
        console.log("aaa", a);
        this.amount = a;
        if (this.amount == "undefined" || this.amount == "" || parseInt(this.amount) == 0) {
            console.log("null", a);
            this.showhidebutton = 0;
            this.warnigMsg =
                "Invalid percentage, please enter value between 1 to 10";
        }
        else {
            console.log("not null", a);
            if (parseInt(this.amount) <= 10) {
                this.showhidebutton = 1;
                this.warnigMsg = "";
            }
            else if (parseInt(this.amount) == 0) {
                this.showhidebutton = 0;
                this.warnigMsg =
                    "Invalid percentage, please enter value between 1 to 10";
            }
            else {
                this.showhidebutton = 0;
                this.warnigMsg =
                    "Invalid percentage, please enter value between 1 to 10";
            }
        }
    };
    //   submit(a,b){
    // this.navCtrl.push('SodexomealvoucherPage');
    //   }
    PansionschemePage.prototype.pansionscheme = function () {
        var _this = this;
        if (this.pansion == "1") {
            this.amount = "";
        }
        if (this.radiocheck == 0) {
            this.rcheck = 1;
        }
        else {
            this.rcheck = 0;
        }
        // if(this.amount==null){
        //   alert("null")
        //   this.amount='';
        // }
        if (this.amount == "undefined" ||
            this.amount == "" ||
            this.amount == null) {
            this.amount = "";
            // alert("unde")
        }
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
                app_version: _this.apiServices.appVersion,
                flag: _this.flag,
                option: _this.rcheck,
                value: _this.amount,
                form_id: _this.previousPageData.form_id
            };
            _this.apiServices.salarrystructure(apiKey, _this.login_token).subscribe(function (res) {
                // this.apiServices.urllist(apiKey,this.token).then((result) => {
                console.log("", res);
                // this.allData = res.data;
                if (res.success == 1) {
                    _this.apiMessage(res.message);
                    _this.navCtrl.pop();
                    // console.log('succ', this.allData);
                }
                else {
                    _this.apiMessage(res.message);
                }
            }, function (err) {
                console.log("err== ", err);
                _this.apiMessage(err);
            });
        });
    };
    PansionschemePage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    PansionschemePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-pansionscheme",template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/pansionscheme/pansionscheme.html"*/'<!--\n  Generated template for the PansionschemePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div [ngClass]="{\'newOverlay\':previousPageData && previousPageData.form_status != \'enable\'}">\n  <div>\n    <img\n      class="imgcss"\n      srcset="{{previousPageData?.image}}"\n      src="../../assets/imgs/NPS.png"\n    />\n  </div>\n\n  <div padding>\n    <ion-row>\n      <ion-col col-12 class="marginleft">\n        <p [innerHTML]="previousPageData?.description"></p\n      ></ion-col>\n    </ion-row>\n\n    <ion-row\n      [ngClass]="{\'fillBg\' : (radiocheck == 1), \'notFill\':(radiocheck != 1)}"\n    >\n      <ion-col col-1 class="centr">\n        <input\n          type="radio"\n          id="okValsupearth1"\n          value="1"\n          name="pansion"\n          [(ngModel)]="pansion"\n          (change)="getVal($event, pansion)"\n        />\n      </ion-col>\n      <ion-col col-11>\n        <label\n          class="radio-inline title"\n          for="okValsupearth1"\n          style="margin-right:15px"\n          >I do not want to opt for NPS</label\n        >\n      </ion-col>\n    </ion-row>\n\n    <ion-row\n      [ngClass]="{\'fillBg\' : (radiocheck == 0), \'notFill\':(radiocheck != 0)}"\n    >\n      <ion-col col-1 class="centr">\n        <input\n          type="radio"\n          id="okValsupearth"\n          value="0"\n          name="pansion"\n          [(ngModel)]="pansion"\n          (change)="getVal($event, pansion)"\n        />\n      </ion-col>\n      <ion-col col-11>\n        <label\n          class="radio-inline title"\n          for="okValsupearth"\n          style="margin-right:15px"\n          >I would like to opt for NPS</label\n        >\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf="radiocheck==0">\n      <ion-col col-12 class="centr">\n        <p>Please enter the monthly desired percentage (1%-10%)</p>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="radiocheck==0">\n      <ion-col col-3></ion-col>\n\n      <ion-col col-6 class="centr">\n        <ion-item class="passwordField">\n          <ion-input\n            class="bottomLine"\n            type="number"\n            placeholder="Enter here.."\n            clearOnEdit="false"\n            autocorrect="on"\n            [(ngModel)]="amount"\n            (ngModelChange)="pansionamount(amount)"\n            class="inputcls"\n          ></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-3></ion-col>\n      <ion-col col-12>\n        <p style="color:red;">{{warnigMsg}}</p>\n      </ion-col>\n    </ion-row>\n  </div>\n  <br /><br />\n  <div\n    *ngIf="previousPageData && previousPageData.form_status == \'enable\'"\n    class="centr"\n  >\n    <button\n      ion-button\n      round\n      class="btn"\n      *ngIf="radiocheck==undefined || (radiocheck==0 && showhidebutton==0)"\n    >\n      Submit\n    </button>\n    <button\n      ion-button\n      round\n      class="btn1"\n      *ngIf="(radiocheck==1) || (radiocheck==0 && showhidebutton==1)"\n      (click)="pansionscheme()"\n    >\n      Submit\n    </button>\n  </div>\n</div>\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/pansionscheme/pansionscheme.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */]])
    ], PansionschemePage);
    return PansionschemePage;
}());

//# sourceMappingURL=pansionscheme.js.map

/***/ }),

/***/ 827:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PansionschemePageModule", function() { return PansionschemePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pansionscheme__ = __webpack_require__(1155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PansionschemePageModule = /** @class */ (function () {
    function PansionschemePageModule() {
    }
    PansionschemePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pansionscheme__["a" /* PansionschemePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pansionscheme__["a" /* PansionschemePage */]),
            ],
        })
    ], PansionschemePageModule);
    return PansionschemePageModule;
}());

//# sourceMappingURL=pansionscheme.module.js.map

/***/ })

});
//# sourceMappingURL=75.js.map
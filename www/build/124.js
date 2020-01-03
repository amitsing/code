webpackJsonp([124],{

/***/ 1037:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarhirePage; });
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




var CarhirePage = /** @class */ (function () {
    function CarhirePage(navCtrl, navParams, alertCtrl, platform, toastCtrl, storage, apiServices) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.apiServices = apiServices;
        this.amount = 100;
        this.showsubmit = false;
        this.title = this.navParams.get("title");
        this.flag = this.navParams.get("flag");
        this.previousPageData = this.navParams.get("data");
        console.log(" previousPageData== ", this.previousPageData);
        this.saved_option = this.previousPageData.saved_option;
        console.log(" saved_option== ", this.saved_option);
        if (this.saved_option != 0) {
            this.getvalcheck = 1;
            this.getVal(0);
        }
        if (this.saved_option == 0) {
            this.getVal(1);
        }
        this.storage.get("employeeId").then(function (data) {
            _this.employeeId = data;
            console.log(" employeeId== ", _this.employeeId);
        });
        this.storage.get("deviceId").then(function (data) {
            _this.deviceId = data;
        });
        this.carvalues();
    }
    CarhirePage.prototype.getVal = function (e) {
        console.log("rrrre", e);
        this.i = e;
        // this.j=e;
        this.radiocheck = e;
        if (this.radiocheck == 1) {
            this.showsubmit = true;
            //  this.f=undefined;
        }
        if (this.radiocheck == 0) {
            console.log("rrrr1234556", this.f);
            if (this.getvalcheck == 1) {
                console.log("this.getvalcheck", this.getvalcheck);
                this.f = this.saved_option;
                this.getvalcheck = 0;
                this.saved_option = undefined;
            }
            else {
                if (this.f != undefined) {
                    this.showsubmit = true;
                    this.selectr(this.f);
                }
                else {
                    this.showsubmit = false;
                }
            }
        }
    };
    CarhirePage.prototype.selectr = function (f) {
        console.log("rrrrf", f);
        this.f = f;
        console.log("rrrrffff", this.f);
        // if(this.f!=undefined){
        this.showsubmit = true;
        //  }
    };
    CarhirePage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad TravelassitancePage");
    };
    //   submit(a,b){
    // this.navCtrl.push('SavingpreferencesPage');
    //   }
    CarhirePage.prototype.sodexosubmit = function () {
        var _this = this;
        // if(this.radiocheck==0){
        //   this.rcheck=1;
        // }
        // else{
        //   this.rcheck=0;
        // }
        if (this.radiocheck == 0) {
            // this.rcheck=1;
            this.rcheck = this.f;
        }
        else {
            this.rcheck = 0;
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
                option: _this.rcheck,
                form_id: _this.previousPageData.form_id
            };
            _this.apiServices.carhirevaluesubmit(apiKey, _this.login_token).subscribe(function (res) {
                // this.apiServices.urllist(apiKey,this.token).then((result) => {
                console.log("", res);
                // this.allData = res.data;
                if (res.success == 1) {
                    _this.navCtrl.pop();
                    _this.apiMessage(res.message);
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
    CarhirePage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    // ionViewDidLoad() {
    //   console.log('ionViewDidLoad CarhirePage');
    // }
    CarhirePage.prototype.carvalues = function () {
        // if(this.radiocheck==0){
        //   this.rcheck=1;
        // }
        // else{
        //   this.rcheck=0;
        // }
        // if(this.amount==null){
        //   alert("null")
        //   this.amount='';
        // }
        // if(this.amount=='undefined' || this.amount=='' || this.amount==null){
        // this.amount='';
        var _this = this;
        // }
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
            _this.apiServices.carhirevalues(apiKey, _this.login_token).subscribe(function (res) {
                // this.apiServices.urllist(apiKey,this.token).then((result) => {
                console.log("", res);
                // this.allData = res.data;
                if (res.success == 1) {
                    _this.allData = res.data;
                    console.log("succ", _this.allData);
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
    CarhirePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-carhire",template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/carhire/carhire.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Car Hire</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div\n    [ngClass]="{\'newOverlay\':previousPageData && previousPageData.form_status != \'enable\'}"\n  >\n    <div>\n      <img\n        class="imgcss"\n        srcset="{{previousPageData?.image}}"\n        src="../../assets/imgs/sodexo.png"\n      />\n    </div>\n    <div padding>\n      <ion-row>\n        <ion-col col-12 class="marginleft">\n          <p [innerHTML]="previousPageData?.description"></p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row\n        (click)="getVal(1)"\n        [ngClass]="{\'fillBg\' : (i == 1), \'notFill\':(i != 1)}"\n      >\n        <ion-col col-1 class="mrauto paddingtb">\n          <img\n            class="imgcss2"\n            *ngIf="i==1"\n            src="../../assets/imgs/icons/radio buttonicon.png"\n          />\n          <img\n            class="imgcss2"\n            *ngIf="i!=1"\n            src="../../assets/imgs/icons/radio buttonemptyicon.png"\n          />\n        </ion-col>\n        <ion-col col-11 class="paddingtb">\n          <p class="title">I do not want to opt for car hire services.</p>\n        </ion-col>\n      </ion-row>\n      <ion-row\n        (click)="getVal(0)"\n        [ngClass]="{\'fillBg\' : (i == 0), \'notFill\':(i != 0)}"\n      >\n        <ion-col col-1 class="mrauto paddingtb">\n          <img\n            class="imgcss2"\n            *ngIf="i==0"\n            src="../../assets/imgs/icons/radio buttonicon.png"\n          />\n          <img\n            class="imgcss2"\n            *ngIf="i!=\'0\'"\n            src="../../assets/imgs/icons/radio buttonemptyicon.png"\n          />\n        </ion-col>\n        <ion-col col-11 class="paddingtb">\n          <p class="title">I would like to opt for car hire services.</p>\n        </ion-col>\n      </ion-row>\n\n      <div *ngIf="radiocheck==0">\n        <div *ngFor="let data of allData ; let i = index">\n          <ion-row *ngIf="radiocheck==0" (click)="selectr(data.auto_id)">\n            <ion-col col-1></ion-col>\n            <ion-col col-1 class="mrauto paddingtb">\n              <img\n                class="imgcss2"\n                *ngIf="f==data.auto_id"\n                src="../../assets/imgs/radio button.png"\n              />\n              <img\n                class="imgcss2"\n                *ngIf="f!=data.auto_id"\n                src="../../assets/imgs/radio buttonempty.png"\n              />\n            </ion-col>\n            <ion-col col-10 class="paddingtb">\n              <p\n                class="titleVale"\n                [ngClass]="{\'fillBgSub\' : (f == data.auto_id), \'notFill\':(f != data.auto_id)}"\n              >\n                {{data.value}}\n              </p>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n    </div>\n\n    <br /><br />\n    <div\n      *ngIf="previousPageData && previousPageData.form_status == \'enable\'"\n      class="centr"\n    >\n      <button ion-button round class="btn" *ngIf="showsubmit==false">\n        Submit\n      </button>\n      <button\n        ion-button\n        round\n        class="btn1"\n        *ngIf="showsubmit==true"\n        (click)="sodexosubmit()"\n      >\n        Submit\n      </button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/carhire/carhire.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */]])
    ], CarhirePage);
    return CarhirePage;
}());

//# sourceMappingURL=carhire.js.map

/***/ }),

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarhirePageModule", function() { return CarhirePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carhire__ = __webpack_require__(1037);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CarhirePageModule = /** @class */ (function () {
    function CarhirePageModule() {
    }
    CarhirePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__carhire__["a" /* CarhirePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__carhire__["a" /* CarhirePage */]),
            ],
        })
    ], CarhirePageModule);
    return CarhirePageModule;
}());

//# sourceMappingURL=carhire.module.js.map

/***/ })

});
//# sourceMappingURL=124.js.map
webpackJsonp([48],{

/***/ 1183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TravelassitancePage; });
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




var TravelassitancePage = /** @class */ (function () {
    function TravelassitancePage(navCtrl, navParams, alertCtrl, platform, toastCtrl, storage, apiServices) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.apiServices = apiServices;
        this.anualamount = 0;
        this.showhidebutton = 0;
        // this.title=this.navParams.get('title');
        // this.flag=this.navParams.get('flag');
        this.previousPageData = this.navParams.get("data");
        this.amount = this.previousPageData.form_data_dump;
        this.title = this.previousPageData.form_name;
        this.flag = this.previousPageData.form_link;
        console.log(" this.amount", this.amount);
        if (this.amount && this.amount.length > 0) {
            console.log(" this.amount22222", this.amount);
            this.lta = "0";
            this.radiocheck = 0;
            this.Ltaamount(this.amount);
        }
        else {
            console.log(" this.amount111", this.amount);
            this.lta = "1";
            this.radiocheck = 1;
        }
        console.log(" this.previousPageData", this.previousPageData);
        // this.amount=this.previousPageData.
        this.storage.get("employeeId").then(function (data) {
            _this.employeeId = data;
            console.log(" employeeId== ", _this.employeeId);
        });
        this.storage.get("deviceId").then(function (data) {
            _this.deviceId = data;
        });
    }
    TravelassitancePage.prototype.getVal = function (d, e) {
        console.log("rrrr", e);
        this.radiocheck = e;
        if (this.radiocheck == 0) {
        }
    };
    TravelassitancePage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad TravelassitancePage");
    };
    TravelassitancePage.prototype.Ltaamount = function (a) {
        console.log("aaa", a);
        this.amount = a;
        if (this.amount == "undefined" || this.amount == "" || parseInt(this.amount) == 0) {
            console.log("null", a);
            this.showhidebutton = 0;
        }
        else {
            console.log("not null", a);
            this.showhidebutton = 1;
        }
        this.anualamount = parseInt(this.amount) * 12;
    };
    //   submit(){
    // this.navCtrl.push('SodexomealvoucherPage');
    //   }
    TravelassitancePage.prototype.travellassitance = function () {
        var _this = this;
        if (this.lta == "1") {
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
                _this.allData = res.data;
                if (res.success == 1) {
                    _this.apiMessage(res.message);
                    _this.navCtrl.pop();
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
    TravelassitancePage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    TravelassitancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-travelassitance",template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/travelassitance/travelassitance.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      {{title}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div [ngClass]="{\'newOverlay\':previousPageData && previousPageData.form_status != \'enable\'}">\n  <div>\n    <img\n      class="imgcss"\n      srcset="{{previousPageData?.image}}"\n      src="../../assets/imgs/LTA.png"\n    />\n  </div>\n\n  <div padding>\n    <ion-row>\n      <ion-col col-12 class="marginleft">\n        <p [innerHTML]="previousPageData?.description">\n          <!-- Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.   -->\n        </p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row\n      [ngClass]="{\'fillBg\' : (radiocheck == 1), \'notFill\':(radiocheck != 1)}"\n    >\n      <ion-col col-1 class="centr">\n        <input\n          type="radio"\n          id="lta1"\n          value="1"\n          name="lta"\n          [(ngModel)]="lta"\n          (change)="getVal($event, lta)"\n        />\n      </ion-col>\n      <ion-col col-11>\n        <label for="lta1" class="radio-inline title" style="margin-right:15px"\n          >I do not want to opt for LTA</label\n        >\n      </ion-col>\n    </ion-row>\n\n    <ion-row\n      [ngClass]="{\'fillBg\' : (radiocheck == 0), \'notFill\':(radiocheck != 0)}"\n    >\n      <ion-col col-1 class="centr">\n        <input\n          type="radio"\n          id="lta"\n          value="0"\n          name="lta"\n          [(ngModel)]="lta"\n          (change)="getVal($event, lta)"\n        />\n      </ion-col>\n      <ion-col col-11>\n        <label for="lta" class="radio-inline title" style="margin-right:15px"\n          >I would like to opt for LTA</label\n        >\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf="radiocheck==0">\n      <ion-col col-12>\n        <p>LTA cannot be greater than special allowance offered to you.</p>\n        <p>\n          Please refer to your CTC break up to check the exact amount of special\n          allowance.\n        </p>\n        <p>Please enter the monthly desired LTA amount</p>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="radiocheck==0">\n      <ion-col col-3></ion-col>\n\n      <ion-col col-6 class="centr">\n        <ion-item class="passwordField">\n          <ion-input\n            class="bottomLine"\n            type="number"\n            placeholder=""\n            clearOnEdit="false"\n            autocorrect="on"\n            [(ngModel)]="amount"\n            (ngModelChange)="Ltaamount(amount)"\n            class="inputcls"\n          ></ion-input>\n        </ion-item>\n        <p *ngIf="anualamount!=undefined" class="pcolor">\n          {{(anualamount > 0) ?  anualamount + \' per annum\' : \'\'}}\n        </p>\n      </ion-col>\n      <ion-col col-3><p>Per month</p></ion-col>\n    </ion-row>\n  </div>\n  <br /><br />\n  <div\n    class="centr"\n    *ngIf="previousPageData && previousPageData.form_status == \'enable\'"\n  >\n    <button\n      ion-button\n      round\n      class="btn"\n      *ngIf="radiocheck==undefined || (radiocheck==0 && showhidebutton==0)"\n    >\n      Submit\n    </button>\n    <button\n      ion-button\n      round\n      class="btn1"\n      *ngIf="(radiocheck==1) || (radiocheck==0 && showhidebutton==1)"\n      (click)="travellassitance()"\n    >\n      Submit\n    </button>\n  </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/travelassitance/travelassitance.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */]])
    ], TravelassitancePage);
    return TravelassitancePage;
}());

//# sourceMappingURL=travelassitance.js.map

/***/ }),

/***/ 855:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelassitancePageModule", function() { return TravelassitancePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__travelassitance__ = __webpack_require__(1183);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TravelassitancePageModule = /** @class */ (function () {
    function TravelassitancePageModule() {
    }
    TravelassitancePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__travelassitance__["a" /* TravelassitancePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__travelassitance__["a" /* TravelassitancePage */]),
            ],
        })
    ], TravelassitancePageModule);
    return TravelassitancePageModule;
}());

//# sourceMappingURL=travelassitance.module.js.map

/***/ })

});
//# sourceMappingURL=48.js.map
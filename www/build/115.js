webpackJsonp([115],{

/***/ 1051:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqPage; });
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
 * Generated class for the FaqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FaqPage = /** @class */ (function () {
    function FaqPage(navCtrl, navParams, toastCtrl, storage, apiServices) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.apiServices = apiServices;
        this.skelton = [
            { title: "Type 1 Diabetes", description: "Type 1 diabetes is an autoimmune disease in which the body’s immune system attacks and destroys the beta cells in the pancreas that make insulin." },
            { title: "Multiple Sclerosis", description: "Multiple sclerosis (MS) is an autoimmune disease in which the body's immune system mistakenly attacks myelin, the fatty substance that surrounds and protects the nerve fibers in the central nervous system." },
            { title: "Crohn's & Colitis", description: "Crohn's disease and ulcerative colitis (UC), both also known as inflammatory bowel diseases (IBD), are autoimmune diseases in which the body's immune system attacks the intestines." },
            { title: "Lupus", description: "Systemic lupus erythematosus (lupus) is a chronic, systemic autoimmune disease which can damage any part of the body, including the heart, joints, skin, lungs, blood vessels, liver, kidneys and nervous system." },
            { title: "Rheumatoid Arthritis", description: "Rheumatoid arthritis (RA) is an autoimmune disease in which the body's immune system mistakenly begins to attack its own tissues, primarily the synovium, the membrane that lines the joints." }
        ];
        this.shownGroup = null;
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            console.log('login deviceId== ', _this.deviceId);
        });
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
            console.log('login employeeId== ', _this.employeeId);
            // this.getFaq();
        });
        this.storage.get('showOnBoard').then(function (data) {
            _this.employeeType = data;
            console.log('login employeeId== ', _this.employeeId);
            // this.getFaq();
        });
        this.storage.get('login_token').then(function (data) {
            _this.loginToken = data;
            console.log('login employeeId== ', _this.employeeId);
            _this.getFaq();
        });
    }
    FaqPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FaqPage');
    };
    FaqPage.prototype.getFaq = function () {
        var _this = this;
        var apiKey = {
            "client_id": this.apiServices.clientId,
            "employee_id": this.employeeId,
            "device_id": this.deviceId,
            "app_version": this.apiServices.appVersion,
            "device": this.apiServices.device,
            "user_type": this.employeeType,
        };
        console.log('home page api key==', apiKey);
        // this.apiServices.faqDetails(apiKey).then((result) => { 
        this.apiServices.getFaq(apiKey, this.loginToken).subscribe(function (result) {
            console.log('faqDetails == ', result);
            _this.allData = result;
            if (_this.allData.success == 1) {
                var details_1 = _this.allData.data;
                setTimeout(function () {
                    _this.faqDetails = details_1;
                }, 1000);
            }
            else {
                _this.apiMessage(_this.allData.message);
                _this.navCtrl.pop();
            }
        });
    };
    FaqPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    FaqPage.prototype.seeJoinningInfo = function () {
        this.navCtrl.push('JoiningDetailsPage');
    };
    FaqPage.prototype.sendToDetalPage = function (value) {
        this.navCtrl.push('FaqDetailsPage', { 'data': value });
    };
    FaqPage.prototype.clrSelect = function (index) {
        var clr = ["#734a75", "#a864a8"];
        if (index % 2 == 0) {
            return clr[0];
        }
        else {
            return clr[1];
        }
    };
    FaqPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-faq',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/faq/faq.html"*/'<!--\n  Generated template for the FaqDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>FAQs</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="contentBg">\n\n\n  <ion-list *ngIf="faqDetails">\n    <ion-item *ngFor="let data of faqDetails; let i=index" text-wrap >\n      <ion-row class="mylist" (click)="sendToDetalPage(data)" [style.backgroundColor]="clrSelect(i)">\n        <ion-col col-11 class="centerData">\n          <h3> {{data?.faq_module}} </h3> \n        </ion-col>\n        <ion-col col-1>\n          <ion-icon color="success" item-right name="arrow-dropright"></ion-icon>  \n        </ion-col>\n      </ion-row>\n    </ion-item>\n  </ion-list>\n\n\n\n  <ion-list *ngIf="!faqDetails" class="skeltonList">\n      <ion-item *ngFor="let data of skelton; let i=index" text-wrap  >\n        <ion-row>\n          <ion-col col-11 class="centerData">\n            <h3> {{data?.title}} </h3> \n          </ion-col>\n          <ion-col col-1>\n            <ion-icon color="success" item-right name="arrow-dropdown"></ion-icon>  \n          </ion-col>\n        </ion-row>\n        <!-- <div *ngIf="isGroupShown(i)" class="descriptionFaq">{{data.answer}}</div> -->\n      </ion-item>\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/faq/faq.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */]])
    ], FaqPage);
    return FaqPage;
}());

//# sourceMappingURL=faq.js.map

/***/ }),

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPageModule", function() { return FaqPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__faq__ = __webpack_require__(1051);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FaqPageModule = /** @class */ (function () {
    function FaqPageModule() {
    }
    FaqPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__faq__["a" /* FaqPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__faq__["a" /* FaqPage */]),
            ],
        })
    ], FaqPageModule);
    return FaqPageModule;
}());

//# sourceMappingURL=faq.module.js.map

/***/ })

});
//# sourceMappingURL=115.js.map
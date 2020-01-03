webpackJsonp([99],{

/***/ 1072:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaderdetailPage; });
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

// import { IonicPage, NavController, NavParams } from 'ionic-angular';



/**
 * Generated class for the LeaderdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LeaderdetailPage = /** @class */ (function () {
    function LeaderdetailPage(navCtrl, navParams, toastCtrl, storage, apiServices) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.apiServices = apiServices;
        this.previousdata = this.navParams.get('data');
        console.log('this.previousdata', this.previousdata);
        this.name = this.previousdata.name;
        this.designation = this.previousdata.designation;
        this.userimage = this.previousdata.image;
        this.about = this.previousdata.about;
        // this.leaderlist()
    }
    LeaderdetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LeaderdetailPage');
    };
    // leaderlist() { 
    //   // this.btnText='Please wait...';
    //   this.storage.get('deviceId').then(data => {
    //     this.deviceId = data;
    //     console.log('login deviceId== ', this.deviceId)
    //   })
    //   this.storage.get('employeeId').then(data => {
    //     this.employeeId = data;})
    //   this.storage.get('deviceId').then(data=>{
    //     this.deviceId=data;
    //     console.log(' deviceId== ',this.deviceId);
    //   let apiKey={
    //     "clientId":this.apiServices.clientId,
    //     "employeeId":this.employeeId,
    //     "device":this.apiServices.device,
    //     "deviceId":this.deviceId,
    //     "appVersion":this.apiServices.appVersion,
    //     "leaderId":this.previousdata
    //   };
    //   console.log('login api key==', apiKey);
    //   this.apiServices.leaders_list(apiKey).then((result) => { 
    //   console.log(' leader data response== ',result); 
    //   this.allData=result;
    //   if(this.allData.success==1){
    //   this.leaderdata=this.allData.data;
    //   }else{
    //     // this.btnText='Submit';
    //     this.apiMessage(this.allData.message);
    //   }
    //   }, (err) => { 
    //   console.log('optionalUpdate err== ',err); 
    //   this.apiMessage(err);
    //   }); 
    // });
    //   }
    LeaderdetailPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    LeaderdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-leaderdetail',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/leaderdetail/leaderdetail.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <br><br> <br> <br>\n<div class="divborder">\n  <br> <br> <br> <br><br> <br> <br>\n  <p class="paracss2">{{name}}</p>\n  <p class="paracss1">{{designation}}</p>\n  <hr style="background-color: red;">\n  <ion-row>\n    <ion-col>\n      <div [innerHTML]="about"> </div>\n    </ion-col>\n  </ion-row>\n  <!-- <ion-row *ngFor="let Data of leaderdata let i=index">\n    <ion-col col-12>\n\n        <section>    \n            <ul class="my-nav">\n              <li>{{Data.details}}</li>\n            \n            </ul>\n          </section>\n    </ion-col>\n  </ion-row> -->\n</div>\n<div class="absolutecss">\n    <img  class="img"  margin-top margin-bottom src="{{userimage}}">\n</div>\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/leaderdetail/leaderdetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */]])
    ], LeaderdetailPage);
    return LeaderdetailPage;
}());

//# sourceMappingURL=leaderdetail.js.map

/***/ }),

/***/ 769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderdetailPageModule", function() { return LeaderdetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__leaderdetail__ = __webpack_require__(1072);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LeaderdetailPageModule = /** @class */ (function () {
    function LeaderdetailPageModule() {
    }
    LeaderdetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__leaderdetail__["a" /* LeaderdetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__leaderdetail__["a" /* LeaderdetailPage */]),
            ],
        })
    ], LeaderdetailPageModule);
    return LeaderdetailPageModule;
}());

//# sourceMappingURL=leaderdetail.module.js.map

/***/ })

});
//# sourceMappingURL=99.js.map
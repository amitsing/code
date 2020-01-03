webpackJsonp([45],{

/***/ 1187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomOnboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(161);
// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams,ToastController, ModalController, LoadingController } from 'ionic-angular';
// import { ApiServiceProvider } from '../../providers/api-service/api-service';
// import { Storage } from '@ionic/storage';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// @IonicPage()
// @Component({
//   selector: 'page-welcom-onboard',
//template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/welcom-onboard/welcom-onboard.html"*/'\n<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>Welcome Aboard</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n<div *ngIf="joinnerList">\n    <ion-list>\n          <ion-item *ngFor="let data of joinnerList" (click)="seeDetails(data)">\n            <ion-avatar item-start>\n              <img srcset="{{data?.user_image}}" src="../../assets/watermark/watermark.png" class="userImage">\n            </ion-avatar>\n            <h2>{{data?.name}}</h2>\n          </ion-item>\n        \n      </ion-list>\n</div> \n<div *ngIf="!joinnerList">\n    <ion-list>\n        <ion-item *ngFor="let data of skeltonData">\n            <ion-avatar item-start>\n                <img srcset="{{data?.user_image}}" src="../../assets/watermark/watermark.png" class="userImage blurData">\n            </ion-avatar>\n                <h2 class="blurData">{{data?.name}}</h2>\n          </ion-item>\n      </ion-list>\n</div>\n\n\n\n</ion-content> -->\n<!--\n  Generated template for the WelcomOnboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Welcome Aboard</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n<div *ngIf="joinnerList">\n    <ion-list>\n          <ion-item *ngFor="let data of joinnerList; let i=index" [ngClass]="{\'classTheme\' : (i%2 == 0), \'classwhite\':(i%2 != 0)}" (click)="seeDetails(data)">\n            <ion-avatar item-start>\n                <img *ngIf="data?.image!=\'\'" srcset="{{data?.image}}" src="assets/watermark/watermark.png" class="userImage"/>\n                <img *ngIf="data?.image==\'\'" [src]="\'assets/a2z/\'+data.name[0].toLowerCase()+\'.jpg\'"  class="userImage"/>\n            </ion-avatar>\n            <h2 class="userName">{{data?.name}}</h2>\n            <p class="designation">{{data?.designation}}</p>\n            <p class="designation">{{data?.date_of_joining}}</p>\n          </ion-item>\n        \n      </ion-list>\n</div> \n<div *ngIf="!joinnerList">\n    <ion-list>\n        <ion-item *ngFor="let data of skeltonData">\n            <ion-avatar item-start>\n                <img srcset="{{data?.user_image}}" src="assets/watermark/watermark.png" class="userImage blurData">\n            </ion-avatar>\n                <h2 class="blurData">{{data?.name}}</h2>\n          </ion-item>\n      </ion-list>\n</div>\n\n<!-- <div style="    text-align: center;" *ngIf="msg">\n  <p text-center>{{msg}}</p>\n</div> -->\n\n<ion-infinite-scroll *ngIf="hideInfiniteScroll==false && joinnerList" (ionInfinite)="doInfinite($event)">\n  <ion-infinite-scroll-content></ion-infinite-scroll-content>\n</ion-infinite-scroll>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/welcom-onboard/welcom-onboard.html"*/,
// })
// export class WelcomOnboardPage {
//   employeeId:any;
//   deviceId:any;
//   allData:any;
//   joinnerList:any;
//   skeltonData:any;
//   constructor(public toastCtrl: ToastController,private storage:Storage,private apiServices:ApiServiceProvider,public navCtrl: NavController, public navParams: NavParams) {
//   this.skeltonData=[{
//     about: "<p>I'm here</p>",
//     auto_id: "1",
//     employee_id: "2",
//     fav_location: "Manali",
//     food: "Chienese",
//     hobby: "1",
//     name: "Sanjay Pradhan",
//     user_image: ""
//   },{
//     about: "<p>I'm here</p>",
//     auto_id: "1",
//     employee_id: "2",
//     fav_location: "Manali",
//     food: "Chienese",
//     hobby: "1",
//     name: "Sanjay Pradhan",
//     user_image: ""
//   },{
//     about: "<p>I'm here</p>",
//     auto_id: "1",
//     employee_id: "2",
//     fav_location: "Manali",
//     food: "Chienese",
//     hobby: "1",
//     name: "Sanjay Pradhan",
//     user_image: ""
//   },{
//     about: "<p>I'm here</p>",
//     auto_id: "1",
//     employee_id: "2",
//     fav_location: "Manali",
//     food: "Chienese",
//     hobby: "1",
//     name: "Sanjay Pradhan",
//     user_image: ""
//   },{
//     about: "<p>I'm here</p>",
//     auto_id: "1",
//     employee_id: "2",
//     fav_location: "Manali",
//     food: "Chienese",
//     hobby: "1",
//     name: "Sanjay Pradhan",
//     user_image: ""
//   },
// ]
//   }
//   ionViewDidLoad() {
//     console.log('ionViewDidLoad WelcomOnboardPage');
//     this.storage.get('employeeId').then(data=>{
//       this.employeeId=data;
//       console.log(' employeeId== ',this.employeeId);
//      });
//      this.storage.get('deviceId').then(data=>{
//       this.deviceId=data;
//       console.log(' deviceId== ',this.deviceId);
//       this.getJoinnerList();
//      });
//   }
//   getJoinnerList(){
//     let apiKey={
//       "clientId":this.apiServices.clientId,
//       "employeeId":this.employeeId,
//       "device":this.apiServices.device,
//       "deviceId":this.deviceId,
//       "appVersion":this.apiServices.appVersion
//     };
//     console.log('welcomeOnBoard api key==', apiKey);
//     this.apiServices.welcomeOnBoard(apiKey).then((result) => { 
//     console.log('welcomeOnBoard response== ',result); 
//     this.allData=result;
//     if(this.allData.success==1){
//       let userData=this.allData.data;
//       setTimeout(() => {
//       this.joinnerList=userData;
//       console.log('joinners are== ', this.joinnerList);
//     }, 1000);
//     }else{
//       this.apiMessage(this.allData.message);
//       this.navCtrl.pop();
//     }
//   })
//   }
// apiMessage(message) {
//   const toast = this.toastCtrl.create({
//     message: message,
//     duration: 3000
//   });
//   toast.present();
// }
// seeDetails(data){
//   this.navCtrl.push('WelcomeOnboardDetailsPage',{'data':data})
// }
// }




/**
 * Generated class for the WelcomOnboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WelcomOnboardPage = /** @class */ (function () {
    function WelcomOnboardPage(storage, alertCtrl, apiServices, toastCtrl, navCtrl, navParams) {
        var _this = this;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.apiServices = apiServices;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.value = '0';
        this.infiniteScrollCalled = false;
        this.hideInfiniteScroll = false;
        this.storage.get('showOnBoard').then(function (data) {
            _this.emptype = data;
            console.log('showOnBoard value is==', data);
        });
        this.skeltonData = [{
                about: "<p>I'm here</p>",
                auto_id: "1",
                employee_id: "2",
                fav_location: "Manali",
                food: "Chienese",
                hobby: "1",
                name: "Sanjay Pradhan",
                user_image: ""
            }, {
                about: "<p>I'm here</p>",
                auto_id: "1",
                employee_id: "2",
                fav_location: "Manali",
                food: "Chienese",
                hobby: "1",
                name: "Sanjay Pradhan",
                user_image: ""
            }, {
                about: "<p>I'm here</p>",
                auto_id: "1",
                employee_id: "2",
                fav_location: "Manali",
                food: "Chienese",
                hobby: "1",
                name: "Sanjay Pradhan",
                user_image: ""
            }, {
                about: "<p>I'm here</p>",
                auto_id: "1",
                employee_id: "2",
                fav_location: "Manali",
                food: "Chienese",
                hobby: "1",
                name: "Sanjay Pradhan",
                user_image: ""
            }, {
                about: "<p>I'm here</p>",
                auto_id: "1",
                employee_id: "2",
                fav_location: "Manali",
                food: "Chienese",
                hobby: "1",
                name: "Sanjay Pradhan",
                user_image: ""
            },
        ];
        this.storage.get('login_token').then(function (data) {
            console.log('showOnBoard value is111==', data);
            _this.login_token = data;
        });
    }
    WelcomOnboardPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad WelcomOnboardPage');
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
            console.log(' employeeId== ', _this.employeeId);
        });
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            console.log(' deviceId== ', _this.deviceId);
            _this.getJoinnerList();
        });
    };
    WelcomOnboardPage.prototype.getJoinnerList = function () {
        var _this = this;
        this.storage.get('showOnBoard').then(function (data) {
            _this.emptype = data;
            console.log('showOnBoard value is==', data);
        });
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            var apiKey = {
                "client_id": _this.apiServices.clientId,
                "employee_id": _this.employeeId,
                "device": _this.apiServices.device,
                "device_id": _this.deviceId,
                "app_version": _this.apiServices.appVersion,
                "user_type": _this.emptype,
                "value": _this.value
            };
            _this.apiServices.welcomeOnBoard(apiKey, _this.login_token)
                .subscribe(function (res) {
                console.log('joinnerList res==', res);
                if (res.success == 1) {
                    if (_this.joinnerList == undefined) {
                        _this.joinnerList = res.data;
                    }
                    else {
                        _this.joinnerList = _this.joinnerList.concat(res.data);
                        console.log('new album list==', res.data);
                    }
                    if (_this.infiniteScrollCalled == true) {
                        _this.myInfiniteScroll.complete();
                        _this.infiniteScrollCalled = false;
                    }
                    // console.log('this.formdata==',this.allData);
                    _this.hideInfiniteScroll = false;
                    // if(this.joinnerList==undefined){
                    //   this.joinnerList=res.data;
                    // }else{
                    //   this.joinnerList.concat(res.data);
                    //   console.log('new data== ', this.joinnerList);
                    // }
                }
                else {
                    if (_this.value == '0') {
                        _this.msg = res.message;
                        var alert_1 = _this.alertCtrl.create({
                            message: res.message,
                            buttons: [
                                {
                                    text: 'Ok',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                        _this.navCtrl.pop();
                                    }
                                }
                            ]
                        });
                        alert_1.present();
                    }
                    _this.hideInfiniteScroll = true;
                    // this.apiMessage(res.message);
                }
            });
        });
    };
    WelcomOnboardPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        this.myInfiniteScroll = infiniteScroll;
        setTimeout(function () {
            _this.infiniteScrollCalled = true;
            _this.value = _this.joinnerList.length;
            _this.getJoinnerList();
            console.log('Async operation has ended');
            // this.myInfiniteScroll.complete();
        }, 500);
    };
    WelcomOnboardPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    WelcomOnboardPage.prototype.seeDetails = function (data) {
        this.navCtrl.push('WelcomeOnboardDetailsPage', { 'data': data });
    };
    WelcomOnboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcom-onboard',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/welcom-onboard/welcom-onboard.html"*/'\n<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>Welcome Aboard</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n<div *ngIf="joinnerList">\n    <ion-list>\n          <ion-item *ngFor="let data of joinnerList" (click)="seeDetails(data)">\n            <ion-avatar item-start>\n              <img srcset="{{data?.user_image}}" src="../../assets/watermark/watermark.png" class="userImage">\n            </ion-avatar>\n            <h2>{{data?.name}}</h2>\n          </ion-item>\n        \n      </ion-list>\n</div> \n<div *ngIf="!joinnerList">\n    <ion-list>\n        <ion-item *ngFor="let data of skeltonData">\n            <ion-avatar item-start>\n                <img srcset="{{data?.user_image}}" src="../../assets/watermark/watermark.png" class="userImage blurData">\n            </ion-avatar>\n                <h2 class="blurData">{{data?.name}}</h2>\n          </ion-item>\n      </ion-list>\n</div>\n\n\n\n</ion-content> -->\n<!--\n  Generated template for the WelcomOnboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Welcome Aboard</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n<div *ngIf="joinnerList">\n    <ion-list>\n          <ion-item *ngFor="let data of joinnerList; let i=index" [ngClass]="{\'classTheme\' : (i%2 == 0), \'classwhite\':(i%2 != 0)}" (click)="seeDetails(data)">\n            <ion-avatar item-start>\n                <img *ngIf="data?.image!=\'\'" srcset="{{data?.image}}" src="assets/watermark/watermark.png" class="userImage"/>\n                <img *ngIf="data?.image==\'\'" [src]="\'assets/a2z/\'+data.name[0].toLowerCase()+\'.jpg\'"  class="userImage"/>\n            </ion-avatar>\n            <h2 class="userName">{{data?.name}}</h2>\n            <p class="designation">{{data?.designation}}</p>\n            <p class="designation">{{data?.date_of_joining}}</p>\n          </ion-item>\n        \n      </ion-list>\n</div> \n<div *ngIf="!joinnerList">\n    <ion-list>\n        <ion-item *ngFor="let data of skeltonData">\n            <ion-avatar item-start>\n                <img srcset="{{data?.user_image}}" src="assets/watermark/watermark.png" class="userImage blurData">\n            </ion-avatar>\n                <h2 class="blurData">{{data?.name}}</h2>\n          </ion-item>\n      </ion-list>\n</div>\n\n<!-- <div style="    text-align: center;" *ngIf="msg">\n  <p text-center>{{msg}}</p>\n</div> -->\n\n<ion-infinite-scroll *ngIf="hideInfiniteScroll==false && joinnerList" (ionInfinite)="doInfinite($event)">\n  <ion-infinite-scroll-content></ion-infinite-scroll-content>\n</ion-infinite-scroll>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/welcom-onboard/welcom-onboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], WelcomOnboardPage);
    return WelcomOnboardPage;
}());

//# sourceMappingURL=welcom-onboard.js.map

/***/ }),

/***/ 859:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomOnboardPageModule", function() { return WelcomOnboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcom_onboard__ = __webpack_require__(1187);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WelcomOnboardPageModule = /** @class */ (function () {
    function WelcomOnboardPageModule() {
    }
    WelcomOnboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__welcom_onboard__["a" /* WelcomOnboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__welcom_onboard__["a" /* WelcomOnboardPage */]),
            ],
        })
    ], WelcomOnboardPageModule);
    return WelcomOnboardPageModule;
}());

//# sourceMappingURL=welcom-onboard.module.js.map

/***/ })

});
//# sourceMappingURL=45.js.map
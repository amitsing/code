webpackJsonp([74],{

/***/ 1156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendinglistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_img_viewer__ = __webpack_require__(163);
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
 * Generated class for the PendinglistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PendinglistPage = /** @class */ (function () {
    function PendinglistPage(imageViewerCtrl, toastCtrl, storage, loadingCtrl, actionSheetCtrl, apiServices, navCtrl, navParams) {
        var _this = this;
        this.imageViewerCtrl = imageViewerCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.apiServices = apiServices;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.AandNkey = this.navParams.get('AandNkey');
        this.authority = this.navParams.get('authority');
        if (this.authority == 1) {
            this.authoritykey = 'n';
        }
        if (this.authority == 2) {
            this.authoritykey = 'a';
        }
        this.storage.get('deviceId').then(function (data) {
            console.log('showOnBoard value is111==', data);
            _this.deviceId = data;
        });
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
            console.log(' employeeId== ', _this.employeeId);
        });
        this.dropdownarray = [{ 'key': 'All' }, { 'key': 'pending' }, { 'key': 'Approved' }, { 'key': 'Rejected' }];
        this.area = 'All';
        this.pending(this.area);
    }
    PendinglistPage.prototype.companyFormSelected = function (e) {
        this.area = e;
        console.log('this.area==', e);
        this.pending(this.area);
    };
    //Common Loader:
    PendinglistPage.prototype.commonLoader = function () {
        this.loading = this.loadingCtrl.create({
            enableBackdropDismiss: true,
            spinner: 'ios-small',
            content: 'Loading data...'
        });
        this.loading.present();
    };
    PendinglistPage.prototype.pending = function (statusdata) {
        var _this = this;
        this.commonLoader();
        this.storage.get('login_token').then(function (data) {
            console.log('AlbumDetails value is111==', data);
            _this.login_token = data;
            var apiKey = {
                // "client_id": this.apiServices.clientId,
                // "employee_id":this.employeeId,
                // "device":this.apiServices.device,
                // "device_id":this.deviceId,
                // "app_version":this.apiServices.appVersion,
                // "user_authority":this.AandNkey
                "client_id": _this.apiServices.clientId,
                "employee_id": _this.employeeId,
                "device": _this.apiServices.device,
                "device_id": _this.deviceId,
                "app_version": _this.apiServices.appVersion,
                "user_authority": _this.authoritykey,
                "flag": statusdata
            };
            console.log('AlbumDetails api apiKey==', apiKey);
            _this.apiServices.alltranscationaward(apiKey, _this.login_token).subscribe(function (result) {
                console.log('AlbumDetails api res==', result);
                _this.loading.dismiss();
                if (result.success == 1) {
                    _this.succ = result.success;
                    console.log('AlbumDetails api success res==', result);
                    _this.alldata = result.data;
                }
                else {
                    _this.succ = result.success;
                    _this.msg = result.message;
                    _this.apiMessage(result.message);
                }
            });
        });
    };
    PendinglistPage.prototype.awarddetail = function (nominationid, i, nominationstatus) {
        console.log('this.alldata[i]', this.alldata[i]);
        this.navCtrl.push('AwardeddetailPage', { 'nominationid': nominationid,
            'AandNkey': this.AandNkey, 'alldata': this.alldata[i], 'nominationstatus': nominationstatus,
            'authority': this.authority });
    };
    PendinglistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PendinglistPage');
    };
    PendinglistPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    PendinglistPage.prototype.open = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select status',
            buttons: [
                {
                    text: 'All',
                    role: 'destructive',
                    handler: function () {
                        _this.area = 'All';
                        _this.pending(_this.area);
                        // this.picker(this.camera.PictureSourceType.CAMERA);
                    }
                }, {
                    text: 'Pending',
                    handler: function () {
                        _this.area = 'pending';
                        _this.pending(_this.area);
                    }
                }, {
                    text: 'Approved',
                    handler: function () {
                        _this.area = 'Approved';
                        _this.pending(_this.area);
                    }
                },
                {
                    text: 'Rejected',
                    handler: function () {
                        _this.area = 'Rejected';
                        _this.pending(_this.area);
                    }
                }
            ]
        });
        actionSheet.present();
    };
    PendinglistPage.prototype.dismiss = function () {
        this.navCtrl.pop();
    };
    PendinglistPage.prototype.gotosearch = function () {
        this.navCtrl.push('NominationCategoryPage');
    };
    PendinglistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pendinglist',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/pendinglist/pendinglist.html"*/'\n<ion-header>\n  <!-- <ion-navbar>\n    <ion-title>Dashboard</ion-title>\n  </ion-navbar> -->\n\n  <ion-toolbar color="headColor">\n      <ion-title text-center>\n          Dashboard\n      </ion-title>\n      <ion-buttons left>\n        <button ion-button (click)="dismiss()">\n          <!-- <ion-icon name="close" class="iconClose" style="color:white;"></ion-icon> -->\n          <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-buttons end>\n        <button ion-button (click) = "open()">\n          Status\n            <!-- <ion-icon ios="ios-settings" md="md-settings" class="iconClose" style="color:white;"></ion-icon> -->\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n\n\n</ion-header>\n\n<ion-content>\n<br>\n    <div class="centerIt">\n        <!-- <select style="    width: 95%;\n        border-radius: 11px;" class="mySuggestionSelectBox centerIt" [(ngModel)]="selectValue">\n       \n            <option *ngFor="let areaData of dropdownarray"  [selected]="true">{{areaData.key}}</option>\n        </select> -->\n\n        <!-- <ion-select style="    background: #4d284842;\n        border-radius: 26px;" [ngModel]="area" (ngModelChange)="companyFormSelected($event)">\n         \n\n\n            <ion-option style="    width: 95%;\n            border-radius: 11px;" *ngFor="let areaData of dropdownarray"\n            [selected]="areaData.key==area">{{areaData.key}}</ion-option>\n          </ion-select> -->\n\n      </div>\n\n\n\n\n  <div *ngIf="succ==1">\n  <ion-card class="mrbottom" *ngFor="let pendingdata of alldata; let i=index">\n<ion-row (click)="awarddetail(pendingdata.nomination_id,i,pendingdata.nomination_status)">\n  <ion-col col-4>\n    <div class="proimage"  *ngIf="pendingdata.user?.length==1">\n      <div *ngFor="let data of pendingdata.user;">\n        <ion-row>\n          <ion-col col-12>\n            <div class=centerclass>\n                <img class="imgcss" src="../../assets/watermark/watermark.png" srcset="{{data.user_image}}">\n              </div>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div class="badgeimg"> <img class="imgcss" src="../../assets/watermark/watermark.png" srcset="{{pendingdata.award_image}}">\n       \n      </div>\n  \n    </div>\n     \n    <div   *ngIf="pendingdata.user?.length==5" class="centerclass proimage">\n        <div class="imgcss2">\n    <div *ngFor="let data of pendingdata.user;" class="colargeimg">\n       <img src="../../assets/watermark/watermark.png" srcset="{{data.user_image}}">\n    </div>\n    \n        </div>\n\n        <div class="badgeimg"> <img class="imgcss" src="../../assets/watermark/watermark.png" srcset="{{pendingdata.award_image}}"></div>\n\n      </div>\n    \n      <div   *ngIf="pendingdata.user?.length==2" class="centerclass proimage">\n          <div class="imgcss2"  >\n      <div *ngFor="let data of pendingdata.user;" class="colargeimg2">\n         <img src="../../assets/watermark/watermark.png" srcset="{{data.user_image}}">\n      </div>\n      \n          </div>\n          <div class="badgeimg"> <img class="imgcss" src="../../assets/watermark/watermark.png" srcset="{{pendingdata.award_image}}"></div>\n\n        </div>\n    \n        <div   *ngIf="pendingdata.user?.length==4" class="centerclass proimage">\n            <div class="imgcss2" \n            >\n        <div *ngFor="let data of pendingdata.user;" class="colargeimg4">\n           <img src="../../assets/watermark/watermark.png" srcset="{{data.user_image}}">\n        </div>\n        \n            </div>\n            <div class="badgeimg"> <img class="imgcss" src="../../assets/watermark/watermark.png" srcset="{{pendingdata.award_image}}"></div>\n       \n          </div>\n    \n          <div   *ngIf="pendingdata.user?.length>=6" class="centerclass proimage">\n              <div class="imgcss2"  >\n          <div *ngFor="let data of pendingdata.user;" class="colargeimg6">\n             <img src="../../assets/watermark/watermark.png" srcset="{{data.user_image}}">\n          </div>\n              </div>\n              <div class="badgeimg"> <img class="imgcss" src="../../assets/watermark/watermark.png" srcset="{{pendingdata.award_image}}"></div>\n    \n            </div>\n    \n            <div   *ngIf="pendingdata.user?.length==3" class="centerclass proimage">\n                <div class="imgcss2">\n            <div *ngFor="let data of pendingdata.user;" class="colargeimg3">\n               <img src="../../assets/watermark/watermark.png" srcset="{{data.user_image}}">\n            </div>\n                </div>\n                <div class="badgeimg"> <img class="imgcss" src="../../assets/watermark/watermark.png" srcset="{{pendingdata.award_image}}"></div>\n  \n              </div> \n\n              <p text-center class="font"><b>{{pendingdata.award_name}}</b></p>\n\n  </ion-col>\n  <ion-col col-8>\n    \n          <h2>{{pendingdata.name}}</h2>\n          <p style="font-size: 13px;">{{pendingdata.nomination_status}}</p>\n          <p class="datecss">{{pendingdata.nominated_date}}</p>\n   \n  </ion-col>\n</ion-row>\n</ion-card>\n\n </div>\n\n\n\n\n <div *ngIf="succ==0">\n  <h1 style="text-align:center">{{msg}}</h1>\n</div>  \n \n\n\n\n</ion-content>\n<ion-row *ngIf="authoritykey==\'n\'" class="nominateclass" (click)="gotosearch()">\n  <ion-col no-padding><button ion-button full class="btn">Nominate Now</button></ion-col>\n</ion-row>'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/pendinglist/pendinglist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_img_viewer__["a" /* ImageViewerController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], PendinglistPage);
    return PendinglistPage;
}());

//# sourceMappingURL=pendinglist.js.map

/***/ }),

/***/ 828:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendinglistPageModule", function() { return PendinglistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pendinglist__ = __webpack_require__(1156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PendinglistPageModule = /** @class */ (function () {
    function PendinglistPageModule() {
    }
    PendinglistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pendinglist__["a" /* PendinglistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pendinglist__["a" /* PendinglistPage */]),
            ],
        })
    ], PendinglistPageModule);
    return PendinglistPageModule;
}());

//# sourceMappingURL=pendinglist.module.js.map

/***/ })

});
//# sourceMappingURL=74.js.map
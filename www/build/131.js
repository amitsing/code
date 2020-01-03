webpackJsonp([131],{

/***/ 1029:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AwardeddetailPage; });
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
 * Generated class for the AwardeddetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AwardeddetailPage = /** @class */ (function () {
    function AwardeddetailPage(navCtrl, navParams, alertCtrl, platform, toastCtrl, storage, loadingCtrl, apiServices) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.apiServices = apiServices;
        this.comment = '';
        // this.AandNkey=this.navParams.get('AandNkey');
        this.alldata = this.navParams.get('alldata');
        this.authority = this.navParams.get('authority');
        this.nominationstatus = this.navParams.get('nominationstatus');
        // console.log('this.nominationstatus',this.nominationstatus);
        if (this.authority == 1) {
            this.AandNkey = 'n';
        }
        if (this.authority == 2) {
            this.AandNkey = 'a';
            // if(this.nominationstatus=='Pending'){
            //   this.AandNkey='a';
            // }else{
            //   this.AandNkey='n';
            // }
        }
        console.log('this.AandNkey', this.AandNkey);
        console.log('this.alldata', this.alldata);
        this.nominationid = this.navParams.get('nominationid');
        console.log('this.nominationid', this.nominationid);
        this.awarddetail();
    }
    //Common Loader:
    AwardeddetailPage.prototype.commonLoader = function () {
        this.loading = this.loadingCtrl.create({
            enableBackdropDismiss: true,
            spinner: 'ios-small',
            content: 'Loading data...'
        });
        this.loading.present();
    };
    AwardeddetailPage.prototype.awarddetail = function () {
        var _this = this;
        this.commonLoader();
        // alert('1');
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
            var apiKey = {
                "client_id": _this.apiServices.clientId,
                "employee_id": _this.employeeId,
                "device": _this.apiServices.device,
                "device_id": _this.deviceId,
                "app_version": _this.apiServices.appVersion,
                "nomination_id": _this.nominationid,
            };
            _this.apiServices.awardsdetail(apiKey, _this.login_token)
                .subscribe(function (res) {
                console.log('', res);
                _this.loading.dismiss();
                if (res.success == 1) {
                    _this.awardsdetaildata = res.data;
                    _this.nomnistatus = _this.awardsdetaildata.nomination_status;
                    _this.awardsimage = _this.awardsdetaildata.award_icon;
                    _this.awardsdiscription = _this.awardsdetaildata.award_description;
                    _this.nomnidesignation = _this.awardsdetaildata.nominated_by_designation;
                    _this.nominatedby = _this.awardsdetaildata.nominated_by;
                    _this.nominated_by_image = _this.awardsdetaildata.nominated_by_image;
                    _this.nominateddate = _this.awardsdetaildata.nominated_date;
                    _this.user = _this.awardsdetaildata.user;
                    _this.unit_name = _this.awardsdetaildata.unit_name;
                    _this.awardstype = _this.awardsdetaildata.award_type;
                    console.log('this.user', _this.user);
                    _this.alluser = _this.user;
                }
                else {
                    _this.apiMessage(res.message);
                }
            }, function (err) {
                console.log('err== ', err);
                _this.apiMessage(err);
            });
        });
    };
    AwardeddetailPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    AwardeddetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AwardeddetailPage');
    };
    AwardeddetailPage.prototype.submit = function () {
        this.navCtrl.pop();
    };
    AwardeddetailPage.prototype.acceptreject = function (appkey) {
        if (appkey == 'r') {
            this.arkey = '2';
            this.msg = 'rejected successfully.';
            this.apiMessage(this.msg);
            this.navCtrl.pop();
        }
        if (appkey == 'a') {
            this.msg = 'accepted successfully.';
            this.apiMessage(this.msg);
            this.navCtrl.pop();
            this.arkey = '1';
        }
        // this.commonLoader();
        // this.storage.get('employeeId').then(data => {
        //   this.employeeId = data;
        //   console.log(' employeeId== ', this.employeeId);
        // });
        // this.storage.get('login_token').then((data) => {
        //   console.log('showOnBoard value is111==', data);
        //   this.login_token = data;
        // })
        // this.storage.get('deviceId').then(data => {
        //   this.deviceId = data;
        //   let apiKey = {
        //     "client_id": this.apiServices.clientId,
        //     "employee_id":this.employeeId,
        //     "device":this.apiServices.device,
        //     "device_id":this.deviceId,
        //     "nomination_id":this.nominationid,
        //     "action":this.arkey,
        //     "app_version":this.apiServices.appVersion,
        //     "level_of_approval":this.alldata.approval_level,
        //     "rejection_remark":this.comment,
        //     "award_id":this.alldata.award_id,
        //     "unit_id":this.alldata.unit_id
        //   };
        //   this.apiServices.reject(apiKey, this.login_token)
        //     .subscribe((res) => {
        //       console.log('', res);
        //        this.loading.dismiss();
        //       if (res.success == 1) {
        //     this.apiMessage(res.message);
        //      this.navCtrl.pop();
        //         // console.log('this.user', this.user);
        //       } else {
        //         this.apiMessage(res.message);
        //       }
        //     }, (err) => {
        //       // console.log('err== ', err);
        //       this.apiMessage(err);
        //     });
        // });
    };
    AwardeddetailPage.prototype.presentPrompt = function (r) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Login',
            inputs: [
                {
                    name: 'username',
                    placeholder: 'please write here'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function (data) {
                        _this.comment = data.username;
                        if (_this.comment == undefined || _this.comment == '') {
                            _this.aleretmsg = 'please write reason';
                            _this.apiMessage(_this.aleretmsg);
                            return false;
                        }
                        _this.acceptreject(r);
                        // else {
                        //   return false;
                        // }
                    }
                }
            ]
        });
        alert.present();
    };
    AwardeddetailPage.prototype.gotosearchlist = function (user) {
        this.allawardsdata = { 'award_type': this.awardstype };
        console.log('alluser', this.alluser);
        this.navCtrl.push('SelectedUserPage', { 'allawardsdata': this.allawardsdata, 'user': this.alluser });
    };
    AwardeddetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-awardeddetail',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/awardeddetail/awardeddetail.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Award Detail</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n<ion-card>\n  <div  *ngIf="user?.length==1">\n  <div *ngFor="let data of user;">\n    <ion-row>\n      <ion-col col-12>\n        <div class=centerclass>\n            <img class="imgcss" src="../../assets/watermark/watermark.png" srcset="{{data.user_image}}">\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n  <p class="centerclass1">{{unit_name}}</p>\n<p class="centergreen">Approval Status:{{nomnistatus}}</p>\n</div>\n\n<div   *ngIf="user?.length==5" class=centerclass>\n    <div style="height: 140px;\n    width: 140px;\n    border: 1px solid;\n    border-radius: 50%;overflow:hidden;" >\n<div *ngFor="let data of user;" class="colargeimg">\n   <img src="../../assets/watermark/watermark.png" srcset="{{data.user_image}}">\n</div>\n\n    </div>\n    <p class="centerclass1">{{unit_name}}</p>\n<p class="centergreen">Approval Status:{{nomnistatus}}</p>\n  </div>\n\n  <div   *ngIf="user?.length==2" class=centerclass>\n      <div style="height: 140px;\n      width: 140px;\n      border: 1px solid;\n      border-radius: 50%;overflow:hidden;" >\n  <div *ngFor="let data of user;" class="colargeimg2">\n     <img src="../../assets/watermark/watermark.png" srcset="{{data.user_image}}">\n  </div>\n  \n      </div>\n      <p class="centerclass1">{{unit_name}}</p>\n  <p class="centergreen">Approval Status:{{nomnistatus}}</p>\n    </div>\n\n    <div   *ngIf="user?.length==4" class=centerclass>\n        <div style="height: 140px;\n        width: 140px;\n        border: 1px solid;\n        border-radius: 50%;overflow:hidden;" >\n    <div *ngFor="let data of user;" class="colargeimg4">\n       <img src="../../assets/watermark/watermark.png" srcset="{{data.user_image}}">\n    </div>\n    \n        </div>\n        <p class="centerclass1">{{unit_name}}</p>\n    <p class="centergreen">Approval Status:{{nomnistatus}}</p>\n      </div>\n\n      <div   *ngIf="user?.length>=6" class=centerclass>\n          <div style="height: 140px;\n          width: 140px;\n          border: 1px solid;\n          border-radius: 50%;overflow:hidden;" >\n      <div *ngFor="let data of user;" class="colargeimg6">\n         <img src="../../assets/watermark/watermark.png" srcset="{{data.user_image}}">\n      </div>\n          </div>\n          <p class="centerclass1">{{unit_name}}</p>\n      <p class="centergreen">Approval Status:{{nomnistatus}}</p>\n        </div>\n\n        <div   *ngIf="user?.length==3" class=centerclass>\n            <div style="height: 140px;\n            width: 140px;\n            border: 1px solid;\n            border-radius: 50%;overflow:hidden;" >\n        <div *ngFor="let data of user;" class="colargeimg3">\n           <img src="../../assets/watermark/watermark.png" srcset="{{data.user_image}}">\n        </div>\n            </div>\n            <p class="centerclass1">{{unit_name}}</p>\n        <p class="centergreen">Approval Status:{{nomnistatus}}</p>\n          </div>\n\n</ion-card>\n<ion-card>\n<ion-row>\n  <ion-col col-6> <p class="marginleft bold">Nominated by:</p></ion-col>\n  <ion-col col-6 style="    text-align: -webkit-right;">\n     <!-- <p class="margin bold">Nominated by:</p> -->\n\n    <!-- <img class="imgcss8" src="../../assets/watermark/watermark.png">  -->\n  </ion-col>\n</ion-row>\n\n  <!-- <p class="marginleft bold">Nominated by:</p> -->\n  <ion-row>\n      <ion-col col-2></ion-col>\n    <ion-col col-6 class="">\n        <p class="nominateclass">{{nominatedby}}</p>\n        <p class="nominateclass">{{nomnidesignation}}</p>\n       \n    </ion-col>\n    <ion-col col-4>\n        <img class="imgcss7" src="../../assets/watermark/watermark.png" srcset="{{nominated_by_image}}"> \n    </ion-col>\n  </ion-row>\n  \n</ion-card>\n\n\n\n\n<ion-card *ngIf="user?.length>1">\n  <!-- <p class="marginleft">Team Members</p> -->\n\n  <ion-row>\n      <ion-col col-6> <p class="marginleft bold">Team Members</p></ion-col>\n      <ion-col col-6 *ngIf="AandNkey==\'a\'" style="    text-align: -webkit-right;" (click)="gotosearchlist(user)">\n         <!-- <p class="margin bold">Nominated by:</p> -->\n    \n        <img class="imgcss8" src="../../assets/imgs/edit icon .png"> \n      </ion-col>\n    </ion-row>\n\n\n    <ion-slides speed="500" spaceBetween="0" slidesPerView="2.8" class="visibleOverflow">\n        <ion-slide class="slidecss" *ngFor="let data of user; let i=index">\n          <div class="divcss">\n            <ion-row>\n              <ion-col col-12 class="centerclass">\n                  <img class="imgcss1" src="../../assets/watermark/watermark.png" srcset="{{data.user_image}}"> \n              </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-12>\n                   <P class="fontsize">{{data.user_name}}</P>\n                   <P class="mrbottom">{{data.designation}}</P>\n                   <P>{{data.country}}</P>\n                </ion-col>\n              </ion-row>\n          </div>\n        </ion-slide>\n    </ion-slides>\n</ion-card>\n\n<div class="awardDiv">\n  <ion-card>\n    <ion-row>\n      <ion-col col-12><p class="bold">Awards Nominated for</p></ion-col>\n      <ion-col col-12><img src="../../assets/watermark/watermark.png" srcset="{{awardsimage}}"></ion-col>\n    </ion-row>\n    <div class="awardOverDiv">\n      <ion-row>\n        <ion-col col-12>\n          <p class="marginpx">{{awardsdiscription}}</p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-7></ion-col>\n          <ion-col col-5>\n            <!-- <p class="marginpx1">{{nominatedby}}</p>\n            <p class="marginpx2">{{nomnidesignation}}</p> -->\n            <p class="marginpx3">{{nominateddate}}</p>\n          </ion-col>\n        </ion-row>\n    </div>\n  </ion-card>\n</div><br><br>\n\n<div *ngIf="AandNkey==\'n\'"  style="text-align: center;" (click)="submit()" ><br>\n  <button ion-button class="btn" round>Ok</button>\n </div> \n\n<ion-row>\n  <ion-col col-6>\n    <div *ngIf="AandNkey==\'a\'"  style="text-align: center;" (click)="acceptreject(\'a\')" ><br>\n      <button ion-button class="btn" round>Accept</button>\n     </div>\n  </ion-col>\n  <ion-col col-6>\n    <div *ngIf="AandNkey==\'a\'"  style="text-align: center;" (click)="presentPrompt(\'r\')" ><br>\n      <button ion-button class="btn" round>reject</button>\n     </div> \n  </ion-col>\n</ion-row>\n\n \n\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/awardeddetail/awardeddetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */]])
    ], AwardeddetailPage);
    return AwardeddetailPage;
}());

//# sourceMappingURL=awardeddetail.js.map

/***/ }),

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwardeddetailPageModule", function() { return AwardeddetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__awardeddetail__ = __webpack_require__(1029);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AwardeddetailPageModule = /** @class */ (function () {
    function AwardeddetailPageModule() {
    }
    AwardeddetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__awardeddetail__["a" /* AwardeddetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__awardeddetail__["a" /* AwardeddetailPage */]),
            ],
        })
    ], AwardeddetailPageModule);
    return AwardeddetailPageModule;
}());

//# sourceMappingURL=awardeddetail.module.js.map

/***/ })

});
//# sourceMappingURL=131.js.map
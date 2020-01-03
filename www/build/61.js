webpackJsonp([61],{

/***/ 1169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowAllCommentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_services_imagecontroller__ = __webpack_require__(371);
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
 * Generated class for the ShowAllCommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ShowAllCommentPage = /** @class */ (function () {
    function ShowAllCommentPage(navCtrl, navParams, toastCtrl, iab, storage, apiServices, imgprovider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.iab = iab;
        this.storage = storage;
        this.apiServices = apiServices;
        this.imgprovider = imgprovider;
        this.commentdata = [];
        this.options = {
            location: 'no',
            hidden: 'no',
            // clearcache : 'yes',
            // clearsessioncache : 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Back',
            closebuttoncolor: '#f04141',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
            footer: 'yes',
            footercolor: '#939399',
        };
        this.previousData = this.navParams.get('data');
        this.flag = this.navParams.get('flag');
        console.log(this.previousData);
        console.log(this.flag);
        var d = new Date(), minutes = d.getMinutes().toString().length == 1 ? '0' + d.getMinutes() : d.getMinutes(), hours = d.getHours().toString().length == 1 ? '0' + d.getHours() : d.getHours(), ampm = d.getHours() >= 12 ? 'PM' : 'AM', months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        this.dis = d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear() + ' ' + hours + ':' + minutes + ' ' + ampm;
    }
    ShowAllCommentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShowAllCommentPage');
        this.getallcomment();
    };
    ShowAllCommentPage.prototype.getallcomment = function () {
        var _this = this;
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
            console.log(' employeeId== ', _this.employeeId);
        });
        this.storage.get('deviceId').then(function (data) {
            console.log('showOnBoard value is111==', data);
            _this.deviceId = data;
        });
        // console.log('this.previousePagedata.auto_id==', this.previousePagedata.auto_id);
        this.storage.get('login_token').then(function (data) {
            console.log('AlbumDetails value is111==', data);
            _this.login_token = data;
            var apiKey = {
                "client_id": _this.apiServices.clientId,
                "employee_id": _this.employeeId,
                "device": _this.apiServices.device,
                "device_id": _this.deviceId,
                "app_version": _this.apiServices.appVersion,
                "flag": _this.flag,
                "post_id": _this.previousData.auto_id,
                "val": "0"
            };
            console.log('AlbumDetails api apiKey==', apiKey);
            _this.apiServices.getallcomment(apiKey, _this.login_token).subscribe(function (result) {
                console.log('AlbumDetails api res==', result);
                if (result.success == 1) {
                    _this.commentdata = result.data;
                    console.log('album emp list==', result.data);
                }
                else {
                    // this.commentdata =[];
                }
            });
        });
    };
    ShowAllCommentPage.prototype.sendComment = function (form) {
        var _this = this;
        this.storage.get('user_image').then(function (data) {
            _this.user_image = data;
            console.log(' user_image== ', _this.user_image);
        });
        this.storage.get('first_name').then(function (data) {
            _this.first_name = data;
            console.log(' first_name== ', _this.first_name);
        });
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
            console.log(' employeeId== ', _this.employeeId);
        });
        this.storage.get('deviceId').then(function (data) {
            console.log('showOnBoard value is111==', data);
            _this.deviceId = data;
        });
        // 
        if (this.mycomment == undefined || this.mycomment == '') {
            var message = 'please write comment';
            // this.presentToast(message);
            this.apiMessage(message);
            return false;
        }
        //----------------------------
        this.storage.get('login_token').then(function (data) {
            console.log('AlbumDetails value is111==', data);
            _this.login_token = data;
            var apiKey = {
                "client_id": _this.apiServices.clientId,
                "employee_id": _this.employeeId,
                "device": _this.apiServices.device,
                "device_id": _this.deviceId,
                "app_version": _this.apiServices.appVersion,
                "flag": _this.flag,
                "post_id": _this.previousData.auto_id,
                "comment": _this.mycomment
            };
            console.log('Send Comment Request:', apiKey);
            _this.apiServices.createcomment(apiKey, _this.login_token)
                .subscribe(function (res) {
                console.log('Send Comment Request:', res);
                if (res.success == 1) {
                    var obj = {
                        'comment_by_name': _this.first_name,
                        'comment': _this.mycomment,
                        'date_time': _this.dis,
                        'comment_by_image': _this.user_image
                    };
                    _this.commentdata.unshift(obj);
                    _this.totalcomment = parseInt(_this.totalcomment) + 1;
                    _this.previousData.comment_count++;
                    form.reset();
                }
            });
        });
    };
    ShowAllCommentPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    ShowAllCommentPage.prototype.handleClick = function (event) {
        if (event.target.tagName == "A") {
            this.iab.create(event.target.href, "_system", this.options);
            return false;
        }
    };
    // Zoom Image:
    ShowAllCommentPage.prototype.pp = function (img) {
        this.imgprovider.presentImage(img);
    };
    ShowAllCommentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-show-all-comment',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/show-all-comment/show-all-comment.html"*/'<!--\n  Generated template for the ShowAllCommentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title *ngIf="previousData?.comment_count==1">{{previousData?.comment_count}}  &nbsp;Comment</ion-title>\n    <ion-title *ngIf="previousData?.comment_count>1">{{previousData?.comment_count}} &nbsp;Comments</ion-title>\n    <ion-title *ngIf="previousData?.comment_count<1">No Comments To Display</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-row class="margincss" *ngFor="let cmt of commentdata">\n    <ion-col col-2>\n        <div class="commentimg" >\n            <img class="imgcss2" onErrro="this.src=\'assets/watermark/watermark.png\';" [src]="cmt.comment_by_image" #imgs (click)="pp(imgs)">\n        </div>\n    </ion-col>\n    <ion-col col-10 class="colcolor">\n      <ion-row>\n          <ion-col col-7 no-padding>\n              <p class="mrtop uName">{{cmt.comment_by_name}}</p>\n          </ion-col>\n          <ion-col col-5 no-padding>\n              <p style="font-size: 10px;" class="mrtop1">{{cmt.date_time}}</p>\n          </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col col-12 no-padding>\n              <p class="mrtop" [innerHTML]="cmt.comment" (click)="handleClick($event)"></p>\n          </ion-col>\n      </ion-row>\n    </ion-col>\n</ion-row>\n</ion-content>\n<ion-footer style="margin-bottom:-3px;">\n  <form #f="ngForm" style="background-color: white;">\n    <ion-row style="\n                     border-top: 1px solid grey;">\n      <ion-col col-11>\n        <div style="background-color: white;\n                \n                  border-radius: 15px;\n                  ">\n                  <ion-item>\n                      <ion-textarea msd-elastic style="border-radius:20px;" type="text" class="textButton" [(ngModel)]="mycomment" name="mycomment" placeholder="Write your comments..."\n                      required>\n                    </ion-textarea>\n                  </ion-item>\n        </div>\n      </ion-col>\n      <ion-col col-1 class="sendButtonColCss" *ngIf="mycomment!= null || mycomment!= undefined" (tap)="sendComment(f)">\n        <ion-icon class="sendButtonCss" name="send"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-footer>'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/show-all-comment/show-all-comment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_services_imagecontroller__["a" /* ImagecontrollerProvider */]])
    ], ShowAllCommentPage);
    return ShowAllCommentPage;
}());

//# sourceMappingURL=show-all-comment.js.map

/***/ }),

/***/ 841:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowAllCommentPageModule", function() { return ShowAllCommentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__show_all_comment__ = __webpack_require__(1169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ShowAllCommentPageModule = /** @class */ (function () {
    function ShowAllCommentPageModule() {
    }
    ShowAllCommentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__show_all_comment__["a" /* ShowAllCommentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__show_all_comment__["a" /* ShowAllCommentPage */]),
            ],
        })
    ], ShowAllCommentPageModule);
    return ShowAllCommentPageModule;
}());

//# sourceMappingURL=show-all-comment.module.js.map

/***/ })

});
//# sourceMappingURL=61.js.map
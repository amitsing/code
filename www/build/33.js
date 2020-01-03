webpackJsonp([33],{

/***/ 1154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OprationdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_img_viewer__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(164);
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
 * Generated class for the OprationdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OprationdetailPage = /** @class */ (function () {
    function OprationdetailPage(imageViewerCtrl, toastCtrl, storage, loadingCtrl, iab, apiServices, navCtrl, navParams) {
        var _this = this;
        this.imageViewerCtrl = imageViewerCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.iab = iab;
        this.apiServices = apiServices;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.commentdata = [];
        this.displayBox = false;
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
        this.flagdata = this.navParams.get('data');
        console.log('this.flagdata', this.flagdata);
        var d = new Date(), minutes = d.getMinutes().toString().length == 1 ? '0' + d.getMinutes() : d.getMinutes(), hours = d.getHours().toString().length == 1 ? '0' + d.getHours() : d.getHours(), ampm = d.getHours() >= 12 ? 'PM' : 'AM', months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        this.dis = d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear() + ' ' + hours + ':' + minutes + ' ' + ampm;
        this.showPostData = [{ images: "../../assets/imgs/homePage/thoughOfTheDay/1.png" },
            { images: "../../assets/imgs/homePage/thoughOfTheDay/1.png" },
            { images: "../../assets/imgs/homePage/thoughOfTheDay/1.png" },
            { images: "../../assets/imgs/homePage/thoughOfTheDay/1.png" }];
        this.storage.get('deviceId').then(function (data) {
            console.log('showOnBoard value is111==', data);
            _this.deviceId = data;
        });
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
            console.log(' employeeId== ', _this.employeeId);
        });
        this.postdetail();
        this.getallcomment();
    }
    //Common Loader:
    OprationdetailPage.prototype.commonLoader = function () {
        this.loading = this.loadingCtrl.create({
            enableBackdropDismiss: true,
            spinner: 'ios-small',
            content: 'Loading data...'
        });
        this.loading.present();
    };
    OprationdetailPage.prototype.postdetail = function () {
        var _this = this;
        this.commonLoader();
        this.storage.get('login_token').then(function (data) {
            console.log('AlbumDetails value is111==', data);
            _this.login_token = data;
            var apiKey = {
                "client_id": _this.apiServices.clientId,
                "employee_id": _this.employeeId,
                "device": _this.apiServices.device,
                "device_id": _this.deviceId,
                "app_version": _this.apiServices.appVersion,
                "flag": _this.flagdata.flag,
                "post_id": _this.flagdata.auto_id
            };
            console.log('AlbumDetails api apiKey==', apiKey);
            _this.apiServices.postdetail(apiKey, _this.login_token).subscribe(function (result) {
                console.log('AlbumDetails api res==', result);
                _this.loading.dismiss();
                if (result.success == 1) {
                    _this.pramoteddata = result.data[0];
                    _this.mediatype = _this.pramoteddata.media_type;
                    _this.pramotedimage = _this.pramoteddata.image;
                    _this.title = _this.pramoteddata.title;
                    _this.content = _this.pramoteddata.content;
                    _this.date = _this.pramoteddata.publish_date;
                    _this.thumbnail_image = _this.pramoteddata.thumbnail_image;
                    console.log('this.pramoteddata==', _this.pramoteddata);
                    _this.totallike = parseInt(_this.pramoteddata.like_count);
                    _this.totalcomment = parseInt(_this.pramoteddata.comment_count);
                    _this.like_status = parseInt(_this.pramoteddata.like_status);
                }
                else {
                    _this.apiMessage(result.message);
                }
            });
        });
    };
    OprationdetailPage.prototype.goforlike = function (likestatus) {
        var _this = this;
        this.like_status = likestatus;
        if (this.like_status == 1) {
            this.totallike = this.totallike - 1;
            this.like_status = 0;
        }
        else {
            this.like_status = 1;
            this.totallike = this.totallike + 1;
        }
        // console.log('this.postid',this.postid);
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
            console.log(' employeeId== ', _this.employeeId);
        });
        this.storage.get('deviceId').then(function (data) {
            console.log('showOnBoard value is111==', data);
            _this.deviceId = data;
        });
        // console.log('this.previousePagedata.auto_id==', this.previousePagedata.auto_id);
        // console.log('this.postid1234',this.postid);
        this.storage.get('login_token').then(function (data) {
            console.log('AlbumDetails value is111==', data);
            _this.login_token = data;
            var apiKey = {
                "client_id": _this.apiServices.clientId,
                "employee_id": _this.employeeId,
                "device": _this.apiServices.device,
                "device_id": _this.deviceId,
                "app_version": _this.apiServices.appVersion,
                "flag": _this.flagdata.flag,
                "post_id": _this.flagdata.auto_id,
                "status": _this.like_status
            };
            console.log('AlbumDetails api apiKey==', apiKey);
            _this.apiServices.createlike(apiKey, _this.login_token).subscribe(function (result) {
                console.log('AlbumDetails api res==', result);
                if (result.success == 1) {
                    // this.apiMessage(result.message);
                    console.log('album emp list==', result.data);
                }
                else {
                    _this.apiMessage(result.message);
                }
            });
        });
    };
    OprationdetailPage.prototype.getallcomment = function () {
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
        // console.log('this.postid1234',this.postid);
        this.storage.get('login_token').then(function (data) {
            console.log('AlbumDetails value is111==', data);
            _this.login_token = data;
            var apiKey = {
                "client_id": _this.apiServices.clientId,
                "employee_id": _this.employeeId,
                "device": _this.apiServices.device,
                "device_id": _this.deviceId,
                "app_version": _this.apiServices.appVersion,
                "flag": '43',
                "post_id": _this.flagdata.auto_id,
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
                    // this.apiMessage(result.message);
                }
            });
        });
    };
    OprationdetailPage.prototype.goforcomment = function () {
        this.displayBox = true;
    };
    OprationdetailPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    //Send Comment
    OprationdetailPage.prototype.sendComment = function (form) {
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
                "flag": _this.flagdata.flag,
                "post_id": _this.flagdata.auto_id,
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
                    form.reset();
                    _this.displayBox = false;
                }
            });
        });
    };
    OprationdetailPage.prototype.gotolikelist = function () {
        if (this.totallike > 0) {
            this.navCtrl.push('LikeUsersListPage', { 'data': this.flagdata, 'flag': this.flagdata.flag });
        }
    };
    OprationdetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OprationdetailPage');
    };
    // apiMessage(message) {
    //   const toast = this.toastCtrl.create({
    //     message: message,
    //     duration: 3000
    //   });
    //   toast.present();
    // }
    OprationdetailPage.prototype.handleClick = function (event) {
        if (event.target.tagName == "A") {
            this.iab.create(event.target.href, "_system");
            return false;
        }
    };
    OprationdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-oprationdetail',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/oprationdetail/oprationdetail.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<div><p class="paracss">{{title}}</p></div>\n<div><p class="paracss1">{{date}}</p></div>\n<div> \n   <!-- <img class="imgcss" src="../../assets/imgs/ceo.jpg" srcset="{{pramotedimage}}"> -->\n\n   <img *ngIf="mediatype==\'1\'" class="imgcss" onerror="this.src=\'../../assets/watermark/watermark.png\'" #myImage\n   src="{{pramotedimage}}" (click)="presentImage(myImage)"  >\n  \n<div  *ngIf="mediatype==\'3\'"> \n   <iframe  width="100%" style="height:180px;"\n   [src]="pramotedimage+\'?autoplay=0\'|safe" autostart="0"\n   allowfullscreen frameborder="0" scrolling="no"></iframe>\n</div>\n    \n<div *ngIf="mediatype==\'2\'">\n    <video [src]="pramotedimage|safe" height="180px"  width="100%"  poster="{{thumbnail_image}}" controls controlsList="nodownload" type="video/*">\n    </video>\n\n   <!-- <video [src]="pramotedimage|safe" style="height:180px;width:100%"  #videoPlayer   controls controlsList="nodownload" type="video/*"> -->\n   <!-- </video> -->\n </div>\n\n  </div>\n \n<div><p class="paracs2" (click)="handleClick($event)" [innerHTML]="content"></p></div>\n  <!-- <div> -->\n\n      <ion-row class="margincss">\n          <ion-col col-3 class="bordercss"  (click)="gotolikelist()">\n        <p *ngIf="totallike==0">Like</p>\n        <p *ngIf="totallike==1">{{totallike}}&nbsp;Like</p>\n        <p *ngIf="totallike>1">{{totallike}}&nbsp;Likes</p>\n          </ion-col>\n          <ion-col col-9 class="bordercss">\n        <p *ngIf="totalcomment==0">Comment</p>\n        <p *ngIf="totalcomment==1">{{totalcomment}}&nbsp;Comment</p>\n        <p *ngIf="totalcomment>1">{{totalcomment}}&nbsp;Comments</p>\n            </ion-col>\n        </ion-row>\n\n        <ion-row class="margincss">\n            <ion-col col-6 (click)="goforlike(like_status)">\n              <p *ngIf="like_status==1" ><span> <ion-icon ios="ios-thumbs-up" md="md-thumbs-up"></ion-icon></span>&nbsp;Like</p>\n              <p *ngIf="like_status==0"><span> <ion-icon ios="ios-thumbs-up-outline" md="ios-thumbs-up-outline"></ion-icon></span>&nbsp;Like</p>\n            </ion-col>\n            <ion-col col-6 class="bordercss1" (click)="goforcomment()">\n          <p><span><ion-icon ios="ios-text" md="md-text"></ion-icon></span>&nbsp;Comment</p>\n              </ion-col>\n          </ion-row>\n<hr>   \n\n\n    <!-- <ion-row>\n      <ion-col col-3>\n        <ion-icon name="ios-heart-outline"></ion-icon>\n      </ion-col>\n      <ion-col col-3>\n      <ion-icon name="ios-text-outline"></ion-icon>\n      </ion-col>\n      <ion-col col-6>\n      </ion-col>\n    </ion-row>\n  </div>\n  <hr>\n  <ion-row>\n    <ion-col col-3>\n        <ion-icon name="ios-heart"></ion-icon>\n        <span class="commentLiterals">\n         10 Likes\n        </span>\n    </ion-col>\n    <ion-col col-9>\n        <ion-icon name="ios-text"></ion-icon>\n        <span  class="commentLiterals">\n          5 Comments\n        </span>\n        \n      </ion-col>\n  </ion-row>\n \n<ion-row>\n  <ion-col col-2><hr></ion-col>\n  <ion-col col-3>Likes</ion-col>\n  <ion-col col-7><hr></ion-col>\n</ion-row>\n\n<ion-row  style="background-color:#f2f2f2;">\n    <ion-col col-auto *ngFor="let data of showPostData; let i = index">\n        <div *ngIf="i<3">\n          <img *ngIf="data.images!=\'\'" #myImage class="mycircle" src="{{data.images}}">\n        </div>\n        <p class="mycirclenamemore1"\n        *ngIf="i == 3" (tap)="goToLikePage()">\n        <ion-icon style="font-size: 49px;" name="ios-more"></ion-icon>\n        </p>\n    </ion-col>\n  </ion-row> -->\n\n \n  <!-- <ion-row class="margincss" >\n      <ion-col col-12 >\n    <p *ngIf="totalcomment<=1">{{totalcomment}}&nbsp;Comment</p>\n    <p *ngIf="totalcomment>1">{{totalcomment}}&nbsp;Comments</p>\n    </ion-col>\n  </ion-row> -->\n\n  <ion-row class="margincss" *ngFor="let cmt of commentdata">\n      <ion-col col-2>\n          <div class="commentimg">\n              <img class="imgcss2"  src="../../assets/watermark/watermark.png" srcset="{{cmt.comment_by_image}}">\n          </div>\n      </ion-col>\n\n      <ion-col col-10 class="colcolor">\n<ion-row>\n  <ion-col col-7 no-padding>\n      <p class="mrtop uName">{{cmt.comment_by_name}}</p>\n  </ion-col>\n  <ion-col col-5 no-padding>\n      <p class="mrtop1">{{cmt.date_time}}</p>\n  </ion-col>\n</ion-row>\n\n        <ion-row>\n          <ion-col col-12>\n<p class="mrtop" (click)="handleClick($event)" [innerHTML]="cmt.comment"></p>\n          </ion-col>\n         \n        </ion-row>\n          </ion-col>\n    </ion-row>\n    <br><br><br><br><br>\n\n</ion-content>\n<ion-footer  *ngIf="displayBox==true">\n    <form #f="ngForm" style="background-color: white;">\n      <ion-row class="rowborder">\n        <ion-col col-11>\n          <div class="footerdiv">\n            <ion-item>\n                <ion-textarea msd-elastic style="border-radius:20px;" type="text" class="textButton" [(ngModel)]="mycomment" name="mycomment" placeholder="Write your comments..."\n                required>\n              </ion-textarea>\n            </ion-item>\n          </div>\n        </ion-col>\n        <ion-col col-1 class="sendButtonColCss" *ngIf="mycomment!= null || mycomment!= undefined" (click)="sendComment(f)">\n          <ion-icon class="sendButtonCss" name="send"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-footer>'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/oprationdetail/oprationdetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_img_viewer__["a" /* ImageViewerController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], OprationdetailPage);
    return OprationdetailPage;
}());

//# sourceMappingURL=oprationdetail.js.map

/***/ }),

/***/ 826:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OprationdetailPageModule", function() { return OprationdetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__oprationdetail__ = __webpack_require__(1154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(867);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OprationdetailPageModule = /** @class */ (function () {
    function OprationdetailPageModule() {
    }
    OprationdetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__oprationdetail__["a" /* OprationdetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__oprationdetail__["a" /* OprationdetailPage */]), __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], OprationdetailPageModule);
    return OprationdetailPageModule;
}());

//# sourceMappingURL=oprationdetail.module.js.map

/***/ }),

/***/ 867:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__safe_safe__ = __webpack_require__(868);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__safe_html_safe_html__ = __webpack_require__(869);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__safe_safe__["a" /* SafePipe */], __WEBPACK_IMPORTED_MODULE_2__safe_html_safe_html__["a" /* SafeHtmlPipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__safe_safe__["a" /* SafePipe */], __WEBPACK_IMPORTED_MODULE_2__safe_html_safe_html__["a" /* SafeHtmlPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 868:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(32);
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
 * Generated class for the SafePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var SafePipe = /** @class */ (function () {
    /**
     * Takes a value and makes it lowercase.
     */
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'safe',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SafePipe);
    return SafePipe;
}());

//# sourceMappingURL=safe.js.map

/***/ }),

/***/ 869:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(32);
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
 * Generated class for the SafeHtmlPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var SafeHtmlPipe = /** @class */ (function () {
    /**
     * Takes a value and makes it lowercase.
     */
    function SafeHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    // transform(value: string, ...args) {
    //   return value.toLowerCase();
    // }
    SafeHtmlPipe.prototype.transform = function (style) {
        return this.sanitizer.bypassSecurityTrustHtml(style);
        //return this.sanitizer.bypassSecurityTrustStyle(style);
        // return this.sanitizer.bypassSecurityTrustXxx(style); - see docs
    };
    SafeHtmlPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'safeHtml',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());

//# sourceMappingURL=safe-html.js.map

/***/ })

});
//# sourceMappingURL=33.js.map
webpackJsonp([120],{

/***/ 1042:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsPage; });
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
 * Generated class for the CommentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CommentsPage = /** @class */ (function () {
    function CommentsPage(storage, apiServices, imageViewerCtrl, navCtrl, navParams, events, iab, toastCtrl) {
        var _this = this;
        this.storage = storage;
        this.apiServices = apiServices;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.iab = iab;
        this.toastCtrl = toastCtrl;
        this.displayBox = false;
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
        this.previousePageData = this.navParams.get('data');
        this.dataIndex = this.navParams.get('index');
        console.log('previousePageData==', this.previousePageData);
        console.log('previousePageData index==', this.dataIndex);
        // this.like_status=this.previousePageData.like_status;
        this.award_to = this.previousePageData.award_to;
        this.totallike = parseInt(this.previousePageData.like_count);
        this.totalcomment = parseInt(this.previousePageData.comment_count);
        this.like_status = parseInt(this.previousePageData.like_status);
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
            console.log(' employeeId== ', _this.employeeId);
        });
        this.storage.get('login_token').then(function (data) {
            console.log('showOnBoard value is111==', data);
            _this.login_token = data;
        });
        this._imageViewerCtrl = imageViewerCtrl;
        this.commingFrom = this.navParams.get('commingFrom');
        console.log('commingFrom==', this.commingFrom);
    }
    CommentsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CommentsPage');
        var d = new Date(), minutes = d.getMinutes().toString().length == 1 ? '0' + d.getMinutes() : d.getMinutes(), hours = d.getHours().toString().length == 1 ? '0' + d.getHours() : d.getHours(), ampm = d.getHours() >= 12 ? 'PM' : 'AM', months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        this.dis = d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear() + ' ' + hours + ':' + minutes + ' ' + ampm;
        this.getallcomment();
    };
    CommentsPage.prototype.goforcomment = function () {
        if (this.displayBox == true) {
            this.displayBox = false;
        }
        else {
            this.displayBox = true;
        }
    };
    CommentsPage.prototype.sendComment = function (form) {
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
                "flag": "10",
                "post_id": _this.previousePageData.auto_id,
                "comment": _this.mycomment,
                "created_for": _this.award_to
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
                    if (_this.commingFrom == 'badgeSlidePage') {
                        //update comment on badgeSlidePage page
                        var updatelikeData = {
                            'index': _this.dataIndex,
                            'comment': _this.totalcomment
                        };
                        _this.events.publish('updateCommentData', updatelikeData);
                    }
                    else {
                        //update comment on badge board page
                        var updatelikeData = {
                            'index': _this.dataIndex,
                            'comment': _this.totalcomment
                        };
                        _this.events.publish('updateCommentDataBadgeBoard', updatelikeData);
                    }
                    form.reset();
                    _this.displayBox = false;
                    var passDataToBackpage = {
                        'index': _this.dataIndex,
                        'totalComment': _this.totalcomment
                    };
                    _this.events.publish('totalCommentUpdate', passDataToBackpage);
                }
            });
        });
    };
    CommentsPage.prototype.getallcomment = function () {
        var _this = this;
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
            console.log(' employeeId== ', _this.employeeId);
        });
        this.storage.get('deviceId').then(function (data) {
            console.log('showOnBoard value is111==', data);
            _this.deviceId = data;
        });
        this.storage.get('login_token').then(function (data) {
            console.log('AlbumDetails value is111==', data);
            _this.login_token = data;
            var apiKey = {
                "client_id": _this.apiServices.clientId,
                "employee_id": _this.employeeId,
                "device": _this.apiServices.device,
                "device_id": _this.deviceId,
                "app_version": _this.apiServices.appVersion,
                "flag": "10",
                "post_id": _this.previousePageData.auto_id,
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
                }
            });
        });
    };
    CommentsPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    CommentsPage.prototype.presentImage = function (myImage) {
        var imageViewer = this._imageViewerCtrl.create(myImage);
        imageViewer.present();
        setTimeout(function () { return imageViewer.dismiss(); }, 30000);
        imageViewer.onDidDismiss(function () { return console.log('Viewer dismissed'); });
    };
    CommentsPage.prototype.likeUnlikeFun = function (data, index) {
        // this.totallike=parseInt(this.allData[this.dataIndex].like_count);
        // this.totalcomment=parseInt(this.allData[this.dataIndex].comment_count);
        // this.like_status=parseInt(this.allData[this.dataIndex].like_status);
        console.log('post==', data);
        if (data.like_status == 0) {
            this.like_status = 1;
            var increaseLike = parseInt(data.like_count) + 1;
            this.totallike = increaseLike;
            this.doLikeUnlikeFun(increaseLike, this.previousePageData.auto_id, 1);
            if (this.commingFrom == 'badgeSlidePage') {
                //update like on badgeSlidePage page
                var updatelikeData = {
                    'index': this.dataIndex,
                    'like': this.totallike,
                    'likeStatus': this.like_status
                };
                this.events.publish('updatelikeData', updatelikeData);
            }
            else {
                //update like on badge board page
                var updatelikeData = {
                    'index': this.dataIndex,
                    'like': this.totallike,
                    'likeStatus': this.like_status
                };
                this.events.publish('updatelikeDataBadgeBoard', updatelikeData);
            }
        }
        else {
            this.like_status = 0;
            var decreaseLike = parseInt(data.like_count) - 1;
            this.totallike = decreaseLike;
            this.doLikeUnlikeFun(decreaseLike, this.previousePageData.auto_id, 0);
            if (this.commingFrom == 'badgeSlidePage') {
                //update like on badgeSlidePage page
                var updatelikeData = {
                    'index': this.dataIndex,
                    'like': this.totallike,
                    'likeStatus': this.like_status
                };
                this.events.publish('updatelikeData', updatelikeData);
            }
            else {
                //update like on badge board page
                var updatelikeData = {
                    'index': this.dataIndex,
                    'like': this.totallike,
                    'likeStatus': this.like_status
                };
                this.events.publish('updatelikeDataBadgeBoard', updatelikeData);
            }
        }
    };
    CommentsPage.prototype.doLikeUnlikeFun = function (totalLike, postId, status) {
        var _this = this;
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            var apiKey = {
                "client_id": _this.apiServices.clientId,
                "employee_id": _this.employeeId,
                "device": _this.apiServices.device,
                "device_id": _this.deviceId,
                "app_version": _this.apiServices.appVersion,
                "flag": "10",
                "post_id": postId,
                "status": status,
                "created_for": _this.award_to
            };
            _this.apiServices.doLikeUnlikeApi(apiKey, _this.login_token)
                .subscribe(function (res) {
                console.log('slide badge res==', res);
                if (res.success == 1) {
                }
                else {
                }
            });
        });
    };
    CommentsPage.prototype.seeLikesUser = function (data) {
        this.navCtrl.push('LikeUsersListPage', { 'data': data, "flag": 10 });
    };
    CommentsPage.prototype.handleClick = function (event) {
        if (event.target.tagName == "A") {
            this.iab.create(event.target.href, "_system", this.options);
            return false;
        }
    };
    CommentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-comments',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/comments/comments.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title> <span *ngIf="totalcomment>0">{{totalcomment}}</span> Comment<span *ngIf="totalcomment>1">s</span></ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content >\n<div class="customCardView">\n<ion-row>\n  <ion-col><p class="title" > {{previousePageData?.sender_name}} called  {{previousePageData?.receiver_name}} "{{previousePageData?.award_title}}" </p></ion-col>\n</ion-row>\n  <ion-row>\n      <ion-col col-6> <img src="{{this.previousePageData?.receiver_image}}" class="userImage" #myImage\n        (click)="presentImage(myImage)" onerror="this.src=\'../../assets/watermark/watermark.png\'"/> </ion-col>\n      <ion-col col-6> <img src="{{this.previousePageData?.award_image}}" class="userImage" #myImage2\n        (click)="presentImage(myImage2)"onerror="this.src=\'../../assets/watermark/watermark.png\'"/> </ion-col>\n  </ion-row>\n  <ion-row>\n      <ion-col col-6> <p text-center class="userName">{{previousePageData?.receiver_name}}</p> </ion-col>\n      <ion-col col-6> <p text-center></p> </ion-col>\n  </ion-row>\n  <ion-row>\n      <ion-col col-12> <div class="dialogbox">\n          <div class="body">\n            <span class="tip tip-down"></span>\n            <div class="message" [innerHTML]="previousePageData?.comment">\n              <!-- <span>I just made a comment about this comment box which is purely made from CSS.</span> -->\n            </div>\n          </div>\n        </div> </ion-col>\n  </ion-row>\n\n\n  <ion-row>\n      <ion-col col-6>  </ion-col>\n      <ion-col col-6 ><br> <img src="{{previousePageData?.sender_image}}" item-rigth class="fromUserImage" #myImage1\n        (click)="presentImage(myImage1)" onerror="this.src=\'../../assets/watermark/watermark.png\'"/> </ion-col>\n  </ion-row>\n\n  <ion-row>\n      <ion-col col-6> <p text-center class="date"> {{previousePageData?.award_given_on}}</p> </ion-col>\n      <ion-col col-6> <p text-right class="userName"> {{previousePageData?.sender_name}}</p> </ion-col>\n  </ion-row>\n\n\n  <!-- <ion-row>\n      <ion-col col-12> 5 Likes  &nbsp; &nbsp; &nbsp;  2 Comments </ion-col>\n  </ion-row> -->\n  <ion-row class="margincss borderb">\n      <ion-col col-3 class="bordercss" (click)="seeLikesUser(previousePageData)">\n    <p *ngIf="totallike==0" class="m0" >Like</p>\n    <p *ngIf="totallike==1" class="m0">{{totallike}}&nbsp;Like</p>\n    <p *ngIf="totallike>1" class="m0">{{totallike}}&nbsp;Likes</p>\n      </ion-col>\n      <ion-col col-9 class="bordercss" (click)="goforcomment()">\n    <p *ngIf="totalcomment==0" class="m0">Comment</p>\n    <p *ngIf="totalcomment==1" class="m0">{{totalcomment}}&nbsp;Comment</p>\n    <p *ngIf="totalcomment>1" class="m0">{{totalcomment}}&nbsp;Comments</p>\n        </ion-col>\n    </ion-row>\n  <!-- <ion-row>\n      <ion-col col-6> like </ion-col>\n      <ion-col col-6> comments </ion-col>\n  </ion-row> -->\n  <ion-row class="margincss ">\n      <ion-col col-6 (click)="likeUnlikeFun(previousePageData,ind)">\n        <p *ngIf="like_status==1" class="m0" ><span> <ion-icon ios="ios-thumbs-up" md="md-thumbs-up"></ion-icon></span>&nbsp;Like</p>\n        <p *ngIf="like_status==0" class="m0"><span> <ion-icon ios="ios-thumbs-up-outline" md="ios-thumbs-up-outline"></ion-icon></span>&nbsp;Like</p>\n      </ion-col>\n      <ion-col col-6 class="bordercss1" (click)="goforcomment()">\n    <p class="m0"><span><ion-icon ios="ios-text" md="md-text"></ion-icon></span>&nbsp;Comment</p>\n        </ion-col>\n    </ion-row>\n<hr>\n\n</div>\n\n<div class="customCardView">\n    <ion-row class="margincss" *ngFor="let cmt of commentdata">\n        <ion-col col-2>\n            <div class="commentimg">\n                <img class="imgcss2" #myImage3\n                (click)="presentImage(myImage3)" src="{{cmt.comment_by_image}}" \n                onerror="this.src=\'../../assets/watermark/watermark.png\'" >\n            </div>\n        </ion-col>\n        <ion-col col-10 class="colcolor">\n   <ion-row>\n    <ion-col col-7 no-padding>\n        <p class="mrtop">{{cmt.comment_by_name}}</p>\n    </ion-col>\n    <ion-col col-5 no-padding>\n        <p class="mrtop1">{{cmt.date_time}}</p>\n    </ion-col>\n   </ion-row>\n          <ion-row>\n            <ion-col col-12>\n   <!-- <p class="mrtop">{{cmt.comment}}</p> -->\n\n   <p  [innerHTML]="cmt.comment" (click)="handleClick($event)"></p>\n            </ion-col>\n          </ion-row>\n            </ion-col>\n      </ion-row>\n      <br><br><br><br><br>\n</div>\n\n\n\n</ion-content>\n<ion-footer style="margin-bottom:-3px;" *ngIf="displayBox==false">\n    <form #f="ngForm" style="background-color: white;">\n      <ion-row style="\n                       border-top: 1px solid grey;">\n        <ion-col col-11>\n          <div style="background-color: white;\n                  \n                    border-radius: 15px;\n                    ">\n                    <ion-item>\n            <ion-textarea msd-elastic style="border-radius:20px;" type="text" class="textButton" [(ngModel)]="mycomment" name="mycomment" placeholder="Write your comments..."\n              required>\n            </ion-textarea>\n          </ion-item>\n          </div>\n        </ion-col>\n        <ion-col col-1 class="sendButtonColCss" *ngIf="mycomment!= null || mycomment!= undefined" (tap)="sendComment(f)">\n          <ion-icon class="sendButtonCss" name="send"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-footer>'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/comments/comments.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_img_viewer__["a" /* ImageViewerController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */]])
    ], CommentsPage);
    return CommentsPage;
}());

//# sourceMappingURL=comments.js.map

/***/ }),

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsPageModule", function() { return CommentsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comments__ = __webpack_require__(1042);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CommentsPageModule = /** @class */ (function () {
    function CommentsPageModule() {
    }
    CommentsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__comments__["a" /* CommentsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__comments__["a" /* CommentsPage */]), __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__["b" /* IonicImageViewerModule */]
            ],
        })
    ], CommentsPageModule);
    return CommentsPageModule;
}());

//# sourceMappingURL=comments.module.js.map

/***/ })

});
//# sourceMappingURL=120.js.map
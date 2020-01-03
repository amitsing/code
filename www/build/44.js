webpackJsonp([44],{

/***/ 1188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeOnboardDetailsPage; });
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






var WelcomeOnboardDetailsPage = /** @class */ (function () {
    function WelcomeOnboardDetailsPage(storage, apiServices, iab, alertCtrl, imageViewerCtrl, loadingCtrl, navCtrl, navParams) {
        var _this = this;
        this.storage = storage;
        this.apiServices = apiServices;
        this.iab = iab;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
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
        this._imageViewerCtrl = imageViewerCtrl;
        this.previousePageData = this.navParams.get('data');
        console.log('previouse page data== ', this.previousePageData);
        this.pushkey = this.navParams.get('pushkey');
        if (this.pushkey == 1) {
            this.auto_id = this.previousePageData.id;
        }
        else {
            this.auto_id = this.previousePageData.welcomeAboard_AutoId;
        }
        this.storage.get('showOnBoard').then(function (data) {
            _this.emptype = data;
            console.log('showOnBoard value is==', data);
        });
        this.storage.get('user_image').then(function (data) {
            _this.user_image = data;
            console.log(' user_image== ', _this.user_image);
        });
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
            console.log(' employeeId== ', _this.employeeId);
        });
        this.storage.get('login_token').then(function (data) {
            console.log('showOnBoard value is111==', data);
            _this.login_token = data;
        });
        var d = new Date(), minutes = d.getMinutes().toString().length == 1 ? '0' + d.getMinutes() : d.getMinutes(), hours = d.getHours().toString().length == 1 ? '0' + d.getHours() : d.getHours(), ampm = d.getHours() >= 12 ? 'PM' : 'AM', months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        this.dis = d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear() + ' ' + hours + ':' + minutes + ' ' + ampm;
    }
    //Common Loader
    WelcomeOnboardDetailsPage.prototype.commonLoader = function () {
        this.loading = this.loadingCtrl.create({
            enableBackdropDismiss: true,
            spinner: 'ios-small',
            content: 'Loading data...'
        });
        this.loading.present();
    };
    WelcomeOnboardDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NoticeListPage');
        this.getNoticeListFun();
    };
    WelcomeOnboardDetailsPage.prototype.getNoticeListFun = function () {
        var _this = this;
        this.commonLoader();
        this.storage.get('showOnBoard').then(function (data) {
            _this.emptype = data;
            console.log('showOnBoard value is==', data);
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
                "flag": "12",
                // "post_id": this.previousePageData.welcome_abord_auto_id
                "user_type": _this.emptype,
                "welcomeAboard_AutoId": _this.auto_id
                // "client_id": "CO-31",
                // "employee_id": "1",
                // "device": "2",
                // "device_id": "123",
                // "app_version": "4",
                // "user_type": "Guest",
                // "welcomeAboard_AutoId":"1"
            };
            _this.apiServices.welcomeDetailsApi(apiKey, _this.login_token)
                .subscribe(function (res) {
                console.log('welcome onboard res==', res);
                _this.loading.dismiss();
                if (res.success == 1) {
                    _this.detailsData = res.data[0];
                    _this.totallike = _this.detailsData.like_count;
                    _this.totalcomment = _this.detailsData.comment_count;
                    _this.like_status = _this.detailsData.like_status;
                    console.log('welcome onboard data==', _this.detailsData);
                    _this.getallcomment();
                }
                else {
                    var alert_1 = _this.alertCtrl.create({
                        // title: 'Confirm purchase',
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
            });
        });
    };
    WelcomeOnboardDetailsPage.prototype.presentImage = function (myImage) {
        var imageViewer = this._imageViewerCtrl.create(myImage);
        imageViewer.present();
        setTimeout(function () { return imageViewer.dismiss(); }, 30000);
        imageViewer.onDidDismiss(function () { return console.log('Viewer dismissed'); });
    };
    WelcomeOnboardDetailsPage.prototype.goforcomment = function () {
        this.displayBox = true;
    };
    WelcomeOnboardDetailsPage.prototype.getallcomment = function () {
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
                "flag": '12',
                "post_id": _this.detailsData.auto_id,
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
    //Send Comment
    WelcomeOnboardDetailsPage.prototype.sendComment = function (form) {
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
            // this.apiMessage(message);
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
                "flag": '12',
                "post_id": _this.detailsData.auto_id,
                "comment": _this.mycomment,
                "created_for": _this.detailsData.employee_id
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
    WelcomeOnboardDetailsPage.prototype.gotolikelist = function () {
        if (this.totallike > 0) {
            this.navCtrl.push('LikeUsersListPage', { 'data': this.detailsData, 'flag': 12 });
        }
    };
    WelcomeOnboardDetailsPage.prototype.goforlike = function (likestatus) {
        var _this = this;
        this.like_status = likestatus;
        if (this.like_status == 1) {
            this.totallike = this.totallike - 1;
            this.like_status = 0;
        }
        else {
            this.like_status = 1;
            // this.totallike=this.totallike+1;
            this.totallike = parseInt(this.totallike) + 1;
            // this.totallike++;
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
                "flag": '12',
                "post_id": _this.detailsData.auto_id,
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
                }
            });
        });
    };
    WelcomeOnboardDetailsPage.prototype.handleClick = function (event) {
        if (event.target.tagName == "A") {
            this.iab.create(event.target.href, "_system", this.options);
            return false;
        }
    };
    WelcomeOnboardDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome-onboard-details',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/welcome-onboard-details/welcome-onboard-details.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{detailsData?.name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="contentHolder">\n  \n  <div class="relative">\n    <div class="customCardView" *ngIf="detailsData">\n        <ion-row>\n          <ion-col col-12 class="absolute">\n              <img *ngIf="detailsData?.image!=\'\'" src="{{detailsData?.image}}"   #myImage (click)="presentImage(myImage)"  />\n              <img *ngIf="detailsData?.image==\'\'" [src]="\'assets/a2z/\'+detailsData.name[0].toLowerCase()+\'.jpg\'"   #myImage (click)="presentImage(myImage)"  />\n          </ion-col>\n          <ion-col col-9>\n            <h3 style="    margin-bottom: 2px;">{{detailsData?.name}}</h3>\n            <p class="Wd_Designation">{{detailsData?.designation}}</p>\n          </ion-col>\n          <ion-col col-12>\n              <div [innerHTML]="detailsData?.sentence" (click)="handleClick($event)"></div>\n          </ion-col>\n        </ion-row>\n      \n\n        <ion-row *ngIf="detailsData?.special_achievement!=\'\'">\n            <ion-col col-2>\n                <img style="width:80%" src="assets/imgs/welcomeOnboard/acheivement.png">\n            </ion-col>\n            <ion-col col-10 class="centerDataInDiv">\n                <b class="mrtop" [innerHTML]="detailsData?.special_achievement"></b>\n            </ion-col>\n        </ion-row>\n\n        <ion-row class="likes" padding-top>\n          <ion-col  *ngIf="detailsData?.fav_place!=\'\'"  col-6>\n            <ion-row>\n              <ion-col col-2>\n                  <!-- <ion-icon name="pin"></ion-icon> -->\n                  <!-- <img class="hobbiIcon" src="assets/imgs/welcomeOnboard/location.png"> -->\n                  <img class="hobbiIcon" src="assets/imgs/Travel_Icon.png">\n              </ion-col>\n              <ion-col col-10>\n                <p class="mrtop" [innerHTML]="detailsData?.fav_place"></p>\n                  <!-- {{detailsData?.fav_place}} -->\n              </ion-col>\n            </ion-row>\n            \n          </ion-col>\n          <ion-col  *ngIf="detailsData?.fav_sports!=\'\'" col-6>\n            <ion-row>\n              <ion-col col-2>\n                  <!-- <ion-icon name="game-controller-b"></ion-icon> -->\n                  <img class="hobbiIcon" src="assets/imgs/welcomeOnboard/sports_icon.png">\n              </ion-col>\n              <ion-col col-10>\n                  <p class="mrtop" [innerHTML]="detailsData?.fav_sports"></p>\n                  <!-- {{detailsData?.fav_sports}} -->\n              </ion-col>\n            </ion-row>\n           </ion-col>\n           <ion-col  *ngIf="detailsData?.fav_past_time!=\'\'" col-6>\n              <ion-row>\n                <ion-col col-2>\n                    <!-- <ion-icon name="game-controller-b"></ion-icon> -->\n                    <img class="hobbiIcon" src="assets/imgs/heart_Icon.png">\n                </ion-col>\n                <ion-col col-10>\n                    <p class="mrtop" [innerHTML]="detailsData?.fav_past_time"></p>\n                    <!-- {{detailsData?.fav_past_time}} -->\n                </ion-col>\n              </ion-row>\n             </ion-col>\n          <ion-col *ngIf="detailsData?.fav_cuisine!=\'\'" col-6>\n              <ion-row>\n                <ion-col col-2>\n                    <!-- <ion-icon name="beer"></ion-icon> -->\n\n                    <img class="hobbiIcon" src="assets/imgs/FOOD-Icon.png">\n\n                </ion-col>\n                <ion-col col-10>\n                    <p class="mrtop" [innerHTML]="detailsData?.fav_cuisine"></p>\n                    <!-- {{detailsData?.fav_cuisine}} -->\n                </ion-col>\n              </ion-row>\n              </ion-col>\n        </ion-row>\n\n\n        <ion-row class="margincss">\n          <ion-col col-3 class="bordercss"  (click)="gotolikelist()">\n            <!-- <p *ngIf="totallike==0">Like</p> -->\n            <p *ngIf="totallike==1">{{totallike}}&nbsp;Like</p>\n            <p *ngIf="totallike>1">{{totallike}}&nbsp;Likes</p>\n          </ion-col>\n          <ion-col col-9 class="bordercss">\n            <!-- <p *ngIf="totalcomment==0">Comment</p> -->\n            <p *ngIf="totalcomment==1">{{totalcomment}}&nbsp;Comment</p>\n            <p *ngIf="totalcomment>1">{{totalcomment}}&nbsp;Comments</p>\n            </ion-col>\n        </ion-row>\n\n      \n        <ion-row class="margincss">\n          <ion-col col-6 (click)="goforlike(like_status)">\n            <p *ngIf="like_status==1" ><span> <ion-icon ios="ios-thumbs-up" md="md-thumbs-up"></ion-icon></span>&nbsp;Like</p>\n            <p *ngIf="like_status==0"><span> <ion-icon ios="ios-thumbs-up-outline" md="ios-thumbs-up-outline"></ion-icon></span>&nbsp;Like</p>\n          </ion-col>\n          <ion-col col-6 class="bordercss1" (click)="goforcomment()">\n            <p><span><ion-icon ios="ios-text" md="md-text"></ion-icon></span>&nbsp;Comment</p>\n          </ion-col>\n        </ion-row>\n      <hr> \n\n<!-- <ion-row class="margincss" >\n  <ion-col col-12 >\n<p *ngIf="totalcomment<=1">{{totalcomment}}&nbsp;Comment</p>\n<p *ngIf="totalcomment>1">{{totalcomment}}&nbsp;Comments</p>\n</ion-col>\n</ion-row> -->\n\n    <ion-row class="margincss" *ngFor="let cmt of commentdata">\n      <ion-col col-2>\n          <div class="commentimg">\n              <!-- <img class="imgcss2"  src="assets/watermark/watermark.png" srcset="{{cmt.comment_by_image}}"  #myImage (click)="presentImage(myImage)" > -->\n\n              <img  class="imgcss2" onerror="this.src=\'../../assets/watermark/watermark.png\'" #myImage\n              src="{{cmt.comment_by_image}}" (click)="presentImage(myImage)"  >\n          </div>\n      </ion-col>\n\n      <ion-col col-10 class="colcolor">\n        <ion-row>\n          <ion-col col-7 no-padding>\n            <p class="mrtop uName">{{cmt.comment_by_name}}</p>\n          </ion-col>\n          <ion-col col-5 no-padding>\n            <p style="font-size: 10px;" class="mrtop1">{{cmt.date_time}}</p>\n          </ion-col>\n        </ion-row>\n\n    <ion-row>\n     <ion-col col-12>\n        <p class="mrtop" [innerHTML]="cmt.comment" (click)="handleClick($event)"></p>\n      </ion-col>\n     \n    </ion-row>\n      </ion-col>\n</ion-row>\n<br><br><br><br><br>\n\n      </div>\n\n<!-- \n        <div *ngIf="detailsData?.wow_reward?.length>0" class="customCardView">\n          <ion-row>\n            <ion-col>\n              <p class="mod_title">Wow Awards </p>\n              <ion-slides slidesPerView="4">\n                  <ion-slide *ngFor="let waw of detailsData?.wow_reward">\n                      <img class="wowAwards" src="{{waw?.award_icon}}" #myImage1 (click)="presentImage(myImage1)">\n                      <p class="wowBadgename">{{waw?.award_title}}</p>\n                  </ion-slide>\n                </ion-slides>\n            </ion-col>\n          </ion-row>\n        </div>\n\n\n\n        <div *ngIf="detailsData?.award?.length>0" class="customCardView">\n            <ion-row>\n              <ion-col>\n                <p class="mod_title">My Awards </p>\n                <ion-slides slidesPerView="4">\n                    <ion-slide *ngFor="let waw of detailsData?.award">\n                        <img class="wowAwards" [src]="waw?.award_icon" #myImage2 (click)="presentImage(myImage2)">\n                        <p class="wowBadgename">{{waw?.award_title}}</p>\n                    </ion-slide>\n                  </ion-slides>\n              </ion-col>\n            </ion-row>\n          </div> -->\n\n\n\n          <!-- <div  class="customCardView">\n              <ion-row>\n                <ion-col>\n                  <p class="mod_title"> Favourite Quote </p>\n                 <p class="myQuote">{{detailsData?.fav_quote}}</p>\n                </ion-col>\n              </ion-row>\n            </div> -->\n\n            \n          </div>\n  </ion-content>\n  <ion-footer  *ngIf="displayBox==true">\n    <form #f="ngForm" style="background-color: white;">\n      <ion-row class="rowborder">\n        <ion-col col-11>\n          <div class="footerdiv">\n            <ion-item>\n                <ion-textarea msd-elastic style="border-radius:20px;" type="text" class="textButton" [(ngModel)]="mycomment" name="mycomment" placeholder="Write your comments..."\n                required>\n              </ion-textarea>\n            </ion-item>\n      \n          </div>\n        </ion-col>\n        <ion-col col-1 class="sendButtonColCss" *ngIf="mycomment!= null || mycomment!= undefined" (click)="sendComment(f)">\n          <ion-icon class="sendButtonCss" name="send"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-footer>'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/welcome-onboard-details/welcome-onboard-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4_ionic_img_viewer__["a" /* ImageViewerController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], WelcomeOnboardDetailsPage);
    return WelcomeOnboardDetailsPage;
}());

//# sourceMappingURL=welcome-onboard-details.js.map

/***/ }),

/***/ 860:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeOnboardDetailsPageModule", function() { return WelcomeOnboardDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome_onboard_details__ = __webpack_require__(1188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var WelcomeOnboardDetailsPageModule = /** @class */ (function () {
    function WelcomeOnboardDetailsPageModule() {
    }
    WelcomeOnboardDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__welcome_onboard_details__["a" /* WelcomeOnboardDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__welcome_onboard_details__["a" /* WelcomeOnboardDetailsPage */]), __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__["b" /* IonicImageViewerModule */]
            ],
        })
    ], WelcomeOnboardDetailsPageModule);
    return WelcomeOnboardDetailsPageModule;
}());

//# sourceMappingURL=welcome-onboard-details.module.js.map

/***/ })

});
//# sourceMappingURL=44.js.map
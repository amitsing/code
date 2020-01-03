webpackJsonp([108],{

/***/ 1061:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeawardsdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(161);
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

// import { IonicPage, NavController, NavParams } from 'ionic-angular';





var HomeawardsdetailPage = /** @class */ (function () {
    function HomeawardsdetailPage(navCtrl, navParams, iab, alertCtrl, platform, loadingCtrl, toastCtrl, storage, imgprovider, apiServices) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.iab = iab;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.imgprovider = imgprovider;
        this.apiServices = apiServices;
        this.displayBox = false;
        this.commentdata = [];
        this.team = false;
        this.closeAppPopupShow = 0;
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
        this.storage.get('nominating_authority').then(function (value) {
            console.log(value);
            if (value == 1) {
                _this.n_authority = 'n';
            }
            else {
                _this.n_authority = "";
            }
            _this.storage.get('approval_authority').then(function (data) {
                console.log(data);
                if (data == 1) {
                    _this.a_authority = 'a';
                }
                else {
                    _this.a_authority = "";
                }
            });
        });
        this.pushkey = this.navParams.get('pushkey');
        if (this.pushkey == 1) {
            this.nominationData = this.navParams.get('nominationData');
            this.nomination_id = this.nominationData.id;
        }
        else {
            this.nominationData = this.navParams.get('nominationData');
            this.nomination_id = this.nominationData.nomination_id;
        }
        // this.nominationData=this.navParams.get('nominationData');
        console.log(this.nominationData);
        var d = new Date(), minutes = d.getMinutes().toString().length == 1 ? '0' + d.getMinutes() : d.getMinutes(), hours = d.getHours().toString().length == 1 ? '0' + d.getHours() : d.getHours(), ampm = d.getHours() >= 12 ? 'PM' : 'AM', months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        this.dis = d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear() + ' ' + hours + ':' + minutes + ' ' + ampm;
        this.rewarded();
    }
    HomeawardsdetailPage.prototype.commonLoader = function () {
        this.loading = this.loadingCtrl.create({
            enableBackdropDismiss: true,
            spinner: 'ios-small',
            content: 'Loading data...'
        });
        this.loading.present();
    };
    // Zoom Image:
    HomeawardsdetailPage.prototype.pp = function (img) {
        this.imgprovider.presentImage(img);
    };
    HomeawardsdetailPage.prototype.rewarded = function () {
        var _this = this;
        this.commonLoader();
        console.log("called");
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
        });
        this.storage.get('login_token').then(function (data) {
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
                // "nomination_id":this.nominationData.nomination_id,
                "nomination_id": _this.nomination_id,
                "user_authority": 'n'
            };
            _this.apiServices.EmployeeAwarddetail(apiKey, _this.login_token)
                .subscribe(function (res) {
                console.log('', res);
                _this.loading.dismiss();
                if (res.success == 1) {
                    _this.peopleRewarded = res.data;
                    if (_this.peopleRewarded.user.length == 1) {
                        _this.team = false;
                        _this.userdata = _this.peopleRewarded.user;
                        _this.nomoinatedByDetails = _this.peopleRewarded.progress[0];
                        console.log(_this.nomoinatedByDetails);
                        console.log(_this.userdata);
                        _this.getallcomment();
                    }
                    else {
                        _this.team = true;
                        _this.userdata = _this.peopleRewarded.user;
                        _this.nomoinatedByDetails = _this.peopleRewarded.progress[0];
                        console.log(_this.nomoinatedByDetails);
                        console.log(_this.userdata);
                        _this.getallcomment();
                    }
                    console.log('peopleRewarded', _this.awardsimg);
                }
                else {
                    _this.loading.dismiss();
                    _this.succ = res.success;
                    _this.apiMessage(res.message);
                }
            }, function (err) {
                console.log('err== ', err);
                _this.loading.dismiss();
                _this.apiMessage(err);
            });
        });
    };
    HomeawardsdetailPage.prototype.goforlike = function () {
        var _this = this;
        this.like_status = this.peopleRewarded.like_status;
        if (this.peopleRewarded.like_status == 1) {
            this.peopleRewarded.total_like--;
            this.peopleRewarded.like_status = 0;
        }
        else {
            this.peopleRewarded.total_like++;
            this.peopleRewarded.like_status = 1;
        }
        // }     
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
                "flag": _this.peopleRewarded.flag,
                "post_id": _this.peopleRewarded.nomination_id,
                "status": _this.peopleRewarded.like_status,
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
    //Send Comment
    HomeawardsdetailPage.prototype.sendComment = function (form) {
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
                "comment": _this.mycomment,
                "flag": _this.peopleRewarded.flag,
                "post_id": _this.peopleRewarded.nomination_id,
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
                    _this.peopleRewarded.total_comment++;
                    // this.totalcomment=parseInt( this.totalcomment) + 1
                    form.reset();
                    _this.displayBox = false;
                }
            });
        });
    };
    HomeawardsdetailPage.prototype.getallcomment = function () {
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
                "val": "0",
                "flag": _this.peopleRewarded.flag,
                "post_id": _this.peopleRewarded.nomination_id,
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
    HomeawardsdetailPage.prototype.goforcomment = function () {
        this.displayBox = !this.displayBox;
    };
    HomeawardsdetailPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    HomeawardsdetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomeawardsdetailPage');
    };
    HomeawardsdetailPage.prototype.gotolikelist = function () {
        if (this.peopleRewarded.total_like > 0) {
            var auto_id = this.peopleRewarded.nomination_id;
            // this.peopleRewarded.push({'auto_id': auto_id});
            this.peopleRewarded['auto_id'] = auto_id;
            this.navCtrl.push('LikeUsersListPage', { 'data': this.peopleRewarded, 'flag': this.peopleRewarded.flag });
        }
    };
    HomeawardsdetailPage.prototype.handleClick = function (event) {
        if (event.target.tagName == "A") {
            this.iab.create(event.target.href, "_system", this.options);
            return false;
        }
    };
    HomeawardsdetailPage.prototype.ionViewWillEnter = function () {
        this.initializeBackButtonCustomHandler();
    };
    HomeawardsdetailPage.prototype.ionViewWillLeave = function () {
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    //Hardware Back Button
    HomeawardsdetailPage.prototype.initializeBackButtonCustomHandler = function () {
        var that = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function (event) {
            // that.navCtrl.popToRoot();
            that.navCtrl.pop();
        }, 101); // Priority 101 will override back button handling (we set in app.component.ts) as it is bigger then priority 100 configured in app.component.ts file */
    };
    HomeawardsdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-homeawardsdetail',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/homeawardsdetail/homeawardsdetail.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Award Detail</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content>\n  <div  *ngIf="peopleRewarded">\n      <div class="singleTop" *ngIf="team==false">\n          <ion-row class="badge">\n            <ion-col col-4 >\n              <!-- <img  class="userimg" src="assets/watermark/watermark.png" srcset="{{userimg}}"> -->\n            </ion-col>\n            <ion-col col-5 style="text-align:center;">\n              <p class="paracss">{{peopleRewarded?.award_name}}</p>\n            </ion-col>\n            <ion-col col-3 style="text-align:center;">\n              <img #img2 (click)="pp(img2)" class="silverAbso" onError="this.src=\'assets/watermark/watermark.png\';" [src]="peopleRewarded?.award_icon">\n            </ion-col>\n          </ion-row>\n        \n          <div class="userDiv" *ngIf="userdata">\n              <ion-row  class="userRow">\n                  <ion-col col-4 >\n                    <div class="parent">\n                      <div class="child">\n                        <img #img1 (click)="pp(img1)" class="userimg" [src]="userdata[0]?.user_image" >                  \n                      </div>\n                    </div>\n                  </ion-col>\n                  <ion-col col-8 >\n                    <p class="paracss1">{{userdata[0]?.user_name}}</p>\n                  </ion-col>\n                </ion-row>\n          </div>\n          \n        \n          \n          <div *ngIf="nomoinatedByDetails">\n              <ion-row>\n                  <ion-col col-12>\n                      <div class="divcss"> \n                          <p class="paracss2">{{nomoinatedByDetails?.remark}}</p>\n                        </div>\n                  </ion-col>\n                  <ion-col col-8></ion-col>\n                  <ion-col col-4 text-center>\n                      <div style="text-align:end; padding: 0px 12px;"> \n                          <img  class="userimg small" #img (click)="pp(img)" onError="this.src=\'assets/watermark/watermark.png\';" [src]="nomoinatedByDetails?.action_by_image">\n                          <p class="paracss2 clrWhite" >{{ nomoinatedByDetails?.action_by }}</p>\n                      </div>      \n                  </ion-col>\n                </ion-row>      \n          </div>\n       </div>\n       <div *ngIf="team==true" class="teamTop">\n          <ion-row class="badge">\n              <ion-col col-4 >\n                <!-- <img  class="userimg" src="assets/watermark/watermark.png" srcset="{{userimg}}"> -->\n              </ion-col>\n              <ion-col col-5 style="text-align:center;">\n                <p class="paracss">{{peopleRewarded?.award_name}}</p>\n              </ion-col>\n              <ion-col col-3 style="text-align:center;">\n                <img  class="silverAbso" #img4 (click)="pp(img4)" onError="this.src=\'assets/watermark/watermark.png\';" [src]="peopleRewarded?.award_icon">\n              </ion-col>\n          </ion-row>\n          <ion-row class="nameRow">\n            <ion-col col-12 text-center class="nameCol">\n              <h2 class="teamTital">{{peopleRewarded?.nomination_name}}</h2>\n              <img class="teamTitalHeader" src="../../assets/imgs/teamTitleheader.png" alt="">\n            </ion-col>\n          </ion-row>\n          <ion-row class="userData" *ngFor="let user of userdata">\n            <ion-col col-8 class="parent">\n              <div class="child">\n                  <p>{{ user?.user_name }}</p>\n                  <p>{{ user?.designation }}</p>\n              </div>\n            </ion-col>\n            <ion-col col-4>\n              <img class="userImage" #img5 (click)="pp(img5)" [src]="user?.user_image" onError="this.src=\'../../assets/watermark/watermark.png\'" alt="">\n            </ion-col>\n          </ion-row>\n          <div *ngIf="nomoinatedByDetails">\n              <ion-row>\n                  <ion-col col-12>\n                          <p class="remark">{{nomoinatedByDetails?.remark}}</p>\n                  </ion-col>\n                  <ion-col col-8></ion-col>\n                  <ion-col col-4 text-center>\n                      <div style="text-align:end; padding: 0px 12px;"> \n                          <img  class="userimg small" #img6 (click)="pp(img6)" onError="this.src=\'assets/watermark/watermark.png\';" [src]="nomoinatedByDetails?.action_by_image">\n                          <p class="action" >{{ nomoinatedByDetails?.action_by }}</p>\n                      </div>      \n                  </ion-col>\n                </ion-row>      \n          </div>\n       </div>\n\n       <ion-row class="margincss">\n          <ion-col col-auto class="bordercss"  (click)="gotolikelist()">\n            <!-- <p *ngIf="peopleRewarded?.total_like==0"><ion-icon ios="ios-thumbs-up" md="md-thumbs-up"></ion-icon>&nbsp;fgh</p> -->\n            <p class="likeunlike" *ngIf="peopleRewarded?.total_like==1"><ion-icon ios="ios-thumbs-up" md="md-thumbs-up"></ion-icon>&nbsp;{{peopleRewarded?.total_like}}&nbsp;Like</p>\n            <p class="likeunlike" *ngIf="peopleRewarded?.total_like>1"><ion-icon ios="ios-thumbs-up" md="md-thumbs-up"></ion-icon>&nbsp;{{peopleRewarded?.total_like}}&nbsp;Likes</p>\n          </ion-col>\n          <ion-col col-auto class="bordercss">\n            <p class="likeunlike" *ngIf="peopleRewarded?.total_comment==1"><ion-icon ios="ios-text" md="md-text"></ion-icon>&nbsp;{{peopleRewarded?.total_comment}}&nbsp;Comment</p>\n            <p class="likeunlike" *ngIf="peopleRewarded?.total_comment>1"><ion-icon ios="ios-text" md="md-text"></ion-icon>&nbsp;{{peopleRewarded?.total_comment}}&nbsp;Comments</p>\n          </ion-col>\n          <hr>\n        </ion-row>\n       \n        <ion-row class="margincss brdr">\n            <ion-col col-4 class="bordercss" (click)="goforlike()">\n              <p class="themeClr" *ngIf="peopleRewarded.like_status==1"><span> <ion-icon ios="ios-thumbs-up" md="md-thumbs-up"></ion-icon></span>&nbsp;Like</p>\n              <p class="grayClr" *ngIf="peopleRewarded.like_status==0"><span> <ion-icon ios="ios-thumbs-up-outline" md="ios-thumbs-up-outline"></ion-icon></span>&nbsp;Like</p>\n            </ion-col>\n            <ion-col col-4 class="bordercss" (click)="goforcomment()">\n                <p><span><ion-icon ios="ios-text" md="md-text"></ion-icon></span>&nbsp;Comment</p>\n            </ion-col>\n        </ion-row>\n\n        <ion-row class="margincss comment" *ngFor="let cmt of commentdata">\n            <ion-col col-2>\n                <div class="commentimg">\n                    <img class="imgcss2" #img7 (click)="pp(img7)" onError="this.src=\'assets/watermark/watermark.png\';" [src]="cmt.comment_by_image">\n                </div>\n            </ion-col>\n            <ion-col col-10 class="colcolor">\n              <ion-row>\n                <ion-col col-7 no-padding>\n                    <p class="mrtop">{{cmt.comment_by_name}}</p>\n                </ion-col>\n                <ion-col col-5 no-padding>\n                    <p class="mrtop1">{{cmt.date_time}}</p>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col col-12>\n                    <p class="mrtop" [innerHTML]="cmt.comment" (click)="handleClick($event)"></p>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n        </ion-row>\n  </div>\n</ion-content>\n<ion-footer  *ngIf="displayBox==true">\n    <form #f="ngForm" style="background-color: white;">\n      <ion-row class="rowborder">\n        <ion-col col-11>\n          <div class="footerdiv">\n            <ion-textarea style="border-radius:20px;" type="text" class="textButton" [(ngModel)]="mycomment" name="mycomment" placeholder="Write your comments..."\n              required>\n            </ion-textarea>\n          </div>\n        </ion-col>\n        <ion-col col-1 class="sendButtonColCss parent" *ngIf="mycomment!= null || mycomment!= undefined" (tap)="sendComment(f)">\n          <ion-icon class="sendButtonCss child" name="send"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-footer>'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/homeawardsdetail/homeawardsdetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__providers_services_imagecontroller__["a" /* ImagecontrollerProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */]])
    ], HomeawardsdetailPage);
    return HomeawardsdetailPage;
}());

//# sourceMappingURL=homeawardsdetail.js.map

/***/ }),

/***/ 759:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeawardsdetailPageModule", function() { return HomeawardsdetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__homeawardsdetail__ = __webpack_require__(1061);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeawardsdetailPageModule = /** @class */ (function () {
    function HomeawardsdetailPageModule() {
    }
    HomeawardsdetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__homeawardsdetail__["a" /* HomeawardsdetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__homeawardsdetail__["a" /* HomeawardsdetailPage */]),
            ],
        })
    ], HomeawardsdetailPageModule);
    return HomeawardsdetailPageModule;
}());

//# sourceMappingURL=homeawardsdetail.module.js.map

/***/ })

});
//# sourceMappingURL=108.js.map
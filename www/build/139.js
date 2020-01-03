webpackJsonp([139],{

/***/ 1021:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumImageSliderPage; });
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





var AlbumImageSliderPage = /** @class */ (function () {
    function AlbumImageSliderPage(imageViewerCtrl, loadingCtrl, toastCtrl, storage, apiServices, navCtrl, navParams) {
        var _this = this;
        this.imageViewerCtrl = imageViewerCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.apiServices = apiServices;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.displayBox = false;
        this.commentdata = [];
        this.index = 0;
        this.allData = this.navParams.get('data');
        this.index = this.navParams.get('index');
        console.log("aaaa", this.allData);
        this.first_post_id = this.navParams.get('first_post_id');
        // this.albumid = this.navParams.get('albumid');
        console.log("albumid", this.albumid);
        this._imageViewerCtrl = imageViewerCtrl;
        this.pushkey = this.navParams.get('pushkey');
        if (this.pushkey == 1) {
            this.albumid = this.allData.other_id;
            this.postid = this.allData.id;
            this.index = 0;
            this.albumdetail();
        }
        else {
            this.albumid = this.navParams.get('albumid');
            if (this.first_post_id == '1') {
                this.postid = this.allData.auto_id;
                this.albumdetail();
            }
            else {
                this.albumallData = this.allData;
                this.album_title = this.albumallData[0].album_title;
                // this.albumid = this.navParams.get('albumid');
                this.analyticApi(this.albumallData[0].auto_id);
            }
        }
        // this.albumimg=this.allData.image;
        // this.totallike=parseInt(this.allData.like_count);
        // this.totalcomment=parseInt(this.allData.comment_count);
        // this.like_status=parseInt(this.allData.like_status);
        var d = new Date(), minutes = d.getMinutes().toString().length == 1 ? '0' + d.getMinutes() : d.getMinutes(), hours = d.getHours().toString().length == 1 ? '0' + d.getHours() : d.getHours(), ampm = d.getHours() >= 12 ? 'PM' : 'AM', months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        this.dis = d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear() + ' ' + hours + ':' + minutes + ' ' + ampm;
        this.storage.get('deviceId').then(function (data) {
            console.log('showOnBoard value is111==', data);
            _this.deviceId = data;
        });
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
            console.log(' employeeId== ', _this.employeeId);
        });
        // this.postid=this.allData.auto_id;
        // this.albumdetail();
        // this.getallcomment();
        this.storage.get('employeeId').then(function (eID) {
            _this.employeeId = eID;
            console.log(' employeeId== ', _this.employeeId);
            _this.storage.get('login_token').then(function (lToken) {
                console.log('thoughtOftheDayApi value is111==', lToken);
                _this.login_token = lToken;
                _this.storage.get('employee_type').then(function (user) {
                    console.log('thoughtOftheDayApi value is111==', user);
                    _this.user_Type = user;
                });
            });
        });
    }
    //Common Loader:
    AlbumImageSliderPage.prototype.commonLoader = function () {
        this.loading = this.loadingCtrl.create({
            enableBackdropDismiss: true,
            spinner: 'ios-small',
            content: 'Loading data...'
        });
        this.loading.present();
    };
    AlbumImageSliderPage.prototype.albumdetail = function () {
        var _this = this;
        this.commonLoader();
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
            //  this.token='Q3owSXo3T05BVVJscHREVCsyeUtqZz09OjoWf4jZSksqJnff2wxdlZ7e'
            var apiKey = {
                // "client_id":this.apiServices.clientId,
                // "employee_id":this.employeeId,
                // "device":this.apiServices.device,
                // "device_id":this.deviceId,
                // "app_version":this.apiServices.appVersion,
                // "val":'0',
                // "album_id":this.albumid,
                // "flag":"11",
                // "post_id":this.postid,
                // "first_post_id":this.postid
                "client_id": _this.apiServices.clientId,
                "employee_id": _this.employeeId,
                "device": _this.apiServices.device,
                "device_id": _this.deviceId,
                "app_version": _this.apiServices.appVersion,
                "val": '0',
                "album_id": _this.albumid,
                "flag": "11",
                "post_id": '',
                "first_post_id": _this.postid
            };
            _this.apiServices.empAlbumdetail(apiKey, _this.login_token)
                .subscribe(function (res) {
                _this.loading.dismiss();
                console.log('', res);
                if (res.success == 1) {
                    // this.albumallData = res.data[0];
                    // this.albumimg=this.albumallData.image;
                    // this.title=this.albumallData.title;
                    // this.totallike=parseInt(this.albumallData.like_count);
                    // this.totalcomment=parseInt(this.albumallData.comment_count);
                    // this.like_status=parseInt(this.albumallData.like_status);
                    _this.albumallData = res.data;
                    // this.activeSliderIndexDetect=
                    _this.album_title = _this.albumallData[0].album_title;
                    _this.analyticApi(_this.albumallData[0].auto_id);
                    // this.ionSlideDidChange();
                    console.log('albumallDataalert', _this.albumallData);
                }
                else {
                    // this.msg=res.message
                    _this.apiMessage(res.message);
                }
            }, function (err) {
                console.log('err== ', err);
                _this.apiMessage(err);
            });
        });
    };
    AlbumImageSliderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AlbumImageSliderPage');
    };
    AlbumImageSliderPage.prototype.goforlike = function (likestatus) {
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
        console.log('this.postid', this.postid);
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
            console.log(' employeeId== ', _this.employeeId);
        });
        this.storage.get('deviceId').then(function (data) {
            console.log('showOnBoard value is111==', data);
            _this.deviceId = data;
        });
        // console.log('this.previousePagedata.auto_id==', this.previousePagedata.auto_id);
        console.log('this.postid1234', this.postid);
        this.storage.get('login_token').then(function (data) {
            console.log('AlbumDetails value is111==', data);
            _this.login_token = data;
            var apiKey = {
                "client_id": _this.apiServices.clientId,
                "employee_id": _this.employeeId,
                "device": _this.apiServices.device,
                "device_id": _this.deviceId,
                "app_version": _this.apiServices.appVersion,
                "flag": "11",
                "post_id": _this.postid,
                "status": _this.like_status
            };
            console.log('AlbumDetails api apiKey==', apiKey);
            _this.apiServices.createlike(apiKey, _this.login_token).subscribe(function (result) {
                console.log('AlbumDetails api res==', result);
                if (result.success == 1) {
                    _this.apiMessage(result.message);
                    console.log('album emp list==', result.data);
                }
                else {
                }
            });
        });
    };
    AlbumImageSliderPage.prototype.getallcomment = function () {
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
        console.log('this.postid1234', this.postid);
        this.storage.get('login_token').then(function (data) {
            console.log('AlbumDetails value is111==', data);
            _this.login_token = data;
            var apiKey = {
                "client_id": _this.apiServices.clientId,
                "employee_id": _this.employeeId,
                "device": _this.apiServices.device,
                "device_id": _this.deviceId,
                "app_version": _this.apiServices.appVersion,
                "flag": "11",
                "post_id": _this.postid,
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
    AlbumImageSliderPage.prototype.goforcomment = function () {
        this.displayBox = true;
    };
    //Send Comment
    AlbumImageSliderPage.prototype.sendComment = function (form) {
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
                "flag": "11",
                "post_id": _this.postid,
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
    AlbumImageSliderPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    AlbumImageSliderPage.prototype.showAllComment = function (commnentData) {
        this.navCtrl.push('ShowAllCommentPage', { 'data': commnentData, 'flag': '11' });
    };
    AlbumImageSliderPage.prototype.gotolikelist = function (likecount, aData) {
        var flag = '11';
        if (likecount > 0) {
            if (this.pushkey == 1) {
            }
            else {
                this.pushkey = 0;
            }
            this.navCtrl.push('LikeUsersListPage', { 'data': aData, 'flag': '11', 'pushkey': this.pushkey });
        }
    };
    AlbumImageSliderPage.prototype.presentImage = function (myImage) {
        var imageViewer = this._imageViewerCtrl.create(myImage);
        imageViewer.present();
        // setTimeout(() => imageViewer.dismiss(), 30000);
        imageViewer.onDidDismiss(function () { return console.log('Viewer dismissed'); });
    };
    AlbumImageSliderPage.prototype.likeUnlikeFun = function (data, index) {
        var _this = this;
        this.storage.get('deviceId').then(function (data) {
            console.log('showOnBoard value is111==', data);
            _this.deviceId = data;
        });
        console.log('post==', data);
        console.log('post==', data.like_status);
        if (data.like_status == 0 || data.like_status == '0') {
            this.albumallData[index].like_status = 1;
            var increaseLike = parseInt(data.like_count) + 1;
            this.albumallData[index].like_count = increaseLike;
            this.doLikeUnlikeFun(increaseLike, this.albumallData[index].auto_id, 1);
        }
        else {
            this.albumallData[index].like_status = 0;
            var decreaseLike = parseInt(data.like_count) - 1;
            this.albumallData[index].like_count = decreaseLike;
            this.doLikeUnlikeFun(decreaseLike, this.albumallData[index].auto_id, 0);
        }
    };
    AlbumImageSliderPage.prototype.doLikeUnlikeFun = function (totalLike, postId, status) {
        var _this = this;
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
                "flag": "11",
                "post_id": postId,
                "status": status
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
    // gotolikelist(){
    //   if(this.totallike>0){
    //     if(this.pushkey==1){
    //     }
    //     else{
    //       this.pushkey=0;
    //     }
    //     this.navCtrl.push('LikeUsersListPage',{'data':this.contestdetail,'flag':this.contestdetail.flag,'pushkey':this.pushkey});
    //   }
    // }
    AlbumImageSliderPage.prototype.ionSlideDidChange = function () {
        console.log('this is ionSlideDidChange2');
        this.activeSliderIndexDetect = this.slides.getActiveIndex();
        console.log('this is ionSlideDidChange2', this.activeSliderIndexDetect);
        // let currentIndex = this.slides.getActiveIndex();
        // console.log('Current index is', currentIndex);
        console.log('this is ionSlideDidCha', this.albumallData[this.activeSliderIndexDetect].auto_id);
        this.index = this.activeSliderIndexDetect;
        var postId = this.albumallData[this.activeSliderIndexDetect].auto_id;
        this.analyticApi(postId);
    };
    AlbumImageSliderPage.prototype.analyticApi = function (postId) {
        var _this = this;
        this.storage.get('employee_type').then(function (user) {
            console.log('thoughtOftheDayApi value is111==', user);
            _this.user_Type = user;
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
                "track_flag": "11",
                "type": "detail",
                "user_type": _this.user_Type,
                // "post_id" : this.getAutoId(),
                "post_id": postId
            };
            _this.apiServices.analyticApi(apiKey, _this.login_token).subscribe(function (res) {
                console.log(res);
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* Slides */])
    ], AlbumImageSliderPage.prototype, "slides", void 0);
    AlbumImageSliderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-album-image-slider',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/album-image-slider/album-image-slider.html"*/'<ion-header>\n  <ion-navbar>\n    <!-- <ion-title>{{albumallData[0]?.album_title}}</ion-title> -->\n    <ion-title>{{album_title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- <ion-row>\n        <ion-col col-12>\n          <div class="margincss">\n              <img  class="imgcss" onerror="this.src=\'../../assets/watermark/watermark.png\'" #myImage\n              src="{{albumimg}}" (click)="presentImage(myImage)"  >\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class="margincss">\n          <ion-col col-3 class="bordercss" (click)="gotolikelist()">\n        <p *ngIf="totallike==0">Like</p>\n        <p *ngIf="totallike==1">{{totallike}}&nbsp;Like</p>\n        <p *ngIf="totallike>1">{{totallike}}&nbsp;Likes</p>\n          </ion-col>\n          <ion-col col-9 class="bordercss">\n            </ion-col>\n        </ion-row>\n\n        <ion-row class="margincss">\n            <ion-col col-6 (click)="goforlike(like_status)">\n              <p *ngIf="like_status==1" ><span> <ion-icon ios="ios-thumbs-up" md="md-thumbs-up"></ion-icon></span>&nbsp;Like</p>\n              <p *ngIf="like_status==0"><span> <ion-icon ios="ios-thumbs-up-outline" md="ios-thumbs-up-outline"></ion-icon></span>&nbsp;Like</p>\n            </ion-col>\n            <ion-col col-6 class="bordercss1" (click)="goforcomment()">\n          <p><span><ion-icon ios="ios-text" md="md-text"></ion-icon></span>&nbsp;Comment</p>\n              </ion-col>\n          </ion-row>\n<hr>\n\n  <ion-row class="margincss" >\n      <ion-col col-12 >\n    <p *ngIf="totalcomment==1">{{totalcomment}}&nbsp;Comment</p>\n    <p *ngIf="totalcomment>1">{{totalcomment}}&nbsp;Comments</p>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class="margincss" *ngFor="let cmt of commentdata">\n      <ion-col col-2>\n          <div class="commentimg">\n              <img class="imgcss2"  src="../../assets/watermark/watermark.png" srcset="{{cmt.comment_by_image}}">\n          </div>\n      </ion-col>\n\n      <ion-col col-10 class="colcolor">\n<ion-row>\n  <ion-col col-7 no-padding>\n      <p class="mrtop">{{cmt.comment_by_name}}</p>\n  </ion-col>\n  <ion-col col-5 no-padding>\n      <p class="mrtop1">{{cmt.date_time}}</p>\n  </ion-col>\n</ion-row>\n\n\n        <ion-row>\n          <ion-col col-12>\n<p class="mrtop" [innerHTML]="cmt.comment"></p>\n          </ion-col>\n         \n        </ion-row>\n          </ion-col>\n    </ion-row>\n    <br><br><br><br><br> -->\n\n\n  <ion-slides *ngIf="albumallData" class="image-slider" initialSlide="{{index}}" slidesPerView="1"  (ionSlideDidChange)="ionSlideDidChange()">\n    <ion-slide *ngFor="let img of albumallData; let ind=index">\n      <img style="    height: 200px;\n      object-fit: contain;" src="{{img?.image}}" class="thumb-img" imageViewer/>\n      <h6>{{img?.title}}</h6>\n      <ion-row class="margincss borderb">\n        <ion-col col-3 class="bordercss" (click)="gotolikelist(img?.like_count,img)">\n          <p *ngIf="img?.like_count==0" class="m0 likeCommentText">Like</p>\n          <p *ngIf="img?.like_count==1" class="m0 likeCommentText">{{img?.like_count}} &nbsp;Like</p>\n          <p *ngIf="img?.like_count>1" class="m0 likeCommentText">{{img?.like_count}} &nbsp;Likes</p>\n        </ion-col>\n        <ion-col col-9 class="bordercss" (click)="showAllComment(img)">\n          <p *ngIf="img?.comment_count==0" class="m0 likeCommentText">Comment</p>\n          <p *ngIf="img?.comment_count==1" class="m0 likeCommentText">{{img?.comment_count}} &nbsp;Comment</p>\n          <p *ngIf="img?.comment_count>1" class="m0 likeCommentText">{{img?.comment_count}} &nbsp;Comments</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class="margincss ">\n        <ion-col col-6 class="likeonly">\n          <div tappable (click)="likeUnlikeFun(img, ind)">\n              \n          <ion-icon *ngIf="img?.like_status==0 || img?.like_status==\'0\'" class="emptyHeart" name="ios-thumbs-up-outline"></ion-icon>\n          <ion-icon *ngIf="img?.like_status==1 || img?.like_status==\'1\'" class="redHeart" name="md-thumbs-up"></ion-icon> Like\n        </div>\n        </ion-col>\n        <ion-col col-6 class="bordercss1" (click)="showAllComment(img)">\n          <p class="m0 showNumLikeComm">\n            <span>\n              <ion-icon ios="ios-text" md="md-text"></ion-icon>\n            </span>&nbsp;Comment</p>\n        </ion-col>\n      </ion-row>\n\n    </ion-slide>\n  </ion-slides>\n\n\n\n</ion-content>\n<ion-footer style="margin-bottom:-3px;" *ngIf="displayBox==true">\n  <form #f="ngForm" style="background-color: white;">\n    <ion-row style="\n                       border-top: 1px solid grey;">\n      <ion-col col-11>\n        <div style="background-color: white;\n                    margin-bottom: 12px!important;\n                    border-radius: 15px;\n                    margin-top: 11px;">\n          <ion-textarea style="border-radius:20px;" type="text" class="textButton" [(ngModel)]="mycomment" name="mycomment" placeholder="Write your comments..."\n            required>\n          </ion-textarea>\n        </div>\n      </ion-col>\n      <ion-col col-1 class="sendButtonColCss" *ngIf="mycomment!= null || mycomment!= undefined" (tap)="sendComment(f)">\n        <ion-icon class="sendButtonCss" name="send"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-footer>'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/album-image-slider/album-image-slider.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_img_viewer__["a" /* ImageViewerController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], AlbumImageSliderPage);
    return AlbumImageSliderPage;
}());

//# sourceMappingURL=album-image-slider.js.map

/***/ }),

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumImageSliderPageModule", function() { return AlbumImageSliderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__album_image_slider__ = __webpack_require__(1021);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AlbumImageSliderPageModule = /** @class */ (function () {
    function AlbumImageSliderPageModule() {
    }
    AlbumImageSliderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__album_image_slider__["a" /* AlbumImageSliderPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__album_image_slider__["a" /* AlbumImageSliderPage */]), __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__["b" /* IonicImageViewerModule */]
            ],
        })
    ], AlbumImageSliderPageModule);
    return AlbumImageSliderPageModule;
}());

//# sourceMappingURL=album-image-slider.module.js.map

/***/ })

});
//# sourceMappingURL=139.js.map
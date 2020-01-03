webpackJsonp([103],{

/***/ 1068:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JoineequizinstructionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_image_picker__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_img_viewer__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var JoineequizinstructionPage = /** @class */ (function () {
    function JoineequizinstructionPage(loadingCtrl, imageViewerCtrl, imagePicker, modalCtrl, toastCtrl, storage, apiServices, navCtrl, navParams) {
        var _this = this;
        this.loadingCtrl = loadingCtrl;
        this.imageViewerCtrl = imageViewerCtrl;
        this.imagePicker = imagePicker;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.apiServices = apiServices;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.index = this.navParams.get('index');
        this.instkey = this.navParams.get('instkey');
        console.log('ionViewDidLoad JoineequizinstructionPage', this.index);
        this.storage.get('login_token').then(function (data) { _this.login_token = data; });
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
            console.log(' deviceId== ', _this.employeeId);
        });
        this.storage.get('showOnBoard').then(function (data) {
            console.log('showOnBoard value is111==', data);
            _this.employeeType = data;
        });
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            console.log(' deviceId== ', _this.deviceId);
            _this.getUserInfo();
        });
    }
    JoineequizinstructionPage.prototype.start = function (rewardsapplicable) {
        // if(this.instkey==1){
        //   this.navCtrl.pop();
        // }
        // else{
        //   this.navCtrl.push('JoineequizquestionPage',{'reward_earned':this.reward_earned});
        // }
        // this.navCtrl.pop();
        this.navCtrl.push('JoineequizquestionPage', { 'reward_earned': this.reward_earned, 'rewardsapplicable': rewardsapplicable });
    };
    JoineequizinstructionPage.prototype.commonLoader = function () {
        this.loading = this.loadingCtrl.create({
            enableBackdropDismiss: true,
            spinner: 'ios-small',
            content: 'Loading data...'
        });
        this.loading.present();
    };
    JoineequizinstructionPage.prototype.getUserInfo = function () {
        var _this = this;
        this.commonLoader();
        var apiKey = {
            "client_id": this.apiServices.clientId,
            "employee_id": this.employeeId,
            "device": this.apiServices.device,
            "device_id": this.deviceId,
            "app_version": this.apiServices.appVersion,
            "user_type": this.employeeType
        };
        console.log('reset pass api key==', apiKey);
        this.apiServices.quizinstruction(apiKey, this.login_token).subscribe(function (result) {
            console.log('reset pass response== ', result);
            _this.loading.dismiss();
            _this.resdata = result;
            if (_this.resdata.success == 1) {
                _this.succ = _this.resdata.success;
                _this.allData = _this.resdata.data;
                console.log('reset pass response==111 ', _this.allData);
                _this.reward_earned = _this.allData.reward_earned;
                console.log('rese ', _this.reward_earned);
            }
            else {
                _this.succ = _this.resdata.success;
                _this.reward_earned = _this.resdata.data;
                if (_this.reward_earned != undefined) {
                    _this.total_attempted = _this.reward_earned.total_attempted;
                    _this.total_correct_answer = _this.reward_earned.total_correct_answer;
                    _this.total_point = _this.reward_earned.total_point;
                    _this.total_question = _this.reward_earned.total_question;
                    _this.total_incorrect_ans = _this.reward_earned.total_incorrect_ans;
                    // this.total_point=this.reward_earned.total_point;
                }
                // this.apiMessage(this.resdata.message);
            }
        });
    };
    JoineequizinstructionPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    JoineequizinstructionPage.prototype.goHome = function () {
        this.navCtrl.popToRoot();
    };
    JoineequizinstructionPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.navBar.backButtonClick = function (e) {
            // todo something
            _this.navCtrl.popToRoot();
        };
        console.log('ionViewDidLoad JoineequizinstructionPage');
    };
    JoineequizinstructionPage.prototype.gotohostory = function () {
        this.navCtrl.push('JoineequizhistoryPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Navbar */])
    ], JoineequizinstructionPage.prototype, "navBar", void 0);
    JoineequizinstructionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-joineequizinstruction',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/joineequizinstruction/joineequizinstruction.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{allData?.quiz_title}}</ion-title>\n\n    <ion-buttons right *ngIf="succ==0" >\n        <button ion-button (click) = "goHome()">\n            <img class="home_icon" src="../../assets/icon/Home_icon.png" alt="">\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n<div *ngIf="succ==1">\n\n\n\n<ion-row>\n  <ion-col col-12>\n    <img class="aboutEvalBg" srcset="{{allData?.quiz_image}}" src="assets/watermark/watermark.png">\n  </ion-col>\n</ion-row>\n\n<ion-card>\n    <ion-row>\n  <ion-col col-12>\n    <p class="inst">Instructions</p>\n  </ion-col>\n</ion-row>\n\n<ion-row>\n    <ion-col col-12>\n      <p [innerHTML]="allData?.instruction"></p>\n      <div class="btndiv"> \n         <button ion-button  class="btn" (click)="start(allData?.reward_applicable)">Start</button>\n        </div>\n    </ion-col>\n  </ion-row>\n</ion-card>\n\n<ion-card>\n    <ion-row>\n  <ion-col col-12>\n    <!-- <img class="aboutEvalBg" srcset="{{quizimg}}" src="assets/watermark/watermark.png"> -->\n    <p class="inst">My Score</p>\n  </ion-col>\n</ion-row>\n\n<ion-row>\n    <ion-col col-6>\n  <ion-row>\n    <!-- <ion-col col-1></ion-col> -->\n    <ion-col col-10>\n      <p class="font">Total Questions</p>\n      <p class="font"> Questions Attempted</p>\n      <p class="font">Correct Answers</p>\n    </ion-col>\n    <ion-col col-2>\n        <p>{{reward_earned?.total_question}}</p>\n        <p> {{reward_earned?.total_attempted}}</p>\n        <p>{{reward_earned?.total_correct_answer}}</p>\n    </ion-col>\n  </ion-row>\n    </ion-col>\n    <ion-col col-6 class="paddtop">\n      <p *ngIf="allData?.reward_applicable==\'1\'" class="mrtop">My Points</p>\n        <div *ngIf="allData?.reward_applicable==\'1\'" class="progress-wrapper">\n              <circle-progress class="formCircle" [percent]="reward_earned?.total_percent" [radius]="40" [outerStrokeWidth]="6" \n                        [showTitle]="false" [showSubtitle]="true" [title]="test" [subtitle]=reward_earned?.total_point\n                         [innerStrokeWidth]="3" [showUnits] = "false" subtitleFontSize = \'12\'\n                        [outerStrokeColor]="\'#542e56\'" [innerStrokeColor]="\'#7b4b7d\'" [animation]="true"\n                        [animationDuration]="300"></circle-progress>\n          </div>\n      </ion-col>\n  </ion-row>\n</ion-card>\n</div>\n\n\n    <div *ngIf="succ==0">\n        <div class="massage">\n            <h2 class="massage_heading">Congratulation!</h2>\n            <p class="massage_desc">You have Sucessfully completed the quiz</p>\n        </div>\n        <div class="sucess">\n            <ion-icon ios="ios-checkmark" md="md-checkmark" class="sucess_icon"></ion-icon>\n        </div>\n        <div class="points">\n          <p class="points_details">{{total_point}}</p>\n        </div>\n        <div class="result">\n          <div class="result_correct">\n            <img class="result_correct_image" src="../../assets/icon/bluetick.png" alt="">{{total_correct_answer}}</div>\n          <div class="result_incorrect">\n            <img class="result_incorrect_image" src="../../assets/icon/wrongIcon.png" alt=""> {{total_incorrect_ans}}</div>\n        </div>\n        <div class="action" (click)="gotohostory()">\n          <button ion-button round class="action_answers">See Answers</button>\n        </div>\n      </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/joineequizinstruction/joineequizinstruction.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5_ionic_img_viewer__["a" /* ImageViewerController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_image_picker__["a" /* ImagePicker */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], JoineequizinstructionPage);
    return JoineequizinstructionPage;
}());

//# sourceMappingURL=joineequizinstruction.js.map

/***/ }),

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoineequizinstructionPageModule", function() { return JoineequizinstructionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__joineequizinstruction__ = __webpack_require__(1068);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_circle_progress__ = __webpack_require__(372);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var JoineequizinstructionPageModule = /** @class */ (function () {
    function JoineequizinstructionPageModule() {
    }
    JoineequizinstructionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__joineequizinstruction__["a" /* JoineequizinstructionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__joineequizinstruction__["a" /* JoineequizinstructionPage */]), __WEBPACK_IMPORTED_MODULE_3_ng_circle_progress__["a" /* NgCircleProgressModule */]
            ],
        })
    ], JoineequizinstructionPageModule);
    return JoineequizinstructionPageModule;
}());

//# sourceMappingURL=joineequizinstruction.module.js.map

/***/ })

});
//# sourceMappingURL=103.js.map
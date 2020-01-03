webpackJsonp([102],{

/***/ 1069:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JoineequizquestionPage; });
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






var JoineequizquestionPage = /** @class */ (function () {
    function JoineequizquestionPage(navCtrl, navParams, viewCtrl, alertCtrl, platform, toastCtrl, storage, apiServices) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.apiServices = apiServices;
        this.nexton = false;
        this.right_ans_id = -1;
        this.greenkar = false;
        this.quizansarray = [];
        this.currentIndex = false;
        this.dummyarray = [];
        this.showsubmit = false;
        this.newarray = [];
        this.checkenable = true;
        this.checkesubmit = true;
        this.submitButtonClick = false;
        this.closeAppPopupShow = 0;
        this.storage.get('showOnBoard').then(function (data) {
            _this.employeetype = data;
            console.log('showOnBoard value this.employeetype==', _this.employeetype);
        });
        this.rewardsapplicable = this.navParams.get('rewardsapplicable');
        this.reward_earned = this.navParams.get('reward_earned');
        console.log('reward_earned==', this.rewardsapplicable);
        if (this.reward_earned != undefined) {
            this.total_attempted = this.reward_earned.total_attempted;
            this.total_correct_answer = this.reward_earned.total_correct_answer;
            this.total_point = this.reward_earned.total_point;
            this.total_question = this.reward_earned.total_question;
            this.outofvalue = this.total_question - this.total_attempted;
            this.total_percent = this.reward_earned.total_percent;
        }
        this.quizdetail();
    }
    JoineequizquestionPage.prototype.quizdetail = function () {
        var _this = this;
        this.storage.get('showOnBoard').then(function (data) {
            _this.employeetype = data;
            console.log('showOnBoard value this.employeetype==', _this.employeetype);
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
                "user_type": _this.employeetype
            };
            _this.apiServices.joineequizdetail(apiKey, _this.login_token)
                .subscribe(function (res) {
                console.log('', res);
                _this.swipe1();
                if (res.success == 1) {
                    _this.quizdata = res.data;
                    _this.totallength = _this.quizdata.length;
                    // if(this.totallength==1){
                    //   this.showsubmit=true;
                    // }
                    console.log('this.allData', _this.quizdata);
                    console.log('this.quizansarray', _this.quizansarray);
                }
                if (res.success == 0) {
                    console.log(res);
                    console.log("xdfgsdfgh", res.background_image);
                    _this.image = res.background_image;
                    // this.success=res.success;
                    _this.msg = res.message;
                    _this.navCtrl.push('QuizCompleteStatusPage');
                    // this.apiMessage(res.message);
                }
                // else {
                //   this.success=res.success;
                //   this.msg=res.message;
                //   this.apiMessage(res.message);
                // }
            }, function (err) {
                console.log('err== ', err);
                // this.apiMessage(err);
            });
        });
    };
    JoineequizquestionPage.prototype.optiondata = function (i, optidd, qid, j, duration) {
        if (this.totallength == 1) {
            this.showsubmit = true;
        }
        if (this.nexton == true) {
        }
        else {
            this.tempRightAnswer = this.quizdata[j].right_ans_id;
            this.checkenable = false;
            this.showsubmit = true;
            this.colorclass = i;
            this.j = j;
            this.selectedanswerIndex = i; //showing option index
            this.optionid = optidd;
            this.questionid = qid;
            this.index = parseInt(j);
            if (this.currentIndex == true) {
                this.checkesubmit = false;
            }
        }
        // this.quizansarray[this.index] = { "question_id": qid, "answer_id": optidd,"time_taken": };
        console.log('Current index this.quizansarray', this.quizansarray);
    };
    JoineequizquestionPage.prototype.quizsubmit = function () {
        var _this = this;
        this.storage.get('showOnBoard').then(function (data) {
            _this.employeetype = data;
            console.log('showOnBoard value this.employeetype==', _this.employeetype);
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
                "user_type": _this.employeetype,
                "question_id": _this.questionid,
                "ans_id": _this.optionid
            };
            _this.apiServices.joineequizsubmit(apiKey, _this.login_token)
                .subscribe(function (res) {
                console.log('', res);
                // this.swipe1()
                if (res.success == 1) {
                    _this.resdata = res.data;
                    console.log("rewardsapplicable submit1111", res.data);
                    console.log("this.resdata.reward_applicable submit", _this.resdata.reward_applicable);
                    _this.rewardsapplicable = _this.resdata.reward_applicable;
                    console.log("rewardsapplicable submit", _this.rewardsapplicable);
                    _this.reward_earned = res.data.reward_earned;
                    if (_this.reward_earned != undefined) {
                        _this.total_attempted = _this.reward_earned.total_attempted;
                        _this.total_correct_answer = _this.reward_earned.total_correct_answer;
                        _this.total_point = _this.reward_earned.total_point;
                        _this.total_question = _this.reward_earned.total_question;
                        _this.total_percent = _this.reward_earned.total_percent;
                        _this.outofvalue = _this.total_question - _this.total_attempted;
                    }
                    // this.quizdata = res.data;
                    // if(this.totallength==1){
                    //   this.showsubmit=true;
                    // }
                    // this.showsubmit=false;
                    // this.colorclass = '';
                    // this.right_ans_id=this.quizdata.right_ans_id;
                    // this.selectedanswer=this.optionid;
                    // console.log('this.right_ans_id', this.right_ans_id);
                    // console.log('this.allData', this.quizdata);
                    // console.log('this.selectedanswer', this.selectedanswer);
                    _this.right_ans_id = _this.tempRightAnswer;
                    _this.submitButtonClick = true;
                    console.log("greeen", _this.right_ans_id);
                    console.log("this.selectedanswerIndex", _this.selectedanswerIndex);
                    if (_this.selectedanswerIndex != _this.right_ans_id) {
                        console.log("this.selectedanswerIndex11111111", _this.selectedanswerIndex);
                        console.log("this.quizdata[this.j].option.length", _this.quizdata[_this.j].option.length);
                        _this.getoptid = _this.quizdata[_this.j].option;
                        for (var i = 0; i < _this.quizdata[_this.j].option.length; i++) {
                            console.log("this.selectedanswerIndex11111112222221", _this.selectedanswerIndex);
                            if (_this.right_ans_id == _this.getoptid[i].option_id) {
                                _this.greenind = i;
                                console.log("greeen123", _this.greenind);
                            }
                        }
                        _this.currentSlideIndex = _this.slides.getActiveIndex();
                        console.log('Current index is123', _this.currentIndex);
                        if (_this.slides.isEnd() == true) {
                            // this.showsubmit = true;
                            // this.navCtrl.pop();
                            _this.navCtrl.push('QuizCompleteStatusPage', { 'image': 'congratulations_temporaryimage.png' });
                            // this.navCtrl.push('QuizreviewPage',{'image':'congratulations_temporaryimage.png'});
                        }
                        _this.nexton = true;
                    }
                }
                else {
                    _this.apiMessage(res.message);
                }
            }, function (err) {
                console.log('err== ', err);
                // this.apiMessage(err);
            });
        });
    };
    JoineequizquestionPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    JoineequizquestionPage.prototype.swipe1 = function () {
        this.slides.lockSwipeToNext(true);
        this.currentSlideIndex = this.slides.getActiveIndex();
        console.log('Current index isswipe', this.currentSlideIndex);
    };
    JoineequizquestionPage.prototype.nextslide = function (j) {
        // if (this.radioAnswer[i].answer == '') {
        //   let msg = "please select any option";
        //   this.apiMessage(msg)
        //   return false;
        // }
        this.submitButtonClick = false;
        this.selectedanswerIndex = null;
        this.greenind = null;
        this.nexton = false;
        this.colorclass = null;
        this.showsubmit = false;
        this.checkenable = true;
        console.log("dcdfsdfsdf");
        this.slides.lockSwipeToNext(false);
        this.currentSlideIndex = this.slides.getActiveIndex();
        console.log('Current index is123', this.currentIndex);
        this.showindex = this.currentSlideIndex + 1;
        this.slides.slideTo(this.showindex);
        if (this.slides.isEnd() == true) {
            this.showsubmit = true;
        }
        this.slides.lockSwipeToNext(true);
        this.slides.lockSwipeToPrev(true);
    };
    JoineequizquestionPage.prototype.goTohistory = function () {
        this.navCtrl.push('JoineequizhistoryPage');
    };
    JoineequizquestionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JoineequizquestionPage');
    };
    JoineequizquestionPage.prototype.gotoinstruction = function (index) {
        // this.reward_earned='';
        this.showsubmit = false;
        console.log('index', index);
        this.navCtrl.push('JoineequizinstructionPage', { 'index': index, 'instkey': 1 });
    };
    JoineequizquestionPage.prototype.ionViewWillEnter = function () {
        this.initializeBackButtonCustomHandler();
    };
    JoineequizquestionPage.prototype.showeAlert = function () {
        var _this = this;
        this.alert121 = this.alertCtrl.create({
            title: 'App termination',
            message: 'Do you want to close the app?',
            buttons: [{
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Application exit prevented!');
                    }
                }, {
                    text: 'Close App',
                    handler: function () {
                        _this.platform.exitApp(); // Close this application
                    }
                }]
        });
        this.alert121.present();
    };
    JoineequizquestionPage.prototype.ionViewWillLeave = function () {
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    //Hardware Back Button
    JoineequizquestionPage.prototype.initializeBackButtonCustomHandler = function () {
        var that = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function (event) {
            that.closeAppPopupShow++;
            if (that.closeAppPopupShow % 2 != 0) {
                // that.alert121.dismiss();
                // that.showeAlert();
            }
            else {
                // that.alert121.dismiss();
            }
        }, 101); // Priority 101 will override back button handling (we set in app.component.ts) as it is bigger then priority 100 configured in app.component.ts file */
    };
    JoineequizquestionPage.prototype.goTohome = function () {
        this.navCtrl.popToRoot();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* Slides */])
    ], JoineequizquestionPage.prototype, "slides", void 0);
    JoineequizquestionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-joineequizquestion',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/joineequizquestion/joineequizquestion.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Quiz</ion-title>\n        <ion-buttons end>\n        <!-- <button ion-button (click)="goTohistory()" clear>\n        <img src="../../assets/imgs/quiz history icon.png" class="headerimg"/>\n      </button> -->\n\n      <button ion-button (click)="goTohome()" clear>\n      <img src="assets/icon/Home_icon.png" class="headerimg"/>\n    </button>\n\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n<div *ngIf="success!=0">\n    <ion-slides #slides speed="500" shouldLockSwipes=true; class="asstest" spaceBetween="10" slidesPerView="1" >\n\n        <ion-slide *ngFor="let attendant of quizdata;let j=index" style="overflow-y:scroll;">\n             <!-- <ion-row><ion-col col-10></ion-col><ion-col col-2><p style="margin: 0px;\n              font-size: 10px;\n              right: 0px;">{{j+1}}/{{quizdata.length}}</p></ion-col></ion-row>  -->\n              \n              <ion-row><ion-col col-6></ion-col><ion-col col-6><p style="margin: 0px;\n                font-size: 15px;    text-align: end;\n                ">Question {{attendant?.serial_number}} out of {{total_question}}</p></ion-col></ion-row> \n          <ion-row>\n            <ion-col col-12>\n             <ion-card style="width:100%;">\n               <div class="marg">\n                  <!-- <h6>{{j+1}}.&nbsp;{{attendant.question}}</h6> -->\n                  <h6>{{attendant.question}}</h6>\n               </div>\n                \n             </ion-card> \n            </ion-col>\n            <!-- <ion-col  col-12><img  (click)="zoomImage(attendant?.file,attendant.question)" class="imgclass"  margin-top margin-bottom src="{{attendant?.question_image}}"></ion-col> -->\n            <ion-col col-12 no-padding>\n              <ion-row  [ngClass]="{\'rowgray\':(nexton==true)}">\n              <ion-col *ngFor="let answer of attendant?.option let i = index" (click)="optiondata(i,answer.option_id,attendant.question_id,j,attendant.right_ans_id)" \n               class="options" col-6  >\n\n               <!-- (selectedanswerIndex==i && submitButtonClick==true && answer?.option_id==attendant?.right_ans_id) -->\n\n\n               <!-- (selectedanswerIndex!=i && submitButtonClick==true && answer?.option_id!=attendant?.right_ans_id)), -->\n\n              <!-- <div [ngClass]="{\'stylecolorgrey\':(this.colorclass!=i),\'stylecolorblue\':(this.colorclass==i),\n              \'stylecolorred\':(this.right_ans_id!=this.selectedanswer),\'stylecolorgreen\':(this.right_ans_id==this.selectedanswer)}">\n              <ion-label style="white-space: normal;">{{answer?.options}}</ion-label> \n               </div> -->\n               <div [ngClass]="{\'stylecolorgrey\':(selectedanswerIndex!=i && submitButtonClick==false || selectedanswerIndex!=i && submitButtonClick==true ),\n               \'stylecolorblue\':(selectedanswerIndex==i && submitButtonClick==false ),\n               \'stylecolorgreen\':(greenind==i),\n               \'stylecolorred\':(selectedanswerIndex==i && submitButtonClick==true && answer?.option_id!=attendant?.right_ans_id)\n              }">\n                  {{answer?.options}}\n<br>\n                  <!-- ind: {{selectedanswerIndex}}=={{i}}  <br>/click: {{submitButtonClick}}\n                   <br>/rightAn: {{answer?.option_id}}=={{attendant?.right_ans_id}}<br>\n                   {{greenind}}/{{i}} -->\n               </div>\n\n              </ion-col>\n            </ion-row>\n            </ion-col>\n          </ion-row>\n          <div ><br><br>\n              <!-- <button ion-button round class="btn" *ngIf="(showsubmit==true || totallength>=1) && (nexton==false)" (click)="quizsubmit()">Submit</button> -->\n              <button ion-button round class="btn" *ngIf="(showsubmit==true && totallength>=1) && (nexton==false)" (click)="quizsubmit()">Submit</button>\n              <button ion-button round class="btn1" *ngIf="showsubmit==false && totallength>=1" >Submit</button>\n              <button ion-button round class="btn" *ngIf="nexton==true" (click)="nextslide(j)">Next</button>\n            </div>\n         \n            <br><br>\n      \n\n\n         <ion-card style=" width: 97%;margin-left: 5px;">\n            <ion-row>\n          <ion-col col-12>\n            <!-- <img class="aboutEvalBg" srcset="{{quizimg}}" src="assets/watermark/watermark.png"> -->\n            <p class="inst">My Score</p>\n          </ion-col>\n        </ion-row>\n        \n        <ion-row>\n            <ion-col col-6>\n          <ion-row>\n            <!-- <ion-col col-1></ion-col> -->\n            <ion-col col-10>\n              <p class="font">Total Questions</p>\n              <p class="font"> Questions Attempted</p>\n              <p class="font">Correct Answers</p>\n            </ion-col>\n            <ion-col col-2>\n                <p>{{total_question}}</p>\n                <p> {{total_attempted}}</p>\n                <p>{{total_correct_answer}}</p>\n            </ion-col>\n          </ion-row>\n            </ion-col>\n            <ion-col col-6 class="paddtop">\n              <p *ngIf="rewardsapplicable==1" class="mrtop">My Points</p>\n                <div class="progress-wrapper" *ngIf="rewardsapplicable==1">\n                      <circle-progress class="formCircle" [percent]="total_percent" [radius]="40" [outerStrokeWidth]="6" \n                                [showTitle]="false" [showSubtitle]="true" [title]="test" [subtitle]=total_point\n                                 [innerStrokeWidth]="3" [showUnits] = "false" subtitleFontSize = \'12\'\n                                [outerStrokeColor]="\'#542e56\'" [innerStrokeColor]="\'#7b4b7d\'" [animation]="true"\n                                [animationDuration]="300"></circle-progress>\n                  </div>\n              </ion-col>\n          </ion-row>\n        </ion-card>\n\n        <div class="padd8" style="height:50px">\n          <span style="float: left; margin-left: 14px" class="instcss" (click)="goTohistory()" ><ion-icon style="font-size:15px" ios="ios-arrow-back" md="md-arrow-back"></ion-icon>&nbsp; History</span>\n        <span style="float:right;" class="instcss"(click)="gotoinstruction(j)"> Instructions &nbsp;<ion-icon style="font-size: 15px;" name="arrow-forward"></ion-icon></span>\n      </div>\n\n\n\n    <!-- <button ion-button class="btn" *ngIf="currentIndex==false" [disabled]="checkenable" (tap)="slideNext()" >Next</button>\n    <button ion-button class="btn"*ngIf="currentIndex==true" [disabled]="checkesubmit" (tap)="showConfirm()">Submit</button> -->\n  \n        \n                <!-- <button ion-button full [disabled]="checkenable"\n                 class="bottomcss" *ngIf="currentIndex==false" (tap)="slideNext()">Next</button>\n              <button ion-button [disabled]="checkesubmit"\n               class="bottomcss" *ngIf="currentIndex==true" full (tap)="showConfirm()">Submit</button> -->\n          \n        </ion-slide>\n      </ion-slides>\n    </div>\n  <div *ngIf="success==0">\n    <img src="{{image}}" alt="">\n   <br><br><br><br>\n\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/joineequizquestion/joineequizquestion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["D" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */]])
    ], JoineequizquestionPage);
    return JoineequizquestionPage;
}());

//# sourceMappingURL=joineequizquestion.js.map

/***/ }),

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoineequizquestionPageModule", function() { return JoineequizquestionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__joineequizquestion__ = __webpack_require__(1069);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_circle_progress__ = __webpack_require__(372);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var JoineequizquestionPageModule = /** @class */ (function () {
    function JoineequizquestionPageModule() {
    }
    JoineequizquestionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__joineequizquestion__["a" /* JoineequizquestionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__joineequizquestion__["a" /* JoineequizquestionPage */]), __WEBPACK_IMPORTED_MODULE_3_ng_circle_progress__["a" /* NgCircleProgressModule */]
            ],
        })
    ], JoineequizquestionPageModule);
    return JoineequizquestionPageModule;
}());

//# sourceMappingURL=joineequizquestion.module.js.map

/***/ })

});
//# sourceMappingURL=102.js.map
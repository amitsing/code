webpackJsonp([56],{

/***/ 1174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveydetailPage; });
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






var SurveydetailPage = /** @class */ (function () {
    function SurveydetailPage(navCtrl, navParams, events, alertCtrl, platform, toastCtrl, storage, apiServices) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.apiServices = apiServices;
        this.leftSideRangeIcon = 'assets/imgs/sad_icon.png';
        this.rightSideRangeIcon = 'assets/imgs/sad_icon.png';
        this.starArray = [
            { visibleOutlineStar: true },
            { visibleOutlineStar: true },
            { visibleOutlineStar: true },
            { visibleOutlineStar: true },
            { visibleOutlineStar: true },
        ];
        this.radioAnswer = [];
        this.showsubmit = false;
        this.myselcetedOption = false;
        this.showBtn = true;
        this.textoptiontype = '';
        this.checkarr = [];
        this.previousepageData = this.navParams.get('allData');
        console.log(' previousepageData== ', this.previousepageData);
        this.pushkey = this.navParams.get('pushkey');
        if (this.pushkey == 1) {
            this.surveyid = this.previousepageData.id;
        }
        else {
            this.surveyid = this.navParams.get('surveyid');
        }
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
            console.log(' employeeId== ', _this.employeeId);
        });
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
        });
        this.storage.get('showOnBoard').then(function (data) {
            _this.employeetype = data;
            console.log('showOnBoard value is111==', data);
        });
        this.emptyEmoji();
    }
    ;
    SurveydetailPage.prototype.surveydetails = function () {
        var _this = this;
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
                "survey_id": _this.surveyid
            };
            _this.apiServices.surveydetail(apiKey, _this.login_token)
                .subscribe(function (res) {
                if (res.success == 1) {
                    _this.allData = res.data;
                    _this.totallength = _this.allData.length;
                    if (_this.totallength == 1) {
                        _this.showsubmit = true;
                    }
                    for (var i = 0; i < _this.allData.length; i++) {
                        _this.radioAnswer[i] = { 'question_id': '', 'answer': '', 'option_type': '' };
                    }
                    if (_this.allData.length >= 1) {
                        _this.swipe1();
                    }
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
    SurveydetailPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3500
        });
        toast.present();
    };
    SurveydetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('showOnBoard').then(function (data) {
            _this.employeetype = data;
            console.log('showOnBoard value this.employeetype==', _this.employeetype);
            if (_this.employeetype == 'Employee') {
                _this.surveydetails();
            }
            if (_this.employeetype == 'Guest') {
                _this.joineesurveydetails();
            }
        });
        console.log('ionViewDidLoad SurveydetailPage');
    };
    SurveydetailPage.prototype.myanswer = function (optionId, alldata, optiontype, qid, i, j) {
        this.showBtn = false;
        console.log('optionId', optionId);
        console.log('alldata', alldata);
        console.log('a', optiontype);
        console.log('b', qid);
        if (alldata.option_type == 1) {
            //for radio type question-->1
            console.log('optionId== ', optionId);
            this.selectedOption = optionId;
            this.radioAnswer[i] = {
                "question_id": alldata.question_id, "answer": optionId,
                "option_type": alldata.option_type,
            };
            this.myselcetedOption = true;
        }
        if (alldata.option_type == 2) {
            this.ckobj = { optionId: optionId };
            var index = this.checkarr.findIndex(function (item) { return item.optionId == optionId; });
            console.log('****index==', index);
            if (index >= 0) {
                this.checkarr.splice(index, 1);
            }
            else {
                this.checkarr.push(this.ckobj);
            }
            this.radioAnswer[i] = {
                "question_id": qid, "answer": this.checkarr,
                "option_type": optiontype
            };
        }
    };
    SurveydetailPage.prototype.emptyEmoji = function () {
        this.sadEmoji = 'assets/imgs/sad_icon.png';
        this.normalEmoji = 'assets/imgs/normal_icon.png';
        this.happyEmoji = 'assets/imgs/happiness_icon.png';
        this.veryHappyEmoji = 'assets/imgs/smileyoutline.png';
    };
    //emoji 
    SurveydetailPage.prototype.mySelectedEmoji = function (emojiId, answer, alldata, optiontype, qid, i) {
        this.showBtn = false;
        this.emojiId = emojiId;
        if (emojiId == 1) {
            this.imojianswer = 'Very Sad';
            this.textEmoji = 'Not Satisfy';
            this.sadEmoji = 'assets/imgs/sad1.png';
            this.normalEmoji = 'assets/imgs/normal_icon.png';
            this.happyEmoji = 'assets/imgs/happiness_icon.png';
            this.veryHappyEmoji = 'assets/imgs/smileyoutline.png';
        }
        else if (emojiId == 2) {
            this.imojianswer = 'Sad';
            this.textEmoji = 'Neutral';
            this.sadEmoji = 'assets/imgs/sad_icon.png';
            this.normalEmoji = 'assets/imgs/average1_small.png';
            this.happyEmoji = 'assets/imgs/happiness_icon.png';
            this.veryHappyEmoji = 'assets/imgs/smileyoutline.png';
        }
        else if (emojiId == 3) {
            this.imojianswer = 'Happy';
            this.textEmoji = 'Satisfactory';
            this.sadEmoji = 'assets/imgs/sad_icon.png';
            this.normalEmoji = 'assets/imgs/normal_icon.png';
            this.happyEmoji = 'assets/imgs/02_smileyGreen.png';
            this.veryHappyEmoji = 'assets/imgs/smileyoutline.png';
        }
        else if (emojiId == 4) {
            this.imojianswer = 'Very Happy';
            this.textEmoji = 'Very Happy';
            this.sadEmoji = 'assets/imgs/sad_icon.png';
            this.normalEmoji = 'assets/imgs/normal_icon.png';
            this.happyEmoji = 'assets/imgs/happiness_icon.png';
            this.veryHappyEmoji = 'assets/imgs/smileyfilled.png';
        }
        else {
            this.emptyEmoji();
        }
        this.radioAnswer[i] = {
            "question_id": alldata.question_id, "answer": this.imojianswer,
            "option_type": alldata.option_type
        };
        console.log('emoji data', this.radioAnswer);
        this.myselcetedOption = true;
    };
    //for rating
    SurveydetailPage.prototype.myRangeTypeAnswer = function (rangeVal, alldata, optiontype, qid, i) {
        if (rangeVal >= 1 && rangeVal <= 2) {
            this.rightSideRangeIcon = 'assets/imgs/sad_icon.png';
            this.newRangeVal = 1;
        }
        else if (rangeVal >= 3 && rangeVal <= 4) {
            this.rightSideRangeIcon = 'assets/imgs/normal_icon.png';
            this.newRangeVal = 2;
        }
        else if (rangeVal >= 5 && rangeVal <= 6) {
            this.rightSideRangeIcon = 'assets/imgs/happiness_icon.png';
            this.newRangeVal = 3;
        }
        else if (rangeVal >= 7 && rangeVal <= 8) {
            this.rightSideRangeIcon = 'assets/imgs/smileyoutline.png';
            this.newRangeVal = 4;
        }
        else if (rangeVal >= 9 && rangeVal <= 10) {
            this.rightSideRangeIcon = 'assets/imgs/smileyfilled.png';
            this.newRangeVal = 5;
        }
        this.radioAnswer[i] = {
            "question_id": qid, "answer": this.newRangeVal,
            "option_type": optiontype
        };
        console.log('range data', this.radioAnswer);
        if (rangeVal > 0) {
            this.showBtn = false;
            this.myselcetedOption = true;
        }
        else {
            this.showBtn = true;
            this.myselcetedOption = false;
        }
    };
    //for 5 star rating
    SurveydetailPage.prototype.changeBgColor = function (index, alldata, mainindex) {
        this.showBtn = false;
        this.visibleFillStar = index;
        this.starArray = [
            { visibleOutlineStar: true },
            { visibleOutlineStar: true },
            { visibleOutlineStar: true },
            { visibleOutlineStar: true },
            { visibleOutlineStar: true },
        ];
        // console.log('star position', index);
        for (var i = 0; i <= index; i++) {
            this.starArray[i].visibleOutlineStar = false;
        }
        //for startRating type question-->5
        console.log('*****start rating*******alldata==', alldata);
        this.radioAnswer[mainindex] = {
            "question_id": alldata.question_id, "answer": index + 1,
            "option_type": alldata.option_type
        };
        this.myselcetedOption = true;
    };
    SurveydetailPage.prototype.slideChanged = function () {
        this.currentIndex = this.slides.getActiveIndex();
        this.showindex = this.currentIndex + 1;
        if (this.slides.isEnd() == true) {
            this.showsubmit = true;
        }
    };
    SurveydetailPage.prototype.swipe1 = function () {
        this.slides.lockSwipeToNext(true);
        this.currentIndex = this.slides.getActiveIndex();
    };
    SurveydetailPage.prototype.nextslide = function (i, allData) {
        console.log('allData in next slide==', allData);
        this.emptyEmoji();
        if (allData.option_type == 3) {
            //this is emoji question
            // mySelectedEmoji(emojiId, answer, alldata, optiontype, qid, i)
            this.mySelectedEmoji(this.emojiId, this.radioAnswer[i].answer, allData, allData.option_type, allData.question_id, i);
        }
        if (this.radioAnswer[i].answer == '') {
            var msg = "please select any option";
            this.apiMessage(msg);
            return false;
        }
        if (this.radioAnswer.length >= 1) {
            this.selectedOption = this.radioAnswer[i + 1].answer;
            console.log('backselectedOption iiii== ', this.selectedOption);
            console.log('backselectedOption== ', this.selectedOption);
        }
        this.slides.lockSwipeToNext(false);
        this.currentIndex = this.slides.getActiveIndex();
        console.log('Current index is123', this.currentIndex);
        this.showindex = this.currentIndex + 1;
        this.slides.slideTo(this.showindex);
        if (this.slides.isEnd() == true) {
            this.showsubmit = true;
        }
        this.slides.lockSwipeToNext(true);
        this.slides.lockSwipeToPrev(true);
    };
    SurveydetailPage.prototype.backslide = function (k, allData) {
        this.emptyEmoji();
        console.log('allData in back slide==', allData);
        if (allData.option_type == 3) {
            console.log('allData in back slide==1111', allData);
            //this is emoji question
            // mySelectedEmoji(emojiId, answer, alldata, optiontype, qid, i)
            this.mySelectedEmoji(this.emojiId, this.radioAnswer[k].answer, allData, allData.option_type, allData.question_id, k);
        }
        else {
        }
        // this.selectedOption = optionId;
        // this.radioAnswer[i] = {
        //   "question_id": alldata.question_id, "answer": optionId,
        //   "option_type": alldata.option_type,
        // }
        // console.log('hiii==', this.allData[this.currentIndex]);
        //  let tempIndex = this.radioAnswer[this.currentIndex].findIndex(x => x.answer ==this.allData[this.currentIndex].);
        // let tempIndex = allOptions.findIndex(x => x.option_id ==this.radioAnswer[this.currentIndex].answer);
        // console.log('hiii current index ==', this.currentIndex);
        // console.log('hiii current ans ==', this.radioAnswer[this.currentIndex].answer);
        // console.log('hiii tempIndex allOptions ==', allOptions);
        // console.log('hiii tempIndex ==', tempIndex);
        // if(tempIndex>=0){
        //   this.selectedOption=allOptions[tempIndex].option_id;
        //   console.log('hiii selectedOption ==', allOptions[tempIndex].option_id);
        // }
        if (this.radioAnswer.length >= 1) {
            this.selectedOption = this.radioAnswer[k - 1].answer;
            console.log('backselectedOption iiii== ', this.selectedOption);
            console.log('backselectedOption== ', this.selectedOption);
        }
        this.showsubmit = false;
        this.slides.lockSwipeToPrev(false);
        this.currentIndex = this.slides.getActiveIndex();
        this.showindex = this.currentIndex - 1;
        this.slides.slideTo(this.showindex);
        this.slides.lockSwipeToNext(true);
        this.slides.lockSwipeToPrev(true);
    };
    SurveydetailPage.prototype.submit = function (i) {
        console.log('textdata', this.radioAnswer);
        if (this.radioAnswer[i].answer == '') {
            var msg = "please select any option";
            this.apiMessage(msg);
        }
        else {
            this.presentConfirm();
        }
    };
    SurveydetailPage.prototype.joineesubmit = function (i) {
        console.log('textdata', this.radioAnswer);
        if (this.radioAnswer[i].answer == '') {
            var msg = "please select any option";
            this.apiMessage(msg);
        }
        else {
            this.presentConfirm();
        }
    };
    SurveydetailPage.prototype.presentConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            // title: 'Confirm purchase',
            message: 'Are you sure you want to submit survey?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        _this.storage.get('showOnBoard').then(function (data) {
                            _this.employeetype = data;
                            console.log('showOnBoard value this.employeetype==', _this.employeetype);
                            if (_this.employeetype == 'Employee') {
                                _this.finish();
                            }
                            if (_this.employeetype == 'Guest') {
                                _this.joineefinish();
                            }
                        });
                        console.log('Buy clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    SurveydetailPage.prototype.joineefinish = function () {
        var _this = this;
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
                "survey_id": _this.surveyid,
                "answer_arr": _this.radioAnswer,
            };
            _this.apiServices.joineesurveysubmit(apiKey, _this.login_token)
                .subscribe(function (res) {
                console.log('', res);
                if (res.success == 1) {
                    // this.navCtrl.pop();
                    _this.navCtrl.popTo(_this.navCtrl.getByIndex(_this.navCtrl.length() - 3));
                    console.log('res', res);
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
    SurveydetailPage.prototype.finish = function () {
        var _this = this;
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
                "survey_id": _this.surveyid,
                "answer_arr": _this.radioAnswer,
            };
            _this.apiServices.surveysubmit(apiKey, _this.login_token)
                .subscribe(function (res) {
                console.log('', res);
                if (res.success == 1) {
                    _this.events.publish('reloadsurveyApi', true);
                    _this.navCtrl.pop();
                    // this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-3));
                    console.log('res', res);
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
    SurveydetailPage.prototype.textsubmit = function (textAnswer1, i, textdata, opttype) {
        this.radioAnswer[i] = {
            "question_id": this.allData[i].question_id, "answer": textAnswer1,
            "option_type": opttype
        };
        console.log('final submit array== ', this.radioAnswer);
    };
    SurveydetailPage.prototype.joineesurveydetails = function () {
        var _this = this;
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
                "survey_id": _this.surveyid
            };
            _this.apiServices.joineesurveydetail(apiKey, _this.login_token)
                .subscribe(function (res) {
                if (res.success == 1) {
                    _this.allData = res.data;
                    _this.totallength = _this.allData.length;
                    if (_this.totallength == 1) {
                        _this.showsubmit = true;
                    }
                    for (var i = 0; i < _this.allData.length; i++) {
                        _this.radioAnswer[i] = { 'question_id': '', 'answer': '', 'option_type': '' };
                    }
                    if (_this.allData.length >= 1) {
                        _this.swipe1();
                    }
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* Slides */])
    ], SurveydetailPage.prototype, "slides", void 0);
    SurveydetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-surveydetail',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/surveydetail/surveydetail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{previousepageData?.title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-slides (ionSlideDidChange)="slideChanged()" #Slides>\n    <ion-slide *ngFor="let data of allData let i = index;">\n\n      <ion-card>\n        <!-- for radio button -->\n        <ion-card-content class="mandatoryContent">\n\n          <ion-row>\n            <ion-col col-2>\n              <!-- <img style="height: 30px;width:30px;" src="{{sadEmoji}}" class="iconcss" /> -->\n\n              <img style="height: 30px;width:30px;" src="../../assets/imgs/surveyicon.png"class="iconcss" />\n            </ion-col>\n            <ion-col col-10 class="bbottom">\n              <p class="question">{{data?.question}} </p>\n            </ion-col>\n          </ion-row>\n\n          <div *ngIf="data?.option_type==1">\n            <ion-row *ngFor="let myOption of data?.options let k=index;" (tap)="myanswer(myOption?.option_id,data,data?.option_type,data?.question_id,i,k)"\n              [ngClass]="{\'greenBg\': selectedOption==myOption.option_id, \'lightGrayBg\':selectedOption!=myOption.option_id }">\n              <ion-col col-12>{{myOption?.options}}</ion-col>\n            </ion-row>\n          </div>\n\n          <!-- for checkbox  -->\n          <div *ngIf="data?.option_type==2">\n            <ion-row *ngFor="let myOption of data?.options let j=index;">\n              <ion-col col-12>\n                <ion-list>\n\n                  <ion-item class="checkboxLabel">\n                    <ion-label>{{myOption?.options}}</ion-label>\n                    <ion-checkbox color="secondary" (ionChange)="myanswer(myOption?.option_id,data,data?.option_type,data?.question_id,i,j)"></ion-checkbox>\n                  </ion-item>\n                </ion-list>\n              </ion-col>\n            </ion-row>\n\n          </div>\n\n          <!-- for emoji  -->\n          <div *ngIf="data?.option_type==3">\n            <ion-row>\n              <ion-col col-12>\n                <ion-row>\n                  <ion-col col-3 class="centerData">\n                    <img src="{{sadEmoji}}" class="emojiIcons" (tap)="mySelectedEmoji(1,\'s1\',data,data?.option_type,data?.question_id,i)" />\n                  </ion-col>\n                  <ion-col col-3 class="centerData">\n                    <img src="{{normalEmoji}}" class="emojiIcons" (tap)="mySelectedEmoji(2,\'a1\',data,data?.option_type,data?.question_id,i)"\n                    />\n                  </ion-col>\n                  <ion-col col-3 class="centerData">\n                    <img src="{{happyEmoji}}" class="emojiIcons" (tap)="mySelectedEmoji(3,\'h1\',data,data?.option_type,data?.question_id,i)" />\n                  </ion-col>\n                  <ion-col col-3 class="centerData">\n                    <img src="{{veryHappyEmoji}}" class="emojiIcons" (tap)="mySelectedEmoji(4,\'es1\',data,data?.option_type,data?.question_id,i)"\n                    />\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <p [ngClass]="{\'center1\':emojiId==1, \'center2\':emojiId==2, \'center3\':emojiId==3, \'center4\':emojiId==4 }">{{textEmoji}}</p>\n            </ion-row>\n          </div>\n\n          <!-- for range  -->\n          <div *ngIf="data?.option_type==4">\n            <ion-row>\n              <ion-col col-12>\n\n                <ion-list>\n                  <ion-item style="background-color:white">\n                    <ion-range [(ngModel)]="rangeVal" min="0" max="10" step="1" color="secondary" pin="true" snaps="true" tick="true" (ngModelChange)="myRangeTypeAnswer(rangeVal,data,data?.option_type,data?.question_id,i)">\n                      <img range-left src="{{leftSideRangeIcon}}" class="smallEmojiRange" />\n                      <img range-right src="{{rightSideRangeIcon}}" class="smallEmojiRange" />\n                    </ion-range>\n                  </ion-item>\n               \n                  <ion-row style="width:100%">\n                    <ion-col col-3 style="padding-top: 0px;margin-top: 0px;">\n                      <p style="font-size:12px">{{data?.rangeMin}}</p>\n                    </ion-col>\n                    <ion-col col-6></ion-col>\n                    <ion-col col-3 style="padding-top: 0px;margin-top: 0px;left: 14px;">\n                      <p style="font-size:12px">{{data?.rangeMax}}</p>\n                    </ion-col>\n\n                  </ion-row>\n                </ion-list>\n              </ion-col>\n            </ion-row>\n          </div>\n\n          <!-- for star  -->\n          <div *ngIf="data?.option_type==5">\n            <ion-row align-items-center>\n              <ion-col col-1>\n              </ion-col>\n\n              <ion-col col-2 *ngFor="let star_data of starArray; let x=index" (click)="changeBgColor(x,data,i)">\n\n                <ion-icon name="ios-star-outline" class="starDesign" *ngIf="star_data?.visibleOutlineStar==true"></ion-icon>\n                <ion-icon name="ios-star" class="fillStarDesign" *ngIf="star_data?.visibleOutlineStar==false"></ion-icon>\n              </ion-col>\n\n              <ion-col col-1>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12>\n                <!-- <p class="ratingTitle">{{data?.ratingText[visibleFillStar]}}</p> -->\n              </ion-col>\n            </ion-row>\n          </div>\n\n          <!-- for text area -->\n          <div *ngIf="data?.option_type==6">\n            <ion-row>\n              <ion-col col-12>\n                <p>youn can write your suggestion or point of view.</p>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12>\n                <ion-textarea rows="4" placeholder="Enter a description" style="    border: 1px solid #ccc;\n      border-radius: 3px;" [(ngModel)]="radioAnswer[i].answer" (ngModelChange)="textsubmit(radioAnswer[i].answer,i,data,data?.option_type)"\n                  name="textAnswer1"></ion-textarea>\n              </ion-col>\n            </ion-row>\n\n          </div>\n\n          <div class="roundcircle">\n            <p class="paracolor">{{i+1}}</p>\n          </div>\n\n          <ion-row>\n\n            <ion-col col-6 class="alignleft">\n              <div *ngIf="currentIndex!=0 && totallength>1">\n                <button ion-button round class="btn2" (click)="backslide(i,data)">Back</button>\n              </div>\n            </ion-col>\n            <ion-col col-6 class="alignright">\n              <div *ngIf="showsubmit==false && totallength>1">\n                <button ion-button round class="btn3" (click)="nextslide(i,data)">Next</button>\n              </div>\n            </ion-col>\n\n          </ion-row>\n\n          <div class="centr">\n            <button ion-button round class="btn1" *ngIf="showsubmit==true && employeetype==\'Employee\'" (click)="submit(i)">Submit</button>\n            <button ion-button round class="btn1" *ngIf="showsubmit==true && employeetype==\'Guest\'" (click)="joineesubmit(i)">Submit</button>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </ion-slide>\n\n  </ion-slides>\n\n\n</ion-content>'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/surveydetail/surveydetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */]])
    ], SurveydetailPage);
    return SurveydetailPage;
}());

//# sourceMappingURL=surveydetail.js.map

/***/ }),

/***/ 846:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveydetailPageModule", function() { return SurveydetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__surveydetail__ = __webpack_require__(1174);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SurveydetailPageModule = /** @class */ (function () {
    function SurveydetailPageModule() {
    }
    SurveydetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__surveydetail__["a" /* SurveydetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__surveydetail__["a" /* SurveydetailPage */]),
            ],
        })
    ], SurveydetailPageModule);
    return SurveydetailPageModule;
}());

//# sourceMappingURL=surveydetail.module.js.map

/***/ })

});
//# sourceMappingURL=56.js.map
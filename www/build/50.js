webpackJsonp([50],{

/***/ 1181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestsurveyPage; });
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
 * Generated class for the TestsurveyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TestsurveyPage = /** @class */ (function () {
    function TestsurveyPage(navCtrl, navParams, events, alertCtrl, zone, toastCtrl, storage, loadingCtrl, apiServices) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.zone = zone;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.apiServices = apiServices;
        this.msg = "";
        this.recarray = {};
        this.leftSideRangeIcon = 'assets/img/sad_icon.png';
        this.rightSideRangeIcon = 'assets/img/sad_icon.png';
        this.HeaderClick = 1;
        this.recurementQuestions = [];
        this.successVal = 0;
        this.ansSelected = 0; //next and submit button disable
        // myAnswerForfeedback=[];
        this.myAnswerForfeedback = [{ "questionId": "", "questionType": "", "optionId": "", "tempRangeVal": "", "checkboxAnswer": [], "tempStar": [], "answer": "", "submitted": false }];
        this.changeQuestionIndex = 0;
        this.emptyStar = [{ "status": false }, { "status": false }, { "status": false }, { "status": false }, { "status": false }];
        this.previousepageData = this.navParams.get('allData');
        console.log(' previousepageData== ', this.previousepageData);
        this.recruitcheck = this.navParams.get('recruitcheck');
        console.log('this.recruitcheck', this.recruitcheck);
        // this.surveyid = this.navParams.get('surveyid');
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
        // this.storage.get('showOnBoard').then((data)=>{
        //   this.employeetype=data;
        //   console.log('showOnBoard value is111==',data );
        //   this.getQuestion();
        // });
        this.storage.get('showOnBoard').then(function (data) {
            _this.employeetype = data;
            console.log('showOnBoard value this.employeetype==', _this.employeetype);
            if (_this.employeetype == 'Employee') {
                _this.getQuestion();
            }
            if (_this.employeetype == 'Guest') {
                _this.getjoineeQuestion();
            }
        });
        this.emptyEmoji();
        this.makeEmptyStar('empty');
    }
    TestsurveyPage.prototype.makeEmptyStar = function (fillStarCount) {
        var _this = this;
        if (fillStarCount == 'empty') {
            this.zone.run(function () {
                console.log('hiii.......');
                _this.emptyStar = [{ "status": false }, { "status": false }, { "status": false }, { "status": false }, { "status": false }];
                console.log('hiii.......', _this.emptyStar);
            });
        }
        else {
            for (var i = 0; i < fillStarCount; i++) {
                this.emptyStar[i].status = true;
            }
        }
    };
    TestsurveyPage.prototype.emptyEmoji = function () {
        this.sadEmoji = 'assets/img/sad_icon.png';
        this.normalEmoji = 'assets/img/normal_icon.png';
        this.happyEmoji = 'assets/img/happiness_icon.png';
        this.veryHappyEmoji = 'assets/img/smileyoutline.png';
    };
    TestsurveyPage.prototype.getQuestion = function () {
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
                    _this.zone.run(function () {
                        _this.recurementQuestions = res.data;
                        console.log('recurementQuestions== ', _this.recurementQuestions);
                        _this.totalFeedbackQuestion = _this.recurementQuestions.length;
                        console.log('totalFeedbackQuestion== ', _this.totalFeedbackQuestion);
                        //creating null object for fill the answer after select
                        for (var i = 1; i < _this.totalFeedbackQuestion; i++) {
                            if (res.data[i].option_type == '5' || res.data[i].option_type == 5) {
                                _this.myAnswerForfeedback.push({ "questionId": "", "questionType": "", "optionId": "", "answer": "",
                                    "tempRangeVal": "", "checkboxAnswer": [], "tempStar": [], "submitted": false });
                            }
                            else {
                                _this.myAnswerForfeedback.push({ "questionId": "", "questionType": "", "optionId": "", "answer": "",
                                    "tempRangeVal": "", "checkboxAnswer": [],
                                    "tempStar": [{ "status": false }, { "status": false }, { "status": false }, { "status": false }, { "status": false }], "submitted": false });
                            }
                        }
                        _this.successVal = 1;
                        console.log('myAnswerForfeedback array=', _this.myAnswerForfeedback);
                        console.log('recurementQuestions array=', _this.recurementQuestions);
                    });
                }
                else {
                    // this.apiMessage(res.message);
                    _this.showAlert(res.message);
                }
            }, function (err) {
                console.log('err== ', err);
                // this.apiMessage(err);
            });
        });
    };
    // apiMessage(message) {
    //   const toast = this.toastCtrl.create({
    //     message: message,
    //     duration: 3500
    //   });
    //   toast.present();
    // }
    TestsurveyPage.prototype.getjoineeQuestion = function () {
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
            var apiKey = {
                // "client_id": this.apiServices.clientId,
                // "employee_id": this.employeeId,
                // "device": this.apiServices.device,
                // "device_id": this.deviceId,
                // "app_version": this.apiServices.appVersion,
                // "survey_id": this.surveyid
                "client_id": _this.apiServices.clientId,
                "employee_id": _this.employeeId,
                "device": _this.apiServices.device,
                "device_id": _this.deviceId,
                "app_version": _this.apiServices.appVersion,
                "survey_id": _this.surveyid
            };
            _this.apiServices.joineesurveydetail(apiKey, _this.login_token)
                .subscribe(function (res) {
                _this.loading.dismiss();
                if (res.success == 1) {
                    _this.recurementQuestions = res.data;
                    console.log('recurementQuestions== ', _this.recurementQuestions);
                    _this.totalFeedbackQuestion = _this.recurementQuestions.length;
                    //creating null object for fill the answer after select
                    for (var i = 1; i < _this.totalFeedbackQuestion; i++) {
                        if (res.data[i].option_type == '5' || res.data[i].option_type == 5) {
                            _this.myAnswerForfeedback.push({ "questionId": "", "questionType": "", "optionId": "", "answer": "",
                                "tempRangeVal": "", "checkboxAnswer": [], "tempStar": [], "submitted": false });
                        }
                        else {
                            _this.myAnswerForfeedback.push({ "questionId": "", "questionType": "", "optionId": "", "answer": "",
                                "tempRangeVal": "", "checkboxAnswer": [],
                                "tempStar": [{ "status": false }, { "status": false }, { "status": false }, { "status": false }, { "status": false }], "submitted": false });
                        }
                    }
                    _this.successVal = 1;
                    console.log('myAnswerForfeedback array=', _this.myAnswerForfeedback);
                    console.log('recurementQuestions array=', _this.recurementQuestions);
                }
                else {
                    // this.apiMessage(res.message);
                    _this.showAlert(res.message);
                }
            }, function (err) {
                console.log('err== ', err);
                // this.apiMessage(err);
            });
        });
    };
    TestsurveyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TestsurveyPage');
        this.analyticApi();
    };
    TestsurveyPage.prototype.updateCheckboxAns = function (options, questionID, questionType) {
        console.log('options', options);
        this.myAnswerForfeedback[this.changeQuestionIndex].checkboxAnswer = this.recurementQuestions[this.changeQuestionIndex].options;
        console.log('myAnswerForfeedback', this.myAnswerForfeedback);
        console.log('myAnswerForfeedback', this.recurementQuestions);
        this.myAnswerForfeedback[this.changeQuestionIndex].questionId = questionID;
        this.myAnswerForfeedback[this.changeQuestionIndex].questionType = questionType;
        var index = this.myAnswerForfeedback[this.changeQuestionIndex].checkboxAnswer.findIndex(function (data) { return data.answer == true; });
        console.log('checkbox index', index);
        if (index >= 0) {
            this.myAnswerForfeedback[this.changeQuestionIndex].submitted = true;
            this.ansSelected = 1; //next and submit button disable
        }
        else {
            this.myAnswerForfeedback[this.changeQuestionIndex].submitted = false;
            this.ansSelected = 0; //next and submit button disable
        }
    };
    TestsurveyPage.prototype.mySelectedOption = function (optId, questionID, questionType) {
        this.myOption = optId;
        console.log('before push value==', this.myAnswerForfeedback);
        console.log('answer', optId);
        console.log('questionID', questionID);
        console.log('questionType', questionType);
        console.log('questionIndex==', this.changeQuestionIndex);
        this.myAnswerForfeedback[this.changeQuestionIndex].optionId = optId;
        this.myAnswerForfeedback[this.changeQuestionIndex].answer = optId; //ansert
        this.myAnswerForfeedback[this.changeQuestionIndex].questionId = questionID;
        this.myAnswerForfeedback[this.changeQuestionIndex].questionType = questionType;
        this.myAnswerForfeedback[this.changeQuestionIndex].submitted = true;
        console.log('after push value==', this.myAnswerForfeedback);
        this.ansSelected = 1; //next and submit button disable
    };
    TestsurveyPage.prototype.fillStarData = function (index, questionID, questionType) {
        // this.myOption=index;
        this.myAnswerForfeedback[this.changeQuestionIndex].tempStar = [];
        console.log('answer', index);
        console.log('questionID', questionID);
        console.log('questionType', questionType);
        console.log('questionIndex==', this.changeQuestionIndex);
        console.log('before push value==', this.myAnswerForfeedback[this.changeQuestionIndex]);
        for (var k = 0; k < 5; k++) {
            if (k < index) {
                this.myAnswerForfeedback[this.changeQuestionIndex].tempStar.push({ "status": true });
                this.emptyStar[k].status = true;
            }
            else {
                this.myAnswerForfeedback[this.changeQuestionIndex].tempStar.push({ "status": false });
                this.emptyStar[k].status = false;
            }
            // this.makeEmptyStar(index);
        }
        this.myAnswerForfeedback[this.changeQuestionIndex].answer = index;
        this.myAnswerForfeedback[this.changeQuestionIndex].questionId = questionID;
        this.myAnswerForfeedback[this.changeQuestionIndex].questionType = questionType;
        this.myAnswerForfeedback[this.changeQuestionIndex].submitted = true;
        console.log('after push value==', this.myAnswerForfeedback);
        this.ansSelected = 1; //next and submit button disable
    };
    TestsurveyPage.prototype.mySelectedEmoji = function (emojiId, answer, questionID, questionType) {
        console.log('emojiId', emojiId);
        console.log('answer', answer);
        console.log('questionID', questionID);
        console.log('questionType', questionType);
        if (emojiId == 1) {
            this.sadEmoji = 'assets/img/sad1.png';
            this.normalEmoji = 'assets/img/normal_icon.png';
            this.happyEmoji = 'assets/img/happiness_icon.png';
            this.veryHappyEmoji = 'assets/img/smileyoutline.png';
        }
        else if (emojiId == 2) {
            this.sadEmoji = 'assets/img/sad_icon.png';
            this.normalEmoji = 'assets/img/average1.png';
            this.happyEmoji = 'assets/img/happiness_icon.png';
            this.veryHappyEmoji = 'assets/img/smileyoutline.png';
        }
        else if (emojiId == 3) {
            this.sadEmoji = 'assets/img/sad_icon.png';
            this.normalEmoji = 'assets/img/normal_icon.png';
            this.happyEmoji = 'assets/img/smile1.png';
            this.veryHappyEmoji = 'assets/img/smileyoutline.png';
        }
        else if (emojiId == 4) {
            this.sadEmoji = 'assets/img/sad_icon.png';
            this.normalEmoji = 'assets/img/normal_icon.png';
            this.happyEmoji = 'assets/img/happiness_icon.png';
            this.veryHappyEmoji = 'assets/img/smileyfill.png';
        }
        console.log('inside emoji fun************index==', this.changeQuestionIndex);
        this.myAnswerForfeedback[this.changeQuestionIndex].answer = answer;
        this.myAnswerForfeedback[this.changeQuestionIndex].questionId = questionID;
        this.myAnswerForfeedback[this.changeQuestionIndex].questionType = questionType;
        this.myAnswerForfeedback[this.changeQuestionIndex].submitted = true;
        console.log('push value in myAnswerForfeedback==', this.myAnswerForfeedback);
        this.ansSelected = 1; //next and submit button disable
    };
    TestsurveyPage.prototype.myTextareaAns = function (answer, questionID, questionType) {
        console.log('answer', answer);
        console.log('questionID', questionID);
        console.log('questionType', questionType);
        // this.msg=answer.trim();
        // if(this.msg.length>=1){
        // this.ansSelected=1; 
        // }else{
        //   console.log('blank',answer );
        //   this.ansSelected=0; 
        // }
        this.myAnswerForfeedback[this.changeQuestionIndex].answer = answer;
        this.myAnswerForfeedback[this.changeQuestionIndex].questionId = questionID;
        this.myAnswerForfeedback[this.changeQuestionIndex].questionType = questionType;
        this.myAnswerForfeedback[this.changeQuestionIndex].submitted = true;
        console.log('push value==', this.myAnswerForfeedback);
        this.ansSelected = 1;
        // next and submit button disable
    };
    TestsurveyPage.prototype.selectedRangeAns = function (val, questionID, questionType) {
        var answerforrange;
        if (val == 0) {
            this.leftSideRangeIcon = 'assets/img/sad_icon.png';
            this.rightSideRangeIcon = 'assets/img/sad_icon.png';
            answerforrange = 0;
        }
        else if (val > 0 && val <= 2) {
            this.leftSideRangeIcon = 'assets/img/sad_icon.png';
            this.rightSideRangeIcon = 'assets/img/sad_icon.png';
            answerforrange = 1;
        }
        else if (val > 2 && val <= 4) {
            this.leftSideRangeIcon = 'assets/img/sad_icon.png';
            this.rightSideRangeIcon = 'assets/img/normal_icon.png';
            answerforrange = 2;
        }
        else if (val > 4 && val <= 6) {
            this.leftSideRangeIcon = 'assets/img/sad_icon.png';
            this.rightSideRangeIcon = 'assets/img/happiness_icon.png';
            answerforrange = 3;
        }
        else if (val > 6 && val <= 8) {
            this.leftSideRangeIcon = 'assets/img/sad_icon.png';
            this.rightSideRangeIcon = 'assets/img/smileyoutline.png';
            answerforrange = 4;
        }
        else if (val > 8 && val <= 10) {
            this.leftSideRangeIcon = 'assets/img/sad_icon.png';
            this.rightSideRangeIcon = 'assets/img/smileyfill.png';
            answerforrange = 5;
        }
        console.log('answer', val);
        console.log('answer', answerforrange);
        console.log('questionID', questionID);
        console.log('questionType', questionType);
        if (val > 0) {
            this.myAnswerForfeedback[this.changeQuestionIndex].tempRangeVal = val;
            this.myAnswerForfeedback[this.changeQuestionIndex].answer = answerforrange;
            this.myAnswerForfeedback[this.changeQuestionIndex].questionId = questionID;
            this.myAnswerForfeedback[this.changeQuestionIndex].questionType = questionType;
            this.myAnswerForfeedback[this.changeQuestionIndex].submitted = true;
            console.log('push value==', this.myAnswerForfeedback);
            this.ansSelected = 1; //next and submit button disable
        }
        else {
            this.myAnswerForfeedback[this.changeQuestionIndex].submitted = false;
            console.log('push value==', this.myAnswerForfeedback);
            this.ansSelected = 0; //next and submit button disable
        }
    };
    TestsurveyPage.prototype.previousQuestion = function (dataFromHtmlpage) {
        console.log('array is==', this.myAnswerForfeedback);
        if (this.changeQuestionIndex > 0) {
            this.changeQuestionIndex = this.changeQuestionIndex - 1;
            console.log('****************index***************==', this.changeQuestionIndex);
            if (this.myAnswerForfeedback[this.changeQuestionIndex].submitted == true) {
                console.log('myAnswerArrayqaaa==', this.myAnswerForfeedback);
                console.log('recurementQuestions==', this.recurementQuestions);
                if (this.myAnswerForfeedback[this.changeQuestionIndex].questionType == '1') {
                    //for radio button submitted answer get from myAnswerForfeedback array
                    this.recurementQuestions[this.changeQuestionIndex].options.option_id = this.myAnswerForfeedback[this.changeQuestionIndex].optionId;
                    this.myOption = this.myAnswerForfeedback[this.changeQuestionIndex].optionId;
                    return;
                }
                if (this.myAnswerForfeedback[this.changeQuestionIndex].questionType == '3') {
                    //for emoji answer get from myAnswerForfeedback array
                    var answer = this.myAnswerForfeedback[this.changeQuestionIndex].answer;
                    var questionID = this.myAnswerForfeedback[this.changeQuestionIndex].questionId;
                    var questionType = this.myAnswerForfeedback[this.changeQuestionIndex].questionType;
                    this.recurementQuestions[this.changeQuestionIndex].question_id = this.myAnswerForfeedback[this.changeQuestionIndex].questionId;
                    this.recurementQuestions[this.changeQuestionIndex].option_type = this.myAnswerForfeedback[this.changeQuestionIndex].questionType;
                    if (answer == 'a1') {
                        var emojiId = 2;
                        this.mySelectedEmoji(emojiId, answer, questionID, questionType);
                    }
                    else if (answer == 's1') {
                        var emojiId = 1;
                        this.mySelectedEmoji(emojiId, answer, questionID, questionType);
                    }
                    else if (answer == 'h1') {
                        var emojiId = 3;
                        this.mySelectedEmoji(emojiId, answer, questionID, questionType);
                    }
                    else if (answer == 'es1') {
                        var emojiId = 4;
                        this.mySelectedEmoji(emojiId, answer, questionID, questionType);
                    }
                    return;
                }
                if (this.myAnswerForfeedback[this.changeQuestionIndex].questionType == '4') {
                    //for range answer get from myAnswerForfeedback array
                    this.recurementQuestions[this.changeQuestionIndex].options = this.myAnswerForfeedback[this.changeQuestionIndex].optionId;
                    this.val = parseInt(this.myAnswerForfeedback[this.changeQuestionIndex].tempRangeVal);
                    // this.myAnswerForfeedback[this.changeQuestionIndex].tempRangeVal=val;
                    console.log('range value==', this.val);
                    this.recurementQuestions[this.changeQuestionIndex].question_id = this.myAnswerForfeedback[this.changeQuestionIndex].questionId;
                    this.recurementQuestions[this.changeQuestionIndex].option_type = this.myAnswerForfeedback[this.changeQuestionIndex].questionType;
                    return;
                }
                if (this.myAnswerForfeedback[this.changeQuestionIndex].questionType == '5') {
                    //for star rating answer get from myAnswerForfeedback array
                    var index = this.myAnswerForfeedback[this.changeQuestionIndex].answer;
                    var questionID = this.myAnswerForfeedback[this.changeQuestionIndex].questionId;
                    var questionType = this.myAnswerForfeedback[this.changeQuestionIndex].questionType;
                    this.fillStarData(index, questionID, questionType);
                    return;
                }
                if (this.myAnswerForfeedback[this.changeQuestionIndex].questionType == '6') {
                    //for commentbox answer get from myAnswerForfeedback array
                    this.recurementQuestions[this.changeQuestionIndex].options = this.myAnswerForfeedback[this.changeQuestionIndex].optionId;
                    this.comment = this.myAnswerForfeedback[this.changeQuestionIndex].answer;
                    console.log('textarea value==', this.val);
                    this.recurementQuestions[this.changeQuestionIndex].question_id = this.myAnswerForfeedback[this.changeQuestionIndex].questionId;
                    this.recurementQuestions[this.changeQuestionIndex].option_type = this.myAnswerForfeedback[this.changeQuestionIndex].questionType;
                    return;
                }
            }
            else {
                console.log('****************************111111111next Question empty****************************');
                this.val = 1; //range val reset
                this.comment = ""; //texbox reset
                this.emptyEmoji(); //emoji reset
                this.ansSelected = 0; //next and submit button disable
            }
        }
        else {
            console.log('this is last question survey submit');
        }
    };
    TestsurveyPage.prototype.NextQuestion = function (dataFromHtmlpage) {
        console.log('Agree clicked', this.changeQuestionIndex + this.recurementQuestions.length);
        if (this.changeQuestionIndex < this.recurementQuestions.length - 1) {
            this.changeQuestionIndex = this.changeQuestionIndex + 1;
            console.log('****************next index***************==', this.changeQuestionIndex);
            if (this.myAnswerForfeedback[this.changeQuestionIndex].submitted == true) {
                console.log('myAnswerArrayqaaa==', this.myAnswerForfeedback);
                console.log('recurementQuestions==', this.recurementQuestions);
                if (this.recurementQuestions[this.changeQuestionIndex].option_type == 1) {
                    //for radio button submitted answer get from myAnswerForfeedback array
                    this.recurementQuestions[this.changeQuestionIndex].question_id = this.myAnswerForfeedback[this.changeQuestionIndex].questionId;
                    this.myOption = this.myAnswerForfeedback[this.changeQuestionIndex].optionId;
                    return;
                }
                //   if(this.recurementQuestions[this.changeQuestionIndex].questionType==1){
                //     //for radio button submitted answer get from myAnswerForfeedback array
                //     this.recurementQuestions[this.changeQuestionIndex].optionList.optionId= this.myAnswerForfeedback[this.changeQuestionIndex].optionId;
                //     this.myOption= this.myAnswerForfeedback[this.changeQuestionIndex].optionId;
                //     return;
                //  }
                if (this.recurementQuestions[this.changeQuestionIndex].option_type == 3) {
                    //for emoji answer get from myAnswerForfeedback array
                    // this.recurementQuestions[this.changeQuestionIndex].optionList=this.myAnswerForfeedback[this.changeQuestionIndex].optionId;
                    var answer = this.myAnswerForfeedback[this.changeQuestionIndex].answer;
                    var questionID = this.myAnswerForfeedback[this.changeQuestionIndex].questionId;
                    var questionType = this.myAnswerForfeedback[this.changeQuestionIndex].questionType;
                    this.recurementQuestions[this.changeQuestionIndex].question_id = this.myAnswerForfeedback[this.changeQuestionIndex].questionId;
                    this.recurementQuestions[this.changeQuestionIndex].option_type = this.myAnswerForfeedback[this.changeQuestionIndex].questionType;
                    console.log('passing emoji type vy next fun==', answer);
                    console.log('passing emoji type vy next fun==', questionID);
                    console.log('passing emoji type vy next fun==', questionType);
                    if (answer == 'a1') {
                        var emojiId = 2;
                        this.mySelectedEmoji(emojiId, answer, questionID, questionType);
                    }
                    else if (answer == 's1') {
                        var emojiId = 1;
                        this.mySelectedEmoji(emojiId, answer, questionID, questionType);
                    }
                    else if (answer == 'h1') {
                        var emojiId = 3;
                        this.mySelectedEmoji(emojiId, answer, questionID, questionType);
                    }
                    else if (answer == 'es1') {
                        var emojiId = 4;
                        this.mySelectedEmoji(emojiId, answer, questionID, questionType);
                    }
                    return;
                }
                // if(this.recurementQuestions[this.changeQuestionIndex].questionType==4){
                //   //for range answer get from myAnswerForfeedback array
                //   this.recurementQuestions[this.changeQuestionIndex].optionList=this.myAnswerForfeedback[this.changeQuestionIndex].optionId;
                //   this.comment=this.myAnswerForfeedback[this.changeQuestionIndex].answer;
                //   console.log('textarea value==', this.val);
                //   this.recurementQuestions[this.changeQuestionIndex].questionID=this.myAnswerForfeedback[this.changeQuestionIndex].questionId;
                //   this.recurementQuestions[this.changeQuestionIndex].questionType=this.myAnswerForfeedback[this.changeQuestionIndex].questionType;
                //   return;
                // }
                if (this.recurementQuestions[this.changeQuestionIndex].option_type == 4) {
                    //for range answer get from myAnswerForfeedback array
                    // this.recurementQuestions[this.changeQuestionIndex].optionList=this.myAnswerForfeedback[this.changeQuestionIndex].optionId;
                    console.log('value is in range**************', this.myAnswerForfeedback[this.changeQuestionIndex].tempRangeVal);
                    this.val = parseInt(this.myAnswerForfeedback[this.changeQuestionIndex].tempRangeVal);
                    this.recurementQuestions[this.changeQuestionIndex].questionID = this.myAnswerForfeedback[this.changeQuestionIndex].questionId;
                    this.recurementQuestions[this.changeQuestionIndex].questionType = this.myAnswerForfeedback[this.changeQuestionIndex].questionType;
                    return;
                }
                if (this.recurementQuestions[this.changeQuestionIndex].option_type == 5) {
                    //for fill star answer get from myAnswerForfeedback array
                    var index = this.myAnswerForfeedback[this.changeQuestionIndex].answer;
                    var questionID = this.myAnswerForfeedback[this.changeQuestionIndex].questionId;
                    var questionType = this.myAnswerForfeedback[this.changeQuestionIndex].questionType;
                    this.fillStarData(index, questionID, questionType);
                    this.recurementQuestions[this.changeQuestionIndex].question_id = this.myAnswerForfeedback[this.changeQuestionIndex].questionId;
                    this.recurementQuestions[this.changeQuestionIndex].option_type = this.myAnswerForfeedback[this.changeQuestionIndex].questionType;
                    return;
                }
                if (this.recurementQuestions[this.changeQuestionIndex].option_type == 6) {
                    //for textarea answer get from myAnswerForfeedback array
                    // this.recurementQuestions[this.changeQuestionIndex].optionList=this.myAnswerForfeedback[this.changeQuestionIndex].optionId;
                    this.comment = this.myAnswerForfeedback[this.changeQuestionIndex].answer;
                    console.log('textarea value==', this.val);
                    this.recurementQuestions[this.changeQuestionIndex].question_id = this.myAnswerForfeedback[this.changeQuestionIndex].questionId;
                    this.recurementQuestions[this.changeQuestionIndex].option_type = this.myAnswerForfeedback[this.changeQuestionIndex].questionType;
                    return;
                }
            }
            else {
                console.log('****************************next Question empty****************************');
                this.val = 0; //range val reset
                this.comment = ""; //texbox reset
                this.emptyEmoji(); //emoji reset
                this.ansSelected = 0; //next and submit button disable
                this.makeEmptyStar('empty');
            }
        }
        else {
            console.log('this is last question survey submit');
        }
    };
    TestsurveyPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            duration: 1500,
            content: 'Please wait ...'
        });
        this.loading.present();
    };
    // submitFeedback(){
    //   const prompt = this.alertCtrl.create({
    //     // title: 'Login',
    //     message: "Are you sure, you want to submit this Feedback?",
    //     buttons: [
    //       {
    //         text: 'No',
    //         handler: () => {
    //           console.log('Disagree clicked');
    //         }
    //       },
    //       {
    //         text: 'Yes',
    //         handler: () => {
    //           console.log('Agree clicked',this.changeQuestionIndex + this.recurementQuestions.length );
    //           this.submitRecurementFeedback();
    //         }
    //       }
    //     ]
    //   });
    //   prompt.present();
    // }
    TestsurveyPage.prototype.submitRecurementFeedback = function () {
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
    TestsurveyPage.prototype.joineefinish = function () {
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
                "answer_arr": _this.myAnswerForfeedback,
            };
            _this.apiServices.joineesurveysubmit(apiKey, _this.login_token)
                .subscribe(function (res) {
                console.log('guest', res);
                if (res.success == 1) {
                    if (_this.recruitcheck == 1) {
                        // this.survey_data=[];
                        _this.recarray['survey_data'] = [];
                        console.log("this.recarray", _this.recarray);
                        // survey_data
                        _this.storage.set('survey_data', _this.recarray);
                    }
                    _this.navCtrl.popToRoot();
                    // this.navCtrl.pop();
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
    TestsurveyPage.prototype.finish = function () {
        var _this = this;
        this.commonLoader();
        console.log('submitted data== ', this.myAnswerForfeedback);
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
                "answer_arr": _this.myAnswerForfeedback,
            };
            _this.apiServices.surveysubmit(apiKey, _this.login_token)
                .subscribe(function (res) {
                console.log('', res);
                _this.loading.dismiss();
                if (res.success == 1) {
                    _this.events.publish('reloadsurveyApi', true);
                    // this.navCtrl.pop();
                    _this.navCtrl.popToRoot();
                    // this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-3));
                    console.log('res', res);
                    _this.apiMessage(res.message);
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
    TestsurveyPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3500
        });
        toast.present();
    };
    TestsurveyPage.prototype.showAlert = function (message) {
        var _this = this;
        var alert = this.alertCtrl.create({
            subTitle: message,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        console.log('Disagree clicked');
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        alert.present();
    };
    TestsurveyPage.prototype.resize = function () {
        this.myInput.nativeElement.style.height = this.myInput.nativeElement.scrollHeight + 'px';
    };
    TestsurveyPage.prototype.commonLoader = function () {
        this.loading = this.loadingCtrl.create({
            enableBackdropDismiss: true,
            spinner: 'ios-small',
            content: 'Loading data...'
        });
        this.loading.present();
    };
    TestsurveyPage.prototype.analyticApi = function () {
        var _this = this;
        this.storage.get('employee_type').then(function (user) {
            console.log('thoughtOftheDayApi value is111==', user);
            var user_Type = user;
            _this.storage.get('deviceId').then(function (data) {
                var deviceId = data;
                var apiKey = {
                    "client_id": _this.apiServices.clientId,
                    "employee_id": _this.employeeId,
                    "device": _this.apiServices.device,
                    "device_id": deviceId,
                    "app_version": _this.apiServices.appVersion,
                    "track_flag": "72",
                    "type": "detail",
                    "user_type": user_Type,
                };
                _this.apiServices.analyticApi(apiKey, _this.login_token).subscribe(function (res) {
                    console.log(res);
                });
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], TestsurveyPage.prototype, "myInput", void 0);
    TestsurveyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-testsurvey',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/testsurvey/testsurvey.html"*/'<!--\n  Generated template for the TestsurveyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{previousepageData?.title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content  class="mandatoryContent">\n  <div *ngIf="recurementQuestions">\n\n    <ion-grid>\n      <ion-row>\n          <ion-col>\n              <p class="surveyNotation">{{changeQuestionIndex+1}}/{{totalFeedbackQuestion}}</p>\n          </ion-col>\n      </ion-row>\n  </ion-grid>\n\n<ion-card >\n  <ion-card-content>\n\n\n    <p class="feedbackQuestion">  {{recurementQuestions[changeQuestionIndex]?.question}}</p>\n   <!-- this view is for radio button only -->\n    <div *ngIf="recurementQuestions[changeQuestionIndex]?.option_type==\'1\'" class="radioTypeQuestions">        \n        <ion-row *ngFor="let options of recurementQuestions[changeQuestionIndex]?.options, let optionIndex=index" \n         (tap)="mySelectedOption(options?.option_id,\n         recurementQuestions[changeQuestionIndex]?.question_id,\n         recurementQuestions[changeQuestionIndex]?.option_type)" [ngClass]="(options?.option_id==myOption)?\'customRadioBTNblue\':\'customRadioBTN\'">\n            <ion-col col-auto class="centerData">\n            {{optionIndex+1}}. \n            </ion-col>\n            <ion-col  class="centerData">\n                {{options?.options}}\n            </ion-col>\n        </ion-row>\n    </div>\n\n\n    <div *ngIf="recurementQuestions[changeQuestionIndex]?.option_type==\'2\'">\n        <ion-item *ngFor="let options of recurementQuestions[changeQuestionIndex]?.options, let optionIndex=index" >\n            <ion-label class="fullOptionShow">{{options?.options}}</ion-label>\n            <ion-checkbox [(ngModel)]="options.answer" (ionChange)="updateCheckboxAns(\n              recurementQuestions[changeQuestionIndex]?.options,\n              recurementQuestions[changeQuestionIndex]?.question_id,\n              recurementQuestions[changeQuestionIndex]?.option_type\n              )"></ion-checkbox>\n          </ion-item>\n    </div>\n\n        <!-- this view is for emoji only -->\n        <div *ngIf="recurementQuestions[changeQuestionIndex]?.option_type==\'3\'" class="radioTypeQuestions">  \n          <ion-row>\n                  <ion-col col-3 class="centerData" >\n                      <img src="{{sadEmoji}}"class="emojiIcons" (tap)="mySelectedEmoji(1,\'s1\',\n                      recurementQuestions[changeQuestionIndex]?.question_id,\n                      recurementQuestions[changeQuestionIndex]?.option_type)"/>\n                  </ion-col>\n                  <ion-col col-3 class="centerData" >\n                      <img src="{{normalEmoji}}"class="emojiIcons" (tap)="mySelectedEmoji(2,\'a1\',\n                      recurementQuestions[changeQuestionIndex]?.question_id,\n                      recurementQuestions[changeQuestionIndex]?.option_type)"/>\n                  </ion-col>\n                  <ion-col col-3 class="centerData" >\n                      <img src="{{happyEmoji}}"class="emojiIcons" (tap)="mySelectedEmoji(3,\'h1\',\n                      recurementQuestions[changeQuestionIndex]?.question_id,\n                      recurementQuestions[changeQuestionIndex]?.option_type)"/>\n                  </ion-col>\n                  <ion-col col-3 class="centerData" >\n                      <img src="{{veryHappyEmoji}}"class="emojiIcons" (tap)="mySelectedEmoji(4,\'es1\',\n                      recurementQuestions[changeQuestionIndex]?.question_id,\n                      recurementQuestions[changeQuestionIndex]?.option_type)"/>\n                  </ion-col>\n          </ion-row>\n          <br>\n          </div>\n\n\n <!-- this view is for range only -->\n <div *ngIf="recurementQuestions[changeQuestionIndex]?.option_type==\'4\'" class="radioTypeQuestions">  \n  <ion-list class="range">\n      <ion-item>\n          <ion-range min="0" max="10" step="1" pin="true" color="danger" snaps="true" [(ngModel)]="val" (ionChange)="selectedRangeAns(val,\n          recurementQuestions[changeQuestionIndex]?.question_id,\n          recurementQuestions[changeQuestionIndex]?.option_type)" >\n             <img range-left src="{{leftSideRangeIcon}}"class="smallEmojiRange"/>\n             <img range-right src="{{rightSideRangeIcon}}"class="smallEmojiRange"/>\n          </ion-range> \n          <div><p>{{myAnswerForfeedback[this.changeQuestionIndex].answer}}</p>\n         \n        </div>\n      </ion-item>\n  </ion-list>\n <div *ngIf="val>=\'1\'" class="valclass"><p>{{val}}</p></div>\n  <br>\n</div>\n\n <!-- for star  -->\n \n  <div *ngIf="recurementQuestions[changeQuestionIndex]?.option_type==\'5\'" class="radioTypeQuestions">        \n      <!-- this is option type {{option_type}} -->\n    <ion-row>\n          <ion-col col-1></ion-col>\n    <ion-col col-2 *ngFor="let options of emptyStar, let optionIndex=index"\n     (click)="fillStarData(optionIndex+1,\n    recurementQuestions[changeQuestionIndex]?.question_id,\n    recurementQuestions[changeQuestionIndex]?.option_type)">\n\n<!-- {{options?.status}} -->\n\n      <ion-icon name="ios-star-outline" class="starDesign" *ngIf="options?.status==false"></ion-icon>\n      <ion-icon name="ios-star" class="fillStarDesign" *ngIf="options?.status==true"></ion-icon>\n    </ion-col>\n\n    <ion-col col-1></ion-col>\n    </ion-row>\n</div>\n\n\n  <!-- this view is for textarea only -->        \n  <div *ngIf="recurementQuestions[changeQuestionIndex]?.option_type==\'6\'" class="radioTypeQuestions">  \n      <textarea placeholder="Write your feedback here.." #myInput id="myInput"   (keyup)="resize()" [(ngModel)]="comment" (ngModelChange)="myTextareaAns(comment,\n      recurementQuestions[changeQuestionIndex]?.question_id,\n      recurementQuestions[changeQuestionIndex]?.option_type)"></textarea>\n</div>\n\n\n\n    <ion-row style="margin-top:25px">\n      <ion-col *ngIf="changeQuestionIndex-1!=-1">\n              <button ion-button class="centerData commonButton1" (click)="previousQuestion(recurementQuestions[changeQuestionIndex])"><ion-icon name="arrow-round-back"></ion-icon></button>\n      </ion-col>\n      <ion-col *ngIf="changeQuestionIndex+1!=totalFeedbackQuestion">\n          <button  [disabled]="myAnswerForfeedback[changeQuestionIndex]?.submitted==false"   ion-button class="centerData commonButton2" tappable (click)="NextQuestion(recurementQuestions[changeQuestionIndex])"><ion-icon name="arrow-round-forward"></ion-icon></button>\n      </ion-col>\n  </ion-row>\n\n  <button  *ngIf="changeQuestionIndex+1==totalFeedbackQuestion"  [disabled]="ansSelected!=1"   ion-button class="centerData btnmy" tappable (click)="submitRecurementFeedback()">Submit</button>\n\n</ion-card-content>\n</ion-card>\n\n  </div>\n\n\n  <!-- <div *ngIf="bgImageViewer">\n        <img src="assets/imgs/No SurveyImage.png"  style="width:100%">\n      </div>  -->\n\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/testsurvey/testsurvey.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */]])
    ], TestsurveyPage);
    return TestsurveyPage;
}());

//# sourceMappingURL=testsurvey.js.map

/***/ }),

/***/ 853:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestsurveyPageModule", function() { return TestsurveyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__testsurvey__ = __webpack_require__(1181);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TestsurveyPageModule = /** @class */ (function () {
    function TestsurveyPageModule() {
    }
    TestsurveyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__testsurvey__["a" /* TestsurveyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__testsurvey__["a" /* TestsurveyPage */]),
            ],
        })
    ], TestsurveyPageModule);
    return TestsurveyPageModule;
}());

//# sourceMappingURL=testsurvey.module.js.map

/***/ })

});
//# sourceMappingURL=50.js.map
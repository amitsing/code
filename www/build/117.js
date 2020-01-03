webpackJsonp([117],{

/***/ 1052:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EvalmadatorysurveyPage; });
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
// import { Component,ElementRef } from '@angular/core';
// import { IonicPage, NavController, NavParams, ToastController, AlertController, Platform, ViewController } from 'ionic-angular';
// import { ApiServiceProvider } from '../../providers/api-service/api-service';
// import { Storage } from '@ionic/storage';
// import { ViewChild } from '@angular/core';
// import { Slides } from 'ionic-angular';





var EvalmadatorysurveyPage = /** @class */ (function () {
    function EvalmadatorysurveyPage(navCtrl, navParams, events, alertCtrl, zone, toastCtrl, storage, loadingCtrl, apiServices) {
        // this.surveyid = this.navParams.get('surveyid');
        // console.log(' this.surveyid== ', this.surveyid);
        // this.storage.get('employeeId').then(data => {
        //   this.employeeId = data;
        //   console.log(' employeeId== ', this.employeeId);
        // });
        // this.storage.get('deviceId').then(data => {
        //   this.deviceId = data;
        // });
        // this.surveydetails();
        // this.emptyEmoji();
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
        this.leftSideRangeIcon = 'assets/img/sad_icon.png';
        this.rightSideRangeIcon = 'assets/img/sad_icon.png';
        this.HeaderClick = 1;
        this.successVal = 0;
        this.ansSelected = 0; //next and submit button disable
        // myAnswerForfeedback=[];
        this.myAnswerForfeedback = [{ "questionId": "", "questionType": "", "optionId": "", "tempRangeVal": "", "checkboxAnswer": [], "tempStar": [], "answer": "", "submitted": false }];
        this.emptyStar = [{ "status": false }, { "status": false }, { "status": false }, { "status": false }, { "status": false }];
        this.previousepageData = this.navParams.get('allData');
        console.log(' previousepageData== ', this.previousepageData);
        this.surveyid = this.navParams.get('surveyid');
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
            _this.getQuestion();
        });
        this.changeQuestionIndex = 0;
        this.emptyEmoji();
        this.makeEmptyStar('empty');
    }
    // surveydetails() {
    //   this.storage.get('employeeId').then(data => {
    //     this.employeeId = data;
    //     console.log(' employeeId== ', this.employeeId);
    //   });
    //   this.storage.get('login_token').then((data) => {
    //     console.log('showOnBoard value is111==', data);
    //     this.login_token = data;
    //   })
    //   this.storage.get('deviceId').then(data => {
    //     this.deviceId = data;
    //     let apiKey = {
    //       "client_id": this.apiServices.clientId,
    //       "employee_id": this.employeeId,
    //       "device": this.apiServices.device,
    //       "device_id": this.deviceId,
    //       "app_version": this.apiServices.appVersion,
    //       "survey_id": this.surveyid
    //     };
    //     this.apiServices.surveydetail(apiKey, this.login_token)
    //       .subscribe((res) => {
    //         console.log('', res);
    //         if (res.success == 1) {
    //           this.allData = res.data;
    //           this.totallength = this.allData.length;
    //           if (this.totallength == 1) {
    //             this.showsubmit = true;
    //           }
    //           for (let i = 0; i < this.allData.length; i++) {
    //             this.radioAnswer[i] = { 'question_id': '', 'answer': '', 'option_type': '' };
    //           }
    //           console.log('this.radioAnswer11111', this.radioAnswer)
    //           if (this.allData.length >= 1) {
    //             this.swipe1();
    //           }
    //         } else {
    //           this.apiMessage(res.message);
    //         }
    //       }, (err) => {
    //         console.log('err== ', err);
    //         this.apiMessage(err);
    //       });
    //   });
    // }
    // apiMessage(message) {
    //   const toast = this.toastCtrl.create({
    //     message: message,
    //     duration: 3500
    //   });
    //   toast.present();
    // }
    // ionViewDidLoad() {
    //   console.log('ionViewDidLoad EvalmadatorysurveyPage');
    // }
    // emptyEmoji() {
    //   this.sadEmoji = 'assets/imgs/sad_icon.png';
    //   this.normalEmoji = 'assets/imgs/normal_icon.png';
    //   this.happyEmoji = 'assets/imgs/happiness_icon.png';
    //   this.veryHappyEmoji = 'assets/imgs/smileyoutline.png';
    // }
    // //emoji 
    // mySelectedEmoji(emojiId, answer, alldata, optiontype, qid, i) {
    //   this.showBtn = false;
    //   this.emojiId = emojiId;
    //   if (emojiId == 1) {
    //     this.imojianswer = 'Very Sad';
    //     this.textEmoji = 'Not Satisfy';
    //     this.sadEmoji = 'assets/imgs/sad1.png';
    //     this.normalEmoji = 'assets/imgs/normal_icon.png';
    //     this.happyEmoji = 'assets/imgs/happiness_icon.png';
    //     this.veryHappyEmoji = 'assets/imgs/smileyoutline.png';
    //   } else if (emojiId == 2) {
    //     this.imojianswer = 'Sad';
    //     this.textEmoji = 'Neutral';
    //     this.sadEmoji = 'assets/imgs/sad_icon.png';
    //     this.normalEmoji = 'assets/imgs/average1_small.png';
    //     this.happyEmoji = 'assets/imgs/happiness_icon.png';
    //     this.veryHappyEmoji = 'assets/imgs/smileyoutline.png';
    //   } else if (emojiId == 3) {
    //     this.imojianswer = 'Happy';
    //     this.textEmoji = 'Satisfactory';
    //     this.sadEmoji = 'assets/imgs/sad_icon.png';
    //     this.normalEmoji = 'assets/imgs/normal_icon.png';
    //     this.happyEmoji = 'assets/imgs/02_smileyGreen.png';
    //     this.veryHappyEmoji = 'assets/imgs/smileyoutline.png';
    //   } else if (emojiId == 4) {
    //     this.imojianswer = 'Very Happy';
    //     this.textEmoji = 'Very Happy'
    //     this.sadEmoji = 'assets/imgs/sad_icon.png';
    //     this.normalEmoji = 'assets/imgs/normal_icon.png';
    //     this.happyEmoji = 'assets/imgs/happiness_icon.png';
    //     this.veryHappyEmoji = 'assets/imgs/smileyfilled.png';
    //   }
    //   this.radioAnswer[i] = {
    //     "question_id": alldata.question_id, "answer": this.imojianswer,
    //     "option_type": alldata.option_type
    //   }
    //   console.log('emoji data', this.radioAnswer);
    //   this.myselcetedOption = true;
    // }
    // myRangeTypeAnswer(rangeVal, alldata, optiontype, qid, i) {
    //   if (rangeVal >= 1 && rangeVal <= 2) {
    //     this.rightSideRangeIcon = 'assets/imgs/sad_icon.png';
    //     this.newRangeVal = 1;
    //   }
    //   else if (rangeVal >= 3 && rangeVal <= 4) {
    //     this.rightSideRangeIcon = 'assets/imgs/normal_icon.png';
    //     this.newRangeVal = 2;
    //   }
    //   else if (rangeVal >= 5 && rangeVal <= 6) {
    //     this.rightSideRangeIcon = 'assets/imgs/happiness_icon.png';
    //     this.newRangeVal = 3;
    //   }
    //   else if (rangeVal >= 7 && rangeVal <= 8) {
    //     this.rightSideRangeIcon = 'assets/imgs/smileyoutline.png';
    //     this.newRangeVal = 4;
    //   }
    //   else if (rangeVal >= 9 && rangeVal <= 10) {
    //     this.rightSideRangeIcon = 'assets/imgs/smileyfilled.png';
    //     this.newRangeVal = 5;
    //   }
    //   this.radioAnswer[i] = {
    //     "question_id": qid, "answer": this.newRangeVal,
    //     "option_type": optiontype
    //   }
    //   console.log('range data', this.radioAnswer);
    //   if (rangeVal > 0) {
    //     this.showBtn = false;
    //     this.myselcetedOption = true;
    //   } else {
    //     this.showBtn = true;
    //     this.myselcetedOption = false;
    //   }
    // }
    // changeBgColor(index, alldata, mainindex) {
    //   this.showBtn = false;
    //   this.visibleFillStar = index;
    //   this.starArray = [
    //     { visibleOutlineStar: true },
    //     { visibleOutlineStar: true },
    //     { visibleOutlineStar: true },
    //     { visibleOutlineStar: true },
    //     { visibleOutlineStar: true },
    //   ];
    //   for (let i = 0; i <= index; i++) {
    //     this.starArray[i].visibleOutlineStar = false;
    //   }
    //   console.log('*****start rating*******alldata==', alldata);
    //   this.radioAnswer[mainindex] = {
    //     "question_id": alldata.question_id, "answer": index + 1,
    //     "option_type": alldata.option_type
    //   }
    //   console.log('send star data', this.radioAnswer);
    //   this.myselcetedOption = true;
    // }
    // slideChanged() {
    //   this.currentIndex = this.slides.getActiveIndex();
    //   console.log('Current index is', this.currentIndex);
    //   this.showindex = this.currentIndex + 1;
    //   if (this.slides.isEnd() == true) {
    //     this.showsubmit = true;
    //   }
    // }
    // swipe1() {
    //   this.slides.lockSwipeToNext(true);
    //   this.currentIndex = this.slides.getActiveIndex();
    //   console.log('Current index is', this.currentIndex);
    // }
    // nextslide(i) {
    //   if (this.radioAnswer[i].answer == '') {
    //     let msg = "please select any option";
    //     this.apiMessage(msg)
    //     return false;
    //   }
    //   this.slides.lockSwipeToNext(false);
    //   this.currentIndex = this.slides.getActiveIndex();
    //   console.log('Current index is123', this.currentIndex);
    //   this.showindex = this.currentIndex + 1;
    //   this.slides.slideTo(this.showindex);
    //   console.log("this.showindex", this.showindex);
    //   if (this.slides.isEnd() == true) {
    //     this.showsubmit = true;
    //   }
    //   this.slides.lockSwipeToNext(true);
    //   this.slides.lockSwipeToPrev(true);
    // }
    // backslide() {
    //   this.showsubmit = false;
    //   this.slides.lockSwipeToPrev(false);
    //   this.currentIndex = this.slides.getActiveIndex();
    //   console.log('Current index is123', this.currentIndex);
    //   this.showindex = this.currentIndex - 1;
    //   this.slides.slideTo(this.showindex);
    //   console.log("this.showindex", this.showindex);
    //   this.slides.lockSwipeToNext(true);
    //   this.slides.lockSwipeToPrev(true);
    // }
    // submit(i) {
    //   if (this.radioAnswer[i].answer == '') {
    //     let msg = "please select any option";
    //     this.apiMessage(msg)
    //   }
    //   else {
    //     this.presentConfirm()
    //   }
    // }
    // presentConfirm() {
    //   let alert = this.alertCtrl.create({
    //     message: 'Are you sure you want to submit survey?',
    //     buttons: [
    //       {
    //         text: 'Cancel',
    //         role: 'cancel',
    //         handler: () => {
    //           console.log('Cancel clicked');
    //         }
    //       },
    //       {
    //         text: 'Ok',
    //         handler: () => {
    //           this.finish();
    //           console.log('Buy clicked');
    //         }
    //       }
    //     ]
    //   });
    //   alert.present();
    // }
    // finish() {
    //   this.storage.get('employeeId').then(data => {
    //     this.employeeId = data;
    //     console.log(' employeeId== ', this.employeeId);
    //   });
    //   this.storage.get('login_token').then((data) => {
    //     console.log('showOnBoard value is111==', data);
    //     this.login_token = data;
    //   })
    //   this.storage.get('deviceId').then(data => {
    //     this.deviceId = data;
    //     let apiKey = {
    //       "client_id": this.apiServices.clientId,
    //       "employee_id": this.employeeId,
    //       "device": this.apiServices.device,
    //       "device_id": this.deviceId,
    //       "app_version": this.apiServices.appVersion,
    //       "survey_id": this.surveyid,
    //       "answer_arr": this.radioAnswer,
    //     };
    //     this.apiServices.surveysubmit(apiKey, this.login_token)
    //       .subscribe((res) => {
    //         console.log('', res);
    //         if (res.success == 1) {
    //           this.viewCtrl.dismiss();
    //           console.log('res', res)
    //         } else {
    //           this.apiMessage(res.message);
    //         }
    //       }, (err) => {
    //         console.log('err== ', err);
    //         this.apiMessage(err);
    //       });
    //   });
    // }
    // myanswer(optionId, alldata, optiontype, qid, i, j) {
    //   this.showBtn = false;
    //   if (alldata.option_type == 1) {
    //     console.log('optionId== ', optionId);
    //     this.selectedOption = optionId;
    //     this.radioAnswer[i] = {
    //       "question_id": alldata.question_id, "answer": optionId,
    //       "option_type": alldata.option_type,
    //     }
    //     this.myselcetedOption = true;
    //   }
    //   if (alldata.option_type == 2) {
    //     this.ckobj = { optionId }
    //     let index = this.checkarr.findIndex(item => item.optionId == optionId);
    //     console.log('****index==', index);
    //     if (index >= 0) {
    //       this.checkarr.splice(index, 1);
    //     } else {
    //       this.checkarr.push(this.ckobj);
    //     }
    //     this.radioAnswer[i] = {
    //       "question_id": qid, "answer": this.checkarr,
    //       "option_type": optiontype
    //     }
    //     console.log('this.radioAnswer ', this.radioAnswer);
    //   }
    // }
    // textsubmit(textAnswer1, i, textdata, opttype) {
    //   this.radioAnswer[i] = {
    //     "question_id": this.allData[i].question_id, "answer": textAnswer1,
    //     "option_type": opttype
    //   }
    //   console.log('final submit array== ', this.radioAnswer);
    // }
    EvalmadatorysurveyPage.prototype.makeEmptyStar = function (fillStarCount) {
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
    EvalmadatorysurveyPage.prototype.emptyEmoji = function () {
        this.sadEmoji = 'assets/img/sad_icon.png';
        this.normalEmoji = 'assets/img/normal_icon.png';
        this.happyEmoji = 'assets/img/happiness_icon.png';
        this.veryHappyEmoji = 'assets/img/smileyoutline.png';
    };
    EvalmadatorysurveyPage.prototype.getQuestion = function () {
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
    // apiMessage(message) {
    //   const toast = this.toastCtrl.create({
    //     message: message,
    //     duration: 3500
    //   });
    //   toast.present();
    // }
    EvalmadatorysurveyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TestsurveyPage');
    };
    EvalmadatorysurveyPage.prototype.updateCheckboxAns = function (options, questionID, questionType) {
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
    EvalmadatorysurveyPage.prototype.mySelectedOption = function (optId, questionID, questionType) {
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
    EvalmadatorysurveyPage.prototype.fillStarData = function (index, questionID, questionType) {
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
    EvalmadatorysurveyPage.prototype.mySelectedEmoji = function (emojiId, answer, questionID, questionType) {
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
    EvalmadatorysurveyPage.prototype.myTextareaAns = function (answer, questionID, questionType) {
        console.log('answer', answer);
        console.log('questionID', questionID);
        console.log('questionType', questionType);
        this.myAnswerForfeedback[this.changeQuestionIndex].answer = answer;
        this.myAnswerForfeedback[this.changeQuestionIndex].questionId = questionID;
        this.myAnswerForfeedback[this.changeQuestionIndex].questionType = questionType;
        this.myAnswerForfeedback[this.changeQuestionIndex].submitted = true;
        console.log('push value==', this.myAnswerForfeedback);
        this.ansSelected = 1; //next and submit button disable
    };
    EvalmadatorysurveyPage.prototype.selectedRangeAns = function (val, questionID, questionType) {
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
    EvalmadatorysurveyPage.prototype.previousQuestion = function (dataFromHtmlpage) {
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
    EvalmadatorysurveyPage.prototype.NextQuestion = function (dataFromHtmlpage) {
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
    EvalmadatorysurveyPage.prototype.showLoading = function () {
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
    EvalmadatorysurveyPage.prototype.submitRecurementFeedback = function () {
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
    EvalmadatorysurveyPage.prototype.joineefinish = function () {
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
                console.log('', res);
                if (res.success == 1) {
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
    EvalmadatorysurveyPage.prototype.finish = function () {
        var _this = this;
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
                if (res.success == 1) {
                    _this.events.publish('reloadsurveyApi', true);
                    _this.navCtrl.pop();
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
    EvalmadatorysurveyPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3500
        });
        toast.present();
    };
    EvalmadatorysurveyPage.prototype.showAlert = function (message) {
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
    EvalmadatorysurveyPage.prototype.resize = function () {
        this.myInput.nativeElement.style.height = this.myInput.nativeElement.scrollHeight + 'px';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], EvalmadatorysurveyPage.prototype, "myInput", void 0);
    EvalmadatorysurveyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-evalmadatorysurvey',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/evalmadatorysurvey/evalmadatorysurvey.html"*/'\n\n<!-- <ion-content padding> -->\n    <!-- <ion-slides class="slidecenter" (ionSlideDidChange)="slideChanged()" #Slides>\n        <ion-slide *ngFor="let data of allData let i = index;">\n\n<ion-card>\n \n   <ion-card-content class="mandatoryContent">\n     \n    <ion-row>\n      <ion-col col-2>\n        <img style="height: 30px;width:30px;" src="../../assets/imgs/surveyicon.png"class="iconcss" />\n      </ion-col>\n      <ion-col col-10 class="bbottom">\n          <p class="question">{{data?.question}} </p>\n        </ion-col>\n    </ion-row>\n   \n   <div *ngIf="data?.option_type==1">\n      <ion-row *ngFor="let myOption of data?.options let k=index;" (tap)="myanswer(myOption?.option_id,data,data?.option_type,data?.question_id,i,k)" [ngClass]="{\'greenBg\': selectedOption==myOption.option_id, \'lightGrayBg\':selectedOption!=myOption.option_id }" >\n        <ion-col col-12>{{myOption?.options}}</ion-col>\n      </ion-row>\n    </div>\n\n  <div *ngIf="data?.option_type==2">\n      <ion-row *ngFor="let myOption of data?.options let j=index;"   >\n        <ion-col col-12>\n          <ion-list>\n             \n            <ion-item class="checkboxLabel">\n                <ion-label>{{myOption?.options}}</ion-label>\n                <ion-checkbox color="secondary" (ionChange)="myanswer(myOption?.option_id,data,data?.option_type,data?.question_id,i,j)"></ion-checkbox>\n              </ion-item>\n            </ion-list>\n        </ion-col>\n      </ion-row>\n    \n    </div>\n\n\n<div *ngIf="data?.option_type==3">\n    <ion-row   >\n      <ion-col col-12>\n          <ion-row>\n              <ion-col col-3 class="centerData" >\n                  <img src="{{sadEmoji}}"class="emojiIcons" (tap)="mySelectedEmoji(1,\'s1\',data,data?.option_type,data?.question_id,i)"/>\n              </ion-col>\n              <ion-col col-3 class="centerData" >\n                  <img src="{{normalEmoji}}"class="emojiIcons" (tap)="mySelectedEmoji(2,\'a1\',data,data?.option_type,data?.question_id,i)"/>\n              </ion-col>\n              <ion-col col-3 class="centerData" >\n                  <img src="{{happyEmoji}}"class="emojiIcons" (tap)="mySelectedEmoji(3,\'h1\',data,data?.option_type,data?.question_id,i)"/>\n              </ion-col>\n              <ion-col col-3 class="centerData" >\n                  <img src="{{veryHappyEmoji}}"class="emojiIcons" (tap)="mySelectedEmoji(4,\'es1\',data,data?.option_type,data?.question_id,i)"/>\n              </ion-col>\n      </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row >\n     <p  [ngClass]="{\'center1\':emojiId==1, \'center2\':emojiId==2, \'center3\':emojiId==3, \'center4\':emojiId==4 }" >{{textEmoji}}</p> \n    </ion-row>\n  </div>\n\n\n<div *ngIf="data?.option_type==4">\n    <ion-row>\n      <ion-col col-12>\n          <ion-list>\n              <ion-item style="background-color:white">                     \n                <ion-range [(ngModel)]="rangeVal" min="0" max="10" step="1" \n                color="secondary" pin="true" snaps="true" tick="true" (ngModelChange)="myRangeTypeAnswer(rangeVal,data,data?.option_type,data?.question_id,i)">\n                <img range-left src="{{leftSideRangeIcon}}"class="smallEmojiRange"/>\n                <img range-right src="{{rightSideRangeIcon}}"class="smallEmojiRange"/>\n                </ion-range>\n               \n              </ion-item>\n              <ion-row style="width:100%">\n                <ion-col col-3 style="padding-top: 0px;margin-top: 0px;"> <p style="font-size:12px">{{data?.rangeMin}}</p></ion-col>\n                 <ion-col col-6></ion-col>\n                 <ion-col col-3 style="padding-top: 0px;margin-top: 0px;left: 14px;">\n                    <p  style="font-size:12px">{{data?.rangeMax}}</p>\n                 </ion-col>\n                 \n               </ion-row>\n          </ion-list>\n      </ion-col>\n    </ion-row>\n</div>\n\n\n\n<div *ngIf="data?.option_type==5">\n    <ion-row align-items-center>\n      <ion-col col-1>\n      </ion-col>\n\n      <ion-col col-2 *ngFor="let star_data of starArray; let x=index" (click)="changeBgColor(x,data,i)">\n        \n        <ion-icon name="ios-star-outline" class="starDesign"*ngIf="star_data?.visibleOutlineStar==true" ></ion-icon>\n        <ion-icon name="ios-star" class="fillStarDesign" *ngIf="star_data?.visibleOutlineStar==false"></ion-icon>\n      </ion-col>\n\n      <ion-col col-1>\n      </ion-col>\n    </ion-row>\n    <ion-row >\n        <ion-col col-12>\n     \n        </ion-col>\n    </ion-row>\n  </div>\n\n\n     <div *ngIf="data?.option_type==6">\n      <ion-row>\n        <ion-col col-12>\n          <p>youn can write your suggestion or point of view.</p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12>\n          <ion-textarea rows="4" placeholder="Enter a description" style="    border: 1px solid #ccc;\nborder-radius: 3px;" [(ngModel)]="radioAnswer[i].answer" (ngModelChange)="textsubmit(radioAnswer[i].answer,i,data,data?.option_type)"\n            name="textAnswer1"></ion-textarea>\n        </ion-col>\n      </ion-row>\n\n    </div>\n\n             <div class="roundcircle"><p class="paracolor">{{i+1}}</p></div>\n        \n               <ion-row>\n             \n                <ion-col col-6 class="alignleft"><div *ngIf="currentIndex!=0 && totallength>1">\n                  <button ion-button  round  class="btn2" (click)="backslide()">Back</button>\n                </div> </ion-col>\n                <ion-col col-6 class="alignright"><div *ngIf="showsubmit==false && totallength>1">\n                  <button ion-button  round  class="btn3" (click)="nextslide(i)">Next</button>\n                </div> </ion-col>\n              \n              </ion-row>\n\n              <div class="centr">\n                <button ion-button  round  class="btn1" *ngIf = "showsubmit==true" (click)="submit(i)">Submit</button>\n              </div> \n              </ion-card-content>\n              </ion-card>\n        </ion-slide>\n       \n      </ion-slides> -->\n<!-- </ion-content> -->\n\n\n\n\n<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>{{previousepageData?.title}}</ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content >\n  <div *ngIf="successVal==\'1\'">\n\n    <ion-grid>\n      <ion-row>\n          <ion-col>\n              <p class="surveyNotation">{{changeQuestionIndex+1}}/{{totalFeedbackQuestion}}</p>\n          </ion-col>\n      </ion-row>\n  </ion-grid>\n\n<ion-card >\n  <ion-card-content>\n    <p class="feedbackQuestion">  {{recurementQuestions[changeQuestionIndex]?.question}}</p>\n   <!-- this view is for radio button only -->\n    <div *ngIf="recurementQuestions[changeQuestionIndex]?.option_type==\'1\'" class="radioTypeQuestions">        \n        <ion-row *ngFor="let options of recurementQuestions[changeQuestionIndex]?.options, let optionIndex=index" \n         (tap)="mySelectedOption(options?.option_id,\n         recurementQuestions[changeQuestionIndex]?.question_id,\n         recurementQuestions[changeQuestionIndex]?.option_type)" [ngClass]="(options?.option_id==myOption)?\'customRadioBTNblue\':\'customRadioBTN\'">\n            <ion-col col-auto class="centerData">\n            {{optionIndex+1}}. \n            </ion-col>\n            <ion-col  class="centerData">\n                {{options?.options}}\n            </ion-col>\n        </ion-row>\n    </div>\n\n\n    <div *ngIf="recurementQuestions[changeQuestionIndex]?.option_type==\'2\'">\n        <ion-item *ngFor="let options of recurementQuestions[changeQuestionIndex]?.options, let optionIndex=index" >\n            <ion-label class="fullOptionShow">{{options?.options}}</ion-label>\n            <ion-checkbox [(ngModel)]="options.answer" (ionChange)="updateCheckboxAns(\n              recurementQuestions[changeQuestionIndex]?.options,\n              recurementQuestions[changeQuestionIndex]?.question_id,\n              recurementQuestions[changeQuestionIndex]?.option_type\n              )"></ion-checkbox>\n          </ion-item>\n    </div>\n\n        <!-- this view is for emoji only -->\n        <div *ngIf="recurementQuestions[changeQuestionIndex]?.option_type==\'3\'" class="radioTypeQuestions">  \n          <ion-row>\n                  <ion-col col-3 class="centerData" >\n                      <img src="{{sadEmoji}}"class="emojiIcons" (tap)="mySelectedEmoji(1,\'s1\',\n                      recurementQuestions[changeQuestionIndex]?.question_id,\n                      recurementQuestions[changeQuestionIndex]?.option_type)"/>\n                  </ion-col>\n                  <ion-col col-3 class="centerData" >\n                      <img src="{{normalEmoji}}"class="emojiIcons" (tap)="mySelectedEmoji(2,\'a1\',\n                      recurementQuestions[changeQuestionIndex]?.question_id,\n                      recurementQuestions[changeQuestionIndex]?.option_type)"/>\n                  </ion-col>\n                  <ion-col col-3 class="centerData" >\n                      <img src="{{happyEmoji}}"class="emojiIcons" (tap)="mySelectedEmoji(3,\'h1\',\n                      recurementQuestions[changeQuestionIndex]?.question_id,\n                      recurementQuestions[changeQuestionIndex]?.option_type)"/>\n                  </ion-col>\n                  <ion-col col-3 class="centerData" >\n                      <img src="{{veryHappyEmoji}}"class="emojiIcons" (tap)="mySelectedEmoji(4,\'es1\',\n                      recurementQuestions[changeQuestionIndex]?.question_id,\n                      recurementQuestions[changeQuestionIndex]?.option_type)"/>\n                  </ion-col>\n          </ion-row>\n          <br>\n          </div>\n\n\n <!-- this view is for range only -->\n <div *ngIf="recurementQuestions[changeQuestionIndex]?.option_type==\'4\'" class="radioTypeQuestions">  \n  <ion-list class="range">\n      <ion-item>\n          <ion-range min="0" max="10" step="1" pin="true" color="danger" snaps="true" [(ngModel)]="val" (ionChange)="selectedRangeAns(val,\n          recurementQuestions[changeQuestionIndex]?.question_id,\n          recurementQuestions[changeQuestionIndex]?.option_type)" >\n             <img range-left src="{{leftSideRangeIcon}}"class="smallEmojiRange"/>\n             <img range-right src="{{rightSideRangeIcon}}"class="smallEmojiRange"/>\n          </ion-range> \n          <div><p>{{myAnswerForfeedback[this.changeQuestionIndex].answer}}</p>\n         \n        </div>\n      </ion-item>\n  </ion-list>\n <div *ngIf="val>=\'1\'" class="valclass"><p>{{val}}</p></div>\n  <br>\n</div>\n\n <!-- for star  -->\n \n  <div *ngIf="recurementQuestions[changeQuestionIndex]?.option_type==\'5\'" class="radioTypeQuestions">        \n      <!-- this is option type {{option_type}} -->\n    <ion-row>\n          <ion-col col-1></ion-col>\n    <ion-col col-2 *ngFor="let options of emptyStar, let optionIndex=index"\n     (click)="fillStarData(optionIndex+1,\n    recurementQuestions[changeQuestionIndex]?.question_id,\n    recurementQuestions[changeQuestionIndex]?.option_type)">\n\n<!-- {{options?.status}} -->\n\n      <ion-icon name="ios-star-outline" class="starDesign" *ngIf="options?.status==false"></ion-icon>\n      <ion-icon name="ios-star" class="fillStarDesign" *ngIf="options?.status==true"></ion-icon>\n    </ion-col>\n\n    <ion-col col-1></ion-col>\n    </ion-row>\n</div>\n\n\n  <!-- this view is for textarea only -->        \n  <div *ngIf="recurementQuestions[changeQuestionIndex]?.option_type==\'6\'" class="radioTypeQuestions">  \n      <textarea placeholder="Write your feedback here.." #myInput id="myInput"   (keyup)="resize()" [(ngModel)]="comment" (ngModelChange)="myTextareaAns(comment,\n      recurementQuestions[changeQuestionIndex]?.question_id,\n      recurementQuestions[changeQuestionIndex]?.option_type)"></textarea>\n</div>\n\n\n\n    <ion-row style="margin-top:25px">\n      <ion-col *ngIf="changeQuestionIndex-1!=-1">\n              <button ion-button class="centerData commonButton1" (click)="previousQuestion(recurementQuestions[changeQuestionIndex])"><ion-icon name="arrow-round-back"></ion-icon></button>\n      </ion-col>\n      <ion-col *ngIf="changeQuestionIndex+1!=totalFeedbackQuestion">\n          <button  [disabled]="myAnswerForfeedback[changeQuestionIndex]?.submitted==false"   ion-button class="centerData commonButton2" tappable (click)="NextQuestion(recurementQuestions[changeQuestionIndex])"><ion-icon name="arrow-round-forward"></ion-icon></button>\n      </ion-col>\n  </ion-row>\n\n  <button  *ngIf="changeQuestionIndex+1==totalFeedbackQuestion"  [disabled]="ansSelected!=1"   ion-button class="centerData btnmy" tappable (click)="submitRecurementFeedback()">Submit</button>\n\n</ion-card-content>\n</ion-card>\n\n  </div>\n</ion-content>'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/evalmadatorysurvey/evalmadatorysurvey.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */]])
    ], EvalmadatorysurveyPage);
    return EvalmadatorysurveyPage;
}());

//# sourceMappingURL=evalmadatorysurvey.js.map

/***/ }),

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvalmadatorysurveyPageModule", function() { return EvalmadatorysurveyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__evalmadatorysurvey__ = __webpack_require__(1052);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EvalmadatorysurveyPageModule = /** @class */ (function () {
    function EvalmadatorysurveyPageModule() {
    }
    EvalmadatorysurveyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__evalmadatorysurvey__["a" /* EvalmadatorysurveyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__evalmadatorysurvey__["a" /* EvalmadatorysurveyPage */]),
            ],
        })
    ], EvalmadatorysurveyPageModule);
    return EvalmadatorysurveyPageModule;
}());

//# sourceMappingURL=evalmadatorysurvey.module.js.map

/***/ })

});
//# sourceMappingURL=117.js.map
webpackJsonp([34],{

/***/ 1095:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChinaDeclarationFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(164);
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
 * Generated class for the ChinaDeclarationFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChinaDeclarationFormPage = /** @class */ (function () {
    function ChinaDeclarationFormPage(alertCtrl, platform, menu, loadingCtrl, toastCtrl, storage, apiServices, navCtrl, navParams, iab) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.menu = menu;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.apiServices = apiServices;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.iab = iab;
        this.spSyntax = [];
        this.newArray = [];
        this.finalArray = [];
        this.finalString = '';
        this.inputs = [];
        this.newarr = [];
        this.selectedIndex = 0;
        this.showPage = false;
        this.tempArraySendToServer = [];
        this.i = 1;
        this.j = 1;
        this.ApiResponse();
        this.data = this.navParams.get('data');
        this.title = this.data.form_name;
        this.form_status = this.data.form_status;
        this.storage.get('login_token').then(function (data) { _this.login_token = data; });
        this.storage.get('employeeId').then(function (data) { _this.employeeId = data; });
        this.declarationdata();
    }
    ChinaDeclarationFormPage.prototype.ApiResponse = function () {
        this.serverRes = {
            'language': [{ 'name': 'indian', 'id': 1 }, { 'name': 'china', 'id': 2 }],
            'text': [
                {
                    'id': 1,
                    'stringFromServer': 'I Mr./Ms./Mrs. ** undertake that my one and only nationality is ** . <br><br> <b>Did you have multiple nationalities?</b> ** <br><br> <b>Did you hold the permanent residency in other countries?</b> ** <br><br><br> I declare that all above information given is correct and true. I will be subject to appropriate legal action for making any false statement. <br><br><br> Signed : ** <br> Date: **'
                },
                {
                    'id': 2,
                    'stringFromServer': '本人 ** 在此保证，本人的国籍为 ** . <br><br> <b>是否拥有双/多重国籍?</b> ** <br><br> <b>是否拥有他国永久居留权？</b> ** <br><br><br> 本人在此声明以上提供的所有信息均属真实正确，如有虚假，本人愿意承担一切法律后果. <br><br><br> 签名 ** <br> 日期 **'
                }
            ],
            'client_logo': '',
            'address': '<b>Evalueserve Bussiness Consulting(Shanghai)Co.Ltd,</b>6<sup>th</sup> floor',
            'tel': '+8123456789',
            'fax': '+123456789',
            'email': 'test@gmail.com',
            'title': 'Declaration',
            'subtitle': 'statement',
            // 'stringFromServer':'I hereby guarantee that my nationality is ** <br> I Mr./Ms./Mrs  ** undertake that my one and only nationality is  **  <br><br> Do you have dual / multiple nationality? <br> Did you have multiple nationalities? <br> <b>*</b>Yes Yes Other nationalities are Other Nationalities ** <br> <b>*</b> No ** <br><br><br> Do you have permanent residency in another country? <br> Did you hold the permanent residency in other countries? <br><br><br> <b>*</b> Yes Other countries Permanent residency in ** <br> <b>*</b> No <br><br><br> I declare that all above information given is correct and true. I will be subject to appropriate legal action for making any false statement. <br><br>',
            'showTextArea': true,
        };
    };
    ChinaDeclarationFormPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChinaDeclarationFormPage');
        // var stringFromServer="<h1> A quick and</h1> ** simplified <br> answer is that Lorem Ipsum <b> refers to ** text that <h1> the DTP (Desktop Publishing) </h1> industry use ** as replacement text when the real text is not available. For example, ** when designing a brochure or book, a designer will insert Lorem ipsum text if ** the real text is not available.";
        // var stringFromServer="I Mr./Ms./Mrs. ** undertake that my one and only nationality is ** . <br><br> <b>Did you have multiple nationalities?</b> ** <br><br> <b>Did you hold the permanent residency in other countries?</b> ** <br><br><br> I declare that all above information given is correct and true. I will be subject to appropriate legal action for making any false statement. <br><br><br> Signed : ** <br> Date: **";
        // var str_To_Array=stringFromServer.split("**");
        // console.log('string to array convert==', str_To_Array);
        //find ** from array
        // for(var i=0; i<str_To_Array.length; i++){
        //     this.newArray.push({
        //       'str':str_To_Array[i],
        //       'value':''
        //     });
        // }
        // console.log('newArray==', this.newArray);
    };
    ChinaDeclarationFormPage.prototype.seeString = function () {
        this.tempArraySendToServer = [];
        console.log('modify string==', this.newArray);
        for (var i = 0; i < this.newArray.length; i++) {
            this.finalArray.push(this.newArray[i].str);
            if (this.newArray[i].value != '' && this.newArray[i].value != null) {
                this.finalArray.push(this.newArray[i].value);
                this.tempArraySendToServer.push(this.newArray[i].value);
                console.log('tempArraySendToServer==**************', this.tempArraySendToServer);
            }
        }
        this.finalString = this.finalArray.join(" ");
        console.log('newArray==', this.finalString);
        console.log('tempArraySendToServer==', this.tempArraySendToServer);
        this.submit();
    };
    ChinaDeclarationFormPage.prototype.declarationdata = function () {
        var _this = this;
        this.commonLoader();
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            var apiKey = {
                "client_id": _this.apiServices.clientId,
                "employee_id": _this.employeeId,
                "device": _this.apiServices.device,
                "device_id": _this.deviceId,
                "app_version": _this.apiServices.appVersion,
                "form_id": _this.data.form_id
            };
            _this.apiServices.nationality_declaration(apiKey, _this.login_token).subscribe(function (res) {
                console.log('tnc res==', res);
                _this.loading.dismiss();
                _this.alldata = res.data;
                _this.language = res.language;
                _this.fillstatus = res.fill_status;
                _this.tempArraySendToServer = res.nationalityData.allValueOfInputField;
                if (res.success == 1) {
                    _this.nationalityData = res.nationalityData;
                    if (res.nationalityData != '') {
                        _this.nationalities = res.nationalityData.is_multiple_nationalities;
                        _this.anotherresidency = res.nationalityData.is_permanent_residency;
                        _this.nDetails = res.nationalityData.other_nationlities;
                        _this.fDetails = res.nationalityData.permanent_residency;
                        _this.auto_id = res.nationalityData.auto_id;
                    }
                    if (_this.language.length > 1) {
                        _this.showLangPopUp = true;
                        _this.radioChecked(_this.language[0]);
                    }
                    else {
                        _this.showLangPopUp = false;
                    }
                    _this.finalselect = _this.language[0];
                    console.log('newArray==', _this.newArray);
                    // console.log('new***== ', this.allData);
                    _this.showPage = true;
                }
                else {
                    _this.navCtrl.pop();
                    _this.apiMessage(res.message);
                }
            }, function (err) {
                _this.loading.dismiss();
                console.log('err== ', err);
                _this.apiMessage(err);
            });
        });
    };
    //Common Loader:
    ChinaDeclarationFormPage.prototype.commonLoader = function () {
        this.loading = this.loadingCtrl.create({
            enableBackdropDismiss: true,
            spinner: 'ios-small',
            content: 'Loading data...'
        });
        this.loading.present();
    };
    ChinaDeclarationFormPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 4000
        });
        toast.present();
    };
    ChinaDeclarationFormPage.prototype.radioChecked = function (val) {
        console.log("val", val);
        console.log("val", this.alldata);
        console.log("val", this.alldata.length);
        this.newArray = [];
        // this.tempArraySendToServer=[];
        for (var i = 0; i < this.alldata.length; i++) {
            if (this.alldata[i].language == val) {
                // this.newarr=this.alldata[i];
                this.selectedIndex = i;
                console.log("selectedIndex==", i);
            }
            console.log("loop", i);
        }
        var stringFromServer = this.alldata[this.selectedIndex].content;
        // var stringFromServer='I Mr./Ms./Mrs. ** undertake that my one and only nationality is ** . <br><br> <b>Did you have multiple nationalities?</b> ** <br><br> <b>Did you hold the permanent residency in other countries?</b> ** <br><br><br> I declare that all above information given is correct and true. I will be subject to appropriate legal action for making any false statement. <br><br><br> Signed : ** <br> Date: **';
        console.log('string from server==', stringFromServer);
        var str_To_Array = stringFromServer.split("**");
        console.log('string to array convert==', str_To_Array);
        // find ** from array
        for (var i = 0; i < str_To_Array.length; i++) {
            if (this.tempArraySendToServer.length == 0) {
                this.newArray.push({
                    'str': str_To_Array[i],
                    'value': ''
                });
            }
            else {
                this.newArray.push({
                    'str': str_To_Array[i],
                    'value': this.tempArraySendToServer[i]
                });
            }
        }
        console.log('newArray==', this.newArray);
    };
    ChinaDeclarationFormPage.prototype.hideLangPopUp = function (val) {
        if (val == 'show') {
            this.showLangPopUp = true;
        }
        else {
            this.showLangPopUp = false;
        }
    };
    ChinaDeclarationFormPage.prototype.update1 = function () {
        this.showLangPopUp = true;
    };
    ChinaDeclarationFormPage.prototype.update = function () {
        if (this.nationalities == 'nationalities_yes') {
            if (this.nDetails == '' || this.nDetails == undefined) {
                this.i = 2;
                this.j = 1;
                this.msg = 'Please enter empty field.';
                this.apiMessage(this.msg);
                return false;
            }
        }
        if (this.finalselect == 'finalselect_yes') {
            if (this.fDetails == '' || this.fDetails == undefined) {
                this.i = 1;
                this.j = 3;
                this.msg = 'Please enter empty field.';
                this.apiMessage(this.msg);
                return false;
            }
        }
        //  this.gotosubmit();
    };
    ChinaDeclarationFormPage.prototype.change = function (e, value, index) {
        console.log("value", value);
        if (index == 1) {
            if (value == '' || value == undefined) {
                this.i = 2;
            }
            else {
                this.i = 1;
            }
        }
    };
    ChinaDeclarationFormPage.prototype.change1 = function (e, value, index) {
        console.log("value111", value);
        if (index == 2) {
            if (value == '' || value == undefined) {
                this.j = 3;
            }
            else {
                this.j = 1;
            }
        }
    };
    ChinaDeclarationFormPage.prototype.submit = function () {
        var _this = this;
        if (this.auto_id == '' || this.auto_id == undefined) {
            this.auto_id = '';
        }
        if (!this.nationalities) {
            this.nDetails == '';
        }
        if (!this.anotherresidency) {
            this.fDetails == '';
        }
        if (this.nationalities && (this.nDetails == '' || this.nDetails == undefined)) {
            this.msg = 'All fields are mandatory.';
            this.apiMessage(this.msg);
            return false;
        }
        else if (this.anotherresidency && (this.fDetails == '' || this.fDetails == undefined)) {
            this.msg = 'All fields are mandatory.';
            this.apiMessage(this.msg);
            return false;
        }
        this.commonLoader();
        var anotherResi = (this.anotherresidency) ? 'true' : 'false';
        var nationalities = (this.nationalities) ? 'true' : 'false';
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            var apiKey = {
                "client_id": _this.apiServices.clientId,
                "employee_id": _this.employeeId,
                "device": _this.apiServices.device,
                "device_id": _this.deviceId,
                "app_version": _this.apiServices.appVersion,
                "form_id": _this.data.form_id,
                "auto_id": _this.auto_id,
                "content": _this.finalString,
                "is_multiple_nationalities": nationalities,
                "other_nationlities": _this.nDetails,
                "is_permanent_residency": anotherResi,
                "permanent_residency": _this.fDetails,
                "allValueOfInputField": _this.tempArraySendToServer
            };
            _this.apiServices.nationality_declaration_submit(apiKey, _this.login_token).subscribe(function (res) {
                console.log('tnc res==', res);
                _this.loading.dismiss();
                if (res.success == 1) {
                    _this.apiMessage(res.message);
                    _this.navCtrl.pop();
                    _this.tempArraySendToServer = [];
                    console.log('newArray==', _this.newArray);
                    // console.log('new***== ', this.allData);
                }
                else {
                    _this.apiMessage(res.message);
                }
            }, function (err) {
                _this.loading.dismiss();
                console.log('err== ', err);
                _this.apiMessage(err);
            });
        });
    };
    ChinaDeclarationFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-china-declaration-form',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/onboarding_forms/china/china-declaration-form/china-declaration-form.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title> {{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n\n    <div ion-fixed class="selectLanguageDiv" *ngIf="showLangPopUp==true">\n        <div class="LanguageDiv">\n          <ion-row text-center class="langHead"><ion-col col-12><h6 no-margin>Please select a language to continue</h6></ion-col></ion-row>\n          <ion-list no-margin radio-group [(ngModel)]="finalselect" padding-horizontal>\n            <ion-row class="radioDiv">\n              <ion-col col-12 *ngFor="let data of language; let j= index;">\n                <ion-item  >\n                  <ion-label class="genderlable">{{data}}</ion-label>\n                  <ion-radio  [value]="data" (ionSelect)="radioChecked(data)"></ion-radio>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-list>\n          <ion-row padding-horizontal>\n            <ion-col col-12 text-center><button ion-button class="btn" tappable (click)="hideLangPopUp(\'hide\')">Done</button></ion-col>\n          </ion-row>\n        </div>\n      </div>\n\n      \n  <div *ngIf="showPage==true">\n    <div  class="btndiv">\n        <button ion-button class="btn" (click)="update1()">Select Language</button>\n    </div>\n\n\n\n\n  <div *ngIf="form_status==\'enable\'"  class="pageDiv">\n      <div class="customCardDiv">\n    <div *ngFor="let data of newArray; let i=index">\n          <div [innerHTML]="data?.str|safeHtml"></div>\n\n         <div *ngIf="serverRes?.showTextArea==true && data?.str!=\'\'"> \n            <ion-input class="inputclass" type="text" [(ngModel)]="data.value"></ion-input>\n          </div>\n      </div>\n      </div>\n  </div>\n\n  <div class="padd" *ngIf="form_status!=\'enable\'" [innerHTML]="nationalityData.content" ></div>\n\n      <div class="pageDiv">\n          <div class="customCardDiv">\n        \n            <!-- <p class="innercss" [innerHTML]="message_top"></p> -->\n            <ion-row>\n              <ion-col col-12>\n                <!-- <div class="inputDiv"> -->\n                  <ion-label style="font-weight:bold" *ngIf="finalselect==\'English\'">Did you have multiple nationalities?\n                    <sup class="redText">*</sup>\n                  </ion-label>\n\n                  <ion-label *ngIf="finalselect==\'Chinese\'">是否拥有双/多重国籍？\n                      <sup class="redText">*</sup>\n                    </ion-label>\n                  <ion-list no-margin radio-group [(ngModel)]="nationalities">\n                    <ion-row class="radioDiv">\n                      <ion-col col-6>\n                        <ion-item>\n                          <ion-label *ngIf="finalselect==\'English\'" class="genderlable">yes</ion-label>\n                          <ion-label *ngIf="finalselect==\'Chinese\'" class="genderlable">是</ion-label>\n                          <ion-radio  [value]="true"></ion-radio>\n                        </ion-item>\n                      </ion-col>\n                      <ion-col col-6>\n                        <ion-item>\n                          <ion-label *ngIf="finalselect==\'English\'" class="genderlable">No</ion-label>\n                          <ion-label *ngIf="finalselect==\'Chinese\'" class="genderlable">没有</ion-label>\n                          <ion-radio  [value]="false"></ion-radio>\n                        </ion-item>\n                      </ion-col>\n                    </ion-row>\n                  </ion-list>\n                <!-- </div> -->\n              </ion-col>\n            </ion-row>\n\n            <ion-row *ngIf="nationalities==true">\n                <ion-col col-12>\n                    <ion-label *ngIf="finalselect==\'English\'">Other Nationalities\n                        <sup class="redText">*</sup>\n                      </ion-label>\n    \n                      <ion-label *ngIf="finalselect==\'Chinese\'">\n                          其他国籍为\n                          <sup class="redText">*</sup>\n                        </ion-label>\n                    <ion-input class="inputclass" type="text" name="nDetails" [(ngModel)]="nDetails" (ngModelChange)="change($event,nDetails,1)"></ion-input>\n                </ion-col>\n              </ion-row>\n\n            <p class="innercss" *ngIf="finalselect==\'English\'">Did you have the permanent residency in other countries?</p>\n            <p class="innercss" *ngIf="finalselect==\'Chinese\'">是否拥有他国永久居留权？</p>\n       \n            <!-- <p class="innercss" [innerHTML]="message_bottom"></p> -->\n            <ion-row>\n              <ion-col col-12>\n                  <!-- <ion-label *ngIf="finalselect==\'English\'">Select\n                    <sup class="redText">*</sup>\n                  </ion-label> -->\n                  <ion-label *ngIf="finalselect==\'Chinese\'">选择\n                    <sup class="redText">*</sup>\n                  </ion-label>\n                  <ion-list no-margin radio-group [(ngModel)]="anotherresidency">\n                    <ion-row class="radioDiv">\n                      <ion-col col-6>\n                        <ion-item>\n                    \n                          <ion-label *ngIf="finalselect==\'English\'" class="genderlable">yes</ion-label>\n                          <ion-label *ngIf="finalselect==\'Chinese\'" class="genderlable">是</ion-label>\n                          <ion-radio  [value]="true" ></ion-radio>\n                        </ion-item>\n                      </ion-col>\n                      <ion-col col-6>\n                        <ion-item>\n                            <ion-label *ngIf="finalselect==\'English\'" class="genderlable">No</ion-label>\n                            <ion-label *ngIf="finalselect==\'Chinese\'" class="genderlable">没有</ion-label>\n                          <ion-radio  [value]="false"></ion-radio>\n                        </ion-item>\n                      </ion-col>\n                    </ion-row>\n                  </ion-list>\n               \n              </ion-col>\n            </ion-row>\n            <ion-row *ngIf="anotherresidency==true">\n              <ion-col col-12>\n            \n                  <ion-label *ngIf="finalselect==\'English\'">Permanent residency in \n                    <sup class="redText">*</sup>\n                  </ion-label>\n\n                  <ion-label *ngIf="finalselect==\'Chinese\'">\n                      其他国家\n                      <sup class="redText">*</sup>\n                    </ion-label>\n                  <ion-input class="inputclass" type="text" name="fDetails" [(ngModel)]="fDetails" (ngModelChange)="change1($event,fDetails,2)"></ion-input>\n                \n              </ion-col>\n            </ion-row>\n\n          </div>\n        </div>\n\n\n      <!-- <button ion-button (click)="seeString()">see full string</button> -->\n    \n      \n      <!-- <div [innerHTML]="finalString" ></div> -->\n\n      <div *ngIf="finalselect==\'English\' && form_status==\'enable\' && fillstatus==0"  class="btndiv1">\n          <button ion-button class="btn" (click)="seeString()">Submit</button>\n      </div>\n  \n      <div *ngIf="finalselect==\'Chinese\' && form_status==\'enable\' && fillstatus==0"  class="btndiv1">\n          <button ion-button class="btn" (click)="seeString()">提交</button>\n        </div>\n      </div>\n\n\n    <div *ngIf="finalselect==\'English\' && form_status==\'enable\' && fillstatus==1"  class="btndiv1">\n        <button ion-button class="btn" (click)="seeString()">Update</button>\n      </div>\n      <div *ngIf="finalselect==\'Chinese\' && form_status==\'enable\' && fillstatus==1"  class="btndiv1">\n          <button ion-button class="btn" (click)="seeString()">更新</button>\n        </div>\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/onboarding_forms/china/china-declaration-form/china-declaration-form.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], ChinaDeclarationFormPage);
    return ChinaDeclarationFormPage;
}());

//# sourceMappingURL=china-declaration-form.js.map

/***/ }),

/***/ 789:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChinaDeclarationFormPageModule", function() { return ChinaDeclarationFormPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__china_declaration_form__ = __webpack_require__(1095);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(867);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { PipesModule } from '../../pipes/pipes.module';
var ChinaDeclarationFormPageModule = /** @class */ (function () {
    function ChinaDeclarationFormPageModule() {
    }
    ChinaDeclarationFormPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__china_declaration_form__["a" /* ChinaDeclarationFormPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__china_declaration_form__["a" /* ChinaDeclarationFormPage */]), __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], ChinaDeclarationFormPageModule);
    return ChinaDeclarationFormPageModule;
}());

//# sourceMappingURL=china-declaration-form.module.js.map

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
//# sourceMappingURL=34.js.map
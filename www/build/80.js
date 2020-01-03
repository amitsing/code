webpackJsonp([80],{

/***/ 1096:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChinaconsentPage; });
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





var ChinaconsentPage = /** @class */ (function () {
    function ChinaconsentPage(alertCtrl, platform, menu, loadingCtrl, toastCtrl, storage, apiServices, navCtrl, navParams, iab) {
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
        this.allData = [];
        this.answerarr = [];
        this.showLangPopUp = false;
        this.finalselect = 'English';
        this.answerarr = [{ "question_id": "", "answer": "" }];
        this.checkedIdx = 0;
        this.checkedIdxx = 0;
        this.data = this.navParams.get('data');
        this.title = this.data.form_name;
        this.form_id = this.data.form_id;
        this.form_status = this.data.form_status;
        this.storage.get('login_token').then(function (data) { _this.login_token = data; });
        this.storage.get('employeeId').then(function (data) { _this.employeeId = data; });
        console.log("test");
        this.gform();
    }
    //   checkValue(value,index)
    //   { //your code }
    //   console.log("test",value);
    //   console.log("index",index);
    //   console.log("final array== ",this.testarray);
    // }
    // update(){
    //   for(let i=0;i<this.testarray.length;i++){
    // if(this.testarray[i].answer=='' || this.testarray[i].answer==undefined){
    // alert('select ans');
    // return false;
    // }
    // if(this.testarray.length==i+1){
    // console.log("submit")
    //   }
    //   }
    // }
    ChinaconsentPage.prototype.hideLangPopUp = function (val) {
        if (val == 'show') {
            this.showLangPopUp = true;
        }
        else {
            this.showLangPopUp = false;
        }
    };
    ChinaconsentPage.prototype.gform = function () {
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
                "form_id": _this.form_id
            };
            _this.apiServices.china_consent(apiKey, _this.login_token).subscribe(function (res) {
                console.log('tnc res==', res);
                _this.loading.dismiss();
                if (res.success == 1) {
                    _this.englishdata = res.English;
                    _this.chinadata = res.Chinese;
                    _this.extra_div = res.extra_div;
                    _this.language = res.language;
                    _this.fillstatus = res.fill_status;
                    if (_this.language.length > 1) {
                        _this.showLangPopUp = true;
                    }
                    else {
                        _this.showLangPopUp = false;
                    }
                    _this.finalselect = _this.language[0];
                    _this.allData = res.data;
                    _this.englishdiscrip = res.English.description;
                    _this.chinadiscrip = res.Chinese.description;
                    // this.Chinese=res.data.Chinese;
                    // this.English=res.data.English;
                    // this.disagree_message=res.disagree_message;
                    // this.show_skip=res.show_skip;
                    // this.tanckey=this.allData[0].auto_id;
                    //   Object.keys(obj).forEach(function(key,index) {
                    //     // key: the name of the object key
                    //     // index: the ordinal position of the key within the object 
                    // });
                    // console.log('res', res);
                    // console.log('res1', res);
                    console.log('succ1', res.data);
                    // const values = Object.keys(res.data).map(key => {
                    //   res.data[key];
                    //   console.log('11***== ',key);
                    //   console.log('1122***== ',res.data[key]);
                    //   this.allData.push({'newData':res.data[key]});
                    //   console.log('new00***== ', this.allData);
                    // });
                    // console.log('hhhh***== ',values);
                    console.log('new***== ', _this.allData);
                    // const commaJoinedValues = values.join(",");
                    // console.log('hhhh== ',commaJoinedValues);
                    // console.log(Object.values(res.data));
                    // for(let i=0; i<Object.keys(res.data).length;i++){
                    //   console.log(Object.values(res.data));
                    //   this.allData.push(res.data);
                    // }
                    console.log('succ', _this.allData.length);
                    // console.log('succ1', this.allData[0]);
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
    ChinaconsentPage.prototype.checkfun = function (selectedvalue, i, j, value) {
        this.allData[j][i].userResponse = selectedvalue;
        console.log("this.allData[j][i].userResponse", this.allData[j][i].userResponse);
    };
    //Common Loader:
    ChinaconsentPage.prototype.commonLoader = function () {
        this.loading = this.loadingCtrl.create({
            enableBackdropDismiss: true,
            spinner: 'ios-small',
            content: 'Loading data...'
        });
        this.loading.present();
    };
    ChinaconsentPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 4000
        });
        toast.present();
    };
    ChinaconsentPage.prototype.update = function () {
        var _this = this;
        this.answerarr = [];
        this.allData.forEach(function (firstdata) {
            firstdata.forEach(function (element) {
                var data = {
                    "question_id": element.auto_id,
                    "answer": element.userResponse
                };
                _this.answerarr.push(data);
                console.log("this.aaa", _this.answerarr);
            });
        });
        this.submitform();
    };
    ChinaconsentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChinaconsentPage');
    };
    ChinaconsentPage.prototype.submitform = function () {
        var _this = this;
        if (this.checkMandatoryStatus()) {
            console.log("status3", status);
            if (this.checkOptionalStatus) {
                console.log("status5", status);
            }
            else {
                this.msg = "All fields are mandetory.";
                this.apiMessage(this.msg);
                return false;
            }
        }
        else {
            console.log("status4", status);
            this.msg = "Please select option Yes.";
            this.apiMessage(this.msg);
            return false;
        }
        this.commonLoader();
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            var apiKey = {
                "client_id": _this.apiServices.clientId,
                "employee_id": _this.employeeId,
                "device": _this.apiServices.device,
                "device_id": _this.deviceId,
                "app_version": _this.apiServices.appVersion,
                "form_id": _this.form_id,
                "answer_arr": _this.answerarr
            };
            _this.apiServices.china_consent_submit(apiKey, _this.login_token).subscribe(function (res) {
                console.log('tnc res==', res);
                _this.loading.dismiss();
                if (res.success == 1) {
                    console.log('succ');
                    _this.apiMessage(res.message);
                    _this.navCtrl.pop();
                    // console.log('succ1', this.allData[0]);
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
    ChinaconsentPage.prototype.checkMandatoryStatus = function () {
        var _this = this;
        var status = true;
        var checkIndex = 0;
        this.allData[0].forEach(function (element) {
            status = element.userResponse && status;
            console.log("status1", status);
            console.log("status2==", _this.allData[0]);
            console.log("element***==", element);
            if (status == false && checkIndex == 0) {
                checkIndex = checkIndex + 1;
                _this.scrollDivId = element.auto_id;
                console.log("scroll to id***==", element.auto_id);
                var yOffset = document.getElementById(_this.scrollDivId).offsetTop;
                _this.content.scrollTo(0, yOffset, 3000);
                return false;
            }
        });
        return status;
    };
    ChinaconsentPage.prototype.checkOptionalStatus = function () {
        var _this = this;
        var status = true;
        var checkIndex = 0;
        this.answerarr.forEach(function (element) {
            status = element.userResponse && status;
            console.log("status2==", _this.answerarr);
            //       console.log("element==", element);
            console.log("status2", status);
            if (status == false && checkIndex == 0) {
                checkIndex = checkIndex + 1;
                _this.scrollDivId = element.auto_id;
                console.log("scroll to id***==", element.auto_id);
                var yOffset = document.getElementById(_this.scrollDivId).offsetTop;
                _this.content.scrollTo(0, yOffset, 3000);
                return false;
            }
        });
        return status;
    };
    ChinaconsentPage.prototype.langfun = function (val) {
        if (val == 1) {
            this.languagecheck = 0;
        }
        else {
            this.languagecheck = 1;
        }
    };
    ChinaconsentPage.prototype.langfun1 = function (val) {
        if (val == 1) {
            this.languagecheck = 0;
        }
        else {
            this.languagecheck = 1;
        }
    };
    ChinaconsentPage.prototype.selectlanguage = function (ldata) {
        console.log("llll", ldata);
        this.allData = [];
        if (ldata == 'English') {
            this.allData = this.English;
        }
        else {
            this.allData = this.Chinese;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], ChinaconsentPage.prototype, "content", void 0);
    ChinaconsentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chinaconsent',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/onboarding_forms/china/chinaconsent/chinaconsent.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <div ion-fixed class="selectLanguageDiv" *ngIf="showLangPopUp==true">\n    <div class="LanguageDiv">\n      <ion-row text-center class="langHead"><ion-col col-12><h6 no-margin>Please select a language to continue</h6></ion-col></ion-row>\n      <ion-list no-margin radio-group [(ngModel)]="finalselect" padding-horizontal>\n        <ion-row class="radioDiv">\n          <ion-col col-12 *ngFor="let data of language; let j= index;">\n            <ion-item  >\n              <ion-label class="genderlable">{{data}}</ion-label>\n              <ion-radio  [value]="data" ></ion-radio>\n            </ion-item>\n          </ion-col>          \n        </ion-row>\n      </ion-list>\n      <ion-row padding-horizontal>\n        <ion-col col-12 text-center><button ion-button class="btn" tappable (click)="hideLangPopUp(\'hide\')">Done</button></ion-col>\n      </ion-row>\n    </div>\n  </div>\n\n\n\n\n\n\n\n\n\n\n    <ion-row>\n        <ion-col col-12 text-right>\n          <button ion-button class="btn" tappable (click)="hideLangPopUp(\'show\')">Change Language &nbsp;&nbsp;<ion-icon name="ios-arrow-down"></ion-icon></button>\n          <!-- <div class="inputDiv">\n            <ion-list no-margin radio-group [(ngModel)]="finalselect" >\n              <ion-row class="radioDiv">\n                <ion-col col-6 *ngFor="let data of language; let j= index;">\n                  <ion-item  >\n                    <ion-label class="genderlable">{{data}}</ion-label>\n                    <ion-radio  [value]="data" ></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-list>\n          </div> -->\n        </ion-col>\n      </ion-row>\n\n\n<div class="newOverlay">\n\n      <div *ngIf="finalselect==\'English\'" class="para4" [innerHTML]="englishdiscrip"></div>\n      <div *ngIf="finalselect==\'Chinese\'" class="para4" [innerHTML]="chinadiscrip"> </div>\n\n      <div class="pageDiv" *ngFor="let data of allData; let j= index;">\n\n        <div class="customCardDiv">\n\n          <p *ngIf="j==0 && finalselect==\'English\'" class="para3" [innerHTML]="englishdata.part_A"></p>\n          <p *ngIf="j==0 && finalselect==\'Chinese\'" class="para3" [innerHTML]="chinadata.part_A"></p>\n\n          <p *ngIf="j==1 && finalselect==\'English\'" class="para3" [innerHTML]="englishdata.part_B"></p>\n          <p *ngIf="j==1 && finalselect==\'Chinese\'" class="para3" [innerHTML]="chinadata.part_B"></p>\n        \n          <div  *ngFor="let value of data; let i= index;" >\n\n      <div class="bordercss" *ngIf="value.language==finalselect" id="{{value?.auto_id}}"\n      [ngClass]="{\'redBorder\':scrollDivId==value?.auto_id}">\n            <p class="para3">Question: &nbsp;{{ ((i+1)%(data.length/language.length) == 0 ) ? ((i+1)%(data.length/language.length) + (data.length/language.length) ) : ((i+1)%(data.length/language.length)) }}</p>\n            <p>{{value.question}}</p>\n          \n            <ion-row *ngIf="value.userResponse==true" class="AnswerDiv">\n              <ion-col col-5 (click)=checkfun(true,i,j,data)>\n              <div text-center class="fillBg">\n                  <span *ngIf="finalselect==\'English\'">Yes</span>\n                  <span *ngIf="finalselect==\'Chinese\'">是</span>\n              </div>\n                <!-- <p >\n                  <span *ngIf="finalselect==\'English\'">Yes</span>\n                  <span *ngIf="finalselect==\'Chinese\'">是</span>\n                  <span *ngIf="value.userResponse">\n                    &nbsp;&nbsp;\n                    <img class="hcss" src="../../../assets/imgs/radio button.png" />\n                  </span>\n                  <span *ngIf="!value.userResponse">\n                    &nbsp;&nbsp;\n                    <img class="hcss" src="../../assets/imgs/radio buttonempty.png" />\n                  </span>\n                </p> -->\n              </ion-col>\n              <ion-col col-2></ion-col>\n              <ion-col col-5 (click)=checkfun(false,i,j,data)>\n                  <div text-center class="emptyBg">\n                      <span *ngIf="finalselect==\'English\'">No</span>\n                      <span *ngIf="finalselect==\'Chinese\'">没有</span>\n                  </div>\n                <!-- <p >\n                  <span *ngIf="finalselect==\'English\'">No</span>\n                  <span *ngIf="finalselect==\'Chinese\'">没有</span>\n                  <span *ngIf="!value.userResponse">\n                    &nbsp;&nbsp;\n                    <img class="hcss" src="../../../assets/imgs/radio button.png" />\n                  </span>\n                  <span *ngIf="value.userResponse">\n                    &nbsp;&nbsp;\n                    <img class="hcss" src="../../assets/imgs/radio buttonempty.png" />\n                  </span>\n                </p> -->\n              </ion-col>\n            </ion-row>\n            <ion-row *ngIf="value.userResponse==false" class="AnswerDiv">\n              <ion-col col-5 (click)=checkfun(true,i,j,data)>\n                  <div text-center class="emptyBg">\n                      <span *ngIf="finalselect==\'English\'">Yes</span>\n                      <span *ngIf="finalselect==\'Chinese\'">是</span>\n                  </div>\n                <!-- <p>\n                    <span *ngIf="finalselect==\'English\'">Yes</span>\n                    <span *ngIf="finalselect==\'Chinese\'">是</span>\n                  <span *ngIf="value.userResponse">\n                    &nbsp;&nbsp;\n                    <img class="hcss" src="../../../assets/imgs/radio button.png" />\n                  </span>\n                  <span *ngIf="!value.userResponse">\n                    &nbsp;&nbsp;\n                    <img class="hcss" src="../../assets/imgs/radio buttonempty.png" />\n                  </span>\n                </p> -->\n              </ion-col>\n              <ion-col col-2></ion-col>\n              <ion-col col-5 (click)=checkfun(false,i,j,data)>\n                  <div text-center class="fillBg">\n                      <span *ngIf="finalselect==\'English\'">No</span>\n                      <span *ngIf="finalselect==\'Chinese\'">没有</span>\n                  </div>\n                <!-- <p>\n                    <span *ngIf="finalselect==\'English\'">No</span>\n                    <span *ngIf="finalselect==\'Chinese\'">没有</span>\n                  <span *ngIf="!value.userResponse">\n                    &nbsp;&nbsp;\n                    <img class="hcss" src="../../../assets/imgs/radio button.png" />\n                  </span>\n                  <span *ngIf="value.userResponse">\n                    &nbsp;&nbsp;\n                    <img class="hcss" src="../../assets/imgs/radio buttonempty.png" />\n                  </span>\n                </p> -->\n              </ion-col>\n            </ion-row>\n            <ion-row *ngIf="value.userResponse==\'3\'" class="AnswerDiv">\n              <ion-col col-5 (click)=checkfun(true,i,j,data)>\n                  <div text-center class="emptyBg">\n                      <span *ngIf="finalselect==\'English\'">Yes</span>\n                      <span *ngIf="finalselect==\'Chinese\'">是</span>\n                  </div>\n                <!-- <p>\n                    <span *ngIf="finalselect==\'English\'">Yes</span>\n                    <span *ngIf="finalselect==\'Chinese\'">是</span>\n                  <span>\n                    &nbsp;&nbsp;\n                    <img class="hcss" src="../../assets/imgs/radio buttonempty.png" />\n                  </span>\n                </p> -->\n\n              </ion-col>\n              <ion-col col-2></ion-col>\n              <ion-col col-5 (click)=checkfun(false,i,j,data)>\n                  <div text-center class="emptyBg">\n                      <span *ngIf="finalselect==\'English\'">No</span>\n                      <span *ngIf="finalselect==\'Chinese\'">没有</span>\n                  </div>\n                <!-- <p>\n                    <span *ngIf="finalselect==\'English\'">No</span>\n                    <span *ngIf="finalselect==\'Chinese\'">没有</span>\n                  <span>\n                    &nbsp;&nbsp;\n                    <img class="hcss" src="../../assets/imgs/radio buttonempty.png" />\n                  </span>\n                </p> -->\n              </ion-col>\n            </ion-row>\n\n        \n          </div>\n\n        </div>\n      </div>\n      </div>\n\n\n\n      <div class="pageDiv">\n        <div class="customCardDiv">\n          <p *ngIf="finalselect==\'English\'" [innerHTML]="englishdata?.part_C"></p>\n          <p *ngIf="finalselect==\'Chinese\'" [innerHTML]="chinadata?.part_C"></p>\n        </div>\n      </div>\n    </div>\n\n\n\n\n\n  <div *ngIf="finalselect==\'English\' && form_status==\'enable\' && fillstatus==0"  class="btndiv">\n    <button ion-button class="btn" (click)="update()">Submit</button>\n  </div>\n  <div *ngIf="finalselect==\'Chinese\' && form_status==\'enable\' && fillstatus==0"  class="btndiv">\n      <button ion-button class="btn" (click)="update()">提交</button>\n    </div>\n\n    <div *ngIf="finalselect==\'English\' && form_status==\'enable\' && fillstatus==1"  class="btndiv">\n        <button ion-button class="btn" (click)="update()">Update</button>\n      </div>\n      <div *ngIf="finalselect==\'Chinese\' && form_status==\'enable\' && fillstatus==1"  class="btndiv">\n          <button ion-button class="btn" (click)="update()">更新</button>\n        </div>\n\n</ion-content>'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/onboarding_forms/china/chinaconsent/chinaconsent.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], ChinaconsentPage);
    return ChinaconsentPage;
}());

//# sourceMappingURL=chinaconsent.js.map

/***/ }),

/***/ 790:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChinaconsentPageModule", function() { return ChinaconsentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chinaconsent__ = __webpack_require__(1096);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChinaconsentPageModule = /** @class */ (function () {
    function ChinaconsentPageModule() {
    }
    ChinaconsentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chinaconsent__["a" /* ChinaconsentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chinaconsent__["a" /* ChinaconsentPage */]),
            ],
        })
    ], ChinaconsentPageModule);
    return ChinaconsentPageModule;
}());

//# sourceMappingURL=chinaconsent.module.js.map

/***/ })

});
//# sourceMappingURL=80.js.map
webpackJsonp([81],{

/***/ 1148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsaconsentPage; });
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





var UsaconsentPage = /** @class */ (function () {
    function UsaconsentPage(alertCtrl, platform, menu, loadingCtrl, toastCtrl, storage, apiServices, navCtrl, navParams, iab) {
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
    UsaconsentPage.prototype.gform = function () {
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
                    _this.fillstatus = res.fill_status;
                    _this.allData = res.data;
                    _this.partdata_a = res.part_A;
                    _this.partdata_b = res.part_B;
                    _this.partdata_c = res.part_C;
                    console.log('succ1', res.data);
                    console.log('new***== ', _this.allData);
                    console.log('succ', _this.allData.length);
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
    UsaconsentPage.prototype.checkfun = function (selectedvalue, i, j, value) {
        this.allData[j][i].userResponse = selectedvalue;
        console.log("this.allData[j][i].userResponse", this.allData[j][i].userResponse);
    };
    //Common Loader:
    UsaconsentPage.prototype.commonLoader = function () {
        this.loading = this.loadingCtrl.create({
            enableBackdropDismiss: true,
            spinner: 'ios-small',
            content: 'Loading data...'
        });
        this.loading.present();
    };
    UsaconsentPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 4000
        });
        toast.present();
    };
    UsaconsentPage.prototype.update = function () {
        var _this = this;
        this.answerarr = [];
        this.allData.forEach(function (firstdata) {
            firstdata.forEach(function (element) {
                var data = {
                    "question_id": element.auto_id,
                    "answer": element.userResponse,
                    "auto_id": element.auto_id
                };
                _this.answerarr.push(data);
                console.log("this.aaa", _this.answerarr);
            });
        });
        this.submitform();
    };
    UsaconsentPage.prototype.submitform = function () {
        var _this = this;
        if (this.checkMandatoryStatus()) {
            console.log("status3", status);
            if (this.checkOptionalStatus()) {
                console.log("status5222222", status);
            }
            else {
                console.log("stat false 222", status);
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
    UsaconsentPage.prototype.checkMandatoryStatus = function () {
        var _this = this;
        var status = true;
        var blankstatus;
        var checkIndex = 0;
        this.allData[0].forEach(function (element) {
            blankstatus = element.userResponse;
            if (element.userResponse != 3) {
                status = element.userResponse && status;
            }
            else {
                status = false && status;
            }
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
    UsaconsentPage.prototype.checkOptionalStatus = function () {
        var status;
        var checkIndex = 0;
        var index = this.answerarr.findIndex(function (p) { return p.answer == "3"; });
        if (index >= 0) {
            this.scrollDivId = this.answerarr[index].auto_id;
            console.log("scroll to id***==", this.answerarr[index].auto_id);
            var yOffset = document.getElementById(this.scrollDivId).offsetTop;
            this.content.scrollTo(0, yOffset, 3000);
            return false;
        }
        else {
            return true;
        }
        /*
        
            this.answerarr.forEach(element => {
              if(element.answer == 3){
              //   status = element.answer && status;
              // } else if(element.answer == false) {
              // status = false && status;
              // }else{
                status = true;
                console.log("status2", status);
                if ( checkIndex == 0) {
                  checkIndex = checkIndex + 1;
                  this.scrollDivId = element.auto_id;
                  console.log("scroll to id***==", element.auto_id);
                  let yOffset = document.getElementById(this.scrollDivId).offsetTop;
                  this.content.scrollTo(0, yOffset, 3000)
                  return status;
                }
              }
              // status = element.answer && status;
              console.log("status2==", this.answerarr);
              //       console.log("element==", element);
         
             
        
        
              // if (status == false && checkIndex == 0) {
              //   checkIndex = checkIndex + 1;
              //   this.scrollDivId = element.auto_id;
              //   console.log("scroll to id***==", element.auto_id);
              //   let yOffset = document.getElementById(this.scrollDivId).offsetTop;
              //   this.content.scrollTo(0, yOffset, 3000)
              //   return false;
              // }
            });
           
        
        */
    };
    UsaconsentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UsaconsentPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], UsaconsentPage.prototype, "content", void 0);
    UsaconsentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-usaconsent',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/onboarding_forms/US/usaconsent/usaconsent.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding *ngIf="allData">\n  <div [ngClass]="{\'newOverlay\':form_status != \'enable\'}">\n    <div class="pageDiv" *ngFor="let data of allData; let j= index;">\n      <div class="customCardDiv">\n        <p *ngIf="j==0" [innerHTML]="partdata_a.description"></p>\n        <p *ngIf="j==0" class="para3" [innerHTML]="partdata_a.data_A"></p>\n        <p *ngIf="j==1" class="para3" [innerHTML]="partdata_a.data_B"></p>\n        <p *ngIf="j==2" [innerHTML]="partdata_b.description"></p>\n        <p *ngIf="j==2" class="para3" [innerHTML]="partdata_b.data_A"></p>\n        <div *ngFor="let value of data; let i= index;">\n          <div class="bordercss" id="{{value?.auto_id}}" [ngClass]="{\'redBorder\':scrollDivId==value?.auto_id}">\n            <p class="para3">Question: &nbsp;{{i+1}}</p>\n            <p [innerHTML]="value.question"></p>\n            <ion-row *ngIf="value.userResponse==true" class="AnswerDiv">\n              <ion-col col-5 (click)=checkfun(true,i,j,data)>\n                <div text-center class="fillBg">\n                  <span>Yes</span>\n                </div>\n              </ion-col>\n              <ion-col col-2></ion-col>\n              <ion-col col-5 (click)=checkfun(false,i,j,data)>\n                <div text-center class="emptyBg">\n                  <span>No</span>\n                </div>\n              </ion-col>\n            </ion-row>\n            <ion-row *ngIf="value.userResponse==false" class="AnswerDiv">\n              <ion-col col-5 (click)=checkfun(true,i,j,data)>\n                <div text-center class="emptyBg">\n                  <span>Yes</span>\n                </div>\n              </ion-col>\n              <ion-col col-2></ion-col>\n              <ion-col col-5 (click)=checkfun(false,i,j,data)>\n                <div text-center class="fillBg">\n                  <span>No</span>\n                </div>\n              </ion-col>\n            </ion-row>\n            <ion-row *ngIf="value.userResponse==\'3\'" class="AnswerDiv">\n              <ion-col col-5 (click)=checkfun(true,i,j,data)>\n                <div text-center class="emptyBg">\n                  <span>Yes</span>\n                </div>\n              </ion-col>\n              <ion-col col-2></ion-col>\n              <ion-col col-5 (click)=checkfun(false,i,j,data)>\n                <div text-center class="emptyBg">\n                  <span>No</span>\n                </div>\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n        <p *ngIf="j==2" class="" [innerHTML]="partdata_b.data_B"></p>\n      </div>\n    </div>\n    <div>\n      <div class="" [innerHTML]="partdata_c?.description"></div>\n      <div *ngIf="form_status==\'enable\' && fillstatus==0" class="btndiv">\n        <button ion-button class="btn" (click)="update()">Submit</button>\n      </div>\n      <div *ngIf="form_status==\'enable\' && fillstatus==1" class="btndiv">\n        <button ion-button class="btn" (click)="update()">Update</button>\n      </div>\n    </div>\n\n  </div>\n</ion-content>'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/onboarding_forms/US/usaconsent/usaconsent.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], UsaconsentPage);
    return UsaconsentPage;
}());

//# sourceMappingURL=usaconsent.js.map

/***/ }),

/***/ 820:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsaconsentPageModule", function() { return UsaconsentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usaconsent__ = __webpack_require__(1148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UsaconsentPageModule = /** @class */ (function () {
    function UsaconsentPageModule() {
    }
    UsaconsentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__usaconsent__["a" /* UsaconsentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__usaconsent__["a" /* UsaconsentPage */]),
            ],
        })
    ], UsaconsentPageModule);
    return UsaconsentPageModule;
}());

//# sourceMappingURL=usaconsent.module.js.map

/***/ })

});
//# sourceMappingURL=81.js.map
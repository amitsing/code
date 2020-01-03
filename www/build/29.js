webpackJsonp([29],{

/***/ 1150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsnewjoineeformPage; });
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




var UsnewjoineeformPage = /** @class */ (function () {
    function UsnewjoineeformPage(alertCtrl, platform, menu, loadingCtrl, toastCtrl, storage, apiServices, navCtrl, navParams) {
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
        this.usAuthArray = [
            { auto_id: '1', name: 'Yes' },
            { auto_id: '0', name: 'No' }
        ];
        this.previousdata = this.navParams.get('data');
        this.title = this.previousdata.form_name;
        this.form_status = this.previousdata.form_status;
        this.storage.get('login_token').then(function (data) { _this.login_token = data; });
        this.storage.get('employeeId').then(function (data) { _this.employeeId = data; });
        this.newjoinee();
    }
    UsnewjoineeformPage.prototype.newjoinee = function () {
        var _this = this;
        var url = "";
        if (this.previousdata.country_id == 8) {
            url = "Onboarding_Forms_Apis/canada_forms/get_joiner_form_data.php";
        }
        else {
            url = "Onboarding_Forms_Apis/usa_forms/get_joiner_form_data.php";
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
                "form_id": _this.previousdata.form_id
            };
            _this.apiServices.us_canada(url, apiKey, _this.login_token).subscribe(function (res) {
                console.log('tnc res==', res);
                _this.loading.dismiss();
                if (res.success == 1) {
                    _this.fill_status = res.fill_status;
                    _this.alldata = res.data[0];
                    setTimeout(function () {
                        if (_this.alldata.location_authorized_for_work.value == '') {
                            console.log("this.usauth", _this.usauth);
                            _this.usauth = '';
                        }
                        else if (_this.alldata.location_authorized_for_work.value == '1') {
                            _this.usauth = '1';
                        }
                        else {
                            _this.usauth = '0';
                        }
                    }, 300);
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
    UsnewjoineeformPage.prototype.commonLoader = function () {
        this.loading = this.loadingCtrl.create({
            enableBackdropDismiss: true,
            spinner: 'ios-small',
            content: 'Loading data...'
        });
        this.loading.present();
    };
    UsnewjoineeformPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    UsnewjoineeformPage.prototype.fun = function () {
        console.log('ionViewDidLoad UsnewjoineeformPage', this.alldata.first_name.value);
    };
    UsnewjoineeformPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UsnewjoineeformPage');
    };
    UsnewjoineeformPage.prototype.submit = function (btnkey) {
        var _this = this;
        this.btnkey = btnkey;
        console.log("this.btnkey", this.btnkey);
        this.scrollDivId = false;
        this.middle_namescrollDivId = false;
        this.last_namescrollDivId = false;
        this.date_of_birthscrollDivId = false;
        this.complete_addressscrollDivId = false;
        this.email_idscrollDivId = false;
        this.contactscrollDivId = false;
        this.contact_namescrollDivId = false;
        this.emergency_contactscrollDivId = false;
        this.work_locationscrollDivId = false;
        this.location_authorized_for_work = false;
        if (this.alldata.first_name.is_mandatory == true && (this.alldata.first_name.value == '' ||
            this.alldata.first_name.value == undefined)) {
            var msg = 'All fields are mandatory';
            this.apiMessage(msg);
            // this.scrolldiv='1';
            this.scrollDivId = this.alldata.first_name.is_mandatory;
            setTimeout(function () {
                console.log("scroll to id***==", _this.scrollDivId);
                var yOffset = document.getElementById(_this.scrollDivId).offsetTop;
                _this.content.scrollTo(0, yOffset, 3000);
            }, 400);
            return false;
        }
        else if (this.alldata.middle_name.is_mandatory == true && (this.alldata.middle_name.value == '' ||
            this.alldata.middle_name.value == undefined)) {
            var msg = 'All fields are mandatory';
            this.apiMessage(msg);
            this.middle_namescrollDivId = this.alldata.middle_name.is_mandatory;
            setTimeout(function () {
                console.log("scroll to id***==", _this.middle_namescrollDivId);
                var yOffset = document.getElementById(_this.middle_namescrollDivId).offsetTop;
                _this.content.scrollTo(0, yOffset, 3000);
            }, 400);
            return false;
        }
        else if (this.alldata.last_name.is_mandatory == true && (this.alldata.last_name.value == '' ||
            this.alldata.last_name.value == undefined)) {
            var msg = 'All fields are mandatory';
            this.apiMessage(msg);
            this.last_namescrollDivId = this.alldata.last_name.is_mandatory;
            setTimeout(function () {
                console.log("scroll to id***==", _this.last_namescrollDivId);
                var yOffset = document.getElementById(_this.last_namescrollDivId).offsetTop;
                _this.content.scrollTo(0, yOffset, 3000);
            }, 400);
            return false;
        }
        else if (this.alldata.date_of_birth.is_mandatory == true && (this.alldata.date_of_birth.value == '' ||
            this.alldata.date_of_birth.value == undefined)) {
            var msg = 'All fields are mandatory';
            this.apiMessage(msg);
            this.date_of_birthscrollDivId = this.alldata.date_of_birth.is_mandatory;
            setTimeout(function () {
                console.log("scroll to id***==", _this.date_of_birthscrollDivId);
                var yOffset = document.getElementById(_this.date_of_birthscrollDivId).offsetTop;
                _this.content.scrollTo(0, yOffset, 3000);
            }, 400);
            return false;
        }
        else if (this.alldata.complete_address.is_mandatory == true && (this.alldata.complete_address.value == '' ||
            this.alldata.complete_address.value == undefined)) {
            var msg = 'All fields are mandatory';
            this.apiMessage(msg);
            this.complete_addressscrollDivId = this.alldata.complete_address.is_mandatory;
            setTimeout(function () {
                console.log("scroll to id***==", _this.complete_addressscrollDivId);
                var yOffset = document.getElementById(_this.complete_addressscrollDivId).offsetTop;
                _this.content.scrollTo(0, yOffset, 3000);
            }, 400);
            return false;
        }
        else if (this.alldata.email_id.is_mandatory == true && (this.alldata.email_id.value == '' ||
            this.alldata.email_id.value == undefined)) {
            var msg = 'All fields are mandatory';
            this.apiMessage(msg);
            this.email_idscrollDivId = this.alldata.email_id.is_mandatory;
            setTimeout(function () {
                console.log("scroll to id***==", _this.email_idscrollDivId);
                var yOffset = document.getElementById(_this.email_idscrollDivId).offsetTop;
                _this.content.scrollTo(0, yOffset, 3000);
            }, 400);
            return false;
        }
        else if (this.alldata.contact.is_mandatory == true && (this.alldata.contact.value == '' ||
            this.alldata.contact.value == undefined)) {
            var msg = 'All fields are mandatory';
            this.apiMessage(msg);
            this.contactscrollDivId = this.alldata.contact.is_mandatory;
            setTimeout(function () {
                console.log("scroll to id***==", _this.contactscrollDivId);
                var yOffset = document.getElementById(_this.contactscrollDivId).offsetTop;
                _this.content.scrollTo(0, yOffset, 3000);
            }, 400);
            return false;
        }
        else if (this.alldata.emergency_contact_name.is_mandatory == true && (this.alldata.emergency_contact_name.value == '' ||
            this.alldata.emergency_contact_name.value == undefined)) {
            var msg = 'All fields are mandatory';
            this.apiMessage(msg);
            this.contact_namescrollDivId = this.alldata.emergency_contact_name.is_mandatory;
            setTimeout(function () {
                console.log("scroll to id***==", _this.contact_namescrollDivId);
                var yOffset = document.getElementById(_this.contact_namescrollDivId).offsetTop;
                _this.content.scrollTo(0, yOffset, 3000);
            }, 400);
            return false;
        }
        else if (this.alldata.emergency_contact.is_mandatory == true && (this.alldata.emergency_contact.value == '' ||
            this.alldata.emergency_contact.value == undefined)) {
            var msg = 'All fields are mandatory';
            this.apiMessage(msg);
            this.emergency_contactscrollDivId = this.alldata.emergency_contact.is_mandatory;
            setTimeout(function () {
                console.log("scroll to id***==", _this.emergency_contactscrollDivId);
                var yOffset = document.getElementById(_this.emergency_contactscrollDivId).offsetTop;
                _this.content.scrollTo(0, yOffset, 3000);
            }, 400);
            return false;
        }
        else if (this.alldata.work_location.is_mandatory == true && (this.alldata.work_location.value == '' ||
            this.alldata.work_location.value == undefined)) {
            var msg = 'All fields are mandatory';
            this.apiMessage(msg);
            this.work_locationscrollDivId = this.alldata.work_location.is_mandatory;
            setTimeout(function () {
                console.log("scroll to id***==", _this.work_locationscrollDivId);
                var yOffset = document.getElementById(_this.work_locationscrollDivId).offsetTop;
                _this.content.scrollTo(0, yOffset, 3000);
            }, 400);
            return false;
        }
        else if (this.alldata.location_authorized_for_work.is_mandatory == true && (this.usauth == '' ||
            this.usauth == undefined)) {
            var msg = 'All fields are mandatory';
            this.apiMessage(msg);
            this.location_authorized_for_work = this.alldata.location_authorized_for_work.is_mandatory;
            setTimeout(function () {
                console.log("scroll to id***==", _this.location_authorized_for_work);
                var yOffset = document.getElementById(_this.location_authorized_for_work).offsetTop;
                _this.content.scrollTo(0, yOffset, 3000);
            }, 400);
            return false;
        }
        else {
            this.submitform(btnkey);
        }
    };
    UsnewjoineeformPage.prototype.submitform = function (btnkey) {
        var _this = this;
        var url = "";
        if (this.previousdata.country_id == 8) {
            url = "Onboarding_Forms_Apis/canada_forms/submit_joiner_form_data.php";
        }
        else {
            url = "Onboarding_Forms_Apis/usa_forms/submit_joiner_form_data.php";
        }
        this.btnkey = btnkey;
        if (this.btnkey == 1) {
            this.submit_type = 'submit';
        }
        else {
            this.submit_type = 'save';
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
                "form_id": _this.previousdata.form_id,
                "emergency_contact_name": _this.alldata.emergency_contact_name.value,
                "emergency_contact": _this.alldata.emergency_contact.value,
                "work_location": _this.alldata.work_location.value,
                "location": (_this.usauth == 1) ? 'true' : 'false',
                "submit_type": _this.submit_type,
                "complete_address": _this.alldata.complete_address.value
            };
            _this.apiServices.us_canada(url, apiKey, _this.login_token).subscribe(function (res) {
                console.log('tnc res==', res);
                _this.loading.dismiss();
                if (res.success == 1) {
                    _this.apiMessage(res.message);
                    _this.navCtrl.pop();
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], UsnewjoineeformPage.prototype, "content", void 0);
    UsnewjoineeformPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-usnewjoineeform',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/onboarding_forms/US/usnewjoineeform/usnewjoineeform.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding class="commonFormDiv">\n  <div [ngClass]="{\'newOverlay\':form_status != \'enable\'}">\n    <div class="WebFormDiv">\n      <div class="newCardDiv">\n        <div class="newHeading">\n          <h4 no-margin>{{title}}</h4>\n        </div>\n        <div class="customCardDiv">\n          <ion-row>\n            <ion-col col-12>\n              <div class="headingDiv">\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row [id]="scrollDivId">\n            <ion-col col-12>\n              <div class="inputDiv">\n                <ion-label>First Name\n                  <sup *ngIf="alldata?.first_name.is_mandatory" class="redText">*</sup>\n                  <i *ngIf="alldata?.first_name.hint_applicable" [tooltip]="alldata?.first_name.hint" positionV="top"\n                    arrow=\'true\'>\n                    <ion-icon ios="ios-information-circle" md="md-information-circle"></ion-icon>\n                  </i>\n                </ion-label>\n                <ion-input [ngClass]="{\'redborder\':scrollDivId,\'overlayDiv\':!alldata?.first_name.is_enable}" type="text" [disabled]="!alldata?.first_name.is_enable" name="{{alldata?.first_name.value}}"\n                  [(ngModel)]="alldata?.first_name.value" placeholder=""></ion-input>\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row [id]="middle_namescrollDivId">\n            <ion-col col-12>\n              <div class="inputDiv">\n                <ion-label>MIddle Name\n                  <sup *ngIf="alldata?.middle_name.is_mandatory" class="redText">*</sup>\n                  <i *ngIf="alldata?.middle_name.hint_applicable" [tooltip]="alldata?.middle_name.hint" positionV="top"\n                    arrow=\'true\'>\n                    <ion-icon ios="ios-information-circle" md="md-information-circle"></ion-icon>\n                  </i>\n                </ion-label>\n                <ion-input type="text" [ngClass]="{\'redborder\':middle_namescrollDivId,\'overlayDiv\':!alldata?.middle_name.is_enable}" [disabled]="!alldata?.middle_name.is_enable" name="{{alldata?.middle_name.value}}"\n                  [(ngModel)]="alldata?.middle_name.value" placeholder=""></ion-input>\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row [id]="last_namescrollDivId">\n            <ion-col col-12>\n              <div class="inputDiv">\n                <ion-label>Last Name\n                  <sup *ngIf="alldata?.last_name.is_mandatory" class="redText">*</sup>\n                  <i *ngIf="alldata?.last_name.hint_applicable" [tooltip]="alldata?.last_name.hint" positionV="top"\n                    arrow=\'true\'>\n                    <ion-icon ios="ios-information-circle" md="md-information-circle"></ion-icon>\n                  </i>\n                </ion-label>\n                <ion-input type="text" [ngClass]="{\'redborder\':last_namescrollDivId,\'overlayDiv\':!alldata?.last_name.is_enable}" [disabled]="!alldata?.last_name.is_enable" name="{{alldata?.last_name.value}}"\n                  [(ngModel)]="alldata?.last_name.value" placeholder=""></ion-input>\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row [id]="date_of_birthscrollDivId">\n            <ion-col col-12>\n              <div class="inputDiv">\n                <ion-label>Date of Birth\n                  <sup *ngIf="alldata?.date_of_birth.is_mandatory" class="redText">*</sup>\n                  <i *ngIf="alldata?.date_of_birth.hint_applicable" [tooltip]="alldata?.date_of_birth.hint" positionV="top"\n                    arrow=\'true\'>\n                    <ion-icon ios="ios-information-circle" md="md-information-circle"></ion-icon>\n                  </i>\n                </ion-label>\n                <ion-datetime type="text" pickerFormat="DD/MMM/YYYY" [ngClass]="{\'redborder\':date_of_birthscrollDivId,\'overlayDiv\':!alldata?.date_of_birth.is_enable}" [disabled]="!alldata?.date_of_birth.is_enable"\n                  name="{{alldata?.date_of_birth.value}}" [(ngModel)]="alldata?.date_of_birth.value"></ion-datetime>\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row [id]="complete_addressscrollDivId">\n            <ion-col col-12>\n              <div class="inputDiv">\n                <ion-label>Address\n                  <sup *ngIf="alldata?.complete_address.is_mandatory" class="redText">*</sup>\n                  <i *ngIf="alldata?.complete_address.hint_applicable" [tooltip]="alldata?.complete_address.hint"\n                    positionV="top" arrow=\'true\'>\n                    <ion-icon ios="ios-information-circle" md="md-information-circle"></ion-icon>\n                  </i>\n                </ion-label>\n                <ion-textarea type="text" [ngClass]="{\'redborder\':complete_addressscrollDivId,\'overlayDiv\':!alldata?.complete_address.is_enable}" [disabled]="!alldata?.complete_address.is_enable"\n                  name="{{alldata?.complete_address.value}}" [(ngModel)]="alldata?.complete_address.value" placeholder=""></ion-textarea>\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row [id]="email_idscrollDivId">\n            <ion-col col-12>\n              <div class="inputDiv">\n                <ion-label>E-mail ID\n                  <sup *ngIf="alldata?.email_id.is_mandatory" class="redText">*</sup>\n                  <i *ngIf="alldata?.email_id.hint_applicable" [tooltip]="alldata?.email_id.hint" positionV="top"\n                    arrow=\'true\'>\n                    <ion-icon ios="ios-information-circle" md="md-information-circle"></ion-icon>\n                  </i>\n                </ion-label>\n                <ion-input type="text" [ngClass]="{\'redborder\':email_idscrollDivId,\'overlayDiv\':!alldata?.email_id.is_enable}" [disabled]="!alldata?.email_id.is_enable" name="{{alldata?.email_id.value}}"\n                  [(ngModel)]="alldata?.email_id.value" placeholder="Enter E-mail Id"></ion-input>\n              </div>\n            </ion-col>\n          </ion-row>\n\n          <ion-row [id]="contactscrollDivId">\n            <ion-col col-12>\n              <div class="inputDiv">\n                <ion-label>Phone No.\n                  <sup *ngIf="alldata?.contact.is_mandatory" class="redText">*</sup>\n                  <i *ngIf="alldata?.contact.hint_applicable" [tooltip]="alldata?.contact.hint" positionV="top" arrow=\'true\'>\n                    <ion-icon ios="ios-information-circle" md="md-information-circle"></ion-icon>\n                  </i>\n                </ion-label>\n                <ion-input type="text" [ngClass]="{\'redborder\':contactscrollDivId,\'overlayDiv\':!alldata?.contact.is_enable}" [disabled]="!alldata?.contact.is_enable" name="{{alldata?.contact.value}}"\n                  [(ngModel)]="alldata?.contact.value" placeholder=""></ion-input>\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row [id]="contact_namescrollDivId">\n            <ion-col col-12>\n              <div class="inputDiv">\n                <ion-label>Emergency Contact Name\n                  <sup *ngIf="alldata?.emergency_contact_name.is_mandatory" class="redText">*</sup>\n                  <i *ngIf="alldata?.emergency_contact_name.hint_applicable" [tooltip]="alldata?.emergency_contact_name.hint"\n                    positionV="top" arrow=\'true\'>\n                    <ion-icon ios="ios-information-circle" md="md-information-circle"></ion-icon>\n                  </i>\n                </ion-label>\n                <ion-input type="text" [ngClass]="{\'redborder\':contact_namescrollDivId,\'overlayDiv\':!alldata?.emergency_contact_name.is_enable}" [disabled]="!alldata?.emergency_contact_name.is_enable"\n                  name="{{alldata?.emergency_contact_name.value}}" [(ngModel)]="alldata?.emergency_contact_name.value" placeholder=""></ion-input>\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row [id]="emergency_contactscrollDivId">\n            <ion-col col-12>\n              <div class="inputDiv">\n                <ion-label>Emergency Contact Phone Number\n                  <sup *ngIf="alldata?.emergency_contact.is_mandatory" class="redText">*</sup>\n                  <i *ngIf="alldata?.emergency_contact.hint_applicable" [tooltip]="alldata?.emergency_contact.hint"\n                    positionV="top" arrow=\'true\'>\n                    <ion-icon ios="ios-information-circle" md="md-information-circle"></ion-icon>\n                  </i>\n                </ion-label>\n                <ion-input type="text" [ngClass]="{\'redborder\':emergency_contactscrollDivId,\'overlayDiv\':!alldata?.emergency_contact.is_enable}" [disabled]="!alldata?.emergency_contact.is_enable"\n                  name="{{alldata?.emergency_contact.value}}" [(ngModel)]="alldata?.emergency_contact.value" placeholder=""></ion-input>\n              </div>\n            </ion-col>\n          </ion-row>\n\n          <ion-row [id]="work_locationscrollDivId">\n            <ion-col col-12>\n              <div class="inputDiv">\n                <ion-label>Work Location\n                  <sup *ngIf="alldata?.work_location.is_mandatory" class="redText">*</sup>\n                  <i *ngIf="alldata?.work_location.hint_applicable" [tooltip]="alldata?.work_location.hint" positionV="top"\n                    arrow=\'true\'>\n                    <ion-icon ios="ios-information-circle" md="md-information-circle"></ion-icon>\n                  </i>\n                </ion-label>\n                <ion-input type="text" [ngClass]="{\'redborder\':work_locationscrollDivId,\'overlayDiv\':!alldata?.work_location.is_enable}" [disabled]="!alldata?.work_location.is_enable"\n                  name="{{alldata?.work_location.value}}" [(ngModel)]="alldata?.work_location.value" placeholder=""></ion-input>\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12>\n              <div class="headingDiv">\n                <h4 no-margin>Are you authorized to work in {{ previousdata.country_id == \'7\' ? \'US\' : \'Canada\' }}?</h4>\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row [id]="location_authorized_for_work">\n            <ion-col col-12>\n              <div class="inputDiv">\n                <ion-label>Select\n                  <sup *ngIf="alldata?.location_authorized_for_work.is_mandatory" class="redText">*</sup>\n                  <i *ngIf="alldata?.location_authorized_for_work.hint_applicable" [tooltip]="alldata?.location_authorized_for_work.hint"\n                    positionV="top" arrow=\'true\'>\n                    <ion-icon ios="ios-information-circle" md="md-information-circle"></ion-icon>\n                  </i>\n                </ion-label>\n\n\n                <div [ngClass]="{\'checkBoxDiv\':!location_authorized_for_work,\'checkBoxDiv1\':location_authorized_for_work}">\n                  <ion-list radio-group no-margin [(ngModel)]="usauth">\n                    <ion-row>\n                      <ion-col *ngFor="let item of usAuthArray " col-6>\n                        <div class="customField" [ngClass]="{\'backred\':item.auto_id==usauth}">\n                            <label>\n                                <ion-radio [disabled]="!alldata?.location_authorized_for_work.is_enable" [value]="item.auto_id"></ion-radio>\n                                <small>{{ item.name }}</small>\n                              </label>\n                        </div>\n                      </ion-col>\n                    </ion-row>\n                  </ion-list>\n                </div>\n              \n                <!-- <ion-row *ngIf="value.userResponse==true" class="AnswerDiv">\n                  <ion-col col-5 (click)=checkfun(true,i,j,data)>\n                    <div text-center class="fillBg">\n                      <span>Yes</span>\n                    </div>\n                  </ion-col>\n                  <ion-col col-2></ion-col>\n                  <ion-col col-5 (click)=checkfun(false,i,j,data)>\n                    <div text-center class="emptyBg">\n                      <span>No</span>\n                    </div>\n                  </ion-col>\n                </ion-row>     -->\n\n              </div>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n      <br>\n      <ion-row *ngIf="form_status == \'enable\'">\n        <ion-col col-6 *ngIf="fill_status == \'0\'">\n          <div class="btndiv">\n            <button ion-button class="btn" (click)="submitform(0)">Save</button>\n          </div>\n        </ion-col>\n        <ion-col [attr.col-12]="fill_status == \'1\' ? \'\' : null" [attr.col-6]="fill_status == \'0\' ? \'\' : null">\n          <div *ngIf="fill_status==\'1\'" class="btndiv">\n            <button ion-button class="btn" (click)="submit(1)">Update</button>\n          </div>\n          <div *ngIf="fill_status==\'0\'" class="btndiv">\n            <button ion-button class="btn" (click)="submit(1)">Submit</button>\n          </div>\n        </ion-col>\n      </ion-row>\n      <br>\n    </div>\n\n  </div>\n</ion-content>'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/onboarding_forms/US/usnewjoineeform/usnewjoineeform.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], UsnewjoineeformPage);
    return UsnewjoineeformPage;
}());

//# sourceMappingURL=usnewjoineeform.js.map

/***/ }),

/***/ 822:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsnewjoineeformPageModule", function() { return UsnewjoineeformPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usnewjoineeform__ = __webpack_require__(1150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_tooltips__ = __webpack_require__(870);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UsnewjoineeformPageModule = /** @class */ (function () {
    function UsnewjoineeformPageModule() {
    }
    UsnewjoineeformPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__usnewjoineeform__["a" /* UsnewjoineeformPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__usnewjoineeform__["a" /* UsnewjoineeformPage */]), __WEBPACK_IMPORTED_MODULE_3_ionic_tooltips__["a" /* TooltipsModule */].forRoot()
            ],
        })
    ], UsnewjoineeformPageModule);
    return UsnewjoineeformPageModule;
}());

//# sourceMappingURL=usnewjoineeform.module.js.map

/***/ }),

/***/ 864:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipBox; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);


var TooltipBox = (function () {
    function TooltipBox(elementRef, rnd) {
        var _this = this;
        this.elementRef = elementRef;
        this.rnd = rnd;
        this.fadeState = 'invisible';
        this.init = new Promise(function (resolve) {
            _this.initResolve = resolve;
        });
    }
    Object.defineProperty(TooltipBox.prototype, "arrow", {
        set: function (side) {
            this.rnd.setAttribute(this.getNativeElement(), 'class', 'has-arrow ' + 'arrow-' + side);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipBox.prototype, "posTop", {
        set: function (val) {
            this.rnd.setStyle(this.getNativeElement(), 'top', val + 'px');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipBox.prototype, "posLeft", {
        set: function (val) {
            this.rnd.setStyle(this.getNativeElement(), 'left', val + 'px');
        },
        enumerable: true,
        configurable: true
    });
    TooltipBox.prototype.getNativeElement = function () {
        return this.elementRef.nativeElement;
    };
    TooltipBox.prototype.ngAfterViewInit = function () {
        this.initResolve();
    };
    TooltipBox.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */], args: [{
                    selector: 'tooltip-box',
                    template: "\n    <div *ngIf=\"tooltipHtml; else txt\" [innerHTML]=\"tooltipHtml\"></div>\n    <ng-template #txt>{{ text }}</ng-template>\n  ",
                    animations: [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('fade', [
                            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('visible', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 1 })),
                            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('invisible', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 0 })),
                            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('visible <=> invisible', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms linear')),
                        ]),
                    ],
                    styles: [
                        "\n          :host {\n              background-color: rgba(0, 0, 0, 0.8);\n              color: white;\n              display: inline-block;\n              position: fixed;\n              padding: 15px 25px;\n              font-size: 15px;\n          }\n    ",
                        "\n          :host.has-arrow:before {\n              content: '';\n              border: 5px solid transparent;\n              position: absolute;\n              width: 0;\n              height: 0;\n          }\n    ",
                        ':host.has-arrow.arrow-top:before { border-bottom: 5px solid rgba(0,0,0,0.8); top: -10px; }',
                        ':host.has-arrow.arrow-left:before { border-right: 5px solid rgba(0,0,0,0.8); left: -10px; }',
                        ':host.has-arrow.arrow-right:before { border-left: 5px solid rgba(0,0,0,0.8); right: -10px; }',
                        ':host.has-arrow.arrow-bottom:before { border-top: 5px solid rgba(0,0,0,0.8); bottom: -10px; }',
                    ],
                    changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* ChangeDetectionStrategy */].OnPush,
                },] },
    ];
    /** @nocollapse */
    TooltipBox.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* ElementRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["W" /* Renderer2 */], },
    ]; };
    TooltipBox.propDecorators = {
        "fadeState": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* HostBinding */], args: ['@fade',] },],
        "text": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */] },],
        "tooltipHtml": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */] },],
        "arrow": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */] },],
        "posTop": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */] },],
        "posLeft": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */] },],
    };
    return TooltipBox;
}());

//# sourceMappingURL=tooltip-box.component.js.map

/***/ }),

/***/ 865:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);

var TooltipController = (function () {
    function TooltipController() {
        this.allowMultiple = true;
        this.activeTooltips = [];
    }
    TooltipController.prototype.addTooltip = function (instance) {
        if (instance.hideOthers || !this.allowMultiple && this.activeTooltips.length > 0) {
            this.hideAll();
        }
        this.activeTooltips.push(instance);
    };
    TooltipController.prototype.removeTooltip = function (instance) {
        this.activeTooltips.splice(this.activeTooltips.indexOf(instance), 1);
    };
    TooltipController.prototype.hideAll = function () {
        this.activeTooltips.forEach(function (tooltip) {
            tooltip.removeTooltip();
        });
    };
    TooltipController.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
    ];
    return TooltipController;
}());

//# sourceMappingURL=tooltip.cotroller.js.map

/***/ }),

/***/ 866:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tooltip; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tooltip_box_component__ = __webpack_require__(864);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tooltip_cotroller__ = __webpack_require__(865);




var Tooltip = (function () {
    function Tooltip(el, appRef, platform, _componentFactoryResolver, tooltipCtrl) {
        this.el = el;
        this.appRef = appRef;
        this.platform = platform;
        this._componentFactoryResolver = _componentFactoryResolver;
        this.tooltipCtrl = tooltipCtrl;
        this.mobileEvent = 'press';
        this.desktopEvent = 'hover';
        this.duration = 3000;
        this._arrow = false;
        this._navTooltip = false;
        this._canShow = true;
        this._active = false;
    }
    Object.defineProperty(Tooltip.prototype, "navTooltip", {
        get: function () {
            return this._navTooltip;
        },
        set: function (val) {
            this._navTooltip = typeof val !== 'boolean' || val !== false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tooltip.prototype, "arrow", {
        get: function () {
            return this._arrow;
        },
        set: function (val) {
            this._arrow = typeof val !== 'boolean' || val !== false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tooltip.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (val) {
            this._active = typeof val !== 'boolean' || val !== false;
            this._active ? this.canShow && this.showTooltip() : this.removeTooltip();
        },
        enumerable: true,
        configurable: true
    });
    Tooltip.prototype.ngAfterViewInit = function () {
        // Show the tooltip immediately after initiating view if set to
        if (this._active) {
            this.trigger();
        }
    };
    Tooltip.prototype.ngOnInit = function () {
        // Set default event type by platform if event is not defined
        if (!this.event) {
            this.event = this.platform.is('mobile') ? this.mobileEvent : this.desktopEvent;
        }
    };
    Object.defineProperty(Tooltip.prototype, "canShow", {
        /**
         * @return {boolean} TRUE if the tooltip can be shown
         */
        get: /**
           * @return {boolean} TRUE if the tooltip can be shown
           */
        function () {
            return this._canShow && ((typeof this.tooltip === 'string' && this.tooltip !== '') || (typeof this.tooltipHtml === 'string' && this.tooltipHtml !== ''));
        },
        /**
         * Set the canShow property
         * Ensure that tooltip is shown only if the tooltip string is not falsey
         */
        set: /**
           * Set the canShow property
           * Ensure that tooltip is shown only if the tooltip string is not falsey
           */
        function (show) {
            this._canShow = show;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Handles the click/press event and shows a tooltip.
     * If a tooltip already exists, it will just reset it's timer.
     */
    /**
       * Handles the click/press event and shows a tooltip.
       * If a tooltip already exists, it will just reset it's timer.
       */
    Tooltip.prototype.trigger = /**
       * Handles the click/press event and shows a tooltip.
       * If a tooltip already exists, it will just reset it's timer.
       */
    function () {
        if (!this.canShow) {
            return;
        }
        if (this.tooltipElement) {
            this._resetTimer();
        }
        else {
            this.showTooltip();
        }
    };
    /**
     * Creates a new tooltip component and adjusts it's properties to show properly.
     */
    /**
       * Creates a new tooltip component and adjusts it's properties to show properly.
       */
    Tooltip.prototype.showTooltip = /**
       * Creates a new tooltip component and adjusts it's properties to show properly.
       */
    function () {
        var _this = this;
        this._createTooltipComponent();
        var tooltipComponent = this.tooltipElement.instance;
        tooltipComponent.text = this.tooltip;
        tooltipComponent.tooltipHtml = this.tooltipHtml;
        tooltipComponent.init.then(function () {
            var tooltipPosition = _this._getTooltipPosition();
            tooltipComponent.posLeft = tooltipPosition.left;
            tooltipComponent.posTop = tooltipPosition.top;
            tooltipComponent.fadeState = 'visible';
            if (_this.arrow) {
                var arrowPosition = void 0;
                if (_this.positionV === 'top') {
                    arrowPosition = 'bottom';
                }
                else if (_this.positionV === 'bottom') {
                    arrowPosition = 'top';
                }
                else if (_this.positionH === 'left') {
                    arrowPosition = 'right';
                }
                else {
                    arrowPosition = 'left';
                }
                tooltipComponent.arrow = arrowPosition;
            }
            if (!_this._active) {
                _this.tooltipTimeout = setTimeout(_this.removeTooltip.bind(_this), _this.duration);
            }
        });
    };
    Tooltip.prototype.onClick = function () {
        if (this.event === 'click') {
            this.trigger();
        }
    };
    Tooltip.prototype.onPress = function () {
        if (this.event === 'press') {
            this.trigger();
        }
    };
    Tooltip.prototype.onMouseEnter = function () {
        if (this.event === 'hover') {
            this.active = true;
        }
    };
    Tooltip.prototype.onMouseLeave = function () {
        if (this.event === 'hover') {
            this.active = false;
        }
    };
    Tooltip.prototype._createTooltipComponent = function () {
        var viewport = this.appRef.components[0]._component
            ._viewport, componentFactory = this._componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_2__tooltip_box_component__["a" /* TooltipBox */]);
        this.tooltipElement = viewport.createComponent(componentFactory);
        this.tooltipCtrl.addTooltip(this);
    };
    Tooltip.prototype._getTooltipPosition = function () {
        var tooltipNativeElement = this.tooltipElement.instance.getNativeElement(), el = this.el.nativeElement, rect = el.getBoundingClientRect();
        var positionLeft, positionTop, spacing = 10;
        if (this.navTooltip) {
            this.positionV = 'bottom';
            this.arrow = false;
            spacing = 20;
        }
        if (this.positionH === 'right') {
            positionLeft = rect.right + spacing;
        }
        else if (this.positionH === 'left') {
            positionLeft = rect.left - spacing - tooltipNativeElement.offsetWidth;
        }
        else if (this.navTooltip) {
            positionLeft = rect.left + el.offsetWidth / 2;
        }
        else {
            positionLeft = rect.left;
        }
        if (this.positionV === 'top') {
            positionTop = rect.top - spacing - tooltipNativeElement.offsetHeight;
        }
        else if (this.positionV === 'bottom') {
            positionTop = rect.bottom + spacing;
        }
        else {
            positionTop =
                rect.top + el.offsetHeight / 2 - tooltipNativeElement.offsetHeight / 2;
        }
        if (+this.topOffset) {
            positionTop += +this.topOffset;
        }
        if (+this.leftOffset) {
            positionLeft += +this.leftOffset;
        }
        if (positionLeft + tooltipNativeElement.offsetWidth + spacing >
            this.platform.width()) {
            positionLeft =
                this.platform.width() - tooltipNativeElement.offsetWidth - spacing;
        }
        else if (positionLeft + tooltipNativeElement.offsetWidth - spacing < 0) {
            positionLeft = spacing;
        }
        if (positionTop + tooltipNativeElement.offsetHeight + spacing > this.platform.height()) {
            positionTop = this.platform.height() - tooltipNativeElement.offsetHeight - spacing;
        }
        else if (positionTop + tooltipNativeElement.offsetHeight - spacing < 0) {
            positionTop = spacing;
        }
        return {
            left: positionLeft,
            top: positionTop,
        };
    };
    Tooltip.prototype.removeTooltip = function () {
        var _this = this;
        if (!this.tooltipElement) {
            this.tooltipElement = undefined;
            this.tooltipTimeout = undefined;
            return;
        }
        this.tooltipElement.instance.fadeState = 'invisible';
        this.canShow = false;
        // wait for animation to finish then clear everything out
        setTimeout(function () {
            if (_this.tooltipElement &&
                typeof _this.tooltipElement.destroy === 'function') {
                _this.tooltipElement.destroy();
            }
            _this.tooltipCtrl.removeTooltip(_this);
            _this.tooltipElement = _this.tooltipTimeout = undefined;
            _this.canShow = true;
        }, 300);
    };
    Tooltip.prototype._resetTimer = function () {
        var _this = this;
        clearTimeout(this.tooltipTimeout);
        this.tooltipTimeout = setTimeout(function () {
            _this.active = false;
        }, this.duration);
    };
    Tooltip.prototype.ngOnDestroy = function () {
        // if the timer hasn't expired or active is true when the component gets destroyed, the tooltip will remain in the DOM
        // this removes it
        this.removeTooltip();
    };
    Tooltip.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */], args: [{
                    selector: '[tooltip]',
                },] },
    ];
    /** @nocollapse */
    Tooltip.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ComponentFactoryResolver */], },
        { type: __WEBPACK_IMPORTED_MODULE_3__tooltip_cotroller__["a" /* TooltipController */], },
    ]; };
    Tooltip.propDecorators = {
        "tooltipHtml": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        "tooltip": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        "positionV": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        "positionH": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        "event": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        "mobileEvent": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        "desktopEvent": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        "topOffset": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        "leftOffset": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        "hideOthers": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        "navTooltip": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        "arrow": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        "duration": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        "active": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        "onClick": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */], args: ['click',] },],
        "onPress": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */], args: ['press',] },],
        "onMouseEnter": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */], args: ['mouseenter',] },],
        "onMouseLeave": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */], args: ['mouseleave',] },],
    };
    return Tooltip;
}());

//# sourceMappingURL=tooltip.directive.js.map

/***/ }),

/***/ 870:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tooltip_box_component__ = __webpack_require__(864);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tooltip_directive__ = __webpack_require__(866);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tooltips_module__ = __webpack_require__(871);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__tooltips_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tooltip_cotroller__ = __webpack_require__(865);
/* unused harmony namespace reexport */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 871:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tooltip_cotroller__ = __webpack_require__(865);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tooltip_box_component__ = __webpack_require__(864);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tooltip_directive__ = __webpack_require__(866);





var TooltipsModule = (function () {
    function TooltipsModule() {
    }
    TooltipsModule.forRoot = function () {
        return {
            ngModule: TooltipsModule,
            providers: [__WEBPACK_IMPORTED_MODULE_2__tooltip_cotroller__["a" /* TooltipController */]]
        };
    };
    TooltipsModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */], args: [{
                    entryComponents: [__WEBPACK_IMPORTED_MODULE_3__tooltip_box_component__["a" /* TooltipBox */]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_4__tooltip_directive__["a" /* Tooltip */], __WEBPACK_IMPORTED_MODULE_3__tooltip_box_component__["a" /* TooltipBox */]],
                    imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicModule */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_4__tooltip_directive__["a" /* Tooltip */]]
                },] },
    ];
    return TooltipsModule;
}());

//# sourceMappingURL=tooltips.module.js.map

/***/ })

});
//# sourceMappingURL=29.js.map
webpackJsonp([28],{

/***/ 1098:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChinaemergencycontactPage; });
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
 * Generated class for the ChinaemergencycontactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChinaemergencycontactPage = /** @class */ (function () {
    function ChinaemergencycontactPage(alertCtrl, platform, menu, loadingCtrl, toastCtrl, storage, apiServices, navCtrl, navParams, iab) {
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
        this.alldata = [];
        this.formarr = [];
        this.editArray = [];
        this.previousdata = this.navParams.get('data');
        this.title = this.previousdata.form_name;
        this.form_status = this.previousdata.form_status;
        var obj = { "CPerson": '', "Cnumber": '', "drpdata": '', "cAddress": '' };
        this.storage.get('login_token').then(function (data) { _this.login_token = data; });
        this.storage.get('employeeId').then(function (data) { _this.employeeId = data; });
        this.emergency_fetch();
    }
    ChinaemergencycontactPage.prototype.formcreate = function () {
        var _this = this;
        this.classkey = 1;
        this.buttomtxtcheck = '1';
        this.buttomtxt = 'Save';
        this.form_auto_id = "";
        this.editArray = [
            {
                "CPerson": "",
                "Cnumber": "",
                "drpdata": '',
                "cAddress": "",
                "CPersontooltip": "",
                "Cnumbertooltip": "",
                "drpdatatooltip": "",
                "cAddresstooltip": "",
                "CPersonhintapplicable": "",
                "Cnumberhintapplicable": "",
                "drpdatahintapplicable": "",
                "cAddresshintapplicable": "",
            }
        ];
        setTimeout(function () {
            _this.content.scrollToBottom(0);
        }, 400);
        //  let obj={"CPerson":'',"Cnumber":'',"drpdata":'',"cAddress":''}
        // this.formarr.push(obj);
    };
    ChinaemergencycontactPage.prototype.emergency_fetch = function () {
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
                "form_id": _this.previousdata.form_id,
            };
            _this.apiServices.get_emergency_contact(apiKey, _this.login_token).subscribe(function (res) {
                console.log('tnc res==', res);
                _this.loading.dismiss();
                if (res.success == 1) {
                    _this.alldata = res.data.emergency;
                    _this.btncheck = res.fill_status;
                    _this.buttomtxtcheck = res.button_text;
                    if (_this.buttomtxtcheck == '2') {
                        _this.buttomtxt = 'Submit';
                    }
                    // else{
                    // }
                    _this.first_attempt = res.first_attempt;
                    console.log('succ');
                    _this.dropdownlist();
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
    ChinaemergencycontactPage.prototype.dropdownlist = function () {
        var _this = this;
        // this.commonLoader();
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            var apiKey = {
                "client_id": _this.apiServices.clientId,
                "employee_id": _this.employeeId,
                "device": _this.apiServices.device,
                "device_id": _this.deviceId,
                "app_version": _this.apiServices.appVersion,
                "form_id": _this.previousdata.form_id,
            };
            _this.apiServices.get_emergency_dropdown(apiKey, _this.login_token).subscribe(function (res) {
                console.log('tnc res==', res);
                // this.loading.dismiss();
                if (res.success == 1) {
                    _this.dropdown_data = res.data.relationship;
                    console.log('succ');
                    // for(let i=0;i<this.alldata.length;i++){
                    //   this.formobj={"CPerson":this.alldata[i].emg_contact_name,
                    //   "Cnumber":this.alldata[i].emg_contact_number,"drpdata":'',"cAddress":this.alldata[i].emg_contact_address}
                    //   this.formarr.push(this.formobj);
                    // }
                }
                else {
                    _this.apiMessage(res.message);
                }
            }, function (err) {
                // this.loading.dismiss();
                console.log('err== ', err);
                _this.apiMessage(err);
            });
        });
    };
    //Common Loader:
    ChinaemergencycontactPage.prototype.commonLoader = function () {
        this.loading = this.loadingCtrl.create({
            enableBackdropDismiss: true,
            spinner: 'ios-small',
            content: 'Loading data...'
        });
        this.loading.present();
    };
    ChinaemergencycontactPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    ChinaemergencycontactPage.prototype.save = function () {
        var _this = this;
        console.log("this.formobj", this.editArray);
        console.log("this.formobj.length", this.editArray.length);
        console.log("this.formobj[x].CPerson", this.editArray[0].CPerson);
        var submitObj = {
            "emg_contact_name": this.editArray[0].CPerson,
            "emg_contact_relation": this.editArray[0].drpdata,
            "emg_contact_address": this.editArray[0].cAddress,
            "emg_contact_number": this.editArray[0].Cnumber
        };
        for (var x = 0; x < this.editArray.length; x++) {
            //  this.ansarray=[{""}] 
            if (this.editArray[x].CPerson == '' || this.editArray[x].CPerson == undefined) {
                console.log("this.formarr[x]", this.editArray[x]);
                this.classkey = x;
                this.msg = 'All fields are mandatory.';
                this.apiMessage(this.msg);
                return false;
            }
            else if (this.editArray[x].Cnumber == '' || this.editArray[x].Cnumber == undefined) {
                this.classkey = x;
                this.msg = 'All fields are mandatory.';
                this.apiMessage(this.msg);
                console.log("this.formarr[x]", this.editArray[x]);
                return false;
            }
            else if (this.editArray[x].drpdata == '' || this.editArray[x].drpdata == undefined) {
                this.classkey = x;
                this.msg = 'All fields are mandatory.';
                this.apiMessage(this.msg);
                console.log("this.formarr[x]", this.editArray[x]);
                return false;
            }
            else if (this.editArray[x].cAddress == '' || this.editArray[x].cAddress == undefined) {
                this.classkey = x;
                this.msg = 'All fields are mandatory.';
                this.apiMessage(this.msg);
                console.log("this.formarr[x]", this.editArray[x]);
                return false;
            }
            else {
                //call submit api
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
                        "data": submitObj,
                        "auto_id": _this.form_auto_id
                    };
                    _this.apiServices.get_emergency_save(apiKey, _this.login_token).subscribe(function (res) {
                        console.log('tnc res==', res);
                        _this.loading.dismiss();
                        if (res.success == 1) {
                            console.log('succ');
                            _this.apiMessage(res.message);
                            _this.alldata = [];
                            _this.editArray = [];
                            _this.emergency_fetch();
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
            }
        }
    };
    ChinaemergencycontactPage.prototype.editform = function (edit_data, k) {
        var _this = this;
        this.buttomtxtcheck = '1';
        this.buttomtxt = 'Update';
        this.form_auto_id = edit_data.auto_id;
        this.editArray = [
            {
                "CPerson": "",
                "Cnumber": "",
                "drpdata": '',
                "cAddress": "",
                "CPersontooltip": "",
                "Cnumbertooltip": "",
                "drpdatatooltip": "",
                "cAddresstooltip": "",
                "CPersonhintapplicable": "",
                "Cnumberhintapplicable": "",
                "drpdatahintapplicable": "",
                "cAddresshintapplicable": "",
            }
        ];
        // this.formobj={"CPerson":this.alldata[k].emg_contact_name,
        // "Cnumber":this.alldata[k].emg_contact_number,"drpdata":this.alldata[k].emg_contact_relation,"cAddress":this.alldata[k].emg_contact_address}
        // this.formarr.push(this.formobj); 
        this.editArray[0].CPerson = this.alldata[k].emg_contact_name.value;
        this.editArray[0].Cnumber = this.alldata[k].emg_contact_number.value;
        this.editArray[0].drpdata = this.alldata[k].emg_contact_relation.value;
        this.editArray[0].cAddress = this.alldata[k].emg_contact_address.value;
        this.editArray[0].CPersontooltip = this.alldata[k].emg_contact_name.hint;
        this.editArray[0].Cnumbertooltip = this.alldata[k].emg_contact_number.hint;
        this.editArray[0].drpdatatooltip = this.alldata[k].emg_contact_relation.hint;
        this.editArray[0].cAddresstooltip = this.alldata[k].emg_contact_address.hint;
        this.editArray[0].CPersonhintapplicable = this.alldata[k].emg_contact_name.hint_applicable;
        this.editArray[0].Cnumberhintapplicable = this.alldata[k].emg_contact_number.hint_applicable;
        this.editArray[0].drpdatahintapplicable = this.alldata[k].emg_contact_relation.hint_applicable;
        this.editArray[0].cAddresshintapplicable = this.alldata[k].emg_contact_address.hint_applicable;
        setTimeout(function () {
            _this.content.scrollToBottom(0);
        }, 400);
    };
    ChinaemergencycontactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChinaemergencycontactPage');
    };
    ChinaemergencycontactPage.prototype.deleteform = function () {
        this.editArray = [];
        if (this.alldata.length >= 1 && this.btncheck == 0 && this.first_attempt == 0) {
            this.buttomtxtcheck = '2';
            this.buttomtxt = 'Submit';
        }
        // if(this.btncheck==0 && this.first_attempt==){
        // }
    };
    ChinaemergencycontactPage.prototype.showConfirm = function (edit_data, ind) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            // title: 'Use this lightsaber?',
            message: 'Are you sure, you want to remove this data?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.deletecard(edit_data, ind);
                    }
                }
            ]
        });
        confirm.present();
    };
    ChinaemergencycontactPage.prototype.deletecard = function (edit_data, ind) {
        var _this = this;
        console.log('called clicked*****');
        this.form_auto_id = edit_data.auto_id;
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
                "auto_id": _this.form_auto_id,
                "card_len": _this.alldata.length
            };
            _this.apiServices.get_emergency_delete(apiKey, _this.login_token).subscribe(function (res) {
                console.log('tnc res==', res);
                _this.loading.dismiss();
                if (res.success == 1) {
                    _this.apiMessage(res.message);
                    // this.alldata=res.data.emergency;
                    // this.btncheck=res.fill_status;
                    // this.buttomtxt=res.button_text;
                    _this.alldata = [];
                    _this.emergency_fetch();
                    console.log('succ');
                    // this.dropdownlist();
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
    ChinaemergencycontactPage.prototype.submit = function () {
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
                "form_id": _this.previousdata.form_id,
                "content_id": "",
                "data_dump": _this.alldata
            };
            _this.apiServices.get_emergency_submit(apiKey, _this.login_token).subscribe(function (res) {
                console.log('tnc res==', res);
                _this.loading.dismiss();
                if (res.success == 1) {
                    _this.navCtrl.pop();
                    // this.alldata=res.data.emergency;
                    // this.btncheck=res.fill_status;
                    // this.buttomtxt=res.button_text;
                    // this.alldata=[];
                    // this.emergency_fetch();
                    console.log('succ');
                    // this.dropdownlist();
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], ChinaemergencycontactPage.prototype, "content", void 0);
    ChinaemergencycontactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chinaemergencycontact',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/onboarding_forms/china/chinaemergencycontact/chinaemergencycontact.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n<!-- *ngIf="btncheck==0" -->\n<ion-content>\n    <div *ngIf="btncheck==0" class="right" (click)=formcreate()>\n    <ion-row>\n      <ion-col col-12 text-right>\n          <button ion-button icon-end round  small class="mybtn">\n              Add Emergency Contact \n              <ion-icon name="ios-add-circle-outline"></ion-icon>\n            </button>\n      </ion-col>\n      <!-- <ion-col col-2></ion-col>\n      <ion-col col-8> <p class="add">Add Emergency Contact  <ion-icon name="ios-add-circle-outline" class="iconcss"></ion-icon></p></ion-col>\n      <ion-col col-2>   <ion-icon name="ios-add-circle-outline" class="iconcss"></ion-icon></ion-col> -->\n    </ion-row>\n\n  </div>\n\n\n  <div *ngIf="first_attempt!=1">\n  <div class="pageDiv" *ngFor="let data of alldata; let k= index;">\n      <ion-row class="numEmrRow">\n          <ion-col col-8 class="numEmrRowText">\n           {{k+1}}. Emergency Contact\n          </ion-col>\n          <ion-col col-2 class="colcss1" *ngIf="form_status==\'enable\'" (click)="editform(data,k)">\n            <div class="iconcss1">\n              <ion-icon name="ios-create-outline" class="iconcss"></ion-icon>\n            </div>\n          </ion-col>\n          <ion-col col-2 class="colcss1" *ngIf="form_status==\'enable\'" (click)="showConfirm(data,k)">\n            <div class="iconcss1">\n              <ion-icon name="ios-trash-outline" class="iconcss"></ion-icon>\n            </div>\n          </ion-col>\n        </ion-row>\n    <div class="customCardDiv">\n     \n   \n\n      <!-- <p class="para">Emergency Contact</p> -->\n      <ion-row class="bod_bot">\n        \n          <ion-col col-6> <p class="para2">Name</p></ion-col>\n          <ion-col col-6><p class="para3">{{data.emg_contact_name.value}}</p></ion-col>\n      </ion-row>\n      <ion-row class="bod_bot">\n          <ion-col col-6> <p class="para2">Address</p></ion-col>\n          <ion-col col-6> <p class="para3">{{data.emg_contact_address.value}}</p></ion-col>\n      </ion-row>\n      <ion-row class="bod_bot">\n          <ion-col col-6><p class="para2">Contact Number</p></ion-col>\n          <ion-col col-6> <p class="para3">{{data.emg_contact_number.value}}</p></ion-col>\n      </ion-row>\n      <ion-row class="bod_bot">\n          <ion-col col-6><p class="para2">Relationship</p></ion-col>\n          <ion-col col-6> <p class="para3">{{data.emg_contact_relation.value}}</p></ion-col>\n      </ion-row>\n     \n\n    </div>\n  </div>\n\n</div>\n\n\n\n    <div class="pageDiv"  *ngFor="let data of editArray; let j= index;">\n        <div class="customCardDiv">\n          <div class="right" (click)="deleteform()">\n            <ion-icon name="ios-close-circle-outline" class="closeBTN"></ion-icon>\n          </div>\n          <p class="para">Emergency Contact Form</p>\n        <!-- <p>{{data.CPersontooltip}}</p> -->\n          <ion-row>\n            <ion-col col-12>\n                 \n                <!-- <ion-item class="onboardingIonItems">\n                  \n                  <ion-label stacked>Contact Person \n                      <i *ngIf="data.CPersonhintapplicable" [tooltip]="data.CPersontooltip" positionV="top" arrow=\'true\'>  \n                        <ion-icon ios="ios-information-circle" md="md-information-circle"></ion-icon></i>\n                        <sup class="redText">*</sup>\n                      </ion-label>\n                      <ion-input type="text" name="{{data.CPerson}}"  [(ngModel)]="data.CPerson" class="onboardingInputField"\n                      [ngClass]="{\'onboardingInputFieldRED\':((data.CPerson.length<=0) && (classkey==0)), \'onboardingInputField\': ((data.CPerson.length>=1) && (classkey!=0)) || data.CPerson.length<=0 || ((data.CPerson.length>=1) && (classkey==0))}"\n                      ></ion-input>\n                </ion-item> -->\n            \n                <div class="my_relativeDIV"> \n                   <p> Contact Person<sup class="redText">*</sup> \n                            <i *ngIf="data.CPersonhintapplicable" [tooltip]="data.CPersontooltip" positionV="top" arrow=\'true\'>  \n                              <ion-icon ios="ios-information-circle" md="md-information-circle"></ion-icon></i>\n                              \n                            </p>\n                            <ion-item class="onboardingIonItems">\n                            <ion-input type="text" name="{{data.CPerson}}"  [(ngModel)]="data.CPerson" class="onboardingInputField"\n                            [ngClass]="{\'onboardingInputFieldRED\':((data.CPerson.length<=0) && (classkey==0)), \'onboardingInputField\': ((data.CPerson.length>=1) && (classkey!=0)) || data.CPerson.length<=0 || ((data.CPerson.length>=1) && (classkey==0))}"\n                            ></ion-input>\n                          </ion-item>\n                </div>\n              <!-- <div  \n              [ngClass]="{\'redBorder\':((data.CPerson.length<=0) && (classkey==0)), \'inputDiv\': ((data.CPerson.length>=1) && (classkey!=0)) || data.CPerson.length<=0 || ((data.CPerson.length>=1) && (classkey==0))}"\n              >\n              \n                <ion-label>Contact Person <i *ngIf="data.CPersonhintapplicable" [tooltip]="data.CPersontooltip" positionV="top" arrow=\'true\'>  \n                  <ion-icon ios="ios-information-circle" md="md-information-circle"></ion-icon></i>\n                  <sup class="redText">*</sup>\n                </ion-label>\n                <ion-input type="text" name="{{data.CPerson}}"  [(ngModel)]="data.CPerson"></ion-input>\n              </div> -->\n            </ion-col>\n          </ion-row>\n    \n           <ion-row>\n              <ion-col col-12>\n                  \n                  <!-- <ion-item class="onboardingIonItems">\n                      <ion-label stacked>Relationship <sup class="redText">*</sup>\n                        <i *ngIf="data.drpdatahintapplicable" [tooltip]="data.drpdatatooltip" positionV="top" arrow=\'true\'>  \n                            <ion-icon ios="ios-information-circle" md="md-information-circle"></ion-icon></i>\n                      </ion-label>\n                      \n                        <ion-select [(ngModel)]="data.drpdata" placeholder="--Select--" \n                        [ngClass]="{\'onboardingInputFieldRED\':((data.drpdata.length<=0) && (classkey==0)), \'onboardingInputField\': ((data.drpdata.length>=1) && (classkey!=0)) || data.drpdata.length<=0 || ((data.drpdata.length>=1) && (classkey==0))}"\n                        >\n                          <ion-option *ngFor="let relationdata of dropdown_data;" [value]="relationdata.relation">{{relationdata.relation}}</ion-option>\n                        </ion-select>\n                      \n                  </ion-item> -->\n                  <div class="my_relativeDIV"> \n                      <p>Relationship<sup class="redText">*</sup>\n                        <i *ngIf="data.drpdatahintapplicable" [tooltip]="data.drpdatatooltip" positionV="top" arrow=\'true\'>  \n                            <ion-icon ios="ios-information-circle" md="md-information-circle"></ion-icon></i>\n                    </p>\n                    \n                    <ion-select [(ngModel)]="data.drpdata" placeholder="Select relationship" class="rel_selectbox"\n                    [ngClass]="{\'onboardingInputFieldRED\':((data.drpdata.length<=0) && (classkey==0)), \'onboardingInputField\': ((data.drpdata.length>=1) && (classkey!=0)) || data.drpdata.length<=0 || ((data.drpdata.length>=1) && (classkey==0))}"\n                    >\n                      <ion-option *ngFor="let relationdata of dropdown_data;" [value]="relationdata.relation">{{relationdata.relation}}</ion-option>\n                    </ion-select>\n                      </div>\n\n                <!-- <div    [ngClass]="{\'inputDiv4\':((data.drpdata.length<=0) && (classkey==0)), \'inputDiv1\': ((data.drpdata.length>=1) && (classkey!=0)) || data.drpdata.length<=0 || ((data.drpdata.length>=1) && (classkey==0))}">\n                  <ion-label>Relationship <i *ngIf="data.drpdatahintapplicable" [tooltip]="data.drpdatatooltip" positionV="top" arrow=\'true\'>  \n                      <ion-icon ios="ios-information-circle" md="md-information-circle"></ion-icon></i>\n                    <sup class="redText">*</sup>\n                  </ion-label>\n                  <ion-item style="background-color: transparent;">\n                    <ion-label stacked>--Select--<sup>*</sup>\n                    </ion-label>\n                    <ion-select [(ngModel)]="data.drpdata" placeholder="--Select--">\n                      <ion-option *ngFor="let relationdata of dropdown_data;" [value]="relationdata.relation">{{relationdata.relation}}</ion-option>\n                    </ion-select>\n                  </ion-item>\n                </div> -->\n              </ion-col>\n            </ion-row> \n          \n          <ion-row>\n            <ion-col col-12>\n                <!-- <ion-item class="onboardingIonItems">\n                    <ion-label stacked>Contact number <i  *ngIf="data.Cnumberhintapplicable"  [tooltip]="data.Cnumbertooltip" positionV="top" arrow=\'true\'>  \n                        <ion-icon ios="ios-information-circle" md="md-information-circle"></ion-icon></i>\n                      <sup class="redText">*</sup>\n                    </ion-label>\n                    <ion-input type="number" name="data.Cnumber" [(ngModel)]="data.Cnumber" class="onboardingInputField"\n                    [ngClass]="{\'onboardingInputFieldRED\':((data.Cnumber.length<=0) && (classkey==0)), \'onboardingInputField\': ((data.Cnumber.length>=1) && (classkey!=0)) || data.Cnumber.length>=1|| data.Cnumber.length==0}"   \n                    ></ion-input>\n                </ion-item> -->\n                <div class="my_relativeDIV"> \n                    <p>Contact number<sup class="redText">*</sup> <i  *ngIf="data.Cnumberhintapplicable"  [tooltip]="data.Cnumbertooltip" positionV="top" arrow=\'true\'>  \n                            <ion-icon ios="ios-information-circle" md="md-information-circle"></ion-icon></i>                          \n                    </p>\n                    <ion-item class="onboardingIonItems">\n                    <ion-input type="number" name="data.Cnumber" [(ngModel)]="data.Cnumber" class="onboardingInputField"\n                    [ngClass]="{\'onboardingInputFieldRED\':((data.Cnumber.length<=0) && (classkey==0)), \'onboardingInputField\': ((data.Cnumber.length>=1) && (classkey!=0)) || data.Cnumber.length>=1|| data.Cnumber.length==0}"   \n                    ></ion-input>\n                    </ion-item>\n                    </div>\n\n              <!-- <div \n              [ngClass]="{\'redBorder\':((data.Cnumber.length<=0) && (classkey==0)), \'inputDiv\': ((data.Cnumber.length>=1) && (classkey!=0)) || data.Cnumber.length>=1|| data.Cnumber.length==0}"            \n              >\n                <ion-label>Contact number <i  *ngIf="data.Cnumberhintapplicable"  [tooltip]="data.Cnumbertooltip" positionV="top" arrow=\'true\'>  \n                    <ion-icon ios="ios-information-circle" md="md-information-circle"></ion-icon></i>\n                  <sup class="redText">*</sup>\n                </ion-label>\n                <ion-input type="number" name="data.Cnumber" [(ngModel)]="data.Cnumber" ></ion-input>\n              </div> -->\n            </ion-col>\n          </ion-row>\n         \n          <ion-row>\n              <ion-col col-12>\n                  <!-- <ion-item class="onboardingIonItems">\n\n                      <ion-label stacked>Current Address <i *ngIf="data.cAddresshintapplicable" [tooltip]="data.cAddresstooltip" positionV="top" arrow=\'true\'>  \n                          <ion-icon ios="ios-information-circle" md="md-information-circle"></ion-icon></i>\n                        <sup class="redText">*</sup>\n                      </ion-label>\n                      <ion-textarea type="text" name="data.cAddress" [(ngModel)]="data.cAddress"  class="custom-class-text" id="comment" rows="2" [ngClass]="{\'onboardingInputFieldRED\':((data.cAddress.length<=0) && (classkey==0)), \'onboardingInputField\': ((data.cAddress.length>=1) && (classkey!=0)) || data.cAddress.length>=1 || data.cAddress.length==0 }" ></ion-textarea>\n                  </ion-item> -->\n                  <div class="my_relativeDIV"> \n                      <p>Current Address<sup class="redText">*</sup> <i *ngIf="data.cAddresshintapplicable" [tooltip]="data.cAddresstooltip" positionV="top" arrow=\'true\'>  \n                          <ion-icon ios="ios-information-circle" md="md-information-circle"></ion-icon></i>\n                        </p>\n                        <ion-item class="onboardingIonItems">\n                        <ion-textarea type="text" name="data.cAddress" [(ngModel)]="data.cAddress"  class="custom-class-text" id="comment" rows="2" [ngClass]="{\'onboardingInputFieldRED\':((data.cAddress.length<=0) && (classkey==0)), \'onboardingInputField\': ((data.cAddress.length>=1) && (classkey!=0)) || data.cAddress.length>=1 || data.cAddress.length==0 }" ></ion-textarea>\n                        </ion-item>\n                  </div>\n                <!-- <div\n                [ngClass]="{\'redBorder\':((data.cAddress.length<=0) && (classkey==0)), \'inputDiv\': ((data.cAddress.length>=1) && (classkey!=0)) || data.cAddress.length>=1 || data.cAddress.length==0 }"            \n                \n                >\n                  <ion-label>Current Address <i *ngIf="data.cAddresshintapplicable" [tooltip]="data.cAddresstooltip" positionV="top" arrow=\'true\'>  \n                      <ion-icon ios="ios-information-circle" md="md-information-circle"></ion-icon></i>\n                    <sup class="redText">*</sup>\n                  </ion-label>\n                  <ion-textarea type="text" name="data.cAddress" [(ngModel)]="data.cAddress"  class="custom-class-text" id="comment" rows="2"></ion-textarea>\n                </div> -->\n              </ion-col>\n            </ion-row>\n        </div>\n\n\n        <div class="btndiv" *ngIf="buttomtxtcheck==\'1\' && form_status==\'enable\'">\n            <button ion-button class="btn" (click)="save()">{{buttomtxt}}</button>\n          </div>\n\n      </div>\n    \n      \n      <div class="btndiv" *ngIf="buttomtxtcheck==\'2\' && form_status==\'enable\'">\n        <button ion-button class="btn" (click)="submit()">{{buttomtxt}}</button>\n      </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/onboarding_forms/china/chinaemergencycontact/chinaemergencycontact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], ChinaemergencycontactPage);
    return ChinaemergencycontactPage;
}());

//# sourceMappingURL=chinaemergencycontact.js.map

/***/ }),

/***/ 792:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChinaemergencycontactPageModule", function() { return ChinaemergencycontactPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chinaemergencycontact__ = __webpack_require__(1098);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_tooltips__ = __webpack_require__(870);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
var ChinaemergencycontactPageModule = /** @class */ (function () {
    function ChinaemergencycontactPageModule() {
    }
    ChinaemergencycontactPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chinaemergencycontact__["a" /* ChinaemergencycontactPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chinaemergencycontact__["a" /* ChinaemergencycontactPage */]), __WEBPACK_IMPORTED_MODULE_3_ionic_tooltips__["a" /* TooltipsModule */].forRoot()
                // BrowserAnimationsModule
            ],
        })
    ], ChinaemergencycontactPageModule);
    return ChinaemergencycontactPageModule;
}());

//# sourceMappingURL=chinaemergencycontact.module.js.map

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
//# sourceMappingURL=28.js.map
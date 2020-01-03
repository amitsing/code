webpackJsonp([31],{

/***/ 1108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EpfNominationPage; });
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




var EpfNominationPage = /** @class */ (function () {
    function EpfNominationPage(alertCtrl, platform, menu, loadingCtrl, toastCtrl, storage, apiServices, navCtrl, navParams, zone) {
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
        this.zone = zone;
        this.isSubmit = true;
        this.allData = [];
        this.editArray = [];
        this.data = this.navParams.get('data');
        this.title = this.data.form_name;
        this.form_id = this.data.form_id;
        this.buttomtxt = 'Submit';
        this.form_status = this.data.form_status;
        this.storage.get('login_token').then(function (data) { _this.login_token = data; });
        this.storage.get('employeeId').then(function (data) { _this.employeeId = data; });
        console.log("test");
        this.gform();
    }
    EpfNominationPage.prototype.gform = function () {
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
            _this.apiServices.India_get_EPfForm(apiKey, _this.login_token).subscribe(function (res) {
                console.log('tnc res==', res);
                _this.loading.dismiss();
                if (res.success == 1) {
                    _this.first_attempt = res.first_attempt;
                    _this.allData = res.data.epfData;
                    _this.userDetail = res.data.userDetail;
                    _this.part_B = res.data.part_B;
                    _this.part_A = res.data.part_A;
                    _this.minerage = res.data.minor_age;
                    _this.fill_status = res.fill_status;
                    console.log('new***this.part_B== ', _this.part_B.title);
                    console.log('succ1', res.data);
                    console.log('new***== ', _this.allData);
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
    //Common Loader:
    EpfNominationPage.prototype.commonLoader = function () {
        this.loading = this.loadingCtrl.create({
            enableBackdropDismiss: true,
            spinner: 'ios-small',
            content: 'Loading data...'
        });
        this.loading.present();
    };
    EpfNominationPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 4000
        });
        toast.present();
    };
    EpfNominationPage.prototype.formcreate = function () {
        var _this = this;
        this.isSubmit = false;
        this.is_minor = '0';
        this.showgdiv = 0;
        // this.classkey=1;
        this.buttomtxtcheck = '1';
        // this.buttomtxt='Save';
        // this.form_auto_id="";
        this.editArray = [
            {
                "Address": "",
                "dob": "",
                "minor_address": '',
                "minor_name": "",
                "minor_rel": "",
                "nominee_name": "",
                "nominee_relation": "",
                "provident_fund": "",
                "Address_is_mandatory": true,
                "dob_is_mandatory": true,
                "minor_address_is_mandatory": true,
                "minor_name_is_mandatory": true,
                "minor_rel_is_mandatory": true,
                "nominee_name_is_mandatory": true,
                "nominee_relation_is_mandatory": true,
                "provident_fund_is_mandatory": true,
                "alldataindex": null
            }
        ];
        setTimeout(function () {
            _this.scrollDivId = '1';
            var yOffset = document.getElementById(_this.scrollDivId).offsetTop;
            _this.content.scrollTo(0, yOffset, 3000);
            // this.content.scrollToBottom(0)
        }, 400);
        //  let obj={"CPerson":'',"Cnumber":'',"drpdata":'',"cAddress":''}
        // this.formarr.push(obj);
    };
    EpfNominationPage.prototype.editform = function (edit_data, k) {
        var _this = this;
        this.isSubmit = false;
        this.buttomtxtcheck = '2';
        // this.buttomtxt='Update';
        this.form_auto_id = edit_data.auto_id;
        this.is_minor = edit_data.is_minor;
        this.isMiinor = edit_data.is_minor;
        this.editArray = [
            {
                "Address": "",
                "dob": "",
                "minor_address": '',
                "minor_name": "",
                "minor_rel": "",
                "nominee_name": "",
                "nominee_relation": "",
                "provident_fund": "",
                "Address_is_mandatory": null,
                "dob_is_mandatory": null,
                "minor_address_is_mandatory": null,
                "minor_name_is_mandatory": null,
                "minor_rel_is_mandatory": null,
                "nominee_name_is_mandatory": null,
                "nominee_relation_is_mandatory": null,
                "provident_fund_is_mandatory": null,
                "alldataindex": k
                // "CPersontooltip":"",
                // "Cnumbertooltip":"",
                // "drpdatatooltip":"",
                // "cAddresstooltip":"",
                // "CPersonhintapplicable":"",
                // "Cnumberhintapplicable":"",
                // "drpdatahintapplicable":"",
                // "cAddresshintapplicable":"",
            }
        ];
        // this.formobj={"CPerson":this.alldata[k].emg_contact_name,
        // "Cnumber":this.alldata[k].emg_contact_number,"drpdata":this.alldata[k].emg_contact_relation,"cAddress":this.alldata[k].emg_contact_address}
        // this.formarr.push(this.formobj); 
        this.editArray[0].Address = this.allData[k].address.value;
        this.editArray[0].dob = this.allData[k].dob.value;
        this.editArray[0].minor_address = this.allData[k].minor_address.value;
        this.editArray[0].minor_name = this.allData[k].minor_name.value;
        this.editArray[0].minor_rel = this.allData[k].minor_rel.value;
        this.editArray[0].nominee_name = this.allData[k].nominee_name.value;
        this.editArray[0].nominee_relation = this.allData[k].nominee_relation.value;
        this.editArray[0].provident_fund = this.allData[k].provident_fund.value;
        this.editArray[0].Address_is_mandatory = this.allData[k].address.is_mandatory;
        this.editArray[0].dob_is_mandatory = this.allData[k].dob.is_mandatory;
        this.editArray[0].minor_address_is_mandatory = this.allData[k].minor_address.is_mandatory;
        this.editArray[0].minor_name_is_mandatory = this.allData[k].minor_name.is_mandatory;
        this.editArray[0].minor_rel_is_mandatory = this.allData[k].minor_rel.is_mandatory;
        this.editArray[0].nominee_name_is_mandatory = this.allData[k].nominee_name.is_mandatory;
        this.editArray[0].nominee_relation_is_mandatory = this.allData[k].nominee_relation.is_mandatory;
        this.editArray[0].provident_fund_is_mandatory = this.allData[k].provident_fund.is_mandatory;
        this.editArray[0].Address_is_mandatory_hint = this.allData[k].address.hint;
        this.editArray[0].dob_is_mandatory_hint = this.allData[k].dob.hint;
        this.editArray[0].minor_address_is_mandatory_hint = this.allData[k].minor_address.hint;
        this.editArray[0].minor_name_is_mandatory_hint = this.allData[k].minor_name.hint;
        this.editArray[0].minor_rel_is_mandatory_hint = this.allData[k].minor_rel.hint;
        this.editArray[0].nominee_name_is_mandatory_hint = this.allData[k].nominee_name.hint;
        this.editArray[0].nominee_relation_is_mandatory_hint = this.allData[k].nominee_relation.hint;
        this.editArray[0].provident_fund_is_mandatory_hint = this.allData[k].provident_fund.hint;
        this.editArray[0].Address_is_mandatory_hint_applicable = this.allData[k].address.hint_applicable;
        this.editArray[0].dob_is_mandatory_hint_applicable = this.allData[k].dob.hint_applicable;
        this.editArray[0].minor_address_is_mandatory_hint_applicable = this.allData[k].minor_address.hint_applicable;
        this.editArray[0].minor_name_is_mandatory_hint_applicable = this.allData[k].minor_name.hint_applicable;
        this.editArray[0].minor_rel_is_mandatory_hint_applicable = this.allData[k].minor_rel.hint_applicable;
        this.editArray[0].nominee_name_is_mandatory_hint_applicable = this.allData[k].nominee_name.hint_applicable;
        this.editArray[0].nominee_relation_is_mandatory_hint_applicable = this.allData[k].nominee_relation.hint_applicable;
        this.editArray[0].provident_fund_is_mandatory_hint_applicable = this.allData[k].provident_fund.hint_applicable;
        console.log("this.editArray", this.editArray);
        setTimeout(function () {
            _this.scrollDivId = '1';
            var yOffset = document.getElementById(_this.scrollDivId).offsetTop;
            _this.content.scrollTo(0, yOffset, 3000);
        }, 400);
    };
    EpfNominationPage.prototype.deleteform = function () {
        this.isSubmit = true;
        this.editArray = [];
        if (this.allData.length >= 1 && (this.first_attempt == 0)) {
            // this.buttomtxtcheck='2';
            this.buttomtxt = 'Submit';
        }
        // if(this.btncheck==0 && this.first_attempt==){
        // }
    };
    EpfNominationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EpfNominationPage');
    };
    EpfNominationPage.prototype.dateChanged = function () {
        console.log("date", this.editArray[0].dob);
        this.showgdiv = 0;
        this.isMiinor = 0;
        var previousYear = new Date(this.editArray[0].dob);
        var currentYear = new Date();
        this.currentage = currentYear.getFullYear() - previousYear.getFullYear();
        if (this.currentage <= this.minerage) {
            this.showgdiv = 1;
            this.isMiinor = 1;
        }
        console.log(currentYear.getFullYear() - previousYear.getFullYear());
    };
    EpfNominationPage.prototype.fun = function (keyforhit) {
        var _this = this;
        this.isSubmit = true;
        console.log("this.formobj", keyforhit);
        console.log("this.this.allData", this.allData);
        console.log("this.formobj", this.editArray[0].provident_fund);
        console.log("this.formobj.length", this.editArray.length);
        if (keyforhit == 0) {
            this.allData[this.editArray[0].alldataindex].provident_fund.value = this.editArray[0].provident_fund;
        }
        // console.log("this.formobj.length", this.allData[this.editArray[0].alldataindex].provident_fund.value);
        this.pfId = false;
        this.nAddress = false;
        this.rdob = false;
        this.nomineename = false;
        this.rnominee_relation = false;
        this.rprovident_fund = false;
        this.rminor_address = false;
        this.rminor_name = false;
        this.rminor_rel = false;
        this.epfcount = 0;
        this.totalepfcount = 0;
        for (var count = 0; count < this.allData.length; count++) {
            this.epfcount = this.epfcount + parseInt(this.allData[count].provident_fund.value);
        }
        if (this.userDetail.pf_number.is_mandatory && (this.userDetail.pf_number.value == ''
            || this.userDetail.pf_number.value == undefined)) {
            this.pfId = this.userDetail.pf_number.is_mandatory;
            this.msg = 'All fields are mandatory.';
            this.apiMessage(this.msg);
            setTimeout(function () {
                var yOffset = document.getElementById(_this.pfId).offsetTop;
                _this.content.scrollTo(0, yOffset, 3000);
            }, 400);
            return false;
        }
        // console.log("this.formobj[x].CPerson",this.editArray[0].CPerson);
        console.log("this.editArray111", this.editArray);
        console.log("this.epfcount", this.epfcount);
        for (var x = 0; x < this.editArray.length; x++) {
            if (keyforhit == 1) {
                this.epfcount = parseInt(this.editArray[x].provident_fund) + this.epfcount;
            }
            console.log("this.totalepfcount", this.totalepfcount);
            console.log("this.editArray", this.editArray);
            //  this.ansarray=[{""}] 
            if (this.editArray[x].Address_is_mandatory &&
                (this.editArray[x].Address == '' || this.editArray[x].Address == undefined)) {
                console.log("this.formarr[x]", this.editArray[x]);
                //  this.classkey=x;
                this.msg = 'All fields are mandatory.';
                this.apiMessage(this.msg);
                this.nAddress = this.editArray[x].Address_is_mandatory;
                return false;
            }
            else if (this.editArray[x].dob_is_mandatory &&
                (this.editArray[x].dob == '' || this.editArray[x].dob == undefined)) {
                // this.classkey=x;
                this.msg = 'All fields are mandatory.';
                this.apiMessage(this.msg);
                this.rdob = this.editArray[x].dob_is_mandatory;
                console.log("this.formarr[x]", this.editArray[x]);
                return false;
            }
            else if (this.editArray[x].nominee_name_is_mandatory &&
                (this.editArray[x].nominee_name == '' || this.editArray[x].nominee_name == undefined)) {
                // this.classkey=x;
                // setTimeout(() => {
                // }, 300);
                this.msg = 'All fields are mandatory.';
                this.apiMessage(this.msg);
                console.log("this.formarr[x]", this.editArray[x].nominee_name_is_mandatory);
                // this.zone.run(() => { 
                this.nomineename = this.editArray[x].nominee_name_is_mandatory;
                console.log("this.formarr[x]", this.nomineename);
                // })
                return false;
            }
            else if (this.editArray[x].nominee_relation_is_mandatory &&
                (this.editArray[x].nominee_relation == '' || this.editArray[x].nominee_relation == undefined)) {
                // this.classkey=x
                this.msg = 'All fields are mandatory.';
                this.apiMessage(this.msg);
                console.log("this.formarr[x]", this.editArray[x]);
                this.rnominee_relation = this.editArray[x].nominee_relation_is_mandatory;
                return false;
            }
            else if (this.editArray[x].provident_fund_is_mandatory &&
                (this.editArray[x].provident_fund == '' || this.editArray[x].provident_fund == undefined
                    || this.editArray[x].provident_fund == 0 || this.editArray[x].provident_fund == '0')) {
                // this.classkey=x;
                this.msg = 'All fields are mandatory.';
                this.apiMessage(this.msg);
                console.log("this.formarr[x]", this.editArray[x]);
                this.rprovident_fund = this.editArray[x].provident_fund_is_mandatory;
                return false;
            }
            else if (this.epfcount > 100) {
                this.msg = 'Funds should  be  100.';
                this.apiMessage(this.msg);
                this.rprovident_fund = this.editArray[x].provident_fund_is_mandatory;
            }
            else if ((this.is_minor == '1' || this.showgdiv == 1) &&
                (this.editArray[x].minor_address == '' || this.editArray[x].minor_address == undefined)) {
                this.msg = 'All fields are mandatory.';
                this.apiMessage(this.msg);
                console.log("this.formarr[x]", this.editArray[x]);
                this.rminor_address = this.editArray[x].minor_address_is_mandatory;
                return false;
            }
            else if ((this.is_minor == '1' || this.showgdiv == 1) &&
                (this.editArray[x].minor_name == '' || this.editArray[x].minor_name == undefined)) {
                this.msg = 'All fields are mandatory.';
                this.apiMessage(this.msg);
                console.log("this.formarr[x]", this.editArray[x]);
                this.rminor_name = this.editArray[x].minor_name_is_mandatory;
                return false;
            }
            else if ((this.is_minor == '1' || this.showgdiv == 1) &&
                (this.editArray[x].minor_rel == '' || this.editArray[x].minor_rel == undefined)) {
                this.msg = 'All fields are mandatory.';
                this.apiMessage(this.msg);
                console.log("this.formarr[x]", this.editArray[x]);
                this.rminor_rel = this.editArray[x].minor_rel_is_mandatory;
                return false;
            }
            else if (keyforhit == 1 && this.allData.length == 2 && this.epfcount != 100) {
                this.msg = 'Funds should  be  100.';
                this.apiMessage(this.msg);
                this.rprovident_fund = this.editArray[x].provident_fund_is_mandatory;
            }
            else if (keyforhit == 0 && this.allData.length == 3 && this.epfcount != 100) {
                this.msg = 'Funds should  be  100.';
                this.apiMessage(this.msg);
                this.rprovident_fund = this.editArray[x].provident_fund_is_mandatory;
            }
            else {
                //call submit api
                // alert(keyforhit);
                this.submitObj = {
                    "nominee_name": this.editArray[0].nominee_name,
                    "address": this.editArray[0].Address,
                    "nominee_relation": this.editArray[0].nominee_relation,
                    "dob": this.editArray[0].dob,
                    "provident_fund": this.editArray[0].provident_fund,
                    "is_minor": this.isMiinor,
                    "minor_name": this.editArray[0].minor_name,
                    "minor_rel": this.editArray[0].minor_rel,
                    "minor_address": this.editArray[0].minor_address
                };
                console.log("this.submitObj", this.submitObj);
                if (keyforhit == 0) {
                    this.update();
                }
                else {
                    this.save();
                }
            }
        }
    };
    EpfNominationPage.prototype.update = function () {
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
                "form_id": _this.form_id,
                "data": _this.submitObj,
                "auto_id": _this.form_auto_id,
                "account_number": _this.userDetail.pf_number.value
            };
            _this.apiServices.India_EPfForm_update(apiKey, _this.login_token).subscribe(function (res) {
                console.log('tnc res==', res);
                _this.loading.dismiss();
                if (res.success == 1) {
                    console.log('succ');
                    _this.apiMessage(res.message);
                    _this.allData = [];
                    _this.editArray = [];
                    _this.gform();
                    // this.emergency_fetch();
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
    EpfNominationPage.prototype.save = function () {
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
                "form_id": _this.form_id,
                "data": _this.submitObj,
                "account_number": _this.userDetail.pf_number.value
                // "auto_id":this.form_auto_id
            };
            _this.apiServices.India_EPfForm_save(apiKey, _this.login_token).subscribe(function (res) {
                console.log('tnc res==', res);
                _this.loading.dismiss();
                if (res.success == 1) {
                    console.log('succ');
                    _this.apiMessage(res.message);
                    _this.allData = [];
                    _this.editArray = [];
                    _this.gform();
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
    EpfNominationPage.prototype.showConfirm = function (edit_data, ind) {
        var _this = this;
        if (this.allData.length != 1) {
            var confirm_1 = this.alertCtrl.create({
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
            confirm_1.present();
        }
        else {
            this.apiMessage('Please edit information insted of deleting.');
        }
    };
    EpfNominationPage.prototype.deletecard = function (edit_data, ind) {
        var _this = this;
        this.isSubmit = true;
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
                "form_id": _this.form_id,
                "auto_id": _this.form_auto_id,
                "card_len": _this.allData.length
            };
            _this.apiServices.India_EPfForm_delete(apiKey, _this.login_token).subscribe(function (res) {
                console.log('tnc res==', res);
                _this.loading.dismiss();
                if (res.success == 1) {
                    _this.apiMessage(res.message);
                    // this.alldata=res.data.emergency;
                    // this.btncheck=res.fill_status;
                    // this.buttomtxt=res.button_text;
                    _this.editArray = [];
                    _this.allData = [];
                    _this.gform();
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
    EpfNominationPage.prototype.submit = function () {
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
                "form_id": _this.form_id,
                "content_id": "",
                "data_dump": _this.allData
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
    ], EpfNominationPage.prototype, "content", void 0);
    EpfNominationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-epf-nomination',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/onboarding_forms/India/epf-nomination/epf-nomination.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>EPF Nomination</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="commonFormDiv">\n\n    <div [ngClass]="{\'newOverlay\':form_status != \'enable\'}"> \n\n    <!-- <div  *ngIf="allData?.length<3" class="right" (click)=formcreate()>\n        <ion-row>\n          <ion-col col-12 text-right>\n              <button ion-button icon-end round  small class="mybtn">\n                  Add Nominee\n                  <ion-icon name="ios-add-circle-outline"></ion-icon>\n                </button>\n          </ion-col>\n        </ion-row>\n    \n      </div> -->\n\n  <div class="WebFormDiv">\n\n    <div class="newCardDiv">\n      <div class="newHeading" [innerHTML]="part_A?.title">\n   \n      </div>\n      <div class="customCardDiv">\n\n        <ion-row>\n          <ion-col col-12>\n            <div class="headingDiv" [innerHTML]="part_A?.description">\n      \n            </div>\n            <div [innerHTML]="part_A?.footer"></div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12>\n            <div class="inputDiv">\n              <ion-label>Marital Status\n                <sup class="redText">*</sup>\n              </ion-label>\n              <!-- <ion-select placeholder="Select One" interface ="popover">\n                <ion-option value="Married">Married</ion-option>\n                <ion-option value="Unmarried">Unmarried</ion-option>\n                <ion-option value="Widow">Widow</ion-option>\n                <ion-option value="Widower">Widower</ion-option>\n                <ion-option value="Divorcee">Divorcee</ion-option>\n              </ion-select> -->\n              <ion-input  type="text" [disabled]="!userDetail?.marital_status.is_enable" name="{{userDetail?.marital_status.value}}"\n                [(ngModel)]="userDetail?.marital_status.value" placeholder=""></ion-input>\n\n\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row [id]="pfId">\n          <ion-col col-12>\n            <div class="inputDiv">\n              <ion-label>Account No.\n                <sup class="redText">*</sup>\n              </ion-label>\n              <!-- <ion-input type="text" placeholder="Enter Account Number"></ion-input> -->\n              <ion-input [ngClass]="{\'redborder\':pfId}" type="text" [disabled]="!userDetail?.pf_number.is_enable" name="{{userDetail?.pf_number.value}}"\n                [(ngModel)]="userDetail?.pf_number.value" placeholder=""></ion-input>\n            </div>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n\n    <div  *ngIf="allData?.length<3" class="right" (click)=formcreate()>\n        <ion-row>\n          <ion-col col-12 text-right>\n              <button ion-button icon-end round  small class="mybtn">\n                  Add Nominee\n                  <ion-icon name="ios-add-circle-outline"></ion-icon>\n                </button>\n          </ion-col>\n        </ion-row>\n    \n      </div>\n\n    <div *ngIf="first_attempt!=1">\n      <div class="pageDiv" *ngFor="let data of allData; let k= index;">\n        <ion-row class="numEmrRow">\n          <ion-col col-8 class="numEmrRowText">\n            Nominee Details\n          </ion-col>\n          <ion-col col-2 class="colcss1" *ngIf="form_status==\'enable\'" (click)="editform(data,k)">\n            <div class="iconcss1">\n              <ion-icon name="ios-create-outline" class="iconcss"></ion-icon>\n            </div>\n          </ion-col>\n          <ion-col col-2 class="colcss1" *ngIf="form_status==\'enable\'" (click)="showConfirm(data,k)">\n            <div class="iconcss1">\n              <ion-icon name="ios-trash-outline" class="iconcss"></ion-icon>\n            </div>\n          </ion-col>\n        </ion-row>\n        <div class="customCardDiv">\n\n\n          <!-- <p class="para">Emergency Contact</p> -->\n          <ion-row class="bod_bot">\n\n            <ion-col col-6>\n              <p class="para2">Address</p>\n            </ion-col>\n            <ion-col col-6>\n              <p class="para3">{{data.address.value}}</p>\n            </ion-col>\n          </ion-row>\n          <ion-row class="bod_bot">\n            <ion-col col-6>\n              <p class="para2">Date Of Birth</p>\n            </ion-col>\n            <ion-col col-6>\n              <p class="para3">{{data.dob.value}}</p>\n            </ion-col>\n          </ion-row>\n          <ion-row class="bod_bot" *ngIf="data.is_minor==\'1\'">\n            <ion-col col-6>\n              <p class="para2">Guardian Address</p>\n            </ion-col>\n            <ion-col col-6>\n              <p class="para3">{{data.minor_address.value}}</p>\n            </ion-col>\n          </ion-row>\n          <ion-row class="bod_bot" *ngIf="data.is_minor==\'1\'">\n            <ion-col col-6>\n              <p class="para2">Guardian Name</p>\n            </ion-col>\n            <ion-col col-6>\n              <p class="para3">{{data.minor_name.value}}</p>\n            </ion-col>\n          </ion-row>\n          <ion-row class="bod_bot" *ngIf="data.is_minor==\'1\'">\n            <ion-col col-6>\n              <p class="para2">Guardian relation</p>\n            </ion-col>\n            <ion-col col-6>\n              <p class="para3">{{data.minor_rel.value}}</p>\n            </ion-col>\n          </ion-row>\n          <ion-row class="bod_bot">\n            <ion-col col-6>\n              <p class="para2">Nominee Name</p>\n            </ion-col>\n            <ion-col col-6>\n              <p class="para3">{{data.nominee_name.value}}</p>\n            </ion-col>\n          </ion-row>\n          <ion-row class="bod_bot">\n            <ion-col col-6>\n              <p class="para2">Nominee relation</p>\n            </ion-col>\n            <ion-col col-6>\n              <p class="para3">{{data.nominee_relation.value}}</p>\n            </ion-col>\n          </ion-row>\n          <ion-row class="bod_bot">\n            <ion-col col-6>\n              <p class="para2">Share in PF </p>\n            </ion-col>\n            <ion-col col-6>\n              <p class="para3">{{data.provident_fund.value}}&nbsp;%</p>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n\n    </div>\n\n\n\n    <div [id]="\'1\'" class="pageDiv" *ngFor="let data of editArray; let j= index;">\n      <div class="customCardDiv">\n        <div class="right" (click)="deleteform()">\n          <ion-icon name="ios-close-circle-outline" class="closeBTN"></ion-icon>\n        </div>\n        <p class="para"></p>\n        <!-- <p>{{data.CPersontooltip}}</p> -->\n        <ion-row >\n          <ion-col col-12>\n            <div class="my_relativeDIV">\n              <p> Name Of Nominee \n                <sup class="redText">*</sup>\n                <i *ngIf="data?.nominee_name_is_mandatory_hint_applicable" [tooltip]="data?.nominee_name_is_mandatory_hint" positionV="top" arrow=\'true\'>  \n                    <ion-icon ios="ios-information-circle" md="md-information-circle"></ion-icon></i>\n              </p>\n              <ion-item class="onboardingIonItems">\n                <ion-input type="text" class="onboardingInputField"\n                [ngClass]="{\'redborder\':nomineename}" name="{{data.nominee_name}}" [(ngModel)]="data.nominee_name" ></ion-input>\n              </ion-item>\n            </div>\n          </ion-col>\n        </ion-row>\n\n\n\n        <ion-row>\n          <ion-col col-12>\n            <div class="my_relativeDIV">\n              <p> Address Of Nominee\n                <sup class="redText">*</sup>\n                <i *ngIf="data?.Address_is_mandatory_hint_applicable" [tooltip]="data?.Address_is_mandatory_hint" positionV="top" arrow=\'true\'>  \n                    <ion-icon ios="ios-information-circle" md="md-information-circle"></ion-icon></i>\n\n              </p>\n              <ion-item class="onboardingIonItems">\n                <ion-input type="text" [ngClass]="{\'redborder\':nAddress}" name="{{data.Address}}" [(ngModel)]="data.Address" class="onboardingInputField"></ion-input>\n              </ion-item>\n            </div>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-12>\n            <div class="my_relativeDIV">\n              <p>Relation With Nominee\n                <sup class="redText">*</sup>\n                <i *ngIf="data?.nominee_relation_is_mandatory_hint_applicable" [tooltip]="data?.nominee_relation_is_mandatory_hint" positionV="top" arrow=\'true\'>  \n                    <ion-icon ios="ios-information-circle" md="md-information-circle"></ion-icon></i>\n              </p>\n              <ion-item class="onboardingIonItems">\n                <ion-input type="text" [ngClass]="{\'redborder\':rnominee_relation}" name="{{data.nominee_relation}}" [(ngModel)]="data.nominee_relation" class="onboardingInputField"></ion-input>\n              </ion-item>\n            </div>\n          </ion-col>\n        </ion-row>\n\n\n        <ion-row>\n          <ion-col col-12>\n            <div class="my_relativeDIV">\n              <p> Date Of Birth\n                <sup class="redText">*</sup>\n                <i *ngIf="data?.dob_is_mandatory_hint_applicable" [tooltip]="data?.dob_is_mandatory_hint" positionV="top" arrow=\'true\'>  \n                    <ion-icon ios="ios-information-circle" md="md-information-circle"></ion-icon></i>\n              </p>\n              <ion-item class="onboardingIonItems">\n                <ion-datetime type="text" [ngClass]="{\'redborder\':rdob}" class="onboardingInputField" displayFormat="DD/MMM/YYYY"  name="{{data.dob}}" [(ngModel)]="data.dob"\n                  (ngModelChange)="dateChanged()"></ion-datetime>\n              </ion-item>\n            </div>\n          </ion-col>\n        </ion-row>\n\n\n        <ion-row>\n          <ion-col col-12>\n            <div class="my_relativeDIV">\n              <p> Share in PF\n                <sup class="redText">*</sup>\n                <i *ngIf="data?.provident_fund_is_mandatory_hint_applicable" [tooltip]="data?.provident_fund_is_mandatory_hint" positionV="top" arrow=\'true\'>  \n                    <ion-icon ios="ios-information-circle" md="md-information-circle"></ion-icon></i>\n              </p>\n              <ion-item class="onboardingIonItems">\n                <ion-input type="text" [ngClass]="{\'redborder\':rprovident_fund}" name="{{data.provident_fund}}" [(ngModel)]="data.provident_fund" class="onboardingInputField"></ion-input>\n              </ion-item>\n            </div>\n          </ion-col>\n        </ion-row>\n\n\n        <ion-row *ngIf="is_minor==\'1\' || showgdiv==1">\n          <ion-col col-12>\n            <div class="my_relativeDIV">\n              <p> Guardian Address\n                <sup class="redText">*</sup>\n                <i *ngIf="data?.minor_address_is_mandatory_hint_applicable" [tooltip]="data?.minor_address_is_mandatory_hint" positionV="top" arrow=\'true\'>  \n                    <ion-icon ios="ios-information-circle" md="md-information-circle"></ion-icon></i>\n              </p>\n              <ion-item class="onboardingIonItems">\n                <ion-input type="text" [ngClass]="{\'redborder\':rminor_address}" name="{{data.minor_address}}" [(ngModel)]="data.minor_address" class="onboardingInputField"></ion-input>\n              </ion-item>\n            </div>\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf="is_minor==\'1\' || showgdiv==1">\n          <ion-col col-12>\n            <div class="my_relativeDIV">\n              <p> Guardian Name\n                <sup class="redText">*</sup>\n                <i  *ngIf="data?.minor_name_is_mandatory_hint_applicable" [tooltip]="data?.minor_name_is_mandatory_hint" positionV="top" arrow=\'true\'>  \n                    <ion-icon ios="ios-information-circle" md="md-information-circle"></ion-icon></i>\n              </p>\n              <ion-item class="onboardingIonItems">\n                <ion-input type="text" [ngClass]="{\'redborder\':rminor_name}" name="{{data.minor_name}}" [(ngModel)]="data.minor_name" class="onboardingInputField"></ion-input>\n              </ion-item>\n            </div>\n          </ion-col>\n        </ion-row>\n\n\n\n        <ion-row *ngIf="is_minor==\'1\' || showgdiv==1">\n          <ion-col col-12>\n            <div class="my_relativeDIV">\n              <p> Guardian relation\n                <sup class="redText">*</sup>\n                <i  *ngIf="data?.minor_rel_is_mandatory_hint_applicable" [tooltip]="data?.minor_rel_is_mandatory_hint" positionV="top" arrow=\'true\'>  \n                    <ion-icon ios="ios-information-circle" md="md-information-circle"></ion-icon></i>\n              </p>\n              <ion-item class="onboardingIonItems">\n                <ion-input type="text" [ngClass]="{\'redborder\':rminor_rel}" name="{{data.minor_rel}}" [(ngModel)]="data.minor_rel" class="onboardingInputField"></ion-input>\n              </ion-item>\n            </div>\n          </ion-col>\n        </ion-row>\n\n\n\n      </div>\n\n\n      <div class="btndiv" *ngIf="buttomtxtcheck==\'1\' && form_status==\'enable\'">\n        <button ion-button class="btn" (click)="fun(1)">Save</button>\n      </div>\n\n      <div class="btndiv" *ngIf="buttomtxtcheck==\'2\' && form_status==\'enable\'">\n          <button ion-button class="btn" (click)="fun(0)">Update</button>\n        </div>\n    </div>\n\n\n\n\n    <div class="newCardDiv">\n      <div class="newHeading" [innerHTML]="part_B?.title">\n        <!-- <h4 no-margin [innerHTML]="part_B.title"></h4> -->\n      </div>\n      <div class="customCardDiv">\n\n        <ion-row>\n          <ion-col col-12>\n            <div class="headingDiv">\n              <!-- <p>I hereby nominate the person(s) /cancel the nomination made by me previously and nominate the person(s) mentioned below to receive the amount standing to mycredit in the Employees’ Provident Fund in the event of my death. Please add nominee</p> -->\n              <p [innerHTML]="part_B?.description"></p>\n            </div>\n          </ion-col>\n        </ion-row>\n<!-- ///////for married////// -->\n\n\n\n\n<div>\n    <div class="pageDiv" *ngFor="let data of allData; let k= index;">\n        <div *ngIf="userDetail?.marital_status.value ==\'Married\'">\n            <ion-row class="numEmrRow">\n              <ion-col col-8 class="numEmrRowText">\n                  Nominee Details\n              </ion-col>\n              <ion-col col-2 class="colcss1" *ngIf="form_status==\'enable\'" (click)="editform(data,k)">\n                <div class="iconcss1">\n                  <!-- <ion-icon name="ios-create-outline" class="iconcss"></ion-icon> -->\n                </div>\n              </ion-col>\n              <ion-col col-2 class="colcss1" *ngIf="form_status==\'enable\'" (click)="showConfirm(data,k)">\n                <div class="iconcss1">\n                  <!-- <ion-icon name="ios-trash-outline" class="iconcss"></ion-icon> -->\n                </div>\n              </ion-col>\n            </ion-row>\n            <div class="customCardDiv">\n              <!-- <p class="para">Emergency Contact</p> -->\n              <ion-row class="bod_bot">\n\n                <ion-col col-6>\n                  <p class="para2">Address</p>\n                </ion-col>\n                <ion-col col-6>\n                  <p class="para3" *ngIf="userDetail?.marital_status.value==\'Married\'">{{data.address.value}}</p>\n                </ion-col>\n              </ion-row>\n              <ion-row class="bod_bot">\n                <ion-col col-6>\n                  <p class="para2">Date Of Birth</p>\n                </ion-col>\n                <ion-col col-6>\n                  <p class="para3" *ngIf="userDetail?.marital_status.value==\'Married\'">{{data.dob.value}}</p>\n                </ion-col>\n              </ion-row>\n          \n              <ion-row class="bod_bot">\n                <ion-col col-6>\n                  <p class="para2">Nominee Name</p>\n                </ion-col>\n                <ion-col col-6>\n                  <p class="para3" *ngIf="userDetail?.marital_status.value==\'Married\'">{{data.nominee_name.value}}</p>\n                </ion-col>\n              </ion-row>\n              <ion-row class="bod_bot">\n                <ion-col col-6>\n                  <p class="para2">Nominee relation</p>\n                </ion-col>\n                <ion-col col-6>\n                  <p class="para3" *ngIf="userDetail?.marital_status.value==\'Married\'">{{data.nominee_relation.value}}</p>\n                </ion-col>\n              </ion-row>\n        \n            </div>\n        </div>\n\n        <div style="opacity: 0.5;" *ngIf="userDetail?.marital_status.value !=\'Married\' && k == 0">\n            <ion-row class="numEmrRow">\n              <ion-col col-8 class="numEmrRowText">\n                  Nominee Details\n              </ion-col>\n              <ion-col col-2 class="colcss1" *ngIf="form_status==\'enable\'" (click)="editform(data,k)">\n                <div class="iconcss1">\n                  <!-- <ion-icon name="ios-create-outline" class="iconcss"></ion-icon> -->\n                </div>\n              </ion-col>\n              <ion-col col-2 class="colcss1" *ngIf="form_status==\'enable\'" (click)="showConfirm(data,k)">\n                <div class="iconcss1">\n                  <!-- <ion-icon name="ios-trash-outline" class="iconcss"></ion-icon> -->\n                </div>\n              </ion-col>\n            </ion-row>\n            <div class="customCardDiv">\n              <!-- <p class="para">Emergency Contact</p> -->\n              <ion-row class="bod_bot">\n\n                <ion-col col-6>\n                  <p class="para2">Address</p>\n                </ion-col>\n                <ion-col col-6>\n                  <p class="para3" *ngIf="userDetail?.marital_status.value==\'Married\'">{{data.address.value}}</p>\n                </ion-col>\n              </ion-row>\n              <ion-row class="bod_bot">\n                <ion-col col-6>\n                  <p class="para2">Date Of Birth</p>\n                </ion-col>\n                <ion-col col-6>\n                  <p class="para3" *ngIf="userDetail?.marital_status.value==\'Married\'">{{data.dob.value}}</p>\n                </ion-col>\n              </ion-row>\n          \n              <ion-row class="bod_bot">\n                <ion-col col-6>\n                  <p class="para2">Nominee Name</p>\n                </ion-col>\n                <ion-col col-6>\n                  <p class="para3" *ngIf="userDetail?.marital_status.value==\'Married\'">{{data.nominee_name.value}}</p>\n                </ion-col>\n              </ion-row>\n              <ion-row class="bod_bot">\n                <ion-col col-6>\n                  <p class="para2">Nominee relation</p>\n                </ion-col>\n                <ion-col col-6>\n                  <p class="para3" *ngIf="userDetail?.marital_status.value==\'Married\'">{{data.nominee_relation.value}}</p>\n                </ion-col>\n              </ion-row>\n        \n            </div>\n        </div>\n\n\n\n    </div>\n\n  </div>\n\n\n        <ion-row>\n          <ion-col col-12>\n            <div class="headingDiv">\n              <!-- <p>I hereby nominate the person(s) /cancel the nomination made by me previously and nominate the person(s) mentioned below to receive the amount standing to mycredit in the Employees’ Provident Fund in the event of my death. Please add nominee</p> -->\n              <p [innerHTML]="part_B?.footer"></p>\n            </div>\n          </ion-col>\n        </ion-row>\n\n<!-- //////for unmarried//// -->\n\n<div>\n    <div class="pageDiv" *ngFor="let data of allData; let k= index;">\n      <div *ngIf="userDetail?.marital_status.value!=\'Married\'">\n        <ion-row class="numEmrRow">\n          <ion-col col-8 class="numEmrRowText">\n              Nominee Details\n          </ion-col>\n          <ion-col col-2 class="colcss1" *ngIf="form_status==\'enable\'">\n            <div class="iconcss1">\n              <!-- <ion-icon name="ios-create-outline" class="iconcss"></ion-icon> -->\n            </div>\n          </ion-col>\n          <ion-col col-2 class="colcss1" *ngIf="form_status==\'enable\'">\n            <div class="iconcss1">\n              <!-- <ion-icon name="ios-trash-outline" class="iconcss"></ion-icon> -->\n            </div>\n          </ion-col>\n        </ion-row>\n        <div class="customCardDiv">\n          <!-- <p class="para">Emergency Contact</p> -->\n          <ion-row class="bod_bot">\n\n            <ion-col col-6>\n              <p class="para2">Address</p>\n            </ion-col>\n            <ion-col col-6>\n              <p class="para3" *ngIf="userDetail?.marital_status.value!=\'Married\'">{{data.address.value}}</p>\n            </ion-col>\n          </ion-row>\n          <ion-row class="bod_bot">\n            <ion-col col-6>\n              <p class="para2">Date Of Birth</p>\n            </ion-col>\n            <ion-col col-6>\n              <p class="para3" *ngIf="userDetail?.marital_status.value!=\'Married\'">{{data.dob.value}}</p>\n            </ion-col>\n          </ion-row>\n      \n          <ion-row class="bod_bot">\n            <ion-col col-6>\n              <p class="para2">Nominee Name</p>\n            </ion-col>\n            <ion-col col-6>\n              <p class="para3" *ngIf="userDetail?.marital_status.value!=\'Married\'">{{data.nominee_name.value}}</p>\n            </ion-col>\n          </ion-row>\n          <ion-row class="bod_bot">\n            <ion-col col-6>\n              <p class="para2">Nominee relation</p>\n            </ion-col>\n            <ion-col col-6>\n              <p class="para3" *ngIf="userDetail?.marital_status.value!=\'Married\'">{{data.nominee_relation.value}}</p>\n            </ion-col>\n          </ion-row>\n    \n        </div>\n      </div>\n\n      <div style="opacity: 0.5;" *ngIf="userDetail?.marital_status.value ==\'Married\' && k == 0">\n          <ion-row class="numEmrRow">\n            <ion-col col-8 class="numEmrRowText">\n                Nominee Details\n            </ion-col>\n            <ion-col col-2 class="colcss1" *ngIf="form_status==\'enable\'">\n              <div class="iconcss1">\n                <!-- <ion-icon name="ios-create-outline" class="iconcss"></ion-icon> -->\n              </div>\n            </ion-col>\n            <ion-col col-2 class="colcss1" *ngIf="form_status==\'enable\'">\n              <div class="iconcss1">\n                <!-- <ion-icon name="ios-trash-outline" class="iconcss"></ion-icon> -->\n              </div>\n            </ion-col>\n          </ion-row>\n          <div class="customCardDiv">\n            <!-- <p class="para">Emergency Contact</p> -->\n            <ion-row class="bod_bot">\n  \n              <ion-col col-6>\n                <p class="para2">Address</p>\n              </ion-col>\n              <ion-col col-6>\n                <p class="para3" *ngIf="userDetail?.marital_status.value!=\'Married\'">{{data.address.value}}</p>\n              </ion-col>\n            </ion-row>\n            <ion-row class="bod_bot">\n              <ion-col col-6>\n                <p class="para2">Date Of Birth</p>\n              </ion-col>\n              <ion-col col-6>\n                <p class="para3" *ngIf="userDetail?.marital_status.value!=\'Married\'">{{data.dob.value}}</p>\n              </ion-col>\n            </ion-row>\n        \n            <ion-row class="bod_bot">\n              <ion-col col-6>\n                <p class="para2">Nominee Name</p>\n              </ion-col>\n              <ion-col col-6>\n                <p class="para3" *ngIf="userDetail?.marital_status.value!=\'Married\'">{{data.nominee_name.value}}</p>\n              </ion-col>\n            </ion-row>\n            <ion-row class="bod_bot">\n              <ion-col col-6>\n                <p class="para2">Nominee relation</p>\n              </ion-col>\n              <ion-col col-6>\n                <p class="para3" *ngIf="userDetail?.marital_status.value!=\'Married\'">{{data.nominee_relation.value}}</p>\n              </ion-col>\n            </ion-row>\n      \n          </div>\n        </div>\n    </div>\n  </div>\n\n\n\n      </div>\n    </div>\n\n    <br>\n\n    <br>\n\n\n    <div class="btndiv" *ngIf="(isSubmit && first_attempt==0) && form_status==\'enable\'">\n        <button ion-button class="btn" (click)="submit()">{{buttomtxt}}</button>\n      </div>\n\n  </div>\n\n    </div>\n</ion-content>'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/onboarding_forms/India/epf-nomination/epf-nomination.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]])
    ], EpfNominationPage);
    return EpfNominationPage;
}());

//# sourceMappingURL=epf-nomination.js.map

/***/ }),

/***/ 800:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpfNominationPageModule", function() { return EpfNominationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__epf_nomination__ = __webpack_require__(1108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_tooltips__ = __webpack_require__(870);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EpfNominationPageModule = /** @class */ (function () {
    function EpfNominationPageModule() {
    }
    EpfNominationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__epf_nomination__["a" /* EpfNominationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__epf_nomination__["a" /* EpfNominationPage */]), __WEBPACK_IMPORTED_MODULE_3_ionic_tooltips__["a" /* TooltipsModule */].forRoot()
            ],
        })
    ], EpfNominationPageModule);
    return EpfNominationPageModule;
}());

//# sourceMappingURL=epf-nomination.module.js.map

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
//# sourceMappingURL=31.js.map
webpackJsonp([97],{

/***/ 1078:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_fcm__ = __webpack_require__(172);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = /** @class */ (function () {
    function LoginPage(fcm, loadingCtrl, alertCtrl, platform, menu, events, toastCtrl, storage, navCtrl, navParams, apiServices) {
        var _this = this;
        this.fcm = fcm;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.menu = menu;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiServices = apiServices;
        this.emailId = '';
        this.password = '';
        this.btnText = 'Sign In';
        this.emailIsOk = false;
        this.passwordIsShowing = false;
        this.poweredByImagehide = false;
        this.closeAppPopupShow = 0;
        this.contentClassBg = "bg";
        this.getTokenTry = 1;
        this.previousePageData = this.navParams.get('data');
        console.log('previouse Page Data123', this.previousePageData);
        this.email = this.navParams.get('email');
        console.log('previouse Page Data', this.previousePageData);
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            console.log('login deviceId== ', _this.deviceId);
        });
    }
    //Common Loader:
    LoginPage.prototype.commonLoader = function () {
        this.loading = this.loadingCtrl.create({
            enableBackdropDismiss: true,
            spinner: 'ios-small',
            content: 'Loading data...'
        });
        this.loading.present();
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad LoginPage');
        this.storage.get('pushNotificationToken').then(function (data) {
            var pushToken = data;
            if (data != '' || data != undefined || data != null) {
            }
            else {
                _this.getPushToken();
            }
        });
    };
    LoginPage.prototype.getPushToken = function () {
        var _this = this;
        this.fcm.subscribeToTopic('REACH');
        this.fcm.getToken().then(function (token) {
            console.log('get token==', token);
            if (token == '' || token == undefined) {
                if (_this.getTokenTry <= 2) {
                    _this.getPushToken();
                    _this.getTokenTry = _this.getTokenTry + 1;
                }
            }
            else {
                // alert('get token=='+ token);
                _this.storage.set('pushNotificationToken', token);
            }
        });
        this.fcm.onNotification().subscribe(function (data) {
            if (data.wasTapped) {
                console.log("Received in background");
            }
            else {
                console.log("Received in foreground");
            }
            ;
        });
        this.fcm.onTokenRefresh().subscribe(function (token) {
            console.log('onTokenRefresh==', token);
            console.log('get token==', token);
            if (token == '' || token == undefined) {
                if (_this.getTokenTry <= 2) {
                    _this.getPushToken();
                    _this.getTokenTry = _this.getTokenTry + 1;
                }
            }
            else {
                // alert('onTokenRefresh token=='+ token);
                _this.storage.set('pushNotificationToken', token);
            }
        });
    };
    LoginPage.prototype.viewPass = function (pass) {
        if (pass == false) {
            this.passwordIsShowing = true;
        }
        else {
            this.passwordIsShowing = false;
        }
    };
    LoginPage.prototype.validateEmail = function (email) {
        // console.log(email);
        var regexEmail = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
        if (regexEmail.test(email)) {
            this.emailIsOk = true;
        }
        else {
            this.emailIsOk = false;
        }
    };
    LoginPage.prototype.login = function (email, pass) {
        var _this = this;
        this.btnText = 'Please wait...';
        var apiKey = {
            "packageName": this.apiServices.packageName,
            "emailId": email,
            "password": pass,
            "device": this.apiServices.device,
            "deviceId": this.deviceId,
            "appVersion": this.apiServices.appVersion
        };
        this.emailId = '';
        this.password = '';
        console.log('login api key==', apiKey);
        this.apiServices.loginUser(apiKey).then(function (result) {
            console.log('optionalUpdate response== ', result);
            _this.allData = result;
            if (_this.allData.success == 1) {
                _this.storage.set('employeeId', _this.allData.data.employee_id);
                _this.storage.set('isFirstLogin', _this.allData.data.is_first_login);
                _this.storage.set('isCeoScreenVisit', _this.allData.data.is_first_ceoMsg);
                _this.storage.set('isCeoScreenVisit', _this.allData.data.is_first_ceoMsg);
                _this.storage.set('userImage', _this.allData.data.user_image);
                _this.storage.set('isFormSubmit', _this.allData.data.is_first_formSubmit);
                _this.storage.set('showOnBoard', _this.allData.data.employee_type);
                //show onboard page or home page
                //showOnBoard==guest --> home page else other new home page on tab
                // this.storage.set('showOnBoard',2);
                if (_this.allData.data.is_first_login == 1) {
                    _this.navCtrl.setRoot('WelcomeScreenPage');
                }
                else if (_this.allData.data.is_first_formSubmit == 1) {
                    _this.navCtrl.setRoot('ProfilePicUploadPage');
                }
                else if (_this.allData.data.is_first_ceoMsg == 1) {
                    _this.navCtrl.setRoot('CeoMessageePage');
                }
                else {
                    _this.navCtrl.setRoot('HomePage');
                }
                _this.btnText = 'Sign In';
            }
            else {
                _this.btnText = 'Sign In';
                _this.apiMessage(_this.allData.message);
            }
        }, function (err) {
            console.log('optionalUpdate err== ', err);
            _this.apiMessage(err);
            _this.btnText = 'Sign In';
        });
    };
    LoginPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 4500
        });
        toast.present();
    };
    LoginPage.prototype.goToHome = function () {
        // this.navCtrl.setRoot('FirstWelcomeAboardPage');ImageUploadPage
        this.navCtrl.push('ProfilePicUploadPage');
    };
    LoginPage.prototype.goToForgotPasswrd = function () {
        this.navCtrl.push('ForgotPasswordPage');
    };
    LoginPage.prototype.checkBlur = function () {
        console.log('change class==');
        this.contentClassBg = "bg";
        this.poweredByImagehide = false;
    };
    LoginPage.prototype.checkFocus = function () {
        console.log('change class11==');
        this.contentClassBg = "bg1";
        this.poweredByImagehide = true;
    };
    LoginPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        this.menu.swipeEnable(false);
        // this.initializeBackButtonCustomHandler();
    };
    LoginPage.prototype.newEmpLogin = function (email, pass) {
        var _this = this;
        // this.btnText='Please wait...';
        var apiKey = {
            "email_id": email,
            "package_name": this.apiServices.packageName,
            "device": this.apiServices.device,
            "device_id": this.deviceId,
            "password": pass
        };
        if (this.previousePageData == 'applicant') {
            console.log('optionalUpdate response== ', apiKey);
            this.apiServices.newJoinee(apiKey).then(function (result) {
                console.log('result== ', result);
                _this.newJoineeData = result;
                console.log('this.allData== ', _this.newJoineeData);
                console.log('this.newJoineeData.data.employee_id== ', _this.newJoineeData.data.employee_id);
                _this.newjoineealldata = _this.newJoineeData.data;
                if (_this.newJoineeData.success == 1) {
                    _this.storage.set('employeeId', _this.newjoineealldata.employee_id);
                    _this.storage.set('contact', _this.newjoineealldata.contact);
                    _this.storage.set('email_id', _this.newjoineealldata.email_id);
                    _this.storage.set('employee_type', _this.newjoineealldata.employee_type);
                    _this.storage.set('first_name', _this.newjoineealldata.first_name);
                    _this.storage.set('last_name', _this.newjoineealldata.last_name);
                    _this.storage.set('login_token', _this.newjoineealldata.login_token);
                    _this.storage.set('middle_name', _this.newjoineealldata.middle_name);
                    _this.storage.set('user_image', _this.newjoineealldata.user_image);
                    _this.storage.set('user_status', _this.newjoineealldata.user_status);
                    _this.storage.set('showOnBoard', _this.newjoineealldata.employee_type);
                    _this.navCtrl.setRoot('TabsPage');
                }
                else {
                    _this.apiMessage(_this.newJoineeData.message);
                }
            })
                ,
                    function (err) {
                        console.log('optionalUpdate err== ', err);
                        _this.apiMessage(err);
                    };
        }
        if (this.previousePageData == 'employee') {
            console.log('optionalUpdate response== ', apiKey);
            this.apiServices.employeelogin(apiKey).then(function (result) {
                console.log('result== ', result);
                _this.employeeData = result;
                console.log('this.allData== ', _this.employeeData);
                // console.log('this.newJoineeData.data.employee_id== ',this.newJoineeData.data.employee_id); 
                _this.employeealldata = _this.employeeData.data;
                if (_this.employeeData.success == 1) {
                    _this.storage.set('employeeId', _this.employeealldata.employee_id);
                    _this.storage.set('contact', _this.employeealldata.contact);
                    _this.storage.set('email_id', _this.employeealldata.email_id);
                    _this.storage.set('employee_type', _this.employeealldata.employee_type);
                    _this.storage.set('first_name', _this.employeealldata.first_name);
                    _this.storage.set('last_name', _this.employeealldata.last_name);
                    _this.storage.set('login_token', _this.employeealldata.login_token);
                    _this.storage.set('middle_name', _this.employeealldata.middle_name);
                    _this.storage.set('user_image', _this.employeealldata.user_image);
                    _this.storage.set('user_status', _this.employeealldata.user_status);
                    _this.storage.set('showOnBoard', _this.employeealldata.employee_type);
                    _this.navCtrl.setRoot('TabsPage');
                }
                else {
                    _this.apiMessage(_this.employeealldata.message);
                }
            })
                ,
                    function (err) {
                        console.log('optionalUpdate err== ', err);
                        _this.apiMessage(err);
                    };
        }
    };
    LoginPage.prototype.applicent = function (pass) {
        var _this = this;
        this.commonLoader();
        var apiKey = {
            "email_id": this.email,
            "device": this.apiServices.device,
            "device_id": this.deviceId,
            "password": pass,
            "app_version": this.apiServices.appVersion
        };
        console.log('optionalUpdate response== ', apiKey);
        this.apiServices.axlogin(apiKey).subscribe(function (result) {
            _this.loading.dismiss();
            console.log('result==bfsssss ', result);
            if (result.success == 1) {
                _this.applicentdata = result.data;
                if (_this.applicentdata.joining_status == 1) {
                    // if(this.applicentdata.survey_data.length>0){
                    _this.storage.set('survey_data', _this.applicentdata);
                    // this.events.publish('recruitsurvey', this.applicentdata);
                    // }
                }
                _this.storage.set('Response', result.Response);
                _this.storage.set('SessionId', result.SessionId);
                _this.storage.set('employeeId', _this.applicentdata.employee_id);
                _this.storage.set('email_id', _this.applicentdata.email_id);
                _this.storage.set('employee_type', _this.applicentdata.employee_type);
                _this.storage.set('first_name', _this.applicentdata.first_name);
                _this.storage.set('last_name', _this.applicentdata.last_name);
                _this.storage.set('login_token', _this.applicentdata.login_token);
                _this.storage.set('showOnBoard', _this.applicentdata.employee_type);
                _this.storage.set('tncView', _this.applicentdata.t_and_c_accept);
                _this.storage.set('joining_status', _this.applicentdata.joining_status);
                _this.storage.set('user_image', _this.applicentdata.user_image);
                _this.storage.set('walkthrough', _this.applicentdata.walkthrough);
                _this.storage.set('country_id', _this.applicentdata.country_id);
                _this.storage.set('welcome_aboard_applicable', _this.applicentdata.welcome_aboard_applicable);
                _this.events.publish('showsidemenu', _this.applicentdata.employee_type, _this.applicentdata.country_id);
                if (_this.applicentdata.t_and_c_accept == 1) {
                    //mat dikhao tnc
                    if (_this.applicentdata.welcome_aboard_applicable == 1) {
                        _this.navCtrl.push('AplicantwelcomePage');
                    }
                    else {
                        if (_this.applicentdata.walkthrough == '0') {
                            _this.navCtrl.setRoot('WalkthroughScreenPage');
                        }
                        else {
                            _this.navCtrl.setRoot('TabsPage');
                        }
                        // this.navCtrl.setRoot('WalkthroughScreenPage');
                        //this.navCtrl.setRoot('TabsPage');
                    }
                }
                else {
                    //dikaho tnc
                    _this.navCtrl.push('TermsAndConditionsPage');
                }
                // if(this.applicentdata.welcome_aboard_applicable==1){
                //   this.navCtrl.push('AplicantwelcomePage');
                //   // this.navCtrl.push('TermsAndConditionsPage');
                // }
                // if(this.applicentdata.welcome_aboard_applicable==0){
                //   this.navCtrl.setRoot('TabsPage');
                // }
            }
            else {
                _this.apiMessage(result.message);
            }
            // this.navCtrl.push('AplicantwelcomePage');
        })
            ,
                function (err) {
                    console.log('optionalUpdate err== ', err);
                    _this.apiMessage(err);
                };
    };
    LoginPage.prototype.employee = function (pass) {
        var _this = this;
        // alert('1');
        this.commonLoader();
        var apiKey = {
            "email_id": this.email,
            "package_name": this.apiServices.packageName,
            "device": this.apiServices.device,
            "device_id": this.deviceId,
            "password": pass
        };
        console.log('optionalUpdate response== ', apiKey);
        this.apiServices.employeelogin(apiKey).then(function (result) {
            _this.loading.dismiss();
            console.log('result== ', result);
            _this.employeeData = result;
            console.log('this.allData== ', _this.employeeData);
            // console.log('this.newJoineeData.data.employee_id== ',this.newJoineeData.data.employee_id); 
            _this.employeealldata = _this.employeeData.data;
            if (_this.employeeData.success == 1) {
                _this.storage.set('employeeId', _this.employeealldata.employee_id);
                _this.storage.set('contact', _this.employeealldata.contact);
                _this.storage.set('tncView', _this.employeealldata.t_and_c_accept);
                _this.storage.set('email_id', _this.employeealldata.email_id);
                _this.storage.set('employee_type', _this.employeealldata.employee_type);
                _this.storage.set('first_name', _this.employeealldata.first_name);
                _this.storage.set('last_name', _this.employeealldata.last_name);
                var empName = _this.employeealldata.first_name + ' ' + _this.employeealldata.last_name;
                _this.storage.set('employee_name', empName);
                _this.storage.set('login_token', _this.employeealldata.login_token);
                _this.storage.set('middle_name', _this.employeealldata.middle_name);
                _this.storage.set('user_image', _this.employeealldata.user_image);
                _this.storage.set('user_status', _this.employeealldata.user_status);
                _this.storage.set('showOnBoard', _this.employeealldata.employee_type);
                _this.storage.set('community_tag_show', _this.employeealldata.community_tag_show);
                _this.storage.set('country_id', _this.employeealldata.country_id);
                // this.events.publish('showsidemenu', this.employeealldata.employee_type);
                _this.events.publish('showsidemenu', _this.employeealldata.employee_type, _this.employeealldata.country_id);
                _this.storage.set('welcome_aboard_applicable', _this.employeealldata.welcome_aboard_applicable);
                _this.storage.set('discounting_token', _this.employeealldata.discountingToken).then(function (res) {
                    console.log('discountingToken==', res);
                });
                if (_this.employeealldata.t_and_c_accept == 1) {
                    //t&c already accepted
                    if (_this.employeealldata.welcome_aboard_applicable == 1) {
                        //welcom onboard is not submitting therefor go to welcome on-board page
                        _this.navCtrl.push('AplicantwelcomePage');
                    }
                    else {
                        //welcom onboard is already submitted
                        // if(this.employeealldata.user_image==''){
                        if (_this.employeealldata.profile_pic_upload == '0') {
                            _this.storage.set('profile_pic_upload', _this.employeealldata.profile_pic_upload);
                            _this.navCtrl.setRoot('FirstimguploadPage');
                        }
                        else {
                            if (_this.employeealldata.community_tag_show == 1) {
                                // go to community tag select page
                                _this.navCtrl.setRoot('CatgoriesPage');
                            }
                            else {
                                //community tag has selected
                                _this.navCtrl.setRoot('TabsPage');
                            }
                        }
                    }
                }
                else {
                    //go to t&c page
                    _this.navCtrl.push('TermsAndConditionsPage', { 'profile_pic_upload': _this.employeealldata.profile_pic_upload });
                }
                // if(this.employeealldata.t_and_c_accept==1){
                //   if(this.employeealldata.welcome_aboard_applicable==1){
                //     this.navCtrl.push('AplicantwelcomePage');
                //   }else{
                //     this.navCtrl.setRoot('TabsPage');
                //   }
                //   }else{
                //     this.navCtrl.push('TermsAndConditionsPage');
                //   }
                //  this.navCtrl.setRoot('TabsPage');
            }
            else {
                _this.apiMessage(_this.employeeData.message);
            }
            // this.navCtrl.push('AplicantwelcomePage');
        })
            ,
                function (err) {
                    console.log('optionalUpdate err== ', err);
                    _this.apiMessage(err);
                };
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/login/login.html"*/'\n\n\n<ion-content class="{{contentClassBg}}">\n<!-- <div>\n    <button class="back-button disable-hover bar-button bar-button-md back-button-md bar-button-default bar-button-default-md show-back-button" ion-button="bar-button" ng-reflect-klass="back-button" ng-reflect-ng-class="back-button-md"><span class="button-inner"><ion-icon class="back-button-icon icon icon-md back-button-icon-md ion-md-arrow-back" role="img" ng-reflect-klass="back-button-icon" ng-reflect-ng-class="back-button-icon-md" aria-label="arrow back" ng-reflect-name="md-arrow-back"></ion-icon><span class="back-button-text back-button-text-md" ng-reflect-klass="back-button-text" ng-reflect-ng-class="back-button-text-md"></span></span><div class="button-effect"></div></button>\n</div> -->\n\n\n  <div class="iconeval">\n    <img src="assets/imgs/logologin.png" class="imgss"/>\n  </div>\n      <img src="assets/imgs/clientLogo.png" class="clientLogo"/>\n   \n  <!-- <div class="welcome">\n    <h3 class="wlcmtxt">Welcome to REACH</h3>\n    <h6 class="logintxt">Login to continue    </h6>\n  </div> -->\n  <!-- <div class="welcome">\n    <h5 class="labelcls">Email</h5>\n    <ion-row class="bottomLine">\n      <ion-col col-12>\n          <ion-list no-margin>\n              <ion-item style="padding-left: 1px;" class="item_place">\n                <ion-input  style="background-color: transparent;\n                 font-size: 17px;" type="email" autocomplete=“true” autocorrect="true" spellcheck=“true” autocomplete=“on” autocorrect=“on” [(ngModel)]="emailId" (ngModelChange)="validateEmail(emailId)" \n                 placeholder="Enter your email address" clearInput autofocus="true"\n                  name="email" (ionFocus)="checkFocus()" (ionBlur)="checkBlur()"></ion-input>\n              </ion-item>  \n          </ion-list>\n      </ion-col>\n    </ion-row>\n   </div> -->\n  <div class="welcome">\n    <h5 class="labelcls">Password</h5>\n    \n    <ion-row style="border-bottom: 1px solid #9e9798;"> \n      <ion-col col-10>\n          <ion-item class="passwordField">\n        <ion-input class="bottomLine" *ngIf="passwordIsShowing==false" type="password" placeholder="Enter your password" clearOnEdit="false" autocorrect="on" autocapitalize="none"  [(ngModel)]="password" class="inputcls"(ionBlur)="checkBlur()"  (ionFocus)="checkFocus()"></ion-input>\n        <ion-input class="bottomLine" *ngIf="passwordIsShowing==true" type="text" placeholder="Enter your password" clearOnEdit="false" autocorrect="on" autocapitalize="none"  [(ngModel)]="password" class="inputcls"(ionBlur)="checkBlur()"  (ionFocus)="checkFocus()"></ion-input>\n     </ion-item>\n\n      </ion-col>\n      <ion-col col-2 class="centerDataInDiv" (click)="viewPass(passwordIsShowing)">\n          <ion-item class="passwordField">\n        <ion-icon *ngIf="passwordIsShowing==false" name="ios-eye-off-outline" class="eyeIcon"></ion-icon>\n        <ion-icon *ngIf="passwordIsShowing==true" name="ios-eye-outline" class="eyeIcon"></ion-icon>\n      </ion-item>\n      </ion-col>\n    </ion-row>\n    \n<!-- <p (click)="goToForgotPasswrd()" class="forgotPasswordText">Forgot password?</p>     -->\n</div>\n\n<div class="btndiv">\n\n  <!-- <button ion-button [disabled]="password.trim()==\'\'|| emailIsOk==false" class="btn" (click)="login(emailId,password)">{{btnText}}</button> -->\n\n  <button ion-button  [disabled]="password.trim()==\'\'" *ngIf="previousePageData==\'applicant\'" class="btn" (click)="applicent(password)">{{btnText}}</button>\n\n <button ion-button  [disabled]="password.trim()==\'\'" *ngIf="previousePageData==\'employee\'" class="btn" (click)="employee(password)">{{btnText}}</button>\n</div>\n<!-- <ion-row>\n    <ion-col col-12>\n        <p text-center class="instext" (click)="goBack()"> <ion-icon name="arrow-round-back"></ion-icon>\n          Go back</p>\n    </ion-col>\n  </ion-row> -->\n\n<!-- <div *ngIf="poweredByImagehide==false" class="powered_by"><img src="assets/imgs/powered_by.png" class="benepikCopyRight"/></div> -->\n\n<div class="powered_by"><img src="assets/imgs/powered_by.png" class="benepikCopyRight"/></div>\n</ion-content>    \n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_fcm__["a" /* FCM */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 775:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(1078);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ })

});
//# sourceMappingURL=97.js.map
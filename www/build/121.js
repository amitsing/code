webpackJsonp([121],{

/***/ 1041:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChooseUserPage; });
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

// import { IonicPage, NavController, NavParams,AlertController, Platform,MenuController } from 'ionic-angular';




var ChooseUserPage = /** @class */ (function () {
    ////
    function ChooseUserPage(iab, events, popoverCtrl, alertCtrl, loadingCtrl, platform, menu, toastCtrl, storage, navCtrl, navParams, apiServices) {
        var _this = this;
        this.iab = iab;
        this.events = events;
        this.popoverCtrl = popoverCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiServices = apiServices;
        this.options = {
            location: 'no',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Back',
            closebuttoncolor: '#f04141',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
            footer: 'no',
            footercolor: '#939399',
        };
        this.emailId = '';
        this.password = '';
        this.btnText = 'Sign In';
        this.emailIsOk = false;
        this.passwordIsShowing = false;
        this.poweredByImagehide = false;
        this.closeAppPopupShow = 0;
        this.contentClassBg = "bg";
        this.getTokenTry = 1;
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            console.log('login deviceId== ', _this.deviceId);
        });
        this.presentPopover();
    }
    ;
    //Common Loader:
    ChooseUserPage.prototype.commonLoader = function () {
        this.loading = this.loadingCtrl.create({
            enableBackdropDismiss: true,
            spinner: 'ios-small',
            content: 'Loading data...'
        });
        this.loading.present();
    };
    ChooseUserPage.prototype.presentPopover = function () {
        var myEvent;
        var popover = this.popoverCtrl.create('PopoverLoginPage');
        popover.present({
            ev: myEvent
        });
    };
    ChooseUserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChooseUserPage');
    };
    ChooseUserPage.prototype.goToLogin = function (email) {
        var _this = this;
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            console.log('login deviceId== ', _this.deviceId);
        });
        if (this.emailIsOk == false) {
            var msg = 'please Enter valid Email Id';
            this.apiMessage(msg);
            return false;
        }
        this.email = email;
        this.commonLoader();
        var apiKey = {
            "email_id": email,
            "device": this.apiServices.device,
            "device_id": this.deviceId,
        };
        this.apiServices.emailverification(apiKey).subscribe(function (result) {
            console.log('optionalUpdate response== ', result);
            _this.loading.dismiss();
            _this.allData = result;
            if (result.success == 1) {
                if (result.flag == 'employee') {
                    //****************smal integration testing************** */
                    //  this.storage.get('deviceId').then(data=>{
                    //    this.deviceId=data;
                    //    console.log('login deviceId== ',this.deviceId)
                    //  this.SAMLIntegration(result.flag);
                    //   }) 
                    _this.navCtrl.push('LoginPage', { 'data': result.flag, 'email': email });
                    // // //****************endsmal integration testing************** */
                }
                if (result.flag == 'applicant') {
                    _this.navCtrl.push('LoginPage', { 'data': result.flag, 'email': email });
                }
                // this.navCtrl.push('LoginPage',{'data':result.flag,'email':email});
            }
            else {
                _this.apiMessage(result.message);
            }
        }, function (err) {
            console.log('optionalUpdate err== ', err);
            _this.apiMessage(err);
        });
        // this.navCtrl.push('LoginPage',{'data':data});
    };
    ChooseUserPage.prototype.ionViewWillEnter = function () {
        this.menu.swipeEnable(false);
        this.initializeBackButtonCustomHandler();
    };
    //Hardware Back Button
    ChooseUserPage.prototype.initializeBackButtonCustomHandler = function () {
        var that = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function (event) {
            that.closeAppPopupShow++;
            if (that.closeAppPopupShow % 2 != 0) {
                that.showeAlert();
            }
            else {
                that.alert121.dismiss();
            }
        }, 101); // Priority 101 will override back button handling (we set in app.component.ts) as it is bigger then priority 100 configured in app.component.ts file */
    };
    ChooseUserPage.prototype.showeAlert = function () {
        var _this = this;
        this.alert121 = this.alertCtrl.create({
            title: 'App termination',
            message: 'Do you want to close the app?',
            buttons: [{
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Application exit prevented!');
                    }
                }, {
                    text: 'Close App',
                    handler: function () {
                        _this.platform.exitApp(); // Close this application
                    }
                }]
        });
        this.alert121.present();
    };
    ChooseUserPage.prototype.ionViewWillLeave = function () {
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    ChooseUserPage.prototype.checkBlur = function () {
        console.log('change class==');
        this.contentClassBg = "bg";
        this.poweredByImagehide = false;
    };
    ChooseUserPage.prototype.checkFocus = function () {
        console.log('change class11==');
        this.contentClassBg = "bg1";
        this.poweredByImagehide = true;
    };
    ChooseUserPage.prototype.validateEmail = function (email) {
        console.log(email);
        var regexEmail = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
        if (regexEmail.test(email)) {
            this.emailIsOk = true;
            console.log("this.emailIsOk", this.emailIsOk);
        }
        else {
            this.emailIsOk = false;
            console.log("this.emailIsOk", this.emailIsOk);
        }
    };
    ChooseUserPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 4500
        });
        toast.present();
    };
    ///////////////
    //****************integration testing************** */
    ChooseUserPage.prototype.SAMLIntegration = function (prevData) {
        var _this = this;
        console.log('prviouse page data==', prevData);
        if (prevData == 'employee') {
            //   this.options = {
            //     location : 'no',
            //     hidden : 'no', 
            //     // clearcache : 'yes',
            //     // clearsessioncache : 'yes',
            //     zoom : 'yes',
            //     hardwareback : 'yes',
            //     mediaPlaybackRequiresUserAction : 'no',
            //     shouldPauseOnSuspend : 'no', 
            //     closebuttoncaption : 'Close',
            //     closebuttoncolor:'#f04141',
            //     disallowoverscroll : 'no',
            //     toolbar : 'yes', 
            //     enableViewportScale : 'no', 
            //     allowInlineMediaPlayback : 'no',
            //     presentationstyle : 'pagesheet',
            //     fullscreen : 'yes',
            //     footer:'yes',
            //     footercolor:'#444444',
            // };
            // const browser = this.iab.create("https://benepik.in/reach/samladfslogin.php?deviceType=app&requestType=sso&device="+this.apiServices.device+"&device_id="+this.deviceId+"&appemail="+this.email+"",  '_blank', this.options);
            var browser_1 = this.iab.create("https://benepik.co.in/reach/samladfslogin.php?deviceType=app&requestType=sso&device=" + this.apiServices.device + "&device_id=" + this.deviceId + "&appemail=" + this.email + "", '_blank', this.options);
            browser_1.on('loadstop').subscribe(function (event) {
                console.log("LOG: API Response== ", event);
                console.log(event.url);
                browser_1.executeScript({ code: 'document.getElementById("myptag").innerText' }).then(function (html) {
                    console.log('html==', html);
                    var xyz = JSON.parse(html);
                    console.log('parse html==', xyz);
                    if (xyz.success == 1) {
                        browser_1.close();
                        console.log('success', xyz);
                        // alert(JSON.stringify(xyz));
                        _this.employee(xyz);
                        // alert('go to home page');
                        // this.employeeDataSave(xyz.data);
                    }
                    else if (xyz.success == 0) {
                        // alert('go to login page');
                        console.log('success 0', xyz);
                        browser_1.close();
                        _this.apiMessage(xyz.message);
                        // this.takeConfirmation(xyz.message, browser);
                    }
                }, function (err) {
                    console.log('html err==', err);
                });
                //  this.loading.dismiss();
            });
            browser_1.on('loadstart').subscribe(function (eve) {
                // this.commonLoader();
            }, function (err) {
                // this.loading.dismiss();
            });
            browser_1.on('exit').subscribe(function (event) {
                // this.loading.dismiss();
                browser_1.executeScript({ code: 'document.getElementById("myptag").innerText' }).then(function (html) {
                    console.log('exit html==', html);
                });
            }, function (err) {
                alert("InAppBrowser exit Event Error: " + err);
            });
        }
    };
    ChooseUserPage.prototype.employee = function (pass) {
        // alert('1');
        // this.commonLoader();
        // let apiKey={
        //   "email_id":this.email,
        //   "package_name":this.apiServices.packageName,
        //   "device":this.apiServices.device,
        //   "device_id":this.deviceId,
        //   "password":pass
        // };
        // console.log('optionalUpdate response== ',apiKey); 
        // this.apiServices.employeelogin(apiKey).then((result) => { 
        // this.loading.dismiss();
        console.log('result== ', pass);
        this.employeeData = pass;
        console.log('this.allData== ', this.employeeData);
        // console.log('this.newJoineeData.data.employee_id== ',this.newJoineeData.data.employee_id); 
        this.employeealldata = this.employeeData.data;
        // if(this.employeeData.success==1){
        this.storage.set('employeeId', this.employeealldata.employee_id);
        this.storage.set('contact', this.employeealldata.contact);
        this.storage.set('tncView', this.employeealldata.t_and_c_accept);
        this.storage.set('email_id', this.employeealldata.email_id);
        this.storage.set('employee_type', this.employeealldata.employee_type);
        this.storage.set('first_name', this.employeealldata.first_name);
        this.storage.set('last_name', this.employeealldata.last_name);
        this.storage.set('login_token', this.employeealldata.login_token);
        this.storage.set('middle_name', this.employeealldata.middle_name);
        this.storage.set('user_image', this.employeealldata.user_image);
        this.storage.set('user_status', this.employeealldata.user_status);
        this.storage.set('showOnBoard', this.employeealldata.employee_type);
        this.storage.set('community_tag_show', this.employeealldata.community_tag_show);
        this.storage.set('country_id', this.employeealldata.country_id);
        this.events.publish('showsidemenu', this.employeealldata.employee_type, this.employeealldata.country_id);
        this.storage.set('welcome_aboard_applicable', this.employeealldata.welcome_aboard_applicable);
        this.storage.set('discounting_token', this.employeealldata.discountingToken).then(function (res) {
            console.log('discountingToken==', res);
        });
        if (this.employeealldata.t_and_c_accept == 1) {
            //t&c already accepted
            if (this.employeealldata.welcome_aboard_applicable == 1) {
                //welcom onboard is not submitting therefor go to welcome on-board page
                this.navCtrl.push('AplicantwelcomePage');
            }
            else {
                //welcom onboard is already submitted
                // if(this.employeealldata.user_image==''){
                if (this.employeealldata.profile_pic_upload == '0') {
                    this.storage.set('profile_pic_upload', this.employeealldata.profile_pic_upload);
                    this.navCtrl.setRoot('FirstimguploadPage');
                    // this.navCtrl.setRoot('FirstimguploadPage');
                }
                else {
                    if (this.employeealldata.community_tag_show == 1) {
                        // go to community tag select page
                        this.navCtrl.setRoot('CatgoriesPage');
                    }
                    else {
                        //community tag has selected
                        this.navCtrl.setRoot('TabsPage');
                    }
                }
            }
        }
        else {
            //go to t&c page
            this.navCtrl.push('TermsAndConditionsPage', { 'profile_pic_upload': this.employeealldata.profile_pic_upload });
        }
        //     }
    };
    ChooseUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-choose-user',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/choose-user/choose-user.html"*/'\n\n<ion-content class="{{contentClassBg}}">\n \n        \n          <div class="iconeval">\n            <img src="assets/imgs/logologin.png" class="imgss"/>\n          </div>\n        \n              <img src="assets/imgs/clientLogo.png" class="clientLogo"/>\n           \n          <div class="welcome">\n\n                <ion-row>\n                        <ion-col col-12>\n                           <ion-list no-margin>\n                              <!-- autofocus="true" -->\n                               <ion-item style="padding-left: 1px;" class="item_place">\n                                 <ion-input  style="background-color: transparent;\n                                  font-size: 17px;" type="email" autocomplete=“true” autocorrect="true" spellcheck=“true” autocomplete=“on” autocorrect=“on” autocapitalize="none" [(ngModel)]="emailId" (ngModelChange)="validateEmail(emailId)" \n                                  placeholder="Enter your email address" clearInput\n                                   name="email" (ionFocus)="checkFocus()" (ionBlur)="checkBlur()"></ion-input>\n                               </ion-item>  \n                           </ion-list>\n                        </ion-col>\n                      </ion-row>\n                     \n                       \n                       <ion-row>\n                           <ion-col col-12>\n                     \n                     <div class="btndiv">\n                        <button ion-button   class="btn" (click)="goToLogin(emailId)">Next</button>\n                     </div>\n                     \n                   </ion-col>\n                   </ion-row>\n          </div>\n        <div class="powered_by"><img src="assets/imgs/powered_by.png" class="benepikCopyRight"/></div>\n        </ion-content>    \n        '/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/choose-user/choose-user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */]])
    ], ChooseUserPage);
    return ChooseUserPage;
}());

//# sourceMappingURL=choose-user.js.map

/***/ }),

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseUserPageModule", function() { return ChooseUserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__choose_user__ = __webpack_require__(1041);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChooseUserPageModule = /** @class */ (function () {
    function ChooseUserPageModule() {
    }
    ChooseUserPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__choose_user__["a" /* ChooseUserPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__choose_user__["a" /* ChooseUserPage */]),
            ],
        })
    ], ChooseUserPageModule);
    return ChooseUserPageModule;
}());

//# sourceMappingURL=choose-user.module.js.map

/***/ })

});
//# sourceMappingURL=121.js.map
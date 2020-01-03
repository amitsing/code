webpackJsonp([72],{

/***/ 1158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviewPage; });
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




var PreviewPage = /** @class */ (function () {
    function PreviewPage(navCtrl, navParams, menu, loadingCtrl, toastCtrl, apiServices, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.apiServices = apiServices;
        this.storage = storage;
        this.alldata = this.navParams.get('alldata');
        this.pasttime = this.navParams.get('pasttime');
        this.native_place = this.navParams.get('native_place');
        this.mobile_number = this.navParams.get('mobile_number');
        console.log('this.alldata', this.alldata);
        this.fav_place = this.alldata.fav_place;
        this.fav_cuisine = this.alldata.fav_cuisine;
        // this.pasttime=this.alldata.pasttime;
        // console.log('this.pasttime',this.pasttime);
        this.storage.get('showOnBoard').then(function (data) {
            _this.emptype = data;
            console.log('showOnBoard value is==', data);
        });
        this.imagelink = this.navParams.get('imagelink');
    }
    //Common Loader:
    PreviewPage.prototype.commonLoader = function () {
        this.loading = this.loadingCtrl.create({
            enableBackdropDismiss: true,
            spinner: 'ios-small',
            content: 'Loading data...'
        });
        this.loading.present();
    };
    // submitAboard(){           
    //   this.navCtrl.setRoot('TabsPage');
    // }
    PreviewPage.prototype.editPage = function () {
        this.navCtrl.pop();
    };
    //   this.previousData= this.navParams.data;
    //   this.oldData= this.previousData.olddata;
    //   this.prevData = this.previousData.resData;
    //   this.clientid= this.previousData.clientid;
    //   this.employeeid= this.previousData.employeeid
    //   console.log('Preview/Previous Data:', this.previousData);
    //   console.log('OldData', this.oldData);
    // }
    //   //Common Loader
    //   commonLoader(){
    //     this.loading= this.loadingCtrl.create({
    //        enableBackdropDismiss:true,
    //        spinner: 'ios-small',
    //        content: 'Loading data...'
    //      });
    //      this.loading.present();
    //    }
    //   //Toast Function:
    //   presentToast(APImessage){
    //     let toast = this.toastCtrl.create({
    //       message: APImessage,
    //       duration: 1500,
    //       position: 'top'
    //     });
    //     toast.onDidDismiss(() => {
    //       console.log('Dismissed toast');
    //     });
    //     toast.present();
    //   }
    // goBackEdit(){
    //   this.navCtrl.pop();
    // }
    // submitAboard(){
    //   let user={
    //     "clientid":this.clientid,
    //     "employeeId":this.employeeid,
    //     "experience":this.oldData.totalExperience,
    //     "preComp":this.oldData.previousCompany,
    //     "preDesig":this.oldData.previousDestignation,
    //     "education":this.oldData.highestEducation,
    //     "food":this.oldData.favFood,
    //     "holiday":this.oldData.favHoliday,
    //     "hobby":this.oldData.myHobby,
    //     "senior":this.oldData.senior
    //   }
    //   console.log('Submit Aboard Request:', user);
    //   this.commonLoader();
    //   this.apiService.SubmitAboardProvider(user)
    //       .subscribe((res)=>{
    //         if(res.success==1){
    //           this.postid = res.postid;
    //           this.flag = res.flag;
    //           this.loading.dismiss();
    //           console.log('Success1:', res);
    //           this.storage.set('clientid',this.clientid);
    //           this.storage.set('employeeid', this.employeeid);
    //           let message= "You've been successfully registered."
    //           this.presentToast(message)
    //           this.navCtrl.setRoot('');
    //           this.sendPush();
    //         }else{
    //           this.loading.dismiss();
    //           console.log('Success0:', res);
    //         }
    //       },(err)=>{
    //         this.loading.dismiss();
    //         console.log('Error:', err)
    //       })
    // }
    // sendPush(){
    //   this.storage.get('device').then((val) => {this.device = val;});
    //   this.storage.get('deviceId').then((val)=> {this.deviceid= val});
    //   this.storage.get('appVersion').then((val)=> {this.version= val
    //   let user = {
    //     "clientId":this.clientid,
    //     "employeeId":this.employeeid,
    //     "device":this.device,
    //     "deviceId":this.deviceid,
    //     "appVersion":this.version,
    //     "postid":this.postid,
    //     "flag":this.flag,
    //     "action":"create"
    //   }
    //   this.apiService.sendPushFTL(user).subscribe((res)=>{
    //     if(res.success==1){
    //       console.log('Success1:', res);
    //     }else{
    //       console.log('Success0:', res);
    //     }
    //   },(err)=>{
    //     console.log('Error:', err);
    //   })
    // });
    // }
    PreviewPage.prototype.submitAboard = function () {
        var _this = this;
        this.commonLoader();
        this.storage.get('showOnBoard').then(function (data) {
            _this.emptype = data;
            console.log('showOnBoard value is==', data);
        });
        this.storage.get('login_token').then(function (data) {
            console.log('showOnBoard value is111==', data);
            _this.login_token = data;
        });
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            console.log(' deviceId== ', _this.deviceId);
        });
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
            var user = {
                "client_id": _this.apiServices.clientId,
                "employee_id": _this.employeeId,
                "device": _this.apiServices.device,
                "device_id": _this.deviceId,
                "app_version": _this.apiServices.appVersion,
                "fav_past_time": _this.pasttime,
                "fav_sports": '',
                "fav_cuisine": _this.alldata.fav_cuisine,
                "role_model": '',
                "fav_quote": '',
                "fav_place": _this.alldata.fav_place,
                "native_place": '',
                "mobile_number": '',
                "special_achievement": '',
                "sentence": _this.alldata.sentence,
                "user_type": _this.emptype
            };
            console.log('Preview Request:', user);
            _this.apiServices.submitonboard(user, _this.login_token)
                .subscribe(function (res) {
                _this.loading.dismiss();
                if (res.success == 1) {
                    if (_this.emptype == 'Employee') {
                        _this.navCtrl.setRoot('CatgoriesPage');
                    }
                    if (_this.emptype == 'Guest') {
                        _this.navCtrl.setRoot('WalkthroughScreenPage');
                    }
                    // this.navCtrl.setRoot('WalkthroughScreenPage');
                    // this.navCtrl.setRoot('TabsPage');
                    _this.storage.set('welcome_aboard_applicable', 0).then(function (res) {
                        //as dicuss with kailash and neeraj
                        console.log('welcomeOnboard key==', res);
                    });
                    _this.sendPush();
                }
                else {
                    console.log('Success0:', res);
                }
            }, function (err) {
                console.log('Error:', err);
            });
        });
    };
    PreviewPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    PreviewPage.prototype.ionViewWillEnter = function () {
        this.menu.swipeEnable(false);
    };
    PreviewPage.prototype.sendPush = function () {
        var apikey = {
            "employee_id": this.employeeId,
        };
        this.apiServices.previewPushMailer(apikey, this.login_token).subscribe(function (res) {
            console.log("preview push", res);
        });
    };
    PreviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-preview',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/preview/preview.html"*/'<ion-header>\n\n  <ion-navbar color="themecol" class="centerIt" hideBackButton="true">\n \n      <ion-row>\n        <ion-col col-auto>\n          <ion-icon item-left style="color:white;" name="arrow-back" (tap)="editPage()"></ion-icon>\n        </ion-col>\n        <ion-col col-auto>\n          <ion-title class="centerIt">Preview</ion-title>\n        </ion-col>\n      </ion-row>\n   \n  </ion-navbar> \n</ion-header>\n<ion-content padding class="pulseBG">\n<div class="divTheme">\n  <ion-row>\n    <ion-col col-8 class="usernamecolPadding">\n      <h2 style="font-size:19px;">{{alldata?.joinee_name}}</h2>\n    </ion-col>\n\n    <ion-col col-4 class="rightIt">\n      <img [src]="imagelink" onError="this.src=\'assets/imgs/profile.png\'"\n       class="userRoundImageBig" #myImage>\n    </ion-col>\n  </ion-row>\n<ion-row>\n  <ion-col col-12>\n    <p class="designationTheme" [innerHTML]="alldata?.sentence"></p>\n  </ion-col>\n</ion-row>\n<!-- <ion-row *ngIf="alldata.award!=undefined">\n  <ion-col col-2 class="iconImagesCol">\n    <img class="iconImages" src="assets/imgs/acheivement.png">\n  </ion-col>\n  <ion-col col-10>{{alldata.award}}</ion-col>\n</ion-row> -->\n  <!-- <p class="designationTheme"></p>\n  <p class="emailTheme"></p> -->\n  <span></span>\n  <!-- <a href="tel:{{userDetails?.contact}}"><span><img src="assets/imgs/callAndroidWalaIcon.png" class="callImageTheme"></span></a>\n  <div class="userInfoTheme" [innerHTML]="979902309"></div> -->\n  <hr class="lineColor">\n\n      <!-- ROW1 -->\n      <ion-row>\n\n          <ion-col *ngIf="alldata?.fav_place!=\'\'||alldata?.fav_place!=\'NA\'" col-2 class="iconImagesCol">\n            <div *ngIf="alldata?.fav_place!=\'\'||alldata?.fav_place!=\'NA\'">\n                <img *ngIf="fav_place!=\'\'"\n                 class="iconImages" src="assets/imgs/Travel_Icon.png">\n            </div>\n         \n          </ion-col>\n    \n          <ion-col *ngIf="alldata?.fav_place!=\'\'||alldata?.fav_place!=\'NA\'"col-4  class="iconImagesInfoCol">\n            <span>{{alldata?.fav_place}}</span>\n          </ion-col>\n          \n          <ion-col *ngIf="alldata?.fav_cuisine!=\'\'||alldata?.fav_cuisine!=\'NA\'"col-2 class="iconImagesCol">\n              <!-- <img class="iconImages" src="assets/imgs/sports icon.png"> -->\n              <div *ngIf="alldata?.fav_cuisine!=\'\'||alldata?.fav_cuisine!=\'NA\'">\n                  <img *ngIf="fav_cuisine!=\'\'" class="iconImages" src="assets/imgs/FOOD-Icon.png">\n              </div>\n       \n          </ion-col>\n    \n          <ion-col *ngIf="alldata?.fav_cuisine!=\'\'||alldata?.fav_cuisine!=\'NA\'"col-4 class="iconImagesInfoCol">\n            <!-- <span>{{alldata.fav_sports}}</span> -->\n            <span>{{alldata?.fav_cuisine}}</span>\n          </ion-col>\n\n\n\n          <ion-col *ngIf="pasttime!=\'\'||pasttime!=\'NA\'"col-2 class="iconImagesCol">\n              <!-- <img class="iconImages" src="assets/imgs/sports icon.png"> -->\n              <div *ngIf="pasttime!=\'\'||pasttime!=\'NA\'">\n                  <img *ngIf="pasttime!=\'\'" class="iconImages" src="assets/imgs/heart_Icon.png">\n        \n              </div>\n            \n              </ion-col>\n    \n          <ion-col *ngIf="pasttime!=\'\'||pasttime!=\'NA\'"col-4 class="iconImagesInfoCol">\n            <!-- <span>{{alldata.fav_sports}}</span> -->\n            <span>{{pasttime}}</span>\n          </ion-col>\n    \n      </ion-row>\n      <ion-row>\n          <!-- <ion-col col-2  class="iconImagesCol">\n            <img class="iconImages" src="assets/imgs/food.png">\n          </ion-col>\n    \n          <ion-col col-4  class="iconImagesInfoCol">\n            <span>{{alldata.fav_cuisine}}</span>\n          </ion-col> -->\n          \n          <ion-col col-2  class="iconImagesCol">\n              <!-- <img class="iconImages" src="assets/imgs/hobbies.png"> -->\n          </ion-col>\n    \n          <ion-col col-4  class="iconImagesInfoCol">\n            <!-- <span>{{alldata.fav_cuisine}}</span> -->\n          </ion-col>\n      \n        </ion-row>\n\n        <!-- <hr class="lineColor"> -->\n</div>\n<!-- <div class="divTheme1">\n    <ion-row>\n        <ion-col col-12>\n             <p style="font-size: 16px;font-weight: 600;color: #4d2848;" class="designationTheme">favourite Quote</p>\n          <p class="designationTheme" [innerHTML]="alldata.fav_quote"></p> \n        </ion-col>\n      </ion-row>\n</div> -->\n\n\n<div class="divTheme1">\n<ion-row>\n  <ion-col col-6 class="centerIt">\n    <button ion-button class="buttonCss" (tap)="editPage()">\n      Edit\n    </button>\n  </ion-col>\n  <ion-col col-6 class="centerIt">\n    <button ion-button class="buttonCss" (tap)="submitAboard()">\n      Submit\n    </button>\n  </ion-col>\n</ion-row>\n</div>\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/preview/preview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], PreviewPage);
    return PreviewPage;
}());

//# sourceMappingURL=preview.js.map

/***/ }),

/***/ 830:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewPageModule", function() { return PreviewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__preview__ = __webpack_require__(1158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PreviewPageModule = /** @class */ (function () {
    function PreviewPageModule() {
    }
    PreviewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__preview__["a" /* PreviewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__preview__["a" /* PreviewPage */]),
            ],
        })
    ], PreviewPageModule);
    return PreviewPageModule;
}());

//# sourceMappingURL=preview.module.js.map

/***/ })

});
//# sourceMappingURL=72.js.map
webpackJsonp([106],{

/***/ 1064:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstructionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__ = __webpack_require__(163);
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
 * Generated class for the InstructionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InstructionPage = /** @class */ (function () {
    function InstructionPage(imageViewerCtrl, apiservices, navCtrl, navParams) {
        this.apiservices = apiservices;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._imageViewerCtrl = imageViewerCtrl;
        this.previousePageData = this.navParams.get("data");
        this.formid = this.previousePageData.form_id;
        // this.flag = this.navParams.get("flag");
        // this.formid = this.navParams.get("formid");
        this.flag = this.previousePageData.flag;
        console.log("all data== ", this.previousePageData);
        this.userImage =
            this.apiservices.clientUrl + "" + this.previousePageData.form_data_dump;
        console.log("all userImage== ", this.userImage);
    }
    InstructionPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad InstructionPage");
    };
    InstructionPage.prototype.gotosamplepassport = function () {
        // this.navCtrl.push('SamplepassportphotoPage');
        this.navCtrl.push("SamplepassportphotoPage", {
            flag: this.flag,
            formid: this.formid
        });
    };
    InstructionPage.prototype.zoomImage = function (myImage) {
        var imageViewer = this._imageViewerCtrl.create(myImage);
        imageViewer.present();
        // setTimeout(() => imageViewer.dismiss(), 30000);
        imageViewer.onDidDismiss(function () { return console.log("Viewer dismissed"); });
    };
    InstructionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-instruction",template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/instruction/instruction.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{previousePageData?.form_name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div *ngIf="previousePageData?.form_group_status==\'submit\' || previousePageData?.form_group_status==\'complete\'">\n    <!-- <ion-row>\n      <ion-col>\n        <img\n          src="{{userImage}}"\n          #myImage\n          (click)="zoomImage(myImage)"\n          onerror="this.src=\'../../assets/watermark/watermark.png\'"\n          class="userPreviouseImage"\n        />\n\n        <div style="text-align: center;" (click)="gotosamplepassport()">\n          <br />\n          <button ion-button class="btn_change" round>Edit</button>\n        </div>\n      </ion-col>\n    </ion-row> -->\n    <ion-row class="mrleft">\n      <ion-col col-5>\n        <h1 class="mrbottom">You look</h1>\n        <h1 class="mrtop">Fabulous!</h1>\n      </ion-col>\n      <ion-col col-auto> </ion-col>\n    </ion-row>\n\n    <ion-row margin-bottom>\n      <ion-col>\n        <div class="relativeDiv">\n          <img src="assets/imgs/youlookfabolous.png" />\n          <div class="absoluteDiv uploadimage">\n            <div class="imageDiv">\n              <!-- <img  src="assets/imgs/instruction.png"/> -->\n\n              <img\n                src="{{userImage}}"\n                #myImage\n                (click)="zoomImage(myImage)"\n                onerror="this.src=\'../../assets/watermark/watermark.png\'"\n              />\n              <!-- <div class="uploadIcon" (click)="addimage()">\n              <img src="assets/imgs/uploadImg.png">\n\n            </div> -->\n            </div>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="previousePageData && previousePageData.form_status == \'enable\'">\n      <ion-col>\n        <div style="text-align: center;" (click)="gotosamplepassport()">\n          <button ion-button class="btn_change" round>Edit</button>\n        </div></ion-col\n      >\n    </ion-row>\n  </div>\n\n  <div *ngIf="previousePageData?.form_group_status!=\'submit\' && previousePageData?.form_group_status!=\'complete\'">\n    <ion-row>\n      <ion-col col-1>\n        <ion-icon class="iconcss" ios="ios-star" md="md-star"></ion-icon>\n      </ion-col>\n      <ion-col col-11>\n        <p>Please take a picture of your passport size photo and upload</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <img src="assets/imgs/instruction.png" />\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-1 class="padding0">\n        <ion-icon class="iconcss" ios="ios-star" md="md-star"></ion-icon>\n      </ion-col>\n      <ion-col col-11 class="padding0">\n        <p>\n          Please upload a professional picture, as this will be used in all\n          official documents such as ID Card , PF Forms etc.\n        </p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-1 class="padding0">\n        <ion-icon class="iconcss" ios="ios-star" md="md-star"></ion-icon>\n      </ion-col>\n      <ion-col col-11 class="padding0">\n        <p>Picture must be on a white background</p>\n      </ion-col>\n    </ion-row>\n    <div style="text-align: center;" (click)="gotosamplepassport()">\n      <br />\n      <button ion-button class="btn" round>Next</button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/instruction/instruction.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__["a" /* ImageViewerController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], InstructionPage);
    return InstructionPage;
}());

//# sourceMappingURL=instruction.js.map

/***/ }),

/***/ 761:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructionPageModule", function() { return InstructionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__instruction__ = __webpack_require__(1064);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var InstructionPageModule = /** @class */ (function () {
    function InstructionPageModule() {
    }
    InstructionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__instruction__["a" /* InstructionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__instruction__["a" /* InstructionPage */]), __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__["b" /* IonicImageViewerModule */]
            ],
        })
    ], InstructionPageModule);
    return InstructionPageModule;
}());

//# sourceMappingURL=instruction.module.js.map

/***/ })

});
//# sourceMappingURL=106.js.map
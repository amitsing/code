webpackJsonp([137],{

/***/ 1023:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumslidezoomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_img_viewer__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AlbumslidezoomPage = /** @class */ (function () {
    function AlbumslidezoomPage(navCtrl, navParams, imageViewerCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.albumdata = [];
        this.albumdata = this.navParams.get('data');
        this.previousePagedata = this.navParams.get('previousePagedata');
        console.log('previousePagedata', this.previousePagedata);
        this.title = this.previousePagedata.album_name;
        this._imageViewerCtrl = imageViewerCtrl;
        console.log('this.albumdata', this.albumdata);
        this.index = this.navParams.get('index');
        console.log('this.index', this.index);
    }
    AlbumslidezoomPage.prototype.presentImage = function (myImage) {
        var imageViewer = this._imageViewerCtrl.create(myImage);
        imageViewer.present();
        // setTimeout(() => imageViewer.dismiss(), 30000);
        imageViewer.onDidDismiss(function () { return console.log('Viewer dismissed'); });
    };
    AlbumslidezoomPage.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
        console.log('Current index is', currentIndex);
        if (this.slides.isEnd() == true) {
            console.log('Current index is true');
            this.index = currentIndex;
            this.slides.lockSwipeToNext(true);
        }
        else {
            console.log('Current index is false');
            this.index = currentIndex;
            this.slides.lockSwipeToNext(false);
        }
    };
    AlbumslidezoomPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AlbumslidezoomPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* Slides */])
    ], AlbumslidezoomPage.prototype, "slides", void 0);
    AlbumslidezoomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-albumslidezoom',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/albumslidezoom/albumslidezoom.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n\n  <div *ngIf="albumdata?.length>=1" class="slideDiv">\n    <ion-row>\n      <ion-slides #countryHeadDataSlides speed="500" class="asstest" [initialSlide]="index" spaceBetween="10"  slidesPerView="1" (ionSlideDidChange)="slideChanged()">\n        <ion-slide *ngFor="let data of albumdata" style="height:350px;" class="relativeDiv" (click)="presentImage(myImage)">\n        \n          <img class="imgcss" src="{{data?.image}}"  #myImage    onerror=\'this.src="../../assets/watermark/watermark.png"\' > \n          <p  class="img_caption">{{data?.title}}</p>\n          <p  style="text-align: right;font-size:13px">{{index+1}}/{{albumdata.length}}</p>\n        </ion-slide>\n      </ion-slides>\n    </ion-row><br>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/albumslidezoom/albumslidezoom.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_img_viewer__["a" /* ImageViewerController */]])
    ], AlbumslidezoomPage);
    return AlbumslidezoomPage;
}());

//# sourceMappingURL=albumslidezoom.js.map

/***/ }),

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumslidezoomPageModule", function() { return AlbumslidezoomPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__albumslidezoom__ = __webpack_require__(1023);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AlbumslidezoomPageModule = /** @class */ (function () {
    function AlbumslidezoomPageModule() {
    }
    AlbumslidezoomPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__albumslidezoom__["a" /* AlbumslidezoomPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__albumslidezoom__["a" /* AlbumslidezoomPage */]),
            ],
        })
    ], AlbumslidezoomPageModule);
    return AlbumslidezoomPageModule;
}());

//# sourceMappingURL=albumslidezoom.module.js.map

/***/ })

});
//# sourceMappingURL=137.js.map
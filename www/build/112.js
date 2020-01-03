webpackJsonp([112],{

/***/ 1055:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstimguploadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_image_picker__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FirstimguploadPage = /** @class */ (function () {
    function FirstimguploadPage(loadingCtrl, imagePicker, menu, transfer, file, camera, modalCtrl, toastCtrl, storage, apiServices, navCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.imagePicker = imagePicker;
        this.menu = menu;
        this.transfer = transfer;
        this.file = file;
        this.camera = camera;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.apiServices = apiServices;
        this.navCtrl = navCtrl;
        this.buttonshow = 0;
        this.log = false;
        this.showResetPass = false;
        this.btnText = "Reset Password";
        this.oldPassHaveVal = false;
        this.newPassHaveVal = false;
        this.confirmpass = "";
        this.newpassword = '';
        this.confpassword = '';
        this.oldpassword = '';
    }
    FirstimguploadPage.prototype.ionViewWillEnter = function () {
        this.menu.swipeEnable(false);
    };
    FirstimguploadPage.prototype.addimage = function () {
        var _this = this;
        var profileModal = this.modalCtrl.create('ProfileDosDontsPage');
        profileModal.onDidDismiss(function (data) {
            console.log('****===', data);
            if (data == 'dismiss') {
                _this.showCustomActionSheet = true;
            }
            else {
                _this.showCustomActionSheet = false;
            }
        });
        profileModal.present();
        this.showCustomActionSheet = false;
    };
    FirstimguploadPage.prototype.hideActionsheet = function () {
        this.showCustomActionSheet = false;
    };
    FirstimguploadPage.prototype.usingCamera = function (myoption) {
        this.buttonshow = 0;
        if (myoption == 'camera') {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
        }
        else {
            this.pickFromGalleary(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
    };
    FirstimguploadPage.prototype.takePicture = function (sourceType) {
        // Create options for the Camera Dialog
        var _this = this;
        var options = {
            quality: 40,
            allowEdit: true,
            saveToPhotoAlbum: true,
            cameraDirection: 1,
            correctOrientation: true,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: sourceType,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        // Get the data of an image
        this.camera.getPicture(options).then(function (imagePath) {
            // Special handling for Android library
            console.log('imagePath==', imagePath);
            _this.currentName = imagePath;
            var name = _this.currentName.split("/"); // code for fetching file name
            _this.fileName = name[name.length - 1];
            _this.uploadImageonserver(_this.currentName, _this.fileName);
        }, function (err) {
            console.log('imagePath error==', err);
        });
    };
    FirstimguploadPage.prototype.pickFromGalleary = function (sourceType) {
        var _this = this;
        var options = {
            quality: 50,
            maximumImagesCount: 1
        };
        this.imagePicker.getPictures(options).then(function (results) {
            console.log('imagePath==', results);
            _this.currentName = results[0];
            var name = _this.currentName.split("/"); // code for fetching file name
            _this.fileName = name[name.length - 1];
            _this.uploadImageonserver(_this.currentName, _this.fileName);
        }, function (err) {
            console.log('imagePath error==', err);
        });
    };
    //Upload images on server
    FirstimguploadPage.prototype.uploadImageonserver = function (imagepass, nameoffile) {
        var _this = this;
        this.storage.get('login_token').then(function (data) {
            _this.login_token = data;
            _this.storage.get('employee_type').then(function (data) {
                _this.employee_type = data;
                console.log(' deviceId== ', _this.deviceId);
            });
            _this.storage.get('deviceId').then(function (data) {
                _this.deviceId = data;
                console.log(' deviceId== ', _this.deviceId);
            });
            _this.showCustomActionSheet = false;
            _this.userImage = '../../assets/watermark/load.gif';
            _this.storage.get('employeeId').then(function (data) {
                _this.employeeId = data;
            });
            _this.storage.get('showOnBoard').then(function (data) {
                console.log('showOnBoard value is111==', data);
                _this.employeeType = data;
            });
            // var url = this.apiServices.profilePictureUpload;
            var url = _this.apiServices.passportpicupload;
            var myheaders = new Headers();
            myheaders.append('Content-Type', 'application/json');
            myheaders.append('Authorization', _this.login_token);
            var targetPath = imagepass; // aply only for imagepicker checking
            _this.storage.get('employeeId').then(function (data) {
                _this.employeeId = data;
                var options = {
                    fileKey: "file",
                    fileName: nameoffile,
                    chunkedMode: false,
                    mimeType: "multipart/form-data",
                    headers: { 'Authorization': _this.login_token },
                    params: {
                        // 'app_version':this.apiServices.appVersion,
                        // 'flag':'profile',
                        // 'client_id':this.apiServices.clientId,
                        // 'device':this.apiServices.device,
                        // 'device_id':this.deviceId, 
                        // 'file': targetPath,
                        // 'employee_id': this.employeeId ,
                        // 'user_type':this.employeeType
                        'flag': 'profile',
                        'client_id': _this.apiServices.clientId,
                        'device': _this.apiServices.device,
                        'device_id': _this.deviceId,
                        'app_version': _this.apiServices.appVersion,
                        'employee_id': _this.employeeId,
                        'user_type': _this.employee_type,
                        'file': targetPath,
                    }
                };
                console.log("passing key== ", JSON.stringify(options));
                var fileTransfer = _this.transfer.create();
                fileTransfer.upload(targetPath, url, options).then(function (res) {
                    var data = JSON.parse(res.response);
                    console.log("response== ", res);
                    console.log("response22== ", data);
                    if (data.success == 1) {
                        _this.buttonshow = 1;
                        _this.showCustomActionSheet = false;
                        _this.userImage = data.link;
                        _this.userImageBg = _this.userImage;
                        _this.storage.set('profile_pic_upload', '1');
                        _this.storage.set('user_image', data.link);
                        _this.apiMessage(data.message);
                    }
                    else {
                        _this.apiMessage(data.message);
                        console.log("message key== ", data.message);
                    }
                }, function (err) {
                    console.log(" err== ", err);
                    if (err.http_status == 200) {
                        _this.userImage = _this.profileDetails.user_image;
                        _this.userImageBg = _this.userImage;
                    }
                    // alert('err=='+ err);
                    _this.apiMessage(err);
                });
            });
        });
    };
    FirstimguploadPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    FirstimguploadPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FirstimguploadPage');
    };
    FirstimguploadPage.prototype.submitFunc = function () {
        this.navCtrl.setRoot('CatgoriesPage');
    };
    FirstimguploadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-firstimgupload',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/firstimgupload/firstimgupload.html"*/'<!--\n  Generated template for the FirstimguploadPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Image Upload</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="bgColor">\n\n  <div>\n    <ion-card class="mycard">\n      <p>Please upload your picture to continue.</p>\n      <div class="new">\n          <ion-row>\n            <ion-col col-12 >\n                <img srcset="{{userImage}}" src="assets/imgs/usericon.png" class="userImage"/>\n                <img class="camIcon" src="assets/imgs/uploadImg.png" (tap)="addimage()">\n            </ion-col>\n          </ion-row>\n        </div>\n        <ion-row *ngIf="buttonshow==1">\n            <ion-col col-12>\n              <div class="cntr" (click)="submitFunc()">\n                <button ion-button class="btn" round>Submit</button>\n              </div>\n            </ion-col>\n          </ion-row>\n    </ion-card>\n  </div>\n\n\n\n  <!-- <div class="relativeDIV">\n    <div class="profileBGImage" [style.background-image]="\'url(\' +userImageBg+ \')\'" >\n        <div class="maindiv">\n            <ion-icon class="seticon" (click)="showlog(log)" name="more"></ion-icon>\n            <div *ngIf="log==true" class="setlog" (click)="signOut()">\n              <p>Sign out</p>\n            </div>\n          </div> \n\n    </div> -->\n    <!-- <div class="blackTransparent"></div>\n    <img src=" " class="userImage"/>\n    <div class="absoDIV">\n        <ion-row>\n          <ion-col col-auto>\n              <img srcset="{{userImage}}" src="../../assets/watermark/watermark.png" class="userImage"/>\n              <img class="camIcon" src="assets/imgs/uploadImg.png" (tap)="addimage()">\n          </ion-col>\n          <ion-col>\n            <h6 class="userName">{{userName}}</h6>\n            <!-- <p class="userDesignation">{{designation}} <span *ngIf="userlocation!=\'\'">|</span> {{userlocation}}</p> \n          </ion-col>\n        </ion-row>\n      </div>\n  </div> -->\n\n\n  <div *ngIf="showCustomActionSheet==true">\n    <div class="transparentLayerActionsheet" (tap)="hideActionsheet()"></div>\n    <div class="customActionsheetDIV">\n      <ion-grid>\n        <ion-row><ion-col><h2>Profile Picture</h2></ion-col></ion-row>\n        <ion-row>\n          <ion-col col-6 class="centerData" (click)="usingCamera(\'camera\')">\n            <img src="assets/imgs/camera.png" class="actionSheetIcon"/>\n              <h4>Camera</h4>\n          </ion-col>\n          <ion-col col-6 class="centerData" (click)="usingCamera(\'gallery\')">\n            <img src="assets/imgs/album.png"class="actionSheetIcon"/>\n            <h4>Gallery</h4>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n\n<!-- \n  <div *ngIf="buttonshow==1" style="text-align: -webkit-center;">\n    <button  ion-button full class="buttonCss" (tap)="submitFunc()">\n     Submit\n    </button>\n  </div> -->\n\n  <!-- <ion-row *ngIf="buttonshow==1"> -->\n    <!-- <ion-row>\n    <ion-col col-12>\n      <div class="cntr" (click)="submitFunc()">\n        <button ion-button class="btn" round>Submit</button>\n      </div>\n    </ion-col>\n  </ion-row> -->\n\n\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/firstimgupload/firstimgupload.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_image_picker__["a" /* ImagePicker */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */]])
    ], FirstimguploadPage);
    return FirstimguploadPage;
}());

//# sourceMappingURL=firstimgupload.js.map

/***/ }),

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstimguploadPageModule", function() { return FirstimguploadPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firstimgupload__ = __webpack_require__(1055);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FirstimguploadPageModule = /** @class */ (function () {
    function FirstimguploadPageModule() {
    }
    FirstimguploadPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__firstimgupload__["a" /* FirstimguploadPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__firstimgupload__["a" /* FirstimguploadPage */]),
            ],
        })
    ], FirstimguploadPageModule);
    return FirstimguploadPageModule;
}());

//# sourceMappingURL=firstimgupload.module.js.map

/***/ })

});
//# sourceMappingURL=112.js.map
webpackJsonp([69],{

/***/ 1161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePicUploadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_image_picker__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular_index__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// import { e } from '@angular/core/src/render3';
/**
 * Generated class for the ProfilePicUploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePicUploadPage = /** @class */ (function () {
    function ProfilePicUploadPage(camera, navCtrl, navParams, modalCtrl, toastCtrl, storage, apiServices, transfer, file, imagePicker, menu) {
        var _this = this;
        this.camera = camera;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.apiServices = apiServices;
        this.transfer = transfer;
        this.file = file;
        this.imagePicker = imagePicker;
        this.menu = menu;
        this.enablenextBtn = false;
        this.previewText = "Preview";
        this.previewBtnEnale = true;
        this.storage.get('showOnBoard').then(function (data) {
            console.log('showOnBoard value is111==', data);
            _this.employeeType = data;
        });
        this.storage.get('isCeoScreenVisit').then(function (data) {
            _this.isCeoPageVisit = data;
        });
        this.storage.get('userImage').then(function (data) {
            _this.userImage = data;
        });
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
        });
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
        });
    }
    ProfilePicUploadPage.prototype.addimage = function () {
        var _this = this;
        var profileModal = this.modalCtrl.create('ProfileDosDontsPage');
        profileModal.onDidDismiss(function (data) {
            console.log(data);
            _this.showCustomActionSheet = true;
        });
        profileModal.present();
        this.showCustomActionSheet = false;
    };
    ProfilePicUploadPage.prototype.hideActionsheet = function () {
        this.showCustomActionSheet = false;
    };
    ProfilePicUploadPage.prototype.ceoMessage = function () {
        if (this.isCeoPageVisit == 1) {
            this.navCtrl.push('CeoMessageePage');
        }
        else {
            this.navCtrl.setRoot('HomePage');
        }
    };
    ProfilePicUploadPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ImageUploadPage');
    };
    ProfilePicUploadPage.prototype.usingCamera = function (myoption) {
        if (myoption == 'camera') {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
        }
        else {
            this.pickFromGalleary(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
    };
    ProfilePicUploadPage.prototype.takePicture = function (sourceType) {
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
    ProfilePicUploadPage.prototype.pickFromGalleary = function (sourceType) {
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
    ProfilePicUploadPage.prototype.uploadImageonserver = function (imagepass, nameoffile) {
        var _this = this;
        this.storage.get('login_token').then(function (data) {
            _this.login_token = data;
            _this.userImage = '../../assets/watermark/load.gif';
            _this.showCustomActionSheet = false;
            _this.storage.get('employeeId').then(function (data) {
                _this.employeeId = data;
            });
            _this.storage.get('showOnBoard').then(function (data) {
                console.log('showOnBoard value is111==', data);
                _this.employeeType = data;
            });
            var url = _this.apiServices.profilePictureUpload;
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
                        'app_version': _this.apiServices.appVersion,
                        'flag': 'profile',
                        'client_id': _this.apiServices.clientId,
                        'device': _this.apiServices.device,
                        'device_id': _this.deviceId,
                        'file': targetPath,
                        'employee_id': _this.employeeId,
                        'user_type': _this.employeeType
                    }
                };
                console.log("optionsasd", JSON.stringify(options));
                var fileTransfer = _this.transfer.create();
                fileTransfer.upload(targetPath, url, options).then(function (res) {
                    var data = JSON.parse(res.response);
                    console.log("response== ", res);
                    console.log("response22== ", data);
                    if (data.success == 1) {
                        _this.showCustomActionSheet = false;
                        _this.enablenextBtn = true;
                        _this.userImage = data.link;
                        _this.storage.set('userImage', data.link);
                        _this.apiMessage(data.message);
                    }
                    else {
                        _this.apiMessage(data.message);
                    }
                }, function (err) {
                    // alert('err=='+ err);
                    _this.apiMessage(err);
                });
            });
        });
    };
    ProfilePicUploadPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    ProfilePicUploadPage.prototype.gotoOnboardPreviewPage = function (nativeplace, qualification, college, internorganigation, interntopic, cuisine, destination, pastime) {
        var _this = this;
        this.previewText = "Please wait...";
        this.previewBtnEnale = false;
        if (internorganigation == '' || internorganigation == undefined) {
            internorganigation = "";
        }
        if (interntopic == '' || interntopic == undefined) {
            interntopic = "";
        }
        if (this.userImage == undefined || this.userImage == '' || this.userImage == null) {
            this.previewText = "Preview";
            this.previewBtnEnale = true;
            var toast = this.toastCtrl.create({
                message: 'Please upload your profile picture for preview.',
                duration: 3000
            });
            toast.present();
            return false;
        }
        if (nativeplace == undefined || nativeplace == '' || nativeplace == null) {
            this.previewText = "Preview";
            this.previewBtnEnale = true;
            var toast = this.toastCtrl.create({
                message: 'Please enter your native place.',
                duration: 3000
            });
            toast.present();
            return false;
        }
        // if (qualification == undefined || qualification == '' || qualification == null) {
        //   const toast = this.toastCtrl.create({
        //     message: 'Please enter your highest qualification.',
        //     duration: 3000
        //   });
        //   toast.present();
        //   return false;
        // }
        // if (college == undefined || college == '' || college == null) {
        //   const toast = this.toastCtrl.create({
        //     message: 'Please enter your college.',
        //     duration: 3000
        //   });
        //   toast.present();
        //   return false;
        // }
        if (cuisine == undefined || cuisine == '' || cuisine == null) {
            this.previewText = "Preview";
            this.previewBtnEnale = true;
            var toast = this.toastCtrl.create({
                message: 'Please enter your favourite cuisine.',
                duration: 3000
            });
            toast.present();
            return false;
        }
        if (destination == undefined || destination == '' || destination == null) {
            this.previewText = "Preview";
            this.previewBtnEnale = true;
            var toast = this.toastCtrl.create({
                message: 'Please enter your favourite destination.',
                duration: 3000
            });
            toast.present();
            return false;
        }
        if (pastime == undefined || pastime == '' || pastime == null) {
            this.previewText = "Preview";
            this.previewBtnEnale = true;
            var toast = this.toastCtrl.create({
                message: 'Please enter your pastime.',
                duration: 3000
            });
            toast.present();
            return false;
        }
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
        });
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            var apiKey = {
                "clientId": _this.apiServices.clientId,
                "employeeId": _this.employeeId,
                "device": _this.apiServices.device,
                "deviceId": _this.deviceId,
                "appVersion": _this.apiServices.appVersion,
                "nativePlace": nativeplace,
                "interOrg": internorganigation,
                "interTopic": interntopic,
                "favCuisine": cuisine,
                "favDestination": destination,
                "favPassTime": pastime,
                "qualification": qualification
            };
            console.log('login api key==', apiKey);
            _this.apiServices.preview_aboard(apiKey).then(function (result) {
                console.log('optionalUpdate response== ', result);
                _this.previewText = "Preview";
                _this.previewBtnEnale = true;
                _this.allData = result;
                console.log('this.allData', _this.allData);
                if (_this.allData.success == 1) {
                    _this.navCtrl.push('OnboardPreviewPage', { 'data': _this.allData });
                }
                else {
                    _this.apiMessage(_this.allData.message);
                }
            }, function (err) {
                console.log('err== ', err);
                _this.apiMessage(err);
                _this.previewText = "Preview";
                _this.previewBtnEnale = true;
            });
        });
    };
    ProfilePicUploadPage.prototype.ionViewWillEnter = function () {
        this.menu.swipeEnable(false);
    };
    ProfilePicUploadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile-pic-upload',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/profile-pic-upload/profile-pic-upload.html"*/'\n<ion-header>\n    <!-- <ion-toolbar>\n        <ion-buttons left>\n          <button ion-button swipeEnabled>\n            <ion-icon name="menu"></ion-icon>\n            <img style="height:40px;width:40px;" src="assets/imgs/icon-small.png" class="imgss"/>\n          </button>\n        </ion-buttons>\n        <ion-title text-center>Image Upload</ion-title>\n      </ion-toolbar> -->\n  <ion-navbar>\n      <ion-title text-center>Image Upload</ion-title>\n      <!-- <div class="iconeval">\n          <img src="assets/imgs/logologin.png" class="imgss"/>\n        </div> -->\n</ion-navbar>\n</ion-header>\n\n<ion-content padding class="bg">\n  <ion-row>\n    <ion-col col-12 text-center><p style="font-size:18px;">We would like to know more about you</p></ion-col>\n  </ion-row>\n  <ion-card margin-vertical>\n    <ion-row text-center>\n      <ion-col col-12 no-padding><div class="relative">\n        <img class="imgcss" srcset="{{userImage}}" src="assets/imgs/icons/usericon.png">\n        <img class="absolute" src="assets/imgs/icons/uploadImg.png"\n         (tap)="addimage()"></div></ion-col>\n      <ion-col text-right margin-top><p style="font-size:18px;text-align:center;">Upload your Profile picture here:</p></ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col  col-12 col-sm-6>\n        <!-- <label class="left">Native Place (where you originally belong to)<span class="redColor">*</span></label> -->\n\n        <p class="labelfield">Native Place (where you originally belong to)<span class="redColor">*</span></p>\n        <ion-item>\n          <ion-input type="text" [(ngModel)]="nativeplace"></ion-input>\n        </ion-item>\n      </ion-col>\n      <!-- <ion-col col-12 col-sm-6>\n        <label class="left">Highest Qualification<span class="redColor">*</span></label>\n        <ion-item>\n        <ion-input type="text" [(ngModel)]="qualification"></ion-input>\n        </ion-item>\n      \n      </ion-col>\n      <ion-col  col-12 col-sm-6>\n        <label class="left">College/ Institute Name<span class="redColor">*</span></label>\n        <ion-item>\n            <ion-input type="text" [(ngModel)]="college"></ion-input>\n        </ion-item>\n      \n        <p class="redColor" *ngIf="isCollege == true">*Enter your College</p>\n      </ion-col> -->\n      <ion-col  col-12 col-sm-6>\n        <!-- <label class="left">Internship Organization (if any)</label> -->\n\n        <p class="labelfield">\n          Internship Organization (if any)\n        </p>\n        <ion-item>\n            <ion-input type="text" placeholder="Leave it blank if not relevant" [(ngModel)]="internorganigation"></ion-input>\n        </ion-item>\n    \n      </ion-col>\n      <ion-col  col-12 col-sm-6>\n        <!-- <label class="left">Topic of Internship</label> -->\n        <p class="labelfield">\n          Topic of Internship \n        </p>\n        <ion-item>\n            <ion-input type="text" placeholder="Leave it blank if not relevant" [(ngModel)]="interntopic"></ion-input>\n        </ion-item>\n     \n      </ion-col>\n      <ion-col  col-12 col-sm-6>\n        <!-- <label class="left">Favourite cuisine<span class="redColor">*</span></label> -->\n\n        <p class="labelfield">\n          Favourite cuisine<span class="redColor">*</span>   \n        </p>\n        <ion-item>\n            <ion-input type="text" [(ngModel)]="cuisine"></ion-input>\n        </ion-item>\n     \n        <!-- <p class="redColor" *ngIf="isCuisine == true">*Enter your Favourite cuisine</p> -->\n      </ion-col>\n      <ion-col  col-12 col-sm-6>\n        <!-- <label class="left">Favourite holiday destination<span class="redColor">*</span></label> -->\n\n        <p class="labelfield">\n          Favourite holiday destination<span class="redColor">*</span>\n        </p>\n        <ion-item>\n            <ion-input type="text" [(ngModel)]="destination"></ion-input>\n        </ion-item>\n        <!-- <p class="redColor" *ngIf="isDestination == true">*Enter your pastime</p> -->\n      </ion-col>\n      <ion-col  col-12 col-sm-6>\n        <!-- <label class="left">Favourite pastime<span class="redColor">*</span></label> -->\n\n        <p class="labelfield">\n          Favourite pastime<span class="redColor">*</span>\n        </p>\n        <ion-item>\n            <ion-input type="text" [(ngModel)]="pastime"></ion-input>\n        </ion-item>\n      \n        <!-- <p class="redColor" *ngIf="isPastime == true">*Enter your Pastime</p> -->\n      </ion-col>\n      <ion-col col-12 padding>\n        <div class="abslink"><button type="submit" ion-button [disabled]="previewBtnEnale==false" full text-capitalize\n           (click)="gotoOnboardPreviewPage(nativeplace,qualification,college,internorganigation,\n           interntopic,cuisine,destination,pastime)">{{previewText}}</button></div>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <div *ngIf="showCustomActionSheet==true">\n    <div class="transparentLayerActionsheet" (tap)="hideActionsheet()"></div>\n    <div class="customActionsheetDIV">\n      <ion-grid>\n        <ion-row><ion-col><h2>Profile Picture</h2></ion-col></ion-row>\n        <ion-row>\n          <ion-col col-6 class="centerData" (click)="usingCamera(\'camera\')">\n            <img src="assets/imgs/icons/camera.png" class="actionSheetIcon"/>\n            <h4>Camera</h4>\n          </ion-col>\n          <ion-col col-6 class="centerData" (click)="usingCamera(\'gallery\')">\n            <img src="assets/imgs/icons/gallery.png"class="actionSheetIcon"/>\n            <h4>Gallery</h4>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/profile-pic-upload/profile-pic-upload.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_image_picker__["a" /* ImagePicker */], __WEBPACK_IMPORTED_MODULE_8_ionic_angular_index__["r" /* MenuController */]])
    ], ProfilePicUploadPage);
    return ProfilePicUploadPage;
}());

//# sourceMappingURL=profile-pic-upload.js.map

/***/ }),

/***/ 833:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePicUploadPageModule", function() { return ProfilePicUploadPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_pic_upload__ = __webpack_require__(1161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePicUploadPageModule = /** @class */ (function () {
    function ProfilePicUploadPageModule() {
    }
    ProfilePicUploadPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile_pic_upload__["a" /* ProfilePicUploadPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile_pic_upload__["a" /* ProfilePicUploadPage */]),
            ],
        })
    ], ProfilePicUploadPageModule);
    return ProfilePicUploadPageModule;
}());

//# sourceMappingURL=profile-pic-upload.module.js.map

/***/ })

});
//# sourceMappingURL=69.js.map
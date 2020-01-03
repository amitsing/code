webpackJsonp([63],{

/***/ 1167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SamplepassportphotoPage; });
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








var SamplepassportphotoPage = /** @class */ (function () {
    function SamplepassportphotoPage(loadingCtrl, imagePicker, transfer, file, camera, modalCtrl, toastCtrl, storage, apiServices, navCtrl, navParams) {
        var _this = this;
        this.loadingCtrl = loadingCtrl;
        this.imagePicker = imagePicker;
        this.transfer = transfer;
        this.file = file;
        this.camera = camera;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.apiServices = apiServices;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.buttonshow = 0;
        this.showdone = 0;
        this.hideshow = 0;
        this.bgImage = "assets/imgs/youlookfabolous.png";
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            console.log(' deviceId== ', _this.deviceId);
        });
        this.title = 'Passport picture';
        this.flag = this.navParams.get('flag');
        console.log('flag**=', this.flag);
        this.formid = this.navParams.get('formid');
        console.log('flag**=', this.formid);
        this.storage.get('showOnBoard').then(function (data) {
            _this.usertype = data;
            console.log('showOnBoard value is111==', data);
        });
        this.storage.get('login_token').then(function (data) {
            console.log('this.login_token1', data);
            _this.login_token = data;
        });
    }
    SamplepassportphotoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SamplepassportphotoPage');
    };
    SamplepassportphotoPage.prototype.addimage = function () {
        // let profileModal = this.modalCtrl.create('ProfileDosDontsPage');
        // profileModal.onDidDismiss(data => {
        //   console.log('****===',data);
        //   if(data=='dismiss'){
        //     this.showCustomActionSheet=true;
        //   }else{
        //     this.showCustomActionSheet=false;
        //   }
        // })
        // profileModal.present();
        // this.showCustomActionSheet=false;
        // this.showCustomActionSheet=true;
        this.showCustomActionSheet = true;
    };
    SamplepassportphotoPage.prototype.hideActionsheet = function () {
        this.showCustomActionSheet = false;
    };
    SamplepassportphotoPage.prototype.usingCamera = function (myoption) {
        // this.hideshow = 1;
        this.buttonshow = 0;
        this.title = '';
        if (myoption == 'camera') {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
        }
        else {
            this.pickFromGalleary(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
    };
    SamplepassportphotoPage.prototype.takePicture = function (sourceType) {
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
    SamplepassportphotoPage.prototype.pickFromGalleary = function (sourceType) {
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
    SamplepassportphotoPage.prototype.uploadImageonserver = function (imagepass, nameoffile) {
        var _this = this;
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            console.log(' deviceId== ', _this.deviceId);
        });
        this.storage.get('login_token').then(function (data) {
            console.log('this.login_token2', data);
            _this.login_token = data;
            _this.showCustomActionSheet = false;
            _this.userImage = '../../assets/watermark/load.gif';
            _this.storage.get('employeeId').then(function (data) {
                _this.employeeId = data;
            });
            var url = _this.apiServices.passportpicupload;
            // let myheaders = new Headers();
            // myheaders.append('Content-Type', 'application/json');
            // myheaders.append('Authorization', this.login_token);
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
                        // 'appVersion': this.apiServices.appVersion,
                        'flag': 'passport_pic',
                        'client_id': _this.apiServices.clientId,
                        'device': _this.apiServices.device,
                        'device_id': _this.deviceId,
                        'app_version': _this.apiServices.appVersion,
                        'employee_id': _this.employeeId,
                        'user_type': _this.usertype,
                        'file': targetPath,
                        'form_id': _this.formid
                    }
                };
                console.log("optionsasd", JSON.stringify(options));
                var fileTransfer = _this.transfer.create();
                fileTransfer.upload(targetPath, url, options).then(function (res) {
                    var data = JSON.parse(res.response);
                    console.log("response== ", res);
                    console.log("response22== ", data);
                    if (data.success == 1) {
                        _this.hideshow = 1;
                        _this.showCustomActionSheet = false;
                        _this.userImage = data.link;
                        _this.buttonshow = 1;
                        // this.userImageBg=this.userImage;
                        _this.storage.set('userImage', data.link);
                        // this.apiMessage(data.message);
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
    SamplepassportphotoPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 2000
        });
        toast.present();
    };
    SamplepassportphotoPage.prototype.gotolist = function () {
        this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length() - 3));
    };
    SamplepassportphotoPage.prototype.submit = function () {
        var _this = this;
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
            console.log(' employeeId== ', _this.employeeId);
        });
        this.storage.get('login_token').then(function (data) {
            console.log('showOnBoard value is111==', data);
            _this.login_token = data;
        });
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            //  this.token='Q3owSXo3T05BVVJscHREVCsyeUtqZz09OjoWf4jZSksqJnff2wxdlZ7e'
            var apiKey = {
                "client_id": _this.apiServices.clientId,
                "employee_id": _this.employeeId,
                "device": _this.apiServices.device,
                "device_id": _this.deviceId,
                "app_version": _this.apiServices.appVersion,
                "link": _this.userImage,
                "user_type": _this.usertype,
                'form_id': _this.formid
            };
            _this.apiServices.passportimgsubmit(apiKey, _this.login_token)
                .subscribe(function (res) {
                // this.apiServices.urllist(apiKey,this.token).then((result) => { 
                console.log('', res);
                if (res.success == 1) {
                    _this.buttonshow = 0;
                    _this.showdone = 1;
                    // console.log('succ', this.allData);
                    _this.apiMessage(res.message);
                    _this.successmsg = res.message;
                    _this.navCtrl.popTo(_this.navCtrl.getByIndex(_this.navCtrl.length() - 3));
                }
                else {
                    _this.apiMessage(res.message);
                }
            }, function (err) {
                console.log('err== ', err);
                _this.apiMessage(err);
            });
        });
    };
    SamplepassportphotoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-samplepassportphoto',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/samplepassportphoto/samplepassportphoto.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<!-- class="backcolor" -->\n\n<ion-content [ngClass]="{\'popupDiv\':showCustomActionSheet==true,\'backcolor\':hideshow==0}">\n  <div *ngIf="hideshow==0">\n    <ion-row>\n      <ion-col col-12>\n        <img src="assets/imgs/profile photo .png" />\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <div class="btndiv" (click)="addimage()">\n          <button ion-button class="btn" round>Upload</button>\n        </div>\n      </ion-col>\n    </ion-row>\n    <div *ngIf="showCustomActionSheet==true">\n      <div class="transparentLayerActionsheet" (tap)="hideActionsheet()"></div>\n      <div class="customActionsheetDIV">\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <h2>Profile Picture</h2>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6 class="centerData" (click)="usingCamera(\'camera\')">\n              <img src="assets/imgs/camera.png" class="actionSheetIcon" />\n              <h4>Camera</h4>\n            </ion-col>\n            <ion-col col-6 class="centerData" (click)="usingCamera(\'gallery\')">\n              <img src="assets/imgs/gallery.png" class="actionSheetIcon" />\n              <h4>Gallery</h4>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n  </div>\n  <!-- second div -->\n\n  <div *ngIf="hideshow==1">\n    <ion-row class="mrleft">\n      <ion-col col-5>\n        <h1 class="mrbottom">You look</h1>\n        <h1 class="mrtop">Fabulous!</h1>\n      </ion-col>\n      <ion-col col-auto>\n      </ion-col>\n    </ion-row>\n\n    <ion-row margin-bottom>\n      <ion-col>\n        <div class="relativeDiv">\n          <img src="assets/imgs/youlookfabolous.png" />\n          <div class="absoluteDiv uploadimage">\n            <div class="imageDiv">\n              <!-- <img  src="assets/imgs/instruction.png"/> -->\n\n              <img src="assets/imgs/profile.png" srcset="{{userImage}}">\n              <div class="uploadIcon" (click)="addimage()">\n                <img src="assets/imgs/uploadImg.png">\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="showdone==1">\n      <ion-col col-12>\n        <p class="paracss">{{successmsg}}</p>\n      </ion-col>\n    </ion-row>\n\n    <!-- <ion-row *ngIf="showdone==1">\n      <ion-col col-12>\n        <div class="cntr" (click)="gotolist()">\n          <button ion-button class="btn" round>Done</button>\n        </div>\n      </ion-col>\n    </ion-row> -->\n\n    <ion-row *ngIf="buttonshow==1">\n      <ion-col col-12>\n        <div class="cntr" (click)="submit()">\n          <button ion-button class="btn" round>Submit</button>\n        </div>\n      </ion-col>\n    </ion-row>\n\n\n    <div *ngIf="showCustomActionSheet==true">\n      <div class="transparentLayerActionsheet" (tap)="hideActionsheet()"></div>\n      <div class="customActionsheetDIV">\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <h2>Profile Picture</h2>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6 class="centerData" (click)="usingCamera(\'camera\')">\n              <img src="assets/imgs/camera.png" class="actionSheetIcon" />\n              <h4>Camera</h4>\n            </ion-col>\n            <ion-col col-6 class="centerData" (click)="usingCamera(\'gallery\')">\n              <img src="assets/imgs/gallery.png" class="actionSheetIcon" />\n              <h4>Gallery</h4>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/samplepassportphoto/samplepassportphoto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], SamplepassportphotoPage);
    return SamplepassportphotoPage;
}());

//# sourceMappingURL=samplepassportphoto.js.map

/***/ }),

/***/ 839:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SamplepassportphotoPageModule", function() { return SamplepassportphotoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__samplepassportphoto__ = __webpack_require__(1167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SamplepassportphotoPageModule = /** @class */ (function () {
    function SamplepassportphotoPageModule() {
    }
    SamplepassportphotoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__samplepassportphoto__["a" /* SamplepassportphotoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__samplepassportphoto__["a" /* SamplepassportphotoPage */]),
            ],
        })
    ], SamplepassportphotoPageModule);
    return SamplepassportphotoPageModule;
}());

//# sourceMappingURL=samplepassportphoto.module.js.map

/***/ })

});
//# sourceMappingURL=63.js.map
webpackJsonp([135],{

/***/ 1025:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlreadyacountformPage; });
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








var AlreadyacountformPage = /** @class */ (function () {
    function AlreadyacountformPage(navCtrl, navParams, zone, loadingCtrl, alertCtrl, platform, toastCtrl, actionSheetCtrl, storage, apiServices, imagePicker, transfer, file, camera) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.zone = zone;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.storage = storage;
        this.apiServices = apiServices;
        this.imagePicker = imagePicker;
        this.transfer = transfer;
        this.file = file;
        this.camera = camera;
        this.previous_bank_detail = [];
        this.buttonshow = 0;
        this.acountselection = this.navParams.get('acountselection');
        this.previous_bank_detail = this.navParams.get('previous_bank_detail');
        this.previousdata = this.navParams.get('previousdata');
        console.log('this.previous_bank_detail', this.previous_bank_detail);
        if (this.previous_bank_detail.length > 0) {
            this.bAcountNumber = this.previous_bank_detail[0].account_number;
            this.cAcountNumber = this.previous_bank_detail[0].account_number;
            this.Bname = this.previous_bank_detail[0].bank_name;
            this.BranchAddress = this.previous_bank_detail[0].branch_address;
            this.IFScode = this.previous_bank_detail[0].ifsc;
            this.MobileNumber = this.previous_bank_detail[0].mobile_number;
        }
        this.userImage = this.previous_bank_detail[0].media;
        this.storage.get('showOnBoard').then(function (data) {
            _this.usertype = data;
            console.log('showOnBoard value is111==', data);
        });
        this.storage.get('login_token').then(function (data) {
            console.log('this.login_token1', data);
            _this.login_token = data;
        });
    }
    //Common Loader:
    AlreadyacountformPage.prototype.commonLoader = function () {
        this.loading = this.loadingCtrl.create({
            enableBackdropDismiss: true,
            spinner: 'ios-small',
            content: 'Loading data...'
        });
        this.loading.present();
    };
    AlreadyacountformPage.prototype.submit = function () {
        if (this.Bname == undefined || this.Bname == '') {
            this.msg = 'Please enter Bank Name';
            this.apiMessage(this.msg);
            return false;
        }
        console.log("this.bAcountNumber", this.bAcountNumber);
        if (this.bAcountNumber == undefined || this.bAcountNumber == '') {
            this.msg = 'Please enter Bank Account Number';
            this.apiMessage(this.msg);
            return false;
        }
        if (this.cAcountNumber == undefined || this.cAcountNumber == '') {
            this.msg = 'Please confirm Bank Account Number';
            this.apiMessage(this.msg);
            return false;
        }
        if (this.IFScode == undefined || this.IFScode == '') {
            this.msg = 'Please enter IFSC Code';
            this.apiMessage(this.msg);
            return false;
        }
        if (this.BranchAddress == undefined || this.BranchAddress == '') {
            this.msg = 'Please confirm IFSC Code';
            this.apiMessage(this.msg);
            return false;
        }
        if (this.MobileNumber == undefined) {
            this.msg = 'Please enter Mobile Number';
            this.apiMessage(this.msg);
            return false;
        }
        this.submitinstruction();
    };
    AlreadyacountformPage.prototype.submitinstruction = function () {
        var _this = this;
        this.commonLoader();
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
                "selected_option": parseInt(_this.acountselection) + 1,
                "bank_name": _this.Bname,
                "account_number": _this.bAcountNumber,
                "confirm_account_number": _this.cAcountNumber,
                "ifsc": _this.IFScode,
                "branch_address": _this.BranchAddress,
                "mobile_number": _this.MobileNumber,
                "form_id": _this.previousdata.form_id,
                // "flag":'edit',
                // "auto_id":this.previous_bank_detail[0].auto_id,
                "cancel_check": _this.userImage
            };
            _this.apiServices.submitinstruction(apiKey, _this.login_token)
                .subscribe(function (res) {
                _this.loading.dismiss();
                // this.apiServices.urllist(apiKey,this.token).then((result) => { 
                console.log('', res);
                if (res.success == 1) {
                    _this.navCtrl.popTo(_this.navCtrl.getByIndex(_this.navCtrl.length() - 3));
                    // console.log('succ', this.allData);
                }
                else {
                    // this.allData=[];
                    _this.apiMessage(res.message);
                }
            }, function (err) {
                console.log('err== ', err);
                _this.apiMessage(err);
                _this.loading.dismiss();
            });
        });
    };
    AlreadyacountformPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    AlreadyacountformPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AlreadyacountformPage');
    };
    AlreadyacountformPage.prototype.takePhotoFrom = function () {
        var _this = this;
        this.buttonshow = 0;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Change Profile Picture',
            buttons: [
                {
                    text: 'Camera',
                    role: 'destructive',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                    }
                }, {
                    text: 'Gallery',
                    handler: function () {
                        _this.pickFromGalleary(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        actionSheet.present();
    };
    AlreadyacountformPage.prototype.takePicture = function (sourceType) {
        // Create options for the Camera Dialog
        var _this = this;
        var options = {
            quality: 40,
            allowEdit: true,
            saveToPhotoAlbum: false,
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
    AlreadyacountformPage.prototype.pickFromGalleary = function (sourceType) {
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
    AlreadyacountformPage.prototype.uploadImageonserver = function (imagepass, nameoffile) {
        var _this = this;
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            console.log(' deviceId== ', _this.deviceId);
        });
        this.storage.get('login_token').then(function (data) {
            console.log('this.login_token2', data);
            _this.login_token = data;
            // this.showCustomActionSheet = false;
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
                        'flag': 'cancel_check',
                        'client_id': _this.apiServices.clientId,
                        'device': _this.apiServices.device,
                        'device_id': _this.deviceId,
                        'app_version': _this.apiServices.appVersion,
                        'employee_id': _this.employeeId,
                        'user_type': _this.usertype,
                        'file': targetPath,
                    }
                };
                console.log("optionsasd", JSON.stringify(options));
                var fileTransfer = _this.transfer.create();
                fileTransfer.upload(targetPath, url, options).then(function (res) {
                    var data = JSON.parse(res.response);
                    console.log("response== ", res);
                    console.log("response22== ", data);
                    if (data.success == 1) {
                        // this.showCustomActionSheet = false;
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
    AlreadyacountformPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-alreadyacountform',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/alreadyacountform/alreadyacountform.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Existing Account Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<ion-card>\n    <ion-item >\n        <ion-label class="input_label" floating>\n          Bank Name<sup class=\'star\'>*</sup>\n        </ion-label>\n        <ion-input type="text" name="Bname" [(ngModel)]="Bname" required></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label class="input_label" floating>\n          Bank Account Number<sup class=\'star\'>*</sup>\n        </ion-label>\n        <ion-input type="password" name="bAcountNumber" [(ngModel)]="bAcountNumber" required></ion-input>\n    </ion-item>\n    <ion-item >\n        <ion-label class="input_label" floating>\n        Confirm Bank Account Number<sup class=\'star\'>*</sup>\n        </ion-label>\n        <ion-input type="password" name="cAcountNumber" [(ngModel)]="cAcountNumber" required></ion-input>\n    </ion-item>\n\n    <ion-item >\n        <ion-label class="input_label" floating>\n       IFSC Code<sup class=\'star\'>*</sup>\n        </ion-label>\n        <ion-input type="text" name="IFScode" [(ngModel)]="IFScode" required></ion-input>\n    </ion-item>\n    <ion-item >\n        <ion-label class="input_label" floating>\n       Branch Address<sup class=\'star\'>*</sup>\n        </ion-label>\n        <ion-input type="text" name="BranchAddress" [(ngModel)]="BranchAddress" required></ion-input>\n    </ion-item>\n\n    <ion-item >\n        <ion-label class="input_label" floating>\n      Mobile Number<sup class=\'star\'>*</sup>\n        </ion-label>\n        <ion-input type="number" name="MobileNumber" [(ngModel)]="MobileNumber" required></ion-input>\n    </ion-item>\n\n  \n\n         <div (click)="takePhotoFrom()">\n              <div class="rightIt attachDivpadding">\n                <img style="height: 46px;width: 78%;" class="attachWidth" src="../../assets/imgs/bankattach.png">\n              </div>\n            </div> \n       <ion-row>\n         <ion-col>\n           <p style="font-size: 12px; color : red;">{{ previous_bank_detail[0].image_description }}</p>\n         </ion-col>\n       </ion-row>     \n   \n<ion-row *ngIf="userImage">\n    <ion-col col-12>\n            <img class="imgcss"  class="attachWidth" [src]="userImage">\n    </ion-col>\n</ion-row>\n\n<div *ngIf="buttonshow==1" class="btndiv">\n        <button ion-button  class="btn" (click)="submit()">Submit</button>\n       </div>\n</ion-card>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/alreadyacountform/alreadyacountform.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */]])
    ], AlreadyacountformPage);
    return AlreadyacountformPage;
}());

//# sourceMappingURL=alreadyacountform.js.map

/***/ }),

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlreadyacountformPageModule", function() { return AlreadyacountformPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alreadyacountform__ = __webpack_require__(1025);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AlreadyacountformPageModule = /** @class */ (function () {
    function AlreadyacountformPageModule() {
    }
    AlreadyacountformPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__alreadyacountform__["a" /* AlreadyacountformPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__alreadyacountform__["a" /* AlreadyacountformPage */]),
            ],
        })
    ], AlreadyacountformPageModule);
    return AlreadyacountformPageModule;
}());

//# sourceMappingURL=alreadyacountform.module.js.map

/***/ })

});
//# sourceMappingURL=135.js.map
webpackJsonp([119],{

/***/ 1043:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_image_picker__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_device__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__(32);
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
 * Generated class for the ContactusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactusPage = /** @class */ (function () {
    function ContactusPage(actionSheetCtrl, navCtrl, navParams, storage, _DomSanitizer, apiServices, toastCtrl, loadingCtrl, imagePicker, transfer, platform, device, camera, file) {
        var _this = this;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this._DomSanitizer = _DomSanitizer;
        this.apiServices = apiServices;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.imagePicker = imagePicker;
        this.transfer = transfer;
        this.platform = platform;
        this.device = device;
        this.camera = camera;
        this.file = file;
        this.enableSubmitButton = false;
        this.subject = "";
        this.msg = "";
        this.passimage = '';
        this.submitBtnText = 'Submit';
        this.closeAppPopupShow = 0;
        this.storage.get('showOnBoard').then(function (data) {
            _this.usertype = data;
            console.log('showOnBoard value is111==', data);
        });
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
            _this.storage.get('login_token').then(function (value) {
                _this.loginToken = value;
                _this.storage.get('deviceId').then(function (device_Id) {
                    _this.deviceID = device_Id;
                });
            });
        });
    }
    ContactusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactusPage');
        this.analyticApi();
    };
    ContactusPage.prototype.getTitleLegth = function (title) {
        this.subject = title.trim();
        if (this.subject.length >= 1 && this.msg.length >= 1) {
            this.enableSubmitButton = true;
        }
        else {
            this.enableSubmitButton = false;
        }
    };
    ContactusPage.prototype.getCommentLegth = function (comment) {
        this.msg = comment.trim();
        if (this.msg.length >= 1 && this.subject.length >= 1) {
            this.enableSubmitButton = true;
        }
        else {
            this.enableSubmitButton = false;
        }
    };
    //Toast Function:
    ContactusPage.prototype.presentToast = function (APImessage) {
        var toast = this.toastCtrl.create({
            message: APImessage,
            duration: 2500,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    //Common Loader:
    ContactusPage.prototype.commonLoader = function () {
        this.loading = this.loadingCtrl.create({
            enableBackdropDismiss: true,
            spinner: 'ios-small',
            content: 'Loading data...'
        });
        this.loading.present();
    };
    ContactusPage.prototype.addimage = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: 'Photo from Gallery',
                    handler: function () {
                        _this.multiple();
                    }
                },
                {
                    text: 'Photo from Camera',
                    handler: function () {
                        _this.picker();
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        actionSheet.present();
    };
    //FROM CAMERA
    ContactusPage.prototype.picker = function () {
        var _this = this;
        var options = {
            quality: 40,
            allowEdit: true,
            saveToPhotoAlbum: true,
            cameraDirection: 1,
            correctOrientation: true,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.CAMERA,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        // Get the data of an image
        this.camera.getPicture(options).then(function (imagePath) {
            //   let base64data = 'data:image/jpeg;base64,' + imagePath;
            //  this.base64Image = this.domSanatizer(base64data);
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
    ContactusPage.prototype.multiple = function () {
        var _this = this;
        var options = {
            quality: 50,
            maximumImagesCount: 1,
            outputType: 1 //// return image as a base64 string
        };
        this.imagePicker.getPictures(options).then(function (results) {
            //     let base64data = 'data:image/jpeg;base64,' + results;
            //  this.base64Image = this.domSanatizer(base64data);
            console.log('imagePath==', results);
            _this.currentName = results[0];
            var name = _this.currentName.split("/"); // code for fetching file name
            _this.fileName = name[name.length - 1];
            _this.uploadImageonserver(_this.currentName, _this.fileName);
        }, function (err) {
            console.log('imagePath error==', err);
        });
    };
    ContactusPage.prototype.submitToHelpDesk = function (form, subject, message) {
        this.form = form;
        this.subject = subject;
        this.msg = message;
        var s = subject.trim();
        var m = message.trim();
        this.submitBtnText = 'Please wait...';
        if (s == null || s == undefined || s == " " ||
            m == null || m == undefined || m == " ") {
            var apimessage = "All fields are mandatory.";
            this.presentToast(apimessage);
        }
        else {
            if (this.currentName == null || this.currentName == undefined) {
                this.currentName = "";
                this.submit2();
            }
            else {
                this.submit2();
            }
        }
    };
    ContactusPage.prototype.submit2 = function () {
        var _this = this;
        this.storage.get('showOnBoard').then(function (data) {
            _this.usertype = data;
            console.log('showOnBoard value is111==', data);
        });
        this.enableSubmitButton = false;
        this.storage.get('deviceId').then(function (data) {
            _this.deviceID = data;
            //  this.token='Q3owSXo3T05BVVJscHREVCsyeUtqZz09OjoWf4jZSksqJnff2wxdlZ7e'
            var apiKey = {
                'user_type': _this.usertype,
                'client_id': _this.apiServices.clientId,
                'device': _this.apiServices.device,
                'device_id': _this.deviceID,
                'app_version': _this.apiServices.appVersion,
                'employee_id': _this.employeeId,
                "subject": _this.subject,
                "message": _this.msg,
                'file_link': _this.return_image,
            };
            _this.apiServices.contactHelpdesk(apiKey, _this.loginToken).subscribe(function (res) {
                console.log('tnc res==', res);
                if (res.success == 1) {
                    _this.submitBtnText = 'Submit';
                    _this.enableSubmitButton = true;
                    // var apimessage="Message Sent Succesfully."
                    _this.presentToast(res.message);
                    _this.navCtrl.popToRoot();
                }
                else {
                    _this.enableSubmitButton = true;
                    _this.presentToast(res.message);
                    _this.submitBtnText = 'Submit';
                }
            }, function (err) {
                _this.enableSubmitButton = true;
                _this.presentToast(err);
                console.log('err== ', err);
                _this.submitBtnText = 'Submit';
            });
        });
    };
    ContactusPage.prototype.domSanatizer = function (imageUrl) {
        return this._DomSanitizer.bypassSecurityTrustUrl(imageUrl);
    };
    ContactusPage.prototype.takePhotoFrom = function () {
        var _this = this;
        // this.buttonshow=0;
        var actionSheet = this.actionSheetCtrl.create({
            // title: '',
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
    ContactusPage.prototype.takePicture = function (sourceType) {
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
    ContactusPage.prototype.pickFromGalleary = function (sourceType) {
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
    ContactusPage.prototype.uploadImageonserver = function (imagepass, nameoffile) {
        var _this = this;
        this.storage.get('showOnBoard').then(function (data) {
            _this.usertype = data;
            console.log('showOnBoard value is111==', data);
        });
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            console.log(' deviceId== ', _this.deviceId);
        });
        this.storage.get('login_token').then(function (data) {
            console.log('this.login_token2', data);
            _this.login_token = data;
            // this.showCustomActionSheet = false;
            _this.base64Image = '../../assets/watermark/load.gif';
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
                        'user_type': _this.usertype,
                        'client_id': _this.apiServices.clientId,
                        'device': _this.apiServices.device,
                        'device_id': _this.deviceId,
                        'app_version': _this.apiServices.appVersion,
                        'employee_id': _this.employeeId,
                        'flag': 'contact_us',
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
                        // this.userImage = data.link;
                        // this.buttonshow=1;
                        // this.userImageBg=this.userImage;
                        _this.base64Image = data.preview_image;
                        _this.return_image = data.return_image;
                        // this.storage.set('userImage', data.link);
                        // this.apiMessage(data.message);
                    }
                    else {
                        // this.apiMessage(data.message);
                    }
                }, function (err) {
                    console.log("err", err);
                    // alert('err=='+ err);
                    // this.apiMessage(err);
                });
            });
        });
    };
    ContactusPage.prototype.removePreview = function () {
        this.base64Image = null;
    };
    ContactusPage.prototype.analyticApi = function () {
        var _this = this;
        this.storage.get('employee_type').then(function (user) {
            console.log('thoughtOftheDayApi value is111==', user);
            var user_Type = user;
            _this.storage.get('deviceId').then(function (data) {
                var deviceId = data;
                var apiKey = {
                    "client_id": _this.apiServices.clientId,
                    "employee_id": _this.employeeId,
                    "device": _this.apiServices.device,
                    "device_id": deviceId,
                    "app_version": _this.apiServices.appVersion,
                    "track_flag": "56",
                    "type": "detail",
                    "user_type": user_Type,
                };
                _this.apiServices.analyticApi(apiKey, _this.loginToken).subscribe(function (res) {
                    console.log(res);
                });
            });
        });
    };
    ContactusPage.prototype.ionViewWillEnter = function () {
        this.initializeBackButtonCustomHandler();
    };
    ContactusPage.prototype.ionViewWillLeave = function () {
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    //Hardware Back Button
    ContactusPage.prototype.initializeBackButtonCustomHandler = function () {
        var that = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function (event) {
            // that.navCtrl.popToRoot();
            that.navCtrl.pop();
        }, 101); // Priority 101 will override back button handling (we set in app.component.ts) as it is bigger then priority 100 configured in app.component.ts file */
    };
    ContactusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contactus',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/contactus/contactus.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Contact us</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content >\n  <div class="contactDiv">\n    <ion-card class="myCard">\n        <div class="containerContactUs">\n      \n            <form #f= ngForm>\n                <p style="font-weight: bold;">If you have any queries or would like to get in touch with HR, please fill the form below.</p><br>\n                  <ion-input type="text" name="subject" [(ngModel)]="subject" required class="nameInp" placeholder="Subject" (ngModelChange)="getTitleLegth(subject)"></ion-input>\n                  <ion-textarea rows="6"   id="myInput" cols="10" placeholder="Comment" name="msg" [(ngModel)]="msg" required #sugg="ngModel" class="contactUsCommentBox" (ngModelChange)="getCommentLegth(msg)"></ion-textarea>\n            </form>\n    \n             <div>\n              <div class="rightIt attachDivpadding">\n                <img class="attachWidth" src="../../assets/imgs/attach.png" (tap)="takePhotoFrom()">\n              </div>\n            </div> \n            <div style="padding:10px 0;" class="preview" *ngIf="base64Image">\n                <img class="preview_Image" [src]="base64Image" />\n                <!-- <img src="../../assets/watermark/watermark.png" alt=""> -->\n                <ion-icon (click)="removePreview()" class="closeIcon" ios="ios-close" md="md-close"></ion-icon>\n              </div>\n    \n              <div class="centerIt">\n                <button  ion-button round [disabled]="enableSubmitButton==false" class="centerBtn" (tap)="submitToHelpDesk(f, subject, msg)">{{submitBtnText}}</button>\n              </div>\n          \n        </div>\n    </ion-card>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/contactus/contactus.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_service_api_service__["a" /* ApiServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__["a" /* File */]])
    ], ContactusPage);
    return ContactusPage;
}());

//# sourceMappingURL=contactus.js.map

/***/ }),

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusPageModule", function() { return ContactusPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contactus__ = __webpack_require__(1043);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ContactusPageModule = /** @class */ (function () {
    function ContactusPageModule() {
    }
    ContactusPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contactus__["a" /* ContactusPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contactus__["a" /* ContactusPage */]),
            ],
        })
    ], ContactusPageModule);
    return ContactusPageModule;
}());

//# sourceMappingURL=contactus.module.js.map

/***/ })

});
//# sourceMappingURL=119.js.map
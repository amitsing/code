webpackJsonp([129],{

/***/ 1032:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackgrndandfontchangesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_action_sheet_action_sheet_controller__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_service_api_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_image_picker__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular_components_toast_toast_controller__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_transfer__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { Transfer, TransferObject } from '@ionic-native/transfer';




/**
 * Generated class for the BackgrndandfontchangesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BackgrndandfontchangesPage = /** @class */ (function () {
    function BackgrndandfontchangesPage(navCtrl, loadingCtrl, events, alertCtrl, imagePicker, transfer, storage, toastCtrl, apiServices, navParams, file, camera, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.imagePicker = imagePicker;
        this.transfer = transfer;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.apiServices = apiServices;
        this.navParams = navParams;
        this.file = file;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.textChangeIndex = 0;
        this.bgChnageIndex = 0;
        this.images = [];
        this.albumUploadImageStatus = false;
        this.changeImage = 0;
        this.rotateImageIndex = 0;
        this.show = false;
        this.showImagesonFront = [];
        this.bgColorClass = "grayBg";
        this.value = this.navParams.data.status;
        if (this.value == 'text') {
            this.title = 'Add Status';
        }
        else {
            this.title = 'Add Image';
        }
    }
    BackgrndandfontchangesPage.prototype.chooseImage = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Change Profile Picture',
            buttons: [
                {
                    text: 'Camera',
                    role: 'destructive',
                    handler: function () {
                        _this.usingCamera('camera');
                    }
                }, {
                    text: 'Gallery',
                    handler: function () {
                        _this.usingCamera('gallery');
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    BackgrndandfontchangesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BackgrndandfontchangesPage');
    };
    // addimage(){
    //   let profileModal = this.modalCtrl.create('ProfileDosDontsPage');
    //   profileModal.onDidDismiss(data => {
    //     console.log('****===',data);
    //     if(data=='dismiss'){
    //       this.showCustomActionSheet=true;
    //     }else{
    //       this.showCustomActionSheet=false;
    //     }
    //   })
    //   profileModal.present();
    //   this.showCustomActionSheet=false;
    // }
    // hideActionsheet(){
    //   this.showCustomActionSheet=false;
    // }
    BackgrndandfontchangesPage.prototype.usingCamera = function (myoption) {
        // this.buttonshow=0;
        if (myoption == 'camera') {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
        }
        else {
            this.pickFromGalleary(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
    };
    BackgrndandfontchangesPage.prototype.takePicture = function (sourceType) {
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
            _this.albumUploadImageStatus = true;
            // this.currentName = this.webview.convertFileSrc(imagePath);
            var param1 = {
                'link': _this.currentName,
                'status': false,
                'index': 0,
                'showRetry': false
            };
            _this.show = true;
            // this.showImagesonFront.push(param1)
            // Special handling for Android library
            console.log('imagePath==', imagePath);
            _this.currentName = imagePath;
            var name = _this.currentName.split("/"); // code for fetching file name
            _this.fileName = name[name.length - 1];
            _this.uploadImageonserver(_this.currentName, _this.fileName, 0);
        }, function (err) {
            console.log('imagePath error==', err);
        });
    };
    BackgrndandfontchangesPage.prototype.pickFromGalleary = function (sourceType) {
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
            _this.uploadImageonserver(_this.currentName, _this.fileName, 0);
        }, function (err) {
            console.log('imagePath error==', err);
        });
    };
    //Upload images on server
    BackgrndandfontchangesPage.prototype.uploadImageonserver = function (imagepass, nameoffile, index) {
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
            // this.showCustomActionSheet=false;
            _this.userImage = '../../assets/watermark/load.gif';
            _this.storage.get('employeeId').then(function (data) {
                _this.employeeId = data;
            });
            _this.storage.get('showOnBoard').then(function (data) {
                console.log('showOnBoard value is111==', data);
                _this.employee_type = data;
            });
            // var url = this.apiServices.profilePictureUpload;
            var url = _this.apiServices.newBaseUrl + 'Image_Upload/post_image_upload.php';
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
                        'app_version': _this.apiServices.appVersion,
                        'flag': 36,
                        'client_id': _this.apiServices.clientId,
                        'device': _this.apiServices.device,
                        'device_id': _this.deviceId,
                        'file': targetPath,
                        'employee_id': _this.employeeId,
                        'user_type': _this.employee_type,
                        'media_type': 2
                    }
                };
                console.log("passing key== ", JSON.stringify(options));
                var fileTransfer = _this.transfer.create();
                fileTransfer.upload(targetPath, url, options).then(function (res) {
                    var data = JSON.parse(res.response);
                    console.log("response== ", res);
                    console.log("response22== ", data);
                    if (data.success == 1) {
                        var param1 = {
                            'link': data.link,
                            'status': false,
                            'index': 0,
                            'showRetry': false
                        };
                        _this.show = true;
                        _this.showImagesonFront.push(param1);
                        _this.showImagesonFront[0].status = true;
                        _this.imageId = data.last_id;
                    }
                    else {
                        _this.showImagesonFront[0].showRetry = true;
                        _this.presentToast(data.message);
                    }
                }, function (err) {
                    console.log(" err== ", err);
                });
            });
        });
    };
    BackgrndandfontchangesPage.prototype.retry = function (index) {
        this.showImagesonFront[index].status = false;
        this.showImagesonFront[index].showRetry = false;
        this.currentName = this.showImagesonFront[index].link;
        var name = this.currentName.split("/"); // code for fetching file name
        this.fileName = name[name.length - 1];
        this.uploadImageonserver(this.fileName, this.currentName, index);
    };
    BackgrndandfontchangesPage.prototype.changeTextFamily = function () {
        this.textChangeIndex++;
        console.log('changeTextFamily==', this.textChangeIndex);
        if (this.textChangeIndex % 5 == 0) {
            this.changeImageClass1 = "fontFamily1";
        }
        else if (this.textChangeIndex % 5 == 1) {
            this.changeImageClass1 = "fontFamily2";
        }
        else if (this.textChangeIndex % 5 == 2) {
            this.changeImageClass1 = "fontFamily3";
        }
        else if (this.textChangeIndex % 5 == 3) {
            this.changeImageClass1 = "fontFamily4";
        }
        else if (this.textChangeIndex % 5 == 4) {
            this.changeImageClass1 = "fontFamily5";
        }
    };
    BackgrndandfontchangesPage.prototype.changeBgColor = function () {
        this.bgChnageIndex++;
        if (this.bgChnageIndex % 5 == 0) {
            this.changeImageClass = "yellowBg";
        }
        else if (this.bgChnageIndex % 5 == 1) {
            this.changeImageClass = "pinkBg";
        }
        else if (this.bgChnageIndex % 5 == 2) {
            this.changeImageClass = "blueBg";
        }
        else if (this.bgChnageIndex % 5 == 3) {
            this.changeImageClass = "redBg";
        }
        else if (this.bgChnageIndex % 5 == 4) {
            this.changeImageClass = "grayBg";
        }
    };
    BackgrndandfontchangesPage.prototype.imageFilter = function () {
        this.changeImage++;
        console.log('image filter');
        if (this.changeImage % 4 == 0) {
            this.changeImageClass = "blackAndWhite";
        }
        else if (this.changeImage % 4 == 1) {
            this.changeImageClass = "blur";
        }
        else if (this.changeImage % 4 == 2) {
            this.changeImageClass = "hue-rotate";
        }
        else if (this.changeImage % 4 == 3) {
            this.changeImageClass = "invert";
        }
    };
    BackgrndandfontchangesPage.prototype.rotateImage = function () {
        this.rotateImageIndex++;
        console.log("rotate");
        if (this.rotateImageIndex % 4 == 0) {
            this.changeImageClass1 = "rotate1";
        }
        else if (this.rotateImageIndex % 4 == 1) {
            this.changeImageClass1 = "rotate2";
        }
        else if (this.rotateImageIndex % 4 == 2) {
            this.changeImageClass1 = "rotate3";
        }
        else if (this.rotateImageIndex % 4 == 3) {
            this.changeImageClass1 = "rotate4";
        }
    };
    BackgrndandfontchangesPage.prototype.commonLoader = function () {
        this.loading = this.loadingCtrl.create({
            enableBackdropDismiss: true,
            spinner: 'ios-small',
            content: 'Loading...'
        });
        this.loading.present();
    };
    BackgrndandfontchangesPage.prototype.sendData = function (statusType) {
        var _this = this;
        if (statusType == 1) {
            this.imageId = "";
            if (this.statusvalue == undefined) {
                this.presentToast('Please Add Text');
                return false;
            }
            else if (this.changeImageClass == undefined) {
                this.changeImageClass = 'yellowBg';
            }
        }
        else {
            if (this.statusvalue == undefined) {
                this.statusvalue = "";
            }
        }
        this.commonLoader();
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            console.log('login deviceId== ', _this.deviceId);
        });
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
        });
        this.storage.get('showOnBoard').then(function (data) {
            console.log('showOnBoard value is111==', data);
            _this.employee_type = data;
        });
        this.storage.get('login_token').then(function (data) {
            _this.login_token = data;
            var userdata = {
                "client_id": _this.apiServices.clientId,
                "employee_id": _this.employeeId,
                "device": _this.apiServices.device,
                "device_id": _this.deviceId,
                "app_version": _this.apiServices.appVersion,
                "story_type": statusType,
                "story_content": _this.statusvalue,
                "story_class": [{
                        'rotationclass': _this.changeImageClass1,
                        'colorclass': _this.changeImageClass,
                    }],
                "image_id": _this.imageId
            };
            // alert(JSON.stringify(userdata));
            _this.apiServices.UploadMystatus(userdata, _this.login_token).subscribe(function (res) {
                _this.loading.dismiss();
                if (res.success == 1) {
                    // this.presentToast(res.message);
                    _this.events.publish('updated-status-event', res.success);
                    // this.navCtrl.push('NewHomePage');
                    // this.navCtrl.pop();
                    // this.navCtrl.popToRoot();
                    _this.onSubmit1(res.message);
                }
                else {
                    _this.presentToast(res.message);
                }
            }, function (err) {
            });
        });
    };
    BackgrndandfontchangesPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    BackgrndandfontchangesPage.prototype.onSubmit1 = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: msg,
            buttons: [
                // {
                //   text: 'Cancel',
                //   role: 'cancel',
                //   handler: () => {
                //     console.log('Cancel clicked');
                //   }
                // },
                {
                    text: 'OK',
                    handler: function () {
                        _this.navCtrl.popToRoot();
                        // this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-2));
                    }
                }
            ]
        });
        alert.present();
    };
    BackgrndandfontchangesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-backgrndandfontchanges',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/backgrndandfontchanges/backgrndandfontchanges.html"*/'\n<ion-header>\n  <ion-navbar color="headColor">\n      <ion-title>{{title}}</ion-title>\n      <ion-buttons right *ngIf="value==\'image\'">\n       </ion-buttons>\n  </ion-navbar>   \n</ion-header>\n<ion-content>\n  <div class="contnt" [ngClass]="{yellowBg:(bgChnageIndex%5==0 && value == \'text\'),pinkBg:(bgChnageIndex%5==1 && value == \'text\'),blueBg:(bgChnageIndex%5==2 && value == \'text\'),redBg:(bgChnageIndex%5==3 && value == \'text\'),grayBg:(bgChnageIndex%5==4 && value == \'text\')}">\n    <div *ngIf="value==\'text\'">\n      <div class="textar">\n        <textarea name="comment" form="usrform" [(ngModel)]="statusvalue" rows="8" class="textareaProperty {{changeImageClass1}}" placeholder="Type some text..." autofocus></textarea>\n      </div>\n      <div class="icons">\n        <ion-icon name="logo-tumblr" class="myicon" (tap)="changeTextFamily()"></ion-icon>\n        <ion-icon name="color-palette" class="myicon" (tap)="changeBgColor()"></ion-icon>\n        <ion-icon name="ios-send-outline" class="mylargeicon"(tap)="sendData(1)"></ion-icon>\n      </div>\n    </div>\n    <div *ngIf="value==\'image\'" class="profileBGImage">\n        <div *ngIf="show != true">\n          <ion-row>\n            <ion-col>\n              <div class="cameraicon">\n                  <img src="assets/imgs/camera1.png" (click)="usingCamera(\'camera\')" style="height:70px;width:90px;"/>\n                  <p class="takephoto">Take a photo now</p>\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col>\n                <div class="oricon">\n                    <img src="assets/imgs/or.png"  style="height: 50px;width:50px;" />\n                </div>\n              </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col>\n                <div class="galleryicon">\n                    <img src="assets/imgs/gallery.png" (click)="usingCamera(\'gallery\')" style="height:70px;width:90px;"/>\n                    <p class="takephoto">Select photo from library</p>\n                </div>\n              </ion-col>\n          </ion-row>\n        </div>    \n        <div class="scroll-item" *ngFor="let li of showImagesonFront let i=index;" >\n          <img class="{{changeImageClass}} {{changeImageClass1}}" [src]="li.link" imageViewer [ngClass]="{\'normal\':(li.status),\'blur\':(!li.status)}"/>\n          <ion-spinner *ngIf="!li.status && !li.showRetry " class="spinnerdesign" name="crescent"></ion-spinner>\n          <ion-icon class="retry" (tap)="retry(i)" *ngIf="li.showRetry" name="cloud-upload">\n            <p class="retrytext">\n              Retry  \n            </p>      \n          </ion-icon>\n        </div>\n    </div>  \n</div>\n</ion-content>\n<ion-footer>\n    <div class="icons" *ngIf="showImagesonFront?.length>0">\n        <ion-icon name="color-palette" class="myicon" (click)="imageFilter()"></ion-icon>\n        <ion-icon name="refresh-circle"class="myicon" (click)="rotateImage()"></ion-icon> \n        <ion-icon name="ios-send-outline" class="mylargeicon"(click)="sendData(2)"></ion-icon>\n    </div>\n</ion-footer>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/backgrndandfontchanges/backgrndandfontchanges.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular_components_toast_toast_controller__["a" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_api_service_api_service__["a" /* ApiServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_action_sheet_action_sheet_controller__["a" /* ActionSheetController */]])
    ], BackgrndandfontchangesPage);
    return BackgrndandfontchangesPage;
}());

//# sourceMappingURL=backgrndandfontchanges.js.map

/***/ }),

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgrndandfontchangesPageModule", function() { return BackgrndandfontchangesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__backgrndandfontchanges__ = __webpack_require__(1032);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BackgrndandfontchangesPageModule = /** @class */ (function () {
    function BackgrndandfontchangesPageModule() {
    }
    BackgrndandfontchangesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__backgrndandfontchanges__["a" /* BackgrndandfontchangesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__backgrndandfontchanges__["a" /* BackgrndandfontchangesPage */]),
            ],
        })
    ], BackgrndandfontchangesPageModule);
    return BackgrndandfontchangesPageModule;
}());

//# sourceMappingURL=backgrndandfontchanges.module.js.map

/***/ })

});
//# sourceMappingURL=129.js.map
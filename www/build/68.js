webpackJsonp([68],{

/***/ 1162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_image_picker__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular_util_events__ = __webpack_require__(176);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ProfilePage = /** @class */ (function () {
    function ProfilePage(loadingCtrl, imagePicker, event, platform, transfer, file, camera, modalCtrl, toastCtrl, storage, apiServices, navCtrl) {
        var _this = this;
        this.loadingCtrl = loadingCtrl;
        this.imagePicker = imagePicker;
        this.event = event;
        this.platform = platform;
        this.transfer = transfer;
        this.file = file;
        this.camera = camera;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.apiServices = apiServices;
        this.navCtrl = navCtrl;
        this.closeAppPopupShow = 0;
        this.log = false;
        this.showResetPass = false;
        this.btnText = "Reset Password";
        this.oldPassHaveVal = false;
        this.newPassHaveVal = false;
        this.confirmpass = "";
        this.newpassword = '';
        this.confpassword = '';
        this.oldpassword = '';
        this.confpasswordIsShowing = false;
        this.newpasswordIsShowing = false;
        this.oldpasswordIsShowing = false;
        this.storage.get('login_token').then(function (data) { _this.login_token = data; });
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
            console.log(' deviceId== ', _this.employeeId);
        });
        this.storage.get('showOnBoard').then(function (data) {
            console.log('showOnBoard value is111==', data);
            _this.employeeType = data;
        });
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        // this.userImage='../../assets/watermark/load.gif';
        var _this = this;
        this.navBar.backButtonClick = function (e) {
            // todo something
            _this.navCtrl.popToRoot();
        };
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            console.log(' deviceId== ', _this.deviceId);
            _this.getUserInfo();
        });
    };
    ProfilePage.prototype.showlog = function (check) {
        if (check == false) {
            this.log = true;
        }
        else {
            this.log = false;
        }
    };
    ProfilePage.prototype.showResetPasswordDiv = function (check) {
        if (check == false) {
            this.showResetPass = true;
        }
        else {
            this.showResetPass = false;
        }
    };
    ProfilePage.prototype.resetPassword = function (oldpass, newpass) {
        var _this = this;
        this.btnText = "Please wait...";
        this.oldPassHaveVal = false;
        this.newPassHaveVal = false;
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            console.log('login deviceId== ', _this.deviceId);
            var apiKey = {
                "clientId": _this.apiServices.clientId,
                "employeeId": _this.employeeId,
                "device": _this.apiServices.device,
                "deviceId": _this.deviceId,
                "appVersion": _this.apiServices.appVersion,
                "oldPass": _this.oldpassword,
                "newPass": newpass,
                "confirmPass": _this.confirmpass
            };
            console.log('reset pass api key==', apiKey);
            _this.apiServices.resetPassword(apiKey).then(function (result) {
                console.log('reset pass response== ', result);
                _this.allData = result;
                if (_this.allData.success == 1) {
                    _this.oldpassword = '';
                    _this.newpassword = '';
                    _this.confpassword = '';
                    _this.apiMessage(_this.allData.message);
                    _this.btnText = "Reset Password";
                    _this.errorMessage = '';
                }
                else {
                    _this.btnText = "Reset Password";
                    _this.apiMessage(_this.allData.message);
                }
            });
        });
    };
    ProfilePage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    ProfilePage.prototype.oldpassChange = function (oldpass) {
        if (oldpass.trim().length > 0) {
            this.oldPassHaveVal = true;
        }
        else {
            this.oldPassHaveVal = false;
        }
    };
    ProfilePage.prototype.newpassChange = function (newpass) {
        if (newpass.trim().length > 0) {
            this.newPassHaveVal = true;
        }
        else {
            this.newPassHaveVal = false;
        }
        if (this.confirmpass.trim().length > 0) {
            if (newpass == this.confpassword) {
                this.confirmpass = this.confpassword;
                this.errorMessage = "";
            }
            else {
                this.errorMessage = "*New and Confirm passwords are not matching.";
            }
        }
    };
    ProfilePage.prototype.confpassChange = function (confpass) {
        if (confpass.trim().length > 0) {
            if (this.newpassword == this.confpassword) {
                this.confirmpass = confpass;
                this.errorMessage = "";
                if (this.oldPassHaveVal == false) {
                    this.errorMessage = "*Please enter old password";
                }
                else {
                    this.errorMessage = "";
                }
            }
            else {
                this.confirmpass = "";
                this.errorMessage = "*New and Confirm passwords are not matching.";
            }
        }
    };
    ProfilePage.prototype.getUserInfo = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var apiKey = {
            "client_id": this.apiServices.clientId,
            "employee_id": this.employeeId,
            "device": this.apiServices.device,
            "device_id": this.deviceId,
            "app_version": this.apiServices.appVersion,
            "user_type": this.employeeType
        };
        console.log('reset pass api key==', apiKey);
        this.apiServices.userProfile(apiKey, this.login_token).subscribe(function (result) {
            console.log('reset pass response== ', result);
            loading.dismiss();
            _this.allData = result;
            if (_this.allData.success == 1) {
                _this.profileDetails = _this.allData.data;
                _this.userName = _this.profileDetails.name;
                _this.userImage = _this.profileDetails.user_image;
                _this.userImageBg = _this.userImage;
                _this.userlocation = _this.profileDetails.location;
                _this.designation = _this.profileDetails.designation;
                _this.department = _this.profileDetails.department;
                _this.number = _this.profileDetails.mobile_number;
                _this.country_name = _this.profileDetails.country_name;
                // setTimeout(() => {
                //   loading.dismiss();
                // }, 2000);
            }
            else {
                _this.apiMessage(_this.allData.message);
                // setTimeout(() => {
                //   loading.dismiss();
                // }, 2000);
            }
        });
    };
    ProfilePage.prototype.addimage = function () {
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
    ProfilePage.prototype.hideActionsheet = function () {
        this.showCustomActionSheet = false;
    };
    ProfilePage.prototype.usingCamera = function (myoption) {
        if (myoption == 'camera') {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
        }
        else {
            this.pickFromGalleary(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
    };
    ProfilePage.prototype.takePicture = function (sourceType) {
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
    ProfilePage.prototype.pickFromGalleary = function (sourceType) {
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
    ProfilePage.prototype.uploadImageonserver = function (imagepass, nameoffile) {
        var _this = this;
        this.storage.get('login_token').then(function (data) {
            _this.login_token = data;
            _this.showCustomActionSheet = false;
            _this.userImage = '../../assets/watermark/load.gif';
            _this.storage.get('employeeId').then(function (data) {
                _this.employeeId = data;
            });
            _this.storage.get('showOnBoard').then(function (data) {
                console.log('showOnBoard value is111==', data);
                _this.employeeType = data;
            });
            var url = _this.apiServices.profilePictureUpload;
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
                        'flag': 'profile',
                        'client_id': _this.apiServices.clientId,
                        'device': _this.apiServices.device,
                        'device_id': _this.deviceId,
                        'file': targetPath,
                        'employee_id': _this.employeeId,
                        'user_type': _this.employeeType
                    }
                };
                console.log("passing key== ", JSON.stringify(options));
                var fileTransfer = _this.transfer.create();
                fileTransfer.upload(targetPath, url, options).then(function (res) {
                    var data = JSON.parse(res.response);
                    console.log("response== ", res);
                    console.log("response22== ", data);
                    if (data.success == 1) {
                        _this.showCustomActionSheet = false;
                        _this.userImage = data.link;
                        _this.userImageBg = _this.userImage;
                        _this.storage.set('user_image', data.link);
                        _this.event.publish('profile_pic_change');
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
    ProfilePage.prototype.viewoldPass = function (pass) {
        if (pass == false) {
            this.oldpasswordIsShowing = true;
        }
        else {
            this.oldpasswordIsShowing = false;
        }
    };
    ProfilePage.prototype.viewnewPass = function (pass) {
        if (pass == false) {
            this.newpasswordIsShowing = true;
        }
        else {
            this.newpasswordIsShowing = false;
        }
    };
    ProfilePage.prototype.viewconfPass = function (pass) {
        if (pass == false) {
            this.confpasswordIsShowing = true;
        }
        else {
            this.confpasswordIsShowing = false;
        }
    };
    ProfilePage.prototype.signOut = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            console.log('login deviceId== ', _this.deviceId);
            var apiKey = {
                "packageName": _this.apiServices.packageName,
                'employee_id': _this.employeeId,
                "device": _this.apiServices.device,
                "device_id": _this.deviceId,
                "app_version": _this.apiServices.appVersion,
                "client_id": _this.apiServices.clientId
            };
            _this.apiServices.userSignOut(apiKey, _this.login_token).subscribe(function (result) {
                console.log('optionalUpdate response== ', result);
                _this.allData = result;
                if (_this.allData.success == 1) {
                    _this.storage.remove('isFirstLogin').then(function (val) {
                        console.log('Your age is', val);
                    });
                    _this.storage.remove('isCeoScreenVisit').then(function (val) {
                        console.log('Your age is', val);
                    });
                    _this.storage.remove('employeeId').then(function (val) {
                        console.log('Your age is', val);
                        _this.apiMessage(_this.allData.message);
                        _this.navCtrl.setRoot('LoginPage');
                        loading.dismiss();
                    });
                }
                else {
                    _this.apiMessage(_this.allData.message);
                    loading.dismiss();
                }
            });
        });
    };
    ProfilePage.prototype.updateNo = function () {
        this.navCtrl.push('TakeMobileNumberPage', { 'profilekey': '1' });
    };
    ProfilePage.prototype.backButtonClick = function () {
        this.navCtrl.setRoot('NewHomePage');
    };
    ProfilePage.prototype.ionViewWillLeave = function () {
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    ProfilePage.prototype.ionViewWillEnter = function () {
        this.initializeBackButtonCustomHandler();
    };
    //Hardware Back Button
    ProfilePage.prototype.initializeBackButtonCustomHandler = function () {
        var that = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function (event) {
            // that.closeAppPopupShow++;
            // if(that.closeAppPopupShow%2!=0){
            //   that.showeAlert();
            // }else{
            //   that.alert121.dismiss();
            // }
            that.navCtrl.popToRoot();
        }, 101); // Priority 101 will override back button handling (we set in app.component.ts) as it is bigger then priority 100 configured in app.component.ts file */
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Navbar */])
    ], ProfilePage.prototype, "navBar", void 0);
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/profile/profile.html"*/'\n<ion-header>\n    <ion-navbar>\n            <ion-title>Profile</ion-title>\n            <!-- <ion-buttons start >\n              <button ion-button (click) = "openPushSettinpage()">\n                  <ion-icon ios="ios-settings" md="md-settings" class="iconClose" style="color:#4d2748"></ion-icon>\n              </button>\n            </ion-buttons> -->\n    </ion-navbar>\n   </ion-header>\n\n\n<ion-content class="backgroundclass">\n    <div class="relativeDIV">\n      <div class="profileBGImage" [style.background-image]="\'url(\' +userImageBg+ \')\'" >\n          <div class="maindiv">\n              <!-- <ion-icon class="seticon" (click)="showlog(log)" name="more"></ion-icon> -->\n              <!-- <div *ngIf="log==true" class="setlog" (click)="signOut()">\n                <p>Sign out</p>\n              </div> -->\n            </div>\n\n      </div>\n      <div class="blackTransparent"></div>\n      <!-- <img src=" " class="userImage"/> -->\n      <div class="absoDIV">\n          <ion-row (click)="addimage()">\n            <ion-col col-12 style="text-align: -webkit-center;">\n                <div class="profileImage">\n                    <img srcset="{{userImage}}" src="assets/watermark/watermark.png" class="userImage"/>\n                  <div class="camImage">\n                      <img class="camIcon" src="assets/imgs/uploadImg.png">\n                  </div>\n                </div>\n                <!-- <img srcset="{{userImage}}" src="assets/watermark/watermark.png" class="userImage"/>\n                <img class="camIcon" src="assets/imgs/uploadImg.png"> -->\n            </ion-col>\n            <!-- <ion-col>\n              <h6 class="userName">{{userName}}</h6>\n              <p class="userDesignation">{{designation}} <span *ngIf="userlocation!=\'\'">|</span> {{userlocation}}</p>\n            </ion-col> -->\n          </ion-row>\n\n          <p style="    font-size: 17px;\n          font-weight: bold;" class="userName black">{{userName}}</p>\n          <p class="userName">{{department}}</p>\n          <p class="userName">{{designation}}</p>\n          <!-- <p class="userName">{{userlocation}}</p> -->\n          <p class="userName">{{country_name}}</p>\n          <p class="userName">Mobile Number :  {{number}}</p>\n          <br><br>\n          <ion-row>\n              <ion-col col-12 text-center>\n                <button ion-button round class="updateBtn" (click)="updateNo()">Update Mobile Number</button>\n              </ion-col>\n             </ion-row>\n\n<!-- <p class="userName">{{userName}}</p> -->\n<!-- <ion-row>\n  <ion-col col-2 >\n    <img  src="assets/imgs/Untitled-4_0001_Ellipse-3-copy.png" class="iconcss"/>\n  </ion-col>\n  <ion-col col-10 class="borderbottom">\n<p>{{department}}</p>\n  </ion-col>\n</ion-row>\n<ion-row>\n  <ion-col col-2 >\n    <img  src="assets/imgs/Untitled-4_0002_conversation.png" class="iconcss"/>\n  </ion-col>\n  <ion-col col-10 class="borderbottom">\n    <p>{{designation}}</p>\n  </ion-col>\n</ion-row>\n<ion-row>\n  <ion-col col-2>\n    <img  src="assets/imgs/Untitled-4_0000_location_joining.png" class="iconcss"/>\n  </ion-col>\n  <ion-col col-10 class="borderbottom">\n    <p>{{userlocation}}</p>\n  </ion-col>\n</ion-row> -->\n        </div>\n    </div>\n\n<!-- <div class="resetPasswordDiv">\n  <ion-row (click)="showResetPasswordDiv(showResetPass)">\n    <ion-col col-auto class="removePadding lockCol">   <ion-icon name="lock" class="threeDot"></ion-icon> </ion-col>\n    <ion-col class="removePadding"> <p class="textremovePadding">Reset password</p></ion-col>\n  </ion-row>\n  <div *ngIf="showResetPass==true">\n    <hr class="lineborder">\n\n      <div class="inputclsDiv">\n      <ion-row>\n        <ion-col col-10>\n          <ion-item class="resetPass">\n            <ion-input *ngIf="oldpasswordIsShowing==false" clearOnEdit="false" type="password" placeholder="Old password" [(ngModel)]="oldpassword" class="inputcls" (ngModelChange)="oldpassChange(oldpassword)"></ion-input>\n            <ion-input *ngIf="oldpasswordIsShowing==true" type="text" placeholder="Old password" [(ngModel)]="oldpassword" class="inputcls" (ngModelChange)="oldpassChange(oldpassword)"></ion-input>\n          </ion-item>\n          </ion-col>\n        <ion-col col-2 class="centerDataInDiv" (click)="viewoldPass(oldpasswordIsShowing)">            \n            <ion-icon *ngIf="oldpasswordIsShowing==false" clearOnEdit="false" name="ios-eye-off-outline" class="eyeIcon"></ion-icon>\n            <ion-icon *ngIf="oldpasswordIsShowing==true" name="ios-eye-outline" class="eyeIcon"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div class="inputclsDiv">\n      <ion-row>\n          <ion-col col-10>\n              <ion-item class="resetPass">\n              <ion-input  *ngIf="newpasswordIsShowing==false"  clearOnEdit="false" type="password" placeholder="New password" [(ngModel)]="newpassword" class="inputcls"(ngModelChange)="newpassChange(newpassword)"></ion-input>\n              <ion-input *ngIf="newpasswordIsShowing==true" type="text" placeholder="New password" [(ngModel)]="newpassword" class="inputcls"(ngModelChange)="newpassChange(newpassword)"></ion-input>\n            </ion-item>\n            </ion-col>\n          <ion-col col-2 class="centerDataInDiv" (click)="viewnewPass(newpasswordIsShowing)">\n              <ion-icon *ngIf="newpasswordIsShowing==false" name="ios-eye-off-outline" class="eyeIcon"></ion-icon>\n              <ion-icon *ngIf="newpasswordIsShowing==true" name="ios-eye-outline" class="eyeIcon"></ion-icon>               \n          </ion-col>\n      </ion-row>\n    </div>\n\n    <div class="inputclsDiv">\n      <ion-row>\n          <ion-col col-10>\n              <ion-item class="resetPass">\n              <ion-input *ngIf="confpasswordIsShowing==false" type="password" [disabled]="newPassHaveVal==false"  placeholder="Confirm password" [(ngModel)]="confpassword" class="inputcls"(ngModelChange)="confpassChange(confpassword)"></ion-input>\n              <ion-input *ngIf="confpasswordIsShowing==true"  type="text" [disabled]="newPassHaveVal==false"  placeholder="Confirm password" [(ngModel)]="confpassword" class="inputcls"(ngModelChange)="confpassChange(confpassword)"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col col-2 class="centerDataInDiv" (click)="viewconfPass(confpasswordIsShowing)">\n              <ion-icon *ngIf="confpasswordIsShowing==false"name="ios-eye-off-outline" class="eyeIcon"></ion-icon>\n              <ion-icon *ngIf="confpasswordIsShowing==true" name="ios-eye-outline" class="eyeIcon"></ion-icon>            \n          </ion-col>\n        </ion-row>\n        </div>\n        <ion-row>\n            <ion-col col-12><p class="redText">{{errorMessage}}</p>\n            </ion-col>\n          </ion-row>\n      <ion-row>\n        <ion-col col-12 >\n            <button ion-button [disabled]="errorMessage!=\'\'" class="btn" (click)="resetPassword(oldpassword,newpassword)">{{btnText}}</button>\n          </ion-col>\n        </ion-row>\n\n  </div>\n\n</div> -->\n\n\n<div *ngIf="showCustomActionSheet==true">\n  <div class="transparentLayerActionsheet" (tap)="hideActionsheet()"></div>\n  <div class="customActionsheetDIV">\n    <ion-grid>\n      <ion-row><ion-col><h2>Profile Picture</h2></ion-col></ion-row>\n      <ion-row>\n        <ion-col col-6 class="centerData" (click)="usingCamera(\'camera\')">\n          <img src="assets/imgs/camera.png" class="actionSheetIcon"/>\n            <h4>Camera</h4>\n        </ion-col>\n        <ion-col col-6 class="centerData" (click)="usingCamera(\'gallery\')">\n          <img src="assets/imgs/album.png"class="actionSheetIcon"/>\n          <h4>Gallery</h4>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</div>\n\n  </ion-content>\n   '/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_image_picker__["a" /* ImagePicker */], __WEBPACK_IMPORTED_MODULE_8_ionic_angular_util_events__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 834:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(1162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ })

});
//# sourceMappingURL=68.js.map
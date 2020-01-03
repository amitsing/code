webpackJsonp([141],{

/***/ 1019:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddcummunitypostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_image_picker__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_img_viewer__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { Clipboard } from '@ionic-native/clipboard';



// import { Transfer, FileUploadOptions, TransferObject } from '@ionic-native/transfer';
// import { ImagecontrollerProvider } from '../../providers/imagecontroller';



var AddcummunitypostPage = /** @class */ (function () {
    function AddcummunitypostPage(navCtrl, navParams, imageViewerCtrl, loadingCtrl, transfer, file, 
        // private transfer: Transfer,
        events, imagePicker, apiServices, storage, 
        // private clipboard: Clipboard,
        alertCtrl, sanitizer, camera, toastCtrl, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imageViewerCtrl = imageViewerCtrl;
        this.loadingCtrl = loadingCtrl;
        this.transfer = transfer;
        this.file = file;
        this.events = events;
        this.imagePicker = imagePicker;
        this.apiServices = apiServices;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.sanitizer = sanitizer;
        this.camera = camera;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.showVal = false;
        this.showCamera = true;
        this.albumUploadImageStatus = false;
        this.a1Data = [{ img: '' }];
        this.images = [];
        this.justShowImage = [];
        this.shoeCameraIcon = false;
        this.album = "";
        this.newLink = "";
        this.media_type = "";
        this._imageViewerCtrl = imageViewerCtrl;
        this.communityId = this.navParams.get('communityId');
        this.title = this.navParams.get('title');
        this.storage.get('user_image').then(function (data) {
            _this.user_image = data;
            console.log(' deviceId== ', _this.user_image);
        });
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            console.log(' deviceId== ', _this.deviceId);
        });
        this.storage.get('first_name').then(function (data) {
            _this.firstName = data;
            console.log(' deviceId== ', _this.firstName);
        });
        this.storage.get('last_name').then(function (data) {
            _this.lastName = data;
            console.log(' deviceId== ', _this.firstName);
        });
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
        });
        this.storage.get('login_token').then(function (data) {
            _this.login_token = data;
        });
        this.storage.get('showOnBoard').then(function (data) {
            _this.usertype = data;
            console.log('showOnBoard value is111==', data);
        });
    }
    AddcummunitypostPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddcummunitypostPage');
    };
    AddcummunitypostPage.prototype.showPrompt = function () {
        var _this = this;
        this.showCamera = false;
        var prompt = this.alertCtrl.create({
            subTitle: 'Share a Link:-',
            inputs: [
                {
                    name: 'url',
                    placeholder: 'Enter Url To Share'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        _this.albumUploadImageStatus = false;
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function (data) {
                        _this.showVal = false;
                        _this.newLink = "https://www.youtube.com/embed/" + data.url.slice(17);
                        data.url = data.url.trim();
                        if (data.url != "") {
                            _this.url = _this.sanitizer.bypassSecurityTrustResourceUrl(_this.newLink);
                            _this.media_type = '2';
                            _this.shoeCameraIcon = true;
                            _this.albumUploadImageStatus = true;
                        }
                        else {
                            return;
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    AddcummunitypostPage.prototype.closeData = function () {
        this.albumUploadImageStatus = false;
        this.shoeCameraIcon = false;
        this.showVal = false;
        var anydata;
        this.url = anydata;
        this.media_type = '';
    };
    AddcummunitypostPage.prototype.showCameraDiv = function () {
        this.showCamera = !this.showCamera;
        this.albumUploadImageStatus = true;
    };
    AddcummunitypostPage.prototype.Confirmation = function (optionkey) {
        var _this = this;
        var alert = this.alertCtrl.create({
            // title: 'Confirm purchase',
            message: 'Usage of personal camera for photography (by any means) is strictly prohibited in the office premises',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        console.log('Buy clicked');
                        if (optionkey == 'camera') {
                            _this.takephotoFromCamera();
                        }
                        else {
                            _this.takephotoFromGallery();
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    AddcummunitypostPage.prototype.takephotoFromCamera = function () {
        var _this = this;
        this.albumUploadImageStatus = true;
        var options = {
            quality: 100,
            sourceType: this.camera.PictureSourceType.CAMERA,
            saveToPhotoAlbum: false,
            correctOrientation: true,
            cameraDirection: 1,
        };
        this.camera.getPicture(options).then(function (imagePath) {
            _this.currentName = imagePath;
            var param1 = {
                'link': _this.currentName,
                'status': false,
                'index': _this.justShowImage.length,
                'showRetry': false
            };
            _this.justShowImage.push(param1);
            console.log("param1", _this.justShowImage);
            var name = _this.currentName.split("/"); // code for fetching file name
            _this.fileName = name[name.length - 1];
            _this.temp_index = _this.justShowImage.length - 1;
            _this.uploadImage(_this.currentName, _this.fileName, _this.justShowImage.length - 1);
        }, function (err) {
            _this.commonToster('Error while selecting image.');
        });
    };
    AddcummunitypostPage.prototype.retry = function (index) {
        this.justShowImage[index].status = false;
        this.justShowImage[index].showRetry = false;
        this.currentName = this.justShowImage[index].imgPath;
        var name = this.currentName.split("/"); // code for fetching file name
        this.fileName = name[name.length - 1];
        this.uploadImage(this.currentName, this.fileName, index);
    };
    AddcummunitypostPage.prototype.takephotoFromGallery = function () {
        var _this = this;
        //     this.justShowImage = [{
        //     'link':'assets/img/avatar2.png',
        //     'status':false,
        //     'index':0,
        //     'showRetry':false
        //   },{
        //     'link':'assets/img/avatar3.png',
        //     'status':false,
        //     'index':1,
        //     'showRetry':false
        //   },{
        //     'link':'assets/img/avatar1.png',
        //     'status':false,
        //     'index':2,
        //     'showRetry':false
        //   },{
        //     'link':'assets/img/avatar2.png',
        //     'status':false,
        //     'index':3,
        //     'showRetry':false
        //   },
        // ]
        // setTimeout(() => {
        //   this.justShowImage[0].status = true;
        //   this.justShowImage[1].status = true;
        //   this.justShowImage[3].status = true;
        //   this.justShowImage[2].showRetry = true;
        // },1500)
        var options = {
            quality: 50,
            maximumImagesCount: 4
        };
        this.imagePicker.getPictures(options).then(function (results) {
            for (var i = 0; i < results.length; i++) {
                if (results[i].length > 1) {
                    var param = {
                        'link': results[i],
                        'status': false,
                        'index': _this.justShowImage.length,
                        'showRetry': false
                    };
                    _this.justShowImage.push(param);
                    console.log('Image URI: ' + results[i]);
                    _this.currentName = results[i];
                    var name_1 = _this.currentName.split("/"); // code for fetching file name
                    _this.fileName = name_1[name_1.length - 1];
                    _this.temp_index = _this.justShowImage.length - 1;
                    var imageUploaded = _this.uploadImage(_this.currentName, _this.fileName, _this.justShowImage.length - 1);
                }
                else {
                }
            }
        }, function (err) {
            _this.commonToster('Error while selecting image.');
        });
    };
    AddcummunitypostPage.prototype.uploadImage = function (imagepass, nameoffile, index) {
        var _this = this;
        console.log(' Amit index==  ', index + 'new index==' + this.temp_index);
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            console.log(' deviceId== ', _this.deviceId);
        });
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
        });
        this.storage.get('login_token').then(function (data) {
            _this.login_token = data;
        });
        this.storage.get('showOnBoard').then(function (data) {
            _this.usertype = data;
            console.log('showOnBoard value is111==', data);
        });
        // Destination URL
        var url = this.apiServices.cummunityimgupload; /// 
        var targetPath = imagepass; // aply only for imagepicker checking
        this.storage.get('employeeId').then(function (data) { _this.employeeId = data; });
        this.storage.get('client_id').then(function (data) {
            _this.client_id = data;
            var options = {
                fileKey: "file",
                fileName: nameoffile,
                chunkedMode: false,
                mimeType: "multipart/form-data",
                headers: { 'Authorization': _this.login_token },
                params: {
                    'flag': '31',
                    'client_id': _this.apiServices.clientId,
                    'device': _this.apiServices.device,
                    'device_id': _this.deviceId,
                    'app_version': _this.apiServices.appVersion,
                    'employee_id': _this.employeeId,
                    'user_type': _this.usertype,
                    'file': targetPath,
                    "index": index,
                    "media_type": '1'
                }
            };
            console.log("options", options);
            var fileTransfer = _this.transfer.create();
            fileTransfer.upload(targetPath, url, options).then(function (res) {
                console.log("res", res);
                var data = JSON.parse(res.response);
                if (data.success == 1) {
                    console.log("data12", data);
                    _this.media_type = '1';
                    for (var j = 0; j < _this.justShowImage.length; j++) {
                        if (_this.justShowImage[j].index == data.index) {
                            _this.justShowImage[j].link = data.link;
                            _this.justShowImage[j].status = true;
                        }
                    }
                    var param = {
                        'img': data.last_id
                    };
                    _this.images.push(param);
                    // for(var x=1;x<=this.justShowImage.length;x++){
                    //   if(x==this.justShowImage.length){
                    //     this.commonToster(data.message);
                    //   }
                    // }
                    console.log("this.images", _this.images);
                    // this.commonToster(data.message);
                }
                if (data.success == 0) {
                    console.log("success0", data);
                    for (var j = 0; j < _this.justShowImage.length; j++) {
                        if (_this.justShowImage[j].index == data.index) {
                            _this.justShowImage[j].showRetry = true;
                        }
                    }
                }
            }, function (err) {
                _this.commonToster('Error while uploading file');
            });
        });
    };
    AddcummunitypostPage.prototype.imageAlbumDelete = function (i) {
        this.justShowImage.splice(i, 1);
        this.images.splice(i, 1);
        if (this.images.length == 0) {
            this.albumUploadImageStatus = false;
            this.media_type == '';
        }
    };
    AddcummunitypostPage.prototype.sanatizeBase64Image = function (image) {
        if (image) {
            console.log('domsenetizer called');
            return this.sanitizer.bypassSecurityTrustResourceUrl(image);
        }
    };
    AddcummunitypostPage.prototype.onSubmit = function () {
        var _this = this;
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            console.log(' deviceId== ', _this.deviceId);
        });
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
        });
        this.storage.get('login_token').then(function (data) {
            _this.login_token = data;
        });
        this.comment = this.comment.trim();
        if (this.comment == '') {
            var msg = 'Please write some description';
            this.commonToster(msg);
        }
        else {
            var alert_1 = this.alertCtrl.create({
                message: 'Are You Sure the content is appropriate for REACH and relevent for this community??',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'OK',
                        handler: function () {
                            var loading = _this.loadingCtrl.create({
                                enableBackdropDismiss: true,
                                spinner: 'ios-small',
                                content: "Loading... "
                            });
                            loading.present();
                            _this.storage.get('client_id').then(function (data) {
                                _this.client_id = data;
                                if (_this.media_type == '1') {
                                    _this.user = {
                                        "client_id": _this.apiServices.clientId,
                                        "employee_id": _this.employeeId,
                                        "device": _this.apiServices.device,
                                        "device_id": _this.deviceId,
                                        "app_version": _this.apiServices.appVersion,
                                        "value": "1",
                                        "title": _this.title,
                                        "description": _this.comment,
                                        "media": _this.images,
                                        "media_type": _this.media_type,
                                        "community_id": _this.communityId
                                    };
                                }
                                if (_this.media_type == '2') {
                                    _this.user = {
                                        "client_id": _this.apiServices.clientId,
                                        "employee_id": _this.employeeId,
                                        "device": _this.apiServices.device,
                                        "device_id": _this.deviceId,
                                        "app_version": _this.apiServices.appVersion,
                                        "value": "1",
                                        "title": _this.title,
                                        "description": _this.comment,
                                        "media": _this.newLink,
                                        "media_type": _this.media_type,
                                        "community_id": _this.communityId
                                    };
                                }
                                if (_this.media_type == '') {
                                    _this.user = {
                                        "client_id": _this.apiServices.clientId,
                                        "employee_id": _this.employeeId,
                                        "device": _this.apiServices.device,
                                        "device_id": _this.deviceId,
                                        "app_version": _this.apiServices.appVersion,
                                        "value": "1",
                                        "title": _this.title,
                                        "description": _this.comment,
                                        "media": '',
                                        "media_type": '',
                                        "community_id": _this.communityId
                                    };
                                }
                                _this.apiServices.submitcumunitypost(_this.user, _this.login_token).subscribe(function (res) {
                                    loading.dismiss();
                                    if (res.success == 1) {
                                        // this.viewCtrl.dismiss();
                                        _this.commonToster(res.message);
                                        _this.navCtrl.popTo(_this.navCtrl.getByIndex(_this.navCtrl.length() - 2));
                                        //   this.flag = res.flag;
                                        //   this.id = res.id;
                                        //   if(this.data.commingFrom=='homePage'){
                                        //     this.events.publish('communityPost111', res);
                                        //  console.log('community post event publish');
                                        //   }
                                        // this.pushApiFunction();
                                    }
                                    if (res.success == 0) {
                                        _this.commonToster(res.message);
                                    }
                                }, function (err) {
                                    loading.dismiss();
                                });
                            });
                        }
                    }
                ]
            });
            alert_1.present();
        }
    };
    AddcummunitypostPage.prototype.commonToster = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    AddcummunitypostPage.prototype.publish = function () {
        var _this = this;
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            console.log(' deviceId== ', _this.deviceId);
        });
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
        });
        this.storage.get('login_token').then(function (data) {
            _this.login_token = data;
        });
        this.comment = this.comment.trim();
        if (this.comment == '') {
            var msg = 'Please write some description';
            this.commonToster(msg);
        }
        else {
            var loading_1 = this.loadingCtrl.create({
                enableBackdropDismiss: true,
                spinner: 'ios-small',
                content: "Loading... "
            });
            loading_1.present();
            this.storage.get('client_id').then(function (data) {
                _this.client_id = data;
                if (_this.media_type == '1') {
                    _this.user = {
                        "client_id": _this.apiServices.clientId,
                        "employee_id": _this.employeeId,
                        "device": _this.apiServices.device,
                        "device_id": _this.deviceId,
                        "app_version": _this.apiServices.appVersion,
                        "value": "1",
                        "title": _this.title,
                        "description": _this.comment,
                        "media": _this.images,
                        "media_type": _this.media_type,
                        "community_id": _this.communityId
                    };
                }
                if (_this.media_type == '2') {
                    _this.user = {
                        "client_id": _this.apiServices.clientId,
                        "employee_id": _this.employeeId,
                        "device": _this.apiServices.device,
                        "device_id": _this.deviceId,
                        "app_version": _this.apiServices.appVersion,
                        "value": "1",
                        "title": _this.title,
                        "description": _this.comment,
                        "media": _this.newLink,
                        "media_type": _this.media_type,
                        "community_id": _this.communityId
                    };
                }
                if (_this.media_type == '') {
                    _this.user = {
                        "client_id": _this.apiServices.clientId,
                        "employee_id": _this.employeeId,
                        "device": _this.apiServices.device,
                        "device_id": _this.deviceId,
                        "app_version": _this.apiServices.appVersion,
                        "value": "1",
                        "title": _this.title,
                        "description": _this.comment,
                        "media": '',
                        "media_type": '',
                        "community_id": _this.communityId
                    };
                }
                _this.apiServices.submitcumunitypost(_this.user, _this.login_token).subscribe(function (res) {
                    loading_1.dismiss();
                    if (res.success == 1) {
                        // this.viewCtrl.dismiss();
                        // this.commonToster(res.message)
                        // this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-2));
                        _this.onSubmit1(res.message);
                    }
                    if (res.success == 0) {
                        _this.commonToster(res.message);
                    }
                }, function (err) {
                    loading_1.dismiss();
                });
            });
        }
    };
    AddcummunitypostPage.prototype.onSubmit1 = function (msg) {
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
                        _this.navCtrl.popTo(_this.navCtrl.getByIndex(_this.navCtrl.length() - 2));
                    }
                }
            ]
        });
        alert.present();
    };
    AddcummunitypostPage.prototype.presentImage = function (myImage) {
        var imageViewer = this._imageViewerCtrl.create(myImage);
        imageViewer.present();
        // setTimeout(() => imageViewer.dismiss(), 30000);
        imageViewer.onDidDismiss(function () { return console.log('Viewer dismissed'); });
    };
    AddcummunitypostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addcummunitypost',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/addcummunitypost/addcummunitypost.html"*/'<!--\n  Generated template for the AddcummunitypostPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Add Community Post</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item style="    background-color: #f2f2f2; margin-bottom:0px;">\n      <ion-avatar item-start >\n\n          <img class="imgcss" onerror="this.src=\'../../assets/watermark/watermark.png\'" #myImage \n          src="{{user_image}}" (click)="presentImage(myImage)"  >\n          \n\n        <!-- <img *ngIf="user_image!=\'\'" [src]="user_image" #myImage (click)="pp(myImage)" style="    border: 1px solid #0074A6;"> -->\n        <!-- <img  *ngIf="user_image==\'\'" src="{{ \'http://admin.benepik.com/employee/rajesh/a2z/\'+(firstName[0])+\'.jpg\' |lowercase}} " #myImage1\n          (click)="pp(myImage1)"> -->\n      </ion-avatar>\n      <!-- <h2>{{firstName}} {{lastName}}</h2> -->\n\n      <!-- <goto-profile class="flag2Txt1" name={{firstName}} empid={{employeeId}}></goto-profile>   -->\n      <p class="user">{{ firstName }} {{ lastName }}</p>\n<!-- \n      <button *ngIf="comment==undefined || comment==\'\'" ion-button medium style="float: right;    background-color: #345da4ba;\n    color: white;">Publish</button>\n      <button *ngIf="comment!=undefined && comment!=\'\'" ion-button medium style="float: right;    background-color: #345da4;\n    color: white;" (click)="publish()">Publish</button> -->\n\n\n    <button [disabled]="comment==undefined || comment==\'\'" ion-button medium style="float: right;    background-color: #345da4;\n    color: white;" (click)="publish()">Publish</button>\n    </ion-item>\n  </ion-list>\n\n\n  <form>\n    <ion-textarea autocomplete=“true” autocorrect="true" spellcheck=“true” autocomplete=“on” autocorrect=“on”  style="border: 1px solid grey;" rows="10" name="comment " [(ngModel)]="comment" placeholder="Write something here*">\n    </ion-textarea>\n\n\n\n    <div *ngIf="url!=undefined" style="  margin-top: 25px; text-align: center;">\n      <iframe width="300" height="300" [src]="url">\n      </iframe> <button (click)="closeData()" ion-button icon-only style="  margin-left: -59px;\nmargin-top: 5px;\nposition: absolute;\nborder-radius: 34%;\nheight: 30px;\n"><ion-icon name="close-circle" style="font-size: 2.2em;\n\n" ></ion-icon></button> </div>\n\n  </form>\n  <ion-scroll scrollX="true" *ngIf="justShowImage.length>0" class="scroldata" style="      height: 34%;">\n\n    <div class="scroll-item" *ngFor="let li of justShowImage let i=index;" >\n      <img class="scroll-item bageScrollImage1234" [src]="li.link" onError="this.src=\'../../assets/watermark/watermark.png\';" imageViewer [ngClass]="{\'blur\':(!li.status),\'normal\':(li.status)}"/>\n      <ion-spinner *ngIf="!li.status && !li.showRetry " class="spinnerdesign" name="crescent"></ion-spinner>\n      <ion-icon class="retry" (tap)="retry(i)" *ngIf="li.showRetry" name="cloud-upload">\n        <p class="retrytext">\n          Retry\n        </p>\n      </ion-icon>\n      <span style="float: right;" (click)="imageAlbumDelete(i)"> \n      <ion-icon name="close-circle" style="    font-size: 2.1em; margin-left: -28px;position: absolute;"></ion-icon></span>\n    </div>\n  </ion-scroll>\n\n\n  <div style="text-align: left;    margin-top: 8px;\n         background-color: gainsboro;">\n    <button style="    padding-top: 1px;" icon-only clear ion-button (click)="showCameraDiv()" *ngIf="!shoeCameraIcon"> <ion-icon name="camera" style="    color: #6699ff;">\n                <br><span style="     font-size: 12px;\n                color: #999;">Camera</span>  </ion-icon></button>\n\n    <button style="    padding-top: 1px;" icon-only clear ion-button (click)="showPrompt()">  <ion-icon name="logo-youtube" style="    color: red;">\n                    <br><span style="      font-size: 12px;\n                    color: #999;">YouTube</span></ion-icon></button>\n  </div>\n\n  <div *ngIf="showCamera">\n    <button ion-button class="camPhoto" (click)="Confirmation(\'camera\')"><ion-icon name="camera">\n                   <br><span style="    font-size: 12px;">Camera</span>\n               </ion-icon>\n               </button>\n    <button ion-button class="camPhoto" (click)="Confirmation(\'images\')"><ion-icon name="images"> \n                 <br><span style="    font-size: 12px;">All Photos</span></ion-icon></button>\n\n  </div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/addcummunitypost/addcummunitypost.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */], __WEBPACK_IMPORTED_MODULE_9_ionic_img_viewer__["a" /* ImageViewerController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["D" /* ViewController */]])
    ], AddcummunitypostPage);
    return AddcummunitypostPage;
}());

//# sourceMappingURL=addcummunitypost.js.map

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcummunitypostPageModule", function() { return AddcummunitypostPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addcummunitypost__ = __webpack_require__(1019);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddcummunitypostPageModule = /** @class */ (function () {
    function AddcummunitypostPageModule() {
    }
    AddcummunitypostPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__addcummunitypost__["a" /* AddcummunitypostPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__addcummunitypost__["a" /* AddcummunitypostPage */]),
            ],
        })
    ], AddcummunitypostPageModule);
    return AddcummunitypostPageModule;
}());

//# sourceMappingURL=addcummunitypost.module.js.map

/***/ })

});
//# sourceMappingURL=141.js.map
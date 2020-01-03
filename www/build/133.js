webpackJsonp([133],{

/***/ 1027:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AplicantwelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_api_service_api_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_image_picker__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_device__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { MakeMeLowerPipe } from '../../pipes/make-me-lower/make-me-lower';






/**
 * Generated class for the AplicantwelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AplicantwelcomePage = /** @class */ (function () {
    function AplicantwelcomePage(actionSheetCtrl, loadingCtrl, menu, modalCtrl, apiService, toastCtrl, imagePicker, device, camera, file, navCtrl, zone, 
        // private pipe: MakeMeLowerPipe,
        navParams, storage, filetransfer, apiServices, transfer) {
        var _this = this;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.menu = menu;
        this.modalCtrl = modalCtrl;
        this.apiService = apiService;
        this.toastCtrl = toastCtrl;
        this.imagePicker = imagePicker;
        this.device = device;
        this.camera = camera;
        this.file = file;
        this.navCtrl = navCtrl;
        this.zone = zone;
        this.navParams = navParams;
        this.storage = storage;
        this.filetransfer = filetransfer;
        this.apiServices = apiServices;
        this.transfer = transfer;
        this.imagelink = '';
        this.showSubmitButton = false;
        this.hideshow = 0;
        this.showTemp = false;
        this.checkId = false;
        this.id = 0;
        this.check1 = false;
        this.check2 = false;
        this.check3 = false;
        this.form = [{ val: 'Favourite Pass Time', isChecked: false, name: '' },
            { val: ' Favourite Cuisine', isChecked: false, name: '' },
            { val: 'Favourite place', isChecked: false, name: '' }];
        this.storage.get('login_token').then(function (data) {
            console.log('showOnBoard value is111==', data);
            _this.login_token = data;
        });
        this.storage.get('showOnBoard').then(function (data) {
            _this.emptype = data;
            console.log('showOnBoard value is==', data);
        });
    }
    //Common Loader:
    AplicantwelcomePage.prototype.commonLoader = function () {
        this.loading = this.loadingCtrl.create({
            enableBackdropDismiss: true,
            spinner: 'ios-small',
            content: 'Loading data...'
        });
        this.loading.present();
    };
    AplicantwelcomePage.prototype.addimage = function () {
        // let profileModal = this.modalCtrl.create('ProfileDosDontsPage');
        // profileModal.onDidDismiss(data => {
        //   console.log(data);
        // this.showActionSheet();
        // })
        // profileModal.present();
        this.showCustomActionSheet = true;
    };
    AplicantwelcomePage.prototype.hideActionsheet = function () {
        this.showCustomActionSheet = false;
    };
    AplicantwelcomePage.prototype.usingCamera = function (myoption) {
        // this.hideshow = 1;
        // this.buttonshow=0;
        // this.title = '';
        if (myoption == 'camera') {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
        }
        else {
            this.pickFromGalleary(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
    };
    AplicantwelcomePage.prototype.takePicture = function (sourceType) {
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
    AplicantwelcomePage.prototype.pickFromGalleary = function (sourceType) {
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
    AplicantwelcomePage.prototype.uploadImageonserver = function (imagepass, nameoffile) {
        var _this = this;
        this.storage.get('employee_type').then(function (data) {
            _this.employee_type = data;
            console.log(' deviceId== ', _this.deviceId);
        });
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
                console.log("optionsasd", JSON.stringify(options));
                var fileTransfer = _this.transfer.create();
                fileTransfer.upload(targetPath, url, options).then(function (res) {
                    var data = JSON.parse(res.response);
                    console.log("response== ", res);
                    console.log("response22== ", data);
                    if (data.success == 1) {
                        _this.userImage = data.link;
                        _this.imagelink = data.link;
                        _this.showSubmitButton == true;
                        _this.showCustomActionSheet = false;
                        // this.buttonshow=1;
                        _this.showCustomActionSheet = false;
                        // this.userImageBg=this.userImage;
                        _this.storage.set('user_image', data.link);
                        // this.apiMessage(data.message);
                    }
                    else {
                        // this.apiMessage(data.message);
                    }
                }, function (err) {
                    // alert('err=='+ err);
                    // this.apiMessage(err);
                    // this.presentToast(message);
                });
            });
        });
    };
    AplicantwelcomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AplicantwelcomePage');
    };
    AplicantwelcomePage.prototype.previewFunc = function () {
        console.log("test", this.imagelink);
        if (this.imagelink == undefined || this.imagelink == '') {
            var msg = 'Please upload profile picture.';
            this.apiMessage(msg);
        }
        else {
            this.goToPreview();
        }
        // this.goToPreview();
        // if (this.pasttime == undefined || this.pasttime == '') {
        //   let msg = 'Please Enter your Favourite Past Time.';
        //   this.apiMessage(msg);
        //   return false;
        // }
        // if (this.sport == undefined || this.sport == '') {
        //   let msg = 'Please Enter your Favourite sport.';
        //   this.apiMessage(msg);
        //   return false;
        // }
        // if (this.cuisine == undefined || this.cuisine == '') {
        //   let msg = 'Please Enter your Favourite cuisine.';
        //   this.apiMessage(msg);
        //   return false;
        // }
        // if (this.rmodel == undefined || this.rmodel == '') {
        //   let msg = 'Please Enter your Favourite role model.';
        //   this.apiMessage(msg);
        //   return false;
        // }
        // if (this.quote == undefined || this.quote == '') {
        //   let msg = 'Please Enter your Favourite quote.';
        //   this.apiMessage(msg);
        //   return false;
        // }
        // if (this.place == undefined || this.place == '') {
        //   let msg = 'Please Enter your native place.';
        //   this.apiMessage(msg);
        //   return false;
        // }
        // if (this.fplace == undefined || this.fplace == '') {
        //   let msg = 'Please Enter your favourite place.';
        //   this.apiMessage(msg);
        //   return false;
        // }
        // if (this.number == undefined) {
        //   let msg = 'Please Enter your mobile number.';
        //   this.apiMessage(msg);
        //   return false;
        // }
        // if (this.awards == undefined || this.awards == '') {
        //   console.log('this.awards',this.awards)
        //   this.awards='';
        // }
        if (this.pasttime == undefined || this.pasttime == '') {
            console.log('this.pasttime', this.pasttime);
            this.pasttime = '';
        }
        if (this.cuisine == undefined || this.cuisine == '') {
            console.log('this.pasttime', this.cuisine);
            this.cuisine = '';
        }
        if (this.fplace == undefined || this.fplace == '') {
            console.log('this.pasttime', this.cuisine);
            this.fplace = '';
        }
        // this.goToPreview()
    };
    //Toast Function:
    AplicantwelcomePage.prototype.presentToast = function (APImessage) {
        var toast = this.toastCtrl.create({
            message: APImessage,
            duration: 1500,
            position: 'top'
        });
    };
    AplicantwelcomePage.prototype.goToPreview = function () {
        var _this = this;
        this.commonLoader();
        this.storage.get('login_token').then(function (data) {
            console.log('showOnBoard value is111==', data);
            _this.login_token = data;
        });
        this.storage.get('showOnBoard').then(function (data) {
            _this.emptype = data;
            console.log('showOnBoard value is==', data);
        });
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            console.log(' deviceId== ', _this.deviceId);
        });
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
            if (_this.pasttime == "NA") {
                _this.pasttime = '';
            }
            if (_this.cuisine == "NA") {
                _this.cuisine = '';
            }
            if (_this.fplace == "NA") {
                _this.fplace = '';
            }
            var user = {
                "client_id": _this.apiServices.clientId,
                // "joinee_id":this.employeeId,
                "employee_id": _this.employeeId,
                "device": _this.apiServices.device,
                "device_id": _this.deviceId,
                "app_version": _this.apiServices.appVersion,
                "fav_past_time": _this.pasttime,
                "fav_sports": '',
                "fav_cuisine": _this.cuisine,
                "role_model": '',
                "fav_quote": '',
                "fav_place": _this.fplace,
                "native_place": '',
                "mobile_number": '',
                "special_achievement": '',
                "user_type": _this.emptype
            };
            console.log('Preview Request:', user);
            _this.apiServices.preonboard(user, _this.login_token)
                .subscribe(function (res) {
                _this.loading.dismiss();
                if (res.success == 1) {
                    console.log('Preview Request:', res);
                    var oldData = {
                        award: res.data.award,
                        fav_cuisine: res.data.fav_cuisine,
                        fav_place: res.data.fav_place,
                        fav_quote: res.data.fav_quote,
                        fav_sports: res.data.fav_sports,
                        joinee_image: res.data.joinee_image,
                        joinee_name: res.data.joinee_name,
                        role_model: res.data.role_model,
                        sentence: res.data.sentence,
                    };
                    console.log('Success1:', res);
                    // this.navCtrl.push('PreviewPage', {'alldata':oldData,'pasttime':this.pasttime,
                    // 'native_place':this.place,'mobile_number':this.number});
                    _this.navCtrl.push('PreviewPage', { 'alldata': oldData, 'pasttime': _this.pasttime,
                        'native_place': _this.place, 'mobile_number': _this.number, 'imagelink': _this.imagelink });
                }
                else {
                    _this.apiMessage(res.message);
                    console.log('Success0:', res);
                }
            }, function (err) {
                console.log('Error:', err);
            });
        });
    };
    AplicantwelcomePage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    AplicantwelcomePage.prototype.checkBoxWork = function (data) {
        var _this = this;
        // data.isChecked = !data.isChecked;
        // data.name = 'NA';
        this.zone.run(function () {
            console.log('worked', data);
            if (data == "pasttime") {
                if (_this.pasttime == 'NA') {
                    _this.pasttime = '';
                }
                else {
                    _this.pasttime = 'NA';
                }
                _this.check1 = !_this.check1;
            }
            else if (data == "cuisine") {
                if (_this.cuisine == 'NA') {
                    _this.cuisine = '';
                }
                else
                    _this.cuisine = 'NA';
                _this.check2 = !_this.check2;
            }
            else if (data == "fplace") {
                if (_this.fplace == 'NA') {
                    _this.fplace = '';
                }
                else
                    _this.fplace = 'NA';
                _this.check3 = !_this.check3;
            }
        });
    };
    AplicantwelcomePage.prototype.ionViewWillEnter = function () {
        this.menu.swipeEnable(false);
    };
    AplicantwelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-aplicantwelcome',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/aplicantwelcome/aplicantwelcome.html"*/'\n<ion-header class="applicant">\n  <ion-navbar>\n    <ion-title>Welcome Form</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="pulseBG" padding>\n    <ion-row>\n        <ion-col>\n          <h2 class="topText1">We would like to know more about you</h2>\n        </ion-col>\n      </ion-row>\n\n      <div class="divTheme">\n          <ion-row>\n            <ion-col col-8 class="usernamecolPadding">\n              <!-- <h2 style="font-size: 18px;">Test User</h2> -->\n            </ion-col>\n      \n            <ion-col col-4 class="rightIt" (tap)="addimage()">\n              <img src="{{userImage}}" class="userRoundImageBig" onError="this.src=\'assets/imgs/profile.png\'">\n              <img src="assets/imgs/camera.png"  id="userProfileCameraPik">\n            \n            </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col col-6></ion-col>\n              <ion-col col-6> <p class="leftp">Upload your profile picture<sup class=\'star\'>*</sup></p></ion-col>\n            </ion-row>\n<!-- <div>  <p class="leftp">Upload your profile picture<sup class=\'star\'>*</sup></p></div> -->\n          <div *ngIf="showCustomActionSheet==true">\n              <div class="transparentLayerActionsheet" (tap)="hideActionsheet()"></div>\n              <div class="customActionsheetDIV">\n                <ion-grid>\n                  <ion-row>\n                    <ion-col>\n                      <h2>Profile Picture</h2>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row>\n                    <ion-col col-6 class="centerData" (click)="usingCamera(\'camera\')">\n                      <img src="assets/imgs/camera.png" class="actionSheetIcon" />\n                      <h4>Camera</h4>\n                    </ion-col>\n                    <ion-col col-6 class="centerData" (click)="usingCamera(\'gallery\')">\n                      <img src="assets/imgs/album.png" class="actionSheetIcon" />\n                      <h4>Gallery</h4>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </div>\n            </div>\n\n            <div class="outerDiv">\n                <ion-row >\n                    <ion-col col-12>\n                      <ion-row no-padding>\n                        <ion-col no-pading col-8 class="ct">Favourite Past Time</ion-col>\n                        <ion-col no-pading col-4 text-right (click)="checkBoxWork(\'pasttime\')">\n                            \n                                <img *ngIf="check1" class="resize disp" src="../../assets/imgs/radio button.png" />\n                                <img  *ngIf="!check1" class="resize disp" src="../../assets/imgs/radio buttonempty.png"/>\n                            <!-- <ion-checkbox slot="end" (click)="checkBoxWork(\'pasttime\')"></ion-checkbox> -->\n                                <p class="disp font-16">NA</p>\n                        \n                        </ion-col>\n                      </ion-row>\n                    </ion-col>\n                    <ion-col>\n                        <ion-input *ngIf="check1" type="text" value=\'NA\' readonly=true style="background-color: #e1e1e1;"></ion-input>\n                        <ion-input *ngIf="!check1" type="text" name="pasttime" [(ngModel)]="pasttime"  required></ion-input>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row >\n                      <ion-col col-12>\n                        <ion-row no-padding>\n                          <ion-col no-pading col-8  class="ct">Favourite Cuisine</ion-col>\n                          <ion-col no-pading col-4 text-right (click)="checkBoxWork(\'cuisine\')">\n                              \n                                  <img *ngIf="check2" class="resize disp" src="../../assets/imgs/radio button.png" />\n                                  <img  *ngIf="!check2" class="resize disp" src="../../assets/imgs/radio buttonempty.png"/>\n                              <!-- <ion-checkbox slot="end" (click)="checkBoxWork(\'pasttime\')"></ion-checkbox> -->\n                                  <p class="disp font-16">NA</p>\n                       \n                          </ion-col>\n                        </ion-row>\n                      </ion-col>\n                      <ion-col>\n                          <ion-input *ngIf="check2" type="text" value=\'NA\' readonly=true style="background-color: #e1e1e1;"></ion-input>\n                          <ion-input *ngIf="!check2" type="text" name="cuisine" [(ngModel)]="cuisine" [readonly]="check2" required></ion-input>\n                      </ion-col>\n                  </ion-row>\n                  <ion-row >\n                      <ion-col col-12>\n                        <ion-row no-padding>\n                          <ion-col no-pading col-8  class="ct">Favourite Holiday Desitination</ion-col>\n                          <ion-col no-pading col-4 text-right (click)="checkBoxWork(\'fplace\')">\n                              <img *ngIf="check3" class="resize disp" src="../../assets/imgs/radio button.png" />\n                              <img  *ngIf="!check3" class="resize disp" src="../../assets/imgs/radio buttonempty.png"/>\n                          <!-- <ion-checkbox slot="end" (click)="checkBoxWork(\'pasttime\')"></ion-checkbox> -->\n                              <p class="disp font-16">NA</p>\n                          </ion-col>\n                        </ion-row>\n                      </ion-col>\n                      <ion-col>\n                          <ion-input *ngIf="check3" type="text" value=\'NA\' readonly=true style="background-color: #e1e1e1;"></ion-input>\n                          <ion-input *ngIf="!check3" type="text" name="fplace" [(ngModel)]="fplace" [readonly]="check3" ></ion-input>\n                      </ion-col>\n                  </ion-row>\n      \n      \n      <!-- \n                    <ion-list style="    border: 1px solid gray;">\n                        <ion-item >\n                          <ion-label class="input_label" floating>\n                            Favourite Pass Time -->\n                            <!-- <sup class=\'star\'>*</sup> -->\n                          <!-- </ion-label>\n                          <ion-input type="text" name="pasttime" [(ngModel)]="pasttime" required></ion-input>\n                      </ion-item> -->\n                      <!-- <ion-item >\n                          <ion-label class="input_label" floating>\n                            Favourite Sport<sup class=\'star\'>*</sup>\n                          </ion-label>\n                          <ion-input type="text" name="sport" [(ngModel)]="sport" required></ion-input>\n                      </ion-item> -->\n                      <!-- <ion-item > -->\n                          <!-- <ion-label class="input_label" floating>\n                            Favourite Cuisine -->\n                            <!-- <sup class=\'star\'>*</sup> -->\n                          <!-- </ion-label>\n                          <ion-input type="text" name="cuisine" [(ngModel)]="cuisine" required></ion-input>\n                      </ion-item> -->\n                      <!-- <ion-item >\n                          <ion-label class="input_label" floating>\n                            Role Model<sup class=\'star\'>*</sup>\n                          </ion-label>\n                          <ion-input type="text" name="rmodel" [(ngModel)]="rmodel" ></ion-input>\n                      </ion-item> -->\n                      <!-- <ion-item >\n                          <ion-label class="input_label" floating>\n                            Favourite Quote<sup class=\'star\'>*</sup>\n                          </ion-label>\n                          <ion-input type="text" name="quote" [(ngModel)]="quote" ></ion-input>\n                      </ion-item> -->\n      \n                      <!-- <ion-item >\n                          <ion-label class="input_label" floating>\n                            Native place (You are originally from)<sup class=\'star\'>*</sup>\n                          </ion-label>\n                          <ion-input type="text" name="place" [(ngModel)]="place" ></ion-input>\n                      </ion-item> -->\n      \n      <!-- \n                      <ion-item >\n                        <ion-label class="input_label" floating>\n                          Favourite place -->\n                           <!-- <sup class=\'star\'>*</sup> -->\n                        <!-- </ion-label>\n                        <ion-input type="text" name="fplace" [(ngModel)]="fplace" ></ion-input>\n                    </ion-item> -->\n                      <!-- <ion-item >\n                          <ion-label class="input_label" floating>\n                            Mobile Number<sup class=\'star\'>*</sup>\n                          </ion-label>\n                          <ion-input type="number" name="number" max="10" [(ngModel)]="number"></ion-input>\n                      </ion-item> -->\n                \n                      <!-- <ion-item>\n                        <ion-label class="input_label" floating>\n                       Special Achievement Award\n                        </ion-label>\n                        <ion-input type="text" name="awards" [(ngModel)]="awards" ></ion-input>\n                    </ion-item> -->\n      <!-- \n                      </ion-list> -->\n                <div style="text-align: -webkit-center;">\n                  <button  ion-button full class="buttonCss" (tap)="previewFunc()">\n                    Preview\n                  </button>\n                </div>\n            </div>\n           \n                  \n\n      </div>\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/aplicantwelcome/aplicantwelcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1__providers_api_service_api_service__["a" /* ApiServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["B" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_1__providers_api_service_api_service__["a" /* ApiServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */]])
    ], AplicantwelcomePage);
    return AplicantwelcomePage;
}());

//# sourceMappingURL=aplicantwelcome.js.map

/***/ }),

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AplicantwelcomePageModule", function() { return AplicantwelcomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aplicantwelcome__ = __webpack_require__(1027);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AplicantwelcomePageModule = /** @class */ (function () {
    function AplicantwelcomePageModule() {
    }
    AplicantwelcomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aplicantwelcome__["a" /* AplicantwelcomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aplicantwelcome__["a" /* AplicantwelcomePage */]),
            ],
        })
    ], AplicantwelcomePageModule);
    return AplicantwelcomePageModule;
}());

//# sourceMappingURL=aplicantwelcome.module.js.map

/***/ })

});
//# sourceMappingURL=133.js.map
webpackJsonp([123],{

/***/ 1038:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatgoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { apiServiceProvider } from "../../providers/apiService";


// import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the CatgoriesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CatgoriesPage = /** @class */ (function () {
    function CatgoriesPage(navCtrl, toastCtrl, storage, menu, navParams, apiServices, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.menu = menu;
        this.navParams = navParams;
        this.apiServices = apiServices;
        this.loadingCtrl = loadingCtrl;
        this.colorclass1 = 0;
        this.idArray = [];
        this.passaray = [];
        this.newarray = [];
        this.count = 0;
        this.status = this.navParams.data.status;
        this.loadCategoryData();
    }
    CatgoriesPage.prototype.passdata = function (events, alldata, index) {
        console.log(index);
        console.log(alldata.flag);
        if (alldata.flag == 0) {
            this.APIdata[index].flag = 1;
            // this.colorclass[index]=this.APIdata[index].flag;
            // this.cid=this.APIdata[index].community_id;
            // this.colorclass1=1;
            console.log(this.APIdata[index].flag);
        }
        else {
            this.APIdata[index].flag = 0;
            // this.colorclass[index]=this.APIdata[index].flag;
            // this.cid=this.APIdata[index].community_id;
            // this.colorclass1=1;
            console.log(this.APIdata[index].flag);
        }
    };
    CatgoriesPage.prototype.nextPage = function () {
        var _this = this;
        this.newarray = [];
        console.log('this.APIdata=', this.APIdata);
        for (var key in this.APIdata) {
            if (this.APIdata[key].flag == 1) {
                var tempData = {
                    "community_id": this.APIdata[key].communityId,
                    "tag_id": this.APIdata[key].auto_id
                };
                this.newarray.push(tempData);
            }
        }
        // console.log("bhj",this.newarray);
        // console.log("bhjlength",this.newarray.length);
        if (this.newarray == [] || this.newarray.length < this.min_select) {
            var message = "Please select minimum " + this.min_select + " areas of interest";
            this.presentToast(message);
        }
        else {
            this.storage.get('employeeId').then(function (data) {
                _this.employeeId = data;
                console.log(' employeeId== ', _this.employeeId);
            });
            this.storage.get('login_token').then(function (data) {
                console.log('showOnBoard value is111==', data);
                _this.login_token = data;
            });
            // this.storage.get('employeeId').then((data) => { this.employeeId = data });
            this.storage.get('deviceId').then(function (data) {
                _this.deviceId = data;
                var intrestedArea = {
                    // "employeeId": this.employeeId,
                    // "clientId":this.client_id,
                    // "device":this.apiService.device,
                    // "deviceId": this.apiService.deviceId,
                    // "data":this.newarray
                    "client_id": _this.apiServices.clientId,
                    "employee_id": _this.employeeId,
                    "device": _this.apiServices.device,
                    "device_id": _this.deviceId,
                    "app_version": _this.apiServices.appVersion,
                    "tag_array": _this.newarray
                };
                _this.apiServices.cummunitytagsubmit(intrestedArea, _this.login_token).subscribe(function (res) {
                    _this.loading.dismiss();
                    if (res.success == 1) {
                        console.log(res);
                        _this.navCtrl.setRoot('TabsPage');
                        // this.presentToast(res.message);
                        // if(this.navParams.data.value == 'viaHomePage'){
                        //    this.navCtrl.push(TabsPage)
                        // }else{
                        //    this.navCtrl.setRoot(TabsPage)
                        // }
                    }
                    if (res.success == 0) {
                        _this.presentToast(res.message);
                    }
                }, function (err) {
                });
            });
        }
    };
    // passdata(events, alldata, index) {
    //   console.log(alldata)
    //   //*****now i am going to check check-box is checked or not******
    //   if (events.target.checked == true) {
    //     if(alldata.tag!=undefined){
    //       let tagSearcInArray = this.idArray.indexOf(alldata.tag);
    //       if (tagSearcInArray < 0) {
    //             this.passaray.push({ "tag": alldata.tag,"tagid": alldata.tagId });
    //       }
    //       console.log(this.passaray)
    //     }  
    //     //*****now i am going to check value is available in array or not******
    //     let dataSearcInArray = this.idArray.indexOf(alldata.communityName);
    //     if (dataSearcInArray < 0) {
    //       this.idArray.push(alldata.communityName);
    //       var output = '';
    //       for (var property in alldata.tags) {
    //         output = alldata.tags[property].tagName;
    //         let tagsId = alldata.tags[property].communityTagId
    //         this.mm = { "tag": output, "tagId":tagsId}
    //         this.APIdata.splice(index + 1, 0, this.mm);
    //       }
    //       console.log(this.APIdata)
    //     } else {
    //     }
    //   } else {
    //     index = this.passaray.findIndex(x => x.tag==alldata.tag);
    //     this.passaray.splice(index,1);
    //     console.log(this.passaray)
    //   }
    // }
    CatgoriesPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    CatgoriesPage.prototype.uniqBy = function (a, key) {
        var index = [];
        return a.filter(function (item) {
            var k = key(item);
            return index.indexOf(k) >= 0 ? false : index.push(k);
        });
    };
    // nextPage() {
    //   this.CommonLoader()
    //   console.log(this.passaray)
    //   for(var key in this.passaray){
    //       if(this.passaray[key].tagid!=undefined){
    //         this.newarray.push(this.passaray[key].tagid)
    //       }
    //   }
    //   this.newarray = this.uniqBy(this.newarray, JSON.stringify)
    //   console.log(this.newarray);
    //   if(this.newarray.length<5){
    //     this.presentToast();
    //     this.loading.dismiss();
    //     return false;
    //   }
    //   this.storage.get('employeeId').then((data) => { this.employeeId = data });
    //   this.storage.get('client_id').then((data) => {
    //     this.client_id = data;
    //     let intrestedArea = {
    //         "employeeId": this.employeeId,
    //         "clientId":this.client_id,
    //         "device":this.apiService.device,
    //         "deviceId": this.apiService.deviceId,
    //         "communityTag": {
    //         "data":this.newarray,
    //         "intrestedFlag": 1
    //       },
    //       "topicTag": {
    //         "data": "",
    //         "intrestedFlag": 2
    //       }
    //     }
    //     this.apiService.passInterstedAreaData(intrestedArea).subscribe((res) => {
    //       console.log(res);
    //       this.loading.dismiss();
    //       if (res.success == 1) {
    //           if(this.navParams.data.value == 'viaHomePage'){
    //             this.navCtrl.push(TabsPage)
    //           }else{
    //             this.navCtrl.setRoot(TabsPage)
    //           }
    //       }
    //     }, (err) => {
    //     })
    //   })
    //   // let param = {
    //   //   'topicDatatoShow':this.PassToopicData,
    //   //   'tagsDatatoPass':this.newarray,
    //   //   'page':'category'
    //   // }
    //   // this.navCtrl.push('FollowingcontentPage',param)
    // }
    CatgoriesPage.prototype.toggleItem = function (item) {
        console.log(item);
    };
    CatgoriesPage.prototype.updateCucumber = function (zs) {
        console.log("updatecucumbr", zs);
    };
    CatgoriesPage.prototype.CommonLoader = function () {
        this.loading = this.loadingCtrl.create({
            enableBackdropDismiss: true,
            spinner: 'ios-small',
            content: 'Loading...'
        });
        this.loading.present();
    };
    CatgoriesPage.prototype.loadCategoryData = function () {
        var _this = this;
        this.CommonLoader();
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
            console.log(' employeeId== ', _this.employeeId);
        });
        this.storage.get('login_token').then(function (data) {
            console.log('showOnBoard value is111==', data);
            _this.login_token = data;
        });
        // this.storage.get('employeeId').then((data) => { this.employeeId = data });
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            var user = {
                "client_id": _this.apiServices.clientId,
                "employee_id": _this.employeeId,
                "device": _this.apiServices.device,
                "device_id": _this.deviceId,
                "app_version": _this.apiServices.appVersion
            };
            _this.apiServices.cummunitytags(user, _this.login_token).subscribe(function (res) {
                _this.loading.dismiss();
                if (res.success == 1) {
                    _this.min_select = res.max_selection;
                    _this.select_msg = res.max_message;
                    _this.APIdata = res.data;
                    for (var j = 0; j < _this.APIdata.length; j++) {
                        if (_this.APIdata[j].flag == 1) {
                            _this.APIdata[j].checked = true;
                        }
                    }
                }
            }, function (err) {
                _this.loading.dismiss();
            });
        });
    };
    /**
     * This COmmented code is logic for older design of coomunity with Tags
     * in function loadCategoryData() of success==1.
     */
    // if (res.success == 1) {
    //   this.APIdata = res.communityTag.data;
    //   this.PassToopicData = res.topicTag.data
    //   if(this.status == 'update'){
    //     for(let j=0; j<this.APIdata.length;j++){
    //       if(this.APIdata[j].interested==0){
    //         this.APIdata[j].checked = false;
    //       }else{
    //         this.passaray.push({"tag": this.APIdata[j].tag,"tagid": this.APIdata[j].tagId})
    //       }
    //       this.count = j;
    //       if(this.APIdata[j].check == 1){
    //         this.APIdata[j]['checked'] = true;
    //         for(var key1 in this.APIdata[j].tags){
    //               this.tagcount = key1;
    //               this.temp = { "tag": this.APIdata[j].tags[key1].tagName, "tagId":this.APIdata[j].tags[key1].communityTagId,"checked":true,'interested':this.APIdata[j].tags[key1].is_intrested}
    //               this.APIdata.splice(this.count + 1, 0, this.temp);
    //               console.log(this.APIdata);
    //           }
    //       }
    //     }
    //   }
    // }
    CatgoriesPage.prototype.ionViewWillEnter = function () {
        this.menu.swipeEnable(false);
    };
    CatgoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-catgories',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/catgories/catgories.html"*/'<ion-header>\n    <ion-navbar color="headColor">\n      <ion-title>Areas of interest</ion-title>\n      <ion-buttons end>\n        <button ion-button (tap)="nextPage()" style="color:#4d2748 !important;">Next  &nbsp;\n            <ion-icon class="forward" name="ios-arrow-forward"></ion-icon> \n        </button>\n      </ion-buttons>\n    </ion-navbar>  \n  </ion-header>\n  <ion-content>\n    <div class="categoryclass">\n      <h2 class="areatag">\n        {{select_msg}}\n      </h2>\n    </div>\n   <ion-grid>\n     <ion-row class="rowmain" >\n       <ion-col col-auto *ngFor="let data of APIdata; let i = index" class="fivePhasesFadeIn">\n        <p [ngClass]="{\'choicePara\':(data.flag==0||data.flag==\'0\'),\'choiceParaSelected\':(data.flag==1||data.flag==\'1\')}">\n          <label *ngIf="data.aliasName!=undefined"  class="form-check-label">\n            <input  type="checkbox" class="form-check-input tag" [(ngModel)]="data.checked"\n            [value]="data" (click)="passdata($event,data,i)">{{data.aliasName}}\n            <span></span>\n          </label>\n          <!-- <label *ngIf="data.tag!=undefined" class="form-check-label">\n            <input  type="checkbox" class="form-check-input tag" [(ngModel)]="data.checked"\n            [value]="data" (click)="passdata($event,data,i)">{{data.tag}}\n            <span></span>\n          </label> -->\n          </p>\n       </ion-col>\n     </ion-row>\n   </ion-grid>\n  </ion-content>\n  '/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/catgories/catgories.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */]])
    ], CatgoriesPage);
    return CatgoriesPage;
}());

//# sourceMappingURL=catgories.js.map

/***/ }),

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatgoriesPageModule", function() { return CatgoriesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__catgories__ = __webpack_require__(1038);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CatgoriesPageModule = /** @class */ (function () {
    function CatgoriesPageModule() {
    }
    CatgoriesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__catgories__["a" /* CatgoriesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__catgories__["a" /* CatgoriesPage */]),
            ],
        })
    ], CatgoriesPageModule);
    return CatgoriesPageModule;
}());

//# sourceMappingURL=catgories.module.js.map

/***/ })

});
//# sourceMappingURL=123.js.map
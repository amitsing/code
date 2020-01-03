webpackJsonp([30],{

/***/ 1149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsattendancesheetPage; });
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




var UsattendancesheetPage = /** @class */ (function () {
    function UsattendancesheetPage(alertCtrl, platform, menu, loadingCtrl, toastCtrl, storage, apiServices, navCtrl, navParams) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.menu = menu;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.apiServices = apiServices;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.previousdata = this.navParams.get('data');
        this.title = this.previousdata.form_name;
        this.form_status = this.previousdata.form_status;
        this.storage.get('login_token').then(function (data) { _this.login_token = data; });
        this.storage.get('employeeId').then(function (data) { _this.employeeId = data; });
        this.get_attendance();
    }
    UsattendancesheetPage.prototype.get_attendance = function () {
        var _this = this;
        var url = "";
        if (this.previousdata.country_id == 8) {
            url = "Onboarding_Forms_Apis/canada_forms/get_orientation_att_data.php";
        }
        else {
            url = "Onboarding_Forms_Apis/usa_forms/get_orientation_att_data.php";
        }
        this.commonLoader();
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            var apiKey = {
                "client_id": _this.apiServices.clientId,
                "employee_id": _this.employeeId,
                "device": _this.apiServices.device,
                "device_id": _this.deviceId,
                "app_version": _this.apiServices.appVersion,
                "form_id": _this.previousdata.form_id
            };
            _this.apiServices.us_canada(url, apiKey, _this.login_token).subscribe(function (res) {
                console.log('tnc res==', res);
                _this.loading.dismiss();
                if (res.success == 1) {
                    _this.fill_status = res.fill_status;
                    _this.alldata = res.data.other_info;
                    _this.userNamedata = res.data.personal_info[0].userName;
                    console.log('tnc res==', _this.userNamedata);
                }
                else {
                    _this.navCtrl.pop();
                    _this.apiMessage(res.message);
                }
            }, function (err) {
                _this.loading.dismiss();
                console.log('err== ', err);
                _this.apiMessage(err);
            });
        });
    };
    //Common Loader:
    UsattendancesheetPage.prototype.commonLoader = function () {
        this.loading = this.loadingCtrl.create({
            enableBackdropDismiss: true,
            spinner: 'ios-small',
            content: 'Loading data...'
        });
        this.loading.present();
    };
    UsattendancesheetPage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    UsattendancesheetPage.prototype.submit = function (btn) {
        this.button = btn;
        this.HumanResourcesId = false;
        this.InformationDivId = false;
        this.AdministrationDivId = false;
        this.userNamedataId = false;
        if (this.userNamedata.is_mandatory == true && (this.userNamedata.value == '' ||
            this.userNamedata.value == undefined)) {
            var msg = 'All fields are mandatory';
            this.apiMessage(msg);
            this.userNamedataId = true;
            return false;
        }
        else if (this.alldata.human_resource_date.is_mandatory == true && (this.alldata.human_resource_date.value == '' ||
            this.alldata.human_resource_date.value == undefined)) {
            var msg = 'All fields are mandatory';
            this.apiMessage(msg);
            this.HumanResourcesId = true;
            return false;
        }
        else if (this.alldata.it_information_date.is_mandatory == true && (this.alldata.it_information_date.value == '' ||
            this.alldata.it_information_date.value == undefined)) {
            var msg = 'All fields are mandatory';
            this.apiMessage(msg);
            this.InformationDivId = true;
            return false;
        }
        else if (this.alldata.administration_date.is_mandatory == true && (this.alldata.administration_date.value == '' ||
            this.alldata.administration_date.value == undefined)) {
            var msg = 'All fields are mandatory';
            this.apiMessage(msg);
            this.AdministrationDivId = true;
            return false;
        }
        else {
            this.submitform(this.button);
        }
    };
    UsattendancesheetPage.prototype.submitform = function (btn) {
        var _this = this;
        var url = "";
        if (this.previousdata.country_id == 8) {
            url = "Onboarding_Forms_Apis/canada_forms/save_orientation_att_data.php";
        }
        else {
            url = "Onboarding_Forms_Apis/usa_forms/save_orientation_att_data.php";
        }
        // this.btnkey=btn;
        if (btn == 1) {
            this.submit_type = 'submit';
        }
        else {
            this.submit_type = 'save';
        }
        this.button = btn;
        this.commonLoader();
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            var apiKey = {
                "client_id": _this.apiServices.clientId,
                "employee_id": _this.employeeId,
                "device": _this.apiServices.device,
                "device_id": _this.deviceId,
                "app_version": _this.apiServices.appVersion,
                "form_id": _this.previousdata.form_id,
                "human_resource_date": _this.alldata.human_resource_date.value,
                "it_information_date": _this.alldata.it_information_date.value,
                "administration_date": _this.alldata.administration_date.value,
                "submit_type": _this.submit_type
            };
            _this.apiServices.us_canada(url, apiKey, _this.login_token).subscribe(function (res) {
                console.log('tnc res==', res);
                _this.loading.dismiss();
                if (res.success == 1) {
                    _this.apiMessage(res.message);
                    _this.navCtrl.pop();
                }
                else {
                    _this.navCtrl.pop();
                    _this.apiMessage(res.message);
                }
            }, function (err) {
                _this.loading.dismiss();
                console.log('err== ', err);
                _this.apiMessage(err);
            });
        });
    };
    UsattendancesheetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UsattendancesheetPage');
    };
    UsattendancesheetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-usattendancesheet',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/onboarding_forms/US/usattendancesheet/usattendancesheet.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      {{title}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding class="commonFormDiv">\n  <div [ngClass]="{\'newOverlay\':form_status != \'enable\'}">\n    <div class="WebFormDiv">\n      <div class="newCardDiv">\n        <div class="customCardDiv">\n          <ion-row *ngIf="userNamedata">\n            <ion-col col-12>\n\n              <div class="inputDiv">\n                <ion-label>Employee Name\n                  <sup *ngIf="userNamedata?.is_mandatory" class="redText">*</sup>\n                  <i *ngIf="userNamedata?.hint_applicable" [tooltip]="userNamedata.hint" positionV="top" arrow=\'true\'>\n                    <ion-icon ios="ios-information-circle" md="md-information-circle"></ion-icon>\n                  </i>\n                </ion-label>\n                <ion-input type="text" [ngClass]="{\'redborder\':userNamedataId,\'overlayDiv\':!userNamedata.is_enable}" [disabled]="!userNamedata.is_enable" name="{{userNamedata.value}}"\n                  [(ngModel)]="userNamedata.value" placeholder=""></ion-input>\n              </div>\n            </ion-col>\n          </ion-row>\n          <div class="newHeading">\n            <h4 no-margin>Functional Area</h4>\n          </div>\n          <br>\n          <div class="newHeading">\n            <h4 no-margin>Human Resources</h4>\n          </div>\n          <ion-row [id]="date_of_birthscrollDivId">\n            <ion-col col-12>\n              <div class="inputDiv">\n                <ion-label>Attended On\n                  <sup *ngIf="alldata?.human_resource_date.is_mandatory" class="redText">*</sup>\n                  <i *ngIf="alldata?.human_resource_date.hint_applicable" [tooltip]="alldata?.date_of_birth.hint"\n                    positionV="top" arrow=\'true\'>\n                    <ion-icon ios="ios-information-circle" md="md-information-circle"></ion-icon>\n                  </i>\n                </ion-label>\n                <ion-datetime type="text" pickerFormat="DD/MMM/YYYY" [ngClass]="{\'redborder\':HumanResourcesId,\'overlayDiv\':!alldata?.human_resource_date.is_enable}" [disabled]="!alldata?.human_resource_date.is_enable"\n                  placeholder="DD/MMM/YYYY" name="{{alldata?.human_resource_date.value}}" [(ngModel)]="alldata?.human_resource_date.value"\n                  ></ion-datetime>\n              </div>\n            </ion-col>\n          </ion-row>\n          <div class="newHeading">\n            <h4 no-margin>IT and Information Security</h4>\n          </div>\n          <ion-row [id]="date_of_birthscrollDivId">\n            <ion-col col-12>\n              <div class="inputDiv">\n                <ion-label>Attended On\n                  <sup *ngIf="alldata?.it_information_date.is_mandatory" class="redText">*</sup>\n                  <i *ngIf="alldata?.it_information_date.hint_applicable" [tooltip]="alldata?.it_information_date.hint"\n                    positionV="top" arrow=\'true\'>\n                    <ion-icon ios="ios-information-circle" md="md-information-circle"></ion-icon>\n                  </i>\n                </ion-label>\n                <ion-datetime type="text" pickerFormat="DD/MMM/YYYY" [ngClass]="{\'redborder\':InformationDivId,\'overlayDiv\':!alldata?.it_information_date.is_enable}" [disabled]="!alldata?.it_information_date.is_enable"\n                  placeholder="DD/MMM/YYYY" name="{{alldata?.it_information_date.value}}" [(ngModel)]="alldata?.it_information_date.value"\n                 ></ion-datetime>\n              </div>\n            </ion-col>\n          </ion-row>\n          <div class="newHeading">\n            <h4 no-margin>Administration</h4>\n          </div>\n          <ion-row [id]="date_of_birthscrollDivId">\n            <ion-col col-12>\n              <div class="inputDiv">\n                <ion-label>Attended On\n                  <sup *ngIf="alldata?.administration_date.is_mandatory" class="redText">*</sup>\n                  <i *ngIf="alldata?.administration_date.hint_applicable" [tooltip]="alldata?.administration_date.hint"\n                    positionV="top" arrow=\'true\'>\n                    <ion-icon ios="ios-information-circle" md="md-information-circle"></ion-icon>\n                  </i>\n                </ion-label>\n                <ion-datetime type="text" pickerFormat="DD/MMM/YYYY" [ngClass]="{\'redborder\':AdministrationDivId,\'overlayDiv\':!alldata?.administration_date.is_enable}" [disabled]="!alldata?.administration_date.is_enable"\n                  placeholder="DD/MMM/YYYY" name="{{alldata?.administration_date.value}}" [(ngModel)]="alldata?.administration_date.value"\n                  ></ion-datetime>\n              </div>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n    </div>\n\n\n    <ion-row *ngIf="form_status == \'enable\'">\n      <ion-col col-6 *ngIf="fill_status == \'0\'">\n        <div class="btndiv">\n          <button ion-button class="btn" (click)="submitform(0)">Save</button>\n        </div>\n      </ion-col>\n      <ion-col [attr.col-12]="fill_status == \'1\' ? \'\' : null" [attr.col-6]="fill_status == \'0\' ? \'\' : null">\n\n        <div *ngIf="fill_status==\'1\'" class="btndiv">\n          <button ion-button class="btn" (click)="submit(1)">Update</button>\n        </div>\n        <div *ngIf="fill_status==\'0\'" class="btndiv">\n          <button ion-button class="btn" (click)="submit(1)">Submit</button>\n        </div>\n\n      </ion-col>\n    </ion-row>\n\n  </div>\n</ion-content>'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/onboarding_forms/US/usattendancesheet/usattendancesheet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], UsattendancesheetPage);
    return UsattendancesheetPage;
}());

//# sourceMappingURL=usattendancesheet.js.map

/***/ }),

/***/ 821:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsattendancesheetPageModule", function() { return UsattendancesheetPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usattendancesheet__ = __webpack_require__(1149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_tooltips__ = __webpack_require__(870);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UsattendancesheetPageModule = /** @class */ (function () {
    function UsattendancesheetPageModule() {
    }
    UsattendancesheetPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__usattendancesheet__["a" /* UsattendancesheetPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__usattendancesheet__["a" /* UsattendancesheetPage */]), __WEBPACK_IMPORTED_MODULE_3_ionic_tooltips__["a" /* TooltipsModule */].forRoot()
            ],
        })
    ], UsattendancesheetPageModule);
    return UsattendancesheetPageModule;
}());

//# sourceMappingURL=usattendancesheet.module.js.map

/***/ }),

/***/ 864:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipBox; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);


var TooltipBox = (function () {
    function TooltipBox(elementRef, rnd) {
        var _this = this;
        this.elementRef = elementRef;
        this.rnd = rnd;
        this.fadeState = 'invisible';
        this.init = new Promise(function (resolve) {
            _this.initResolve = resolve;
        });
    }
    Object.defineProperty(TooltipBox.prototype, "arrow", {
        set: function (side) {
            this.rnd.setAttribute(this.getNativeElement(), 'class', 'has-arrow ' + 'arrow-' + side);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipBox.prototype, "posTop", {
        set: function (val) {
            this.rnd.setStyle(this.getNativeElement(), 'top', val + 'px');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipBox.prototype, "posLeft", {
        set: function (val) {
            this.rnd.setStyle(this.getNativeElement(), 'left', val + 'px');
        },
        enumerable: true,
        configurable: true
    });
    TooltipBox.prototype.getNativeElement = function () {
        return this.elementRef.nativeElement;
    };
    TooltipBox.prototype.ngAfterViewInit = function () {
        this.initResolve();
    };
    TooltipBox.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */], args: [{
                    selector: 'tooltip-box',
                    template: "\n    <div *ngIf=\"tooltipHtml; else txt\" [innerHTML]=\"tooltipHtml\"></div>\n    <ng-template #txt>{{ text }}</ng-template>\n  ",
                    animations: [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('fade', [
                            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('visible', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 1 })),
                            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('invisible', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 0 })),
                            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('visible <=> invisible', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms linear')),
                        ]),
                    ],
                    styles: [
                        "\n          :host {\n              background-color: rgba(0, 0, 0, 0.8);\n              color: white;\n              display: inline-block;\n              position: fixed;\n              padding: 15px 25px;\n              font-size: 15px;\n          }\n    ",
                        "\n          :host.has-arrow:before {\n              content: '';\n              border: 5px solid transparent;\n              position: absolute;\n              width: 0;\n              height: 0;\n          }\n    ",
                        ':host.has-arrow.arrow-top:before { border-bottom: 5px solid rgba(0,0,0,0.8); top: -10px; }',
                        ':host.has-arrow.arrow-left:before { border-right: 5px solid rgba(0,0,0,0.8); left: -10px; }',
                        ':host.has-arrow.arrow-right:before { border-left: 5px solid rgba(0,0,0,0.8); right: -10px; }',
                        ':host.has-arrow.arrow-bottom:before { border-top: 5px solid rgba(0,0,0,0.8); bottom: -10px; }',
                    ],
                    changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* ChangeDetectionStrategy */].OnPush,
                },] },
    ];
    /** @nocollapse */
    TooltipBox.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* ElementRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["W" /* Renderer2 */], },
    ]; };
    TooltipBox.propDecorators = {
        "fadeState": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* HostBinding */], args: ['@fade',] },],
        "text": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */] },],
        "tooltipHtml": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */] },],
        "arrow": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */] },],
        "posTop": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */] },],
        "posLeft": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */] },],
    };
    return TooltipBox;
}());

//# sourceMappingURL=tooltip-box.component.js.map

/***/ }),

/***/ 865:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);

var TooltipController = (function () {
    function TooltipController() {
        this.allowMultiple = true;
        this.activeTooltips = [];
    }
    TooltipController.prototype.addTooltip = function (instance) {
        if (instance.hideOthers || !this.allowMultiple && this.activeTooltips.length > 0) {
            this.hideAll();
        }
        this.activeTooltips.push(instance);
    };
    TooltipController.prototype.removeTooltip = function (instance) {
        this.activeTooltips.splice(this.activeTooltips.indexOf(instance), 1);
    };
    TooltipController.prototype.hideAll = function () {
        this.activeTooltips.forEach(function (tooltip) {
            tooltip.removeTooltip();
        });
    };
    TooltipController.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
    ];
    return TooltipController;
}());

//# sourceMappingURL=tooltip.cotroller.js.map

/***/ }),

/***/ 866:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tooltip; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tooltip_box_component__ = __webpack_require__(864);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tooltip_cotroller__ = __webpack_require__(865);




var Tooltip = (function () {
    function Tooltip(el, appRef, platform, _componentFactoryResolver, tooltipCtrl) {
        this.el = el;
        this.appRef = appRef;
        this.platform = platform;
        this._componentFactoryResolver = _componentFactoryResolver;
        this.tooltipCtrl = tooltipCtrl;
        this.mobileEvent = 'press';
        this.desktopEvent = 'hover';
        this.duration = 3000;
        this._arrow = false;
        this._navTooltip = false;
        this._canShow = true;
        this._active = false;
    }
    Object.defineProperty(Tooltip.prototype, "navTooltip", {
        get: function () {
            return this._navTooltip;
        },
        set: function (val) {
            this._navTooltip = typeof val !== 'boolean' || val !== false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tooltip.prototype, "arrow", {
        get: function () {
            return this._arrow;
        },
        set: function (val) {
            this._arrow = typeof val !== 'boolean' || val !== false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tooltip.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (val) {
            this._active = typeof val !== 'boolean' || val !== false;
            this._active ? this.canShow && this.showTooltip() : this.removeTooltip();
        },
        enumerable: true,
        configurable: true
    });
    Tooltip.prototype.ngAfterViewInit = function () {
        // Show the tooltip immediately after initiating view if set to
        if (this._active) {
            this.trigger();
        }
    };
    Tooltip.prototype.ngOnInit = function () {
        // Set default event type by platform if event is not defined
        if (!this.event) {
            this.event = this.platform.is('mobile') ? this.mobileEvent : this.desktopEvent;
        }
    };
    Object.defineProperty(Tooltip.prototype, "canShow", {
        /**
         * @return {boolean} TRUE if the tooltip can be shown
         */
        get: /**
           * @return {boolean} TRUE if the tooltip can be shown
           */
        function () {
            return this._canShow && ((typeof this.tooltip === 'string' && this.tooltip !== '') || (typeof this.tooltipHtml === 'string' && this.tooltipHtml !== ''));
        },
        /**
         * Set the canShow property
         * Ensure that tooltip is shown only if the tooltip string is not falsey
         */
        set: /**
           * Set the canShow property
           * Ensure that tooltip is shown only if the tooltip string is not falsey
           */
        function (show) {
            this._canShow = show;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Handles the click/press event and shows a tooltip.
     * If a tooltip already exists, it will just reset it's timer.
     */
    /**
       * Handles the click/press event and shows a tooltip.
       * If a tooltip already exists, it will just reset it's timer.
       */
    Tooltip.prototype.trigger = /**
       * Handles the click/press event and shows a tooltip.
       * If a tooltip already exists, it will just reset it's timer.
       */
    function () {
        if (!this.canShow) {
            return;
        }
        if (this.tooltipElement) {
            this._resetTimer();
        }
        else {
            this.showTooltip();
        }
    };
    /**
     * Creates a new tooltip component and adjusts it's properties to show properly.
     */
    /**
       * Creates a new tooltip component and adjusts it's properties to show properly.
       */
    Tooltip.prototype.showTooltip = /**
       * Creates a new tooltip component and adjusts it's properties to show properly.
       */
    function () {
        var _this = this;
        this._createTooltipComponent();
        var tooltipComponent = this.tooltipElement.instance;
        tooltipComponent.text = this.tooltip;
        tooltipComponent.tooltipHtml = this.tooltipHtml;
        tooltipComponent.init.then(function () {
            var tooltipPosition = _this._getTooltipPosition();
            tooltipComponent.posLeft = tooltipPosition.left;
            tooltipComponent.posTop = tooltipPosition.top;
            tooltipComponent.fadeState = 'visible';
            if (_this.arrow) {
                var arrowPosition = void 0;
                if (_this.positionV === 'top') {
                    arrowPosition = 'bottom';
                }
                else if (_this.positionV === 'bottom') {
                    arrowPosition = 'top';
                }
                else if (_this.positionH === 'left') {
                    arrowPosition = 'right';
                }
                else {
                    arrowPosition = 'left';
                }
                tooltipComponent.arrow = arrowPosition;
            }
            if (!_this._active) {
                _this.tooltipTimeout = setTimeout(_this.removeTooltip.bind(_this), _this.duration);
            }
        });
    };
    Tooltip.prototype.onClick = function () {
        if (this.event === 'click') {
            this.trigger();
        }
    };
    Tooltip.prototype.onPress = function () {
        if (this.event === 'press') {
            this.trigger();
        }
    };
    Tooltip.prototype.onMouseEnter = function () {
        if (this.event === 'hover') {
            this.active = true;
        }
    };
    Tooltip.prototype.onMouseLeave = function () {
        if (this.event === 'hover') {
            this.active = false;
        }
    };
    Tooltip.prototype._createTooltipComponent = function () {
        var viewport = this.appRef.components[0]._component
            ._viewport, componentFactory = this._componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_2__tooltip_box_component__["a" /* TooltipBox */]);
        this.tooltipElement = viewport.createComponent(componentFactory);
        this.tooltipCtrl.addTooltip(this);
    };
    Tooltip.prototype._getTooltipPosition = function () {
        var tooltipNativeElement = this.tooltipElement.instance.getNativeElement(), el = this.el.nativeElement, rect = el.getBoundingClientRect();
        var positionLeft, positionTop, spacing = 10;
        if (this.navTooltip) {
            this.positionV = 'bottom';
            this.arrow = false;
            spacing = 20;
        }
        if (this.positionH === 'right') {
            positionLeft = rect.right + spacing;
        }
        else if (this.positionH === 'left') {
            positionLeft = rect.left - spacing - tooltipNativeElement.offsetWidth;
        }
        else if (this.navTooltip) {
            positionLeft = rect.left + el.offsetWidth / 2;
        }
        else {
            positionLeft = rect.left;
        }
        if (this.positionV === 'top') {
            positionTop = rect.top - spacing - tooltipNativeElement.offsetHeight;
        }
        else if (this.positionV === 'bottom') {
            positionTop = rect.bottom + spacing;
        }
        else {
            positionTop =
                rect.top + el.offsetHeight / 2 - tooltipNativeElement.offsetHeight / 2;
        }
        if (+this.topOffset) {
            positionTop += +this.topOffset;
        }
        if (+this.leftOffset) {
            positionLeft += +this.leftOffset;
        }
        if (positionLeft + tooltipNativeElement.offsetWidth + spacing >
            this.platform.width()) {
            positionLeft =
                this.platform.width() - tooltipNativeElement.offsetWidth - spacing;
        }
        else if (positionLeft + tooltipNativeElement.offsetWidth - spacing < 0) {
            positionLeft = spacing;
        }
        if (positionTop + tooltipNativeElement.offsetHeight + spacing > this.platform.height()) {
            positionTop = this.platform.height() - tooltipNativeElement.offsetHeight - spacing;
        }
        else if (positionTop + tooltipNativeElement.offsetHeight - spacing < 0) {
            positionTop = spacing;
        }
        return {
            left: positionLeft,
            top: positionTop,
        };
    };
    Tooltip.prototype.removeTooltip = function () {
        var _this = this;
        if (!this.tooltipElement) {
            this.tooltipElement = undefined;
            this.tooltipTimeout = undefined;
            return;
        }
        this.tooltipElement.instance.fadeState = 'invisible';
        this.canShow = false;
        // wait for animation to finish then clear everything out
        setTimeout(function () {
            if (_this.tooltipElement &&
                typeof _this.tooltipElement.destroy === 'function') {
                _this.tooltipElement.destroy();
            }
            _this.tooltipCtrl.removeTooltip(_this);
            _this.tooltipElement = _this.tooltipTimeout = undefined;
            _this.canShow = true;
        }, 300);
    };
    Tooltip.prototype._resetTimer = function () {
        var _this = this;
        clearTimeout(this.tooltipTimeout);
        this.tooltipTimeout = setTimeout(function () {
            _this.active = false;
        }, this.duration);
    };
    Tooltip.prototype.ngOnDestroy = function () {
        // if the timer hasn't expired or active is true when the component gets destroyed, the tooltip will remain in the DOM
        // this removes it
        this.removeTooltip();
    };
    Tooltip.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */], args: [{
                    selector: '[tooltip]',
                },] },
    ];
    /** @nocollapse */
    Tooltip.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ApplicationRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ComponentFactoryResolver */], },
        { type: __WEBPACK_IMPORTED_MODULE_3__tooltip_cotroller__["a" /* TooltipController */], },
    ]; };
    Tooltip.propDecorators = {
        "tooltipHtml": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        "tooltip": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        "positionV": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        "positionH": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        "event": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        "mobileEvent": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        "desktopEvent": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        "topOffset": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        "leftOffset": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        "hideOthers": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        "navTooltip": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        "arrow": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        "duration": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        "active": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
        "onClick": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */], args: ['click',] },],
        "onPress": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */], args: ['press',] },],
        "onMouseEnter": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */], args: ['mouseenter',] },],
        "onMouseLeave": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */], args: ['mouseleave',] },],
    };
    return Tooltip;
}());

//# sourceMappingURL=tooltip.directive.js.map

/***/ }),

/***/ 870:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tooltip_box_component__ = __webpack_require__(864);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tooltip_directive__ = __webpack_require__(866);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tooltips_module__ = __webpack_require__(871);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__tooltips_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tooltip_cotroller__ = __webpack_require__(865);
/* unused harmony namespace reexport */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 871:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tooltip_cotroller__ = __webpack_require__(865);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tooltip_box_component__ = __webpack_require__(864);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tooltip_directive__ = __webpack_require__(866);





var TooltipsModule = (function () {
    function TooltipsModule() {
    }
    TooltipsModule.forRoot = function () {
        return {
            ngModule: TooltipsModule,
            providers: [__WEBPACK_IMPORTED_MODULE_2__tooltip_cotroller__["a" /* TooltipController */]]
        };
    };
    TooltipsModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */], args: [{
                    entryComponents: [__WEBPACK_IMPORTED_MODULE_3__tooltip_box_component__["a" /* TooltipBox */]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_4__tooltip_directive__["a" /* Tooltip */], __WEBPACK_IMPORTED_MODULE_3__tooltip_box_component__["a" /* TooltipBox */]],
                    imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicModule */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_4__tooltip_directive__["a" /* Tooltip */]]
                },] },
    ];
    return TooltipsModule;
}());

//# sourceMappingURL=tooltips.module.js.map

/***/ })

});
//# sourceMappingURL=30.js.map
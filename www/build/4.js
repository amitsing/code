webpackJsonp([4],{

/***/ 1135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalCompliancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__response__ = __webpack_require__(1136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__request__ = __webpack_require__(1137);
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
 * Generated class for the PersonalCompliancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PersonalCompliancePage = /** @class */ (function () {
    function PersonalCompliancePage(navCtrl, navParams, _apiService, storage, toastCtrl, loadingCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._apiService = _apiService;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.isSubmited = false;
        this.storage.get("employeeId").then(function (data) {
            _this.employeeId = data;
            console.log(" employeeId== ", _this.employeeId);
            _this.storage.get("login_token").then(function (data) {
                console.log("showOnBoard value is111==", data);
                _this.login_token = data;
                _this.storage.get("deviceId").then(function (data) {
                    _this.deviceId = data;
                    _this.getData();
                    // this.getDropDowns();
                });
            });
        });
        this.formData = this.navParams.get("data");
        // this.form_id = data.form_id;
    }
    PersonalCompliancePage.prototype.getData = function () {
        var _this = this;
        this.commonLoader();
        var apikey = {
            client_id: this._apiService.clientId,
            employee_id: this.employeeId,
            device: this._apiService.device,
            device_id: this.deviceId,
            app_version: this._apiService.appVersion,
            form_id: this.formData.form_id
        };
        this._apiService.Uk_Get_Personal_Compliance(apikey, this.login_token).subscribe(function (res) {
            _this.loading.dismiss();
            console.log(res);
            if (res.success == "1") {
                console.log(res);
                _this.data = new __WEBPACK_IMPORTED_MODULE_4__response__["a" /* PersonalCompliance */]();
                _this.data.initializePersonalCompliance(res.data.compliance);
                _this.des = res.descrition;
                _this.fill_status = res.fill_status;
            }
            else {
                _this.apiMessage(res.message);
                _this.navCtrl.pop();
            }
        }, function (err) {
            _this.loading.dismiss();
            _this.apiMessage(err);
            _this.navCtrl.pop();
        });
    };
    PersonalCompliancePage.prototype.save = function () {
        var data = new __WEBPACK_IMPORTED_MODULE_5__request__["a" /* PersonalComplianceReq */](this.data);
        console.log(data);
        this.finalSubmit(data, "save");
    };
    PersonalCompliancePage.prototype.submit = function () {
        var _this = this;
        this.isSubmited = true;
        setTimeout(function () {
            var child = document.querySelector(".error");
            if (!child) {
                // console.log(this.formData);
                var data = new __WEBPACK_IMPORTED_MODULE_5__request__["a" /* PersonalComplianceReq */](_this.data);
                console.log(data);
                _this.finalSubmit(data, "submit");
            }
            else {
                var subChild_1 = child.querySelector("input, textarea");
                console.log(subChild_1);
                if (subChild_1) {
                    subChild_1.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                        inline: "nearest"
                    });
                    setTimeout(function () {
                        subChild_1.focus();
                    }, 1000);
                }
                else {
                    child.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                        inline: "nearest"
                    });
                }
            }
        }, 100);
    };
    PersonalCompliancePage.prototype.finalSubmit = function (data, formStatus) {
        var _this = this;
        this.commonLoader();
        var apikey = {
            client_id: this._apiService.clientId,
            employee_id: this.employeeId,
            device: this._apiService.device,
            device_id: this.deviceId,
            app_version: this._apiService.appVersion,
            form_id: this.formData.form_id,
            submit_type: formStatus,
            data: data
        };
        this._apiService
            .Uk_Save_Personal_Compliance(apikey, this.login_token)
            .subscribe(function (res) {
            _this.loading.dismiss();
            if (res.success == '1') {
                _this.apiMessage(res.message);
                _this.navCtrl.pop();
            }
            else {
                _this.apiMessage(res.message);
            }
            console.log(res);
        }, function (err) {
            _this.loading.dismiss();
            _this.apiMessage(err);
        });
    };
    PersonalCompliancePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PersonalCompliancePage');
    };
    PersonalCompliancePage.prototype.getCutrrentDate = function () {
        var todayTime = new Date();
        return todayTime.getFullYear() + "-" + (todayTime.getMonth() + 1) + "-" + todayTime.getDate();
    };
    PersonalCompliancePage.prototype.getFutureDate = function () {
        var todayTime = new Date();
        return todayTime.getFullYear() + 100 + "-" + (todayTime.getMonth() + 1) + "-" + todayTime.getDate();
    };
    //Common Loader:
    PersonalCompliancePage.prototype.commonLoader = function () {
        this.loading = this.loadingCtrl.create({
            enableBackdropDismiss: true,
            spinner: "ios-small",
            content: "Loading data..."
        });
        this.loading.present();
    };
    PersonalCompliancePage.prototype.apiMessage = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 4000
        });
        toast.present();
    };
    PersonalCompliancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-personal-compliance',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/onboarding_forms/UK/personal-compliance/personal-compliance.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{ formData.form_name }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="bg">\n  <div *ngIf="data" [ngClass]="{\'newOverlay\': formData.form_status != \'enable\'}"> \n  \n    <ion-row #form>\n      <ion-col col-12>\n        <!-------------- userform ------------------>\n        <div class="formDiv">\n            <show-html [htmlData]="des"></show-html>\n        </div>\n        <!-------------- Education Record ------------------>\n        <div class="formDiv">\n            <ion-row class="cardHeader">\n                <ion-col col-12 text-left>\n                  <p class="heading">Personal Details</p>\n                </ion-col>\n            </ion-row>\n  \n          <customInput\n            label="Work Location (City)"\n            [data]="data.work_location"\n            type="text"\n            [otherStatus]="isSubmited"\n          ></customInput>\n  \n          <customInput\n            label="Passport Number"\n            [data]="data.passport"\n            type="number"\n            [otherStatus]="isSubmited"\n          ></customInput>\n  \n          <customInput\n            label="Visa Type"\n            [data]="data.visa_type"\n            type="text"\n            [otherStatus]="isSubmited"\n          ></customInput>\n  \n          <customInput\n            label="Visa Expiry Date"\n            [data]="data.visa_expiry_date"\n            type="date"\n            [maxDate] = "getFutureDate()"\n            [minDate] = "getCutrrentDate()"\n            dateFormat = "DD/MMM/YYYY"\n            [otherStatus]="isSubmited"\n          ></customInput>\n  \n          <customInput\n            label="Right to work Documentation"\n            [data]="data.right_to_work_doc"\n            type="text"\n            [otherStatus]="isSubmited"\n          ></customInput>\n  \n          <customInput\n            label="Contract Type"\n            [data]="data.contract_type"\n            type="text"\n            [otherStatus]="isSubmited"\n          ></customInput>\n  \n          <customInput\n            label="Job Title"\n            [data]="data.job_title"\n            type="text"\n            [otherStatus]="isSubmited"\n          ></customInput>\n\n        </div>\n\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="formData && formData.form_status == \'enable\'">\n      <ion-col col-6 *ngIf="fill_status == \'0\'">\n        <div class="btndiv">\n          <button [ngClass]="{\'w-80\': (fill_status == 0)}" ion-button class="btn" (click)="save()">Save</button>\n        </div>\n      </ion-col>\n      <ion-col\n        [attr.col-12]="fill_status == \'1\' ? \'\' : null"\n        [attr.col-6]="fill_status == \'0\' ? \'\' : null"\n      >\n        <div class="btndiv">\n          <button [ngClass]="{\'w-80\': (fill_status == 0)}" ion-button class="btn" (click)="submit()">{{ fill_status==\'1\' ? \'Update\' : \'Submit\'  }}</button>\n        </div>\n      </ion-col>\n    </ion-row>\n  \n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/onboarding_forms/UK/personal-compliance/personal-compliance.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_service_api_service__["a" /* ApiServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], PersonalCompliancePage);
    return PersonalCompliancePage;
}());

//# sourceMappingURL=personal-compliance.js.map

/***/ }),

/***/ 1136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalCompliance; });
/* unused harmony export metaData */
var PersonalCompliance = /** @class */ (function () {
    function PersonalCompliance() {
        this.auto_id = "";
        this.contract_type = new metaData();
        this.job_title = new metaData();
        this.passport = new metaData();
        this.right_to_work_doc = new metaData();
        this.visa_expiry_date = new metaData();
        this.visa_type = new metaData();
        this.work_location = new metaData();
    }
    PersonalCompliance.prototype.initializePersonalCompliance = function (data) {
        this.auto_id = data.auto_id;
        this.contract_type.InitializeMetaData(data.contract_type);
        this.job_title.InitializeMetaData(data.job_title);
        this.passport.InitializeMetaData(data.passport);
        this.right_to_work_doc.InitializeMetaData(data.right_to_work_doc);
        this.visa_expiry_date.InitializeMetaData(data.visa_expiry_date);
        this.visa_type.InitializeMetaData(data.visa_type);
        this.work_location.InitializeMetaData(data.work_location);
    };
    return PersonalCompliance;
}());

var metaData = /** @class */ (function () {
    function metaData() {
        this.is_enable = true;
        this.hint_applicable = false;
        this.hint = "";
        this.value = "";
        this.is_mandatory = true;
    }
    metaData.prototype.valueStatus = function () {
        // console.log('data');
        if (!this.is_enable || !this.is_mandatory) {
            return true;
        }
        else {
            if (this.value) {
                if (this.value.trim().length > 0) {
                    return true;
                }
                else
                    return false;
            }
            else
                return false;
        }
    };
    metaData.prototype.InitializeMetaData = function (data) {
        if (data) {
            this.is_enable = data.is_enable;
            this.hint_applicable = data.hint_applicable;
            this.hint = data.hint;
            this.value = data.value;
            this.is_mandatory = data.is_mandatory;
        }
        else
            console.log('field is missing');
    };
    return metaData;
}());

//# sourceMappingURL=response.js.map

/***/ }),

/***/ 1137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalComplianceReq; });
var PersonalComplianceReq = /** @class */ (function () {
    function PersonalComplianceReq(data) {
        this.auto_id = data.auto_id;
        this.contract_type = data.contract_type.value;
        this.job_title = data.job_title.value;
        this.passport = data.passport.value;
        this.right_to_work_doc = data.right_to_work_doc.value;
        this.visa_expiry_date = data.visa_expiry_date.value;
        this.visa_type = data.visa_type.value;
        this.work_location = data.work_location.value;
    }
    return PersonalComplianceReq;
}());

//# sourceMappingURL=request.js.map

/***/ }),

/***/ 813:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalCompliancePageModule", function() { return PersonalCompliancePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__personal_compliance__ = __webpack_require__(1135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(873);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PersonalCompliancePageModule = /** @class */ (function () {
    function PersonalCompliancePageModule() {
    }
    PersonalCompliancePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__personal_compliance__["a" /* PersonalCompliancePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__personal_compliance__["a" /* PersonalCompliancePage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], PersonalCompliancePageModule);
    return PersonalCompliancePageModule;
}());

//# sourceMappingURL=personal-compliance.module.js.map

/***/ }),

/***/ 862:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 Highcharts JS v7.2.0 (2019-09-03)

 (c) 2009-2018 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(P,N){"object"===typeof module&&module.exports?(N["default"]=N,module.exports=P.document?N(P):N): true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return N(P)}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):(P.Highcharts&&P.Highcharts.error(16,!0),P.Highcharts=N(P))})("undefined"!==typeof window?window:this,function(P){function N(c,n,A,D){c.hasOwnProperty(n)||(c[n]=D.apply(null,A))}var H={};N(H,"parts/Globals.js",[],function(){var c="undefined"!==typeof P?P:"undefined"!==typeof window?window:{},n=c.document,
A=c.navigator&&c.navigator.userAgent||"",D=n&&n.createElementNS&&!!n.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,F=/(edge|msie|trident)/i.test(A)&&!c.opera,z=-1!==A.indexOf("Firefox"),u=-1!==A.indexOf("Chrome"),L=z&&4>parseInt(A.split("Firefox/")[1],10);return{product:"Highcharts",version:"7.2.0",deg2rad:2*Math.PI/360,doc:n,hasBidiBug:L,hasTouch:!!c.TouchEvent,isMS:F,isWebKit:-1!==A.indexOf("AppleWebKit"),isFirefox:z,isChrome:u,isSafari:!u&&-1!==A.indexOf("Safari"),isTouchDevice:/(Mobile|Android|Windows Phone)/.test(A),
SVG_NS:"http://www.w3.org/2000/svg",chartCount:0,seriesTypes:{},symbolSizes:{},svg:D,win:c,marginNames:["plotTop","marginRight","marginBottom","plotLeft"],noop:function(){},charts:[],dateFormats:{}}});N(H,"parts/Utilities.js",[H["parts/Globals.js"]],function(c){function n(b,a){return parseInt(b,a||10)}function A(b){return"string"===typeof b}function D(b){b=Object.prototype.toString.call(b);return"[object Array]"===b||"[object Array Iterator]"===b}function F(b,a){return!!b&&"object"===typeof b&&(!a||
!D(b))}function z(b){return F(b)&&"number"===typeof b.nodeType}function u(b){var a=b&&b.constructor;return!(!F(b,!0)||z(b)||!a||!a.name||"Object"===a.name)}function L(b){return"number"===typeof b&&!isNaN(b)&&Infinity>b&&-Infinity<b}function y(b){return"undefined"!==typeof b&&null!==b}function C(b,a,d){var f;A(a)?y(d)?b.setAttribute(a,d):b&&b.getAttribute&&((f=b.getAttribute(a))||"class"!==a||(f=b.getAttribute(a+"Name"))):x(a,function(a,d){b.setAttribute(d,a)});return f}function x(b,a,d){for(var f in b)Object.hasOwnProperty.call(b,
f)&&a.call(d||b[f],b[f],f,b)}c.timers=[];var m=c.charts,p=c.doc,g=c.win;c.error=function(b,a,d){var f=L(b)?"Highcharts error #"+b+": www.highcharts.com/errors/"+b:b,e=function(){if(a)throw Error(f);g.console&&console.log(f)};d?c.fireEvent(d,"displayError",{code:b,message:f},e):e()};c.Fx=function(b,a,d){this.options=a;this.elem=b;this.prop=d};c.Fx.prototype={dSetter:function(){var b=this.paths[0],a=this.paths[1],d=[],f=this.now,e=b.length;if(1===f)d=this.toD;else if(e===a.length&&1>f)for(;e--;){var c=
parseFloat(b[e]);d[e]=isNaN(c)?a[e]:f*parseFloat(""+(a[e]-c))+c}else d=a;this.elem.attr("d",d,null,!0)},update:function(){var b=this.elem,a=this.prop,d=this.now,f=this.options.step;if(this[a+"Setter"])this[a+"Setter"]();else b.attr?b.element&&b.attr(a,d,null,!0):b.style[a]=d+this.unit;f&&f.call(b,d,this)},run:function(b,a,d){var f=this,e=f.options,h=function(a){return h.stopped?!1:f.step(a)},r=g.requestAnimationFrame||function(a){setTimeout(a,13)},E=function(){for(var a=0;a<c.timers.length;a++)c.timers[a]()||
c.timers.splice(a--,1);c.timers.length&&r(E)};b!==a||this.elem["forceAnimate:"+this.prop]?(this.startTime=+new Date,this.start=b,this.end=a,this.unit=d,this.now=this.start,this.pos=0,h.elem=this.elem,h.prop=this.prop,h()&&1===c.timers.push(h)&&r(E)):(delete e.curAnim[this.prop],e.complete&&0===Object.keys(e.curAnim).length&&e.complete.call(this.elem))},step:function(b){var a=+new Date,d=this.options,f=this.elem,e=d.complete,c=d.duration,r=d.curAnim;if(f.attr&&!f.element)b=!1;else if(b||a>=c+this.startTime){this.now=
this.end;this.pos=1;this.update();var E=r[this.prop]=!0;x(r,function(a){!0!==a&&(E=!1)});E&&e&&e.call(f);b=!1}else this.pos=d.easing((a-this.startTime)/c),this.now=this.start+(this.end-this.start)*this.pos,this.update(),b=!0;return b},initPath:function(b,a,d){function f(a){for(t=a.length;t--;){var b="M"===a[t]||"L"===a[t];var d=/[a-zA-Z]/.test(a[t+3]);b&&d&&a.splice(t+1,0,a[t+1],a[t+2],a[t+1],a[t+2])}}function e(a,b){for(;a.length<J;){a[0]=b[J-a.length];var d=a.slice(0,v);[].splice.apply(a,[0,0].concat(d));
B&&(d=a.slice(a.length-v),[].splice.apply(a,[a.length,0].concat(d)),t--)}a[0]="M"}function c(a,b){for(var d=(J-a.length)/v;0<d&&d--;)k=a.slice().splice(a.length/I-v,v*I),k[0]=b[J-v-d*v],q&&(k[v-6]=k[v-2],k[v-5]=k[v-1]),[].splice.apply(a,[a.length/I,0].concat(k)),B&&d--}a=a||"";var r=b.startX,E=b.endX,q=-1<a.indexOf("C"),v=q?7:3,k,t;a=a.split(" ");d=d.slice();var B=b.isArea,I=B?2:1;q&&(f(a),f(d));if(r&&E){for(t=0;t<r.length;t++)if(r[t]===E[0]){var w=t;break}else if(r[0]===E[E.length-r.length+t]){w=
t;var l=!0;break}else if(r[r.length-1]===E[E.length-r.length+t]){w=r.length-t;break}"undefined"===typeof w&&(a=[])}if(a.length&&L(w)){var J=d.length+w*I*v;l?(e(a,d),c(d,a)):(e(d,a),c(a,d))}return[a,d]},fillSetter:function(){c.Fx.prototype.strokeSetter.apply(this,arguments)},strokeSetter:function(){this.elem.attr(this.prop,c.color(this.start).tweenTo(c.color(this.end),this.pos),null,!0)}};c.merge=function(){var b,a=arguments,d={},f=function(a,b){"object"!==typeof a&&(a={});x(b,function(d,e){!F(d,!0)||
u(d)||z(d)?a[e]=b[e]:a[e]=f(a[e]||{},d)});return a};!0===a[0]&&(d=a[1],a=Array.prototype.slice.call(a,2));var e=a.length;for(b=0;b<e;b++)d=f(d,a[b]);return d};c.syncTimeout=function(b,a,d){if(a)return setTimeout(b,a,d);b.call(0,d)};c.clearTimeout=function(b){y(b)&&clearTimeout(b)};c.extend=function(b,a){var d;b||(b={});for(d in a)b[d]=a[d];return b};c.pick=function(){var b=arguments,a,d=b.length;for(a=0;a<d;a++){var f=b[a];if("undefined"!==typeof f&&null!==f)return f}};c.css=function(b,a){c.isMS&&
!c.svg&&a&&"undefined"!==typeof a.opacity&&(a.filter="alpha(opacity="+100*a.opacity+")");c.extend(b.style,a)};c.createElement=function(b,a,d,f,e){b=p.createElement(b);var h=c.css;a&&c.extend(b,a);e&&h(b,{padding:"0",border:"none",margin:"0"});d&&h(b,d);f&&f.appendChild(b);return b};c.extendClass=function(b,a){var d=function(){};d.prototype=new b;c.extend(d.prototype,a);return d};c.pad=function(b,a,d){return Array((a||2)+1-String(b).replace("-","").length).join(d||"0")+b};c.relativeLength=function(b,
a,d){return/%$/.test(b)?a*parseFloat(b)/100+(d||0):parseFloat(b)};c.wrap=function(b,a,d){var f=b[a];b[a]=function(){var a=Array.prototype.slice.call(arguments),b=arguments,c=this;c.proceed=function(){f.apply(c,arguments.length?arguments:b)};a.unshift(f);a=d.apply(this,a);c.proceed=null;return a}};c.datePropsToTimestamps=function(b){x(b,function(a,d){F(a)&&"function"===typeof a.getTime?b[d]=a.getTime():(F(a)||D(a))&&c.datePropsToTimestamps(a)})};c.formatSingle=function(b,a,d){var f=/\.([0-9])/,e=c.defaultOptions.lang;
/f$/.test(b)?(d=(d=b.match(f))?d[1]:-1,null!==a&&(a=c.numberFormat(a,d,e.decimalPoint,-1<b.indexOf(",")?e.thousandsSep:""))):a=(d||c.time).dateFormat(b,a);return a};c.format=function(b,a,d){for(var f="{",e=!1,h,r,E,q,v=[],k;b;){f=b.indexOf(f);if(-1===f)break;h=b.slice(0,f);if(e){h=h.split(":");r=h.shift().split(".");q=r.length;k=a;for(E=0;E<q;E++)k&&(k=k[r[E]]);h.length&&(k=c.formatSingle(h.join(":"),k,d));v.push(k)}else v.push(h);b=b.slice(f+1);f=(e=!e)?"}":"{"}v.push(b);return v.join("")};c.getMagnitude=
function(b){return Math.pow(10,Math.floor(Math.log(b)/Math.LN10))};c.normalizeTickInterval=function(b,a,d,f,e){var h=b;d=c.pick(d,1);var r=b/d;a||(a=e?[1,1.2,1.5,2,2.5,3,4,5,6,8,10]:[1,2,2.5,5,10],!1===f&&(1===d?a=a.filter(function(a){return 0===a%1}):.1>=d&&(a=[1/d])));for(f=0;f<a.length&&!(h=a[f],e&&h*d>=b||!e&&r<=(a[f]+(a[f+1]||a[f]))/2);f++);return h=c.correctFloat(h*d,-Math.round(Math.log(.001)/Math.LN10))};c.stableSort=function(b,a){var d=b.length,f,e;for(e=0;e<d;e++)b[e].safeI=e;b.sort(function(b,
d){f=a(b,d);return 0===f?b.safeI-d.safeI:f});for(e=0;e<d;e++)delete b[e].safeI};c.arrayMin=function(b){for(var a=b.length,d=b[0];a--;)b[a]<d&&(d=b[a]);return d};c.arrayMax=function(b){for(var a=b.length,d=b[0];a--;)b[a]>d&&(d=b[a]);return d};c.destroyObjectProperties=function(b,a){x(b,function(d,f){d&&d!==a&&d.destroy&&d.destroy();delete b[f]})};c.discardElement=function(b){var a=c.garbageBin;a||(a=c.createElement("div"));b&&a.appendChild(b);a.innerHTML=""};c.correctFloat=function(b,a){return parseFloat(b.toPrecision(a||
14))};c.setAnimation=function(b,a){a.renderer.globalAnimation=c.pick(b,a.options.chart.animation,!0)};c.animObject=function(b){return F(b)?c.merge(b):{duration:b?500:0}};c.timeUnits={millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5,month:24192E5,year:314496E5};c.numberFormat=function(b,a,d,f){b=+b||0;a=+a;var e=c.defaultOptions.lang,h=(b.toString().split(".")[1]||"").split("e")[0].length,r=b.toString().split("e");if(-1===a)a=Math.min(h,20);else if(!L(a))a=2;else if(a&&r[1]&&0>r[1]){var m=
a+ +r[1];0<=m?(r[0]=(+r[0]).toExponential(m).split("e")[0],a=m):(r[0]=r[0].split(".")[0]||0,b=20>a?(r[0]*Math.pow(10,r[1])).toFixed(a):0,r[1]=0)}var q=(Math.abs(r[1]?r[0]:b)+Math.pow(10,-Math.max(a,h)-1)).toFixed(a);h=String(n(q));m=3<h.length?h.length%3:0;d=c.pick(d,e.decimalPoint);f=c.pick(f,e.thousandsSep);b=(0>b?"-":"")+(m?h.substr(0,m)+f:"");b+=h.substr(m).replace(/(\d{3})(?=\d)/g,"$1"+f);a&&(b+=d+q.slice(-a));r[1]&&0!==+b&&(b+="e"+r[1]);return b};Math.easeInOutSine=function(b){return-.5*(Math.cos(Math.PI*
b)-1)};c.getStyle=function(b,a,d){if("width"===a)return a=Math.min(b.offsetWidth,b.scrollWidth),d=b.getBoundingClientRect&&b.getBoundingClientRect().width,d<a&&d>=a-1&&(a=Math.floor(d)),Math.max(0,a-c.getStyle(b,"padding-left")-c.getStyle(b,"padding-right"));if("height"===a)return Math.max(0,Math.min(b.offsetHeight,b.scrollHeight)-c.getStyle(b,"padding-top")-c.getStyle(b,"padding-bottom"));g.getComputedStyle||c.error(27,!0);if(b=g.getComputedStyle(b,void 0))b=b.getPropertyValue(a),c.pick(d,"opacity"!==
a)&&(b=n(b));return b};c.inArray=function(b,a,d){return a.indexOf(b,d)};c.find=Array.prototype.find?function(b,a){return b.find(a)}:function(b,a){var d,f=b.length;for(d=0;d<f;d++)if(a(b[d],d))return b[d]};c.keys=Object.keys;c.offset=function(b){var a=p.documentElement;b=b.parentElement||b.parentNode?b.getBoundingClientRect():{top:0,left:0};return{top:b.top+(g.pageYOffset||a.scrollTop)-(a.clientTop||0),left:b.left+(g.pageXOffset||a.scrollLeft)-(a.clientLeft||0)}};c.stop=function(b,a){for(var d=c.timers.length;d--;)c.timers[d].elem!==
b||a&&a!==c.timers[d].prop||(c.timers[d].stopped=!0)};x({map:"map",each:"forEach",grep:"filter",reduce:"reduce",some:"some"},function(b,a){c[a]=function(a){return Array.prototype[b].apply(a,[].slice.call(arguments,1))}});c.addEvent=function(b,a,d,f){void 0===f&&(f={});var e=b.addEventListener||c.addEventListenerPolyfill;var h="function"===typeof b&&b.prototype?b.prototype.protoEvents=b.prototype.protoEvents||{}:b.hcEvents=b.hcEvents||{};c.Point&&b instanceof c.Point&&b.series&&b.series.chart&&(b.series.chart.runTrackerClick=
!0);e&&e.call(b,a,d,!1);h[a]||(h[a]=[]);h[a].push({fn:d,order:"number"===typeof f.order?f.order:Infinity});h[a].sort(function(a,b){return a.order-b.order});return function(){c.removeEvent(b,a,d)}};c.removeEvent=function(b,a,d){function f(a,d){var e=b.removeEventListener||c.removeEventListenerPolyfill;e&&e.call(b,a,d,!1)}function e(d){var e;if(b.nodeName){if(a){var c={};c[a]=!0}else c=d;x(c,function(a,b){if(d[b])for(e=d[b].length;e--;)f(b,d[b][e].fn)})}}var h;["protoEvents","hcEvents"].forEach(function(c){var r=
b[c];r&&(a?(h=r[a]||[],d?(r[a]=h.filter(function(a){return d!==a.fn}),f(a,d)):(e(r),r[a]=[])):(e(r),b[c]={}))})};c.fireEvent=function(b,a,d,f){var e;d=d||{};if(p.createEvent&&(b.dispatchEvent||b.fireEvent)){var h=p.createEvent("Events");h.initEvent(a,!0,!0);c.extend(h,d);b.dispatchEvent?b.dispatchEvent(h):b.fireEvent(a,h)}else d.target||c.extend(d,{preventDefault:function(){d.defaultPrevented=!0},target:b,type:a}),function(a,f){void 0===a&&(a=[]);void 0===f&&(f=[]);var c=0,h=0,k=a.length+f.length;
for(e=0;e<k;e++)!1===(a[c]?f[h]?a[c].order<=f[h].order?a[c++]:f[h++]:a[c++]:f[h++]).fn.call(b,d)&&d.preventDefault()}(b.protoEvents&&b.protoEvents[a],b.hcEvents&&b.hcEvents[a]);f&&!d.defaultPrevented&&f.call(b,d)};c.animate=function(b,a,d){var f,e="",h,r;if(!F(d)){var m=arguments;d={duration:m[2],easing:m[3],complete:m[4]}}L(d.duration)||(d.duration=400);d.easing="function"===typeof d.easing?d.easing:Math[d.easing]||Math.easeInOutSine;d.curAnim=c.merge(a);x(a,function(q,v){c.stop(b,v);r=new c.Fx(b,
d,v);h=null;"d"===v?(r.paths=r.initPath(b,b.d,a.d),r.toD=a.d,f=0,h=1):b.attr?f=b.attr(v):(f=parseFloat(c.getStyle(b,v))||0,"opacity"!==v&&(e="px"));h||(h=q);h&&h.match&&h.match("px")&&(h=h.replace(/px/g,""));r.run(f,h,e)})};c.seriesType=function(b,a,d,f,e){var h=c.getOptions(),r=c.seriesTypes;h.plotOptions[b]=c.merge(h.plotOptions[a],d);r[b]=c.extendClass(r[a]||function(){},f);r[b].prototype.type=b;e&&(r[b].prototype.pointClass=c.extendClass(c.Point,e));return r[b]};c.uniqueKey=function(){var b=Math.random().toString(36).substring(2,
9),a=0;return function(){return"highcharts-"+b+"-"+a++}}();c.isFunction=function(b){return"function"===typeof b};g.jQuery&&(g.jQuery.fn.highcharts=function(){var b=[].slice.call(arguments);if(this[0])return b[0]?(new (c[A(b[0])?b.shift():"Chart"])(this[0],b[0],b[1]),this):m[C(this[0],"data-highcharts-chart")]});return{attr:C,defined:y,erase:function(b,a){for(var d=b.length;d--;)if(b[d]===a){b.splice(d,1);break}},isArray:D,isClass:u,isDOMElement:z,isNumber:L,isObject:F,isString:A,objectEach:x,pInt:n,
splat:function(b){return D(b)?b:[b]}}});N(H,"parts/Color.js",[H["parts/Globals.js"],H["parts/Utilities.js"]],function(c,n){var A=n.isNumber,D=n.pInt,F=c.merge;c.Color=function(z){if(!(this instanceof c.Color))return new c.Color(z);this.init(z)};c.Color.prototype={parsers:[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,parse:function(c){return[D(c[1]),D(c[2]),D(c[3]),parseFloat(c[4],10)]}},{regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
parse:function(c){return[D(c[1]),D(c[2]),D(c[3]),1]}}],names:{white:"#ffffff",black:"#000000"},init:function(z){var u,n;if((this.input=z=this.names[z&&z.toLowerCase?z.toLowerCase():""]||z)&&z.stops)this.stops=z.stops.map(function(x){return new c.Color(x[1])});else{if(z&&z.charAt&&"#"===z.charAt()){var y=z.length;z=parseInt(z.substr(1),16);7===y?u=[(z&16711680)>>16,(z&65280)>>8,z&255,1]:4===y&&(u=[(z&3840)>>4|(z&3840)>>8,(z&240)>>4|z&240,(z&15)<<4|z&15,1])}if(!u)for(n=this.parsers.length;n--&&!u;){var C=
this.parsers[n];(y=C.regex.exec(z))&&(u=C.parse(y))}}this.rgba=u||[]},get:function(c){var u=this.input,z=this.rgba;if(this.stops){var y=F(u);y.stops=[].concat(y.stops);this.stops.forEach(function(u,x){y.stops[x]=[y.stops[x][0],u.get(c)]})}else y=z&&A(z[0])?"rgb"===c||!c&&1===z[3]?"rgb("+z[0]+","+z[1]+","+z[2]+")":"a"===c?z[3]:"rgba("+z.join(",")+")":u;return y},brighten:function(c){var u,z=this.rgba;if(this.stops)this.stops.forEach(function(u){u.brighten(c)});else if(A(c)&&0!==c)for(u=0;3>u;u++)z[u]+=
D(255*c),0>z[u]&&(z[u]=0),255<z[u]&&(z[u]=255);return this},setOpacity:function(c){this.rgba[3]=c;return this},tweenTo:function(c,u){var z=this.rgba,y=c.rgba;y.length&&z&&z.length?(c=1!==y[3]||1!==z[3],u=(c?"rgba(":"rgb(")+Math.round(y[0]+(z[0]-y[0])*(1-u))+","+Math.round(y[1]+(z[1]-y[1])*(1-u))+","+Math.round(y[2]+(z[2]-y[2])*(1-u))+(c?","+(y[3]+(z[3]-y[3])*(1-u)):"")+")"):u=c.input||"none";return u}};c.color=function(z){return new c.Color(z)}});N(H,"parts/SvgRenderer.js",[H["parts/Globals.js"],
H["parts/Utilities.js"]],function(c,n){var A=n.attr,D=n.defined,F=n.erase,z=n.isArray,u=n.isNumber,L=n.isObject,y=n.isString,C=n.objectEach,x=n.pInt,m=n.splat,p=c.addEvent,g=c.animate,b=c.charts,a=c.color,d=c.css,f=c.createElement,e=c.deg2rad,h=c.destroyObjectProperties,r=c.doc,E=c.extend,q=c.hasTouch,v=c.isFirefox,k=c.isMS,t=c.isWebKit,B=c.merge,I=c.noop,w=c.pick,l=c.removeEvent,J=c.stop,K=c.svg,T=c.SVG_NS,R=c.symbolSizes,S=c.win;var M=c.SVGElement=function(){return this};E(M.prototype,{opacity:1,
SVG_NS:T,textProps:"direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline cursor".split(" "),init:function(a,b){this.element="span"===b?f(b):r.createElementNS(this.SVG_NS,b);this.renderer=a;c.fireEvent(this,"afterInit")},animate:function(a,b,d){var G=c.animObject(w(b,this.renderer.globalAnimation,!0));w(r.hidden,r.msHidden,r.webkitHidden,!1)&&(G.duration=0);0!==G.duration?(d&&(G.complete=d),g(this,a,G)):(this.attr(a,void 0,d),C(a,
function(a,b){G.step&&G.step.call(this,a,{prop:b,pos:1})},this));return this},complexColor:function(a,b,d){var G=this.renderer,l,w,e,f,k,O,t,h,J,K,r,Q=[],M;c.fireEvent(this.renderer,"complexColor",{args:arguments},function(){a.radialGradient?w="radialGradient":a.linearGradient&&(w="linearGradient");w&&(e=a[w],k=G.gradients,t=a.stops,K=d.radialReference,z(e)&&(a[w]=e={x1:e[0],y1:e[1],x2:e[2],y2:e[3],gradientUnits:"userSpaceOnUse"}),"radialGradient"===w&&K&&!D(e.gradientUnits)&&(f=e,e=B(e,G.getRadialAttr(K,
f),{gradientUnits:"userSpaceOnUse"})),C(e,function(a,G){"id"!==G&&Q.push(G,a)}),C(t,function(a){Q.push(a)}),Q=Q.join(","),k[Q]?r=k[Q].attr("id"):(e.id=r=c.uniqueKey(),k[Q]=O=G.createElement(w).attr(e).add(G.defs),O.radAttr=f,O.stops=[],t.forEach(function(a){0===a[1].indexOf("rgba")?(l=c.color(a[1]),h=l.get("rgb"),J=l.get("a")):(h=a[1],J=1);a=G.createElement("stop").attr({offset:a[0],"stop-color":h,"stop-opacity":J}).add(O);O.stops.push(a)})),M="url("+G.url+"#"+r+")",d.setAttribute(b,M),d.gradient=
Q,a.toString=function(){return M})})},applyTextOutline:function(a){var b=this.element,G;-1!==a.indexOf("contrast")&&(a=a.replace(/contrast/g,this.renderer.getContrast(b.style.fill)));a=a.split(" ");var d=a[a.length-1];if((G=a[0])&&"none"!==G&&c.svg){this.fakeTS=!0;a=[].slice.call(b.getElementsByTagName("tspan"));this.ySetter=this.xSetter;G=G.replace(/(^[\d\.]+)(.*?)$/g,function(a,b,G){return 2*b+G});this.removeTextOutline(a);var w=b.firstChild;a.forEach(function(a,l){0===l&&(a.setAttribute("x",b.getAttribute("x")),
l=b.getAttribute("y"),a.setAttribute("y",l||0),null===l&&b.setAttribute("y",0));a=a.cloneNode(1);A(a,{"class":"highcharts-text-outline",fill:d,stroke:d,"stroke-width":G,"stroke-linejoin":"round"});b.insertBefore(a,w)})}},removeTextOutline:function(a){for(var b=a.length,G;b--;)G=a[b],"highcharts-text-outline"===G.getAttribute("class")&&F(a,this.element.removeChild(G))},symbolCustomAttribs:"x y width height r start end innerR anchorX anchorY rounded".split(" "),attr:function(a,b,d,l){var G=this.element,
w,e=this,f,k,O=this.symbolCustomAttribs;if("string"===typeof a&&void 0!==b){var t=a;a={};a[t]=b}"string"===typeof a?e=(this[a+"Getter"]||this._defaultGetter).call(this,a,G):(C(a,function(b,d){f=!1;l||J(this,d);this.symbolName&&-1!==c.inArray(d,O)&&(w||(this.symbolAttr(a),w=!0),f=!0);!this.rotation||"x"!==d&&"y"!==d||(this.doTransform=!0);f||(k=this[d+"Setter"]||this._defaultSetter,k.call(this,b,d,G),!this.styledMode&&this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(d)&&this.updateShadows(d,
b,k))},this),this.afterSetters());d&&d.call(this);return e},afterSetters:function(){this.doTransform&&(this.updateTransform(),this.doTransform=!1)},updateShadows:function(a,b,d){for(var G=this.shadows,l=G.length;l--;)d.call(G[l],"height"===a?Math.max(b-(G[l].cutHeight||0),0):"d"===a?this.d:b,a,G[l])},addClass:function(a,b){var d=this.attr("class")||"";b||(a=(a||"").split(/ /g).reduce(function(a,b){-1===d.indexOf(b)&&a.push(b);return a},d?[d]:[]).join(" "));a!==d&&this.attr("class",a);return this},
hasClass:function(a){return-1!==(this.attr("class")||"").split(" ").indexOf(a)},removeClass:function(a){return this.attr("class",(this.attr("class")||"").replace(a,""))},symbolAttr:function(a){var b=this;"x y r start end width height innerR anchorX anchorY clockwise".split(" ").forEach(function(d){b[d]=w(a[d],b[d])});b.attr({d:b.renderer.symbols[b.symbolName](b.x,b.y,b.width,b.height,b)})},clip:function(a){return this.attr("clip-path",a?"url("+this.renderer.url+"#"+a.id+")":"none")},crisp:function(a,
b){b=b||a.strokeWidth||0;var d=Math.round(b)%2/2;a.x=Math.floor(a.x||this.x||0)+d;a.y=Math.floor(a.y||this.y||0)+d;a.width=Math.floor((a.width||this.width||0)-2*d);a.height=Math.floor((a.height||this.height||0)-2*d);D(a.strokeWidth)&&(a.strokeWidth=b);return a},css:function(a){var b=this.styles,G={},l=this.element,w="",e=!b,f=["textOutline","textOverflow","width"];a&&a.color&&(a.fill=a.color);b&&C(a,function(a,d){a!==b[d]&&(G[d]=a,e=!0)});if(e){b&&(a=E(b,G));if(a)if(null===a.width||"auto"===a.width)delete this.textWidth;
else if("text"===l.nodeName.toLowerCase()&&a.width)var k=this.textWidth=x(a.width);this.styles=a;k&&!K&&this.renderer.forExport&&delete a.width;if(l.namespaceURI===this.SVG_NS){var c=function(a,b){return"-"+b.toLowerCase()};C(a,function(a,b){-1===f.indexOf(b)&&(w+=b.replace(/([A-Z])/g,c)+":"+a+";")});w&&A(l,"style",w)}else d(l,a);this.added&&("text"===this.element.nodeName&&this.renderer.buildText(this),a&&a.textOutline&&this.applyTextOutline(a.textOutline))}return this},getStyle:function(a){return S.getComputedStyle(this.element||
this,"").getPropertyValue(a)},strokeWidth:function(){if(!this.renderer.styledMode)return this["stroke-width"]||0;var a=this.getStyle("stroke-width");if(a.indexOf("px")===a.length-2)a=x(a);else{var b=r.createElementNS(T,"rect");A(b,{width:a,"stroke-width":0});this.element.parentNode.appendChild(b);a=b.getBBox().width;b.parentNode.removeChild(b)}return a},on:function(a,b){var d=this,l=d.element;q&&"click"===a?(l.ontouchstart=function(a){d.touchEventFired=Date.now();a.preventDefault();b.call(l,a)},l.onclick=
function(a){(-1===S.navigator.userAgent.indexOf("Android")||1100<Date.now()-(d.touchEventFired||0))&&b.call(l,a)}):l["on"+a]=b;return this},setRadialReference:function(a){var b=this.renderer.gradients[this.element.gradient];this.element.radialReference=a;b&&b.radAttr&&b.animate(this.renderer.getRadialAttr(a,b.radAttr));return this},translate:function(a,b){return this.attr({translateX:a,translateY:b})},invert:function(a){this.inverted=a;this.updateTransform();return this},updateTransform:function(){var a=
this.translateX||0,b=this.translateY||0,d=this.scaleX,l=this.scaleY,e=this.inverted,f=this.rotation,k=this.matrix,c=this.element;e&&(a+=this.width,b+=this.height);a=["translate("+a+","+b+")"];D(k)&&a.push("matrix("+k.join(",")+")");e?a.push("rotate(90) scale(-1,1)"):f&&a.push("rotate("+f+" "+w(this.rotationOriginX,c.getAttribute("x"),0)+" "+w(this.rotationOriginY,c.getAttribute("y")||0)+")");(D(d)||D(l))&&a.push("scale("+w(d,1)+" "+w(l,1)+")");a.length&&c.setAttribute("transform",a.join(" "))},toFront:function(){var a=
this.element;a.parentNode.appendChild(a);return this},align:function(a,b,d){var l,G={};var e=this.renderer;var f=e.alignedObjects;var k,c;if(a){if(this.alignOptions=a,this.alignByTranslate=b,!d||y(d))this.alignTo=l=d||"renderer",F(f,this),f.push(this),d=null}else a=this.alignOptions,b=this.alignByTranslate,l=this.alignTo;d=w(d,e[l],e);l=a.align;e=a.verticalAlign;f=(d.x||0)+(a.x||0);var t=(d.y||0)+(a.y||0);"right"===l?k=1:"center"===l&&(k=2);k&&(f+=(d.width-(a.width||0))/k);G[b?"translateX":"x"]=Math.round(f);
"bottom"===e?c=1:"middle"===e&&(c=2);c&&(t+=(d.height-(a.height||0))/c);G[b?"translateY":"y"]=Math.round(t);this[this.placed?"animate":"attr"](G);this.placed=!0;this.alignAttr=G;return this},getBBox:function(a,b){var d,l=this.renderer,G=this.element,f=this.styles,k=this.textStr,c,t=l.cache,h=l.cacheKeys,O=G.namespaceURI===this.SVG_NS;b=w(b,this.rotation);var B=b*e;var J=l.styledMode?G&&M.prototype.getStyle.call(G,"font-size"):f&&f.fontSize;if(D(k)){var K=k.toString();-1===K.indexOf("<")&&(K=K.replace(/[0-9]/g,
"0"));K+=["",b||0,J,this.textWidth,f&&f.textOverflow].join()}K&&!a&&(d=t[K]);if(!d){if(O||l.forExport){try{(c=this.fakeTS&&function(a){[].forEach.call(G.querySelectorAll(".highcharts-text-outline"),function(b){b.style.display=a})})&&c("none"),d=G.getBBox?E({},G.getBBox()):{width:G.offsetWidth,height:G.offsetHeight},c&&c("")}catch(Z){""}if(!d||0>d.width)d={width:0,height:0}}else d=this.htmlGetBBox();l.isSVG&&(a=d.width,l=d.height,O&&(d.height=l={"11px,17":14,"13px,20":16}[f&&f.fontSize+","+Math.round(l)]||
l),b&&(d.width=Math.abs(l*Math.sin(B))+Math.abs(a*Math.cos(B)),d.height=Math.abs(l*Math.cos(B))+Math.abs(a*Math.sin(B))));if(K&&0<d.height){for(;250<h.length;)delete t[h.shift()];t[K]||h.push(K);t[K]=d}}return d},show:function(a){return this.attr({visibility:a?"inherit":"visible"})},hide:function(a){a?this.attr({y:-9999}):this.attr({visibility:"hidden"});return this},fadeOut:function(a){var b=this;b.animate({opacity:0},{duration:a||150,complete:function(){b.attr({y:-9999})}})},add:function(a){var b=
this.renderer,d=this.element;a&&(this.parentGroup=a);this.parentInverted=a&&a.inverted;void 0!==this.textStr&&b.buildText(this);this.added=!0;if(!a||a.handleZ||this.zIndex)var l=this.zIndexSetter();l||(a?a.element:b.box).appendChild(d);if(this.onAdd)this.onAdd();return this},safeRemoveChild:function(a){var b=a.parentNode;b&&b.removeChild(a)},destroy:function(){var a=this,b=a.element||{},d=a.renderer,l=d.isSVG&&"SPAN"===b.nodeName&&a.parentGroup,w=b.ownerSVGElement,e=a.clipPath;b.onclick=b.onmouseout=
b.onmouseover=b.onmousemove=b.point=null;J(a);e&&w&&([].forEach.call(w.querySelectorAll("[clip-path],[CLIP-PATH]"),function(a){-1<a.getAttribute("clip-path").indexOf(e.element.id)&&a.removeAttribute("clip-path")}),a.clipPath=e.destroy());if(a.stops){for(w=0;w<a.stops.length;w++)a.stops[w]=a.stops[w].destroy();a.stops=null}a.safeRemoveChild(b);for(d.styledMode||a.destroyShadows();l&&l.div&&0===l.div.childNodes.length;)b=l.parentGroup,a.safeRemoveChild(l.div),delete l.div,l=b;a.alignTo&&F(d.alignedObjects,
a);C(a,function(b,d){a[d]&&a[d].parentGroup===a&&a[d].destroy&&a[d].destroy();delete a[d]})},shadow:function(a,b,d){var l=[],e,f=this.element;if(!a)this.destroyShadows();else if(!this.shadows){var G=w(a.width,3);var k=(a.opacity||.15)/G;var c=this.parentInverted?"(-1,-1)":"("+w(a.offsetX,1)+", "+w(a.offsetY,1)+")";for(e=1;e<=G;e++){var t=f.cloneNode(0);var h=2*G+1-2*e;A(t,{stroke:a.color||"#000000","stroke-opacity":k*e,"stroke-width":h,transform:"translate"+c,fill:"none"});t.setAttribute("class",
(t.getAttribute("class")||"")+" highcharts-shadow");d&&(A(t,"height",Math.max(A(t,"height")-h,0)),t.cutHeight=h);b?b.element.appendChild(t):f.parentNode&&f.parentNode.insertBefore(t,f);l.push(t)}this.shadows=l}return this},destroyShadows:function(){(this.shadows||[]).forEach(function(a){this.safeRemoveChild(a)},this);this.shadows=void 0},xGetter:function(a){"circle"===this.element.nodeName&&("x"===a?a="cx":"y"===a&&(a="cy"));return this._defaultGetter(a)},_defaultGetter:function(a){a=w(this[a+"Value"],
this[a],this.element?this.element.getAttribute(a):null,0);/^[\-0-9\.]+$/.test(a)&&(a=parseFloat(a));return a},dSetter:function(a,b,d){a&&a.join&&(a=a.join(" "));/(NaN| {2}|^$)/.test(a)&&(a="M 0 0");this[b]!==a&&(d.setAttribute(b,a),this[b]=a)},dashstyleSetter:function(a){var b,d=this["stroke-width"];"inherit"===d&&(d=1);if(a=a&&a.toLowerCase()){a=a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash",
"8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(b=a.length;b--;)a[b]=x(a[b])*d;a=a.join(",").replace(/NaN/g,"none");this.element.setAttribute("stroke-dasharray",a)}},alignSetter:function(a){var b={left:"start",center:"middle",right:"end"};b[a]&&(this.alignValue=a,this.element.setAttribute("text-anchor",b[a]))},opacitySetter:function(a,b,d){this[b]=a;d.setAttribute(b,a)},titleSetter:function(a){var b=this.element.getElementsByTagName("title")[0];b||(b=r.createElementNS(this.SVG_NS,
"title"),this.element.appendChild(b));b.firstChild&&b.removeChild(b.firstChild);b.appendChild(r.createTextNode(String(w(a,"")).replace(/<[^>]*>/g,"").replace(/&lt;/g,"<").replace(/&gt;/g,">")))},textSetter:function(a){a!==this.textStr&&(delete this.bBox,delete this.textPxLength,this.textStr=a,this.added&&this.renderer.buildText(this))},setTextPath:function(a,b){var d=this.element,l={textAnchor:"text-anchor"},w=!1,e=this.textPathWrapper,f=!e;b=B(!0,{enabled:!0,attributes:{dy:-5,startOffset:"50%",textAnchor:"middle"}},
b);var k=b.attributes;if(a&&b&&b.enabled){this.options&&this.options.padding&&(k.dx=-this.options.padding);e||(this.textPathWrapper=e=this.renderer.createElement("textPath"),w=!0);var G=e.element;(b=a.element.getAttribute("id"))||a.element.setAttribute("id",b=c.uniqueKey());if(f)for(a=d.getElementsByTagName("tspan");a.length;)a[0].setAttribute("y",0),G.appendChild(a[0]);w&&e.add({element:this.text?this.text.element:d});G.setAttributeNS("http://www.w3.org/1999/xlink","href",this.renderer.url+"#"+b);
D(k.dy)&&(G.parentNode.setAttribute("dy",k.dy),delete k.dy);D(k.dx)&&(G.parentNode.setAttribute("dx",k.dx),delete k.dx);C(k,function(a,b){G.setAttribute(l[b]||b,a)});d.removeAttribute("transform");this.removeTextOutline.call(e,[].slice.call(d.getElementsByTagName("tspan")));this.text&&!this.renderer.styledMode&&this.attr({fill:"none","stroke-width":0});this.applyTextOutline=this.updateTransform=I}else e&&(delete this.updateTransform,delete this.applyTextOutline,this.destroyTextPath(d,a));return this},
destroyTextPath:function(a,b){var d;b.element.setAttribute("id","");for(d=this.textPathWrapper.element.childNodes;d.length;)a.firstChild.appendChild(d[0]);a.firstChild.removeChild(this.textPathWrapper.element);delete b.textPathWrapper},fillSetter:function(a,b,d){"string"===typeof a?d.setAttribute(b,a):a&&this.complexColor(a,b,d)},visibilitySetter:function(a,b,d){"inherit"===a?d.removeAttribute(b):this[b]!==a&&d.setAttribute(b,a);this[b]=a},zIndexSetter:function(a,b){var d=this.renderer,l=this.parentGroup,
w=(l||d).element||d.box,e=this.element,f=!1;d=w===d.box;var k=this.added;var c;D(a)?(e.setAttribute("data-z-index",a),a=+a,this[b]===a&&(k=!1)):D(this[b])&&e.removeAttribute("data-z-index");this[b]=a;if(k){(a=this.zIndex)&&l&&(l.handleZ=!0);b=w.childNodes;for(c=b.length-1;0<=c&&!f;c--){l=b[c];k=l.getAttribute("data-z-index");var G=!D(k);if(l!==e)if(0>a&&G&&!d&&!c)w.insertBefore(e,b[c]),f=!0;else if(x(k)<=a||G&&(!D(a)||0<=a))w.insertBefore(e,b[c+1]||null),f=!0}f||(w.insertBefore(e,b[d?3:0]||null),
f=!0)}return f},_defaultSetter:function(a,b,d){d.setAttribute(b,a)}});M.prototype.yGetter=M.prototype.xGetter;M.prototype.translateXSetter=M.prototype.translateYSetter=M.prototype.rotationSetter=M.prototype.verticalAlignSetter=M.prototype.rotationOriginXSetter=M.prototype.rotationOriginYSetter=M.prototype.scaleXSetter=M.prototype.scaleYSetter=M.prototype.matrixSetter=function(a,b){this[b]=a;this.doTransform=!0};M.prototype["stroke-widthSetter"]=M.prototype.strokeSetter=function(a,b,d){this[b]=a;this.stroke&&
this["stroke-width"]?(M.prototype.fillSetter.call(this,this.stroke,"stroke",d),d.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0):"stroke-width"===b&&0===a&&this.hasStroke?(d.removeAttribute("stroke"),this.hasStroke=!1):this.renderer.styledMode&&this["stroke-width"]&&(d.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0)};n=c.SVGRenderer=function(){this.init.apply(this,arguments)};E(n.prototype,{Element:M,SVG_NS:T,init:function(a,b,l,w,e,f,k){var c=this.createElement("svg").attr({version:"1.1",
"class":"highcharts-root"});k||c.css(this.getStyle(w));w=c.element;a.appendChild(w);A(a,"dir","ltr");-1===a.innerHTML.indexOf("xmlns")&&A(w,"xmlns",this.SVG_NS);this.isSVG=!0;this.box=w;this.boxWrapper=c;this.alignedObjects=[];this.url=(v||t)&&r.getElementsByTagName("base").length?S.location.href.split("#")[0].replace(/<[^>]*>/g,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";this.createElement("desc").add().element.appendChild(r.createTextNode("Created with Highcharts 7.2.0"));this.defs=
this.createElement("defs").add();this.allowHTML=f;this.forExport=e;this.styledMode=k;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(b,l,!1);var G;v&&a.getBoundingClientRect&&(b=function(){d(a,{left:0,top:0});G=a.getBoundingClientRect();d(a,{left:Math.ceil(G.left)-G.left+"px",top:Math.ceil(G.top)-G.top+"px"})},b(),this.unSubPixelFix=p(S,"resize",b))},definition:function(a){function b(a,l){var w;m(a).forEach(function(a){var e=d.createElement(a.tagName),f={};C(a,function(a,
b){"tagName"!==b&&"children"!==b&&"textContent"!==b&&(f[b]=a)});e.attr(f);e.add(l||d.defs);a.textContent&&e.element.appendChild(r.createTextNode(a.textContent));b(a.children||[],e);w=e});return w}var d=this;return b(a)},getStyle:function(a){return this.style=E({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},a)},setStyle:function(a){this.boxWrapper.css(this.getStyle(a))},isHidden:function(){return!this.boxWrapper.getBBox().width},destroy:function(){var a=
this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();h(this.gradients||{});this.gradients=null;a&&(this.defs=a.destroy());this.unSubPixelFix&&this.unSubPixelFix();return this.alignedObjects=null},createElement:function(a){var b=new this.Element;b.init(this,a);return b},draw:I,getRadialAttr:function(a,b){return{cx:a[0]-a[2]/2+b.cx*a[2],cy:a[1]-a[2]/2+b.cy*a[2],r:b.r*a[2]}},truncate:function(a,b,d,l,w,e,f){var k=this,c=a.rotation,t,G=l?1:0,h=(d||l).length,B=h,J=[],K=function(a){b.firstChild&&
b.removeChild(b.firstChild);a&&b.appendChild(r.createTextNode(a))},M=function(e,c){c=c||e;if(void 0===J[c])if(b.getSubStringLength)try{J[c]=w+b.getSubStringLength(0,l?c+1:c)}catch(aa){""}else k.getSpanWidth&&(K(f(d||l,e)),J[c]=w+k.getSpanWidth(a,b));return J[c]},O;a.rotation=0;var q=M(b.textContent.length);if(O=w+q>e){for(;G<=h;)B=Math.ceil((G+h)/2),l&&(t=f(l,B)),q=M(B,t&&t.length-1),G===h?G=h+1:q>e?h=B-1:G=B;0===h?K(""):d&&h===d.length-1||K(t||f(d||l,B))}l&&l.splice(0,B);a.actualWidth=q;a.rotation=
c;return O},escapes:{"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},buildText:function(a){var b=a.element,l=this,e=l.forExport,f=w(a.textStr,"").toString(),k=-1!==f.indexOf("<"),c=b.childNodes,t,h=A(b,"x"),G=a.styles,B=a.textWidth,J=G&&G.lineHeight,M=G&&G.textOutline,q=G&&"ellipsis"===G.textOverflow,v=G&&"nowrap"===G.whiteSpace,I=G&&G.fontSize,m,g=c.length;G=B&&!a.added&&this.box;var E=function(a){var d;l.styledMode||(d=/(px|em)$/.test(a&&a.style.fontSize)?a.style.fontSize:I||l.style.fontSize||
12);return J?x(J):l.fontMetrics(d,a.getAttribute("style")?a:b).h},p=function(a,b){C(l.escapes,function(d,l){b&&-1!==b.indexOf(d)||(a=a.toString().replace(new RegExp(d,"g"),l))});return a},R=function(a,b){var d=a.indexOf("<");a=a.substring(d,a.indexOf(">")-d);d=a.indexOf(b+"=");if(-1!==d&&(d=d+b.length+1,b=a.charAt(d),'"'===b||"'"===b))return a=a.substring(d+1),a.substring(0,a.indexOf(b))},S=/<br.*?>/g;var u=[f,q,v,J,M,I,B].join();if(u!==a.textCache){for(a.textCache=u;g--;)b.removeChild(c[g]);k||M||
q||B||-1!==f.indexOf(" ")&&(!v||S.test(f))?(G&&G.appendChild(b),k?(f=l.styledMode?f.replace(/<(b|strong)>/g,'<span class="highcharts-strong">').replace(/<(i|em)>/g,'<span class="highcharts-emphasized">'):f.replace(/<(b|strong)>/g,'<span style="font-weight:bold">').replace(/<(i|em)>/g,'<span style="font-style:italic">'),f=f.replace(/<a/g,"<span").replace(/<\/(b|strong|i|em|a)>/g,"</span>").split(S)):f=[f],f=f.filter(function(a){return""!==a}),f.forEach(function(w,f){var k=0,c=0;w=w.replace(/^\s+|\s+$/g,
"").replace(/<span/g,"|||<span").replace(/<\/span>/g,"</span>|||");var G=w.split("|||");G.forEach(function(w){if(""!==w||1===G.length){var J={},M=r.createElementNS(l.SVG_NS,"tspan"),O,g;(O=R(w,"class"))&&A(M,"class",O);if(O=R(w,"style"))O=O.replace(/(;| |^)color([ :])/,"$1fill$2"),A(M,"style",O);(g=R(w,"href"))&&!e&&(A(M,"onclick",'location.href="'+g+'"'),A(M,"class","highcharts-anchor"),l.styledMode||d(M,{cursor:"pointer"}));w=p(w.replace(/<[a-zA-Z\/](.|\n)*?>/g,"")||" ");if(" "!==w){M.appendChild(r.createTextNode(w));
k?J.dx=0:f&&null!==h&&(J.x=h);A(M,J);b.appendChild(M);!k&&m&&(!K&&e&&d(M,{display:"block"}),A(M,"dy",E(M)));if(B){var Q=w.replace(/([^\^])-/g,"$1- ").split(" ");J=!v&&(1<G.length||f||1<Q.length);g=0;var x=E(M);if(q)t=l.truncate(a,M,w,void 0,0,Math.max(0,B-parseInt(I||12,10)),function(a,b){return a.substring(0,b)+"\u2026"});else if(J)for(;Q.length;)Q.length&&!v&&0<g&&(M=r.createElementNS(T,"tspan"),A(M,{dy:x,x:h}),O&&A(M,"style",O),M.appendChild(r.createTextNode(Q.join(" ").replace(/- /g,"-"))),b.appendChild(M)),
l.truncate(a,M,null,Q,0===g?c:0,B,function(a,b){return Q.slice(0,b).join(" ").replace(/- /g,"-")}),c=a.actualWidth,g++}k++}}});m=m||b.childNodes.length}),q&&t&&a.attr("title",p(a.textStr,["&lt;","&gt;"])),G&&G.removeChild(b),M&&a.applyTextOutline&&a.applyTextOutline(M)):b.appendChild(r.createTextNode(p(f)))}},getContrast:function(b){b=a(b).rgba;b[0]*=1;b[1]*=1.2;b[2]*=.5;return 459<b[0]+b[1]+b[2]?"#000000":"#FFFFFF"},button:function(a,b,d,l,w,e,f,c,t,h){var G=this.label(a,b,d,t,null,null,h,null,"button"),
J=0,K=this.styledMode;G.attr(B({padding:8,r:2},w));if(!K){w=B({fill:"#f7f7f7",stroke:"#cccccc","stroke-width":1,style:{color:"#333333",cursor:"pointer",fontWeight:"normal"}},w);var M=w.style;delete w.style;e=B(w,{fill:"#e6e6e6"},e);var r=e.style;delete e.style;f=B(w,{fill:"#e6ebf5",style:{color:"#000000",fontWeight:"bold"}},f);var q=f.style;delete f.style;c=B(w,{style:{color:"#cccccc"}},c);var O=c.style;delete c.style}p(G.element,k?"mouseover":"mouseenter",function(){3!==J&&G.setState(1)});p(G.element,
k?"mouseout":"mouseleave",function(){3!==J&&G.setState(J)});G.setState=function(a){1!==a&&(G.state=J=a);G.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-"+["normal","hover","pressed","disabled"][a||0]);K||G.attr([w,e,f,c][a||0]).css([M,r,q,O][a||0])};K||G.attr(w).css(E({cursor:"default"},M));return G.on("click",function(a){3!==J&&l.call(G,a)})},crispLine:function(a,b){a[1]===a[4]&&(a[1]=a[4]=Math.round(a[1])-b%2/2);a[2]===a[5]&&(a[2]=a[5]=Math.round(a[2])+
b%2/2);return a},path:function(a){var b=this.styledMode?{}:{fill:"none"};z(a)?b.d=a:L(a)&&E(b,a);return this.createElement("path").attr(b)},circle:function(a,b,d){a=L(a)?a:void 0===a?{}:{x:a,y:b,r:d};b=this.createElement("circle");b.xSetter=b.ySetter=function(a,b,d){d.setAttribute("c"+b,a)};return b.attr(a)},arc:function(a,b,d,l,w,e){L(a)?(l=a,b=l.y,d=l.r,a=l.x):l={innerR:l,start:w,end:e};a=this.symbol("arc",a,b,d,d,l);a.r=d;return a},rect:function(a,b,d,l,w,e){w=L(a)?a.r:w;var f=this.createElement("rect");
a=L(a)?a:void 0===a?{}:{x:a,y:b,width:Math.max(d,0),height:Math.max(l,0)};this.styledMode||(void 0!==e&&(a.strokeWidth=e,a=f.crisp(a)),a.fill="none");w&&(a.r=w);f.rSetter=function(a,b,d){f.r=a;A(d,{rx:a,ry:a})};f.rGetter=function(){return f.r};return f.attr(a)},setSize:function(a,b,d){var l=this.alignedObjects,e=l.length;this.width=a;this.height=b;for(this.boxWrapper.animate({width:a,height:b},{step:function(){this.attr({viewBox:"0 0 "+this.attr("width")+" "+this.attr("height")})},duration:w(d,!0)?
void 0:0});e--;)l[e].align()},g:function(a){var b=this.createElement("g");return a?b.attr({"class":"highcharts-"+a}):b},image:function(a,b,d,l,w,e){var f={preserveAspectRatio:"none"},k=function(a,b){a.setAttributeNS?a.setAttributeNS("http://www.w3.org/1999/xlink","href",b):a.setAttribute("hc-svg-href",b)},c=function(b){k(t.element,a);e.call(t,b)};1<arguments.length&&E(f,{x:b,y:d,width:l,height:w});var t=this.createElement("image").attr(f);e?(k(t.element,"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),
f=new S.Image,p(f,"load",c),f.src=a,f.complete&&c({})):k(t.element,a);return t},symbol:function(a,l,e,k,c,t){var h=this,B=/^url\((.*?)\)$/,G=B.test(a),J=!G&&(this.symbols[a]?a:"circle"),K=J&&this.symbols[J],M=D(l)&&K&&K.call(this.symbols,Math.round(l),Math.round(e),k,c,t);if(K){var q=this.path(M);h.styledMode||q.attr("fill","none");E(q,{symbolName:J,x:l,y:e,width:k,height:c});t&&E(q,t)}else if(G){var v=a.match(B)[1];q=this.image(v);q.imgwidth=w(R[v]&&R[v].width,t&&t.width);q.imgheight=w(R[v]&&R[v].height,
t&&t.height);var I=function(){q.attr({width:q.width,height:q.height})};["width","height"].forEach(function(a){q[a+"Setter"]=function(a,b){var d={},l=this["img"+b],w="width"===b?"translateX":"translateY";this[b]=a;D(l)&&(t&&"within"===t.backgroundSize&&this.width&&this.height&&(l=Math.round(l*Math.min(this.width/this.imgwidth,this.height/this.imgheight))),this.element&&this.element.setAttribute(b,l),this.alignByTranslate||(d[w]=((this[b]||0)-l)/2,this.attr(d)))}});D(l)&&q.attr({x:l,y:e});q.isImg=!0;
D(q.imgwidth)&&D(q.imgheight)?I():(q.attr({width:0,height:0}),f("img",{onload:function(){var a=b[h.chartIndex];0===this.width&&(d(this,{position:"absolute",top:"-999em"}),r.body.appendChild(this));R[v]={width:this.width,height:this.height};q.imgwidth=this.width;q.imgheight=this.height;q.element&&I();this.parentNode&&this.parentNode.removeChild(this);h.imgCount--;if(!h.imgCount&&a&&a.onload)a.onload()},src:v}),this.imgCount++)}return q},symbols:{circle:function(a,b,d,l){return this.arc(a+d/2,b+l/2,
d/2,l/2,{start:.5*Math.PI,end:2.5*Math.PI,open:!1})},square:function(a,b,d,l){return["M",a,b,"L",a+d,b,a+d,b+l,a,b+l,"Z"]},triangle:function(a,b,d,l){return["M",a+d/2,b,"L",a+d,b+l,a,b+l,"Z"]},"triangle-down":function(a,b,d,l){return["M",a,b,"L",a+d,b,a+d/2,b+l,"Z"]},diamond:function(a,b,d,l){return["M",a+d/2,b,"L",a+d,b+l/2,a+d/2,b+l,a,b+l/2,"Z"]},arc:function(a,b,d,l,e){var f=e.start,k=e.r||d,c=e.r||l||d,t=e.end-.001;d=e.innerR;l=w(e.open,.001>Math.abs(e.end-e.start-2*Math.PI));var h=Math.cos(f),
B=Math.sin(f),J=Math.cos(t);t=Math.sin(t);f=.001>e.end-f-Math.PI?0:1;e=["M",a+k*h,b+c*B,"A",k,c,0,f,w(e.clockwise,1),a+k*J,b+c*t];D(d)&&e.push(l?"M":"L",a+d*J,b+d*t,"A",d,d,0,f,0,a+d*h,b+d*B);e.push(l?"":"Z");return e},callout:function(a,b,d,l,w){var e=Math.min(w&&w.r||0,d,l),f=e+6,k=w&&w.anchorX;w=w&&w.anchorY;var c=["M",a+e,b,"L",a+d-e,b,"C",a+d,b,a+d,b,a+d,b+e,"L",a+d,b+l-e,"C",a+d,b+l,a+d,b+l,a+d-e,b+l,"L",a+e,b+l,"C",a,b+l,a,b+l,a,b+l-e,"L",a,b+e,"C",a,b,a,b,a+e,b];k&&k>d?w>b+f&&w<b+l-f?c.splice(13,
3,"L",a+d,w-6,a+d+6,w,a+d,w+6,a+d,b+l-e):c.splice(13,3,"L",a+d,l/2,k,w,a+d,l/2,a+d,b+l-e):k&&0>k?w>b+f&&w<b+l-f?c.splice(33,3,"L",a,w+6,a-6,w,a,w-6,a,b+e):c.splice(33,3,"L",a,l/2,k,w,a,l/2,a,b+e):w&&w>l&&k>a+f&&k<a+d-f?c.splice(23,3,"L",k+6,b+l,k,b+l+6,k-6,b+l,a+e,b+l):w&&0>w&&k>a+f&&k<a+d-f&&c.splice(3,3,"L",k-6,b,k,b-6,k+6,b,d-e,b);return c}},clipRect:function(a,b,d,l){var w=c.uniqueKey()+"-",e=this.createElement("clipPath").attr({id:w}).add(this.defs);a=this.rect(a,b,d,l,0).add(e);a.id=w;a.clipPath=
e;a.count=0;return a},text:function(a,b,d,l){var w={};if(l&&(this.allowHTML||!this.forExport))return this.html(a,b,d);w.x=Math.round(b||0);d&&(w.y=Math.round(d));D(a)&&(w.text=a);a=this.createElement("text").attr(w);l||(a.xSetter=function(a,b,d){var l=d.getElementsByTagName("tspan"),w=d.getAttribute(b),e;for(e=0;e<l.length;e++){var f=l[e];f.getAttribute(b)===w&&f.setAttribute(b,a)}d.setAttribute(b,a)});return a},fontMetrics:function(a,b){a=!this.styledMode&&/px/.test(a)||!S.getComputedStyle?a||b&&
b.style&&b.style.fontSize||this.style&&this.style.fontSize:b&&M.prototype.getStyle.call(b,"font-size");a=/px/.test(a)?x(a):12;b=24>a?a+3:Math.round(1.2*a);return{h:b,b:Math.round(.8*b),f:a}},rotCorr:function(a,b,d){var l=a;b&&d&&(l=Math.max(l*Math.cos(b*e),4));return{x:-a/3*Math.sin(b*e),y:l}},label:function(a,b,d,w,e,f,k,c,t){var h=this,J=h.styledMode,K=h.g("button"!==t&&"label"),q=K.text=h.text("",0,0,k).attr({zIndex:1}),r,v,G=0,I=3,m=0,g,p,O,T,x,Q={},R,S,z=/^url\((.*?)\)$/.test(w),y=J||z,n=function(){return J?
r.strokeWidth()%2/2:(R?parseInt(R,10):0)%2/2};t&&K.addClass("highcharts-"+t);var L=function(){var a=q.element.style,b={};v=(void 0===g||void 0===p||x)&&D(q.textStr)&&q.getBBox();K.width=(g||v.width||0)+2*I+m;K.height=(p||v.height||0)+2*I;S=I+Math.min(h.fontMetrics(a&&a.fontSize,q).b,v?v.height:Infinity);y&&(r||(K.box=r=h.symbols[w]||z?h.symbol(w):h.rect(),r.addClass(("button"===t?"":"highcharts-label-box")+(t?" highcharts-"+t+"-box":"")),r.add(K),a=n(),b.x=a,b.y=(c?-S:0)+a),b.width=Math.round(K.width),
b.height=Math.round(K.height),r.attr(E(b,Q)),Q={})};var C=function(){var a=m+I;var b=c?0:S;D(g)&&v&&("center"===x||"right"===x)&&(a+={center:.5,right:1}[x]*(g-v.width));if(a!==q.x||b!==q.y)q.attr("x",a),q.hasBoxWidthChanged&&(v=q.getBBox(!0),L()),void 0!==b&&q.attr("y",b);q.x=a;q.y=b};var A=function(a,b){r?r.attr(a,b):Q[a]=b};K.onAdd=function(){q.add(K);K.attr({text:a||0===a?a:"",x:b,y:d});r&&D(e)&&K.attr({anchorX:e,anchorY:f})};K.widthSetter=function(a){g=u(a)?a:null};K.heightSetter=function(a){p=
a};K["text-alignSetter"]=function(a){x=a};K.paddingSetter=function(a){D(a)&&a!==I&&(I=K.padding=a,C())};K.paddingLeftSetter=function(a){D(a)&&a!==m&&(m=a,C())};K.alignSetter=function(a){a={left:0,center:.5,right:1}[a];a!==G&&(G=a,v&&K.attr({x:O}))};K.textSetter=function(a){void 0!==a&&q.attr({text:a});L();C()};K["stroke-widthSetter"]=function(a,b){a&&(y=!0);R=this["stroke-width"]=a;A(b,a)};J?K.rSetter=function(a,b){A(b,a)}:K.strokeSetter=K.fillSetter=K.rSetter=function(a,b){"r"!==b&&("fill"===b&&
a&&(y=!0),K[b]=a);A(b,a)};K.anchorXSetter=function(a,b){e=K.anchorX=a;A(b,Math.round(a)-n()-O)};K.anchorYSetter=function(a,b){f=K.anchorY=a;A(b,a-T)};K.xSetter=function(a){K.x=a;G&&(a-=G*((g||v.width)+2*I),K["forceAnimate:x"]=!0);O=Math.round(a);K.attr("translateX",O)};K.ySetter=function(a){T=K.y=Math.round(a);K.attr("translateY",T)};var U=K.css;k={css:function(a){if(a){var b={};a=B(a);K.textProps.forEach(function(d){void 0!==a[d]&&(b[d]=a[d],delete a[d])});q.css(b);"width"in b&&L();"fontSize"in b&&
(L(),C())}return U.call(K,a)},getBBox:function(){return{width:v.width+2*I,height:v.height+2*I,x:v.x-I,y:v.y-I}},destroy:function(){l(K.element,"mouseenter");l(K.element,"mouseleave");q&&(q=q.destroy());r&&(r=r.destroy());M.prototype.destroy.call(K);K=h=L=C=A=null}};J||(k.shadow=function(a){a&&(L(),r&&r.shadow(a));return K});return E(K,k)}});c.Renderer=n});N(H,"parts/Html.js",[H["parts/Globals.js"],H["parts/Utilities.js"]],function(c,n){var A=n.attr,D=n.defined,F=n.pInt,z=c.createElement,u=c.css,L=
c.extend,y=c.isFirefox,C=c.isMS,x=c.isWebKit,m=c.pick,p=c.SVGElement;n=c.SVGRenderer;var g=c.win;L(p.prototype,{htmlCss:function(b){var a="SPAN"===this.element.tagName&&b&&"width"in b,d=m(a&&b.width,void 0);if(a){delete b.width;this.textWidth=d;var f=!0}b&&"ellipsis"===b.textOverflow&&(b.whiteSpace="nowrap",b.overflow="hidden");this.styles=L(this.styles,b);u(this.element,b);f&&this.htmlUpdateTransform();return this},htmlGetBBox:function(){var b=this.element;return{x:b.offsetLeft,y:b.offsetTop,width:b.offsetWidth,
height:b.offsetHeight}},htmlUpdateTransform:function(){if(this.added){var b=this.renderer,a=this.element,d=this.translateX||0,f=this.translateY||0,e=this.x||0,c=this.y||0,r=this.textAlign||"left",m={left:0,center:.5,right:1}[r],q=this.styles,v=q&&q.whiteSpace;u(a,{marginLeft:d,marginTop:f});!b.styledMode&&this.shadows&&this.shadows.forEach(function(a){u(a,{marginLeft:d+1,marginTop:f+1})});this.inverted&&[].forEach.call(a.childNodes,function(d){b.invertChild(d,a)});if("SPAN"===a.tagName){q=this.rotation;
var k=this.textWidth&&F(this.textWidth),t=[q,r,a.innerHTML,this.textWidth,this.textAlign].join(),B;(B=k!==this.oldTextWidth)&&!(B=k>this.oldTextWidth)&&((B=this.textPxLength)||(u(a,{width:"",whiteSpace:v||"nowrap"}),B=a.offsetWidth),B=B>k);B&&(/[ \-]/.test(a.textContent||a.innerText)||"ellipsis"===a.style.textOverflow)?(u(a,{width:k+"px",display:"block",whiteSpace:v||"normal"}),this.oldTextWidth=k,this.hasBoxWidthChanged=!0):this.hasBoxWidthChanged=!1;t!==this.cTT&&(v=b.fontMetrics(a.style.fontSize,
a).b,!D(q)||q===(this.oldRotation||0)&&r===this.oldAlign||this.setSpanRotation(q,m,v),this.getSpanCorrection(!D(q)&&this.textPxLength||a.offsetWidth,v,m,q,r));u(a,{left:e+(this.xCorr||0)+"px",top:c+(this.yCorr||0)+"px"});this.cTT=t;this.oldRotation=q;this.oldAlign=r}}else this.alignOnAdd=!0},setSpanRotation:function(b,a,d){var f={},e=this.renderer.getTransformKey();f[e]=f.transform="rotate("+b+"deg)";f[e+(y?"Origin":"-origin")]=f.transformOrigin=100*a+"% "+d+"px";u(this.element,f)},getSpanCorrection:function(b,
a,d){this.xCorr=-b*d;this.yCorr=-a}});L(n.prototype,{getTransformKey:function(){return C&&!/Edge/.test(g.navigator.userAgent)?"-ms-transform":x?"-webkit-transform":y?"MozTransform":g.opera?"-o-transform":""},html:function(b,a,d){var f=this.createElement("span"),e=f.element,c=f.renderer,r=c.isSVG,g=function(a,b){["opacity","visibility"].forEach(function(d){a[d+"Setter"]=function(e,f,k){var w=a.div?a.div.style:b;p.prototype[d+"Setter"].call(this,e,f,k);w&&(w[f]=e)}});a.addedSetters=!0};f.textSetter=
function(a){a!==e.innerHTML&&(delete this.bBox,delete this.oldTextWidth);this.textStr=a;e.innerHTML=m(a,"");f.doTransform=!0};r&&g(f,f.element.style);f.xSetter=f.ySetter=f.alignSetter=f.rotationSetter=function(a,b){"align"===b&&(b="textAlign");f[b]=a;f.doTransform=!0};f.afterSetters=function(){this.doTransform&&(this.htmlUpdateTransform(),this.doTransform=!1)};f.attr({text:b,x:Math.round(a),y:Math.round(d)}).css({position:"absolute"});c.styledMode||f.css({fontFamily:this.style.fontFamily,fontSize:this.style.fontSize});
e.style.whiteSpace="nowrap";f.css=f.htmlCss;r&&(f.add=function(a){var b=c.box.parentNode,d=[];if(this.parentGroup=a){var t=a.div;if(!t){for(;a;)d.push(a),a=a.parentGroup;d.reverse().forEach(function(a){function e(b,d){a[d]=b;"translateX"===d?l.left=b+"px":l.top=b+"px";a.doTransform=!0}var w=A(a.element,"class");t=a.div=a.div||z("div",w?{className:w}:void 0,{position:"absolute",left:(a.translateX||0)+"px",top:(a.translateY||0)+"px",display:a.display,opacity:a.opacity,pointerEvents:a.styles&&a.styles.pointerEvents},
t||b);var l=t.style;L(a,{classSetter:function(a){return function(b){this.element.setAttribute("class",b);a.className=b}}(t),on:function(){d[0].div&&f.on.apply({element:d[0].div},arguments);return a},translateXSetter:e,translateYSetter:e});a.addedSetters||g(a)})}}else t=b;t.appendChild(e);f.added=!0;f.alignOnAdd&&f.htmlUpdateTransform();return f});return f}})});N(H,"parts/Time.js",[H["parts/Globals.js"],H["parts/Utilities.js"]],function(c,n){var A=n.defined,D=n.isObject,F=n.objectEach,z=n.splat,u=
c.extend,L=c.merge,y=c.pick,C=c.timeUnits,x=c.win;c.Time=function(c){this.update(c,!1)};c.Time.prototype={defaultOptions:{},update:function(c){var m=y(c&&c.useUTC,!0),g=this;this.options=c=L(!0,this.options||{},c);this.Date=c.Date||x.Date||Date;this.timezoneOffset=(this.useUTC=m)&&c.timezoneOffset;this.getTimezoneOffset=this.timezoneOffsetFunction();(this.variableTimezone=!(m&&!c.getTimezoneOffset&&!c.timezone))||this.timezoneOffset?(this.get=function(b,a){var d=a.getTime(),f=d-g.getTimezoneOffset(a);
a.setTime(f);b=a["getUTC"+b]();a.setTime(d);return b},this.set=function(b,a,d){if("Milliseconds"===b||"Seconds"===b||"Minutes"===b&&0===a.getTimezoneOffset()%60)a["set"+b](d);else{var f=g.getTimezoneOffset(a);f=a.getTime()-f;a.setTime(f);a["setUTC"+b](d);b=g.getTimezoneOffset(a);f=a.getTime()+b;a.setTime(f)}}):m?(this.get=function(b,a){return a["getUTC"+b]()},this.set=function(b,a,d){return a["setUTC"+b](d)}):(this.get=function(b,a){return a["get"+b]()},this.set=function(b,a,d){return a["set"+b](d)})},
makeTime:function(m,p,g,b,a,d){if(this.useUTC){var f=this.Date.UTC.apply(0,arguments);var e=this.getTimezoneOffset(f);f+=e;var h=this.getTimezoneOffset(f);e!==h?f+=h-e:e-36E5!==this.getTimezoneOffset(f-36E5)||c.isSafari||(f-=36E5)}else f=(new this.Date(m,p,y(g,1),y(b,0),y(a,0),y(d,0))).getTime();return f},timezoneOffsetFunction:function(){var m=this,p=this.options,g=x.moment;if(!this.useUTC)return function(b){return 6E4*(new Date(b)).getTimezoneOffset()};if(p.timezone){if(g)return function(b){return 6E4*
-g.tz(b,p.timezone).utcOffset()};c.error(25)}return this.useUTC&&p.getTimezoneOffset?function(b){return 6E4*p.getTimezoneOffset(b)}:function(){return 6E4*(m.timezoneOffset||0)}},dateFormat:function(m,p,g){if(!A(p)||isNaN(p))return c.defaultOptions.lang.invalidDate||"";m=c.pick(m,"%Y-%m-%d %H:%M:%S");var b=this,a=new this.Date(p),d=this.get("Hours",a),f=this.get("Day",a),e=this.get("Date",a),h=this.get("Month",a),r=this.get("FullYear",a),E=c.defaultOptions.lang,q=E.weekdays,v=E.shortWeekdays,k=c.pad;
a=c.extend({a:v?v[f]:q[f].substr(0,3),A:q[f],d:k(e),e:k(e,2," "),w:f,b:E.shortMonths[h],B:E.months[h],m:k(h+1),o:h+1,y:r.toString().substr(2,2),Y:r,H:k(d),k:d,I:k(d%12||12),l:d%12||12,M:k(b.get("Minutes",a)),p:12>d?"AM":"PM",P:12>d?"am":"pm",S:k(a.getSeconds()),L:k(Math.floor(p%1E3),3)},c.dateFormats);F(a,function(a,d){for(;-1!==m.indexOf("%"+d);)m=m.replace("%"+d,"function"===typeof a?a.call(b,p):a)});return g?m.substr(0,1).toUpperCase()+m.substr(1):m},resolveDTLFormat:function(c){return D(c,!0)?
c:(c=z(c),{main:c[0],from:c[1],to:c[2]})},getTimeTicks:function(c,p,g,b){var a=this,d=[],f={};var e=new a.Date(p);var h=c.unitRange,r=c.count||1,m;b=y(b,1);if(A(p)){a.set("Milliseconds",e,h>=C.second?0:r*Math.floor(a.get("Milliseconds",e)/r));h>=C.second&&a.set("Seconds",e,h>=C.minute?0:r*Math.floor(a.get("Seconds",e)/r));h>=C.minute&&a.set("Minutes",e,h>=C.hour?0:r*Math.floor(a.get("Minutes",e)/r));h>=C.hour&&a.set("Hours",e,h>=C.day?0:r*Math.floor(a.get("Hours",e)/r));h>=C.day&&a.set("Date",e,h>=
C.month?1:Math.max(1,r*Math.floor(a.get("Date",e)/r)));if(h>=C.month){a.set("Month",e,h>=C.year?0:r*Math.floor(a.get("Month",e)/r));var q=a.get("FullYear",e)}h>=C.year&&a.set("FullYear",e,q-q%r);h===C.week&&(q=a.get("Day",e),a.set("Date",e,a.get("Date",e)-q+b+(q<b?-7:0)));q=a.get("FullYear",e);b=a.get("Month",e);var v=a.get("Date",e),k=a.get("Hours",e);p=e.getTime();a.variableTimezone&&(m=g-p>4*C.month||a.getTimezoneOffset(p)!==a.getTimezoneOffset(g));p=e.getTime();for(e=1;p<g;)d.push(p),p=h===C.year?
a.makeTime(q+e*r,0):h===C.month?a.makeTime(q,b+e*r):!m||h!==C.day&&h!==C.week?m&&h===C.hour&&1<r?a.makeTime(q,b,v,k+e*r):p+h*r:a.makeTime(q,b,v+e*r*(h===C.day?1:7)),e++;d.push(p);h<=C.hour&&1E4>d.length&&d.forEach(function(b){0===b%18E5&&"000000000"===a.dateFormat("%H%M%S%L",b)&&(f[b]="day")})}d.info=u(c,{higherRanks:f,totalRange:h*r});return d}}});N(H,"parts/Options.js",[H["parts/Globals.js"]],function(c){var n=c.color,A=c.merge;c.defaultOptions={colors:"#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),
symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January February March April May June July August September October November December".split(" "),shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),weekdays:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),decimalPoint:".",numericSymbols:"kMGTPE".split(""),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{},time:c.Time.prototype.defaultOptions,
chart:{styledMode:!1,borderRadius:0,colorCount:10,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],resetZoomButton:{theme:{zIndex:6},position:{align:"right",x:-10,y:10}},width:null,height:null,borderColor:"#335cad",backgroundColor:"#ffffff",plotBorderColor:"#cccccc"},title:{text:"Chart title",align:"center",margin:15,widthAdjust:-44},subtitle:{text:"",align:"center",widthAdjust:-44},caption:{margin:15,text:"",align:"left",verticalAlign:"bottom"},plotOptions:{},labels:{style:{position:"absolute",
color:"#333333"}},legend:{enabled:!0,align:"center",alignColumns:!0,layout:"horizontal",labelFormatter:function(){return this.name},borderColor:"#999999",borderRadius:0,navigation:{activeColor:"#003399",inactiveColor:"#cccccc"},itemStyle:{color:"#333333",cursor:"pointer",fontSize:"12px",fontWeight:"bold",textOverflow:"ellipsis"},itemHoverStyle:{color:"#000000"},itemHiddenStyle:{color:"#cccccc"},shadow:!1,itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},squareSymbol:!0,symbolPadding:5,
verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"45%"},style:{position:"absolute",backgroundColor:"#ffffff",opacity:.5,textAlign:"center"}},tooltip:{enabled:!0,animation:c.svg,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},footerFormat:"",
padding:8,snap:c.isTouchDevice?25:10,headerFormat:'<span style="font-size: 10px">{point.key}</span><br/>',pointFormat:'<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>',backgroundColor:n("#f7f7f7").setOpacity(.85).get(),borderWidth:1,shadow:!0,style:{color:"#333333",cursor:"default",fontSize:"12px",pointerEvents:"none",whiteSpace:"nowrap"}},credits:{enabled:!0,href:"https://www.highcharts.com?credits",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",
color:"#999999",fontSize:"9px"},text:"Highcharts.com"}};c.setOptions=function(n){c.defaultOptions=A(!0,c.defaultOptions,n);c.time.update(A(c.defaultOptions.global,c.defaultOptions.time),!1);return c.defaultOptions};c.getOptions=function(){return c.defaultOptions};c.defaultPlotOptions=c.defaultOptions.plotOptions;c.time=new c.Time(A(c.defaultOptions.global,c.defaultOptions.time));c.dateFormat=function(n,A,z){return c.time.dateFormat(n,A,z)};""});N(H,"parts/Tick.js",[H["parts/Globals.js"],H["parts/Utilities.js"]],
function(c,n){var A=n.defined,D=n.isNumber,F=c.correctFloat,z=c.destroyObjectProperties,u=c.fireEvent,L=c.merge,y=c.pick,C=c.deg2rad;c.Tick=function(c,m,p,g,b){this.axis=c;this.pos=m;this.type=p||"";this.isNewLabel=this.isNew=!0;this.parameters=b||{};this.tickmarkOffset=this.parameters.tickmarkOffset;this.options=this.parameters.options;p||g||this.addLabel()};c.Tick.prototype={addLabel:function(){var x=this,m=x.axis,p=m.options,g=m.chart,b=m.categories,a=m.names,d=x.pos,f=y(x.options&&x.options.labels,
p.labels),e=m.tickPositions,h=d===e[0],r=d===e[e.length-1];b=this.parameters.category||(b?y(b[d],a[d],d):d);var E=x.label;e=e.info;var q,v;if(m.isDatetimeAxis&&e){var k=g.time.resolveDTLFormat(p.dateTimeLabelFormats[!p.grid&&e.higherRanks[d]||e.unitName]);var t=k.main}x.isFirst=h;x.isLast=r;x.formatCtx={axis:m,chart:g,isFirst:h,isLast:r,dateTimeLabelFormat:t,tickPositionInfo:e,value:m.isLog?F(m.lin2log(b)):b,pos:d};p=m.labelFormatter.call(x.formatCtx,this.formatCtx);if(v=k&&k.list)x.shortenLabel=
function(){for(q=0;q<v.length;q++)if(E.attr({text:m.labelFormatter.call(c.extend(x.formatCtx,{dateTimeLabelFormat:v[q]}))}),E.getBBox().width<m.getSlotWidth(x)-2*y(f.padding,5))return;E.attr({text:""})};if(A(E))E&&E.textStr!==p&&(!E.textWidth||f.style&&f.style.width||E.styles.width||E.css({width:null}),E.attr({text:p}),E.textPxLength=E.getBBox().width);else{if(x.label=E=A(p)&&f.enabled?g.renderer.text(p,0,0,f.useHTML).add(m.labelGroup):null)g.styledMode||E.css(L(f.style)),E.textPxLength=E.getBBox().width;
x.rotation=0}},getLabelSize:function(){return this.label?this.label.getBBox()[this.axis.horiz?"height":"width"]:0},handleOverflow:function(c){var m=this.axis,p=m.options.labels,g=c.x,b=m.chart.chartWidth,a=m.chart.spacing,d=y(m.labelLeft,Math.min(m.pos,a[3]));a=y(m.labelRight,Math.max(m.isRadial?0:m.pos+m.len,b-a[1]));var f=this.label,e=this.rotation,h={left:0,center:.5,right:1}[m.labelAlign||f.attr("align")],r=f.getBBox().width,E=m.getSlotWidth(this),q=E,v=1,k,t={};if(e||"justify"!==y(p.overflow,
"justify"))0>e&&g-h*r<d?k=Math.round(g/Math.cos(e*C)-d):0<e&&g+h*r>a&&(k=Math.round((b-g)/Math.cos(e*C)));else if(b=g+(1-h)*r,g-h*r<d?q=c.x+q*(1-h)-d:b>a&&(q=a-c.x+q*h,v=-1),q=Math.min(E,q),q<E&&"center"===m.labelAlign&&(c.x+=v*(E-q-h*(E-Math.min(r,q)))),r>q||m.autoRotation&&(f.styles||{}).width)k=q;k&&(this.shortenLabel?this.shortenLabel():(t.width=Math.floor(k),(p.style||{}).textOverflow||(t.textOverflow="ellipsis"),f.css(t)))},getPosition:function(x,m,p,g){var b=this.axis,a=b.chart,d=g&&a.oldChartHeight||
a.chartHeight;x={x:x?c.correctFloat(b.translate(m+p,null,null,g)+b.transB):b.left+b.offset+(b.opposite?(g&&a.oldChartWidth||a.chartWidth)-b.right-b.left:0),y:x?d-b.bottom+b.offset-(b.opposite?b.height:0):c.correctFloat(d-b.translate(m+p,null,null,g)-b.transB)};x.y=Math.max(Math.min(x.y,1E5),-1E5);u(this,"afterGetPosition",{pos:x});return x},getLabelPosition:function(c,m,p,g,b,a,d,f){var e=this.axis,h=e.transA,r=e.isLinked&&e.linkedParent?e.linkedParent.reversed:e.reversed,E=e.staggerLines,q=e.tickRotCorr||
{x:0,y:0},v=b.y,k=g||e.reserveSpaceDefault?0:-e.labelOffset*("center"===e.labelAlign?.5:1),t={};A(v)||(v=0===e.side?p.rotation?-8:-p.getBBox().height:2===e.side?q.y+8:Math.cos(p.rotation*C)*(q.y-p.getBBox(!1,0).height/2));c=c+b.x+k+q.x-(a&&g?a*h*(r?-1:1):0);m=m+v-(a&&!g?a*h*(r?1:-1):0);E&&(p=d/(f||1)%E,e.opposite&&(p=E-p-1),m+=e.labelOffset/E*p);t.x=c;t.y=Math.round(m);u(this,"afterGetLabelPosition",{pos:t,tickmarkOffset:a,index:d});return t},getMarkPath:function(c,m,p,g,b,a){return a.crispLine(["M",
c,m,"L",c+(b?0:-p),m+(b?p:0)],g)},renderGridLine:function(c,m,p){var g=this.axis,b=g.options,a=this.gridLine,d={},f=this.pos,e=this.type,h=y(this.tickmarkOffset,g.tickmarkOffset),r=g.chart.renderer,E=e?e+"Grid":"grid",q=b[E+"LineWidth"],v=b[E+"LineColor"];b=b[E+"LineDashStyle"];a||(g.chart.styledMode||(d.stroke=v,d["stroke-width"]=q,b&&(d.dashstyle=b)),e||(d.zIndex=1),c&&(m=0),this.gridLine=a=r.path().attr(d).addClass("highcharts-"+(e?e+"-":"")+"grid-line").add(g.gridGroup));if(a&&(p=g.getPlotLinePath({value:f+
h,lineWidth:a.strokeWidth()*p,force:"pass",old:c})))a[c||this.isNew?"attr":"animate"]({d:p,opacity:m})},renderMark:function(c,m,p){var g=this.axis,b=g.options,a=g.chart.renderer,d=this.type,f=d?d+"Tick":"tick",e=g.tickSize(f),h=this.mark,r=!h,E=c.x;c=c.y;var q=y(b[f+"Width"],!d&&g.isXAxis?1:0);b=b[f+"Color"];e&&(g.opposite&&(e[0]=-e[0]),r&&(this.mark=h=a.path().addClass("highcharts-"+(d?d+"-":"")+"tick").add(g.axisGroup),g.chart.styledMode||h.attr({stroke:b,"stroke-width":q})),h[r?"attr":"animate"]({d:this.getMarkPath(E,
c,e[0],h.strokeWidth()*p,g.horiz,a),opacity:m}))},renderLabel:function(c,m,p,g){var b=this.axis,a=b.horiz,d=b.options,f=this.label,e=d.labels,h=e.step;b=y(this.tickmarkOffset,b.tickmarkOffset);var r=!0,E=c.x;c=c.y;f&&D(E)&&(f.xy=c=this.getLabelPosition(E,c,f,a,e,b,g,h),this.isFirst&&!this.isLast&&!y(d.showFirstLabel,1)||this.isLast&&!this.isFirst&&!y(d.showLastLabel,1)?r=!1:!a||e.step||e.rotation||m||0===p||this.handleOverflow(c),h&&g%h&&(r=!1),r&&D(c.y)?(c.opacity=p,f[this.isNewLabel?"attr":"animate"](c),
this.isNewLabel=!1):(f.attr("y",-9999),this.isNewLabel=!0))},render:function(x,m,p){var g=this.axis,b=g.horiz,a=this.pos,d=y(this.tickmarkOffset,g.tickmarkOffset);a=this.getPosition(b,a,d,m);d=a.x;var f=a.y;g=b&&d===g.pos+g.len||!b&&f===g.pos?-1:1;p=y(p,1);this.isActive=!0;this.renderGridLine(m,p,g);this.renderMark(a,p,g);this.renderLabel(a,m,p,x);this.isNew=!1;c.fireEvent(this,"afterRender")},destroy:function(){z(this,this.axis)}}});N(H,"parts/Axis.js",[H["parts/Globals.js"],H["parts/Utilities.js"]],
function(c,n){var A=n.defined,D=n.isArray,F=n.isNumber,z=n.isString,u=n.objectEach,L=n.splat,y=c.addEvent,C=c.animObject,x=c.arrayMax,m=c.arrayMin,p=c.color,g=c.correctFloat,b=c.defaultOptions,a=c.deg2rad,d=c.destroyObjectProperties,f=c.extend,e=c.fireEvent,h=c.format,r=c.getMagnitude,E=c.merge,q=c.normalizeTickInterval,v=c.pick,k=c.removeEvent,t=c.seriesTypes,B=c.syncTimeout,I=c.Tick;n=function(){this.init.apply(this,arguments)};c.extend(n.prototype,{defaultOptions:{dateTimeLabelFormats:{millisecond:{main:"%H:%M:%S.%L",
range:!1},second:{main:"%H:%M:%S",range:!1},minute:{main:"%H:%M",range:!1},hour:{main:"%H:%M",range:!1},day:{main:"%e. %b"},week:{main:"%e. %b"},month:{main:"%b '%y"},year:{main:"%Y"}},endOnTick:!1,labels:{enabled:!0,indentation:10,x:0,style:{color:"#666666",cursor:"default",fontSize:"11px"}},maxPadding:.01,minorTickLength:2,minorTickPosition:"outside",minPadding:.01,showEmpty:!0,startOfWeek:1,startOnTick:!1,tickLength:10,tickPixelInterval:100,tickmarkPlacement:"between",tickPosition:"outside",title:{align:"middle",
style:{color:"#666666"}},type:"linear",minorGridLineColor:"#f2f2f2",minorGridLineWidth:1,minorTickColor:"#999999",lineColor:"#ccd6eb",lineWidth:1,gridLineColor:"#e6e6e6",tickColor:"#ccd6eb"},defaultYAxisOptions:{endOnTick:!0,maxPadding:.05,minPadding:.05,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8},startOnTick:!0,title:{rotation:270,text:"Values"},stackLabels:{allowOverlap:!1,enabled:!1,crop:!0,overflow:"justify",formatter:function(){return c.numberFormat(this.total,-1)},style:{color:"#000000",
fontSize:"11px",fontWeight:"bold",textOutline:"1px contrast"}},gridLineWidth:1,lineWidth:0},defaultLeftAxisOptions:{labels:{x:-15},title:{rotation:270}},defaultRightAxisOptions:{labels:{x:15},title:{rotation:90}},defaultBottomAxisOptions:{labels:{autoRotation:[-45],x:0},margin:15,title:{rotation:0}},defaultTopAxisOptions:{labels:{autoRotation:[-45],x:0},margin:15,title:{rotation:0}},init:function(a,b){var d=b.isX,l=this;l.chart=a;l.horiz=a.inverted&&!l.isZAxis?!d:d;l.isXAxis=d;l.coll=l.coll||(d?"xAxis":
"yAxis");e(this,"init",{userOptions:b});l.opposite=b.opposite;l.side=b.side||(l.horiz?l.opposite?0:2:l.opposite?1:3);l.setOptions(b);var w=this.options,f=w.type;l.labelFormatter=w.labels.formatter||l.defaultLabelFormatter;l.userOptions=b;l.minPixelPadding=0;l.reversed=w.reversed;l.visible=!1!==w.visible;l.zoomEnabled=!1!==w.zoomEnabled;l.hasNames="category"===f||!0===w.categories;l.categories=w.categories||l.hasNames;l.names||(l.names=[],l.names.keys={});l.plotLinesAndBandsGroups={};l.isLog="logarithmic"===
f;l.isDatetimeAxis="datetime"===f;l.positiveValuesOnly=l.isLog&&!l.allowNegativeLog;l.isLinked=A(w.linkedTo);l.ticks={};l.labelEdge=[];l.minorTicks={};l.plotLinesAndBands=[];l.alternateBands={};l.len=0;l.minRange=l.userMinRange=w.minRange||w.maxZoom;l.range=w.range;l.offset=w.offset||0;l.stacks={};l.oldStacks={};l.stacksTouched=0;l.max=null;l.min=null;l.crosshair=v(w.crosshair,L(a.options.tooltip.crosshairs)[d?0:1],!1);b=l.options.events;-1===a.axes.indexOf(l)&&(d?a.axes.splice(a.xAxis.length,0,l):
a.axes.push(l),a[l.coll].push(l));l.series=l.series||[];a.inverted&&!l.isZAxis&&d&&void 0===l.reversed&&(l.reversed=!0);u(b,function(a,b){c.isFunction(a)&&y(l,b,a)});l.lin2log=w.linearToLogConverter||l.lin2log;l.isLog&&(l.val2lin=l.log2lin,l.lin2val=l.lin2log);e(this,"afterInit")},setOptions:function(a){this.options=E(this.defaultOptions,"yAxis"===this.coll&&this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],
E(b[this.coll],a));e(this,"afterSetOptions",{userOptions:a})},defaultLabelFormatter:function(){var a=this.axis,d=this.value,e=a.chart.time,f=a.categories,k=this.dateTimeLabelFormat,t=b.lang,B=t.numericSymbols;t=t.numericSymbolMagnitude||1E3;var r=B&&B.length,q=a.options.labels.format;a=a.isLog?Math.abs(d):a.tickInterval;if(q)var v=h(q,this,e);else if(f)v=d;else if(k)v=e.dateFormat(k,d);else if(r&&1E3<=a)for(;r--&&void 0===v;)e=Math.pow(t,r+1),a>=e&&0===10*d%e&&null!==B[r]&&0!==d&&(v=c.numberFormat(d/
e,-1)+B[r]);void 0===v&&(v=1E4<=Math.abs(d)?c.numberFormat(d,-1):c.numberFormat(d,-1,void 0,""));return v},getSeriesExtremes:function(){var a=this,b=a.chart,d;e(this,"getSeriesExtremes",null,function(){a.hasVisibleSeries=!1;a.dataMin=a.dataMax=a.threshold=null;a.softThreshold=!a.isXAxis;a.buildStacks&&a.buildStacks();a.series.forEach(function(l){if(l.visible||!b.options.chart.ignoreHiddenSeries){var e=l.options,w=e.threshold;a.hasVisibleSeries=!0;a.positiveValuesOnly&&0>=w&&(w=null);if(a.isXAxis){if(e=
l.xData,e.length){d=l.getXExtremes(e);var f=d.min;var c=d.max;F(f)||f instanceof Date||(e=e.filter(F),d=l.getXExtremes(e),f=d.min,c=d.max);e.length&&(a.dataMin=Math.min(v(a.dataMin,f),f),a.dataMax=Math.max(v(a.dataMax,c),c))}}else if(l.getExtremes(),c=l.dataMax,f=l.dataMin,A(f)&&A(c)&&(a.dataMin=Math.min(v(a.dataMin,f),f),a.dataMax=Math.max(v(a.dataMax,c),c)),A(w)&&(a.threshold=w),!e.softThreshold||a.positiveValuesOnly)a.softThreshold=!1}})});e(this,"afterGetSeriesExtremes")},translate:function(a,
b,d,e,f,c){var l=this.linkedParent||this,w=1,k=0,t=e?l.oldTransA:l.transA;e=e?l.oldMin:l.min;var h=l.minPixelPadding;f=(l.isOrdinal||l.isBroken||l.isLog&&f)&&l.lin2val;t||(t=l.transA);d&&(w*=-1,k=l.len);l.reversed&&(w*=-1,k-=w*(l.sector||l.len));b?(a=(a*w+k-h)/t+e,f&&(a=l.lin2val(a))):(f&&(a=l.val2lin(a)),a=F(e)?w*(a-e)*t+k+w*h+(F(c)?t*c:0):void 0);return a},toPixels:function(a,b){return this.translate(a,!1,!this.horiz,null,!0)+(b?0:this.pos)},toValue:function(a,b){return this.translate(a-(b?0:this.pos),
!0,!this.horiz,null,!0)},getPlotLinePath:function(a){var b=this,d=b.chart,f=b.left,w=b.top,c=a.old,k=a.value,t=a.translatedValue,h=a.lineWidth,B=a.force,r,q,I,m,g=c&&d.oldChartHeight||d.chartHeight,p=c&&d.oldChartWidth||d.chartWidth,E,x=b.transB,u=function(a,b,d){if("pass"!==B&&a<b||a>d)B?a=Math.min(Math.max(b,a),d):E=!0;return a};a={value:k,lineWidth:h,old:c,force:B,acrossPanes:a.acrossPanes,translatedValue:t};e(this,"getPlotLinePath",a,function(a){t=v(t,b.translate(k,null,null,c));t=Math.min(Math.max(-1E5,
t),1E5);r=I=Math.round(t+x);q=m=Math.round(g-t-x);F(t)?b.horiz?(q=w,m=g-b.bottom,r=I=u(r,f,f+b.width)):(r=f,I=p-b.right,q=m=u(q,w,w+b.height)):(E=!0,B=!1);a.path=E&&!B?null:d.renderer.crispLine(["M",r,q,"L",I,m],h||1)});return a.path},getLinearTickPositions:function(a,b,d){var l=g(Math.floor(b/a)*a);d=g(Math.ceil(d/a)*a);var e=[],f;g(l+a)===l&&(f=20);if(this.single)return[b];for(b=l;b<=d;){e.push(b);b=g(b+a,f);if(b===w)break;var w=b}return e},getMinorTickInterval:function(){var a=this.options;return!0===
a.minorTicks?v(a.minorTickInterval,"auto"):!1===a.minorTicks?null:a.minorTickInterval},getMinorTickPositions:function(){var a=this,b=a.options,d=a.tickPositions,e=a.minorTickInterval,f=[],c=a.pointRangePadding||0,k=a.min-c;c=a.max+c;var t=c-k;if(t&&t/e<a.len/3)if(a.isLog)this.paddedTicks.forEach(function(b,d,l){d&&f.push.apply(f,a.getLogTickPositions(e,l[d-1],l[d],!0))});else if(a.isDatetimeAxis&&"auto"===this.getMinorTickInterval())f=f.concat(a.getTimeTicks(a.normalizeTimeTickInterval(e),k,c,b.startOfWeek));
else for(b=k+(d[0]-k)%e;b<=c&&b!==f[0];b+=e)f.push(b);0!==f.length&&a.trimTicks(f);return f},adjustForMinRange:function(){var a=this.options,b=this.min,d=this.max,e,f,c,k,t;this.isXAxis&&void 0===this.minRange&&!this.isLog&&(A(a.min)||A(a.max)?this.minRange=null:(this.series.forEach(function(a){k=a.xData;for(f=t=a.xIncrement?1:k.length-1;0<f;f--)if(c=k[f]-k[f-1],void 0===e||c<e)e=c}),this.minRange=Math.min(5*e,this.dataMax-this.dataMin)));if(d-b<this.minRange){var h=this.dataMax-this.dataMin>=this.minRange;
var B=this.minRange;var r=(B-d+b)/2;r=[b-r,v(a.min,b-r)];h&&(r[2]=this.isLog?this.log2lin(this.dataMin):this.dataMin);b=x(r);d=[b+B,v(a.max,b+B)];h&&(d[2]=this.isLog?this.log2lin(this.dataMax):this.dataMax);d=m(d);d-b<B&&(r[0]=d-B,r[1]=v(a.min,d-B),b=x(r))}this.min=b;this.max=d},getClosest:function(){var a;this.categories?a=1:this.series.forEach(function(b){var d=b.closestPointRange,l=b.visible||!b.chart.options.chart.ignoreHiddenSeries;!b.noSharedTooltip&&A(d)&&l&&(a=A(a)?Math.min(a,d):d)});return a},
nameToX:function(a){var b=D(this.categories),d=b?this.categories:this.names,e=a.options.x;a.series.requireSorting=!1;A(e)||(e=!1===this.options.uniqueNames?a.series.autoIncrement():b?d.indexOf(a.name):v(d.keys[a.name],-1));if(-1===e){if(!b)var f=d.length}else f=e;void 0!==f&&(this.names[f]=a.name,this.names.keys[a.name]=f);return f},updateNames:function(){var a=this,b=this.names;0<b.length&&(Object.keys(b.keys).forEach(function(a){delete b.keys[a]}),b.length=0,this.minRange=this.userMinRange,(this.series||
[]).forEach(function(b){b.xIncrement=null;if(!b.points||b.isDirtyData)a.max=Math.max(a.max,b.xData.length-1),b.processData(),b.generatePoints();b.data.forEach(function(d,l){if(d&&d.options&&void 0!==d.name){var e=a.nameToX(d);void 0!==e&&e!==d.x&&(d.x=e,b.xData[l]=e)}})}))},setAxisTranslation:function(a){var b=this,d=b.max-b.min,f=b.axisPointRange||0,c=0,w=0,k=b.linkedParent,h=!!b.categories,B=b.transA,r=b.isXAxis;if(r||h||f){var q=b.getClosest();k?(c=k.minPointOffset,w=k.pointRangePadding):b.series.forEach(function(a){var d=
h?1:r?v(a.options.pointRange,q,0):b.axisPointRange||0,l=a.options.pointPlacement;f=Math.max(f,d);if(!b.single||h)a=t.xrange&&a instanceof t.xrange?!r:r,c=Math.max(c,a&&z(l)?0:d/2),w=Math.max(w,a&&"on"===l?0:d)});k=b.ordinalSlope&&q?b.ordinalSlope/q:1;b.minPointOffset=c*=k;b.pointRangePadding=w*=k;b.pointRange=Math.min(f,d);r&&(b.closestPointRange=q)}a&&(b.oldTransA=B);b.translationSlope=b.transA=B=b.staticScale||b.len/(d+w||1);b.transB=b.horiz?b.left:b.bottom;b.minPixelPadding=B*c;e(this,"afterSetAxisTranslation")},
minFromRange:function(){return this.max-this.range},setTickInterval:function(a){var b=this,d=b.chart,f=b.options,w=b.isLog,k=b.isDatetimeAxis,t=b.isXAxis,h=b.isLinked,B=f.maxPadding,I=f.minPadding,m=f.tickInterval,p=f.tickPixelInterval,E=b.categories,x=F(b.threshold)?b.threshold:null,u=b.softThreshold;k||E||h||this.getTickAmount();var z=v(b.userMin,f.min);var y=v(b.userMax,f.max);if(h){b.linkedParent=d[b.coll][f.linkedTo];var n=b.linkedParent.getExtremes();b.min=v(n.min,n.dataMin);b.max=v(n.max,n.dataMax);
f.type!==b.linkedParent.options.type&&c.error(11,1,d)}else{if(!u&&A(x))if(b.dataMin>=x)n=x,I=0;else if(b.dataMax<=x){var L=x;B=0}b.min=v(z,n,b.dataMin);b.max=v(y,L,b.dataMax)}w&&(b.positiveValuesOnly&&!a&&0>=Math.min(b.min,v(b.dataMin,b.min))&&c.error(10,1,d),b.min=g(b.log2lin(b.min),15),b.max=g(b.log2lin(b.max),15));b.range&&A(b.max)&&(b.userMin=b.min=z=Math.max(b.dataMin,b.minFromRange()),b.userMax=y=b.max,b.range=null);e(b,"foundExtremes");b.beforePadding&&b.beforePadding();b.adjustForMinRange();
!(E||b.axisPointRange||b.usePercentage||h)&&A(b.min)&&A(b.max)&&(d=b.max-b.min)&&(!A(z)&&I&&(b.min-=d*I),!A(y)&&B&&(b.max+=d*B));F(f.softMin)&&!F(b.userMin)&&f.softMin<b.min&&(b.min=z=f.softMin);F(f.softMax)&&!F(b.userMax)&&f.softMax>b.max&&(b.max=y=f.softMax);F(f.floor)&&(b.min=Math.min(Math.max(b.min,f.floor),Number.MAX_VALUE));F(f.ceiling)&&(b.max=Math.max(Math.min(b.max,f.ceiling),v(b.userMax,-Number.MAX_VALUE)));u&&A(b.dataMin)&&(x=x||0,!A(z)&&b.min<x&&b.dataMin>=x?b.min=b.options.minRange?Math.min(x,
b.max-b.minRange):x:!A(y)&&b.max>x&&b.dataMax<=x&&(b.max=b.options.minRange?Math.max(x,b.min+b.minRange):x));b.tickInterval=b.min===b.max||void 0===b.min||void 0===b.max?1:h&&!m&&p===b.linkedParent.options.tickPixelInterval?m=b.linkedParent.tickInterval:v(m,this.tickAmount?(b.max-b.min)/Math.max(this.tickAmount-1,1):void 0,E?1:(b.max-b.min)*p/Math.max(b.len,p));t&&!a&&b.series.forEach(function(a){a.processData(b.min!==b.oldMin||b.max!==b.oldMax)});b.setAxisTranslation(!0);b.beforeSetTickPositions&&
b.beforeSetTickPositions();b.postProcessTickInterval&&(b.tickInterval=b.postProcessTickInterval(b.tickInterval));b.pointRange&&!m&&(b.tickInterval=Math.max(b.pointRange,b.tickInterval));a=v(f.minTickInterval,b.isDatetimeAxis&&b.closestPointRange);!m&&b.tickInterval<a&&(b.tickInterval=a);k||w||m||(b.tickInterval=q(b.tickInterval,null,r(b.tickInterval),v(f.allowDecimals,!(.5<b.tickInterval&&5>b.tickInterval&&1E3<b.max&&9999>b.max)),!!this.tickAmount));this.tickAmount||(b.tickInterval=b.unsquish());
this.setTickPositions()},setTickPositions:function(){var a=this.options,b=a.tickPositions;var d=this.getMinorTickInterval();var f=a.tickPositioner,k=a.startOnTick,t=a.endOnTick;this.tickmarkOffset=this.categories&&"between"===a.tickmarkPlacement&&1===this.tickInterval?.5:0;this.minorTickInterval="auto"===d&&this.tickInterval?this.tickInterval/5:d;this.single=this.min===this.max&&A(this.min)&&!this.tickAmount&&(parseInt(this.min,10)===this.min||!1!==a.allowDecimals);this.tickPositions=d=b&&b.slice();
!d&&(!this.ordinalPositions&&(this.max-this.min)/this.tickInterval>Math.max(2*this.len,200)?(d=[this.min,this.max],c.error(19,!1,this.chart)):d=this.isDatetimeAxis?this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval,a.units),this.min,this.max,a.startOfWeek,this.ordinalPositions,this.closestPointRange,!0):this.isLog?this.getLogTickPositions(this.tickInterval,this.min,this.max):this.getLinearTickPositions(this.tickInterval,this.min,this.max),d.length>this.len&&(d=[d[0],d.pop()],d[0]===
d[1]&&(d.length=1)),this.tickPositions=d,f&&(f=f.apply(this,[this.min,this.max])))&&(this.tickPositions=d=f);this.paddedTicks=d.slice(0);this.trimTicks(d,k,t);this.isLinked||(this.single&&2>d.length&&!this.categories&&(this.min-=.5,this.max+=.5),b||f||this.adjustTickAmount());e(this,"afterSetTickPositions")},trimTicks:function(a,b,d){var f=a[0],c=a[a.length-1],l=this.minPointOffset||0;e(this,"trimTicks");if(!this.isLinked){if(b&&-Infinity!==f)this.min=f;else for(;this.min-l>a[0];)a.shift();if(d)this.max=
c;else for(;this.max+l<a[a.length-1];)a.pop();0===a.length&&A(f)&&!this.options.tickPositions&&a.push((c+f)/2)}},alignToOthers:function(){var a={},b,d=this.options;!1===this.chart.options.chart.alignTicks||!1===d.alignTicks||!1===d.startOnTick||!1===d.endOnTick||this.isLog||this.chart[this.coll].forEach(function(d){var f=d.options;f=[d.horiz?f.left:f.top,f.width,f.height,f.pane].join();d.series.length&&(a[f]?b=!0:a[f]=1)});return b},getTickAmount:function(){var a=this.options,b=a.tickAmount,d=a.tickPixelInterval;
!A(a.tickInterval)&&this.len<d&&!this.isRadial&&!this.isLog&&a.startOnTick&&a.endOnTick&&(b=2);!b&&this.alignToOthers()&&(b=Math.ceil(this.len/d)+1);4>b&&(this.finalTickAmt=b,b=5);this.tickAmount=b},adjustTickAmount:function(){var a=this.options,b=this.tickInterval,d=this.tickPositions,f=this.tickAmount,e=this.finalTickAmt,c=d&&d.length,k=v(this.threshold,this.softThreshold?0:null),t;if(this.hasData()){if(c<f){for(t=this.min;d.length<f;)d.length%2||t===k?d.push(g(d[d.length-1]+b)):d.unshift(g(d[0]-
b));this.transA*=(c-1)/(f-1);this.min=a.startOnTick?d[0]:Math.min(this.min,d[0]);this.max=a.endOnTick?d[d.length-1]:Math.max(this.max,d[d.length-1])}else c>f&&(this.tickInterval*=2,this.setTickPositions());if(A(e)){for(b=a=d.length;b--;)(3===e&&1===b%2||2>=e&&0<b&&b<a-1)&&d.splice(b,1);this.finalTickAmt=void 0}}},setScale:function(){var a=this.series.some(function(a){return a.isDirtyData||a.isDirty||a.xAxis&&a.xAxis.isDirty}),b;this.oldMin=this.min;this.oldMax=this.max;this.oldAxisLength=this.len;
this.setAxisSize();(b=this.len!==this.oldAxisLength)||a||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax||this.alignToOthers()?(this.resetStacks&&this.resetStacks(),this.forceRedraw=!1,this.getSeriesExtremes(),this.setTickInterval(),this.oldUserMin=this.userMin,this.oldUserMax=this.userMax,this.isDirty||(this.isDirty=b||this.min!==this.oldMin||this.max!==this.oldMax)):this.cleanStacks&&this.cleanStacks();e(this,"afterSetScale")},setExtremes:function(a,
b,d,c,k){var l=this,w=l.chart;d=v(d,!0);l.series.forEach(function(a){delete a.kdTree});k=f(k,{min:a,max:b});e(l,"setExtremes",k,function(){l.userMin=a;l.userMax=b;l.eventArgs=k;d&&w.redraw(c)})},zoom:function(a,b){var d=this.dataMin,f=this.dataMax,c=this.options,k=Math.min(d,v(c.min,d)),l=Math.max(f,v(c.max,f));a={newMin:a,newMax:b};e(this,"zoom",a,function(a){var b=a.newMin,e=a.newMax;if(b!==this.min||e!==this.max)this.allowZoomOutside||(A(d)&&(b<k&&(b=k),b>l&&(b=l)),A(f)&&(e<k&&(e=k),e>l&&(e=l))),
this.displayBtn=void 0!==b||void 0!==e,this.setExtremes(b,e,!1,void 0,{trigger:"zoom"});a.zoomed=!0});return a.zoomed},setAxisSize:function(){var a=this.chart,b=this.options,d=b.offsets||[0,0,0,0],f=this.horiz,e=this.width=Math.round(c.relativeLength(v(b.width,a.plotWidth-d[3]+d[1]),a.plotWidth)),k=this.height=Math.round(c.relativeLength(v(b.height,a.plotHeight-d[0]+d[2]),a.plotHeight)),t=this.top=Math.round(c.relativeLength(v(b.top,a.plotTop+d[0]),a.plotHeight,a.plotTop));b=this.left=Math.round(c.relativeLength(v(b.left,
a.plotLeft+d[3]),a.plotWidth,a.plotLeft));this.bottom=a.chartHeight-k-t;this.right=a.chartWidth-e-b;this.len=Math.max(f?e:k,0);this.pos=f?b:t},getExtremes:function(){var a=this.isLog;return{min:a?g(this.lin2log(this.min)):this.min,max:a?g(this.lin2log(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}},getThreshold:function(a){var b=this.isLog,d=b?this.lin2log(this.min):this.min;b=b?this.lin2log(this.max):this.max;null===a||-Infinity===a?a=d:Infinity===
a?a=b:d>a?a=d:b<a&&(a=b);return this.translate(a,0,1,0,1)},autoLabelAlign:function(a){var b=(v(a,0)-90*this.side+720)%360;a={align:"center"};e(this,"autoLabelAlign",a,function(a){15<b&&165>b?a.align="right":195<b&&345>b&&(a.align="left")});return a.align},tickSize:function(a){var b=this.options,d=b[a+"Length"],f=v(b[a+"Width"],"tick"===a&&this.isXAxis&&!this.categories?1:0);if(f&&d){"inside"===b[a+"Position"]&&(d=-d);var c=[d,f]}a={tickSize:c};e(this,"afterTickSize",a);return a.tickSize},labelMetrics:function(){var a=
this.tickPositions&&this.tickPositions[0]||0;return this.chart.renderer.fontMetrics(this.options.labels.style&&this.options.labels.style.fontSize,this.ticks[a]&&this.ticks[a].label)},unsquish:function(){var b=this.options.labels,d=this.horiz,f=this.tickInterval,e=f,c=this.len/(((this.categories?1:0)+this.max-this.min)/f),k,t=b.rotation,h=this.labelMetrics(),B,r=Number.MAX_VALUE,q,I=this.max-this.min,m=function(a){var b=a/(c||1);b=1<b?Math.ceil(b):1;b*f>I&&Infinity!==a&&Infinity!==c&&I&&(b=Math.ceil(I/
f));return g(b*f)};d?(q=!b.staggerLines&&!b.step&&(A(t)?[t]:c<v(b.autoRotationLimit,80)&&b.autoRotation))&&q.forEach(function(b){if(b===t||b&&-90<=b&&90>=b){B=m(Math.abs(h.h/Math.sin(a*b)));var d=B+Math.abs(b/360);d<r&&(r=d,k=b,e=B)}}):b.step||(e=m(h.h));this.autoRotation=q;this.labelRotation=v(k,t);return e},getSlotWidth:function(a){var b=this.chart,d=this.horiz,f=this.options.labels,e=Math.max(this.tickPositions.length-(this.categories?0:1),1),c=b.margin[3];return a&&a.slotWidth||d&&2>(f.step||
0)&&!f.rotation&&(this.staggerLines||1)*this.len/e||!d&&(f.style&&parseInt(f.style.width,10)||c&&c-b.spacing[3]||.33*b.chartWidth)},renderUnsquish:function(){var a=this.chart,b=a.renderer,d=this.tickPositions,f=this.ticks,e=this.options.labels,c=e&&e.style||{},k=this.horiz,t=this.getSlotWidth(),h=Math.max(1,Math.round(t-2*(e.padding||5))),B={},r=this.labelMetrics(),q=e.style&&e.style.textOverflow,v=0;z(e.rotation)||(B.rotation=e.rotation||0);d.forEach(function(a){(a=f[a])&&a.label&&a.label.textPxLength>
v&&(v=a.label.textPxLength)});this.maxLabelLength=v;if(this.autoRotation)v>h&&v>r.h?B.rotation=this.labelRotation:this.labelRotation=0;else if(t){var I=h;if(!q){var m="clip";for(h=d.length;!k&&h--;){var g=d[h];if(g=f[g].label)g.styles&&"ellipsis"===g.styles.textOverflow?g.css({textOverflow:"clip"}):g.textPxLength>t&&g.css({width:t+"px"}),g.getBBox().height>this.len/d.length-(r.h-r.f)&&(g.specificTextOverflow="ellipsis")}}}B.rotation&&(I=v>.5*a.chartHeight?.33*a.chartHeight:v,q||(m="ellipsis"));if(this.labelAlign=
e.align||this.autoLabelAlign(this.labelRotation))B.align=this.labelAlign;d.forEach(function(a){var b=(a=f[a])&&a.label,d=c.width,e={};b&&(b.attr(B),a.shortenLabel?a.shortenLabel():I&&!d&&"nowrap"!==c.whiteSpace&&(I<b.textPxLength||"SPAN"===b.element.tagName)?(e.width=I,q||(e.textOverflow=b.specificTextOverflow||m),b.css(e)):b.styles&&b.styles.width&&!e.width&&!d&&b.css({width:null}),delete b.specificTextOverflow,a.rotation=B.rotation)},this);this.tickRotCorr=b.rotCorr(r.b,this.labelRotation||0,0!==
this.side)},hasData:function(){return this.series.some(function(a){return a.hasData()})||this.options.showEmpty&&A(this.min)&&A(this.max)},addTitle:function(a){var b=this.chart.renderer,d=this.horiz,f=this.opposite,e=this.options.title,c,k=this.chart.styledMode;this.axisTitle||((c=e.textAlign)||(c=(d?{low:"left",middle:"center",high:"right"}:{low:f?"right":"left",middle:"center",high:f?"left":"right"})[e.align]),this.axisTitle=b.text(e.text,0,0,e.useHTML).attr({zIndex:7,rotation:e.rotation||0,align:c}).addClass("highcharts-axis-title"),
k||this.axisTitle.css(E(e.style)),this.axisTitle.add(this.axisGroup),this.axisTitle.isNew=!0);k||e.style.width||this.isRadial||this.axisTitle.css({width:this.len});this.axisTitle[a?"show":"hide"](a)},generateTick:function(a){var b=this.ticks;b[a]?b[a].addLabel():b[a]=new I(this,a)},getOffset:function(){var a=this,b=a.chart,d=b.renderer,f=a.options,c=a.tickPositions,k=a.ticks,t=a.horiz,h=a.side,B=b.inverted&&!a.isZAxis?[1,0,3,2][h]:h,r,q=0,I=0,m=f.title,g=f.labels,p=0,E=b.axisOffset;b=b.clipOffset;
var x=[-1,1,1,-1][h],z=f.className,y=a.axisParent;var n=a.hasData();a.showAxis=r=n||v(f.showEmpty,!0);a.staggerLines=a.horiz&&g.staggerLines;a.axisGroup||(a.gridGroup=d.g("grid").attr({zIndex:f.gridZIndex||1}).addClass("highcharts-"+this.coll.toLowerCase()+"-grid "+(z||"")).add(y),a.axisGroup=d.g("axis").attr({zIndex:f.zIndex||2}).addClass("highcharts-"+this.coll.toLowerCase()+" "+(z||"")).add(y),a.labelGroup=d.g("axis-labels").attr({zIndex:g.zIndex||7}).addClass("highcharts-"+a.coll.toLowerCase()+
"-labels "+(z||"")).add(y));n||a.isLinked?(c.forEach(function(b,d){a.generateTick(b,d)}),a.renderUnsquish(),a.reserveSpaceDefault=0===h||2===h||{1:"left",3:"right"}[h]===a.labelAlign,v(g.reserveSpace,"center"===a.labelAlign?!0:null,a.reserveSpaceDefault)&&c.forEach(function(a){p=Math.max(k[a].getLabelSize(),p)}),a.staggerLines&&(p*=a.staggerLines),a.labelOffset=p*(a.opposite?-1:1)):u(k,function(a,b){a.destroy();delete k[b]});if(m&&m.text&&!1!==m.enabled&&(a.addTitle(r),r&&!1!==m.reserveSpace)){a.titleOffset=
q=a.axisTitle.getBBox()[t?"height":"width"];var L=m.offset;I=A(L)?0:v(m.margin,t?5:10)}a.renderLine();a.offset=x*v(f.offset,E[h]?E[h]+(f.margin||0):0);a.tickRotCorr=a.tickRotCorr||{x:0,y:0};d=0===h?-a.labelMetrics().h:2===h?a.tickRotCorr.y:0;I=Math.abs(p)+I;p&&(I=I-d+x*(t?v(g.y,a.tickRotCorr.y+8*x):g.x));a.axisTitleMargin=v(L,I);a.getMaxLabelDimensions&&(a.maxLabelDimensions=a.getMaxLabelDimensions(k,c));t=this.tickSize("tick");E[h]=Math.max(E[h],a.axisTitleMargin+q+x*a.offset,I,c&&c.length&&t?t[0]+
x*a.offset:0);f=f.offset?0:2*Math.floor(a.axisLine.strokeWidth()/2);b[B]=Math.max(b[B],f);e(this,"afterGetOffset")},getLinePath:function(a){var b=this.chart,d=this.opposite,f=this.offset,e=this.horiz,c=this.left+(d?this.width:0)+f;f=b.chartHeight-this.bottom-(d?this.height:0)+f;d&&(a*=-1);return b.renderer.crispLine(["M",e?this.left:c,e?f:this.top,"L",e?b.chartWidth-this.right:c,e?f:b.chartHeight-this.bottom],a)},renderLine:function(){this.axisLine||(this.axisLine=this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup),
this.chart.styledMode||this.axisLine.attr({stroke:this.options.lineColor,"stroke-width":this.options.lineWidth,zIndex:7}))},getTitlePosition:function(){var a=this.horiz,b=this.left,d=this.top,f=this.len,c=this.options.title,k=a?b:d,t=this.opposite,h=this.offset,B=c.x||0,r=c.y||0,q=this.axisTitle,v=this.chart.renderer.fontMetrics(c.style&&c.style.fontSize,q);q=Math.max(q.getBBox(null,0).height-v.h-1,0);f={low:k+(a?0:f),middle:k+f/2,high:k+(a?f:0)}[c.align];b=(a?d+this.height:b)+(a?1:-1)*(t?-1:1)*this.axisTitleMargin+
[-q,q,v.f,-q][this.side];a={x:a?f+B:b+(t?this.width:0)+h+B,y:a?b+r-(t?this.height:0)+h:f+r};e(this,"afterGetTitlePosition",{titlePosition:a});return a},renderMinorTick:function(a){var b=this.chart.hasRendered&&F(this.oldMin),d=this.minorTicks;d[a]||(d[a]=new I(this,a,"minor"));b&&d[a].isNew&&d[a].render(null,!0);d[a].render(null,!1,1)},renderTick:function(a,b){var d=this.isLinked,f=this.ticks,e=this.chart.hasRendered&&F(this.oldMin);if(!d||a>=this.min&&a<=this.max)f[a]||(f[a]=new I(this,a)),e&&f[a].isNew&&
f[a].render(b,!0,-1),f[a].render(b)},render:function(){var a=this,b=a.chart,d=a.options,f=a.isLog,k=a.isLinked,t=a.tickPositions,h=a.axisTitle,r=a.ticks,q=a.minorTicks,v=a.alternateBands,m=d.stackLabels,g=d.alternateGridColor,p=a.tickmarkOffset,E=a.axisLine,x=a.showAxis,z=C(b.renderer.globalAnimation),y,n;a.labelEdge.length=0;a.overlap=!1;[r,q,v].forEach(function(a){u(a,function(a){a.isActive=!1})});if(a.hasData()||k)a.minorTickInterval&&!a.categories&&a.getMinorTickPositions().forEach(function(b){a.renderMinorTick(b)}),
t.length&&(t.forEach(function(b,d){a.renderTick(b,d)}),p&&(0===a.min||a.single)&&(r[-1]||(r[-1]=new I(a,-1,null,!0)),r[-1].render(-1))),g&&t.forEach(function(d,e){n=void 0!==t[e+1]?t[e+1]+p:a.max-p;0===e%2&&d<a.max&&n<=a.max+(b.polar?-p:p)&&(v[d]||(v[d]=new c.PlotLineOrBand(a)),y=d+p,v[d].options={from:f?a.lin2log(y):y,to:f?a.lin2log(n):n,color:g},v[d].render(),v[d].isActive=!0)}),a._addedPlotLB||((d.plotLines||[]).concat(d.plotBands||[]).forEach(function(b){a.addPlotBandOrLine(b)}),a._addedPlotLB=
!0);[r,q,v].forEach(function(a){var d,f=[],e=z.duration;u(a,function(a,b){a.isActive||(a.render(b,!1,0),a.isActive=!1,f.push(b))});B(function(){for(d=f.length;d--;)a[f[d]]&&!a[f[d]].isActive&&(a[f[d]].destroy(),delete a[f[d]])},a!==v&&b.hasRendered&&e?e:0)});E&&(E[E.isPlaced?"animate":"attr"]({d:this.getLinePath(E.strokeWidth())}),E.isPlaced=!0,E[x?"show":"hide"](x));h&&x&&(d=a.getTitlePosition(),F(d.y)?(h[h.isNew?"attr":"animate"](d),h.isNew=!1):(h.attr("y",-9999),h.isNew=!0));m&&m.enabled&&a.renderStackTotals();
a.isDirty=!1;e(this,"afterRender")},redraw:function(){this.visible&&(this.render(),this.plotLinesAndBands.forEach(function(a){a.render()}));this.series.forEach(function(a){a.isDirty=!0})},keepProps:"extKey hcEvents names series userMax userMin".split(" "),destroy:function(a){var b=this,f=b.stacks,c=b.plotLinesAndBands,t;e(this,"destroy",{keepEvents:a});a||k(b);u(f,function(a,b){d(a);f[b]=null});[b.ticks,b.minorTicks,b.alternateBands].forEach(function(a){d(a)});if(c)for(a=c.length;a--;)c[a].destroy();
"stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" ").forEach(function(a){b[a]&&(b[a]=b[a].destroy())});for(t in b.plotLinesAndBandsGroups)b.plotLinesAndBandsGroups[t]=b.plotLinesAndBandsGroups[t].destroy();u(b,function(a,d){-1===b.keepProps.indexOf(d)&&delete b[d]})},drawCrosshair:function(a,b){var d,f=this.crosshair,c=v(f.snap,!0),k,l=this.cross;e(this,"drawCrosshair",{e:a,point:b});a||(a=this.cross&&this.cross.e);if(this.crosshair&&!1!==(A(b)||!c)){c?A(b)&&
(k=v("colorAxis"!==this.coll?b.crosshairPos:null,this.isXAxis?b.plotX:this.len-b.plotY)):k=a&&(this.horiz?a.chartX-this.pos:this.len-a.chartY+this.pos);A(k)&&(d=this.getPlotLinePath({value:b&&(this.isXAxis?b.x:v(b.stackY,b.y)),translatedValue:k})||null);if(!A(d)){this.hideCrosshair();return}c=this.categories&&!this.isRadial;l||(this.cross=l=this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-"+(c?"category ":"thin ")+f.className).attr({zIndex:v(f.zIndex,2)}).add(),this.chart.styledMode||
(l.attr({stroke:f.color||(c?p("#ccd6eb").setOpacity(.25).get():"#cccccc"),"stroke-width":v(f.width,1)}).css({"pointer-events":"none"}),f.dashStyle&&l.attr({dashstyle:f.dashStyle})));l.show().attr({d:d});c&&!f.width&&l.attr({"stroke-width":this.transA});this.cross.e=a}else this.hideCrosshair();e(this,"afterDrawCrosshair",{e:a,point:b})},hideCrosshair:function(){this.cross&&this.cross.hide();e(this,"afterHideCrosshair")}});return c.Axis=n});N(H,"parts/DateTimeAxis.js",[H["parts/Globals.js"]],function(c){var n=
c.Axis,A=c.getMagnitude,D=c.normalizeTickInterval,F=c.timeUnits;n.prototype.getTimeTicks=function(){return this.chart.time.getTimeTicks.apply(this.chart.time,arguments)};n.prototype.normalizeTimeTickInterval=function(c,u){var z=u||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]];u=z[z.length-1];var y=F[u[0]],n=u[1],x;for(x=0;x<z.length&&!(u=z[x],y=F[u[0]],
n=u[1],z[x+1]&&c<=(y*n[n.length-1]+F[z[x+1][0]])/2);x++);y===F.year&&c<5*y&&(n=[1,2,5]);c=D(c/y,n,"year"===u[0]?Math.max(A(c/y),1):1);return{unitRange:y,count:c,unitName:u[0]}}});N(H,"parts/LogarithmicAxis.js",[H["parts/Globals.js"]],function(c){var n=c.Axis,A=c.getMagnitude,D=c.normalizeTickInterval,F=c.pick;n.prototype.getLogTickPositions=function(c,u,n,y){var z=this.options,x=this.len,m=[];y||(this._minorAutoInterval=null);if(.5<=c)c=Math.round(c),m=this.getLinearTickPositions(c,u,n);else if(.08<=
c){x=Math.floor(u);var p,g;for(z=.3<c?[1,2,4]:.15<c?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];x<n+1&&!g;x++){var b=z.length;for(p=0;p<b&&!g;p++){var a=this.log2lin(this.lin2log(x)*z[p]);a>u&&(!y||d<=n)&&void 0!==d&&m.push(d);d>n&&(g=!0);var d=a}}}else u=this.lin2log(u),n=this.lin2log(n),c=y?this.getMinorTickInterval():z.tickInterval,c=F("auto"===c?null:c,this._minorAutoInterval,z.tickPixelInterval/(y?5:1)*(n-u)/((y?x/this.tickPositions.length:x)||1)),c=D(c,null,A(c)),m=this.getLinearTickPositions(c,u,n).map(this.log2lin),
y||(this._minorAutoInterval=c/5);y||(this.tickInterval=c);return m};n.prototype.log2lin=function(c){return Math.log(c)/Math.LN10};n.prototype.lin2log=function(c){return Math.pow(10,c)}});N(H,"parts/PlotLineOrBand.js",[H["parts/Globals.js"],H["parts/Axis.js"],H["parts/Utilities.js"]],function(c,n,A){var D=A.defined,F=A.erase,z=A.objectEach,u=c.arrayMax,L=c.arrayMin,y=c.destroyObjectProperties,C=c.merge,x=c.pick;c.PlotLineOrBand=function(c,p){this.axis=c;p&&(this.options=p,this.id=p.id)};c.PlotLineOrBand.prototype=
{render:function(){c.fireEvent(this,"render");var m=this,p=m.axis,g=p.horiz,b=m.options,a=b.label,d=m.label,f=b.to,e=b.from,h=b.value,r=D(e)&&D(f),E=D(h),q=m.svgElem,v=!q,k=[],t=b.color,B=x(b.zIndex,0),I=b.events;k={"class":"highcharts-plot-"+(r?"band ":"line ")+(b.className||"")};var w={},l=p.chart.renderer,J=r?"bands":"lines";p.isLog&&(e=p.log2lin(e),f=p.log2lin(f),h=p.log2lin(h));p.chart.styledMode||(E?(k.stroke=t||"#999999",k["stroke-width"]=x(b.width,1),b.dashStyle&&(k.dashstyle=b.dashStyle)):
r&&(k.fill=t||"#e6ebf5",b.borderWidth&&(k.stroke=b.borderColor,k["stroke-width"]=b.borderWidth)));w.zIndex=B;J+="-"+B;(t=p.plotLinesAndBandsGroups[J])||(p.plotLinesAndBandsGroups[J]=t=l.g("plot-"+J).attr(w).add());v&&(m.svgElem=q=l.path().attr(k).add(t));if(E)k=p.getPlotLinePath({value:h,lineWidth:q.strokeWidth(),acrossPanes:b.acrossPanes});else if(r)k=p.getPlotBandPath(e,f,b);else return;(v||!q.d)&&k&&k.length?(q.attr({d:k}),I&&z(I,function(a,b){q.on(b,function(a){I[b].apply(m,[a])})})):q&&(k?(q.show(!0),
q.animate({d:k})):q.d&&(q.hide(),d&&(m.label=d=d.destroy())));a&&(D(a.text)||D(a.formatter))&&k&&k.length&&0<p.width&&0<p.height&&!k.isFlat?(a=C({align:g&&r&&"center",x:g?!r&&4:10,verticalAlign:!g&&r&&"middle",y:g?r?16:10:r?6:-4,rotation:g&&!r&&90},a),this.renderLabel(a,k,r,B)):d&&d.hide();return m},renderLabel:function(c,p,g,b){var a=this.label,d=this.axis.chart.renderer;a||(a={align:c.textAlign||c.align,rotation:c.rotation,"class":"highcharts-plot-"+(g?"band":"line")+"-label "+(c.className||"")},
a.zIndex=b,b=this.getLabelText(c),this.label=a=d.text(b,0,0,c.useHTML).attr(a).add(),this.axis.chart.styledMode||a.css(c.style));d=p.xBounds||[p[1],p[4],g?p[6]:p[1]];p=p.yBounds||[p[2],p[5],g?p[7]:p[2]];g=L(d);b=L(p);a.align(c,!1,{x:g,y:b,width:u(d)-g,height:u(p)-b});a.show(!0)},getLabelText:function(c){return D(c.formatter)?c.formatter.call(this):c.text},destroy:function(){F(this.axis.plotLinesAndBands,this);delete this.axis;y(this)}};c.extend(n.prototype,{getPlotBandPath:function(c,p){var g=this.getPlotLinePath({value:p,
force:!0,acrossPanes:this.options.acrossPanes}),b=this.getPlotLinePath({value:c,force:!0,acrossPanes:this.options.acrossPanes}),a=[],d=this.horiz,f=1;c=c<this.min&&p<this.min||c>this.max&&p>this.max;if(b&&g){if(c){var e=b.toString()===g.toString();f=0}for(c=0;c<b.length;c+=6)d&&g[c+1]===b[c+1]?(g[c+1]+=f,g[c+4]+=f):d||g[c+2]!==b[c+2]||(g[c+2]+=f,g[c+5]+=f),a.push("M",b[c+1],b[c+2],"L",b[c+4],b[c+5],g[c+4],g[c+5],g[c+1],g[c+2],"z"),a.isFlat=e}return a},addPlotBand:function(c){return this.addPlotBandOrLine(c,
"plotBands")},addPlotLine:function(c){return this.addPlotBandOrLine(c,"plotLines")},addPlotBandOrLine:function(m,p){var g=(new c.PlotLineOrBand(this,m)).render(),b=this.userOptions;if(g){if(p){var a=b[p]||[];a.push(m);b[p]=a}this.plotLinesAndBands.push(g)}return g},removePlotBandOrLine:function(c){for(var m=this.plotLinesAndBands,g=this.options,b=this.userOptions,a=m.length;a--;)m[a].id===c&&m[a].destroy();[g.plotLines||[],b.plotLines||[],g.plotBands||[],b.plotBands||[]].forEach(function(b){for(a=
b.length;a--;)b[a].id===c&&F(b,b[a])})},removePlotBand:function(c){this.removePlotBandOrLine(c)},removePlotLine:function(c){this.removePlotBandOrLine(c)}})});N(H,"parts/Tooltip.js",[H["parts/Globals.js"],H["parts/Utilities.js"]],function(c,n){var A=n.defined,D=n.isNumber,F=n.isString,z=n.splat;"";var u=c.doc,L=c.extend,y=c.format,C=c.merge,x=c.pick,m=c.syncTimeout,p=c.timeUnits;c.Tooltip=function(){this.init.apply(this,arguments)};c.Tooltip.prototype={init:function(c,b){this.chart=c;this.options=
b;this.crosshairs=[];this.now={x:0,y:0};this.isHidden=!0;this.split=b.split&&!c.inverted;this.shared=b.shared||this.split;this.outside=x(b.outside,!(!c.scrollablePixelsX&&!c.scrollablePixelsY))&&!this.split},cleanSplit:function(c){this.chart.series.forEach(function(b){var a=b&&b.tt;a&&(!a.isActive||c?b.tt=a.destroy():a.isActive=!1)})},applyFilter:function(){var c=this.chart;c.renderer.definition({tagName:"filter",id:"drop-shadow-"+c.index,opacity:.5,children:[{tagName:"feGaussianBlur","in":"SourceAlpha",
stdDeviation:1},{tagName:"feOffset",dx:1,dy:1},{tagName:"feComponentTransfer",children:[{tagName:"feFuncA",type:"linear",slope:.3}]},{tagName:"feMerge",children:[{tagName:"feMergeNode"},{tagName:"feMergeNode","in":"SourceGraphic"}]}]});c.renderer.definition({tagName:"style",textContent:".highcharts-tooltip-"+c.index+"{filter:url(#drop-shadow-"+c.index+")}"})},getLabel:function(){var g=this,b=this.chart.renderer,a=this.chart.styledMode,d=this.options,f="tooltip"+(A(d.className)?" "+d.className:""),
e;if(!this.label){this.outside&&(this.container=e=c.doc.createElement("div"),e.className="highcharts-tooltip-container",c.css(e,{position:"absolute",top:"1px",pointerEvents:d.style&&d.style.pointerEvents,zIndex:3}),c.doc.body.appendChild(e),this.renderer=b=new c.Renderer(e,0,0,{},void 0,void 0,b.styledMode));this.split?this.label=b.g(f):(this.label=b.label("",0,0,d.shape||"callout",null,null,d.useHTML,null,f).attr({padding:d.padding,r:d.borderRadius}),a||this.label.attr({fill:d.backgroundColor,"stroke-width":d.borderWidth}).css(d.style).shadow(d.shadow));
a&&(this.applyFilter(),this.label.addClass("highcharts-tooltip-"+this.chart.index));if(this.outside){var h={x:this.label.xSetter,y:this.label.ySetter};this.label.xSetter=function(a,b){h[b].call(this.label,g.distance);e.style.left=a+"px"};this.label.ySetter=function(a,b){h[b].call(this.label,g.distance);e.style.top=a+"px"}}this.label.attr({zIndex:8}).add()}return this.label},update:function(c){this.destroy();C(!0,this.chart.options.tooltip.userOptions,c);this.init(this.chart,C(!0,this.options,c))},
destroy:function(){this.label&&(this.label=this.label.destroy());this.split&&this.tt&&(this.cleanSplit(this.chart,!0),this.tt=this.tt.destroy());this.renderer&&(this.renderer=this.renderer.destroy(),c.discardElement(this.container));c.clearTimeout(this.hideTimer);c.clearTimeout(this.tooltipTimeout)},move:function(g,b,a,d){var f=this,e=f.now,h=!1!==f.options.animation&&!f.isHidden&&(1<Math.abs(g-e.x)||1<Math.abs(b-e.y)),r=f.followPointer||1<f.len;L(e,{x:h?(2*e.x+g)/3:g,y:h?(e.y+b)/2:b,anchorX:r?void 0:
h?(2*e.anchorX+a)/3:a,anchorY:r?void 0:h?(e.anchorY+d)/2:d});f.getLabel().attr(e);h&&(c.clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){f&&f.move(g,b,a,d)},32))},hide:function(g){var b=this;c.clearTimeout(this.hideTimer);g=x(g,this.options.hideDelay,500);this.isHidden||(this.hideTimer=m(function(){b.getLabel()[g?"fadeOut":"hide"]();b.isHidden=!0},g))},getAnchor:function(c,b){var a=this.chart,d=a.pointer,f=a.inverted,e=a.plotTop,h=a.plotLeft,r=0,g=0,q,v;c=z(c);this.followPointer&&
b?(void 0===b.chartX&&(b=d.normalize(b)),c=[b.chartX-a.plotLeft,b.chartY-e]):c[0].tooltipPos?c=c[0].tooltipPos:(c.forEach(function(a){q=a.series.yAxis;v=a.series.xAxis;r+=a.plotX+(!f&&v?v.left-h:0);g+=(a.plotLow?(a.plotLow+a.plotHigh)/2:a.plotY)+(!f&&q?q.top-e:0)}),r/=c.length,g/=c.length,c=[f?a.plotWidth-g:r,this.shared&&!f&&1<c.length&&b?b.chartY-e:f?a.plotHeight-r:g]);return c.map(Math.round)},getPosition:function(c,b,a){var d=this.chart,f=this.distance,e={},h=d.inverted&&a.h||0,r,g=this.outside,
q=g?u.documentElement.clientWidth-2*f:d.chartWidth,v=g?Math.max(u.body.scrollHeight,u.documentElement.scrollHeight,u.body.offsetHeight,u.documentElement.offsetHeight,u.documentElement.clientHeight):d.chartHeight,k=d.pointer.chartPosition,t=d.containerScaling,B=function(a){return t?a*t.scaleX:a},I=function(a){return t?a*t.scaleY:a},w=function(e){var l="x"===e;return[e,l?q:v,l?c:b].concat(g?[l?B(c):I(b),l?k.left-f+B(a.plotX+d.plotLeft):k.top-f+I(a.plotY+d.plotTop),0,l?q:v]:[l?c:b,l?a.plotX+d.plotLeft:
a.plotY+d.plotTop,l?d.plotLeft:d.plotTop,l?d.plotLeft+d.plotWidth:d.plotTop+d.plotHeight])},l=w("y"),m=w("x"),p=!this.followPointer&&x(a.ttBelow,!d.inverted===!!a.negative),n=function(a,b,d,c,k,l,t){var w="y"===a?I(f):B(f),r=(d-c)/2,q=c<k-f,v=k+f+c<b,g=k-w-d+r;k=k+w-r;if(p&&v)e[a]=k;else if(!p&&q)e[a]=g;else if(q)e[a]=Math.min(t-c,0>g-h?g:g-h);else if(v)e[a]=Math.max(l,k+h+d>b?k:k+h);else return!1},y=function(a,b,d,c,k){var l;k<f||k>b-f?l=!1:e[a]=k<d/2?1:k>b-c/2?b-c-2:k-d/2;return l},z=function(a){var b=
l;l=m;m=b;r=a},M=function(){!1!==n.apply(0,l)?!1!==y.apply(0,m)||r||(z(!0),M()):r?e.x=e.y=0:(z(!0),M())};(d.inverted||1<this.len)&&z();M();return e},defaultFormatter:function(c){var b=this.points||z(this);var a=[c.tooltipFooterHeaderFormatter(b[0])];a=a.concat(c.bodyFormatter(b));a.push(c.tooltipFooterHeaderFormatter(b[0],!0));return a},refresh:function(g,b){var a=this.chart,d=this.options,f=g,e={},h=[];var r=d.formatter||this.defaultFormatter;e=this.shared;var m=a.styledMode;if(d.enabled){c.clearTimeout(this.hideTimer);
this.followPointer=z(f)[0].series.tooltipOptions.followPointer;var q=this.getAnchor(f,b);b=q[0];var v=q[1];!e||f.series&&f.series.noSharedTooltip?e=f.getLabelConfig():(a.pointer.applyInactiveState(f),f.forEach(function(a){a.setState("hover");h.push(a.getLabelConfig())}),e={x:f[0].category,y:f[0].y},e.points=h,f=f[0]);this.len=h.length;r=r.call(e,this);e=f.series;this.distance=x(e.tooltipOptions.distance,16);!1===r?this.hide():(a=this.getLabel(),this.isHidden&&a.attr({opacity:1}).show(),this.split?
this.renderSplit(r,z(g)):(d.style.width&&!m||a.css({width:this.chart.spacingBox.width}),a.attr({text:r&&r.join?r.join(""):r}),a.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-"+x(f.colorIndex,e.colorIndex)),m||a.attr({stroke:d.borderColor||f.color||e.color||"#666666"}),this.updatePosition({plotX:b,plotY:v,negative:f.negative,ttBelow:f.ttBelow,h:q[2]||0})),this.isHidden=!1);c.fireEvent(this,"refresh")}},renderSplit:function(g,b){var a=this,d=[],f=this.chart,e=f.renderer,h=!0,r=this.options,
m=0,q,v=this.getLabel(),k=f.plotTop;F(g)&&(g=[!1,g]);g.slice(0,b.length+1).forEach(function(c,B){if(!1!==c&&""!==c){B=b[B-1]||{isHeader:!0,plotX:b[0].plotX,plotY:f.plotHeight};var t=B.series||a,w=t.tt,l=B.series||{},g="highcharts-color-"+x(B.colorIndex,l.colorIndex,"none");w||(w={padding:r.padding,r:r.borderRadius},f.styledMode||(w.fill=r.backgroundColor,w["stroke-width"]=r.borderWidth),t.tt=w=e.label(null,null,null,(B.isHeader?r.headerShape:r.shape)||"callout",null,null,r.useHTML).addClass("highcharts-tooltip-box "+
g).attr(w).add(v));w.isActive=!0;w.attr({text:c});f.styledMode||w.css(r.style).shadow(r.shadow).attr({stroke:r.borderColor||B.color||l.color||"#333333"});c=w.getBBox();g=c.width+w.strokeWidth();B.isHeader?(m=c.height,f.xAxis[0].opposite&&(q=!0,k-=m),c=Math.max(0,Math.min(B.plotX+f.plotLeft-g/2,f.chartWidth+(f.scrollablePixelsX?f.scrollablePixelsX-f.marginRight:0)-g))):c=B.plotX+f.plotLeft-x(r.distance,16)-g;0>c&&(h=!1);B.isHeader?l=q?-m:f.plotHeight+m:(l=l.yAxis,l=l.pos-k+Math.max(0,Math.min(B.plotY||
0,l.len)));d.push({target:l,rank:B.isHeader?1:0,size:t.tt.getBBox().height+1,point:B,x:c,tt:w})}});this.cleanSplit();r.positioner&&d.forEach(function(b){var d=r.positioner.call(a,b.tt.getBBox().width,b.size,b.point);b.x=d.x;b.align=0;b.target=d.y;b.rank=x(d.rank,b.rank)});c.distribute(d,f.plotHeight+m);d.forEach(function(b){var d=b.point,c=d.series,e=c&&c.yAxis;b.tt.attr({visibility:void 0===b.pos?"hidden":"inherit",x:h||d.isHeader||r.positioner?b.x:d.plotX+f.plotLeft+a.distance,y:b.pos+k,anchorX:d.isHeader?
d.plotX+f.plotLeft:d.plotX+c.xAxis.pos,anchorY:d.isHeader?f.plotTop+f.plotHeight/2:e.pos+Math.max(0,Math.min(d.plotY,e.len))})})},updatePosition:function(g){var b=this.chart,a=b.pointer,d=this.getLabel(),f=g.plotX+b.plotLeft,e=g.plotY+b.plotTop;a.chartPosition||(a.chartPosition=c.offset(b.container));g=(this.options.positioner||this.getPosition).call(this,d.width,d.height,g);if(this.outside){var h=(this.options.borderWidth||0)+2*this.distance;this.renderer.setSize(d.width+h,d.height+h,!1);if(b=b.containerScaling)c.css(this.container,
{transform:"scale("+b.scaleX+", "+b.scaleY+")"}),f*=b.scaleX,e*=b.scaleY;f+=a.chartPosition.left-g.x;e+=a.chartPosition.top-g.y}this.move(Math.round(g.x),Math.round(g.y||0),f,e)},getDateFormat:function(c,b,a,d){var f=this.chart.time,e=f.dateFormat("%m-%d %H:%M:%S.%L",b),h={millisecond:15,second:12,minute:9,hour:6,day:3},r="millisecond";for(g in p){if(c===p.week&&+f.dateFormat("%w",b)===a&&"00:00:00.000"===e.substr(6)){var g="week";break}if(p[g]>c){g=r;break}if(h[g]&&e.substr(h[g])!=="01-01 00:00:00.000".substr(h[g]))break;
"week"!==g&&(r=g)}if(g)var q=f.resolveDTLFormat(d[g]).main;return q},getXDateFormat:function(c,b,a){b=b.dateTimeLabelFormats;var d=a&&a.closestPointRange;return(d?this.getDateFormat(d,c.x,a.options.startOfWeek,b):b.day)||b.year},tooltipFooterHeaderFormatter:function(g,b){var a=b?"footer":"header",d=g.series,f=d.tooltipOptions,e=f.xDateFormat,h=d.xAxis,r=h&&"datetime"===h.options.type&&D(g.key),m=f[a+"Format"];b={isFooter:b,labelConfig:g};c.fireEvent(this,"headerFormatter",b,function(a){r&&!e&&(e=
this.getXDateFormat(g,f,h));r&&e&&(g.point&&g.point.tooltipDateKeys||["key"]).forEach(function(a){m=m.replace("{point."+a+"}","{point."+a+":"+e+"}")});d.chart.styledMode&&(m=this.styledModeFormat(m));a.text=y(m,{point:g,series:d},this.chart.time)});return b.text},bodyFormatter:function(c){return c.map(function(b){var a=b.series.tooltipOptions;return(a[(b.point.formatPrefix||"point")+"Formatter"]||b.point.tooltipFormatter).call(b.point,a[(b.point.formatPrefix||"point")+"Format"]||"")})},styledModeFormat:function(c){return c.replace('style="font-size: 10px"',
'class="highcharts-header"').replace(/style="color:{(point|series)\.color}"/g,'class="highcharts-color-{$1.colorIndex}"')}}});N(H,"parts/Pointer.js",[H["parts/Globals.js"],H["parts/Utilities.js"]],function(c,n){var A=n.attr,D=n.defined,F=n.isNumber,z=n.isObject,u=n.objectEach,L=n.splat,y=c.addEvent,C=c.charts,x=c.color,m=c.css,p=c.extend,g=c.find,b=c.fireEvent,a=c.offset,d=c.pick,f=c.Tooltip;c.Pointer=function(a,b){this.init(a,b)};c.Pointer.prototype={init:function(a,b){this.options=b;this.chart=
a;this.runChartClick=b.chart.events&&!!b.chart.events.click;this.pinchDown=[];this.lastValidTouch={};f&&(a.tooltip=new f(a,b.tooltip),this.followTouchMove=d(b.tooltip.followTouchMove,!0));this.setDOMEvents()},zoomOption:function(a){var b=this.chart,c=b.options.chart,f=c.zoomType||"";b=b.inverted;/touch/.test(a.type)&&(f=d(c.pinchType,f));this.zoomX=a=/x/.test(f);this.zoomY=f=/y/.test(f);this.zoomHor=a&&!b||f&&b;this.zoomVert=f&&!b||a&&b;this.hasZoom=a||f},normalize:function(b,d){var c=b.touches?b.touches.length?
b.touches.item(0):b.changedTouches[0]:b;d||(this.chartPosition=d=a(this.chart.container));var f=c.pageX-d.left;d=c.pageY-d.top;if(c=this.chart.containerScaling)f/=c.scaleX,d/=c.scaleY;return p(b,{chartX:Math.round(f),chartY:Math.round(d)})},getCoordinates:function(a){var b={xAxis:[],yAxis:[]};this.chart.axes.forEach(function(d){b[d.isXAxis?"xAxis":"yAxis"].push({axis:d,value:d.toValue(a[d.horiz?"chartX":"chartY"])})});return b},findNearestKDPoint:function(a,b,d){var c;a.forEach(function(a){var f=
!(a.noSharedTooltip&&b)&&0>a.options.findNearestPointBy.indexOf("y");a=a.searchPoint(d,f);if((f=z(a,!0))&&!(f=!z(c,!0))){f=c.distX-a.distX;var e=c.dist-a.dist,t=(a.series.group&&a.series.group.zIndex)-(c.series.group&&c.series.group.zIndex);f=0<(0!==f&&b?f:0!==e?e:0!==t?t:c.series.index>a.series.index?-1:1)}f&&(c=a)});return c},getPointFromEvent:function(a){a=a.target;for(var b;a&&!b;)b=a.point,a=a.parentNode;return b},getChartCoordinatesFromPoint:function(a,b){var c=a.series,f=c.xAxis;c=c.yAxis;
var e=d(a.clientX,a.plotX),h=a.shapeArgs;if(f&&c)return b?{chartX:f.len+f.pos-e,chartY:c.len+c.pos-a.plotY}:{chartX:e+f.pos,chartY:a.plotY+c.pos};if(h&&h.x&&h.y)return{chartX:h.x,chartY:h.y}},getHoverData:function(a,b,c,f,q,v){var e,t=[];f=!(!f||!a);var h=b&&!b.stickyTracking?[b]:c.filter(function(a){return a.visible&&!(!q&&a.directTouch)&&d(a.options.enableMouseTracking,!0)&&a.stickyTracking});b=(e=f||!v?a:this.findNearestKDPoint(h,q,v))&&e.series;e&&(q&&!b.noSharedTooltip?(h=c.filter(function(a){return a.visible&&
!(!q&&a.directTouch)&&d(a.options.enableMouseTracking,!0)&&!a.noSharedTooltip}),h.forEach(function(a){var b=g(a.points,function(a){return a.x===e.x&&!a.isNull});z(b)&&(a.chart.isBoosting&&(b=a.getPoint(b)),t.push(b))})):t.push(e));return{hoverPoint:e,hoverSeries:b,hoverPoints:t}},runPointActions:function(a,b){var f=this.chart,e=f.tooltip&&f.tooltip.options.enabled?f.tooltip:void 0,h=e?e.shared:!1,v=b||f.hoverPoint,k=v&&v.series||f.hoverSeries;k=this.getHoverData(v,k,f.series,(!a||"touchmove"!==a.type)&&
(!!b||k&&k.directTouch&&this.isDirectTouch),h,a);v=k.hoverPoint;var t=k.hoverPoints;b=(k=k.hoverSeries)&&k.tooltipOptions.followPointer;h=h&&k&&!k.noSharedTooltip;if(v&&(v!==f.hoverPoint||e&&e.isHidden)){(f.hoverPoints||[]).forEach(function(a){-1===t.indexOf(a)&&a.setState()});if(f.hoverSeries!==k)k.onMouseOver();this.applyInactiveState(t);(t||[]).forEach(function(a){a.setState("hover")});f.hoverPoint&&f.hoverPoint.firePointEvent("mouseOut");if(!v.series)return;v.firePointEvent("mouseOver");f.hoverPoints=
t;f.hoverPoint=v;e&&e.refresh(h?t:v,a)}else b&&e&&!e.isHidden&&(v=e.getAnchor([{}],a),e.updatePosition({plotX:v[0],plotY:v[1]}));this.unDocMouseMove||(this.unDocMouseMove=y(f.container.ownerDocument,"mousemove",function(a){var b=C[c.hoverChartIndex];if(b)b.pointer.onDocumentMouseMove(a)}));f.axes.forEach(function(b){var f=d(b.crosshair.snap,!0),e=f?c.find(t,function(a){return a.series[b.coll]===b}):void 0;e||!f?b.drawCrosshair(a,e):b.hideCrosshair()})},applyInactiveState:function(a){var b=[],d;(a||
[]).forEach(function(a){d=a.series;b.push(d);d.linkedParent&&b.push(d.linkedParent);d.linkedSeries&&(b=b.concat(d.linkedSeries));d.navigatorSeries&&b.push(d.navigatorSeries)});this.chart.series.forEach(function(a){-1===b.indexOf(a)?a.setState("inactive",!0):a.options.inactiveOtherPoints&&a.setAllPointsToState("inactive")})},reset:function(a,b){var d=this.chart,c=d.hoverSeries,f=d.hoverPoint,e=d.hoverPoints,k=d.tooltip,t=k&&k.shared?e:f;a&&t&&L(t).forEach(function(b){b.series.isCartesian&&void 0===
b.plotX&&(a=!1)});if(a)k&&t&&L(t).length&&(k.refresh(t),k.shared&&e?e.forEach(function(a){a.setState(a.state,!0);a.series.isCartesian&&(a.series.xAxis.crosshair&&a.series.xAxis.drawCrosshair(null,a),a.series.yAxis.crosshair&&a.series.yAxis.drawCrosshair(null,a))}):f&&(f.setState(f.state,!0),d.axes.forEach(function(a){a.crosshair&&a.drawCrosshair(null,f)})));else{if(f)f.onMouseOut();e&&e.forEach(function(a){a.setState()});if(c)c.onMouseOut();k&&k.hide(b);this.unDocMouseMove&&(this.unDocMouseMove=this.unDocMouseMove());
d.axes.forEach(function(a){a.hideCrosshair()});this.hoverX=d.hoverPoints=d.hoverPoint=null}},scaleGroups:function(a,b){var d=this.chart,c;d.series.forEach(function(f){c=a||f.getPlotBox();f.xAxis&&f.xAxis.zoomEnabled&&f.group&&(f.group.attr(c),f.markerGroup&&(f.markerGroup.attr(c),f.markerGroup.clip(b?d.clipRect:null)),f.dataLabelsGroup&&f.dataLabelsGroup.attr(c))});d.clipRect.attr(b||d.clipBox)},dragStart:function(a){var b=this.chart;b.mouseIsDown=a.type;b.cancelClick=!1;b.mouseDownX=this.mouseDownX=
a.chartX;b.mouseDownY=this.mouseDownY=a.chartY},drag:function(a){var b=this.chart,d=b.options.chart,c=a.chartX,f=a.chartY,e=this.zoomHor,k=this.zoomVert,t=b.plotLeft,B=b.plotTop,I=b.plotWidth,w=b.plotHeight,l=this.selectionMarker,g=this.mouseDownX,m=this.mouseDownY,p=d.panKey&&a[d.panKey+"Key"];if(!l||!l.touch)if(c<t?c=t:c>t+I&&(c=t+I),f<B?f=B:f>B+w&&(f=B+w),this.hasDragged=Math.sqrt(Math.pow(g-c,2)+Math.pow(m-f,2)),10<this.hasDragged){var u=b.isInsidePlot(g-t,m-B);b.hasCartesianSeries&&(this.zoomX||
this.zoomY)&&u&&!p&&!l&&(this.selectionMarker=l=b.renderer.rect(t,B,e?1:I,k?1:w,0).attr({"class":"highcharts-selection-marker",zIndex:7}).add(),b.styledMode||l.attr({fill:d.selectionMarkerFill||x("#335cad").setOpacity(.25).get()}));l&&e&&(c-=g,l.attr({width:Math.abs(c),x:(0<c?0:c)+g}));l&&k&&(c=f-m,l.attr({height:Math.abs(c),y:(0<c?0:c)+m}));u&&!l&&d.panning&&b.pan(a,d.panning)}},drop:function(a){var d=this,c=this.chart,f=this.hasPinched;if(this.selectionMarker){var e={originalEvent:a,xAxis:[],yAxis:[]},
v=this.selectionMarker,k=v.attr?v.attr("x"):v.x,t=v.attr?v.attr("y"):v.y,B=v.attr?v.attr("width"):v.width,I=v.attr?v.attr("height"):v.height,w;if(this.hasDragged||f)c.axes.forEach(function(b){if(b.zoomEnabled&&D(b.min)&&(f||d[{xAxis:"zoomX",yAxis:"zoomY"}[b.coll]])){var c=b.horiz,l="touchend"===a.type?b.minPixelPadding:0,h=b.toValue((c?k:t)+l);c=b.toValue((c?k+B:t+I)-l);e[b.coll].push({axis:b,min:Math.min(h,c),max:Math.max(h,c)});w=!0}}),w&&b(c,"selection",e,function(a){c.zoom(p(a,f?{animation:!1}:
null))});F(c.index)&&(this.selectionMarker=this.selectionMarker.destroy());f&&this.scaleGroups()}c&&F(c.index)&&(m(c.container,{cursor:c._cursor}),c.cancelClick=10<this.hasDragged,c.mouseIsDown=this.hasDragged=this.hasPinched=!1,this.pinchDown=[])},onContainerMouseDown:function(a){a=this.normalize(a);2!==a.button&&(this.zoomOption(a),a.preventDefault&&a.preventDefault(),this.dragStart(a))},onDocumentMouseUp:function(a){C[c.hoverChartIndex]&&C[c.hoverChartIndex].pointer.drop(a)},onDocumentMouseMove:function(a){var b=
this.chart,d=this.chartPosition;a=this.normalize(a,d);!d||this.inClass(a.target,"highcharts-tracker")||b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)||this.reset()},onContainerMouseLeave:function(a){var b=C[c.hoverChartIndex];b&&(a.relatedTarget||a.toElement)&&(b.pointer.reset(),b.pointer.chartPosition=null)},onContainerMouseMove:function(a){var b=this.chart;D(c.hoverChartIndex)&&C[c.hoverChartIndex]&&C[c.hoverChartIndex].mouseIsDown||(c.hoverChartIndex=b.index);a=this.normalize(a);a.preventDefault||
(a.returnValue=!1);"mousedown"===b.mouseIsDown&&this.drag(a);!this.inClass(a.target,"highcharts-tracker")&&!b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)||b.openMenu||this.runPointActions(a)},inClass:function(a,b){for(var d;a;){if(d=A(a,"class")){if(-1!==d.indexOf(b))return!0;if(-1!==d.indexOf("highcharts-container"))return!1}a=a.parentNode}},onTrackerMouseOut:function(a){var b=this.chart.hoverSeries;a=a.relatedTarget||a.toElement;this.isDirectTouch=!1;if(!(!b||!a||b.stickyTracking||this.inClass(a,
"highcharts-tooltip")||this.inClass(a,"highcharts-series-"+b.index)&&this.inClass(a,"highcharts-tracker")))b.onMouseOut()},onContainerClick:function(a){var d=this.chart,c=d.hoverPoint,f=d.plotLeft,e=d.plotTop;a=this.normalize(a);d.cancelClick||(c&&this.inClass(a.target,"highcharts-tracker")?(b(c.series,"click",p(a,{point:c})),d.hoverPoint&&c.firePointEvent("click",a)):(p(a,this.getCoordinates(a)),d.isInsidePlot(a.chartX-f,a.chartY-e)&&b(d,"click",a)))},setDOMEvents:function(){var a=this,b=a.chart.container,
d=b.ownerDocument;b.onmousedown=function(b){a.onContainerMouseDown(b)};b.onmousemove=function(b){a.onContainerMouseMove(b)};b.onclick=function(b){a.onContainerClick(b)};this.unbindContainerMouseLeave=y(b,"mouseleave",a.onContainerMouseLeave);c.unbindDocumentMouseUp||(c.unbindDocumentMouseUp=y(d,"mouseup",a.onDocumentMouseUp));c.hasTouch&&(y(b,"touchstart",function(b){a.onContainerTouchStart(b)}),y(b,"touchmove",function(b){a.onContainerTouchMove(b)}),c.unbindDocumentTouchEnd||(c.unbindDocumentTouchEnd=
y(d,"touchend",a.onDocumentTouchEnd)))},destroy:function(){var a=this;a.unDocMouseMove&&a.unDocMouseMove();this.unbindContainerMouseLeave();c.chartCount||(c.unbindDocumentMouseUp&&(c.unbindDocumentMouseUp=c.unbindDocumentMouseUp()),c.unbindDocumentTouchEnd&&(c.unbindDocumentTouchEnd=c.unbindDocumentTouchEnd()));clearInterval(a.tooltipTimeout);u(a,function(b,d){a[d]=null})}}});N(H,"parts/TouchPointer.js",[H["parts/Globals.js"]],function(c){var n=c.charts,A=c.extend,D=c.noop,F=c.pick;A(c.Pointer.prototype,
{pinchTranslate:function(c,u,n,y,A,x){this.zoomHor&&this.pinchTranslateDirection(!0,c,u,n,y,A,x);this.zoomVert&&this.pinchTranslateDirection(!1,c,u,n,y,A,x)},pinchTranslateDirection:function(c,u,n,y,A,x,m,p){var g=this.chart,b=c?"x":"y",a=c?"X":"Y",d="chart"+a,f=c?"width":"height",e=g["plot"+(c?"Left":"Top")],h,r,E=p||1,q=g.inverted,v=g.bounds[c?"h":"v"],k=1===u.length,t=u[0][d],B=n[0][d],I=!k&&u[1][d],w=!k&&n[1][d];n=function(){!k&&20<Math.abs(t-I)&&(E=p||Math.abs(B-w)/Math.abs(t-I));r=(e-B)/E+t;
h=g["plot"+(c?"Width":"Height")]/E};n();u=r;if(u<v.min){u=v.min;var l=!0}else u+h>v.max&&(u=v.max-h,l=!0);l?(B-=.8*(B-m[b][0]),k||(w-=.8*(w-m[b][1])),n()):m[b]=[B,w];q||(x[b]=r-e,x[f]=h);x=q?1/E:E;A[f]=h;A[b]=u;y[q?c?"scaleY":"scaleX":"scale"+a]=E;y["translate"+a]=x*e+(B-x*t)},pinch:function(c){var u=this,n=u.chart,y=u.pinchDown,z=c.touches,x=z.length,m=u.lastValidTouch,p=u.hasZoom,g=u.selectionMarker,b={},a=1===x&&(u.inClass(c.target,"highcharts-tracker")&&n.runTrackerClick||u.runChartClick),d={};
1<x&&(u.initiated=!0);p&&u.initiated&&!a&&c.preventDefault();[].map.call(z,function(a){return u.normalize(a)});"touchstart"===c.type?([].forEach.call(z,function(a,b){y[b]={chartX:a.chartX,chartY:a.chartY}}),m.x=[y[0].chartX,y[1]&&y[1].chartX],m.y=[y[0].chartY,y[1]&&y[1].chartY],n.axes.forEach(function(a){if(a.zoomEnabled){var b=n.bounds[a.horiz?"h":"v"],d=a.minPixelPadding,c=a.toPixels(Math.min(F(a.options.min,a.dataMin),a.dataMin)),f=a.toPixels(Math.max(F(a.options.max,a.dataMax),a.dataMax)),q=Math.max(c,
f);b.min=Math.min(a.pos,Math.min(c,f)-d);b.max=Math.max(a.pos+a.len,q+d)}}),u.res=!0):u.followTouchMove&&1===x?this.runPointActions(u.normalize(c)):y.length&&(g||(u.selectionMarker=g=A({destroy:D,touch:!0},n.plotBox)),u.pinchTranslate(y,z,b,g,d,m),u.hasPinched=p,u.scaleGroups(b,d),u.res&&(u.res=!1,this.reset(!1,0)))},touch:function(n,u){var z=this.chart,y;if(z.index!==c.hoverChartIndex)this.onContainerMouseLeave({relatedTarget:!0});c.hoverChartIndex=z.index;if(1===n.touches.length)if(n=this.normalize(n),
(y=z.isInsidePlot(n.chartX-z.plotLeft,n.chartY-z.plotTop))&&!z.openMenu){u&&this.runPointActions(n);if("touchmove"===n.type){u=this.pinchDown;var A=u[0]?4<=Math.sqrt(Math.pow(u[0].chartX-n.chartX,2)+Math.pow(u[0].chartY-n.chartY,2)):!1}F(A,!0)&&this.pinch(n)}else u&&this.reset();else 2===n.touches.length&&this.pinch(n)},onContainerTouchStart:function(c){this.zoomOption(c);this.touch(c,!0)},onContainerTouchMove:function(c){this.touch(c)},onDocumentTouchEnd:function(z){n[c.hoverChartIndex]&&n[c.hoverChartIndex].pointer.drop(z)}})});
N(H,"parts/MSPointer.js",[H["parts/Globals.js"],H["parts/Utilities.js"]],function(c,n){var A=n.objectEach,D=c.addEvent,F=c.charts,z=c.css,u=c.doc;n=c.extend;var L=c.noop,y=c.Pointer,C=c.removeEvent,x=c.win,m=c.wrap;if(!c.hasTouch&&(x.PointerEvent||x.MSPointerEvent)){var p={},g=!!x.PointerEvent,b=function(){var a=[];a.item=function(a){return this[a]};A(p,function(b){a.push({pageX:b.pageX,pageY:b.pageY,target:b.target})});return a},a=function(a,f,e,h){"touch"!==a.pointerType&&a.pointerType!==a.MSPOINTER_TYPE_TOUCH||
!F[c.hoverChartIndex]||(h(a),h=F[c.hoverChartIndex].pointer,h[f]({type:e,target:a.currentTarget,preventDefault:L,touches:b()}))};n(y.prototype,{onContainerPointerDown:function(b){a(b,"onContainerTouchStart","touchstart",function(a){p[a.pointerId]={pageX:a.pageX,pageY:a.pageY,target:a.currentTarget}})},onContainerPointerMove:function(b){a(b,"onContainerTouchMove","touchmove",function(a){p[a.pointerId]={pageX:a.pageX,pageY:a.pageY};p[a.pointerId].target||(p[a.pointerId].target=a.currentTarget)})},onDocumentPointerUp:function(b){a(b,
"onDocumentTouchEnd","touchend",function(a){delete p[a.pointerId]})},batchMSEvents:function(a){a(this.chart.container,g?"pointerdown":"MSPointerDown",this.onContainerPointerDown);a(this.chart.container,g?"pointermove":"MSPointerMove",this.onContainerPointerMove);a(u,g?"pointerup":"MSPointerUp",this.onDocumentPointerUp)}});m(y.prototype,"init",function(a,b,c){a.call(this,b,c);this.hasZoom&&z(b.container,{"-ms-touch-action":"none","touch-action":"none"})});m(y.prototype,"setDOMEvents",function(a){a.apply(this);
(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(D)});m(y.prototype,"destroy",function(a){this.batchMSEvents(C);a.call(this)})}});N(H,"parts/Legend.js",[H["parts/Globals.js"],H["parts/Utilities.js"]],function(c,n){var A=n.defined,D=n.isNumber,F=c.addEvent,z=c.css,u=c.discardElement,L=c.fireEvent;n=c.isFirefox;var y=c.marginNames,C=c.merge,x=c.pick,m=c.setAnimation,p=c.stableSort,g=c.win,b=c.wrap;c.Legend=function(a,b){this.init(a,b)};c.Legend.prototype={init:function(a,b){this.chart=a;this.setOptions(b);
b.enabled&&(this.render(),F(this.chart,"endResize",function(){this.legend.positionCheckboxes()}),this.proximate?this.unchartrender=F(this.chart,"render",function(){this.legend.proximatePositions();this.legend.positionItems()}):this.unchartrender&&this.unchartrender())},setOptions:function(a){var b=x(a.padding,8);this.options=a;this.chart.styledMode||(this.itemStyle=a.itemStyle,this.itemHiddenStyle=C(this.itemStyle,a.itemHiddenStyle));this.itemMarginTop=a.itemMarginTop||0;this.padding=b;this.initialItemY=
b-5;this.symbolWidth=x(a.symbolWidth,16);this.pages=[];this.proximate="proximate"===a.layout&&!this.chart.inverted},update:function(a,b){var d=this.chart;this.setOptions(C(!0,this.options,a));this.destroy();d.isDirtyLegend=d.isDirtyBox=!0;x(b,!0)&&d.redraw();L(this,"afterUpdate")},colorizeItem:function(a,b){a.legendGroup[b?"removeClass":"addClass"]("highcharts-legend-item-hidden");if(!this.chart.styledMode){var d=this.options,c=a.legendItem,h=a.legendLine,r=a.legendSymbol,g=this.itemHiddenStyle.color;
d=b?d.itemStyle.color:g;var q=b?a.color||g:g,v=a.options&&a.options.marker,k={fill:q};c&&c.css({fill:d,color:d});h&&h.attr({stroke:q});r&&(v&&r.isMarker&&(k=a.pointAttribs(),b||(k.stroke=k.fill=g)),r.attr(k))}L(this,"afterColorizeItem",{item:a,visible:b})},positionItems:function(){this.allItems.forEach(this.positionItem,this);this.chart.isResizing||this.positionCheckboxes()},positionItem:function(a){var b=this.options,c=b.symbolPadding;b=!b.rtl;var e=a._legendItemPos,h=e[0];e=e[1];var r=a.checkbox;
if((a=a.legendGroup)&&a.element)a[A(a.translateY)?"animate":"attr"]({translateX:b?h:this.legendWidth-h-2*c-4,translateY:e});r&&(r.x=h,r.y=e)},destroyItem:function(a){var b=a.checkbox;["legendItem","legendLine","legendSymbol","legendGroup"].forEach(function(b){a[b]&&(a[b]=a[b].destroy())});b&&u(a.checkbox)},destroy:function(){function a(a){this[a]&&(this[a]=this[a].destroy())}this.getAllItems().forEach(function(b){["legendItem","legendGroup"].forEach(a,b)});"clipRect up down pager nav box title group".split(" ").forEach(a,
this);this.display=null},positionCheckboxes:function(){var a=this.group&&this.group.alignAttr,b=this.clipHeight||this.legendHeight,c=this.titleHeight;if(a){var e=a.translateY;this.allItems.forEach(function(d){var f=d.checkbox;if(f){var h=e+c+f.y+(this.scrollOffset||0)+3;z(f,{left:a.translateX+d.checkboxOffset+f.x-20+"px",top:h+"px",display:this.proximate||h>e-6&&h<e+b-6?"":"none"})}},this)}},renderTitle:function(){var a=this.options,b=this.padding,c=a.title,e=0;c.text&&(this.title||(this.title=this.chart.renderer.label(c.text,
b-3,b-4,null,null,null,a.useHTML,null,"legend-title").attr({zIndex:1}),this.chart.styledMode||this.title.css(c.style),this.title.add(this.group)),c.width||this.title.css({width:this.maxLegendWidth+"px"}),a=this.title.getBBox(),e=a.height,this.offsetWidth=a.width,this.contentGroup.attr({translateY:e}));this.titleHeight=e},setText:function(a){var b=this.options;a.legendItem.attr({text:b.labelFormat?c.format(b.labelFormat,a,this.chart.time):b.labelFormatter.call(a)})},renderItem:function(a){var b=this.chart,
c=b.renderer,e=this.options,h=this.symbolWidth,r=e.symbolPadding,g=this.itemStyle,q=this.itemHiddenStyle,v="horizontal"===e.layout?x(e.itemDistance,20):0,k=!e.rtl,t=a.legendItem,B=!a.series,I=!B&&a.series.drawLegendSymbol?a.series:a,w=I.options;w=this.createCheckboxForItem&&w&&w.showCheckbox;v=h+r+v+(w?20:0);var l=e.useHTML,m=a.options.className;t||(a.legendGroup=c.g("legend-item").addClass("highcharts-"+I.type+"-series highcharts-color-"+a.colorIndex+(m?" "+m:"")+(B?" highcharts-series-"+a.index:
"")).attr({zIndex:1}).add(this.scrollGroup),a.legendItem=t=c.text("",k?h+r:-r,this.baseline||0,l),b.styledMode||t.css(C(a.visible?g:q)),t.attr({align:k?"left":"right",zIndex:2}).add(a.legendGroup),this.baseline||(this.fontMetrics=c.fontMetrics(b.styledMode?12:g.fontSize,t),this.baseline=this.fontMetrics.f+3+this.itemMarginTop,t.attr("y",this.baseline)),this.symbolHeight=e.symbolHeight||this.fontMetrics.f,I.drawLegendSymbol(this,a),this.setItemEvents&&this.setItemEvents(a,t,l));w&&!a.checkbox&&this.createCheckboxForItem(a);
this.colorizeItem(a,a.visible);!b.styledMode&&g.width||t.css({width:(e.itemWidth||this.widthOption||b.spacingBox.width)-v});this.setText(a);b=t.getBBox();a.itemWidth=a.checkboxOffset=e.itemWidth||a.legendItemWidth||b.width+v;this.maxItemWidth=Math.max(this.maxItemWidth,a.itemWidth);this.totalItemWidth+=a.itemWidth;this.itemHeight=a.itemHeight=Math.round(a.legendItemHeight||b.height||this.symbolHeight)},layoutItem:function(a){var b=this.options,c=this.padding,e="horizontal"===b.layout,h=a.itemHeight,
g=b.itemMarginBottom||0,m=this.itemMarginTop,q=e?x(b.itemDistance,20):0,v=this.maxLegendWidth;b=b.alignColumns&&this.totalItemWidth>v?this.maxItemWidth:a.itemWidth;e&&this.itemX-c+b>v&&(this.itemX=c,this.lastLineHeight&&(this.itemY+=m+this.lastLineHeight+g),this.lastLineHeight=0);this.lastItemY=m+this.itemY+g;this.lastLineHeight=Math.max(h,this.lastLineHeight);a._legendItemPos=[this.itemX,this.itemY];e?this.itemX+=b:(this.itemY+=m+h+g,this.lastLineHeight=h);this.offsetWidth=this.widthOption||Math.max((e?
this.itemX-c-(a.checkbox?0:q):b)+c,this.offsetWidth)},getAllItems:function(){var a=[];this.chart.series.forEach(function(b){var d=b&&b.options;b&&x(d.showInLegend,A(d.linkedTo)?!1:void 0,!0)&&(a=a.concat(b.legendItems||("point"===d.legendType?b.data:b)))});L(this,"afterGetAllItems",{allItems:a});return a},getAlignment:function(){var a=this.options;return this.proximate?a.align.charAt(0)+"tv":a.floating?"":a.align.charAt(0)+a.verticalAlign.charAt(0)+a.layout.charAt(0)},adjustMargins:function(a,b){var d=
this.chart,c=this.options,h=this.getAlignment();h&&[/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/].forEach(function(f,e){f.test(h)&&!A(a[e])&&(d[y[e]]=Math.max(d[y[e]],d.legend[(e+1)%2?"legendHeight":"legendWidth"]+[1,-1,-1,1][e]*c[e%2?"x":"y"]+x(c.margin,12)+b[e]+(d.titleOffset[e]||0)))})},proximatePositions:function(){var a=this.chart,b=[],f="left"===this.options.align;this.allItems.forEach(function(d){var e=f;if(d.yAxis&&d.points){d.xAxis.options.reversed&&(e=!e);var g=c.find(e?d.points:
d.points.slice(0).reverse(),function(a){return D(a.plotY)});e=d.legendGroup.getBBox().height;var m=d.yAxis.top-a.plotTop;d.visible?(g=g?g.plotY:d.yAxis.height,g+=m-.3*e):g=m+d.yAxis.height;b.push({target:g,size:e,item:d})}},this);c.distribute(b,a.plotHeight);b.forEach(function(b){b.item._legendItemPos[1]=a.plotTop-a.spacing[0]+b.pos})},render:function(){var a=this.chart,b=a.renderer,f=this.group,e,h=this.box,g=this.options,m=this.padding;this.itemX=m;this.itemY=this.initialItemY;this.lastItemY=this.offsetWidth=
0;this.widthOption=c.relativeLength(g.width,a.spacingBox.width-m);var q=a.spacingBox.width-2*m-g.x;-1<["rm","lm"].indexOf(this.getAlignment().substring(0,2))&&(q/=2);this.maxLegendWidth=this.widthOption||q;f||(this.group=f=b.g("legend").attr({zIndex:7}).add(),this.contentGroup=b.g().attr({zIndex:1}).add(f),this.scrollGroup=b.g().add(this.contentGroup));this.renderTitle();q=this.getAllItems();p(q,function(a,b){return(a.options&&a.options.legendIndex||0)-(b.options&&b.options.legendIndex||0)});g.reversed&&
q.reverse();this.allItems=q;this.display=e=!!q.length;this.itemHeight=this.totalItemWidth=this.maxItemWidth=this.lastLineHeight=0;q.forEach(this.renderItem,this);q.forEach(this.layoutItem,this);q=(this.widthOption||this.offsetWidth)+m;var v=this.lastItemY+this.lastLineHeight+this.titleHeight;v=this.handleOverflow(v);v+=m;h||(this.box=h=b.rect().addClass("highcharts-legend-box").attr({r:g.borderRadius}).add(f),h.isNew=!0);a.styledMode||h.attr({stroke:g.borderColor,"stroke-width":g.borderWidth||0,fill:g.backgroundColor||
"none"}).shadow(g.shadow);0<q&&0<v&&(h[h.isNew?"attr":"animate"](h.crisp.call({},{x:0,y:0,width:q,height:v},h.strokeWidth())),h.isNew=!1);h[e?"show":"hide"]();a.styledMode&&"none"===f.getStyle("display")&&(q=v=0);this.legendWidth=q;this.legendHeight=v;e&&(b=a.spacingBox,h=b.y,/(lth|ct|rth)/.test(this.getAlignment())&&0<a.titleOffset[0]?h+=a.titleOffset[0]:/(lbh|cb|rbh)/.test(this.getAlignment())&&0<a.titleOffset[2]&&(h-=a.titleOffset[2]),h!==b.y&&(b=C(b,{y:h})),f.align(C(g,{width:q,height:v,verticalAlign:this.proximate?
"top":g.verticalAlign}),!0,b));this.proximate||this.positionItems();L(this,"afterRender")},handleOverflow:function(a){var b=this,c=this.chart,e=c.renderer,h=this.options,g=h.y,m=this.padding;g=c.spacingBox.height+("top"===h.verticalAlign?-g:g)-m;var q=h.maxHeight,v,k=this.clipRect,t=h.navigation,B=x(t.animation,!0),I=t.arrowSize||12,w=this.nav,l=this.pages,p,K=this.allItems,n=function(a){"number"===typeof a?k.attr({height:a}):k&&(b.clipRect=k.destroy(),b.contentGroup.clip());b.contentGroup.div&&(b.contentGroup.div.style.clip=
a?"rect("+m+"px,9999px,"+(m+a)+"px,0)":"auto")},u=function(a){b[a]=e.circle(0,0,1.3*I).translate(I/2,I/2).add(w);c.styledMode||b[a].attr("fill","rgba(0,0,0,0.0001)");return b[a]};"horizontal"!==h.layout||"middle"===h.verticalAlign||h.floating||(g/=2);q&&(g=Math.min(g,q));l.length=0;a>g&&!1!==t.enabled?(this.clipHeight=v=Math.max(g-20-this.titleHeight-m,0),this.currentPage=x(this.currentPage,1),this.fullHeight=a,K.forEach(function(a,b){var d=a._legendItemPos[1],c=Math.round(a.legendItem.getBBox().height),
f=l.length;if(!f||d-l[f-1]>v&&(p||d)!==l[f-1])l.push(p||d),f++;a.pageIx=f-1;p&&(K[b-1].pageIx=f-1);b===K.length-1&&d+c-l[f-1]>v&&d!==p&&(l.push(d),a.pageIx=f);d!==p&&(p=d)}),k||(k=b.clipRect=e.clipRect(0,m,9999,0),b.contentGroup.clip(k)),n(v),w||(this.nav=w=e.g().attr({zIndex:1}).add(this.group),this.up=e.symbol("triangle",0,0,I,I).add(w),u("upTracker").on("click",function(){b.scroll(-1,B)}),this.pager=e.text("",15,10).addClass("highcharts-legend-navigation"),c.styledMode||this.pager.css(t.style),
this.pager.add(w),this.down=e.symbol("triangle-down",0,0,I,I).add(w),u("downTracker").on("click",function(){b.scroll(1,B)})),b.scroll(0),a=g):w&&(n(),this.nav=w.destroy(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0);return a},scroll:function(a,b){var d=this.pages,c=d.length,h=this.currentPage+a;a=this.clipHeight;var g=this.options.navigation,p=this.pager,q=this.padding;h>c&&(h=c);0<h&&(void 0!==b&&m(b,this.chart),this.nav.attr({translateX:q,translateY:a+this.padding+7+this.titleHeight,
visibility:"visible"}),[this.up,this.upTracker].forEach(function(a){a.attr({"class":1===h?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"})}),p.attr({text:h+"/"+c}),[this.down,this.downTracker].forEach(function(a){a.attr({x:18+this.pager.getBBox().width,"class":h===c?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"})},this),this.chart.styledMode||(this.up.attr({fill:1===h?g.inactiveColor:g.activeColor}),this.upTracker.css({cursor:1===h?"default":"pointer"}),this.down.attr({fill:h===
c?g.inactiveColor:g.activeColor}),this.downTracker.css({cursor:h===c?"default":"pointer"})),this.scrollOffset=-d[h-1]+this.initialItemY,this.scrollGroup.animate({translateY:this.scrollOffset}),this.currentPage=h,this.positionCheckboxes())}};c.LegendSymbolMixin={drawRectangle:function(a,b){var d=a.symbolHeight,c=a.options.squareSymbol;b.legendSymbol=this.chart.renderer.rect(c?(a.symbolWidth-d)/2:0,a.baseline-d+1,c?d:a.symbolWidth,d,x(a.options.symbolRadius,d/2)).addClass("highcharts-point").attr({zIndex:3}).add(b.legendGroup)},
drawLineMarker:function(a){var b=this.options,c=b.marker,e=a.symbolWidth,h=a.symbolHeight,g=h/2,m=this.chart.renderer,q=this.legendGroup;a=a.baseline-Math.round(.3*a.fontMetrics.b);var v={};this.chart.styledMode||(v={"stroke-width":b.lineWidth||0},b.dashStyle&&(v.dashstyle=b.dashStyle));this.legendLine=m.path(["M",0,a,"L",e,a]).addClass("highcharts-graph").attr(v).add(q);c&&!1!==c.enabled&&e&&(b=Math.min(x(c.radius,g),g),0===this.symbol.indexOf("url")&&(c=C(c,{width:h,height:h}),b=0),this.legendSymbol=
c=m.symbol(this.symbol,e/2-b,a-b,2*b,2*b,c).addClass("highcharts-point").add(q),c.isMarker=!0)}};(/Trident\/7\.0/.test(g.navigator&&g.navigator.userAgent)||n)&&b(c.Legend.prototype,"positionItem",function(a,b){var d=this,c=function(){b._legendItemPos&&a.call(d,b)};c();d.bubbleLegend||setTimeout(c)})});N(H,"parts/Chart.js",[H["parts/Globals.js"],H["parts/Utilities.js"]],function(c,n){var A=n.attr,D=n.defined,F=n.erase,z=n.isArray,u=n.isNumber,L=n.isObject,y=n.isString,C=n.objectEach,x=n.pInt,m=n.splat,
p=c.addEvent,g=c.animate,b=c.animObject,a=c.doc,d=c.Axis,f=c.createElement,e=c.defaultOptions,h=c.discardElement,r=c.charts,E=c.css,q=c.extend,v=c.find,k=c.fireEvent,t=c.Legend,B=c.marginNames,I=c.merge,w=c.Pointer,l=c.pick,J=c.removeEvent,K=c.seriesTypes,T=c.syncTimeout,R=c.win,S=c.Chart=function(){this.getArgs.apply(this,arguments)};c.chart=function(a,b,d){return new S(a,b,d)};q(S.prototype,{callbacks:[],getArgs:function(){var a=[].slice.call(arguments);if(y(a[0])||a[0].nodeName)this.renderTo=a.shift();
this.init(a[0],a[1])},init:function(a,b){var d,f=a.series,l=a.plotOptions||{};k(this,"init",{args:arguments},function(){a.series=null;d=I(e,a);C(d.plotOptions,function(a,b){L(a)&&(a.tooltip=l[b]&&I(l[b].tooltip)||void 0)});d.tooltip.userOptions=a.chart&&a.chart.forExport&&a.tooltip.userOptions||a.tooltip;d.series=a.series=f;this.userOptions=a;var t=d.chart,B=t.events;this.margin=[];this.spacing=[];this.bounds={h:{},v:{}};this.labelCollectors=[];this.callback=b;this.isResizing=0;this.options=d;this.axes=
[];this.series=[];this.time=a.time&&Object.keys(a.time).length?new c.Time(a.time):c.time;this.styledMode=t.styledMode;this.hasCartesianSeries=t.showAxes;var h=this;h.index=r.length;r.push(h);c.chartCount++;B&&C(B,function(a,b){c.isFunction(a)&&p(h,b,a)});h.xAxis=[];h.yAxis=[];h.pointCount=h.colorCounter=h.symbolCounter=0;k(h,"afterInit");h.firstRender()})},initSeries:function(a){var b=this.options.chart;(b=K[a.type||b.type||b.defaultSeriesType])||c.error(17,!0,this);b=new b;b.init(this,a);return b},
orderSeries:function(a){var b=this.series;for(a=a||0;a<b.length;a++)b[a]&&(b[a].index=a,b[a].name=b[a].getName())},isInsidePlot:function(a,b,d){var c=d?b:a;a=d?a:b;return 0<=c&&c<=this.plotWidth&&0<=a&&a<=this.plotHeight},redraw:function(a){k(this,"beforeRedraw");var b=this.axes,d=this.series,f=this.pointer,e=this.legend,l=this.userOptions.legend,t=this.isDirtyLegend,h=this.hasCartesianSeries,B=this.isDirtyBox,w=this.renderer,g=w.isHidden(),v=[];this.setResponsive&&this.setResponsive(!1);c.setAnimation(a,
this);g&&this.temporaryDisplay();this.layOutTitles();for(a=d.length;a--;){var m=d[a];if(m.options.stacking){var I=!0;if(m.isDirty){var p=!0;break}}}if(p)for(a=d.length;a--;)m=d[a],m.options.stacking&&(m.isDirty=!0);d.forEach(function(a){a.isDirty&&("point"===a.options.legendType?(a.updateTotals&&a.updateTotals(),t=!0):l&&(l.labelFormatter||l.labelFormat)&&(t=!0));a.isDirtyData&&k(a,"updatedData")});t&&e&&e.options.enabled&&(e.render(),this.isDirtyLegend=!1);I&&this.getStacks();h&&b.forEach(function(a){a.updateNames();
a.setScale()});this.getMargins();h&&(b.forEach(function(a){a.isDirty&&(B=!0)}),b.forEach(function(a){var b=a.min+","+a.max;a.extKey!==b&&(a.extKey=b,v.push(function(){k(a,"afterSetExtremes",q(a.eventArgs,a.getExtremes()));delete a.eventArgs}));(B||I)&&a.redraw()}));B&&this.drawChartBox();k(this,"predraw");d.forEach(function(a){(B||a.isDirty)&&a.visible&&a.redraw();a.isDirtyData=!1});f&&f.reset(!0);w.draw();k(this,"redraw");k(this,"render");g&&this.temporaryDisplay(!0);v.forEach(function(a){a.call()})},
get:function(a){function b(b){return b.id===a||b.options&&b.options.id===a}var d=this.series,c;var f=v(this.axes,b)||v(this.series,b);for(c=0;!f&&c<d.length;c++)f=v(d[c].points||[],b);return f},getAxes:function(){var a=this,b=this.options,c=b.xAxis=m(b.xAxis||{});b=b.yAxis=m(b.yAxis||{});k(this,"getAxes");c.forEach(function(a,b){a.index=b;a.isX=!0});b.forEach(function(a,b){a.index=b});c.concat(b).forEach(function(b){new d(a,b)});k(this,"afterGetAxes")},getSelectedPoints:function(){var a=[];this.series.forEach(function(b){a=
a.concat((b[b.hasGroupedData?"points":"data"]||[]).filter(function(a){return l(a.selectedStaging,a.selected)}))});return a},getSelectedSeries:function(){return this.series.filter(function(a){return a.selected})},setTitle:function(a,b,d){this.applyDescription("title",a);this.applyDescription("subtitle",b);this.applyDescription("caption",void 0);this.layOutTitles(d)},applyDescription:function(a,b){var d=this,c="title"===a?{color:"#333333",fontSize:this.options.isStock?"16px":"18px"}:{color:"#666666"};
c=this.options[a]=I(!this.styledMode&&{style:c},this.options[a],b);var f=this[a];f&&b&&(this[a]=f=f.destroy());c&&!f&&(f=this.renderer.text(c.text,0,0,c.useHTML).attr({align:c.align,"class":"highcharts-"+a,zIndex:c.zIndex||4}).add(),f.update=function(b){d[{title:"setTitle",subtitle:"setSubtitle",caption:"setCaption"}[a]](b)},this.styledMode||f.css(c.style),this[a]=f)},layOutTitles:function(a){var b=[0,0,0],d=this.renderer,c=this.spacingBox;["title","subtitle","caption"].forEach(function(a){var f=
this[a],e=this.options[a],k=e.verticalAlign||"top";a="title"===a?-3:"top"===k?b[0]+2:0;if(f){if(!this.styledMode)var l=e.style.fontSize;l=d.fontMetrics(l,f).b;f.css({width:(e.width||c.width+(e.widthAdjust||0))+"px"});var t=f.getBBox(e.useHTML).height;f.align(q({y:"bottom"===k?l:a+l,height:t},e),!1,"spacingBox");e.floating||("top"===k?b[0]=Math.ceil(b[0]+t):"bottom"===k&&(b[2]=Math.ceil(b[2]+t)))}},this);b[0]&&"top"===(this.options.title.verticalAlign||"top")&&(b[0]+=this.options.title.margin);b[2]&&
"bottom"===this.options.caption.verticalAlign&&(b[2]+=this.options.caption.margin);var f=!this.titleOffset||this.titleOffset.join(",")!==b.join(",");this.titleOffset=b;!this.isDirtyBox&&f&&(this.isDirtyBox=this.isDirtyLegend=f,this.hasRendered&&l(a,!0)&&this.isDirtyBox&&this.redraw())},getChartSize:function(){var a=this.options.chart,b=a.width;a=a.height;var d=this.renderTo;D(b)||(this.containerWidth=c.getStyle(d,"width"));D(a)||(this.containerHeight=c.getStyle(d,"height"));this.chartWidth=Math.max(0,
b||this.containerWidth||600);this.chartHeight=Math.max(0,c.relativeLength(a,this.chartWidth)||(1<this.containerHeight?this.containerHeight:400))},temporaryDisplay:function(b){var d=this.renderTo;if(b)for(;d&&d.style;)d.hcOrigStyle&&(c.css(d,d.hcOrigStyle),delete d.hcOrigStyle),d.hcOrigDetached&&(a.body.removeChild(d),d.hcOrigDetached=!1),d=d.parentNode;else for(;d&&d.style;){a.body.contains(d)||d.parentNode||(d.hcOrigDetached=!0,a.body.appendChild(d));if("none"===c.getStyle(d,"display",!1)||d.hcOricDetached)d.hcOrigStyle=
{display:d.style.display,height:d.style.height,overflow:d.style.overflow},b={display:"block",overflow:"hidden"},d!==this.renderTo&&(b.height=0),c.css(d,b),d.offsetWidth||d.style.setProperty("display","block","important");d=d.parentNode;if(d===a.body)break}},setClassName:function(a){this.container.className="highcharts-container "+(a||"")},getContainer:function(){var b=this.options,d=b.chart;var e=this.renderTo;var l=c.uniqueKey(),t,h;e||(this.renderTo=e=d.renderTo);y(e)&&(this.renderTo=e=a.getElementById(e));
e||c.error(13,!0,this);var B=x(A(e,"data-highcharts-chart"));u(B)&&r[B]&&r[B].hasRendered&&r[B].destroy();A(e,"data-highcharts-chart",this.index);e.innerHTML="";d.skipClone||e.offsetWidth||this.temporaryDisplay();this.getChartSize();B=this.chartWidth;var w=this.chartHeight;E(e,{overflow:"hidden"});this.styledMode||(t=q({position:"relative",overflow:"hidden",width:B+"px",height:w+"px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},d.style));this.container=
e=f("div",{id:l},t,e);this._cursor=e.style.cursor;this.renderer=new (c[d.renderer]||c.Renderer)(e,B,w,null,d.forExport,b.exporting&&b.exporting.allowHTML,this.styledMode);this.setClassName(d.className);if(this.styledMode)for(h in b.defs)this.renderer.definition(b.defs[h]);else this.renderer.setStyle(d.style);this.renderer.chartIndex=this.index;k(this,"afterGetContainer")},getMargins:function(a){var b=this.spacing,d=this.margin,c=this.titleOffset;this.resetMargins();c[0]&&!D(d[0])&&(this.plotTop=Math.max(this.plotTop,
c[0]+b[0]));c[2]&&!D(d[2])&&(this.marginBottom=Math.max(this.marginBottom,c[2]+b[2]));this.legend&&this.legend.display&&this.legend.adjustMargins(d,b);k(this,"getMargins");a||this.getAxisMargins()},getAxisMargins:function(){var a=this,b=a.axisOffset=[0,0,0,0],d=a.colorAxis,c=a.margin,f=function(a){a.forEach(function(a){a.visible&&a.getOffset()})};a.hasCartesianSeries?f(a.axes):d&&d.length&&f(d);B.forEach(function(d,f){D(c[f])||(a[d]+=b[f])});a.setChartSize()},reflow:function(b){var d=this,f=d.options.chart,
e=d.renderTo,k=D(f.width)&&D(f.height),l=f.width||c.getStyle(e,"width");f=f.height||c.getStyle(e,"height");e=b?b.target:R;if(!k&&!d.isPrinting&&l&&f&&(e===R||e===a)){if(l!==d.containerWidth||f!==d.containerHeight)c.clearTimeout(d.reflowTimeout),d.reflowTimeout=T(function(){d.container&&d.setSize(void 0,void 0,!1)},b?100:0);d.containerWidth=l;d.containerHeight=f}},setReflow:function(a){var b=this;!1===a||this.unbindReflow?!1===a&&this.unbindReflow&&(this.unbindReflow=this.unbindReflow()):(this.unbindReflow=
p(R,"resize",function(a){b.options&&b.reflow(a)}),p(this,"destroy",this.unbindReflow))},setSize:function(a,d,f){var e=this,l=e.renderer;e.isResizing+=1;c.setAnimation(f,e);e.oldChartHeight=e.chartHeight;e.oldChartWidth=e.chartWidth;void 0!==a&&(e.options.chart.width=a);void 0!==d&&(e.options.chart.height=d);e.getChartSize();if(!e.styledMode){var t=l.globalAnimation;(t?g:E)(e.container,{width:e.chartWidth+"px",height:e.chartHeight+"px"},t)}e.setChartSize(!0);l.setSize(e.chartWidth,e.chartHeight,f);
e.axes.forEach(function(a){a.isDirty=!0;a.setScale()});e.isDirtyLegend=!0;e.isDirtyBox=!0;e.layOutTitles();e.getMargins();e.redraw(f);e.oldChartHeight=null;k(e,"resize");T(function(){e&&k(e,"endResize",null,function(){--e.isResizing})},b(t).duration)},setChartSize:function(a){var b=this.inverted,d=this.renderer,c=this.chartWidth,f=this.chartHeight,e=this.options.chart,l=this.spacing,t=this.clipOffset,B,h,w,g;this.plotLeft=B=Math.round(this.plotLeft);this.plotTop=h=Math.round(this.plotTop);this.plotWidth=
w=Math.max(0,Math.round(c-B-this.marginRight));this.plotHeight=g=Math.max(0,Math.round(f-h-this.marginBottom));this.plotSizeX=b?g:w;this.plotSizeY=b?w:g;this.plotBorderWidth=e.plotBorderWidth||0;this.spacingBox=d.spacingBox={x:l[3],y:l[0],width:c-l[3]-l[1],height:f-l[0]-l[2]};this.plotBox=d.plotBox={x:B,y:h,width:w,height:g};c=2*Math.floor(this.plotBorderWidth/2);b=Math.ceil(Math.max(c,t[3])/2);d=Math.ceil(Math.max(c,t[0])/2);this.clipBox={x:b,y:d,width:Math.floor(this.plotSizeX-Math.max(c,t[1])/
2-b),height:Math.max(0,Math.floor(this.plotSizeY-Math.max(c,t[2])/2-d))};a||this.axes.forEach(function(a){a.setAxisSize();a.setAxisTranslation()});k(this,"afterSetChartSize",{skipAxes:a})},resetMargins:function(){k(this,"resetMargins");var a=this,b=a.options.chart;["margin","spacing"].forEach(function(d){var c=b[d],f=L(c)?c:[c,c,c,c];["Top","Right","Bottom","Left"].forEach(function(c,e){a[d][e]=l(b[d+c],f[e])})});B.forEach(function(b,d){a[b]=l(a.margin[d],a.spacing[d])});a.axisOffset=[0,0,0,0];a.clipOffset=
[0,0,0,0]},drawChartBox:function(){var a=this.options.chart,b=this.renderer,d=this.chartWidth,c=this.chartHeight,f=this.chartBackground,e=this.plotBackground,l=this.plotBorder,t=this.styledMode,B=this.plotBGImage,h=a.backgroundColor,w=a.plotBackgroundColor,g=a.plotBackgroundImage,q,v=this.plotLeft,m=this.plotTop,I=this.plotWidth,p=this.plotHeight,r=this.plotBox,K=this.clipRect,x=this.clipBox,J="animate";f||(this.chartBackground=f=b.rect().addClass("highcharts-background").add(),J="attr");if(t)var n=
q=f.strokeWidth();else{n=a.borderWidth||0;q=n+(a.shadow?8:0);h={fill:h||"none"};if(n||f["stroke-width"])h.stroke=a.borderColor,h["stroke-width"]=n;f.attr(h).shadow(a.shadow)}f[J]({x:q/2,y:q/2,width:d-q-n%2,height:c-q-n%2,r:a.borderRadius});J="animate";e||(J="attr",this.plotBackground=e=b.rect().addClass("highcharts-plot-background").add());e[J](r);t||(e.attr({fill:w||"none"}).shadow(a.plotShadow),g&&(B?B.animate(r):this.plotBGImage=b.image(g,v,m,I,p).add()));K?K.animate({width:x.width,height:x.height}):
this.clipRect=b.clipRect(x);J="animate";l||(J="attr",this.plotBorder=l=b.rect().addClass("highcharts-plot-border").attr({zIndex:1}).add());t||l.attr({stroke:a.plotBorderColor,"stroke-width":a.plotBorderWidth||0,fill:"none"});l[J](l.crisp({x:v,y:m,width:I,height:p},-l.strokeWidth()));this.isDirtyBox=!1;k(this,"afterDrawChartBox")},propFromSeries:function(){var a=this,b=a.options.chart,d,c=a.options.series,f,e;["inverted","angular","polar"].forEach(function(k){d=K[b.type||b.defaultSeriesType];e=b[k]||
d&&d.prototype[k];for(f=c&&c.length;!e&&f--;)(d=K[c[f].type])&&d.prototype[k]&&(e=!0);a[k]=e})},linkSeries:function(){var a=this,b=a.series;b.forEach(function(a){a.linkedSeries.length=0});b.forEach(function(b){var d=b.options.linkedTo;y(d)&&(d=":previous"===d?a.series[b.index-1]:a.get(d))&&d.linkedParent!==b&&(d.linkedSeries.push(b),b.linkedParent=d,b.visible=l(b.options.visible,d.options.visible,b.visible))});k(this,"afterLinkSeries")},renderSeries:function(){this.series.forEach(function(a){a.translate();
a.render()})},renderLabels:function(){var a=this,b=a.options.labels;b.items&&b.items.forEach(function(d){var c=q(b.style,d.style),f=x(c.left)+a.plotLeft,e=x(c.top)+a.plotTop+12;delete c.left;delete c.top;a.renderer.text(d.html,f,e).attr({zIndex:2}).css(c).add()})},render:function(){var a=this.axes,b=this.colorAxis,d=this.renderer,c=this.options,f=0,e=function(a){a.forEach(function(a){a.visible&&a.render()})};this.setTitle();this.legend=new t(this,c.legend);this.getStacks&&this.getStacks();this.getMargins(!0);
this.setChartSize();c=this.plotWidth;a.some(function(a){if(a.horiz&&a.visible&&a.options.labels.enabled&&a.series.length)return f=21,!0});var k=this.plotHeight=Math.max(this.plotHeight-f,0);a.forEach(function(a){a.setScale()});this.getAxisMargins();var l=1.1<c/this.plotWidth;var h=1.05<k/this.plotHeight;if(l||h)a.forEach(function(a){(a.horiz&&l||!a.horiz&&h)&&a.setTickInterval(!0)}),this.getMargins();this.drawChartBox();this.hasCartesianSeries?e(a):b&&b.length&&e(b);this.seriesGroup||(this.seriesGroup=
d.g("series-group").attr({zIndex:3}).add());this.renderSeries();this.renderLabels();this.addCredits();this.setResponsive&&this.setResponsive();this.updateContainerScaling();this.hasRendered=!0},addCredits:function(a){var b=this;a=I(!0,this.options.credits,a);a.enabled&&!this.credits&&(this.credits=this.renderer.text(a.text+(this.mapCredits||""),0,0).addClass("highcharts-credits").on("click",function(){a.href&&(R.location.href=a.href)}).attr({align:a.position.align,zIndex:8}),b.styledMode||this.credits.css(a.style),
this.credits.add().align(a.position),this.credits.update=function(a){b.credits=b.credits.destroy();b.addCredits(a)})},updateContainerScaling:function(){var a=this.container;if(a.offsetWidth&&a.offsetHeight&&a.getBoundingClientRect){var b=a.getBoundingClientRect(),d=b.width/a.offsetWidth;a=b.height/a.offsetHeight;1!==d||1!==a?this.containerScaling={scaleX:d,scaleY:a}:delete this.containerScaling}},destroy:function(){var a=this,b=a.axes,d=a.series,f=a.container,e,l=f&&f.parentNode;k(a,"destroy");a.renderer.forExport?
F(r,a):r[a.index]=void 0;c.chartCount--;a.renderTo.removeAttribute("data-highcharts-chart");J(a);for(e=b.length;e--;)b[e]=b[e].destroy();this.scroller&&this.scroller.destroy&&this.scroller.destroy();for(e=d.length;e--;)d[e]=d[e].destroy();"title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" ").forEach(function(b){var d=a[b];d&&d.destroy&&(a[b]=d.destroy())});f&&(f.innerHTML="",J(f),
l&&h(f));C(a,function(b,d){delete a[d]})},firstRender:function(){var a=this,b=a.options;if(!a.isReadyToRender||a.isReadyToRender()){a.getContainer();a.resetMargins();a.setChartSize();a.propFromSeries();a.getAxes();(z(b.series)?b.series:[]).forEach(function(b){a.initSeries(b)});a.linkSeries();k(a,"beforeRender");w&&(a.pointer=new w(a,b));a.render();if(!a.renderer.imgCount&&a.onload)a.onload();a.temporaryDisplay(!0)}},onload:function(){this.callbacks.concat([this.callback]).forEach(function(a){a&&void 0!==
this.index&&a.apply(this,[this])},this);k(this,"load");k(this,"render");D(this.index)&&this.setReflow(this.options.chart.reflow);this.onload=null}})});N(H,"parts/ScrollablePlotArea.js",[H["parts/Globals.js"]],function(c){var n=c.addEvent,A=c.Chart;"";n(A,"afterSetChartSize",function(n){var A=this.options.chart.scrollablePlotArea,z=A&&A.minWidth;A=A&&A.minHeight;if(!this.renderer.forExport){if(z){if(this.scrollablePixelsX=z=Math.max(0,z-this.chartWidth)){this.plotWidth+=z;this.inverted?(this.clipBox.height+=
z,this.plotBox.height+=z):(this.clipBox.width+=z,this.plotBox.width+=z);var u={1:{name:"right",value:z}}}}else A&&(this.scrollablePixelsY=z=Math.max(0,A-this.chartHeight))&&(this.plotHeight+=z,this.inverted?(this.clipBox.width+=z,this.plotBox.width+=z):(this.clipBox.height+=z,this.plotBox.height+=z),u={2:{name:"bottom",value:z}});u&&!n.skipAxes&&this.axes.forEach(function(n){u[n.side]?n.getPlotLinePath=function(){var y=u[n.side].name,z=this[y];this[y]=z-u[n.side].value;var x=c.Axis.prototype.getPlotLinePath.apply(this,
arguments);this[y]=z;return x}:(n.setAxisSize(),n.setAxisTranslation())})}});n(A,"render",function(){this.scrollablePixelsX||this.scrollablePixelsY?(this.setUpScrolling&&this.setUpScrolling(),this.applyFixed()):this.fixedDiv&&this.applyFixed()});A.prototype.setUpScrolling=function(){var n={WebkitOverflowScrolling:"touch",overflowX:"hidden",overflowY:"hidden"};this.scrollablePixelsX&&(n.overflowX="auto");this.scrollablePixelsY&&(n.overflowY="auto");this.scrollingContainer=c.createElement("div",{className:"highcharts-scrolling"},
n,this.renderTo);this.innerContainer=c.createElement("div",{className:"highcharts-inner-container"},null,this.scrollingContainer);this.innerContainer.appendChild(this.container);this.setUpScrolling=null};A.prototype.moveFixedElements=function(){var c=this.container,n=this.fixedRenderer,z=".highcharts-contextbutton .highcharts-credits .highcharts-legend .highcharts-reset-zoom .highcharts-subtitle .highcharts-title .highcharts-legend-checkbox".split(" "),u;this.scrollablePixelsX&&!this.inverted?u=".highcharts-yaxis":
this.scrollablePixelsX&&this.inverted?u=".highcharts-xaxis":this.scrollablePixelsY&&!this.inverted?u=".highcharts-xaxis":this.scrollablePixelsY&&this.inverted&&(u=".highcharts-yaxis");z.push(u,u+"-labels");z.forEach(function(u){[].forEach.call(c.querySelectorAll(u),function(c){(c.namespaceURI===n.SVG_NS?n.box:n.box.parentNode).appendChild(c);c.style.pointerEvents="auto"})})};A.prototype.applyFixed=function(){var A,F=!this.fixedDiv,z=this.options.chart.scrollablePlotArea;F?(this.fixedDiv=c.createElement("div",
{className:"highcharts-fixed"},{position:"absolute",overflow:"hidden",pointerEvents:"none",zIndex:2},null,!0),this.renderTo.insertBefore(this.fixedDiv,this.renderTo.firstChild),this.renderTo.style.overflow="visible",this.fixedRenderer=A=new c.Renderer(this.fixedDiv,this.chartWidth,this.chartHeight),this.scrollableMask=A.path().attr({fill:c.color(this.options.chart.backgroundColor||"#fff").setOpacity(c.pick(z.opacity,.85)).get(),zIndex:-1}).addClass("highcharts-scrollable-mask").add(),this.moveFixedElements(),
n(this,"afterShowResetZoom",this.moveFixedElements)):this.fixedRenderer.setSize(this.chartWidth,this.chartHeight);A=this.chartWidth+(this.scrollablePixelsX||0);var u=this.chartHeight+(this.scrollablePixelsY||0);c.stop(this.container);this.container.style.width=A+"px";this.container.style.height=u+"px";this.renderer.boxWrapper.attr({width:A,height:u,viewBox:[0,0,A,u].join(" ")});this.chartBackground.attr({width:A,height:u});this.scrollablePixelsY&&(this.scrollingContainer.style.height=this.chartHeight+
"px");F&&(z.scrollPositionX&&(this.scrollingContainer.scrollLeft=this.scrollablePixelsX*z.scrollPositionX),z.scrollPositionY&&(this.scrollingContainer.scrollTop=this.scrollablePixelsY*z.scrollPositionY));u=this.axisOffset;F=this.plotTop-u[0]-1;z=this.plotLeft-u[3]-1;A=this.plotTop+this.plotHeight+u[2]+1;u=this.plotLeft+this.plotWidth+u[1]+1;var L=this.plotLeft+this.plotWidth-(this.scrollablePixelsX||0),y=this.plotTop+this.plotHeight-(this.scrollablePixelsY||0);F=this.scrollablePixelsX?["M",0,F,"L",
this.plotLeft-1,F,"L",this.plotLeft-1,A,"L",0,A,"Z","M",L,F,"L",this.chartWidth,F,"L",this.chartWidth,A,"L",L,A,"Z"]:this.scrollablePixelsY?["M",z,0,"L",z,this.plotTop-1,"L",u,this.plotTop-1,"L",u,0,"Z","M",z,y,"L",z,this.chartHeight,"L",u,this.chartHeight,"L",u,y,"Z"]:["M",0,0];"adjustHeight"!==this.redrawTrigger&&this.scrollableMask.attr({d:F})}});N(H,"parts/Point.js",[H["parts/Globals.js"],H["parts/Utilities.js"]],function(c,n){var A=n.defined,D=n.erase,F=n.isArray,z=n.isNumber,u=n.isObject,L,
y=c.extend,C=c.fireEvent,x=c.format,m=c.pick,p=c.uniqueKey,g=c.removeEvent;c.Point=L=function(){};c.Point.prototype={init:function(b,a,d){this.series=b;this.applyOptions(a,d);this.id=A(this.id)?this.id:p();this.resolveColor();b.chart.pointCount++;C(this,"afterInit");return this},resolveColor:function(){var b=this.series;var a=b.chart.options.chart.colorCount;var d=b.chart.styledMode;d||this.options.color||(this.color=b.color);b.options.colorByPoint?(d||(a=b.options.colors||b.chart.options.colors,
this.color=this.color||a[b.colorCounter],a=a.length),d=b.colorCounter,b.colorCounter++,b.colorCounter===a&&(b.colorCounter=0)):d=b.colorIndex;this.colorIndex=m(this.colorIndex,d)},applyOptions:function(b,a){var d=this.series,c=d.options.pointValKey||d.pointValKey;b=L.prototype.optionsToObject.call(this,b);y(this,b);this.options=this.options?y(this.options,b):b;b.group&&delete this.group;b.dataLabels&&delete this.dataLabels;c&&(this.y=this[c]);this.formatPrefix=(this.isNull=m(this.isValid&&!this.isValid(),
null===this.x||!z(this.y)))?"null":"point";this.selected&&(this.state="select");"name"in this&&void 0===a&&d.xAxis&&d.xAxis.hasNames&&(this.x=d.xAxis.nameToX(this));void 0===this.x&&d&&(this.x=void 0===a?d.autoIncrement(this):a);return this},setNestedProperty:function(b,a,d){d.split(".").reduce(function(b,d,c,g){b[d]=g.length-1===c?a:u(b[d],!0)?b[d]:{};return b[d]},b);return b},optionsToObject:function(b){var a={},d=this.series,f=d.options.keys,e=f||d.pointArrayMap||["y"],h=e.length,g=0,m=0;if(z(b)||
null===b)a[e[0]]=b;else if(F(b))for(!f&&b.length>h&&(d=typeof b[0],"string"===d?a.name=b[0]:"number"===d&&(a.x=b[0]),g++);m<h;)f&&void 0===b[g]||(0<e[m].indexOf(".")?c.Point.prototype.setNestedProperty(a,b[g],e[m]):a[e[m]]=b[g]),g++,m++;else"object"===typeof b&&(a=b,b.dataLabels&&(d._hasPointLabels=!0),b.marker&&(d._hasPointMarkers=!0));return a},getClassName:function(){return"highcharts-point"+(this.selected?" highcharts-point-select":"")+(this.negative?" highcharts-negative":"")+(this.isNull?" highcharts-null-point":
"")+(void 0!==this.colorIndex?" highcharts-color-"+this.colorIndex:"")+(this.options.className?" "+this.options.className:"")+(this.zone&&this.zone.className?" "+this.zone.className.replace("highcharts-negative",""):"")},getZone:function(){var b=this.series,a=b.zones;b=b.zoneAxis||"y";var d=0,c;for(c=a[d];this[b]>=c.value;)c=a[++d];this.nonZonedColor||(this.nonZonedColor=this.color);this.color=c&&c.color&&!this.options.color?c.color:this.nonZonedColor;return c},destroy:function(){var b=this.series.chart,
a=b.hoverPoints,d;b.pointCount--;a&&(this.setState(),D(a,this),a.length||(b.hoverPoints=null));if(this===b.hoverPoint)this.onMouseOut();if(this.graphic||this.dataLabel||this.dataLabels)g(this),this.destroyElements();this.legendItem&&b.legend.destroyItem(this);for(d in this)this[d]=null},destroyElements:function(b){var a=this,d=[],c;b=b||{graphic:1,dataLabel:1};b.graphic&&d.push("graphic","shadowGroup");b.dataLabel&&d.push("dataLabel","dataLabelUpper","connector");for(c=d.length;c--;){var e=d[c];a[e]&&
(a[e]=a[e].destroy())}["dataLabel","connector"].forEach(function(d){var c=d+"s";b[d]&&a[c]&&(a[c].forEach(function(a){a.element&&a.destroy()}),delete a[c])})},getLabelConfig:function(){return{x:this.category,y:this.y,color:this.color,colorIndex:this.colorIndex,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}},tooltipFormatter:function(b){var a=this.series,d=a.tooltipOptions,c=m(d.valueDecimals,""),e=d.valuePrefix||"",h=d.valueSuffix||
"";a.chart.styledMode&&(b=a.chart.tooltip.styledModeFormat(b));(a.pointArrayMap||["y"]).forEach(function(a){a="{point."+a;if(e||h)b=b.replace(RegExp(a+"}","g"),e+a+"}"+h);b=b.replace(RegExp(a+"}","g"),a+":,."+c+"f}")});return x(b,{point:this,series:this.series},a.chart.time)},firePointEvent:function(b,a,d){var c=this,e=this.series.options;(e.point.events[b]||c.options&&c.options.events&&c.options.events[b])&&this.importEvents();"click"===b&&e.allowPointSelect&&(d=function(a){c.select&&c.select(null,
a.ctrlKey||a.metaKey||a.shiftKey)});C(this,b,a,d)},visible:!0}});N(H,"parts/Series.js",[H["parts/Globals.js"],H["parts/Utilities.js"]],function(c,n){var A=n.defined,D=n.erase,F=n.isArray,z=n.isNumber,u=n.isString,L=n.objectEach,y=n.splat,C=c.addEvent,x=c.animObject,m=c.arrayMax,p=c.arrayMin,g=c.correctFloat,b=c.defaultOptions,a=c.defaultPlotOptions,d=c.extend,f=c.fireEvent,e=c.merge,h=c.pick,r=c.removeEvent,E=c.SVGElement,q=c.syncTimeout,v=c.win;c.Series=c.seriesType("line",null,{lineWidth:2,allowPointSelect:!1,
showCheckbox:!1,animation:{duration:1E3},events:{},marker:{lineWidth:0,lineColor:"#ffffff",enabledThreshold:2,radius:4,states:{normal:{animation:!0},hover:{animation:{duration:50},enabled:!0,radiusPlus:2,lineWidthPlus:1},select:{fillColor:"#cccccc",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:{align:"center",formatter:function(){return null===this.y?"":c.numberFormat(this.y,-1)},padding:5,style:{fontSize:"11px",fontWeight:"bold",color:"contrast",textOutline:"1px contrast"},verticalAlign:"bottom",
x:0,y:0},cropThreshold:300,opacity:1,pointRange:0,softThreshold:!0,states:{normal:{animation:!0},hover:{animation:{duration:50},lineWidthPlus:1,marker:{},halo:{size:10,opacity:.25}},select:{animation:{duration:0}},inactive:{animation:{duration:50},opacity:.2}},stickyTracking:!0,turboThreshold:1E3,findNearestPointBy:"x"},{axisTypes:["xAxis","yAxis"],coll:"series",colorCounter:0,cropShoulder:1,directTouch:!1,isCartesian:!0,parallelArrays:["x","y"],pointClass:c.Point,requireSorting:!0,sorted:!0,init:function(a,
b){f(this,"init",{options:b});var e=this,k=a.series,t;this.eventOptions=this.eventOptions||{};e.chart=a;e.options=b=e.setOptions(b);e.linkedSeries=[];e.bindAxes();d(e,{name:b.name,state:"",visible:!1!==b.visible,selected:!0===b.selected});var l=b.events;L(l,function(a,b){c.isFunction(a)&&e.eventOptions[b]!==a&&(c.isFunction(e.eventOptions[b])&&r(e,b,e.eventOptions[b]),e.eventOptions[b]=a,C(e,b,a))});if(l&&l.click||b.point&&b.point.events&&b.point.events.click||b.allowPointSelect)a.runTrackerClick=
!0;e.getColor();e.getSymbol();e.parallelArrays.forEach(function(a){e[a+"Data"]||(e[a+"Data"]=[])});e.points||e.data||e.setData(b.data,!1);e.isCartesian&&(a.hasCartesianSeries=!0);k.length&&(t=k[k.length-1]);e._i=h(t&&t._i,-1)+1;a.orderSeries(this.insert(k));f(this,"afterInit")},insert:function(a){var b=this.options.index,d;if(z(b)){for(d=a.length;d--;)if(b>=h(a[d].options.index,a[d]._i)){a.splice(d+1,0,this);break}-1===d&&a.unshift(this);d+=1}else a.push(this);return h(d,a.length-1)},bindAxes:function(){var a=
this,b=a.options,d=a.chart,e;f(this,"bindAxes",null,function(){(a.axisTypes||[]).forEach(function(f){d[f].forEach(function(d){e=d.options;if(b[f]===e.index||void 0!==b[f]&&b[f]===e.id||void 0===b[f]&&0===e.index)a.insert(d.series),a[f]=d,d.isDirty=!0});a[f]||a.optionalAxis===f||c.error(18,!0,d)})})},updateParallelArrays:function(a,b){var d=a.series,c=arguments,f=z(b)?function(c){var f="y"===c&&d.toYData?d.toYData(a):a[c];d[c+"Data"][b]=f}:function(a){Array.prototype[b].apply(d[a+"Data"],Array.prototype.slice.call(c,
2))};d.parallelArrays.forEach(f)},hasData:function(){return this.visible&&void 0!==this.dataMax&&void 0!==this.dataMin||this.visible&&this.yData&&0<this.yData.length},autoIncrement:function(){var a=this.options,b=this.xIncrement,d,c=a.pointIntervalUnit,f=this.chart.time;b=h(b,a.pointStart,0);this.pointInterval=d=h(this.pointInterval,a.pointInterval,1);c&&(a=new f.Date(b),"day"===c?f.set("Date",a,f.get("Date",a)+d):"month"===c?f.set("Month",a,f.get("Month",a)+d):"year"===c&&f.set("FullYear",a,f.get("FullYear",
a)+d),d=a.getTime()-b);this.xIncrement=b+d;return b},setOptions:function(a){var d=this.chart,c=d.options,k=c.plotOptions,w=d.userOptions||{};a=e(a);d=d.styledMode;var l={plotOptions:k,userOptions:a};f(this,"setOptions",l);var g=l.plotOptions[this.type],q=w.plotOptions||{};this.userOptions=l.userOptions;w=e(g,k.series,w.plotOptions&&w.plotOptions[this.type],a);this.tooltipOptions=e(b.tooltip,b.plotOptions.series&&b.plotOptions.series.tooltip,b.plotOptions[this.type].tooltip,c.tooltip.userOptions,k.series&&
k.series.tooltip,k[this.type].tooltip,a.tooltip);this.stickyTracking=h(a.stickyTracking,q[this.type]&&q[this.type].stickyTracking,q.series&&q.series.stickyTracking,this.tooltipOptions.shared&&!this.noSharedTooltip?!0:w.stickyTracking);null===g.marker&&delete w.marker;this.zoneAxis=w.zoneAxis;c=this.zones=(w.zones||[]).slice();!w.negativeColor&&!w.negativeFillColor||w.zones||(k={value:w[this.zoneAxis+"Threshold"]||w.threshold||0,className:"highcharts-negative"},d||(k.color=w.negativeColor,k.fillColor=
w.negativeFillColor),c.push(k));c.length&&A(c[c.length-1].value)&&c.push(d?{}:{color:this.color,fillColor:this.fillColor});f(this,"afterSetOptions",{options:w});return w},getName:function(){return h(this.options.name,"Series "+(this.index+1))},getCyclic:function(a,b,d){var c=this.chart,f=this.userOptions,e=a+"Index",k=a+"Counter",t=d?d.length:h(c.options.chart[a+"Count"],c[a+"Count"]);if(!b){var B=h(f[e],f["_"+e]);A(B)||(c.series.length||(c[k]=0),f["_"+e]=B=c[k]%t,c[k]+=1);d&&(b=d[B])}void 0!==B&&
(this[e]=B);this[a]=b},getColor:function(){this.chart.styledMode?this.getCyclic("color"):this.options.colorByPoint?this.options.color=null:this.getCyclic("color",this.options.color||a[this.type].color,this.chart.options.colors)},getSymbol:function(){this.getCyclic("symbol",this.options.marker.symbol,this.chart.options.symbols)},findPointIndex:function(a,b){var d=a.id;a=a.x;var c=this.points,f;if(d){var e=(d=this.chart.get(d))&&d.index;void 0!==e&&(f=!0)}void 0===e&&z(a)&&(e=this.xData.indexOf(a,b));
-1!==e&&void 0!==e&&this.cropped&&(e=e>=this.cropStart?e-this.cropStart:e);!f&&c[e]&&c[e].touched&&(e=void 0);return e},drawLegendSymbol:c.LegendSymbolMixin.drawLineMarker,updateData:function(a){var b=this.options,d=this.points,c=[],f,e,k,h=this.requireSorting,g=a.length===d.length,q=!0;this.xIncrement=null;a.forEach(function(a,e){var l=A(a)&&this.pointClass.prototype.optionsToObject.call({series:this},a)||{};var t=l.x;if(l.id||z(t))if(t=this.findPointIndex(l,k),-1===t||void 0===t?c.push(a):d[t]&&
a!==b.data[t]?(d[t].update(a,!1,null,!1),d[t].touched=!0,h&&(k=t+1)):d[t]&&(d[t].touched=!0),!g||e!==t||this.hasDerivedData)f=!0},this);if(f)for(a=d.length;a--;)(e=d[a])&&!e.touched&&e.remove(!1);else g?a.forEach(function(a,b){d[b].update&&a!==d[b].y&&d[b].update(a,!1,null,!1)}):q=!1;d.forEach(function(a){a&&(a.touched=!1)});if(!q)return!1;c.forEach(function(a){this.addPoint(a,!1,null,null,!1)},this);return!0},setData:function(a,b,d,f){var e=this,k=e.points,t=k&&k.length||0,g,q=e.options,v=e.chart,
m=null,B=e.xAxis,p=q.turboThreshold,I=this.xData,r=this.yData,x=(g=e.pointArrayMap)&&g.length,n=q.keys,y=0,E=1,A;a=a||[];g=a.length;b=h(b,!0);!1!==f&&g&&t&&!e.cropped&&!e.hasGroupedData&&e.visible&&!e.isSeriesBoosting&&(A=this.updateData(a));if(!A){e.xIncrement=null;e.colorCounter=0;this.parallelArrays.forEach(function(a){e[a+"Data"].length=0});if(p&&g>p){for(d=0;null===m&&d<g;)m=a[d],d++;if(z(m))for(d=0;d<g;d++)I[d]=this.autoIncrement(),r[d]=a[d];else if(F(m))if(x)for(d=0;d<g;d++)m=a[d],I[d]=m[0],
r[d]=m.slice(1,x+1);else for(n&&(y=n.indexOf("x"),E=n.indexOf("y"),y=0<=y?y:0,E=0<=E?E:1),d=0;d<g;d++)m=a[d],I[d]=m[y],r[d]=m[E];else c.error(12,!1,v)}else for(d=0;d<g;d++)void 0!==a[d]&&(m={series:e},e.pointClass.prototype.applyOptions.apply(m,[a[d]]),e.updateParallelArrays(m,d));r&&u(r[0])&&c.error(14,!0,v);e.data=[];e.options.data=e.userOptions.data=a;for(d=t;d--;)k[d]&&k[d].destroy&&k[d].destroy();B&&(B.minRange=B.userMinRange);e.isDirty=v.isDirtyBox=!0;e.isDirtyData=!!k;d=!1}"point"===q.legendType&&
(this.processData(),this.generatePoints());b&&v.redraw(d)},processData:function(a){var b=this.xData,d=this.yData,f=b.length;var e=0;var k=this.xAxis,h=this.options;var g=h.cropThreshold;var q=this.getExtremesFromAll||h.getExtremesFromAll,m=this.isCartesian;h=k&&k.val2lin;var v=k&&k.isLog,p=this.requireSorting;if(m&&!this.isDirty&&!k.isDirty&&!this.yAxis.isDirty&&!a)return!1;if(k){a=k.getExtremes();var r=a.min;var x=a.max}if(m&&this.sorted&&!q&&(!g||f>g||this.forceCrop))if(b[f-1]<r||b[0]>x)b=[],d=
[];else if(this.yData&&(b[0]<r||b[f-1]>x)){e=this.cropData(this.xData,this.yData,r,x);b=e.xData;d=e.yData;e=e.start;var n=!0}for(g=b.length||1;--g;)if(f=v?h(b[g])-h(b[g-1]):b[g]-b[g-1],0<f&&(void 0===u||f<u))var u=f;else 0>f&&p&&(c.error(15,!1,this.chart),p=!1);this.cropped=n;this.cropStart=e;this.processedXData=b;this.processedYData=d;this.closestPointRange=this.basePointRange=u},cropData:function(a,b,d,c,f){var e=a.length,k=0,t=e,g;f=h(f,this.cropShoulder);for(g=0;g<e;g++)if(a[g]>=d){k=Math.max(0,
g-f);break}for(d=g;d<e;d++)if(a[d]>c){t=d+f;break}return{xData:a.slice(k,t),yData:b.slice(k,t),start:k,end:t}},generatePoints:function(){var a=this.options,b=a.data,c=this.data,e,h=this.processedXData,l=this.processedYData,g=this.pointClass,q=h.length,m=this.cropStart||0,v=this.hasGroupedData;a=a.keys;var p=[],r;c||v||(c=[],c.length=b.length,c=this.data=c);a&&v&&(this.options.keys=!1);for(r=0;r<q;r++){var x=m+r;if(v){var n=(new g).init(this,[h[r]].concat(y(l[r])));n.dataGroup=this.groupMap[r];n.dataGroup.options&&
(n.options=n.dataGroup.options,d(n,n.dataGroup.options),delete n.dataLabels)}else(n=c[x])||void 0===b[x]||(c[x]=n=(new g).init(this,b[x],h[r]));n&&(n.index=x,p[r]=n)}this.options.keys=a;if(c&&(q!==(e=c.length)||v))for(r=0;r<e;r++)r!==m||v||(r+=q),c[r]&&(c[r].destroyElements(),c[r].plotX=void 0);this.data=c;this.points=p;f(this,"afterGeneratePoints")},getXExtremes:function(a){return{min:p(a),max:m(a)}},getExtremes:function(a){var b=this.xAxis,d=this.yAxis,c=this.processedXData||this.xData,e=[],k=0,
h=0;var g=0;var q=this.requireSorting?this.cropShoulder:0,v=d?d.positiveValuesOnly:!1,r;a=a||this.stackedYData||this.processedYData||[];d=a.length;b&&(g=b.getExtremes(),h=g.min,g=g.max);for(r=0;r<d;r++){var x=c[r];var n=a[r];var u=(z(n)||F(n))&&(n.length||0<n||!v);x=this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||!b||(c[r+q]||x)>=h&&(c[r-q]||x)<=g;if(u&&x)if(u=n.length)for(;u--;)z(n[u])&&(e[k++]=n[u]);else e[k++]=n}this.dataMin=p(e);this.dataMax=m(e);f(this,"afterGetExtremes")},
translate:function(){this.processedXData||this.processData();this.generatePoints();var a=this.options,b=a.stacking,d=this.xAxis,c=d.categories,e=this.yAxis,l=this.points,q=l.length,m=!!this.modifyValue,v,p=this.pointPlacementToXValue(),r=z(p),n=a.threshold,x=a.startFromThreshold?n:0,u,y=this.zoneAxis||"y",E=Number.MAX_VALUE;for(v=0;v<q;v++){var C=l[v],L=C.x;var D=C.y;var H=C.low,N=b&&e.stacks[(this.negStacks&&D<(x?0:n)?"-":"")+this.stackKey];e.positiveValuesOnly&&null!==D&&0>=D&&(C.isNull=!0);C.plotX=
u=g(Math.min(Math.max(-1E5,d.translate(L,0,0,0,1,p,"flags"===this.type)),1E5));if(b&&this.visible&&N&&N[L]){var W=this.getStackIndicator(W,L,this.index);if(!C.isNull){var P=N[L];var X=P.points[W.key]}}F(X)&&(H=X[0],D=X[1],H===x&&W.key===N[L].base&&(H=h(z(n)&&n,e.min)),e.positiveValuesOnly&&0>=H&&(H=null),C.total=C.stackTotal=P.total,C.percentage=P.total&&C.y/P.total*100,C.stackY=D,this.irregularWidths||P.setOffset(this.pointXOffset||0,this.barW||0));C.yBottom=A(H)?Math.min(Math.max(-1E5,e.translate(H,
0,1,0,1)),1E5):null;m&&(D=this.modifyValue(D,C));C.plotY=D="number"===typeof D&&Infinity!==D?Math.min(Math.max(-1E5,e.translate(D,0,1,0,1)),1E5):void 0;C.isInside=void 0!==D&&0<=D&&D<=e.len&&0<=u&&u<=d.len;C.clientX=r?g(d.translate(L,0,0,0,1,p)):u;C.negative=C[y]<(a[y+"Threshold"]||n||0);C.category=c&&void 0!==c[C.x]?c[C.x]:C.x;if(!C.isNull){void 0!==Y&&(E=Math.min(E,Math.abs(u-Y)));var Y=u}C.zone=this.zones.length&&C.getZone()}this.closestPointRangePx=E;f(this,"afterTranslate")},getValidPoints:function(a,
b,d){var c=this.chart;return(a||this.points||[]).filter(function(a){return b&&!c.isInsidePlot(a.plotX,a.plotY,c.inverted)?!1:d||!a.isNull})},getClipBox:function(a,b){var d=this.options,c=this.chart,f=c.inverted,e=this.xAxis,k=e&&this.yAxis;a&&!1===d.clip&&k?a=f?{y:-c.chartWidth+k.len+k.pos,height:c.chartWidth,width:c.chartHeight,x:-c.chartHeight+e.len+e.pos}:{y:-k.pos,height:c.chartHeight,width:c.chartWidth,x:-e.pos}:(a=this.clipBox||c.clipBox,b&&(a.width=c.plotSizeX,a.x=0));return b?{width:a.width,
x:a.x}:a},setClip:function(a){var b=this.chart,d=this.options,c=b.renderer,f=b.inverted,e=this.clipBox,k=this.getClipBox(a),h=this.sharedClipKey||["_sharedClip",a&&a.duration,a&&a.easing,k.height,d.xAxis,d.yAxis].join(),g=b[h],q=b[h+"m"];g||(a&&(k.width=0,f&&(k.x=b.plotSizeX+(!1!==d.clip?0:b.plotTop)),b[h+"m"]=q=c.clipRect(f?b.plotSizeX+99:-99,f?-b.plotLeft:-b.plotTop,99,f?b.chartWidth:b.chartHeight)),b[h]=g=c.clipRect(k),g.count={length:0});a&&!g.count[this.index]&&(g.count[this.index]=!0,g.count.length+=
1);if(!1!==d.clip||a)this.group.clip(a||e?g:b.clipRect),this.markerGroup.clip(q),this.sharedClipKey=h;a||(g.count[this.index]&&(delete g.count[this.index],--g.count.length),0===g.count.length&&h&&b[h]&&(e||(b[h]=b[h].destroy()),b[h+"m"]&&(b[h+"m"]=b[h+"m"].destroy())))},animate:function(a){var b=this.chart,d=x(this.options.animation);if(a)this.setClip(d);else{var c=this.sharedClipKey;a=b[c];var f=this.getClipBox(d,!0);a&&a.animate(f,d);b[c+"m"]&&b[c+"m"].animate({width:f.width+99,x:f.x-(b.inverted?
0:99)},d);this.animate=null}},afterAnimate:function(){this.setClip();f(this,"afterAnimate");this.finishedAnimating=!0},drawPoints:function(){var a=this.points,b=this.chart,d,c=this.options.marker,f=this[this.specialGroup]||this.markerGroup;var e=this.xAxis;var g=h(c.enabled,!e||e.isRadial?!0:null,this.closestPointRangePx>=c.enabledThreshold*c.radius);if(!1!==c.enabled||this._hasPointMarkers)for(e=0;e<a.length;e++){var q=a[e];var m=(d=q.graphic)?"animate":"attr";var v=q.marker||{};var p=!!q.marker;
var r=g&&void 0===v.enabled||v.enabled;var n=!1!==q.isInside;if(r&&!q.isNull){r=h(v.symbol,this.symbol);var x=this.markerAttribs(q,q.selected&&"select");d?d[n?"show":"hide"](n).animate(x):n&&(0<x.width||q.hasImage)&&(q.graphic=d=b.renderer.symbol(r,x.x,x.y,x.width,x.height,p?v:c).add(f));if(d&&!b.styledMode)d[m](this.pointAttribs(q,q.selected&&"select"));d&&d.addClass(q.getClassName(),!0)}else d&&(q.graphic=d.destroy())}},markerAttribs:function(a,b){var d=this.options.marker,c=a.marker||{},f=c.symbol||
d.symbol,e=h(c.radius,d.radius);b&&(d=d.states[b],b=c.states&&c.states[b],e=h(b&&b.radius,d&&d.radius,e+(d&&d.radiusPlus||0)));a.hasImage=f&&0===f.indexOf("url");a.hasImage&&(e=0);a={x:Math.floor(a.plotX)-e,y:a.plotY-e};e&&(a.width=a.height=2*e);return a},pointAttribs:function(a,b){var d=this.options.marker,c=a&&a.options,f=c&&c.marker||{},e=this.color,k=c&&c.color,t=a&&a.color;c=h(f.lineWidth,d.lineWidth);var g=a&&a.zone&&a.zone.color;a=1;e=k||g||t||e;k=f.fillColor||d.fillColor||e;e=f.lineColor||
d.lineColor||e;b=b||"normal";d=d.states[b];b=f.states&&f.states[b]||{};c=h(b.lineWidth,d.lineWidth,c+h(b.lineWidthPlus,d.lineWidthPlus,0));k=b.fillColor||d.fillColor||k;e=b.lineColor||d.lineColor||e;a=h(b.opacity,d.opacity,a);return{stroke:e,"stroke-width":c,fill:k,opacity:a}},destroy:function(a){var b=this,d=b.chart,e=/AppleWebKit\/533/.test(v.navigator.userAgent),k,l,h=b.data||[],g,q;f(b,"destroy");a||r(b);(b.axisTypes||[]).forEach(function(a){(q=b[a])&&q.series&&(D(q.series,b),q.isDirty=q.forceRedraw=
!0)});b.legendItem&&b.chart.legend.destroyItem(b);for(l=h.length;l--;)(g=h[l])&&g.destroy&&g.destroy();b.points=null;c.clearTimeout(b.animationTimeout);L(b,function(a,b){a instanceof E&&!a.survive&&(k=e&&"group"===b?"hide":"destroy",a[k]())});d.hoverSeries===b&&(d.hoverSeries=null);D(d.series,b);d.orderSeries();L(b,function(d,c){a&&"hcEvents"===c||delete b[c]})},getGraphPath:function(a,b,d){var c=this,f=c.options,e=f.step,k,h=[],t=[],g;a=a||c.points;(k=a.reversed)&&a.reverse();(e={right:1,center:2}[e]||
e&&3)&&k&&(e=4-e);!f.connectNulls||b||d||(a=this.getValidPoints(a));a.forEach(function(k,l){var q=k.plotX,v=k.plotY,m=a[l-1];(k.leftCliff||m&&m.rightCliff)&&!d&&(g=!0);k.isNull&&!A(b)&&0<l?g=!f.connectNulls:k.isNull&&!b?g=!0:(0===l||g?l=["M",k.plotX,k.plotY]:c.getPointSpline?l=c.getPointSpline(a,k,l):e?(l=1===e?["L",m.plotX,v]:2===e?["L",(m.plotX+q)/2,m.plotY,"L",(m.plotX+q)/2,v]:["L",q,m.plotY],l.push("L",q,v)):l=["L",q,v],t.push(k.x),e&&(t.push(k.x),2===e&&t.push(k.x)),h.push.apply(h,l),g=!1)});
h.xMap=t;return c.graphPath=h},drawGraph:function(){var a=this,b=this.options,d=(this.gappedPath||this.getGraphPath).call(this),c=this.chart.styledMode,f=[["graph","highcharts-graph"]];c||f[0].push(b.lineColor||this.color||"#cccccc",b.dashStyle);f=a.getZonesGraphs(f);f.forEach(function(f,e){var k=f[0],l=a[k],h=l?"animate":"attr";l?(l.endX=a.preventGraphAnimation?null:d.xMap,l.animate({d:d})):d.length&&(a[k]=l=a.chart.renderer.path(d).addClass(f[1]).attr({zIndex:1}).add(a.group));l&&!c&&(k={stroke:f[2],
"stroke-width":b.lineWidth,fill:a.fillGraph&&a.color||"none"},f[3]?k.dashstyle=f[3]:"square"!==b.linecap&&(k["stroke-linecap"]=k["stroke-linejoin"]="round"),l[h](k).shadow(2>e&&b.shadow));l&&(l.startX=d.xMap,l.isArea=d.isArea)})},getZonesGraphs:function(a){this.zones.forEach(function(b,d){d=["zone-graph-"+d,"highcharts-graph highcharts-zone-graph-"+d+" "+(b.className||"")];this.chart.styledMode||d.push(b.color||this.color,b.dashStyle||this.options.dashStyle);a.push(d)},this);return a},applyZones:function(){var a=
this,b=this.chart,d=b.renderer,c=this.zones,f,e,g=this.clips||[],q,m=this.graph,v=this.area,p=Math.max(b.chartWidth,b.chartHeight),r=this[(this.zoneAxis||"y")+"Axis"],n=b.inverted,x,u,y,E=!1;if(c.length&&(m||v)&&r&&void 0!==r.min){var z=r.reversed;var A=r.horiz;m&&!this.showLine&&m.hide();v&&v.hide();var C=r.getExtremes();c.forEach(function(c,k){f=z?A?b.plotWidth:0:A?0:r.toPixels(C.min)||0;f=Math.min(Math.max(h(e,f),0),p);e=Math.min(Math.max(Math.round(r.toPixels(h(c.value,C.max),!0)||0),0),p);E&&
(f=e=r.toPixels(C.max));x=Math.abs(f-e);u=Math.min(f,e);y=Math.max(f,e);r.isXAxis?(q={x:n?y:u,y:0,width:x,height:p},A||(q.x=b.plotHeight-q.x)):(q={x:0,y:n?y:u,width:p,height:x},A&&(q.y=b.plotWidth-q.y));n&&d.isVML&&(q=r.isXAxis?{x:0,y:z?u:y,height:q.width,width:b.chartWidth}:{x:q.y-b.plotLeft-b.spacingBox.x,y:0,width:q.height,height:b.chartHeight});g[k]?g[k].animate(q):g[k]=d.clipRect(q);m&&a["zone-graph-"+k].clip(g[k]);v&&a["zone-area-"+k].clip(g[k]);E=c.value>C.max;a.resetZones&&0===e&&(e=void 0)});
this.clips=g}else a.visible&&(m&&m.show(!0),v&&v.show(!0))},invertGroups:function(a){function b(){["group","markerGroup"].forEach(function(b){d[b]&&(c.renderer.isVML&&d[b].attr({width:d.yAxis.len,height:d.xAxis.len}),d[b].width=d.yAxis.len,d[b].height=d.xAxis.len,d[b].invert(a))})}var d=this,c=d.chart;if(d.xAxis){var f=C(c,"resize",b);C(d,"destroy",f);b(a);d.invertGroups=b}},plotGroup:function(a,b,d,c,f){var e=this[a],k=!e;k&&(this[a]=e=this.chart.renderer.g().attr({zIndex:c||.1}).add(f));e.addClass("highcharts-"+
b+" highcharts-series-"+this.index+" highcharts-"+this.type+"-series "+(A(this.colorIndex)?"highcharts-color-"+this.colorIndex+" ":"")+(this.options.className||"")+(e.hasClass("highcharts-tracker")?" highcharts-tracker":""),!0);e.attr({visibility:d})[k?"attr":"animate"](this.getPlotBox());return e},getPlotBox:function(){var a=this.chart,b=this.xAxis,d=this.yAxis;a.inverted&&(b=d,d=this.xAxis);return{translateX:b?b.left:a.plotLeft,translateY:d?d.top:a.plotTop,scaleX:1,scaleY:1}},render:function(){var a=
this,b=a.chart,d=a.options,c=!!a.animate&&b.renderer.isSVG&&x(d.animation).duration,e=a.visible?"inherit":"hidden",l=d.zIndex,h=a.hasRendered,g=b.seriesGroup,m=b.inverted;f(this,"render");var v=a.plotGroup("group","series",e,l,g);a.markerGroup=a.plotGroup("markerGroup","markers",e,l,g);c&&a.animate(!0);v.inverted=a.isCartesian||a.invertable?m:!1;a.drawGraph&&(a.drawGraph(),a.applyZones());a.visible&&a.drawPoints();a.drawDataLabels&&a.drawDataLabels();a.redrawPoints&&a.redrawPoints();a.drawTracker&&
!1!==a.options.enableMouseTracking&&a.drawTracker();a.invertGroups(m);!1===d.clip||a.sharedClipKey||h||v.clip(b.clipRect);c&&a.animate();h||(a.animationTimeout=q(function(){a.afterAnimate()},c));a.isDirty=!1;a.hasRendered=!0;f(a,"afterRender")},redraw:function(){var a=this.chart,b=this.isDirty||this.isDirtyData,d=this.group,c=this.xAxis,f=this.yAxis;d&&(a.inverted&&d.attr({width:a.plotWidth,height:a.plotHeight}),d.animate({translateX:h(c&&c.left,a.plotLeft),translateY:h(f&&f.top,a.plotTop)}));this.translate();
this.render();b&&delete this.kdTree},kdAxisArray:["clientX","plotY"],searchPoint:function(a,b){var d=this.xAxis,c=this.yAxis,f=this.chart.inverted;return this.searchKDTree({clientX:f?d.len-a.chartY+d.pos:a.chartX-d.pos,plotY:f?c.len-a.chartX+c.pos:a.chartY-c.pos},b,a)},buildKDTree:function(a){function b(a,c,f){var e;if(e=a&&a.length){var k=d.kdAxisArray[c%f];a.sort(function(a,b){return a[k]-b[k]});e=Math.floor(e/2);return{point:a[e],left:b(a.slice(0,e),c+1,f),right:b(a.slice(e+1),c+1,f)}}}this.buildingKdTree=
!0;var d=this,c=-1<d.options.findNearestPointBy.indexOf("y")?2:1;delete d.kdTree;q(function(){d.kdTree=b(d.getValidPoints(null,!d.directTouch),c,c);d.buildingKdTree=!1},d.options.kdNow||a&&"touchstart"===a.type?0:1)},searchKDTree:function(a,b,d){function c(a,b,d,l){var g=b.point,q=f.kdAxisArray[d%l],t=g;var m=A(a[e])&&A(g[e])?Math.pow(a[e]-g[e],2):null;var v=A(a[k])&&A(g[k])?Math.pow(a[k]-g[k],2):null;v=(m||0)+(v||0);g.dist=A(v)?Math.sqrt(v):Number.MAX_VALUE;g.distX=A(m)?Math.sqrt(m):Number.MAX_VALUE;
q=a[q]-g[q];v=0>q?"left":"right";m=0>q?"right":"left";b[v]&&(v=c(a,b[v],d+1,l),t=v[h]<t[h]?v:g);b[m]&&Math.sqrt(q*q)<t[h]&&(a=c(a,b[m],d+1,l),t=a[h]<t[h]?a:t);return t}var f=this,e=this.kdAxisArray[0],k=this.kdAxisArray[1],h=b?"distX":"dist";b=-1<f.options.findNearestPointBy.indexOf("y")?2:1;this.kdTree||this.buildingKdTree||this.buildKDTree(d);if(this.kdTree)return c(a,this.kdTree,b,b)},pointPlacementToXValue:function(){var a=this.options.pointPlacement;"between"===a&&(a=.5);z(a)&&(a*=h(this.options.pointRange||
this.xAxis.pointRange));return a}});""});N(H,"parts/Stacking.js",[H["parts/Globals.js"],H["parts/Utilities.js"]],function(c,n){var A=n.defined,D=n.objectEach;n=c.Axis;var F=c.Chart,z=c.correctFloat,u=c.destroyObjectProperties,L=c.format,y=c.pick,C=c.Series;c.StackItem=function(c,m,p,g,b){var a=c.chart.inverted;this.axis=c;this.isNegative=p;this.options=m=m||{};this.x=g;this.total=null;this.points={};this.stack=b;this.rightCliff=this.leftCliff=0;this.alignOptions={align:m.align||(a?p?"left":"right":
"center"),verticalAlign:m.verticalAlign||(a?"middle":p?"bottom":"top"),y:m.y,x:m.x};this.textAlign=m.textAlign||(a?p?"right":"left":"center")};c.StackItem.prototype={destroy:function(){u(this,this.axis)},render:function(c){var m=this.axis.chart,p=this.options,g=p.format;g=g?L(g,this,m.time):p.formatter.call(this);this.label?this.label.attr({text:g,visibility:"hidden"}):(this.label=m.renderer.label(g,null,null,p.shape,null,null,p.useHTML,!1,"stack-labels"),g={text:g,align:this.textAlign,rotation:p.rotation,
padding:y(p.padding,0),visibility:"hidden"},this.label.attr(g),m.styledMode||this.label.css(p.style),this.label.added||this.label.add(c));this.label.labelrank=m.plotHeight},setOffset:function(c,m,p,g,b){var a=this.axis,d=a.chart;g=a.translate(a.usePercentage?100:g?g:this.total,0,0,0,1);p=a.translate(p?p:0);p=A(g)&&Math.abs(g-p);c=y(b,d.xAxis[0].translate(this.x))+c;a=A(g)&&this.getStackBox(d,this,c,g,m,p,a);m=this.label;c=this.isNegative;b="justify"===y(this.options.overflow,"justify");if(m&&a){p=
m.getBBox();var f=d.inverted?c?p.width:0:p.width/2,e=d.inverted?p.height/2:c?-4:p.height+4;this.alignOptions.x=y(this.options.x,0);m.align(this.alignOptions,null,a);g=m.alignAttr;m.show();g.y-=e;b&&(g.x-=f,C.prototype.justifyDataLabel.call(this.axis,m,this.alignOptions,g,p,a),g.x+=f);g.x=m.alignAttr.x;m.attr({x:g.x,y:g.y});y(!b&&this.options.crop,!0)&&((d=d.isInsidePlot(m.x+(d.inverted?0:-p.width/2),m.y)&&d.isInsidePlot(m.x+(d.inverted?c?-p.width:p.width:p.width/2),m.y+p.height))||m.hide())}},getStackBox:function(c,
m,p,g,b,a,d){var f=m.axis.reversed,e=c.inverted;c=d.height+d.pos-(e?c.plotLeft:c.plotTop);m=m.isNegative&&!f||!m.isNegative&&f;return{x:e?m?g:g-a:p,y:e?c-p-b:m?c-g-a:c-g,width:e?a:b,height:e?b:a}}};F.prototype.getStacks=function(){var c=this,m=c.inverted;c.yAxis.forEach(function(c){c.stacks&&c.hasVisibleSeries&&(c.oldStacks=c.stacks)});c.series.forEach(function(p){var g=p.xAxis&&p.xAxis.options||{};!p.options.stacking||!0!==p.visible&&!1!==c.options.chart.ignoreHiddenSeries||(p.stackKey=[p.type,y(p.options.stack,
""),m?g.top:g.left,m?g.height:g.width].join())})};n.prototype.buildStacks=function(){var c=this.series,m=y(this.options.reversedStacks,!0),p=c.length,g;if(!this.isXAxis){this.usePercentage=!1;for(g=p;g--;)c[m?g:p-g-1].setStackedPoints();for(g=0;g<p;g++)c[g].modifyStacks()}};n.prototype.renderStackTotals=function(){var c=this.chart,m=c.renderer,p=this.stacks,g=this.stackTotalGroup;g||(this.stackTotalGroup=g=m.g("stack-labels").attr({visibility:"visible",zIndex:6}).add());g.translate(c.plotLeft,c.plotTop);
D(p,function(b){D(b,function(a){a.render(g)})})};n.prototype.resetStacks=function(){var c=this,m=c.stacks;c.isXAxis||D(m,function(m){D(m,function(g,b){g.touched<c.stacksTouched?(g.destroy(),delete m[b]):(g.total=null,g.cumulative=null)})})};n.prototype.cleanStacks=function(){if(!this.isXAxis){if(this.oldStacks)var c=this.stacks=this.oldStacks;D(c,function(c){D(c,function(c){c.cumulative=c.total})})}};C.prototype.setStackedPoints=function(){if(this.options.stacking&&(!0===this.visible||!1===this.chart.options.chart.ignoreHiddenSeries)){var n=
this.processedXData,m=this.processedYData,p=[],g=m.length,b=this.options,a=b.threshold,d=y(b.startFromThreshold&&a,0),f=b.stack;b=b.stacking;var e=this.stackKey,h="-"+e,r=this.negStacks,u=this.yAxis,q=u.stacks,v=u.oldStacks,k,t;u.stacksTouched+=1;for(t=0;t<g;t++){var B=n[t];var I=m[t];var w=this.getStackIndicator(w,B,this.index);var l=w.key;var J=(k=r&&I<(d?0:a))?h:e;q[J]||(q[J]={});q[J][B]||(v[J]&&v[J][B]?(q[J][B]=v[J][B],q[J][B].total=null):q[J][B]=new c.StackItem(u,u.options.stackLabels,k,B,f));
J=q[J][B];null!==I?(J.points[l]=J.points[this.index]=[y(J.cumulative,d)],A(J.cumulative)||(J.base=l),J.touched=u.stacksTouched,0<w.index&&!1===this.singleStacks&&(J.points[l][0]=J.points[this.index+","+B+",0"][0])):J.points[l]=J.points[this.index]=null;"percent"===b?(k=k?e:h,r&&q[k]&&q[k][B]?(k=q[k][B],J.total=k.total=Math.max(k.total,J.total)+Math.abs(I)||0):J.total=z(J.total+(Math.abs(I)||0))):J.total=z(J.total+(I||0));J.cumulative=y(J.cumulative,d)+(I||0);null!==I&&(J.points[l].push(J.cumulative),
p[t]=J.cumulative)}"percent"===b&&(u.usePercentage=!0);this.stackedYData=p;u.oldStacks={}}};C.prototype.modifyStacks=function(){var c=this,m=c.stackKey,p=c.yAxis.stacks,g=c.processedXData,b,a=c.options.stacking;c[a+"Stacker"]&&[m,"-"+m].forEach(function(d){for(var f=g.length,e,h;f--;)if(e=g[f],b=c.getStackIndicator(b,e,c.index,d),h=(e=p[d]&&p[d][e])&&e.points[b.key])c[a+"Stacker"](h,e,f)})};C.prototype.percentStacker=function(c,m,p){m=m.total?100/m.total:0;c[0]=z(c[0]*m);c[1]=z(c[1]*m);this.stackedYData[p]=
c[1]};C.prototype.getStackIndicator=function(c,m,p,g){!A(c)||c.x!==m||g&&c.key!==g?c={x:m,index:0,key:g}:c.index++;c.key=[p,m,c.index].join();return c}});N(H,"parts/Dynamics.js",[H["parts/Globals.js"],H["parts/Utilities.js"]],function(c,n){var A=n.defined,D=n.erase,F=n.isArray,z=n.isNumber,u=n.isObject,L=n.isString,y=n.objectEach,C=n.splat,x=c.addEvent,m=c.animate,p=c.Axis;n=c.Chart;var g=c.createElement,b=c.css,a=c.extend,d=c.fireEvent,f=c.merge,e=c.pick,h=c.Point,r=c.Series,E=c.seriesTypes,q=c.setAnimation;
c.cleanRecursively=function(a,b){var d={};y(a,function(f,e){if(u(a[e],!0)&&!a.nodeType&&b[e])f=c.cleanRecursively(a[e],b[e]),Object.keys(f).length&&(d[e]=f);else if(u(a[e])||a[e]!==b[e])d[e]=a[e]});return d};a(n.prototype,{addSeries:function(a,b,c){var f,k=this;a&&(b=e(b,!0),d(k,"addSeries",{options:a},function(){f=k.initSeries(a);k.isDirtyLegend=!0;k.linkSeries();d(k,"afterAddSeries",{series:f});b&&k.redraw(c)}));return f},addAxis:function(a,b,d,c){return this.createAxis(b?"xAxis":"yAxis",{axis:a,
redraw:d,animation:c})},addColorAxis:function(a,b,d){return this.createAxis("colorAxis",{axis:a,redraw:b,animation:d})},createAxis:function(a,b){var d=this.options,k="colorAxis"===a,h=b.redraw,g=b.animation;b=f(b.axis,{index:this[a].length,isX:"xAxis"===a});var l=k?new c.ColorAxis(this,b):new p(this,b);d[a]=C(d[a]||{});d[a].push(b);k&&(this.isDirtyLegend=!0);e(h,!0)&&this.redraw(g);return l},showLoading:function(d){var c=this,f=c.options,h=c.loadingDiv,q=f.loading,v=function(){h&&b(h,{left:c.plotLeft+
"px",top:c.plotTop+"px",width:c.plotWidth+"px",height:c.plotHeight+"px"})};h||(c.loadingDiv=h=g("div",{className:"highcharts-loading highcharts-loading-hidden"},null,c.container),c.loadingSpan=g("span",{className:"highcharts-loading-inner"},null,h),x(c,"redraw",v));h.className="highcharts-loading";c.loadingSpan.innerHTML=e(d,f.lang.loading,"");c.styledMode||(b(h,a(q.style,{zIndex:10})),b(c.loadingSpan,q.labelStyle),c.loadingShown||(b(h,{opacity:0,display:""}),m(h,{opacity:q.style.opacity||.5},{duration:q.showDuration||
0})));c.loadingShown=!0;v()},hideLoading:function(){var a=this.options,d=this.loadingDiv;d&&(d.className="highcharts-loading highcharts-loading-hidden",this.styledMode||m(d,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){b(d,{display:"none"})}}));this.loadingShown=!1},propsRequireDirtyBox:"backgroundColor borderColor borderWidth borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),propsRequireReflow:"margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft".split(" "),
propsRequireUpdateSeries:"chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" "),collectionsWithUpdate:"xAxis yAxis zAxis series colorAxis pane".split(" "),update:function(a,b,h,g){var k=this,q={credits:"addCredits",title:"setTitle",subtitle:"setSubtitle",caption:"setCaption"},l,m,t,v=a.isResponsiveOptions,r=[];d(k,"update",{options:a});v||k.setResponsive(!1,!0);a=c.cleanRecursively(a,k.options);f(!0,k.userOptions,a);if(l=a.chart){f(!0,k.options.chart,
l);"className"in l&&k.setClassName(l.className);"reflow"in l&&k.setReflow(l.reflow);if("inverted"in l||"polar"in l||"type"in l){k.propFromSeries();var p=!0}"alignTicks"in l&&(p=!0);y(l,function(a,b){-1!==k.propsRequireUpdateSeries.indexOf("chart."+b)&&(m=!0);-1!==k.propsRequireDirtyBox.indexOf(b)&&(k.isDirtyBox=!0);v||-1===k.propsRequireReflow.indexOf(b)||(t=!0)});!k.styledMode&&"style"in l&&k.renderer.setStyle(l.style)}!k.styledMode&&a.colors&&(this.options.colors=a.colors);a.plotOptions&&f(!0,this.options.plotOptions,
a.plotOptions);a.time&&this.time===c.time&&(this.time=new c.Time(a.time));y(a,function(a,b){if(k[b]&&"function"===typeof k[b].update)k[b].update(a,!1);else if("function"===typeof k[q[b]])k[q[b]](a);"chart"!==b&&-1!==k.propsRequireUpdateSeries.indexOf(b)&&(m=!0)});this.collectionsWithUpdate.forEach(function(b){if(a[b]){if("series"===b){var d=[];k[b].forEach(function(a,b){a.options.isInternal||d.push(e(a.options.index,b))})}C(a[b]).forEach(function(a,c){(c=A(a.id)&&k.get(a.id)||k[b][d?d[c]:c])&&c.coll===
b&&(c.update(a,!1),h&&(c.touched=!0));!c&&h&&k.collectionsWithInit[b]&&(k.collectionsWithInit[b][0].apply(k,[a].concat(k.collectionsWithInit[b][1]||[]).concat([!1])).touched=!0)});h&&k[b].forEach(function(a){a.touched||a.options.isInternal?delete a.touched:r.push(a)})}});r.forEach(function(a){a.remove&&a.remove(!1)});p&&k.axes.forEach(function(a){a.update({},!1)});m&&k.series.forEach(function(a){a.update({},!1)});a.loading&&f(!0,k.options.loading,a.loading);p=l&&l.width;l=l&&l.height;L(l)&&(l=c.relativeLength(l,
p||k.chartWidth));t||z(p)&&p!==k.chartWidth||z(l)&&l!==k.chartHeight?k.setSize(p,l,g):e(b,!0)&&k.redraw(g);d(k,"afterUpdate",{options:a,redraw:b,animation:g})},setSubtitle:function(a,b){this.applyDescription("subtitle",a);this.layOutTitles(b)},setCaption:function(a,b){this.applyDescription("caption",a);this.layOutTitles(b)}});n.prototype.collectionsWithInit={xAxis:[n.prototype.addAxis,[!0]],yAxis:[n.prototype.addAxis,[!1]],colorAxis:[n.prototype.addColorAxis,[!1]],series:[n.prototype.addSeries]};
a(h.prototype,{update:function(a,b,d,c){function f(){k.applyOptions(a);null===k.y&&h&&(k.graphic=h.destroy());u(a,!0)&&(h&&h.element&&a&&a.marker&&void 0!==a.marker.symbol&&(k.graphic=h.destroy()),a&&a.dataLabels&&k.dataLabel&&(k.dataLabel=k.dataLabel.destroy()),k.connector&&(k.connector=k.connector.destroy()));g=k.index;l.updateParallelArrays(k,g);m.data[g]=u(m.data[g],!0)||u(a,!0)?k.options:e(a,m.data[g]);l.isDirty=l.isDirtyData=!0;!l.fixedBox&&l.hasCartesianSeries&&(q.isDirtyBox=!0);"point"===
m.legendType&&(q.isDirtyLegend=!0);b&&q.redraw(d)}var k=this,l=k.series,h=k.graphic,g,q=l.chart,m=l.options;b=e(b,!0);!1===c?f():k.firePointEvent("update",{options:a},f)},remove:function(a,b){this.series.removePoint(this.series.data.indexOf(this),a,b)}});a(r.prototype,{addPoint:function(a,b,c,f,h){var k=this.options,l=this.data,g=this.chart,q=this.xAxis;q=q&&q.hasNames&&q.names;var m=k.data,t=this.xData,v;b=e(b,!0);var r={series:this};this.pointClass.prototype.applyOptions.apply(r,[a]);var p=r.x;
var n=t.length;if(this.requireSorting&&p<t[n-1])for(v=!0;n&&t[n-1]>p;)n--;this.updateParallelArrays(r,"splice",n,0,0);this.updateParallelArrays(r,n);q&&r.name&&(q[p]=r.name);m.splice(n,0,a);v&&(this.data.splice(n,0,null),this.processData());"point"===k.legendType&&this.generatePoints();c&&(l[0]&&l[0].remove?l[0].remove(!1):(l.shift(),this.updateParallelArrays(r,"shift"),m.shift()));!1!==h&&d(this,"addPoint",{point:r});this.isDirtyData=this.isDirty=!0;b&&g.redraw(f)},removePoint:function(a,b,d){var c=
this,f=c.data,k=f[a],l=c.points,h=c.chart,g=function(){l&&l.length===f.length&&l.splice(a,1);f.splice(a,1);c.options.data.splice(a,1);c.updateParallelArrays(k||{series:c},"splice",a,1);k&&k.destroy();c.isDirty=!0;c.isDirtyData=!0;b&&h.redraw()};q(d,h);b=e(b,!0);k?k.firePointEvent("remove",null,g):g()},remove:function(a,b,c,f){function k(){h.destroy(f);h.remove=null;l.isDirtyLegend=l.isDirtyBox=!0;l.linkSeries();e(a,!0)&&l.redraw(b)}var h=this,l=h.chart;!1!==c?d(h,"remove",null,k):k()},update:function(b,
k){b=c.cleanRecursively(b,this.userOptions);d(this,"update",{options:b});var h=this,g=h.chart,q=h.userOptions,m=h.initialType||h.type,l=b.type||q.type||g.options.chart.type,r=!(this.hasDerivedData||b.dataGrouping||l&&l!==this.type||void 0!==b.pointStart||b.pointInterval||b.pointIntervalUnit||b.keys),p=E[m].prototype,v,n=["group","markerGroup","dataLabelsGroup","transformGroup"],u=["eventOptions","navigatorSeries","baseSeries"],x=h.finishedAnimating&&{animation:!1},y={};r&&(u.push("data","isDirtyData",
"points","processedXData","processedYData","xIncrement","_hasPointMarkers","_hasPointLabels","mapMap","mapData","minY","maxY","minX","maxX"),!1!==b.visible&&u.push("area","graph"),h.parallelArrays.forEach(function(a){u.push(a+"Data")}),b.data&&this.setData(b.data,!1));b=f(q,x,{index:void 0===q.index?h.index:q.index,pointStart:e(q.pointStart,h.xData[0])},!r&&{data:h.options.data},b);r&&b.data&&(b.data=h.options.data);u=n.concat(u);u.forEach(function(a){u[a]=h[a];delete h[a]});h.remove(!1,null,!1,!0);
for(v in p)h[v]=void 0;E[l||m]?a(h,E[l||m].prototype):c.error(17,!0,g);u.forEach(function(a){h[a]=u[a]});h.init(g,b);if(r&&this.points){var z=h.options;!1===z.visible?(y.graphic=1,y.dataLabel=1):h._hasPointLabels||(l=z.marker,p=z.dataLabels,l&&(!1===l.enabled||"symbol"in l)&&(y.graphic=1),p&&!1===p.enabled&&(y.dataLabel=1));this.points.forEach(function(a){a&&a.series&&(a.resolveColor(),Object.keys(y).length&&a.destroyElements(y),!1===z.showInLegend&&a.legendItem&&g.legend.destroyItem(a))},this)}b.zIndex!==
q.zIndex&&n.forEach(function(a){h[a]&&h[a].attr({zIndex:b.zIndex})});h.initialType=m;g.linkSeries();d(this,"afterUpdate");e(k,!0)&&g.redraw(r?void 0:!1)},setName:function(a){this.name=this.options.name=this.userOptions.name=a;this.chart.isDirtyLegend=!0}});a(p.prototype,{update:function(b,d){var c=this.chart,k=b&&b.events||{};b=f(this.userOptions,b);c.options[this.coll].indexOf&&(c.options[this.coll][c.options[this.coll].indexOf(this.userOptions)]=b);y(c.options[this.coll].events,function(a,b){"undefined"===
typeof k[b]&&(k[b]=void 0)});this.destroy(!0);this.init(c,a(b,{events:k}));c.isDirtyBox=!0;e(d,!0)&&c.redraw()},remove:function(a){for(var b=this.chart,d=this.coll,c=this.series,f=c.length;f--;)c[f]&&c[f].remove(!1);D(b.axes,this);D(b[d],this);F(b.options[d])?b.options[d].splice(this.options.index,1):delete b.options[d];b[d].forEach(function(a,b){a.options.index=a.userOptions.index=b});this.destroy();b.isDirtyBox=!0;e(a,!0)&&b.redraw()},setTitle:function(a,b){this.update({title:a},b)},setCategories:function(a,
b){this.update({categories:a},b)}})});N(H,"parts/AreaSeries.js",[H["parts/Globals.js"],H["parts/Utilities.js"]],function(c,n){var A=n.objectEach,D=c.color,F=c.pick,z=c.Series;n=c.seriesType;n("area","line",{softThreshold:!1,threshold:0},{singleStacks:!1,getStackPoints:function(c){var n=[],u=[],z=this.xAxis,x=this.yAxis,m=x.stacks[this.stackKey],p={},g=this.index,b=x.series,a=b.length,d=F(x.options.reversedStacks,!0)?1:-1,f;c=c||this.points;if(this.options.stacking){for(f=0;f<c.length;f++)c[f].leftNull=
c[f].rightNull=null,p[c[f].x]=c[f];A(m,function(a,b){null!==a.total&&u.push(b)});u.sort(function(a,b){return a-b});var e=b.map(function(a){return a.visible});u.forEach(function(b,c){var h=0,q,r;if(p[b]&&!p[b].isNull)n.push(p[b]),[-1,1].forEach(function(k){var h=1===k?"rightNull":"leftNull",v=0,n=m[u[c+k]];if(n)for(f=g;0<=f&&f<a;)q=n.points[f],q||(f===g?p[b][h]=!0:e[f]&&(r=m[b].points[f])&&(v-=r[1]-r[0])),f+=d;p[b][1===k?"rightCliff":"leftCliff"]=v});else{for(f=g;0<=f&&f<a;){if(q=m[b].points[f]){h=
q[1];break}f+=d}h=x.translate(h,0,1,0,1);n.push({isNull:!0,plotX:z.translate(b,0,0,0,1),x:b,plotY:h,yBottom:h})}})}return n},getGraphPath:function(n){var u=z.prototype.getGraphPath,y=this.options,A=y.stacking,x=this.yAxis,m,p=[],g=[],b=this.index,a=x.stacks[this.stackKey],d=y.threshold,f=Math.round(x.getThreshold(y.threshold));y=c.pick(y.connectNulls,"percent"===A);var e=function(c,e,k){var h=n[c];c=A&&a[h.x].points[b];var q=h[k+"Null"]||0;k=h[k+"Cliff"]||0;h=!0;if(k||q){var m=(q?c[0]:c[1])+k;var v=
c[0]+k;h=!!q}else!A&&n[e]&&n[e].isNull&&(m=v=d);void 0!==m&&(g.push({plotX:r,plotY:null===m?f:x.getThreshold(m),isNull:h,isCliff:!0}),p.push({plotX:r,plotY:null===v?f:x.getThreshold(v),doCurve:!1}))};n=n||this.points;A&&(n=this.getStackPoints(n));for(m=0;m<n.length;m++){var h=n[m].isNull;var r=F(n[m].rectPlotX,n[m].plotX);var E=F(n[m].yBottom,f);if(!h||y)y||e(m,m-1,"left"),h&&!A&&y||(g.push(n[m]),p.push({x:m,plotX:r,plotY:E})),y||e(m,m+1,"right")}m=u.call(this,g,!0,!0);p.reversed=!0;h=u.call(this,
p,!0,!0);h.length&&(h[0]="L");h=m.concat(h);u=u.call(this,g,!1,y);h.xMap=m.xMap;this.areaPath=h;return u},drawGraph:function(){this.areaPath=[];z.prototype.drawGraph.apply(this);var c=this,n=this.areaPath,y=this.options,A=[["area","highcharts-area",this.color,y.fillColor]];this.zones.forEach(function(n,m){A.push(["zone-area-"+m,"highcharts-area highcharts-zone-area-"+m+" "+n.className,n.color||c.color,n.fillColor||y.fillColor])});A.forEach(function(u){var m=u[0],p=c[m],g=p?"animate":"attr",b={};p?
(p.endX=c.preventGraphAnimation?null:n.xMap,p.animate({d:n})):(b.zIndex=0,p=c[m]=c.chart.renderer.path(n).addClass(u[1]).add(c.group),p.isArea=!0);c.chart.styledMode||(b.fill=F(u[3],D(u[2]).setOpacity(F(y.fillOpacity,.75)).get()));p[g](b);p.startX=n.xMap;p.shiftUnit=y.step?2:1})},drawLegendSymbol:c.LegendSymbolMixin.drawRectangle});""});N(H,"parts/SplineSeries.js",[H["parts/Globals.js"]],function(c){var n=c.pick;c=c.seriesType;c("spline","line",{},{getPointSpline:function(c,D,F){var z=D.plotX,u=D.plotY,
A=c[F-1];F=c[F+1];if(A&&!A.isNull&&!1!==A.doCurve&&!D.isCliff&&F&&!F.isNull&&!1!==F.doCurve&&!D.isCliff){c=A.plotY;var y=F.plotX;F=F.plotY;var C=0;var x=(1.5*z+A.plotX)/2.5;var m=(1.5*u+c)/2.5;y=(1.5*z+y)/2.5;var p=(1.5*u+F)/2.5;y!==x&&(C=(p-m)*(y-z)/(y-x)+u-p);m+=C;p+=C;m>c&&m>u?(m=Math.max(c,u),p=2*u-m):m<c&&m<u&&(m=Math.min(c,u),p=2*u-m);p>F&&p>u?(p=Math.max(F,u),m=2*u-p):p<F&&p<u&&(p=Math.min(F,u),m=2*u-p);D.rightContX=y;D.rightContY=p}D=["C",n(A.rightContX,A.plotX),n(A.rightContY,A.plotY),n(x,
z),n(m,u),z,u];A.rightContX=A.rightContY=null;return D}});""});N(H,"parts/AreaSplineSeries.js",[H["parts/Globals.js"]],function(c){var n=c.seriesTypes.area.prototype,A=c.seriesType;A("areaspline","spline",c.defaultPlotOptions.area,{getStackPoints:n.getStackPoints,getGraphPath:n.getGraphPath,drawGraph:n.drawGraph,drawLegendSymbol:c.LegendSymbolMixin.drawRectangle});""});N(H,"parts/ColumnSeries.js",[H["parts/Globals.js"],H["parts/Utilities.js"]],function(c,n){var A=n.defined,D=n.isNumber,F=c.animObject,
z=c.color,u=c.extend,L=c.merge,y=c.pick,C=c.Series;n=c.seriesType;var x=c.svg;n("column","line",{borderRadius:0,crisp:!0,groupPadding:.2,marker:null,pointPadding:.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{halo:!1,brightness:.1},select:{color:"#cccccc",borderColor:"#000000"}},dataLabels:{align:null,verticalAlign:null,y:null},softThreshold:!1,startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0,borderColor:"#ffffff"},{cropShoulder:0,directTouch:!0,trackerGroups:["group",
"dataLabelsGroup"],negStacks:!0,init:function(){C.prototype.init.apply(this,arguments);var c=this,p=c.chart;p.hasRendered&&p.series.forEach(function(g){g.type===c.type&&(g.isDirty=!0)})},getColumnMetrics:function(){var c=this,p=c.options,g=c.xAxis,b=c.yAxis,a=g.options.reversedStacks;a=g.reversed&&!a||!g.reversed&&a;var d,f={},e=0;!1===p.grouping?e=1:c.chart.series.forEach(function(a){var h=a.yAxis,k=a.options;if(a.type===c.type&&(a.visible||!c.chart.options.chart.ignoreHiddenSeries)&&b.len===h.len&&
b.pos===h.pos){if(k.stacking){d=a.stackKey;void 0===f[d]&&(f[d]=e++);var g=f[d]}else!1!==k.grouping&&(g=e++);a.columnIndex=g}});var h=Math.min(Math.abs(g.transA)*(g.ordinalSlope||p.pointRange||g.closestPointRange||g.tickInterval||1),g.len),r=h*p.groupPadding,n=(h-2*r)/(e||1);p=Math.min(p.maxPointWidth||g.len,y(p.pointWidth,n*(1-2*p.pointPadding)));c.columnMetrics={width:p,offset:(n-p)/2+(r+((c.columnIndex||0)+(a?1:0))*n-h/2)*(a?-1:1)};return c.columnMetrics},crispCol:function(c,p,g,b){var a=this.chart,
d=this.borderWidth,f=-(d%2?.5:0);d=d%2?.5:1;a.inverted&&a.renderer.isVML&&(d+=1);this.options.crisp&&(g=Math.round(c+g)+f,c=Math.round(c)+f,g-=c);b=Math.round(p+b)+d;f=.5>=Math.abs(p)&&.5<b;p=Math.round(p)+d;b-=p;f&&b&&(--p,b+=1);return{x:c,y:p,width:g,height:b}},translate:function(){var c=this,p=c.chart,g=c.options,b=c.dense=2>c.closestPointRange*c.xAxis.transA;b=c.borderWidth=y(g.borderWidth,b?0:1);var a=c.yAxis,d=g.threshold,f=c.translatedThreshold=a.getThreshold(d),e=y(g.minPointLength,5),h=c.getColumnMetrics(),
r=h.width,n=c.barW=Math.max(r,1+2*b),q=c.pointXOffset=h.offset,v=c.dataMin,k=c.dataMax;p.inverted&&(f-=.5);g.pointPadding&&(n=Math.ceil(n));C.prototype.translate.apply(c);c.points.forEach(function(b){var h=y(b.yBottom,f),g=999+Math.abs(h),m=r;g=Math.min(Math.max(-g,b.plotY),a.len+g);var l=b.plotX+q,t=n,u=Math.min(g,h),x=Math.max(g,h)-u;if(e&&Math.abs(x)<e){x=e;var z=!a.reversed&&!b.negative||a.reversed&&b.negative;b.y===d&&c.dataMax<=d&&a.min<d&&v!==k&&(z=!z);u=Math.abs(u-f)>e?h-e:f-(z?e:0)}A(b.options.pointWidth)&&
(m=t=Math.ceil(b.options.pointWidth),l-=Math.round((m-r)/2));b.barX=l;b.pointWidth=m;b.tooltipPos=p.inverted?[a.len+a.pos-p.plotLeft-g,c.xAxis.len-l-t/2,x]:[l+t/2,g+a.pos-p.plotTop,x];b.shapeType=c.pointClass.prototype.shapeType||"rect";b.shapeArgs=c.crispCol.apply(c,b.isNull?[l,f,t,0]:[l,u,t,x])})},getSymbol:c.noop,drawLegendSymbol:c.LegendSymbolMixin.drawRectangle,drawGraph:function(){this.group[this.dense?"addClass":"removeClass"]("highcharts-dense-data")},pointAttribs:function(c,p){var g=this.options,
b=this.pointAttrToOptions||{};var a=b.stroke||"borderColor";var d=b["stroke-width"]||"borderWidth",f=c&&c.color||this.color,e=c&&c[a]||g[a]||this.color||f,h=c&&c[d]||g[d]||this[d]||0;b=c&&c.options.dashStyle||g.dashStyle;var m=y(g.opacity,1);if(c&&this.zones.length){var n=c.getZone();f=c.options.color||n&&(n.color||c.nonZonedColor)||this.color;n&&(e=n.borderColor||e,b=n.dashStyle||b,h=n.borderWidth||h)}p&&(c=L(g.states[p],c.options.states&&c.options.states[p]||{}),p=c.brightness,f=c.color||void 0!==
p&&z(f).brighten(c.brightness).get()||f,e=c[a]||e,h=c[d]||h,b=c.dashStyle||b,m=y(c.opacity,m));a={fill:f,stroke:e,"stroke-width":h,opacity:m};b&&(a.dashstyle=b);return a},drawPoints:function(){var c=this,p=this.chart,g=c.options,b=p.renderer,a=g.animationLimit||250,d;c.points.forEach(function(f){var e=f.graphic,h=e&&p.pointCount<a?"animate":"attr";if(D(f.plotY)&&null!==f.y){d=f.shapeArgs;e&&e.element.nodeName!==f.shapeType&&(e=e.destroy());if(e)e[h](L(d));else f.graphic=e=b[f.shapeType](d).add(f.group||
c.group);if(g.borderRadius)e[h]({r:g.borderRadius});p.styledMode||e[h](c.pointAttribs(f,f.selected&&"select")).shadow(!1!==f.allowShadow&&g.shadow,null,g.stacking&&!g.borderRadius);e.addClass(f.getClassName(),!0)}else e&&(f.graphic=e.destroy())})},animate:function(c){var m=this,g=this.yAxis,b=m.options,a=this.chart.inverted,d={},f=a?"translateX":"translateY";if(x)if(c)d.scaleY=.001,c=Math.min(g.pos+g.len,Math.max(g.pos,g.toPixels(b.threshold))),a?d.translateX=c-g.len:d.translateY=c,m.clipBox&&m.setClip(),
m.group.attr(d);else{var e=m.group.attr(f);m.group.animate({scaleY:1},u(F(m.options.animation),{step:function(a,b){d[f]=e+b.pos*(g.pos-e);m.group.attr(d)}}));m.animate=null}},remove:function(){var c=this,p=c.chart;p.hasRendered&&p.series.forEach(function(g){g.type===c.type&&(g.isDirty=!0)});C.prototype.remove.apply(c,arguments)}});""});N(H,"parts/BarSeries.js",[H["parts/Globals.js"]],function(c){c=c.seriesType;c("bar","column",null,{inverted:!0});""});N(H,"parts/ScatterSeries.js",[H["parts/Globals.js"]],
function(c){var n=c.Series,A=c.seriesType;A("scatter","line",{lineWidth:0,findNearestPointBy:"xy",jitter:{x:0,y:0},marker:{enabled:!0},tooltip:{headerFormat:'<span style="color:{point.color}">\u25cf</span> <span style="font-size: 10px"> {series.name}</span><br/>',pointFormat:"x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"}},{sorted:!1,requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group","markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1,drawGraph:function(){this.options.lineWidth&&
n.prototype.drawGraph.call(this)},applyJitter:function(){var c=this,n=this.options.jitter,z=this.points.length;n&&this.points.forEach(function(u,A){["x","y"].forEach(function(y,C){var x="plot"+y.toUpperCase();if(n[y]&&!u.isNull){var m=c[y+"Axis"];var p=n[y]*m.transA;if(m&&!m.isLog){var g=Math.max(0,u[x]-p);m=Math.min(m.len,u[x]+p);C=1E4*Math.sin(A+C*z);u[x]=g+(m-g)*(C-Math.floor(C));"x"===y&&(u.clientX=u.plotX)}}})})}});c.addEvent(n,"afterTranslate",function(){this.applyJitter&&this.applyJitter()});
""});N(H,"mixins/centered-series.js",[H["parts/Globals.js"],H["parts/Utilities.js"]],function(c,n){var A=n.isNumber,D=c.deg2rad,F=c.pick,z=c.relativeLength;c.CenteredSeriesMixin={getCenter:function(){var c=this.options,n=this.chart,y=2*(c.slicedOffset||0),A=n.plotWidth-2*y;n=n.plotHeight-2*y;var x=c.center;x=[F(x[0],"50%"),F(x[1],"50%"),c.size||"100%",c.innerSize||0];var m=Math.min(A,n),p;for(p=0;4>p;++p){var g=x[p];c=2>p||2===p&&/%$/.test(g);x[p]=z(g,[A,n,m,x[2]][p])+(c?y:0)}x[3]>x[2]&&(x[3]=x[2]);
return x},getStartAndEndRadians:function(c,n){c=A(c)?c:0;n=A(n)&&n>c&&360>n-c?n:c+360;return{start:D*(c+-90),end:D*(n+-90)}}}});N(H,"parts/PieSeries.js",[H["parts/Globals.js"],H["parts/Utilities.js"]],function(c,n){var A=n.defined,D=n.isNumber,F=c.addEvent;n=c.CenteredSeriesMixin;var z=n.getStartAndEndRadians,u=c.merge,H=c.noop,y=c.pick,C=c.Point,x=c.Series,m=c.seriesType,p=c.fireEvent,g=c.setAnimation;m("pie","line",{center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{allowOverlap:!0,connectorPadding:5,
distance:30,enabled:!0,formatter:function(){return this.point.isNull?void 0:this.point.name},softConnector:!0,x:0,connectorShape:"fixedOffset",crookDistance:"70%"},fillColor:void 0,ignoreHiddenPoint:!0,inactiveOtherPoints:!0,legendType:"point",marker:null,size:null,showInLegend:!1,slicedOffset:10,stickyTracking:!1,tooltip:{followPointer:!0},borderColor:"#ffffff",borderWidth:1,states:{hover:{brightness:.1}}},{isCartesian:!1,requireSorting:!1,directTouch:!0,noSharedTooltip:!0,trackerGroups:["group",
"dataLabelsGroup"],axisTypes:[],pointAttribs:c.seriesTypes.column.prototype.pointAttribs,animate:function(b){var a=this,d=a.points,c=a.startAngleRad;b||(d.forEach(function(b){var d=b.graphic,f=b.shapeArgs;d&&(d.attr({r:b.startR||a.center[3]/2,start:c,end:c}),d.animate({r:f.r,start:f.start,end:f.end},a.options.animation))}),a.animate=null)},hasData:function(){return!!this.processedXData.length},updateTotals:function(){var b,a=0,d=this.points,c=d.length,e=this.options.ignoreHiddenPoint;for(b=0;b<c;b++){var h=
d[b];a+=e&&!h.visible?0:h.isNull?0:h.y}this.total=a;for(b=0;b<c;b++)h=d[b],h.percentage=0<a&&(h.visible||!e)?h.y/a*100:0,h.total=a},generatePoints:function(){x.prototype.generatePoints.call(this);this.updateTotals()},getX:function(b,a,d){var c=this.center,e=this.radii?this.radii[d.index]:c[2]/2;return c[0]+(a?-1:1)*Math.cos(Math.asin(Math.max(Math.min((b-c[1])/(e+d.labelDistance),1),-1)))*(e+d.labelDistance)+(0<d.labelDistance?(a?-1:1)*this.options.dataLabels.padding:0)},translate:function(b){this.generatePoints();
var a=0,d=this.options,f=d.slicedOffset,e=f+(d.borderWidth||0),h=z(d.startAngle,d.endAngle),g=this.startAngleRad=h.start;h=(this.endAngleRad=h.end)-g;var m=this.points,q=d.dataLabels.distance;d=d.ignoreHiddenPoint;var v,k=m.length;b||(this.center=b=this.getCenter());for(v=0;v<k;v++){var t=m[v];var n=g+a*h;if(!d||t.visible)a+=t.percentage/100;var u=g+a*h;t.shapeType="arc";t.shapeArgs={x:b[0],y:b[1],r:b[2]/2,innerR:b[3]/2,start:Math.round(1E3*n)/1E3,end:Math.round(1E3*u)/1E3};t.labelDistance=y(t.options.dataLabels&&
t.options.dataLabels.distance,q);t.labelDistance=c.relativeLength(t.labelDistance,t.shapeArgs.r);this.maxLabelDistance=Math.max(this.maxLabelDistance||0,t.labelDistance);u=(u+n)/2;u>1.5*Math.PI?u-=2*Math.PI:u<-Math.PI/2&&(u+=2*Math.PI);t.slicedTranslation={translateX:Math.round(Math.cos(u)*f),translateY:Math.round(Math.sin(u)*f)};var w=Math.cos(u)*b[2]/2;var l=Math.sin(u)*b[2]/2;t.tooltipPos=[b[0]+.7*w,b[1]+.7*l];t.half=u<-Math.PI/2||u>Math.PI/2?1:0;t.angle=u;n=Math.min(e,t.labelDistance/5);t.labelPosition=
{natural:{x:b[0]+w+Math.cos(u)*t.labelDistance,y:b[1]+l+Math.sin(u)*t.labelDistance},"final":{},alignment:0>t.labelDistance?"center":t.half?"right":"left",connectorPosition:{breakAt:{x:b[0]+w+Math.cos(u)*n,y:b[1]+l+Math.sin(u)*n},touchingSliceAt:{x:b[0]+w,y:b[1]+l}}}}p(this,"afterTranslate")},drawEmpty:function(){var b=this.options;if(0===this.total){var a=this.center[0];var d=this.center[1];this.graph||(this.graph=this.chart.renderer.circle(a,d,0).addClass("highcharts-graph").add(this.group));this.graph.animate({"stroke-width":b.borderWidth,
cx:a,cy:d,r:this.center[2]/2,fill:b.fillColor||"none",stroke:b.color||"#cccccc"})}else this.graph&&(this.graph=this.graph.destroy())},redrawPoints:function(){var b=this,a=b.chart,d=a.renderer,c,e,h,g,m=b.options.shadow;this.drawEmpty();!m||b.shadowGroup||a.styledMode||(b.shadowGroup=d.g("shadow").attr({zIndex:-1}).add(b.group));b.points.forEach(function(f){var q={};e=f.graphic;if(!f.isNull&&e){g=f.shapeArgs;c=f.getTranslate();if(!a.styledMode){var k=f.shadowGroup;m&&!k&&(k=f.shadowGroup=d.g("shadow").add(b.shadowGroup));
k&&k.attr(c);h=b.pointAttribs(f,f.selected&&"select")}f.delayedRendering?(e.setRadialReference(b.center).attr(g).attr(c),a.styledMode||e.attr(h).attr({"stroke-linejoin":"round"}).shadow(m,k),f.delayedRendering=!1):(e.setRadialReference(b.center),a.styledMode||u(!0,q,h),u(!0,q,g,c),e.animate(q));e.attr({visibility:f.visible?"inherit":"hidden"});e.addClass(f.getClassName())}else e&&(f.graphic=e.destroy())})},drawPoints:function(){var b=this.chart.renderer;this.points.forEach(function(a){a.graphic||
(a.graphic=b[a.shapeType](a.shapeArgs).add(a.series.group),a.delayedRendering=!0)})},searchPoint:H,sortByAngle:function(b,a){b.sort(function(b,c){return void 0!==b.angle&&(c.angle-b.angle)*a})},drawLegendSymbol:c.LegendSymbolMixin.drawRectangle,getCenter:n.getCenter,getSymbol:H,drawGraph:null},{init:function(){C.prototype.init.apply(this,arguments);var b=this;b.name=y(b.name,"Slice");var a=function(a){b.slice("select"===a.type)};F(b,"select",a);F(b,"unselect",a);return b},isValid:function(){return D(this.y)&&
0<=this.y},setVisible:function(b,a){var c=this,f=c.series,e=f.chart,h=f.options.ignoreHiddenPoint;a=y(a,h);b!==c.visible&&(c.visible=c.options.visible=b=void 0===b?!c.visible:b,f.options.data[f.data.indexOf(c)]=c.options,["graphic","dataLabel","connector","shadowGroup"].forEach(function(a){if(c[a])c[a][b?"show":"hide"](!0)}),c.legendItem&&e.legend.colorizeItem(c,b),b||"hover"!==c.state||c.setState(""),h&&(f.isDirty=!0),a&&e.redraw())},slice:function(b,a,c){var d=this.series;g(c,d.chart);y(a,!0);this.sliced=
this.options.sliced=A(b)?b:!this.sliced;d.options.data[d.data.indexOf(this)]=this.options;this.graphic.animate(this.getTranslate());this.shadowGroup&&this.shadowGroup.animate(this.getTranslate())},getTranslate:function(){return this.sliced?this.slicedTranslation:{translateX:0,translateY:0}},haloPath:function(b){var a=this.shapeArgs;return this.sliced||!this.visible?[]:this.series.chart.renderer.symbols.arc(a.x,a.y,a.r+b,a.r+b,{innerR:a.r-1,start:a.start,end:a.end})},connectorShapes:{fixedOffset:function(b,
a,c){var d=a.breakAt;a=a.touchingSliceAt;return["M",b.x,b.y].concat(c.softConnector?["C",b.x+("left"===b.alignment?-5:5),b.y,2*d.x-a.x,2*d.y-a.y,d.x,d.y]:["L",d.x,d.y]).concat(["L",a.x,a.y])},straight:function(b,a){a=a.touchingSliceAt;return["M",b.x,b.y,"L",a.x,a.y]},crookedLine:function(b,a,d){a=a.touchingSliceAt;var f=this.series,e=f.center[0],h=f.chart.plotWidth,g=f.chart.plotLeft;f=b.alignment;var m=this.shapeArgs.r;d=c.relativeLength(d.crookDistance,1);d="left"===f?e+m+(h+g-e-m)*(1-d):g+(e-m)*
d;e=["L",d,b.y];if("left"===f?d>b.x||d<a.x:d<b.x||d>a.x)e=[];return["M",b.x,b.y].concat(e).concat(["L",a.x,a.y])}},getConnectorPath:function(){var b=this.labelPosition,a=this.series.options.dataLabels,c=a.connectorShape,f=this.connectorShapes;f[c]&&(c=f[c]);return c.call(this,{x:b.final.x,y:b.final.y,alignment:b.alignment},b.connectorPosition,a)}});""});N(H,"parts/DataLabels.js",[H["parts/Globals.js"],H["parts/Utilities.js"]],function(c,n){var A=n.defined,D=n.isArray,F=n.objectEach,z=n.splat,u=c.arrayMax,
H=c.extend,y=c.format,C=c.merge;n=c.noop;var x=c.pick,m=c.relativeLength,p=c.Series,g=c.seriesTypes,b=c.stableSort;c.distribute=function(a,d,f){function e(a,b){return a.target-b.target}var h,g=!0,m=a,q=[];var p=0;var k=m.reducedLen||d;for(h=a.length;h--;)p+=a[h].size;if(p>k){b(a,function(a,b){return(b.rank||0)-(a.rank||0)});for(p=h=0;p<=k;)p+=a[h].size,h++;q=a.splice(h-1,a.length)}b(a,e);for(a=a.map(function(a){return{size:a.size,targets:[a.target],align:x(a.align,.5)}});g;){for(h=a.length;h--;)g=
a[h],p=(Math.min.apply(0,g.targets)+Math.max.apply(0,g.targets))/2,g.pos=Math.min(Math.max(0,p-g.size*g.align),d-g.size);h=a.length;for(g=!1;h--;)0<h&&a[h-1].pos+a[h-1].size>a[h].pos&&(a[h-1].size+=a[h].size,a[h-1].targets=a[h-1].targets.concat(a[h].targets),a[h-1].align=.5,a[h-1].pos+a[h-1].size>d&&(a[h-1].pos=d-a[h-1].size),a.splice(h,1),g=!0)}m.push.apply(m,q);h=0;a.some(function(a){var b=0;if(a.targets.some(function(){m[h].pos=a.pos+b;if(Math.abs(m[h].pos-m[h].target)>f)return m.slice(0,h+1).forEach(function(a){delete a.pos}),
m.reducedLen=(m.reducedLen||d)-.1*d,m.reducedLen>.1*d&&c.distribute(m,d,f),!0;b+=m[h].size;h++}))return!0});b(m,e)};p.prototype.drawDataLabels=function(){function a(a,b){var c=b.filter;return c?(b=c.operator,a=a[c.property],c=c.value,">"===b&&a>c||"<"===b&&a<c||">="===b&&a>=c||"<="===b&&a<=c||"=="===b&&a==c||"==="===b&&a===c?!0:!1):!0}function b(a,b){var c=[],d;if(D(a)&&!D(b))c=a.map(function(a){return C(a,b)});else if(D(b)&&!D(a))c=b.map(function(b){return C(a,b)});else if(D(a)||D(b))for(d=Math.max(a.length,
b.length);d--;)c[d]=C(a[d],b[d]);else c=C(a,b);return c}var f=this,e=f.chart,h=f.options,g=h.dataLabels,m=f.points,q,p=f.hasRendered||0,k=c.animObject(h.animation).duration,t=Math.min(k,200),n=!e.renderer.forExport&&x(g.defer,0<t),u=e.renderer;g=b(b(e.options.plotOptions&&e.options.plotOptions.series&&e.options.plotOptions.series.dataLabels,e.options.plotOptions&&e.options.plotOptions[f.type]&&e.options.plotOptions[f.type].dataLabels),g);c.fireEvent(this,"drawDataLabels");if(D(g)||g.enabled||f._hasPointLabels){var w=
f.plotGroup("dataLabelsGroup","data-labels",n&&!p?"hidden":"inherit",g.zIndex||6);n&&(w.attr({opacity:+p}),p||setTimeout(function(){var a=f.dataLabelsGroup;a&&(f.visible&&w.show(!0),a[h.animation?"animate":"attr"]({opacity:1},{duration:t}))},k-t));m.forEach(function(c){q=z(b(g,c.dlOptions||c.options&&c.options.dataLabels));q.forEach(function(b,d){var k=b.enabled&&(!c.isNull||c.dataLabelOnNull)&&a(c,b),g=c.dataLabels?c.dataLabels[d]:c.dataLabel,l=c.connectors?c.connectors[d]:c.connector,q=x(b.distance,
c.labelDistance),m=!g;if(k){var t=c.getLabelConfig();var p=x(b[c.formatPrefix+"Format"],b.format);t=A(p)?y(p,t,e.time):(b[c.formatPrefix+"Formatter"]||b.formatter).call(t,b);p=b.style;var n=b.rotation;e.styledMode||(p.color=x(b.color,p.color,f.color,"#000000"),"contrast"===p.color&&(c.contrastColor=u.getContrast(c.color||f.color),p.color=!A(q)&&b.inside||0>q||h.stacking?c.contrastColor:"#000000"),h.cursor&&(p.cursor=h.cursor));var r={r:b.borderRadius||0,rotation:n,padding:b.padding,zIndex:1};e.styledMode||
(r.fill=b.backgroundColor,r.stroke=b.borderColor,r["stroke-width"]=b.borderWidth);F(r,function(a,b){void 0===a&&delete r[b]})}!g||k&&A(t)?k&&A(t)&&(g?r.text=t:(c.dataLabels=c.dataLabels||[],g=c.dataLabels[d]=n?u.text(t,0,-9999).addClass("highcharts-data-label"):u.label(t,0,-9999,b.shape,null,null,b.useHTML,null,"data-label"),d||(c.dataLabel=g),g.addClass(" highcharts-data-label-color-"+c.colorIndex+" "+(b.className||"")+(b.useHTML?" highcharts-tracker":""))),g.options=b,g.attr(r),e.styledMode||g.css(p).shadow(b.shadow),
g.added||g.add(w),b.textPath&&!b.useHTML&&g.setTextPath(c.getDataLabelPath&&c.getDataLabelPath(g)||c.graphic,b.textPath),f.alignDataLabel(c,g,b,null,m)):(c.dataLabel=c.dataLabel&&c.dataLabel.destroy(),c.dataLabels&&(1===c.dataLabels.length?delete c.dataLabels:delete c.dataLabels[d]),d||delete c.dataLabel,l&&(c.connector=c.connector.destroy(),c.connectors&&(1===c.connectors.length?delete c.connectors:delete c.connectors[d])))})})}c.fireEvent(this,"afterDrawDataLabels")};p.prototype.alignDataLabel=
function(a,b,c,e,h){var d=this.chart,f=this.isCartesian&&d.inverted,g=x(a.dlBox&&a.dlBox.centerX,a.plotX,-9999),m=x(a.plotY,-9999),k=b.getBBox(),p=c.rotation,n=c.align,u=this.visible&&(a.series.forceDL||d.isInsidePlot(g,Math.round(m),f)||e&&d.isInsidePlot(g,f?e.x+1:e.y+e.height-1,f)),w="justify"===x(c.overflow,"justify");if(u){var l=d.renderer.fontMetrics(d.styledMode?void 0:c.style.fontSize,b).b;e=H({x:f?this.yAxis.len-m:g,y:Math.round(f?this.xAxis.len-g:m),width:0,height:0},e);H(c,{width:k.width,
height:k.height});p?(w=!1,g=d.renderer.rotCorr(l,p),g={x:e.x+c.x+e.width/2+g.x,y:e.y+c.y+{top:0,middle:.5,bottom:1}[c.verticalAlign]*e.height},b[h?"attr":"animate"](g).attr({align:n}),m=(p+720)%360,m=180<m&&360>m,"left"===n?g.y-=m?k.height:0:"center"===n?(g.x-=k.width/2,g.y-=k.height/2):"right"===n&&(g.x-=k.width,g.y-=m?0:k.height),b.placed=!0,b.alignAttr=g):(b.align(c,null,e),g=b.alignAttr);w&&0<=e.height?this.justifyDataLabel(b,c,g,k,e,h):x(c.crop,!0)&&(u=d.isInsidePlot(g.x,g.y)&&d.isInsidePlot(g.x+
k.width,g.y+k.height));if(c.shape&&!p)b[h?"attr":"animate"]({anchorX:f?d.plotWidth-a.plotY:a.plotX,anchorY:f?d.plotHeight-a.plotX:a.plotY})}u||(b.hide(!0),b.placed=!1)};p.prototype.justifyDataLabel=function(a,b,c,e,g,m){var d=this.chart,f=b.align,h=b.verticalAlign,k=a.box?0:a.padding||0;var p=c.x+k;if(0>p){"right"===f?(b.align="left",b.inside=!0):b.x=-p;var n=!0}p=c.x+e.width-k;p>d.plotWidth&&("left"===f?(b.align="right",b.inside=!0):b.x=d.plotWidth-p,n=!0);p=c.y+k;0>p&&("bottom"===h?(b.verticalAlign=
"top",b.inside=!0):b.y=-p,n=!0);p=c.y+e.height-k;p>d.plotHeight&&("top"===h?(b.verticalAlign="bottom",b.inside=!0):b.y=d.plotHeight-p,n=!0);n&&(a.placed=!m,a.align(b,null,g));return n};g.pie&&(g.pie.prototype.dataLabelPositioners={radialDistributionY:function(a){return a.top+a.distributeBox.pos},radialDistributionX:function(a,b,c,e){return a.getX(c<b.top+2||c>b.bottom-2?e:c,b.half,b)},justify:function(a,b,c){return c[0]+(a.half?-1:1)*(b+a.labelDistance)},alignToPlotEdges:function(a,b,c,e){a=a.getBBox().width;
return b?a+e:c-a-e},alignToConnectors:function(a,b,c,e){var d=0,f;a.forEach(function(a){f=a.dataLabel.getBBox().width;f>d&&(d=f)});return b?d+e:c-d-e}},g.pie.prototype.drawDataLabels=function(){var a=this,b=a.data,f,e=a.chart,g=a.options.dataLabels,m=g.connectorPadding,n,q=e.plotWidth,v=e.plotHeight,k=e.plotLeft,t=Math.round(e.chartWidth/3),y,z=a.center,w=z[2]/2,l=z[1],J,D,F,H,L=[[],[]],M,G,N,Q,P=[0,0,0,0],U=a.dataLabelPositioners,V;a.visible&&(g.enabled||a._hasPointLabels)&&(b.forEach(function(a){a.dataLabel&&
a.visible&&a.dataLabel.shortened&&(a.dataLabel.attr({width:"auto"}).css({width:"auto",textOverflow:"clip"}),a.dataLabel.shortened=!1)}),p.prototype.drawDataLabels.apply(a),b.forEach(function(a){a.dataLabel&&(a.visible?(L[a.half].push(a),a.dataLabel._pos=null,!A(g.style.width)&&!A(a.options.dataLabels&&a.options.dataLabels.style&&a.options.dataLabels.style.width)&&a.dataLabel.getBBox().width>t&&(a.dataLabel.css({width:.7*t}),a.dataLabel.shortened=!0)):(a.dataLabel=a.dataLabel.destroy(),a.dataLabels&&
1===a.dataLabels.length&&delete a.dataLabels))}),L.forEach(function(b,d){var h=b.length,p=[],n;if(h){a.sortByAngle(b,d-.5);if(0<a.maxLabelDistance){var t=Math.max(0,l-w-a.maxLabelDistance);var r=Math.min(l+w+a.maxLabelDistance,e.plotHeight);b.forEach(function(a){0<a.labelDistance&&a.dataLabel&&(a.top=Math.max(0,l-w-a.labelDistance),a.bottom=Math.min(l+w+a.labelDistance,e.plotHeight),n=a.dataLabel.getBBox().height||21,a.distributeBox={target:a.labelPosition.natural.y-a.top+n/2,size:n,rank:a.y},p.push(a.distributeBox))});
t=r+n-t;c.distribute(p,t,t/5)}for(Q=0;Q<h;Q++){f=b[Q];F=f.labelPosition;J=f.dataLabel;N=!1===f.visible?"hidden":"inherit";G=t=F.natural.y;p&&A(f.distributeBox)&&(void 0===f.distributeBox.pos?N="hidden":(H=f.distributeBox.size,G=U.radialDistributionY(f)));delete f.positionIndex;if(g.justify)M=U.justify(f,w,z);else switch(g.alignTo){case "connectors":M=U.alignToConnectors(b,d,q,k);break;case "plotEdges":M=U.alignToPlotEdges(J,d,q,k);break;default:M=U.radialDistributionX(a,f,G,t)}J._attr={visibility:N,
align:F.alignment};J._pos={x:M+g.x+({left:m,right:-m}[F.alignment]||0),y:G+g.y-10};F.final.x=M;F.final.y=G;x(g.crop,!0)&&(D=J.getBBox().width,t=null,M-D<m&&1===d?(t=Math.round(D-M+m),P[3]=Math.max(t,P[3])):M+D>q-m&&0===d&&(t=Math.round(M+D-q+m),P[1]=Math.max(t,P[1])),0>G-H/2?P[0]=Math.max(Math.round(-G+H/2),P[0]):G+H/2>v&&(P[2]=Math.max(Math.round(G+H/2-v),P[2])),J.sideOverflow=t)}}}),0===u(P)||this.verifyDataLabelOverflow(P))&&(this.placeDataLabels(),this.points.forEach(function(b){V=C(g,b.options.dataLabels);
if(n=x(V.connectorWidth,1)){var c;y=b.connector;if((J=b.dataLabel)&&J._pos&&b.visible&&0<b.labelDistance){N=J._attr.visibility;if(c=!y)b.connector=y=e.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-"+b.colorIndex+(b.className?" "+b.className:"")).add(a.dataLabelsGroup),e.styledMode||y.attr({"stroke-width":n,stroke:V.connectorColor||b.color||"#666666"});y[c?"attr":"animate"]({d:b.getConnectorPath()});y.attr("visibility",N)}else y&&(b.connector=y.destroy())}}))},g.pie.prototype.placeDataLabels=
function(){this.points.forEach(function(a){var b=a.dataLabel,c;b&&a.visible&&((c=b._pos)?(b.sideOverflow&&(b._attr.width=Math.max(b.getBBox().width-b.sideOverflow,0),b.css({width:b._attr.width+"px",textOverflow:(this.options.dataLabels.style||{}).textOverflow||"ellipsis"}),b.shortened=!0),b.attr(b._attr),b[b.moved?"animate":"attr"](c),b.moved=!0):b&&b.attr({y:-9999}));delete a.distributeBox},this)},g.pie.prototype.alignDataLabel=n,g.pie.prototype.verifyDataLabelOverflow=function(a){var b=this.center,
c=this.options,e=c.center,g=c.minSize||80,p=null!==c.size;if(!p){if(null!==e[0])var n=Math.max(b[2]-Math.max(a[1],a[3]),g);else n=Math.max(b[2]-a[1]-a[3],g),b[0]+=(a[3]-a[1])/2;null!==e[1]?n=Math.max(Math.min(n,b[2]-Math.max(a[0],a[2])),g):(n=Math.max(Math.min(n,b[2]-a[0]-a[2]),g),b[1]+=(a[0]-a[2])/2);n<b[2]?(b[2]=n,b[3]=Math.min(m(c.innerSize||0,n),n),this.translate(b),this.drawDataLabels&&this.drawDataLabels()):p=!0}return p});g.column&&(g.column.prototype.alignDataLabel=function(a,b,c,e,g){var d=
this.chart.inverted,f=a.series,h=a.dlBox||a.shapeArgs,m=x(a.below,a.plotY>x(this.translatedThreshold,f.yAxis.len)),k=x(c.inside,!!this.options.stacking);h&&(e=C(h),0>e.y&&(e.height+=e.y,e.y=0),h=e.y+e.height-f.yAxis.len,0<h&&(e.height-=h),d&&(e={x:f.yAxis.len-e.y-e.height,y:f.xAxis.len-e.x-e.width,width:e.height,height:e.width}),k||(d?(e.x+=m?0:e.width,e.width=0):(e.y+=m?e.height:0,e.height=0)));c.align=x(c.align,!d||k?"center":m?"right":"left");c.verticalAlign=x(c.verticalAlign,d||k?"middle":m?"top":
"bottom");p.prototype.alignDataLabel.call(this,a,b,c,e,g);c.inside&&a.contrastColor&&b.css({color:a.contrastColor})})});N(H,"modules/overlapping-datalabels.src.js",[H["parts/Globals.js"],H["parts/Utilities.js"]],function(c,n){var A=n.isArray,D=n.objectEach;n=c.Chart;var F=c.pick,z=c.addEvent,u=c.fireEvent;z(n,"render",function(){var c=[];(this.labelCollectors||[]).forEach(function(n){c=c.concat(n())});(this.yAxis||[]).forEach(function(n){n.options.stackLabels&&!n.options.stackLabels.allowOverlap&&
D(n.stacks,function(n){D(n,function(n){c.push(n.label)})})});(this.series||[]).forEach(function(n){var u=n.options.dataLabels;n.visible&&(!1!==u.enabled||n._hasPointLabels)&&n.points.forEach(function(n){n.visible&&(A(n.dataLabels)?n.dataLabels:n.dataLabel?[n.dataLabel]:[]).forEach(function(m){var p=m.options;m.labelrank=F(p.labelrank,n.labelrank,n.shapeArgs&&n.shapeArgs.height);p.allowOverlap||c.push(m)})})});this.hideOverlappingLabels(c)});n.prototype.hideOverlappingLabels=function(c){var n=this,
z=c.length,x=n.renderer,m,p,g;var b=function(a){var b=a.box?0:a.padding||0;var c=0;if(a&&(!a.alignAttr||a.placed)){var d=a.alignAttr||{x:a.attr("x"),y:a.attr("y")};var f=a.parentGroup;a.width||(c=a.getBBox(),a.width=c.width,a.height=c.height,c=x.fontMetrics(null,a.element).h);return{x:d.x+(f.translateX||0)+b,y:d.y+(f.translateY||0)+b-c,width:a.width-2*b,height:a.height-2*b}}};for(p=0;p<z;p++)if(m=c[p])m.oldOpacity=m.opacity,m.newOpacity=1,m.absoluteBox=b(m);c.sort(function(a,b){return(b.labelrank||
0)-(a.labelrank||0)});for(p=0;p<z;p++){var a=(b=c[p])&&b.absoluteBox;for(m=p+1;m<z;++m){var d=(g=c[m])&&g.absoluteBox;!a||!d||b===g||0===b.newOpacity||0===g.newOpacity||d.x>a.x+a.width||d.x+d.width<a.x||d.y>a.y+a.height||d.y+d.height<a.y||((b.labelrank<g.labelrank?b:g).newOpacity=0)}}c.forEach(function(a){var b;if(a){var c=a.newOpacity;a.oldOpacity!==c&&(a.alignAttr&&a.placed?(c?a.show(!0):b=function(){a.hide(!0);a.placed=!1},a.alignAttr.opacity=c,a[a.isOld?"animate":"attr"](a.alignAttr,null,b),u(n,
"afterHideOverlappingLabels")):a.attr({opacity:c}));a.isOld=!0}})}});N(H,"parts/Interaction.js",[H["parts/Globals.js"],H["parts/Utilities.js"]],function(c,n){var A=n.defined,D=n.isArray,F=n.isObject,z=n.objectEach,u=c.addEvent;n=c.Chart;var H=c.createElement,y=c.css,C=c.defaultOptions,x=c.defaultPlotOptions,m=c.extend,p=c.fireEvent,g=c.hasTouch,b=c.Legend,a=c.merge,d=c.pick,f=c.Point,e=c.Series,h=c.seriesTypes,r=c.svg;var E=c.TrackerMixin={drawTrackerPoint:function(){var a=this,b=a.chart,c=b.pointer,
d=function(a){var b=c.getPointFromEvent(a);void 0!==b&&(c.isDirectTouch=!0,b.onMouseOver(a))},e;a.points.forEach(function(a){e=D(a.dataLabels)?a.dataLabels:a.dataLabel?[a.dataLabel]:[];a.graphic&&(a.graphic.element.point=a);e.forEach(function(b){b.div?b.div.point=a:b.element.point=a})});a._hasTracking||(a.trackerGroups.forEach(function(e){if(a[e]){a[e].addClass("highcharts-tracker").on("mouseover",d).on("mouseout",function(a){c.onTrackerMouseOut(a)});if(g)a[e].on("touchstart",d);!b.styledMode&&a.options.cursor&&
a[e].css(y).css({cursor:a.options.cursor})}}),a._hasTracking=!0);p(this,"afterDrawTracker")},drawTrackerGraph:function(){var a=this,b=a.options,c=b.trackByArea,d=[].concat(c?a.areaPath:a.graphPath),e=d.length,f=a.chart,h=f.pointer,l=f.renderer,m=f.options.tooltip.snap,n=a.tracker,u,x=function(){if(f.hoverSeries!==a)a.onMouseOver()},y="rgba(192,192,192,"+(r?.0001:.002)+")";if(e&&!c)for(u=e+1;u--;)"M"===d[u]&&d.splice(u+1,0,d[u+1]-m,d[u+2],"L"),(u&&"M"===d[u]||u===e)&&d.splice(u,0,"L",d[u-2]+m,d[u-
1]);n?n.attr({d:d}):a.graph&&(a.tracker=l.path(d).attr({visibility:a.visible?"visible":"hidden",zIndex:2}).addClass(c?"highcharts-tracker-area":"highcharts-tracker-line").add(a.group),f.styledMode||a.tracker.attr({"stroke-linejoin":"round",stroke:y,fill:c?y:"none","stroke-width":a.graph.strokeWidth()+(c?0:2*m)}),[a.tracker,a.markerGroup].forEach(function(a){a.addClass("highcharts-tracker").on("mouseover",x).on("mouseout",function(a){h.onTrackerMouseOut(a)});b.cursor&&!f.styledMode&&a.css({cursor:b.cursor});
if(g)a.on("touchstart",x)}));p(this,"afterDrawTracker")}};h.column&&(h.column.prototype.drawTracker=E.drawTrackerPoint);h.pie&&(h.pie.prototype.drawTracker=E.drawTrackerPoint);h.scatter&&(h.scatter.prototype.drawTracker=E.drawTrackerPoint);m(b.prototype,{setItemEvents:function(b,c,d){var e=this,g=e.chart.renderer.boxWrapper,k=b instanceof f,h="highcharts-legend-"+(k?"point":"series")+"-active",l=e.chart.styledMode;(d?c:b.legendGroup).on("mouseover",function(){b.visible&&e.allItems.forEach(function(a){b!==
a&&a.setState("inactive",!k)});b.setState("hover");b.visible&&g.addClass(h);l||c.css(e.options.itemHoverStyle)}).on("mouseout",function(){e.chart.styledMode||c.css(a(b.visible?e.itemStyle:e.itemHiddenStyle));e.allItems.forEach(function(a){b!==a&&a.setState("",!k)});g.removeClass(h);b.setState()}).on("click",function(a){var c=function(){b.setVisible&&b.setVisible();e.allItems.forEach(function(a){b!==a&&a.setState(b.visible?"inactive":"",!k)})};g.removeClass(h);a={browserEvent:a};b.firePointEvent?b.firePointEvent("legendItemClick",
a,c):p(b,"legendItemClick",a,c)})},createCheckboxForItem:function(a){a.checkbox=H("input",{type:"checkbox",className:"highcharts-legend-checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,this.chart.container);u(a.checkbox,"click",function(b){p(a.series||a,"checkboxClick",{checked:b.target.checked,item:a},function(){a.select()})})}});m(n.prototype,{showResetZoom:function(){function a(){b.zoomOut()}var b=this,c=C.lang,d=b.options.chart.resetZoomButton,e=d.theme,f=
e.states,g="chart"===d.relativeTo||"spaceBox"===d.relativeTo?null:"plotBox";p(this,"beforeShowResetZoom",null,function(){b.resetZoomButton=b.renderer.button(c.resetZoom,null,null,a,e,f&&f.hover).attr({align:d.position.align,title:c.resetZoomTitle}).addClass("highcharts-reset-zoom").add().align(d.position,!1,g)});p(this,"afterShowResetZoom")},zoomOut:function(){p(this,"selection",{resetSelection:!0},this.zoom)},zoom:function(a){var b=this,c,e=b.pointer,f=!1,g=b.inverted?e.mouseDownX:e.mouseDownY;!a||
a.resetSelection?(b.axes.forEach(function(a){c=a.zoom()}),e.initiated=!1):a.xAxis.concat(a.yAxis).forEach(function(a){var d=a.axis,k=b.inverted?d.left:d.top,h=b.inverted?k+d.width:k+d.height,l=d.isXAxis,m=!1;if(!l&&g>=k&&g<=h||l||!A(g))m=!0;e[l?"zoomX":"zoomY"]&&m&&(c=d.zoom(a.min,a.max),d.displayBtn&&(f=!0))});var h=b.resetZoomButton;f&&!h?b.showResetZoom():!f&&F(h)&&(b.resetZoomButton=h.destroy());c&&b.redraw(d(b.options.chart.animation,a&&a.animation,100>b.pointCount))},pan:function(a,b){var c=
this,d=c.hoverPoints,e;p(this,"pan",{originalEvent:a},function(){d&&d.forEach(function(a){a.setState()});("xy"===b?[1,0]:[1]).forEach(function(b){b=c[b?"xAxis":"yAxis"][0];var d=b.horiz,f=a[d?"chartX":"chartY"];d=d?"mouseDownX":"mouseDownY";var g=c[d],k=(b.pointRange||0)/2,h=b.reversed&&!c.inverted||!b.reversed&&c.inverted?-1:1,m=b.getExtremes(),n=b.toValue(g-f,!0)+k*h;h=b.toValue(g+b.len-f,!0)-k*h;var p=h<n;g=p?h:n;n=p?n:h;h=Math.min(m.dataMin,k?m.min:b.toValue(b.toPixels(m.min)-b.minPixelPadding));
k=Math.max(m.dataMax,k?m.max:b.toValue(b.toPixels(m.max)+b.minPixelPadding));p=h-g;0<p&&(n+=p,g=h);p=n-k;0<p&&(n=k,g-=p);b.series.length&&g!==m.min&&n!==m.max&&(b.setExtremes(g,n,!1,!1,{trigger:"pan"}),e=!0);c[d]=f});e&&c.redraw(!1);y(c.container,{cursor:"move"})})}});m(f.prototype,{select:function(a,b){var c=this,e=c.series,f=e.chart;this.selectedStaging=a=d(a,!c.selected);c.firePointEvent(a?"select":"unselect",{accumulate:b},function(){c.selected=c.options.selected=a;e.options.data[e.data.indexOf(c)]=
c.options;c.setState(a&&"select");b||f.getSelectedPoints().forEach(function(a){var b=a.series;a.selected&&a!==c&&(a.selected=a.options.selected=!1,b.options.data[b.data.indexOf(a)]=a.options,a.setState(f.hoverPoints&&b.options.inactiveOtherPoints?"inactive":""),a.firePointEvent("unselect"))})});delete this.selectedStaging},onMouseOver:function(a){var b=this.series.chart,c=b.pointer;a=a?c.normalize(a):c.getChartCoordinatesFromPoint(this,b.inverted);c.runPointActions(a,this)},onMouseOut:function(){var a=
this.series.chart;this.firePointEvent("mouseOut");this.series.options.inactiveOtherPoints||(a.hoverPoints||[]).forEach(function(a){a.setState()});a.hoverPoints=a.hoverPoint=null},importEvents:function(){if(!this.hasImportedEvents){var b=this,d=a(b.series.options.point,b.options).events;b.events=d;z(d,function(a,d){c.isFunction(a)&&u(b,d,a)});this.hasImportedEvents=!0}},setState:function(a,b){var c=this.series,e=this.state,f=c.options.states[a||"normal"]||{},g=x[c.type].marker&&c.options.marker,h=
g&&!1===g.enabled,l=g&&g.states&&g.states[a||"normal"]||{},n=!1===l.enabled,q=c.stateMarkerGraphic,r=this.marker||{},v=c.chart,u=c.halo,y,z=g&&c.markerAttribs;a=a||"";if(!(a===this.state&&!b||this.selected&&"select"!==a||!1===f.enabled||a&&(n||h&&!1===l.enabled)||a&&r.states&&r.states[a]&&!1===r.states[a].enabled)){this.state=a;z&&(y=c.markerAttribs(this,a));if(this.graphic){e&&this.graphic.removeClass("highcharts-point-"+e);a&&this.graphic.addClass("highcharts-point-"+a);if(!v.styledMode){var A=
c.pointAttribs(this,a);var C=d(v.options.chart.animation,f.animation);c.options.inactiveOtherPoints&&((this.dataLabels||[]).forEach(function(a){a&&a.animate({opacity:A.opacity},C)}),this.connector&&this.connector.animate({opacity:A.opacity},C));this.graphic.animate(A,C)}y&&this.graphic.animate(y,d(v.options.chart.animation,l.animation,g.animation));q&&q.hide()}else{if(a&&l){e=r.symbol||c.symbol;q&&q.currentSymbol!==e&&(q=q.destroy());if(y)if(q)q[b?"animate":"attr"]({x:y.x,y:y.y});else e&&(c.stateMarkerGraphic=
q=v.renderer.symbol(e,y.x,y.y,y.width,y.height).add(c.markerGroup),q.currentSymbol=e);!v.styledMode&&q&&q.attr(c.pointAttribs(this,a))}q&&(q[a&&this.isInside?"show":"hide"](),q.element.point=this)}a=f.halo;f=(q=this.graphic||q)&&q.visibility||"inherit";a&&a.size&&q&&"hidden"!==f?(u||(c.halo=u=v.renderer.path().add(q.parentGroup)),u.show()[b?"animate":"attr"]({d:this.haloPath(a.size)}),u.attr({"class":"highcharts-halo highcharts-color-"+d(this.colorIndex,c.colorIndex)+(this.className?" "+this.className:
""),visibility:f,zIndex:-1}),u.point=this,v.styledMode||u.attr(m({fill:this.color||c.color,"fill-opacity":a.opacity},a.attributes))):u&&u.point&&u.point.haloPath&&u.animate({d:u.point.haloPath(0)},null,u.hide);p(this,"afterSetState")}},haloPath:function(a){return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX)-a,this.plotY-a,2*a,2*a)}});m(e.prototype,{onMouseOver:function(){var a=this.chart,b=a.hoverSeries;if(b&&b!==this)b.onMouseOut();this.options.events.mouseOver&&p(this,"mouseOver");
this.setState("hover");a.hoverSeries=this},onMouseOut:function(){var a=this.options,b=this.chart,c=b.tooltip,d=b.hoverPoint;b.hoverSeries=null;if(d)d.onMouseOut();this&&a.events.mouseOut&&p(this,"mouseOut");!c||this.stickyTracking||c.shared&&!this.noSharedTooltip||c.hide();b.series.forEach(function(a){a.setState("",!0)})},setState:function(a,b){var c=this,e=c.options,f=c.graph,g=e.inactiveOtherPoints,h=e.states,l=e.lineWidth,m=e.opacity,n=d(h[a||"normal"]&&h[a||"normal"].animation,c.chart.options.chart.animation);
e=0;a=a||"";if(c.state!==a&&([c.group,c.markerGroup,c.dataLabelsGroup].forEach(function(b){b&&(c.state&&b.removeClass("highcharts-series-"+c.state),a&&b.addClass("highcharts-series-"+a))}),c.state=a,!c.chart.styledMode)){if(h[a]&&!1===h[a].enabled)return;a&&(l=h[a].lineWidth||l+(h[a].lineWidthPlus||0),m=d(h[a].opacity,m));if(f&&!f.dashstyle)for(h={"stroke-width":l},f.animate(h,n);c["zone-graph-"+e];)c["zone-graph-"+e].attr(h),e+=1;g||[c.group,c.markerGroup,c.dataLabelsGroup,c.labelBySeries].forEach(function(a){a&&
a.animate({opacity:m},n)})}b&&g&&c.points&&c.setAllPointsToState(a)},setAllPointsToState:function(a){this.points.forEach(function(b){b.setState&&b.setState(a)})},setVisible:function(a,b){var c=this,d=c.chart,e=c.legendItem,f=d.options.chart.ignoreHiddenSeries,g=c.visible;var h=(c.visible=a=c.options.visible=c.userOptions.visible=void 0===a?!g:a)?"show":"hide";["group","dataLabelsGroup","markerGroup","tracker","tt"].forEach(function(a){if(c[a])c[a][h]()});if(d.hoverSeries===c||(d.hoverPoint&&d.hoverPoint.series)===
c)c.onMouseOut();e&&d.legend.colorizeItem(c,a);c.isDirty=!0;c.options.stacking&&d.series.forEach(function(a){a.options.stacking&&a.visible&&(a.isDirty=!0)});c.linkedSeries.forEach(function(b){b.setVisible(a,!1)});f&&(d.isDirtyBox=!0);p(c,h);!1!==b&&d.redraw()},show:function(){this.setVisible(!0)},hide:function(){this.setVisible(!1)},select:function(a){this.selected=a=this.options.selected=void 0===a?!this.selected:a;this.checkbox&&(this.checkbox.checked=a);p(this,a?"select":"unselect")},drawTracker:E.drawTrackerGraph})});
N(H,"parts/Responsive.js",[H["parts/Globals.js"],H["parts/Utilities.js"]],function(c,n){var A=n.isArray,D=n.isObject,F=n.objectEach,z=n.splat;n=c.Chart;var u=c.pick;n.prototype.setResponsive=function(n,u){var y=this.options.responsive,x=[],m=this.currentResponsive;!u&&y&&y.rules&&y.rules.forEach(function(m){void 0===m._id&&(m._id=c.uniqueKey());this.matchResponsiveRule(m,x)},this);u=c.merge.apply(0,x.map(function(m){return c.find(y.rules,function(c){return c._id===m}).chartOptions}));u.isResponsiveOptions=
!0;x=x.toString()||void 0;x!==(m&&m.ruleIds)&&(m&&this.update(m.undoOptions,n,!0),x?(m=this.currentOptions(u),m.isResponsiveOptions=!0,this.currentResponsive={ruleIds:x,mergedOptions:u,undoOptions:m},this.update(u,n,!0)):this.currentResponsive=void 0)};n.prototype.matchResponsiveRule=function(c,n){var y=c.condition;(y.callback||function(){return this.chartWidth<=u(y.maxWidth,Number.MAX_VALUE)&&this.chartHeight<=u(y.maxHeight,Number.MAX_VALUE)&&this.chartWidth>=u(y.minWidth,0)&&this.chartHeight>=u(y.minHeight,
0)}).call(this)&&n.push(c._id)};n.prototype.currentOptions=function(c){function n(c,p,g,b){var a;F(c,function(c,f){if(!b&&-1<u.collectionsWithUpdate.indexOf(f))for(c=z(c),g[f]=[],a=0;a<c.length;a++)p[f][a]&&(g[f][a]={},n(c[a],p[f][a],g[f][a],b+1));else D(c)?(g[f]=A(c)?[]:{},n(c,p[f]||{},g[f],b+1)):g[f]=void 0===p[f]?null:p[f]})}var u=this,x={};n(c,this.options,x,0);return x}});N(H,"masters/highcharts.src.js",[H["parts/Globals.js"],H["parts/Utilities.js"]],function(c,n){var A=c.extend;A(c,{attr:n.attr,
defined:n.defined,erase:n.erase,isArray:n.isArray,isClass:n.isClass,isDOMElement:n.isDOMElement,isNumber:n.isNumber,isObject:n.isObject,isString:n.isString,objectEach:n.objectEach,pInt:n.pInt,splat:n.splat});return c});H["masters/highcharts.src.js"]._modules=H;return H["masters/highcharts.src.js"]});
//# sourceMappingURL=highcharts.js.map

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

/***/ 867:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__safe_safe__ = __webpack_require__(868);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__safe_html_safe_html__ = __webpack_require__(869);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__safe_safe__["a" /* SafePipe */], __WEBPACK_IMPORTED_MODULE_2__safe_html_safe_html__["a" /* SafeHtmlPipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__safe_safe__["a" /* SafePipe */], __WEBPACK_IMPORTED_MODULE_2__safe_html_safe_html__["a" /* SafeHtmlPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 868:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(32);
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
 * Generated class for the SafePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var SafePipe = /** @class */ (function () {
    /**
     * Takes a value and makes it lowercase.
     */
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'safe',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SafePipe);
    return SafePipe;
}());

//# sourceMappingURL=safe.js.map

/***/ }),

/***/ 869:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(32);
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
 * Generated class for the SafeHtmlPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var SafeHtmlPipe = /** @class */ (function () {
    /**
     * Takes a value and makes it lowercase.
     */
    function SafeHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    // transform(value: string, ...args) {
    //   return value.toLowerCase();
    // }
    SafeHtmlPipe.prototype.transform = function (style) {
        return this.sanitizer.bypassSecurityTrustHtml(style);
        //return this.sanitizer.bypassSecurityTrustStyle(style);
        // return this.sanitizer.bypassSecurityTrustXxx(style); - see docs
    };
    SafeHtmlPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'safeHtml',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());

//# sourceMappingURL=safe-html.js.map

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

/***/ }),

/***/ 872:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackgroundVerification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return metaData; });
var BackgroundVerification = /** @class */ (function () {
    function BackgroundVerification() {
        //// validation control veriables
        this.status = false;
        this.experience = [];
        this.refrence = [];
        this.highschool = new Education();
        this.graduation = new Education();
        this.postgraduation = new Education();
        this.experience.push(new Experience());
        this.background = new UserDetrail();
        this.refrence.push(new Refrence());
    }
    BackgroundVerification.prototype.addExperirnceDetail = function () {
        var tempExp = new Experience();
        this.experience.push(tempExp);
        console.log(this.experience);
    };
    BackgroundVerification.prototype.removeExperirnceDetail = function (data) {
        this.experience = this.experience.filter(function (element) {
            return data != element;
        });
    };
    BackgroundVerification.prototype.addReference = function () {
        var tempRef = new Refrence();
        this.refrence.push(tempRef);
        console.log('worked');
    };
    BackgroundVerification.prototype.removeReference = function (data) {
        this.refrence = this.refrence.filter(function (element) {
            return data != element;
        });
    };
    BackgroundVerification.prototype.initializeModal = function (data) {
        var _this = this;
        this.experience = [];
        this.refrence = [];
        this.highschool.initializeEducation(data.highschool);
        this.graduation.initializeEducation(data.graduation);
        this.postgraduation.initializeEducation(data.postgraduation);
        data.experience.forEach(function (element) {
            var tempExp = new Experience();
            tempExp.initializeExperience(element);
            _this.experience.push(tempExp);
        });
        this.background.iniializeUserDetails(data.background);
        data.refrence.forEach(function (element) {
            var tempRef = new Refrence();
            tempRef.initializeReference(element);
            _this.refrence.push(tempRef);
        });
    };
    BackgroundVerification.prototype.chanegGraduationMandatoryStatus = function () {
        this.graduation.is_mandatory = !this.graduation.is_mandatory;
        if (!this.graduation.is_mandatory) {
            this.postgraduation.is_mandatory = false;
        }
    };
    BackgroundVerification.prototype.chanegPostGraduationMandatoryStatus = function () {
        this.postgraduation.is_mandatory = !this.postgraduation.is_mandatory;
    };
    return BackgroundVerification;
}());

var Education = /** @class */ (function () {
    function Education() {
        this.is_mandatory = false;
        this.data = new EducationDetails();
    }
    Education.prototype.initializeEducation = function (data) {
        this.is_mandatory = data.is_mandatory;
        this.data.initializeEduDetails(data.data);
    };
    return Education;
}());
var EducationDetails = /** @class */ (function () {
    function EducationDetails() {
        this.auto_id = "";
        this.level_of_education = "";
        this.education_specialization_id = new metaData();
        // this.university_name = data.university_name.value;
        this.institution_name = new metaData();
        // this.is_complete = data.is_complete.value;
        this.education_from_date = new metaData();
        this.education_end_date = new metaData();
        this.expected_month_for_latest_marksheet = new metaData();
        this.address = new metaData();
        this.contact_number = new metaData();
        this.website_link = new metaData();
    }
    EducationDetails.prototype.initializeEduDetails = function (data) {
        this.auto_id = data.auto_id;
        this.level_of_education = data.level_of_education.value;
        this.education_specialization_id.InitializeMetaData(data.education_specialization_id);
        // this.university_name = data.university_name.value;
        this.institution_name.InitializeMetaData(data.institution_name);
        // this.is_complete = data.is_complete.value;
        this.education_from_date.InitializeMetaData(data.education_from_date);
        this.education_end_date.InitializeMetaData(data.education_end_date);
        this.expected_month_for_latest_marksheet.InitializeMetaData(data.expected_month_for_latest_marksheet);
        this.address.InitializeMetaData(data.address);
        this.contact_number.InitializeMetaData(data.contact_number);
        this.website_link.InitializeMetaData(data.website_link);
    };
    return EducationDetails;
}());
var Experience = /** @class */ (function () {
    function Experience() {
        this.auto_id = "";
        this.employer_name = new metaData();
        this.employee_code = new metaData();
        this.pre_start_date = new metaData();
        this.pre_end_date = new metaData();
        this.job_title = new metaData();
        this.last_drawn_sallary_annual = new metaData();
        this.employer_address = new metaData();
        this.country_id = new metaData();
        this.state = new metaData();
        this.city = new metaData();
        this.zip_code = new metaData();
        this.company_phone_number = new metaData();
        this.company_url = new metaData();
        this.responsibilities = new metaData();
        this.business_unit = new metaData();
        this.reason_of_leaving = new metaData();
        this.reporting_manager = new ReportingManeger();
        this.hr_department = new HrDepartment();
    }
    Experience.prototype.initializeExperience = function (data) {
        this.auto_id = data.auto_id;
        this.employer_name.InitializeMetaData(data.employer_name);
        this.employee_code.InitializeMetaData(data.employee_code);
        this.pre_start_date.InitializeMetaData(data.pre_start_date);
        this.pre_end_date.InitializeMetaData(data.pre_end_date);
        this.job_title.InitializeMetaData(data.job_title);
        this.last_drawn_sallary_annual.InitializeMetaData(data.last_drawn_sallary_annual);
        this.employer_address.InitializeMetaData(data.employer_address);
        this.country_id.InitializeMetaData(data.country_id);
        this.city.InitializeMetaData(data.city);
        this.state.InitializeMetaData(data.state);
        this.zip_code.InitializeMetaData(data.zip_code);
        this.company_phone_number.InitializeMetaData(data.company_phone_number);
        this.company_url.InitializeMetaData(data.company_url);
        this.responsibilities.InitializeMetaData(data.responsibilities);
        this.business_unit.InitializeMetaData(data.business_unit);
        this.reason_of_leaving.InitializeMetaData(data.reason_of_leaving);
        this.reporting_manager.initializeReportingManager(data.reporting_manager);
        this.hr_department.initializeHrDepartment(data.hr_department);
    };
    return Experience;
}());
var HrDepartment = /** @class */ (function () {
    function HrDepartment() {
        this.hrname = new metaData();
        this.hrdesignation = new metaData();
        this.hrmobile = new metaData();
        this.hrphone = new metaData();
        this.hremailid = new metaData();
    }
    HrDepartment.prototype.initializeHrDepartment = function (data) {
        this.hrname.InitializeMetaData(data.hrname);
        this.hrdesignation.InitializeMetaData(data.hrdesignation);
        this.hrmobile.InitializeMetaData(data.hrmobile);
        this.hrphone.InitializeMetaData(data.hrphone);
        this.hremailid.InitializeMetaData(data.hremailid);
    };
    return HrDepartment;
}());
var ReportingManeger = /** @class */ (function () {
    function ReportingManeger() {
        this.supervisorname = new metaData();
        this.supervisordesignation = new metaData();
        this.supervisorcontact = new metaData();
        this.supervisorphonenumber = new metaData();
        this.supervisoremailid = new metaData();
    }
    ReportingManeger.prototype.initializeReportingManager = function (data) {
        this.supervisorname.InitializeMetaData(data.supervisorname);
        this.supervisordesignation.InitializeMetaData(data.supervisordesignation);
        this.supervisorcontact.InitializeMetaData(data.supervisorcontact);
        this.supervisorphonenumber.InitializeMetaData(data.supervisorphonenumber);
        this.supervisoremailid.InitializeMetaData(data.supervisoremailid);
    };
    return ReportingManeger;
}());
var Refrence = /** @class */ (function () {
    function Refrence() {
        this.auto_id = "";
        this.company_email = new metaData();
        this.company_name = new metaData();
        this.contact_number = new metaData();
        this.designation = new metaData();
        this.name = new metaData();
        this.relationship = new metaData();
    }
    Refrence.prototype.initializeReference = function (data) {
        this.auto_id = data.auto_id;
        this.company_email.InitializeMetaData(data.company_email);
        this.company_name.InitializeMetaData(data.company_name);
        this.contact_number.InitializeMetaData(data.contact_number);
        this.designation.InitializeMetaData(data.designation);
        this.name.InitializeMetaData(data.name);
        this.relationship.InitializeMetaData(data.relationship);
    };
    return Refrence;
}());
var UserDetrail = /** @class */ (function () {
    function UserDetrail() {
        this.userName = new metaData();
        this.gender = "";
        this.contact = "";
        this.father_name = "";
        this.date_of_birth = "";
        this.place_of_birth = "";
        this.nationality_name = "";
        this.marital_status = "";
        this.email_id = "";
        this.employee_designation = "";
        this.department = "";
        this.date_of_joining = "";
    }
    UserDetrail.prototype.iniializeUserDetails = function (data) {
        this.userName.InitializeMetaData(data.userName);
        this.gender = data.gender;
        this.contact = data.contact;
        this.father_name = data.father_name;
        this.date_of_birth = data.date_of_birth;
        this.place_of_birth = data.place_of_birth;
        this.nationality_name = data.nationality_name;
        this.marital_status = data.marital_status;
        this.email_id = data.email_id;
        this.employee_designation = data.employee_designation;
        this.department = data.department;
        this.date_of_joining = data.date_of_joining;
    };
    return UserDetrail;
}());
var metaData = /** @class */ (function () {
    function metaData() {
        this.is_enable = true;
        this.hint_applicable = true;
        this.hint = "";
        this.value = "";
        this.is_mandatory = false;
    }
    metaData.prototype.valueStatus = function () {
        // console.log('data');
        if (!this.is_enable || !this.is_mandatory) {
            return true;
        }
        else {
            if (this.value) {
                if (this.value.trim().length > 0) {
                    return true;
                }
                else
                    return false;
            }
            else
                return false;
        }
    };
    metaData.prototype.InitializeMetaData = function (data) {
        this.is_enable = data.is_enable;
        this.hint_applicable = data.hint_applicable;
        this.hint = data.hint;
        this.value = data.value;
        this.is_mandatory = data.is_mandatory;
    };
    return metaData;
}());

//# sourceMappingURL=response-form-control.js.map

/***/ }),

/***/ 873:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_skeleton_home_skeleton__ = __webpack_require__(874);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__team_awesome_team_awesome__ = __webpack_require__(875);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nomination_category_nomination_category__ = __webpack_require__(876);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__news_view_news_view__ = __webpack_require__(877);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__post_details_skelton_post_details_skelton__ = __webpack_require__(878);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__like_users_like_users__ = __webpack_require__(879);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mycanvas_mycanvas__ = __webpack_require__(880);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pipes_pipes_module__ = __webpack_require__(867);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__custom_image_tag_custom_image_tag__ = __webpack_require__(884);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__show_html_show_html__ = __webpack_require__(885);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__from_fields_from_fields__ = __webpack_require__(886);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ionic_tooltips__ = __webpack_require__(870);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__home_skeleton_home_skeleton__["a" /* HomeSkeletonComponent */],
                __WEBPACK_IMPORTED_MODULE_2__team_awesome_team_awesome__["a" /* TeamAwesomeComponent */],
                __WEBPACK_IMPORTED_MODULE_3__nomination_category_nomination_category__["a" /* NominationCategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_4__news_view_news_view__["a" /* NewsViewComponent */],
                __WEBPACK_IMPORTED_MODULE_7__post_details_skelton_post_details_skelton__["a" /* PostDetailsSkeltonComponent */],
                __WEBPACK_IMPORTED_MODULE_11__custom_image_tag_custom_image_tag__["a" /* CustomImageTagComponent */],
                __WEBPACK_IMPORTED_MODULE_12__show_html_show_html__["a" /* ShowHtmlComponent */], __WEBPACK_IMPORTED_MODULE_13__from_fields_from_fields__["a" /* FromFieldsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__like_users_like_users__["a" /* LikeUsersComponent */],
                __WEBPACK_IMPORTED_MODULE_9__mycanvas_mycanvas__["a" /* MycanvasComponent */]],
            // imports: [IonicModule],
            imports: [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["o" /* IonicModule */], __WEBPACK_IMPORTED_MODULE_6__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_10__pipes_pipes_module__["a" /* PipesModule */], __WEBPACK_IMPORTED_MODULE_14_ionic_tooltips__["a" /* TooltipsModule */].forRoot()],
            exports: [__WEBPACK_IMPORTED_MODULE_1__home_skeleton_home_skeleton__["a" /* HomeSkeletonComponent */],
                __WEBPACK_IMPORTED_MODULE_2__team_awesome_team_awesome__["a" /* TeamAwesomeComponent */], __WEBPACK_IMPORTED_MODULE_13__from_fields_from_fields__["a" /* FromFieldsComponent */],
                __WEBPACK_IMPORTED_MODULE_3__nomination_category_nomination_category__["a" /* NominationCategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_4__news_view_news_view__["a" /* NewsViewComponent */],
                __WEBPACK_IMPORTED_MODULE_7__post_details_skelton_post_details_skelton__["a" /* PostDetailsSkeltonComponent */],
                __WEBPACK_IMPORTED_MODULE_8__like_users_like_users__["a" /* LikeUsersComponent */],
                __WEBPACK_IMPORTED_MODULE_11__custom_image_tag_custom_image_tag__["a" /* CustomImageTagComponent */],
                __WEBPACK_IMPORTED_MODULE_12__show_html_show_html__["a" /* ShowHtmlComponent */],
                __WEBPACK_IMPORTED_MODULE_9__mycanvas_mycanvas__["a" /* MycanvasComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 874:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeSkeletonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeSkeletonComponent = /** @class */ (function () {
    function HomeSkeletonComponent() {
        console.log('Hello HomeSkeletonComponent Component');
    }
    HomeSkeletonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'home-skeleton',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/components/home-skeleton/home-skeleton.html"*/'<div class="cardDiv topSlider">\n    <div class="tS1 skeletonBg"></div>\n    <div class="tS2 skeletonBg"></div> \n</div>\n<br>\n\n<div class="cardDiv One">\n  <div class="fourCircle skeletonBg"></div>\n  <div class="fourCircle skeletonBg"></div>\n  <div class="fourCircle skeletonBg"></div>\n  <div class="fourCircle skeletonBg"></div>\n</div><br>\n\n<div class="cardDiv Two">\n  <div class="Top skeletonBg"></div>\n  <div class="Middle skeletonBg"></div>\n  <div class="Bottom skeletonBg"></div>\n</div><br>\n\n<div class="cardDiv Two">\n  <div class="Top skeletonBg"></div>\n  <div class="Middle skeletonBg"></div>\n  <div class="Bottom skeletonBg"></div>\n</div><br>\n\n<div class="cardDiv Stories">\n  <div class="headDiv"><h2 class="skeletonBg"></h2></div>\n  <div class="rota skeletonBg"></div>\n  <div class="rota2 skeletonBg"></div>\n</div><br>\n\n<div class="cardDiv Wow">\n  <div class="headDiv"><h2 class="skeletonBg"></h2></div>\n  <div class="circle"><h2 class="skeletonBg"></h2><span class="skeletonBg"></span></div>\n  <div class="circle"><h2 class="skeletonBg"></h2><span class="skeletonBg"></span></div>\n  <div class="circle"><h2 class="skeletonBg"></h2><span class="skeletonBg"></span></div>\n</div><br>\n\n<div class="cardDiv SilverHall">\n  <div class="headDiv"><h2 class="skeletonBg"></h2><span class="skeletonBg"></span></div>\n  <div class="one"><h2 class="skeletonBg"></h2><span class="skeletonBg"></span><span class="skeletonBg"></span></div>\n  <div class="one"><h2 class="skeletonBg"></h2><span class="skeletonBg"></span><span class="skeletonBg"></span></div>\n</div><br>\n\n<div class="cardDiv SilverHall">\n  <div class="headDiv"><h2 class="skeletonBg"></h2><span class="skeletonBg"></span></div>\n  <div class="one"><h2 class="skeletonBg"></h2></div>\n  <div class="one"><h2 class="skeletonBg"></h2></div>\n</div><br>\n\n<div class="cardDiv PlatinumClub">\n  <div class="headDiv"><h2 class="skeletonBg"></h2><span class="skeletonBg"></span></div>\n  <div class="One"><h2 class="skeletonBg"></h2></div>\n  <div class="Two"><h2 class="skeletonBg"></h2></div>\n</div><br>\n\n<div class="cardDiv SilverHall">\n  <div class="headDiv"><h2 class="skeletonBg"></h2></div>\n  <div class="one"><h2 class="skeletonBg"></h2><span class="skeletonBg"></span><span class="skeletonBg"></span></div>\n  <div class="one"><h2 class="skeletonBg"></h2><span class="skeletonBg"></span><span class="skeletonBg"></span></div>\n</div><br>\n\n<div class="cardDiv News">\n  <div class="headDiv"><h2 class="skeletonBg"></h2></div>\n  <div class="One"><h2 class="skeletonBg"></h2><span class="skeletonBg"></span><span class="skeletonBg"></span></div>\n  <div class="Two"><h2 class="skeletonBg"></h2><span class="skeletonBg"></span><span class="skeletonBg"></span></div>\n</div><br>\n\n<div class="cardDiv News">\n  <div class="headDiv"><h2 class="skeletonBg"></h2></div>\n  <div class="One"><h2 class="skeletonBg"></h2></div>\n  <div class="Two"><h2 class="skeletonBg"></h2></div>\n</div><br>\n\n<div class="cardDiv QuickBytes">\n  <div class="headDiv"><h2 class="skeletonBg"></h2><span class="skeletonBg"></span></div>\n  <div class="One"><h2 class="skeletonBg"></h2><span class="skeletonBg"></span></div>\n  <div class="One"><h2 class="skeletonBg"></h2><span class="skeletonBg"></span></div>\n  <div class="One"><h2 class="skeletonBg"></h2><span class="skeletonBg"></span></div>\n</div><br>\n\n<div class="cardDiv QuickBytes">\n  <div class="headDiv"><h2 class="skeletonBg"></h2><span class="skeletonBg"></span></div>\n  <div class="One"><h2 class="skeletonBg"></h2><span class="skeletonBg"></span></div>\n  <div class="One"><h2 class="skeletonBg"></h2><span class="skeletonBg"></span></div>\n  <div class="One"><h2 class="skeletonBg"></h2><span class="skeletonBg"></span></div>\n</div><br>\n\n<div class="QuizTime skeletonBg"></div><br>\n\n<div class="cardDiv Album">\n  <div class="headDiv"><h2 class="skeletonBg"></h2><span class="skeletonBg"></span></div>\n  <div class="One"><h2 class="skeletonBg"></h2></div>\n  <div class="One"><h2 class="skeletonBg"></h2></div>\n  <div class="One"><h2 class="skeletonBg"></h2></div>\n  <div class="One"><h2 class="skeletonBg"></h2></div>\n</div><br>\n\n<div class="cardDiv Album">\n  <div class="headDiv"><h2 class="skeletonBg"></h2></div>\n  <div class="One"><h2 class="skeletonBg"></h2></div>\n  <div class="One"><h2 class="skeletonBg"></h2></div>\n</div><br>\n\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/components/home-skeleton/home-skeleton.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], HomeSkeletonComponent);
    return HomeSkeletonComponent;
}());

//# sourceMappingURL=home-skeleton.js.map

/***/ }),

/***/ 875:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamAwesomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeamAwesomeComponent = /** @class */ (function () {
    function TeamAwesomeComponent() {
        console.log('Hello TeamAwesomeComponent Component');
    }
    TeamAwesomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'team-awesome',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/components/team-awesome/team-awesome.html"*/'<div class="padd">\n\n  <div class="topSlider">\n    <div class="tS1 skeletonBg"></div>\n  </div>\n  <br>\n\n  <div class="cardDiv One">\n    <h2 class="skeletonBg"></h2>\n    <p class="skeletonBg"></p><br>\n    <div class="span"><span class="Circle skeletonBg"></span></div>\n    <div class="span"><span class="skeletonBg"></span></div>\n  </div><br>\n\n  <div class="cardDiv people">\n    <h1 class="skeletonBg"></h1>\n    <h4 class="skeletonBg"></h4>\n    <div class="one"><h2 class="skeletonBg"></h2><p class="skeletonBg"></p></div>\n    <div class="one"><h2 class="skeletonBg"></h2><p class="skeletonBg"></p></div>\n    <div class="one"><h2 class="skeletonBg"></h2><p class="skeletonBg"></p></div>    \n  </div><br>\n\n  <div class="botBtn skeletonBg"></div>\n\n  \n\n</div>\n\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/components/team-awesome/team-awesome.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TeamAwesomeComponent);
    return TeamAwesomeComponent;
}());

//# sourceMappingURL=team-awesome.js.map

/***/ }),

/***/ 876:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NominationCategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NominationCategoryComponent = /** @class */ (function () {
    function NominationCategoryComponent() {
        console.log('Hello NominationCategoryComponent Component');
    }
    NominationCategoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'nomination-category',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/components/nomination-category/nomination-category.html"*/'<div class="padd">\n\n  <div class="cardDiv people">\n    <div class="headDiv"><h1 class="skeletonBg"></h1></div>\n    <div class="one"><h2 class="skeletonBg"></h2><p class="skeletonBg"></p></div>\n    <div class="one"><h2 class="skeletonBg"></h2><p class="skeletonBg"></p></div>   \n  </div><br>\n\n  <div class="cardDiv people">\n    <div class="headDiv"><h1 class="skeletonBg"></h1></div>\n    <div class="one"><h2 class="skeletonBg"></h2><p class="skeletonBg"></p></div>\n    <div class="one"><h2 class="skeletonBg"></h2><p class="skeletonBg"></p></div>   \n  </div><br>\n\n  <div class="cardDiv people">\n    <div class="headDiv"><h1 class="skeletonBg"></h1></div>\n    <div class="one"><h2 class="skeletonBg"></h2><p class="skeletonBg"></p></div>\n    <div class="one"><h2 class="skeletonBg"></h2><p class="skeletonBg"></p></div>   \n  </div><br>\n  \n    \n  \n  </div>\n  \n  \n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/components/nomination-category/nomination-category.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], NominationCategoryComponent);
    return NominationCategoryComponent;
}());

//# sourceMappingURL=nomination-category.js.map

/***/ }),

/***/ 877:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
 * Generated class for the NewsViewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var NewsViewComponent = /** @class */ (function () {
    // text: string;
    function NewsViewComponent() {
        console.log('Hello NewsViewComponent Component');
        // this.text = 'Hello World';
    }
    NewsViewComponent.prototype.ngAfterViewInit = function () {
        console.log('image', this.image);
        console.log('title', this.title);
        console.log('date', this.date);
        console.log('flag', this.flag);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('postImage'),
        __metadata("design:type", Object)
    ], NewsViewComponent.prototype, "image", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('postTitle'),
        __metadata("design:type", Object)
    ], NewsViewComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('postDate'),
        __metadata("design:type", Object)
    ], NewsViewComponent.prototype, "date", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('postFlag'),
        __metadata("design:type", Object)
    ], NewsViewComponent.prototype, "flag", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], NewsViewComponent.prototype, "allData", void 0);
    NewsViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'news-view',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/components/news-view/news-view.html"*/'<ion-row class="customCardView">\n  <ion-col col-5>\n      <img *ngIf="!allData" [src]="image" height="77px" class="newsImg">\n      <div *ngIf="allData?.media_type==\'3\' && allData">\n          <div class="relativeDiv">\n          <iframe width="100%" height="80px"  [src]="allData?.media|safe" autostart="0" allowfullscreen frameborder="0"></iframe>\n          <div class="temptransparentVideo"></div>\n        </div>\n      </div>\n      <!-- <div *ngIf="allData?.media_type==\'2\' && allData">\n          <div class="relativeDiv">\n          <video [src]="allData?.media|safe" height="80px"  width="100%"  poster="{{allData?.thumbnail_image}}" controls controlsList="nodownload" type="video/*">\n          </video>\n          <div class="temptransparentVideo"></div>\n        </div>\n      </div> -->\n\n      <div *ngIf="allData?.media_type==\'2\' && allData">\n        <img class="imgcss" onerror="this.src=\'../../assets/watermark/watermark.png\'" #myImage\n        src="{{allData?.thumbnail_image}}">\n    </div>\n\n\n\n      <div *ngIf="allData?.media_type==\'1\' && allData">\n          <img class="imgcss" onerror="this.src=\'../../assets/watermark/watermark.png\'" #myImage\n          src="{{allData?.media}}">\n      </div>\n  </ion-col>\n  <ion-col col-7>\n    <ion-row>\n      <ion-col col-12>\n          <p class="text1"><b>{{title}}</b></p>\n      </ion-col>\n    </ion-row> <br>\n    <ion-row>\n      <ion-col col-12>\n      <ion-footer no-border>\n        <ion-row>\n            <ion-col col-6 >\n                <img *ngIf="flag==\'1\'" src="../../assets/icon/news_flag.png" class="moduleIcon">\n                <img *ngIf="flag==\'2\'" src="../../assets/icon/news_flag.png" class="moduleIcon">\n                <img *ngIf="flag==\'3\'" src="../../assets/icon/news_flag.png" class="moduleIcon">\n                <img *ngIf="flag==\'4\'" src="../../assets/icon/news_flag.png" class="moduleIcon">\n                <img *ngIf="flag==\'5\'" src="../../assets/icon/news_flag.png" class="moduleIcon">\n            </ion-col>\n            <ion-col col-6 text-right class="date">{{date}}</ion-col>\n        </ion-row>\n      </ion-footer>\n    </ion-col></ion-row>             \n    \n  </ion-col>\n</ion-row>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/components/news-view/news-view.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], NewsViewComponent);
    return NewsViewComponent;
}());

//# sourceMappingURL=news-view.js.map

/***/ }),

/***/ 878:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostDetailsSkeltonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
 * Generated class for the PostDetailsSkeltonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var PostDetailsSkeltonComponent = /** @class */ (function () {
    function PostDetailsSkeltonComponent() {
        console.log('Hello PostDetailsSkeltonComponent Component');
        this.text = 'Hello World';
    }
    PostDetailsSkeltonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'post-details-skelton',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/components/post-details-skelton/post-details-skelton.html"*/'<div class="postImage"></div>\n<div class="postTitleSkelton">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>\n<div class="postParaSkelton"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>\n<div class="postParaSkelton">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>\n<ion-row>\n    <ion-col col-12 class="bottom-line blurMe">\n        <button ion-button color="theme" class="blurMe" small clear>3 Likes</button>\n        <button ion-button color="theme" class="blurMe" small clear>2 Comments</button>\n    </ion-col>\n</ion-row>\n\n<ion-row class="themeShadow">\n    <ion-col col-6>\n        <button ion-button color="theme" clear class="blurMe"> <ion-icon name="md-thumbs-up"></ion-icon>&nbsp;&nbsp; Like</button>\n    </ion-col>\n\n    <ion-col col-6>\n        <button ion-button color="theme" clear class="blurMe"> <ion-icon name="md-chatboxes"></ion-icon>&nbsp;&nbsp; Comment</button>\n    </ion-col>\n</ion-row>\n<!-- <ion-row *ngFor="let data of [0,1]">\n    <ion-col col-2>\n      <img [src]="previousePageData.userImage" class="commentedUserImage" imageViewer/>\n    </ion-col>\n    <ion-col col-10>\n      <div class="commentHolder">\n        <p class="commentedUserName">Test</p>\n        <p class="commentedUserLocation">Pune</p>\n        <p class="commentedUserDate">02 May, 2019</p>\n        <p class="comment">Very nice article</p>\n      </div>\n      <ion-row>\n          <ion-col col-12 >\n              <button ion-button color="theme" small clear><ion-icon name="md-thumbs-up"></ion-icon>.&nbsp;&nbsp; 3 Likes</button>\n            |  <button ion-button color="theme" small clear><ion-icon name="md-chatboxes"></ion-icon>.&nbsp;&nbsp;2 Comments</button>\n          </ion-col>\n      </ion-row>\n    </ion-col>\n\n</ion-row> -->'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/components/post-details-skelton/post-details-skelton.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], PostDetailsSkeltonComponent);
    return PostDetailsSkeltonComponent;
}());

//# sourceMappingURL=post-details-skelton.js.map

/***/ }),

/***/ 879:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LikeUsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_img_viewer__ = __webpack_require__(163);
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
 * Generated class for the LikeUsersComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var LikeUsersComponent = /** @class */ (function () {
    function LikeUsersComponent(imageViewerCtrl) {
        this._imageViewerCtrl = imageViewerCtrl;
        console.log('Hello LikeUsersComponent Component');
        this.text = 'Hello World';
    }
    LikeUsersComponent.prototype.presentImage = function (myImage) {
        var imageViewer = this._imageViewerCtrl.create(myImage);
        imageViewer.present();
        setTimeout(function () { return imageViewer.dismiss(); }, 30000);
        imageViewer.onDidDismiss(function () { return console.log('Viewer dismissed'); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('userImage'),
        __metadata("design:type", Object)
    ], LikeUsersComponent.prototype, "image", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('userName'),
        __metadata("design:type", Object)
    ], LikeUsersComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('userdate'),
        __metadata("design:type", Object)
    ], LikeUsersComponent.prototype, "date", void 0);
    LikeUsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'like-users',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/components/like-users/like-users.html"*/'<!-- Generated template for the LikeUsersComponent component -->\n<div class="customCardView">\n  <!-- {{text}} -->\n  <ion-list class="comList">\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="{{image}}"  #myImage (click)="presentImage(myImage)" class="userImage" onerror="this.src=\'../../assets/watermark/watermark.png\'">\n        </ion-avatar>\n        <h2 class="userName">{{name}}</h2>\n        <p>{{date}}</p>\n      </ion-item>\n    </ion-list>\n</div>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/components/like-users/like-users.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_img_viewer__["a" /* ImageViewerController */]])
    ], LikeUsersComponent);
    return LikeUsersComponent;
}());

//# sourceMappingURL=like-users.js.map

/***/ }),

/***/ 880:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MycanvasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highcharts__ = __webpack_require__(862);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_highcharts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Boost = __webpack_require__(881);
var noData = __webpack_require__(882);
var More = __webpack_require__(883);
Boost(__WEBPACK_IMPORTED_MODULE_1_highcharts__);
noData(__WEBPACK_IMPORTED_MODULE_1_highcharts__);
More(__WEBPACK_IMPORTED_MODULE_1_highcharts__);
noData(__WEBPACK_IMPORTED_MODULE_1_highcharts__);
var MycanvasComponent = /** @class */ (function () {
    function MycanvasComponent(zone) {
        this.zone = zone;
        // chart: Highcharts.ChartObject;
        this.charts = [];
        // console.log('Hello MycanvasComponent Component');
        this.text = 'Hello World';
    }
    MycanvasComponent.prototype.ngOnInit = function () {
    };
    MycanvasComponent.prototype.ionViewWillEnter = function () {
        console.log("this.data", this.data);
    };
    MycanvasComponent.prototype.ngAfterViewInit = function () {
        console.log("this.data", this.data);
        // this.zone.run(() => {
        // setTimeout(() =>{  
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i].type == 'pie') {
                this.options2 = {
                    chart: {
                        renderTo: "chartTarget" + this.data[i].unique_id,
                        type: 'pie',
                        animation: false,
                        height: this.height,
                    },
                    legend: {
                        // verticalAlign: 'bottom',
                        // verticalAlign: 'middle',
                        layout: 'horizontal',
                        alignColumns: true,
                        align: 'left',
                        padding: 3,
                        itemMarginTop: 5,
                        itemMarginBottom: 5,
                        itemStyle: {
                            lineHeight: '14px'
                        },
                        width: '100%',
                        labelFormatter: function () {
                            return this.name + ': ' + this.y;
                        }
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            innerSize: '70%',
                            showInLegend: true
                        },
                    },
                    tooltip: {
                        //        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                        pointFormat: '<b>{point.y}</b>'
                    },
                    title: {
                        text: '',
                    },
                    credits: {
                        enabled: false
                    },
                    series: [{
                            type: 'pie',
                            // name: this.data[i].name,
                            data: this.data[i].data,
                            states: {
                                inactive: {
                                    opacity: 1
                                }
                            }
                        }]
                };
                console.log(this.options2.chart.renderTo);
            }
            else if (this.data[i].type == 'bar') {
                this.options2 = {
                    chart: {
                        renderTo: "chartTarget" + this.data[i].unique_id,
                        type: 'column',
                        animation: false,
                    },
                    title: {
                        text: ''
                    },
                    subtitle: {
                        text: ''
                    },
                    xAxis: {
                        categories: this.data[i].award_list,
                        title: {
                            text: null
                        }
                    },
                    yAxis: {
                        min: 0,
                        title: {},
                        labels: {
                            overflow: 'justify'
                        }
                    },
                    tooltip: {},
                    plotOptions: {
                        bar: {
                            dataLabels: {
                                enabled: true
                            }
                        },
                        series: {
                            states: {
                                inactive: {
                                    opacity: 1
                                }
                            }
                        }
                    },
                    // legend: {
                    //     layout: 'vertical',
                    //     align: 'right',
                    //     verticalAlign: 'top',
                    //     x: -40,
                    //     y: 80,
                    //     floating: true,
                    //     borderWidth: 1,
                    //     backgroundColor:
                    //         Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
                    //     shadow: true
                    // },
                    legend: {
                        // verticalAlign: 'bottom',
                        // verticalAlign: 'middle',
                        layout: 'horizontal',
                        alignColumns: true,
                        align: 'left',
                        padding: 3,
                        itemMarginTop: 5,
                        itemMarginBottom: 5,
                        itemStyle: {
                            lineHeight: '14px'
                        },
                        width: '100%',
                        labelFormatter: function () {
                            return "<p style=\"width:50%; padding:10px 0;\">" + this.name + "</p>";
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    series: this.data[i].series
                };
                console.log(this.options2.chart.renderTo);
                // this.charts[i] = new Highcharts.Chart(this.options2); 
            }
            else if (this.data[i].type == 'award') {
                this.options2 = {
                    colors: ['#345da4', '#b7b7b7', '#5b9bd5', '#542e56', '#ec2553'],
                    chart: {
                        renderTo: "chartTarget" + this.data[i].unique_id,
                        type: 'pie',
                        animation: false,
                        height: this.height,
                    },
                    legend: {
                        // verticalAlign: 'bottom',
                        // verticalAlign: 'middle',
                        layout: 'horizontal',
                        alignColumns: false,
                        align: 'left',
                        padding: 3,
                        itemMarginTop: 5,
                        itemMarginBottom: 5,
                        itemStyle: {
                            lineHeight: '14px'
                        },
                        //   width: '100%',
                        labelFormatter: function () {
                            //   return this.name+': '+this.y;
                            return this.name + ": \u20B9 " + this.y;
                        }
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            innerSize: '70%',
                            showInLegend: true
                        },
                        series: {
                            point: {
                                events: {
                                    legendItemClick: function () {
                                        return false; // <== returning false will cancel the default action
                                    }
                                }
                            }
                        }
                    },
                    tooltip: {
                        borderWidth: 0,
                        borderColor: '#00000000',
                        shadow: false,
                        backgroundColor: {
                            color: [255, 255, 255],
                        },
                        shape: 'circle',
                        //    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                        pointFormat: '<b>{point.percentage:.1f}%</b>',
                        positioner: function () {
                            return { x: 120, y: 80 };
                        }
                    },
                    title: {
                        text: '',
                    },
                    credits: {
                        enabled: false
                    },
                    series: [{
                            type: 'pie',
                            // name: this.data[i].name,
                            data: this.data[i].data,
                            states: {
                                inactive: {
                                    opacity: 1
                                }
                            }
                        }]
                };
                console.log("1111111", this.options2.chart.renderTo);
                // this.charts[i] = new Highcharts.Chart(this.options2); 
            }
            this.charts[i] = new __WEBPACK_IMPORTED_MODULE_1_highcharts__["Chart"](this.options2);
        }
        //  }, 2000);
        // });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], MycanvasComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], MycanvasComponent.prototype, "height", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('target'),
        __metadata("design:type", Object)
    ], MycanvasComponent.prototype, "allcanvas", void 0);
    MycanvasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'mycanvas',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/components/mycanvas/mycanvas.html"*/'<div *ngIf="data">\n    <div *ngFor="let item of data" id="chartTarget{{item.unique_id}}" >\n        <!-- {{item}} -->\n\n    </div>\n</div>\n\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/components/mycanvas/mycanvas.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]])
    ], MycanvasComponent);
    return MycanvasComponent;
}());

//# sourceMappingURL=mycanvas.js.map

/***/ }),

/***/ 881:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 Highcharts JS v7.2.0 (2019-09-03)

 Boost module

 (c) 2010-2019 Highsoft AS
 Author: Torstein Honsi

 License: www.highcharts.com/license

 This is a Highcharts module that draws long data series on a canvas in order
 to increase performance of the initial load time and tooltip responsiveness.

 Compatible with WebGL compatible browsers (not IE < 11).

 If this module is taken in as part of the core
 - All the loading logic should be merged with core. Update styles in the
   core.
 - Most of the method wraps should probably be added directly in parent
   methods.

 Notes for boost mode
 - Area lines are not drawn
 - Lines are not drawn on scatter charts
 - Zones and negativeColor don't work
 - Dash styles are not rendered on lines.
 - Columns are always one pixel wide. Don't set the threshold too low.
 - Disable animations
 - Marker shapes are not supported: markers will always be circles

 Optimizing tips for users
 - Set extremes (min, max) explicitly on the axes in order for Highcharts to
   avoid computing extremes.
 - Set enableMouseTracking to false on the series to improve total rendering
      time.
 - The default threshold is set based on one series. If you have multiple,
   dense series, the combined number of points drawn gets higher, and you may
   want to set the threshold lower in order to use optimizations.
 - If drawing large scatter charts, it's beneficial to set the marker radius
   to a value less than 1. This is to add additional spacing to make the chart
   more readable.
 - If the value increments on both the X and Y axis aren't small, consider
   setting useGPUTranslations to true on the boost settings object. If you do
   this and the increments are small (e.g. datetime axis with small time
   increments) it may cause rendering issues due to floating point rounding
   errors, so your millage may vary.

 Settings
    There are two ways of setting the boost threshold:
    - Per series: boost based on number of points in individual series
    - Per chart: boost based on the number of series

  To set the series boost threshold, set seriesBoostThreshold on the chart
  object.
  To set the series-specific threshold, set boostThreshold on the series
  object.

  In addition, the following can be set in the boost object:
  {
      //Wether or not to use alpha blending
      useAlpha: boolean - default: true
      //Set to true to perform translations on the GPU.
      //Much faster, but may cause rendering issues
      //when using values far from 0 due to floating point
      //rounding issues
      useGPUTranslations: boolean - default: false
      //Use pre-allocated buffers, much faster,
      //but may cause rendering issues with some data sets
      usePreallocated: boolean - default: false
  }
*/
(function(f){"object"===typeof module&&module.exports?(f["default"]=f,module.exports=f): true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(862)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t){f(t);f.Highcharts=t;return f}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):f("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(f){function t(e,f,d,G){e.hasOwnProperty(f)||(e[f]=G.apply(null,d))}f=f?f._modules:{};t(f,"modules/boost/boostables.js",[],function(){return"area arearange column columnrange bar line scatter heatmap bubble treemap".split(" ")});
t(f,"modules/boost/boostable-map.js",[f["modules/boost/boostables.js"]],function(e){var f={};e.forEach(function(d){f[d]=1});return f});t(f,"modules/boost/wgl-shader.js",[f["parts/Globals.js"]],function(e){var f=e.pick;return function(d){function w(){v.length&&e.error("[highcharts boost] shader error - "+v.join("\n"))}function k(a,b){var c=d.createShader("vertex"===b?d.VERTEX_SHADER:d.FRAGMENT_SHADER);d.shaderSource(c,a);d.compileShader(c);return d.getShaderParameter(c,d.COMPILE_STATUS)?c:(v.push("when compiling "+
b+" shader:\n"+d.getShaderInfoLog(c)),!1)}function q(){function e(b){return d.getUniformLocation(a,b)}var h=k("#version 100\n#define LN10 2.302585092994046\nprecision highp float;\nattribute vec4 aVertexPosition;\nattribute vec4 aColor;\nvarying highp vec2 position;\nvarying highp vec4 vColor;\nuniform mat4 uPMatrix;\nuniform float pSize;\nuniform float translatedThreshold;\nuniform bool hasThreshold;\nuniform bool skipTranslation;\nuniform float xAxisTrans;\nuniform float xAxisMin;\nuniform float xAxisMinPad;\nuniform float xAxisPointRange;\nuniform float xAxisLen;\nuniform bool  xAxisPostTranslate;\nuniform float xAxisOrdinalSlope;\nuniform float xAxisOrdinalOffset;\nuniform float xAxisPos;\nuniform bool  xAxisCVSCoord;\nuniform bool  xAxisIsLog;\nuniform bool  xAxisReversed;\nuniform float yAxisTrans;\nuniform float yAxisMin;\nuniform float yAxisMinPad;\nuniform float yAxisPointRange;\nuniform float yAxisLen;\nuniform bool  yAxisPostTranslate;\nuniform float yAxisOrdinalSlope;\nuniform float yAxisOrdinalOffset;\nuniform float yAxisPos;\nuniform bool  yAxisCVSCoord;\nuniform bool  yAxisIsLog;\nuniform bool  yAxisReversed;\nuniform bool  isBubble;\nuniform bool  bubbleSizeByArea;\nuniform float bubbleZMin;\nuniform float bubbleZMax;\nuniform float bubbleZThreshold;\nuniform float bubbleMinSize;\nuniform float bubbleMaxSize;\nuniform bool  bubbleSizeAbs;\nuniform bool  isInverted;\nfloat bubbleRadius(){\nfloat value = aVertexPosition.w;\nfloat zMax = bubbleZMax;\nfloat zMin = bubbleZMin;\nfloat radius = 0.0;\nfloat pos = 0.0;\nfloat zRange = zMax - zMin;\nif (bubbleSizeAbs){\nvalue = value - bubbleZThreshold;\nzMax = max(zMax - bubbleZThreshold, zMin - bubbleZThreshold);\nzMin = 0.0;\n}\nif (value < zMin){\nradius = bubbleZMin / 2.0 - 1.0;\n} else {\npos = zRange > 0.0 ? (value - zMin) / zRange : 0.5;\nif (bubbleSizeByArea && pos > 0.0){\npos = sqrt(pos);\n}\nradius = ceil(bubbleMinSize + pos * (bubbleMaxSize - bubbleMinSize)) / 2.0;\n}\nreturn radius * 2.0;\n}\nfloat translate(float val,\nfloat pointPlacement,\nfloat localA,\nfloat localMin,\nfloat minPixelPadding,\nfloat pointRange,\nfloat len,\nbool  cvsCoord,\nbool  isLog,\nbool  reversed\n){\nfloat sign = 1.0;\nfloat cvsOffset = 0.0;\nif (cvsCoord) {\nsign *= -1.0;\ncvsOffset = len;\n}\nif (isLog) {\nval = log(val) / LN10;\n}\nif (reversed) {\nsign *= -1.0;\ncvsOffset -= sign * len;\n}\nreturn sign * (val - localMin) * localA + cvsOffset + \n(sign * minPixelPadding);\n}\nfloat xToPixels(float value) {\nif (skipTranslation){\nreturn value;// + xAxisPos;\n}\nreturn translate(value, 0.0, xAxisTrans, xAxisMin, xAxisMinPad, xAxisPointRange, xAxisLen, xAxisCVSCoord, xAxisIsLog, xAxisReversed);// + xAxisPos;\n}\nfloat yToPixels(float value, float checkTreshold) {\nfloat v;\nif (skipTranslation){\nv = value;// + yAxisPos;\n} else {\nv = translate(value, 0.0, yAxisTrans, yAxisMin, yAxisMinPad, yAxisPointRange, yAxisLen, yAxisCVSCoord, yAxisIsLog, yAxisReversed);// + yAxisPos;\nif (v > yAxisLen) {\nv = yAxisLen;\n}\n}\nif (checkTreshold > 0.0 && hasThreshold) {\nv = min(v, translatedThreshold);\n}\nreturn v;\n}\nvoid main(void) {\nif (isBubble){\ngl_PointSize = bubbleRadius();\n} else {\ngl_PointSize = pSize;\n}\nvColor = aColor;\nif (skipTranslation && isInverted) {\ngl_Position = uPMatrix * vec4(aVertexPosition.y + yAxisPos, aVertexPosition.x + xAxisPos, 0.0, 1.0);\n} else if (isInverted) {\ngl_Position = uPMatrix * vec4(yToPixels(aVertexPosition.y, aVertexPosition.z) + yAxisPos, xToPixels(aVertexPosition.x) + xAxisPos, 0.0, 1.0);\n} else {\ngl_Position = uPMatrix * vec4(xToPixels(aVertexPosition.x) + xAxisPos, yToPixels(aVertexPosition.y, aVertexPosition.z) + yAxisPos, 0.0, 1.0);\n}\n}",
"vertex"),f=k("precision highp float;\nuniform vec4 fillColor;\nvarying highp vec2 position;\nvarying highp vec4 vColor;\nuniform sampler2D uSampler;\nuniform bool isCircle;\nuniform bool hasColor;\nvoid main(void) {\nvec4 col = fillColor;\nvec4 tcol;\nif (hasColor) {\ncol = vColor;\n}\nif (isCircle) {\ntcol = texture2D(uSampler, gl_PointCoord.st);\ncol *= tcol;\nif (tcol.r < 0.0) {\ndiscard;\n} else {\ngl_FragColor = col;\n}\n} else {\ngl_FragColor = col;\n}\n}","fragment");if(!h||!f)return a=!1,
w(),!1;a=d.createProgram();d.attachShader(a,h);d.attachShader(a,f);d.linkProgram(a);if(!d.getProgramParameter(a,d.LINK_STATUS))return v.push(d.getProgramInfoLog(a)),w(),a=!1;d.useProgram(a);d.bindAttribLocation(a,0,"aVertexPosition");A=e("uPMatrix");C=e("pSize");x=e("fillColor");n=e("isBubble");r=e("bubbleSizeAbs");c=e("bubbleSizeByArea");I=e("uSampler");l=e("skipTranslation");b=e("isCircle");H=e("isInverted");return!0}function p(b,c){d&&a&&(b=m[b]=m[b]||d.getUniformLocation(a,b),d.uniform1f(b,c))}
var m={},a,A,C,x,n,r,c,l,b,H,v=[],I;return d&&!q()?!1:{psUniform:function(){return C},pUniform:function(){return A},fillColorUniform:function(){return x},setBubbleUniforms:function(l,e,v){var g=l.options,h=Number.MAX_VALUE,k=-Number.MAX_VALUE;d&&a&&"bubble"===l.type&&(h=f(g.zMin,Math.min(h,Math.max(e,!1===g.displayNegative?g.zThreshold:-Number.MAX_VALUE))),k=f(g.zMax,Math.max(k,v)),d.uniform1i(n,1),d.uniform1i(b,1),d.uniform1i(c,"width"!==l.options.sizeBy),d.uniform1i(r,l.options.sizeByAbsoluteValue),
p("bubbleZMin",h),p("bubbleZMax",k),p("bubbleZThreshold",l.options.zThreshold),p("bubbleMinSize",l.minPxSize),p("bubbleMaxSize",l.maxPxSize))},bind:function(){d&&a&&d.useProgram(a)},program:function(){return a},create:q,setUniform:p,setPMatrix:function(b){d&&a&&d.uniformMatrix4fv(A,!1,b)},setColor:function(b){d&&a&&d.uniform4f(x,b[0]/255,b[1]/255,b[2]/255,b[3])},setPointSize:function(b){d&&a&&d.uniform1f(C,b)},setSkipTranslation:function(b){d&&a&&d.uniform1i(l,!0===b?1:0)},setTexture:function(b){d&&
a&&d.uniform1i(I,b)},setDrawAsCircle:function(c){d&&a&&d.uniform1i(b,c?1:0)},reset:function(){d&&a&&(d.uniform1i(n,0),d.uniform1i(b,0))},setInverted:function(b){d&&a&&d.uniform1i(H,b)},destroy:function(){d&&a&&(d.deleteProgram(a),a=!1)}}}});t(f,"modules/boost/wgl-vbuffer.js",[],function(){return function(e,f,d){function w(){k&&(e.deleteBuffer(k),q=k=!1);a=0;p=d||2;A=[]}var k=!1,q=!1,p=d||2,m=!1,a=0,A;return{destroy:w,bind:function(){if(!k)return!1;e.vertexAttribPointer(q,p,e.FLOAT,!1,0,0)},data:A,
build:function(a,d,n){var r;A=a||[];if(!(A&&0!==A.length||m))return w(),!1;p=n||p;k&&e.deleteBuffer(k);m||(r=new Float32Array(A));k=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,k);e.bufferData(e.ARRAY_BUFFER,m||r,e.STATIC_DRAW);q=e.getAttribLocation(f.program(),d);e.enableVertexAttribArray(q);return!0},render:function(a,d,n){var f=m?m.length:A.length;if(!k||!f)return!1;if(!a||a>f||0>a)a=0;if(!d||d>f)d=f;e.drawArrays(e[(n||"points").toUpperCase()],a/p,(d-a)/p);return!0},allocate:function(d){a=-1;m=
new Float32Array(4*d)},push:function(d,e,f,k){m&&(m[++a]=d,m[++a]=e,m[++a]=f,m[++a]=k)}}}});t(f,"modules/boost/wgl-renderer.js",[f["modules/boost/wgl-shader.js"],f["modules/boost/wgl-vbuffer.js"],f["parts/Globals.js"],f["parts/Utilities.js"]],function(e,f,d,t){var k=t.isNumber,q=d.win.document,p=d.merge,m=d.objEach,a=d.some,w=d.Color,C=d.pick;return function(A){function n(a){if(a.isSeriesBoosting){var b=!!a.options.stacking;var d=a.xData||a.options.xData||a.processedXData;b=(b?a.data:d||a.options.data).length;
"treemap"===a.type?b*=12:"heatmap"===a.type?b*=6:R[a.type]&&(b*=2);return b}return 0}function r(){g.clear(g.COLOR_BUFFER_BIT|g.DEPTH_BUFFER_BIT)}function c(b,c){function g(b){b&&(c.colorData.push(b[0]),c.colorData.push(b[1]),c.colorData.push(b[2]),c.colorData.push(b[3]))}function l(b,a,c,d,l){g(l);y.usePreallocated?J.push(b,a,c?1:0,d||1):(K.push(b),K.push(a),K.push(c?1:0),K.push(d||1))}function e(){c.segments.length&&(c.segments[c.segments.length-1].to=K.length)}function f(){c.segments.length&&c.segments[c.segments.length-
1].from===K.length||(e(),c.segments.push({from:K.length}))}function h(b,a,c,d,e){g(e);l(b+c,a);g(e);l(b,a);g(e);l(b,a+d);g(e);l(b,a+d);g(e);l(b+c,a+d);g(e);l(b+c,a)}function n(b,a){y.useGPUTranslations||(c.skipTranslation=!0,b.x=ea.toPixels(b.x,!0),b.y=t.toPixels(b.y,!0));a?K=[b.x,b.y,0,2].concat(K):l(b.x,b.y,0,2)}var Q=b.pointArrayMap&&"low,high"===b.pointArrayMap.join(","),O=b.chart,v=b.options,k=!!v.stacking,r=v.data,H=b.xAxis.getExtremes(),m=H.min;H=H.max;var p=b.yAxis.getExtremes(),w=p.min;p=
p.max;var q=b.xData||v.xData||b.processedXData,A=b.yData||v.yData||b.processedYData,I=b.zData||v.zData||b.processedZData,t=b.yAxis,ea=b.xAxis,G=b.chart.plotWidth,x=!q||0===q.length,C=v.connectNulls,u=b.points||!1,X=!1,E=!1,D,N;r=k?b.data:q||r;q={x:Number.MAX_VALUE,y:0};var M={x:-Number.MAX_VALUE,y:0},V=0,W=!1,F=-1,P=!1,T=!1,aa="undefined"===typeof O.index,ha=!1,ia=!1,L=!1,ua=R[b.type],ja=!1,qa=!0,ra=!0,Z=v.zones||!1,U=!1,sa=v.threshold,ka=!1;if(!(v.boostData&&0<v.boostData.length)){v.gapSize&&(ka=
"value"!==v.gapUnit?v.gapSize*b.closestPointRange:v.gapSize);Z&&(a(Z,function(b){if("undefined"===typeof b.value)return U=d.Color(b.color),!0}),U||(U=b.pointAttribs&&b.pointAttribs().fill||b.color,U=d.Color(U)));O.inverted&&(G=b.chart.plotHeight);b.closestPointRangePx=Number.MAX_VALUE;f();if(u&&0<u.length)c.skipTranslation=!0,c.drawMode="triangles",u[0].node&&u[0].node.levelDynamic&&u.sort(function(b,a){if(b.node){if(b.node.levelDynamic>a.node.levelDynamic)return 1;if(b.node.levelDynamic<a.node.levelDynamic)return-1}return 0}),
u.forEach(function(a){var c=a.plotY;if("undefined"!==typeof c&&!isNaN(c)&&null!==a.y){c=a.shapeArgs;var l=O.styledMode?a.series.colorAttribs(a):l=a.series.pointAttribs(a);a=l["stroke-width"]||0;D=d.color(l.fill).rgba;D[0]/=255;D[1]/=255;D[2]/=255;"treemap"===b.type&&(a=a||1,N=d.color(l.stroke).rgba,N[0]/=255,N[1]/=255,N[2]/=255,h(c.x,c.y,c.width,c.height,N),a/=2);"heatmap"===b.type&&O.inverted&&(c.x=ea.len-c.x,c.y=t.len-c.y,c.width=-c.width,c.height=-c.height);h(c.x+a,c.y+a,c.width-2*a,c.height-2*
a,D)}});else{for(;F<r.length-1;){var B=r[++F];if(aa)break;if(x){u=B[0];var z=B[1];r[F+1]&&(T=r[F+1][0]);r[F-1]&&(P=r[F-1][0]);if(3<=B.length){var ta=B[2];B[2]>c.zMax&&(c.zMax=B[2]);B[2]<c.zMin&&(c.zMin=B[2])}}else u=B,z=A[F],r[F+1]&&(T=r[F+1]),r[F-1]&&(P=r[F-1]),I&&I.length&&(ta=I[F],I[F]>c.zMax&&(c.zMax=I[F]),I[F]<c.zMin&&(c.zMin=I[F]));if(C||null!==u&&null!==z){T&&T>=m&&T<=H&&(ha=!0);P&&P>=m&&P<=H&&(ia=!0);if(Q){x&&(z=B.slice(1,3));var ba=z[0];z=z[1]}else k&&(u=B.x,z=B.stackY,ba=z-B.y);null!==w&&
"undefined"!==typeof w&&null!==p&&"undefined"!==typeof p&&(qa=z>=w&&z<=p);u>H&&M.x<H&&(M.x=u,M.y=z);u<m&&q.x>m&&(q.x=u,q.y=z);if(null!==z||!C)if(null!==z&&(qa||ha||ia)){if((T>=m||u>=m)&&(P<=H||u<=H)&&(ja=!0),ja||ha||ia){ka&&u-P>ka&&f();Z&&(L=U.rgba,a(Z,function(b,a){a=Z[a-1];if("undefined"!==typeof b.value&&z<=b.value){if(!a||z>=a.value)L=d.color(b.color).rgba;return!0}}),L[0]/=255,L[1]/=255,L[2]/=255);if(!y.useGPUTranslations&&(c.skipTranslation=!0,u=ea.toPixels(u,!0),z=t.toPixels(z,!0),u>G&&"points"===
c.drawMode))continue;if(ua){B=ba;if(!1===ba||"undefined"===typeof ba)B=0>z?z:0;Q||k||(B=Math.max(null===sa?w:sa,w));y.useGPUTranslations||(B=t.toPixels(B,!0));l(u,B,0,0,L)}c.hasMarkers&&ja&&!1!==X&&(b.closestPointRangePx=Math.min(b.closestPointRangePx,Math.abs(u-X)));!y.useGPUTranslations&&!y.usePreallocated&&X&&1>Math.abs(u-X)&&E&&1>Math.abs(z-E)?y.debug.showSkipSummary&&++V:(v.step&&!ra&&l(u,E,0,2,L),l(u,z,0,"bubble"===b.type?ta||1:2,L),X=u,E=z,W=!0,ra=!1)}}else f()}else f()}y.debug.showSkipSummary&&
console.log("skipped points:",V);W||!1===C||"line_strip"!==b.drawMode||(q.x<Number.MAX_VALUE&&n(q,!0),M.x>-Number.MAX_VALUE&&n(M))}e()}}function l(){E=[];V.data=K=[];W=[];J&&J.destroy()}function b(b){h&&(h.setUniform("xAxisTrans",b.transA),h.setUniform("xAxisMin",b.min),h.setUniform("xAxisMinPad",b.minPixelPadding),h.setUniform("xAxisPointRange",b.pointRange),h.setUniform("xAxisLen",b.len),h.setUniform("xAxisPos",b.pos),h.setUniform("xAxisCVSCoord",!b.horiz),h.setUniform("xAxisIsLog",b.isLog),h.setUniform("xAxisReversed",
!!b.reversed))}function H(b){h&&(h.setUniform("yAxisTrans",b.transA),h.setUniform("yAxisMin",b.min),h.setUniform("yAxisMinPad",b.minPixelPadding),h.setUniform("yAxisPointRange",b.pointRange),h.setUniform("yAxisLen",b.len),h.setUniform("yAxisPos",b.pos),h.setUniform("yAxisCVSCoord",!b.horiz),h.setUniform("yAxisIsLog",b.isLog),h.setUniform("yAxisReversed",!!b.reversed))}function v(b,a){h.setUniform("hasThreshold",b);h.setUniform("translatedThreshold",a)}function I(a){if(a)G=a.chartWidth||800,x=a.chartHeight||
400;else return!1;if(!(g&&G&&x&&h))return!1;y.debug.timeRendering&&console.time("gl rendering");g.canvas.width=G;g.canvas.height=x;h.bind();g.viewport(0,0,G,x);h.setPMatrix([2/G,0,0,0,0,-(2/x),0,0,0,0,-2,0,-1,1,-1,1]);1<y.lineWidth&&!d.isMS&&g.lineWidth(y.lineWidth);J.build(V.data,"aVertexPosition",4);J.bind();h.setInverted(a.inverted);E.forEach(function(c,l){var e=c.series.options,n=e.marker;var r="undefined"!==typeof e.lineWidth?e.lineWidth:1;var m=e.threshold,p=k(m),q=c.series.yAxis.getThreshold(m);
m=C(e.marker?e.marker.enabled:null,c.series.xAxis.isRadial?!0:null,c.series.closestPointRangePx>2*((e.marker?e.marker.radius:10)||10));n=D[n&&n.symbol||c.series.symbol]||D.circle;if(!(0===c.segments.length||c.segmentslength&&c.segments[0].from===c.segments[0].to)){n.isReady&&(g.bindTexture(g.TEXTURE_2D,n.handle),h.setTexture(n.handle));a.styledMode?n=c.series.markerGroup&&c.series.markerGroup.getStyle("fill"):(n=c.series.pointAttribs&&c.series.pointAttribs().fill||c.series.color,e.colorByPoint&&(n=
c.series.chart.options.colors[l]));c.series.fillOpacity&&e.fillOpacity&&(n=(new w(n)).setOpacity(C(e.fillOpacity,1)).get());n=d.color(n).rgba;y.useAlpha||(n[3]=1);"lines"===c.drawMode&&y.useAlpha&&1>n[3]&&(n[3]/=10);"add"===e.boostBlending?(g.blendFunc(g.SRC_ALPHA,g.ONE),g.blendEquation(g.FUNC_ADD)):"mult"===e.boostBlending||"multiply"===e.boostBlending?g.blendFunc(g.DST_COLOR,g.ZERO):"darken"===e.boostBlending?(g.blendFunc(g.ONE,g.ONE),g.blendEquation(g.FUNC_MIN)):g.blendFuncSeparate(g.SRC_ALPHA,
g.ONE_MINUS_SRC_ALPHA,g.ONE,g.ONE_MINUS_SRC_ALPHA);h.reset();0<c.colorData.length&&(h.setUniform("hasColor",1),l=f(g,h),l.build(c.colorData,"aColor",4),l.bind());h.setColor(n);b(c.series.xAxis);H(c.series.yAxis);v(p,q);"points"===c.drawMode&&(e.marker&&e.marker.radius?h.setPointSize(2*e.marker.radius):h.setPointSize(1));h.setSkipTranslation(c.skipTranslation);"bubble"===c.series.type&&h.setBubbleUniforms(c.series,c.zMin,c.zMax);h.setDrawAsCircle(aa[c.series.type]||!1);if(0<r||"line_strip"!==c.drawMode)for(r=
0;r<c.segments.length;r++)J.render(c.segments[r].from,c.segments[r].to,c.drawMode);if(c.hasMarkers&&m)for(e.marker&&e.marker.radius?h.setPointSize(2*e.marker.radius):h.setPointSize(10),h.setDrawAsCircle(!0),r=0;r<c.segments.length;r++)J.render(c.segments[r].from,c.segments[r].to,"POINTS")}});y.debug.timeRendering&&console.timeEnd("gl rendering");A&&A();l()}function t(b){r();if(b.renderer.forExport)return I(b);M?I(b):setTimeout(function(){t(b)},1)}var h=!1,J=!1,g=!1,G=0,x=0,K=!1,W=!1,V={},M=!1,E=[],
D={},R={column:!0,columnrange:!0,bar:!0,area:!0,arearange:!0},aa={scatter:!0,bubble:!0},y={pointSize:1,lineWidth:1,fillColor:"#AA00AA",useAlpha:!0,usePreallocated:!1,useGPUTranslations:!1,debug:{timeRendering:!1,timeSeriesProcessing:!1,timeSetup:!1,timeBufferCopy:!1,timeKDTree:!1,showSkipSummary:!1}};return V={allocateBufferForSingleSeries:function(b){var c=0;y.usePreallocated&&(b.isSeriesBoosting&&(c=n(b)),J.allocate(c))},pushSeries:function(b){0<E.length&&E[E.length-1].hasMarkers&&(E[E.length-1].markerTo=
W.length);y.debug.timeSeriesProcessing&&console.time("building "+b.type+" series");E.push({segments:[],markerFrom:W.length,colorData:[],series:b,zMin:Number.MAX_VALUE,zMax:-Number.MAX_VALUE,hasMarkers:b.options.marker?!1!==b.options.marker.enabled:!1,showMarkers:!0,drawMode:{area:"lines",arearange:"lines",areaspline:"line_strip",column:"lines",columnrange:"lines",bar:"lines",line:"line_strip",scatter:"points",heatmap:"triangles",treemap:"triangles",bubble:"points"}[b.type]||"line_strip"});c(b,E[E.length-
1]);y.debug.timeSeriesProcessing&&console.timeEnd("building "+b.type+" series")},setSize:function(b,c){G===b&&x===c||!h||(G=b,x=c,h.bind(),h.setPMatrix([2/G,0,0,0,0,-(2/x),0,0,0,0,-2,0,-1,1,-1,1]))},inited:function(){return M},setThreshold:v,init:function(b,c){function a(b,c){var a={isReady:!1,texture:q.createElement("canvas"),handle:g.createTexture()},d=a.texture.getContext("2d");D[b]=a;a.texture.width=512;a.texture.height=512;d.mozImageSmoothingEnabled=!1;d.webkitImageSmoothingEnabled=!1;d.msImageSmoothingEnabled=
!1;d.imageSmoothingEnabled=!1;d.strokeStyle="rgba(255, 255, 255, 0)";d.fillStyle="#FFF";c(d);try{g.activeTexture(g.TEXTURE0),g.bindTexture(g.TEXTURE_2D,a.handle),g.texImage2D(g.TEXTURE_2D,0,g.RGBA,g.RGBA,g.UNSIGNED_BYTE,a.texture),g.texParameteri(g.TEXTURE_2D,g.TEXTURE_WRAP_S,g.CLAMP_TO_EDGE),g.texParameteri(g.TEXTURE_2D,g.TEXTURE_WRAP_T,g.CLAMP_TO_EDGE),g.texParameteri(g.TEXTURE_2D,g.TEXTURE_MAG_FILTER,g.LINEAR),g.texParameteri(g.TEXTURE_2D,g.TEXTURE_MIN_FILTER,g.LINEAR),g.bindTexture(g.TEXTURE_2D,
null),a.isReady=!0}catch(Y){}}var d=0,n=["webgl","experimental-webgl","moz-webgl","webkit-3d"];M=!1;if(!b)return!1;for(y.debug.timeSetup&&console.time("gl setup");d<n.length&&!(g=b.getContext(n[d],{}));d++);if(g)c||l();else return!1;g.enable(g.BLEND);g.blendFunc(g.SRC_ALPHA,g.ONE_MINUS_SRC_ALPHA);g.disable(g.DEPTH_TEST);g.depthFunc(g.LESS);h=e(g);if(!h)return!1;J=f(g,h);a("circle",function(b){b.beginPath();b.arc(256,256,256,0,2*Math.PI);b.stroke();b.fill()});a("square",function(b){b.fillRect(0,0,
512,512)});a("diamond",function(b){b.beginPath();b.moveTo(256,0);b.lineTo(512,256);b.lineTo(256,512);b.lineTo(0,256);b.lineTo(256,0);b.fill()});a("triangle",function(b){b.beginPath();b.moveTo(0,512);b.lineTo(256,0);b.lineTo(512,512);b.lineTo(0,512);b.fill()});a("triangle-down",function(b){b.beginPath();b.moveTo(0,0);b.lineTo(256,512);b.lineTo(512,0);b.lineTo(0,0);b.fill()});M=!0;y.debug.timeSetup&&console.timeEnd("gl setup");return!0},render:t,settings:y,valid:function(){return!1!==g},clear:r,flush:l,
setXAxis:b,setYAxis:H,data:K,gl:function(){return g},allocateBuffer:function(b){var a=0;y.usePreallocated&&(b.series.forEach(function(b){b.isSeriesBoosting&&(a+=n(b))}),J.allocate(a))},destroy:function(){l();J.destroy();h.destroy();g&&(m(D,function(b){D[b].handle&&g.deleteTexture(D[b].handle)}),g.canvas.width=1,g.canvas.height=1)},setOptions:function(b){p(!0,y,b)}}}});t(f,"modules/boost/boost-attach.js",[f["parts/Globals.js"],f["modules/boost/wgl-renderer.js"]],function(e,f){var d=e.win.document,
w=d.createElement("canvas");return function(k,q){var p=k.chartWidth,m=k.chartHeight,a=k,A=k.seriesGroup||q.group,t=d.implementation.hasFeature("www.http://w3.org/TR/SVG11/feature#Extensibility","1.1");a=k.isChartSeriesBoosting()?k:q;t=!1;a.renderTarget||(a.canvas=w,k.renderer.forExport||!t?(a.renderTarget=k.renderer.image("",0,0,p,m).addClass("highcharts-boost-canvas").add(A),a.boostClear=function(){a.renderTarget.attr({href:""})},a.boostCopy=function(){a.boostResizeTarget();a.renderTarget.attr({href:a.canvas.toDataURL("image/png")})}):
(a.renderTargetFo=k.renderer.createElement("foreignObject").add(A),a.renderTarget=d.createElement("canvas"),a.renderTargetCtx=a.renderTarget.getContext("2d"),a.renderTargetFo.element.appendChild(a.renderTarget),a.boostClear=function(){a.renderTarget.width=a.canvas.width;a.renderTarget.height=a.canvas.height},a.boostCopy=function(){a.renderTarget.width=a.canvas.width;a.renderTarget.height=a.canvas.height;a.renderTargetCtx.drawImage(a.canvas,0,0)}),a.boostResizeTarget=function(){p=k.chartWidth;m=k.chartHeight;
(a.renderTargetFo||a.renderTarget).attr({x:0,y:0,width:p,height:m}).css({pointerEvents:"none",mixedBlendMode:"normal",opacity:1});a instanceof e.Chart&&a.markerGroup.translate(k.plotLeft,k.plotTop)},a.boostClipRect=k.renderer.clipRect(),(a.renderTargetFo||a.renderTarget).clip(a.boostClipRect),a instanceof e.Chart&&(a.markerGroup=a.renderer.g().add(A),a.markerGroup.translate(q.xAxis.pos,q.yAxis.pos)));a.canvas.width=p;a.canvas.height=m;a.boostClipRect.attr(k.getBoostClipRect(a));a.boostResizeTarget();
a.boostClear();a.ogl||(a.ogl=f(function(){a.ogl.settings.debug.timeBufferCopy&&console.time("buffer copy");a.boostCopy();a.ogl.settings.debug.timeBufferCopy&&console.timeEnd("buffer copy")}),a.ogl.init(a.canvas)||e.error("[highcharts boost] - unable to init WebGL renderer"),a.ogl.setOptions(k.options.boost||{}),a instanceof e.Chart&&a.ogl.allocateBuffer(k));a.ogl.setSize(p,m);return a.ogl}});t(f,"modules/boost/boost-utils.js",[f["parts/Globals.js"],f["modules/boost/boostable-map.js"],f["modules/boost/boost-attach.js"]],
function(e,f,d){function w(){var a=Array.prototype.slice.call(arguments),d=-Number.MAX_VALUE;a.forEach(function(a){if("undefined"!==typeof a&&null!==a&&"undefined"!==typeof a.length&&0<a.length)return d=a.length,!0});return d}function k(a,d,c){a&&d.renderTarget&&d.canvas&&!(c||d.chart).isChartSeriesBoosting()&&a.render(c||d.chart)}function q(a,d){a&&d.renderTarget&&d.canvas&&!d.chart.isChartSeriesBoosting()&&a.allocateBufferForSingleSeries(d)}function p(d,e,c,l,b,f){b=b||0;l=l||3E3;for(var n=b+l,
k=!0;k&&b<n&&b<d.length;)k=e(d[b],b),++b;k&&(b<d.length?f?p(d,e,c,l,b,f):a.requestAnimationFrame?a.requestAnimationFrame(function(){p(d,e,c,l,b)}):setTimeout(function(){p(d,e,c,l,b)}):c&&c())}function m(){var d=0,e,c=["webgl","experimental-webgl","moz-webgl","webkit-3d"],l=!1;if("undefined"!==typeof a.WebGLRenderingContext)for(e=t.createElement("canvas");d<c.length;d++)try{if(l=e.getContext(c[d]),"undefined"!==typeof l&&null!==l)return!0}catch(b){}return!1}var a=e.win,t=a.document,C=e.pick,x={patientMax:w,
boostEnabled:function(a){return C(a&&a.options&&a.options.boost&&a.options.boost.enabled,!0)},shouldForceChartSeriesBoosting:function(a){var d=0,c=0,e=C(a.options.boost&&a.options.boost.allowForce,!0);if("undefined"!==typeof a.boostForceChartBoost)return a.boostForceChartBoost;if(1<a.series.length)for(var b=0;b<a.series.length;b++){var k=a.series[b];0!==k.options.boostThreshold&&!1!==k.visible&&"heatmap"!==k.type&&(f[k.type]&&++c,w(k.processedXData,k.options.data,k.points)>=(k.options.boostThreshold||
Number.MAX_VALUE)&&++d)}a.boostForceChartBoost=e&&(c===a.series.length&&0<d||5<d);return a.boostForceChartBoost},renderIfNotSeriesBoosting:k,allocateIfNotSeriesBoosting:q,eachAsync:p,hasWebGLSupport:m,pointDrawHandler:function(a){var e=!0;this.chart.options&&this.chart.options.boost&&(e="undefined"===typeof this.chart.options.boost.enabled?!0:this.chart.options.boost.enabled);if(!e||!this.isSeriesBoosting)return a.call(this);this.chart.isBoosting=!0;if(a=d(this.chart,this))q(a,this),a.pushSeries(this);
k(a,this)}};e.hasWebGLSupport=m;return x});t(f,"modules/boost/boost-init.js",[f["parts/Globals.js"],f["modules/boost/boost-utils.js"],f["modules/boost/boost-attach.js"]],function(e,f,d){var t=e.addEvent,k=e.fireEvent,q=e.extend,p=e.Series,m=e.seriesTypes,a=e.wrap,w=function(){},C=f.eachAsync,x=f.pointDrawHandler,n=f.allocateIfNotSeriesBoosting,r=f.renderIfNotSeriesBoosting,c=f.shouldForceChartSeriesBoosting,l;return function(){e.extend(p.prototype,{renderCanvas:function(){function b(b,a){var c=!1,
d="undefined"===typeof h.index,e=!0;if(!d){if(na){var l=b[0];var f=b[1]}else l=b,f=q[a];O?(na&&(f=b.slice(1,3)),c=f[0],f=f[1]):la&&(l=b.x,f=b.stackY,c=f-b.y);va||(e=f>=G&&f<=E);if(null!==f&&l>=A&&l<=x&&e)if(b=m.toPixels(l,!0),aa){if(void 0===S||b===R){O||(c=f);if(void 0===Y||f>da)da=f,Y=a;if(void 0===S||c<ca)ca=c,S=a}b!==R&&(void 0!==S&&(f=g.toPixels(da,!0),Q=g.toPixels(ca,!0),fa(b,f,Y),Q!==f&&fa(b,Q,S)),S=Y=void 0,R=b)}else f=Math.ceil(g.toPixels(f,!0)),fa(b,f,a)}return!d}function a(){k(c,"renderedCanvas");
delete c.buildKDTree;c.buildKDTree();pa.debug.timeKDTree&&console.timeEnd("kd tree building")}var c=this,e=c.options||{},f=!1,h=c.chart,m=this.xAxis,g=this.yAxis,p=e.xData||c.processedXData,q=e.yData||c.processedYData,t=e.data;f=m.getExtremes();var A=f.min,x=f.max;f=g.getExtremes();var G=f.min,E=f.max,D={},R,aa=!!c.sampling,y=!1!==e.enableMouseTracking,Q=g.getThreshold(e.threshold),O=c.pointArrayMap&&"low,high"===c.pointArrayMap.join(","),la=!!e.stacking,ma=c.cropStart||0,va=c.requireSorting,na=!p,
ca,da,S,Y,wa="x"===e.findNearestPointBy,oa=this.xData||this.options.xData||this.processedXData||!1,fa=function(b,a,c){b=Math.ceil(b);l=wa?b:b+","+a;y&&!D[l]&&(D[l]=!0,h.inverted&&(b=m.len-b,a=g.len-a),xa.push({x:oa?oa[ma+c]:!1,clientX:b,plotX:b,plotY:a,i:ma+c}))};f=d(h,c);h.isBoosting=!0;var pa=f.settings;if(this.visible){if(this.points||this.graph)this.animate=null,this.destroyGraphics();h.isChartSeriesBoosting()?(this.markerGroup&&this.markerGroup!==h.markerGroup&&this.markerGroup.destroy(),this.markerGroup=
h.markerGroup,this.renderTarget&&(this.renderTarget=this.renderTarget.destroy())):(this.markerGroup===h.markerGroup&&(this.markerGroup=void 0),this.markerGroup=c.plotGroup("markerGroup","markers",!0,1,h.seriesGroup));var xa=this.points=[];c.buildKDTree=w;f&&(n(f,this),f.pushSeries(c),r(f,this,h));h.renderer.forExport||(pa.debug.timeKDTree&&console.time("kd tree building"),C(la?c.data:p||t,b,a))}}});["heatmap","treemap"].forEach(function(b){m[b]&&a(m[b].prototype,"drawPoints",x)});m.bubble&&(delete m.bubble.prototype.buildKDTree,
a(m.bubble.prototype,"markerAttribs",function(b){return this.isSeriesBoosting?!1:b.apply(this,[].slice.call(arguments,1))}));m.scatter.prototype.fill=!0;q(m.area.prototype,{fill:!0,fillOpacity:!0,sampling:!0});q(m.column.prototype,{fill:!0,sampling:!0});e.Chart.prototype.callbacks.push(function(b){t(b,"predraw",function(){b.boostForceChartBoost=void 0;b.boostForceChartBoost=c(b);b.isBoosting=!1;!b.isChartSeriesBoosting()&&b.didBoost&&(b.didBoost=!1);b.boostClear&&b.boostClear();b.canvas&&b.ogl&&b.isChartSeriesBoosting()&&
(b.didBoost=!0,b.ogl.allocateBuffer(b));b.markerGroup&&b.xAxis&&0<b.xAxis.length&&b.yAxis&&0<b.yAxis.length&&b.markerGroup.translate(b.xAxis[0].pos,b.yAxis[0].pos)});t(b,"render",function(){b.ogl&&b.isChartSeriesBoosting()&&b.ogl.render(b)})})}});t(f,"modules/boost/boost-overrides.js",[f["parts/Globals.js"],f["parts/Utilities.js"],f["modules/boost/boost-utils.js"],f["modules/boost/boostables.js"],f["modules/boost/boostable-map.js"]],function(e,f,d,t,k){var q=f.isNumber,p=d.boostEnabled,m=d.shouldForceChartSeriesBoosting;
f=e.Chart;var a=e.Series;d=e.Point;var w=e.seriesTypes,C=e.addEvent,x=e.pick,n=e.wrap,r=e.getOptions().plotOptions;f.prototype.isChartSeriesBoosting=function(){return x(this.options.boost&&this.options.boost.seriesThreshold,50)<=this.series.length||m(this)};f.prototype.getBoostClipRect=function(a){var c={x:this.plotLeft,y:this.plotTop,width:this.plotWidth,height:this.plotHeight};a===this&&this.yAxis.forEach(function(b){c.y=Math.min(b.pos,c.y);c.height=Math.max(b.pos-this.plotTop+b.len,c.height)},
this);return c};a.prototype.getPoint=function(a){var c=a,b=this.xData||this.options.xData||this.processedXData||!1;!a||a instanceof this.pointClass||(c=(new this.pointClass).init(this,this.options.data[a.i],b?b[a.i]:void 0),c.category=x(this.xAxis.categories?this.xAxis.categories[c.x]:c.x,c.x),c.dist=a.dist,c.distX=a.distX,c.plotX=a.plotX,c.plotY=a.plotY,c.index=a.i);return c};n(a.prototype,"searchPoint",function(a){return this.getPoint(a.apply(this,[].slice.call(arguments,1)))});n(d.prototype,"haloPath",
function(a){var c=this.series,b=this.plotX,d=this.plotY,e=c.chart.inverted;c.isSeriesBoosting&&e&&(this.plotX=c.yAxis.len-d,this.plotY=c.xAxis.len-b);var f=a.apply(this,Array.prototype.slice.call(arguments,1));c.isSeriesBoosting&&e&&(this.plotX=b,this.plotY=d);return f});n(a.prototype,"markerAttribs",function(a,d){var b=d.plotX,c=d.plotY,e=this.chart.inverted;this.isSeriesBoosting&&e&&(d.plotX=this.yAxis.len-c,d.plotY=this.xAxis.len-b);var f=a.apply(this,Array.prototype.slice.call(arguments,1));this.isSeriesBoosting&&
e&&(d.plotX=b,d.plotY=c);return f});C(a,"destroy",function(){var a=this,d=a.chart;d.markerGroup===a.markerGroup&&(a.markerGroup=null);d.hoverPoints&&(d.hoverPoints=d.hoverPoints.filter(function(b){return b.series===a}));d.hoverPoint&&d.hoverPoint.series===a&&(d.hoverPoint=null)});n(a.prototype,"getExtremes",function(a){if(!this.isSeriesBoosting||!this.hasExtremes||!this.hasExtremes())return a.apply(this,Array.prototype.slice.call(arguments,1))});["translate","generatePoints","drawTracker","drawPoints",
"render"].forEach(function(c){function d(b){var a=this.options.stacking&&("translate"===c||"generatePoints"===c);if(!this.isSeriesBoosting||a||!p(this.chart)||"heatmap"===this.type||"treemap"===this.type||!k[this.type]||0===this.options.boostThreshold)b.call(this);else if(this[c+"Canvas"])this[c+"Canvas"]()}n(a.prototype,c,d);"translate"===c&&"column bar arearange columnrange heatmap treemap".split(" ").forEach(function(b){w[b]&&n(w[b].prototype,c,d)})});n(a.prototype,"processData",function(a){function c(a){return b.chart.isChartSeriesBoosting()||
(a?a.length:0)>=(b.options.boostThreshold||Number.MAX_VALUE)}var b=this,d=this.options.data;p(this.chart)&&k[this.type]?(c(d)&&"heatmap"!==this.type&&"treemap"!==this.type&&!this.options.stacking&&this.hasExtremes&&this.hasExtremes(!0)||(a.apply(this,Array.prototype.slice.call(arguments,1)),d=this.processedXData),(this.isSeriesBoosting=c(d))?this.enterBoost():this.exitBoost&&this.exitBoost()):a.apply(this,Array.prototype.slice.call(arguments,1))});C(a,"hide",function(){this.canvas&&this.renderTarget&&
(this.ogl&&this.ogl.clear(),this.boostClear())});a.prototype.enterBoost=function(){this.alteredByBoost=[];["allowDG","directTouch","stickyTracking"].forEach(function(a){this.alteredByBoost.push({prop:a,val:this[a],own:Object.hasOwnProperty.call(this,a)})},this);this.directTouch=this.allowDG=!1;this.stickyTracking=!0;this.animate=null;this.labelBySeries&&(this.labelBySeries=this.labelBySeries.destroy())};a.prototype.exitBoost=function(){(this.alteredByBoost||[]).forEach(function(a){a.own?this[a.prop]=
a.val:delete this[a.prop]},this);this.boostClear&&this.boostClear()};a.prototype.hasExtremes=function(a){var c=this.options,b=this.xAxis&&this.xAxis.options,d=this.yAxis&&this.yAxis.options,e=this.colorAxis&&this.colorAxis.options;return c.data.length>(c.boostThreshold||Number.MAX_VALUE)&&q(d.min)&&q(d.max)&&(!a||q(b.min)&&q(b.max))&&(!e||q(e.min)&&q(e.max))};a.prototype.destroyGraphics=function(){var a=this,d=this.points,b,e;if(d)for(e=0;e<d.length;e+=1)(b=d[e])&&b.destroyElements&&b.destroyElements();
["graph","area","tracker"].forEach(function(b){a[b]&&(a[b]=a[b].destroy())})};t.forEach(function(a){r[a]&&(r[a].boostThreshold=5E3,r[a].boostData=[],w[a].prototype.fillOpacity=!0)})});t(f,"modules/boost/named-colors.js",[f["parts/Globals.js"]],function(e){var f={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",
cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",
deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",feldspar:"#d19275",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",
lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslateblue:"#8470ff",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",
mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",
powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",violetred:"#d02090",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",
yellow:"#ffff00",yellowgreen:"#9acd32"};return e.Color.prototype.names=f});t(f,"modules/boost/boost.js",[f["parts/Globals.js"],f["modules/boost/boost-utils.js"],f["modules/boost/boost-init.js"]],function(e,f,d){f=f.hasWebGLSupport;f()?d():"undefined"!==typeof e.initCanvasBoost?e.initCanvasBoost():e.error(26)});t(f,"masters/modules/boost.src.js",[],function(){})});
//# sourceMappingURL=boost.js.map

/***/ }),

/***/ 882:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 Highcharts JS v7.2.0 (2019-09-03)

 Plugin for displaying a message when there is no data visible in chart.

 (c) 2010-2019 Highsoft AS
 Author: Oystein Moseng

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a): true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(862)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(c){a(c);a.Highcharts=c;return a}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function c(a,e,c,d){a.hasOwnProperty(e)||(a[e]=d.apply(null,c))}a=a?a._modules:{};c(a,"modules/no-data-to-display.src.js",[a["parts/Globals.js"]],function(a){var c=a.Chart.prototype,f=a.getOptions(),d=a.extend;
d(f.lang,{noData:"No data to display"});f.noData={position:{x:0,y:0,align:"center",verticalAlign:"middle"},style:{fontWeight:"bold",fontSize:"12px",color:"#666666"}};c.showNoData=function(a){var b=this.options;a=a||b&&b.lang.noData;b=b&&b.noData;!this.noDataLabel&&this.renderer&&(this.noDataLabel=this.renderer.label(a,0,0,null,null,null,b.useHTML,null,"no-data"),this.styledMode||this.noDataLabel.attr(b.attr).css(b.style),this.noDataLabel.add(),this.noDataLabel.align(d(this.noDataLabel.getBBox(),b.position),
!1,"plotBox"))};c.hideNoData=function(){this.noDataLabel&&(this.noDataLabel=this.noDataLabel.destroy())};c.hasData=function(){for(var a=this.series||[],b=a.length;b--;)if(a[b].hasData()&&!a[b].options.isInternal)return!0;return this.loadingShown};a.addEvent(a.Chart,"render",function(){this.hasData()?this.hideNoData():this.showNoData()})});c(a,"masters/modules/no-data-to-display.src.js",[],function(){})});
//# sourceMappingURL=no-data-to-display.js.map

/***/ }),

/***/ 883:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 Highcharts JS v7.2.0 (2019-09-03)

 (c) 2009-2018 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(v){"object"===typeof module&&module.exports?(v["default"]=v,module.exports=v): true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(862)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(z){v(z);v.Highcharts=z;return v}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):v("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(v){function z(a,c,l,g){a.hasOwnProperty(c)||(a[c]=g.apply(null,l))}v=v?v._modules:{};z(v,"parts-more/Pane.js",[v["parts/Globals.js"],v["parts/Utilities.js"]],function(a,c){function l(b,e){this.init(b,e)}var g=c.splat,
k=a.CenteredSeriesMixin,b=a.extend,f=a.merge;b(l.prototype,{coll:"pane",init:function(b,e){this.chart=e;this.background=[];e.pane.push(this);this.setOptions(b)},setOptions:function(b){this.options=f(this.defaultOptions,this.chart.angular?{background:{}}:void 0,b)},render:function(){var b=this.options,e=this.options.background,a=this.chart.renderer;this.group||(this.group=a.g("pane-group").attr({zIndex:b.zIndex||0}).add());this.updateCenter();if(e)for(e=g(e),b=Math.max(e.length,this.background.length||
0),a=0;a<b;a++)e[a]&&this.axis?this.renderBackground(f(this.defaultBackgroundOptions,e[a]),a):this.background[a]&&(this.background[a]=this.background[a].destroy(),this.background.splice(a,1))},renderBackground:function(a,e){var c="animate",f={"class":"highcharts-pane "+(a.className||"")};this.chart.styledMode||b(f,{fill:a.backgroundColor,stroke:a.borderColor,"stroke-width":a.borderWidth});this.background[e]||(this.background[e]=this.chart.renderer.path().add(this.group),c="attr");this.background[e][c]({d:this.axis.getPlotBandPath(a.from,
a.to,a)}).attr(f)},defaultOptions:{center:["50%","50%"],size:"85%",startAngle:0},defaultBackgroundOptions:{shape:"circle",borderWidth:1,borderColor:"#cccccc",backgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"#ffffff"],[1,"#e6e6e6"]]},from:-Number.MAX_VALUE,innerRadius:0,to:Number.MAX_VALUE,outerRadius:"105%"},updateCenter:function(b){this.center=(b||this.axis||{}).center=k.getCenter.call(this)},update:function(b,e){f(!0,this.options,b);f(!0,this.chart.options.pane,b);this.setOptions(this.options);
this.render();this.chart.axes.forEach(function(b){b.pane===this&&(b.pane=null,b.update({},e))},this)}});a.Pane=l});z(v,"parts-more/RadialAxis.js",[v["parts/Globals.js"],v["parts/Utilities.js"]],function(a,c){var l=c.pInt;c=a.addEvent;var g=a.Axis,k=a.extend,b=a.merge,f=a.noop,u=a.pick,e=a.Tick,p=a.wrap,q=a.correctFloat,x=g.prototype,m=e.prototype;var t={getOffset:f,redraw:function(){this.isDirty=!1},render:function(){this.isDirty=!1},createLabelCollector:function(){return!1},setScale:f,setCategories:f,
setTitle:f};var y={defaultRadialGaugeOptions:{labels:{align:"center",x:0,y:null},minorGridLineWidth:0,minorTickInterval:"auto",minorTickLength:10,minorTickPosition:"inside",minorTickWidth:1,tickLength:10,tickPosition:"inside",tickWidth:2,title:{rotation:0},zIndex:2},defaultRadialXOptions:{gridLineWidth:1,labels:{align:null,distance:15,x:0,y:null,style:{textOverflow:"none"}},maxPadding:0,minPadding:0,showLastLabel:!1,tickLength:0},defaultRadialYOptions:{gridLineInterpolation:"circle",labels:{align:"right",
x:-3,y:-2},showLastLabel:!1,title:{x:4,text:null,rotation:90}},setOptions:function(d){d=this.options=b(this.defaultOptions,this.defaultRadialOptions,d);d.plotBands||(d.plotBands=[]);a.fireEvent(this,"afterSetOptions")},getOffset:function(){x.getOffset.call(this);this.chart.axisOffset[this.side]=0},getLinePath:function(d,n){d=this.center;var h=this.chart,r=u(n,d[2]/2-this.offset);this.isCircular||void 0!==n?(n=this.chart.renderer.symbols.arc(this.left+d[0],this.top+d[1],r,r,{start:this.startAngleRad,
end:this.endAngleRad,open:!0,innerR:0}),n.xBounds=[this.left+d[0]],n.yBounds=[this.top+d[1]-r]):(n=this.postTranslate(this.angleRad,r),n=["M",d[0]+h.plotLeft,d[1]+h.plotTop,"L",n.x,n.y]);return n},setAxisTranslation:function(){x.setAxisTranslation.call(this);this.center&&(this.transA=this.isCircular?(this.endAngleRad-this.startAngleRad)/(this.max-this.min||1):this.center[2]/2/(this.max-this.min||1),this.minPixelPadding=this.isXAxis?this.transA*this.minPointOffset:0)},beforeSetTickPositions:function(){if(this.autoConnect=
this.isCircular&&void 0===u(this.userMax,this.options.max)&&q(this.endAngleRad-this.startAngleRad)===q(2*Math.PI))this.max+=this.categories&&1||this.pointRange||this.closestPointRange||0},setAxisSize:function(){x.setAxisSize.call(this);this.isRadial&&(this.pane.updateCenter(this),this.isCircular&&(this.sector=this.endAngleRad-this.startAngleRad),this.len=this.width=this.height=this.center[2]*u(this.sector,1)/2)},getPosition:function(d,n){return this.postTranslate(this.isCircular?this.translate(d):
this.angleRad,u(this.isCircular?n:this.translate(d),this.center[2]/2)-this.offset)},postTranslate:function(d,n){var h=this.chart,r=this.center;d=this.startAngleRad+d;return{x:h.plotLeft+r[0]+Math.cos(d)*n,y:h.plotTop+r[1]+Math.sin(d)*n}},getPlotBandPath:function(d,n,h){var r=this.center,w=this.startAngleRad,b=r[2]/2,e=[u(h.outerRadius,"100%"),h.innerRadius,u(h.thickness,10)],a=Math.min(this.offset,0),c=/%$/;var f=this.isCircular;if("polygon"===this.options.gridLineInterpolation)e=this.getPlotLinePath({value:d}).concat(this.getPlotLinePath({value:n,
reverse:!0}));else{d=Math.max(d,this.min);n=Math.min(n,this.max);f||(e[0]=this.translate(d),e[1]=this.translate(n));e=e.map(function(d){c.test(d)&&(d=l(d,10)*b/100);return d});if("circle"!==h.shape&&f)d=w+this.translate(d),n=w+this.translate(n);else{d=-Math.PI/2;n=1.5*Math.PI;var m=!0}e[0]-=a;e[2]-=a;e=this.chart.renderer.symbols.arc(this.left+r[0],this.top+r[1],e[0],e[0],{start:Math.min(d,n),end:Math.max(d,n),innerR:u(e[1],e[0]-e[2]),open:m});f&&(f=(n+d)/2,a=this.left+r[0]+r[2]/2*Math.cos(f),e.xBounds=
f>-Math.PI/2&&f<Math.PI/2?[a,this.chart.plotWidth]:[0,a],e.yBounds=[this.top+r[1]+r[2]/2*Math.sin(f)],e.yBounds[0]+=f>-Math.PI&&0>f||f>Math.PI?-10:10)}return e},getPlotLinePath:function(d){var n=this,h=n.center,r=n.chart,w=d.value;d=d.reverse;var b=n.getPosition(w),e,a;if(n.isCircular)var f=["M",h[0]+r.plotLeft,h[1]+r.plotTop,"L",b.x,b.y];else"circle"===n.options.gridLineInterpolation?(w=n.translate(w),f=n.getLinePath(0,w)):(r.xAxis.forEach(function(d){d.pane===n.pane&&(e=d)}),f=[],w=n.translate(w),
h=e.tickPositions,e.autoConnect&&(h=h.concat([h[0]])),d&&(h=[].concat(h).reverse()),h.forEach(function(d,h){a=e.getPosition(d,w);f.push(h?"L":"M",a.x,a.y)}));return f},getTitlePosition:function(){var d=this.center,n=this.chart,h=this.options.title;return{x:n.plotLeft+d[0]+(h.x||0),y:n.plotTop+d[1]-{high:.5,middle:.25,low:0}[h.align]*d[2]+(h.y||0)}},createLabelCollector:function(){var d=this;return function(){if(d.isRadial&&d.tickPositions&&!0!==d.options.labels.allowOverlap)return d.tickPositions.map(function(n){return d.ticks[n]&&
d.ticks[n].label}).filter(function(d){return!!d})}}};c(g,"init",function(d){var n=this.chart,h=n.angular,r=n.polar,w=this.isXAxis,e=h&&w,a,f=n.options;d=d.userOptions.pane||0;d=this.pane=n.pane&&n.pane[d];if("colorAxis"===this.coll)this.isRadial=!1;else{if(h){if(k(this,e?t:y),a=!w)this.defaultRadialOptions=this.defaultRadialGaugeOptions}else r&&(k(this,y),this.defaultRadialOptions=(a=w)?this.defaultRadialXOptions:b(this.defaultYAxisOptions,this.defaultRadialYOptions));h||r?(this.isRadial=!0,n.inverted=
!1,f.chart.zoomType=null,this.labelCollector||(this.labelCollector=this.createLabelCollector()),this.labelCollector&&n.labelCollectors.push(this.labelCollector)):this.isRadial=!1;d&&a&&(d.axis=this);this.isCircular=a}});c(g,"afterInit",function(){var d=this.chart,n=this.options,h=this.pane,r=h&&h.options;d.angular&&this.isXAxis||!h||!d.angular&&!d.polar||(this.angleRad=(n.angle||0)*Math.PI/180,this.startAngleRad=(r.startAngle-90)*Math.PI/180,this.endAngleRad=(u(r.endAngle,r.startAngle+360)-90)*Math.PI/
180,this.offset=n.offset||0)});c(g,"autoLabelAlign",function(d){this.isRadial&&(d.align=void 0,d.preventDefault())});c(g,"destroy",function(){if(this.chart&&this.chart.labelCollectors){var d=this.chart.labelCollectors.indexOf(this.labelCollector);0<=d&&this.chart.labelCollectors.splice(d,1)}});c(e,"afterGetPosition",function(d){this.axis.getPosition&&k(d.pos,this.axis.getPosition(this.pos))});c(e,"afterGetLabelPosition",function(d){var n=this.axis,h=this.label,r=h.getBBox(),w=n.options.labels,b=w.y,
e=20,f=w.align,c=(n.translate(this.pos)+n.startAngleRad+Math.PI/2)/Math.PI*180%360,m=Math.round(c),g="end",t=0>m?m+360:m,q=t,k=0,p=0,x=null===w.y?.3*-r.height:0;if(n.isRadial){var l=n.getPosition(this.pos,n.center[2]/2+a.relativeLength(u(w.distance,-25),n.center[2]/2,-n.center[2]/2));"auto"===w.rotation?h.attr({rotation:c}):null===b&&(b=n.chart.renderer.fontMetrics(h.styles&&h.styles.fontSize).b-r.height/2);null===f&&(n.isCircular?(r.width>n.len*n.tickInterval/(n.max-n.min)&&(e=0),f=c>e&&c<180-e?
"left":c>180+e&&c<360-e?"right":"center"):f="center",h.attr({align:f}));if("auto"===f&&2===n.tickPositions.length&&n.isCircular){90<t&&180>t?t=180-t:270<t&&360>=t&&(t=540-t);180<q&&360>=q&&(q=360-q);if(n.pane.options.startAngle===m||n.pane.options.startAngle===m+360||n.pane.options.startAngle===m-360)g="start";f=-90<=m&&90>=m||-360<=m&&-270>=m||270<=m&&360>=m?"start"===g?"right":"left":"start"===g?"left":"right";70<q&&110>q&&(f="center");15>t||180<=t&&195>t?k=.3*r.height:15<=t&&35>=t?k="start"===
g?0:.75*r.height:195<=t&&215>=t?k="start"===g?.75*r.height:0:35<t&&90>=t?k="start"===g?.25*-r.height:r.height:215<t&&270>=t&&(k="start"===g?r.height:.25*-r.height);15>q?p="start"===g?.15*-r.height:.15*r.height:165<q&&180>=q&&(p="start"===g?.15*r.height:.15*-r.height);h.attr({align:f});h.translate(p,k+x)}d.pos.x=l.x+w.x;d.pos.y=l.y+b}});p(m,"getMarkPath",function(d,n,h,r,w,e,b){var a=this.axis;a.isRadial?(d=a.getPosition(this.pos,a.center[2]/2+r),n=["M",n,h,"L",d.x,d.y]):n=d.call(this,n,h,r,w,e,b);
return n})});z(v,"parts-more/AreaRangeSeries.js",[v["parts/Globals.js"],v["parts/Utilities.js"]],function(a,c){var l=c.defined,g=c.isArray,k=c.isNumber,b=a.pick,f=a.extend;c=a.seriesType;var u=a.seriesTypes,e=a.Series.prototype,p=a.Point.prototype;c("arearange","area",{lineWidth:1,threshold:null,tooltip:{pointFormat:'<span style="color:{series.color}">\u25cf</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'},trackByArea:!0,dataLabels:{align:null,verticalAlign:null,xLow:0,xHigh:0,
yLow:0,yHigh:0}},{pointArrayMap:["low","high"],pointValKey:"low",deferTranslatePolar:!0,toYData:function(e){return[e.low,e.high]},highToXY:function(e){var b=this.chart,a=this.xAxis.postTranslate(e.rectPlotX,this.yAxis.len-e.plotHigh);e.plotHighX=a.x-b.plotLeft;e.plotHigh=a.y-b.plotTop;e.plotLowX=e.plotX},translate:function(){var e=this,b=e.yAxis,a=!!e.modifyValue;u.area.prototype.translate.apply(e);e.points.forEach(function(f){var c=f.high,d=f.plotY;f.isNull?f.plotY=null:(f.plotLow=d,f.plotHigh=b.translate(a?
e.modifyValue(c,f):c,0,1,0,1),a&&(f.yBottom=f.plotHigh))});this.chart.polar&&this.points.forEach(function(b){e.highToXY(b);b.tooltipPos=[(b.plotHighX+b.plotLowX)/2,(b.plotHigh+b.plotLow)/2]})},getGraphPath:function(e){var a=[],f=[],c,g=u.area.prototype.getGraphPath;var d=this.options;var n=this.chart.polar&&!1!==d.connectEnds,h=d.connectNulls,r=d.step;e=e||this.points;for(c=e.length;c--;){var w=e[c];w.isNull||n||h||e[c+1]&&!e[c+1].isNull||f.push({plotX:w.plotX,plotY:w.plotY,doCurve:!1});var A={polarPlotY:w.polarPlotY,
rectPlotX:w.rectPlotX,yBottom:w.yBottom,plotX:b(w.plotHighX,w.plotX),plotY:w.plotHigh,isNull:w.isNull};f.push(A);a.push(A);w.isNull||n||h||e[c-1]&&!e[c-1].isNull||f.push({plotX:w.plotX,plotY:w.plotY,doCurve:!1})}e=g.call(this,e);r&&(!0===r&&(r="left"),d.step={left:"right",center:"center",right:"left"}[r]);a=g.call(this,a);f=g.call(this,f);d.step=r;d=[].concat(e,a);this.chart.polar||"M"!==f[0]||(f[0]="L");this.graphPath=d;this.areaPath=e.concat(f);d.isArea=!0;d.xMap=e.xMap;this.areaPath.xMap=e.xMap;
return d},drawDataLabels:function(){var b=this.points,a=b.length,c,k=[],p=this.options.dataLabels,d,n=this.chart.inverted;if(g(p))if(1<p.length){var h=p[0];var r=p[1]}else h=p[0],r={enabled:!1};else h=f({},p),h.x=p.xHigh,h.y=p.yHigh,r=f({},p),r.x=p.xLow,r.y=p.yLow;if(h.enabled||this._hasPointLabels){for(c=a;c--;)if(d=b[c]){var w=h.inside?d.plotHigh<d.plotLow:d.plotHigh>d.plotLow;d.y=d.high;d._plotY=d.plotY;d.plotY=d.plotHigh;k[c]=d.dataLabel;d.dataLabel=d.dataLabelUpper;d.below=w;n?h.align||(h.align=
w?"right":"left"):h.verticalAlign||(h.verticalAlign=w?"top":"bottom")}this.options.dataLabels=h;e.drawDataLabels&&e.drawDataLabels.apply(this,arguments);for(c=a;c--;)if(d=b[c])d.dataLabelUpper=d.dataLabel,d.dataLabel=k[c],delete d.dataLabels,d.y=d.low,d.plotY=d._plotY}if(r.enabled||this._hasPointLabels){for(c=a;c--;)if(d=b[c])w=r.inside?d.plotHigh<d.plotLow:d.plotHigh>d.plotLow,d.below=!w,n?r.align||(r.align=w?"left":"right"):r.verticalAlign||(r.verticalAlign=w?"bottom":"top");this.options.dataLabels=
r;e.drawDataLabels&&e.drawDataLabels.apply(this,arguments)}if(h.enabled)for(c=a;c--;)if(d=b[c])d.dataLabels=[d.dataLabelUpper,d.dataLabel].filter(function(d){return!!d});this.options.dataLabels=p},alignDataLabel:function(){u.column.prototype.alignDataLabel.apply(this,arguments)},drawPoints:function(){var b=this.points.length,f;e.drawPoints.apply(this,arguments);for(f=0;f<b;){var c=this.points[f];c.origProps={plotY:c.plotY,plotX:c.plotX,isInside:c.isInside,negative:c.negative,zone:c.zone,y:c.y};c.lowerGraphic=
c.graphic;c.graphic=c.upperGraphic;c.plotY=c.plotHigh;l(c.plotHighX)&&(c.plotX=c.plotHighX);c.y=c.high;c.negative=c.high<(this.options.threshold||0);c.zone=this.zones.length&&c.getZone();this.chart.polar||(c.isInside=c.isTopInside=void 0!==c.plotY&&0<=c.plotY&&c.plotY<=this.yAxis.len&&0<=c.plotX&&c.plotX<=this.xAxis.len);f++}e.drawPoints.apply(this,arguments);for(f=0;f<b;)c=this.points[f],c.upperGraphic=c.graphic,c.graphic=c.lowerGraphic,a.extend(c,c.origProps),delete c.origProps,f++},setStackedPoints:a.noop},
{setState:function(){var e=this.state,b=this.series,c=b.chart.polar;l(this.plotHigh)||(this.plotHigh=b.yAxis.toPixels(this.high,!0));l(this.plotLow)||(this.plotLow=this.plotY=b.yAxis.toPixels(this.low,!0));b.stateMarkerGraphic&&(b.lowerStateMarkerGraphic=b.stateMarkerGraphic,b.stateMarkerGraphic=b.upperStateMarkerGraphic);this.graphic=this.upperGraphic;this.plotY=this.plotHigh;c&&(this.plotX=this.plotHighX);p.setState.apply(this,arguments);this.state=e;this.plotY=this.plotLow;this.graphic=this.lowerGraphic;
c&&(this.plotX=this.plotLowX);b.stateMarkerGraphic&&(b.upperStateMarkerGraphic=b.stateMarkerGraphic,b.stateMarkerGraphic=b.lowerStateMarkerGraphic,b.lowerStateMarkerGraphic=void 0);p.setState.apply(this,arguments)},haloPath:function(){var b=this.series.chart.polar,e=[];this.plotY=this.plotLow;b&&(this.plotX=this.plotLowX);this.isInside&&(e=p.haloPath.apply(this,arguments));this.plotY=this.plotHigh;b&&(this.plotX=this.plotHighX);this.isTopInside&&(e=e.concat(p.haloPath.apply(this,arguments)));return e},
destroyElements:function(){["lowerGraphic","upperGraphic"].forEach(function(e){this[e]&&(this[e]=this[e].destroy())},this);this.graphic=null;return p.destroyElements.apply(this,arguments)},isValid:function(){return k(this.low)&&k(this.high)}});""});z(v,"parts-more/AreaSplineRangeSeries.js",[v["parts/Globals.js"]],function(a){var c=a.seriesType;c("areasplinerange","arearange",null,{getPointSpline:a.seriesTypes.spline.prototype.getPointSpline});""});z(v,"parts-more/ColumnRangeSeries.js",[v["parts/Globals.js"]],
function(a){var c=a.defaultPlotOptions,l=a.merge,g=a.noop,k=a.pick,b=a.seriesType,f=a.seriesTypes.column.prototype;b("columnrange","arearange",l(c.column,c.arearange,{pointRange:null,marker:null,states:{hover:{halo:!1}}}),{translate:function(){var b=this,e=b.yAxis,c=b.xAxis,a=c.startAngleRad,g,l=b.chart,t=b.xAxis.isRadial,y=Math.max(l.chartWidth,l.chartHeight)+999,d;f.translate.apply(b);b.points.forEach(function(n){var h=n.shapeArgs,r=b.options.minPointLength;n.plotHigh=d=Math.min(Math.max(-y,e.translate(n.high,
0,1,0,1)),y);n.plotLow=Math.min(Math.max(-y,n.plotY),y);var w=d;var f=k(n.rectPlotY,n.plotY)-d;Math.abs(f)<r?(r-=f,f+=r,w-=r/2):0>f&&(f*=-1,w-=f);t?(g=n.barX+a,n.shapeType="path",n.shapeArgs={d:b.polarArc(w+f,w,g,g+n.pointWidth)}):(h.height=f,h.y=w,n.tooltipPos=l.inverted?[e.len+e.pos-l.plotLeft-w-f/2,c.len+c.pos-l.plotTop-h.x-h.width/2,f]:[c.left-l.plotLeft+h.x+h.width/2,e.pos-l.plotTop+w+f/2,f])})},directTouch:!0,trackerGroups:["group","dataLabelsGroup"],drawGraph:g,getSymbol:g,crispCol:function(){return f.crispCol.apply(this,
arguments)},drawPoints:function(){return f.drawPoints.apply(this,arguments)},drawTracker:function(){return f.drawTracker.apply(this,arguments)},getColumnMetrics:function(){return f.getColumnMetrics.apply(this,arguments)},pointAttribs:function(){return f.pointAttribs.apply(this,arguments)},animate:function(){return f.animate.apply(this,arguments)},polarArc:function(){return f.polarArc.apply(this,arguments)},translate3dPoints:function(){return f.translate3dPoints.apply(this,arguments)},translate3dShapes:function(){return f.translate3dShapes.apply(this,
arguments)}},{setState:f.pointClass.prototype.setState});""});z(v,"parts-more/ColumnPyramidSeries.js",[v["parts/Globals.js"]],function(a){var c=a.pick,l=a.seriesType,g=a.seriesTypes.column.prototype;l("columnpyramid","column",{},{translate:function(){var a=this,b=a.chart,f=a.options,l=a.dense=2>a.closestPointRange*a.xAxis.transA;l=a.borderWidth=c(f.borderWidth,l?0:1);var e=a.yAxis,p=f.threshold,q=a.translatedThreshold=e.getThreshold(p),x=c(f.minPointLength,5),m=a.getColumnMetrics(),t=m.width,y=a.barW=
Math.max(t,1+2*l),d=a.pointXOffset=m.offset;b.inverted&&(q-=.5);f.pointPadding&&(y=Math.ceil(y));g.translate.apply(a);a.points.forEach(function(n){var h=c(n.yBottom,q),r=999+Math.abs(h),w=Math.min(Math.max(-r,n.plotY),e.len+r);r=n.plotX+d;var A=y/2,g=Math.min(w,h);h=Math.max(w,h)-g;n.barX=r;n.pointWidth=t;n.tooltipPos=b.inverted?[e.len+e.pos-b.plotLeft-w,a.xAxis.len-r-A,h]:[r+A,w+e.pos-b.plotTop,h];w=p+(n.total||n.y);"percent"===f.stacking&&(w=p+(0>n.y)?-100:100);w=e.toPixels(w,!0);var k=b.plotHeight-
w-(b.plotHeight-q);var l=A*(g-w)/k;var m=A*(g+h-w)/k;k=r-l+A;l=r+l+A;var u=r+m+A;m=r-m+A;var B=g-x;var C=g+h;0>n.y&&(B=g,C=g+h+x);b.inverted&&(u=b.plotWidth-g,k=w-(b.plotWidth-q),l=A*(w-u)/k,m=A*(w-(u-h))/k,k=r+A+l,l=k-2*l,u=r-m+A,m=r+m+A,B=g,C=g+h-x,0>n.y&&(C=g+h+x));n.shapeType="path";n.shapeArgs={x:k,y:B,width:l-k,height:h,d:["M",k,B,"L",l,B,u,C,m,C,"Z"]}})}});""});z(v,"parts-more/GaugeSeries.js",[v["parts/Globals.js"],v["parts/Utilities.js"]],function(a,c){var l=c.isNumber,g=c.pInt,k=a.merge,
b=a.pick,f=a.Series;c=a.seriesType;var u=a.TrackerMixin;c("gauge","line",{dataLabels:{borderColor:"#cccccc",borderRadius:3,borderWidth:1,crop:!1,defer:!1,enabled:!0,verticalAlign:"top",y:15,zIndex:2},dial:{},pivot:{},tooltip:{headerFormat:""},showInLegend:!1},{angular:!0,directTouch:!0,drawGraph:a.noop,fixedBox:!0,forceDL:!0,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],translate:function(){var e=this.yAxis,c=this.options,a=e.center;this.generatePoints();this.points.forEach(function(f){var p=
k(c.dial,f.dial),t=g(b(p.radius,"80%"))*a[2]/200,u=g(b(p.baseLength,"70%"))*t/100,d=g(b(p.rearLength,"10%"))*t/100,n=p.baseWidth||3,h=p.topWidth||1,r=c.overshoot,w=e.startAngleRad+e.translate(f.y,null,null,null,!0);l(r)?(r=r/180*Math.PI,w=Math.max(e.startAngleRad-r,Math.min(e.endAngleRad+r,w))):!1===c.wrap&&(w=Math.max(e.startAngleRad,Math.min(e.endAngleRad,w)));w=180*w/Math.PI;f.shapeType="path";f.shapeArgs={d:p.path||["M",-d,-n/2,"L",u,-n/2,t,-h/2,t,h/2,u,n/2,-d,n/2,"z"],translateX:a[0],translateY:a[1],
rotation:w};f.plotX=a[0];f.plotY=a[1]})},drawPoints:function(){var e=this,c=e.chart,a=e.yAxis.center,f=e.pivot,g=e.options,l=g.pivot,u=c.renderer;e.points.forEach(function(d){var b=d.graphic,h=d.shapeArgs,r=h.d,w=k(g.dial,d.dial);b?(b.animate(h),h.d=r):d.graphic=u[d.shapeType](h).attr({rotation:h.rotation,zIndex:1}).addClass("highcharts-dial").add(e.group);if(!c.styledMode)d.graphic[b?"animate":"attr"]({stroke:w.borderColor||"none","stroke-width":w.borderWidth||0,fill:w.backgroundColor||"#000000"})});
f?f.animate({translateX:a[0],translateY:a[1]}):(e.pivot=u.circle(0,0,b(l.radius,5)).attr({zIndex:2}).addClass("highcharts-pivot").translate(a[0],a[1]).add(e.group),c.styledMode||e.pivot.attr({"stroke-width":l.borderWidth||0,stroke:l.borderColor||"#cccccc",fill:l.backgroundColor||"#000000"}))},animate:function(b){var e=this;b||(e.points.forEach(function(b){var c=b.graphic;c&&(c.attr({rotation:180*e.yAxis.startAngleRad/Math.PI}),c.animate({rotation:b.shapeArgs.rotation},e.options.animation))}),e.animate=
null)},render:function(){this.group=this.plotGroup("group","series",this.visible?"visible":"hidden",this.options.zIndex,this.chart.seriesGroup);f.prototype.render.call(this);this.group.clip(this.chart.clipRect)},setData:function(e,c){f.prototype.setData.call(this,e,!1);this.processData();this.generatePoints();b(c,!0)&&this.chart.redraw()},hasData:function(){return!!this.points.length},drawTracker:u&&u.drawTrackerPoint},{setState:function(b){this.state=b}});""});z(v,"parts-more/BoxPlotSeries.js",[v["parts/Globals.js"]],
function(a){var c=a.noop,l=a.pick,g=a.seriesType,k=a.seriesTypes;g("boxplot","column",{threshold:null,tooltip:{pointFormat:'<span style="color:{point.color}">\u25cf</span> <b> {series.name}</b><br/>Maximum: {point.high}<br/>Upper quartile: {point.q3}<br/>Median: {point.median}<br/>Lower quartile: {point.q1}<br/>Minimum: {point.low}<br/>'},whiskerLength:"50%",fillColor:"#ffffff",lineWidth:1,medianWidth:2,whiskerWidth:2},{pointArrayMap:["low","q1","median","q3","high"],toYData:function(b){return[b.low,
b.q1,b.median,b.q3,b.high]},pointValKey:"high",pointAttribs:function(){return{}},drawDataLabels:c,translate:function(){var b=this.yAxis,c=this.pointArrayMap;k.column.prototype.translate.apply(this);this.points.forEach(function(a){c.forEach(function(e){null!==a[e]&&(a[e+"Plot"]=b.translate(a[e],0,1,0,1))})})},drawPoints:function(){var b=this,c=b.options,a=b.chart,e=a.renderer,g,k,x,m,t,y,d=0,n,h,r,w,A=!1!==b.doQuartiles,E,D=b.options.whiskerLength;b.points.forEach(function(f){var p=f.graphic,u=p?"animate":
"attr",I=f.shapeArgs,q={},F={},G={},H={},v=f.color||b.color;void 0!==f.plotY&&(n=I.width,h=Math.floor(I.x),r=h+n,w=Math.round(n/2),g=Math.floor(A?f.q1Plot:f.lowPlot),k=Math.floor(A?f.q3Plot:f.lowPlot),x=Math.floor(f.highPlot),m=Math.floor(f.lowPlot),p||(f.graphic=p=e.g("point").add(b.group),f.stem=e.path().addClass("highcharts-boxplot-stem").add(p),D&&(f.whiskers=e.path().addClass("highcharts-boxplot-whisker").add(p)),A&&(f.box=e.path(void 0).addClass("highcharts-boxplot-box").add(p)),f.medianShape=
e.path(void 0).addClass("highcharts-boxplot-median").add(p)),a.styledMode||(F.stroke=f.stemColor||c.stemColor||v,F["stroke-width"]=l(f.stemWidth,c.stemWidth,c.lineWidth),F.dashstyle=f.stemDashStyle||c.stemDashStyle,f.stem.attr(F),D&&(G.stroke=f.whiskerColor||c.whiskerColor||v,G["stroke-width"]=l(f.whiskerWidth,c.whiskerWidth,c.lineWidth),f.whiskers.attr(G)),A&&(q.fill=f.fillColor||c.fillColor||v,q.stroke=c.lineColor||v,q["stroke-width"]=c.lineWidth||0,f.box.attr(q)),H.stroke=f.medianColor||c.medianColor||
v,H["stroke-width"]=l(f.medianWidth,c.medianWidth,c.lineWidth),f.medianShape.attr(H)),y=f.stem.strokeWidth()%2/2,d=h+w+y,f.stem[u]({d:["M",d,k,"L",d,x,"M",d,g,"L",d,m]}),A&&(y=f.box.strokeWidth()%2/2,g=Math.floor(g)+y,k=Math.floor(k)+y,h+=y,r+=y,f.box[u]({d:["M",h,k,"L",h,g,"L",r,g,"L",r,k,"L",h,k,"z"]})),D&&(y=f.whiskers.strokeWidth()%2/2,x+=y,m+=y,E=/%$/.test(D)?w*parseFloat(D)/100:D/2,f.whiskers[u]({d:["M",d-E,x,"L",d+E,x,"M",d-E,m,"L",d+E,m]})),t=Math.round(f.medianPlot),y=f.medianShape.strokeWidth()%
2/2,t+=y,f.medianShape[u]({d:["M",h,t,"L",r,t]}))})},setStackedPoints:c});""});z(v,"parts-more/ErrorBarSeries.js",[v["parts/Globals.js"]],function(a){var c=a.noop,l=a.seriesType,g=a.seriesTypes;l("errorbar","boxplot",{color:"#000000",grouping:!1,linkedTo:":previous",tooltip:{pointFormat:'<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'},whiskerWidth:null},{type:"errorbar",pointArrayMap:["low","high"],toYData:function(c){return[c.low,c.high]},
pointValKey:"high",doQuartiles:!1,drawDataLabels:g.arearange?function(){var c=this.pointValKey;g.arearange.prototype.drawDataLabels.call(this);this.data.forEach(function(b){b.y=b[c]})}:c,getColumnMetrics:function(){return this.linkedParent&&this.linkedParent.columnMetrics||g.column.prototype.getColumnMetrics.call(this)}});""});z(v,"parts-more/WaterfallSeries.js",[v["parts/Globals.js"],v["parts/Utilities.js"]],function(a,c){var l=c.isNumber,g=c.objectEach,k=a.correctFloat,b=a.pick,f=a.arrayMin,u=a.arrayMax;
c=a.addEvent;var e=a.Axis,p=a.Chart,q=a.Point,x=a.Series,m=a.StackItem,t=a.seriesType,y=a.seriesTypes;c(e,"afterInit",function(){this.isXAxis||(this.waterfallStacks={changed:!1})});c(p,"beforeRedraw",function(){for(var d=this.axes,b=this.series,h=b.length;h--;)b[h].options.stacking&&(d.forEach(function(d){d.isXAxis||(d.waterfallStacks.changed=!0)}),h=0)});c(e,"afterRender",function(){var d=this.options.stackLabels;d&&d.enabled&&this.waterfallStacks&&this.renderWaterfallStackTotals()});e.prototype.renderWaterfallStackTotals=
function(){var d=this.waterfallStacks,b=this.stackTotalGroup,h=new m(this,this.options.stackLabels,!1,0,void 0);this.dummyStackItem=h;g(d,function(d){g(d,function(d){h.total=d.stackTotal;d.label&&(h.label=d.label);m.prototype.render.call(h,b);d.label=h.label;delete h.label})});h.total=null};t("waterfall","column",{dataLabels:{inside:!0},lineWidth:1,lineColor:"#333333",dashStyle:"Dot",borderColor:"#333333",states:{hover:{lineWidthPlus:0}}},{pointValKey:"y",showLine:!0,generatePoints:function(){var d;
y.column.prototype.generatePoints.apply(this);var b=0;for(d=this.points.length;b<d;b++){var h=this.points[b];var r=this.processedYData[b];if(h.isIntermediateSum||h.isSum)h.y=k(r)}},translate:function(){var d=this.options,e=this.yAxis,h,r=b(d.minPointLength,5),c=r/2,f=d.threshold,a=d.stacking,g=e.waterfallStacks[this.stackKey];y.column.prototype.translate.apply(this);var k=h=f;var l=this.points;var p=0;for(d=l.length;p<d;p++){var t=l[p];var u=this.processedYData[p];var m=t.shapeArgs;var q=[0,u];var x=
t.y;if(a){if(g){q=g[p];if("overlap"===a){var v=q.stackState[q.stateIndex--];v=0<=x?v:v-x;Object.hasOwnProperty.call(q,"absolutePos")&&delete q.absolutePos;Object.hasOwnProperty.call(q,"absoluteNeg")&&delete q.absoluteNeg}else 0<=x?(v=q.threshold+q.posTotal,q.posTotal-=x):(v=q.threshold+q.negTotal,q.negTotal-=x,v-=x),!q.posTotal&&Object.hasOwnProperty.call(q,"absolutePos")&&(q.posTotal=q.absolutePos,delete q.absolutePos),!q.negTotal&&Object.hasOwnProperty.call(q,"absoluteNeg")&&(q.negTotal=q.absoluteNeg,
delete q.absoluteNeg);t.isSum||(q.connectorThreshold=q.threshold+q.stackTotal);e.reversed?(u=0<=x?v-x:v+x,x=v):(u=v,x=v-x);t.below=u<=b(f,0);m.y=e.translate(u,0,1,0,1);m.height=Math.abs(m.y-e.translate(x,0,1,0,1))}if(x=e.dummyStackItem)x.x=p,x.label=g[p].label,x.setOffset(this.pointXOffset||0,this.barW||0,this.stackedYNeg[p],this.stackedYPos[p])}else v=Math.max(k,k+x)+q[0],m.y=e.translate(v,0,1,0,1),t.isSum?(m.y=e.translate(q[1],0,1,0,1),m.height=Math.min(e.translate(q[0],0,1,0,1),e.len)-m.y):t.isIntermediateSum?
(0<=x?(u=q[1]+h,x=h):(u=h,x=q[1]+h),e.reversed&&(u^=x,x^=u,u^=x),m.y=e.translate(u,0,1,0,1),m.height=Math.abs(m.y-Math.min(e.translate(x,0,1,0,1),e.len)),h+=q[1]):(m.height=0<u?e.translate(k,0,1,0,1)-m.y:e.translate(k,0,1,0,1)-e.translate(k-u,0,1,0,1),k+=u,t.below=k<b(f,0)),0>m.height&&(m.y+=m.height,m.height*=-1);t.plotY=m.y=Math.round(m.y)-this.borderWidth%2/2;m.height=Math.max(Math.round(m.height),.001);t.yBottom=m.y+m.height;m.height<=r&&!t.isNull?(m.height=r,m.y-=c,t.plotY=m.y,t.minPointLengthOffset=
0>t.y?-c:c):(t.isNull&&(m.width=0),t.minPointLengthOffset=0);m=t.plotY+(t.negative?m.height:0);this.chart.inverted?t.tooltipPos[0]=e.len-m:t.tooltipPos[1]=m}},processData:function(d){var b=this.options,h=this.yData,e=b.data,c=h.length,f=b.threshold||0,a,g,t,l,p;for(p=g=a=t=l=0;p<c;p++){var m=h[p];var q=e&&e[p]?e[p]:{};"sum"===m||q.isSum?h[p]=k(g):"intermediateSum"===m||q.isIntermediateSum?(h[p]=k(a),a=0):(g+=m,a+=m);t=Math.min(g,t);l=Math.max(g,l)}x.prototype.processData.call(this,d);b.stacking||
(this.dataMin=t+f,this.dataMax=l)},toYData:function(d){return d.isSum?0===d.x?null:"sum":d.isIntermediateSum?0===d.x?null:"intermediateSum":d.y},pointAttribs:function(d,b){var h=this.options.upColor;h&&!d.options.color&&(d.color=0<d.y?h:null);d=y.column.prototype.pointAttribs.call(this,d,b);delete d.dashstyle;return d},getGraphPath:function(){return["M",0,0]},getCrispPath:function(){var d=this.data,b=this.yAxis,h=d.length,e=Math.round(this.graph.strokeWidth())%2/2,c=Math.round(this.borderWidth)%2/
2,f=this.xAxis.reversed,a=this.yAxis.reversed,g=this.options.stacking,k=[],t;for(t=1;t<h;t++){var p=d[t].shapeArgs;var l=d[t-1];var m=d[t-1].shapeArgs;var q=b.waterfallStacks[this.stackKey];var u=0<l.y?-m.height:0;if(q){q=q[t-1];g?(q=q.connectorThreshold,u=Math.round(b.translate(q,0,1,0,1)+(a?u:0))-e):u=m.y+l.minPointLengthOffset+c-e;var x=["M",m.x+(f?0:m.width),u,"L",p.x+(f?p.width:0),u]}if(!g&&0>l.y&&!a||0<l.y&&a)x[2]+=m.height,x[5]+=m.height;k=k.concat(x)}return k},drawGraph:function(){x.prototype.drawGraph.call(this);
this.graph.attr({d:this.getCrispPath()})},setStackedPoints:function(){function d(d,h,b,e){if(z)for(b;b<z;b++)u.stackState[b]+=e;else u.stackState[0]=d,z=u.stackState.length;u.stackState.push(u.stackState[z-1]+h)}var b=this.options,h=this.yAxis.waterfallStacks,e=b.threshold,c=e||0,f=c,a=this.stackKey,g=this.xData,t=g.length,k,l;this.yAxis.usePercentage=!1;var p=k=l=c;if(this.visible||!this.chart.options.chart.ignoreHiddenSeries){h[a]||(h[a]={});a=h[a];for(var m=0;m<t;m++){var q=g[m];if(!a[q]||h.changed)a[q]=
{negTotal:0,posTotal:0,stackTotal:0,threshold:0,stateIndex:0,stackState:[],label:h.changed&&a[q]?a[q].label:void 0};var u=a[q];var x=this.yData[m];0<=x?u.posTotal+=x:u.negTotal+=x;var y=b.data[m];q=u.absolutePos=u.posTotal;var v=u.absoluteNeg=u.negTotal;u.stackTotal=q+v;var z=u.stackState.length;y&&y.isIntermediateSum?(d(l,k,0,l),l=k,k=e,c^=f,f^=c,c^=f):y&&y.isSum?(d(e,p,z),c=e):(d(c,x,0,p),y&&(p+=x,k+=x));u.stateIndex++;u.threshold=c;c+=u.stackTotal}h.changed=!1}},getExtremes:function(){var d=this.options.stacking;
if(d){var b=this.yAxis;b=b.waterfallStacks;var h=this.stackedYNeg=[];var e=this.stackedYPos=[];"overlap"===d?g(b[this.stackKey],function(d){h.push(f(d.stackState));e.push(u(d.stackState))}):g(b[this.stackKey],function(d){h.push(d.negTotal+d.threshold);e.push(d.posTotal+d.threshold)});this.dataMin=f(h);this.dataMax=u(e)}}},{getClassName:function(){var d=q.prototype.getClassName.call(this);this.isSum?d+=" highcharts-sum":this.isIntermediateSum&&(d+=" highcharts-intermediate-sum");return d},isValid:function(){return l(this.y)||
this.isSum||this.isIntermediateSum}});""});z(v,"parts-more/PolygonSeries.js",[v["parts/Globals.js"]],function(a){var c=a.Series,l=a.seriesType,g=a.seriesTypes;l("polygon","scatter",{marker:{enabled:!1,states:{hover:{enabled:!1}}},stickyTracking:!1,tooltip:{followPointer:!0,pointFormat:""},trackByArea:!0},{type:"polygon",getGraphPath:function(){for(var a=c.prototype.getGraphPath.call(this),b=a.length+1;b--;)(b===a.length||"M"===a[b])&&0<b&&a.splice(b,0,"z");return this.areaPath=a},drawGraph:function(){this.options.fillColor=
this.color;g.area.prototype.drawGraph.call(this)},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,drawTracker:c.prototype.drawTracker,setStackedPoints:a.noop});""});z(v,"parts-more/BubbleLegend.js",[v["parts/Globals.js"],v["parts/Utilities.js"]],function(a,c){var l=c.isNumber,g=c.objectEach;c=a.Series;var k=a.Legend,b=a.Chart,f=a.addEvent,u=a.wrap,e=a.color,p=a.numberFormat,q=a.merge,x=a.noop,m=a.pick,t=a.stableSort,y=a.setOptions,d=a.arrayMin,n=a.arrayMax;y({legend:{bubbleLegend:{borderColor:void 0,
borderWidth:2,className:void 0,color:void 0,connectorClassName:void 0,connectorColor:void 0,connectorDistance:60,connectorWidth:1,enabled:!1,labels:{className:void 0,allowOverlap:!1,format:"",formatter:void 0,align:"right",style:{fontSize:10,color:void 0},x:0,y:0},maxSize:60,minSize:10,legendIndex:0,ranges:{value:void 0,borderColor:void 0,color:void 0,connectorColor:void 0},sizeBy:"area",sizeByAbsoluteValue:!1,zIndex:1,zThreshold:0}}});a.BubbleLegend=function(d,b){this.init(d,b)};a.BubbleLegend.prototype=
{init:function(d,b){this.options=d;this.visible=!0;this.chart=b.chart;this.legend=b},setState:x,addToLegend:function(d){d.splice(this.options.legendIndex,0,this)},drawLegendSymbol:function(d){var b=this.chart,e=this.options,h=m(d.options.itemDistance,20),c=e.ranges;var a=e.connectorDistance;this.fontMetrics=b.renderer.fontMetrics(e.labels.style.fontSize.toString()+"px");c&&c.length&&l(c[0].value)?(t(c,function(d,b){return b.value-d.value}),this.ranges=c,this.setOptions(),this.render(),b=this.getMaxLabelSize(),
c=this.ranges[0].radius,d=2*c,a=a-c+b.width,a=0<a?a:0,this.maxLabel=b,this.movementX="left"===e.labels.align?a:0,this.legendItemWidth=d+a+h,this.legendItemHeight=d+this.fontMetrics.h/2):d.options.bubbleLegend.autoRanges=!0},setOptions:function(){var d=this.ranges,b=this.options,c=this.chart.series[b.seriesIndex],a=this.legend.baseline,f={"z-index":b.zIndex,"stroke-width":b.borderWidth},n={"z-index":b.zIndex,"stroke-width":b.connectorWidth},g=this.getLabelStyles(),t=c.options.marker.fillOpacity,l=
this.chart.styledMode;d.forEach(function(h,r){l||(f.stroke=m(h.borderColor,b.borderColor,c.color),f.fill=m(h.color,b.color,1!==t?e(c.color).setOpacity(t).get("rgba"):c.color),n.stroke=m(h.connectorColor,b.connectorColor,c.color));d[r].radius=this.getRangeRadius(h.value);d[r]=q(d[r],{center:d[0].radius-d[r].radius+a});l||q(!0,d[r],{bubbleStyle:q(!1,f),connectorStyle:q(!1,n),labelStyle:g})},this)},getLabelStyles:function(){var d=this.options,b={},e="left"===d.labels.align,c=this.legend.options.rtl;
g(d.labels.style,function(d,e){"color"!==e&&"fontSize"!==e&&"z-index"!==e&&(b[e]=d)});return q(!1,b,{"font-size":d.labels.style.fontSize,fill:m(d.labels.style.color,"#000000"),"z-index":d.zIndex,align:c||e?"right":"left"})},getRangeRadius:function(d){var b=this.options;return this.chart.series[this.options.seriesIndex].getRadius.call(this,b.ranges[b.ranges.length-1].value,b.ranges[0].value,b.minSize,b.maxSize,d)},render:function(){var d=this.chart.renderer,b=this.options.zThreshold;this.symbols||
(this.symbols={connectors:[],bubbleItems:[],labels:[]});this.legendSymbol=d.g("bubble-legend");this.legendItem=d.g("bubble-legend-item");this.legendSymbol.translateX=0;this.legendSymbol.translateY=0;this.ranges.forEach(function(d){d.value>=b&&this.renderRange(d)},this);this.legendSymbol.add(this.legendItem);this.legendItem.add(this.legendGroup);this.hideOverlappingLabels()},renderRange:function(d){var b=this.options,e=b.labels,c=this.chart.renderer,h=this.symbols,a=h.labels,f=d.center,n=Math.abs(d.radius),
g=b.connectorDistance,t=e.align,l=e.style.fontSize;g=this.legend.options.rtl||"left"===t?-g:g;e=b.connectorWidth;var p=this.ranges[0].radius,k=f-n-b.borderWidth/2+e/2;l=l/2-(this.fontMetrics.h-l)/2;var m=c.styledMode;"center"===t&&(g=0,b.connectorDistance=0,d.labelStyle.align="center");t=k+b.labels.y;var u=p+g+b.labels.x;h.bubbleItems.push(c.circle(p,f+((k%1?1:.5)-(e%2?0:.5)),n).attr(m?{}:d.bubbleStyle).addClass((m?"highcharts-color-"+this.options.seriesIndex+" ":"")+"highcharts-bubble-legend-symbol "+
(b.className||"")).add(this.legendSymbol));h.connectors.push(c.path(c.crispLine(["M",p,k,"L",p+g,k],b.connectorWidth)).attr(m?{}:d.connectorStyle).addClass((m?"highcharts-color-"+this.options.seriesIndex+" ":"")+"highcharts-bubble-legend-connectors "+(b.connectorClassName||"")).add(this.legendSymbol));d=c.text(this.formatLabel(d),u,t+l).attr(m?{}:d.labelStyle).addClass("highcharts-bubble-legend-labels "+(b.labels.className||"")).add(this.legendSymbol);a.push(d);d.placed=!0;d.alignAttr={x:u,y:t+l}},
getMaxLabelSize:function(){var d,b;this.symbols.labels.forEach(function(e){b=e.getBBox(!0);d=d?b.width>d.width?b:d:b});return d||{}},formatLabel:function(d){var b=this.options,e=b.labels.formatter;return(b=b.labels.format)?a.format(b,d):e?e.call(d):p(d.value,1)},hideOverlappingLabels:function(){var d=this.chart,b=this.symbols;!this.options.labels.allowOverlap&&b&&(d.hideOverlappingLabels(b.labels),b.labels.forEach(function(d,e){d.newOpacity?d.newOpacity!==d.oldOpacity&&b.connectors[e].show():b.connectors[e].hide()}))},
getRanges:function(){var b=this.legend.bubbleLegend,e=b.options.ranges,c,a=Number.MAX_VALUE,f=-Number.MAX_VALUE;b.chart.series.forEach(function(b){b.isBubble&&!b.ignoreSeries&&(c=b.zData.filter(l),c.length&&(a=m(b.options.zMin,Math.min(a,Math.max(d(c),!1===b.options.displayNegative?b.options.zThreshold:-Number.MAX_VALUE))),f=m(b.options.zMax,Math.max(f,n(c)))))});var g=a===f?[{value:f}]:[{value:a},{value:(a+f)/2},{value:f,autoRanges:!0}];e.length&&e[0].radius&&g.reverse();g.forEach(function(d,b){e&&
e[b]&&(g[b]=q(!1,e[b],d))});return g},predictBubbleSizes:function(){var d=this.chart,b=this.fontMetrics,e=d.legend.options,c="horizontal"===e.layout,a=c?d.legend.lastLineHeight:0,f=d.plotSizeX,n=d.plotSizeY,g=d.series[this.options.seriesIndex];d=Math.ceil(g.minPxSize);var t=Math.ceil(g.maxPxSize);g=g.options.maxSize;var l=Math.min(n,f);if(e.floating||!/%$/.test(g))b=t;else if(g=parseFloat(g),b=(l+a-b.h/2)*g/100/(g/100+1),c&&n-b>=f||!c&&f-b>=n)b=t;return[d,Math.ceil(b)]},updateRanges:function(d,b){var e=
this.legend.options.bubbleLegend;e.minSize=d;e.maxSize=b;e.ranges=this.getRanges()},correctSizes:function(){var d=this.legend,b=this.chart.series[this.options.seriesIndex];1<Math.abs(Math.ceil(b.maxPxSize)-this.options.maxSize)&&(this.updateRanges(this.options.minSize,b.maxPxSize),d.render())}};f(a.Legend,"afterGetAllItems",function(d){var b=this.bubbleLegend,e=this.options,c=e.bubbleLegend,f=this.chart.getVisibleBubbleSeriesIndex();b&&b.ranges&&b.ranges.length&&(c.ranges.length&&(c.autoRanges=!!c.ranges[0].autoRanges),
this.destroyItem(b));0<=f&&e.enabled&&c.enabled&&(c.seriesIndex=f,this.bubbleLegend=new a.BubbleLegend(c,this),this.bubbleLegend.addToLegend(d.allItems))});b.prototype.getVisibleBubbleSeriesIndex=function(){for(var d=this.series,b=0;b<d.length;){if(d[b]&&d[b].isBubble&&d[b].visible&&d[b].zData.length)return b;b++}return-1};k.prototype.getLinesHeights=function(){var d=this.allItems,b=[],e=d.length,c,a=0;for(c=0;c<e;c++)if(d[c].legendItemHeight&&(d[c].itemHeight=d[c].legendItemHeight),d[c]===d[e-1]||
d[c+1]&&d[c]._legendItemPos[1]!==d[c+1]._legendItemPos[1]){b.push({height:0});var f=b[b.length-1];for(a;a<=c;a++)d[a].itemHeight>f.height&&(f.height=d[a].itemHeight);f.step=c}return b};k.prototype.retranslateItems=function(d){var b,e,c,a=this.options.rtl,f=0;this.allItems.forEach(function(h,n){b=h.legendGroup.translateX;e=h._legendItemPos[1];if((c=h.movementX)||a&&h.ranges)c=a?b-h.options.maxSize/2:b+c,h.legendGroup.attr({translateX:c});n>d[f].step&&f++;h.legendGroup.attr({translateY:Math.round(e+
d[f].height/2)});h._legendItemPos[1]=e+d[f].height/2})};f(c,"legendItemClick",function(){var d=this.chart,b=this.visible,e=this.chart.legend;e&&e.bubbleLegend&&(this.visible=!b,this.ignoreSeries=b,d=0<=d.getVisibleBubbleSeriesIndex(),e.bubbleLegend.visible!==d&&(e.update({bubbleLegend:{enabled:d}}),e.bubbleLegend.visible=d),this.visible=b)});u(b.prototype,"drawChartBox",function(d,b,e){var c=this.legend,a=0<=this.getVisibleBubbleSeriesIndex();if(c&&c.options.enabled&&c.bubbleLegend&&c.options.bubbleLegend.autoRanges&&
a){var f=c.bubbleLegend.options;a=c.bubbleLegend.predictBubbleSizes();c.bubbleLegend.updateRanges(a[0],a[1]);f.placed||(c.group.placed=!1,c.allItems.forEach(function(d){d.legendGroup.translateY=null}));c.render();this.getMargins();this.axes.forEach(function(d){d.visible&&d.render();f.placed||(d.setScale(),d.updateNames(),g(d.ticks,function(d){d.isNew=!0;d.isNewLabel=!0}))});f.placed=!0;this.getMargins();d.call(this,b,e);c.bubbleLegend.correctSizes();c.retranslateItems(c.getLinesHeights())}else d.call(this,
b,e),c&&c.options.enabled&&c.bubbleLegend&&(c.render(),c.retranslateItems(c.getLinesHeights()))})});z(v,"parts-more/BubbleSeries.js",[v["parts/Globals.js"],v["parts/Utilities.js"]],function(a,c){var l=c.isNumber,g=c.pInt,k=a.arrayMax,b=a.arrayMin;c=a.Axis;var f=a.color,u=a.noop,e=a.pick,p=a.Point,q=a.Series,x=a.seriesType,m=a.seriesTypes;x("bubble","scatter",{dataLabels:{formatter:function(){return this.point.z},inside:!0,verticalAlign:"middle"},animationLimit:250,marker:{lineColor:null,lineWidth:1,
fillOpacity:.5,radius:null,states:{hover:{radiusPlus:0}},symbol:"circle"},minSize:8,maxSize:"20%",softThreshold:!1,states:{hover:{halo:{size:5}}},tooltip:{pointFormat:"({point.x}, {point.y}), Size: {point.z}"},turboThreshold:0,zThreshold:0,zoneAxis:"z"},{pointArrayMap:["y","z"],parallelArrays:["x","y","z"],trackerGroups:["group","dataLabelsGroup"],specialGroup:"group",bubblePadding:!0,zoneAxis:"z",directTouch:!0,isBubble:!0,pointAttribs:function(b,e){var d=this.options.marker.fillOpacity;b=q.prototype.pointAttribs.call(this,
b,e);1!==d&&(b.fill=f(b.fill).setOpacity(d).get("rgba"));return b},getRadii:function(b,e,d){var c=this.zData,a=this.yData,f=d.minPxSize,g=d.maxPxSize,l=[];var t=0;for(d=c.length;t<d;t++){var p=c[t];l.push(this.getRadius(b,e,f,g,p,a[t]))}this.radii=l},getRadius:function(b,e,d,c,a,f){var h=this.options,n="width"!==h.sizeBy,g=h.zThreshold,r=e-b,p=.5;if(null===f||null===a)return null;if(l(a)){h.sizeByAbsoluteValue&&(a=Math.abs(a-g),r=Math.max(e-g,Math.abs(b-g)),b=0);if(a<b)return d/2-1;0<r&&(p=(a-b)/
r)}n&&0<=p&&(p=Math.sqrt(p));return Math.ceil(d+p*(c-d))/2},animate:function(b){!b&&this.points.length<this.options.animationLimit&&(this.points.forEach(function(b){var d=b.graphic;if(d&&d.width){var e={x:d.x,y:d.y,width:d.width,height:d.height};d.attr({x:b.plotX,y:b.plotY,width:1,height:1});d.animate(e,this.options.animation)}},this),this.animate=null)},hasData:function(){return!!this.processedXData.length},translate:function(){var b,e=this.data,d=this.radii;m.scatter.prototype.translate.call(this);
for(b=e.length;b--;){var c=e[b];var f=d?d[b]:0;l(f)&&f>=this.minPxSize/2?(c.marker=a.extend(c.marker,{radius:f,width:2*f,height:2*f}),c.dlBox={x:c.plotX-f,y:c.plotY-f,width:2*f,height:2*f}):c.shapeArgs=c.plotY=c.dlBox=void 0}},alignDataLabel:m.column.prototype.alignDataLabel,buildKDTree:u,applyZones:u},{haloPath:function(b){return p.prototype.haloPath.call(this,0===b?0:(this.marker?this.marker.radius||0:0)+b)},ttBelow:!1});c.prototype.beforePadding=function(){var c=this,a=this.len,d=this.chart,f=
0,h=a,r=this.isXAxis,p=r?"xData":"yData",m=this.min,u={},q=Math.min(d.plotWidth,d.plotHeight),x=Number.MAX_VALUE,v=-Number.MAX_VALUE,z=this.max-m,B=a/z,C=[];this.series.forEach(function(a){var f=a.options;!a.bubblePadding||!a.visible&&d.options.chart.ignoreHiddenSeries||(c.allowZoomOutside=!0,C.push(a),r&&(["minSize","maxSize"].forEach(function(d){var b=f[d],e=/%$/.test(b);b=g(b);u[d]=e?q*b/100:b}),a.minPxSize=u.minSize,a.maxPxSize=Math.max(u.maxSize,u.minSize),a=a.zData.filter(l),a.length&&(x=e(f.zMin,
Math.min(x,Math.max(b(a),!1===f.displayNegative?f.zThreshold:-Number.MAX_VALUE))),v=e(f.zMax,Math.max(v,k(a))))))});C.forEach(function(d){var b=d[p],e=b.length;r&&d.getRadii(x,v,d);if(0<z)for(;e--;)if(l(b[e])&&c.dataMin<=b[e]&&b[e]<=c.dataMax){var a=d.radii?d.radii[e]:0;f=Math.min((b[e]-m)*B-a,f);h=Math.max((b[e]-m)*B+a,h)}});C.length&&0<z&&!this.isLog&&(h-=a,B*=(a+Math.max(0,f)-Math.min(h,a))/a,[["min","userMin",f],["max","userMax",h]].forEach(function(d){void 0===e(c.options[d[0]],c[d[1]])&&(c[d[0]]+=
d[2]/B)}))};""});z(v,"modules/networkgraph/integrations.js",[v["parts/Globals.js"]],function(a){a.networkgraphIntegrations={verlet:{attractiveForceFunction:function(c,a){return(a-c)/c},repulsiveForceFunction:function(c,a){return(a-c)/c*(a>c?1:0)},barycenter:function(){var c=this.options.gravitationalConstant,a=this.barycenter.xFactor,g=this.barycenter.yFactor;a=(a-(this.box.left+this.box.width)/2)*c;g=(g-(this.box.top+this.box.height)/2)*c;this.nodes.forEach(function(c){c.fixedPosition||(c.plotX-=
a/c.mass/c.degree,c.plotY-=g/c.mass/c.degree)})},repulsive:function(c,a,g){a=a*this.diffTemperature/c.mass/c.degree;c.fixedPosition||(c.plotX+=g.x*a,c.plotY+=g.y*a)},attractive:function(c,a,g){var l=c.getMass(),b=-g.x*a*this.diffTemperature;a=-g.y*a*this.diffTemperature;c.fromNode.fixedPosition||(c.fromNode.plotX-=b*l.fromNode/c.fromNode.degree,c.fromNode.plotY-=a*l.fromNode/c.fromNode.degree);c.toNode.fixedPosition||(c.toNode.plotX+=b*l.toNode/c.toNode.degree,c.toNode.plotY+=a*l.toNode/c.toNode.degree)},
integrate:function(c,a){var g=-c.options.friction,k=c.options.maxSpeed,b=(a.plotX+a.dispX-a.prevX)*g;g*=a.plotY+a.dispY-a.prevY;var f=Math.abs,u=f(b)/(b||1);f=f(g)/(g||1);b=u*Math.min(k,Math.abs(b));g=f*Math.min(k,Math.abs(g));a.prevX=a.plotX+a.dispX;a.prevY=a.plotY+a.dispY;a.plotX+=b;a.plotY+=g;a.temperature=c.vectorLength({x:b,y:g})},getK:function(c){return Math.pow(c.box.width*c.box.height/c.nodes.length,.5)}},euler:{attractiveForceFunction:function(c,a){return c*c/a},repulsiveForceFunction:function(c,
a){return a*a/c},barycenter:function(){var c=this.options.gravitationalConstant,a=this.barycenter.xFactor,g=this.barycenter.yFactor;this.nodes.forEach(function(k){if(!k.fixedPosition){var b=k.getDegree();b*=1+b/2;k.dispX+=(a-k.plotX)*c*b/k.degree;k.dispY+=(g-k.plotY)*c*b/k.degree}})},repulsive:function(c,a,g,k){c.dispX+=g.x/k*a/c.degree;c.dispY+=g.y/k*a/c.degree},attractive:function(c,a,g,k){var b=c.getMass(),f=g.x/k*a;a*=g.y/k;c.fromNode.fixedPosition||(c.fromNode.dispX-=f*b.fromNode/c.fromNode.degree,
c.fromNode.dispY-=a*b.fromNode/c.fromNode.degree);c.toNode.fixedPosition||(c.toNode.dispX+=f*b.toNode/c.toNode.degree,c.toNode.dispY+=a*b.toNode/c.toNode.degree)},integrate:function(c,a){a.dispX+=a.dispX*c.options.friction;a.dispY+=a.dispY*c.options.friction;var g=a.temperature=c.vectorLength({x:a.dispX,y:a.dispY});0!==g&&(a.plotX+=a.dispX/g*Math.min(Math.abs(a.dispX),c.temperature),a.plotY+=a.dispY/g*Math.min(Math.abs(a.dispY),c.temperature))},getK:function(a){return Math.pow(a.box.width*a.box.height/
a.nodes.length,.3)}}}});z(v,"modules/networkgraph/QuadTree.js",[v["parts/Globals.js"]],function(a){var c=a.QuadTreeNode=function(a){this.box=a;this.boxSize=Math.min(a.width,a.height);this.nodes=[];this.body=this.isInternal=!1;this.isEmpty=!0};a.extend(c.prototype,{insert:function(a,k){this.isInternal?this.nodes[this.getBoxPosition(a)].insert(a,k-1):(this.isEmpty=!1,this.body?k?(this.isInternal=!0,this.divideBox(),!0!==this.body&&(this.nodes[this.getBoxPosition(this.body)].insert(this.body,k-1),this.body=
!0),this.nodes[this.getBoxPosition(a)].insert(a,k-1)):(k=new c({top:a.plotX,left:a.plotY,width:.1,height:.1}),k.body=a,k.isInternal=!1,this.nodes.push(k)):(this.isInternal=!1,this.body=a))},updateMassAndCenter:function(){var a=0,c=0,b=0;this.isInternal?(this.nodes.forEach(function(f){f.isEmpty||(a+=f.mass,c+=f.plotX*f.mass,b+=f.plotY*f.mass)}),c/=a,b/=a):this.body&&(a=this.body.mass,c=this.body.plotX,b=this.body.plotY);this.mass=a;this.plotX=c;this.plotY=b},divideBox:function(){var a=this.box.width/
2,k=this.box.height/2;this.nodes[0]=new c({left:this.box.left,top:this.box.top,width:a,height:k});this.nodes[1]=new c({left:this.box.left+a,top:this.box.top,width:a,height:k});this.nodes[2]=new c({left:this.box.left+a,top:this.box.top+k,width:a,height:k});this.nodes[3]=new c({left:this.box.left,top:this.box.top+k,width:a,height:k})},getBoxPosition:function(a){var c=a.plotY<this.box.top+this.box.height/2;return a.plotX<this.box.left+this.box.width/2?c?0:3:c?1:2}});var l=a.QuadTree=function(a,k,b,f){this.box=
{left:a,top:k,width:b,height:f};this.maxDepth=25;this.root=new c(this.box,"0");this.root.isInternal=!0;this.root.isRoot=!0;this.root.divideBox()};a.extend(l.prototype,{insertNodes:function(a){a.forEach(function(a){this.root.insert(a,this.maxDepth)},this)},visitNodeRecursive:function(a,c,b){var f;a||(a=this.root);a===this.root&&c&&(f=c(a));!1!==f&&(a.nodes.forEach(function(a){if(a.isInternal){c&&(f=c(a));if(!1===f)return;this.visitNodeRecursive(a,c,b)}else a.body&&c&&c(a.body);b&&b(a)},this),a===this.root&&
b&&b(a))},calculateMassAndCenter:function(){this.visitNodeRecursive(null,null,function(a){a.updateMassAndCenter()})}})});z(v,"modules/networkgraph/layouts.js",[v["parts/Globals.js"],v["parts/Utilities.js"]],function(a,c){var l=c.defined,g=a.pick;c=a.addEvent;var k=a.Chart;a.layouts={"reingold-fruchterman":function(){}};a.extend(a.layouts["reingold-fruchterman"].prototype,{init:function(b){this.options=b;this.nodes=[];this.links=[];this.series=[];this.box={x:0,y:0,width:0,height:0};this.setInitialRendering(!0);
this.integration=a.networkgraphIntegrations[b.integration];this.attractiveForce=g(b.attractiveForce,this.integration.attractiveForceFunction);this.repulsiveForce=g(b.repulsiveForce,this.integration.repulsiveForceFunction);this.approximation=b.approximation},start:function(){var b=this.series,a=this.options;this.currentStep=0;this.forces=b[0]&&b[0].forces||[];this.initialRendering&&(this.initPositions(),b.forEach(function(b){b.render()}));this.setK();this.resetSimulation(a);a.enableSimulation&&this.step()},
step:function(){var b=this,c=this.series,g=this.options;b.currentStep++;"barnes-hut"===b.approximation&&(b.createQuadTree(),b.quadTree.calculateMassAndCenter());b.forces.forEach(function(a){b[a+"Forces"](b.temperature)});b.applyLimits(b.temperature);b.temperature=b.coolDown(b.startTemperature,b.diffTemperature,b.currentStep);b.prevSystemTemperature=b.systemTemperature;b.systemTemperature=b.getSystemTemperature();g.enableSimulation&&(c.forEach(function(b){b.chart&&b.render()}),b.maxIterations--&&isFinite(b.temperature)&&
!b.isStable()?(b.simulation&&a.win.cancelAnimationFrame(b.simulation),b.simulation=a.win.requestAnimationFrame(function(){b.step()})):b.simulation=!1)},stop:function(){this.simulation&&a.win.cancelAnimationFrame(this.simulation)},setArea:function(b,a,c,e){this.box={left:b,top:a,width:c,height:e}},setK:function(){this.k=this.options.linkLength||this.integration.getK(this)},addElementsToCollection:function(b,a){b.forEach(function(b){-1===a.indexOf(b)&&a.push(b)})},removeElementFromCollection:function(b,
a){b=a.indexOf(b);-1!==b&&a.splice(b,1)},clear:function(){this.nodes.length=0;this.links.length=0;this.series.length=0;this.resetSimulation()},resetSimulation:function(){this.forcedStop=!1;this.systemTemperature=0;this.setMaxIterations();this.setTemperature();this.setDiffTemperature()},setMaxIterations:function(b){this.maxIterations=g(b,this.options.maxIterations)},setTemperature:function(){this.temperature=this.startTemperature=Math.sqrt(this.nodes.length)},setDiffTemperature:function(){this.diffTemperature=
this.startTemperature/(this.options.maxIterations+1)},setInitialRendering:function(b){this.initialRendering=b},createQuadTree:function(){this.quadTree=new a.QuadTree(this.box.left,this.box.top,this.box.width,this.box.height);this.quadTree.insertNodes(this.nodes)},initPositions:function(){var b=this.options.initialPositions;a.isFunction(b)?(b.call(this),this.nodes.forEach(function(b){l(b.prevX)||(b.prevX=b.plotX);l(b.prevY)||(b.prevY=b.plotY);b.dispX=0;b.dispY=0})):"circle"===b?this.setCircularPositions():
this.setRandomPositions()},setCircularPositions:function(){function b(a){a.linksFrom.forEach(function(a){k[a.toNode.id]||(k[a.toNode.id]=!0,q.push(a.toNode),b(a.toNode))})}var a=this.box,c=this.nodes,e=2*Math.PI/(c.length+1),p=c.filter(function(b){return 0===b.linksTo.length}),q=[],k={},m=this.options.initialPositionRadius;p.forEach(function(a){q.push(a);b(a)});q.length?c.forEach(function(b){-1===q.indexOf(b)&&q.push(b)}):q=c;q.forEach(function(b,c){b.plotX=b.prevX=g(b.plotX,a.width/2+m*Math.cos(c*
e));b.plotY=b.prevY=g(b.plotY,a.height/2+m*Math.sin(c*e));b.dispX=0;b.dispY=0})},setRandomPositions:function(){function b(b){b=b*b/Math.PI;return b-=Math.floor(b)}var a=this.box,c=this.nodes,e=c.length+1;c.forEach(function(c,f){c.plotX=c.prevX=g(c.plotX,a.width*b(f));c.plotY=c.prevY=g(c.plotY,a.height*b(e+f));c.dispX=0;c.dispY=0})},force:function(b){this.integration[b].apply(this,Array.prototype.slice.call(arguments,1))},barycenterForces:function(){this.getBarycenter();this.force("barycenter")},getBarycenter:function(){var b=
0,a=0,c=0;this.nodes.forEach(function(e){a+=e.plotX*e.mass;c+=e.plotY*e.mass;b+=e.mass});return this.barycenter={x:a,y:c,xFactor:a/b,yFactor:c/b}},barnesHutApproximation:function(b,a){var c=this.getDistXY(b,a),e=this.vectorLength(c);if(b!==a&&0!==e)if(a.isInternal)if(a.boxSize/e<this.options.theta&&0!==e){var f=this.repulsiveForce(e,this.k);this.force("repulsive",b,f*a.mass,c,e);var g=!1}else g=!0;else f=this.repulsiveForce(e,this.k),this.force("repulsive",b,f*a.mass,c,e);return g},repulsiveForces:function(){var b=
this;"barnes-hut"===b.approximation?b.nodes.forEach(function(a){b.quadTree.visitNodeRecursive(null,function(c){return b.barnesHutApproximation(a,c)})}):b.nodes.forEach(function(a){b.nodes.forEach(function(c){if(a!==c&&!a.fixedPosition){var e=b.getDistXY(a,c);var f=b.vectorLength(e);if(0!==f){var g=b.repulsiveForce(f,b.k);b.force("repulsive",a,g*c.mass,e,f)}}})})},attractiveForces:function(){var b=this,a,c,e;b.links.forEach(function(f){f.fromNode&&f.toNode&&(a=b.getDistXY(f.fromNode,f.toNode),c=b.vectorLength(a),
0!==c&&(e=b.attractiveForce(c,b.k),b.force("attractive",f,e,a,c)))})},applyLimits:function(){var b=this;b.nodes.forEach(function(a){a.fixedPosition||(b.integration.integrate(b,a),b.applyLimitBox(a,b.box),a.dispX=0,a.dispY=0)})},applyLimitBox:function(b,a){var c=b.radius;b.plotX=Math.max(Math.min(b.plotX,a.width-c),a.left+c);b.plotY=Math.max(Math.min(b.plotY,a.height-c),a.top+c)},coolDown:function(b,a,c){return b-a*c},isStable:function(){return.00001>Math.abs(this.systemTemperature-this.prevSystemTemperature)||
0>=this.temperature},getSystemTemperature:function(){return this.nodes.reduce(function(b,a){return b+a.temperature},0)},vectorLength:function(b){return Math.sqrt(b.x*b.x+b.y*b.y)},getDistR:function(b,a){b=this.getDistXY(b,a);return this.vectorLength(b)},getDistXY:function(b,a){var c=b.plotX-a.plotX;b=b.plotY-a.plotY;return{x:c,y:b,absX:Math.abs(c),absY:Math.abs(b)}}});c(k,"predraw",function(){this.graphLayoutsLookup&&this.graphLayoutsLookup.forEach(function(a){a.stop()})});c(k,"render",function(){function b(a){a.maxIterations--&&
isFinite(a.temperature)&&!a.isStable()&&!a.options.enableSimulation&&(a.beforeStep&&a.beforeStep(),a.step(),g=!1,c=!0)}var c=!1;if(this.graphLayoutsLookup){a.setAnimation(!1,this);for(this.graphLayoutsLookup.forEach(function(a){a.start()});!g;){var g=!0;this.graphLayoutsLookup.forEach(b)}c&&this.series.forEach(function(a){a&&a.layout&&a.render()})}})});z(v,"modules/networkgraph/draggable-nodes.js",[v["parts/Globals.js"]],function(a){var c=a.Chart,l=a.addEvent;a.dragNodesMixin={onMouseDown:function(a,
c){c=this.chart.pointer.normalize(c);a.fixedPosition={chartX:c.chartX,chartY:c.chartY,plotX:a.plotX,plotY:a.plotY};a.inDragMode=!0},onMouseMove:function(a,c){if(a.fixedPosition&&a.inDragMode){var b=this.chart,f=b.pointer.normalize(c);c=a.fixedPosition.chartX-f.chartX;f=a.fixedPosition.chartY-f.chartY;if(5<Math.abs(c)||5<Math.abs(f))c=a.fixedPosition.plotX-c,f=a.fixedPosition.plotY-f,b.isInsidePlot(c,f)&&(a.plotX=c,a.plotY=f,a.hasDragged=!0,this.redrawHalo(a),this.layout.simulation?this.layout.resetSimulation():
(this.layout.setInitialRendering(!1),this.layout.enableSimulation?this.layout.start():this.layout.setMaxIterations(1),this.chart.redraw(),this.layout.setInitialRendering(!0)))}},onMouseUp:function(a,c){a.fixedPosition&&a.hasDragged&&(this.layout.enableSimulation?this.layout.start():this.chart.redraw(),a.inDragMode=a.hasDragged=!1,this.options.fixedDraggable||delete a.fixedPosition)},redrawHalo:function(a){a&&this.halo&&this.halo.attr({d:a.haloPath(this.options.states.hover.halo.size)})}};l(c,"load",
function(){var a=this,c,b,f;a.container&&(c=l(a.container,"mousedown",function(c){var e=a.hoverPoint;e&&e.series&&e.series.hasDraggableNodes&&e.series.options.draggable&&(e.series.onMouseDown(e,c),b=l(a.container,"mousemove",function(a){return e&&e.series&&e.series.onMouseMove(e,a)}),f=l(a.container.ownerDocument,"mouseup",function(a){b();f();return e&&e.series&&e.series.onMouseUp(e,a)}))}));l(a,"destroy",function(){c()})})});z(v,"parts-more/PackedBubbleSeries.js",[v["parts/Globals.js"],v["parts/Utilities.js"]],
function(a,c){var l=c.defined,g=c.isArray,k=c.isNumber;c=a.seriesType;var b=a.Series,f=a.Point,u=a.pick,e=a.addEvent,p=a.fireEvent,q=a.Chart,x=a.Color,m=a.layouts["reingold-fruchterman"],t=a.seriesTypes.bubble.prototype.pointClass,v=a.dragNodesMixin;a.networkgraphIntegrations.packedbubble={repulsiveForceFunction:function(d,a,b,c){return Math.min(d,(b.marker.radius+c.marker.radius)/2)},barycenter:function(){var d=this,a=d.options.gravitationalConstant,b=d.box,c=d.nodes,e,f;c.forEach(function(h){d.options.splitSeries&&
!h.isParentNode?(e=h.series.parentNode.plotX,f=h.series.parentNode.plotY):(e=b.width/2,f=b.height/2);h.fixedPosition||(h.plotX-=(h.plotX-e)*a/(h.mass*Math.sqrt(c.length)),h.plotY-=(h.plotY-f)*a/(h.mass*Math.sqrt(c.length)))})},repulsive:function(d,a,b,c){var e=a*this.diffTemperature/d.mass/d.degree;a=b.x*e;b=b.y*e;d.fixedPosition||(d.plotX+=a,d.plotY+=b);c.fixedPosition||(c.plotX-=a,c.plotY-=b)},integrate:a.networkgraphIntegrations.verlet.integrate,getK:a.noop};a.layouts.packedbubble=a.extendClass(m,
{beforeStep:function(){this.options.marker&&this.series.forEach(function(d){d&&d.calculateParentRadius()})},setCircularPositions:function(){var d=this,a=d.box,b=d.nodes,c=2*Math.PI/(b.length+1),e,f,g=d.options.initialPositionRadius;b.forEach(function(b,h){d.options.splitSeries&&!b.isParentNode?(e=b.series.parentNode.plotX,f=b.series.parentNode.plotY):(e=a.width/2,f=a.height/2);b.plotX=b.prevX=u(b.plotX,e+g*Math.cos(b.index||h*c));b.plotY=b.prevY=u(b.plotY,f+g*Math.sin(b.index||h*c));b.dispX=0;b.dispY=
0})},repulsiveForces:function(){var d=this,a,b,c,e=d.options.bubblePadding;d.nodes.forEach(function(f){f.degree=f.mass;f.neighbours=0;d.nodes.forEach(function(h){a=0;f===h||f.fixedPosition||!d.options.seriesInteraction&&f.series!==h.series||(c=d.getDistXY(f,h),b=d.vectorLength(c)-(f.marker.radius+h.marker.radius+e),0>b&&(f.degree+=.01,f.neighbours++,a=d.repulsiveForce(-b/Math.sqrt(f.neighbours),d.k,f,h)),d.force("repulsive",f,a*h.mass,c,h,b))})})},applyLimitBox:function(a){if(this.options.splitSeries&&
!a.isParentNode&&this.options.parentNodeLimit){var d=this.getDistXY(a,a.series.parentNode);var b=a.series.parentNodeRadius-a.marker.radius-this.vectorLength(d);0>b&&b>-2*a.marker.radius&&(a.plotX-=.01*d.x,a.plotY-=.01*d.y)}m.prototype.applyLimitBox.apply(this,arguments)},isStable:function(){return.00001>Math.abs(this.systemTemperature-this.prevSystemTemperature)||0>=this.temperature||0<this.systemTemperature&&.02>this.systemTemperature/this.nodes.length&&this.enableSimulation}});c("packedbubble",
"bubble",{minSize:"10%",maxSize:"50%",sizeBy:"area",zoneAxis:"y",tooltip:{pointFormat:"Value: {point.value}"},draggable:!0,useSimulation:!0,dataLabels:{formatter:function(){return this.point.value},parentNodeFormatter:function(){return this.name},parentNodeTextPath:{enabled:!0},padding:0},layoutAlgorithm:{initialPositions:"circle",initialPositionRadius:20,bubblePadding:5,parentNodeLimit:!1,seriesInteraction:!0,dragBetweenSeries:!1,parentNodeOptions:{maxIterations:400,gravitationalConstant:.03,maxSpeed:50,
initialPositionRadius:100,seriesInteraction:!0,marker:{fillColor:null,fillOpacity:1,lineWidth:1,lineColor:null,symbol:"circle"}},enableSimulation:!0,type:"packedbubble",integration:"packedbubble",maxIterations:1E3,splitSeries:!1,maxSpeed:5,gravitationalConstant:.01,friction:-.981}},{hasDraggableNodes:!0,forces:["barycenter","repulsive"],pointArrayMap:["value"],pointValKey:"value",isCartesian:!1,axisTypes:[],noSharedTooltip:!0,accumulateAllPoints:function(a){var d=a.chart,b=[],c,e;for(c=0;c<d.series.length;c++)if(a=
d.series[c],a.visible||!d.options.chart.ignoreHiddenSeries)for(e=0;e<a.yData.length;e++)b.push([null,null,a.yData[e],a.index,e,{id:e,marker:{radius:0}}]);return b},init:function(){b.prototype.init.apply(this,arguments);e(this,"updatedData",function(){this.chart.series.forEach(function(a){a.type===this.type&&(a.isDirty=!0)},this)});return this},render:function(){var a=[];b.prototype.render.apply(this,arguments);this.options.dataLabels.allowOverlap||(this.data.forEach(function(d){g(d.dataLabels)&&d.dataLabels.forEach(function(d){a.push(d)})}),
this.chart.hideOverlappingLabels(a))},setVisible:function(){var a=this;b.prototype.setVisible.apply(a,arguments);a.parentNodeLayout&&a.graph?a.visible?(a.graph.show(),a.parentNode.dataLabel&&a.parentNode.dataLabel.show()):(a.graph.hide(),a.parentNodeLayout.removeElementFromCollection(a.parentNode,a.parentNodeLayout.nodes),a.parentNode.dataLabel&&a.parentNode.dataLabel.hide()):a.layout&&(a.visible?a.layout.addElementsToCollection(a.points,a.layout.nodes):a.points.forEach(function(b){a.layout.removeElementFromCollection(b,
a.layout.nodes)}))},drawDataLabels:function(){var a=this.options.dataLabels.textPath,c=this.points;b.prototype.drawDataLabels.apply(this,arguments);this.parentNode&&(this.parentNode.formatPrefix="parentNode",this.points=[this.parentNode],this.options.dataLabels.textPath=this.options.dataLabels.parentNodeTextPath,b.prototype.drawDataLabels.apply(this,arguments),this.points=c,this.options.dataLabels.textPath=a)},seriesBox:function(){var a=this.chart,b=Math.max,c=Math.min,e,f=[a.plotLeft,a.plotLeft+
a.plotWidth,a.plotTop,a.plotTop+a.plotHeight];this.data.forEach(function(a){l(a.plotX)&&l(a.plotY)&&a.marker.radius&&(e=a.marker.radius,f[0]=c(f[0],a.plotX-e),f[1]=b(f[1],a.plotX+e),f[2]=c(f[2],a.plotY-e),f[3]=b(f[3],a.plotY+e))});return k(f.width/f.height)?f:null},calculateParentRadius:function(){var a=this.seriesBox();this.parentNodeRadius=Math.min(Math.max(Math.sqrt(2*this.parentNodeMass/Math.PI)+20,20),a?Math.max(Math.sqrt(Math.pow(a.width,2)+Math.pow(a.height,2))/2+20,20):Math.sqrt(2*this.parentNodeMass/
Math.PI)+20);this.parentNode&&(this.parentNode.marker.radius=this.parentNode.radius=this.parentNodeRadius)},drawGraph:function(){if(this.layout&&this.layout.options.splitSeries){var b=this.chart,c=this.layout.options.parentNodeOptions.marker;c={fill:c.fillColor||x(this.color).brighten(.4).get(),opacity:c.fillOpacity,stroke:c.lineColor||this.color,"stroke-width":c.lineWidth};var e=this.visible?"inherit":"hidden";this.parentNodesGroup||(this.parentNodesGroup=this.plotGroup("parentNodesGroup","parentNode",
e,.1,b.seriesGroup),this.group.attr({zIndex:2}));this.calculateParentRadius();e=a.merge({x:this.parentNode.plotX-this.parentNodeRadius,y:this.parentNode.plotY-this.parentNodeRadius,width:2*this.parentNodeRadius,height:2*this.parentNodeRadius},c);this.parentNode.graphic||(this.graph=this.parentNode.graphic=b.renderer.symbol(c.symbol).add(this.parentNodesGroup));this.parentNode.graphic.attr(e)}},createParentNodes:function(){var a=this,b=a.chart,c=a.parentNodeLayout,e,f=a.parentNode;a.parentNodeMass=
0;a.points.forEach(function(b){a.parentNodeMass+=Math.PI*Math.pow(b.marker.radius,2)});a.calculateParentRadius();c.nodes.forEach(function(b){b.seriesIndex===a.index&&(e=!0)});c.setArea(0,0,b.plotWidth,b.plotHeight);e||(f||(f=(new t).init(this,{mass:a.parentNodeRadius/2,marker:{radius:a.parentNodeRadius},dataLabels:{inside:!1},dataLabelOnNull:!0,degree:a.parentNodeRadius,isParentNode:!0,seriesIndex:a.index})),a.parentNode&&(f.plotX=a.parentNode.plotX,f.plotY=a.parentNode.plotY),a.parentNode=f,c.addElementsToCollection([a],
c.series),c.addElementsToCollection([f],c.nodes))},addSeriesLayout:function(){var b=this.options.layoutAlgorithm,c=this.chart.graphLayoutsStorage,e=this.chart.graphLayoutsLookup,f=a.merge(b,b.parentNodeOptions,{enableSimulation:this.layout.options.enableSimulation});var g=c[b.type+"-series"];g||(c[b.type+"-series"]=g=new a.layouts[b.type],g.init(f),e.splice(g.index,0,g));this.parentNodeLayout=g;this.createParentNodes()},addLayout:function(){var b=this.options.layoutAlgorithm,c=this.chart.graphLayoutsStorage,
e=this.chart.graphLayoutsLookup,f=this.chart.options.chart;c||(this.chart.graphLayoutsStorage=c={},this.chart.graphLayoutsLookup=e=[]);var g=c[b.type];g||(b.enableSimulation=l(f.forExport)?!f.forExport:b.enableSimulation,c[b.type]=g=new a.layouts[b.type],g.init(b),e.splice(g.index,0,g));this.layout=g;this.points.forEach(function(a){a.mass=2;a.degree=1;a.collisionNmb=1});g.setArea(0,0,this.chart.plotWidth,this.chart.plotHeight);g.addElementsToCollection([this],g.series);g.addElementsToCollection(this.points,
g.nodes)},deferLayout:function(){var a=this.options.layoutAlgorithm;this.visible&&(this.addLayout(),a.splitSeries&&this.addSeriesLayout())},translate:function(){var b=this.chart,c=this.data,e=this.index,f,g=this.options.useSimulation;this.processedXData=this.xData;this.generatePoints();l(b.allDataPoints)||(b.allDataPoints=this.accumulateAllPoints(this),this.getPointRadius());if(g)var m=b.allDataPoints;else m=this.placeBubbles(b.allDataPoints),this.options.draggable=!1;for(f=0;f<m.length;f++)if(m[f][3]===
e){var t=c[m[f][4]];var q=m[f][2];g||(t.plotX=m[f][0]-b.plotLeft+b.diffX,t.plotY=m[f][1]-b.plotTop+b.diffY);t.marker=a.extend(t.marker,{radius:q,width:2*q,height:2*q});t.radius=q}g&&this.deferLayout();p(this,"afterTranslate")},checkOverlap:function(a,b){var c=a[0]-b[0],d=a[1]-b[1];return-.001>Math.sqrt(c*c+d*d)-Math.abs(a[2]+b[2])},positionBubble:function(a,b,c){var d=Math.sqrt,e=Math.asin,f=Math.acos,h=Math.pow,g=Math.abs;d=d(h(a[0]-b[0],2)+h(a[1]-b[1],2));f=f((h(d,2)+h(c[2]+b[2],2)-h(c[2]+a[2],
2))/(2*(c[2]+b[2])*d));e=e(g(a[0]-b[0])/d);a=(0>a[1]-b[1]?0:Math.PI)+f+e*(0>(a[0]-b[0])*(a[1]-b[1])?1:-1);return[b[0]+(b[2]+c[2])*Math.sin(a),b[1]-(b[2]+c[2])*Math.cos(a),c[2],c[3],c[4]]},placeBubbles:function(a){var b=this.checkOverlap,c=this.positionBubble,d=[],e=1,f=0,g=0;var m=[];var p;a=a.sort(function(a,b){return b[2]-a[2]});if(a.length){d.push([[0,0,a[0][2],a[0][3],a[0][4]]]);if(1<a.length)for(d.push([[0,0-a[1][2]-a[0][2],a[1][2],a[1][3],a[1][4]]]),p=2;p<a.length;p++)a[p][2]=a[p][2]||1,m=c(d[e][f],
d[e-1][g],a[p]),b(m,d[e][0])?(d.push([]),g=0,d[e+1].push(c(d[e][f],d[e][0],a[p])),e++,f=0):1<e&&d[e-1][g+1]&&b(m,d[e-1][g+1])?(g++,d[e].push(c(d[e][f],d[e-1][g],a[p])),f++):(f++,d[e].push(m));this.chart.stages=d;this.chart.rawPositions=[].concat.apply([],d);this.resizeRadius();m=this.chart.rawPositions}return m},resizeRadius:function(){var a=this.chart,b=a.rawPositions,c=Math.min,e=Math.max,f=a.plotLeft,g=a.plotTop,m=a.plotHeight,p=a.plotWidth,t,q,k;var l=t=Number.POSITIVE_INFINITY;var x=q=Number.NEGATIVE_INFINITY;
for(k=0;k<b.length;k++){var u=b[k][2];l=c(l,b[k][0]-u);x=e(x,b[k][0]+u);t=c(t,b[k][1]-u);q=e(q,b[k][1]+u)}k=[x-l,q-t];c=c.apply([],[(p-f)/k[0],(m-g)/k[1]]);if(1e-10<Math.abs(c-1)){for(k=0;k<b.length;k++)b[k][2]*=c;this.placeBubbles(b)}else a.diffY=m/2+g-t-(q-t)/2,a.diffX=p/2+f-l-(x-l)/2},calculateZExtremes:function(){var a=this.options.zMin,b=this.options.zMax,c=Infinity,e=-Infinity;if(a&&b)return[a,b];this.chart.series.forEach(function(a){a.yData.forEach(function(a){l(a)&&(a>e&&(e=a),a<c&&(c=a))})});
a=u(a,c);b=u(b,e);return[a,b]},getPointRadius:function(){var a=this,b=a.chart,c=a.options,e=c.useSimulation,f=Math.min(b.plotWidth,b.plotHeight),g={},m=[],p=b.allDataPoints,t,q,k,l;["minSize","maxSize"].forEach(function(a){var b=parseInt(c[a],10),d=/%$/.test(c[a]);g[a]=d?f*b/100:b*Math.sqrt(p.length)});b.minRadius=t=g.minSize/Math.sqrt(p.length);b.maxRadius=q=g.maxSize/Math.sqrt(p.length);var x=e?a.calculateZExtremes():[t,q];(p||[]).forEach(function(b,c){k=e?Math.max(Math.min(b[2],x[1]),x[0]):b[2];
l=a.getRadius(x[0],x[1],t,q,k);0===l&&(l=null);p[c][2]=l;m.push(l)});a.radii=m},redrawHalo:v.redrawHalo,onMouseDown:v.onMouseDown,onMouseMove:v.onMouseMove,onMouseUp:function(b){if(b.fixedPosition&&!b.removed){var c,d,e=this.layout,f=this.parentNodeLayout;f&&e.options.dragBetweenSeries&&f.nodes.forEach(function(f){b&&b.marker&&f!==b.series.parentNode&&(c=e.getDistXY(b,f),d=e.vectorLength(c)-f.marker.radius-b.marker.radius,0>d&&(f.series.addPoint(a.merge(b.options,{plotX:b.plotX,plotY:b.plotY}),!1),
e.removeElementFromCollection(b,e.nodes),b.remove()))});v.onMouseUp.apply(this,arguments)}},destroy:function(){this.chart.graphLayoutsLookup&&this.chart.graphLayoutsLookup.forEach(function(a){a.removeElementFromCollection(this,a.series)},this);this.parentNode&&(this.parentNodeLayout.removeElementFromCollection(this.parentNode,this.parentNodeLayout.nodes),this.parentNode.dataLabel&&(this.parentNode.dataLabel=this.parentNode.dataLabel.destroy()));a.Series.prototype.destroy.apply(this,arguments)},alignDataLabel:a.Series.prototype.alignDataLabel},
{destroy:function(){this.series.layout&&this.series.layout.removeElementFromCollection(this,this.series.layout.nodes);return f.prototype.destroy.apply(this,arguments)}});e(q,"beforeRedraw",function(){this.allDataPoints&&delete this.allDataPoints});""});z(v,"parts-more/Polar.js",[v["parts/Globals.js"],v["parts/Utilities.js"]],function(a,c){var l=c.splat,g=a.pick,k=a.Series,b=a.seriesTypes;c=a.wrap;var f=k.prototype,u=a.Pointer.prototype;f.searchPointByAngle=function(a){var b=this.chart,c=this.xAxis.pane.center;
return this.searchKDTree({clientX:180+-180/Math.PI*Math.atan2(a.chartX-c[0]-b.plotLeft,a.chartY-c[1]-b.plotTop)})};f.getConnectors=function(a,b,c,f){var e=f?1:0;var g=0<=b&&b<=a.length-1?b:0>b?a.length-1+b:0;b=0>g-1?a.length-(1+e):g-1;e=g+1>a.length-1?e:g+1;var p=a[b];e=a[e];var d=p.plotX;p=p.plotY;var k=e.plotX;var h=e.plotY;e=a[g].plotX;g=a[g].plotY;d=(1.5*e+d)/2.5;p=(1.5*g+p)/2.5;k=(1.5*e+k)/2.5;var q=(1.5*g+h)/2.5;h=Math.sqrt(Math.pow(d-e,2)+Math.pow(p-g,2));var l=Math.sqrt(Math.pow(k-e,2)+Math.pow(q-
g,2));d=Math.atan2(p-g,d-e);q=Math.PI/2+(d+Math.atan2(q-g,k-e))/2;Math.abs(d-q)>Math.PI/2&&(q-=Math.PI);d=e+Math.cos(q)*h;p=g+Math.sin(q)*h;k=e+Math.cos(Math.PI+q)*l;q=g+Math.sin(Math.PI+q)*l;e={rightContX:k,rightContY:q,leftContX:d,leftContY:p,plotX:e,plotY:g};c&&(e.prevPointCont=this.getConnectors(a,b,!1,f));return e};f.toXY=function(a){var b=this.chart,c=a.plotX;var e=a.plotY;a.rectPlotX=c;a.rectPlotY=e;e=this.xAxis.postTranslate(a.plotX,this.yAxis.len-e);a.plotX=a.polarPlotX=e.x-b.plotLeft;a.plotY=
a.polarPlotY=e.y-b.plotTop;this.kdByAngle?(b=(c/Math.PI*180+this.xAxis.pane.options.startAngle)%360,0>b&&(b+=360),a.clientX=b):a.clientX=a.plotX};b.spline&&(c(b.spline.prototype,"getPointSpline",function(a,b,c,f){this.chart.polar?f?(a=this.getConnectors(b,f,!0,this.connectEnds),a=["C",a.prevPointCont.rightContX,a.prevPointCont.rightContY,a.leftContX,a.leftContY,a.plotX,a.plotY]):a=["M",c.plotX,c.plotY]:a=a.call(this,b,c,f);return a}),b.areasplinerange&&(b.areasplinerange.prototype.getPointSpline=
b.spline.prototype.getPointSpline));a.addEvent(k,"afterTranslate",function(){var b=this.chart,c;if(b.polar){(this.kdByAngle=b.tooltip&&b.tooltip.shared)?this.searchPoint=this.searchPointByAngle:this.options.findNearestPointBy="xy";if(!this.preventPostTranslate){var f=this.points;for(c=f.length;c--;)this.toXY(f[c]),!b.hasParallelCoordinates&&!this.yAxis.reversed&&f[c].y<this.yAxis.min&&(f[c].isNull=!0)}this.hasClipCircleSetter||(this.hasClipCircleSetter=!!a.addEvent(this,"afterRender",function(){if(b.polar){var c=
this.yAxis.center;this.group.clip(b.renderer.clipCircle(c[0],c[1],c[2]/2));this.setClip=a.noop}}))}},{order:2});c(f,"getGraphPath",function(a,b){var c=this,e;if(this.chart.polar){b=b||this.points;for(e=0;e<b.length;e++)if(!b[e].isNull){var f=e;break}if(!1!==this.options.connectEnds&&void 0!==f){this.connectEnds=!0;b.splice(b.length,0,b[f]);var g=!0}b.forEach(function(a){void 0===a.polarPlotY&&c.toXY(a)})}e=a.apply(this,[].slice.call(arguments,1));g&&b.pop();return e});k=function(a,b){var c=this.chart,
e=this.options.animation,f=this.group,g=this.markerGroup,k=this.xAxis.center,d=c.plotLeft,p=c.plotTop;c.polar?c.renderer.isSVG&&(!0===e&&(e={}),b?(a={translateX:k[0]+d,translateY:k[1]+p,scaleX:.001,scaleY:.001},f.attr(a),g&&g.attr(a)):(a={translateX:d,translateY:p,scaleX:1,scaleY:1},f.animate(a,e),g&&g.animate(a,e),this.animate=null)):a.call(this,b)};c(f,"animate",k);b.column&&(b=b.column.prototype,b.polarArc=function(a,b,c,f){var e=this.xAxis.center,k=this.yAxis.len;return this.chart.renderer.symbols.arc(e[0],
e[1],k-b,null,{start:c,end:f,innerR:k-g(a,k)})},c(b,"animate",k),c(b,"translate",function(a){var b=this.xAxis,c=b.startAngleRad,e;this.preventPostTranslate=!0;a.call(this);if(b.isRadial){var f=this.points;for(e=f.length;e--;){var g=f[e];a=g.barX+c;g.shapeType="path";g.shapeArgs={d:this.polarArc(g.yBottom,g.plotY,a,a+g.pointWidth)};this.toXY(g);g.tooltipPos=[g.plotX,g.plotY];g.ttBelow=g.plotY>b.center[1]}}}),c(b,"alignDataLabel",function(a,b,c,g,k,l){this.chart.polar?(a=b.rectPlotX/Math.PI*180,null===
g.align&&(g.align=20<a&&160>a?"left":200<a&&340>a?"right":"center"),null===g.verticalAlign&&(g.verticalAlign=45>a||315<a?"bottom":135<a&&225>a?"top":"middle"),f.alignDataLabel.call(this,b,c,g,k,l)):a.call(this,b,c,g,k,l)}));c(u,"getCoordinates",function(a,b){var c=this.chart,e={xAxis:[],yAxis:[]};c.polar?c.axes.forEach(function(a){var f=a.isXAxis,g=a.center;if("colorAxis"!==a.coll){var d=b.chartX-g[0]-c.plotLeft;g=b.chartY-g[1]-c.plotTop;e[f?"xAxis":"yAxis"].push({axis:a,value:a.translate(f?Math.PI-
Math.atan2(d,g):Math.sqrt(Math.pow(d,2)+Math.pow(g,2)),!0)})}}):e=a.call(this,b);return e});a.SVGRenderer.prototype.clipCircle=function(b,c,f){var e=a.uniqueKey(),g=this.createElement("clipPath").attr({id:e}).add(this.defs);b=this.circle(b,c,f).add(g);b.id=e;b.clipPath=g;return b};a.addEvent(a.Chart,"getAxes",function(){this.pane||(this.pane=[]);l(this.options.pane).forEach(function(b){new a.Pane(b,this)},this)});a.addEvent(a.Chart,"afterDrawChartBox",function(){this.pane.forEach(function(a){a.render()})});
c(a.Chart.prototype,"get",function(b,c){return a.find(this.pane,function(a){return a.options.id===c})||b.call(this,c)})});z(v,"masters/highcharts-more.src.js",[],function(){})});
//# sourceMappingURL=highcharts-more.js.map

/***/ }),

/***/ 884:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomImageTagComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_services_imagecontroller__ = __webpack_require__(371);
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
 * Generated class for the CustomImageTagComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CustomImageTagComponent = /** @class */ (function () {
    function CustomImageTagComponent(_imageProvider) {
        this._imageProvider = _imageProvider;
        this.customClass = [];
        console.log('Hello CustomImageTagComponent Component', this.imageSrc, this.customClass);
        // this.text = 'Hello World';
    }
    CustomImageTagComponent.prototype.pp = function (image) {
        this._imageProvider.presentImage(image);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], CustomImageTagComponent.prototype, "imageSrc", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], CustomImageTagComponent.prototype, "customClass", void 0);
    CustomImageTagComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'customImage',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/components/custom-image-tag/custom-image-tag.html"*/'<!-- Generated template for the CustomImageTagComponent component -->\n<img #image [ngClass]="customClass" [src]="imageSrc" onError="this.src=\'../../assets/watermark/watermark.png\'" (click)="pp(image)" alt="">'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/components/custom-image-tag/custom-image-tag.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_services_imagecontroller__["a" /* ImagecontrollerProvider */]])
    ], CustomImageTagComponent);
    return CustomImageTagComponent;
}());

//# sourceMappingURL=custom-image-tag.js.map

/***/ }),

/***/ 885:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowHtmlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__ = __webpack_require__(164);
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
 * Generated class for the ShowHtmlComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ShowHtmlComponent = /** @class */ (function () {
    function ShowHtmlComponent(iab) {
        this.iab = iab;
        this.options = {
            location: 'no',
            hidden: 'no',
            // clearcache : 'yes',
            // clearsessioncache : 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Back',
            closebuttoncolor: '#f04141',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
            footer: 'yes',
            footercolor: '#939399',
        };
        console.log(this.htmlData);
    }
    ShowHtmlComponent.prototype.handleClick = function (event) {
        if (event.target.tagName == "A") {
            this.iab.create(event.target.href, "_system", this.options);
            return false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ShowHtmlComponent.prototype, "htmlData", void 0);
    ShowHtmlComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'show-html',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/components/show-html/show-html.html"*/'<!-- Generated template for the ShowHtmlComponent component -->\n<span (click)="handleClick($event)" [innerHTML]="htmlData"></span>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/components/show-html/show-html.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], ShowHtmlComponent);
    return ShowHtmlComponent;
}());

//# sourceMappingURL=show-html.js.map

/***/ }),

/***/ 886:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FromFieldsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_onboarding_forms_Chile_background_verification_response_form_control__ = __webpack_require__(872);
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
 * Generated class for the FromFieldsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var FromFieldsComponent = /** @class */ (function () {
    function FromFieldsComponent() {
        this.selectionChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        console.log('Hello FromFieldsComponent Component');
        // this.text = 'Hello World';
    }
    FromFieldsComponent.prototype.ngAfterViewInit = function () {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        console.log(this.dateFormat);
    };
    FromFieldsComponent.prototype.onChange = function (event) {
        console.log(event);
        this.selectionChange.emit(event);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], FromFieldsComponent.prototype, "selectionChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__pages_onboarding_forms_Chile_background_verification_response_form_control__["b" /* metaData */])
    ], FromFieldsComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], FromFieldsComponent.prototype, "label", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], FromFieldsComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], FromFieldsComponent.prototype, "otherStatus", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], FromFieldsComponent.prototype, "dateFormat", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], FromFieldsComponent.prototype, "options", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], FromFieldsComponent.prototype, "maxDate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], FromFieldsComponent.prototype, "minDate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], FromFieldsComponent.prototype, "wordCount", void 0);
    FromFieldsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'customInput',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/components/from-fields/from-fields.html"*/'<ion-row>\n  <ion-col col-12 *ngIf="data">\n    <ion-label>\n        {{ label }} \n        <sup *ngIf="data.is_mandatory" class="mendatFild">*</sup>\n        <div class="hint_div" *ngIf="data.hint_applicable">\n            <button class="hint_button" event=\'click\' duration=\'3000\' [tooltip]="data.hint" positionV="top" arrow=\'true\'>\n                <ion-icon class="hint_icon" ios="ios-information-circle" md="md-information-circle"></ion-icon>\n              </button>\n        </div>\n    </ion-label>\n  </ion-col>\n  <ion-col col-12 *ngIf="data">\n    \n      <ion-input *ngIf="type == \'text\' || type == \'number\'" \n        [placeholder]="label"\n        [ngClass]="{\'error\': ((!data.valueStatus() && otherStatus) || wordCount)}"\n        [type]="type" \n        [disabled]="!data.is_enable" \n        [(ngModel)]="data.value" >\n    </ion-input>\n\n    <ion-item class="text_area" *ngIf="type == \'textArea\'" >\n        <ion-textarea \n          [placeholder]="label"\n          [ngClass]="{\'error\': ((!data.valueStatus() && otherStatus) || wordCount)}"\n          [type]="type" \n          [disabled]="!data.is_enable" \n          [(ngModel)]="data.value" >\n        </ion-textarea>\n    </ion-item>\n     \n    \n    <ion-datetime *ngIf="type == \'date\'"  \n      [placeholder]="label"\n      [ngClass]="{\'error\': ((!data.valueStatus() && otherStatus) || wordCount)}"\n      [disabled]="!data.is_enable"\n      [(ngModel)]="data.value" \n      [max] = "maxDate"\n      [min] = "minDate"\n      [displayFormat]="dateFormat">\n    </ion-datetime>\n\n    <ion-list *ngIf="type == \'radio\'" radio-group [(ngModel)]="data.value" [disabled]="!data.is_enable">\n        <ion-row class="radioNewDiv" [ngClass]="{\'error\': ((!data.valueStatus() && otherStatus) || wordCount)}">\n            <ion-col *ngFor="let item of options; let i = index" \n              [attr.col-12]="((i == (options?.length - 1)) && options?.length%2 != 0) ? \'\' : null " \n              [attr.col-6]="(((i == (options?.length - 1)) && options?.length%2 == 0) || (i != (options?.length - 1))) ? \'\' : null ">\n                <ion-item text-center>\n                    <ion-label>{{ item?.name }}</ion-label>\n                    <ion-radio [value]="item?.auto_id"></ion-radio>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n    </ion-list>\n    <ion-list class="customSelect" *ngIf="type == \'select\' ">\n        <ion-item  [ngClass]="{\'error\': ((!data.valueStatus() && otherStatus) || wordCount)}">\n            <ion-label >{{ label }}</ion-label>\n            <ion-select [disabled]="!data.is_enable" [placeholder]="label"\n              [(ngModel)]="data.value" (ionChange)="onChange(data.value)">\n                <ion-option *ngFor="let item of options" [value]="item.auto_id">{{item?.name}}</ion-option>\n            </ion-select>\n        </ion-item>\n    </ion-list>\n  </ion-col>\n</ion-row>'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/components/from-fields/from-fields.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], FromFieldsComponent);
    return FromFieldsComponent;
}());

//# sourceMappingURL=from-fields.js.map

/***/ })

});
//# sourceMappingURL=4.js.map
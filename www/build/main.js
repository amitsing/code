webpackJsonp([145],{

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Image; });
var Image = /** @class */ (function () {
    function Image() {
        this.name = "";
        this.url = "";
        this.caption = "";
        this.preview = null;
    }
    return Image;
}());

//# sourceMappingURL=uploadImage.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the ApiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ApiServiceProvider = /** @class */ (function () {
    function ApiServiceProvider(http, Http) {
        this.http = http;
        this.Http = Http;
        this.baseUrl = "https://benepik.in/evalueserve/APIs/";
        // packageName = 'connect.myevalTest';
        this.packageName = 'connect.myeval';
        this.newBaseUrl = "https://benepik.in/reach_dev/reach/APIs/";
        this.bfsUrl = "https://hrerpappsuat.evalueserve.com:992/api/";
        this.clientUrl = "https://benepik.in/reach_dev/reach/";
        this.discountingBaseUrl = this.clientUrl + 'reachPrivilege/api/v1/';
        this.onBoardingFormUrl = this.clientUrl + 'Onboarding_Forms_Apis/';
        // ************* live app url ****************//
        // baseUrl = "https://benepik.co.in/evalueserve/APIs/";
        // // packageName = 'connect.myevalTest';
        // packageName = 'connect.myeval';
        // newBaseUrl="https://benepik.co.in/reach/APIs/";
        // bfsUrl="https://hrerpappsuat.evalueserve.com:992/api/";
        // clientUrl="https://benepik.co.in/reach/";
        // discountingBaseUrl=this.clientUrl+'reachPrivilege/api/v1/';
        //***************testing app url */
        //   baseUrl = "https://benepik.in/evalueserve/APIs/";
        //   packageName = 'connect.myevalonboarding';
        //   newBaseUrl="https://benepik.in/reach/APIs/";
        //   bfsUrl="https://hrerpappsuat.evalueserve.com:992/api/";
        //   clientUrl="https://benepik.in/reach/";
        //   discountingBaseUrl=this.clientUrl+'reachPrivilege/api/v1/';
        // //   onBoardingFormUrl=this.clientUrl+'reach/Onboarding_Forms_Apis/';
        // onBoardingFormUrl=this.clientUrl+'Onboarding_Forms_Apis/';
        //***************stagging app url */
        //   baseUrl = "https://ujjivanconnect.com/evalueserve/APIs/";
        //   packageName='connect.myevalTest';
        //   newBaseUrl="https://ujjivanconnect.com/reach/APIs/";
        //   bfsUrl="https://hrerpappsuat.evalueserve.com:992/api/";
        //   clientUrl="https://ujjivanconnect.com/reach/";
        //   discountingBaseUrl=this.clientUrl+'reachPrivilege/api/v1/';
        /////******************** live app url/
        // baseUrl = "https://benepik.co.in/evalueserve/APIs/";
        //  packageName='connect.myeval';
        this.device = '2';
        this.appVersion = '3';
        this.clientId = 'CO-31';
        this.optionalupdatekey = '1';
        this.newoptionalupdatekey = 1;
        this.razorpayDealType = ''; //this key is used on previlege deal details page
        //***************web_worker api url */
        this.forceupdate_webWorkerURL = this.newBaseUrl + 'Force_Update/force_update.php';
        this.gcmDetails_webWorkerURL = this.baseUrl + 'GCMDetails/GCM_details.php';
        this.joineefcmDetails_webWorkerURL = this.newBaseUrl + 'Joinee_FCM/joinee_FCM_details.php';
        this.albumList_webWorkerURL = this.newBaseUrl + "Album/album.php";
        this.onboardNewsList_webWorkerURL = this.newBaseUrl + "News/get_news.php";
        this.countryHeadMsgList_webWorkerURL = this.newBaseUrl + "Country_Head/get_country_head_msg.php";
        this.menuList_webWorkerURL = this.newBaseUrl + "Menu/get_menu.php";
        this.pramotedfeed_webWorkerURL = this.newBaseUrl + "Promoted_Feed/get_promoted_feed.php";
        this.photoWall_webWorkerUrl = this.newBaseUrl + "HomePage/photo_wall_album.php";
        this.pendingList_webWorkerURL = this.newBaseUrl + "HomePage/pending_activities.php";
        this.badgeList_webWorkerURL = this.newBaseUrl + "HomePage/badge.php";
        this.myCommunities_webWorkerURL = this.newBaseUrl + "HomePage/my_communities.php";
        //***************file transfer api url */
        this.profilePictureUpload = this.newBaseUrl + 'Image_Upload/image_upload.php';
        this.passportpicupload = this.newBaseUrl + 'Image_Upload/image_upload.php';
        this.cummunityimgupload = this.newBaseUrl + 'Image_Upload/post_image_upload.php';
        this.photoWallImageupload = this.newBaseUrl + 'Image_Upload/post_image_upload.php';
        this.contactQuery = this.newBaseUrl + 'Contact_Us/contact_us.php';
        this.mailWebworker_url = this.baseUrl + "Account/send_voucher_mail.php";
        console.log('Hello ApiServiceProvider Provider');
    }
    ApiServiceProvider.prototype.loginUser = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.baseUrl + 'Login_Signup/login.php', JSON.stringify(data)).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiServiceProvider.prototype.welcomeMessage = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.baseUrl + 'Welcome_message/welcome_message.php', JSON.stringify(data)).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiServiceProvider.prototype.optionalUpdateApi = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.baseUrl + 'Force_Update/optionalupdate.php', JSON.stringify(data)).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiServiceProvider.prototype.homePageApi = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.baseUrl + 'Home_Page/homepage.php', JSON.stringify(data)).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiServiceProvider.prototype.resetPassword = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.baseUrl + 'Login_Signup/reset_password.php', JSON.stringify(data)).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiServiceProvider.prototype.faqDetails = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.baseUrl + 'Faq/faq.php', JSON.stringify(data)).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    //   quizResult(data) {
    //     return new Promise((resolve, reject) => {
    //       this.http.post(this.baseUrl + 'Learning/quiz_result.php', JSON.stringify(data)).subscribe(res => {
    //         resolve(res);
    //       }, (err) => {
    //         reject(err);
    //       });
    //     });
    //   }
    ApiServiceProvider.prototype.preview_aboard = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.baseUrl + 'Welcome_Aboard/preview_aboard.php', JSON.stringify(data)).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiServiceProvider.prototype.submit_aboard = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.baseUrl + 'Welcome_Aboard/submitAboard.php', JSON.stringify(data)).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiServiceProvider.prototype.newJoinee = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.newBaseUrl + 'Joinee_login/login_joinee.php', JSON.stringify(data)).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiServiceProvider.prototype.employeelogin = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.newBaseUrl + 'Login_SignUp/login.php', JSON.stringify(data)).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiServiceProvider.prototype.maintainance = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.newBaseUrl + 'Force_Update/maintainance_api.php', JSON.stringify(data)).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    /////////headers api///////
    //   urllist(inputs,token){
    //     console.log("apisrvc",token);
    //     let headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     headers.append('Authorization', token);
    //     return this.Http.post(this.newBaseUrl + "Joinee_Form_Api/form_list_v2.php", inputs,{ headers: headers })
    //         .map((res) => {
    //             return res.json();
    //         })  
    // }
    ApiServiceProvider.prototype.urllist = function (inputs, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Joinee_Form_Api/form_list_v3.php", inputs, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.forceupdate = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Force_Update/force_update.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.newForceUpdate = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Force_Update/force_update_v2.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.joineehomepage = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Joinee_HomePage/homepage.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.onboardUserAlbum = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Album/album.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.onboardUserAlbumDetails = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Album/album_detail.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.aboutEvalList = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "AboutEval/about_eval_category.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.aboutLeaders_list = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Managment/managment_leader.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    // leaders_list(data) {
    //   return new Promise((resolve, reject) => {
    //     this.http.post(this.baseUrl + 'Leaders/leaders_list.php', JSON.stringify(data)).subscribe(res => {
    //       resolve(res);
    //     }, (err) => {
    //       reject(err);
    //     });
    //   });
    // } 
    ApiServiceProvider.prototype.userSignOut = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Joinee_login/logout_joinee.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.userjoinningDetails = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Joining_Details/joining_details.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    // userProfile(data,token) {
    //   console.log("apisrvc",token);
    //   let headers = new Headers();
    //   headers.append('Content-Type', 'application/json');
    //   headers.append('Authorization', token);
    //   return this.Http.post(this.newBaseUrl + "User_Profile/get_user_profile.php", data,{ headers: headers })
    //       .map((res) => {
    //           return res.json();
    //       }) 
    // }
    ApiServiceProvider.prototype.lifeAtEvalueserve = function (data, token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Life_At_Eval/life_at_eval.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.onboardnewsDetails = function (data, token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "News/get_news_detail.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.formsublist = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Joinee_Form_Api/form_sub_list.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.salarrystructure = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Sallary_Restructuring/save_value.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.savingpreferences = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Sallary_Restructuring/sallary_restructuring_summery.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.surveylist = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Survey/survey_list.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.surveydetail = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Survey/survey_detail.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.surveysubmit = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        //   return this.Http.post(this.newBaseUrl + "Survey/submit_survey.php", data,{ headers: headers })
        return this.Http.post(this.newBaseUrl + "Survey/submit_survey_v1.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.quizlist = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Quiz/quiz_list.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.quizdetail = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Quiz/quiz_detail.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.awardslist = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "R_And_R/get_award_list.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.awardDetail = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "R_And_R/award_detail.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.recentlyrewarded = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "R_And_R/recently_awarded.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.searchuser = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "R_And_R/search_user.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.createnomine = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "R_And_R/create_nomination.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.awardsdetail = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "R_And_R/show_nomination_detail.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.menu = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Menu/get_menu.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.homeapi = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "HomePage/homePage_v1.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.UploadMystatus = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Story_Line/create_story.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.storylist = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Story_Line/get_storyline_list.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.empAlbumList = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Album_Employee/get_albums.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.empAlbumdetail = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Album_Employee/get_album_images.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.createlike = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Like_Comments/create_like.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.getallcomment = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Like_Comments/get_all_comments.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.createcomment = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Like_Comments/create_comment.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.postdetail = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Post/post_detail.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.leadershiptalk = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Leadership/get_leadership_talks.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.nominationandapproval = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "R_And_R/past_nomination.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.pendingnomination = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "R_And_R/show_pending_nomination.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.acceptandreject = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "R_And_R/process_nomination.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.submitquiz = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Quiz/submit_quiz.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.quizresult = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Quiz/quiz_results.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.bfslogin = function (data) {
        // console.log("apisrvc",token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        // headers.append('Authorization', token);
        return this.Http.post(this.bfsUrl + "BfsLogin/Loginreach", data)
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.axlogin = function (data) {
        return this.Http.post(this.newBaseUrl + "Login_SignUp/ax_login.php", data)
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.emailverification = function (data) {
        return this.Http.post(this.newBaseUrl + "Login_SignUp/email_verification.php", data)
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.preonboard = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Welcome_Aboard/preview_aboard.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.submitonboard = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Welcome_Aboard/submit_aboard.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.tncApi = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Term_Condition/get_tc.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.submitTncApi = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Term_Condition/submit_tc.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    //********************rajesh************ */
    ApiServiceProvider.prototype.getOnboardingForm = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Welcome_Aboard/submit_aboard.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.getformmenu = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Joinee_Form_Api/get_form_menu.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.getContactInfo = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Term_Condition/agree_tc.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.submitMobileNumber = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Term_Condition/submit_number.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.submitOTP = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Term_Condition/submit_tc.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.bankdetail = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Joinee_Form_Api/bank_detail_option.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.submitinstruction = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Joinee_Form_Api/bank_detail_submit.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.bankinstruction = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Joinee_Form_Api/bank_detail_instruction.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    //*****************************marging code employee module 2aug2019******* */
    ApiServiceProvider.prototype.storyDetails = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Story_Line/get_story_details.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.storyDetailsViewAnalytic = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Story_Line/create_post_views.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.noticeListApi = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Notice/get_notice_list.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.noticeDetailsApi = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Post/post_detail.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.thoughtOftheDayApi = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Thought/get_thoughts.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.quickBytesListApi = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Quick_bytes/get_category.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.postDetailsApi = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Post/post_detail.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.welcomeDetailsApi = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Welcome_Aboard/welcome_aboard_detail.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.quickBytesDetailsApi = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Post/post_detail.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    // welcomeOnBoard(data,token) {
    //   console.log("apisrvc",token);
    //   let headers = new Headers();
    //   headers.append('Content-Type', 'application/json');
    //   headers.append('Authorization', token);
    //   return this.Http.post(this.newBaseUrl + "Welcome_Aboard/get_welcome_aboard.php", data,{ headers: headers })
    //       .map((res) => {
    //           return res.json();
    //       })
    //  }
    ApiServiceProvider.prototype.welcomeOnBoard = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Welcome_Aboard/welcome_aboard_list.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.healthAndWellnessListApi = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Wellness/exercise_list.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.wowAwardsbadgeListApi = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Wow_Award/badge_list.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.sendWowAwardsbadgeApi = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Wow_Award/send_badge.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.badgeBoardApi = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Wow_Award/latest_badge.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.leaderBoardApi = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Wow_Award/leaderboard.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.doLikeUnlikeApi = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Like_Comments/create_like.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.userSignoutApi = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Login_SignUp/logout.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.userlikeListApi = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Like_Comments/get_all_likes.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.communityListApi = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Community/community_list.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.communityJoinUnJoinedApi = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Community/community_join.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.communityCreateApi = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Community/community_post.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.communityPostApi = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Community/community_details.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.communityPostDetailsApi = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Post/post_detail.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.communitymemberListApi = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Community/community_member_list.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.passportimgsubmit = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Image_Upload/submit_passport_pic.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    //    joineefcm(data,token) {
    //     console.log("apisrvc",token);
    //     let headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     headers.append('Authorization', token);
    //     return this.Http.post(this.newBaseUrl + "Joinee_FCM/joinee_FCM_details.php", data,{ headers: headers })
    //         .map((res) => {
    //             return res.json();
    //         })
    //    }
    ApiServiceProvider.prototype.submitcumunitypost = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Community/community_post.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.joineesurveydetail = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Joinee_Survey/joinee_survey_detail.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.joineesurveysubmit = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Joinee_Survey/joinee_submit_survey_v1.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.joineequizdetail = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Joinee_Quiz/get_quiz_question.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.joineequizsubmit = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Joinee_Quiz/submit_quiz.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.joineequizhistory = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Joinee_Quiz/quiz_history.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.joineealert = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Joinee_Alert/joinee_alert.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.alertStatus = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Joinee_Alert/joinee_alert_status_off.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.carhirevalues = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Sallary_Restructuring/get_car_hire_values.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.carhirevaluesubmit = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Sallary_Restructuring/save_car_care.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.reject = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "R_And_R/process_nomination_new.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.alltranscationaward = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "R_And_R/alltransaction_award.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.EmployeeAlert = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Employee_Alert/alerts.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.EmployeeAwarddetail = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "R_And_R/show_nomination_detail.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    //********************************privilege*************** */
    //********************************privilege*************** */
    //********************************privilege*************** */
    ApiServiceProvider.prototype.privilegeHomeCategoryList = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.discountingBaseUrl + "category/all", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.privilegeHomeDealListApi = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.discountingBaseUrl + "deal/all", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.privilegeDealListApi = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.discountingBaseUrl + "category/deal/all", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.cummunitytags = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Community/get_community_tags.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.cummunitytagsubmit = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Community/save_community_tags.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.newslist = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "NPM/get_npm_list.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.submitContactQuery = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Contact_Us/contact_us.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.getPrivacyPolicies = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Privacy_policy/get_policy.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.approveddata = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "R_And_R/alltransaction_award.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.getFaq = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Faq/get_faqs.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.getContestList = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Contest/get_contest.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    //    getNominationApprovalDetailPage(data,token){
    //     console.log("apisrvc",token);
    //     let headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     headers.append('Authorization', token);
    //     return this.Http.post(this.newBaseUrl + "R_And_R/show_nomination_detail.php", data,{ headers: headers })
    //         .map((res) => {
    //             return res.json();
    //         });
    //    }
    //    awardgraph(data,token){
    //     console.log("apisrvc",token);
    //     let headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     headers.append('Authorization', token);
    //     return this.Http.post(this.newBaseUrl + "R_And_R/nomination_dashboard.php", data,{ headers: headers })
    //         .map((res) => {
    //             return res.json();
    //         });
    //    } 
    ApiServiceProvider.prototype.tandcbeforelogin = function (data) {
        return this.Http.post(this.newBaseUrl + "Login_SignUp/before_login_terms.php", data)
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.getNominationApprovalDetailPage = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "R_And_R/show_nomination_detail.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.awardgraph = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "R_And_R/nomination_dashboard.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.getAwardGraph = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "R_And_R/approvalgraph.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.contactHelpdesk = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Contact_Us/contact_us.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.dashboardGraph = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "R_And_R/awarddashboard.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.nominationApproveReject = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "R_And_R/process_nomination.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.myAwardsApi = function (data, token) {
        //shivanshi
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "R_And_R/myAwards.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.MyCertificatesApi = function (data, token) {
        //    shivanshi
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "R_And_R/myCertificates.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.MyCertificatesSendEmailApi = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "R_And_R/send_mail_myCertificate.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.Rewardspoint = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.discountingBaseUrl + "account/points", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.vcategory = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.discountingBaseUrl + "category/all", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.vlist = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.discountingBaseUrl + "category/deal/all/redeem", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.dealdetail = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.discountingBaseUrl + "deal/detail", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.statement = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.discountingBaseUrl + "account/points/history", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.myvouchers = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.discountingBaseUrl + "order/history", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.myvouchersdetail = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.discountingBaseUrl + "order/details", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.resendotp = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.discountingBaseUrl + "resendotp", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.dealpurches = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.discountingBaseUrl + "deal/purchase", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.sendotp = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.discountingBaseUrl + "deal/order/create", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.HrPolicyHomeProvider = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Hr_Policy/get_hr_policy.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.userProfile = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Profile/profile.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    /// bhupender
    ApiServiceProvider.prototype.FavouriteDealApi = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.discountingBaseUrl + "favourite/deal/update", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.DealDetail = function (data, token) {
        console.log("Deal Detail API Service Data=", data);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.discountingBaseUrl + "deal/detail", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.privilegeReserveATable = function (inputs) {
        return this.Http.post(this.discountingBaseUrl + "bookappointment.php", inputs)
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.showCoupon = function (inputs) {
        return this.Http.post(this.discountingBaseUrl + "APIs/show_coupon.php", inputs)
            .map(function (res) {
            return res.json();
        });
    };
    //Previlege Feedback API
    ApiServiceProvider.prototype.privilegeFeedback = function (inputs) {
        return this.Http.post(this.discountingBaseUrl + "merchant_feedback.php", inputs)
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.BenepikAppointment = function (data, tokenS) {
        console.log("Deal Detail API Service Data=", data);
        console.log("token Detail API Service Data=", tokenS);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', tokenS);
        return this.Http.post(this.discountingBaseUrl + "deal/order/create", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.DineOutTimeSlot = function (inputs) {
        return this.Http.post(this.discountingBaseUrl + "deal/order/create", inputs)
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.payment = function (voucher) {
        var buyerId = 'A5FE48C2-7018-4C55-85DA-3B94A269DAB5';
        var url = 'https://catalog.vouchagram.net/EPService.svc/VoucherQuantity?BuyerGuid=' + buyerId + '&Password=pRlF8GQqVKilwamzwH3gZg==&ProductGuid=' + voucher;
        return this.Http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.adduserlocation = function (inputs, token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.discountingBaseUrl + "APIs/add_user_privilege_location.php", inputs, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.updatenomine = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "R_And_R/changes_pending_nomination.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.behaviourGuideApi = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "HomePage/behaviour_guide.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.updatewalkthrough = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Login_SignUp/update_walkthrough.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.inductionRecruitementFeedbackSubmit = function (data) {
        // console.log("apisrvc",token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        // headers.append('Content-Type', 'application/json');
        // headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Login_SignUp/update_walkthrough.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.quizinstruction = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Joinee_Quiz/quiz_instruction.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.awardDashBoardUpdated = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "R_And_R/awarddashboard_v1.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.awardUtilization = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "R_And_R/awardutilization.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.sendmail = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.discountingBaseUrl + "sendVoucherMail", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.saveVouchers = function (inputs) {
        return this.Http.post(this.discountingBaseUrl + "APIs/save_voucher_detail_v2.php", inputs)
            .map(function (res) {
            return res.json();
        });
    };
    //new wohoo api call
    ApiServiceProvider.prototype.wohooApiCall = function (inputs) {
        return this.Http.post(this.discountingBaseUrl + "APIs/save_payment_woohoo_v2.php", inputs)
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.dealPurchase = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.discountingBaseUrl + "deal/purchase", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.favDealListApi = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.discountingBaseUrl + "favdeal/all", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.skiptc = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Term_Condition/skip_tc.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.photowallCategory = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Photo_Wall/photo_wall_category.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.photowallCategoryDetails = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Photo_Wall/photo_wall_detail.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.photowallPublish = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Photo_Wall/create_photo_wall.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.analyticApi = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Analytics/save_analytics.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.dynamicModuleList = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Special_Content/special_content_list.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.getdynamicmoduleDataApi = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Special_Content/special_content_detail.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.getTsopPerformerList = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "HomePage/get_award_list.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.previewPushMailer = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Mailer/htmlmailer.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.generalinformation = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.onBoardingFormUrl + "india_forms/general_info_api.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.china_consent = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.onBoardingFormUrl + "common_form_apis/all_consent_form.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.china_consent_submit = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.onBoardingFormUrl + "common_form_apis/submit_consent_form.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.globalpolicy_list = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.onBoardingFormUrl + "global_policy/global_policy_index.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.globalpolicy_detail = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.onBoardingFormUrl + "global_policy/global_policy_index_details.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.globalpolicy_quiz = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.onBoardingFormUrl + "global_policy/get_globel_policy_quiz.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.globalpolicy_quizsubmit = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.onBoardingFormUrl + "global_policy/submit_global_policy_quiz.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.globalpolicy_ack = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.onBoardingFormUrl + "global_policy/ack_global_policy_index.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.get_china_declaration = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.onBoardingFormUrl + "common_form_apis/get_form_declaration_content.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.get_declaration_otp = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.onBoardingFormUrl + "common_form_apis/generate_form_declaration_otp.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.submit_form_declaration = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.onBoardingFormUrl + "common_form_apis/submit_form_declaration.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.get_emergency_contact = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.onBoardingFormUrl + "china_forms/get_emergency_contact.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.get_emergency_dropdown = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.onBoardingFormUrl + "china_forms/emergency_form_dropdown_data.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.get_emergency_save = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.onBoardingFormUrl + "china_forms/save_emergency_contact.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.get_emergency_delete = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.onBoardingFormUrl + "china_forms/delete_emergency_contact.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.get_emergency_submit = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.onBoardingFormUrl + "common_form_apis/save_form_policy_ack.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.ChilleBackGroundVerification = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", token);
        return this.Http.post(this.clientUrl +
            "Onboarding_Forms_Apis/chille_forms/background_verification.php", data, {
            headers: headers
        }).map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.ChilleOnBoarding = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", token);
        return this.Http.post(this.clientUrl + "Onboarding_Forms_Apis/chille_forms/onboarding_form.php", data, {
            headers: headers
        }).map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.chilleSubmitBackgroundVerification = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", token);
        return this.Http.post(this.clientUrl +
            "Onboarding_Forms_Apis/chille_forms/submit_chile_background_form.php", data, {
            headers: headers
        }).map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.chilleSubmitOnboarding = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", token);
        return this.Http.post(this.clientUrl +
            "Onboarding_Forms_Apis/chille_forms/submit_onboarding_form.php", data, {
            headers: headers
        }).map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.getDropDown = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", token);
        return this.Http.post(this.clientUrl +
            "Onboarding_Forms_Apis/common_form_apis/get_dropdowns.php", data, {
            headers: headers
        }).map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.ChilleGetDeclaration = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", token);
        return this.Http.post(this.clientUrl +
            "Onboarding_Forms_Apis/common_form_apis/get_form_declaration_content.php", data, {
            headers: headers
        }).map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.ChilleFormDeclarationOtp = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", token);
        return this.Http.post(this.clientUrl +
            "Onboarding_Forms_Apis/common_form_apis/generate_form_declaration_otp.php", data, {
            headers: headers
        }).map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.ChilleDeclarationSubmit = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", token);
        return this.Http.post(this.clientUrl +
            "Onboarding_Forms_Apis/common_form_apis/generate_form_declaration_otp.php", data, {
            headers: headers
        }).map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.getFormPolicy = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", token);
        return this.Http.post(this.clientUrl +
            "Onboarding_Forms_Apis/common_form_apis/get_form_policy_contents.php", data, { headers: headers }).map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.submitFormPolicy = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", token);
        return this.Http.post(this.clientUrl +
            "Onboarding_Forms_Apis/common_form_apis/save_form_policy_ack.php", data, { headers: headers }).map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.getPolicyFormDeclaration = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", token);
        return this.Http.post(this.clientUrl +
            "Onboarding_Forms_Apis/common_form_apis/get_form_declaration_content.php", data, { headers: headers }).map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.onboardingDynamicModuleList = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "On_Dy_Module/get_module_list.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.onboardingDynamicModuleDetail = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "On_Dy_Module/get_module_detail.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.nationality_declaration = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.onBoardingFormUrl + "china_forms/get_nationality_dec_content.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.nationality_declaration_submit = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.onBoardingFormUrl + "china_forms/save_nationality_dec_content.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.RomaniaFirstDaySubmission = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Joinee_Form_Api/save_romania_day1_ack.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.RomaniaGetForm = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.clientUrl + "Onboarding_Forms_Apis/romania_forms/get_form_contents.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.RomaniaSubmitForm = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.clientUrl + "Onboarding_Forms_Apis/romania_forms/save_form_ack.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.us_self_identification = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.clientUrl + "Onboarding_Forms_Apis/usa_forms/get_identification_form_data.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.us_self_identification_submit = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.clientUrl + "Onboarding_Forms_Apis/usa_forms/save_identification_form_data.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.us_new_joinee = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.clientUrl + "Onboarding_Forms_Apis/usa_forms/get_joiner_form_data.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.us_new_joinee_submit = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.clientUrl + "Onboarding_Forms_Apis/usa_forms/submit_joiner_form_data.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.USABackGroundVerification = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", token);
        return this.Http.post(this.clientUrl +
            "Onboarding_Forms_Apis/usa_forms/get_background_verification_data.php", data, {
            headers: headers
        }).map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.us_attendance = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.clientUrl + "Onboarding_Forms_Apis/usa_forms/get_orientation_att_data.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.us_attendance_submit = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.clientUrl + "Onboarding_Forms_Apis/usa_forms/save_orientation_att_data.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.IndiaGetFamilyDetail = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.clientUrl + "Onboarding_Forms_Apis/india_forms/get_family_data.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.IndiaSaveFamilyDetail = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.clientUrl + "Onboarding_Forms_Apis/india_forms/save_family_data.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.IndiaFamilyDropDown = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.clientUrl + "Onboarding_Forms_Apis/india_forms/get_drop_down_data.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.IndiaUpdateFamilyDetails = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.clientUrl + "Onboarding_Forms_Apis/india_forms/update_family_data.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.IndiaDeleteFamilyDetails = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.clientUrl + "Onboarding_Forms_Apis/india_forms/delete_family_data.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.IndiaGetContactDetail = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.clientUrl + "Onboarding_Forms_Apis/india_forms/get_contact_data.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.IndiaSaveContactDetail = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.clientUrl + "Onboarding_Forms_Apis/india_forms/save_contact_data.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.IndiaUpdateContactDetails = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.clientUrl + "Onboarding_Forms_Apis/india_forms/update_contact_data.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.IndiaDeleteContactDetails = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.clientUrl + "Onboarding_Forms_Apis/india_forms/delete_contact_data.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.IndiaGetHRDetails = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.clientUrl + "Onboarding_Forms_Apis/india_forms/get_hr_form_data.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.IndiaSaveHRDetails = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.clientUrl + "Onboarding_Forms_Apis/india_forms/save_hr_form_data.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.IndiaGetPfForm = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", token);
        return this.Http.post(this.clientUrl +
            "Onboarding_Forms_Apis/india_forms/get_pf_form_data.php", data, {
            headers: headers
        }).map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.IndiaSavePfForm = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", token);
        return this.Http.post(this.clientUrl +
            "Onboarding_Forms_Apis/india_forms/save_pf_form_data.php", data, {
            headers: headers
        }).map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.IndiaUpdatePfForm = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", token);
        return this.Http.post(this.clientUrl +
            "Onboarding_Forms_Apis/india_forms/update_pf_form_data.php", data, {
            headers: headers
        }).map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.India_get_EPfForm = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", token);
        return this.Http.post(this.clientUrl +
            "Onboarding_Forms_Apis/india_forms/get_epf_data.php", data, {
            headers: headers
        }).map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.India_EPfForm_update = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", token);
        return this.Http.post(this.clientUrl +
            "Onboarding_Forms_Apis/india_forms/update_epf_data.php", data, {
            headers: headers
        }).map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.India_EPfForm_save = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", token);
        return this.Http.post(this.clientUrl +
            "Onboarding_Forms_Apis/india_forms/save_epf_data.php", data, {
            headers: headers
        }).map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.India_EPfForm_delete = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", token);
        return this.Http.post(this.clientUrl +
            "Onboarding_Forms_Apis/india_forms/delete_epf_data.php", data, {
            headers: headers
        }).map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.IndiaGetGratuityForm = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", token);
        return this.Http.post(this.clientUrl +
            "Onboarding_Forms_Apis/india_forms/get_gratuity_data.php", data, {
            headers: headers
        }).map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.IndiaSaveGratuityForm = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", token);
        return this.Http.post(this.clientUrl +
            "Onboarding_Forms_Apis/india_forms/save_gratuity_data.php", data, {
            headers: headers
        }).map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.IndiaUpdateGratuityForm = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", token);
        return this.Http.post(this.clientUrl +
            "Onboarding_Forms_Apis/india_forms/update_gratuity_data.php", data, {
            headers: headers
        }).map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.IndiaDeleteGratuityForm = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", token);
        return this.Http.post(this.clientUrl +
            "Onboarding_Forms_Apis/india_forms/delete_gratuity_data.php", data, {
            headers: headers
        }).map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.IndiaGetInsurane = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", token);
        return this.Http.post(this.clientUrl +
            "Onboarding_Forms_Apis/india_forms/get_insurance_data.php", data, {
            headers: headers
        }).map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.IndiaSaveInsuraneDetails = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.clientUrl + "Onboarding_Forms_Apis/india_forms/save_insurance_data.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.IndiaSubmitInsuraneDetails = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.clientUrl + "Onboarding_Forms_Apis/india_forms/update_insurance_data.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.IndiaGetCity = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.clientUrl + "Onboarding_Forms_Apis/india_forms/get_city_dropdown.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.get_proprietary = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.clientUrl + "Onboarding_Forms_Apis/usa_forms/get_proprietary_invention.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.save_proprietary = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.clientUrl + "Onboarding_Forms_Apis/usa_forms/save_proprietary_invention.php", data, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.Uk_Get_Personal_Info = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", token);
        return this.Http.post(this.clientUrl +
            "Onboarding_Forms_Apis/uk_forms/get_personal_info.php", data, {
            headers: headers
        }).map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.Uk_Save_Personal_Info = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", token);
        return this.Http.post(this.clientUrl +
            "Onboarding_Forms_Apis/uk_forms/save_personal_info.php", data, {
            headers: headers
        }).map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.Uk_Get_Group_Protection = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", token);
        return this.Http.post(this.clientUrl +
            "Onboarding_Forms_Apis/uk_forms/get_group_protection_data.php", data, {
            headers: headers
        }).map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.Uk_Save_Group_Protection = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", token);
        return this.Http.post(this.clientUrl +
            "Onboarding_Forms_Apis/uk_forms/save_group_protection_data.php", data, {
            headers: headers
        }).map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.Uk_Delete_Group_Protection = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", token);
        return this.Http.post(this.clientUrl +
            "Onboarding_Forms_Apis/uk_forms/delete_group_protection_data.php", data, {
            headers: headers
        }).map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.Uk_Get_Personal_Compliance = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", token);
        return this.Http.post(this.clientUrl +
            "Onboarding_Forms_Apis/uk_forms/get_personal_complaince_data.php", data, {
            headers: headers
        }).map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.Uk_Save_Personal_Compliance = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", token);
        return this.Http.post(this.clientUrl +
            "Onboarding_Forms_Apis/uk_forms/save_personal_compliance_data.php", data, {
            headers: headers
        }).map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.Uk_Get_Credit_Card_Info = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", token);
        return this.Http.post(this.clientUrl +
            "Onboarding_Forms_Apis/uk_forms/get_credit_card_application_data.php", data, {
            headers: headers
        }).map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.Uk_Save_Credit_Card_Info = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", token);
        return this.Http.post(this.clientUrl +
            "Onboarding_Forms_Apis/uk_forms/save_credit_card_application_data.php", data, {
            headers: headers
        }).map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.Uk_Credit_Card_Dropdown = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", token);
        return this.Http.post(this.clientUrl +
            "Onboarding_Forms_Apis/uk_forms/get_uk_dropdown_data.php", data, {
            headers: headers
        }).map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.USASubmitBackgroundVerification = function (data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", token);
        return this.Http.post(this.clientUrl +
            "Onboarding_Forms_Apis/usa_forms/save_background_verification_data.php", data, {
            headers: headers
        }).map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider.prototype.us_canada = function (url, data, token) {
        console.log("apisrvc", token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", token);
        return this.Http.post(this.clientUrl +
            url, data, { headers: headers }).map(function (res) {
            return res.json();
        });
    };
    ApiServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], ApiServiceProvider);
    return ApiServiceProvider;
}());

//# sourceMappingURL=api-service.js.map

/***/ }),

/***/ 187:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 187;

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about-details/about-details.module": [
		717,
		144
	],
	"../pages/about-evalueserve/about-evalueserve.module": [
		718,
		143
	],
	"../pages/accountstatment/accountstatment.module": [
		719,
		142
	],
	"../pages/addcummunitypost/addcummunitypost.module": [
		720,
		141
	],
	"../pages/album-details/album-details.module": [
		721,
		140
	],
	"../pages/album-image-slider/album-image-slider.module": [
		722,
		139
	],
	"../pages/album-list/album-list.module": [
		723,
		138
	],
	"../pages/albumslidezoom/albumslidezoom.module": [
		724,
		137
	],
	"../pages/alert/alert.module": [
		725,
		136
	],
	"../pages/alreadyacountform/alreadyacountform.module": [
		726,
		135
	],
	"../pages/anualawardsdetail/anualawardsdetail.module": [
		727,
		134
	],
	"../pages/aplicantwelcome/aplicantwelcome.module": [
		728,
		133
	],
	"../pages/autocomplete/autocomplete.module": [
		729,
		132
	],
	"../pages/awardeddetail/awardeddetail.module": [
		730,
		131
	],
	"../pages/backcheckiframe/backcheckiframe.module": [
		731,
		41
	],
	"../pages/backgrndandfontchange/backgrndandfontchange.module": [
		732,
		130
	],
	"../pages/backgrndandfontchanges/backgrndandfontchanges.module": [
		733,
		129
	],
	"../pages/backgroundcheck/backgroundcheck.module": [
		734,
		128
	],
	"../pages/bankinstruction/bankinstruction.module": [
		735,
		127
	],
	"../pages/behaivour-guide/behaivour-guide.module": [
		736,
		126
	],
	"../pages/bothauthorty/bothauthorty.module": [
		737,
		125
	],
	"../pages/carhire/carhire.module": [
		738,
		124
	],
	"../pages/catgories/catgories.module": [
		739,
		123
	],
	"../pages/ceo-messagee/ceo-messagee.module": [
		740,
		40
	],
	"../pages/choiceofbankaccount/choiceofbankaccount.module": [
		741,
		122
	],
	"../pages/choose-user/choose-user.module": [
		742,
		121
	],
	"../pages/comments/comments.module": [
		743,
		120
	],
	"../pages/contactus/contactus.module": [
		744,
		119
	],
	"../pages/dashboard/dashboard.module": [
		745,
		0
	],
	"../pages/dynamic-module-list/dynamic-module-list.module": [
		746,
		118
	],
	"../pages/dynamicmodule/dynamicmodule.module": [
		747,
		39
	],
	"../pages/evalmadatorysurvey/evalmadatorysurvey.module": [
		750,
		117
	],
	"../pages/faq-details/faq-details.module": [
		748,
		116
	],
	"../pages/faq/faq.module": [
		749,
		115
	],
	"../pages/fill-otp/fill-otp.module": [
		751,
		114
	],
	"../pages/first-welcome-aboard/first-welcome-aboard.module": [
		752,
		113
	],
	"../pages/firstimgupload/firstimgupload.module": [
		753,
		112
	],
	"../pages/force-update/force-update.module": [
		754,
		111
	],
	"../pages/formsinstruction/formsinstruction.module": [
		756,
		110
	],
	"../pages/general-information/general-information.module": [
		755,
		109
	],
	"../pages/gotonew/gotonew.module": [
		757,
		38
	],
	"../pages/home/home.module": [
		758,
		27
	],
	"../pages/homeawardsdetail/homeawardsdetail.module": [
		759,
		108
	],
	"../pages/hrpolicy/hrpolicy.module": [
		760,
		42
	],
	"../pages/hrpolicydetails/hrpolicydetails.module": [
		762,
		107
	],
	"../pages/instruction/instruction.module": [
		761,
		106
	],
	"../pages/joineeaward/joineeaward.module": [
		763,
		105
	],
	"../pages/joineequizhistory/joineequizhistory.module": [
		764,
		104
	],
	"../pages/joineequizinstruction/joineequizinstruction.module": [
		765,
		103
	],
	"../pages/joineequizquestion/joineequizquestion.module": [
		766,
		102
	],
	"../pages/joineeupdatenumber/joineeupdatenumber.module": [
		767,
		101
	],
	"../pages/joining-details/joining-details.module": [
		768,
		100
	],
	"../pages/leaderdetail/leaderdetail.module": [
		769,
		99
	],
	"../pages/leadershiptalk/leadershiptalk.module": [
		770,
		37
	],
	"../pages/leadershiptalkdetail/leadershiptalkdetail.module": [
		771,
		36
	],
	"../pages/life-at-eval-details/life-at-eval-details.module": [
		772,
		26
	],
	"../pages/like-users-list/like-users-list.module": [
		773,
		25
	],
	"../pages/list/list.module": [
		774,
		98
	],
	"../pages/login/login.module": [
		775,
		97
	],
	"../pages/made-my-day/made-my-day.module": [
		776,
		24
	],
	"../pages/maintainance/maintainance.module": [
		777,
		96
	],
	"../pages/menu/menu.module": [
		778,
		95
	],
	"../pages/newquizlist/newquizlist.module": [
		779,
		94
	],
	"../pages/newquizquestion/newquizquestion.module": [
		780,
		93
	],
	"../pages/newslist/newslist.module": [
		781,
		35
	],
	"../pages/notice-details/notice-details.module": [
		782,
		92
	],
	"../pages/notice-list/notice-list.module": [
		783,
		91
	],
	"../pages/onboard-preview/onboard-preview.module": [
		784,
		90
	],
	"../pages/onboarding-dynamic-module-detail/onboarding-dynamic-module-detail.module": [
		823,
		23
	],
	"../pages/onboarding-dynamic-module-list/onboarding-dynamic-module-list.module": [
		824,
		22
	],
	"../pages/onboarding-forms/onboarding-forms.module": [
		825,
		89
	],
	"../pages/onboarding_forms/Chile/background-verification/background-verification.module": [
		785,
		2
	],
	"../pages/onboarding_forms/Chile/declaration/declaration.module": [
		786,
		21
	],
	"../pages/onboarding_forms/Chile/employee-consent-form/employee-consent-form.module": [
		787,
		20
	],
	"../pages/onboarding_forms/Chile/onboarding-form/onboarding-form.module": [
		788,
		13
	],
	"../pages/onboarding_forms/India/basic-details/basic-details.module": [
		798,
		12
	],
	"../pages/onboarding_forms/India/declaration-mediclaim/declaration-mediclaim.module": [
		799,
		88
	],
	"../pages/onboarding_forms/India/epf-nomination/epf-nomination.module": [
		800,
		31
	],
	"../pages/onboarding_forms/India/family-details/family-details.module": [
		801,
		11
	],
	"../pages/onboarding_forms/India/form-eleven/form-eleven.module": [
		802,
		10
	],
	"../pages/onboarding_forms/India/gdp-rconsent/gdp-rconsent.module": [
		803,
		87
	],
	"../pages/onboarding_forms/India/genral-information/genral-information.module": [
		804,
		86
	],
	"../pages/onboarding_forms/India/india-emg-contact/india-emg-contact.module": [
		805,
		9
	],
	"../pages/onboarding_forms/India/india-insurance/india-insurance.module": [
		806,
		8
	],
	"../pages/onboarding_forms/India/joineedeclaration/joineedeclaration.module": [
		807,
		85
	],
	"../pages/onboarding_forms/India/nominees/nominees.module": [
		808,
		7
	],
	"../pages/onboarding_forms/Romania/first-day-instruction/first-day-instruction.module": [
		809,
		19
	],
	"../pages/onboarding_forms/Romania/romania-common/romania-common.module": [
		810,
		18
	],
	"../pages/onboarding_forms/UK/beneficiaryform/beneficiaryform.module": [
		811,
		6
	],
	"../pages/onboarding_forms/UK/credit-card/credit-card.module": [
		812,
		5
	],
	"../pages/onboarding_forms/UK/personal-compliance/personal-compliance.module": [
		813,
		4
	],
	"../pages/onboarding_forms/UK/personaldetails/personaldetails.module": [
		814,
		3
	],
	"../pages/onboarding_forms/UK/revenueandcustom/revenueandcustom.module": [
		815,
		84
	],
	"../pages/onboarding_forms/US/background-verification-usa/background-verification-usa.module": [
		816,
		1
	],
	"../pages/onboarding_forms/US/corporate-orientation-assistence/corporate-orientation-assistence.module": [
		817,
		83
	],
	"../pages/onboarding_forms/US/evalueserve-self-identification/evalueserve-self-identification.module": [
		818,
		82
	],
	"../pages/onboarding_forms/US/proprietary-information/proprietary-information.module": [
		819,
		17
	],
	"../pages/onboarding_forms/US/usaconsent/usaconsent.module": [
		820,
		81
	],
	"../pages/onboarding_forms/US/usattendancesheet/usattendancesheet.module": [
		821,
		30
	],
	"../pages/onboarding_forms/US/usnewjoineeform/usnewjoineeform.module": [
		822,
		29
	],
	"../pages/onboarding_forms/china/china-declaration-form/china-declaration-form.module": [
		789,
		34
	],
	"../pages/onboarding_forms/china/chinaconsent/chinaconsent.module": [
		790,
		80
	],
	"../pages/onboarding_forms/china/chinadeclaration/chinadeclaration.module": [
		791,
		79
	],
	"../pages/onboarding_forms/china/chinaemergencycontact/chinaemergencycontact.module": [
		792,
		28
	],
	"../pages/onboarding_forms/common_folder/company-policy/company-policy.module": [
		794,
		16
	],
	"../pages/onboarding_forms/common_folder/declarationotp/declarationotp.module": [
		793,
		78
	],
	"../pages/onboarding_forms/common_folder/globalpolicydetail/globalpolicydetail.module": [
		795,
		77
	],
	"../pages/onboarding_forms/common_folder/globalpolicylist/globalpolicylist.module": [
		796,
		76
	],
	"../pages/onboarding_forms/common_folder/policy-declaration/policy-declaration.module": [
		797,
		15
	],
	"../pages/oprationdetail/oprationdetail.module": [
		826,
		33
	],
	"../pages/pansionscheme/pansionscheme.module": [
		827,
		75
	],
	"../pages/pendinglist/pendinglist.module": [
		828,
		74
	],
	"../pages/popover-login/popover-login.module": [
		829,
		73
	],
	"../pages/preview/preview.module": [
		830,
		72
	],
	"../pages/privacypolicy/privacypolicy.module": [
		831,
		71
	],
	"../pages/profile-dos-donts/profile-dos-donts.module": [
		832,
		70
	],
	"../pages/profile-pic-upload/profile-pic-upload.module": [
		833,
		69
	],
	"../pages/profile/profile.module": [
		834,
		68
	],
	"../pages/quiz-complete-status/quiz-complete-status.module": [
		835,
		67
	],
	"../pages/quiz-result/quiz-result.module": [
		836,
		66
	],
	"../pages/quizreview/quizreview.module": [
		837,
		65
	],
	"../pages/quizsummary/quizsummary.module": [
		838,
		64
	],
	"../pages/samplepassportphoto/samplepassportphoto.module": [
		839,
		63
	],
	"../pages/savingpreferences/savingpreferences.module": [
		840,
		62
	],
	"../pages/show-all-comment/show-all-comment.module": [
		841,
		61
	],
	"../pages/silerhallcategory/silerhallcategory.module": [
		842,
		60
	],
	"../pages/slide-three-image/slide-three-image.module": [
		843,
		59
	],
	"../pages/sodexomealvoucher/sodexomealvoucher.module": [
		844,
		58
	],
	"../pages/survey-instruction/survey-instruction.module": [
		845,
		57
	],
	"../pages/surveydetail/surveydetail.module": [
		846,
		56
	],
	"../pages/surveylist/surveylist.module": [
		847,
		55
	],
	"../pages/tabs/tabs.module": [
		848,
		54
	],
	"../pages/take-mobile-number/take-mobile-number.module": [
		849,
		53
	],
	"../pages/tand-cbeforelogin/tand-cbeforelogin.module": [
		850,
		52
	],
	"../pages/terms-and-conditions/terms-and-conditions.module": [
		851,
		51
	],
	"../pages/testsurvey/testsurvey.module": [
		853,
		50
	],
	"../pages/testurl/testurl.module": [
		852,
		32
	],
	"../pages/thought-of-the-day/thought-of-the-day.module": [
		854,
		49
	],
	"../pages/travelassitance/travelassitance.module": [
		855,
		48
	],
	"../pages/updatemobileno/updatemobileno.module": [
		856,
		47
	],
	"../pages/urllist/urllist.module": [
		858,
		14
	],
	"../pages/walkthrough-screen/walkthrough-screen.module": [
		857,
		46
	],
	"../pages/welcom-onboard/welcom-onboard.module": [
		859,
		45
	],
	"../pages/welcome-onboard-details/welcome-onboard-details.module": [
		860,
		44
	],
	"../pages/welcome-screen/welcome-screen.module": [
		861,
		43
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 228;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RazorpayProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
///// @author : Ankit Saini
///// @purpose : RazorPay payment gateway Service
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the RazorpayProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RazorpayProvider = /** @class */ (function () {
    function RazorpayProvider(http, _event) {
        this.http = http;
        this._event = _event;
    }
    RazorpayProvider.prototype.makePayment = function (options, sucessRedirectPage, cancelRedirectPage, data) {
        var self = this;
        //// data to check on browser(must remove when make build)
        // data['paymentId'] = 'xyzabc';
        // data['page'] = sucessRedirectPage;
        // data['success'] = '1';
        // self.navigate(data);
        //// Success callback function
        //// called when payment successfully done
        var successCallback = function (payment_id) {
            data['paymentId'] = payment_id;
            data['page'] = sucessRedirectPage;
            data['success'] = '1';
            self.navigate(data);
        };
        //// cancel callback function
        /// called when razorPay get any error
        var cancelCallback = function (error) {
            data['page'] = cancelRedirectPage;
            data['success'] = '0';
            self.navigate(data);
        };
        //// open RazorPay payment page
        RazorpayCheckout.open(options, successCallback, cancelCallback);
    };
    //// navigation through Events
    //// this event must be subscribed in the constructor of the page which make a call to makePayment method of this service  
    RazorpayProvider.prototype.navigate = function (pageComponent) {
        console.log('inside razorpay ts file==*** ', pageComponent);
        this._event.publish('paymentSucessful', pageComponent);
    };
    RazorpayProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Events */]])
    ], RazorpayProvider);
    return RazorpayProvider;
}());

//# sourceMappingURL=razorpay.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DignosticProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_diagnostic__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DignosticProvider = /** @class */ (function () {
    function DignosticProvider(_dignostic) {
        this._dignostic = _dignostic;
    }
    DignosticProvider.prototype.getLocationStatus = function () {
        var status;
        this._dignostic.isLocationEnabled().then(function (res) {
            status = res;
        }).catch(function (err) {
            throw new Error(err);
        });
        return status;
    };
    DignosticProvider.prototype.activateLocationService = function () {
        this._dignostic.switchToLocationSettings();
        return this.getLocationStatus();
    };
    DignosticProvider.prototype.getCameraStatus = function () {
        var status;
        this._dignostic.isCameraAuthorized().then(function (res) {
            status = res;
        }).catch(function (err) {
            throw new Error(err);
        });
        return status;
    };
    DignosticProvider.prototype.activateCamera = function () {
        var status;
        this._dignostic.requestCameraAuthorization().then(function (res) {
            status = res;
        }).catch(function (err) {
            throw new Error(err);
        });
        return status;
    };
    DignosticProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_diagnostic__["a" /* Diagnostic */]])
    ], DignosticProvider);
    return DignosticProvider;
}());

//# sourceMappingURL=dignostic.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagecontrollerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the ImagecontrollerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ImagecontrollerProvider = /** @class */ (function () {
    function ImagecontrollerProvider(http, imageViewerCtrl) {
        this.http = http;
        this.imageViewerCtrl = imageViewerCtrl;
        this._imageViewerCtrl = imageViewerCtrl;
        console.log('Hello ImagecontrollerProvider Provider');
    }
    ImagecontrollerProvider.prototype.presentImage = function (myImage) {
        console.log("present image function is called");
        console.log(myImage);
        var imageViewer = this.imageViewerCtrl.create(myImage);
        console.log(myImage);
        imageViewer.present();
    };
    ImagecontrollerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__["a" /* ImageViewerController */]])
    ], ImagecontrollerProvider);
    return ImagecontrollerProvider;
}());

//# sourceMappingURL=imagecontroller.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(378);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_device__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_fcm__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_file_transfer__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_in_app_browser__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_photo_viewer__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng_circle_progress__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common_http__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_api_service_api_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_razorpay_razorpay__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_image_picker__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_network__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ionic_img_viewer__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_android_permissions__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_geolocation__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_clipboard__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_diagnostic__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_native_geocoder__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_launch_navigator__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_service_module__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_platform_browser_animations__ = __webpack_require__(715);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';










// import {RoundProgressModule} from 'angular-svg-round-progressbar';















// import { TooltipsModule } from 'ionic-tooltips';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_29__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_28__providers_service_module__["a" /* ServicesModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], { tabsPlacement: 'top', tabsHideOnSubPages: true, }, {
                    links: [
                        { loadChildren: '../pages/about-details/about-details.module#AboutDetailsPageModule', name: 'AboutDetailsPage', segment: 'about-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/about-evalueserve/about-evalueserve.module#AboutEvalueservePageModule', name: 'AboutEvalueservePage', segment: 'about-evalueserve', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/accountstatment/accountstatment.module#AccountstatmentPageModule', name: 'AccountstatmentPage', segment: 'accountstatment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addcummunitypost/addcummunitypost.module#AddcummunitypostPageModule', name: 'AddcummunitypostPage', segment: 'addcummunitypost', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/album-details/album-details.module#AlbumDetailsPageModule', name: 'AlbumDetailsPage', segment: 'album-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/album-image-slider/album-image-slider.module#AlbumImageSliderPageModule', name: 'AlbumImageSliderPage', segment: 'album-image-slider', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/album-list/album-list.module#AlbumListPageModule', name: 'AlbumListPage', segment: 'album-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/albumslidezoom/albumslidezoom.module#AlbumslidezoomPageModule', name: 'AlbumslidezoomPage', segment: 'albumslidezoom', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/alert/alert.module#AlertPageModule', name: 'AlertPage', segment: 'alert', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/alreadyacountform/alreadyacountform.module#AlreadyacountformPageModule', name: 'AlreadyacountformPage', segment: 'alreadyacountform', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/anualawardsdetail/anualawardsdetail.module#AnualawardsdetailPageModule', name: 'AnualawardsdetailPage', segment: 'anualawardsdetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/aplicantwelcome/aplicantwelcome.module#AplicantwelcomePageModule', name: 'AplicantwelcomePage', segment: 'aplicantwelcome', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/autocomplete/autocomplete.module#AutocompletePageModule', name: 'AutocompletePage', segment: 'autocomplete', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/awardeddetail/awardeddetail.module#AwardeddetailPageModule', name: 'AwardeddetailPage', segment: 'awardeddetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/backcheckiframe/backcheckiframe.module#BackcheckiframePageModule', name: 'BackcheckiframePage', segment: 'backcheckiframe', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/backgrndandfontchange/backgrndandfontchange.module#BackgrndandfontchangePageModule', name: 'BackgrndandfontchangePage', segment: 'backgrndandfontchange', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/backgrndandfontchanges/backgrndandfontchanges.module#BackgrndandfontchangesPageModule', name: 'BackgrndandfontchangesPage', segment: 'backgrndandfontchanges', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/backgroundcheck/backgroundcheck.module#BackgroundcheckPageModule', name: 'BackgroundcheckPage', segment: 'backgroundcheck', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bankinstruction/bankinstruction.module#BankinstructionPageModule', name: 'BankinstructionPage', segment: 'bankinstruction', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/behaivour-guide/behaivour-guide.module#BehaivourGuidePageModule', name: 'BehaivourGuidePage', segment: 'behaivour-guide', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bothauthorty/bothauthorty.module#BothauthortyPageModule', name: 'BothauthortyPage', segment: 'bothauthorty', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/carhire/carhire.module#CarhirePageModule', name: 'CarhirePage', segment: 'carhire', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/catgories/catgories.module#CatgoriesPageModule', name: 'CatgoriesPage', segment: 'catgories', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ceo-messagee/ceo-messagee.module#CeoMessageePageModule', name: 'CeoMessageePage', segment: 'ceo-messagee', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/choiceofbankaccount/choiceofbankaccount.module#ChoiceofbankaccountPageModule', name: 'ChoiceofbankaccountPage', segment: 'choiceofbankaccount', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/choose-user/choose-user.module#ChooseUserPageModule', name: 'ChooseUserPage', segment: 'choose-user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/comments/comments.module#CommentsPageModule', name: 'CommentsPage', segment: 'comments', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contactus/contactus.module#ContactusPageModule', name: 'ContactusPage', segment: 'contactus', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dynamic-module-list/dynamic-module-list.module#DynamicModuleListPageModule', name: 'DynamicModuleListPage', segment: 'dynamic-module-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dynamicmodule/dynamicmodule.module#DynamicmodulePageModule', name: 'DynamicmodulePage', segment: 'dynamicmodule', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/faq-details/faq-details.module#FaqDetailsPageModule', name: 'FaqDetailsPage', segment: 'faq-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/faq/faq.module#FaqPageModule', name: 'FaqPage', segment: 'faq', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/evalmadatorysurvey/evalmadatorysurvey.module#EvalmadatorysurveyPageModule', name: 'EvalmadatorysurveyPage', segment: 'evalmadatorysurvey', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fill-otp/fill-otp.module#FillOtpPageModule', name: 'FillOtpPage', segment: 'fill-otp', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/first-welcome-aboard/first-welcome-aboard.module#FirstWelcomeAboardPageModule', name: 'FirstWelcomeAboardPage', segment: 'first-welcome-aboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/firstimgupload/firstimgupload.module#FirstimguploadPageModule', name: 'FirstimguploadPage', segment: 'firstimgupload', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/force-update/force-update.module#ForceUpdatePageModule', name: 'ForceUpdatePage', segment: 'force-update', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/general-information/general-information.module#GeneralInformationPageModule', name: 'GeneralInformationPage', segment: 'general-information', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/formsinstruction/formsinstruction.module#FormsinstructionPageModule', name: 'FormsinstructionPage', segment: 'formsinstruction', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gotonew/gotonew.module#GotonewPageModule', name: 'GotonewPage', segment: 'gotonew', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/homeawardsdetail/homeawardsdetail.module#HomeawardsdetailPageModule', name: 'HomeawardsdetailPage', segment: 'homeawardsdetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hrpolicy/hrpolicy.module#HrpolicyPageModule', name: 'HrpolicyPage', segment: 'hrpolicy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/instruction/instruction.module#InstructionPageModule', name: 'InstructionPage', segment: 'instruction', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hrpolicydetails/hrpolicydetails.module#HrpolicydetailsPageModule', name: 'HrpolicydetailsPage', segment: 'hrpolicydetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/joineeaward/joineeaward.module#JoineeawardPageModule', name: 'JoineeawardPage', segment: 'joineeaward', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/joineequizhistory/joineequizhistory.module#JoineequizhistoryPageModule', name: 'JoineequizhistoryPage', segment: 'joineequizhistory', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/joineequizinstruction/joineequizinstruction.module#JoineequizinstructionPageModule', name: 'JoineequizinstructionPage', segment: 'joineequizinstruction', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/joineequizquestion/joineequizquestion.module#JoineequizquestionPageModule', name: 'JoineequizquestionPage', segment: 'joineequizquestion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/joineeupdatenumber/joineeupdatenumber.module#JoineeupdatenumberPageModule', name: 'JoineeupdatenumberPage', segment: 'joineeupdatenumber', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/joining-details/joining-details.module#JoiningDetailsPageModule', name: 'JoiningDetailsPage', segment: 'joining-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/leaderdetail/leaderdetail.module#LeaderdetailPageModule', name: 'LeaderdetailPage', segment: 'leaderdetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/leadershiptalk/leadershiptalk.module#LeadershiptalkPageModule', name: 'LeadershiptalkPage', segment: 'leadershiptalk', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/leadershiptalkdetail/leadershiptalkdetail.module#LeadershiptalkdetailPageModule', name: 'LeadershiptalkdetailPage', segment: 'leadershiptalkdetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/life-at-eval-details/life-at-eval-details.module#LifeAtEvalDetailsPageModule', name: 'LifeAtEvalDetailsPage', segment: 'life-at-eval-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/like-users-list/like-users-list.module#LikeUsersListPageModule', name: 'LikeUsersListPage', segment: 'like-users-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/list.module#ListPageModule', name: 'ListPage', segment: 'list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/made-my-day/made-my-day.module#MadeMyDayPageModule', name: 'MadeMyDayPage', segment: 'made-my-day', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/maintainance/maintainance.module#MaintainancePageModule', name: 'MaintainancePage', segment: 'maintainance', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/newquizlist/newquizlist.module#NewquizlistPageModule', name: 'NewquizlistPage', segment: 'newquizlist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/newquizquestion/newquizquestion.module#NewquizquestionPageModule', name: 'NewquizquestionPage', segment: 'newquizquestion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/newslist/newslist.module#NewslistPageModule', name: 'NewslistPage', segment: 'newslist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notice-details/notice-details.module#NoticeDetailsPageModule', name: 'NoticeDetailsPage', segment: 'notice-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notice-list/notice-list.module#NoticeListPageModule', name: 'NoticeListPage', segment: 'notice-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/onboard-preview/onboard-preview.module#OnboardPreviewPageModule', name: 'OnboardPreviewPage', segment: 'onboard-preview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/onboarding_forms/Chile/background-verification/background-verification.module#BackgroundVerificationPageModule', name: 'BackgroundVerificationPage', segment: 'background-verification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/onboarding_forms/Chile/declaration/declaration.module#DeclarationPageModule', name: 'DeclarationPage', segment: 'declaration', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/onboarding_forms/Chile/employee-consent-form/employee-consent-form.module#EmployeeConsentFormPageModule', name: 'EmployeeConsentFormPage', segment: 'employee-consent-form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/onboarding_forms/Chile/onboarding-form/onboarding-form.module#OnboardingFormPageModule', name: 'OnboardingFormPage', segment: 'onboarding-form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/onboarding_forms/china/china-declaration-form/china-declaration-form.module#ChinaDeclarationFormPageModule', name: 'ChinaDeclarationFormPage', segment: 'china-declaration-form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/onboarding_forms/china/chinaconsent/chinaconsent.module#ChinaconsentPageModule', name: 'ChinaconsentPage', segment: 'chinaconsent', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/onboarding_forms/china/chinadeclaration/chinadeclaration.module#ChinadeclarationPageModule', name: 'ChinadeclarationPage', segment: 'chinadeclaration', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/onboarding_forms/china/chinaemergencycontact/chinaemergencycontact.module#ChinaemergencycontactPageModule', name: 'ChinaemergencycontactPage', segment: 'chinaemergencycontact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/onboarding_forms/common_folder/declarationotp/declarationotp.module#DeclarationotpPageModule', name: 'DeclarationotpPage', segment: 'declarationotp', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/onboarding_forms/common_folder/company-policy/company-policy.module#CompanyPolicyPageModule', name: 'CompanyPolicyPage', segment: 'company-policy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/onboarding_forms/common_folder/globalpolicydetail/globalpolicydetail.module#GlobalpolicydetailPageModule', name: 'GlobalpolicydetailPage', segment: 'globalpolicydetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/onboarding_forms/common_folder/globalpolicylist/globalpolicylist.module#GlobalpolicylistPageModule', name: 'GlobalpolicylistPage', segment: 'globalpolicylist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/onboarding_forms/common_folder/policy-declaration/policy-declaration.module#PolicyDeclarationPageModule', name: 'PolicyDeclarationPage', segment: 'policy-declaration', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/onboarding_forms/India/basic-details/basic-details.module#BasicDetailsPageModule', name: 'BasicDetailsPage', segment: 'basic-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/onboarding_forms/India/declaration-mediclaim/declaration-mediclaim.module#DeclarationMediclaimPageModule', name: 'DeclarationMediclaimPage', segment: 'declaration-mediclaim', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/onboarding_forms/India/epf-nomination/epf-nomination.module#EpfNominationPageModule', name: 'EpfNominationPage', segment: 'epf-nomination', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/onboarding_forms/India/family-details/family-details.module#FamilyandemergencycontactPageModule', name: 'FamilyDetailsPage', segment: 'family-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/onboarding_forms/India/form-eleven/form-eleven.module#FormElevenPageModule', name: 'FormElevenPage', segment: 'form-eleven', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/onboarding_forms/India/gdp-rconsent/gdp-rconsent.module#GdpRconsentPageModule', name: 'GdpRconsentPage', segment: 'gdp-rconsent', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/onboarding_forms/India/genral-information/genral-information.module#GenralInformationPageModule', name: 'GenralInformationPage', segment: 'genral-information', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/onboarding_forms/India/india-emg-contact/india-emg-contact.module#IndiaEmgContactPageModule', name: 'IndiaEmgContactPage', segment: 'india-emg-contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/onboarding_forms/India/india-insurance/india-insurance.module#IndiaInsurancePageModule', name: 'IndiaInsurancePage', segment: 'india-insurance', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/onboarding_forms/India/joineedeclaration/joineedeclaration.module#JoineedeclarationPageModule', name: 'JoineedeclarationPage', segment: 'joineedeclaration', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/onboarding_forms/India/nominees/nominees.module#NomineesPageModule', name: 'NomineesPage', segment: 'nominees', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/onboarding_forms/Romania/first-day-instruction/first-day-instruction.module#FirstDayInstructionPageModule', name: 'FirstDayInstructionPage', segment: 'first-day-instruction', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/onboarding_forms/Romania/romania-common/romania-common.module#RomaniaCommonPageModule', name: 'RomaniaCommonPage', segment: 'romania-common', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/onboarding_forms/UK/beneficiaryform/beneficiaryform.module#BeneficiaryformPageModule', name: 'BeneficiaryformPage', segment: 'beneficiaryform', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/onboarding_forms/UK/credit-card/credit-card.module#CreditCardPageModule', name: 'CreditCardPage', segment: 'credit-card', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/onboarding_forms/UK/personal-compliance/personal-compliance.module#PersonalCompliancePageModule', name: 'PersonalCompliancePage', segment: 'personal-compliance', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/onboarding_forms/UK/personaldetails/personaldetails.module#PersonaldetailsPageModule', name: 'PersonaldetailsPage', segment: 'personaldetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/onboarding_forms/UK/revenueandcustom/revenueandcustom.module#RevenueandcustomPageModule', name: 'RevenueandcustomPage', segment: 'revenueandcustom', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/onboarding_forms/US/background-verification-usa/background-verification-usa.module#BackgroundVerificationUSAPageModule', name: 'BackgroundVerificationUSAPage', segment: 'background-verification-usa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/onboarding_forms/US/corporate-orientation-assistence/corporate-orientation-assistence.module#CorporateOrientationAssistencePageModule', name: 'CorporateOrientationAssistencePage', segment: 'corporate-orientation-assistence', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/onboarding_forms/US/evalueserve-self-identification/evalueserve-self-identification.module#EvalueserveSelfIdentificationPageModule', name: 'EvalueserveSelfIdentificationPage', segment: 'evalueserve-self-identification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/onboarding_forms/US/proprietary-information/proprietary-information.module#ProprietaryInformationPageModule', name: 'ProprietaryInformationPage', segment: 'proprietary-information', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/onboarding_forms/US/usaconsent/usaconsent.module#UsaconsentPageModule', name: 'UsaconsentPage', segment: 'usaconsent', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/onboarding_forms/US/usattendancesheet/usattendancesheet.module#UsattendancesheetPageModule', name: 'UsattendancesheetPage', segment: 'usattendancesheet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/onboarding_forms/US/usnewjoineeform/usnewjoineeform.module#UsnewjoineeformPageModule', name: 'UsnewjoineeformPage', segment: 'usnewjoineeform', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/onboarding-dynamic-module-detail/onboarding-dynamic-module-detail.module#OnboardingDynamicModuleDetailPageModule', name: 'OnboardingDynamicModuleDetailPage', segment: 'onboarding-dynamic-module-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/onboarding-dynamic-module-list/onboarding-dynamic-module-list.module#OnboardingDynamicModuleListPageModule', name: 'OnboardingDynamicModuleListPage', segment: 'onboarding-dynamic-module-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/onboarding-forms/onboarding-forms.module#OnboardingFormsPageModule', name: 'OnboardingFormsPage', segment: 'onboarding-forms', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/oprationdetail/oprationdetail.module#OprationdetailPageModule', name: 'OprationdetailPage', segment: 'oprationdetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pansionscheme/pansionscheme.module#PansionschemePageModule', name: 'PansionschemePage', segment: 'pansionscheme', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pendinglist/pendinglist.module#PendinglistPageModule', name: 'PendinglistPage', segment: 'pendinglist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/popover-login/popover-login.module#PopoverLoginPageModule', name: 'PopoverLoginPage', segment: 'popover-login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/preview/preview.module#PreviewPageModule', name: 'PreviewPage', segment: 'preview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/privacypolicy/privacypolicy.module#PrivacypolicyPageModule', name: 'PrivacypolicyPage', segment: 'privacypolicy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile-dos-donts/profile-dos-donts.module#ProfileDosDontsPageModule', name: 'ProfileDosDontsPage', segment: 'profile-dos-donts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile-pic-upload/profile-pic-upload.module#ProfilePicUploadPageModule', name: 'ProfilePicUploadPage', segment: 'profile-pic-upload', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/quiz-complete-status/quiz-complete-status.module#QuizCompleteStatusPageModule', name: 'QuizCompleteStatusPage', segment: 'quiz-complete-status', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/quiz-result/quiz-result.module#QuizResultPageModule', name: 'QuizResultPage', segment: 'quiz-result', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/quizreview/quizreview.module#QuizreviewPageModule', name: 'QuizreviewPage', segment: 'quizreview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/quizsummary/quizsummary.module#QuizsummaryPageModule', name: 'QuizsummaryPage', segment: 'quizsummary', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/samplepassportphoto/samplepassportphoto.module#SamplepassportphotoPageModule', name: 'SamplepassportphotoPage', segment: 'samplepassportphoto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/savingpreferences/savingpreferences.module#SavingpreferencesPageModule', name: 'SavingpreferencesPage', segment: 'savingpreferences', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/show-all-comment/show-all-comment.module#ShowAllCommentPageModule', name: 'ShowAllCommentPage', segment: 'show-all-comment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/silerhallcategory/silerhallcategory.module#SilerhallcategoryPageModule', name: 'SilerhallcategoryPage', segment: 'silerhallcategory', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slide-three-image/slide-three-image.module#SlideThreeImagePageModule', name: 'SlideThreeImagePage', segment: 'slide-three-image', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sodexomealvoucher/sodexomealvoucher.module#SodexomealvoucherPageModule', name: 'SodexomealvoucherPage', segment: 'sodexomealvoucher', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/survey-instruction/survey-instruction.module#SurveyInstructionPageModule', name: 'SurveyInstructionPage', segment: 'survey-instruction', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/surveydetail/surveydetail.module#SurveydetailPageModule', name: 'SurveydetailPage', segment: 'surveydetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/surveylist/surveylist.module#SurveylistPageModule', name: 'SurveylistPage', segment: 'surveylist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/take-mobile-number/take-mobile-number.module#TakeMobileNumberPageModule', name: 'TakeMobileNumberPage', segment: 'take-mobile-number', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tand-cbeforelogin/tand-cbeforelogin.module#TandCbeforeloginPageModule', name: 'TandCbeforeloginPage', segment: 'tand-cbeforelogin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terms-and-conditions/terms-and-conditions.module#TermsAndConditionsPageModule', name: 'TermsAndConditionsPage', segment: 'terms-and-conditions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/testurl/testurl.module#TesturlPageModule', name: 'TesturlPage', segment: 'testurl', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/testsurvey/testsurvey.module#TestsurveyPageModule', name: 'TestsurveyPage', segment: 'testsurvey', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/thought-of-the-day/thought-of-the-day.module#ThoughtOfTheDayPageModule', name: 'ThoughtOfTheDayPage', segment: 'thought-of-the-day', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/travelassitance/travelassitance.module#TravelassitancePageModule', name: 'TravelassitancePage', segment: 'travelassitance', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/updatemobileno/updatemobileno.module#UpdatemobilenoPageModule', name: 'UpdatemobilenoPage', segment: 'updatemobileno', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/walkthrough-screen/walkthrough-screen.module#WalkthroughScreenPageModule', name: 'WalkthroughScreenPage', segment: 'walkthrough-screen', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/urllist/urllist.module#UrllistPageModule', name: 'UrllistPage', segment: 'urllist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcom-onboard/welcom-onboard.module#WelcomOnboardPageModule', name: 'WelcomOnboardPage', segment: 'welcom-onboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome-onboard-details/welcome-onboard-details.module#WelcomeOnboardDetailsPageModule', name: 'WelcomeOnboardDetailsPage', segment: 'welcome-onboard-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome-screen/welcome-screen.module#WelcomeScreenPageModule', name: 'WelcomeScreenPage', segment: 'welcome-screen', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                // Specify ng-circle-progress as an import
                __WEBPACK_IMPORTED_MODULE_15_ng_circle_progress__["a" /* NgCircleProgressModule */].forRoot({
                    radius: 100,
                    outerStrokeWidth: 16,
                    innerStrokeWidth: 8,
                    outerStrokeColor: "#78C000",
                    innerStrokeColor: "#C7E596",
                    animationDuration: 300,
                }),
                __WEBPACK_IMPORTED_MODULE_21_ionic_img_viewer__["b" /* IonicImageViewerModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_clipboard__["a" /* Clipboard */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_diagnostic__["a" /* Diagnostic */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_fcm__["a" /* FCM */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_photo_viewer__["a" /* PhotoViewer */],
                __WEBPACK_IMPORTED_MODULE_17__providers_api_service_api_service__["a" /* ApiServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_razorpay_razorpay__["a" /* RazorpayProvider */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_image_picker__["a" /* ImagePicker */], __WEBPACK_IMPORTED_MODULE_20__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_27__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_android_permissions__["a" /* AndroidPermissions */], __WEBPACK_IMPORTED_MODULE_23__ionic_native_geolocation__["a" /* Geolocation */]
                // RoundProgressModule
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_service_api_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_device__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_fcm__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_android_permissions__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_angular_components_app_app__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MyApp = /** @class */ (function () {
    function MyApp(platform, app, statusBar, splashScreen, iab, toastCtrl, network, events, androidPermissions, storage, alertCtrl, apiServices, device, fcm, zone) {
        var _this = this;
        this.platform = platform;
        this.app = app;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.iab = iab;
        this.toastCtrl = toastCtrl;
        this.network = network;
        this.events = events;
        this.androidPermissions = androidPermissions;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.apiServices = apiServices;
        this.device = device;
        this.fcm = fcm;
        this.zone = zone;
        this.showDummyScreen = true;
        this.appVersion = 4;
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
        this.getTokenTry = 1;
        this.initializeApp();
        // showmenu
        // if(this.usertype=='' || this.usertype==undefined){
        //   this.storage.get('showOnBoard').then((data)=>{
        //     this.usertype=data;
        //     console.log('showOnBoard value is111==',data );
        //     if(data=='Employee'){
        //       this.sidemenu(this.usertype);
        //     }
        //  if(data=='Guest'){
        //   this.sidemenu(this.usertype);
        //     }
        //   });
        // }
        this.events.subscribe('profile_url', function (data) {
            _this.profileUrl = data;
        });
        // if(this.usertype=='' || this.usertype==undefined){
        //   this.storage.get('showOnBoard').then((data)=>{
        //     this.usertype=data;
        //     console.log('showOnBoard value is111==',data );
        //     if(data=='Employee'){
        //       this.storage.get('country_id').then(data=>{
        //         this.ctry_id=data;
        //         console.log(' country_id==888881111 ',this.ctry_id);
        //         this.sidemenu(this.usertype,this.ctry_id);
        //       });
        //     }
        //  if(data=='Guest'){
        //   this.storage.get('country_id').then(data=>{
        //     this.ctry_id=data;
        //     console.log(' country_id==88888 ',this.ctry_id);
        //     this.sidemenu(this.usertype,this.ctry_id);
        //   });
        //     }
        //   });
        // }
        // this.events.subscribe('showsidemenu', (data) =>{
        //   console.log('showsidemenu', data);
        //   this.usertype=data;
        //   if(this.usertype=='' || this.usertype==undefined){
        //   this.storage.get('showOnBoard').then((data)=>{
        //     this.usertype=data;
        //     console.log('showOnBoard value is111==',data );
        //     if(data=='Employee'){
        //       this.sidemenu(this.usertype);
        //     }
        //  if(data=='Guest'){
        //   this.sidemenu(this.usertype);
        //     }
        //   });
        // }
        // else{
        //   this.sidemenu(this.usertype);
        // }
        // });
        this.storage.get('showOnBoard').then(function (data) {
            console.log('showOnBoard value is111==', data);
            _this.employeeType = data;
        });
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
            console.log(' employeeId== ', _this.employeeId);
        });
        this.storage.get('login_token').then(function (data) {
            _this.login_token = data;
        });
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
        });
        this.events.subscribe('showsidemenu', function (data, ctry_id) {
            console.log('showsidemenu', data);
            console.log('cty_id', ctry_id);
            _this.ctry_id = ctry_id;
            console.log('this.ctry_id', _this.ctry_id);
            _this.usertype = data;
            if (_this.usertype == '' || _this.usertype == undefined) {
                _this.storage.get('showOnBoard').then(function (data) {
                    _this.usertype = data;
                    console.log('showOnBoard value is111==', data);
                    if (data == 'Employee') {
                        _this.sidemenu(_this.usertype, _this.ctry_id);
                    }
                    if (data == 'Guest') {
                        _this.sidemenu(_this.usertype, _this.ctry_id);
                    }
                });
            }
            else {
                _this.sidemenu(_this.usertype, _this.ctry_id);
            }
        });
    }
    MyApp.prototype.takePermission = function () {
        var _this = this;
        if (this.platform.is('cordova')) {
            this.platform.ready().then(function () {
                _this.androidPermissions.requestPermissions([
                    _this.androidPermissions.PERMISSION.CAMERA,
                    // androidPermissions.PERMISSION.CALL_PHONE,
                    // androidPermissions.PERMISSION.GET_ACCOUNTS,
                    _this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE,
                    _this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE
                ]);
            });
        }
    };
    MyApp.prototype.sidemenu = function (usertype, ctry_id) {
        this.ctry_id = ctry_id;
        // alert(usertype)
        if (usertype == 'Guest') {
            this.menuItems = [
                {
                    name: 'Home',
                    page: 'TabsPage',
                    icon: 'assets/imgs/sidemenuhome.png',
                    id: 1,
                    type: 'img'
                },
                {
                    name: 'Contact Us',
                    page: 'ContactusPage',
                    icon: 'assets/imgs/hambergerIcons/icons_0001_phone.png',
                    id: 3,
                    type: 'img'
                },
                {
                    name: 'Update Mobile Number',
                    page: 'JoineeupdatenumberPage',
                    icon: 'assets/imgs/phonehamberger.png'
                },
                {
                    name: 'FAQs',
                    page: 'FaqPage',
                    icon: 'assets/imgs/FAQs.png',
                    id: 4,
                    type: 'img'
                },
                {
                    name: 'Logout',
                    page: 'TabsPage',
                    icon: '',
                    id: 5,
                    type: 'icon',
                    iconName: 'log-out'
                },
            ];
            console.log("side", this.menuItems);
        }
        if (usertype == 'Employee') {
            // this.storage.get('country_id').then(data=>{
            //   this.ctry_id=data;
            //   console.log(' country_id111== ',this.ctry_id);
            if (this.ctry_id == '2') {
                this.menuItems = [
                    {
                        name: 'Home',
                        page: 'TabsPage',
                        icon: 'assets/imgs/sidemenuhome.png',
                        id: 1,
                        type: 'img'
                    },
                    {
                        name: 'My Profile',
                        page: 'ProfilePage',
                        icon: 'assets/imgs/profile.png',
                        id: 3,
                        type: 'img'
                    },
                    {
                        name: 'My Points',
                        page: 'MyrewardsPage',
                        icon: 'assets/imgs/hambergerIcons/icons_0009_points.png',
                        id: 3,
                        type: 'img'
                    },
                    {
                        name: 'My Order',
                        page: 'MyvouchersPage',
                        icon: 'assets/imgs/hambergerIcons/icons_0000_voucher.png',
                        id: 3,
                        type: 'img'
                    },
                    {
                        name: 'My Awards',
                        page: 'MyawardsPage',
                        icon: 'assets/imgs/hambergerIcons/icons_0007_trophy.png',
                        id: 3,
                        type: 'img'
                    },
                    {
                        name: 'My Certificates',
                        page: 'MycertificatesPage',
                        icon: 'assets/imgs/hambergerIcons/icons_0002_My-certificates_icon.png',
                        id: 3,
                        type: 'img'
                    },
                    {
                        name: 'Terms of Use',
                        page: 'PrivacypolicyPage',
                        icon: 'assets/imgs/hambergerIcons/icons_0003_images-copy-2.png',
                        id: 3,
                        type: 'img'
                    },
                    {
                        name: 'Contact Us',
                        page: 'ContactusPage',
                        icon: 'assets/imgs/hambergerIcons/icons_0001_phone.png',
                        id: 3,
                        type: 'img'
                    },
                    {
                        name: 'Logout',
                        page: '',
                        icon: '',
                        id: 5,
                        type: 'icon',
                        iconName: 'log-out'
                    }
                ];
            }
            else {
                this.menuItems = [
                    {
                        name: 'Home',
                        page: 'TabsPage',
                        icon: 'assets/imgs/sidemenuhome.png',
                        id: 1,
                        type: 'img'
                    },
                    {
                        name: 'Profile',
                        page: 'ProfilePage',
                        icon: 'assets/imgs/profile.png',
                        id: 3,
                        type: 'img'
                    },
                    // {
                    //   name: 'My Points',
                    //   page: 'MyrewardsPage',
                    //   icon:'assets/imgs/hambergerIcons/icons_0009_points.png',
                    //   id:3,
                    //   type:'img'
                    // },
                    {
                        name: 'My Awards',
                        page: 'MyawardsPage',
                        icon: 'assets/imgs/hambergerIcons/icons_0007_trophy.png',
                        id: 3,
                        type: 'img'
                    },
                    {
                        name: 'My Certificates',
                        page: 'MycertificatesPage',
                        icon: 'assets/imgs/hambergerIcons/icons_0002_My-certificates_icon.png',
                        id: 3,
                        type: 'img'
                    },
                    {
                        name: 'Terms of Use',
                        page: 'PrivacypolicyPage',
                        icon: 'assets/imgs/hambergerIcons/icons_0003_images-copy-2.png',
                        id: 3,
                        type: 'img'
                    },
                    {
                        name: 'Contact Us',
                        page: 'ContactusPage',
                        icon: 'assets/imgs/hambergerIcons/icons_0001_phone.png',
                        id: 3,
                        type: 'img'
                    },
                    {
                        name: 'Logout',
                        page: '',
                        icon: '',
                        id: 5,
                        type: 'icon',
                        iconName: 'log-out'
                    }
                ];
            }
            // });
        }
    };
    MyApp.prototype.getPushToken = function () {
        var _this = this;
        var self = this;
        this.fcm.subscribeToTopic('REACH');
        this.fcm.getToken().then(function (token) {
            // alert(token);
            console.log('get token==', token);
            if (token == '' || token == undefined) {
                if (_this.getTokenTry <= 2) {
                    _this.getPushToken();
                    _this.getTokenTry = _this.getTokenTry + 1;
                }
            }
            else {
                // alert('get token=='+ token);
                _this.storage.set('pushNotificationToken', token);
                // alert(token);
            }
        });
        this.fcm.onNotification().subscribe(function (data) {
            console.log("Received in pushdata", data);
            if (data.wasTapped) {
                console.log("Received in background", data);
                self.checkcondition(data);
            }
            else {
                var confirmAlert = _this.alertCtrl.create({
                    title: 'New Notification',
                    message: data.body,
                    buttons: [{
                            text: 'Ignore',
                            role: 'cancel'
                        }, {
                            text: 'View',
                            handler: function () {
                                self.checkcondition(data);
                            }
                        }]
                });
                confirmAlert.present();
                console.log("Received in foreground");
            }
            ;
        });
        this.fcm.onTokenRefresh().subscribe(function (token) {
            console.log('onTokenRefresh==', token);
            console.log('get token==', token);
            if (token == '' || token == undefined) {
                if (_this.getTokenTry <= 2) {
                    _this.getPushToken();
                    _this.getTokenTry = _this.getTokenTry + 1;
                }
            }
            else {
                // alert('onTokenRefresh token=='+ token);
                _this.storage.set('pushNotificationToken', token);
            }
        });
    };
    MyApp.prototype.checkcondition = function (data) {
        console.log('checkdata==', data);
        // alert('data id == '+data.id);
        // alert(data.flag);
        var self = this;
        if (data.flag == '1') {
            // alert(data.id);
            console.log('checkdata==123', data.id);
            self.nav.push('EmpnewsdetailPage', { 'data': data, 'pushkey': 1 });
        }
        else if (data.flag == '9') {
            self.nav.push('LeadershiptalkdetailPage', { 'data': data, 'pushkey': 1 });
        }
        else if (data.flag == '38') {
            self.nav.push('HomeawardsdetailPage', { 'nominationData': data, 'pushkey': 1 });
        }
        else if (data.flag == '7') {
            self.nav.push('NoticeDetailsPage', { 'data': data, 'pushkey': 1 });
        }
        else if (data.flag == '12') {
            self.nav.push('WelcomeOnboardDetailsPage', { 'data': data, 'pushkey': 1 });
        }
        else if (data.flag == '5') {
            self.nav.push('ThoughtOfTheDayPage');
        }
        else if (data.flag == '24') {
            self.nav.push('HealthAndWellnessDetailsPage', { 'data': data, 'pushkey': 1 });
        }
        else if (data.flag == '10') {
            self.nav.push('BadgeBoardPage');
        }
        else if (data.flag == '11') {
            self.nav.push('AlbumImageSliderPage', { 'data': data, 'pushkey': 1 });
        }
        else if (data.flag == '26') {
            self.nav.push('TestsurveyPage', { 'allData': data, 'pushkey': 1 });
        }
        else if (data.flag == '41') {
            self.nav.push('ContestdetailPage', { 'data': data, 'pushkey': 1 });
        }
        else if (data.flag == '44') {
            self.nav.push('MyrewardsPage');
        }
        else if (data.flag == '51') {
            console.log("data.other_id", data.other_id);
            this.otherid = (data.other_id == undefined) ? 0 : 1;
            console.log("data.this.otherid", this.otherid);
            if (this.otherid == 1) {
                console.log("data.PhotowallImageSliderPage3", data.other_id);
                self.nav.push('PhotowallImageSliderPage', { 'data': data, 'pushkey': 1 });
            }
            if (this.otherid == 0) {
                console.log("data.PhotowallAllImagesPage4", data.other_id);
                self.nav.push('PhotowallAllImagesPage', { 'data': data, 'pushkey': 1 });
            }
        }
        else if (data.flag == '31') {
            self.nav.push('CommunityDetailsPage', { 'data': data, 'pushkey': 1 });
        }
        else {
            // self.nav.setRoot('NewHomePage'); 
            this.app.getRootNav().setRoot('TabsPage');
        }
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            if (_this.platform.is('cordova')) {
                _this.deviceUuid = _this.device.uuid;
                _this.deviceId = _this.deviceUuid == null ? "browser" : _this.deviceUuid;
                if (_this.deviceId == "browser") {
                    _this.deviceUuid = _this.device.uuid;
                    _this.deviceId = _this.deviceUuid == null ? "browser" : _this.deviceUuid;
                    if (_this.deviceId == "browser") {
                        _this.deviceUuid = _this.device.uuid;
                        _this.deviceId = _this.deviceUuid == null ? "browser" : _this.deviceUuid;
                    }
                    else {
                        _this.storage.set('deviceId', _this.deviceId);
                    }
                }
                else {
                    _this.storage.set('deviceId', _this.deviceId);
                }
                _this.getPushToken();
            }
            else {
                _this.storage.set('deviceId', 'browser');
            }
            _this.optionalUpdate();
            // this.checkNetwork();
            // this.network.onDisconnect().subscribe(() => {
            //   console.log('you are offline');
            //   this.apiMessage('You are not connected with Internet');
            // });
            // this.network.onConnect().subscribe(()=> {
            //   console.log('you are online');
            //   this.apiMessage('Internet connected');
            // });
            _this.statusBar.overlaysWebView(false);
            _this.statusBar.backgroundColorByHexString('#3e203a');
            _this.takePermission();
            //internet detection code start
            _this.connectSubscription = _this.network.onConnect().subscribe(function () {
                console.log('network connected!');
                // this.isAvailable =true;
                _this.zone.run(function () {
                    setTimeout(function () {
                        _this.isAvailable = true;
                    }, 0);
                });
            });
            _this.disconnectSubscription = _this.network.onDisconnect().subscribe(function () {
                console.log('network onDisconnect!');
                _this.zone.run(function () {
                    setTimeout(function () {
                        _this.isAvailable = false;
                    }, 0);
                });
            });
            //internet detection code end
        });
    };
    // openPage(page) {
    //   if(page.page=='TabsPage'){
    //     this.nav.setRoot(page.page);
    //   }
    //   else{
    //     this.nav.push(page.page);
    //   }
    // }
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (page.id == 5) {
            this.signoutConfirmation();
        }
        else if (page.id == 10) {
            this.nav.setRoot(page.page);
            // this.events.publish('keyforsignout', 1);
        }
        else {
            if (page.page == 'TabsPage') {
                this.nav.setRoot(page.page);
            }
            else {
                if (page.page == "ProfilePage") {
                    // let alert = this.alertCtrl.create({
                    //   // title: 'SIGNOUT!',
                    //   message: 'Employee to  redirect at AX profile page',
                    //   enableBackdropDismiss: false,
                    //   buttons: [
                    //     {
                    //       text: 'Ok',
                    //       handler: () => {
                    //       // this.nav.push('QuizResultPage');
                    //         // this.gothroughalertnextques();
                    //       }
                    //     },
                    //   ]
                    // });
                    // alert.present();
                    this.analyticApi();
                    var browser = this.iab.create(this.profileUrl, '_blank', this.options);
                }
                else {
                    this.nav.push(page.page);
                }
                // this.nav.push(page.page);
            }
        }
    };
    MyApp.prototype.analyticApi = function () {
        var _this = this;
        this.storage.get('employee_type').then(function (user) {
            console.log('thoughtOftheDayApi value is111==', user);
            var user_Type = user;
            _this.storage.get('deviceId').then(function (data) {
                _this.deviceId = data;
                var apiKey = {
                    "client_id": _this.apiServices.clientId,
                    "employee_id": _this.employeeId,
                    "device": _this.apiServices.device,
                    "device_id": _this.deviceId,
                    "app_version": _this.apiServices.appVersion,
                    "track_flag": "47",
                    "type": "detail",
                    "user_type": user_Type,
                };
                _this.apiServices.analyticApi(apiKey, _this.login_token).subscribe(function (res) {
                    console.log(res);
                });
            });
        });
    };
    // signoutConfirmation(){
    //   let alert = this.alertCtrl.create({
    //     // title: 'Confirm purchase',
    //     message: 'Are you sure to Logout from this app?',
    //     buttons: [
    //       {
    //         text: 'No',
    //         role: 'cancel',
    //         handler: () => {
    //           console.log('Cancel clicked');
    //         }
    //       },
    //       {
    //         text: 'Yes',
    //         handler: () => {
    //           console.log('Buy clicked');
    //           this.signoutUserFun();
    //         }
    //       }
    //     ]
    //   });
    //   alert.present();
    // }
    MyApp.prototype.signoutConfirmation = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            // title: 'Confirm purchase',
            message: 'Are you sure to Logout from this app?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Buy clicked');
                        _this.removeMyStorage();
                        //   this.storage.get('showOnBoard').then((data) => {
                        //     console.log('showOnBoard value is111==', data);
                        //     this.employeeType = data;
                        //     if(this.employeeType=='Employee'){
                        //       this.removeMyStorage();
                        //     }
                        //  if(this.employeeType=='Guest'){
                        //   this.removeMyStorage();
                        //     }
                        //   });
                    }
                }
            ]
        });
        alert.present();
    };
    // signoutUserFun(){
    //   this.storage.get('showOnBoard').then((data) => {
    //     console.log('showOnBoard value is111==', data);
    //     this.employeeType = data;
    //   })
    //   this.storage.get('employeeId').then(data => {
    //     this.employeeId = data;
    //     console.log(' employeeId== ', this.employeeId);
    //   });
    //   this.storage.get('login_token').then((data) => {
    //     this.login_token = data;
    //   })
    //   this.storage.get('deviceId').then(data => {
    //     this.deviceId = data;
    //     let apiKey = {
    //       "client_id": this.apiServices.clientId,
    //       "employee_id": this.employeeId,
    //       "device": this.apiServices.device,
    //       "device_id": this.deviceId,
    //       "app_version": this.apiServices.appVersion,
    //       "employee_type": this.employeeType
    //     };
    //     this.apiServices.userSignoutApi(apiKey, this.login_token)
    //       .subscribe((res) => {
    //         if(res.success==1){
    //           // this.storage.clear();
    //           this.storage.remove('welcome_aboard_applicable').then(res=>{
    //             console.log('res=', res);
    //           });
    //           this.storage.remove('joining_status').then(res=>{
    //             console.log('res=', res);
    //           });
    //           this.storage.remove('showOnBoard').then(res=>{
    //             console.log('res=', res);
    //           });
    //           this.storage.remove('login_token').then(res=>{
    //             console.log('res=', res);
    //           });
    //           this.storage.remove('employee_type').then(res=>{
    //             console.log('res=', res);
    //           });
    //           this.storage.remove('Response').then(res=>{
    //             console.log('res=', res);
    //           });
    //           this.storage.remove('email_id').then(res=>{
    //             console.log('res=', res);
    //           });
    //           this.storage.remove('employeeId').then(res=>{
    //             console.log('res=', res);
    //           });
    //           this.storage.remove('SessionId').then(res=>{
    //             console.log('res=', res);
    //           });
    //           this.storage.remove('Response').then(res=>{
    //             console.log('res=', res);
    //           });
    //           // this.storage.remove('SessionId').then(res=>{});
    //           this.apiMessage(res.message);
    //           // this.rootPage='ChooseUserPage';
    //           this.nav.setRoot('ChooseUserPage');
    //         }else{
    //           this.apiMessage(res.message);
    //         }
    //       })
    //     })
    // }
    MyApp.prototype.signoutUserFun = function () {
        var _this = this;
        this.storage.get('showOnBoard').then(function (data) {
            console.log('showOnBoard value is111==', data);
            _this.employeeType = data;
        });
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
            console.log(' employeeId== ', _this.employeeId);
        });
        this.storage.get('login_token').then(function (data) {
            _this.login_token = data;
        });
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
        });
        this.storage.get('showOnBoard').then(function (data) {
            console.log('showOnBoard value is111==', data);
            _this.employeeType = data;
            if (_this.employeeType == "Employee" || _this.employeeType == "employee") {
                var browser_1 = _this.iab.create("https://benepik.in/reach/samladfslogin.php?requestType=slo&deviceType=app&device=" + _this.apiServices.device + "&device_id=" + _this.deviceId + "&employee_id=" + _this.employeeId + "&login_token=" + _this.login_token + "", '_blank', _this.options);
                browser_1.on('loadstop').subscribe(function (event) {
                    console.log("LOG: API Response== ", event);
                    console.log(event.url);
                    browser_1.executeScript({ code: 'document.getElementById("myptag").innerText' }).then(function (html) {
                        console.log('html==', html);
                        var xyz = JSON.parse(html);
                        console.log('parse html==', xyz);
                        if (xyz.success == 1) {
                            // alert('go to home page');
                            browser_1.close();
                            _this.storage.remove('welcome_aboard_applicable').then(function (res) {
                                console.log('res=', res);
                            });
                            _this.storage.remove('joining_status').then(function (res) {
                                console.log('res=', res);
                            });
                            _this.storage.remove('showOnBoard').then(function (res) {
                                console.log('res=', res);
                            });
                            _this.storage.remove('login_token').then(function (res) {
                                console.log('res=', res);
                            });
                            _this.storage.remove('employee_type').then(function (res) {
                                console.log('res=', res);
                            });
                            _this.storage.remove('Response').then(function (res) {
                                console.log('res=', res);
                            });
                            _this.storage.remove('email_id').then(function (res) {
                                console.log('res=', res);
                            });
                            _this.storage.remove('employeeId').then(function (res) {
                                console.log('res=', res);
                            });
                            _this.storage.remove('SessionId').then(function (res) {
                                console.log('res=', res);
                            });
                            _this.storage.remove('Response').then(function (res) {
                                console.log('res=', res);
                            });
                            _this.nav.setRoot('ChooseUserPage');
                        }
                        else if (xyz.success == 0) {
                            // alert('go to login page');
                            browser_1.close();
                            var alert_1 = _this.alertCtrl.create({
                                title: 'Alert',
                                subTitle: xyz.message,
                                buttons: [{
                                        text: 'OK',
                                        role: 'cancel',
                                        handler: function () {
                                            console.log('Cancel clicked');
                                        }
                                    }]
                            });
                            alert_1.present();
                            _this.removeMyStorage();
                        }
                    }, function (err) {
                        console.log('html err==', err);
                    });
                });
                browser_1.on('exit').subscribe(function (event) {
                    browser_1.executeScript({ code: 'document.getElementById("myptag").innerText' }).then(function (html) {
                        console.log('exit html==', html);
                    });
                }, function (err) {
                    // alert("InAppBrowser exit Event Error: " + err);
                });
            }
            else {
                _this.removeMyStorage();
            }
        });
    };
    MyApp.prototype.removeMyStorage = function () {
        var _this = this;
        this.storage.get('showOnBoard').then(function (data) {
            console.log('showOnBoard value is111==', data);
            _this.employeeType = data;
        });
        this.storage.get('employeeId').then(function (data) {
            _this.employeeId = data;
            console.log(' employeeId== ', _this.employeeId);
        });
        this.storage.get('login_token').then(function (data) {
            _this.login_token = data;
        });
        this.storage.get('deviceId').then(function (data) {
            _this.deviceId = data;
            var apiKey = {
                "client_id": _this.apiServices.clientId,
                "employee_id": _this.employeeId,
                "device": _this.apiServices.device,
                "device_id": _this.deviceId,
                "app_version": _this.apiServices.appVersion,
                "employee_type": _this.employeeType
            };
            _this.apiServices.userSignoutApi(apiKey, _this.login_token)
                .subscribe(function (res) {
                if (res.success == 1) {
                    // this.storage.clear();
                    _this.storage.remove('welcome_aboard_applicable').then(function (res) {
                        console.log('res=', res);
                    });
                    _this.storage.remove('joining_status').then(function (res) {
                        console.log('res=', res);
                    });
                    _this.storage.remove('showOnBoard').then(function (res) {
                        console.log('res=', res);
                    });
                    _this.storage.remove('login_token').then(function (res) {
                        console.log('res=', res);
                    });
                    _this.storage.remove('employee_type').then(function (res) {
                        console.log('res=', res);
                    });
                    _this.storage.remove('Response').then(function (res) {
                        console.log('res=', res);
                    });
                    _this.storage.remove('email_id').then(function (res) {
                        console.log('res=', res);
                    });
                    _this.storage.remove('employeeId').then(function (res) {
                        console.log('res=', res);
                    });
                    _this.storage.remove('SessionId').then(function (res) {
                        console.log('res=', res);
                    });
                    _this.storage.remove('Response').then(function (res) {
                        console.log('res=', res);
                    });
                    // this.storage.remove('SessionId').then(res=>{});
                    _this.apiMessage(res.message);
                    // this.rootPage='ChooseUserPage';
                    _this.nav.setRoot('ChooseUserPage');
                }
                else {
                    _this.apiMessage(res.message);
                }
            });
        });
    };
    MyApp.prototype.optionalUpdate = function () {
        var _this = this;
        this.storage.get('welcome_aboard_applicable').then(function (data) {
            console.log('employeeId==', data);
            _this.welcome_aboard_applicable = data;
        });
        var apiKey = {
            "client_id": 'CO-31'
        };
        this.apiServices.maintainance(apiKey).then(function (result) {
            console.log('maintainance response== ', result);
            _this.optnaldata = result;
            _this.allData = _this.optnaldata.data;
            if (_this.optnaldata.success == 1) {
                if (parseInt(_this.allData.is_down) == 1) {
                    _this.nav.setRoot('MaintainancePage');
                    _this.showDummyScreen = false;
                }
                else {
                    _this.storage.get('welcome_aboard_applicable').then(function (data) {
                        console.log('employeeId==', data);
                        _this.welcome_aboard_applicable = data;
                    });
                    _this.storage.get('employeeId').then(function (data) {
                        console.log('employeeId==', data);
                        if (data != null) {
                            _this.showDummyScreen = false;
                            _this.storage.get('showOnBoard').then(function (data) {
                                _this.emptype = data;
                                if (_this.emptype == 'Employee') {
                                    // this.rootPage='TabsPage';
                                    _this.storage.get('tncView').then(function (tnc_data) {
                                        if (tnc_data == 1) {
                                            //t&c already accepted
                                            _this.storage.get('welcome_aboard_applicable').then(function (welOnBoard_data) {
                                                if (welOnBoard_data == 1) {
                                                    //welcom onboard is not submitting therefor go to welcome on-board page
                                                    // this.navCtrl.push('AplicantwelcomePage');
                                                    _this.rootPage = 'AplicantwelcomePage';
                                                }
                                                else {
                                                    // this.rootPage='CatgoriesPage';profile_pic_upload
                                                    _this.storage.get('profile_pic_upload').then(function (data) {
                                                        _this.profile_pic_upload = data;
                                                        console.log(' deviceId== ', _this.user_image);
                                                        if (_this.profile_pic_upload == '0') {
                                                            _this.rootPage = 'FirstimguploadPage';
                                                        }
                                                        else {
                                                            //welcom onboard is already submitted
                                                            _this.storage.get('community_tag_show').then(function (commTag) {
                                                                if (commTag == 1) {
                                                                    // go to community tag select page
                                                                    _this.rootPage = 'CatgoriesPage';
                                                                }
                                                                else {
                                                                    //community tag has selected
                                                                    _this.rootPage = 'TabsPage';
                                                                    // this.rootPage='UpdatemobilenoPage';
                                                                }
                                                            });
                                                            // }
                                                        }
                                                    });
                                                    //  //welcom onboard is already submitted
                                                    //  this.storage.get('community_tag_show').then(commTag => {
                                                    //   if(commTag==1){
                                                    //     this.rootPage='CatgoriesPage';
                                                    //   }else{
                                                    //     this.rootPage='TabsPage';
                                                    //   }
                                                    //  });
                                                }
                                            });
                                        }
                                        else {
                                            //go to t&c page
                                            _this.rootPage = 'TermsAndConditionsPage';
                                        }
                                    });
                                }
                                else {
                                    _this.showDummyScreen = false;
                                    _this.storage.get('tncView').then(function (data) {
                                        console.log("applicant 1 key", data);
                                        if (data != 1) {
                                            _this.rootPage = 'TermsAndConditionsPage';
                                        }
                                        else {
                                            _this.storage.get('welcome_aboard_applicable').then(function (data) {
                                                console.log('employeeId==', data);
                                                _this.welcome_aboard_applicable = data;
                                                if (_this.welcome_aboard_applicable == 1) {
                                                    _this.rootPage = 'AplicantwelcomePage';
                                                    // this.rootPage='SlideThreeImagePage'
                                                    _this.showDummyScreen = false;
                                                }
                                                else {
                                                    _this.storage.get('walkthrough').then(function (data) {
                                                        console.log('employeeId==', data);
                                                        _this.walkthrough = data;
                                                        if (_this.walkthrough == '0') {
                                                            // this.navCtrl.setRoot('WalkthroughScreenPage');
                                                            _this.rootPage = 'WalkthroughScreenPage';
                                                        }
                                                        else {
                                                            // this.navCtrl.setRoot('TabsPage');
                                                            _this.rootPage = 'TabsPage';
                                                        }
                                                    });
                                                    // this.rootPage='JoineequizquestionPage';
                                                    // this.rootPage='TabsPage';
                                                    _this.showDummyScreen = false;
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                        else {
                            _this.storage.get('ontanc').then(function (data) {
                                console.log('employeeId==', data);
                                // this.welcome_aboard_applicable=data;
                                if (data == 1) {
                                    _this.rootPage = 'ChooseUserPage';
                                }
                                else {
                                    _this.rootPage = 'SlideThreeImagePage';
                                }
                            });
                            _this.showDummyScreen = false;
                        }
                    }, function (error) { console.log('app component secure storage== ', error); });
                }
            }
        }, function (err) {
            console.log('optionalUpdate err== ', err);
        });
    };
    MyApp.prototype.apiMessage = function (message) {
        this.toastMessage = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        this.toastMessage.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/app/app.html"*/'<ion-menu side="left" type="push" [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let item of menuItems" (click)="openPage(item)">\n        <ion-row>\n            <ion-col col-auto>\n                <!-- <img class="appIconCss" src="{{item.icon}}" />  -->\n\n                <div *ngIf="item?.type==\'icon\'"> <ion-icon name="{{item?.iconName}}"style="color:gray"></ion-icon></div>\n                <div *ngIf="item?.type!=\'icon\'"><img class="appIconCss" src="{{item.icon}}" /> </div>\n              </ion-col>\n              <ion-col>\n                  <p class="appsendmessagecss" (tap)="openPage(item)">{{ item.name }}</p>\n              </ion-col>\n        </ion-row>\n      </button>\n    </ion-list>\n    <!-- <div class="sidemenu_clientLogoDIV"><img src="../assets/imgs/logologin.png" class="benepikCopyRight"/></div> -->\n  </ion-content>\n\n</ion-menu>\n\n<table *ngIf="showDummyScreen==true" id="wrapper">\n    <tr>\n      <td> <img src="assets/imgs/clientLogo.png"class="dummyScreenIcon2"></td>\n    </tr>\n  </table>\n<p *ngIf="showDummyScreen==true" class="dummyScreenWaitText">Please wait, your data is preparing...</p>\n\n\n<div *ngIf="isAvailable==false">\n    <div class="trasparentNetworkDIV" ion-fixed></div>\n     <p  ion-fixed class="networkText">You are not connected with internet. Please Check your network and try again.</p>\n    </div>\n    \n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage"   #content swipeBackEnabled="false"></ion-nav>\n<!-- <ion-nav [root]="rootPage" (click)="handleClick($event)"  #content swipeBackEnabled="false"></ion-nav> -->'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Platform */], __WEBPACK_IMPORTED_MODULE_11_ionic_angular_components_app_app__["a" /* App */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ToastController */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_android_permissions__["a" /* AndroidPermissions */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__providers_api_service_api_service__["a" /* ApiServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_fcm__["a" /* FCM */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_device__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_device__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_razorpay_razorpay__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_dignostic__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_ios_Camera__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_android_Camera__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_diagnostic__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_location__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_gallery__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_fileTransfer__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_imagecontroller__ = __webpack_require__(371);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var ServicesModule = /** @class */ (function () {
    function ServicesModule() {
    }
    ServicesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [],
            imports: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_diagnostic__["a" /* Diagnostic */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_1__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_2__services_device__["a" /* DeviceProvider */],
                __WEBPACK_IMPORTED_MODULE_3__providers_razorpay_razorpay__["a" /* RazorpayProvider */],
                __WEBPACK_IMPORTED_MODULE_4__services_dignostic__["a" /* DignosticProvider */],
                __WEBPACK_IMPORTED_MODULE_6__services_android_Camera__["a" /* AndroidCameraProvider */],
                __WEBPACK_IMPORTED_MODULE_5__services_ios_Camera__["a" /* IosCameraProvider */],
                __WEBPACK_IMPORTED_MODULE_9__services_location__["a" /* LocationtProvider */],
                __WEBPACK_IMPORTED_MODULE_10__services_gallery__["a" /* GalleryProvider */],
                __WEBPACK_IMPORTED_MODULE_11__services_fileTransfer__["a" /* FileTransferProvider */],
                __WEBPACK_IMPORTED_MODULE_12__services_imagecontroller__["a" /* ImagecontrollerProvider */]
            ]
        })
    ], ServicesModule);
    return ServicesModule;
}());

//# sourceMappingURL=service.module.js.map

/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_device__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeviceProvider = /** @class */ (function () {
    function DeviceProvider(_device) {
        this._device = _device;
    }
    DeviceProvider.prototype.getDevicePaltform = function () {
        console.log("1", this._device.platform);
        return this._device.platform;
    };
    DeviceProvider.prototype.getDeviceUUID = function () {
        console.log("2", this._device.uuid);
        return this._device.uuid;
    };
    DeviceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_device__["a" /* Device */]])
    ], DeviceProvider);
    return DeviceProvider;
}());

//# sourceMappingURL=device.js.map

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IosCameraProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Modals_uploadImage__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fileTransfer__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IosCameraProvider = /** @class */ (function () {
    function IosCameraProvider(_camera, _fileTransfer) {
        this._camera = _camera;
        this._fileTransfer = _fileTransfer;
        this.options = {
            quality: 40,
            allowEdit: true,
            saveToPhotoAlbum: false,
            cameraDirection: 1,
            correctOrientation: true,
            destinationType: this._camera.DestinationType.FILE_URI,
            sourceType: this._camera.PictureSourceType.CAMERA,
            encodingType: this._camera.EncodingType.JPEG,
            mediaType: this._camera.MediaType.PICTURE
        };
    }
    IosCameraProvider.prototype.getPicture = function () {
        var _this = this;
        var image = new Promise(function (resolve, reject) {
            _this._camera.getPicture(_this.options).then(function (imagePath) {
                var imageData = new __WEBPACK_IMPORTED_MODULE_2__Modals_uploadImage__["a" /* Image */]();
                imageData.url = imagePath;
                var name = imagePath.split("/");
                imageData.name = name[name.length - 1];
                _this._fileTransfer.getBase64String(imageData.url, imageData.name).then(function (res) {
                    imageData.preview = "data:image/jpeg;base64," + res;
                    resolve(imageData);
                });
                resolve(imageData);
            });
        });
        return image;
    };
    IosCameraProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_3__fileTransfer__["a" /* FileTransferProvider */]])
    ], IosCameraProvider);
    return IosCameraProvider;
}());

//# sourceMappingURL=ios_Camera.js.map

/***/ }),

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AndroidCameraProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Modals_uploadImage__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fileTransfer__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AndroidCameraProvider = /** @class */ (function () {
    function AndroidCameraProvider(_camera, _fileTransfer) {
        this._camera = _camera;
        this._fileTransfer = _fileTransfer;
        this.options = {
            quality: 40,
            allowEdit: true,
            saveToPhotoAlbum: true,
            cameraDirection: 1,
            destinationType: this._camera.DestinationType.FILE_URI,
            encodingType: this._camera.EncodingType.JPEG,
            mediaType: this._camera.MediaType.PICTURE,
        };
    }
    AndroidCameraProvider.prototype.getPicture = function () {
        var _this = this;
        var image = new Promise(function (resolve, reject) {
            _this._camera.getPicture(_this.options).then(function (imagePath) {
                var imageData = new __WEBPACK_IMPORTED_MODULE_2__Modals_uploadImage__["a" /* Image */]();
                imageData.url = imagePath;
                var name = imagePath.split("/");
                imageData.name = name[name.length - 1];
                _this._fileTransfer.getBase64String(imageData.url, imageData.name).then(function (res) {
                    imageData.preview = "data:image/jpeg;base64," + res;
                    resolve(imageData);
                });
                resolve(imageData);
            });
        });
        return image;
    };
    AndroidCameraProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_3__fileTransfer__["a" /* FileTransferProvider */]])
    ], AndroidCameraProvider);
    return AndroidCameraProvider;
}());

//# sourceMappingURL=android_Camera.js.map

/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationtProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dignostic__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__ = __webpack_require__(175);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LocationtProvider = /** @class */ (function () {
    function LocationtProvider(_dignostic, _geolocation, _nativeGeocoder) {
        this._dignostic = _dignostic;
        this._geolocation = _geolocation;
        this._nativeGeocoder = _nativeGeocoder;
    }
    LocationtProvider.prototype.getCurruntPossition = function () {
        var _this = this;
        var location = new Promise(function (resolve, reject) {
            _this._geolocation.getCurrentPosition().then(function (res) {
                var temp;
                temp.latitude = res.coords.latitude;
                temp.longitude = res.coords.longitude;
                _this.getCurrentCity(temp.latitude, temp.longitude).then(function (res) {
                    temp.city = res;
                    resolve(temp);
                }).catch(function (err) {
                    reject(err);
                });
            });
        });
        return location;
    };
    LocationtProvider.prototype.getCurrentCity = function (latitude, longitude) {
        var _this = this;
        var cityName = new Promise(function (resolve, reject) {
            var options = {
                useLocale: true,
                maxResults: 1
            };
            _this._nativeGeocoder.reverseGeocode(latitude, longitude, options).then(function (res) {
                resolve(res[0].locality);
            }).catch(function (err) {
                reject(err);
            });
        });
        return cityName;
    };
    LocationtProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dignostic__["a" /* DignosticProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__["a" /* NativeGeocoder */]])
    ], LocationtProvider);
    return LocationtProvider;
}());

//# sourceMappingURL=location.js.map

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_image_picker__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Modals_uploadImage__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fileTransfer__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GalleryProvider = /** @class */ (function () {
    function GalleryProvider(_imagePicker, _fileTransfer) {
        this._imagePicker = _imagePicker;
        this._fileTransfer = _fileTransfer;
        this.options = {
            quality: 50,
            // outputType: 1,
            maximumImagesCount: 5,
        };
    }
    GalleryProvider.prototype.getPicture = function () {
        var _this = this;
        var image = new Promise(function (resolve, reject) {
            _this._imagePicker.getPictures(_this.options).then(function (imagePath) {
                var allImage = [];
                imagePath.forEach(function (element) {
                    var imageData = new __WEBPACK_IMPORTED_MODULE_2__Modals_uploadImage__["a" /* Image */]();
                    imageData.url = element;
                    var name = element.split("/");
                    imageData.name = name[name.length - 1];
                    _this._fileTransfer.getBase64String(imageData.url, imageData.name).then(function (res) {
                        imageData.preview = "data:image/jpeg;base64," + res;
                        allImage.push(imageData);
                    });
                    allImage.push(imageData);
                });
                resolve(allImage);
            });
        });
        return image;
    };
    GalleryProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_image_picker__["a" /* ImagePicker */], __WEBPACK_IMPORTED_MODULE_3__fileTransfer__["a" /* FileTransferProvider */]])
    ], GalleryProvider);
    return GalleryProvider;
}());

//# sourceMappingURL=gallery.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileTransferProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_file__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FileTransferProvider = /** @class */ (function () {
    function FileTransferProvider(_file, _fileTransfer) {
        this._file = _file;
        this._fileTransfer = _fileTransfer;
    }
    FileTransferProvider.prototype.getBase64String = function (path, file) {
        var _this = this;
        var base64 = new Promise(function (resolve, reject) {
            _this._file.readAsDataURL(path, file).then(function (res) {
                resolve(res);
            });
        });
        return base64;
    };
    FileTransferProvider.prototype.uploadFile = function (url, targetFilePath, options) {
        var _this = this;
        var response = new Promise(function (resolve, reject) {
            var fileTransfer = _this._fileTransfer.create();
            fileTransfer.upload(targetFilePath, url, options).then(function (res) {
                resolve(res);
            });
        });
        return response;
    };
    FileTransferProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__["a" /* FileTransfer */]])
    ], FileTransferProvider);
    return FileTransferProvider;
}());

//# sourceMappingURL=fileTransfer.js.map

/***/ })

},[373]);
//# sourceMappingURL=main.js.map
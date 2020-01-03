webpackJsonp([113],{

/***/ 1054:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstWelcomeAboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Transfer, FileUploadOptions, TransferObject } from '@ionic-native/transfer';
var FirstWelcomeAboardPage = /** @class */ (function () {
    // showCustomActionSheet: boolean;
    // //Variables:
    // exp:boolean;showSubmitButton:boolean=false;
    // // ImageTextBaseURL = this.apiService.ImageTextBaseURL;//"http://52.66.130.250/haier/images/a2z/";
    // base64Image:any;
    // totalexp:any;senior:any;
    // pcompany:any;
    // clientid:any;
    // employeeid:any;
    // pdesignation:any;
    // Highedu:any;
    // food:any;
    // holidaydest:any;
    // loading:any;
    // hobby:any;
    // userImage: any;
    // passimage: any;
    // impData:any;
    // showTemp:boolean = false;
    // userpic:any;
    // checkId:boolean=false;
    // first:any;
    // last:any;
    // name:any;
    // id=0;
    // data1:any;
    // data2:any;
    // exp1:boolean;
    // userImages:any;
    function FirstWelcomeAboardPage(actionSheetCtrl, 
        // private loadingCtrl: LoadingController,
        modalCtrl, 
        // private apiService: ApiServiceProvider,
        // private toastCtrl: ToastController,
        // private imagePicker: ImagePicker,
        // private device: Device,
        // private camera: Camera,
        // private file: File,
        navCtrl, 
        // private pipe: MakeMeLowerPipe,
        navParams) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        //           this.impData= this.navParams.data;
        //           // this.clientid= this.impData.clientid;
        //           // this.employeeid= this.impData.employeeid
        //           console.log('impData:', this.impData);
        //           this.exp=false;
        //           this.exp1=false;
        //           console.log('Exp const val = ', this.exp);
        //           console.log('Exp const val = ', this.exp1);
        // this.storage.get('clientid').then((data) => {  this.clientid = data; });
        // this.storage.get('employeeid').then((data) => {this.employeeid=data; });
        // this.storage.get('userimage').then((val) =>{
        //   if(val!=""){ 
        //     console.log("in iffff of userimage is not null",val)
        //      this.showSubmitButton=true;
        //      this.userpic= val;
        //     }else{
        //       console.log(" userimage is null");
        //       this.showSubmitButton = false;
        //     }
        //   });
        // this.storage.get('firstname').then((val) =>{this.first= val; console.log('Firstame', this.first)});
        // this.storage.get('lastname').then((val) =>{
        //   this.last= val;
        //   this.name= this.first+' '+ this.last;
        // });
    }
    FirstWelcomeAboardPage.prototype.addimage = function () {
        var _this = this;
        var profileModal = this.modalCtrl.create('ProfileDosDontsPage');
        profileModal.onDidDismiss(function (data) {
            console.log(data);
            _this.showActionSheet();
        });
        profileModal.present();
    };
    //Common Loader
    //     commonLoader(){
    //       this.loading= this.loadingCtrl.create({
    //          enableBackdropDismiss:true,
    //          spinner: 'ios-small',
    //          content: 'Loading data...'
    //        });
    //        this.loading.present();
    //      }
    //   //Get CheckBox Value
    //   getVal(ev, val) {
    //     this.checkId=val;
    //     console.log('value== : ', this.checkId);
    //     if(this.checkId==true)
    //     { this.id = 1;}
    //     if(this.checkId==false)
    //     { this.id= 0;}
    //     console.log('id', this.id)
    //     }
    //       //Get CheckBox Value
    //   getVal2(ev, val) {
    //     this.exp=val;
    //     this.exp1=false;
    //     console.log('value2== :', this.exp);
    //     }
    //     getVal3(ev, val)
    //     {
    //       this.exp1=val;
    //       this.exp=false;
    //       console.log('value2== :', this.exp);
    //     }
    //       //Toast Function:
    //   presentToast(APImessage){
    //     let toast = this.toastCtrl.create({
    //       message: APImessage,
    //       duration: 1500,
    //       position: 'top'
    //     });
    //     toast.onDidDismiss(() => {
    //       console.log('Dismissed toast');
    //     });
    //     toast.present();
    //   }
    //     previewFunc(freshervalue,checkval){
    //       console.log("checkval",checkval);
    // if(checkval==undefined || checkval==false){
    //   let message= "Please select the checkbox."
    //            this.presentToast(message);
    // }
    // else{
    // if(freshervalue=='fresher')
    // {
    // this.senior='0';
    // console.log("this.senior",this.senior);
    //   this.totalexp='';
    //   this.pcompany='';
    //   console.log("1223",this.pcompany)
    //   this.pdesignation='';
    //   if( this.Highedu==undefined || this.Highedu=='')
    //   {
    //     this.Highedu='';
    //     console.log("this.Highedu",this.Highedu);
    //   }
    //   if(this.food==undefined || this.food=='')
    //   {
    //     this.food='  this.showCustomActionSheet=true;';
    //     console.log("this.food1",this.food);
    //   }
    //  if(this.holidaydest==undefined || this.holidaydest=='')
    //   {
    //     this.holidaydest='';
    //     console.log("this.holidaydest1",this.holidaydest);
    //   }
    // if( this.hobby==undefined || this.hobby=='')
    //   {
    //     this.hobby='';
    //     console.log("this.hobby1",this.hobby);
    //   }
    //   if(this.showSubmitButton==true){
    //     this.goToPreview();
    //   }else{
    //     let message= "Please upload profile picture."
    //     this.presentToast(message);
    //     this.showSubmitButton==false
    //   }
    // }
    // else{
    //   this.senior='1';
    // if(this.totalexp==null || this.totalexp==undefined || this.totalexp=="" || this.totalexp=='')
    // {
    //   let message= "please fill total experience"
    //            this.presentToast(message);
    // }
    // else if( this.pcompany==null || this.pcompany==undefined || this.pcompany=="" || this.pcompany=='')
    // {
    //   let message= "Please fill previous company"
    //            this.presentToast(message);
    // }
    // else if(this.pdesignation==null || this.pdesignation==undefined || this.pdesignation=="" || this.pdesignation=='')
    // {
    //   let message= "Please fill previous designation"
    //            this.presentToast(message);
    // }
    // else if(this.showSubmitButton!=true){
    //   let message= "Please upload profile picture."
    //   this.presentToast(message);
    // }
    // else{
    //   this.goToPreview();
    // }
    // }
    //     }
    //     }
    FirstWelcomeAboardPage.prototype.goToPreview = function () {
        this.navCtrl.push('PreviewPage');
    };
    //       // if(this.exp==true){
    //       //   this.totalexp = "";
    //       //   this.pcompany = "";
    //       //   this.pdesignation= "";
    //       // }
    //       this.storage.get('clientid').then((data) => {  this.clientid = data; });
    //       this.storage.get('employeeid').then((data) => {this.employeeid=data; 
    //       let user= {
    //         "clientid":this.clientid,
    //         "employeeId":this.employeeid,
    //         "experience":this.totalexp,
    //         "preComp":this.pcompany,
    //         "preDesig":this.pdesignation,
    //         "education":this.Highedu,
    //         "food":this.food,
    //         "holiday":this.holidaydest,
    //         "hobby":this.hobby,
    //         "senior":this.senior
    //       }
    //       console.log('Preview Request:', user);
    //       this.apiService.PreviewProvider(user)
    //           .subscribe((res)=>{
    //             if(res.success==1){
    //               let oldData={
    //                 totalExperience: this.totalexp,
    //                 previousCompany: this.pcompany,
    //                 previousDestignation: this.pdesignation,
    //                 highestEducation: this.Highedu,
    //                 favFood: this.food,
    //                 favHoliday: this.holidaydest,
    //                 myHobby: this.hobby,
    //                 senior:this.senior
    //               }
    //               console.log('Success1:', res);
    //               this.navCtrl.push('PreviewPage', {'resData':res.data, 'clientid': this.clientid, 'employeeid':this.employeeid, 'olddata':oldData});
    //             }else{
    //               console.log('Success0:', res);
    //             }
    //           },(err)=>{
    //             console.log('Error:', err);
    //           })
    //         })
    //     }
    FirstWelcomeAboardPage.prototype.showActionSheet = function () {
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Change Profile Picture',
            buttons: [
                {
                    text: 'Camera',
                    role: 'destructive',
                    handler: function () {
                        //  this.picker();
                    }
                }, {
                    text: 'Gallery',
                    handler: function () {
                        //  this.multiple();
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
    FirstWelcomeAboardPage.prototype.previewFunc = function () {
        this.navCtrl.push('PreviewPage');
    };
    FirstWelcomeAboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-first-welcome-aboard',template:/*ion-inline-start:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/first-welcome-aboard/first-welcome-aboard.html"*/'<ion-content class="pulseBG" padding>\n  <ion-row>\n    \n    <ion-col>\n      \n      <p class="topText">To proceed, please complete the following details:</p>\n    </ion-col>\n  </ion-row>\n\n  <div class="divTheme">\n    <ion-row>\n      <ion-col col-8 class="usernamecolPadding">\n        <h2 style="font-size: 18px;">Test User</h2>\n      </ion-col>\n\n      <ion-col col-4 class="rightIt" (tap)="addimage()">\n        <img src="{{userpic}}" class="userRoundImageBig" onError="this.src=\'assets/imgs/profile.png\'">\n        <img src="assets/imgs/camera.png"  id="userProfileCameraPik">\n      </ion-col>\n    </ion-row>\n\n     <!-- <form>  -->\n      <ion-list radio-group [(ngModel)]="relationship"  class="EX" >\n        <ion-item class="EXitem" >\n          <ion-label class="input_label fresher">I am a Fresher</ion-label>\n          <ion-radio value="fresher" ></ion-radio>\n\n          <!-- <ion-checkbox name="value2" [(ngModel)]="value2" (ionChange)="getVal2($event, value2)"></ion-checkbox> -->\n        </ion-item>\n\n        <ion-item class="EXitem" >\n          <ion-label class="input_label fresher">I have Work Exprience</ion-label>\n          <ion-radio value="exp" ></ion-radio>\n          <!-- <ion-checkbox name="value3" [(ngModel)]="value3" (ionChange)="getVal3($event, value3)"></ion-checkbox> -->\n        </ion-item>\n      </ion-list>\n\n\n    <ion-list>\n        <ion-item  *ngIf="relationship==\'exp\'">\n          <ion-label class="input_label" floating>\n            Total Experience (in years)<sup class=\'star\'>*</sup>\n          </ion-label>\n          <ion-input type="number" name="totalexp" [(ngModel)]="totalexp" required></ion-input>\n      </ion-item>\n      <ion-item *ngIf="relationship==\'exp\'">\n          <ion-label class="input_label" floating>\n            Previous Company<sup class=\'star\'>*</sup>\n          </ion-label>\n          <ion-input type="text" name="pcompany" [(ngModel)]="pcompany" required></ion-input>\n      </ion-item>\n      <ion-item *ngIf="relationship==\'exp\'">\n          <ion-label class="input_label" floating>\n            Designation in Previous Company<sup class=\'star\'>*</sup>\n          </ion-label>\n          <ion-input type="text" name="pdesignation" [(ngModel)]="pdesignation" required></ion-input>\n      </ion-item>\n      <ion-item *ngIf="relationship==\'exp\'">\n          <ion-label class="input_label" floating>\n            Highest Education\n          </ion-label>\n          <ion-input type="text" name="Highedu" [(ngModel)]="Highedu" ></ion-input>\n      </ion-item>\n      <ion-item *ngIf="relationship==\'exp\'">\n          <ion-label class="input_label" floating>\n            Favourite Food/ Cuisine\n          </ion-label>\n          <ion-input type="text" name="food" [(ngModel)]="food" ></ion-input>\n      </ion-item>\n      <ion-item *ngIf="relationship==\'exp\'">\n          <ion-label class="input_label" floating>\n            Favourite Holiday Destination\n          </ion-label>\n          <ion-input type="text" name="holidaydest" [(ngModel)]="holidaydest" ></ion-input>\n      </ion-item>\n      <ion-item *ngIf="relationship==\'exp\'">\n          <ion-label class="input_label" floating>\n            Favourite Hobby\n          </ion-label>\n          <ion-input type="text" name="hobby" [(ngModel)]="hobby"></ion-input>\n      </ion-item>\n\n      </ion-list>\n\n      <ion-list>\n   \n      <ion-item *ngIf="relationship==\'fresher\'">\n          <ion-label class="input_label" floating>\n            Highest Education\n          </ion-label>\n          <ion-input type="text" name="Highedu" [(ngModel)]="Highedu" ></ion-input>\n      </ion-item>\n      <ion-item *ngIf="relationship==\'fresher\'">\n          <ion-label class="input_label" floating>\n            Favourite Food/ Cuisine\n          </ion-label>\n          <ion-input type="text" name="food" [(ngModel)]="food" ></ion-input>\n      </ion-item>\n      <ion-item *ngIf="relationship==\'fresher\'">\n          <ion-label class="input_label" floating>\n            Favourite Holiday Destination\n          </ion-label>\n          <ion-input type="text" name="holidaydest" [(ngModel)]="holidaydest" ></ion-input>\n      </ion-item>\n      <ion-item *ngIf="relationship==\'fresher\'">\n          <ion-label class="input_label" floating>\n            Favourite Hobby\n          </ion-label>\n          <ion-input type="text" name="hobby" [(ngModel)]="hobby"></ion-input>\n      </ion-item>\n\n      </ion-list>\n\n      <ion-item >\n        <ion-label class="fontSize">The details provided above are true to the best of my knowledge.</ion-label>\n        <ion-checkbox [(ngModel)]="value" ></ion-checkbox>\n      </ion-item>\n  \n      <button  ion-button full class="buttonCss" (tap)="previewFunc(relationship,value)">\n        Preview\n      </button>\n\n\n\n     <!-- </form>  -->\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/benepik/Desktop/reach_git/new user app/test/Reach_Android_13_dec/Reach_Android/src/pages/first-welcome-aboard/first-welcome-aboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], FirstWelcomeAboardPage);
    return FirstWelcomeAboardPage;
}());

//# sourceMappingURL=first-welcome-aboard.js.map

/***/ }),

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstWelcomeAboardPageModule", function() { return FirstWelcomeAboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__first_welcome_aboard__ = __webpack_require__(1054);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FirstWelcomeAboardPageModule = /** @class */ (function () {
    function FirstWelcomeAboardPageModule() {
    }
    FirstWelcomeAboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__first_welcome_aboard__["a" /* FirstWelcomeAboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__first_welcome_aboard__["a" /* FirstWelcomeAboardPage */]),
            ],
        })
    ], FirstWelcomeAboardPageModule);
    return FirstWelcomeAboardPageModule;
}());

//# sourceMappingURL=first-welcome-aboard.module.js.map

/***/ })

});
//# sourceMappingURL=113.js.map
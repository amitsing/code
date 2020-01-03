import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, LoadingController, Platform, MenuController, Content } from 'ionic-angular';
import { ApiServiceProvider } from '../../../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import { InAppBrowser, InAppBrowserEvent, InAppBrowserOptions } from '@ionic-native/in-app-browser';

/**
 * Generated class for the ChinaDeclarationFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-china-declaration-form',
  templateUrl: 'china-declaration-form.html',
})
export class ChinaDeclarationFormPage {
  fillstatus: any;
  nationalityData: any;
  form_status: any;
  title: any;
  auto_id: any;
  anotherresidency: string;
  showLangPopUp: boolean;
  language: any;
  alldata: any;
  data: any;
  deviceId: any;
  employeeId: any;
  login_token: any;
  loading:any;
  spSyntax:any=[];
  newArray:any=[];
  finalArray:any=[];
  finalString:string='';
  serverRes:any;
  inputs:any=[];
  newarr:any=[];
  selectedIndex:number=0;


  j: number;
  i: number;
  msg: string;
  dumpdata:any;
  finalselect: string;
  nationalities: string;
  message_bottom: any;
  message_top: any;
  nDetails:any;
  fDetails:any
  showPage:boolean=false;tempArraySendToServer:any=[];
  constructor(private alertCtrl: AlertController, private platform: Platform, private menu: MenuController, public loadingCtrl: LoadingController,
    public toastCtrl: ToastController, private storage: Storage, private apiServices: ApiServiceProvider,
    public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser) {
      this.i=1;
      this.j=1;
this.ApiResponse();
this.data = this.navParams.get('data');
this.title=this.data.form_name;
this.form_status=this.data.form_status;
this.storage.get('login_token').then((data) => { this.login_token = data; });
this.storage.get('employeeId').then((data) => { this.employeeId = data; });
this.declarationdata();


  }

  ApiResponse(){

this.serverRes={
  'language':[{'name':'indian', 'id':1},{'name':'china', 'id':2}],
  'text':[
    {
      'id':1,
      'stringFromServer':'I Mr./Ms./Mrs. ** undertake that my one and only nationality is ** . <br><br> <b>Did you have multiple nationalities?</b> ** <br><br> <b>Did you hold the permanent residency in other countries?</b> ** <br><br><br> I declare that all above information given is correct and true. I will be subject to appropriate legal action for making any false statement. <br><br><br> Signed : ** <br> Date: **'
    },
    {
      'id':2,
      'stringFromServer':'本人 ** 在此保证，本人的国籍为 ** . <br><br> <b>是否拥有双/多重国籍?</b> ** <br><br> <b>是否拥有他国永久居留权？</b> ** <br><br><br> 本人在此声明以上提供的所有信息均属真实正确，如有虚假，本人愿意承担一切法律后果. <br><br><br> 签名 ** <br> 日期 **'
    }
  ],
  'client_logo':'',
  'address':'<b>Evalueserve Bussiness Consulting(Shanghai)Co.Ltd,</b>6<sup>th</sup> floor',
  'tel':'+8123456789',
  'fax':'+123456789',
  'email':'test@gmail.com',
  'title':'Declaration',
  'subtitle':'statement',
  // 'stringFromServer':'I hereby guarantee that my nationality is ** <br> I Mr./Ms./Mrs  ** undertake that my one and only nationality is  **  <br><br> Do you have dual / multiple nationality? <br> Did you have multiple nationalities? <br> <b>*</b>Yes Yes Other nationalities are Other Nationalities ** <br> <b>*</b> No ** <br><br><br> Do you have permanent residency in another country? <br> Did you hold the permanent residency in other countries? <br><br><br> <b>*</b> Yes Other countries Permanent residency in ** <br> <b>*</b> No <br><br><br> I declare that all above information given is correct and true. I will be subject to appropriate legal action for making any false statement. <br><br>',
  'showTextArea':true,
}

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChinaDeclarationFormPage');

   
// var stringFromServer="<h1> A quick and</h1> ** simplified <br> answer is that Lorem Ipsum <b> refers to ** text that <h1> the DTP (Desktop Publishing) </h1> industry use ** as replacement text when the real text is not available. For example, ** when designing a brochure or book, a designer will insert Lorem ipsum text if ** the real text is not available.";

// var stringFromServer="I Mr./Ms./Mrs. ** undertake that my one and only nationality is ** . <br><br> <b>Did you have multiple nationalities?</b> ** <br><br> <b>Did you hold the permanent residency in other countries?</b> ** <br><br><br> I declare that all above information given is correct and true. I will be subject to appropriate legal action for making any false statement. <br><br><br> Signed : ** <br> Date: **";
// var str_To_Array=stringFromServer.split("**");
// console.log('string to array convert==', str_To_Array);


//find ** from array
// for(var i=0; i<str_To_Array.length; i++){
//     this.newArray.push({
//       'str':str_To_Array[i],
//       'value':''
//     });
// }
// console.log('newArray==', this.newArray);

  }

  seeString(){
    this.tempArraySendToServer=[];
    console.log('modify string==', this.newArray);
    for(var i=0; i<this.newArray.length; i++){
      this.finalArray.push(this.newArray[i].str);
      if(this.newArray[i].value!=''&& this.newArray[i].value!=null){
        this.finalArray.push(this.newArray[i].value);
        this.tempArraySendToServer.push(this.newArray[i].value);

console.log('tempArraySendToServer==**************', this.tempArraySendToServer);
      }
    }

this.finalString=this.finalArray.join(" ");
console.log('newArray==', this.finalString);
console.log('tempArraySendToServer==', this.tempArraySendToServer);

  this.submit();

  }



  declarationdata() {
    this.commonLoader();
    this.storage.get('deviceId').then(data => {
      this.deviceId = data;
      let apiKey = {
        "client_id": this.apiServices.clientId,
        "employee_id": this.employeeId,
        "device": this.apiServices.device,
        "device_id": this.deviceId,
        "app_version": this.apiServices.appVersion,
        "form_id": this.data.form_id
      };
      this.apiServices.nationality_declaration(apiKey, this.login_token).subscribe(res => {
        console.log('tnc res==', res);
        this.loading.dismiss();
        this.alldata=res.data;
        this.language=res.language;
        this.fillstatus=res.fill_status;
        this.tempArraySendToServer=res.nationalityData.allValueOfInputField;

        if (res.success == 1) {
this.nationalityData=res.nationalityData;
if(res.nationalityData!=''){
this.nationalities=res.nationalityData.is_multiple_nationalities;
this.anotherresidency=res.nationalityData.is_permanent_residency;
this.nDetails=res.nationalityData.other_nationlities;
this.fDetails=res.nationalityData.permanent_residency;
this.auto_id=res.nationalityData.auto_id;
}

          if(this.language.length>1){
            this.showLangPopUp=true;
            this.radioChecked(this.language[0]);
          }else{
            this.showLangPopUp=false;
          }
       this.finalselect=this.language[0];   
        console.log('newArray==', this.newArray);
          // console.log('new***== ', this.allData);
          this.showPage=true;
        } else {
          this.navCtrl.pop();
          this.apiMessage(res.message);
        }

      }, (err) => {
        this.loading.dismiss();
        console.log('err== ', err);
        this.apiMessage(err);

      });

    });
  }

  //Common Loader:
  commonLoader() {
    this.loading = this.loadingCtrl.create({
      enableBackdropDismiss: true,
      spinner: 'ios-small',
      content: 'Loading data...'
    });
    this.loading.present();
  }
  apiMessage(message) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 4000
    });
    toast.present();
  }

  radioChecked(val){
    console.log("val",val);
    console.log("val",this.alldata);
    console.log("val",this.alldata.length);
    this.newArray=[];
    // this.tempArraySendToServer=[];
for(var i=0; i<this.alldata.length; i++){
  if(this.alldata[i].language==val){
    // this.newarr=this.alldata[i];
    this.selectedIndex=i;
    console.log("selectedIndex==",i);
  }
  console.log("loop",i);
}

var stringFromServer=this.alldata[this.selectedIndex].content;
// var stringFromServer='I Mr./Ms./Mrs. ** undertake that my one and only nationality is ** . <br><br> <b>Did you have multiple nationalities?</b> ** <br><br> <b>Did you hold the permanent residency in other countries?</b> ** <br><br><br> I declare that all above information given is correct and true. I will be subject to appropriate legal action for making any false statement. <br><br><br> Signed : ** <br> Date: **';
console.log('string from server==', stringFromServer);
var str_To_Array=stringFromServer.split("**");
console.log('string to array convert==', str_To_Array);


// find ** from array
for(var i=0; i<str_To_Array.length; i++){
  

  if(this.tempArraySendToServer.length==0){
    this.newArray.push({
      'str':str_To_Array[i],
      'value':''
    });
  }else{
    this.newArray.push({
      'str':str_To_Array[i],
      'value':this.tempArraySendToServer[i]
    });
  }
 
}
console.log('newArray==', this.newArray);


  }


  hideLangPopUp(val){
    if(val=='show'){
      this.showLangPopUp=true;
    }else{
      this.showLangPopUp=false;
    }
  }

  update1(){
    this.showLangPopUp=true;
  }



  update(){
  

    if(this.nationalities=='nationalities_yes' ){
      if(this.nDetails=='' || this.nDetails==undefined){
        this.i=2;
        this.j=1;
        this.msg='Please enter empty field.';
        this.apiMessage(this.msg);
        return false;
      } 
    }
    if(this.finalselect=='finalselect_yes' ){
       if(this.fDetails=='' || this.fDetails==undefined){
        this.i=1;
        this.j=3;
        this.msg='Please enter empty field.';
        this.apiMessage(this.msg);
        return false;
       } 
    }
    
    
    
      //  this.gotosubmit();
    
      }
    
      change(e,value,index){
    console.log("value",value);
    
    if(index==1)
    {
    if(value=='' || value==undefined){
      this.i=2;
    }
    else{
      this.i=1;
    }
    }
    
    
      }
    
      change1(e,value,index){
        console.log("value111",value);
        if(index==2){
          if(value=='' || value==undefined){
            this.j=3;
          }
          else{
            this.j=1;
          }
        }
      }
    
      submit(){
  if(this.auto_id=='' || this.auto_id==undefined){
    this.auto_id=''; 
  } 
  if(!this.nationalities){
    this.nDetails=='';
  }
  if(!this.anotherresidency){
    this.fDetails=='';
  }       
if(this.nationalities && (this.nDetails=='' || this.nDetails==undefined)){
  this.msg='All fields are mandatory.'
  this.apiMessage(this.msg);
return false;
}
else if(this.anotherresidency && (this.fDetails=='' || this.fDetails==undefined)){
  this.msg='All fields are mandatory.'
  this.apiMessage(this.msg);
  return false;
}

        this.commonLoader();
        let anotherResi = (this.anotherresidency)?'true':'false';
        let nationalities = (this.nationalities)?'true':'false';
        this.storage.get('deviceId').then(data => {
          this.deviceId = data;
          let apiKey = {
            "client_id": this.apiServices.clientId,
            "employee_id": this.employeeId,
            "device": this.apiServices.device,
            "device_id": this.deviceId,
            "app_version": this.apiServices.appVersion,
            "form_id": this.data.form_id,
            "auto_id":this.auto_id,
            "content":this.finalString,
            "is_multiple_nationalities":nationalities,
            "other_nationlities":this.nDetails,
            "is_permanent_residency":anotherResi,
            "permanent_residency":this.fDetails,
            "allValueOfInputField":this.tempArraySendToServer
          };
          this.apiServices.nationality_declaration_submit(apiKey, this.login_token).subscribe(res => {
            console.log('tnc res==', res);
            this.loading.dismiss();
            if (res.success == 1) {
              this.apiMessage(res.message);
           this.navCtrl.pop();
           this.tempArraySendToServer=[];
            console.log('newArray==', this.newArray);
              // console.log('new***== ', this.allData);
            } else {
              this.apiMessage(res.message);
            }
    
          }, (err) => {
            this.loading.dismiss();
            console.log('err== ', err);
            this.apiMessage(err);
    
          });
    
        });


      }



}

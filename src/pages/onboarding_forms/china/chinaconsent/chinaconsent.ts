import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, LoadingController, Platform, MenuController, Content } from 'ionic-angular';
import { ApiServiceProvider } from '../../../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import { InAppBrowser, InAppBrowserEvent, InAppBrowserOptions } from '@ionic-native/in-app-browser';


@IonicPage()
@Component({
  selector: 'page-chinaconsent',
  templateUrl: 'chinaconsent.html',
})
export class ChinaconsentPage {
  fillstatus: any;
  form_status: any;
  title: any;
  data: any;
  chinadata: any;
  englishdata: any;
  chinadiscrip: any;
  englishdiscrip: any;
  language: any;
  Chinese: any;
  English: any;
  finalselect: string;
  languagecheck: any;
  scrollDivId: any;
  @ViewChild(Content) content:Content;
  msg: string;
  extra_div: any;
  form_id: any;
  deviceId: any;
  employeeId: any;
  login_token: any;
  loading: any;
  allData: any = [];
  checkedIdx: any;
  checkedIdxx: any;
  answerarr: any = [];
  showLangPopUp:boolean=false;
  constructor(private alertCtrl: AlertController, private platform: Platform, private menu: MenuController, public loadingCtrl: LoadingController,
    public toastCtrl: ToastController, private storage: Storage, private apiServices: ApiServiceProvider,
    public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser) {
      this.finalselect='English';
    this.answerarr = [{ "question_id": "", "answer": "" }]
    this.checkedIdx = 0;
    this.checkedIdxx = 0;
    this.data = this.navParams.get('data');
    this.title=this.data.form_name;
    this.form_id = this.data.form_id;
    this.form_status=this.data.form_status;
    this.storage.get('login_token').then((data) => { this.login_token = data; });
    this.storage.get('employeeId').then((data) => { this.employeeId = data; });
    console.log("test", );
    this.gform();
  }
  //   checkValue(value,index)
  //   { //your code }
  //   console.log("test",value);
  //   console.log("index",index);
  //   console.log("final array== ",this.testarray);
  // }
  // update(){
  //   for(let i=0;i<this.testarray.length;i++){
  // if(this.testarray[i].answer=='' || this.testarray[i].answer==undefined){
  // alert('select ans');
  // return false;
  // }
  // if(this.testarray.length==i+1){
  // console.log("submit")
  //   }
  //   }
  // }
  hideLangPopUp(val){
    if(val=='show'){
      this.showLangPopUp=true;
    }else{
      this.showLangPopUp=false;
    }
  }
  gform() {
    this.commonLoader();
    this.storage.get('deviceId').then(data => {
      this.deviceId = data;
      let apiKey = {
        "client_id": this.apiServices.clientId,
        "employee_id": this.employeeId,
        "device": this.apiServices.device,
        "device_id": this.deviceId,
        "app_version": this.apiServices.appVersion,
        "form_id": this.form_id
      };
      this.apiServices.china_consent(apiKey, this.login_token).subscribe(res => {
        console.log('tnc res==', res);
        this.loading.dismiss();
        if (res.success == 1) {
          this.englishdata=res.English;
          this.chinadata=res.Chinese;
          this.extra_div = res.extra_div;
          this.language=res.language;
          this.fillstatus=res.fill_status;
          if(this.language.length>1){
            this.showLangPopUp=true;
          }else{
            this.showLangPopUp=false;
          }
          this.finalselect=this.language[0];
          this.allData = res.data;
     
          this.englishdiscrip=res.English.description;
          this.chinadiscrip=res.Chinese.description;
          // this.Chinese=res.data.Chinese;
          // this.English=res.data.English;


         
          // this.disagree_message=res.disagree_message;

          // this.show_skip=res.show_skip;
          // this.tanckey=this.allData[0].auto_id;
          //   Object.keys(obj).forEach(function(key,index) {
          //     // key: the name of the object key
          //     // index: the ordinal position of the key within the object 
          // });

          // console.log('res', res);
          // console.log('res1', res);

          console.log('succ1', res.data);
          // const values = Object.keys(res.data).map(key => {
          //   res.data[key];
          //   console.log('11***== ',key);
          //   console.log('1122***== ',res.data[key]);
          //   this.allData.push({'newData':res.data[key]});
          //   console.log('new00***== ', this.allData);
          // });
          // console.log('hhhh***== ',values);
          console.log('new***== ', this.allData);
          // const commaJoinedValues = values.join(",");
          // console.log('hhhh== ',commaJoinedValues);

          // console.log(Object.values(res.data));
          // for(let i=0; i<Object.keys(res.data).length;i++){

          //   console.log(Object.values(res.data));
          //   this.allData.push(res.data);
          // }
          console.log('succ', this.allData.length);
          // console.log('succ1', this.allData[0]);
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
  checkfun(selectedvalue, i, j, value) {
    this.allData[j][i].userResponse = selectedvalue;
    console.log("this.allData[j][i].userResponse", this.allData[j][i].userResponse);
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

  update() {
    this.answerarr = [];
    this.allData.forEach(firstdata => {
      firstdata.forEach(element => {
        let data = {
          "question_id": element.auto_id,
          "answer": element.userResponse
        }
        this.answerarr.push(data);
        console.log("this.aaa", this.answerarr);
      });
    });

    this.submitform();
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChinaconsentPage');
  }

  submitform() {
    if (this.checkMandatoryStatus()) {
      console.log("status3", status);

      if (this.checkOptionalStatus) {
        console.log("status5", status);
      } else {
        this.msg = "All fields are mandetory."
        this.apiMessage(this.msg);
        return false;
      }
    } else {
      console.log("status4", status);
      this.msg = "Please select option Yes."
      this.apiMessage(this.msg);
      return false;
    }
    this.commonLoader();
    this.storage.get('deviceId').then(data => {
      this.deviceId = data;
      let apiKey = {
        "client_id": this.apiServices.clientId,
        "employee_id": this.employeeId,
        "device": this.apiServices.device,
        "device_id": this.deviceId,
        "app_version": this.apiServices.appVersion,
        "form_id": this.form_id,
        "answer_arr": this.answerarr
      };
      this.apiServices.china_consent_submit(apiKey, this.login_token).subscribe(res => {
        console.log('tnc res==', res);
        this.loading.dismiss();
        if (res.success == 1) {

          console.log('succ');
          this.apiMessage(res.message);
          this.navCtrl.pop();
          // console.log('succ1', this.allData[0]);
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

  checkMandatoryStatus(): boolean {
    let status: boolean = true;
    let checkIndex=0;
    this.allData[0].forEach(element => {
      status = element.userResponse && status;

      console.log("status1", status);

      console.log("status2==", this.allData[0]);
      console.log("element***==", element);
if(status==false && checkIndex==0){
  checkIndex=checkIndex+1;
  this.scrollDivId= element.auto_id;
  console.log("scroll to id***==", element.auto_id);
  let yOffset = document.getElementById(this.scrollDivId).offsetTop;
    this.content.scrollTo(0, yOffset, 3000);
  return false;
}

    });

    return status;
  }

  checkOptionalStatus(): boolean {
    let status: boolean = true;
    let checkIndex=0;
    this.answerarr.forEach(element => {
      status = element.userResponse && status;
      console.log("status2==", this.answerarr);
//       console.log("element==", element);
      console.log("status2", status);
      if(status==false && checkIndex==0){
        checkIndex=checkIndex+1;
        this.scrollDivId= element.auto_id;
        console.log("scroll to id***==", element.auto_id);
        let yOffset = document.getElementById(this.scrollDivId).offsetTop;
          this.content.scrollTo(0, yOffset, 3000)
        return false;
      }
    });
    return status;
  }


  langfun(val){

    if(val==1){
      this.languagecheck=0;
    }
    else{
      this.languagecheck=1;
    }

  }


  langfun1(val){

    if(val==1){
      this.languagecheck=0;
    }
    else{
      this.languagecheck=1;
    }

  }

  selectlanguage(ldata){
    console.log("llll",ldata)
    this.allData=[];
if(ldata=='English'){
  this.allData=this.English;
}
else{
  this.allData=this.Chinese;
}
  }


}

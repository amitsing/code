import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, LoadingController, Platform, MenuController, Content } from 'ionic-angular';
import { ApiServiceProvider } from '../../../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import { InAppBrowser, InAppBrowserEvent, InAppBrowserOptions } from '@ionic-native/in-app-browser';

/**
 * Generated class for the ChinaemergencycontactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chinaemergencycontact',
  templateUrl: 'chinaemergencycontact.html',
})
export class ChinaemergencycontactPage {
  form_status: any;
  title: any;
  buttomtxtcheck: any;
  first_attempt: any;
  classkey: number;
  buttomtxt: any;
  btncheck: any;
  @ViewChild(Content) content: Content
  form_auto_id: any;
  msg: string;
  dropdown_data: any;
  alldata: any=[];
  previousdata: any;
  deviceId: any;
  employeeId: any;
  login_token: any;
  CPerson:any;
  Cnumber:any;
  cAddress:any;
  formobj:any;
  formarr:any=[];
  editArray=[];
  loading:any;
  constructor(private alertCtrl: AlertController, private platform: Platform, private menu: MenuController, public loadingCtrl: LoadingController,
    public toastCtrl: ToastController, private storage: Storage, private apiServices: ApiServiceProvider,
    public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser) {
    this.previousdata=this.navParams.get('data');  
    this.title=this.previousdata.form_name;
    this.form_status=this.previousdata.form_status;
    let obj={"CPerson":'',"Cnumber":'',"drpdata":'',"cAddress":''}
    this.storage.get('login_token').then((data) => { this.login_token = data; });
      this.storage.get('employeeId').then((data) => { this.employeeId = data; });
    this.emergency_fetch();
  }
  formcreate(){
    this.classkey=1;
    this.buttomtxtcheck='1';
    this.buttomtxt='Save';
    this.form_auto_id="";
    this.editArray=[
      {
        "CPerson":"",
        "Cnumber":"",
        "drpdata":'',
        "cAddress":"",
        "CPersontooltip":"",
        "Cnumbertooltip":"",
        "drpdatatooltip":"",
        "cAddresstooltip":"",
        "CPersonhintapplicable":"",
        "Cnumberhintapplicable":"",
        "drpdatahintapplicable":"",
        "cAddresshintapplicable":"",
  }
  ];


  setTimeout(() => {
    this.content.scrollToBottom(0)
  }, 400);

    //  let obj={"CPerson":'',"Cnumber":'',"drpdata":'',"cAddress":''}
    // this.formarr.push(obj);
  }

  emergency_fetch() {
 
    this.commonLoader();
    this.storage.get('deviceId').then(data => {
      this.deviceId = data;
      let apiKey = {
        "client_id": this.apiServices.clientId,
        "employee_id": this.employeeId,
        "device": this.apiServices.device,
        "device_id": this.deviceId,
        "app_version": this.apiServices.appVersion,
        "form_id": this.previousdata.form_id,
      };
      this.apiServices.get_emergency_contact(apiKey, this.login_token).subscribe(res => {
        console.log('tnc res==', res);
        this.loading.dismiss();
        if (res.success == 1) {
          this.alldata=res.data.emergency;
          this.btncheck=res.fill_status;

          this.buttomtxtcheck=res.button_text;
          if(this.buttomtxtcheck=='2'){
            this.buttomtxt='Submit'
          }
          // else{

          // }
          this.first_attempt=res.first_attempt;
          console.log('succ');
          this.dropdownlist();
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


  dropdownlist() {
 
    // this.commonLoader();
    this.storage.get('deviceId').then(data => {
      this.deviceId = data;
      let apiKey = {
        "client_id": this.apiServices.clientId,
        "employee_id": this.employeeId,
        "device": this.apiServices.device,
        "device_id": this.deviceId,
        "app_version": this.apiServices.appVersion,
        "form_id": this.previousdata.form_id,
      };
      this.apiServices.get_emergency_dropdown(apiKey, this.login_token).subscribe(res => {
        console.log('tnc res==', res);
        // this.loading.dismiss();
        if (res.success == 1) {
          this.dropdown_data=res.data.relationship;
          console.log('succ');
          // for(let i=0;i<this.alldata.length;i++){
          //   this.formobj={"CPerson":this.alldata[i].emg_contact_name,
          //   "Cnumber":this.alldata[i].emg_contact_number,"drpdata":'',"cAddress":this.alldata[i].emg_contact_address}
          //   this.formarr.push(this.formobj);
          // }
     
       
        } else {
          this.apiMessage(res.message);
        }

      }, (err) => {
        // this.loading.dismiss();
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
      duration: 3000
    });
    toast.present();
  }


  save(){
    console.log("this.formobj",this.editArray);
    console.log("this.formobj.length",this.editArray.length);
    console.log("this.formobj[x].CPerson",this.editArray[0].CPerson);
    let submitObj={
      "emg_contact_name":this.editArray[0].CPerson,
      "emg_contact_relation":this.editArray[0].drpdata,
      "emg_contact_address":this.editArray[0].cAddress,
      "emg_contact_number":this.editArray[0].Cnumber
    }
    for(let x=0; x<this.editArray.length;x++){
    //  this.ansarray=[{""}] 
      if(this.editArray[x].CPerson=='' || this.editArray[x].CPerson==undefined){
     console.log("this.formarr[x]",this.editArray[x]);
     this.classkey=x;
     this.msg='All fields are mandatory.';
     this.apiMessage(this.msg);
     return false;
      }
      else if(this.editArray[x].Cnumber=='' || this.editArray[x].Cnumber==undefined){
        this.classkey=x;
        this.msg='All fields are mandatory.';
        this.apiMessage(this.msg);
        console.log("this.formarr[x]",this.editArray[x]);
        return false;
      }
      else if(this.editArray[x].drpdata=='' || this.editArray[x].drpdata==undefined){
        this.classkey=x;
        this.msg='All fields are mandatory.';
        this.apiMessage(this.msg);
        console.log("this.formarr[x]",this.editArray[x]);
        return false;
      }
      else if(this.editArray[x].cAddress=='' || this.editArray[x].cAddress==undefined){
        this.classkey=x;
        this.msg='All fields are mandatory.';
        this.apiMessage(this.msg);
        console.log("this.formarr[x]",this.editArray[x]);
        return false;
      }
      else{
//call submit api

 
    this.commonLoader();
    this.storage.get('deviceId').then(data => {
      this.deviceId = data;
      let apiKey = {
        "client_id": this.apiServices.clientId,
        "employee_id": this.employeeId,
        "device": this.apiServices.device,
        "device_id": this.deviceId,
        "app_version": this.apiServices.appVersion,
        "form_id": this.previousdata.form_id,
        "data":submitObj,
        "auto_id":this.form_auto_id
      }

      
      this.apiServices.get_emergency_save(apiKey, this.login_token).subscribe(res => {
        console.log('tnc res==', res);
        this.loading.dismiss();
        if (res.success == 1) {
          console.log('succ');
          this.apiMessage(res.message);
          this.alldata=[];
          this.editArray=[];
          this.emergency_fetch();
       
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
  }


  editform(edit_data,k){
    this.buttomtxtcheck='1';
    this.buttomtxt='Update';
    this.form_auto_id=edit_data.auto_id;
    this.editArray=[
      {
    "CPerson":"",
    "Cnumber":"",
    "drpdata":'',
    "cAddress":"",
    "CPersontooltip":"",
    "Cnumbertooltip":"",
    "drpdatatooltip":"",
    "cAddresstooltip":"",
    "CPersonhintapplicable":"",
    "Cnumberhintapplicable":"",
    "drpdatahintapplicable":"",
    "cAddresshintapplicable":"",
  }
  ]
    // this.formobj={"CPerson":this.alldata[k].emg_contact_name,
    // "Cnumber":this.alldata[k].emg_contact_number,"drpdata":this.alldata[k].emg_contact_relation,"cAddress":this.alldata[k].emg_contact_address}

    // this.formarr.push(this.formobj); 
    
    this.editArray[0].CPerson=this.alldata[k].emg_contact_name.value; 
    this.editArray[0].Cnumber=this.alldata[k].emg_contact_number.value; 
    this.editArray[0].drpdata=this.alldata[k].emg_contact_relation.value; 
    this.editArray[0].cAddress=this.alldata[k].emg_contact_address.value; 

    this.editArray[0].CPersontooltip=this.alldata[k].emg_contact_name.hint; 
    this.editArray[0].Cnumbertooltip=this.alldata[k].emg_contact_number.hint; 
    this.editArray[0].drpdatatooltip=this.alldata[k].emg_contact_relation.hint; 
    this.editArray[0].cAddresstooltip=this.alldata[k].emg_contact_address.hint;
    
    this.editArray[0].CPersonhintapplicable=this.alldata[k].emg_contact_name.hint_applicable; 
    this.editArray[0].Cnumberhintapplicable=this.alldata[k].emg_contact_number.hint_applicable; 
    this.editArray[0].drpdatahintapplicable=this.alldata[k].emg_contact_relation.hint_applicable; 
    this.editArray[0].cAddresshintapplicable=this.alldata[k].emg_contact_address.hint_applicable; 
   
setTimeout(() => {
  this.content.scrollToBottom(0)
}, 400);

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ChinaemergencycontactPage');
  }
  deleteform(){
    this.editArray=[];
    if(this.alldata.length>=1 && this.btncheck==0 && this.first_attempt==0){
      this.buttomtxtcheck='2';
      this.buttomtxt='Submit';
    }

// if(this.btncheck==0 && this.first_attempt==){

// }

  }

  showConfirm(edit_data,ind) {
    const confirm = this.alertCtrl.create({
      // title: 'Use this lightsaber?',
      message: 'Are you sure, you want to remove this data?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Agree clicked');
            this.deletecard(edit_data,ind)
          }
        }
      ]
    });
    confirm.present();
  }

  
  deletecard(edit_data,ind){
    console.log('called clicked*****');

    this.form_auto_id=edit_data.auto_id;
    this.commonLoader();
    this.storage.get('deviceId').then(data => {
      this.deviceId = data;
      let apiKey = {
        "client_id": this.apiServices.clientId,
        "employee_id": this.employeeId,
        "device": this.apiServices.device,
        "device_id": this.deviceId,
        "app_version": this.apiServices.appVersion,
        "form_id": this.previousdata.form_id,
        "auto_id":this.form_auto_id,
        "card_len":this.alldata.length
      };
      this.apiServices.get_emergency_delete(apiKey, this.login_token).subscribe(res => {
        console.log('tnc res==', res);
        this.loading.dismiss();
        if (res.success == 1) {

          this.apiMessage(res.message);
          // this.alldata=res.data.emergency;
          // this.btncheck=res.fill_status;
          // this.buttomtxt=res.button_text;
          this.alldata=[];
          this.emergency_fetch();
          console.log('succ');
          // this.dropdownlist();
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

  submit(){
    this.commonLoader();
    this.storage.get('deviceId').then(data => {
      this.deviceId = data;
      let apiKey = {
        "client_id": this.apiServices.clientId,
        "employee_id": this.employeeId,
        "device": this.apiServices.device,
        "device_id": this.deviceId,
        "app_version": this.apiServices.appVersion,
        "form_id": this.previousdata.form_id,
        "content_id":"",
        "data_dump":this.alldata
      };
      this.apiServices.get_emergency_submit(apiKey, this.login_token).subscribe(res => {
        console.log('tnc res==', res);
        this.loading.dismiss();
        if (res.success == 1) {
          this.navCtrl.pop();
          // this.alldata=res.data.emergency;
          // this.btncheck=res.fill_status;
          // this.buttomtxt=res.button_text;
          // this.alldata=[];
          // this.emergency_fetch();
          console.log('succ',);
          // this.dropdownlist();
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

import { Component, ViewChild, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, LoadingController, Content, Platform, MenuController } from 'ionic-angular';
import { ApiServiceProvider } from '../../../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-proprietary-information',
  templateUrl: 'proprietary-information.html',
})
export class ProprietaryInformationPage {
  submit_dump_data: any;
  tarea: boolean;
  isSubmit: boolean = true;
  relation: boolean;
  party: boolean;
  invention: boolean;
  scrollDivId: string;
  D_auto_id: any;
  deleteObj: { "auto_id": any; "invention": string; "party": string; "relation": string; "flag": 'delete' };
  zone: any;
  submittype: string;
  @ViewChild(Content) content: Content;
  msg: string;
  submitObj: { "auto_id": any; "invention": string; "party": string; "relation": string; };
  form_auto_id: any;
  first_attempt: any;
  is_invention: any = [];
  // is_invention2: any;
  // is_invention1: any;
  exhibit_B: any;
  buttomtxtcheck: any;
  exhibit_A: any;
  evalueserv: any;
  formcheck: boolean;
  fill_status: any;
  deviceId: any;
  employeeId: any;
  login_token: any;
  form_status: any;
  title: any;
  previousdata: any;
  addresscheck: boolean;
  loading: any;

  editArray: {
    invention?: string,
    party?: string,
    relation?: string,
    firstEdit?: boolean,

    invention_hint?: string,
    party_is_hint?: string,
    relation_hint?: string,

    invention_is_mandatory_hint_applicable?: boolean,
    party_is_mandatory_hint_applicable?: boolean,
    relation_is_mandatory_hint_applicable?: boolean,

    invention_is_mandatory?: boolean,
    party_is_mandatory?: boolean,
    relation_is_mandatory?: boolean

  }[] = [];
  constructor(private alertCtrl: AlertController, private platform: Platform, private menu: MenuController, public loadingCtrl: LoadingController,
    public toastCtrl: ToastController, private storage: Storage, private apiServices: ApiServiceProvider,
    public navCtrl: NavController, public navParams: NavParams) {
    this.addresscheck = true;
    this.formcheck = true;
    this.previousdata = this.navParams.get('data');
    this.title = this.previousdata.form_name;
    this.form_status = this.previousdata.form_status;
    this.storage.get('login_token').then((data) => { this.login_token = data; });
    this.storage.get('employeeId').then((data) => { this.employeeId = data; });
    this.newjoinee();
  }



  newjoinee() {
    let url: string = "";
    if(this.previousdata.country_id == 8){
      url = "Onboarding_Forms_Apis/canada_forms/get_proprietary_invention.php"
    } else {
      url = "Onboarding_Forms_Apis/usa_forms/get_proprietary_invention.php"
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
        "form_id": this.previousdata.form_id
      };
      this.apiServices.us_canada(url,apiKey,this.login_token).subscribe(res => {
        console.log('tnc res==', res);
        this.loading.dismiss();
        if (res.success == 1) {

          this.is_invention = res.data.inventionData;
          this.submit_dump_data = this.is_invention.invention_2_data;
          this.D_auto_id = this.is_invention.auto_id;
          // this.allData=this.is_invention
          // this.is_invention2=res.data.inventionData.is_invention2;
          this.first_attempt = res.first_attempt;
          this.fill_status = res.fill_status;
          this.evalueserv = res.evalueserv;
          this.exhibit_A = res.exhibit_A;
          this.exhibit_B = res.exhibit_B;
          this.isSubmit = true;


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
      duration: 3000
    });
    toast.present();
  }

  updatecheck(dd) {
    console.log("this.addresscheck", dd);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProprietaryInformationPage');
  }
  formcreate() {
    // this.is_minor='0';
    // this.showgdiv=0;
    this.isSubmit = false;
    this.buttomtxtcheck = '1';
    // this.buttomtxt='Save';
    // this.form_auto_id="";
    this.editArray = [
      {
        "invention": "",
        "party": "",
        "relation": '',

        "invention_hint": "",
        "party_is_hint": "",
        "relation_hint": "",

        "invention_is_mandatory_hint_applicable": false,
        "party_is_mandatory_hint_applicable": false,
        "relation_is_mandatory_hint_applicable": false,

        "invention_is_mandatory": true,
        "party_is_mandatory": true,
        "relation_is_mandatory": true
      }
    ];


    setTimeout(() => {
      this.scrollDivId = '1';
      let yOffset = document.getElementById(this.scrollDivId).offsetTop;
      this.content.scrollTo(0, yOffset, 3000);

    }, 400);

    //  let obj={"CPerson":'',"Cnumber":'',"drpdata":'',"cAddress":''}
    // this.formarr.push(obj);
  }



  editform(edit_data, k) {
    this.buttomtxtcheck = '2';
    // this.buttomtxt='Update';
    this.isSubmit = false;
    this.is_invention.is_invention2.value = false;
    console.log("edit_data", edit_data);
    this.form_auto_id = edit_data.auto_id;

    this.editArray = [
      {
        "invention": "",
        "party": "",
        "relation": '',

        "invention_hint": "",
        "party_is_hint": "",
        "relation_hint": "",

        "invention_is_mandatory_hint_applicable": false,
        "party_is_mandatory_hint_applicable": false,
        "relation_is_mandatory_hint_applicable": false,

        "invention_is_mandatory": false,
        "party_is_mandatory": false,
        "relation_is_mandatory": false
        // "alldataindex": k

      }
    ]

    // this.editArray[0].invention = edit_data.invention.auto_id;
    this.editArray[0].invention = edit_data.invention.value;
    this.editArray[0].party = edit_data.party.value;
    this.editArray[0].relation = edit_data.relation.value;

    this.editArray[0].invention_is_mandatory = edit_data.invention.is_mandatory;
    this.editArray[0].party_is_mandatory = edit_data.party.is_mandatory;
    this.editArray[0].relation_is_mandatory = edit_data.relation.is_mandatory;

    this.editArray[0].invention_hint = edit_data.invention.hint;
    this.editArray[0].party_is_hint = edit_data.party.hint;
    this.editArray[0].relation_hint = edit_data.relation.hint;

    this.editArray[0].invention_is_mandatory_hint_applicable = edit_data.invention.hint_applicable;
    this.editArray[0].party_is_mandatory_hint_applicable = edit_data.party.hint_applicable;
    this.editArray[0].relation_is_mandatory_hint_applicable = edit_data.relation.hint_applicable;

    console.log("this.editArray", this.editArray);
    setTimeout(() => {
      this.scrollDivId = '1';
      let yOffset = document.getElementById(this.scrollDivId).offsetTop;
      this.content.scrollTo(0, yOffset, 3000);
    }, 400);

  }



  fun(keyforhit) {
    let url: string = "";
    if(this.previousdata.country_id == 8){
      url = "Onboarding_Forms_Apis/canada_forms/save_proprietary_invention.php"
    } else {
      url = "Onboarding_Forms_Apis/usa_forms/save_proprietary_invention.php"
    }

    this.invention = false; this.party = false; this.relation = false; this.tarea = false;
    console.log("this.is_invention.is_invention1.value", this.is_invention.is_invention1.value);
    console.log("this.is_invention.invention_detail.value", this.is_invention.invention_detail.value);
    if (!this.is_invention.is_invention1.value && (this.is_invention.invention_detail.value == ''
      || this.is_invention.invention_detail.value == undefined)) {
      this.msg = 'All fields are mandatory.';
      this.apiMessage(this.msg);
      this.tarea = true;
      setTimeout(() => {
        this.scrollDivId = '2';
        let yOffset = document.getElementById(this.scrollDivId).offsetTop;
        this.content.scrollTo(0, yOffset, 3000);
      }, 400);
      return false;
    }
    if (this.is_invention.is_invention1.value && (this.is_invention.invention_detail.value == ''
      || this.is_invention.invention_detail.value == undefined)) {
      this.is_invention.invention_detail.value = "";
    }
    console.log("this.formobj", keyforhit);
    // console.log("this.this.allData", this.allData);
    for (let x = 0; x < this.editArray.length; x++) {
      console.log("this.formobj.length", this.editArray.length);

      if (this.editArray[x].invention_is_mandatory &&
        (this.editArray[x].invention == '' || this.editArray[x].invention == undefined)) {
        console.log("this.formarr[x]", this.editArray[x]);
        //  this.classkey=x;
        this.msg = 'All fields are mandatory.';
        this.apiMessage(this.msg);
        this.invention = this.editArray[x].invention_is_mandatory;
        return false;
      }
      else if (this.editArray[x].party_is_mandatory &&
        (this.editArray[x].party == '' || this.editArray[x].party == undefined)) {
        console.log("this.formarr[x]", this.editArray[x]);
        //  this.classkey=x;
        this.msg = 'All fields are mandatory.';
        this.apiMessage(this.msg);
        this.party = this.editArray[x].party_is_mandatory;
        return false;
      }
      else if (this.editArray[x].relation_is_mandatory &&
        (this.editArray[x].relation == '' || this.editArray[x].relation == undefined)) {
        console.log("this.formarr[x]", this.editArray[x]);
        //  this.classkey=x;
        this.msg = 'All fields are mandatory.';
        this.apiMessage(this.msg);
        this.relation = this.editArray[x].relation_is_mandatory;
        return false;
      }

      else {
        //call submit api
        // alert(keyforhit);
        if (this.buttomtxtcheck == '1') {
          this.submittype = 'Save';
          this.form_auto_id = ""
        }
        else {
          this.submittype = 'Submit'
        }


        this.submitObj = {
          "auto_id": this.form_auto_id,
          "invention": this.editArray[0].invention,
          "party": this.editArray[0].party,
          "relation": this.editArray[0].relation,
          // if(button == delet){
          //   "flag" = delete
          // }
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
            "form_id": this.previousdata.form_id,
            "invention_2_data": this.submitObj,
            "is_invention1": (this.is_invention.is_invention1.value == true) ? "0" : "1",
            "invention_detail": this.is_invention.invention_detail.value,
            "is_invention2": (this.is_invention.is_invention2.value == true) ? "0" : "1",
            "auto_id": this.is_invention.auto_id,
            "submit_type": this.submittype
          }


          this.apiServices.us_canada(url,apiKey,this.login_token).subscribe(res => {
            console.log('tnc res==', res);
            this.loading.dismiss();
            if (res.success == 1) {
              console.log('succ');
              this.apiMessage(res.message);
              // this.allData = [];
              this.editArray = [];
              this.is_invention = [];
              this.exhibit_A = "";
              this.exhibit_B = "";
              // this.gform();
              this.newjoinee();

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







  deleteform() {
    // alert("1");

    this.editArray = [];
    if (this.submit_dump_data.length >= 1 && (this.first_attempt == 0)) {
      this.isSubmit = true;
    }

    // if(this.btncheck==0 && this.first_attempt==){

    // }

  }
  predelete(data, k) {
    if (this.fill_status == '1') {
      if (this.submit_dump_data > 1) {
        this.delete(data, k)
      }
      else {
        this.apiMessage('Please edit information insted of deleting.')
      }
    }
    else {
      this.delete(data, k)
    }
  }

  delete(data, k) {
    // alert("k");
    let url: string = "";
    if(this.previousdata.country_id == 8){
      url = "Onboarding_Forms_Apis/canada_forms/save_proprietary_invention.php"
    } else {
      url = "Onboarding_Forms_Apis/usa_forms/save_proprietary_invention.php"
    }



    this.deleteObj = {
      "auto_id": data.auto_id,
      "invention": data.invention.value,
      "party": data.party.value,
      "relation": data.relation.value,
      "flag": 'delete'

    }
    console.log("this.deleteObj", this.deleteObj);
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
        "invention_2_data": this.deleteObj,
        "is_invention1": (this.is_invention.is_invention1.value == true) ? "0" : "1",
        "invention_detail": this.is_invention.invention_detail.value,
        "is_invention2": (this.is_invention.is_invention2.value == true) ? "0" : "1",
        "auto_id": this.is_invention.auto_id,
        "submit_type": 'submit'
      }


      this.apiServices.us_canada(url,apiKey,this.login_token).subscribe(res => {
        console.log('tnc res==', res);
        this.loading.dismiss();
        if (res.success == 1) {
          console.log('succ');
          this.apiMessage(res.message);
          // this.allData = [];
          this.editArray = [];
          this.is_invention = [];
          this.exhibit_A = "";
          this.exhibit_B = "";
          // this.gform();
          this.newjoinee();

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



  submit() {
    let url: string = "";
    if(this.previousdata.country_id == 8){
      url = "Onboarding_Forms_Apis/canada_forms/save_proprietary_invention.php"
    } else {
      url = "Onboarding_Forms_Apis/usa_forms/save_proprietary_invention.php"
    }



    this.commonLoader();
    this.storage.get('deviceId').then(data => {
      this.deviceId = data;
      let apiKey = {
        // "client_id": this.apiServices.clientId,
        // "employee_id": this.employeeId,
        // "device": this.apiServices.device,
        // "device_id": this.deviceId,
        // "app_version": this.apiServices.appVersion,
        // "form_id": this.previousdata.form_id,
        // "content_id": "",
        // "data_dump": this.submit_dump_data

        "client_id": this.apiServices.clientId,
        "employee_id": this.employeeId,
        "device": this.apiServices.device,
        "device_id": this.deviceId,
        "app_version": this.apiServices.appVersion,
        "form_id": this.previousdata.form_id,
        // "invention_2_data": this.deleteObj,
        "is_invention1": (this.is_invention.is_invention1.value == true) ? "0" : "1",
        "invention_detail": this.is_invention.invention_detail.value,
        "is_invention2": (this.is_invention.is_invention2.value == true) ? "0" : "1",
        "auto_id": this.is_invention.auto_id,
        "submit_type": 'submit',
        "Actiontype": 'submit'


      };
      this.apiServices.us_canada(url,apiKey,this.login_token).subscribe(res => {
        console.log('tnc res==', res);
        this.loading.dismiss();
        if (res.success == 1) {
          this.navCtrl.pop();
          // this.alldata=res.data.emergency;
          // this.btncheck=res.fill_status;
          // this.buttomtxt=res.button_text;
          // this.alldata=[];
          console.log('succ', );

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

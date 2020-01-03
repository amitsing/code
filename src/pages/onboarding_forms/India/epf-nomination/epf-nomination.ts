import { Component, ViewChild, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, LoadingController, Platform, MenuController, Content } from 'ionic-angular';
import { ApiServiceProvider } from '../../../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-epf-nomination',
  templateUrl: 'epf-nomination.html',
})
export class EpfNominationPage {
  isSubmit : boolean = true;
  rminor_rel: any;
  rminor_name: any;
  rminor_address: any;
  rprovident_fund: any;
  rnominee_relation: any;
  rdob: any;
  nAddress: any;
  nomineename: any;
  minor_rel: any;
  minor_name: any;
  minor_address: any;
  provident_fund: any;
  nominee_relation: any;
  Address: any;
  dob: any;
  nominee_name: any;
  pfId: any;
  buttomtxt: string;
  fill_status: any;
  isMiinor: number;
  form_auto_id: any;
  totalepfcount: number;
  submitObj: any;
  epfcount: number;
  msg: string;
  scrollDivId: string;
  showgdiv: number;
  @ViewChild(Content) content: Content;
  minerage: any;
  buttomtxtcheck: any;
  currentage: number;
  part_A: any;
  part_B: any;
  is_minor: any;
  first_attempt: any;
  userDetail: any;
  allData: {
    address ?: data,
    auto_id ?: string,
    dob ?: data,
    is_minor ?: string,
    minor_address ?: data,
    minor_name ?: data,
    minor_rel ?: data,
    nominee_name ?: data,
    nominee_relation ?: data,
    provident_fund ?: data,
    firstEdit ?: boolean          
  }[] = [];
  deviceId: any;
  employeeId: any;
  login_token: any;
  form_status: any;
  form_id: any;
  title: any;
  data: any;
  loading: any;
  editArray : {
    alldataindex ?: number,
    Address ?: string,
    dob ?: string,
    minor_address: string,
    minor_name ?: string,
    minor_rel ?: string,
    nominee_name ?: string,
    nominee_relation ?: string,
    provident_fund ?: any,
    Address_is_mandatory ?: boolean,
    dob_is_mandatory ?: boolean,
    minor_address_is_mandatory ?: boolean,
    minor_name_is_mandatory ?: boolean,
    minor_rel_is_mandatory ?: boolean,
    nominee_name_is_mandatory ?: boolean,
    nominee_relation_is_mandatory ?: boolean,
    provident_fund_is_mandatory ?: boolean,
    firstEdit ?: boolean,
    Address_is_mandatory_hint ?: string
    dob_is_mandatory_hint ?: string 
    minor_address_is_mandatory_hint ?: string 
    minor_name_is_mandatory_hint ?: string 
    minor_rel_is_mandatory_hint ?: string 
    nominee_name_is_mandatory_hint ?: string
    nominee_relation_is_mandatory_hint ?: string 
    provident_fund_is_mandatory_hint ?: string

    Address_is_mandatory_hint_applicable ?: boolean 
    dob_is_mandatory_hint_applicable ?: boolean 
    minor_address_is_mandatory_hint_applicable ?: boolean 
    minor_name_is_mandatory_hint_applicable ?: boolean
    minor_rel_is_mandatory_hint_applicable ?: boolean 
    nominee_name_is_mandatory_hint_applicable ?: boolean 
    nominee_relation_is_mandatory_hint_applicable ?: boolean 
    provident_fund_is_mandatory_hint_applicable ?: boolean 
    
  }[] = [];
  constructor(private alertCtrl: AlertController, private platform: Platform, private menu: MenuController, public loadingCtrl: LoadingController,
    public toastCtrl: ToastController, private storage: Storage, private apiServices: ApiServiceProvider,
    public navCtrl: NavController, public navParams: NavParams, private zone: NgZone) {
    this.data = this.navParams.get('data');
    this.title = this.data.form_name;
    this.form_id = this.data.form_id;
    this.buttomtxt = 'Submit';
    this.form_status = this.data.form_status;
    this.storage.get('login_token').then((data) => { this.login_token = data; });
    this.storage.get('employeeId').then((data) => { this.employeeId = data; });
    console.log("test", );
    this.gform();

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
      this.apiServices.India_get_EPfForm(apiKey, this.login_token).subscribe(res => {
        console.log('tnc res==', res);
        this.loading.dismiss();
        if (res.success == 1) {
          this.first_attempt = res.first_attempt;
          this.allData = res.data.epfData;
          this.userDetail = res.data.userDetail;
          this.part_B = res.data.part_B;
          this.part_A = res.data.part_A;
          this.minerage = res.data.minor_age;
          this.fill_status = res.fill_status;
          console.log('new***this.part_B== ', this.part_B.title);
          console.log('succ1', res.data);
          console.log('new***== ', this.allData);

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
  formcreate() {
    this.isSubmit = false;
    this.is_minor='0';
    this.showgdiv=0;
    // this.classkey=1;
    this.buttomtxtcheck = '1';
    // this.buttomtxt='Save';
    // this.form_auto_id="";
    this.editArray = [
      {
        "Address": "",
        "dob": "",
        "minor_address": '',
        "minor_name": "",
        "minor_rel": "",
        "nominee_name": "",
        "nominee_relation": "",
        "provident_fund": "",


        "Address_is_mandatory": true,
        "dob_is_mandatory": true,
        "minor_address_is_mandatory": true,
        "minor_name_is_mandatory": true,
        "minor_rel_is_mandatory": true,
        "nominee_name_is_mandatory": true,
        "nominee_relation_is_mandatory": true,
        "provident_fund_is_mandatory": true,
        "alldataindex": null
      }
    ];


    setTimeout(() => {
      this.scrollDivId = '1';
      let yOffset = document.getElementById(this.scrollDivId).offsetTop;
      this.content.scrollTo(0, yOffset, 3000);
      // this.content.scrollToBottom(0)
    }, 400);

    //  let obj={"CPerson":'',"Cnumber":'',"drpdata":'',"cAddress":''}
    // this.formarr.push(obj);
  }


  editform(edit_data, k) {
    this.isSubmit= false;
    this.buttomtxtcheck = '2';
    // this.buttomtxt='Update';
    this.form_auto_id = edit_data.auto_id;
    this.is_minor = edit_data.is_minor;
    this.isMiinor = edit_data.is_minor;
    this.editArray = [
      {
        "Address": "",
        "dob": "",
        "minor_address": '',
        "minor_name": "",
        "minor_rel": "",
        "nominee_name": "",
        "nominee_relation": "",
        "provident_fund": "",

        "Address_is_mandatory": null,
        "dob_is_mandatory": null,
        "minor_address_is_mandatory": null,
        "minor_name_is_mandatory": null,
        "minor_rel_is_mandatory": null,
        "nominee_name_is_mandatory": null,
        "nominee_relation_is_mandatory": null,
        "provident_fund_is_mandatory": null,
        "alldataindex": k
        // "CPersontooltip":"",
        // "Cnumbertooltip":"",
        // "drpdatatooltip":"",
        // "cAddresstooltip":"",
        // "CPersonhintapplicable":"",
        // "Cnumberhintapplicable":"",
        // "drpdatahintapplicable":"",
        // "cAddresshintapplicable":"",
      }
    ]
    // this.formobj={"CPerson":this.alldata[k].emg_contact_name,
    // "Cnumber":this.alldata[k].emg_contact_number,"drpdata":this.alldata[k].emg_contact_relation,"cAddress":this.alldata[k].emg_contact_address}

    // this.formarr.push(this.formobj); 



    this.editArray[0].Address = this.allData[k].address.value;
    this.editArray[0].dob = this.allData[k].dob.value;
    this.editArray[0].minor_address = this.allData[k].minor_address.value;
    this.editArray[0].minor_name = this.allData[k].minor_name.value;
    this.editArray[0].minor_rel = this.allData[k].minor_rel.value;
    this.editArray[0].nominee_name = this.allData[k].nominee_name.value;
    this.editArray[0].nominee_relation = this.allData[k].nominee_relation.value;
    this.editArray[0].provident_fund = this.allData[k].provident_fund.value;


    this.editArray[0].Address_is_mandatory = this.allData[k].address.is_mandatory;
    this.editArray[0].dob_is_mandatory = this.allData[k].dob.is_mandatory;
    this.editArray[0].minor_address_is_mandatory = this.allData[k].minor_address.is_mandatory;
    this.editArray[0].minor_name_is_mandatory = this.allData[k].minor_name.is_mandatory;
    this.editArray[0].minor_rel_is_mandatory = this.allData[k].minor_rel.is_mandatory;
    this.editArray[0].nominee_name_is_mandatory = this.allData[k].nominee_name.is_mandatory;
    this.editArray[0].nominee_relation_is_mandatory = this.allData[k].nominee_relation.is_mandatory;
    this.editArray[0].provident_fund_is_mandatory = this.allData[k].provident_fund.is_mandatory;



    this.editArray[0].Address_is_mandatory_hint = this.allData[k].address.hint;
    this.editArray[0].dob_is_mandatory_hint = this.allData[k].dob.hint;
    this.editArray[0].minor_address_is_mandatory_hint = this.allData[k].minor_address.hint;
    this.editArray[0].minor_name_is_mandatory_hint = this.allData[k].minor_name.hint;
    this.editArray[0].minor_rel_is_mandatory_hint = this.allData[k].minor_rel.hint;
    this.editArray[0].nominee_name_is_mandatory_hint = this.allData[k].nominee_name.hint;
    this.editArray[0].nominee_relation_is_mandatory_hint = this.allData[k].nominee_relation.hint;
    this.editArray[0].provident_fund_is_mandatory_hint = this.allData[k].provident_fund.hint;



    this.editArray[0].Address_is_mandatory_hint_applicable = this.allData[k].address.hint_applicable;
    this.editArray[0].dob_is_mandatory_hint_applicable = this.allData[k].dob.hint_applicable;
    this.editArray[0].minor_address_is_mandatory_hint_applicable = this.allData[k].minor_address.hint_applicable;
    this.editArray[0].minor_name_is_mandatory_hint_applicable = this.allData[k].minor_name.hint_applicable;
    this.editArray[0].minor_rel_is_mandatory_hint_applicable = this.allData[k].minor_rel.hint_applicable;
    this.editArray[0].nominee_name_is_mandatory_hint_applicable = this.allData[k].nominee_name.hint_applicable;
    this.editArray[0].nominee_relation_is_mandatory_hint_applicable = this.allData[k].nominee_relation.hint_applicable;
    this.editArray[0].provident_fund_is_mandatory_hint_applicable = this.allData[k].provident_fund.hint_applicable;


    console.log("this.editArray", this.editArray);
    setTimeout(() => {
      this.scrollDivId = '1';
      let yOffset = document.getElementById(this.scrollDivId).offsetTop;
      this.content.scrollTo(0, yOffset, 3000);
    }, 400);

  }

  deleteform() {
    this.isSubmit = true;
    this.editArray = [];
    if (this.allData.length >= 1 && ( this.first_attempt == 0)) {
      // this.buttomtxtcheck='2';
      this.buttomtxt = 'Submit';
    }

    // if(this.btncheck==0 && this.first_attempt==){

    // }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EpfNominationPage');
  }

  dateChanged() {
    console.log("date", this.editArray[0].dob);
    this.showgdiv = 0;
    this.isMiinor = 0;
    let previousYear = new Date(this.editArray[0].dob);
    let currentYear = new Date();
    this.currentage = currentYear.getFullYear() - previousYear.getFullYear();
    if (this.currentage <= this.minerage) {
      this.showgdiv = 1;
      this.isMiinor = 1;
    }
    console.log(currentYear.getFullYear() - previousYear.getFullYear());


  }



  fun(keyforhit) {
    this.isSubmit = true;
    console.log("this.formobj", keyforhit);
    console.log("this.this.allData", this.allData);
    console.log("this.formobj", this.editArray[0].provident_fund);
    console.log("this.formobj.length", this.editArray.length);
    if(keyforhit==0){
      this.allData[this.editArray[0].alldataindex].provident_fund.value = this.editArray[0].provident_fund;
    }
   
    // console.log("this.formobj.length", this.allData[this.editArray[0].alldataindex].provident_fund.value);
    this.pfId = false; this.nAddress = false; this.rdob = false; this.nomineename = false;
    this.rnominee_relation = false; this.rprovident_fund = false; this.rminor_address = false;
    this.rminor_name = false; this.rminor_rel = false;
    this.epfcount = 0; this.totalepfcount = 0;
    for (let count = 0; count < this.allData.length; count++) {
      this.epfcount = this.epfcount + parseInt(this.allData[count].provident_fund.value);
    }
    if (this.userDetail.pf_number.is_mandatory && (this.userDetail.pf_number.value == ''
      || this.userDetail.pf_number.value == undefined)) {
      this.pfId = this.userDetail.pf_number.is_mandatory;
      this.msg = 'All fields are mandatory.';
      this.apiMessage(this.msg);
      setTimeout(() => {

        let yOffset = document.getElementById(this.pfId).offsetTop;
        this.content.scrollTo(0, yOffset, 3000)
      }, 400);


      return false;
    }

    // console.log("this.formobj[x].CPerson",this.editArray[0].CPerson);
    console.log("this.editArray111", this.editArray);
    console.log("this.epfcount", this.epfcount);
    for (let x = 0; x < this.editArray.length; x++) {
      if(keyforhit==1){
        this.epfcount=parseInt(this.editArray[x].provident_fund)+this.epfcount;
      }
      

      console.log("this.totalepfcount", this.totalepfcount);
      console.log("this.editArray", this.editArray);
      //  this.ansarray=[{""}] 
      if (this.editArray[x].Address_is_mandatory &&
        (this.editArray[x].Address == '' || this.editArray[x].Address == undefined)) {
        console.log("this.formarr[x]", this.editArray[x]);
        //  this.classkey=x;
        this.msg = 'All fields are mandatory.';
        this.apiMessage(this.msg);
        this.nAddress = this.editArray[x].Address_is_mandatory;
        return false;
      }
      else if (this.editArray[x].dob_is_mandatory &&
        (this.editArray[x].dob == '' || this.editArray[x].dob == undefined)) {
        // this.classkey=x;
        this.msg = 'All fields are mandatory.';
        this.apiMessage(this.msg);
        this.rdob = this.editArray[x].dob_is_mandatory;
        console.log("this.formarr[x]", this.editArray[x]);
        return false;
      }

      else if (this.editArray[x].nominee_name_is_mandatory &&
        (this.editArray[x].nominee_name == '' || this.editArray[x].nominee_name == undefined)) {
        // this.classkey=x;
        // setTimeout(() => {

        // }, 300);

        this.msg = 'All fields are mandatory.';
        this.apiMessage(this.msg);
        console.log("this.formarr[x]", this.editArray[x].nominee_name_is_mandatory);

        // this.zone.run(() => { 
        this.nomineename = this.editArray[x].nominee_name_is_mandatory;
        console.log("this.formarr[x]", this.nomineename);
        // })
        return false;
      }
      else if (this.editArray[x].nominee_relation_is_mandatory &&
        (this.editArray[x].nominee_relation == '' || this.editArray[x].nominee_relation == undefined)) {
        // this.classkey=x
        this.msg = 'All fields are mandatory.';
        this.apiMessage(this.msg);
        console.log("this.formarr[x]", this.editArray[x]);
        this.rnominee_relation = this.editArray[x].nominee_relation_is_mandatory;
        return false;
      }
      else if (this.editArray[x].provident_fund_is_mandatory &&
        (this.editArray[x].provident_fund == '' || this.editArray[x].provident_fund == undefined
          || this.editArray[x].provident_fund == 0 || this.editArray[x].provident_fund == '0')) {
        // this.classkey=x;
        this.msg = 'All fields are mandatory.';
        this.apiMessage(this.msg);
        console.log("this.formarr[x]", this.editArray[x]);
        this.rprovident_fund = this.editArray[x].provident_fund_is_mandatory;
        return false;
      }
      else if (this.epfcount > 100) {
        this.msg = 'Funds should  be  100.';
        this.apiMessage(this.msg);
        this.rprovident_fund = this.editArray[x].provident_fund_is_mandatory;
      }

      else if ((this.is_minor == '1' || this.showgdiv == 1) &&
        (this.editArray[x].minor_address == '' || this.editArray[x].minor_address == undefined)) {
        this.msg = 'All fields are mandatory.';
        this.apiMessage(this.msg);
        console.log("this.formarr[x]", this.editArray[x]);
        this.rminor_address = this.editArray[x].minor_address_is_mandatory;
        return false;
      }

      else if ((this.is_minor == '1' || this.showgdiv == 1) &&
        (this.editArray[x].minor_name == '' || this.editArray[x].minor_name == undefined)) {
        this.msg = 'All fields are mandatory.';
        this.apiMessage(this.msg);
        console.log("this.formarr[x]", this.editArray[x]);
        this.rminor_name = this.editArray[x].minor_name_is_mandatory;
        return false;
      }

      else if ((this.is_minor == '1' || this.showgdiv == 1) &&
        (this.editArray[x].minor_rel == '' || this.editArray[x].minor_rel == undefined)) {

        this.msg = 'All fields are mandatory.';
        this.apiMessage(this.msg);
        console.log("this.formarr[x]", this.editArray[x]);
        this.rminor_rel = this.editArray[x].minor_rel_is_mandatory;
        return false;
      }  else if (keyforhit == 1 && this.allData.length == 2 && this.epfcount!=100) {
          
            this.msg = 'Funds should  be  100.';
            this.apiMessage(this.msg);
            this.rprovident_fund = this.editArray[x].provident_fund_is_mandatory;
        
      }
      else if (keyforhit == 0 && this.allData.length == 3 && this.epfcount!=100) {
          
        this.msg = 'Funds should  be  100.';
        this.apiMessage(this.msg);
        this.rprovident_fund = this.editArray[x].provident_fund_is_mandatory;
    
  }




      else {
        //call submit api
        // alert(keyforhit);
        this.submitObj = {
          "nominee_name": this.editArray[0].nominee_name,
          "address": this.editArray[0].Address,
          "nominee_relation": this.editArray[0].nominee_relation,
          "dob": this.editArray[0].dob,
          "provident_fund": this.editArray[0].provident_fund,
          "is_minor": this.isMiinor,
          "minor_name": this.editArray[0].minor_name,
          "minor_rel": this.editArray[0].minor_rel,
          "minor_address": this.editArray[0].minor_address
        }
        console.log("this.submitObj", this.submitObj);
        if (keyforhit == 0) {
          this.update();
        }
        else {
          this.save();
        }

      }
    }
  }


  update() {
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
        "data": this.submitObj,
        "auto_id": this.form_auto_id,
        "account_number": this.userDetail.pf_number.value
      }


      this.apiServices.India_EPfForm_update(apiKey, this.login_token).subscribe(res => {
        console.log('tnc res==', res);
        this.loading.dismiss();
        if (res.success == 1) {
          console.log('succ');
          this.apiMessage(res.message);
          this.allData = [];
          this.editArray = [];
          this.gform();
          // this.emergency_fetch();

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


  save() {
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
        "data": this.submitObj,
        "account_number": this.userDetail.pf_number.value
        // "auto_id":this.form_auto_id
      }


      this.apiServices.India_EPfForm_save(apiKey, this.login_token).subscribe(res => {
        console.log('tnc res==', res);
        this.loading.dismiss();
        if (res.success == 1) {
          console.log('succ');
          this.apiMessage(res.message);
          this.allData = [];
          this.editArray = [];
          this.gform();

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



  showConfirm(edit_data, ind) {
    if(this.allData.length != 1) {
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
              this.deletecard(edit_data, ind)
            }
          }
        ]
      });
      confirm.present();
    } else {
      this.apiMessage('Please edit information insted of deleting.');
    }
  
  }


  deletecard(edit_data, ind) {
    this.isSubmit = true;
    console.log('called clicked*****');

    this.form_auto_id = edit_data.auto_id;
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
        "auto_id": this.form_auto_id,
        "card_len": this.allData.length
      };
      this.apiServices.India_EPfForm_delete(apiKey, this.login_token).subscribe(res => {
        console.log('tnc res==', res);
        this.loading.dismiss();
        if (res.success == 1) {

          this.apiMessage(res.message);
          // this.alldata=res.data.emergency;
          // this.btncheck=res.fill_status;
          // this.buttomtxt=res.button_text;
          this.editArray = [];
          this.allData = [];
          this.gform();
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




  submit() {
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
        "content_id": "",
        "data_dump": this.allData
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
          console.log('succ', );
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


interface data {
  is_enable ?: boolean, 
  hint_applicable ?: boolean, 
  hint ?: string, 
  value ?: string, 
  is_mandatory ?: boolean
}
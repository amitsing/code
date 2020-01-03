import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, Platform } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-urllist',
  templateUrl: 'urllist.html',
})
export class UrllistPage {
  otherInstruction: string;
  over_all_progress: any;
  iframeurl: string;
  url: any;
  groupname: any;
  groupid: any;
  urllist: any;
  employeeId: any;
  deviceId: any;
  token: string;
  allData: any; login_token: any;
  apiData: any; title: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private alertCtrl: AlertController, private platform: Platform, public toastCtrl: ToastController, private storage: Storage, private apiServices: ApiServiceProvider) {
    this.urllist = [{ 'url': 'this is first url', 'id': '1' }, { 'url': 'this is second url', 'id': '2' },
    { 'url': "https://jobsuat.evalueserve.com/", 'id': '3' }, { 'url': 'this is fourth url', 'id': '4' }];

    this.groupid = this.navParams.get('grpid');
    this.title = this.navParams.get('title');
    console.log('title', this.title);
    this.groupname = this.navParams.get('groupname');
    console.log('grpppp', this.groupname);
    this.storage.get('employeeId').then(data => {
      this.employeeId = data;
      console.log(' employeeId== ', this.employeeId);
    });
    this.storage.get('deviceId').then(data => {
      this.deviceId = data;
    });
    // this.login();

  }

  formlist() {
    this.storage.get('employeeId').then(data => {
      this.employeeId = data;
      console.log(' employeeId== ', this.employeeId);
    });
    this.storage.get('login_token').then((data) => {
      console.log('showOnBoard value is111==', data);
      this.login_token = data;
    })
    this.storage.get('deviceId').then(data => {
      this.deviceId = data;
      //  this.token='Q3owSXo3T05BVVJscHREVCsyeUtqZz09OjoWf4jZSksqJnff2wxdlZ7e'
      let apiKey = {

        "client_id": this.apiServices.clientId,
        "employee_id": this.employeeId,
        "device": this.apiServices.device,
        "device_id": this.deviceId,
        "app_version": this.apiServices.appVersion,
        "group_id": this.groupid

      };
      this.apiServices.urllist(apiKey, this.login_token)
        .subscribe((res) => {
          // this.apiServices.urllist(apiKey,this.token).then((result) => { 
          console.log('', res);
          this.apiData = res;
          // this.over_all_progress=this.apiData.this.apiData;
          if (res.success == 1) {
            if (res.hasOwnProperty('other_instructions')) {
              this.otherInstruction = res['other_instructions'];
            }
            this.allData = res.data;
            console.log('succ', this.allData);
          } else {
            this.apiMessage(res.message);
          }

        }, (err) => {
          console.log('err== ', err);
          this.apiMessage(err);

        });

    });
  }
  apiMessage(message) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  gotoiframe(i) {
    console.log("index", i);
    console.log("indexdata", this.urllist[i].url);
    this.navCtrl.push('GotonewPage', { 'data': this.urllist[i].url });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad UrllistPage');
  }

  // subcategoryiframe(index,formdata){
  // if(formdata[index].form_link=='china_consent_english'){
  //   this.navCtrl.push('ChinaconsentPage',{"form_id":formdata[index].form_id});
  // }
  // if(formdata[index].form_link=='all_global_policy'){
  //   this.navCtrl.push('GlobalpolicylistPage',{"form_id":formdata[index].form_id});
  // }

  // if(formdata[index].form_link=='china_emergency_contact'){
  //   this.navCtrl.push('ChinaemergencycontactPage',{"data":formdata[index]});
  // }

  // if(formdata[index].form_link=='china_declaration_form'){
  //   this.navCtrl.push('ChinadeclarationPage',{"data":formdata[index]});
  // }


  // this.navCtrl.push('BeneficiaryformPage');
  // this.navCtrl.push('BasicDetailsPage');
  // this.navCtrl.push('GenralInformationPage');
  // this.navCtrl.push('RevenueandcustomPage');
  // this.navCtrl.push('ChinadeclarationPage');


  //     if(formdata[index].form_status=='enable' || formdata[index].form_status=='complete'){
  //     if(formdata[index].is_sub_available=='0' || formdata[index].is_sub_available==0){
  // if(formdata[index].type=='1' || formdata[index].type==1){
  //    if(formdata[index].form_name=='Declaration'){
  //   this.navCtrl.push('JoineedeclarationPage');
  //    }
  //   else if(formdata[index].form_name=='GDPR Consent'){
  //     this.navCtrl.push('GdpRconsentPage');
  //   }

  //    else{
  // this.url=formdata[index].flag;
  // this.iframeurl=this.url+'?'+this.employeeId+'';
  // console.log("this.iframe",this.iframeurl);
  // this.navCtrl.push('BackcheckiframePage',{'url':this.iframeurl,'title':formdata[index].form_name});
  //    }

  // }
  // if(formdata[index].type=='2' || formdata[index].type==2){
  //   if(formdata[index].flag=='profile'){
  // this.navCtrl.push('InstructionPage');

  // this.navCtrl.push('InstructionPage',{'flag':formdata[index].flag,'formid':formdata[index].form_id, 'data':formdata[index]});
  //   }
  // }
  //     }
  //    if(formdata[index].is_sub_available=='1' || formdata[index].is_sub_available==1){

  //     this.navCtrl.push('FormsinstructionPage',{'title':formdata[index].form_name,'formid':formdata[index].form_id,'instruction':formdata[index].instruction});


  // this.navCtrl.push('BackgroundcheckPage',{'title':formdata[index].form_name,'formid':formdata[index].form_id});
  //    }

  //   }



  // }



  subcategoryiframe(index, formdata) {


    // if (
    //   formdata[index].form_status == "enable" ||
    //   formdata[index].form_status == "complete"
    // ) {



    if (formdata[index].form_group_status == "lock") {

    }
    else {
      //   if (
      //     formdata[index].is_sub_available == "0" ||
      //     formdata[index].is_sub_available == 0
      //   ) {
      //     if (formdata[index].type == "1" || formdata[index].type == 1) {
      //       // this wiil go to iframe
      //       // if(formdata[index].form_id='12'){
      //       //  this.navCtrl.push('DeclarationPage');
      //       // }
      //       // else{
      //       // this.url = formdata[index].flag;
      //       // this.iframeurl = this.url + "?" + this.employeeId + "";
      //       // console.log("this.iframe", this.iframeurl);
      //       // this.navCtrl.push("BackcheckiframePage", {
      //       //   url: this.iframeurl,
      //       //   title: formdata[index].form_name
      //       // });
      //       // }
      this.goToForm(formdata[index]);
    }


    //     if (formdata[index].type == "2" || formdata[index].type == 2) {
    //       if (formdata[index].flag == "profile") {
    //         // this.navCtrl.push('InstructionPage');
    //         this.navCtrl.push("InstructionPage", {
    //           flag: formdata[index].flag,
    //           formid: formdata[index].form_id,
    //           data: formdata[index]
    //         });
    //       }
    //     }
    //   }
    //   if (
    //     formdata[index].is_sub_available == "1" ||
    //     formdata[index].is_sub_available == 1
    //   ) {
    //     this.navCtrl.push("FormsinstructionPage", {
    //       title: formdata[index].form_name,
    //       formid: formdata[index].form_id,
    //       instruction: formdata[index].instruction
    //     });
    //     // this.navCtrl.push('BackgroundcheckPage',{'title':formdata[index].form_name,'formid':formdata[index].form_id});
    //   }
    // }

  }







  ionViewWillEnter() {
    this.formlist();
  }

  showRejectionResigion(msg) {
    console.log('msg', msg)

    this.alertfunction(msg);
  }

  alertfunction(msg) {
    let alert = this.alertCtrl.create({
      // title: 'SIGNOUT!',
      message: msg,
      // enableBackdropDismiss: false,
      buttons: [
        {
          text: 'Ok',
          handler: () => {

            // this.gothroughalertnextques();
          }
        },
      ]

    });

    alert.present();

  }

  goToForm(data) {

    if (data.country_id == "2" || data.country_id == "1") {
      /// for india
      if (data.form_link == "general_other_info") {
        this.navCtrl.push("BasicDetailsPage", { data: data });
      } else if (data.form_link == "profile") {
        this.navCtrl.push("InstructionPage", { data: data });
      } else if (data.form_link == "get_family_data") {
        this.navCtrl.push("FamilyDetailsPage", { data: data });
      } else if (data.form_link == "get_gratuity_data") {
        this.navCtrl.push("NomineesPage", { data: data });
      } else if (data.form_link == "get_contect_data") {
        this.navCtrl.push("IndiaEmgContactPage", { data: data });
      } else if (data.form_link == "get_pf_form_data") {
        this.navCtrl.push("FormElevenPage", { data: data });
      } else if (data.form_link == "india_declaration_form") {
        this.navCtrl.push("PolicyDeclarationPage", { data: data });
      } else if (data.form_link == "india_gdpr_policy") {
        this.navCtrl.push("CompanyPolicyPage", { data: data });
      } else if (data.form_link == "india_gdpr_consent_policy") {
        this.navCtrl.push("EmployeeConsentFormPage", { data: data });
      } else if (data.form_link == "india_declaration_policy") {
        this.navCtrl.push("PolicyDeclarationPage", { data: data });
      } else if (data.form_link == "all_global_policy") {
        this.navCtrl.push("GlobalpolicylistPage", { data: data });
      } else if (data.form_link == "india_insurance_form") {
        this.navCtrl.push("IndiaInsurancePage", { data: data });
      } else if (data.form_link == "india_epf_form") {
        this.navCtrl.push("EpfNominationPage", { data: data });
      } else if (data.form_link == "LTA") {
        this.navCtrl.push("TravelassitancePage", { data: data });
      } else if (data.form_link == "NPS") {
        this.navCtrl.push("PansionschemePage", { data: data });
      } else if (data.form_link == "Sodexo") {
        this.navCtrl.push("SodexomealvoucherPage", { data: data });
      } else if (data.form_link == "bank_detail") {
        this.navCtrl.push("ChoiceofbankaccountPage", { data: data });
      } else if (data.form_link == "carhire") {
        this.navCtrl.push("CarhirePage", { data: data });
      }
    }


    else if (data.country_id == '3') //// for chille
    {
      if (data.form_link == 'chille_background') //// Background Verification
      {
        this.navCtrl.push('BackgroundVerificationPage', { 'data': data });
      }
      else if (data.form_link == 'chille_conesnt') //// consent form
      {
        this.navCtrl.push('EmployeeConsentFormPage', { 'data': data });
      }
      else if (data.form_link == 'chille_onboarding') //// onboarding form
      {
        this.navCtrl.push('OnboardingFormPage', { 'data': data });
      }
      else if (data.form_link == 'chile_declaration_form') //// Declaration
      {
        this.navCtrl.push('DeclarationPage', { 'data': data })
      }
      else if (data.form_link == 'chille_compliance_undertaking')  //// company policy
      {
        this.navCtrl.push('CompanyPolicyPage', { 'data': data })
      }
      else if (data.form_link == 'all_global_policy') //// global policy booklet
      {
        this.navCtrl.push('GlobalpolicylistPage', { "data": data });
      }
      else if (data.form_link == 'chile_declaration_policy')  //// policy declaration
      {
        this.navCtrl.push('PolicyDeclarationPage', { 'data': data });
      }
    }
    else if (data.country_id == '5' || data.country_id == '1') //// for romania
    {
      if (data.form_link == 'romania_declaration_form')  //romania declaration
      {
        this.navCtrl.push('RomaniaCommonPage', { 'data': data });
      }
      else if (data.form_link == 'romania_labor_contract')  // romania labour contract
      {
        this.navCtrl.push('RomaniaCommonPage', { 'data': data });
      }
      else if (data.form_link == 'romania_nda')  // romania nda
      {
        this.navCtrl.push('RomaniaCommonPage', { 'data': data });
      }
      else if (data.form_link == 'romania_consent')  // romania consent
      {
        this.navCtrl.push('RomaniaCommonPage', { 'data': data });
      }
      else if (data.form_link == 'romania_consimtamant')  // romania consinment
      {
        this.navCtrl.push('RomaniaCommonPage', { 'data': data });
      }
      else if (data.form_link == 'romania_mandat')  // romania mandat
      {
        this.navCtrl.push('RomaniaCommonPage', { 'data': data });
      }
      else if (data.form_link == 'romania_deduction')  // romania duduction
      {
        this.navCtrl.push('RomaniaCommonPage', { 'data': data });
      }
      else if (data.form_link == 'romania_gdpr_compliance')  // romania gdpr
      {
        this.navCtrl.push('RomaniaCommonPage', { 'data': data });
      }
      else if (data.form_link == 'romania_first_day')  // romania firstday
      {
        this.navCtrl.push('RomaniaCommonPage', { 'data': data });
      }
      else if (data.form_link == 'romania_evaluation')  // romania evaluation
      {
        this.navCtrl.push('RomaniaCommonPage', { 'data': data });
      }
      else if (data.form_link == 'romania_nda_policy')  // policy romania evaluation
      {
        this.navCtrl.push('RomaniaCommonPage', { 'data': data });
      }
      else if (data.form_link == 'romania_declaration_policy')  // policy romania evaluation
      {
        this.navCtrl.push('PolicyDeclarationPage', { 'data': data });
      }
      else if (data.form_link == 'romania_gdpr_policy')  // policy romania evaluation
      {
        this.navCtrl.push('RomaniaCommonPage', { 'data': data });
      }
      else if (data.form_link == 'romania_mandat_policy')  // policy romania evaluation
      {
        this.navCtrl.push('RomaniaCommonPage', { 'data': data });
      }
      else if (data.form_link == 'romania_evalutation_policy')  // policy romania evaluation
      {
        this.navCtrl.push('RomaniaCommonPage', { 'data': data });
      }
      else if (data.form_link == 'romania_global_policy')  // policy romania evaluation
      {
        this.navCtrl.push('GlobalpolicylistPage', { 'data': data });
      }
    }
    else if (data.country_id == '6' || data.country_id == '1')  //// for china
    {

      if (data.form_link == 'china_consent_english')  //china consent
      {
        this.navCtrl.push('ChinaconsentPage', { "data": data });
      }
      else if (data.form_link == 'china_emergency_contact') //
      {
        this.navCtrl.push('ChinaemergencycontactPage', { "data": data });
      }
      else if (data.form_link == 'all_global_policy') {
        this.navCtrl.push('GlobalpolicylistPage', { "data": data });
      }
      else if (data.form_link == 'china_acknowledge_receipt')  //// company policy
      {
        this.navCtrl.push('CompanyPolicyPage', { 'data': data })
      }
      else if (data.form_link == 'china_personal_account_policy')  //// policy declaration
      {
        this.navCtrl.push('CompanyPolicyPage', { 'data': data })
      }
      else if (data.form_link == 'china_nda_policy')  //// policy declaration
      {
        this.navCtrl.push('CompanyPolicyPage', { 'data': data })
      }
      else if (data.form_link == 'china_acknowledge_receipt')  //// policy declaration
      {
        this.navCtrl.push('CompanyPolicyPage', { 'data': data })
      }
      else if (data.form_link == 'china_declaration_policy')  //// policy declaration
      {
        this.navCtrl.push('PolicyDeclarationPage', { 'data': data });
      }
      else if (data.form_link == 'china_declaration_form')  //// policy declaration
      {
        this.navCtrl.push('PolicyDeclarationPage', { 'data': data });
      }
      else if (data.form_link == 'china_nationality_declaration')  //// policy declaration
      {
        this.navCtrl.push('ChinaDeclarationFormPage', { 'data': data });
      }
      else if (data.form_link == 'china_gdpr_policy')  //// policy declaration
      {
        this.navCtrl.push('CompanyPolicyPage', { 'data': data })
      }
      else if (data.form_link == 'china_gdprcompliance_policy')  //// policy declaration
      {
        this.navCtrl.push('CompanyPolicyPage', { 'data': data })
      }
    }
    else if (data.country_id == '7' || data.country_id == '1' || data.country_id == "8") //// for USA
    {
      if (data.form_link == 'usa_self_identification_form')  //china consent
      {
        this.navCtrl.push('EvalueserveSelfIdentificationPage', { "data": data });
      }
      else if (data.form_link == 'usa_new_joiner_form')  //// policy declaration 
      {
        this.navCtrl.push('UsnewjoineeformPage', { 'data': data })
      }
      else if (data.form_link == 'usa_background_form')  //// policy declaration
      {
        this.navCtrl.push('BackgroundVerificationUSAPage', { 'data': data })
      }
      else if (data.form_link == 'usa_corporate_form')  //// policy declaration
      {
        this.navCtrl.push('UsattendancesheetPage', { 'data': data })
      }
      else if (data.form_link == 'usa_gdprcompliance_form')  //// policy declaration
      {
        this.navCtrl.push('UsaconsentPage', { 'data': data })
      }
      else if (data.form_link == 'usa_mosn_caps_form' || data.form_link == 'usa_mosn_fs_form' ||
        data.form_link == 'usa_mosn_lshc_form' || data.form_link == 'usa_relocation_form'
      )  //// policy declaration
      {
        this.navCtrl.push('CompanyPolicyPage', { 'data': data })
      }
      else if (data.form_link == 'usa_declaration_form')  //// policy declaration
      {
        this.navCtrl.push('PolicyDeclarationPage', { 'data': data })
      }
      else if (data.form_link == 'usa_propretary_form')  //// policy declaration
      {
        this.navCtrl.push('ProprietaryInformationPage', { 'data': data })
      }
      else if (data.form_link == 'usa_whistleblower_policy' || data.form_link == 'usa_fraudprevention_policy' ||
        data.form_link == 'usa_hr_policy' || data.form_link == 'usa_benefits_booklet_policy' ||
        data.form_link == 'usa_authorise_representative_policy' || data.form_link == 'usa_domestic_relocation_policy' ||
        data.form_link == 'usa_2019_benefits_policy' || data.form_link == 'usa_2019_benefits_policy')  //// policy declaration
      {
        this.navCtrl.push('CompanyPolicyPage', { 'data': data })
      }
      else if (data.form_link == 'all_global_policy')  //// policy declaration
      {
        this.navCtrl.push('GlobalpolicylistPage', { 'data': data })
      }
      else if (data.form_link == 'usa_declaration_policy')  //// policy declaration
      {
        this.navCtrl.push('PolicyDeclarationPage', { 'data': data })
      }
    }

    else if (data.country_id == "4" || data.country_id == "1") {
      //// for UK
      if (data.form_link == "uk_personal_details_form") {
        this.navCtrl.push("PersonalCompliancePage", { data: data });
      } else if (data.form_link == "uk_group_protection_form") {
        this.navCtrl.push("BeneficiaryformPage", { data: data });
      } else if (data.form_link == "uk_hmrc_starter_checklist_form") {
        this.navCtrl.push("CompanyPolicyPage", { data: data });
      } else if (data.form_link == "uk_credit_card_application_form") {
        this.navCtrl.push("CreditCardPage", { data: data });
      } else if (data.form_link == "uk_personal_information_and_bank_details_form") {
        this.navCtrl.push("PersonaldetailsPage", { data: data });
      } else if (data.form_link == "uk_hr_gdpr_undertaking_form") {
        this.navCtrl.push("CompanyPolicyPage", { data: data });
      } else if (data.form_link == "uk_declaration_form") {
        this.navCtrl.push("DeclarationPage", { data: data });
      } else if (data.form_link == "all_global_policy") {
        this.navCtrl.push("GlobalpolicylistPage", { data: data });
      } else if (data.form_link == "uk_amendment_GPB-UK_form") {
        this.navCtrl.push("CompanyPolicyPage", { data: data });
      } else if (data.form_link == "uk_evalueserve_benefits_booklet_form") {
        this.navCtrl.push("CompanyPolicyPage", { data: data });
      } else if (data.form_link == "uk_gdpr_guidelines_form") {
        this.navCtrl.push("CompanyPolicyPage", { data: data });
      } else if (data.form_link == "uk_fraud_prevention_policy_form") {
        this.navCtrl.push("CompanyPolicyPage", { data: data });
      } else if (data.form_link == "uk_whistleblower_policy_form") {
        this.navCtrl.push("CompanyPolicyPage", { data: data });
      } else if (data.form_link == "uk_policyhandbook_form") {
        this.navCtrl.push("CompanyPolicyPage", { data: data });
      } else if (data.form_link == "uk_declaration_policy") {
        this.navCtrl.push("PolicyDeclarationPage", { data: data });
      }
    }
  }



}

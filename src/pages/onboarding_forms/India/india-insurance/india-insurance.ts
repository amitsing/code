import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, AlertController } from 'ionic-angular';
import { ApiServiceProvider } from '../../../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import { InsuranceData, Accidental, Self, Self_dependent, Family_Premium, FamilyFormField } from './response';
import { c, s } from '@angular/core/src/render3';
import { InsuranceSendData } from './request';

/**
 * Generated class for the IndiaInsurancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-india-insurance',
  templateUrl: 'india-insurance.html',
})
export class IndiaInsurancePage {

  public formData: any;
  employeeId: any;
  login_token: any;
  deviceId: any;
  loading: any;
  fill_status : any;
  isSubmited: boolean = false;
  data : InsuranceData;
  genderOption : any[];
  familyPremium : Family_Premium[] = [];
  familyFormFields : FamilyFormField[] = [];
  showForm : boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _apiService: ApiServiceProvider,
    private storage: Storage,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {
    this.storage.get("employeeId").then(data => {
      this.employeeId = data;
      console.log(" employeeId== ", this.employeeId);
      this.storage.get("login_token").then(data => {
        console.log("showOnBoard value is111==", data);
        this.login_token = data;
        this.storage.get("deviceId").then(data => {
          this.deviceId = data;
          this.getData();
          this.getDropDowns();
        });
      });
    });

    this.formData = this.navParams.get("data");
    // this.form_id = data.form_id;
  }

  getData() {
    this.commonLoader();
    let apikey = {
      client_id: this._apiService.clientId,
      employee_id: this.employeeId,
      device: this._apiService.device,
      device_id: this.deviceId,
      app_version: this._apiService.appVersion,
      form_id: this.formData.form_id
    };
    this._apiService
      .IndiaGetInsurane(apikey, this.login_token)
      .subscribe(res => {
        this.loading.dismiss();
        if(res.success == '1' ) {
          this.fill_status = res.fill_status;
          this.data = res.data;
          console.log(this.data);
          this.initialization();
        } else {
          this.apiMessage(res.message);
        }
      },(err)=>{
        this.loading.dismiss();
        this.apiMessage(err);
        this.navCtrl.pop();
      });
  }

    
  getDropDowns() {
    let apikey = {
      client_id: this._apiService.clientId,
      employee_id: this.employeeId,
      device: this._apiService.device,
      device_id: this.deviceId,
      app_version: this._apiService.appVersion,
      form_id: this.formData.form_id
    };
    this._apiService
      .IndiaFamilyDropDown(apikey, this.login_token)
      .subscribe(res => {
        console.log(res);
        this.genderOption = res.data.relationship;
      });
  }


  selectAccidental(item : Accidental) {
      this.data.accidental.forEach(element=>{
        if(item === element) {
         element.is_selected = !element.is_selected
        } else {
          element.is_selected = false;
        }
      })
  }
  
  selectSelf(item : Self) {
    this.data.mediclaim.self.forEach(element=>{
      if(item === element) {
       element.is_selected = !element.is_selected
      } else {
        element.is_selected = false;
      }
    })
  }

  selectSelfDependent(item : Self_dependent ) {
    this.familyFormFields = [];
    this.data.mediclaim.self_dependent.forEach(element=>{
      if(item === element) {
       element.is_selected = !element.is_selected;
       if(element.is_selected) {
          this.familyPremium = element.family_premium;
       } else {
        this.familyPremium = [];
       }
      } else {
        element.is_selected = false;
      }
    })
  }

  selectFamilyMember(item : Family_Premium) {
    item.is_selected = !item.is_selected;
    const count = this.familyFormFields.length;

    if(item.is_selected) {
      
      this.data.familyData.forEach(element=>{
        if(item.relation_type == element.relation_type){
          let tempData : FamilyFormField = new FamilyFormField();

          tempData.auto_id = item.auto_id;
          tempData.dependent_id = item.dependent_id;
          tempData.family_id = item.family_id;
          tempData.relation_type = item.relation_type;
          tempData.member_relation.value = item.relation_name;
          tempData.member_relation.is_enable = false;
          tempData.member_relation.is_mandatory = false;
          tempData.member_relation.hint_applicable = false;
          tempData.member_relation.hint = "";

          tempData.gender.InitializeMetaData(element.gender);
          tempData.member_name.InitializeMetaData(element.member_name);
          tempData.member_dob.InitializeMetaData(element.member_dob);

          this.familyFormFields.push(tempData);
        } 
      });
      if(count == this.familyFormFields.length) {
        let tempData : FamilyFormField = new FamilyFormField();

        tempData.auto_id = item.auto_id;
        tempData.family_id = item.family_id;
        tempData.relation_type = item.relation_type;
        tempData.dependent_id = item.dependent_id;

        tempData.member_relation.value = item.relation_name;
        tempData.member_relation.is_enable = false;
        tempData.member_relation.is_mandatory = false;
        tempData.member_relation.hint_applicable = false;
        tempData.member_relation.hint = "";

        this.familyFormFields.push(tempData);
      }
    } else {
        this.familyFormFields = this.familyFormFields.filter(data=>{
            return data.member_relation.value != item.relation_name;
        })
    }

    console.log(this.familyFormFields);
  }

  getTotal() : string {
    let count = 0;
    let SelfPremiumAmmount :number = 0;
    this.data.mediclaim.self_dependent.forEach(element=>{
       if(element.is_selected) {
          SelfPremiumAmmount += parseInt(element.annual_premium);
          element.family_premium.forEach(item=>{
            if(item.is_selected){
              SelfPremiumAmmount += parseInt(item.annual_premium);
            }
          }) 
       } 
    });
    count = SelfPremiumAmmount;
    return count.toString();
  }

  // 1 == self
  // 2 == self_dependent
  changeMediclaimStatus(num:number) {
    if(num == 1) {
      this.data.mediclaim.self_selected = true;
      this.showForm = false;
    } else if (num == 2) {
      this.data.mediclaim.self_selected = false;
      // this.showForm = true;
    }
  }

  checkStatus() : boolean {
    let status = false;
    if(this.data.accidental) {
      this.data.accidental.forEach(element => {
        if(element.is_selected) {
          status = true;
        } 
      });
      if(!status) {
        this.apiMessage('Please select atleast one accidental insurance plan.');
        return status;
      }
    } 
    if(!this.data.mediclaim.self_selected) {
      status = false;
      this.familyPremium.forEach(element=>{
        if(element.is_selected) {
          status = true;
        } 
      })
      if(!status) {
        this.apiMessage('Please select atleast one dependant to cover.')
      }
    } else {
      status = false;
      this.data.mediclaim.self.forEach(element=>{
        if(element.is_selected) {
          status = true;
        }
      });
      if(!status) {
        this.apiMessage('Please select atleast one option.')
      }
    }
    return status;
  }

  submit(): void {
    this.isSubmited = true;
    setTimeout(() => {
      const child = document.querySelector(".error");
      if (!child ) {
        if(this.checkStatus()){
          if(this.fill_status == '0') {
            this.save();
          } else {
            this.final_Submit();
          }
        } 
      } else {
        const subChild = child.querySelector("input");
        console.log(subChild);
        if (subChild) {
          subChild.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest"
          });
          setTimeout(() => {
            subChild.focus();
          }, 1000);
        } else {
          child.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest"
          });
          
        }
      }
    }, 100);
  }

  showForms() {
    if(this.familyFormFields.length > 0) {
      this.showForm = !this.showForm;
    } else if(this.familyFormFields.length == 0){
      this.apiMessage('Please select atleast one dependant to cover.')
      this.showForm = false;
    }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad IndiaInsurancePage');
  }

  initialization() {
    this.data.mediclaim.self_dependent.forEach(element=>{
      if(element.is_selected) {
        this.familyPremium = element.family_premium;
        element.family_premium.forEach(data=>{
          if(data.is_selected) {
            this.data.familyData.forEach(ele=>{
                if(data.relation_type == ele.relation_type){
                  let tempData : FamilyFormField = new FamilyFormField();

                  tempData.auto_id = data.auto_id;
                  tempData.family_id = data.family_id;
                  tempData.dependent_id = data.dependent_id;
                  tempData.relation_type = data.relation_type;
                  tempData.member_relation.value = data.relation_name;
                  tempData.member_relation.is_enable = false;
                  tempData.member_relation.is_mandatory = false;
                  tempData.member_relation.hint_applicable = false;
                  tempData.member_relation.hint = "";
      
                  tempData.gender.InitializeMetaData(ele.gender);
                  tempData.member_name.InitializeMetaData(ele.member_name);
                  tempData.member_dob.InitializeMetaData(ele.member_dob);

                  this.familyFormFields.push(tempData);
                }
            })
          }
        })
      }
    });
    console.log(this.familyFormFields);
  }

  save() {
      let data : InsuranceSendData =  new InsuranceSendData( this.data, this.familyFormFields );
      this.commonLoader();
      let apikey = {
        client_id: this._apiService.clientId,
        employee_id: this.employeeId,
        device: this._apiService.device,
        device_id: this.deviceId,
        app_version: this._apiService.appVersion,
        form_id: this.formData.form_id,
        data: data
      };
      this._apiService
        .IndiaSaveInsuraneDetails(apikey, this.login_token)
        .subscribe(res => {
          this.loading.dismiss();
          if(res.success == '1'){
            this.apiMessage(res.message);
            this.navCtrl.pop();
          } else {
            this.apiMessage(res.message);
          }
          console.log(res);
        },err=>{
          this.loading.dismiss();
          this.apiMessage(err);
        });
  }
   
  final_Submit() {
    let data : InsuranceSendData =  new InsuranceSendData( this.data, this.familyFormFields );
      this.commonLoader();
      let apikey = {
        client_id: this._apiService.clientId,
        employee_id: this.employeeId,
        device: this._apiService.device,
        device_id: this.deviceId,
        app_version: this._apiService.appVersion,
        form_id: this.formData.form_id,
        data: data
      };
      this._apiService
        .IndiaSubmitInsuraneDetails(apikey, this.login_token)
        .subscribe(res => {
          this.loading.dismiss();
          if(res.success == '1'){
            this.apiMessage(res.message);
            this.navCtrl.pop();
          } else {
            this.apiMessage(res.message);
          }
          console.log(res);
        },err=>{
          this.loading.dismiss();
          this.apiMessage(err);
      });
  }
  
  //Common Loader:
  commonLoader() {
    this.loading = this.loadingCtrl.create({
      enableBackdropDismiss: true,
      spinner: "ios-small",
      content: "Loading data..."
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

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, Platform } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-backgroundcheck',
  templateUrl: 'backgroundcheck.html',
})
export class BackgroundcheckPage {
  showbutton: any;
  datalength: any;
  msg: string;
  iframeurl: string;
  url: any;
  formid: any;
  login_token: any;
  deviceId: any;
  employeeId: any;
  title: any;
  allData:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private alertCtrl: AlertController, private platform: Platform, public toastCtrl: ToastController, private storage: Storage, private apiServices: ApiServiceProvider) {
    this.title=this.navParams.get('title');
    this.formid=this.navParams.get('formid');
    this.storage.get('employeeId').then(data => {
      this.employeeId = data;
      console.log(' employeeId== ', this.employeeId);
    });
    this.storage.get('deviceId').then(data => {
      this.deviceId = data;
    });
    // this.backgroundapi();
  }


  backgroundapi() {
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
        "form_id": this.formid

      };
      this.apiServices.formsublist(apiKey, this.login_token)
        .subscribe((res) => {
          // this.apiServices.urllist(apiKey,this.token).then((result) => { 
          console.log('', res);
        
          if (res.success == 1) {
          this.datalength=res.data.length-1;
            console.log('datalength', this.datalength);
            // this.showbutton=res.data[this.datalength].admin_status;
            // console.log('showbutton', this.showbutton);
            this.allData = res.data;
            console.log('succ', this.allData);
          } else {
            this.allData=[];
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



  ionViewDidLoad() {
    console.log('ionViewDidLoad BackgroundcheckPage');
  }

  subcategoryiframe(index,allbackcheckdata){
    // this.employeeId
    if(allbackcheckdata[index].type=='1' && allbackcheckdata[index].type==1){
      this.url=allbackcheckdata[index].flag;
      console.log("this.iframeurlllll",this.url);
      if(this.url==undefined || this.url==''){
        this.msg='there is no Url';
        this.showRejectionResigion(this.msg);
      }else{
        this.iframeurl=this.url+'?'+this.employeeId+'';
        console.log("this.iframe",this.iframeurl);

if(allbackcheckdata[index].form_name=='Family Details'){
  this.navCtrl.push('FamilyandemergencycontactPage');
}
else if(allbackcheckdata[index].form_name=='Basic Details'){
  this.navCtrl.push('BasicDetailsPage');
}
else if(allbackcheckdata[index].form_name=='Nominee(s)'){
  this.navCtrl.push('NomineesPage');
}
// else if(allbackcheckdata[index].form_name=='Declaration'){
//   this.navCtrl.push('JoineedeclarationPage');
// }
else{
  this.navCtrl.push('GenralInformationPage');
}
       

        // this.navCtrl.push('BackcheckiframePage',{'url':this.iframeurl,'title':allbackcheckdata[index].form_name});
      }
      // this.navCtrl.push('FormsinstructionPage',{'url':this.iframeurl,'title':allbackcheckdata[index].form_name,
      // 'instruction':allbackcheckdata[index].instruction});  
    }
    
    if(allbackcheckdata[index].type=='2' && allbackcheckdata[index].type==2){
if(allbackcheckdata[index].flag=='LTA'){
  console.log('allbackcheckdata[index]',allbackcheckdata[index]);
this.navCtrl.push('TravelassitancePage',{'title':allbackcheckdata[index].form_name,
'flag':allbackcheckdata[index].flag,'data':allbackcheckdata[index]});
}
if(allbackcheckdata[index].flag=='NPS'){
  this.navCtrl.push('PansionschemePage',{'title':allbackcheckdata[index].form_name,
  'flag':allbackcheckdata[index].flag,'data':allbackcheckdata[index]});
  }

 if(allbackcheckdata[index].flag=='Sodexo'){
    this.navCtrl.push('SodexomealvoucherPage',{'title':allbackcheckdata[index].form_name,
    'flag':allbackcheckdata[index].flag,'data':allbackcheckdata[index]});

    // this.navCtrl.push('CarhirePage',{'title':allbackcheckdata[index].form_name,
    // 'flag':allbackcheckdata[index].flag,'data':allbackcheckdata[index]});

    } 
    
    if(allbackcheckdata[index].flag=='salary_summary'){
      this.navCtrl.push('SavingpreferencesPage',{'title':allbackcheckdata[index].form_name,
      'flag':allbackcheckdata[index].flag});
      }    
    }
    if(allbackcheckdata[index].flag=='bank_detail'){
      this.navCtrl.push('ChoiceofbankaccountPage',{'title':allbackcheckdata[index].form_name,
      'flag':allbackcheckdata[index].flag});
      }

      if(allbackcheckdata[index].flag=='carhire'){
        this.navCtrl.push('CarhirePage',{'title':allbackcheckdata[index].form_name,
     'flag':allbackcheckdata[index].flag,'data':allbackcheckdata[index]});
      }

  }


  ionViewWillEnter(){
    this.backgroundapi();
  }

  showRejectionResigion(msg){
    console.log('msg',msg)
    
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
      gotourllist(){
        this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-3));
      }

}

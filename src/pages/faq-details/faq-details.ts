import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the FaqDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage({name: 'FaqDetailsPage'})
@Component({
  selector: 'page-faq-details',
  templateUrl: 'faq-details.html',
})
export class FaqDetailsPage {
  loginToken: any;
  skelton = [
    { title: "Type 1 Diabetes", description: "Type 1 diabetes is an autoimmune disease in which the body’s immune system attacks and destroys the beta cells in the pancreas that make insulin." },
    { title: "Multiple Sclerosis", description: "Multiple sclerosis (MS) is an autoimmune disease in which the body's immune system mistakenly attacks myelin, the fatty substance that surrounds and protects the nerve fibers in the central nervous system." },
    { title: "Crohn's & Colitis", description: "Crohn's disease and ulcerative colitis (UC), both also known as inflammatory bowel diseases (IBD), are autoimmune diseases in which the body's immune system attacks the intestines." },
    { title: "Lupus", description: "Systemic lupus erythematosus (lupus) is a chronic, systemic autoimmune disease which can damage any part of the body, including the heart, joints, skin, lungs, blood vessels, liver, kidneys and nervous system." },
    { title: "Rheumatoid Arthritis", description: "Rheumatoid arthritis (RA) is an autoimmune disease in which the body's immune system mistakenly begins to attack its own tissues, primarily the synovium, the membrane that lines the joints." }
  ];
  shownGroup = null;
  deviceId:any;employeeId:any;
  allData:any;faqDetails:any;
  employeeType:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public toastCtrl: ToastController,private storage:Storage,private apiServices:ApiServiceProvider
    ) {
      this.faqDetails = this.navParams.get('data');
      // this.storage.get('deviceId').then(data=>{
      //   this.deviceId=data;
      //   console.log('login deviceId== ',this.deviceId)
      //  });
      //  this.storage.get('employeeId').then(data=>{
      //   this.employeeId=data;
      //   console.log('login employeeId== ',this.employeeId);
      //   // this.getFaq();
      //  });
       
      //  this.storage.get('showOnBoard').then(data=>{
      //   this.employeeType=data;
      //   console.log('login employeeId== ',this.employeeId);
      //   // this.getFaq();
      //  });
      //  this.storage.get('login_token').then(data=>{
      //   this.loginToken=data;
      //   console.log('login employeeId== ',this.employeeId);
      //   this.getFaq();
      //  });
  }

  getFaq(){
    let apiKey={
      "client_id":this.apiServices.clientId,
      "employee_id":this.employeeId,
      "device_id":this.deviceId,
      "app_version":this.apiServices.appVersion,
      "device":this.apiServices.device,
      "user_type":this.employeeType,
    };

console.log('home page api key==', apiKey);
// this.apiServices.faqDetails(apiKey).then((result) => { 
this.apiServices.getFaq(apiKey,this.loginToken).subscribe((result) => {   
  console.log('faqDetails == ',result);
  this.allData=result;
  if(this.allData.success==1){

   let details=this.allData.data;
    setTimeout(() => {
      this.faqDetails=details;
    }, 1000);
  }else{
    this.apiMessage(this.allData.message);
    this.navCtrl.pop();
  }
});

  }

  apiMessage(message) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  seeJoinningInfo(){
    this.navCtrl.push('JoiningDetailsPage');
  }

toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
};
isGroupShown(group) {
    return this.shownGroup === group;
};
  ionViewDidLoad() {
    console.log('ionViewDidLoad FaqDetailsPage');
    
  }
  clrSelect(index){
    let clr=["#734a75","#a864a8"];
    if(index%2==0){
      return clr[0];
    }else{
      return clr[1];
    }
  }

}

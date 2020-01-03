import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, LoadingController, Platform, MenuController } from 'ionic-angular';
import { ApiServiceProvider } from '../../../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import { InAppBrowser, InAppBrowserEvent, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { ImageViewerController } from 'ionic-img-viewer';

@IonicPage()
@Component({
  selector: 'page-globalpolicydetail',
  templateUrl: 'globalpolicydetail.html',
})
export class GlobalpolicydetailPage {
  form_id: any;
  title: any;
  hidenext: any;
  _imageViewerCtrl: ImageViewerController;
  ack_data: any;
  msg: string;
  quiz_data: any=[];
  index_id: any;
  btncheckdata: any;
  alldata: any;
  deviceId: any;
  employeeId: any;
  login_token: any;
  previousdata: any;
  loading:any;
  firstdiv:boolean=true;
  quizdiv:boolean=false;
  answerarr:any=[];
  constructor(private alertCtrl: AlertController, private platform: Platform, private menu: MenuController, public loadingCtrl: LoadingController,
    public toastCtrl: ToastController, private storage: Storage,imageViewerCtrl: ImageViewerController, private apiServices: ApiServiceProvider,
    public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser) {
      // this.answerarr = [{ "question_id": "", "answer": "" }]
      this._imageViewerCtrl = imageViewerCtrl;
      this.previousdata = this.navParams.get('data');
      this.title=this.previousdata.title;
      this.form_id=this.navParams.get('form_id');
      console.log("this.hidenext",this.previousdata.auto_id);
      console.log("this.hidenext111",this.previousdata.index_status)
      this.hidenext=this.previousdata.index_status;
      this.storage.get('login_token').then((data) => { this.login_token = data; });
      this.storage.get('employeeId').then((data) => { this.employeeId = data; });
      this.policy_detail();
  }
  policy_detail() {
 
    this.commonLoader();
    this.storage.get('deviceId').then(data => {
      this.deviceId = data;
      let apiKey = {
        "client_id": this.apiServices.clientId,
        "employee_id": this.employeeId,
        "device": this.apiServices.device,
        "device_id": this.deviceId,
        "app_version": this.apiServices.appVersion,
        "index_id": this.previousdata.auto_id,
      };
      this.apiServices.globalpolicy_detail(apiKey, this.login_token).subscribe(res => {
        console.log('tnc res==', res);
        this.loading.dismiss();
        if (res.success == 1) {
          this.title=res.data.title;
          this.index_id=res.index_id;
         this.btncheckdata=res.data; 
         this.alldata=res.content;
          console.log('succ');
// if(this.btncheckdata.nextIndexId==''){
//   this.navCtrl.pop();
// }


          // this.navCtrl.pop();
          // console.log('succ1', this.allData[0]);

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
  ionViewDidLoad() {
    console.log('ionViewDidLoad GlobalpolicydetailPage');
  }

  submit(){
    if(this.btncheckdata.quiz_applicable==1 || this.btncheckdata.quiz_applicable=='1'){
      this.firstdiv=false;
      this.policy_quiz();
    }else{
      this.policy_ack();
    }
    
  }

  policy_quiz() {
 
    this.commonLoader();
    this.storage.get('deviceId').then(data => {
      this.deviceId = data;
      let apiKey = {
        "client_id": this.apiServices.clientId,
        "employee_id": this.employeeId,
        "device": this.apiServices.device,
        "device_id": this.deviceId,
        "app_version": this.apiServices.appVersion,
        "index_id": this.index_id,
      };
      this.apiServices.globalpolicy_quiz(apiKey, this.login_token).subscribe(res => {
        console.log('tnc res==', res);
        this.loading.dismiss();
        if (res.success == 1) {
         this.quiz_data=res.data;
          console.log('succ',this.quiz_data);
          this.quizdiv=true;
          console.log('succ1',this.quiz_data.length);
          for(let x=0; x<this.quiz_data.length;x++){
            this.answerarr.push({ "question_id": "", "answer_id": "" });
          }
          console.log('succ1', this.answerarr);

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

  radioClicked(value,index,optionsdata)
    { 
    console.log("test",value);
    this.answerarr[index].question_id=value.questionId;
    this.answerarr[index].answer_id=optionsdata.optionId;
    console.log("this.answerarr",this.answerarr);
  }

  submit_quiz(){
    if (this.checkOptionalStatus()) {
      console.log("status5", status);
    } else {
      this.msg = "All fields are mandetory."
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
        "answer": this.answerarr,
        "index_id":this.previousdata.auto_id,
        "form_id":this.form_id
      };
      this.apiServices.globalpolicy_quizsubmit(apiKey, this.login_token).subscribe(res => {
        console.log('tnc res==', res);
        this.loading.dismiss();
        if (res.success == 1) {
          this.quiz_data=[];
          this.alldata=[];
          this.answerarr=[];
          this.quizdiv=false;
          this.firstdiv=true;
          this.previousdata.auto_id=this.btncheckdata.nextIndexId;
          this.policy_detail();
          console.log('succ');
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

  checkOptionalStatus(): boolean {
    let status: boolean = true;
    this.answerarr.forEach(element => {
      status = element.answer_id && status;
      console.log("status2", status);
    });
    return status;
  }


  policy_ack() {
 
    this.commonLoader();
    this.storage.get('deviceId').then(data => {
      this.deviceId = data;
      let apiKey = {
        "client_id": this.apiServices.clientId,
        "employee_id": this.employeeId,
        "device": this.apiServices.device,
        "device_id": this.deviceId,
        "app_version": this.apiServices.appVersion,
        "index_id": this.previousdata.auto_id,
        "form_id":this.form_id
      };
      this.apiServices.globalpolicy_ack(apiKey, this.login_token).subscribe(res => {
        console.log('tnc res==', res);
        this.loading.dismiss();
        if (res.success == 1) {
        //  this.ack_data=res.data;
        this.quiz_data=[];
        this.alldata=[];
        this.answerarr=[];
        this.quizdiv=false;
        this.firstdiv=true;

        if(this.btncheckdata.nextIndexId!=''){
          this.previousdata.auto_id=this.btncheckdata.nextIndexId;
          this.policy_detail();
        }
        else{
          this.navCtrl.pop();
        }
       
       

        // this.apiMessage(res.message);
          console.log('succ1', this.answerarr);
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


  presentImage(myImage) {
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();
 
    setTimeout(() => imageViewer.dismiss(), 30000);
    imageViewer.onDidDismiss(() => console.log('Viewer dismissed'));
  }

}

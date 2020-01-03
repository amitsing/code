import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController, ModalController,Navbar, LoadingController } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { ImageViewerController } from 'ionic-img-viewer';

@IonicPage()
@Component({
  selector: 'page-joineequizinstruction',
  templateUrl: 'joineequizinstruction.html',
})
export class JoineequizinstructionPage {
  @ViewChild(Navbar) navBar: Navbar;
  total_question: any;
  total_incorrect_ans: any;
  total_point: any;
  total_correct_answer: any;
  total_attempted: any;
  succ: any;
  instkey: any;
  resdata: any;
  reward_earned: any;
  allData: any;
  deviceId: any;
  employeeType: any;
  employeeId: any;
  login_token: any;
  index: any;
  loading:any;
  constructor(public loadingCtrl: LoadingController,private imageViewerCtrl: ImageViewerController, private imagePicker: ImagePicker,private modalCtrl:ModalController ,public toastCtrl: ToastController,private storage:Storage,
    private apiServices:ApiServiceProvider,public navCtrl: NavController,public navParams: NavParams) {
    this.index=this.navParams.get('index');
    this.instkey=this.navParams.get('instkey');
    console.log('ionViewDidLoad JoineequizinstructionPage',this.index);

    this.storage.get('login_token').then((data) => { this.login_token = data; });
    this.storage.get('employeeId').then(data=>{
      this.employeeId=data;
      console.log(' deviceId== ',this.employeeId);
     });

     this.storage.get('showOnBoard').then((data)=>{
      console.log('showOnBoard value is111==',data );
      this.employeeType=data;
    });
     
  this.storage.get('deviceId').then(data=>{
    this.deviceId=data;
    console.log(' deviceId== ',this.deviceId);
    this.getUserInfo();
   });


  }
  start(rewardsapplicable){
    // if(this.instkey==1){
    //   this.navCtrl.pop();
    // }
    // else{
    //   this.navCtrl.push('JoineequizquestionPage',{'reward_earned':this.reward_earned});
    // }
    // this.navCtrl.pop();

    this.navCtrl.push('JoineequizquestionPage',{'reward_earned':this.reward_earned,'rewardsapplicable':rewardsapplicable});
   
  }

  commonLoader(){
    this.loading= this.loadingCtrl.create({
        enableBackdropDismiss:true,
        spinner: 'ios-small',
        content: 'Loading data...'
      });
      this.loading.present();
  }
  getUserInfo(){
 
    this.commonLoader();
    let apiKey={
      "client_id":this.apiServices.clientId,
      "employee_id":this.employeeId,
      "device":this.apiServices.device,
      "device_id":this.deviceId,
      "app_version":this.apiServices.appVersion,
      "user_type":this.employeeType
  
    };
  
    console.log('reset pass api key==', apiKey);
    this.apiServices.quizinstruction(apiKey, this.login_token).subscribe((result) => { 
    console.log('reset pass response== ',result); 
    this.loading.dismiss();   
    this.resdata=result;
    if(this.resdata.success==1){
      this.succ=this.resdata.success;
      this.allData=this.resdata.data;
      console.log('reset pass response==111 ',this.allData); 
   this.reward_earned=this.allData.reward_earned;
   console.log('rese ',this.reward_earned); 
    }else{

      this.succ=this.resdata.success;
      this.reward_earned=this.resdata.data;
      if(this.reward_earned!=undefined){
        this.total_attempted=this.reward_earned.total_attempted;
        this.total_correct_answer=this.reward_earned.total_correct_answer;
        this.total_point=this.reward_earned.total_point;
        this.total_question=this.reward_earned.total_question;
        this.total_incorrect_ans=this.reward_earned.total_incorrect_ans;
        // this.total_point=this.reward_earned.total_point;
              }


      

      // this.apiMessage(this.resdata.message);
    
    }
  })
  
  }

  apiMessage(message) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  goHome(){
    this.navCtrl.popToRoot();
  }

  ionViewDidLoad() {
    this.navBar.backButtonClick = (e:UIEvent)=>{
      // todo something
      this.navCtrl.popToRoot();
     }
  
    console.log('ionViewDidLoad JoineequizinstructionPage');
  }

  gotohostory(){
    this.navCtrl.push('JoineequizhistoryPage');
  }
}

import { Component } from '@angular/core';
import { IonicPage,ToastController, NavController, LoadingController, NavParams,MenuController } from 'ionic-angular';
// import { apiServiceProvider } from "../../providers/apiService";
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
// import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the CatgoriesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-catgories',
  templateUrl: 'catgories.html',
})
export class CatgoriesPage {
  select_msg: string;
  min_select: number;
  cid: any;
  colorclass: any;
  colorclass1:any=0;
  deviceId: any;
  login_token: any;
  APIdata: any; mm: any;
  loading: any;
  client_id: any;
  temp:any;
  employeeId: any;
  idArray: any = [];
  passaray:any = [];
  newarray:any =[];
  status:any;
  public tagcount:any;
  count:any = 0;
  PassToopicData:any;
  constructor(public navCtrl: NavController,
    public toastCtrl:ToastController,
    public storage: Storage,private menu: MenuController,
    public navParams: NavParams,
    private apiServices:ApiServiceProvider,
    public loadingCtrl: LoadingController) {
    this.status = this.navParams.data.status;
    this.loadCategoryData();
  }

  passdata(events, alldata, index){
    console.log(index);
    console.log(alldata.flag)
    if(alldata.flag==0){
      this.APIdata[index].flag = 1;
      // this.colorclass[index]=this.APIdata[index].flag;
      // this.cid=this.APIdata[index].community_id;
      // this.colorclass1=1;
      console.log(this.APIdata[index].flag)
    }else{
      this.APIdata[index].flag = 0;
      // this.colorclass[index]=this.APIdata[index].flag;
      // this.cid=this.APIdata[index].community_id;
      // this.colorclass1=1;
      console.log(this.APIdata[index].flag)
    }
  }

  nextPage(){
    this.newarray = [];
    console.log('this.APIdata=', this.APIdata);
    for(var key in this.APIdata){
      if(this.APIdata[key].flag==1){
        let tempData={
          "community_id":this.APIdata[key].communityId,
          "tag_id":this.APIdata[key].auto_id
        }
        this.newarray.push(tempData)
      }
    }
    // console.log("bhj",this.newarray);
    // console.log("bhjlength",this.newarray.length);
    if(this.newarray==[] || this.newarray.length<this.min_select){
    let message=`Please select minimum ${this.min_select} areas of interest`;
      this.presentToast(message);
    }else{
      this.storage.get('employeeId').then(data => {
        this.employeeId = data;
        console.log(' employeeId== ', this.employeeId);
      });
      this.storage.get('login_token').then((data) => {
        console.log('showOnBoard value is111==', data);
        this.login_token = data;
      })
  
  
  
      // this.storage.get('employeeId').then((data) => { this.employeeId = data });
      this.storage.get('deviceId').then((data) => {
        this.deviceId = data;
      let intrestedArea = {
                  // "employeeId": this.employeeId,
                  // "clientId":this.client_id,
                  // "device":this.apiService.device,
                  // "deviceId": this.apiService.deviceId,
                  // "data":this.newarray
  
                  "client_id":this.apiServices.clientId,
                  "employee_id":this.employeeId,
                  "device":this.apiServices.device,
                  "device_id":this.deviceId,
                  "app_version":this.apiServices.appVersion,
                  "tag_array":this.newarray
  
              }
            this.apiServices.cummunitytagsubmit(intrestedArea,this.login_token).subscribe((res) => {
            this.loading.dismiss();
            if (res.success == 1) {
              console.log(res);
  
  
              this.navCtrl.setRoot('TabsPage');
              // this.presentToast(res.message);
                // if(this.navParams.data.value == 'viaHomePage'){
                //    this.navCtrl.push(TabsPage)
                // }else{
                //    this.navCtrl.setRoot(TabsPage)
                // }
            }
            if(res.success == 0){
              this.presentToast(res.message);
            }
          }, (err) => {
        })
      }) 
    }
 
  }
  // passdata(events, alldata, index) {
  //   console.log(alldata)
  //   //*****now i am going to check check-box is checked or not******
  //   if (events.target.checked == true) {
  //     if(alldata.tag!=undefined){
  //       let tagSearcInArray = this.idArray.indexOf(alldata.tag);
        
  //       if (tagSearcInArray < 0) {
  //             this.passaray.push({ "tag": alldata.tag,"tagid": alldata.tagId });
  //       }
  //       console.log(this.passaray)
  //     }  
  //     //*****now i am going to check value is available in array or not******
  //     let dataSearcInArray = this.idArray.indexOf(alldata.communityName);
  //     if (dataSearcInArray < 0) {
  //       this.idArray.push(alldata.communityName);
  //       var output = '';
  //       for (var property in alldata.tags) {
  //         output = alldata.tags[property].tagName;
  //         let tagsId = alldata.tags[property].communityTagId
  //         this.mm = { "tag": output, "tagId":tagsId}
  //         this.APIdata.splice(index + 1, 0, this.mm);
  //       }
  //       console.log(this.APIdata)
  //     } else {
 
  //     }
  //   } else {
  //     index = this.passaray.findIndex(x => x.tag==alldata.tag);
  //     this.passaray.splice(index,1);
  //     console.log(this.passaray)
  //   }
  // }
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
 
  uniqBy(a, key) {
    var index = [];
    return a.filter(function (item) {
        var k = key(item);
        return index.indexOf(k) >= 0 ? false : index.push(k);
    });
  }
  // nextPage() {
  //   this.CommonLoader()
  //   console.log(this.passaray)
  //   for(var key in this.passaray){
  //       if(this.passaray[key].tagid!=undefined){
  //         this.newarray.push(this.passaray[key].tagid)
  //       }
  //   }
  //   this.newarray = this.uniqBy(this.newarray, JSON.stringify)
  //   console.log(this.newarray);
  //   if(this.newarray.length<5){
  //     this.presentToast();
  //     this.loading.dismiss();
  //     return false;

  //   }
  //   this.storage.get('employeeId').then((data) => { this.employeeId = data });
  //   this.storage.get('client_id').then((data) => {
  //     this.client_id = data;
  //     let intrestedArea = {
  //         "employeeId": this.employeeId,
  //         "clientId":this.client_id,
  //         "device":this.apiService.device,
  //         "deviceId": this.apiService.deviceId,
  //         "communityTag": {
  //         "data":this.newarray,
  //         "intrestedFlag": 1
  //       },
  //       "topicTag": {
  //         "data": "",
  //         "intrestedFlag": 2
  //       }
  //     }
  //     this.apiService.passInterstedAreaData(intrestedArea).subscribe((res) => {
  //       console.log(res);
  //       this.loading.dismiss();
  //       if (res.success == 1) {
  //           if(this.navParams.data.value == 'viaHomePage'){
  //             this.navCtrl.push(TabsPage)
  //           }else{
  //             this.navCtrl.setRoot(TabsPage)
  //           }
  //       }
  //     }, (err) => {
  //     })
  //   })
  //   // let param = {
  //   //   'topicDatatoShow':this.PassToopicData,
  //   //   'tagsDatatoPass':this.newarray,
  //   //   'page':'category'
  //   // }
  //   // this.navCtrl.push('FollowingcontentPage',param)
    
  // }
  toggleItem(item) {
    console.log(item)
  }
  updateCucumber(zs) {
    console.log("updatecucumbr", zs);
  }
  CommonLoader() {
    this.loading = this.loadingCtrl.create({
      enableBackdropDismiss: true,
      spinner: 'ios-small',
      content: 'Loading...'
    });

    this.loading.present();
  }
  loadCategoryData() {
    this.CommonLoader()

    this.storage.get('employeeId').then(data => {
      this.employeeId = data;
      console.log(' employeeId== ', this.employeeId);
    });
    this.storage.get('login_token').then((data) => {
      console.log('showOnBoard value is111==', data);
      this.login_token = data;
    })

    // this.storage.get('employeeId').then((data) => { this.employeeId = data });
    this.storage.get('deviceId').then((data) => {
      this.deviceId = data;
      let user = {
  
    "client_id":this.apiServices.clientId,
    "employee_id":this.employeeId,
    "device":this.apiServices.device,
    "device_id":this.deviceId,
    "app_version":this.apiServices.appVersion


      }
      this.apiServices.cummunitytags(user,this.login_token).subscribe((res) => {
        this.loading.dismiss();
        if (res.success == 1) {
          this.min_select = res.max_selection;
         this.select_msg = res.max_message;
          this.APIdata = res.data;
          for(let j=0; j<this.APIdata.length;j++){
            if(this.APIdata[j].flag==1){
                this.APIdata[j].checked = true;
            }
          }
        }
      }, (err) => {
        this.loading.dismiss();
      })
    })
  }

  /**
   * This COmmented code is logic for older design of coomunity with Tags
   * in function loadCategoryData() of success==1.
   */

  // if (res.success == 1) {
  //   this.APIdata = res.communityTag.data;
  //   this.PassToopicData = res.topicTag.data
  //   if(this.status == 'update'){
  //     for(let j=0; j<this.APIdata.length;j++){
  //       if(this.APIdata[j].interested==0){
  //         this.APIdata[j].checked = false;
  //       }else{
  //         this.passaray.push({"tag": this.APIdata[j].tag,"tagid": this.APIdata[j].tagId})
  //       }
  //       this.count = j;
  //       if(this.APIdata[j].check == 1){
  //         this.APIdata[j]['checked'] = true;
  //         for(var key1 in this.APIdata[j].tags){
  //               this.tagcount = key1;
  //               this.temp = { "tag": this.APIdata[j].tags[key1].tagName, "tagId":this.APIdata[j].tags[key1].communityTagId,"checked":true,'interested':this.APIdata[j].tags[key1].is_intrested}
  //               this.APIdata.splice(this.count + 1, 0, this.temp);
  //               console.log(this.APIdata);
  //           }
  //       }
  //     }
  //   }
  // }
  ionViewWillEnter(){
    this.menu.swipeEnable(false);
}
}

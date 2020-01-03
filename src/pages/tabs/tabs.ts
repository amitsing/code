import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs,Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
@IonicPage({name: 'TabsPage'})
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})



export class TabsPage {
  country_id: any;
  keyforsignout: any;
  checkdata: number;
  homedata: any;
  login_token: any;
  employeeId: any;
  deviceId: any;
  // alertcount: string='';

  alertcount:any;
  HomePage= 'NewHomePage';
  MenuPage='MenuPage';
  PrivilegesPage='PrivilegeHomePage';
  OnboardPreview= 'HomePage';
  // OnboardPreview= 'GuesthomePage';
  AlertPage='AlertPage';
  EmployeealertPage='EmployeealertPage'
  HealthAndWellnessListPage='HealthAndWellnessListPage';
  CommunityListPage='CommunityListPage';

  tabsArray:any[];
  // myIndex: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,public events: Events,public zone:NgZone,
    private apiServices:ApiServiceProvider, private storage:Storage) {
      this.keyforsignout=this.navParams.get('keyforsignout');
      console.log('this.keyforsignout== ',this.keyforsignout);

    console.log('showOnBoard value ==' );
    this.storage.get('country_id').then(data=>{
      this.country_id=data;
      console.log('login deviceId== ',this.country_id)
     });
    this.storage.get('showOnBoard').then((data)=>{
      console.log('showOnBoard value is111==',data );
      if(data=='Employee'){
        this.Emphomedata();
      }
   if(data=='Guest'){
    this.joineehomedata();
      }
    });

 




    this.events.subscribe('tabbadgedata', (data) =>{
      console.log('tabbadgedata', data);
      this.alertcount=data;
      this.tabsArray[1].num=this.alertcount;
    });


    this.events.subscribe('emptabbadgedata', (data) =>{
      console.log('emptabbadgedata12345', data);
      // if(this.checkdata==1)
      // {

        // this.tabsArray[4].num=data;
        if(data==null){
          // alert(data);
          this.alertcount=data;
          this.tabsArray[this.tabsArray.length -1].num=this.alertcount;
        } else{
          this.tabsArray[this.tabsArray.length -1].num=data;
        }

      //   this.checkdata=2;
      // }
     
      // this.Emphomedata();
      // if(data=='' || data==undefined){
      //   this.alertcount=null;
      // }else{
      //   this.alertcount=data;
      //   this.tabsArray[4].num=this.alertcount;
      // }
    
    });


  }




  Emphomedata() {
    // this.commonLoader();
    this.tabfunction();

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
      let apiKey = {

        "client_id":this.apiServices.clientId,
        "employee_id":this.employeeId,
        "device":this.apiServices.device,
        "device_id":this.deviceId,
        "app_version":this.apiServices.appVersion
      };
      this.apiServices.homeapi(apiKey, this.login_token)
        .subscribe((res) => {
          console.log('', res);
          // this.loading.dismiss();
          this.alertcount=res.alert_count;
          console.log('home login alert count==',res.alert_count );
          this.storage.get('showOnBoard').then(data=>{
            console.log('showOnBoard value is==',data );
            if(data=='Employee'){
              this.zone.run(() => {
                if(res.alert_count!=0 || res.alert_count!='0'){
                  this.tabsArray[this.tabsArray.length - 1].num=res.alert_count;
                }
              
              console.log('home login alert count2==',res.alert_count );
              });
            }else{
              this.zone.run(() => {
                if(res.alert_count!=0 || res.alert_count!='0'){
                  this.tabsArray[1].num=res.alert_count;
                }
            
            });
            }
          });
          
          // this.tabfunction();
  
        }, (err) => {
          console.log('err== ', err);
          // this.apiMessage(err);
  
        });
  
    });
  }


  joineehomedata(){
    this.storage.get('deviceId').then(data=>{
      this.deviceId=data;
      console.log('login deviceId== ',this.deviceId)
     });
    this.storage.get('employeeId').then(data=>{
      this.employeeId=data
    });
    this.storage.get('login_token').then((data)=>{
      console.log('showOnBoard value is111==',data );
      this.login_token=data;
    let apiKey={
      "client_id":this.apiServices.clientId,
      "employee_id":this.employeeId,
      "device":this.apiServices.device,
      "device_id":this.deviceId,
      "app_version":this.apiServices.appVersion,
    };
    this.apiServices.joineehomepage(apiKey,this.login_token).subscribe(result =>{
      console.log('joineehomedata==',result );
      console.log('this.allData.alert_count123435 == ',result.alert_count);
      this.alertcount=result.alert_count;
      this.tabfunction();
   
    })

  })
  }

  tabfunction(){
 
    this.storage.get('showOnBoard').then(data=>{
      console.log('showOnBoard value tab page is==',data );
      if(data=='Employee'){
        if(this.country_id != 2){
          this.tabsArray=[{
            page:this.HomePage,
            pageName:'Home',
            pageIcon:'home'
          }
          ,{
            page:this.MenuPage,
            pageName:'Menu',
            pageIcon:'apps'
          }
          ,{
            page:this.CommunityListPage,
            pageName:' Wellness',
            pageIcon:'people'
          }
          ,{
            page:this.EmployeealertPage,
            pageName:'Alert',
            pageIcon:'notifications',
            num:this.alertcount
          }    
        ];
        }else{
          this.tabsArray=[{
            page:this.HomePage,
            pageName:'Home',
            pageIcon:'home'
          }
          ,{
            page:this.MenuPage,
            pageName:'Menu',
            pageIcon:'apps'
          }
          ,{
            page:this.PrivilegesPage,
            pageName:'Privileges',
            pageIcon:'briefcase'
          },{
            page:this.CommunityListPage,
            pageName:' Wellness',
            pageIcon:'people'
          }
          ,{
            page:this.EmployeealertPage,
            pageName:'Alert',
            pageIcon:'notifications',
            num:this.alertcount
          }    
        ];
        }
      }else{
    
      this.tabsArray=[{
        page:this.OnboardPreview,
        pageName:'Onboard',
        pageIcon:'home'
      }
    
      ,{
        page:this.AlertPage,
        pageName:'Alert',
        pageIcon:'notifications',
        num:this.alertcount
      }    
    ];
     } 
      
   
    })
   }




   
}

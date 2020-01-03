
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component, OnInit, ViewChild, ElementRef,NgZone } from "@angular/core";
import { Chart } from "chart.js";
import { Input, AfterViewInit, ViewChildren} from '@angular/core';
import { ToastController, AlertController,LoadingController, Platform } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import { BothauthortyPageModule } from '../bothauthorty/bothauthorty.module';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  gData: any;
  nominating_authority: any;
  approval_authority: any;
  nominationathority: any;
  approvalathority: any;
  dashboarddata: any;
  alldata: any;
  private barChart: Chart;
  @ViewChildren('mycharts') allMyCanvas: any;  // Observe #mycharts elements
//  charts: any;    // Array to store all my charts


jsons: any;
NumberOfSystems: Number;
thirdshowhide:boolean=false;
firstshowhide:boolean=true;
secondshowhide:boolean=false;
// thirdhowhide:boolean=false;
charts: any=[];    // Array to store all my charts

clr=[ "rgb(175, 94, 142)",
"rgb(74, 36, 69)",
"rgb(49, 95, 163)"];

allData: any;
deviceId: any;
login_token: any;
employeeId: any;
silverHall: any;
goldenPanache: any;
platinumClub: any;
loading:any;
nominationDeshboardContent: any;
nominationGraphs: any=[];
awardDeshboardContent:any;
awardGraphs:any=[];
@ViewChildren('mycharts2') allMyCanvas2: any;  // Observe #mycharts elements

constructor(public navCtrl: NavController, public navParams: NavParams,private zone: NgZone,
  private elementRef: ElementRef,public loadingCtrl: LoadingController,
  private alertCtrl: AlertController, private platform: Platform, 
  public toastCtrl: ToastController, private storage: Storage,
  private apiServices: ApiServiceProvider) {
    this.approvalathority=this.navParams.get('approval_authority');
    this.nominationathority=this.navParams.get('nominating_authority');
    console.log('this.approvalathority',this.approvalathority);
    console.log('this.nominationathority',this.nominationathority);
    // this.approvalathority=this.dashboarddata.approval_authority;
    // this.nominationathority=this.dashboarddata.nominating_authority;
  // this.createChartsData();
 this.callgraph();
this.awardgraph();
this.getAwardDeshboard();
}


callgraph(){
  this.charts = [
    {
      "id": "1",   // Just an identifier
      "chart": [12, 19, 3],
      "type":'doughnut',
      // "lab":["Red", "Blue", "Yellow", "Green", "Purple", "Orange"]            // The chart itself is going to be saved here
    },
    {
      "id": "2",
      "chart": [22, 39, 31],
      "type":'doughnut',
      // "lab":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"]  
    },
    {
      "id": "3",
      "chart": [2, 3, 3],
      "type":'doughnut',
      // "lab":["Jan", "Feb", "Mar", "Apr", "May", "Jun"]  
    },
    {
      "id": "4",
      "chart": [22, 39, 33],
      "type":'doughnut',
      // "lab":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"]  
    },
    {
      "id": "5",
      "chart": [22, 39, 33],
      "type":'doughnut',
      // "lab":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"]  
    },
    {
      "id": "6",
      "chart": [22, 39, 33],
      "type":'doughnut',
      // "lab":["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"]  
    },
  ]
  // this.ngAfterView();
}



ionViewDidLoad() {
  console.log('ionViewDidLoad ChartPage');
  this.printMyGaph();
  this.printAwardGraph();
}
printMyGaph(){
  this.zone.run(() => { 

    setTimeout(() => {
      console.log('hi amit.....');
      let canvasCharts = this.allMyCanvas._results;  // Get array with all canvas
      canvasCharts.map((myCanvas, i) => {   // For each canvas, save the chart on the charts array 
         this.nominationGraphs[i].charts = new Chart(myCanvas.nativeElement.getContext('2d'), {
           
          // type: this.charts[i].type,
          type:'doughnut',
          data: {
            // labels: this.charts[i].lab,
            labels: this.nominationGraphs[i].label,
            datasets: [
              {
                label: "Powered by Benepik Technology",
                // data: this.charts[i].chart,
                data: this.nominationGraphs[i].values,
                backgroundColor: [
                  "rgb(175, 94, 142)",
                  "rgb(74, 36, 69)",
                  "rgb(49, 95, 163)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)"
                ],
                borderColor: [
                  "rgb(175, 94, 142)",
                  "rgb(74, 36, 69)",
                  "rgb(49, 95, 163)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)"
                ],
                borderWidth: 1
              }
            ]
          },
          options: {
            legend: {
              display: true,
              // position:'bottom',
              fullWidth:false,
              labels: {
                  fontColor: 'rgb(255, 99, 132)',
                  usePointStyle:true,
                  boxWidth: 5
              },
              elements :{
                radius:2
              },
          }
            // scales: {
            //   yAxes: [
            //     {
            //       ticks: {
            //         beginAtZero: true
            //       }
            //     }
            //   ]
            // }
          }
          
         })
      })
      console.log(this.charts);
    }, 500);

 
});

}


printAwardGraph(){
  this.zone.run(() => { 

    setTimeout(() => {
      console.log('hi amit.....');
      let canvasCharts = this.allMyCanvas2._results;  // Get array with all canvas
      canvasCharts.map((myCanvas, i) => {   // For each canvas, save the chart on the charts array 
         this.awardGraphs[i].charts = new Chart(myCanvas.nativeElement.getContext('2d'), {
           
          // type: this.charts[i].type,
          type:'doughnut',
          data: {
            // labels: this.charts[i].lab,
            labels: this.awardGraphs[i].label,
            datasets: [
              {
                label: "Powered by Benepik Technology",
                // data: this.charts[i].chart,
                data: this.awardGraphs[i].values,
                backgroundColor: [
                  "rgb(175, 94, 142)",
                  "rgb(74, 36, 69)",
                  "rgb(49, 95, 163)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)"
                ],
                borderColor: [
                  "rgb(175, 94, 142)",
                  "rgb(74, 36, 69)",
                  "rgb(49, 95, 163)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)"
                ],
                borderWidth: 1
              }
            ]
          },
          options: {
            legend: {
              display: true,
              // position:'bottom',
              fullWidth:false,
              labels: {
                  fontColor: 'rgb(255, 99, 132)',
                  usePointStyle:true,
                  boxWidth: 5
              },
              elements :{
                radius:2
              },
          }
            // scales: {
            //   yAxes: [
            //     {
            //       ticks: {
            //         beginAtZero: true
            //       }
            //     }
            //   ]
            // }
          }
          
         })
      })
      console.log(this.charts);
    }, 500);

 
});

}
/*

ngAfterViewInit() {
  alert('2');
  this.zone.run(() => { 
    // window.document.addEventListener('mousemove', this.mouseMove.bind(this));
  // });

  // ngAfterView() {
  let canvasCharts = this.allMyCanvas._results;  // Get array with all canvas
  canvasCharts.map((myCanvas, i) => {   // For each canvas, save the chart on the charts array 
     this.charts[i].chart = new Chart(myCanvas.nativeElement.getContext('2d'), {
       
      type: this.charts[i].type,
      data: {
        labels: this.charts[i].lab,
        datasets: [
          {
            label: "Powered by Benepik Technology",
            data: this.charts[i].chart,
            backgroundColor: [
              "rgb(175, 94, 142)",
              "rgb(74, 36, 69)",
              "rgb(49, 95, 163)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgb(175, 94, 142)",
              "rgb(74, 36, 69)",
              "rgb(49, 95, 163)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        // scales: {
        //   yAxes: [
        //     {
        //       ticks: {
        //         beginAtZero: true
        //       }
        //     }
        //   ]
        // }
      }
      
     })
  })
});
}
*/

// createChartsData()
// {
// var array=[];
// for(var i =0; i<6;i++)
// {
// var pie ={
// type: 'doughnut',
// data: {
//   labels: ["Disks", "Mgmt", "Hardware", "FC", "Vols&Pols"],
//   datasets: [
//     {
//       backgroundColor:["#008000","#008000","#008000","#008000","#008000"],
//       data: [20,20,20,20,20]
//     }
//   ]
// },
// options: {
//   title: {
//     display: false
//   },
//   animations: true,
//   tooltips: {
//     enabled: true
//    },
//    legend: {
//     display: true
//   }
// }
// };
// array.push(pie);
// }
// this.createCharts(array);
// }
// createCharts(pieData){
// for(var j = 0; j<6;j++)
// {
// let htmlRef = this.elementRef.nativeElement.select(`#canvas`+j);
// console.log(htmlRef);
// var tempChart = new Chart(htmlRef,pieData[j]);
// this.charts.push(tempChart);
// }   
// }


// chart1() {
//   this.barChart = new Chart(this.barCanvas.nativeElement,{
//     type: "bar",
//     data: {
//       labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//       datasets: [
//         {
//           label: "# of Votes",
//           data: [12, 19, 3, 5, 2, 3],
//           backgroundColor: [
//             "rgba(255, 99, 132, 0.2)",
//             "rgba(54, 162, 235, 0.2)",
//             "rgba(255, 206, 86, 0.2)",
//             "rgba(75, 192, 192, 0.2)",
//             "rgba(153, 102, 255, 0.2)",
//             "rgba(255, 159, 64, 0.2)"
//           ],
//           borderColor: [
//             "rgba(255,99,132,1)",
//             "rgba(54, 162, 235, 1)",
//             "rgba(255, 206, 86, 1)",
//             "rgba(75, 192, 192, 1)",
//             "rgba(153, 102, 255, 1)",
//             "rgba(255, 159, 64, 1)"
//           ],
//           borderWidth: 1
//         }
//       ]
//     },
//     options: {
//       scales: {
//         yAxes: [
//           {
//             ticks: {
//               beginAtZero: true
//             }
//           }
//         ]
//       }
//     }
//   });
// }


noninate(data){
 if(data==false){
    this.secondshowhide=true;
    this.firstshowhide=false;
    this.thirdshowhide=false;
    this.awardslist();
    // this.navCtrl.push('NominationCategoryPage');
  }
  
}

dash(data){
  if(data==false){
  
    this.secondshowhide=false;
    this.firstshowhide=true;
    this.thirdshowhide=false;

    // this.callgraph();
    
    setTimeout(() => {
      
    this.printMyGaph(); 
    this.printAwardGraph();
    }, 2000);
    
  }else{

  }
}

approve(data){
  if(data==false){
    this.secondshowhide=false;
    this.firstshowhide=false;
    this.thirdshowhide=true;
    this.showapprove();
    //  this.navCtrl.push('PendinglistPage',{'authority':2})
  }
 
}


gotodetail(){

  // this.navCtrl.push('PendinglistPage',{'authority':1
  //    })

   this.navCtrl.push('MynominationPage')
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

  awardslist() {
    this.commonLoader()
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
        "app_version":this.apiServices.appVersion,

      };
      this.apiServices.awardslist(apiKey, this.login_token)
        .subscribe((res) => {
          console.log('', res);
           this.loading.dismiss();
          if (res.success == 1) {
            this.allData = res.data;
            console.log('this.allData', this.allData);
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

  awardsdetail(awardsid,awardsname){
    console.log('awardsid',awardsid);
    this.navCtrl.push('TeamAwesomePage',{'awardsid':awardsid,'awardsname':awardsname});
  }


  showapprove() {
    this.commonLoader();
    this.storage.get('employeeId').then(data => {
      this.employeeId = data;
      console.log(' employeeId== ', this.employeeId);
    });
    this.storage.get('deviceId').then(data => {
      this.deviceId = data;
      console.log(' employeeId== ', this.employeeId);
    });
    this.storage.get('login_token').then((data) => {
      console.log('AlbumDetails value is111==', data);
      this.login_token = data;
      let apiKey = {
  
        "client_id": this.apiServices.clientId,
        "employee_id":this.employeeId,
        "device": this.apiServices.device,
        "device_id": this.deviceId,
        "app_version": this.apiServices.appVersion,
        "user_authority": "a",
        "flag":"pending",
        getAwardDeshboard(){
          // this.commonLoader()
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
              "app_version":this.apiServices.appVersion,
              "user_authority": "a"
            };
            this.apiServices.getAwardGraph(apiKey, this.login_token)
              .subscribe((res) => {
                console.log('', res);
                //  this.loading.dismiss();
                if (res.success == 1) {
                    console.log(res.data);
                    this.awardDeshboardContent= res.data;
                    this.awardGraphs = this.awardDeshboardContent.graph;
                    console.log(this.awardDeshboardContent);
                    console.log(this.awardGraphs);
                } else {
                  this.apiMessage(res.message);
                }
      
              }, (err) => {
                console.log('err== ', err);
                this.apiMessage(err);
      
              });
      
          });
        },"value":"0"

      }
      console.log('AlbumDetails api apiKey==', apiKey);
      // this.apiServices.approveddata(apiKey, this.login_token).subscribe(result => {
      //   console.log('AlbumDetails api res==', result);

      //   this.loading.dismiss();
      //   if (result.success == 1) {
      //     // this.succ=result.success;
    
      //     this.alldata=result.data;
      //     console.log('AlbumDetails api success res==', this.alldata);
      //   } else {
      //   //  this.succ=result.success;
      //   //  this.msg=result.message
      //     this.apiMessage(result.message);
      //   }


      // })

    })
  }



  awardgraph() {
    this.commonLoader()
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
        "app_version":this.apiServices.appVersion,

      };
      this.apiServices.awardgraph(apiKey, this.login_token)
        .subscribe((res) => {
          console.log('', res);
           this.loading.dismiss();
          if (res.success == 1) {
              console.log(res.data);
              this.nominationDeshboardContent= res.data;
              this.nominationGraphs = this.nominationDeshboardContent.graph;
              console.log(this.nominationDeshboardContent);
              console.log(this.nominationGraphs);
          } else {
            this.apiMessage(res.message);
          }

        }, (err) => {
          console.log('err== ', err);
          this.apiMessage(err);

        });

    });
  }

  getAwardDeshboard(){
    // this.commonLoader()
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
        "app_version":this.apiServices.appVersion,
        "user_authority": "a"
      };
      this.apiServices.getAwardGraph(apiKey, this.login_token)
        .subscribe((res) => {
          console.log('', res);
          //  this.loading.dismiss();
          if (res.success == 1) {
              console.log(res.data);
              this.awardDeshboardContent= res.data;
              this.awardGraphs = this.awardDeshboardContent.graph;
              console.log(this.awardDeshboardContent);
              console.log(this.awardGraphs);
          } else {
            this.apiMessage(res.message);
          }

        }, (err) => {
          console.log('err== ', err);
          this.apiMessage(err);

        });

    });
  }
}


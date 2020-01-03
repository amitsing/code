import { Component, OnInit, Input, ViewChild, ElementRef,NgZone } from '@angular/core';
import * as Highcharts from 'highcharts';

/**
 * Generated class for the MycanvasComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);  

@Component({
  selector: 'mycanvas',
  templateUrl: 'mycanvas.html'
})
export class MycanvasComponent implements OnInit{

  @Input() data : Array<any>;
  @Input() height : number; 
  @ViewChild('target') allcanvas : any;

  // chart: Highcharts.ChartObject;
  charts:any=[];
  options2:any;

  ngOnInit() {

    
    
  }
  text: string;

  constructor(private zone:NgZone) {
    // console.log('Hello MycanvasComponent Component');
    this.text = 'Hello World';
  }

  ionViewWillEnter(){
    
    console.log("this.data",this.data);
  }

  ngAfterViewInit(){

    
    console.log("this.data",this.data);

    // this.zone.run(() => {
        // setTimeout(() =>{  
        for(let i = 0; i<this.data.length; i++){
            if(this.data[i].type=='pie'){
                this.options2={
                    chart: {
                        renderTo:`chartTarget${this.data[i].unique_id}`,
                        type: 'pie',
                        animation :false,
                        height : this.height,
                    },
                    legend: {
                      // verticalAlign: 'bottom',
                      // verticalAlign: 'middle',
                      layout: 'horizontal',
                      alignColumns: true,
                      align: 'left',
                      padding: 3,
                      itemMarginTop: 5,
                      itemMarginBottom: 5,
                      itemStyle: {
                          lineHeight: '14px'
                      },
                      width: '100%',
                      labelFormatter: function () {
                          return this.name+': '+this.y;
                      }
                  },        
                    plotOptions: {
                        pie: {
                          allowPointSelect: true,
                          cursor: 'pointer',
                          innerSize: '70%',
                          showInLegend: true
                        },
                    },
                    tooltip: {
                        //        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                                pointFormat: '<b>{point.y}</b>'
                            },
                      title: {
                          text: '',
                          // verticalAlign: 'middle',
                          // floating: true,
                        //   fontsize: 15
                      },
                      credits: {
                        enabled: false
                    },
                    
                      series : [{
                        type: 'pie',
                        // name: this.data[i].name,
                        data: this.data[i].data,
                        states: {
                            inactive: {
                              opacity: 1
                            }
                          }
                     }]
                    };
                    console.log(this.options2.chart.renderTo);
                   
            }
            else if(this.data[i].type=='bar'){
                this.options2 = {
                    chart: {
                        renderTo:`chartTarget${this.data[i].unique_id}`,
                        type: 'column',
                        animation :false,
                    },
                    title: {
                        text: ''
                    },
                    subtitle: {
                        text: ''
                    },
                    xAxis: {
                        categories: this.data[i].award_list,
                        title: {
                            text: null
                        }
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            // text: 'Population (millions)',
                            // align: 'high'
                        },
                        labels: {
                            overflow: 'justify'
                        }
                    },
                    tooltip: {
                        // valueSuffix: ' millions'
                    },
                    plotOptions: {
                        bar: {
                            dataLabels: {
                                enabled: true
                            }
                        },
                        series: {
                            states: {
                              inactive: {
                                opacity: 1
                              }
                            }
                          }
                    },
                    // legend: {
                    //     layout: 'vertical',
                    //     align: 'right',
                    //     verticalAlign: 'top',
                    //     x: -40,
                    //     y: 80,
                    //     floating: true,
                    //     borderWidth: 1,
                    //     backgroundColor:
                    //         Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
                    //     shadow: true
                    // },
                    legend: {
                        // verticalAlign: 'bottom',
                        // verticalAlign: 'middle',
                        layout: 'horizontal',
                        alignColumns: true,
                        align: 'left',
                        padding: 3,
                        itemMarginTop: 5,
                        itemMarginBottom: 5,
                        itemStyle: {
                            lineHeight: '14px'
                        },
                        width: '100%',
                        labelFormatter: function () {
                            return `<p style="width:50%; padding:10px 0;">${this.name}</p>` ;
                        }
                    },        
                    credits: {
                        enabled: false
                    },
                    series: this.data[i].series
                };
                console.log(this.options2.chart.renderTo);
                // this.charts[i] = new Highcharts.Chart(this.options2); 
            } 
            else if(this.data[i].type == 'award'){
                    this.options2={
                        colors: ['#345da4','#b7b7b7','#5b9bd5','#542e56','#ec2553'],
                        chart: {
                            renderTo:`chartTarget${this.data[i].unique_id}`,
                            type: 'pie',
                            animation :false,
                            height:this.height,
                        },
                        legend: {
                          // verticalAlign: 'bottom',
                          // verticalAlign: 'middle',
                          layout: 'horizontal',
                          alignColumns: false,
                          align: 'left',
                          padding: 3,
                          itemMarginTop: 5,
                          itemMarginBottom: 5,
                          itemStyle: {
                              lineHeight: '14px'
                          },
                        //   width: '100%',
                          labelFormatter: function () {
                            //   return this.name+': '+this.y;
                              return `${this.name}: ₹ ${this.y}`
                          }
                      },        
                      plotOptions: {
                        pie: {
                          allowPointSelect: true,
                          cursor: 'pointer',
                          innerSize: '70%',
                          showInLegend: true
                        },
                        series: {
                          point: {
                              events: {
                                  legendItemClick: function () {
                                      return false; // <== returning false will cancel the default action
                                  }
                              }
                          }
                      }
                    },
                        tooltip: {
                                borderWidth: 0,
                                borderColor: '#00000000',
                                shadow:false,
                                backgroundColor: {
                                    color: [255, 255, 255],
                                },
                                    shape: 'circle',
                                //    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                                    pointFormat: '<b>{point.percentage:.1f}%</b>',
                                    positioner:function(){              
                                        return { x: 120, y: 80};
                                       }
                                },
                          title: {
                              text: '',
                              // verticalAlign: 'middle',
                              // floating: true,
                            //   fontsize: 15
                          },
                          credits: {
                            enabled: false
                        },
                        
                          series : [{
                            type: 'pie',
                            // name: this.data[i].name,
                            data: this.data[i].data,
                            states: {
                                inactive: {
                                  opacity: 1
                                }
                              }
                         }]
                        };
                        console.log("1111111",this.options2.chart.renderTo);
                        // this.charts[i] = new Highcharts.Chart(this.options2); 
            }
            this.charts[i] = new Highcharts.Chart(this.options2); 
          }
        //  }, 2000);
        // });

  }
}


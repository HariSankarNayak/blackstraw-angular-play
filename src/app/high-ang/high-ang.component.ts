import { DYNAMIC_TYPE } from "@angular/compiler";
import { Component, DoCheck, OnChanges, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import { Chart } from "highcharts";
@Component({
  selector: "app-high-ang",
  templateUrl: "./high-ang.component.html",
  styleUrls: ["./high-ang.component.css"],
})
export class HighAngComponent implements OnInit, OnChanges {
  xxx: any;
  constructor() {
    this.xxx = "sssssssss";
  }

  ngOnInit(): void {
    this.chartOptions.chart.events.click = this.dummyFunction.bind(this);
    this.chartOptions.plotOptions.series.point.events.click =
      this.dummyFunctionBar.bind(this);
      // this.chartOptions.plotOptions.series.point.events=  this.dummyFunction.bind(this);
    // this.chartOptions.chart.events.click.apply(this)
    this.xxx = "zzzzzzzz";
  }
  ngOnChanges() {
    // changes.prop contains the old and the new value...
    //console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",this.xxx);
  }
  // ngDoCheck() {
  //   //console.log("xxxxxxxxxxxxxxxxxxxxxxxxxx",this.xxx);
  // }
  categoriess = [
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
  ];
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions = {
    chart: {
      type: "column",
      events: {
        click(event: any) {
          console.log(event);
          console.log();
          // //console.log( this.xAxis[0]);
          // const i = Math.floor(this.xAxis[0].toValue(event.x, true));
          // const index = i < 0 ? 0 : i;
          // const category = this.options.xAxis[0].categories[index - 1];
          // //console.log(category);
          // var label = this.renderer
          //   .label(
          //     "Selected :" + category,
          //     event.xAxis[0].axis.toPixels(event.xAxis[0].value),
          //     event.yAxis[0].axis.toPixels(event.yAxis[0].value)
          //   )
          //   .attr({
          //     fill: Highcharts.getOptions().colors[0],
          //     padding: 10,
          //     r: 5,
          //     zIndex: 8,
          //   })
          //   .css({
          //     color: "#FFFFFF",
          //   })
          //   .add();

          // setTimeout(function () {
          //   label.fadeOut();
          // }, 1000);
          // dummyFunction();
        },
      },
    },
    title: {
      text: "Emissions to air in Norway",
    },
    subtitle: {
      text:
        "Source: " +
        '<a href="https://www.ssb.no/en/statbank/table/08940/" ' +
        'target="_blank">SSB</a>',
    },
    xAxis: {
      categories: this.categoriess,

      crosshair: true,
    },

    plotOptions: {
      series: {
        cursor: "pointer",
        allowPointSelect: true,
        point: {
          events: {
            click(event) {
            
            },
          },
        },
        events: {
          legendItemClick(event) {
         console.log(event);
   
        }
        },
      },
    },
    yAxis: {
      title: {
        useHTML: true,
        text: "Million tonnes CO<sub>2</sub>-equivalents",
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },

    series: [
      {
        name: "Oil and gas extraction",
        type: "column",
        allowPointSelect: true,
        data: [
          13.93, 13.63, 13.73, 13.67, 14.37, 14.89, 14.56, 14.32, 14.13, 13.93,
          13.21, 12.16,
        ],
      },
      {
        name: "Manufacturing industries and mining",
        type: "column",
        data: [
          12.24, 12.24, 11.95, 12.02, 11.65, 11.96, 11.59, 11.94, 11.96, 11.59,
          11.42, 11.76,
        ],
      },
      {
        name: "Road traffic",
        type: "column",
        data: [
          10.0, 9.93, 9.97, 10.01, 10.23, 10.26, 10.0, 9.12, 9.36, 8.72, 8.38,
          8.69,
        ],
      },
      {
        name: "Agriculture",
        type: "column",
        data: [
          4.35, 4.32, 4.34, 4.39, 4.46, 4.52, 4.58, 4.55, 4.53, 4.51, 4.49,
          4.57,
        ],
      },
    ],
  };
  xxxx() {
    //console.log(this.chartOptions);
    //console.log("object",this.xxx);
  }
  selectedBar = "jfg";
  selected = false;
  flag = false;
  dummyFunction(eventData) {
    if (this.selected) {
      this.selected = false;
      this.chartOptions.series = [
        {
          name: "Oil and gas extraction",
          type: "column",
          // allowPointSelect: true,
          data: [
            13.93, 13.63, 13.73, 13.67, 14.37, 14.89, 14.56, 14.32, 14.13,
            13.93, 13.21, 12.16,
          ],
        },
        {
          name: "Manufacturing industries and mining",
          type: "column",
          data: [
            12.24, 12.24, 11.95, 12.02, 11.65, 11.96, 11.59, 11.94, 11.96,
            11.59, 11.42, 11.76,
          ],
        },
        {
          name: "Road traffic",
          type: "column",
          data: [
            10.0, 9.93, 9.97, 10.01, 10.23, 10.26, 10.0, 9.12, 9.36, 8.72, 8.38,
            8.69,
          ],
        },
        {
          name: "Agriculture",
          type: "column",
          data: [
            4.35, 4.32, 4.34, 4.39, 4.46, 4.52, 4.58, 4.55, 4.53, 4.51, 4.49,
            4.57,
          ],
        },
      ];
    } else {
      this.selected = true;
      let catSer = [];
        this.chartOptions.series.map((data: any) => {
          var x = {
            name: data.name,
            type: "column",

            data: [data.data[Math.round(eventData.xAxis[0].value)]],
          };
          catSer.push(x);
        })
      const xAxis:any=this.chartOptions.xAxis;
      console.log(xAxis.categories);
      const name = xAxis.categories[Math.round(eventData.xAxis[0].value)];
      this.chartOptions.xAxis.categories=[name]

      // console.log(
      //   this.chartOptions.series.filter((serr) => serr.name === name)
      // );

      this.chartOptions.series = catSer;
      // console.log(this.categoriess[Math.round(eventData.xAxis[0].value)] );
      console.log(eventData);
    }
    this.flag = true;
  }

  dummyFunctionBar(eventData) {
    console.log(this.chartOptions);
    console.log(eventData);
    console.log(eventData.point.category);
    console.log(eventData.point.y);
    console.log(eventData.point.series.name);
    const series = eventData.point.series.chart.options.series;
    console.log(series);
    const values = series.filter(
      (serie) => serie.data[eventData.point.series.index]
    );
    console.log(values);
    console.log(eventData.point.series.userOptions);
    console.log(this.selected);
    if (this.selected) {
      this.selected = false;
      this.chartOptions.series = [
        {
          name: "Oil and gas extraction",
          type: "column",
          allowPointSelect: true,
          data: [
            13.93, 13.63, 13.73, 13.67, 14.37, 14.89, 14.56, 14.32, 14.13,
            13.93, 13.21, 12.16,
          ],
        },
        {
          name: "Manufacturing industries and mining",
          type: "column",
          data: [
            12.24, 12.24, 11.95, 12.02, 11.65, 11.96, 11.59, 11.94, 11.96,
            11.59, 11.42, 11.76,
          ],
        },
        {
          name: "Road traffic",
          type: "column",
          data: [
            10.0, 9.93, 9.97, 10.01, 10.23, 10.26, 10.0, 9.12, 9.36, 8.72, 8.38,
            8.69,
          ],
        },
        {
          name: "Agriculture",
          type: "column",
          data: [
            4.35, 4.32, 4.34, 4.39, 4.46, 4.52, 4.58, 4.55, 4.53, 4.51, 4.49,
            4.57,
          ],
        },
      ];
    } else {
      this.selected = true;
      this.chartOptions.series =  [] ;
    }
    this.flag = true;

    console.log(this.chartOptions);
  }
  chartCallback(chart) {
    console.log("Chart instance: ", chart);
  }


}



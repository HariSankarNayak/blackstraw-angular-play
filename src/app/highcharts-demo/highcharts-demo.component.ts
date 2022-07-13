import { Component, OnInit, AfterViewInit } from "@angular/core";
import * as Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsSolidGauge from "highcharts/modules/solid-gauge";
import VennModule from "highcharts/modules/venn";

HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);
VennModule(Highcharts);

@Component({
  selector: "app-highcharts-demo",
  templateUrl: "./highcharts-demo.component.html",
  styleUrls: ["./highcharts-demo.component.css"],
})
export class HighchartsDemoComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {}

  public ngAfterViewInit(): void {
    // this.createChartGauge();
    // this.createChartPie();
    // this.createChartColumn();
    // this.createChartLine();
    this.createVennChart();
  }

  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  private createChartGauge(): void {
    const chart = Highcharts.chart("chart-gauge", {
      chart: {
        type: "solidgauge",
      },
      title: {
        text: "Gauge Chart",
      },
      credits: {
        enabled: false,
      },
      pane: {
        startAngle: -90,
        endAngle: 90,
        center: ["50%", "85%"],
        size: "160%",
        background: {
          innerRadius: "60%",
          outerRadius: "100%",
          shape: "arc",
        },
      },
      yAxis: {
        min: 0,
        max: 100,
        stops: [
          [0.1, "#55BF3B"], // green
          [0.5, "#DDDF0D"], // yellow
          [0.9, "#DF5353"], // red
        ],
        minorTickInterval: null,
        tickAmount: 2,
        labels: {
          y: 16,
        },
      },
      plotOptions: {
        solidgauge: {
          dataLabels: {
            y: -25,
            borderWidth: 0,
            useHTML: true,
          },
        },
      },
      tooltip: {
        enabled: false,
      },
      series: [
        {
          name: null,
          data: [this.getRandomNumber(0, 100)],
          dataLabels: {
            format:
              '<div style="text-align: center"><span style="font-size: 1.25rem">{y}</span></div>',
          },
        },
      ],
    } as any);

    setInterval(() => {
      chart.series[0].points[0].update(this.getRandomNumber(0, 100));
    }, 1000);
  }

  private createChartPie(): void {
    let date = new Date();
    const data: any[] = [];

    for (let i = 0; i < 5; i++) {
      date.setDate(new Date().getDate() + i);
      data.push({
        name: `${date.getDate()}/${date.getMonth() + 1}`,
        y: this.getRandomNumber(0, 1000),
      });
    }

    const chart = Highcharts.chart("chart-pie", {
      chart: {
        type: "pie",
      },
      title: {
        text: "Pie Chart",
      },
      credits: {
        enabled: false,
      },
      tooltip: {
        headerFormat: `<span class="mb-2">Date: {point.key}</span><br>`,
        pointFormat: "<span>Amount: {point.y}</span>",
        useHTML: true,
      },
      series: [
        {
          name: null,
          innerSize: "50%",
          data,
        },
      ],
    } as any);

    setInterval(() => {
      date.setDate(date.getDate() + 1);
      chart.series[0].addPoint(
        {
          name: `${date.getDate()}/${date.getMonth() + 1}`,
          y: this.getRandomNumber(0, 1000),
        },
        true,
        true
      );
    }, 1500);
  }

  private createChartColumn(): void {
    let date = new Date();
    const data: any[] = [];

    for (let i = 0; i < 10; i++) {
      date.setDate(new Date().getDate() + i);
      data.push({
        name: `${date.getDate()}/${date.getMonth() + 1}`,
        y: this.getRandomNumber(0, 1000),
      });
    }

    const chart = Highcharts.chart(
      "chart-column" as any,
      {
        chart: {
          type: "column",
          inverted: true,
        },
        title: {
          text: "Column Chart",
        },
        credits: {
          enabled: false,
        },
        legend: {
          enabled: false,
        },
        yAxis: {
          min: 0,
          title: undefined,
        },
        xAxis: {
          type: "category",
        },
        tooltip: {
          headerFormat: `<div>Date: {point.key}</div>`,
          pointFormat: `<div>{series.name}: {point.y}</div>`,
          shared: true,
          useHTML: true,
        },
        plotOptions: {
          bar: {
            dataLabels: {
              enabled: true,
            },
          },
        },
        series: [
          {
            name: "Amount",
            data,
          },
        ],
      } as any
    );

    setInterval(() => {
      date.setDate(date.getDate() + 1);
      chart.series[0].addPoint(
        {
          name: `${date.getDate()}/${date.getMonth() + 1}`,
          y: this.getRandomNumber(0, 1000),
        },
        true,
        true
      );
    }, 1500);
  }

  private createChartLine(): void {
    let date = new Date();
    const data: any[] = [];

    for (let i = 0; i < 10; i++) {
      date.setDate(new Date().getDate() + i);
      data.push([
        `${date.getDate()}/${date.getMonth() + 1}`,
        this.getRandomNumber(0, 1000),
      ]);
    }

    const chart = Highcharts.chart("chart-line", {
      chart: {
        type: "line",
      },
      title: {
        text: "Line Chart",
      },
      credits: {
        enabled: false,
      },
      legend: {
        enabled: false,
      },
      yAxis: {
        title: {
          text: null,
        },
      },
      xAxis: {
        type: "category",
      },
      tooltip: {
        headerFormat: `<div>Date: {point.key}</div>`,
        pointFormat: `<div>{series.name}: {point.y}</div>`,
        shared: true,
        useHTML: true,
      },
      series: [
        {
          name: "Amount",
          data,
        },
      ],
    } as any);

    setInterval(() => {
      date.setDate(date.getDate() + 1);
      chart.series[0].addPoint(
        [
          `${date.getDate()}/${date.getMonth() + 1}`,
          this.getRandomNumber(0, 1000),
        ],
        true,
        true
      );
    }, 1500);
  }
  private createVennChart(): void {
    const chart = Highcharts.chart(
      "venn-chart",

      {
        colors: [
          "#7fe06d",
          "#0098f3",
          "#b497ff",
          "#7dddd4",
          "#8effac",
          "#7a96db",
          "#7aaad8",
          "#ec457c",
          "#666666",
        ],

        accessibility: {
          point: {
            descriptionFormatter: function (point) {
              var intersection = point.sets.join(", "),
                name = point.name,
                ix = point.index + 1,
                val = point.value;
              return (
                ix +
                ". Intersection: " +
                intersection +
                ". " +
                (point.sets.length > 1 ? name + ". " : "") +
                "Value " +
                val +
                "."
              );
            },
            // valueDescriptionFormat :function (point) {
            //   var intersection = point.sets.join(", "),
            //     name = point.name,
            //     ix = point.index + 1,
            //     val = point.value;
            //   return (
            //     ix +
            //     ". Intersection: " +
            //     intersection +
            //     ". " +
            //     (point.sets.length > 1 ? name + ". " : "") +
            //     "Value " +
            //     val +
            //     "."
            //   );
            // }
          },
          plotOptions: {
            venn: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },



        },

        tooltip: {
          pointFormatter: function () {
            var sets = this.sets;
            var lines = [
              "<b>" + sets.join(" & ") + ": </b> " + this.actualValue,
            ];

            return lines;
          },
        },
        series: [
          {
            type: "venn",
            name: "",
            allowPointSelect:true,
            cursor: 'pointer',

            dataLabels: {
              align: "center",
              useHTML: true,
              fontWeight: "normal",
              style: {
                fontSize: "13px",
                fontWeight: "normal",
              },
              nullFormat:"d",
              enabled: true,
              formatter: function () {
                let percentage=this.point.percentValue?this.point.percentValue:'0';
                let actual=this.point.actualValue? this.point.actualValue:"0";
                return (
                  '<div style="text-align:center;font-weight: bold;">' +
                  percentage +
                  " %</div><br>" +
                  '<div style="text-align:center">' +
                  actual +
                  "</div><br>"
                );
              },
            },
            data: [
              {
                sets: ["A"],
                value: 2,
                actualValue: 45645,
                decimalValue: 0.43,
                percentValue: 0,
                longDescription: "sdfsdf",
                
              },
              {
                sets: ["B"],
                value: 2,
                actualValue: 45645,
                decimalValue: 0.43,
                percentValue: 0,
                longDescription: "sdfsdf",
              },
              {
                sets: ["C"],
                value: 2,
                actualValue: 45645,
                decimalValue: 0.43,
                percentValue: 0,
                longDescription: "sdfsdf",
              },
              {
                sets: ["A", "B"],
                value: 1,
                actualValue: 45645,
                decimalValue: 0.43,
                name: "A and B ",
                percentValue: 0,
                longDescription: "sdfsdf",
              },
              {
                sets: ["A", "C"],
                value: 1,
                actualValue: 45645,
                decimalValue: 0.43,
                percentValue: 0,
                name: "A and  C",
                longDescription: "sdfsdf",
              },
              {
                sets: ["B", "C"],
                value: 1,
                actualValue: 45645,
                decimalValue: 0.43,
                percentValue: 0,
                name: "B and C",
                longDescription: "sdfsdf",
              },
              // {
              //   sets: ["B", "C", "A"],
              //   value: 1,
              //   actualValue: 45645,
              //   decimalValue: 0.43,
              //   percentValue: 0,
              //   name: "middle data",
              //   longDescription: "sdfsdf",
              // },
            ],
          },
        ],
        title: {
          text: "",
        },
        
        credits: { enabled: false },
      } as any
    );
  }
}

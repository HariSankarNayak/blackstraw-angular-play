import { Component, OnInit, AfterViewInit, Input } from "@angular/core";
import * as Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsSolidGauge from "highcharts/modules/solid-gauge";
interface dataTemplate{
  gauge?:any
  chartBar?:any

}


HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);
@Component({
  selector: "app-matrix-cluster",
  templateUrl: "./matrix-cluster.component.html",
  styleUrls: ["./matrix-cluster.component.css"],
})
export class MatrixClusterComponent implements OnInit, AfterViewInit {
  @Input() id: any = 0;
  @Input() dataTemp: dataTemplate ;

  constructor() {}

  ngOnInit(): void {}

  public ngAfterViewInit(): void {
    this.createChartGauge();
    // this.createChartPie();
    // this.createChartColumn();
    this.createChartBar();
  }
  private getRandomNumberMaxMMin(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  private createChartGauge(): void {
    const chart = Highcharts.chart("chart-gauge"+this.id, {
      chart: {
        type: "solidgauge",
      },
      title: {
        text: "% Stores",
      },
      credits: {
        enabled: false,
      },
      pane: {
        startAngle: -90,
        endAngle: 90,
        center: ["50%", "70%"],
        size: "100%",
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
          data:this.dataTemp.gauge,
          dataLabels: {
            format:
              '<div style="text-align: center"><span style="font-size: 1.25rem">{y} %</span></div>',
          },
        },
      ],
    } as any);

    // setInterval(() => {
    //   chart.series[0].points[0].update(this.getRandomNumber(0, 100));
    // }, 1000);
  }



  private createChartBar(): void {


    const chart = Highcharts.chart(
      "chart-bar"+this.id as any,
      {
        chart: {
          type: "bar",
        },
        title: {
          text:"Sales lx",
        },
  
        legend: {
          enabled: false,
        },
        xAxis: {
          categories: ["Product"],
          visible: false,
          title: {
            text: undefined,
          },
        },
        yAxis: {
          min: 0,
          max:100,
          visible: false,
          title: {
            text: undefined,
          },
        },
        tooltip: {
          // headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
          // pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
      },
        plotOptions: {
          bar: {
            dataLabels: {
              enabled: true,
            },
   
          },
        },
        credits: {
          enabled: false,
        },
        series: this.dataTemp.chartBar,
      } as any
    );

  }
}

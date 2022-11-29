import { AfterViewInit, Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsSolidGauge from "highcharts/modules/solid-gauge";

HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);
@Component({
  selector: "app-suummary",
  templateUrl: "./suummary.component.html",
  styleUrls: ["./suummary.component.css"],
})
export class SuummaryComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {}

  public ngAfterViewInit(): void {
    this.createChartGauge();
    this.salesShareGrowth();
    this.facingsShareGrowth();
    this.fairShareIndex();
    this.createChartBar();
  }
  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  private createChartGauge(): void {
    const chart = Highcharts.chart("chart-gauge", {
      chart: {
        type: "gauge",
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        
        plotBorderWidth: 0,
        plotShadow: false,
        height: "100%",
        spacingBottom: 0,
        spacingTop: 0,
        spacingLeft: 0,
        spacingRight: 0,
        marginBottom: 20,
        marginTop: 20,
        marginLeft: 0,
        marginRight: 0,
      },

      title: {
        text: "Sales IX growth",
      },

      credits: {
        enabled: false,
      },
      pane: {
        startAngle: 0,
        endAngle: 360,
        center: ["50%", "50%"],
        size: "100%",
        background: {
          innerRadius: "90%",
          outerRadius: "90%",
          shape: "arc",
        },
      },

      // the value axis
      yAxis: {
        min: 0,
        max: 200,
        tickPixelInterval: null,
        tickPosition: "inside",
        tickColor: Highcharts.defaultOptions.chart.backgroundColor || "#FFFFFF",
        tickLength: null,
        tickWidth: 1,
        minorTickInterval: null,
        labels: false,
        plotBands: [
          {
            from: 0,
            to: 180,
            color: "#52527A", // grey
            thickness: 20,
          },
          {
            from: 180,
            to: 200,
            color: "#e0e0eb", // white
            thickness: 20,
          },
        ],
      },

      series: [
        {
          name: "Manufacture",
          marker: {
            symbol: "square", // Make it a square
            fillColor: "#52527A", // With color red
          },
          lineWidth: 0, // With no line going through it
          data: [80],
          showInLegend: true,
          tooltip: {
            valueSuffix: " ",
          },
          dataLabels: {
            format: "{y}",
            borderWidth: 0,
            color:
              (Highcharts.defaultOptions.title &&
                Highcharts.defaultOptions.title.style &&
                Highcharts.defaultOptions.title.style.color) ||
              "#333333",
            style: {
              fontSize: "16px",
            },
          },
          dial: {
            radius: "90%",
            backgroundColor: "gray",
            baseWidth: 8,
            baseLength: "0%",
            rearLength: "0%",
          },
          pivot: {
            backgroundColor: "gray",
            radius: 6,
          },
        },
        {
          name: "Gap to Heighest",
          data: [],
          showInLegend: true,
          marker: {
            symbol: "square", // Make it a square
            fillColor: "#e0e0eb", 
          },
          lineWidth: 0, // With no line going through it
        },
      ],
    } as any);

    setInterval(() => {
      chart.series[0].points[0].update(this.getRandomNumber(0, 100));
    }, 1000);
  }
  private salesShareGrowth(): void {
    const chart = Highcharts.chart("chart-salesShareGrowth", {
      chart: {
        type: "column",
        height:"100%", 
        spacingBottom: 0,
        spacingTop: 0,
        spacingLeft: 0,
        spacingRight: 0,
        marginLeft: 0,
        marginRight: 0,
      },

      title: {
        text: "Sales Share Growth",
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            formatter: function () {
              return Math.abs(this.point.y);
            },
          },
        },
      },
      xAxis: {
        // visible:false
        labels: {
          enabled: false,
        },
        scrollbar: {
          enabled: true
      },
      },
      yAxis: {
        title: {
          text: null,
        },
        scrollbar: {
          enabled: true
      },
        // visible: false,
        gridLineWidth: 0,
        plotLines: [
          {
            color: "black",
            width: 1,
            value: 0,
          },
        ],
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          name: "Selected Period",
          data: [-13.5],
          marker: {
            symbol: "square", // Make it a square
            fillColor: "#52527A", 
          },
          lineWidth: 0,
        },
        {
          name: "Variation",
          data: [0.8],
        },
      ],
    } as any);
  }

  private facingsShareGrowth(): void {
    const chart = Highcharts.chart("chart-facingsShareGrowth", {
      chart: {
        type: "column",
        height:"100%", 
        spacingBottom: 0,
        spacingTop: 0,
        spacingLeft: 0,
        spacingRight: 0,
        marginLeft: 0,
        marginRight: 0,
      },

      title: {
        text: "Facings Share Growth",
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            formatter: function () {
              return Math.abs(this.point.y);
            },
          },
        },
      },
      xAxis: {
        // visible:false
        labels: {
          enabled: false,
        },
        scrollbar: {
          enabled: true
      },
      },
      yAxis: {
        title: {
          text: null,
        },
        scrollbar: {
          enabled: true
      },
        gridLineWidth: 0,
        plotLines: [
          {
            color: "black",
            width: 1,
            value: 0,
          },
        ],
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          name: "Selected Period",
          data: [this.getRandomNumber(-100, 100)],
        },
        {
          name: "Variation",
          data: [this.getRandomNumber(-100, 100)],
        },
      ],	    scrollbar: {
        enabled:true,
  barBackgroundColor: 'gray',
  barBorderRadius: 7,
  barBorderWidth: 0,
  buttonBackgroundColor: 'gray',
  buttonBorderWidth: 0,
  buttonArrowColor: 'yellow',
  buttonBorderRadius: 7,
  rifleColor: 'yellow',
  trackBackgroundColor: 'white',
  trackBorderWidth: 1,
  trackBorderColor: 'silver',
  trackBorderRadius: 7
  }
    } as any);
  }
  private fairShareIndex(): void {
    const chart = Highcharts.chart("chart-fairShareIndex", {
      chart: {
        type: "column",
        height:"100%", 
        inverted: true,
        spacingBottom: 0,
        spacingTop: 0,
        spacingLeft: 0,
        spacingRight: 0,
        marginLeft: 0,
        marginRight: 0,
      },

      title: {
        text: "Fair Share Index",
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            formatter: function () {
              return Math.abs(this.point.y);
            },
          },
          threshold: 100,
        },
      },
      xAxis: {
        // visible:false
        max: 4,
        labels: {
          enabled: false,
        },
        scrollbar: {
          enabled: true
      },
      },
      yAxis: {
        title: {
          text: null,
        },
        scrollbar: {
          enabled: true
      },
        plotLines: [
          {
            color: "black",
            width: 1,
            value: 100,
          },
        ],

        gridLineWidth: 0,
        // visible: false,
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          name: "Selected Period",
          data: [
            { y: 29.9, color: "yellow" },
            71.5,
            106.4,
            129.2,
            144.0,
            176.0,
            135.6,
            148.5,
            216.4,
            194.1,
            95.6,
            54.4,
            { y: 29.9, color: "red" },
            71.5,
            106.4,
            129.2,
            144.0,
            176.0,
            135.6,
            148.5,
            216.4,
            194.1,
            95.6,
            54.4,
          ],
        },
      ],
    } as any);
  }
  private createChartBar(): void {
    const chart = Highcharts.chart("chart-bar", {
      chart: {
        type: "bar",
        backgroundColor: null,
        height:"100%", // 1
        // height: 150,
        // width: 150,
        spacingBottom: 0,
        spacingTop: 0,
        spacingLeft: 0,
        spacingRight: 0,
        marginBottom: 0,
        marginTop: 0,
        marginLeft: 0,
        marginRight: 0,
      },
      title: {
        text: "Market Vs. In-Store Condition",
        style: {
          fontWeight: "bold",
          fontSize: "14px",
        },
      },

      legend: {
        enabled: true,
      },
      xAxis: {
        categories: ["Product"],
                min: 0,
        max: 4,
        visible: false,
        title: {
          text: undefined,
        },
        scrollbar: {
          enabled: true
      },
      },
      yAxis: {
        min: 0,
        visible: false,
        title: {
          text: undefined,
        },
        scrollbar: {
          enabled: true
      },
        max: 1000, //Static for now
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
        series: {
          pointPadding: 0.1,
        },
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          name: "Mkt Share",
          data: [631, 727, 202, 721, 26, 727, 202, 721, 26, 727, 202, 721, 26, 727, 202, 721, 26, 727, 202, 721, 26, 727, 202, 721, 26],
        },
        {
          name: "In Store Condition",
          data: [814, 841, 714, 726, 31, 841, 714, 726, 31, 841, 714, 726, 31, 841, 714, 726, 31, 841, 714, 726, 31, 841, 714, 726, 31],
          
        },
        
      ],	    scrollbar: {
        enabled:true,
  barBackgroundColor: 'gray',
  barBorderRadius: 7,
  barBorderWidth: 0,
  buttonBackgroundColor: 'gray',
  buttonBorderWidth: 0,
  buttonArrowColor: 'yellow',
  buttonBorderRadius: 7,
  rifleColor: 'yellow',
  trackBackgroundColor: 'white',
  trackBorderWidth: 1,
  trackBorderColor: 'silver',
  trackBorderRadius: 7
  },
    } as any);
  }
}

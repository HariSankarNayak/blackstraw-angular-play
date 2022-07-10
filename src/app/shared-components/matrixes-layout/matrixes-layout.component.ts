import { AfterViewInit, Component, OnInit } from "@angular/core";
interface dataTemplate {
  gauge?: any;
  chartBar?: any;
  color?: any;
}
@Component({
  selector: "app-matrixes-layout",
  templateUrl: "./matrixes-layout.component.html",
  styleUrls: ["./matrixes-layout.component.css"],
})
export class MatrixesLayoutComponent implements OnInit {
  row = 3;
  col = 3;
  colRow: any;
  gdatas=[];

  background = [];

  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < this.row ; i++) {
      // this.background.push(this.getRandomColor());
      this.gdatas[i]=[]
      // console.log(this.gdatas);

      for (let j = 0; j < this.col; j++) {
        this.gdatas[i][j]={
          gauge: [this.getRandomNumberMaxMMin(0, 100)],
          chartBar: [
            {
              name: "Referenced Prodict",
              data: [this.getRandomNumberMaxMMin(0, 100)],
            },
            {
              name: "Selected Product",
              data: [this.getRandomNumberMaxMMin(0, 100)],
            },
          ],
          color: this.getRandomColor(),
        };
      }
    }
    console.log(this.gdatas);
  }

  getRandomColor() {
    const h = this.getRandomNumber(360);
    const s = this.getRandomNumber(100);
    const l = this.getRandomNumber(100);

    return `hsl(${h}deg, ${s}%, ${l}%)`;
  }
  getRandomNumber(maxNum) {
    return Math.floor(Math.random() * maxNum);
  }
  private getRandomNumberMaxMMin(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

import { HttpClient } from "@angular/common/http";
import { Component, OnInit, ViewChild } from "@angular/core";
import { AgGridAngular } from "ag-grid-angular";
import {
  ColDef,
  ColGroupDef,
  GridReadyEvent,
  CellClickedEvent,
} from "ag-grid-community";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { fakeClusterStoreData } from "../data/fakeData";
import { GridService } from "../grid.service";

@Component({
  selector: "app-store-overlap",
  templateUrl: "./store-overlap.component.html",
  styleUrls: ["./store-overlap.component.scss"],
})
export class StoreOverlapComponent implements OnInit {
  defaultDataSetJson = {
    currentPeriod: "2021Nov",
    comparisonPeriod: "2021Dec",
    currentProduct: "P1",
    comparisonProduct: "CategorProd",
  };
  originalApiData: any = {};
  private readonly destroy$ = new Subject();
  constructor(private http: HttpClient, public agGridSer: GridService) {}

  ngOnInit(): void {
    // this.originalApiData = JSON.parse(JSON.stringify(fakeClusterStoreData));
    console.log(this.originalApiData);

    this.agGridSer
      .getStoreOverlap(this.originalApiData)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (res: any) => {
          console.log("res", res);

          if (!res) {
            return;
          }
          this.originalApiData = { ...res };
          this.originalApiData.data = prepareTableData(
            this.originalApiData,
            this.defaultDataSetJson
          );
          console.log(this.originalApiData);
        },
        (error) => {}
      );
  }

  // Each Column Definition results in one Column.
  public columnDefs: (ColDef | ColGroupDef)[] = [
    {
      headerName: "Store Cluster",
      field: "col1",
      rowDrag: true,
      width: 240,
      filter: "agTextColumnFilter",
      pinned: "left",
      lockPinned: true,
      cellClass: "lock-pinned",
    },
    {
      headerName: "% Stores",
      field: "col2",
      width: 150,
      filter: "agTextColumnFilter",
      valueFormatter: this.percentageFormatter,
    },
    {
      headerName: "Category Index",
      field: "col3",
      width: 150,
      filter: "agNumberColumnFilter",
    },

    {
      headerName: "Product Index",
      field: "col4",
      width: 150,
      filter: "agTextColumnFilter",
    },
    {
      headerName: "Distribution Fact",
      field: "col5",
      width: 150,
      filter: "agNumberColumnFilter",
    },

    {
      headerName: "Share Fact",
      field: "col6",
      width: 150,
      filter: "agTextColumnFilter",
      valueFormatter: this.decimalPrecissionFormatter,
    },
  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
  };

  // Data that gets displayed in the grid
  public rowData$!: any;

  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  // Example load data from sever
  onGridReady(params: GridReadyEvent) {
    this.rowData$ = this.originalApiData.data;
    // this.http
    //   .get<any[]>('https://www.ag-grid.com/example-assets/row-data.json');
  }

  // Example of consuming Grid Event
  onCellClicked(e: CellClickedEvent): void {
    console.log("cellClicked", e);
  }

  /**
   *
   * @param params
   * @returns string of percentage
   */
  percentageFormatter(params: any) {
    return params.value + "%";
  }

  /**
   *
   * @param params
   * @returns decimal number with 2 decimal places
   */
  decimalPrecissionFormatter(params: any) {
    return params.value.toFixed(2);
  }
  // Example using Grid's API
  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }



}
/**
 * Hari Sankar
 * @param originalApiData
 * @param defaultDataJson
 * @returns
 */
function prepareTableData(originalApiData: any, defaultDataJson: any): any {
  var tableData = [];

  for (var i = 0; i < originalApiData.data.length; i++) {
    var rowData = originalApiData.data[i];
    if (
      defaultDataJson.currentProduct === rowData["product_desc"] &&
      defaultDataJson.currentPeriod === rowData["period_desc"]
    ) {
      var rowactualValues = {};
      rowactualValues["col1"] = rowData["segment_name"];
      rowactualValues["col2"] = rowData["PercentageStores"];
      rowactualValues["col3"] = (
        (rowData["StoreClustCatAvgSalesPerStore"] /
          rowData["TmarketCatAvgSalesPerStore"]) *
        100
      ).toFixed(0);
      rowactualValues["col4"] = (
        (rowData["StoreClustProdAvgSalesPerStore"] /
          rowData["TMarketProdAvgSalesPerStore"]) *
        100
      ).toFixed(0);

      rowactualValues["col5"] = 100 - rowData["DistFact"];

      rowactualValues["col6"] = 100 - rowData["ShareFact"];
      tableData.push(rowactualValues);
    }
  }
  console.log(tableData);
  return tableData;
}
/**
 * Hari Sankar
 * @param jSonData
 * @param filterParams
 * @returns
 */
function findVsSegmentationProductOrAll(jSonData: any, filterParams: any) {
  return jSonData.filter((item) =>
    Object.keys(filterParams).every((key) => item[key] === filterParams[key])
  );
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridReadyEvent, CellClickedEvent, ColGroupDef } from 'ag-grid-community';
import { Observable, Subject } from 'rxjs';
import { fakeClusterStoreData } from '../data/fakeData';
import { GridService } from '../grid.service';
import {takeUntil} from 'rxjs/operators';
@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss']
})
export class AgGridComponent implements OnInit {
  defaultDataSetJson = {
    currentPeriod: '2021Nov',
    comparisonPeriod: '2021Dec',
    currentProduct: 'P1',
    comparisonProduct: 'CategorProd'
  };
  originalApiData: any={};
  private readonly destroy$ = new Subject();
  constructor(private http: HttpClient, public agGridSer:GridService) {}

  ngOnInit(): void {
    this.originalApiData= JSON.parse(
      JSON.stringify(fakeClusterStoreData)
    );
    console.log( this.originalApiData)

    this.agGridSer
      .getClusterStoreRanking(this.originalApiData)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        
        (res:any) => {
          console.log("res", res);

          if (!res) {
            return;
          }

          this.originalApiData.data = prepareTableData(
            this.originalApiData,
            this.defaultDataSetJson
          )
          console.log( this.originalApiData)
        },
        error => {        }
      );
  }

  // Each Column Definition results in one Column.
 public columnDefs: (ColDef | ColGroupDef)[]  = [
  {
    headerName: '',
    children: [
      {
        headerName: 'Cluster Code Axis 1',
        field: 'col1',
        rowDrag: true ,
        width: 250,
        filter: 'agTextColumnFilter',
      },


    ],
  },
  {
    headerName: 'Sales Index Gap',
    children: [
      {
        headerName: 'Vs Segmentation Product',
        field: 'col2',
        width: 250,
        filter: 'agTextColumnFilter',
        valueFormatter: this.currencyFormatter,

      },
      {
        headerName: 'Vs Comparison Period',
        field: 'col3' ,
        width: 250,
        filter: 'agNumberColumnFilter',
      },

    ],
  },   {
    headerName: 'Distribution Gap',
    children: [
      {
        headerName: 'VS 100',
        field: 'col4',
        width: 250,
        filter: 'agTextColumnFilter',
      },
      {
        headerName: 'Vs Comparison Period',
        field: 'col5' ,
        width: 250,
        filter: 'agNumberColumnFilter',
      },

    ],
  }, 
  {
    headerName: 'Market Share Gap',
    children: [
      {
        headerName: 'Vs T. Stores',
        field: 'col6',
        width: 250,
        filter: 'agTextColumnFilter',
      },
      {
        headerName: 'Vs Comparison Period',
        field: 'col7' ,
        width: 250,
        filter: 'agNumberColumnFilter',
      },

    ],
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
onCellClicked( e: CellClickedEvent): void {
  console.log('cellClicked', e);
}
currencyFormatter(params: any) {
  console.log("params", params);
  return params.value.toFixed(2);
}
// Example using Grid's API
clearSelection(): void {
  this.setWidthAndHeight('100%', '100%');

  // this.agGrid.api.deselectAll();
}
setWidthAndHeight(width: string, height: string) {
  this.style = {
    width: width,
    height: height,
  };
}
public style: any = {
  width: '100%',
  height: '100%',
  flex: '1 1 auto',
};
// columnDefs1 = [{ field: "make" }, { field: "model" }, { field: "price" }];

// rowData = [
//   { make: "Toyota", model: "Celica", price: 35000 },
//   { make: "Ford", model: "Mondeo", price: 32000 },
//   { make: "Porsche", model: "Boxter", price: 72000 }
// ];
}
/**
 * Hari Sankar
 * @param originalApiData
 * @param defaultDataJson
 * @returns
 */
 function prepareTableData(originalApiData: any, defaultDataJson: any): any {
  // var staticKeys = [
  //   'Vs Segmentation Product',
  //   'Vs Comparison Period',
  //   'VS 100',
  //   'Vs Comparison Period',
  //   'Vs T. Stores',
  //   'Vs Comparison Period'
  // ];
  var tableData = [];
  // var columnNames = {};
  // columnNames['col1'] = 'Cluster Code Axis 1';
  // var count = 2;
  // for (var i = 0; i < staticKeys.length; i++) {
  //   columnNames['col' + count] = staticKeys[i];
  //   count++;
  // }
  // const staticKeysG1=    {
  //   "col1": "",
  //   "col2": "Sales Index Gap",
  //   "col3": "Sales Index Gap",
  //   "col4": "Distribution Gap",
  //   "col5": "Distribution Gap",
  //   "col6": "Market Share Gap",
  //   "col7": "Market Share Gap",

  //  };
  //  tableData.push(staticKeysG1);
  // tableData.push(columnNames);
  // var values = Object.values(columnNames);
  for (var i = 0; i < originalApiData.data.length; i++) {
    var count = 1;
    var jData = originalApiData.data[i];
    if (
      defaultDataJson.currentProduct === jData['product_desc'] &&
      defaultDataJson.currentPeriod === jData['period_desc']
    ) {
      var rowData = originalApiData.data[i];
      var rowactualValues = {};
      rowactualValues['col1'] = rowData['segment_name'];
      rowactualValues['col2'] = 0;
      rowactualValues['col3'] = 0;
      rowactualValues['col5'] = 0;
      rowactualValues['col7'] = 0;

      // current product different product
      if (defaultDataJson.comparisonProduct === 'CategorProd') {
        const segProduct = findVsSegmentationProductOrAll(
          originalApiData.data,
          {
            product_desc: defaultDataJson.comparisonProduct,
            period_desc: jData['period_desc'],
            segment_name: jData['segment_name']
          }
        )[0];
        const segProductALL = findVsSegmentationProductOrAll(
          originalApiData.data,
          {
            product_desc: defaultDataJson.comparisonProduct,
            period_desc: jData['period_desc'],
            segment_name: 'Segment All'
          }
        )[0];
        const currentProductAll = findVsSegmentationProductOrAll(
          originalApiData.data,
          {
            product_desc: defaultDataJson.currentProduct,
            period_desc: jData['period_desc'],
            segment_name: 'Segment All'
          }
        )[0];

        rowactualValues['col2'] =
          (rowData['AverageSalesValue'] /
            currentProductAll['AverageSalesValue']) *
            100 -
          (segProduct['AverageSalesValue'] /
            segProductALL['AverageSalesValue']) *
            100;
      }
      // current product different period
      if (defaultDataJson.comparisonPeriod === '2021Dec') {
        const comparisonPeriodSameProd = findVsSegmentationProductOrAll(
          originalApiData.data,
          {
            product_desc: defaultDataJson.currentProduct,
            period_desc: defaultDataJson.comparisonPeriod,
            segment_name: jData['segment_name']
          }
        )[0];
        const comparisonPeriodSegmentAll = findVsSegmentationProductOrAll(
          originalApiData.data,
          {
            product_desc: defaultDataJson.currentProduct,
            period_desc: defaultDataJson.comparisonPeriod,
            segment_name: 'Segment All'
          }
        )[0];
        const currentProductAll = findVsSegmentationProductOrAll(
          originalApiData.data,
          {
            product_desc: defaultDataJson.currentProduct,
            period_desc: jData['period_desc'],
            segment_name: 'Segment All'
          }
        )[0];

        rowactualValues['col3'] =
          (rowData['AverageSalesValue'] /
            currentProductAll['AverageSalesValue']) *
            100 -
          (comparisonPeriodSameProd['AverageSalesValue'] /
            comparisonPeriodSegmentAll['AverageSalesValue']) *
            100;
        rowactualValues['col5'] = 100 - comparisonPeriodSameProd['DistFact'];
        rowactualValues['col7'] = 100 - comparisonPeriodSameProd['ShareFact'];
      }

      rowactualValues['col4'] = 100 - rowData['DistFact'];

      rowactualValues['col6'] = 100 - rowData['ShareFact'];
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
  return jSonData.filter(item =>
    Object.keys(filterParams).every(key => item[key] === filterParams[key])
  );
}



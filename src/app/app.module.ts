import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { ExcelExportComponent } from './excel-export/excel-export.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { StoreOverlapComponent } from './store-overlap/store-overlap.component';
import { HighchartsDemoComponent } from './highcharts-demo/highcharts-demo.component'
// import { MatrixClusterComponent } from './shared-components/matrix-cluster/matrix-cluster.component';
// import { MatrixesLayoutComponent } from './shared-components/matrixes-layout/matrixes-layout.component';
import { GoldenStoresComponent } from './golden-stores/golden-stores.component';
import { SharedModule } from './shared-components/shared.module';
import { VennHighchartsComponent } from './venn-highcharts/venn-highcharts.component';


@NgModule({
  declarations: [
    AppComponent,
    AgGridComponent,
    ExcelExportComponent,
    StoreOverlapComponent,
    HighchartsDemoComponent,
    // MatrixClusterComponent,
    // MatrixesLayoutComponent,
    GoldenStoresComponent,
    VennHighchartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

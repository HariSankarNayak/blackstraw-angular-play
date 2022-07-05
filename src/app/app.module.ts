import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { ExcelExportComponent } from './excel-export/excel-export.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { StoreOverlapComponent } from './store-overlap/store-overlap.component';
import { GoldenStoresComponent } from './golden-stores/golden-stores.component'


@NgModule({
  declarations: [
    AppComponent,
    AgGridComponent,
    ExcelExportComponent,
    StoreOverlapComponent,
    GoldenStoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

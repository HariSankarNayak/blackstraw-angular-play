import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { ExcelExportComponent } from './excel-export/excel-export.component';

const routes: Routes = [
  { path: 'ag', component: AgGridComponent },
  { path: 'export', component: ExcelExportComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

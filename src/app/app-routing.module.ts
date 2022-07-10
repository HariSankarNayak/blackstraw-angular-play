import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { ExcelExportComponent } from './excel-export/excel-export.component';
import { GoldenStoresComponent } from './golden-stores/golden-stores.component';
import { HighchartsDemoComponent } from './highcharts-demo/highcharts-demo.component';
import { MatrixClusterComponent } from './shared-components/matrix-cluster/matrix-cluster.component';
import { MatrixesLayoutComponent } from './shared-components/matrixes-layout/matrixes-layout.component';
import { StoreOverlapComponent } from './store-overlap/store-overlap.component';

const routes: Routes = [
  { path: 'ag', component: AgGridComponent },
  { path: 'overlap', component: StoreOverlapComponent },

  { path: 'export', component: ExcelExportComponent },
  { path: 'high', component: HighchartsDemoComponent },
  // { path: 'matrixs', component: MatrixesLayoutComponent },
  { path: 'gold', component: GoldenStoresComponent },


  { path: '**', redirectTo: 'matrixs' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

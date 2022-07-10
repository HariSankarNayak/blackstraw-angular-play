import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatrixClusterComponent } from './matrix-cluster/matrix-cluster.component';
import { MatrixesLayoutComponent } from './matrixes-layout/matrixes-layout.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MatrixClusterComponent,MatrixesLayoutComponent],
  exports: [CommonModule, FormsModule, MatrixClusterComponent,MatrixesLayoutComponent]
})
export class SharedModule {}

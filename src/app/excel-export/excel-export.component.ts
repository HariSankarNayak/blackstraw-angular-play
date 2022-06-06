import { Component, OnInit } from '@angular/core';
import { ExcelService } from '../excel.service';

@Component({
  selector: 'app-excel-export',
  templateUrl: './excel-export.component.html',
  styleUrls: ['./excel-export.component.scss']
})
export class ExcelExportComponent implements OnInit {



  constructor(private excelService: ExcelService) {

  }
  ngOnInit(): void {
  }
  generateExcel() {
    this.excelService.generateExcel();
  }

}
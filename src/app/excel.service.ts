import { Injectable } from '@angular/core';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
@Injectable({
  providedIn: 'root',
})
export class ExcelService {
  constructor() {}
   formatKeyData(input: string) {  
    return input.toLowerCase().split('_').map((s: string) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');  
}
  async generateExcel() {
    const jsonData = {
      title: 'SES | Scope tab | Excel download format',
      client: {
        base: 'Purina',
        period: '',
      },
      business: {
        base: '1. Understand bla bla bla\n2. Review market\n3. Detect top opportunities',
        period: '',
      },
      category: {
        base: 'Pet Food\n',
        period: '',
      },
      period: {
        base: {
          startPeriod: '',
          endPeriod: '',
          noOfPeriods: '',
        },
        period: '',
        endPeriod: 'Feb 2021',
        noOfPeriods: '1',
        startPeriod: 'Dec 2020',
      },
      databases_used: {
        base: 'NIQ:\nTRAX:',
        period: '',
      },
      reported_products: {
        base: 'Total Pet Food\nT. Purina\nCat Food\nPurina Cat Food\nPurina Friskies\nDog Treats\nNatural Balance Dog Treat\nPurina Dog Treat\n',
        period: '',
      },
      target_products: {
        base: 'Total Pet Food',
        period: '',
      },
      store_segmentation_type: {
        base: 'Store Ranking',
        period: '',
      },
      market: {
        base: 'Colombia',
        period: '',
      },
      channel: {
        base: 'Modern Trade',
        period: '',
      },
    };

    // Create workbook and worksheet
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('BlackStraw Test');

    // Add Title Row and formatting (**Note:** Static For Now)
    const titleRow = worksheet.addRow(['SES | Scope tab | Excel download format', '', '', '']);
    titleRow.eachCell((cell, number) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '000000' },
        bgColor: { argb: '000000' },
      };
    });
    titleRow.font = {
      name: 'Calibri',
      family: 4,
      size: 11,
      bold: true,
      color: { argb: '80FF00' },
    };
    titleRow.alignment = {
      horizontal: 'left',
      vertical: 'middle',
      wrapText: true,
    };
    //Adding Column 2 width
    worksheet.getColumn(1).width = 50;

    // Blank Row
    let blankRow = worksheet.addRow(['', '', '', '']);
    blankRow.eachCell((cell, number) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '000000' },
        bgColor: { argb: '000000' },
      };
    });
    // Setting Width of the Columns
    worksheet.getColumn(2).width = 2;
    worksheet.getColumn(3).width = 22;
    worksheet.getColumn(4).width = 50;

    // set cell indent to 1
    worksheet.mergeCells('A4:A13');
    const businessData = jsonData.business;
    worksheet.getCell('A13').value = businessData.base;
    worksheet.getCell('A13').alignment = {
      vertical: 'top',
      horizontal: 'left',
      wrapText: true,
    };
    // Main Cell Border, Font, Coloe
    worksheet.getCell('A13').border = {
      bottom: { style: 'thick', color: { argb: '000000' } },
    };

    const font: any = {
      name: 'Calibri',
      family: 4,
      size: 11,
      bold: true,
      color: { argb: 'FFFFFF' },
    };
    const fillColor: any = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: '808080' },
      bgColor: { argb: '808080' },
    };
    // Small Data Formatting Declaration
    const border: any = {
      top: { style: 'thin', color: { argb: '000000' } },
      left: { style: 'thin', color: { argb: '000000' } },
      bottom: { style: 'thin', color: { argb: '000000' } },
      right: { style: 'thin', color: { argb: '000000' } },
    };
    const DBorder: any = {
      right: { style: 'thick', color: { argb: '000000' } },
    };

    // Adding Data , value  (**For Now Static Data**)
    worksheet.getCell('A3').value = 'Business Questions';
    worksheet.getCell('A3').fill = fillColor;
    worksheet.getCell('A3').font = font;
    worksheet.getCell('A3').border = border;

    for(var j in jsonData){
      if(j != 'business'){

      }
      
   
  }

    
    worksheet.getCell('C3').value = 'Client';
    worksheet.getCell('C3').fill = fillColor;
    worksheet.getCell('C3').font = font;
    worksheet.getCell('C3').border = border;
    worksheet.getCell('D3').value = jsonData.client.base;
    worksheet.getCell('D3').border = DBorder;

    worksheet.getCell('C4').value = 'Category';
    worksheet.getCell('C4').fill = fillColor;
    worksheet.getCell('C4').font = font;
    worksheet.getCell('D4').value = jsonData.category.base;
    worksheet.getCell('D4').border = DBorder;
    worksheet.getCell('C4').border = border;
    worksheet.getCell('C5').value = 'Sources Used';
    worksheet.getCell('C5').fill = fillColor;
    worksheet.getCell('C5').font = font;
    worksheet.getCell('C5').border = border;
    worksheet.getCell('C5').alignment = {
      vertical: 'top',
      horizontal: 'left',
      wrapText: true,
    };

    worksheet.getCell('D5').value = jsonData.databases_used.base;
    worksheet.getCell('D5').alignment = {
      vertical: 'top',
      horizontal: 'left',
      wrapText: true,
    };
    worksheet.getCell('D5').border = DBorder;

    worksheet.getCell('C6').value = 'Segmentation Type';
    worksheet.getCell('C6').fill = fillColor;
    worksheet.getCell('C6').font = font;
    worksheet.getCell('C6').border = border;
    worksheet.getCell('D6').value = jsonData.store_segmentation_type.base;
    worksheet.getCell('D6').border = DBorder;

    worksheet.getCell('C7').value = 'Markets';
    worksheet.getCell('C7').fill = fillColor;
    worksheet.getCell('C7').font = font;
    worksheet.getCell('C7').border = border;
    worksheet.getCell('D7').value = jsonData.market.base;
    worksheet.getCell('D7').border = DBorder;

    worksheet.getCell('C8').value = 'Channels';
    worksheet.getCell('C8').fill = fillColor;
    worksheet.getCell('C8').font = font;
    worksheet.getCell('C8').border = border;
    worksheet.getCell('D8').value = jsonData.channel.base;
    worksheet.getCell('D8').border = DBorder;

    worksheet.getCell('C9').value = 'Period: Start Date';
    worksheet.getCell('C9').fill = fillColor;
    worksheet.getCell('C9').font = font;
    worksheet.getCell('C9').border = border;
    worksheet.getCell('D9').value = jsonData.period.startPeriod;
    worksheet.getCell('D9').border = DBorder;
    worksheet.getCell('C10').value = ' Period: End Date';
    worksheet.getCell('C10').fill = fillColor;
    worksheet.getCell('C10').font = font;
    worksheet.getCell('C10').border = border;
    worksheet.getCell('D10').value = jsonData.period.endPeriod;
    worksheet.getCell('D10').border = DBorder;

    worksheet.getCell('C11').value = 'Numer periods:';
    worksheet.getCell('C11').fill = fillColor;
    worksheet.getCell('C11').font = font;
    worksheet.getCell('C11').border = border;
    worksheet.getCell('D11').value = jsonData.period.noOfPeriods;
    worksheet.getCell('D11').border = DBorder;

    worksheet.getCell('C12').value = 'Segmentation Products';
    worksheet.getCell('C12').fill = fillColor;
    worksheet.getCell('C12').font = font;
    worksheet.getCell('C12').border = border;
    worksheet.getCell('D12').value = jsonData.store_segmentation_type.base;
    worksheet.getCell('D12').border = DBorder;

    worksheet.getCell('C13').value = 'Reportable Products';
    worksheet.getCell('C13').fill = fillColor;
    worksheet.getCell('C13').font = font;
    worksheet.getCell('C13').border = {
      bottom: { style: 'thick', color: { argb: '000000' } },
    };
    worksheet.getCell('C13').alignment = {
      vertical: 'top',
      horizontal: 'left',
      wrapText: true,
    };

    worksheet.getCell('D13').value = jsonData.reported_products.base;
    worksheet.getCell('D13').alignment = {
      vertical: 'top',
      horizontal: 'left',
      wrapText: true,
    };
    worksheet.getCell('D13').border = {
      right: { style: 'thick', color: { argb: '000000' } },
      bottom: { style: 'thick', color: { argb: '000000' } },
    };

    // Some static border
    worksheet.getCell('B13').border = {
      bottom: { style: 'thick', color: { argb: '000000' } },
    };
    worksheet.getCell('D1').border = DBorder;
    worksheet.getCell('D2').border = DBorder;
    // Column 2 fill color upto 14th row
    const totalRow = 14;
    for (let i = 2; i < totalRow; i++) {
      let row = worksheet.getRow(i);

      let blankCol = row.getCell(2);
      row.getCell(3).fill = fillColor;
      blankCol.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '000000' },
        bgColor: { argb: '000000' },
      };
    }
    // Generate Excel File with given name
    workbook.xlsx.writeBuffer().then((data: any) => {
      const blob = new Blob([data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
      fs.saveAs(blob, 'Blackstraw-test.xlsx');
    });
  }
}

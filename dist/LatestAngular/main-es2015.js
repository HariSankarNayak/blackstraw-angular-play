(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_export_excel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/export-excel.service */ "./src/app/services/export-excel.service.ts");



class AppComponent {
    constructor(ete) {
        this.ete = ete;
        this.title = 'angular-export-to-excel';
        this.dataForExcel = [];
        this.empPerformance = [
            { ID: 10011, NAME: "A", DEPARTMENT: "Sales", MONTH: "Jan", YEAR: 2020, SALES: 132412, CHANGE: 12, LEADS: 35 },
            { ID: 10012, NAME: "A", DEPARTMENT: "Sales", MONTH: "Feb", YEAR: 2020, SALES: 232324, CHANGE: 2, LEADS: 443 },
            { ID: 10013, NAME: "A", DEPARTMENT: "Sales", MONTH: "Mar", YEAR: 2020, SALES: 542234, CHANGE: 45, LEADS: 345 },
            { ID: 10014, NAME: "A", DEPARTMENT: "Sales", MONTH: "Apr", YEAR: 2020, SALES: 223335, CHANGE: 32, LEADS: 234 },
            { ID: 10015, NAME: "A", DEPARTMENT: "Sales", MONTH: "May", YEAR: 2020, SALES: 455535, CHANGE: 21, LEADS: 12 },
        ];
    }
    exportToExcel() {
        this.empPerformance.forEach((row) => {
            this.dataForExcel.push(Object.values(row));
        });
        let reportData = {
            title: 'Employee Sales Report - Jan 2020',
            data: this.dataForExcel,
            headers: Object.keys(this.empPerformance[0])
        };
        this.ete.exportExcel(reportData);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_export_excel_service__WEBPACK_IMPORTED_MODULE_1__["ExportExcelService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_0_listener() { return ctx.exportToExcel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Export The Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _services_export_excel_service__WEBPACK_IMPORTED_MODULE_1__["ExportExcelService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");







const routes = [{
        path: '', pathMatch: 'full', redirectTo: 'main'
    },
    { path: 'main', component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
    }];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 2, vars: 0, template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "login works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/export-excel.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/export-excel.service.ts ***!
  \**************************************************/
/*! exports provided: ExportExcelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportExcelService", function() { return ExportExcelService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! exceljs */ "./node_modules/exceljs/dist/exceljs.min.js");
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);




class ExportExcelService {
    constructor() { }
    exportExcel(excelData) {
        //Title, Header & Data
        const title = excelData.title;
        const header = excelData.headers;
        const data = excelData.data;
        //Create a workbook with a worksheet
        let workbook = new exceljs__WEBPACK_IMPORTED_MODULE_1__["Workbook"]();
        let worksheet = workbook.addWorksheet('Sales Data');
        //Add Row and formatting
        worksheet.mergeCells('C1', 'F4');
        let titleRow = worksheet.getCell('C1');
        titleRow.value = title;
        titleRow.font = {
            name: 'Calibri',
            size: 16,
            underline: 'single',
            bold: true,
            color: { argb: '0085A3' }
        };
        titleRow.alignment = { vertical: 'middle', horizontal: 'center' };
        // Date
        worksheet.mergeCells('G1:H4');
        let d = new Date();
        let date = d.getDate() + '-' + d.getMonth() + '-' + d.getFullYear();
        let dateCell = worksheet.getCell('G1');
        dateCell.value = date;
        dateCell.font = {
            name: 'Calibri',
            size: 12,
            bold: true
        };
        dateCell.alignment = { vertical: 'middle', horizontal: 'center' };
        //Add Image
        let myLogoImage = workbook.addImage({
            base64: 'data:image/jpeg;base64,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',
            extension: 'png',
        });
        worksheet.mergeCells('A1:B4');
        worksheet.addImage(myLogoImage, 'A1:B4');
        //Blank Row
        worksheet.addRow([]);
        //Adding Header Row
        let headerRow = worksheet.addRow(header);
        headerRow.eachCell((cell, number) => {
            cell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: '4167B8' },
                bgColor: { argb: '' }
            };
            cell.font = {
                bold: true,
                color: { argb: 'FFFFFF' },
                size: 12
            };
        });
        // Adding Data with Conditional Formatting
        data.forEach(d => {
            let row = worksheet.addRow(d);
            let sales = row.getCell(6);
            let color = 'FF99FF99';
            if (+sales.value < 200000) {
                color = 'FF9999';
            }
            sales.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: color }
            };
        });
        worksheet.getColumn(3).width = 20;
        worksheet.addRow([]);
        //Footer Row
        let footerRow = worksheet.addRow(['Employee Sales Report Generated from example.com at ' + date]);
        footerRow.getCell(1).fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: 'FFB050' }
        };
        //Merge Cells
        worksheet.mergeCells(`A${footerRow.number}:F${footerRow.number}`);
        //Generate & Save Excel File
        workbook.xlsx.writeBuffer().then((data) => {
            let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"](blob, title + '.xlsx');
        });
    }
}
ExportExcelService.ɵfac = function ExportExcelService_Factory(t) { return new (t || ExportExcelService)(); };
ExportExcelService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ExportExcelService, factory: ExportExcelService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExportExcelService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\GitsTrails\exceljs-angular10\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
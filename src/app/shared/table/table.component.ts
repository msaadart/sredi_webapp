import { Component, Input, OnInit } from '@angular/core';
import { ColDef, GridOptions } from 'ag-grid-community';


@Component({
  selector: 'app-table',
  template: `
    <ag-grid-angular
      style="width: 100%;"
      [class]="agThemeQuartz"
      [rowData]="rowData"
      [columnDefs]="columnDefs"
      [gridOptions]="defaultGridOptions"
      [defaultColDef]="defaultColDef"
    >
    </ag-grid-angular>
  `,
  styles: [
    `
    `,
  ],
})
export class TableComponent {

  @Input() columnDefs: ColDef[] = []; // Columns definition
  @Input() rowData: any[] = []; // Data for rows
  @Input() gridOptions: GridOptions = {}; // AG Grid options
  @Input() enablePagination: boolean = true; // Pagination toggle
  @Input() pageSize: number = 10; // Number of rows per page
  @Input() agThemeQuartz:string = 'ag-theme-quartz'

  defaultGridOptions: GridOptions = {};
  defaultColDef: ColDef = {
    flex: 1,
  };

  ngOnInit(): void {
    // Merge default options with user-defined options
    this.defaultGridOptions = {
      pagination: this.enablePagination,
      paginationPageSize: this.pageSize,
      domLayout: 'autoHeight',
      animateRows: true,
      rowSelection: 'single',
      ...this.gridOptions,
    };
  }

}

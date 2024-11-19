import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import {
  ColDef
} from "ag-grid-community";
import { DashboardServiceService } from '../dashboard-service.service';



@Component({
  selector: 'app-employee-summary',
  templateUrl: './employee-summary.component.html',
  styleUrl: './employee-summary.component.scss'
})
export class EmployeeSummaryComponent implements OnInit {

  public rowData: Array<any> | null = [];
  public columnDefs: ColDef[];
  public themeClass: string;

  constructor(private DashboardServiceService: DashboardServiceService) {
    this.columnDefs = this.DashboardServiceService.employeeSummaryTableHeader;
    this.themeClass = this.DashboardServiceService.agThemeQuartz;
  }

  ngOnInit(): void {
    this.DashboardServiceService.getEmployeeSummary().subscribe((data) => {
      this.rowData = data;
    });
  }

  searchControl = new FormControl();




}

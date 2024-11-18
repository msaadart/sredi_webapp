import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../shared/shared.module';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { OverallHoursComponent } from './overall-hours/overall-hours.component';
import { TimesheetSummaryComponent } from './timesheet-summary/timesheet-summary.component';
import { ProjectHoursComponent } from './project-hours/project-hours.component';
import { EmployeeSummaryComponent } from './employee-summary/employee-summary.component';
import { SrEdSummaryComponent } from './sr-ed-summary/sr-ed-summary.component';
import { AgCharts } from 'ag-charts-angular';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardHeaderComponent,
    OverallHoursComponent,
    TimesheetSummaryComponent,
    ProjectHoursComponent,
    EmployeeSummaryComponent,
    SrEdSummaryComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    AgCharts
  ]
})
export class DashboardModule { }

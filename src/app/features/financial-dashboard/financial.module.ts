import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { TotalStaffComponent } from './total-staff/total-staff.component';
import { FinancialRoutingModule } from './financial-routing.module';
import { FinancialDashboardComponent } from './financial-dashboard.component';
import { SredProjectionsComponent } from './sred-projections/sred-projections.component';
import { VendorInvoicesComponent } from './vendor-invoices/vendor-invoices.component';
import { StaffSalaryComponent } from './staff-salary/staff-salary.component';



@NgModule({
  declarations: [
    TotalStaffComponent,
    FinancialDashboardComponent,
    SredProjectionsComponent,
    VendorInvoicesComponent,
    StaffSalaryComponent,
  ],
  imports: [
    CommonModule,
    FinancialRoutingModule,
    SharedModule
  ]
})
export class FinancialModule { }

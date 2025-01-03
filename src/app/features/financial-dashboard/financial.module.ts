import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { TotalStaffComponent } from './total-staff/total-staff.component';
import { FinancialRoutingModule } from './financial-routing.module';
import { FinancialDashboardComponent } from './financial-dashboard.component';
import { SredProjectionsComponent } from './sred-projections/sred-projections.component';



@NgModule({
  declarations: [
    TotalStaffComponent,
    FinancialDashboardComponent,
    SredProjectionsComponent,
  ],
  imports: [
    CommonModule,
    FinancialRoutingModule,
    SharedModule
  ]
})
export class FinancialModule { }

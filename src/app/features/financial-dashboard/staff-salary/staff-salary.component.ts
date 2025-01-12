import { Component, inject, signal } from '@angular/core';
import { TStaffSalary, TTableHeader } from '../financial-dashboard.type';
import { FinancialServicesService } from '../financial-services.service';

@Component({
  selector: 'app-staff-salary',
  templateUrl: './staff-salary.component.html',
  styleUrl: './staff-salary.component.scss'
})
export class StaffSalaryComponent {
  readonly panelOpenState = signal(false);
  
  $financialServices:  FinancialServicesService = inject(FinancialServicesService);

  public staffSalaryList: TStaffSalary[] = [];
  public staffSalaryHeader: TTableHeader[] = [
    { field: 'name', headerName: 'Name' },
    { field: 'start_date', headerName: 'Start Date' },
    { field: 'end_date', headerName: 'End Date' },
    { field: 'expected_salary', headerName: 'Expected Salary' },
    { field: 'confirmed_salary_per_payroll', headerName: 'Confirmed Salary Per Payroll' },
    { field: 'hourly_rate', headerName: 'Hourly Rate' },
    { field: 'hours_worked', headerName: 'Hours Worked' },
    { field: 'special_employee', headerName: 'Special Employee' },
  ];

  constructor(){
    this.$financialServices.getStaffSalary('staff_salary').then((staffSalaryList:TStaffSalary[]) => {
      this.staffSalaryList = staffSalaryList;
    })
  }

 

}

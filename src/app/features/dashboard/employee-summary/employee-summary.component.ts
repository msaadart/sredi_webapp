import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import { DashboardServiceService } from '../dashboard-service.service';
import { employeeSummaryTableHeader, EmployeeSummary } from '../dashboard-service.type';

@Component({
  selector: 'app-employee-summary',
  templateUrl: './employee-summary.component.html',
  styleUrl: './employee-summary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeSummaryComponent implements OnInit {

  public rowData:EmployeeSummary[] = [];
  public columnDefs:employeeSummaryTableHeader[] = [
    {
      field: 'Name',
      cellRenderer: (params: any) => {
        return `
        <div class="profile-img">
         <img src="${params.data.profilePhoto}" alt="Profile" class='profile-img' />
          <b>${params.data.Name}</b>
        </div>
        `;
      },
    },
    { field: 'Timesheet_Expected' },
    { field: 'Unconfirmed_Timesheet' },
    { field: 'Confirmed_Timesheet' },
    { field: 'Missing_Timesheets',
      cellRenderer: (params: any) => {
        return `
        ${params.data.Missing_Timesheets}
          <b><u>Notify User</u></b>
        `;
     },
    }
  ];

  constructor(private DashboardServiceService: DashboardServiceService) {

  }

  ngOnInit(): void {
    this.DashboardServiceService.getEmployeeSummary().subscribe((data) => {
      this.rowData = data;
    });
  }

  searchControl = new FormControl();
}

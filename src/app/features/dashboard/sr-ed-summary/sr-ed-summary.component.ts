import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DashboardServiceService } from '../dashboard-service.service';
import {
  REDSummary,
  TTableHeader,
} from '../dashboard-service.type';

@Component({
  selector: 'app-sr-ed-summary',
  templateUrl: './sr-ed-summary.component.html',
  styleUrl: './sr-ed-summary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SrEdSummaryComponent {
  public rowData: REDSummary[] = [];
  public columnDefs: TTableHeader[] = [
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
    { field: 'Tracking Score' },
    { field: 'Expected_Hours' },
    { field: 'Worked_Hours' },
    { field: 'Tracked_Hours' },
    { field: 'New' },
    { field: 'Fiber' },
    { field: 'FD_Test' },
    { field: 'SRED_Hours' },
  ];

  constructor(private DashboardServiceService: DashboardServiceService) {}

  ngOnInit(): void {
    this.DashboardServiceService.getSREDSummary().subscribe((data) => {
      this.rowData = data;
    });
  }

  searchControl = new FormControl();
}

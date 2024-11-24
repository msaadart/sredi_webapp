import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl} from '@angular/forms';
import { DashboardServiceService } from '../dashboard-service.service';
import { employeeSummaryTableHeader, EmployeeSummary } from '../dashboard-service.type';

@Component({
  selector: 'app-sr-ed-summary',
  templateUrl: './sr-ed-summary.component.html',
  styleUrl: './sr-ed-summary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SrEdSummaryComponent {
  public rowData:EmployeeSummary[] = [];
  public columnDefs:employeeSummaryTableHeader[];

  constructor(private DashboardServiceService: DashboardServiceService) {
    this.columnDefs = this.DashboardServiceService.employeeSummaryTableHeader;
  }

  ngOnInit(): void {
    this.DashboardServiceService.getEmployeeSummary().subscribe((data) => {
      this.rowData = data;
    });
  }

  searchControl = new FormControl();
}

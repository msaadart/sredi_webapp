import { timesheetSummary } from '../dashboard-service.type';
import { DashboardServiceService } from './../dashboard-service.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timesheet-summary',
  templateUrl: './timesheet-summary.component.html',
  styleUrl: './timesheet-summary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TimesheetSummaryComponent implements OnInit {

  summaryData: timesheetSummary[] = [];

  constructor(private DashboardServiceService: DashboardServiceService) {}

  ngOnInit(): void {
    this.DashboardServiceService.getSummaryData().subscribe((data) => {
      this.summaryData = data;
    });
  }

}

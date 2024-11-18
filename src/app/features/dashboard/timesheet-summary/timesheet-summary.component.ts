import { DashboardServiceService } from './../dashboard-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timesheet-summary',
  templateUrl: './timesheet-summary.component.html',
  styleUrl: './timesheet-summary.component.scss'
})

export class TimesheetSummaryComponent implements OnInit {

  summaryData: Array<any> = [];

  constructor(private DashboardServiceService: DashboardServiceService) {}

  ngOnInit(): void {
    this.DashboardServiceService.getSummaryData().subscribe((data) => {
      this.summaryData = data;
    });
  }

}

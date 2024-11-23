import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardServiceService {
  constructor() {}

  agThemeQuartz: string = 'ag-theme-quartz';

  // Timesheet summary
  getSummaryData(): Observable<Array<any>> {
    const mockData = [
      { title: 'Timesheets Expected', value: 500, change: 20 },
      { title: 'Timesheets Created', value: 200, change: -10 },
      { title: 'Timesheets Accepted', value: 200, change: 20 },
      { title: 'Missing Timesheets', value: 300, change: -10, action: 'remind', actionLabel: 'Remind All'},
    ];
    return of(mockData);
  }

  //employee summary
  employeeSummaryTableHeader: Array<any> = [
    { field: 'Name' },
    { field: 'Timesheet Expected' },
    { field: 'Unconfirmed Timesheet' },
    { field: 'Confirmed Timesheet' },
    { field: 'Missing Timesheets' },
  ];

  getEmployeeSummary(): Observable<Array<any>> {
    const mockData = [
      {
        Name: 'Theresa Webb',
        'Timesheet Expected': 54,
        'Unconfirmed Timesheet': 21,
        'Confirmed Timesheet': 22,
        'Missing Timesheets': 11,
      },
      {
        Name: 'Darrell Steward',
        'Timesheet Expected': 57,
        'Unconfirmed Timesheet': 12,
        'Confirmed Timesheet': 33,
        'Missing Timesheets': 12,
      },
      {
        Name: 'Marvin McKinney',
        'Timesheet Expected': 99,
        'Unconfirmed Timesheet': 34,
        'Confirmed Timesheet': 44,
        'Missing Timesheets': 21,
      },
      {
        Name: 'Brooklyn Simmons',
        'Timesheet Expected': 130,
        'Unconfirmed Timesheet': 44,
        'Confirmed Timesheet': 55,
        'Missing Timesheets': 31,
      },
      {
        Name: 'Wade Warren',
        'Timesheet Expected': 128,
        'Unconfirmed Timesheet': 21,
        'Confirmed Timesheet': 66,
        'Missing Timesheets': 41,
      },
    ];
    return of(mockData);
  }
}

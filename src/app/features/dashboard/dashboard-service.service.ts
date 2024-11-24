import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  employeeSummaryTableHeader,
  EmployeeSummary,
  timesheetSummary,
} from './dashboard-service.type';

@Injectable({
  providedIn: 'root',
})
export class DashboardServiceService {
  constructor() {}

  // Timesheet summary
  getSummaryData(): Observable<Array<timesheetSummary>> {
    const mockData: timesheetSummary[] = [
      { title: 'Timesheets Expected', value: 500, change: 20 },
      { title: 'Timesheets Created', value: 200, change: -10 },
      { title: 'Timesheets Accepted', value: 200, change: 20 },
      {
        title: 'Missing Timesheets',
        value: 300,
        change: -10,
        action: 'remind',
        actionLabel: 'Remind All',
      },
    ];
    return of(mockData);
  }

  //employee summary
  employeeSummaryTableHeader: employeeSummaryTableHeader[] = [
    {
      field: 'Name',
    },
    { field: 'Timesheet_Expected' },
    { field: 'Unconfirmed_Timesheet' },
    { field: 'Confirmed_Timesheet' },
    { field: 'Missing_Timesheets' },
  ];

  getEmployeeSummary(): Observable<Array<EmployeeSummary>> {
    const mockData: EmployeeSummary[] = [
      {
        Name: 'Theresa Webb',
        profilePhoto: 'https://randomuser.me/api/portraits/women/1.jpg',
        Timesheet_Expected: 54,
        Unconfirmed_Timesheet: 21,
        Confirmed_Timesheet: 22,
        Missing_Timesheets: 11,
      },
      {
        Name: 'Darrell Steward',
        profilePhoto: 'https://randomuser.me/api/portraits/men/2.jpg',
        Timesheet_Expected: 57,
        Unconfirmed_Timesheet: 12,
        Confirmed_Timesheet: 33,
        Missing_Timesheets: 12,
      },
      {
        Name: 'Marvin McKinney',
        profilePhoto: 'https://randomuser.me/api/portraits/men/3.jpg',
        Timesheet_Expected: 99,
        Unconfirmed_Timesheet: 34,
        Confirmed_Timesheet: 44,
        Missing_Timesheets: 21,
      },
      {
        Name: 'Brooklyn Simmons',
        profilePhoto: 'https://randomuser.me/api/portraits/women/3.jpg',
        Timesheet_Expected: 130,
        Unconfirmed_Timesheet: 44,
        Confirmed_Timesheet: 55,
        Missing_Timesheets: 31,
      },
      {
        Name: 'Wade Warren',
        profilePhoto: 'https://randomuser.me/api/portraits/men/4.jpg',
        Timesheet_Expected: 128,
        Unconfirmed_Timesheet: 21,
        Confirmed_Timesheet: 66,
        Missing_Timesheets: 41,
      },
    ];
    return of(mockData);
  }
}

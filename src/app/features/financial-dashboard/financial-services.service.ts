import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  employeeSummaryTableHeader,
  EmployeeSummary,
  timesheetSummary,
  REDSummary
} from './financial-dashboard.type';

@Injectable({
  providedIn: 'root'
})
export class FinancialServicesService {

  constructor() { }
  // Timesheet summary
    getSummaryData(): Observable<Array<timesheetSummary>> {
      const mockData: timesheetSummary[] = [
        { title: 'Timesheets Expected', value: 500, change: 20 },
        { title: 'Timesheets Created', value: 200, change: 10 },
        { title: 'Timesheets Accepted', value: 200, change: 20 },
        {
          title: 'Missing Timesheets',
          value: 300,
          change: 10,
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
  
    // SR & ED summary
    getSREDSummary(): Observable<Array<REDSummary>> {
      const mockData: REDSummary[] = [
        {
          Name: 'Theresa Webb',
          profilePhoto: 'https://randomuser.me/api/portraits/women/1.jpg',
          Tracking_Score: "70 %",
          Expected_Hours: 120,
          Worked_Hours: 20,
          Tracked_Hours: 40,
          New:10 ,
          Fiber:0,
          FD_Test:40,
          SRED_Hours:40
        },
        {
          Name: 'Darrell Steward',
          profilePhoto: 'https://randomuser.me/api/portraits/men/2.jpg',
          Tracking_Score: "87 %",
          Expected_Hours: 100,
          Worked_Hours: 10,
          Tracked_Hours: 55,
          New:22 ,
          Fiber:0,
          FD_Test:55,
          SRED_Hours:55
        },
        {
          Name: 'Marvin McKinney',
          profilePhoto: 'https://randomuser.me/api/portraits/men/3.jpg',
          Tracking_Score: "125 %",
          Expected_Hours: 160,
          Worked_Hours: 60,
          Tracked_Hours: 10,
          New:55 ,
          Fiber:0,
          FD_Test:10,
          SRED_Hours:10
        },
        {
          Name: 'Brooklyn Simmons',
          profilePhoto: 'https://randomuser.me/api/portraits/women/3.jpg',
          Tracking_Score: "152 %",
          Expected_Hours: 160,
          Worked_Hours: 60,
          Tracked_Hours: 10,
          New:55 ,
          Fiber:0,
          FD_Test:70,
          SRED_Hours:70
        },
        {
          Name: 'Wade Warren',
          profilePhoto: 'https://randomuser.me/api/portraits/men/4.jpg',
          Tracking_Score: "95 %",
          Expected_Hours: 120,
          Worked_Hours: 12,
          Tracked_Hours: 50,
          New:33 ,
          Fiber:0,
          FD_Test:50,
          SRED_Hours:50
        },
      ];
      return of(mockData);
    }
}

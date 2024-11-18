import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  constructor() { }


  getSummaryData(): Observable<Array<any>> {
    const mockData = [
      { title: 'Timesheets Expected', value: 500, change: 20 },
      { title: 'Timesheets Created', value: 200, change: -10 },
      { title: 'Timesheets Accepted', value: 200, change: 20 },
      { title: 'Missing Timesheets', value: 300, change: -10, action: 'remind', actionLabel: 'Remind All' }
    ];
    return of(mockData);
  }
}

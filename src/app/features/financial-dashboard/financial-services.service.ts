import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  barChartStaff,
  Projections,
  TVendorInvoice
} from './financial-dashboard.type';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FinancialServicesService {

  url: string = `${environment.API_BASE_URL}`;

  constructor(
    private http: HttpClient
  ) { }
  
    getStaffNotAssignedTeam(link:string): Observable<Array<barChartStaff>> {
      return this.http.get<any>(`${this.url}/${link}`);
    }

    getProjections(link:string): Observable<Projections> {
      return this.http.get<any>(`${this.url}/${link}`);
    }

    getVendorInvoices(link:string): Observable<Array<TVendorInvoice>> {
      return this.http.get<TVendorInvoice[]>(`${this.url}/${link}`);
    }
  
}

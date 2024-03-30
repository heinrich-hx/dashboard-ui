import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DashboardModel } from '../models/dashboard.model';

/**
 * DashboardService
 */
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  /**
   * Loads the dashboard data
   */
  getDashboard(): Observable<DashboardModel> {
    return of({
      navbar: [
        { label: 'Test', url: '' }
      ],
      top: [],
      panels: [],
    });
  }
}

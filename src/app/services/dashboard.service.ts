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
   *
   * @returns An observable of DashboardModel
   */
  getDashboard(): Observable<DashboardModel> {

    // Example data
    return of({
      top: [
        { label: 'Localhost', url: 'http://localhost:4200/', icon: 'home' },
        { label: 'Github', url: 'https://github.com/heinrich-hx', icon: 'codeBracket' }
      ],
      panels: [
        {
          label: 'Resources',
          links: [
            { label: 'CSS', url: 'https://tailwindcss.com/', icon: 'codeBracket'},
            { label: 'Icons', url: 'https://heroicons.com/', icon: 'link' }
          ]
        }
      ],
    });
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DashboardModel } from '../models/dashboard.model';
import { ConfigService } from './config.service';

/**
 * DashboardService
 */
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  /**
   * Example data
   */
  dashboard: DashboardModel = {
    top: [
      { label: 'Localhost', url: 'http://localhost:4200/', icon: 'home' },
      { label: 'Github', url: 'https://github.com/heinrich-hx', icon: 'code' },
      { label: 'NPM', url: 'https://www.npmjs.com/', icon: 'cubes'}
    ],
    panels: [
      {
        label: 'Resources',
        icon: 'code',
        links: [
          { label: 'CSS', url: 'https://tailwindcss.com/docs', icon: 'code' },
          { label: 'Icons', url: 'https://fontawesome.com/search', icon: 'code' },
          { label: 'Icons', url: 'https://fontawesome.com/search', icon: 'code' }
        ]
      },
      {
        label: 'Resources',
        icon: 'code',
        links: [
          { label: 'CSS', url: 'https://tailwindcss.com/docs', icon: 'code' },
          { label: 'Icons', url: 'https://fontawesome.com/search', icon: 'code' },
          { label: 'Icons', url: 'https://fontawesome.com/search', icon: 'code' }
        ]
      },
      {
        label: 'Resources',
        icon: 'code',
        links: [
          { label: 'CSS', url: 'https://tailwindcss.com/docs', icon: 'code' },
          { label: 'Icons', url: 'https://fontawesome.com/search', icon: 'code' },
          { label: 'Icons', url: 'https://fontawesome.com/search', icon: 'code' }
        ]
      },
      {
        label: 'Resources',
        icon: 'code',
        links: [
          { label: 'CSS', url: 'https://tailwindcss.com/docs', icon: 'code' },
          { label: 'Icons', url: 'https://fontawesome.com/search', icon: 'code' },
          { label: 'Icons', url: 'https://fontawesome.com/search', icon: 'code' }
        ]
      },
      {
        label: 'Resources',
        icon: 'code',
        links: [
          { label: 'CSS', url: 'https://tailwindcss.com/docs', icon: 'code' },
          { label: 'Icons', url: 'https://fontawesome.com/search', icon: 'code' },
          { label: 'Icons', url: 'https://fontawesome.com/search', icon: 'code' }
        ]
      },
      {
        label: 'Resources',
        icon: 'code',
        links: [
          { label: 'CSS', url: 'https://tailwindcss.com/docs', icon: 'code' },
          { label: 'Icons', url: 'https://fontawesome.com/search', icon: 'code' },
          { label: 'Icons', url: 'https://fontawesome.com/search', icon: 'code' }
        ]
      }
    ],
  };

  constructor(private configService: ConfigService) { }

  /**
   * Loads the dashboard data
   *
   * @returns An observable of DashboardModel
   */
  getDashboard(): Observable<DashboardModel> {
    return of(this.dashboard);
  }

  /**
   * Saves the dashboard data
   *
   * @param dashboard DashboardModel
   * @returns An observable of DashboardModel
   */
  saveDashboard(dashboard: DashboardModel): Observable<DashboardModel> {
    this.dashboard = JSON.parse(JSON.stringify(dashboard));
    return of(this.dashboard);
  }
}

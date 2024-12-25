import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { DashboardModel } from '../models/dashboard.model';
import { ConfigService } from './config.service';
import { LinkModel } from '../models/link.model';

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
      { uuid: uuidv4(), label: 'Localhost', url: 'http://localhost:4200/', icon: 'home' },
      { uuid: uuidv4(), label: 'Github', url: 'https://github.com/heinrich-hx', icon: 'code' },
      { uuid: uuidv4(), label: 'NPM', url: 'https://www.npmjs.com/', icon: 'cubes'}
    ],
    panels: [
      {
        uuid: uuidv4(),
        label: 'Resources',
        icon: 'code',
        links: [
          { uuid: uuidv4(), label: 'CSS', url: 'https://tailwindcss.com/docs', icon: 'code' },
          { uuid: uuidv4(), label: 'Icons', url: 'https://fontawesome.com/search', icon: 'code' },
          { uuid: uuidv4(), label: 'Icons', url: 'https://fontawesome.com/search', icon: 'code' }
        ]
      },
      {
        uuid: uuidv4(),
        label: 'Resources',
        icon: 'code',
        links: [
          { uuid: uuidv4(), label: 'CSS', url: 'https://tailwindcss.com/docs', icon: 'code' },
          { uuid: uuidv4(), label: 'Icons', url: 'https://fontawesome.com/search', icon: 'code' },
          { uuid: uuidv4(), label: 'Icons', url: 'https://fontawesome.com/search', icon: 'code' }
        ]
      },
      {
        uuid: uuidv4(),
        label: 'Resources',
        icon: 'code',
        links: [
          { uuid: uuidv4(), label: 'CSS', url: 'https://tailwindcss.com/docs', icon: 'code' },
          { uuid: uuidv4(), label: 'Icons', url: 'https://fontawesome.com/search', icon: 'code' },
          { uuid: uuidv4(), label: 'Icons', url: 'https://fontawesome.com/search', icon: 'code' }
        ]
      },
      {
        uuid: uuidv4(),
        label: 'Resources',
        icon: 'code',
        links: [
          { uuid: uuidv4(), label: 'CSS', url: 'https://tailwindcss.com/docs', icon: 'code' },
          { uuid: uuidv4(), label: 'Icons', url: 'https://fontawesome.com/search', icon: 'code' },
          { uuid: uuidv4(), label: 'Icons', url: 'https://fontawesome.com/search', icon: 'code' }
        ]
      },
      {
        uuid: uuidv4(),
        label: 'Resources',
        icon: 'code',
        links: [
          { uuid: uuidv4(), label: 'CSS', url: 'https://tailwindcss.com/docs', icon: 'code' },
          { uuid: uuidv4(), label: 'Icons', url: 'https://fontawesome.com/search', icon: 'code' },
          { uuid: uuidv4(), label: 'Icons', url: 'https://fontawesome.com/search', icon: 'code' }
        ]
      },
      {
        uuid: uuidv4(),
        label: 'Resources',
        icon: 'code',
        links: [
          { uuid: uuidv4(), label: 'CSS', url: 'https://tailwindcss.com/docs', icon: 'code' },
          { uuid: uuidv4(), label: 'Icons', url: 'https://fontawesome.com/search', icon: 'code' },
          { uuid: uuidv4(), label: 'Icons', url: 'https://fontawesome.com/search', icon: 'code' }
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

  /**
   * Saves a single link based on its UUID
   *
   * @param link LinkModel
   * @returns LinkModel
   */
  saveLink(link: LinkModel): Observable<LinkModel> {
    return of(link);
  }
}

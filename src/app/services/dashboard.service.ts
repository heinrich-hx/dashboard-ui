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

  constructor(private configService: ConfigService) { }

  /**
   * Loads the dashboard data
   *
   * @returns An observable of DashboardModel
   */
  getDashboard(): Observable<DashboardModel> {

    console.log(this.configService.getConfig());

    // Example data
    return of({
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
            { label: 'CSS', url: 'https://tailwindcss.com/docs'},
            { label: 'Icons', url: 'https://fontawesome.com/search' },
            { label: 'Icons', url: 'https://fontawesome.com/search' }
          ]
        },
        {
          label: 'Resources',
          icon: 'code',
          links: [
            { label: 'CSS', url: 'https://tailwindcss.com/docs'},
            { label: 'Icons', url: 'https://fontawesome.com/search' },
            { label: 'Icons', url: 'https://fontawesome.com/search' }
          ]
        },
        {
          label: 'Resources',
          icon: 'code',
          links: [
            { label: 'CSS', url: 'https://tailwindcss.com/docs'},
            { label: 'Icons', url: 'https://fontawesome.com/search' },
            { label: 'Icons', url: 'https://fontawesome.com/search' }
          ]
        },
        {
          label: 'Resources',
          icon: 'code',
          links: [
            { label: 'CSS', url: 'https://tailwindcss.com/docs'},
            { label: 'Icons', url: 'https://fontawesome.com/search' },
            { label: 'Icons', url: 'https://fontawesome.com/search' }
          ]
        },
        {
          label: 'Resources',
          icon: 'code',
          links: [
            { label: 'CSS', url: 'https://tailwindcss.com/docs'},
            { label: 'Icons', url: 'https://fontawesome.com/search' },
            { label: 'Icons', url: 'https://fontawesome.com/search' }
          ]
        },
        {
          label: 'Resources',
          icon: 'code',
          links: [
            { label: 'CSS', url: 'https://tailwindcss.com/docs'},
            { label: 'Icons', url: 'https://fontawesome.com/search' },
            { label: 'Icons', url: 'https://fontawesome.com/search' }
          ]
        }
      ],
    });
  }
}

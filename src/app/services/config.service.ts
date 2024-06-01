import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, map } from 'rxjs';

/**
 * Provides runtime configuration
 */
@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private appConfig: any;

  constructor(private http: HttpClient) { }

  /**
   * Loads the config.json file
   *
   * @returns A Promise
   */
  loadAppConfig(): Promise<void> {
    return firstValueFrom(this.http.get('/assets/config.json').pipe(map(data => {
      console.log(data);
    })));
  }

}

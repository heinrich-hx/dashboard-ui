import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, map } from 'rxjs';
import { ConfigModel } from '../models/config.model';

/**
 * Provides runtime configuration
 */
@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private config?: ConfigModel;

  constructor(private http: HttpClient) { }

  /**
   * Loads the config.json file
   *
   * TODO make it unaccessable
   *
   * @returns A Promise
   */
  loadAppConfig(): Promise<void> {
    return firstValueFrom(this.http.get<ConfigModel>('/config.json').pipe(
      map(data => {
        this.config = data;
        console.log(data);
      })
    ));
  }

  /**
   * Access the config
   *
   * @returns Config or undefined
   */
  getConfig(): ConfigModel | undefined {
    return this.config;
  }

}

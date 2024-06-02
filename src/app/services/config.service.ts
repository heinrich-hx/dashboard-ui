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

  /**
   * The config object
   */
  private config?: ConfigModel;

  /**
   * Loads the config.json file
   *
   * @param configService ConfigService
   * @param httpClient HttpClient
   * @returns A Promise
   */
  static loadConfig(configService: ConfigService, httpClient: HttpClient): Promise<void> {
    return firstValueFrom(httpClient.get<ConfigModel>('/config.json').pipe(
      map(data => {
        configService.config = data;
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

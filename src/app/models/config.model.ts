/**
 * Config
 */
export interface ConfigModel {

  /**
   * User authentication
   */
  cognito: {
    userPoolId: string;
    appClientId: string;
  };

  /**
   * Dashboard data source
   */
  dashboardApi: string;

}

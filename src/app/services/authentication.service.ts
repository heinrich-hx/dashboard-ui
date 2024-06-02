import { Injectable } from '@angular/core';
import { Amplify } from 'aws-amplify';
import { confirmResetPassword, resetPassword, signIn, signOut } from 'aws-amplify/auth';
import { Observable, from, map } from 'rxjs';
import { ConfigService } from './config.service';

/**
 * User authentication
 */
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private configService: ConfigService) { }

  /**
   * Initializes the service
   */
  static initialize(configService: ConfigService): void {
    console.log(configService.getConfig());
    // https://aws-amplify.github.io/amplify-js/api/variables/aws_amplify.index.Amplify.html
    Amplify.configure({
      Auth: {
        Cognito: {
          userPoolId: configService.getConfig()?.cognito.userPoolId || '',
          userPoolClientId: configService.getConfig()?.cognito.appClientId || ''
        }
      }
    });
  }

  /**
   * Log in
   *
   * @param username User name
   * @param password Password
   * @returns Observable
   */
  logIn(username: string, password: string): Observable<void> {
    return from(signIn({ username, password })).pipe(map(output => {
      console.log(output);
    }));
  }

  /**
   * Checks the current session
   */
  isLoggedIn(): void {

  }

  /**
   * Logs the current user out
   *
   * @returns Observable
   */
  logOut(): Observable<void> {
    return from(signOut());
  }

  /**
   * Requests a password reset
   *
   * @param username User name
   * @returns Observable
   */
  resetPassword(username: string): Observable<void> {
    return from(resetPassword({ username })).pipe(map(output => {
      console.log(output.nextStep.resetPasswordStep);
      console.log(output.nextStep.codeDeliveryDetails);
    }));
  }

  /**
   * Sets a new password after reset
   *
   * @param username User name
   * @returns Observable
   */
  confirmResetPassword(username: string, confirmationCode: string, newPassword: string): Observable<void> {
    return from(confirmResetPassword({
      username,
      confirmationCode,
      newPassword
    }));
  }

}

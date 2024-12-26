/**
 * Passord reset request
 */
export interface ResetPasswordModel {

  /**
   * Username
   */
  name: string;

  /**
   * Password
   */
  password: string;

  /**
   * Confirmation code
   */
  confirmationCode: string;

}

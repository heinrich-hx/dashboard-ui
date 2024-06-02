import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContainerComponent } from '../../components/container/container.component';
import { CredentialsModel } from '../../models/credentials.model';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [ContainerComponent, FormsModule],
  templateUrl: './reset-password.component.html'
})
export class ResetPasswordComponent {

  /**
   * Form model
   */
  model: CredentialsModel = { };

  constructor(private authService: AuthenticationService) { }

  /**
   * Requests a password reset
   */
  resetPassword(): void {

  }

  /**
   * Confirms the reset
   */
  confirmResetPassword(): void {

  }

}

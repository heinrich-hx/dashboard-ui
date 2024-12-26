import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContainerComponent } from '../../components/container/container.component';
import { AuthenticationService } from '../../services/authentication.service';
import { ButtonComponent } from '../../components/button/button.component';
import { InputComponent } from '../../components/input/input.component';
import { ResetPasswordModel } from '../../models/reset-password.model';
import { IconComponent } from '../../components/icon/icon.component';

/**
 * A form for resetting the login password
 */
@Component({
  selector: 'app-reset-password',
  imports: [
    ButtonComponent,
    ContainerComponent,
    FormsModule,
    IconComponent,
    InputComponent
  ],
  templateUrl: './reset-password.component.html'
})
export class ResetPasswordComponent {

  /**
   * Form model
   */
  model: ResetPasswordModel = {
    name: '',
    password: '',
    confirmationCode: ''
  };

  constructor(private authService: AuthenticationService, private readonly location: Location) { }

  /**
   * Requests a password reset
   */
  resetPassword(): void {
    if (!this.model.name) {
      return;
    }
    this.authService.resetPassword(this.model.name).subscribe({
      next: () => console.log('OK'),
      error: error => console.error(error)
    });
  }

  /**
   * Confirms the reset
   */
  confirmResetPassword(): void {
    if (!this.model.name || !this.model.confirmationCode || !this.model.password) {
      return;
    }
    this.authService.confirmResetPassword(this.model.name, this.model.confirmationCode, this.model.password).subscribe({
      next: () => console.log('OK'),
      error: error => console.error(error)
    });
  }

  /**
   * Navigate back
   */
  navigateBack(): void {
    this.location.back();
  }

}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ContainerComponent } from '../../components/container/container.component';
import { AuthenticationService } from '../../services/authentication.service';
import { CredentialsModel } from '../../models/credentials.model';

/**
 * User profile
 */
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ContainerComponent, FormsModule, RouterLink],
  templateUrl: './user.component.html'
})
export class UserComponent {

  /**
   * Form model
   */
  model: CredentialsModel = { };

  constructor(private authService: AuthenticationService) { }

  /**
   * Sends the log-in request
   */
  logIn(): void {
    if (!this.model.name || !this.model.password) {
      return;
    }
    this.authService.logIn(this.model.name, this.model.password).subscribe({
      next: () => console.log('Log-in OK'),
      error: error => console.error(error)
    });
  }

}

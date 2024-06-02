import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContainerComponent } from '../../components/container/container.component';
import { AuthenticationService } from '../../services/authentication.service';
import { UserModel } from '../../models/user.model';

/**
 * User profile
 */
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ContainerComponent, FormsModule],
  templateUrl: './user.component.html'
})
export class UserComponent {

  /**
   * Form model
   */
  model: UserModel = { };

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

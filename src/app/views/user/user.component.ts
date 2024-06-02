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

  constructor(authService: AuthenticationService) { }

  /**
   * Sends the log-in request
   */
  logIn(): void {
    console.log(this.model);
  }

}

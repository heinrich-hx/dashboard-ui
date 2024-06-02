import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';
import { ContainerComponent } from '../../components/container/container.component';
import { AuthenticationService } from '../../services/authentication.service';
import { CredentialsModel } from '../../models/credentials.model';

/**
 * User profile
 */
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, ContainerComponent, FormsModule, RouterLink],
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  /**
   * Form model
   */
  loginModel: CredentialsModel = {};

  /**
   * Name of the current user, if there is an active session. Otherwise `undefined`.
   */
  currentUser?: string;

  constructor(private authService: AuthenticationService) { }

  /**
   * Initialization: Check the current user session
   */
  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe({
      next: username => this.currentUser = username,
      error: () => {}
    });
  }

  /**
   * Sends the log-in request
   */
  logIn(): void {
    if (!this.loginModel.name || !this.loginModel.password) {
      return;
    }
    this.authService.logIn(this.loginModel.name, this.loginModel.password).pipe(
      switchMap(() => this.authService.getCurrentUser())
    ).subscribe({
      next: username => {
        this.currentUser = username;
        this.loginModel = {};
      },
      error: error => console.error(error)
    });
  }

  /**
   * Ends the current session
   */
  logOut(): void {
    this.authService.logOut().subscribe({
      next: () => this.currentUser = undefined,
      error: error => console.error(error)
    });
  }

}

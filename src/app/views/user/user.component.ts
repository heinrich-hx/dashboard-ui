import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';
import { ContainerComponent } from '../../components/container/container.component';
import { AuthenticationService } from '../../services/authentication.service';
import { LoginModel } from '../../models/login.model';
import { IconComponent } from '../../components/icon/icon.component';
import { ButtonComponent } from '../../components/button/button.component';
import { InputComponent } from '../../components/input/input.component';
import { PanelComponent } from '../../components/panel/panel.component';

/**
 * User profile
 */
@Component({
  selector: 'app-user',
  imports: [
    ButtonComponent,
    CommonModule,
    ContainerComponent,
    FormsModule,
    IconComponent,
    InputComponent,
    PanelComponent,
    RouterLink
  ],
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  /**
   * Form model
   */
  loginModel: LoginModel = {
    name: '',
    password: ''
  };

  /**
   * Name of the current user, if there is an active session. Otherwise `undefined`.
   */
  currentUser?: string;

  constructor(
    private readonly authService: AuthenticationService,
    private readonly location: Location
  ) { }

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
        this.loginModel = {
          name: '',
          password: ''
        };
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

  /**
   * Navigate back
   */
  navigateBack(): void {
    this.location.back();
  }

}

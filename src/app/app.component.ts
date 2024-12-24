import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * The root component of the app
 */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dashboard-ui';
}

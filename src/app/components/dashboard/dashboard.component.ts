import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { Observable } from 'rxjs';
import { DashboardModel } from '../../models/dashboard.model';
import { RouterLink } from '@angular/router';

/**
 * The main view
 */
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  $dashboard?: Observable<DashboardModel>;

  constructor(private dashboardService: DashboardService) { }

  /**
   * Initialization
   */
  ngOnInit(): void {
    this.$dashboard = this.dashboardService.getDashboard();
  }

}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { IconComponent } from '../icon/icon.component';
import { DashboardService } from '../../services/dashboard.service';
import { DashboardModel } from '../../models/dashboard.model';

/**
 * The main view
 */
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, IconComponent, RouterLink],
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

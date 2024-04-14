import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { IconComponent } from '../../components/icon/icon.component';
import { DashboardService } from '../../services/dashboard.service';
import { DashboardModel } from '../../models/dashboard.model';
import { PanelComponent } from '../../components/panel/panel.component';
import { ContainerComponent } from '../../components/container/container.component';
import { LinkComponent } from '../../components/link/link.component';

/**
 * The main view
 */
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ContainerComponent, IconComponent, LinkComponent, PanelComponent, RouterLink],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  /**
   * Service request
   */
  $dashboard?: Observable<DashboardModel>;

  constructor(private dashboardService: DashboardService) { }

  /**
   * Initialization
   */
  ngOnInit(): void {
    this.$dashboard = this.dashboardService.getDashboard();
  }

}

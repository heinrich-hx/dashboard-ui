import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ContainerComponent } from '../../components/container/container.component';
import { LinkEditorComponent } from '../../components/link-editor/link-editor.component';
import { DashboardService } from '../../services/dashboard.service';
import { DashboardModel } from '../../models/dashboard.model';
import { LinkModel } from '../../models/link.model';

/**
 * The dashboard editor
 */
@Component({
  selector: 'app-settings',
  imports: [ContainerComponent, LinkEditorComponent],
  templateUrl: './settings.component.html'
})
export class SettingsComponent implements OnInit {

  /**
   * Dashboard record
   */
  dashboard?: DashboardModel;

  constructor(
    private readonly dashboardService: DashboardService,
    private readonly destroyRef: DestroyRef
  ) { }

  /**
   * On init
   */
  ngOnInit(): void {
    this.dashboardService.getDashboard()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(dashboard => this.dashboard = dashboard);
  }

  /**
   * Saves dashboard
   */
  saveDashboard(event: LinkModel): void {
    console.log(event);
    console.log(this.dashboard);

    // TODO update dashboard

    if (this.dashboard) {
      this.dashboardService.saveDashboard(this.dashboard)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(dashboard => {
          this.dashboard = dashboard;
        });
    }
  }

}

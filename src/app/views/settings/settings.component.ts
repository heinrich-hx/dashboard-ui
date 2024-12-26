import { Location } from '@angular/common';
import { Component, DestroyRef, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ContainerComponent } from '../../components/container/container.component';
import { DashboardService } from '../../services/dashboard.service';
import { DashboardModel } from '../../models/dashboard.model';
import { ButtonComponent } from '../../components/button/button.component';
import { IconComponent } from '../../components/icon/icon.component';
import { PanelComponent } from '../../components/panel/panel.component';
import { HeadingComponent } from '../../components/heading/heading.component';
import { LinkListEditorComponent } from '../../components/link-list-editor/link-list-editor.component';

/**
 * The dashboard editor
 */
@Component({
  selector: 'app-settings',
  imports: [
    ButtonComponent,
    ContainerComponent,
    HeadingComponent,
    IconComponent,
    LinkListEditorComponent,
    PanelComponent
  ],
  templateUrl: './settings.component.html'
})
export class SettingsComponent implements OnInit {

  /**
   * Dashboard record
   */
  dashboard?: DashboardModel;

  constructor(
    private readonly dashboardService: DashboardService,
    private readonly destroyRef: DestroyRef,
    private readonly location: Location
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
  saveDashboard(): void {
    if (!this.dashboard) {
      return;
    }
    this.dashboardService.saveDashboard(this.dashboard)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(dashboard => {
        this.dashboard = dashboard;
      });
  }

  /**
   * Navigate back
   */
  navigateBack(): void {
    this.location.back();
  }

}

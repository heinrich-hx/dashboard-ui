import { Location } from '@angular/common';
import { Component, DestroyRef, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { v4 as uuidv4 } from 'uuid';
import { ContainerComponent } from '../../components/container/container.component';
import { DashboardService } from '../../services/dashboard.service';
import { DashboardModel } from '../../models/dashboard.model';
import { ButtonComponent } from '../../components/button/button.component';
import { IconComponent } from '../../components/icon/icon.component';
import { PanelComponent } from '../../components/panel/panel.component';
import { HeadingComponent } from '../../components/heading/heading.component';
import { LinkListEditorComponent } from '../../components/link-list-editor/link-list-editor.component';
import { PanelEditorComponent } from "../../components/panel-editor/panel-editor.component";

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
    PanelComponent,
    PanelEditorComponent
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
   * Save dashboard
   */
  save(): void {
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
   * Adds a new panel to the dashboard
   */
  addPanel(): void {
    if (!this.dashboard) {
      return;
    }
    this.dashboard.panels.push({
      uuid: uuidv4(),
      label: 'New Panel',
      links: [],
    });
    this.save();
  }

  /**
   * Removes a panel
   *
   * @param uuid UUID of the panel
   */
  removePanel(uuid: string): void {
    const i = this.dashboard ? this.dashboard.panels.findIndex(panel => panel.uuid === uuid) : -1;
    if (i >= 0) {
      this.dashboard?.panels.splice(i, 1);
      this.save();
    }
  }

  /**
   * Navigate back
   */
  navigateBack(): void {
    this.location.back();
  }

}

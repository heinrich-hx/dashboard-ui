import { Location } from '@angular/common';
import { Component, DestroyRef, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ContainerComponent } from '../../components/container/container.component';
import { LinkEditorComponent } from '../../components/link-editor/link-editor.component';
import { DashboardService } from '../../services/dashboard.service';
import { DashboardModel } from '../../models/dashboard.model';
import { LinkModel } from '../../models/link.model';
import { ButtonComponent } from '../../components/button/button.component';
import { IconComponent } from '../../components/icon/icon.component';
import { PanelComponent } from '../../components/panel/panel.component';
import { HeadingComponent } from '../../components/heading/heading.component';

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
    LinkEditorComponent,
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
   * Writes the updated link to the local dashboard record
   *
   * @param update LinkModel
   */
  onLinkSaved(update: LinkModel): void {
    if (!this.dashboard) {
      return;
    }
    let i = this.dashboard.top.findIndex(link => link.uuid === update.uuid);
    if (i >= 0) {
      this.dashboard.top[i] = update;
      return;
    }
    for (let panel of this.dashboard.panels) {
      i = panel.links.findIndex(link => link.uuid === update.uuid);
      if (i >= 0) {
        panel.links[i] = update;
        return;
      }
    }
  }

  /**
   * Removes a link from the local dashboard record
   *
   * @param uuid UUID of the link
   */
  onLinkRemoved(uuid: string): void {console.log(uuid);
    if (!this.dashboard) {
      return;
    }
    let i = this.dashboard.top.findIndex(link => link.uuid === uuid);
    if (i >= 0) {
      this.dashboard.top.splice(i, 1);
      return;
    }
    for (let panel of this.dashboard.panels) {
      i = panel.links.findIndex(link => link.uuid === uuid);
      if (i >= 0) {
        panel.links.splice(i, 1);
        return;
      }
    }
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

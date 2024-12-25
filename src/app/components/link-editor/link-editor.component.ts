import { Component, DestroyRef, EventEmitter, Input, Output } from '@angular/core';
import { IconComponent } from '../../components/icon/icon.component';
import { InputComponent } from '../input/input.component';
import { ButtonComponent } from '../button/button.component';
import { LinkModel } from '../../models/link.model';
import { DashboardService } from '../../services/dashboard.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

/**
 * Link editor
 */
@Component({
  selector: 'db-link-editor',
  imports: [ButtonComponent, IconComponent, InputComponent],
  templateUrl: './link-editor.component.html',
  host: {
    class: 'block'
  },
})
export class LinkEditorComponent {

  /**
   * Link model
   */
  @Input()
  link?: LinkModel;

  /**
   * Link change event: Triggered only when the link was saved successfully.
   */
  @Output()
  linkChange = new EventEmitter<LinkModel>();

  /**
   * Link instance for editing
   */
  editLink?: LinkModel;

  constructor(
    private readonly dashboardService: DashboardService,
    private readonly destroyRef: DestroyRef
  ) { }

  /**
   * Enables edit mode
   */
  edit(): void {
    this.editLink = JSON.parse(JSON.stringify(this.link));
  }

  /**
   * Leave the edit mode
   */
  cancel(): void {
    this.editLink = undefined;
  }

  /**
   * Saves the changes
   */
  save(): void {
    if (!this.editLink) {
      return;
    }
    this.dashboardService.saveLink(this.editLink)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(savedLink => {
        this.link = this.editLink;
        this.editLink = undefined;
        this.linkChange.emit(this.link);
      });
  }

}

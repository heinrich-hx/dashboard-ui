import { Component, DestroyRef, OnChanges, SimpleChanges, input, model, output } from '@angular/core';
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
export class LinkEditorComponent implements OnChanges {

  /**
   * Link model
   */
  link = model<LinkModel>();

  /**
   * Setup for a new link instance
   */
  create = input(false);

  /**
   * Link change event: Triggered only when the link was saved successfully.
   */
  linkChange = output<LinkModel>();

  /**
   * Link remove event: Triggered only when the link was removed successfully.
   */
  linkRemove = output<string>();

  /**
   * Edit mode closed
   */
  canceled = output<void>();

  /**
   * Link instance for editing
   */
  editLink?: LinkModel;

  constructor(
    private readonly dashboardService: DashboardService,
    private readonly destroyRef: DestroyRef
  ) { }

  /**
   * On input changes
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (this.create() === true) {
      this.edit();
    }
  }

  /**
   * Enables edit mode
   */
  edit(): void {
    this.editLink = JSON.parse(JSON.stringify(this.link()));
  }

   /**
   * Removes link and emits the UUID
   */
   remove(): void {
    const uuid = this.link()?.uuid;
    if (!uuid) {
      return;
    }
    this.dashboardService.deleteLink(uuid)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.linkRemove.emit(uuid);
      });
  }

  /**
   * Leave the edit mode
   */
  cancel(): void {
    this.editLink = undefined;
    this.canceled.emit();
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
        this.link.set(savedLink);
        this.editLink = undefined;
        this.linkChange.emit(savedLink);
      });
  }

}

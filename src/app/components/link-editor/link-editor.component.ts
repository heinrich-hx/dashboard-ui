import { Component, Input } from '@angular/core';
import { IconComponent } from '../../components/icon/icon.component';
import { InputComponent } from '../input/input.component';
import { ButtonComponent } from '../button/button.component';
import { LinkModel } from '../../models/link.model';
import { CommonModule } from '@angular/common';

/**
 * Link editor
 */
@Component({
  selector: 'db-link-editor',
  standalone: true,
  imports: [ButtonComponent, CommonModule, IconComponent, InputComponent],
  templateUrl: './link-editor.component.html'
})
export class LinkEditorComponent {

  /**
   * Link model
   */
  @Input()
  link?: LinkModel;

  /**
   * Link instance for editing
   */
  editLink?: LinkModel;

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
    this.editLink = undefined;
    // TODO save the changes
  }

}

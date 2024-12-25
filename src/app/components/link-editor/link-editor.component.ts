import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconComponent } from '../../components/icon/icon.component';
import { InputComponent } from '../input/input.component';
import { ButtonComponent } from '../button/button.component';
import { LinkModel } from '../../models/link.model';

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
   * Link change event
   */
  @Output()
  linkChange = new EventEmitter<LinkModel>();

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
    this.link = this.editLink;
    this.editLink = undefined;
    this.linkChange.emit(this.link);
  }

}

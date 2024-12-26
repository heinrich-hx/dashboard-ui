import { Component, model } from '@angular/core';
import { LinkEditorComponent } from '../link-editor/link-editor.component';
import { LinkModel } from '../../models/link.model';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'db-link-list-editor',
  imports: [ButtonComponent, LinkEditorComponent],
  templateUrl: './link-list-editor.component.html'
})
export class LinkListEditorComponent {

  /**
   * List of LinkModel
   */
  links = model<LinkModel[]>([]);

  /**
   * Local model for creating a new link
   */
  newLink?: LinkModel;

  /**
   * Writes the updated link to the local dashboard record
   *
   * @param update LinkModel
   */
  onLinkSaved(update?: LinkModel): void {
    if (!update) {
      return;
    }
    const links = this.links();
    let i = links.findIndex(link => link.uuid === update.uuid);
    if (i >= 0) {
      links[i] = update;
    }
  }

  /**
   * Removes a link from the local dashboard record
   *
   * @param uuid UUID of the link
   */
  onLinkRemoved(uuid: string): void {
    const links = this.links();
    let i = links.findIndex(link => link.uuid === uuid);
    if (i >= 0) {
      links.splice(i, 1);
      // this.links.set(links);
    }
  }

  /**
   * Adds a new link
   */
  addNewLink(): void {
    this.newLink = {
      uuid: '',
      icon: '',
      label: '',
      url: '',
    };
  }

}

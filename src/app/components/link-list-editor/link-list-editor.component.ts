import { Component } from '@angular/core';
import { LinkEditorComponent } from '../link-editor/link-editor.component';
import { LinkModel } from '../../models/link.model';

@Component({
  selector: 'app-link-list-editor',
  imports: [LinkEditorComponent],
  templateUrl: './link-list-editor.component.html'
})
export class LinkListEditorComponent {

  links: LinkModel[] = [];

  /**
   * Writes the updated link to the local dashboard record
   *
   * @param update LinkModel
   */
  onLinkSaved(update: LinkModel): void {
    let i = this.links.findIndex(link => link.uuid === update.uuid);
    if (i >= 0) {
      this.links[i] = update;
      return;
    }
  }

  /**
   * Removes a link from the local dashboard record
   *
   * @param uuid UUID of the link
   */
  onLinkRemoved(uuid: string): void {console.log(uuid);
    let i = this.links.findIndex(link => link.uuid === uuid);
    if (i >= 0) {
      this.links.splice(i, 1);
      return;
    }
  }

}

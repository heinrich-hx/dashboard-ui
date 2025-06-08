import { Component, model } from '@angular/core';
import { LinkListModel } from '../../models/link-list.model';
import { HeadingComponent } from "../heading/heading.component";
import { IconComponent } from "../icon/icon.component";
import { LinkListEditorComponent } from "../link-list-editor/link-list-editor.component";
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'db-panel-editor',
  imports: [HeadingComponent, IconComponent, LinkListEditorComponent, ButtonComponent],
  templateUrl: './panel-editor.component.html'
})
export class PanelEditorComponent {

  /**
   * Panel model
   */
  panel = model<LinkListModel>();

  /**
   * Edit title
   */
  edit(): void {

  }

  /**
   * Remove panel
   */
  remove(): void{

  }

}

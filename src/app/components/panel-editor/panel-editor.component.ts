import { Component, model, output } from '@angular/core';
import { HeadingComponent } from "../heading/heading.component";
import { IconComponent } from "../icon/icon.component";
import { LinkListEditorComponent } from "../link-list-editor/link-list-editor.component";
import { ButtonComponent } from "../button/button.component";
import { LinkListModel } from '../../models/link-list.model';
import { InputComponent } from "../input/input.component";

@Component({
  selector: 'db-panel-editor',
  imports: [HeadingComponent, IconComponent, LinkListEditorComponent, ButtonComponent, InputComponent],
  templateUrl: './panel-editor.component.html'
})
export class PanelEditorComponent {

  /**
   * Panel model (combined input/output signal)
   */
  panel = model<LinkListModel>({ uuid: '', label: '', links: [] });

  /**
   * Panel remove event
   */
  remove = output<string>();

  /**
   * Edit mode
   */
  editMode?: {
    label: string,
    icon: string
  };

  /**
   * Enables edit mode for label/icon
   */
  edit(): void {
    this.editMode = {
      label: this.panel()?.label || '',
      icon: this.panel()?.icon || ''
    };
  }

  /**
   * Saves changes to label/icon and links
   */
  save(): void {
    this.panel.update(panel => {
      panel = panel ? { ...panel } : panel; // New object needed to emit change
      if (panel && this.editMode) {
        panel.icon = this.editMode.icon;
        panel.label = this.editMode.label;
        this.editMode = undefined;
      }
      return panel;
    });
  }

  /**
   * Cancel
   */
  cancel(): void {
    this.editMode = undefined;
  }

  /**
   * Sends remove event to parent component
   */
  removePanel(): void{
    this.remove.emit(this.panel().uuid);
  }

}

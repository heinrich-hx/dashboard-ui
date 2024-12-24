import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { LinkEditorComponent } from '../../components/link-editor/link-editor.component';
import { LinkModel } from '../../models/link.model';
import { ButtonComponent } from '../../components/button/button.component';

/**
 * The dashboard editor
 */
@Component({
  selector: 'app-settings',
  imports: [ButtonComponent, ContainerComponent, LinkEditorComponent],
  templateUrl: './settings.component.html'
})
export class SettingsComponent {

  /**
   * Model
   */
  model: LinkModel = { label: 'Example', url: '/example', icon: 'example' };

  /**
   * Test
   */
  test(): void {
    console.log(this.model);
  }

}

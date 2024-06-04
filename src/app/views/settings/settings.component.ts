import { Component } from '@angular/core';
import { IconComponent } from '../../components/icon/icon.component';
import { ContainerComponent } from '../../components/container/container.component';
import { LinkEditorComponent } from '../../components/link-editor/link-editor.component';

/**
 * The dashboard editor
 */
@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [ContainerComponent, IconComponent, LinkEditorComponent],
  templateUrl: './settings.component.html'
})
export class SettingsComponent {

}

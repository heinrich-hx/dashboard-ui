import { Component } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { ButtonComponent } from '../button/button.component';

/**
 * Link editor
 */
@Component({
  selector: 'db-link-editor',
  standalone: true,
  imports: [ButtonComponent, InputComponent],
  templateUrl: './link-editor.component.html'
})
export class LinkEditorComponent {

}

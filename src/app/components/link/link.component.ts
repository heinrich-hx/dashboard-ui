import { Component, Input } from '@angular/core';
import { LinkModel } from '../../models/link.model';
import { IconComponent } from '../icon/icon.component';
import { CommonModule } from '@angular/common';

/**
 * Displays a link
 */
@Component({
  selector: 'app-link',
  standalone: true,
  imports: [CommonModule, IconComponent],
  host: {
    class: 'inline-block'
  },
  templateUrl: './link.component.html'
})
export class LinkComponent {

  /**
   * Link model
   */
  @Input()
  link?: LinkModel;

}

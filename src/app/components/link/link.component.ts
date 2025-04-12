import { NgIf } from '@angular/common';
import { Component, input } from '@angular/core';
import { LinkModel } from '../../models/link.model';
import { IconComponent } from '../icon/icon.component';

/**
 * Displays a link
 */
@Component({
  selector: 'db-link',
  imports: [IconComponent, NgIf],
  host: {
    class: 'inline-block'
  },
  templateUrl: './link.component.html'
})
export class LinkComponent {

  /**
   * Link model
   */
  link = input<LinkModel | undefined>();

}

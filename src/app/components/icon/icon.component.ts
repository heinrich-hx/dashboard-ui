import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

/**
 * Icon component
 */
@Component({
  selector: 'db-icon',
  imports: [NgClass],
  host: {
    class: 'inline-block'
  },
  templateUrl: './icon.component.html'
})
export class IconComponent {

  /**
   * Name of the icon to display
   */
  icon = input<string | undefined>();

}

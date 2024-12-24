import { NgClass, NgIf } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

/**
 * Icon component
 */
@Component({
  selector: 'db-icon',
  imports: [NgClass, NgIf],
  host: {
    class: 'inline-block'
  },
  templateUrl: './icon.component.html'
})
export class IconComponent {

  /**
   * Name of the icon to display
   */
  @Input()
  icon?: string;

}

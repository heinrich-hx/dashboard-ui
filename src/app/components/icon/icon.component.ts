import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IconEnum } from './icon.enum';

/**
 * Icon component
 */
@Component({
  selector: 'app-icon',
  standalone: true,
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css'
})
export class IconComponent implements OnChanges {

  /**
   * Name of the icon to display
   */
  @Input()
  icon?: string;

  /**
   * URL of the icon file
   */
  url?: string;

  /**
   * Processes input value
   */
  ngOnChanges(changes: SimpleChanges): void {
    this.url = IconEnum[this.icon as keyof typeof IconEnum];
    if (!this.url) {
      console.error(`Unknown icon: ${this.icon}`);
    }
  }

}

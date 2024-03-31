import { Component, Input } from '@angular/core';
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
export class IconComponent {

  /**
   * Name of the icon to display
   */
  @Input()
  icon?: keyof typeof IconEnum;

  /**
   * IconEnum for template use
   */
  readonly ICON_ENUM = IconEnum;

}

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
  templateUrl: './link.component.html',
  styleUrl: './link.component.css'
})
export class LinkComponent {

  /**
   * Link model
   */
  @Input()
  link?: LinkModel;

}

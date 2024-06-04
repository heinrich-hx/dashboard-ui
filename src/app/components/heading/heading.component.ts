import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

/**
 * Generates the headline elements h1-h6
 */
@Component({
  selector: 'db-heading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './heading.component.html'
})
export class HeadingComponent {

  /**
   * Headline level: 1-6
   */
  @Input()
  level: number = 1;

}

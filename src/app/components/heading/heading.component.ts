import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

/**
 * Generates the headline elements h1-h6
 */
@Component({
  selector: 'db-heading',
  imports: [CommonModule],
  templateUrl: './heading.component.html',
  host: {
    class: 'block'
  },
})
export class HeadingComponent {

  /**
   * Headline level: 1-6
   */
  level = input<number>(1);

}

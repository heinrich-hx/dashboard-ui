import { Component } from '@angular/core';

/**
 * Sets max-width according to the current breakpoint
 */
@Component({
  selector: 'db-container',
  host: {
    class: 'block container mx-auto px-4'
  },
  templateUrl: './container.component.html'
})
export class ContainerComponent {

}

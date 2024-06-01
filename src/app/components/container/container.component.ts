import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  standalone: true,
  host: {
    class: 'block container mx-auto px-4'
  },
  templateUrl: './container.component.html'
})
export class ContainerComponent {

}

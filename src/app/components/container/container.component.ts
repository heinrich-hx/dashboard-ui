import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  standalone: true,
  host: {
    class: 'container mx-auto px-4'
  },
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

}

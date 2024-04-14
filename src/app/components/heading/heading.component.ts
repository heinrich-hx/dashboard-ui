import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './heading.component.html'
})
export class HeadingComponent {

  @Input()
  level: number = 1;

}

import { Component } from '@angular/core';

/**
 * Panel component
 */
@Component({
  selector: 'app-panel',
  standalone: true,
  host: {
    class: 'border border-solid border-black'
  },
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})
export class PanelComponent { }

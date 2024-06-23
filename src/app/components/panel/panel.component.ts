import { Component } from '@angular/core';

/**
 * Panel component
 */
@Component({
  selector: 'db-panel',
  standalone: true,
  host: {
    class: 'block p-3 bg-zinc-800 rounded'
  },
  templateUrl: './panel.component.html'
})
export class PanelComponent { }

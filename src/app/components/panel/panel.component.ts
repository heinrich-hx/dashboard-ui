import { Component } from '@angular/core';

/**
 * Panel component
 */
@Component({
  selector: 'db-panel',
  standalone: true,
  host: {
    class: 'block p-3 border border-solid border-zinc-50 rounded'
  },
  templateUrl: './panel.component.html'
})
export class PanelComponent { }

import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

/**
 * Text input field
 */
@Component({
  selector: 'db-input',
  standalone: true,
  imports: [NgIf],
  templateUrl: './input.component.html',
  host: {
    class: 'inline-block mx-4 my-2'
  },
})
export class InputComponent {

  /**
   * Label
   */
  @Input()
  label?: string;

  /**
   * Name
   */
  @Input()
  name?: string;

  /**
   * Required
   */
  @Input()
  required = false;

}

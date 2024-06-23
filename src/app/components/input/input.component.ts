import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

/**
 * Text input field
 */
@Component({
  selector: 'db-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
  label: string = '';

  /**
   * Name
   */
  @Input()
  name: string = '';

  /**
   * Model
   */
  @Input()
  model: string = '';

  /**
   * Model change event
   */
  @Output()
  modelChange = new EventEmitter<string>();

  /**
   * Required
   */
  @Input()
  required = false;

  /**
   * Event handler for internal input element
   */
  onModelChange(value: string): void {
    this.modelChange.emit(value);
  }

}

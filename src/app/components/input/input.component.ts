import { CommonModule } from '@angular/common';
import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputType } from './input-type';

/**
 * Transforms input type from string to enum.
 * Returms `text` as fall back.
 *
 * @param value String value
 * @returns Enum InputType
 */
function transformInputType(value: string): InputType {
  const type = InputType[value as keyof typeof InputType];
  return type ? type : InputType.text;
}

/**
 * Text input field
 */
@Component({
  selector: 'db-input',
  imports: [CommonModule, FormsModule],
  templateUrl: './input.component.html',
  host: {
    class: 'block my-2'
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
   * Input types: `text`, `number`, `password`
   */
  type = input(InputType.text, { transform: transformInputType });

  /**
   * Event handler for internal input element
   */
  onModelChange(value: string): void {
    this.modelChange.emit(value);
  }

}

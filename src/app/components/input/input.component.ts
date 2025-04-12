import { Component, input, output } from '@angular/core';
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
  imports: [FormsModule],
  templateUrl: './input.component.html',
  host: {
    class: 'block my-2'
  },
})
export class InputComponent {

  /**
   * Label
   */
  label = input('');

  /**
   * Name
   */
  name = input('');

  /**
   * Model
   */
  model = input('');

  /**
   * Required
   */
  required = input(false);

  /**
   * Model change event
   */
  modelChange = output<string>();

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

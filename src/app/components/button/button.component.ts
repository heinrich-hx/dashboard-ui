import { Component, Input, input } from '@angular/core';
import { ButtonType } from './button-type';
import { NgClass } from '@angular/common';

/**
 * Transforms button type from string to enum.
 * Returms `primary` as fall back.
 *
 * @param value String value
 * @returns Enum ButtonType
 */
function transformButtonType(value: string): ButtonType {
  const type = ButtonType[value as keyof typeof ButtonType];
  return type ? type : ButtonType.primary;
}

/**
 * Button
 */
@Component({
  selector: 'db-button',
  imports: [NgClass],
  templateUrl: './button.component.html',
  host: {
    class: 'inline-block'
  },
})
export class ButtonComponent {

  /**
   * CSS classes for the button types
   */
  readonly buttonStyles = {
    primary: 'bg-red-500 active:bg-red-700 hover:bg-red-700 px-4 py-1 rounded-full',
    secondary: 'bg-zinc-600 active:bg-zinc-700 hover:bg-zinc-700 px-4 py-1 rounded-full',
    blank: 'active:bg-zinc-700 hover:bg-zinc-700 px-2 py-1 rounded-md'
  };

  /**
   * Button types: `primary`, `secondary`, `blank`
   */
  type = input(ButtonType.primary, { transform: transformButtonType });

}

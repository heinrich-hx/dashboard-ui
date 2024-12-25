import { LinkModel } from './link.model';

/**
 * Link list
 */
export interface LinkListModel {

  /**
   * UUID
   */
  uuid: string;

  /**
   * Label
   */
  label: string;

  /**
   * Icon
   */
  icon?: string

  /**
   * An array of links
   */
  links: LinkModel[];

}

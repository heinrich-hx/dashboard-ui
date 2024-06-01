import { LinkListModel } from './link-list.model';
import { LinkModel } from './link.model';

/**
 * Dashboard
 */
export interface DashboardModel {

  /**
   * Top area
   */
  top: LinkModel[];

  /**
   * Panels
   */
  panels: LinkListModel[];

}

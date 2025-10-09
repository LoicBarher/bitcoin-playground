import { type RouteName, NAVIGATION_TREE } from '../../../Routing';
import { findPathToId } from '../../Layout';

export type WorldThemeName = 'blue' | 'orange' | 'emerald' | 'base';

export const getWorldThemeColorName = (currentPage: RouteName): WorldThemeName => {
  const path = findPathToId(NAVIGATION_TREE, currentPage);
  const topLevelParentLabel = path ? path[0] : null;

  switch (topLevelParentLabel) {
    case 'La Solution':
      return 'orange';
    case 'La Pratique':
      return 'emerald';
    case 'Le Problème':
      return 'blue';
    default:
      return 'base';
  }
};
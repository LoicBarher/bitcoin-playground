import { type NavigationItem, ROUTE_NAME } from '..';
import { BitcoinIcon, MoneyIcon, ToolIcon } from '../../Design/icons';

export const NAVIGATION_TREE: NavigationItem[] = [
  {
    label: 'Le Problème',
    isPage: false,
    icon: <MoneyIcon />,
    children: [
      {
        label: 'Le fonctionnement du système bancaire',
        isPage: false,
        children: [
          {
            id: ROUTE_NAME.MondeBleu_1_1_1,
            label: "D'où vient la monnaie ?",
            isPage: true,
          },
          {
            id: ROUTE_NAME.MondeBleu_1_1_2,
            label: 'Les deux niveaux de monnaies',
            isPage: true,
          },
          {
            id: ROUTE_NAME.MondeBleu_1_1_3,
            label: 'Le Quantitative Easing',
            isPage: true,
          },
          {
            id: ROUTE_NAME.MondeBleu_1_1_4,
            label: 'Le cercle vicieux',
            isPage: true,
          },
        ],
      },
      {
        label: "Qu'est-ce qu'une monnaie ?",
        isPage: false,
      },
      {
        label: 'Les cycles économiques',
        isPage: false,
      },
      {
        label: 'Le problème du système socialiste',
        isPage: false,
      },
      {
        label: 'La méthodologie autrichienne',
        isPage: false,
      },
    ],
  },
  {
    id: ROUTE_NAME.MondeOrange,
    label: 'La Solution',
    isPage: true,
    icon: <BitcoinIcon />,
  },
  {
    id: ROUTE_NAME.MondeVert,
    label: 'La Pratique',
    isPage: true,
    icon: <ToolIcon />,
  },
];


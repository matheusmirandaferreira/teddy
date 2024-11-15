import { NavigationProp } from '@react-navigation/native';

import { paths } from '@/routes';

export type PathsValues = (typeof paths)[keyof typeof paths];

export type NavigationProps = NavigationProp<{
  [K in PathsValues]?: any;
}>;

export type Option = {
  label: string;
  value: string;
};

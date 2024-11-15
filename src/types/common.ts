import { NavigationProp } from '@react-navigation/native';

import { paths } from '@/routes';

export type PathValues = NavigationProp<(typeof paths)[keyof typeof paths]>;

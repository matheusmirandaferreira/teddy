import 'styled-components/native';
import { theme } from './styles/theme';

type Theme = typeof theme;

declare module 'styled-components/native' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends Theme {}
}

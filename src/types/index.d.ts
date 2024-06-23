import { CustomTheme } from '@/configs/theme';
import type { Theme as ThemeUi } from 'theme-ui';

declare module '@emotion/react' {
  export interface Theme extends CustomTheme, ThemeUi { }
}

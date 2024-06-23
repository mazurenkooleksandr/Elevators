import { ReactNode } from 'react';
import { ThemeProvider } from '@emotion/react';
import { ThemeUIProvider } from 'theme-ui';

import { theme } from '@/configs/theme';
import { SystemSettingsProvider } from '@/contexts';

import '@/configs/i18n.ts';

type WrapperProps = { children: ReactNode };
export const wrapper = ({ children }: WrapperProps) => (
  <ThemeUIProvider theme={theme}>
    <ThemeProvider theme={theme}>
      <SystemSettingsProvider>
        {children}
      </SystemSettingsProvider>
    </ThemeProvider>
  </ThemeUIProvider>
);

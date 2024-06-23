import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import './configs/i18n.ts';
import { ThemeUIProvider } from 'theme-ui';
import { theme } from './configs/theme.ts';
import { ThemeProvider } from '@emotion/react';
import { SystemSettingsProvider } from './contexts/SystemSettings.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeUIProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <SystemSettingsProvider>
          <App />
        </SystemSettingsProvider>
      </ThemeProvider>
    </ThemeUIProvider>
  </React.StrictMode >,
);

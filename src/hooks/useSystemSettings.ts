import { useContext } from 'react';
import {  SystemSettingsContext, SystemSettingsContextType } from '../contexts';

// This hook helps get and update system settings from the context
export const useSystemSettings = (): SystemSettingsContextType => {
  const context = useContext(SystemSettingsContext);

  if (context === null) throw new Error(
    "useSystemSettings has to be used within <SystemSettingsProvider>"
  );

  return context;
};

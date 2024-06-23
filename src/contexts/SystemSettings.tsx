import React, { Dispatch, ReactNode, SetStateAction, useState } from 'react';

const initValues = {
  buildings: 1,
  elevators: 1,
};

export type SystemSettingsType = typeof initValues;

type SystemSettingsProviderProps = {
  children: ReactNode;
};

export type SystemSettingsContextType = {
  systemSettings: SystemSettingsType,
  setSystemSettings: Dispatch<SetStateAction<SystemSettingsType>>,
}

// Create a context for system settings
export const SystemSettingsContext = React.createContext<SystemSettingsContextType | null>(null);

// Create a provider for system settings
export const SystemSettingsProvider = ({ children }: SystemSettingsProviderProps) => {
  const [systemSettings, setSystemSettings] = useState(initValues);

  const data = {
    systemSettings,
    setSystemSettings,
  };

  return <SystemSettingsContext.Provider value={data}>{children}</SystemSettingsContext.Provider>;
};

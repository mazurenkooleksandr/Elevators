import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useSystemSettings } from '.';
import { getDefaultElevatorData } from '@/utils';
import { ElevatorType } from '@/types/building';

// This hook helps get and update elevator data
export const useElevatorsData = (): [ElevatorType[], Dispatch<SetStateAction<ElevatorType[]>>] => {
  const { elevators } = useSystemSettings().systemSettings;
  const [data, setData] = useState<ElevatorType[]>(getDefaultElevatorData(elevators));

  useEffect(() => {
    setData(getDefaultElevatorData(elevators));
  }, [elevators]);

  return [data, setData];
};

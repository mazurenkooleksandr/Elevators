import { useCallback, useEffect, useState } from "react";

import doorEffect from "@/assets/door-effect.mp3";
import { DOOR_EFFECT_TIME } from "@/constants/app";
import { ElevatorType } from "@/types/building";
import { useElevatorsData } from "@/hooks";
import { getClosestElevator, getElevatorTimeout, getUpdatedElevatorsData } from "@/utils";

export const useBuildingData = () => {
  const [elevatorsData, setElevatorsData] = useElevatorsData();
  const [queue, setQueue] = useState<number[]>([]);

  // Checking the floor to see if it is busy to call
  const getIsBusyFloor = (floor: number) => {
    return queue.includes(floor)
      || !!Object.values(elevatorsData).find(({ currentFloor, isBusy }) => isBusy && floor === currentFloor);
  };

  // Triggers all effects for the door
  const startDoorEffect = useCallback((index: number) => {
    new Audio(doorEffect).play();
    setElevatorsData(prev => getUpdatedElevatorsData({
      data: prev,
      index,
      newData: { isDoorEffect: true }
    }));
  }, [setElevatorsData]);
  // Completes all effects for the elevator
  const finishDoorEffect = useCallback((index: number) => {
    setElevatorsData(prev => getUpdatedElevatorsData({
      data: prev,
      index,
      newData: { isDoorEffect: false, isBusy: false }
    }));
  }, [setElevatorsData]);

  // Triggers all effects for the elevator
  const handleCallElevator = useCallback((nextFloor: number, elevator: ElevatorType) => {
    const { index, currentFloor } = elevator;
    const time = getElevatorTimeout(Math.abs(nextFloor - currentFloor));

    setElevatorsData(prev => getUpdatedElevatorsData({
      data: prev,
      index,
      newData: {
        isBusy: true,
        currentFloor: nextFloor,
        elevatorTransitionTime: time,
      }
    }));

    setTimeout(() => startDoorEffect(index), time);
    setTimeout(() => finishDoorEffect(index), time + DOOR_EFFECT_TIME);
  }, [finishDoorEffect, setElevatorsData, startDoorEffect]);

  // Check for elevator availability and start the nearest elevator or put the floor number in the queue
  const handleControlButtonClick = (nextFloor: number) => () => {
    if (getIsBusyFloor(nextFloor)) return;

    const availableElevators = elevatorsData.filter(elevator => !elevator.isBusy);
    if (availableElevators.length > 0) {
      const availableElevator = getClosestElevator(availableElevators, nextFloor);
      handleCallElevator(nextFloor, availableElevator);
      return;
    }

    setQueue(prev => [...prev, nextFloor]);
  };

  // Starts the queue
  useEffect(() => {
    const availableElevator = elevatorsData.find(elevator => !elevator.isBusy);
    const nextFloor = queue[0];
    if (availableElevator && nextFloor) {
      handleCallElevator(nextFloor, availableElevator);
      setQueue(prev => prev.slice(1));
    }
  }, [elevatorsData, handleCallElevator, queue]);

  return {
    handleControlButtonClick,
    getIsBusyFloor,
    elevatorsData,
  };
};

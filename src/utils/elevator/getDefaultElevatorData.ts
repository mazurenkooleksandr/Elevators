export const DEFAULT_ELEVATOR_DATA = {
  currentFloor: 1,
  elevatorTransitionTime: 0,
  isBusy: false,
  isDoorEffect: false,
};

export const getDefaultElevatorData = (number: number) =>
  Array.from({ length: number }).map((_, index) => ({ ...DEFAULT_ELEVATOR_DATA, index }));

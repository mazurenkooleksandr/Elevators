export const getElevatorTimeout = (floorsCount: number) => floorsCount * 150 + (floorsCount > 0 ? 1000 : 0);

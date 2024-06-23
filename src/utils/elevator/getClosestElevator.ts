import { ElevatorType } from "@/types/building";

export const getClosestElevator = (elevators: ElevatorType[], floor: number) =>
  elevators.reduce((prev, curr) =>
    (Math.abs(curr.currentFloor - floor) < Math.abs(prev?.currentFloor - floor) ? curr : prev)
  );

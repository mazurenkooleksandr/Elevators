import { ElevatorType } from "@/types/building";

type GetUpdatedElevatorsDataProps = {
  data: ElevatorType[];
  index: number;
  newData: Partial<ElevatorType>;
}
export const getUpdatedElevatorsData = ({ data, index, newData }: GetUpdatedElevatorsDataProps) =>
  data.map(elevatorData =>
    elevatorData.index === index
      ? {
        ...elevatorData,
        ...newData
      }
      : elevatorData
  );

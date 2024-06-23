import { NUMBER_OF_FLOORS } from "@/constants/app";

import { ControlButton, Elevator, Floor, Floors, Wrapper } from "./styles";
import { useBuildingData } from "./hook";

const FLOORS = Array.from({ length: NUMBER_OF_FLOORS }).map((_, i) => i + 1);

export const Building = () => {
  const { handleControlButtonClick, getIsBusyFloor, elevatorsData } = useBuildingData();

  return (
    <Wrapper>
      <Floors sx={{ flexDirection: 'column-reverse', justifyContent: 'center' }}>
        {FLOORS.map(floor => (
          <Floor key={floor}>
            <ControlButton
              onClick={handleControlButtonClick(floor)}
              busy={getIsBusyFloor(floor)}
            />
            {floor}
          </Floor>
        ))}
      </Floors>

      {Object.values(elevatorsData).map((data, index) =>
        <Elevator key={index} {...data} />
      )}
    </Wrapper>
  );
};

import { describe, expect, it } from 'vitest';

import { getDefaultElevatorData } from '../getDefaultElevatorData';

describe('getDefaultElevatorData()', () => {
  it('returns correct value', () => {
    const result = getDefaultElevatorData(2);

    expect(result).toEqual([
      {
        index: 0,
        currentFloor: 1,
        elevatorTransitionTime: 0,
        isBusy: false,
        isDoorEffect: false,
      },
      {
        index: 1,
        currentFloor: 1,
        elevatorTransitionTime: 0,
        isBusy: false,
        isDoorEffect: false,
      }
    ]);
  });
});

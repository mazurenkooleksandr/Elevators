import { describe, expect, it } from 'vitest';

import { getClosestElevator } from '../getClosestElevator';
import { ElevatorType } from '@/types/building';

describe('getClosestElevator()', () => {
  const first = { currentFloor: 1, index: 1 };
  const second = { currentFloor: 7, index: 2 };
  const elevators = [first, second] as ElevatorType[];

  it('returns first elevator', () => {
    const result = getClosestElevator(elevators, 2);

    expect(result).toEqual(first);
  });

  it('returns second elevator', () => {
    const elevators = [{ currentFloor: 1, index: 1 }, { currentFloor: 7, index: 2 }] as ElevatorType[];
    const result = getClosestElevator(elevators, 5);

    expect(result).toEqual(second);
  });
});

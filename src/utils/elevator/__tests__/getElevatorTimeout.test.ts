import { describe, expect, it } from 'vitest';

import { getElevatorTimeout } from '../getElevatorTimeout';

describe('getElevatorTimeout()', () => {
  it('returns correct value when floors exist', () => {
    const result = getElevatorTimeout(2);

    expect(result).toBe(1300);
  });

  it('returns correct value when no floors exist', () => {
    const result = getElevatorTimeout(0);

    expect(result).toBe(0);
  });
});

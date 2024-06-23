import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render } from '@testing-library/react';

import { Menu } from '..';
import { wrapper } from '@/utils/tests';

describe('Menu component', () => {
  it('matches snapshot', () => {
    const component = render(<Menu />, { wrapper });

    expect(component.container).toMatchSnapshot();
  });
});

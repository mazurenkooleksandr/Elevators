import { Dispatch, SetStateAction, useCallback, useState } from 'react';

// Takes a parameter with value true or false and toggles that value to opposite
export const useToggle = (
  defaultValue?: boolean,
): [boolean, () => void, Dispatch<SetStateAction<boolean>>] => {
  const [value, setValue] = useState(!!defaultValue);

  const toggle = useCallback(() => setValue(x => !x), []);

  return [value, toggle, setValue];
};

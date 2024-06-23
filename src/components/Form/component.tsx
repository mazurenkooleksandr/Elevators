import { FormEvent } from 'react';
import { Button, Flex } from 'theme-ui';
import * as RadixForm from '@radix-ui/react-form';

import { getFormData } from '@/utils';
import { SystemSettingsType } from '@/contexts';
import { useSystemSettings } from '@/hooks';

import { Root, Field, Message } from './styles';
import { Text } from '../Text';

const MIN_VALUE = 1;

type FormProps = {
  hide: VoidFunction;
};

export const Form = ({ hide }: FormProps) => {
  const { setSystemSettings } = useSystemSettings();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = getFormData<SystemSettingsType>(event);
    setSystemSettings(data);
    hide();
  };

  return (
    <Root onSubmit={handleSubmit}>
      <Field name="buildings">
        <Flex sx={{ justifyContent: 'space-between' }}>
          <RadixForm.Label>
            <Text id='menu.field.buildings' />
          </RadixForm.Label>
          <Message match="valueMissing">
            <Text id='validation.required' />
          </Message>
        </Flex>
        <RadixForm.Control asChild>
          <input type="number" defaultValue={1} required min={MIN_VALUE} />
        </RadixForm.Control>
      </Field>
      <Field name="elevators">
        <Flex sx={{ justifyContent: 'space-between' }}>
          <RadixForm.Label>
            <Text id='menu.field.elevators' />
          </RadixForm.Label>
          <Message match="valueMissing">
            <Text id='validation.required' />
          </Message>
        </Flex>
        <RadixForm.Control asChild>
          <input type="number" defaultValue={1} required min={MIN_VALUE} />
        </RadixForm.Control>
      </Field>
      <RadixForm.Submit asChild>
        <Button sx={{ cursor: 'pointer' }}>
          <Text id='menu.form.button' />
        </Button>
      </RadixForm.Submit>
    </Root>
  );
};

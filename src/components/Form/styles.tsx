import styled from '@emotion/styled';
import * as Form from '@radix-ui/react-form';

export const Root = styled(Form.Root)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  margin-top: 60px;
`;

export const Field = styled(Form.Field)`
  width: 100%;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.text};

  input {
    width: 100%;
    padding: 5px 10px;
    border: 1px solid #eee;
    border-radius: 4px;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
`;

export const Message = styled(Form.Message)`
  color: ${({ theme }) => theme.colors.error};
`;

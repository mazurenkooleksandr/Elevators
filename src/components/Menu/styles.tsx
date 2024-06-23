import styled from '@emotion/styled';
import { Button } from 'theme-ui';

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: fixed;
  padding: 30px 10px;
  top: 0;
  right: 0;
  z-index: 100;
  width: min(450px, 100vw);
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.secondary};
  transition: transform 0.5s ease-in-out;
  ${({ hidden }) => hidden && 'transform: translate(100%, 0)'};
`;

export const HideButton = styled.div`
  position: absolute;
  top: 0.3em;
  right: 0.3em;
  z-index: 10;
  visibility: unset;
  color: ${({ theme }) => theme.colors.error};
`;

export const LanguageButton = styled(Button)`
  margin: 0 15px;
  width: 70px;
  cursor: pointer;
`;

import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import elevatorBg from "@/assets/elevator.png";
import { DOOR_EFFECT_TIME } from '@/constants/app';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 10px;
`;

export const Floors = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-top: 40px;
  position: relative;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    transform: translateY(-100%);
    width: 30px;
    height: 14px;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    border-bottom: 25px solid #5d4f45;
  }
`;

export const Floor = styled.div`
  display: flex; 
  align-items: center; 
  justify-content: space-around;
  gap: 5px;
  height: 50px; 
  width: 80px;
  background-color: ${({ theme }) => theme.colors.additional};
  border: 1px solid grey;
`;

type ControlButtonProps = {
  busy: boolean;
}
export const ControlButton = styled.button<ControlButtonProps>`
  border-radius: 50%;
  border: 2px solid black;
  background-color: green;
  width: 30px;
  height: 30px;
  cursor: pointer;

  &:active{
    background-color: #015e01;
    ${({ busy }) => busy && 'background-color: #701212'};
  }

  ${({ busy }) => busy && 'background-color: red'};
`;

const getOpenCloseDoor = (value: string) => keyframes({
  '0%': { transform: 'translateX(0)' },
  '50%': { transform: `translateX(${value})` },
  '100%': { transform: 'translateX(0)' }
});

type ElevatorProps = {
  currentFloor: number;
  elevatorTransitionTime: number;
  isDoorEffect: boolean;
}
export const Elevator = styled.div<ElevatorProps>`
  ${({ currentFloor, elevatorTransitionTime, isDoorEffect }) => css`
    height: 50px; 
    width: 30px;
    border: 3px solid grey;
    margin: 0 15px 0 20px;
    transform: translateY(calc(-100% * (${currentFloor} - 1)));
    transition: transform ${elevatorTransitionTime}ms ease-in-out;
    background-image: url(${elevatorBg});
    background-size: cover;
    display: flex;

    &:after, &:before{
      width: 15px;
      height: 100%;
      background-color: #7ac9c4;
      content: '';
      display: block;
      border: 1px solid #fff;
      box-sizing: border-box;
      animation: ${isDoorEffect ? getOpenCloseDoor('-100%') : 'none'} ${DOOR_EFFECT_TIME}ms linear;
    }

    &:after{
      animation: ${isDoorEffect ? getOpenCloseDoor('100%') : 'none'} ${DOOR_EFFECT_TIME}ms linear;
    }
  `}
`;

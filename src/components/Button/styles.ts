import styled, { css } from 'styled-components'

import { ButtonProps } from './types'

export const Container = styled.button<ButtonProps>`
  height: 2.625rem;
  border: none;
  box-shadow: 2px 2px 6px rgba(244, 244, 244, 0.25);
  font-weight: 600;
  border-radius: 0.5rem;
  transition: 0.5s;
  font-family: Poppins, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  ${props => {
    switch (props.size) {
      case 'medium':
        return css`
          height: 3.125rem;
          width: 10.938rem;
        `
      case 'large':
        return css`
          height: 3rem;
          width: 14.375rem;
        `
    }
  }};

  ${props => {
    switch (props.fontSize) {
      case 'medium':
        return css`
          font-size: 1rem;
        `
      case 'large':
        return css`
          font-size: 1.5rem;
        `
    }
  }};

  ${props => {
    switch (props.colorType) {
      case 'primary':
        return css`
          background: ${props.theme.colors.primary.normal};
          &:hover,
          &:focus {
            transform: scale(1.05);
            border: 2px solid ${props.theme.colors.primary.normal};
            background: none;
            color: ${props.theme.colors.white};
          }
        `
      case 'outline':
        return css`
          background: none;
          border: 2px solid ${props.theme.colors.white};
          &:hover,
          &:focus {
            transform: scale(1.05);
            background: ${props.theme.colors.white};
            color: ${props.theme.colors.black};

            > svg > path {
              fill: ${props.theme.colors.black};
            }
            border: none;
          }
        `
      case 'white':
        return css`
          background: ${props.theme.colors.white};
          color: ${props.theme.colors.black};
          &:hover,
          &:focus {
            background: none;
            border: 1px solid ${props.theme.colors.white};
            color: ${props.theme.colors.white};
          }
        `
      case 'blue':
        return css`
          border: 1px solid ${props => props.theme.colors.green};
          font-family: 'Arial', sans-serif;
          background: transparent;
          font-weight: 400;
          color: ${props => props.theme.colors.green};
        `
    }
  }};

  &:disabled {
    opacity: 0.4;
    pointer-events: none;
    cursor: no-drop;
  }
`

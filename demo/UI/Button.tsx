import type { FC, ReactNode } from 'react'
import React from 'react'
import styled from 'styled-components'

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'primary-light' | 'danger' | 'danger-light' | 'success' | 'success-light'
  shape?: 'rounded' | 'circle'
  size?: 'lg' | 'sm'
  disabled?: boolean
}

export const Button: FC<ButtonProps> = ({ children, variant, shape, size, ...props }) => {
  return (
    <StyledButton variant={variant} shape={shape} size={size} {...props}>
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button<ButtonProps>`
  padding: 0.6rem 0.8rem;
  background-color: transparent;
  border: 2px solid #dcdce4;
  cursor: pointer;
  display: flex;

  &:hover {
    background-color: #f6f6f6;
  }

  &:focus {
    outline: 2px solid #271fe0;
    outline-offset: 2px;
  }

  &:disabled {
    border: 2px solid #dcdce4;
    background-color: #eaeaef;
    color: #666687;
    pointer-events: none;
  }

  ${({ shape }) => shape === 'rounded' && 'border-radius: 0.4rem;'};

  ${({ shape }) => shape === 'circle' && 'border-radius: 1.6rem;'};

  ${({ size }) => size === 'lg' && 'padding: 0.8rem 0.9rem; font-size: 1rem;'};

  ${({ size }) => size === 'sm' && 'padding: 0.5rem 0.6rem; font-size: 0.7rem;'};

  ${({ variant }) =>
    variant === 'primary' &&
    `
    border: 2px solid #4945ff;
    background-color: #4945ff;
    color: #fff;
    &:hover {
      background-color: #271fe0;
    }
    &:focus {
      background-color: #271fe0;
      border: none;
      outline: none;
    }
  `};

  ${({ variant }) =>
    variant === 'danger' &&
    `
    border: 2px solid #d02b20;
    background-color: #d02b20;
    color: #fff;
    &:hover {
      background-color: #b72b1a;
    }
    &:focus {
      background-color: #b72b1a;
      border: none;
      outline: none;
    }
  `};

  ${({ variant }) =>
    variant === 'success' &&
    `
    border: 2px solid #328048;
    background-color: #328048;
    color: #fff;
    &:hover {
      background-color: #2f6846;
    }
    &:focus {
    background-color: #2f6846;
    border: none;
    outline: none;
  }
`};

  ${({ variant }) =>
    variant === 'primary-light' &&
    `
   border: 2px solid #15a4fa;
   background-color: #15a4fa;
   color: #fff;

   &:hover {
      background-color: #1293e1;
   }
   &:focus {
     background-color: #1293e1;
     outline: none;
  }
`};

  ${({ variant }) =>
    variant === 'success-light' &&
    `
    border: 2px solid #c6f0c2;
    background-color: #eafbe7;
    color: #328048;

    &:hover {
      background-color: #fff;
    }
    &:focus {
      background-color: #fff;
      outline: none;
    }
  `};

  ${({ variant }) =>
    variant === 'danger-light' &&
    `
    border: 2px solid #f5c0b8;
    background-color: #fcecea;
    color: #d02b20;

    &:hover {
      background-color: #fff;
    }
    &:focus {
      background-color: #fff;
      outline: none;
    }
  `};
`

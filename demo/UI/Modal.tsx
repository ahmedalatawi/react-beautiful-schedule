import type { FC, MouseEvent, ReactNode } from 'react'
import React from 'react'
import styled from 'styled-components'

export interface ModalProps {
  width?: string
  visible: boolean
  children: ReactNode | ReactNode[]
  onClose: () => void
  footer?: ReactNode
  title: string
  shape?: 'rounded' | 'basic'
  placement?: 'topCenter' | 'center'
  className?: string
}

export const Modal: FC<ModalProps> = ({
  visible,
  onClose,
  children,
  title,
  footer,
  width,
  shape,
  placement,
  className,
  ...props
}) => {
  const modalStyle = { width }

  const containerClass = visible ? `modal-container active` : `modal-container`
  const containerClassPlacement = placement ? `${containerClass} ${placement}` : containerClass
  const containerClassName = className ? `${containerClassPlacement} ${className}` : containerClassPlacement

  const modalClass = visible ? `modal active modal ${shape} ` : `modal modal ${shape} `

  const backdropClickHandler = (e: MouseEvent<HTMLDivElement>) => {
    const { target } = e
    if ((target as HTMLDivElement).classList.contains('modal-container')) {
      onClose()
    }
  }

  return (
    <StyledContainer className={containerClassName} {...props} onClick={backdropClickHandler}>
      <StyledModal className={modalClass} style={modalStyle}>
        <StyledHeader className='modal-header'>
          {title}
          <StyledClose className='modal-close' onClick={onClose}>
            <span>&times;</span>
          </StyledClose>
        </StyledHeader>
        <StyledContent className='modal-content'>{children}</StyledContent>
        {footer && <StyledFooter className='modal-footer'>{footer}</StyledFooter>}
      </StyledModal>
    </StyledContainer>
  )
}

const StyledFooter = styled.div`
  padding: 0 1rem;
  padding-bottom: 0.6rem;
`

const StyledClose = styled.div`
  font-size: 1.4rem;
  position: absolute;
  top: 50%;
  right: 0.6rem;
  transform: translateY(-50%);
  cursor: pointer;
  color: #8e8ea9;

  &:hover {
    color: #212134;
  }
`

const StyledContent = styled.div`
  padding: 0.6rem 1rem;
`

const StyledHeader = styled.div`
  position: relative;
  padding: 1rem;
  border-bottom: 1px solid #eaeaef;
`

const StyledModal = styled.div`
  background-color: #fff;
  transition-delay: 0.4s;
  transition: 0.2s all ease-in-out;
  height: fit-content;

  &.rounded {
    border-radius: 0.4rem;
  }

  &.active {
    margin-top: 2rem;
  }
`

const StyledContainer = styled.div`
  position: fixed;
  z-index: 2000;
  inset: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  visibility: hidden;
  opacity: 0;
  transition: 0.2s all;
  overflow-y: auto;

  &.active {
    visibility: visible;
    opacity: 1;
  }

  &.center {
    align-items: center;
    .modal {
      transition: 0.2s all;
      transform: translateY(-4rem);

      &.active {
        margin: 0;
        transform: translateY(0);
      }
    }
  }
`

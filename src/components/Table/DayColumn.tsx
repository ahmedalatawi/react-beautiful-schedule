import type { ReactNode } from 'react'
import React from 'react'
import styled from 'styled-components'
import { colors, backgrounds } from '../../styles'

const { borderGrey } = colors
const { bgGreyLight } = backgrounds

interface Props {
  children: ReactNode
}

function DayColumn({ children }: Props) {
  return <Container className='day-column'>{children}</Container>
}

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-width: 160px;
  background: ${bgGreyLight};
  border: 1px solid ${borderGrey};
  border-left: none;
  &:first-child {
    border-left: 1px solid ${borderGrey};
  }
`

export default DayColumn

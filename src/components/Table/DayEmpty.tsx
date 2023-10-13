import type { ReactNode } from 'react'
import React from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode
}

function DayEmpty({ children }: Props) {
  return <Container className='day-empty'>{children}</Container>
}

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 80px;
  &:hover {
    .day-add-event {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`

export default DayEmpty

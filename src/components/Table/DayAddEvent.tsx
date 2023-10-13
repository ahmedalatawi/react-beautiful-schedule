import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles'

const { white, borderGreyDark } = colors

interface Props {
  label?: string
  onClick?: () => void
}

function DayAddEvent({ label, onClick }: Props) {
  return (
    <Container className='day-add-event' onClick={onClick}>
      <AddEventLabel className='day-add-event-label'>{label ? label : 'Add new event'}</AddEventLabel>
    </Container>
  )
}

const AddEventLabel = styled.span`
  padding: 10px;
`

const Container = styled.div`
  display: none;
  border-radius: 4px;
  background: ${white};
  box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.5);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  border: 1px solid ${borderGreyDark};
  margin: 0 10px 10px 10px;
  cursor: pointer;
  height: 60px;
`

export default DayAddEvent

import { DateTime } from 'luxon'
import React from 'react'
import styled from 'styled-components'

interface Props {
  description?: string
  start: string
  end: string
}

function EventFooter({ description, start, end }: Props) {
  const startTime = DateTime.fromISO(start).toLocaleString(DateTime.TIME_SIMPLE)
  const endTime = DateTime.fromISO(end).toLocaleString(DateTime.TIME_SIMPLE)

  return (
    <Container className='event-card-footer'>
      {description && <Label className='event-description'>{description}</Label>}
      <Time className='event-time'>
        {startTime} - {endTime}
      </Time>
    </Container>
  )
}

const Label = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  //max-width: 300px;
`

const Time = styled.span`
  white-space: nowrap;
`

const Container = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 4px;
  font-size: 12px;

  // @media (max-width: 1200px) {
  //   flex-direction: column;
  // }
`

export default EventFooter

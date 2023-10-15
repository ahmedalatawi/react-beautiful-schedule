import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles'
import type { ScheduleEventProps } from '../Event/EventCard'
import { DateTime } from 'luxon'

const { borderGrey } = colors

interface Props {
  events: ScheduleEventProps[]
  day: DateTime
  label?: string
  onClick?: (day: Date, events: ScheduleEventProps[], totalHrs: number, totalDuration: number) => void
}

function DayFooter({ events, day, label, onClick }: Props) {
  const dayEvents = events.filter((event) => {
    const eventStart = DateTime.fromISO(event.start).startOf('day')
    const dayStart = day.startOf('day')

    return eventStart.equals(dayStart)
  })

  let totalDuration = 0

  const firstEvent = dayEvents[0]
  const lastEvent = dayEvents[dayEvents.length - 1]

  if (firstEvent) {
    const start = DateTime.fromISO(firstEvent.start)
    const end = DateTime.fromISO(lastEvent.end)

    const firstDuration = end.diff(start, 'hours')

    totalDuration = Number(firstDuration.hours.toFixed(2))
  }

  const totalHrs = dayEvents.reduce((acc, event) => {
    const start = DateTime.fromISO(event.start)
    const end = DateTime.fromISO(event.end)

    const { hours } = end.diff(start, 'hours')

    return acc + hours
  }, 0)

  const totalHrsFixed = Number(totalHrs.toFixed(2))

  return (
    <Container className='day-footer' onClick={() => onClick?.(day.toJSDate(), dayEvents, totalHrs, totalDuration)}>{`${
      dayEvents.length
    } ${label ? label : 'event'}${dayEvents.length !== 1 ? 's' : ''} (${totalHrsFixed}hr${
      totalHrsFixed !== 1 ? 's' : ''
    })`}</Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-top: 1px solid ${borderGrey};
  padding: 12px;
  font-size: 14px;
  //height: 14px;
  color: hsla(210, 5%, 40%, 1);
  cursor: pointer;
`

export default DayFooter

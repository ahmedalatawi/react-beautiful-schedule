import React from 'react'
import type { ScheduleEventProps } from '../Event/EventCard'
import EventCard from '../Event/EventCard'
import styled from 'styled-components'
import { DateTime } from 'luxon'
import { compareStartDates } from '../../utils/events'

interface Props {
  events: ScheduleEventProps[]
  day: DateTime
  onClickEvent?: (day: Date, dayISO: string | null, event: ScheduleEventProps) => void
}

function DayEvents({ events, day, onClickEvent }: Props) {
  const sortedEvents = events.sort(compareStartDates)

  const dayEvents = sortedEvents.map((event) => {
    const eventStart = DateTime.fromISO(event.start).startOf('day')
    const dayStart = day.startOf('day')

    return eventStart.equals(dayStart) ? (
      <EventCard key={event.id} event={event} onClick={() => onClickEvent?.(day.toJSDate(), day.toISO(), event)} />
    ) : null
  })

  const dayEventsLength = dayEvents.filter((d) => d !== null).length

  return (
    <Container className='day-events' eventsLength={dayEventsLength}>
      {dayEvents}
    </Container>
  )
}

const Container = styled.div<{ eventsLength: number }>`
  ${({ eventsLength }) => (eventsLength ? 'padding: 0.8em;' : 'padding-bottom: 0.8em;')}
  display: flex;
  flex-direction: column;
  gap: 0.8em;
`

export default DayEvents

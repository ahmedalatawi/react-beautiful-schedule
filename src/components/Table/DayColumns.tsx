import React, { Fragment } from 'react'
import styled from 'styled-components'
import type { DateTime } from 'luxon'
import DayFooter from './DayFooter'
import DayEvents from './DayEvents'
import type { ScheduleEvent } from '../Event/EventCard'
import DayHeader from './DayHeader'
import DayColumn from './DayColumn'
import DayEmpty from './DayEmpty'
import DayAddEvent from './DayAddEvent'

interface Props {
  days: DateTime[]
  events: ScheduleEvent[]
  dayFormat?: string
  addNewEventLabel?: string
  showFooter?: boolean
  footerLabel?: string
  onAddEvent?: (day: Date) => void
  onClickEvent?: (day: Date, dayISO: string | null, event: ScheduleEvent) => void
  onClickFooter?: (day: Date, events: ScheduleEvent[], totalHrs: number, totalDuration: number) => void
}

function DayColumns({
  days,
  events,
  dayFormat,
  addNewEventLabel,
  showFooter,
  footerLabel,
  onAddEvent,
  onClickEvent,
  onClickFooter,
}: Props) {
  if (!showFooter && footerLabel) {
    console.warn('You are passing a footer label but not showing the footer. Please set showFooter to true.')
  }

  return (
    <Container className='day-columns'>
      {days.map((day, index) => (
        <Fragment key={index}>
          <DayColumn>
            <DayHeader day={day} dayFormat={dayFormat} />
            <DayEvents events={events} day={day} onClickEvent={onClickEvent} />
            <DayEmpty>
              <DayAddEvent label={addNewEventLabel} onClick={() => onAddEvent?.(day.toJSDate())} />
            </DayEmpty>
            {showFooter && <DayFooter events={events} day={day} label={footerLabel} onClick={onClickFooter} />}
          </DayColumn>
        </Fragment>
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;
  height: 100vh;
`

export default DayColumns

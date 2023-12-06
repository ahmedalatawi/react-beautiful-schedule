import React, { useState } from 'react'
import DayColumns from '../Table/DayColumns'
import styled from 'styled-components'
import { DateTime, Interval } from 'luxon'
import DateNavigator from '../DateNavigator/DateNavigator'
import type { ScheduleType } from './Schedule.types'

function WeeklySchedule({
  events,
  startDate,
  dayFormat,
  className,
  addNewEventLabel,
  showFooter,
  footerLabel,
  showDateNavigator,
  onAddEvent,
  onClickEvent,
  onClickFooter,
  ...props
}: ScheduleType) {
  const start = startDate ? DateTime.fromJSDate(startDate) : DateTime.now()
  const [selectedDate, setSelectedDate] = useState(start)
  const end = selectedDate.plus({ days: 7 })

  const interval = Interval.fromDateTimes(selectedDate, end)

  const days = interval.splitBy({ day: 1 }).map((d) => d.start) as DateTime[]

  return (
    <Container className={className} {...props}>
      <WeeklyScheduleContainer className='weekly-schedule'>
        {showDateNavigator && (
          <DateNavigator date={startDate} onSelectDate={(date) => setSelectedDate(DateTime.fromJSDate(date))} />
        )}
        <DayColumns
          dayFormat={dayFormat}
          days={days}
          events={events}
          addNewEventLabel={addNewEventLabel}
          showFooter={showFooter}
          footerLabel={footerLabel}
          onAddEvent={onAddEvent}
          onClickEvent={onClickEvent}
          onClickFooter={onClickFooter}
        />
      </WeeklyScheduleContainer>
    </Container>
  )
}

const Container = styled.div``

const WeeklyScheduleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
`

export default WeeklySchedule

import React from 'react'
import styled from 'styled-components'
import EventTitle from './EventTitle'
import EventFooter from './EventFooter'
import { colors } from '../../styles'
import { getDefaultTheme } from '../../utils/events'

const { white, borderGreyDark } = colors

export type EventDefaultTheme = 'blue' | 'darkBlue' | 'lightBlue' | 'green' | 'yellow' | 'purple' | 'gray'
export type EventCustomTheme = {
  color: string
  bgColor: string
}

export type ScheduleEventProps = {
  id: string
  title: string
  start: string
  end: string
  description?: string
  defaultTheme?: EventDefaultTheme
  customTheme?: EventCustomTheme
}

interface Props {
  event: ScheduleEventProps
  onClick?: () => void
}

function EventCard({ event, onClick }: Props) {
  const { title, start, end, description, defaultTheme, customTheme } = event

  return (
    <Container className='event-card' defaultTheme={defaultTheme} customTheme={customTheme} onClick={onClick}>
      <EventTitle title={title} defaultTheme={defaultTheme} customTheme={customTheme} />
      <EventFooter description={description} start={start} end={end} />
    </Container>
  )
}

const Container = styled.div<{ defaultTheme?: EventDefaultTheme; customTheme?: EventCustomTheme }>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-radius: 4px;
  background: ${white};
  box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.5);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  border: 1px solid ${borderGreyDark};
  padding: 10px;
  cursor: pointer;
  ${({ defaultTheme, customTheme }) => {
    const themeObj = customTheme ?? getDefaultTheme(defaultTheme)

    return themeObj && `border-left: 5px solid ${themeObj.bgColor};`
  }}
  overflow: hidden;
`

export default EventCard

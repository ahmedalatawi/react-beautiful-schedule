import React from 'react'
import styled from 'styled-components'
import type { EventCustomTheme, EventDefaultTheme } from './EventCard'
import { getDefaultTheme } from '../../utils/events'

interface Props {
  title: string
  defaultTheme?: EventDefaultTheme
  customTheme?: EventCustomTheme
}

function EventTitle({ title, defaultTheme, customTheme }: Props) {
  return (
    <Container className='event-card-title' defaultTheme={defaultTheme} customTheme={customTheme}>
      <span>{title}</span>
    </Container>
  )
}

const Container = styled.div<{ defaultTheme?: EventDefaultTheme; customTheme?: EventCustomTheme }>`
  font-size: 14px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({ defaultTheme, customTheme }) => {
    const themeObj = customTheme ?? getDefaultTheme(defaultTheme)

    return (
      themeObj &&
      `color: ${themeObj.color}; background: ${themeObj.bgColor}; border-radius: 2px;
    padding: 2px 5px;`
    )
  }}
  white-space: nowrap;
`

export default EventTitle

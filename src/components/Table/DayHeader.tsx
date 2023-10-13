import React from 'react'
import styled from 'styled-components'
import { colors, backgrounds } from '../../styles'
import type { DateTime } from 'luxon'

const { borderGrey } = colors
const { bgHeaderLight } = backgrounds

interface Props {
  day: DateTime
  dayFormat?: string
}

function DayHeader({ day, dayFormat }: Props) {
  return <Container className='day-header'>{day.toFormat(dayFormat || 'ccc LLL dd')}</Container>
}

const Container = styled.div`
  border-bottom: 1px solid ${borderGrey};
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  color: hsla(210, 5%, 40%, 1);
  background: ${bgHeaderLight};
  font-weight: 700;
`

export default DayHeader

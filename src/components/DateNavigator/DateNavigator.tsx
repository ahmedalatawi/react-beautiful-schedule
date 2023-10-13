import React, { useState } from 'react'
import { DateTime } from 'luxon'
import styled from 'styled-components'

type Props = {
  date?: Date
  disablePrev?: boolean
  disableNext?: boolean
  onSelectDate?: (date: Date) => void
} & React.HTMLAttributes<HTMLDivElement>

function DateNavigator({ date, onSelectDate, disablePrev, disableNext, ...props }: Props) {
  const dateTime = date ? DateTime.fromJSDate(date) : DateTime.now()

  const [startDate, setStartDate] = useState(dateTime)
  const [endDate, setEndDate] = useState(dateTime.plus({ days: 6 }))

  function handleNext() {
    if (disableNext) return
    const next = startDate.plus({ week: 1 })
    setStartDate(next)
    setEndDate(next.plus({ days: 6 }))
    onSelectDate && onSelectDate(next.toJSDate())
  }

  function handlePrev() {
    if (disablePrev) return
    const prev = startDate.minus({ week: 1 })
    setStartDate(prev)
    setEndDate(prev.plus({ days: 6 }))
    onSelectDate && onSelectDate(prev.toJSDate())
  }

  return (
    <Container className='date-navigator' {...props}>
      <Prev onClick={handlePrev} className='date-navigator-prev' disabled={disablePrev} />
      <DateContainer className='date-navigator-date'>
        <span>{startDate.toLocaleString()}</span> - <span>{endDate.toLocaleString()}</span>
      </DateContainer>
      <Next onClick={handleNext} className='date-navigator-next' disabled={disableNext} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`

const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  gap: 6px;
`

const Next = styled.div<{ disabled?: boolean }>`
  border-right: ${({ disabled }) => (disabled ? '2px solid #ccc' : '2px solid #000')};
  border-top: ${({ disabled }) => (disabled ? '2px solid #ccc' : '2px solid #000')};
  width: 14px;
  height: 14px;
  transform: rotate(45deg);
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  display: block;
`

const Prev = styled.div<{ disabled?: boolean }>`
  border-left: ${({ disabled }) => (disabled ? '2px solid #ccc' : '2px solid #000')};
  border-bottom: ${({ disabled }) => (disabled ? '2px solid #ccc' : '2px solid #000')};
  width: 14px;
  height: 14px;
  transform: rotate(45deg);
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  display: block;
`

export default DateNavigator

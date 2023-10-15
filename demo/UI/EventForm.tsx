import React, { useReducer } from 'react'
import styled from 'styled-components'
import ThemeSelect from './ThemeSelect'
import type { EventDefaultTheme, ScheduleEventProps } from '../../src/components/Event/EventCard'
import { DateTime, Interval } from 'luxon'

const headingColor = '#47536a'
const hintColor = '#15a4fa'
const fontColor = '#a4a9c5'
const placeholderColor = '#a9a9a9'

interface Props {
  selectedDate: Date
  clickedEvent?: ScheduleEventProps | null
  onChange: (event: ScheduleEventProps) => void
}

type ScheduleEventKeys = keyof ScheduleEventProps
type Action = { key: ScheduleEventKeys | 'date'; value: string }
type State = ScheduleEventProps & { date: string }

const initialState = {
  id: '',
  title: '',
  date: '',
  start: '',
  end: '',
  description: '',
  defaultTheme: '' as EventDefaultTheme,
}

function reducer(state: State, action: Action) {
  return { ...state, [action.key]: action.value }
}

function initializer(initialState: State, selectedDate: Date, clickedEvent: ScheduleEventProps | null | undefined) {
  const now = DateTime.fromJSDate(selectedDate)
  const { id, title, start, end, description, defaultTheme, customTheme } = clickedEvent ?? initialState

  return {
    id,
    date: now.toISODate() ?? '',
    start: start ? DateTime.fromISO(start).toFormat('HH:mm') : now.toFormat('HH:mm'),
    end: end ? DateTime.fromISO(end).toFormat('HH:mm') : now.plus({ hours: 1 }).toFormat('HH:mm'),
    title,
    description,
    defaultTheme,
    customTheme,
  }
}

export default function EventForm({ selectedDate, clickedEvent, onChange }: Props) {
  const [{ id, title, date, start, end, description, defaultTheme, customTheme }, dispatch] = useReducer(
    reducer,
    initialState,
    () => initializer(initialState, selectedDate, clickedEvent),
  )

  function handleOnChange(key: ScheduleEventKeys | 'date', value: string) {
    dispatch({ key, value })

    console.log({ key, value })

    const d = DateTime.fromISO(key === 'date' ? value : date)
    const convertTimeToISO = (time: string) =>
      d.set({ hour: parseInt(time.split(':')[0]), minute: parseInt(time.split(':')[1]) }).toISO() ?? time
    const isValidRange = (s: string, e: string) =>
      Interval.fromDateTimes(DateTime.fromISO(s), DateTime.fromISO(e)).isValid

    const startISO = convertTimeToISO(start)
    const endISO = convertTimeToISO(end)

    const updatedEvent = {
      id,
      title,
      start: startISO,
      end: isValidRange(startISO, endISO) ? endISO : DateTime.fromISO(endISO).plus({ days: 1 }).toISO() ?? endISO,
      description,
      defaultTheme,
      customTheme: key === 'defaultTheme' && value !== 'custom' ? undefined : customTheme,
    }

    const event = {
      ...updatedEvent,
      [key]: key === 'start' ? convertTimeToISO(value) : key === 'end' ? convertTimeToISO(value) : value,
    }

    isValidRange(event.start, event.end)
      ? onChange(event)
      : onChange({
          ...event,
          end: DateTime.fromISO(event.end).plus({ days: 1 }).toISO() ?? event.end,
        })
  }

  return (
    <Container>
      <Form>
        <TitleContainer>
          <FormGroup>
            <Label htmlFor='title' required>
              Title
            </Label>
            <Input
              placeholder='e.g. Sport event'
              id='title'
              type='text'
              value={title}
              onChange={(e) => handleOnChange('title', e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor='date' required>
              Date
            </Label>
            <Input id='date' type='date' value={date} onChange={(e) => handleOnChange('date', e.target.value)} />
          </FormGroup>
        </TitleContainer>
        <TimeContainer>
          <FormGroup>
            <Label htmlFor='start' required>
              Start
            </Label>
            <Input id='start' type='time' value={start} onChange={(e) => handleOnChange('start', e.target.value)} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor='end' required>
              End
            </Label>
            <Input id='end' type='time' value={end} onChange={(e) => handleOnChange('end', e.target.value)} />
          </FormGroup>
        </TimeContainer>
        <ThemeContainer>
          <FormGroup>
            <ThemeSelect
              theme={customTheme ? 'custom' : defaultTheme}
              onSelect={(theme) => handleOnChange('defaultTheme', theme)}
            />
          </FormGroup>
        </ThemeContainer>
        <DescriptionContainer>
          <FormGroup>
            <Label htmlFor='description'>Description</Label>
            <Textarea
              placeholder='description...'
              cols={50}
              rows={5}
              id='description'
              value={description}
              onChange={(e) => handleOnChange('description', e.target.value)}
            ></Textarea>
          </FormGroup>
        </DescriptionContainer>
      </Form>
    </Container>
  )
}

const Container = styled.div`
  padding: 20px 50px;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`

const TimeContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 24px;
`

const DescriptionContainer = styled.div`
  margin-top: 24px;
`

const Form = styled.form`
  color: ${headingColor};
  font-size: 0.7rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-weight: 700;
  margin-top: 24px;
`

const FormGroup = styled.div`
  display: inline-block;
`

const Label = styled.label<{ required?: boolean }>`
  margin-bottom: 10px;
  display: block;
  width: 200px;

  ${({ required }) =>
    required &&
    `
    &:after {
      content: ' *';
      color: red;
    }
    `}
`

const Input = styled.input`
  display: block;
  width: 200px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  background: transparent;
  border: 1px solid ${fontColor};
  border-radius: 3px;
  outline: none;
  padding: 10px;
  transition: border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  color: ${hintColor};
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
    -webkit-text-fill-color: ${hintColor};
  }
  &:focus {
    border-color: ${hintColor};
  }
  &::placeholder {
    font-weight: 500;
    color: ${placeholderColor};
  }
`

const Textarea = styled.textarea`
  box-sizing: border-box;
  font-weight: normal;
  padding: 5px;
  border: 1px solid ${fontColor};
  border-radius: 3px;
  outline: none;
  transition: border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  color: ${hintColor};
  &:focus {
    border-color: ${hintColor};
  }
  &::placeholder {
    font-weight: 300;
    color: ${placeholderColor};
  }
`

const ThemeContainer = styled.div`
  margin-top: 24px;
`

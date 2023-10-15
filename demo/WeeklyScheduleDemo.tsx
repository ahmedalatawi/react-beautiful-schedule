import React, { useState } from 'react'
import type { ScheduleEventProps } from '../src/components/Event/EventCard'
import StyledModal from './styled/StyledModal'
import StyledFooter from './styled/StyledFooter'
import StyledButton from './styled/StyledButton'
import EventForm from './UI/EventForm'
import WeeklySchedule from '../src/components/Schedule/WeeklySchedule'
import type { ScheduleProps } from '../src/components/Schedule/Schedule.types'

function WeeklyScheduleDemo({ events, ...props }: ScheduleProps) {
  const [eventsData, setEventsData] = useState<ScheduleEventProps[]>(events)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [clickedEvent, setClickedEvent] = useState<ScheduleEventProps | null>(null)
  const [tempEvent, setTempEvent] = useState<ScheduleEventProps | null>(null)
  const [key, setKey] = useState(0)

  // const date = DateTime.now().plus({ days: 1 }).toJSDate()

  function showModal() {
    setKey((prev) => prev + 1)
    setIsModalVisible(true)
  }

  function hideModal() {
    setIsModalVisible(false)
  }

  function handleAddEvent(date: Date) {
    setSelectedDate(date)
    setClickedEvent(null)
    setTempEvent(null)
    showModal()
  }

  function handleClickEvent(day: Date, dayISO: string | null, event: ScheduleEventProps) {
    console.log({ day, dayISO, event })
    setSelectedDate(day)
    setClickedEvent(event)
    showModal()
  }

  function handleUpdateEvent(event: ScheduleEventProps) {
    console.log({ event })
    setTempEvent({ ...event })
  }

  function handleSaveEvent() {
    if (!tempEvent) {
      hideModal()
      return
    }

    if (tempEvent.id) {
      setEventsData(eventsData.map((e) => (e.id === tempEvent.id ? tempEvent : e)))
    } else {
      const id = new Date().getTime().toString()
      const newEvent = { ...tempEvent, id }
      setEventsData([...eventsData, newEvent])
      setTempEvent(null)
    }

    hideModal()
  }

  function handleDeleteEvent() {
    if (!clickedEvent) return

    setEventsData(eventsData.filter((e) => e.id !== clickedEvent.id))
    setClickedEvent(null)
    setTempEvent(null)
    hideModal()
  }

  const disableSaveBtn = (() => {
    if (tempEvent) return !tempEvent?.title || !tempEvent?.start || !tempEvent?.end
    else if (clickedEvent) return !clickedEvent.title || !clickedEvent?.start || !clickedEvent?.end
    else return true
  })()

  return (
    <>
      <StyledModal
        title='Event Form'
        shape='rounded'
        visible={isModalVisible}
        onClose={hideModal}
        footer={
          <StyledFooter>
            {clickedEvent?.id && (
              <StyledButton variant='danger' size='sm' shape='rounded' onClick={handleDeleteEvent}>
                Delete
              </StyledButton>
            )}
            <StyledButton
              variant='primary-light'
              size='sm'
              shape='rounded'
              onClick={handleSaveEvent}
              disabled={disableSaveBtn}
            >
              Save
            </StyledButton>
          </StyledFooter>
        }
      >
        <EventForm selectedDate={selectedDate} clickedEvent={clickedEvent} onChange={handleUpdateEvent} key={key} />
      </StyledModal>
      <WeeklySchedule
        {...props}
        events={eventsData}
        onAddEvent={handleAddEvent}
        onClickEvent={handleClickEvent}
        onClickFooter={(day, events, hrs, duration) => console.log({ day, events, hrs, duration })}
      />
    </>
  )
}

export default WeeklyScheduleDemo

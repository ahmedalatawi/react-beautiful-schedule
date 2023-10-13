import { DateTime } from 'luxon'
import type { EventDefaultTheme, ScheduleEvent } from '../components/Event/EventCard'
import { themes } from '../styles'

const { blue, darkBlue, lightBlue, yellow, green, purple, gray } = themes

export function getDefaultTheme(theme?: EventDefaultTheme) {
  switch (theme) {
    case 'blue':
      return blue
    case 'darkBlue':
      return darkBlue
    case 'lightBlue':
      return lightBlue
    case 'yellow':
      return yellow
    case 'green':
      return green
    case 'purple':
      return purple
    case 'gray':
      return gray
    default:
      return undefined
  }
}

export function compareStartDates(a: ScheduleEvent, b: ScheduleEvent) {
  return DateTime.fromISO(a.start).toMillis() - DateTime.fromISO(b.start).toMillis()
}

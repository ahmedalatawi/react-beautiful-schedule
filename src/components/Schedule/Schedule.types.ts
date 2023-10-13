import type { ScheduleEvent } from '../Event/EventCard'

export interface ScheduleProps {
  events: ScheduleEvent[]
  startDate?: Date
  dayFormat?: string
  className?: string
  addNewEventLabel?: string
  showFooter?: boolean
  footerLabel?: string
  showDateNavigator?: boolean
  onAddEvent?: (day: Date) => void
  onClickEvent?: (day: Date, dayISO: string | null, event: ScheduleEvent) => void
  onClickFooter?: (day: Date, events: ScheduleEvent[], totalHrs: number, totalDuration: number) => void
}

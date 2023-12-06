import type { ScheduleEventType } from '../Event/EventCard'

export interface ScheduleType extends React.HTMLAttributes<HTMLDivElement> {
  events: ScheduleEventType[]
  startDate?: Date
  dayFormat?: string
  className?: string
  addNewEventLabel?: string
  showFooter?: boolean
  footerLabel?: string
  showDateNavigator?: boolean
  onAddEvent?: (day: Date) => void
  onClickEvent?: (day: Date, dayISO: string | null, event: ScheduleEventType) => void
  onClickFooter?: (day: Date, events: ScheduleEventType[], totalHrs: number, totalDuration: number) => void
}

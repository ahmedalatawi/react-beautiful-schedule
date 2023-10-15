import type { ScheduleEventProps } from '../Event/EventCard'

export interface ScheduleProps extends React.HTMLAttributes<HTMLDivElement> {
  events: ScheduleEventProps[]
  startDate?: Date
  dayFormat?: string
  className?: string
  addNewEventLabel?: string
  showFooter?: boolean
  footerLabel?: string
  showDateNavigator?: boolean
  onAddEvent?: (day: Date) => void
  onClickEvent?: (day: Date, dayISO: string | null, event: ScheduleEventProps) => void
  onClickFooter?: (day: Date, events: ScheduleEventProps[], totalHrs: number, totalDuration: number) => void
}

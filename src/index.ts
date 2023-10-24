import DateNavigator from './components/DateNavigator/DateNavigator'
import WeeklySchedule from './components/Schedule/WeeklySchedule'

import type { ScheduleEventProps } from './components/Event/EventCard'
import type { ScheduleProps } from './components/Schedule/Schedule.types'

import { backgrounds as backgroundColors, colors, themes as eventThemes } from './styles'

export { WeeklySchedule, DateNavigator, eventThemes, colors, backgroundColors }
export type { ScheduleProps, ScheduleEventProps }

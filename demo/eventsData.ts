import { DateTime } from 'luxon'

const now = DateTime.now()

export const currentWeekEvents = [
  {
    id: '1',
    title: 'Green Event',
    defaultTheme: 'green' as const,
    description: 'This is a green event',
    start: now.set({ minute: 0 }).toISO()!,
    end: now.plus({ hours: 1 }).set({ minute: 0 }).toISO()!,
  },
  {
    id: '2',
    title: 'Blue Event',
    defaultTheme: 'blue' as const,
    description: 'This is a blue event',
    start: now.plus({ hours: 3 }).set({ minute: 0 }).toISO()!,
    end: now.plus({ hours: 5 }).set({ minute: 30 }).toISO()!,
  },
  {
    id: '3',
    title: 'Yellow Event',
    defaultTheme: 'yellow' as const,
    description: 'This is a yellow event',
    start: now.plus({ days: 1, hours: 2 }).set({ minute: 0 }).toISO()!,
    end: now.plus({ days: 1, hours: 6 }).set({ minute: 15 }).toISO()!,
  },
  {
    id: '4',
    title: 'No Theme Event',
    start: now.plus({ days: 2, hours: 4 }).set({ minute: 0 }).toISO()!,
    end: now.plus({ days: 2, hours: 7 }).set({ minute: 45 }).toISO()!,
  },
  {
    id: '5',
    title: 'Purple Event',
    defaultTheme: 'purple' as const,
    description: 'Very long purple event description goes on and on',
    start: now.plus({ days: 4, hours: 1 }).set({ minute: 0 }).toISO()!,
    end: now.plus({ days: 4, hours: 3 }).set({ minute: 0 }).toISO()!,
  },
  {
    id: '6',
    title: 'Custom Theme Event',
    customTheme: {
      color: '#fff',
      bgColor: '#ff0000',
    },
    description: 'This is a custom theme event',
    start: now.plus({ days: 5, hours: 5 }).startOf('hour').toISO()!,
    end: now.plus({ days: 5, hours: 8 }).set({ minute: 30 }).toISO()!,
  },
]

const nextWeekEvents = [
  {
    id: '7',
    title: 'Gray Event',
    defaultTheme: 'gray' as const,
    description: 'This is a gray event',
    start: now.plus({ weeks: 1, hours: 1 }).set({ minute: 0 }).toISO()!,
    end: now.plus({ weeks: 1, hours: 4 }).set({ minute: 0 }).toISO()!,
  },
  {
    id: '8',
    title: 'Light Blue Event',
    defaultTheme: 'lightBlue' as const,
    description: 'This is a light blue event',
    start: now.plus({ weeks: 1, days: 2, hours: 2 }).set({ minute: 30 }).toISO()!,
    end: now.plus({ weeks: 1, days: 2, hours: 3 }).set({ minute: 0 }).toISO()!,
  },
  {
    id: '9',
    title: 'Dark Blue Event',
    defaultTheme: 'darkBlue' as const,
    description: 'This is a dark blue event',
    start: now.plus({ weeks: 1, days: 3, hours: 4 }).set({ minute: 0 }).toISO()!,
    end: now.plus({ weeks: 1, days: 3, hours: 7 }).set({ minute: 30 }).toISO()!,
  },
  {
    id: '10',
    title: 'Default Event',
    start: now.plus({ weeks: 1, days: 5, hours: 2 }).set({ minute: 0 }).toISO()!,
    end: now.plus({ weeks: 1, days: 5, hours: 8 }).set({ minute: 0 }).toISO()!,
  },
  {
    id: '11',
    title: 'Purple Event',
    defaultTheme: 'purple' as const,
    description: 'Very long purple event description goes on and on',
    start: now.plus({ weeks: 1, days: 5, hours: 7 }).set({ minute: 0 }).toISO()!,
    end: now.plus({ weeks: 1, days: 5, hours: 9 }).set({ minute: 15 }).toISO()!,
  },
]

const prevWeekEvents = [
  {
    id: '12',
    title: 'Gray Event',
    defaultTheme: 'gray' as const,
    description: 'This is a gray event',
    start: now.minus({ weeks: 1, hours: 1 }).set({ minute: 0 }).toISO()!,
    end: now.minus({ weeks: 1, hours: 4 }).set({ minute: 0 }).toISO()!,
  },
  {
    id: '13',
    title: 'Light Blue Event',
    defaultTheme: 'lightBlue' as const,
    description: 'This is a light blue event',
    start: now.minus({ weeks: 1, hours: 2 }).plus({ days: 2 }).set({ minute: 0 }).toISO()!,
    end: now.minus({ weeks: 1, hours: 3 }).plus({ days: 2 }).set({ minute: 30 }).toISO()!,
  },
  {
    id: '14',
    title: 'Dark Blue Event',
    defaultTheme: 'darkBlue' as const,
    description: 'This is a dark blue event',
    start: now.minus({ weeks: 1, days: 1, hours: 4 }).plus({ days: 4 }).set({ minute: 0 }).toISO()!,
    end: now.minus({ weeks: 1, days: 1, hours: 7 }).plus({ days: 4 }).set({ minute: 45 }).toISO()!,
  },
  {
    id: '15',
    title: 'Default Event',
    start: now.minus({ weeks: 1, days: 3, hours: 2 }).plus({ days: 5 }).set({ minute: 0 }).toISO()!,
    end: now.minus({ weeks: 1, days: 3, hours: 8 }).plus({ days: 5 }).set({ minute: 40 }).toISO()!,
  },
  {
    id: '16',
    title: 'Purple Event',
    defaultTheme: 'purple' as const,
    description: 'Very long purple event description goes on and on',
    start: now.minus({ weeks: 1, days: 5, hours: 7 }).plus({ days: 10 }).set({ minute: 0 }).toISO()!,
    end: now.minus({ weeks: 1, days: 5, hours: 9 }).plus({ days: 10 }).set({ minute: 30 }).toISO()!,
  },
]

const eventsData = [...currentWeekEvents, ...nextWeekEvents, ...prevWeekEvents]

export default eventsData

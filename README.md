# React Beautiful Schedule

[![NPM version][npm-image]][npm-url]
[![Build][github-build]][github-build-url]
![npm-typescript]
[![Netlify Status][netlify]][netlify-url]
[![License][github-license]][github-license-url]

[**Live Demo**](https://react-beautiful-schedule-demo.netlify.app)

## Installation:

```bash
npm install react-beautiful-schedule
```

or

```bash
yarn add react-beautiful-schedule
```

## Usage :

Add `WeeklySchedule` to your component:

```js
import { useState } from 'react';
import { ScheduleEventProps, WeeklySchedule } from 'react-beautiful-schedule';

const eventsData = [
  {
    id: '1',
    title: 'Event 1',
    start: '2023-06-07T09:00:00',
    end: '2023-06-07T10:15:00',
  },
  {
    id: '2',
    title: 'Event 2',
    start: '2023-06-10T10:00:00',
    end: '2023-06-10T11:30:00',
    description: 'This is a description',
    defaultTheme: 'yellow' as const,
  },
];

function App() {
  const [events, setEvents] = useState<ScheduleEventProps[]>(eventsData);

  const startDate = new Date('2023-06-07T00:00:00');

  function handleAddEvent(day: Date) {
    let title = prompt('Event title');

    if (title) {
      const id = new Date().getTime().toString();
      const newEvent = {
        id,
        title,
        start: day.toISOString(),
        end: day.toISOString(),
      };
      setEvents([...events, newEvent]);
    }
  }

  function handleClickEvent(
    day: Date,
    dayISO: string | null,
    event: ScheduleEventProps
  ) {
    console.log({ day, dayISO, event });
    const title = prompt('Event title', event.title);

    if (title) {
      const updatedEvent = { ...event, title };
      setEvents(events.map((e) => (e.id === event.id ? updatedEvent : e)));
    }
  }

  return (
    <WeeklySchedule
      style={{ padding: '24px' }}
      showDateNavigator
      startDate={startDate} //this is optional - default is today's date
      events={events}
      onAddEvent={handleAddEvent}
      onClickEvent={handleClickEvent}
    />
  );
}

export default App;
```

[npm-url]: https://www.npmjs.com/react-beautiful-schedule
[npm-image]: https://img.shields.io/npm/v/react-beautiful-schedule
[github-license]: https://img.shields.io/badge/license-MIT-green
[github-license-url]: https://github.com/ahmedalatawi/react-beautiful-schedule/blob/main/LICENSE
[github-build]: https://github.com/ahmedalatawi/react-beautiful-schedule/actions/workflows/main.yml/badge.svg
[github-build-url]: https://github.com/ahmedalatawi/react-beautiful-schedule/actions/workflows/main.yml
[npm-typescript]: https://img.shields.io/npm/types/react-beautiful-schedule
[netlify]: https://api.netlify.com/api/v1/badges/4051b791-71f6-4c5b-9fb6-1d5db749cef8/deploy-status
[netlify-url]: https://app.netlify.com/sites/react-beautiful-schedule/deploys

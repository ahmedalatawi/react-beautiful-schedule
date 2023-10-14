import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import WeeklySchedule from './WeeklySchedule'

test('WeeklySchedule', async () => {
  const component = render(<WeeklySchedule events={[]} />)

  expect(component).toBeDefined()
})

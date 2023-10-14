import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import DateNavigator from './DateNavigator'

test('DateNavigator', async () => {
  const component = render(<DateNavigator />)

  expect(component).toBeDefined()
})

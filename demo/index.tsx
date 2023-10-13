import React from 'react'
import ReactDOM from 'react-dom/client'
import styled from 'styled-components'

import './index.css'

import WeeklyScheduleDemo from './WeeklyScheduleDemo'
import eventsData from './eventsData'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const StyledClose = styled.div`
  font-size: 1.4rem;
  position: absolute;
  top: 50%;
  right: 0.6rem;
  transform: translateY(-50%);
  cursor: pointer;
  color: #fff;

  &:hover {
    color: #e1d9d1;
  }
`

function App() {
  return (
    <WeeklyScheduleDemo showDateNavigator showFooter className='demo-schedule' footerLabel='task' events={eventsData} />
  )
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

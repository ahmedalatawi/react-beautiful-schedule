import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import WeeklyScheduleDemo from './WeeklyScheduleDemo'
import eventsData from './eventsData'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

function App() {
  return <WeeklyScheduleDemo showDateNavigator showFooter className='demo-schedule' events={eventsData} />
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

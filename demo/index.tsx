import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import WeeklyScheduleDemo from './WeeklyScheduleDemo'
import eventsData from './eventsData'
import styled from 'styled-components'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

function App() {
  return (
    <Container>
      <TitleContainer>
        <Title>Live demo</Title>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/ahmedalatawi/react-beautiful-schedule/tree/main/demo'
        >
          source code
        </a>
      </TitleContainer>
      <WeeklyScheduleDemo showDateNavigator showFooter className='demo-schedule' events={eventsData} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`

const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
`

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  flex-direction: column;
`

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

import React, { useState } from 'react'
import { combineReducers, configureStore, createStore } from '@reduxjs/toolkit'
import { applyMiddleware } from 'redux'
import { useNavigate } from 'react-router-dom'
import { Provider } from 'react-redux'
// import Countdown from 'react-countdown'
import thunk from 'redux-thunk'
import { Scoreboard } from './reducers/reducer'
import { PlayerInput } from './components/PlayerInput'
import { PlayerList } from './components/PlayerList'
import { TimerInput } from 'components/TimerInput' 
import { Header } from './components/Header'
import { StartOver } from 'components/StartOver'
import 'styles/Main.css' 

const reducer = combineReducers({
  Scoreboard: Scoreboard.reducer,
  // Timer: timerSlice.reducer,
  
})

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

// const [startTime, setStartTime] = useState(Date.now) 

// const navigate = useNavigate()

export const App = () => {
  return (
    <Provider store={store}>
      {/* <Countdown
                style={{ fontSize: 20 }}
                date={startTime + 60000}
                intervalDelay={0}
                precision={3}
                onComplete={() => history.push('/summary')} /> */}
    <div className="mainContainer">
      <Header />
      <TimerInput />
      <div className="scoreContainer">
        <PlayerList />
        <PlayerInput />
      </div>
      <StartOver />
    </div>
    </Provider>
  )
}

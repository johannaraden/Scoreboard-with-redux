import React from 'react'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { Scoreboard } from './reducers/reducer'
import { PlayerInput } from './components/PlayerInput'
import { PlayerList } from './components/PlayerList'

const reducer = combineReducers({
  Scoreboard: Scoreboard.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
    <div>
      Find me in src/app.js!
      <PlayerList />
      <PlayerInput />
    </div>
    </Provider>
  )
}

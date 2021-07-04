import React from 'react'
import { combineReducers, configureStore, createStore } from '@reduxjs/toolkit'
import { applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { Scoreboard } from './reducers/reducer'
import { PlayerInput } from './components/PlayerInput'
import { PlayerList } from './components/PlayerList'
import { Header } from './components/Header'
import 'styles/Main.css' 

const reducer = combineReducers({
  Scoreboard: Scoreboard.reducer
})

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export const App = () => {
  return (
    <Provider store={store}>
    <div className="mainContainer">
      <Header />
      <div className="scoreContainer">
        <PlayerList />
        <PlayerInput />
      </div>
    </div>
    </Provider>
  )
}

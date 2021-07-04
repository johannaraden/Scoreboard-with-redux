import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Scoreboard } from '../reducers/reducer'
import { increment, decrement } from '../reducers/reducer'
import '../styles/PlayerList.css'


export const Counter = (props) => {
  const playerList = useSelector((store) => store.Scoreboard.players)
  const {score, name, itemIndex} = props
  const dispatch = useDispatch()

  const greeting = () => {
    console.log('this is a ping' + score + name)
  }

  return (
    <div className='counter'>
      <button
        onClick={greeting}
      >-</button>
      <span className='currentScore'> {name} + {score}</span>
      <button 
        onClick={() => dispatch(Scoreboard.actions.increment(itemIndex))}
        // onClick={increment}
      >+</button>
    </div>
  )
}
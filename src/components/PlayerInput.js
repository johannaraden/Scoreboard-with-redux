import React, { useState } from 'react'
import { useDispatch } from 'react-redux' 
import { Scoreboard } from '../reducers/reducer'



export const PlayerInput = ({id}) => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(Scoreboard.actions.addPlayer({
      id: id,
      playerName: {
        name: inputValue
      }
    })
    )
    setInputValue('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Hello from PlayerInput</h2>
      <input
        type='text'
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        placeholder= 'type your name'
      ></input>
      <input
        type='submit'
        value='add player'
      ></input>
    </form>
  )

}
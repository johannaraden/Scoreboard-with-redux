import React, { useState } from 'react'
import { useDispatch } from 'react-redux' 
import { Scoreboard } from '../reducers/reducer'
import '../styles/PlayerList.css'


export const StartOver = () => {
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(Scoreboard.actions.reset()
    )
  }
  return (
      <button onClick={handleSubmit}>Start over</button>
  )

}
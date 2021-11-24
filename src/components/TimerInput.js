import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Scoreboard } from '../reducers/reducer'
import '../styles/PlayerList.css'
import { StartButton } from './StartButton'


export const TimerInput = () => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')
  const timer = useSelector((store) => store.Scoreboard.timer.amountOfTime)


  const handleSubmit = e => {
    e.preventDefault()
    console.log(inputValue)
    dispatch(Scoreboard.actions.addTimer({
      timer: {
        amountOfTime: inputValue,
      },
    })
    )
    setInputValue('')
  }
  return (
    <section>
    {timer ? 
    
    <div className='startContainer'>
      <p className='startText'>{timer}</p>
      <StartButton />
    </div>
    : 
    <form className="formInput" onSubmit={handleSubmit}>
    {/* <p>Put in the preferred amount of time</p> */}
    <input
      type='text'
      value={inputValue}
      onChange={e => setInputValue(e.target.value)}
      placeholder= 'time to speak(minutes)'
    ></input>
    <input
      type='submit'
      value='submit'
    ></input>
  </form>
  }
 
    </section>
  )

}
import React from 'react'
import { useSelector } from 'react-redux'
import { Counter } from './Counter'
import '../styles/PlayerList.css'

export const PlayerList = (props) => {
  const playerList = useSelector((store) => store.Scoreboard.players)

    return (
      <div className="playerContainer">
        <h2>Players</h2>
        <ul>
          {console.log(playerList)}
          {playerList.items.map((item, index) => (
            <li className='listItem' key={index}>
              <button className="remove-player" onClick={() => props.removePlayer(props.id)}>✖</button>
              <p className='playerName'>{item.name}</p>
              <Counter score={item.score}/>
            </li>
          ))}
        </ul>
      </div>
    )
}

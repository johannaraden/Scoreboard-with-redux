import React from 'react'
import { useSelector } from 'react-redux'
import { Counter } from './Counter'
import '../styles/PlayerList.css'

export const PlayerList = () => {
  const playerList = useSelector((store) => store.Scoreboard.players)

    return (
      <div>
        Spelare:
        <ul>
          {console.log(playerList)}
          {playerList.items.map((item, index) => (
            <li className='' key={index}>{item.name}<Counter /></li>
          ))}
        </ul>
        
      </div>
    )
}

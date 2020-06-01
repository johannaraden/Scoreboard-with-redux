import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  counter: {
    running: false,
  },
  players: {
    items: [
      {name: 'Alena'},
      {name: 'Bob'}
    ]
  }
}


export const Scoreboard = createSlice({
  name: 'Scoreboard',
  initialState: initialState,
  reducers: {
    //addPlayer
    addPlayer: (state, action) => {
      state.players.items.push(action.payload.playerName)
    }
    //addPoint
    //reducePoint
  }

})
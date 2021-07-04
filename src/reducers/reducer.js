import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  counter: {
    running: false,
  },
  players: {
    items: [
      {name: 'Alena', score: 0, itemIndex: 0},
      {name: 'Bob', score: 0, itemIndex: 1}
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
    },
    increment: (state, action) => {
      console.log('you got all the way here INCREMENT')
      // state.players.items.push(playerName == 'Hanna')
      // const { itemIndex } = action.payload
      state.players.items.score +=1;
    },
    decrement: (state, action) => {
      console.log('you got all the way here DECREMENT')
      const { itemIndex } = action.payload
      state.players.items[itemIndex].score +=1;
    }

  }

})

export const { increment, decrement } = Scoreboard
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  counter: {
    running: false,
  },
  timer: {
    amountOfTime: 0,
  },
  players: {
    items: [
      { name: 'Alena', score: 0, itemIndex: 0, isTurn: false },
      { name: 'Bob', score: 0, itemIndex: 1, isTurn: false }
    ]
  }
}

export const Scoreboard = createSlice({
  name: 'Scoreboard',
  initialState,
  reducers: {
    // addPlayer
    addPlayer: (state, action) => {
      state.players.items.push(action.payload.playerName)
    },
    // addTimer
    addTimer: (state, action) => {
      // state.timer.amountOfTime.push(action.payload.numberOfSeconds)
      console.log('you got all the way here addTimer')
      console.log(action.payload.timer.amountOfTime)
      // state.players.items.push(action.payload.amountOfTime)
      state.timer.amountOfTime += action.payload.timer.amountOfTime
      console.log('the new time is' + state.timer.amountOfTime)

    },
    countUp(state) {
      state.amountOfTime++
    },
    reset(state) {
      state.timer.amountOfTime = 0
      console.log('the new time is' + state.timer.amountOfTime)
    },
    increment: (state, action) => {
      console.log('you got all the way here INCREMENT')
      // state.players.items.push(playerName == 'Hanna')
      // const { itemIndex } = action.payload
      state.players.items.score += 1;
    },
    decrement: (state, action) => {
      console.log('you got all the way here DECREMENT')
      const { itemIndex } = action.payload
      state.players.items[itemIndex].score += 1;
    },
    goToNextPlayer: (state) => {
      if (state.currentQuesionIndex + 1 === state.questions.length) {
        state.quizOver = true
      } else {
        state.currentQuesionIndex += 1
      }
    }
  }
})

export const { increment, decrement } = Scoreboard
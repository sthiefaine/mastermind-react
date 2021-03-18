import { createSlice } from '@reduxjs/toolkit';

export const timerSlice = createSlice({
  name: 'timer',
  initialState: {
    timerOn: false,
    timerStart: 0,
    timerTime: 0
  },
  reducers: {

    setTimerOn: (state, action)=> {
        state.timerOn = action.payload;
    },
    startTimer: (state, action) => {
        state.timerOn = true;
        state.timerStart = Date.now() - state.timerTime;
        state.timerId = action.payload.timerId;
    },

    stopTimer: (state, action) => {
        state.timerOn = false;
        state.timerStart = 0;
    },

    resetTimer: (state, action) => {
        state.timerOn = false;
        state.timerStart = 0;
        state.timerTime = 0;
    },
    tick: (state, action) => {
        state.timerTime = state.timerTime + 1

    },
  },
});

export const { 
    startTimer,
    tick,
    setTimerOn,
    stopTimer,
    resetTimer,
} = timerSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const ExempleAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch();
  }, 1000);
};

export default timerSlice.reducer;

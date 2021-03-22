import { createSlice } from "@reduxjs/toolkit";

// import { current } from "@reduxjs/toolkit";

export const mastermindSlice = createSlice({
  name: "mastermind",
  initialState: {
    possibilities: 4,
    tries: 10,
    userWin: false,
    colorPalette: false,
    jeu: [],
    previousPlay: [],
    help: [],
    helpRandom: [],
    userClick: null,
    resetSolution: false,
    solution: [],
  },
  reducers: {
    jeuModel: (state, action) => {
      state.jeuModel = action.payload;
    },

    jeu: (state, action) => {
      state.jeu[state.userClick] = action.payload.color;
    },

    previousPlay: (state, action) => {
      state.previousPlay[state.previousPlay.length] = {
        timer: {
          h: action.payload.h,
          m: action.payload.m,
          s: action.payload.s,
        },
        id: state.previousPlay.length,
        colors: state.jeu,
      };

      state.jeu = [];
      state.userClick = null;
    },

    help: (state, action) => {
      state.help[action.payload.id] = action.payload.value;
      state.helpRandom[action.payload.id] = action.payload.valueRandom;
    },

    solution: (state, action) => {
      state.solution = action.payload;
    },

    userWin: (state, action) => {
      state.userWin = !state.userWin;
    },

    colorPalette: (state, action) => {
      state.colorPalette =
        action.payload === true ? action.payload : !state.colorPalette;
    },

    userClick: (state, action) => {
      state.userClick = action.payload.id;
    },
    cleanGame: (state) => {
      state.userWin = null;
      state.solution = [];
      state.previousPlay = [];
      state.help = [];
      state.helpRandom = [];
      state.resetSolution = !state.resetSolution;
      state.colorPalette = false;
      state.jeu = [];
    },

    incrementPossibilities: (state, action) => {
      const newPossibilities = state.possibilities + 1;

      if (newPossibilities <= 6 && newPossibilities >= 3) {
        state.possibilities = newPossibilities;
      }
    },

    decrementPossibilities: (state, action) => {
      const newPossibilities = state.possibilities - 1;

      if (newPossibilities <= 6 && newPossibilities >= 3) {
        state.possibilities = newPossibilities;
      }
    },

    incrementTries: (state, action) => {
      const newTries = state.tries + 1;

      if (newTries <= 15 && newTries >= 5) {
        state.tries = newTries;
      }
    },

    decrementTries: (state, action) => {
      const newTries = state.tries - 1;

      if (newTries <= 15 && newTries >= 5) {
        state.tries = newTries;
      }
    },

    resetSettings: (state, action) => {
      state.tries = 10;
      state.possibilities = 4;
    },
  },
});

export const {
  solution,
  jeuModel,
  jeu,
  previousPlay,
  help,
  userWin,
  colorPalette,
  userClick,
  cleanGame,
  decrementPossibilities,
  incrementPossibilities,
  decrementTries,
  incrementTries,
  resetSettings,
} = mastermindSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(solution(amount));
  }, 1000);
};

export default mastermindSlice.reducer;

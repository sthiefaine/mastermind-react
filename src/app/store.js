import { configureStore } from "@reduxjs/toolkit";

// reducers List
import timer from "../features/timer";
import mastermind from "../features/mastermind";

// Pass in Redux store's state to save it to the user's browser local storage
const saveStorageData = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxModel", serializedState);
  } catch {
    // We'll just ignore write errors
  }
};

// Loads the state and returns an object that can be provided as the
// preloadedState parameter of store.js's call to configureStore
const getStorageData = () => {
  try {
    const serializedState = localStorage.getItem("reduxModel");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

const preloadedState = getStorageData();

// READ: https://redux.js.org/recipes/configuring-your-store
export const store = configureStore({
  reducer: {
    timer,
    mastermind,
  },
  extraReducers: {},
  devTools: process.env.NODE_ENV !== "production",
  enhancer: {},
  preloadedState: preloadedState,
});

export default store;

// We'll subscribe to state changes, saving the store's state to the browser's
// local storage. We'll throttle this to prevent excessive work.
store.subscribe(() => {
  setTimeout(() => {
    saveStorageData({
      mastermind: store.getState().mastermind,
      timer: store.getState().timer,
    });
  }, 1000);
});

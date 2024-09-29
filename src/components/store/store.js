// src/store/index.js
import { configureStore } from "@reduxjs/toolkit";
import habitsReducer from "./slice";  // Import the habits slice

const store = configureStore({
  reducer: {
    habits: habitsReducer  // Register the habits reducer
  },
});

export default store;

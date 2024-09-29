// src/store/slice.js
import { createSlice } from "@reduxjs/toolkit";

const habitSlice = createSlice({
  name: "habits",
  initialState: {
    habits: []  // Holds all habits
  },
  reducers: {
    addHabit: (state, action) => {
      state.habits.push(action.payload);  // Add habit to the array
    },
    // Define other reducers if needed like delete, complete, cancel, etc.
  }
});

export const { addHabit } = habitSlice.actions;
export default habitSlice.reducer;

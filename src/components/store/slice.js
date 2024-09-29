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

    deletHabit: (state, action) => {
      state.habits = state.habits.filter((_, index) => index !== action.payload)
    },
    updateHabitStatus: (state, action) => {
      const { index, status } = action.payload;
      if (state.habits[index]) {
        state.habits[index].situation = status; // Update the status of the habit
      }
    },
  }
});

export const { addHabit, deletHabit,updateHabitStatus } = habitSlice.actions;
export default habitSlice.reducer;

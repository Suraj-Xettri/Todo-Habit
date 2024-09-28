import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
    name:"habits",
    initialState:{
        habit: null
    },
    reducers:{
        addHabit : () => {}
    }
})

export const {addHabit} = Slice.actions;
export default Slice.reducer;
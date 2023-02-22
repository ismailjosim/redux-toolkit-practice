import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    count: 0,
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.count += action.payload;
        },
        decrement: (state, action) => {
            state.count -= action.payload;
        }
    }


})

// export all the action
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer; // send to the store.

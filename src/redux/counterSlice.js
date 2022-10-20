import { createSlice } from "@reduxjs/toolkit";

//initialstate
const initialState = {
    counter: 0,


}

//reducer
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        //increment
        increment: (state,action) => {
            state.counter=state.counter+action.payload
        },

        //decrement
        decrement: (state, action) => {
            if (state.counter > 0) {
                state.counter=state.counter-action.payload

            } else {
                state.counter=0

            }

        },
    }
})


//action
export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer
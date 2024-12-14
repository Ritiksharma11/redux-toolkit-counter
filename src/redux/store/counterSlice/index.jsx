import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: 1,
    reducers: {
        increaseBy1: (state) => state + 1,
        decreaseBy1: (state) => state - 1,
        increaseBy5: (state) => state + 5,
        decreaseBy5: (state) => state - 5,
    }
})

export const { increaseBy1, decreaseBy1, increaseBy5, decreaseBy5 } = counterSlice.actions

export default counterSlice.reducer
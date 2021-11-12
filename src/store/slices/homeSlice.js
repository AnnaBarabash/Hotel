import { createSlice } from '@reduxjs/toolkit'

export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    test: '123',
  },
  reducers: {
    setTest(state, action) {
      state.test = action.payload
    },
  },
})

import { createSlice } from '@reduxjs/toolkit'
import { assign } from 'lodash'

import { res } from '../../shared/mocks/hotelList'

export const hotelListSlice = createSlice({
  name: 'hotelList',
  initialState: res,
  reducers: {
    setFilters(state, action) {
      state.draftFilters = assign(state.draftFilters, action.payload)
    },
  },
})

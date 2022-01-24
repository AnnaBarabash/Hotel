import { createSlice } from '@reduxjs/toolkit'
import { merge } from 'lodash'

import { res } from '../../shared/mocks/hotelList'

export const hotelListSlice = createSlice({
  name: 'hotelList',
  initialState: res,
  reducers: {
    setFilters(state, action) {
      state.draftFilters = merge(state.draftFilters, action.payload)
    },
  },
})

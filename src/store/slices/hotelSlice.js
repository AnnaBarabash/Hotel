import { createSlice } from '@reduxjs/toolkit'

import { res as hotelDetails } from '../../shared/mocks/hotelDetails'
import { res as hotelPhotos } from '../../shared/mocks/hotelPhotos'
import { res as hotelReviews } from '../../shared/mocks/hotelReviews'

export const hotelSlice = createSlice({
  name: 'hotel',
  initialState: {
    hotelDetails,
    hotelPhotos,
    hotelReviews,
  },
  reducers: {},
})

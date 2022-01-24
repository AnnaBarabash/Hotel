import { homeSlice } from './slices/homeSlice'
import { hotelListSlice } from './slices/hotelListSlice'
import { hotelSlice } from './slices/hotelSlice'

export const rootReducer = {
  home: homeSlice.reducer,
  hotelList: hotelListSlice.reducer,
  hotel: hotelSlice.reducer,
}

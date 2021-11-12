import { homeSlice } from './slices/homeSlice'

export const rootReducer = {
  home: homeSlice.reducer,
}

export const PERSONS_COUNTER = 'persons'
export const ROOMS_COUNTER = 'rooms'
export const CHECK_IN = 'chekIn'
export const CHECK_OUT = 'ckekOut'

export const TOP_CRITERIAS_FILTER_INITIAL_STATE = {
  FREECANCEL: false,
  FREEWLAN: false,
  CARPARKDIRECTLYATHOTEL: false,
  BREAKFAST_INCLUDED: false,
}

export const HOTEL_STARS_FILTER_INITIAL_STATE = []

export const GUEST_RATING_FILTER_INITIAL_STATE = {
  guestRatingMin: undefined,
}

export const SORT_BY = [
  { key: 'BEST_SELLER', value: 'Hotel De Suggestion' },
  { key: 'DISTANCE_FROM_LANDMARK', value: 'Distance' },
  { key: 'GUEST_RATING', value: 'Guest rating' },
]

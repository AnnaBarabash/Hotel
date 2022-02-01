import { get } from 'lodash'

export function getHotelList(state) {
  return get(state, ['hotelList', 'data', 'body', 'searchResults', 'results'])
}

export function getDraftFilters(state) {
  return get(state, ['hotelList', 'draftFilters'])
}

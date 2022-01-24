import { get } from 'lodash'

export function getHotelList(state) {
  return get(state, ['hotelList', 'data', 'body', 'searchResults', 'results'])
}

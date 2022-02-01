import { get } from 'lodash'

export function getHotelDetails(state) {
  return get(state, ['hotel', 'hotelDetails', 'data', 'body'])
}

export function getHotelName(state) {
  return get(state, [
    'hotel',
    'hotelDetails',
    'data',
    'body',
    'propertyDescription',
    'name',
  ])
}

export function getHotelTransportLocations(state) {
  return get(state, [
    'hotel',
    'hotelDetails',
    'transportation',
    'transportLocations',
  ])
}

export function getHotelPhotos(state) {
  return get(state, ['hotel', 'hotelPhotos'])
}

export function getHotelReviews(state) {
  return get(state, [
    'hotel',
    'hotelReviews',
    'data',
    'reviews',
    'body',
    'reviewContent',
    'reviews',
    'hermes',
    'groups',
  ])
}

export function getHotelReviewsOverall(state) {
  return get(state, [
    'hotel',
    'hotelReviews',
    'data',
    'reviews',
    'body',
    'reviewContent',
    'overall',
  ])
}
